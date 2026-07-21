#!/usr/bin/env bash
# timeobserver137 — build + deploy + post-deploy verify.
#
# Usage:  ./deploy.sh [verify-path]
#   ./deploy.sh /zh/writing/symmetry-monster-ep7/
#   ./deploy.sh                       # deploy only, no verify
#
# WHY THIS EXISTS:
#   The Cloudflare Pages project `timeobserver137` is NOT git-connected
#   (Git Provider: No). `git push` does NOT trigger any build/deploy.
#   Deploy = build locally + upload with wrangler. This wraps both, then
#   verifies the LIVE page (not just "deploy complete").
#   (The repo's netlify.toml is vestigial — ignore it; hosting is Cloudflare.)
set -euo pipefail

PROJECT="${TO137_PROJECT:-timeobserver137}"
DOMAIN="${TO137_DOMAIN:-https://timeobserver137.cyou}"
VERIFY_PATH="${1:-}"

cd "$(dirname "$0")"

echo "==> build"
npm run build

echo "==> deploy ($PROJECT)"
CI=1 npx --no-install wrangler pages deploy dist --project-name "$PROJECT" --branch main --commit-dirty=true

if [ -z "$VERIFY_PATH" ]; then
  echo "==> no verify-path given; skipping post-deploy verify."
  echo "    (pass one, e.g.  ./deploy.sh /zh/writing/<slug>/  )"
  exit 0
fi

URL="$DOMAIN$VERIFY_PATH"
echo "==> post-deploy verify: $URL"

# Real page: retry a few times to let CF propagate to the edge.
html=""; code="000"
for i in 1 2 3 4 5; do
  html=$(curl -s -m 25 "$URL" || true)
  code=$(curl -s -o /dev/null -w '%{http_code}' -m 25 "$URL" || echo 000)
  [ "$code" = "200" ] && break
  echo "    (try $i) HTTP $code — retrying"
done
echo "    HTTP:        $code            (want 200)"
echo "    katex-error: $(printf '%s' "$html" | grep -c 'katex-error' || true)            (want 0)"
echo "    noindex:     $(printf '%s' "$html" | grep -ci 'noindex' || true)            (0 = published, 1 = draft/preview)"

# Embedded assets: content-type check, with retry on soft-404 (200 text/html).
# CF soft-404s unknown paths to the homepage; a FRESH asset URL hit before it
# propagates caches text/html for up to 7 days (s-maxage=604800). It self-heals
# in 1-2 retries once the file lands; ?v=N on the src also busts it.
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

echo "==> done. If any asset shows text/html above, re-run verify or version its URL."
