#!/usr/bin/env bash
# timeobserver137 — build + deploy to the PREVIEW environment + verify.
#
# Usage:  ./preview.sh [verify-path]
#   ./preview.sh                       # verifies /
#   ./preview.sh /zh/writing/<slug>/   # verifies that page too
#
# WHY THIS EXISTS (2026-08-01, Yeqiu: "一点点改一点点上线"):
#   Cloudflare Pages treats any --branch OTHER than the production branch (main)
#   as a preview deployment: separate URL, production untouched. Verified on
#   2026-08-01 — after deploying here, `wrangler pages deployment list` still
#   showed Production pinned to main/f0831bb from 3 days earlier.
#
#   Stable alias:  https://preview.timeobserver137.pages.dev
#   (always points at the newest deploy on the `preview` branch)
#
# RELATIONSHIP TO deploy.sh:
#   deploy.sh  → production (--branch main). Do not run it to "have a look".
#   preview.sh → this. Show Yeqiu the preview URL, get approval, THEN deploy.sh.
#
# DIFFERENCE FROM deploy.sh ON PURPOSE:
#   deploy.sh with no verify-path prints "skipping post-deploy verify" and
#   exits 0 — deployed, unverified, and indistinguishable from success.
#   Here verification is NOT optional: no argument just means "verify /".
#   There is no way to call this script and get a green result without a live
#   page having actually been fetched.
set -euo pipefail

PROJECT="${TO137_PROJECT:-timeobserver137}"
BRANCH="${TO137_PREVIEW_BRANCH:-preview}"
ALIAS="https://${BRANCH}.${PROJECT}.pages.dev"
VERIFY_PATH="${1:-/}"

cd "$(dirname "$0")"

# --- wrangler resolution -----------------------------------------------------
# NOT `npx --no-install wrangler`: that resolves the LATEST version and fails
# when npm publishes a new one, because the npx cache only holds the old build.
# Measured 2026-08-01: cache had 4.115.0, npm latest had moved to 4.118.0, and
# `npx --no-install wrangler --version` died with "missing packages". deploy.sh
# still uses that form and will fail the same way until it is fixed.
find_wrangler() {
  if [ -x "./node_modules/.bin/wrangler" ]; then echo "./node_modules/.bin/wrangler"; return 0; fi
  if command -v wrangler >/dev/null 2>&1; then command -v wrangler; return 0; fi
  local c
  for c in "$HOME"/AppData/Local/npm-cache/_npx/*/node_modules/.bin/wrangler \
           "$HOME"/.npm/_npx/*/node_modules/.bin/wrangler; do
    [ -x "$c" ] && { echo "$c"; return 0; }
  done
  return 1
}
WRANGLER="$(find_wrangler)" || {
  echo "ERROR: no wrangler found (node_modules/.bin, PATH, or npx cache)." >&2
  echo "       Install one:  npm i -D wrangler" >&2
  exit 3
}

[ -f .env ] || { echo "ERROR: .env missing — CLOUDFLARE_API_TOKEN lives there." >&2; exit 3; }
set -a; . ./.env; set +a
[ -n "${CLOUDFLARE_API_TOKEN:-}" ] || { echo "ERROR: CLOUDFLARE_API_TOKEN not set by .env" >&2; exit 3; }

echo "==> wrangler: $WRANGLER"
echo "==> build"
npm run build

echo "==> deploy to PREVIEW (branch: $BRANCH — production branch 'main' is not touched)"
CI=1 "$WRANGLER" pages deploy dist --project-name "$PROJECT" --branch "$BRANCH" --commit-dirty=true

URL="${ALIAS}${VERIFY_PATH}"
echo "==> verify: $URL"

# Retry: a fresh deploy needs a moment to reach the edge, and this site
# soft-404s unknown paths to the homepage (200 text/html) until it propagates.
code="000"; bytes=0
for i in 1 2 3 4 5; do
  read -r code bytes <<<"$(curl -s -o /dev/null -w '%{http_code} %{size_download}' -m 25 "$URL" || echo '000 0')"
  [ "$code" = "200" ] && [ "$bytes" -gt 0 ] && break
  echo "    (try $i) HTTP $code ${bytes}B — retrying"
  sleep 4
done

echo "    HTTP:  $code   (want 200)"
echo "    bytes: $bytes"

if [ "$code" != "200" ] || [ "$bytes" -le 0 ]; then
  echo "FAILED: preview did not serve $URL" >&2
  exit 1
fi

# --- HTTP 200 is NOT enough on this site -------------------------------------
# It soft-404s unknown paths to the homepage with 200 text/html (documented in
# [INFRA:timeobserver137-site]). So a typo'd path returns a cheerful 200 for a
# page that does not exist. Compare the live byte count against the built file
# for the SAME path — the cheapest tell that what came back is the page asked
# for and is the build just uploaded.
DIST_FILE="dist${VERIFY_PATH%/}/index.html"
[ "$VERIFY_PATH" = "/" ] && DIST_FILE="dist/index.html"

if [ ! -f "$DIST_FILE" ]; then
  echo "FAILED: no built page at $DIST_FILE — the 200 above is this site's" >&2
  echo "        soft-404 serving the homepage, not '$VERIFY_PATH'." >&2
  exit 1
fi

dist_bytes=$(wc -c < "$DIST_FILE" | tr -d ' ')
echo "    dist:  $dist_bytes   ($DIST_FILE)"
if [ "$bytes" != "$dist_bytes" ]; then
  echo "FAILED: live bytes ($bytes) != built bytes ($dist_bytes)." >&2
  echo "        Either the edge is still serving an older build (retry), or the" >&2
  echo "        response is the soft-404 homepage rather than '$VERIFY_PATH'." >&2
  exit 1
fi
echo "    match: live == dist ✓"

echo
echo "OK. Preview is live:"
echo "    $ALIAS"
echo "Production is unchanged. Confirm with:"
echo "    $WRANGLER pages deployment list --project-name $PROJECT   # Production row should still show branch 'main'"
