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
# Capture the output: every deploy gets its own immutable https://<hash>.<project>.pages.dev,
# and that URL is the only one guaranteed to serve THIS build.
DEPLOY_LOG="$(mktemp)"
CI=1 "$WRANGLER" pages deploy dist --project-name "$PROJECT" --branch "$BRANCH" --commit-dirty=true 2>&1 | tee "$DEPLOY_LOG"
BUILD_URL="$(grep -oE 'https://[a-f0-9]+\.'"$PROJECT"'\.pages\.dev' "$DEPLOY_LOG" | head -1)"
rm -f "$DEPLOY_LOG"

# Verify against the IMMUTABLE per-deployment URL, not the branch alias.
#
# The alias points at the newest deployment but its edge copies lag, so for a
# minute or two it serves the PREVIOUS build. On 2026-08-03 that misled me seven
# times in one session, and twice it nearly had me "fix" code that was already
# correct — a false failure is worse than a false pass, because it sends you to
# edit something that works. The hashed URL cannot do that: it is one build.
if [ -n "$BUILD_URL" ]; then
  URL="${BUILD_URL}${VERIFY_PATH}"
  echo "==> verify against THIS build: $URL"
  echo "    (alias $ALIAS may still serve the previous one for a minute)"
else
  URL="${ALIAS}${VERIFY_PATH}"
  echo "==> verify: $URL"
  echo "    WARNING: could not read the per-deployment URL from wrangler output;"
  echo "             falling back to the alias, which can serve a stale build."
fi

# --- what we are comparing against -------------------------------------------
# HTTP 200 is NOT enough on this site: it soft-404s unknown paths to the homepage
# with 200 text/html (see [INFRA:timeobserver137-site]), so a typo'd path returns
# a cheerful 200 for a page that does not exist. Compare the live byte count with
# the built file for the SAME path — the cheapest tell that what came back is the
# page asked for AND is the build just uploaded.
DIST_FILE="dist${VERIFY_PATH%/}/index.html"
[ "$VERIFY_PATH" = "/" ] && DIST_FILE="dist/index.html"

if [ ! -f "$DIST_FILE" ]; then
  echo "FAILED: no built page at $DIST_FILE — a 200 from this site would be its" >&2
  echo "        soft-404 serving the homepage, not '$VERIFY_PATH'." >&2
  exit 1
fi
dist_bytes=$(wc -c < "$DIST_FILE" | tr -d ' ')
echo "    dist:  $dist_bytes   ($DIST_FILE)"

# --- retry the WHOLE check, not just the status code -------------------------
# Fermat, 2026-08-01: the byte comparison used to sit OUTSIDE this loop, so it
# sampled once. Cloudflare propagates to edge PoPs one at a time, and five
# consecutive pulls of the same URL right after a deploy returned
# 114987 / 114987 / 114987 / 114987 / 114718 — the last one an older build from
# a PoP that had not caught up. A single sample landing on that PoP is a
# confident FALSE FAILURE. Anything that can be stale must be re-sampled, not
# just the thing that can be absent.
code="000"; bytes=0; ok=0
for i in 1 2 3 4 5 6 7 8; do
  read -r code bytes <<<"$(curl -s -o /dev/null -w '%{http_code} %{size_download}' -m 25 "$URL" || echo '000 0')"
  if [ "$code" = "200" ] && [ "$bytes" = "$dist_bytes" ]; then ok=1; break; fi
  echo "    (try $i) HTTP $code ${bytes}B — want 200 ${dist_bytes}B, retrying"
  sleep 4
done

echo "    HTTP:  $code   (want 200)"
echo "    bytes: $bytes"

if [ "$ok" != "1" ]; then
  echo "FAILED: $URL never served the build just uploaded." >&2
  echo "        live=$bytes dist=$dist_bytes after 8 tries." >&2
  echo "        Either the response is the soft-404 homepage (wrong path), or the" >&2
  echo "        deploy did not land. Both are real failures — do not ignore this." >&2
  exit 1
fi
echo "    match: live == dist ✓"

echo
echo "OK. Preview is live:"
echo "    $ALIAS"
echo "Production is unchanged. Confirm with:"
echo "    $WRANGLER pages deployment list --project-name $PROJECT   # Production row should still show branch 'main'"
