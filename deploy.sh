#!/usr/bin/env bash
# timeobserver137 — build + deploy to PRODUCTION + post-deploy verify.
#
# Usage:  ./deploy.sh <verify-path>
#   ./deploy.sh /                              # verify the homepage
#   ./deploy.sh /zh/writing/symmetry-monster-ep7/
#   ./deploy.sh --no-verify                    # deploy without verifying (explicit)
#
# WHY THIS EXISTS:
#   The Cloudflare Pages project `timeobserver137` is NOT git-connected
#   (Git Provider: No). `git push` does NOT trigger any build/deploy.
#   Deploy = build locally + upload with wrangler. This wraps both, then
#   verifies the LIVE page (not just "deploy complete").
#   (The repo's netlify.toml is vestigial — ignore it; hosting is Cloudflare.)
#
#   For a look-before-you-ship, use ./preview.sh — it deploys to the `preview`
#   branch and never touches production.
#
# 2026-08-01 — three changes, each closing a way this script could report
# success while nothing was verified:
#
#   1. NO ARGUMENT IS NOW AN ERROR (exit 2), not a silent skip.
#      It used to print "skipping post-deploy verify" and `exit 0` — a deploy
#      with zero verification and a clean exit code, indistinguishable from
#      "deployed and verified". Skipping is still allowed, but you have to
#      type --no-verify: the unsafe path requires an explicit choice, and it
#      stays visible in shell history.
#      (Deliberately NOT "default to verifying /": verifying a page you did
#      not change is a green receipt that proves nothing about your change —
#      worse than an honest skip, because it reads as verified.)
#
#   2. wrangler is resolved, not assumed. `npx --no-install wrangler` asks npm
#      for the LATEST version and fails if the cache holds anything else — so
#      an upstream release breaks deploys with no local change. It did:
#      cache had 4.115.0, npm wanted 4.118.0, deploy died.
#      find_wrangler() prefers the pinned devDependency and falls back.
#
#   3. HTTP 200 is not evidence the page exists. This site soft-404s unknown
#      paths to the homepage with 200 text/html, so a typo'd path returns a
#      cheerful 200. Verification compares LIVE byte count against the built
#      file for the SAME path.
set -euo pipefail

PROJECT="${TO137_PROJECT:-timeobserver137}"
DOMAIN="${TO137_DOMAIN:-https://timeobserver137.cyou}"

cd "$(dirname "$0")"

# --- argument: exactly three branches, none of them silent -------------------
ARG="${1:-}"
VERIFY_PATH=""
case "$ARG" in
  "")
    echo "ERROR: no verify-path given." >&2
    echo "  ./deploy.sh /                   # verify the homepage" >&2
    echo "  ./deploy.sh /zh/writing/<slug>/ # verify that page" >&2
    echo "  ./deploy.sh --no-verify         # deploy without verifying (explicit)" >&2
    echo "Refusing to deploy unverified by accident." >&2
    exit 2
    ;;
  --no-verify)
    VERIFY_PATH=""
    ;;
  /*)
    VERIFY_PATH="$ARG"
    ;;
  *)
    echo "ERROR: verify-path must start with '/' (got: $ARG)" >&2
    echo "       e.g. /zh/writing/<slug>/  — not zh/writing/<slug>/" >&2
    exit 2
    ;;
esac

# --- wrangler: resolve, don't assume ----------------------------------------
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
  echo "       Install the pinned one:  npm i" >&2
  exit 3
}

[ -f .env ] || { echo "ERROR: .env missing — CLOUDFLARE_API_TOKEN lives there." >&2; exit 3; }
set -a; . ./.env; set +a
[ -n "${CLOUDFLARE_API_TOKEN:-}" ] || { echo "ERROR: CLOUDFLARE_API_TOKEN not set by .env" >&2; exit 3; }

echo "==> wrangler: $WRANGLER ($("$WRANGLER" --version 2>/dev/null | head -1))"
echo "==> build"
npm run build

echo "==> deploy to PRODUCTION ($PROJECT, branch main)"
CI=1 "$WRANGLER" pages deploy dist --project-name "$PROJECT" --branch main --commit-dirty=true

if [ -z "$VERIFY_PATH" ]; then
  echo
  echo "==> --no-verify given: deployed WITHOUT verifying."
  echo "    Nothing here checked that the live page is the build just uploaded."
  exit 0
fi

URL="$DOMAIN$VERIFY_PATH"
echo "==> post-deploy verify: $URL"

# Retry: a fresh deploy needs a moment to reach the edge.
code="000"; bytes=0; html=""
for i in 1 2 3 4 5; do
  read -r code bytes <<<"$(curl -s -o /dev/null -w '%{http_code} %{size_download}' -m 25 "$URL" || echo '000 0')"
  [ "$code" = "200" ] && [ "$bytes" -gt 0 ] && break
  echo "    (try $i) HTTP $code ${bytes}B — retrying"
  sleep 4
done
html=$(curl -s -m 25 "$URL" || true)

echo "    HTTP:  $code   (want 200)"
echo "    bytes: $bytes"
if [ "$code" != "200" ] || [ "$bytes" -le 0 ]; then
  echo "FAILED: production did not serve $URL" >&2
  exit 1
fi

# --- HTTP 200 is NOT enough on this site ------------------------------------
# Unknown paths soft-404 to the homepage with 200 text/html, so a typo'd path
# returns a cheerful 200 for a page that does not exist. Compare the live byte
# count against the built file for the SAME path.
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

echo "    katex-error: $(printf '%s' "$html" | grep -c 'katex-error' || true)   (want 0)"
echo "    noindex:     $(printf '%s' "$html" | grep -ci 'noindex' || true)   (0 = published)"

# Embedded assets: content-type check, with retry on soft-404 (200 text/html).
echo "==> embedded /content assets (content-type; retries soft-404):"
printf '%s' "$html" | grep -oE 'src="/content/[^"]*"' | sed 's/src="//;s/"$//' | sort -u | while read -r u; do
  ct=""
  for j in 1 2 3 4; do
    ct=$(curl -s -I -m 20 "$DOMAIN$u" | grep -i '^content-type' | tr -d '\r' | awk '{print $2}')
    case "$ct" in text/html*) sleep 1;; *) break;; esac
  done
  flag=""; case "$ct" in text/html*) flag="   <-- CHECK: soft-404, retry or add ?v=N to the src";; esac
  echo "    ${ct:-<none>}  $(basename "$u")$flag"
done

echo "==> done."
