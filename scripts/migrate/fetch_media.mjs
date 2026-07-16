/**
 * Referenced-only media fetcher (Task 4.2).
 *
 * Reads migration/input/media_manifest.txt (212 asset URLs actually referenced
 * by the 18+1 published pages — src/srcset/href extraction, spec §7.4) and
 * mirrors each into public/ preserving the original /content/images/... path,
 * so migrated markdown needs zero URL rewriting and external hotlinks keep
 * working after cutover.
 *
 * Red lines (spec §7.4): NEVER bulk-copy ghost-content; GIFs are written
 * byte-verbatim (no pipeline — they are served as static passthrough assets).
 */
import fs from 'node:fs';
import path from 'node:path';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const SITE = 'https://timeobserver137.cyou';

/** Map an asset URL to its local mirror path under rootDir. */
export function localPathFor(url, rootDir) {
  const u = new URL(url);
  return path.join(rootDir, u.pathname.replace(/^\//, ''));
}

/**
 * Fetch one asset. Skips when the file already exists with matching size.
 * @returns {Promise<{ok:boolean, path:string, expectedBytes:number|null, skipped?:boolean, error?:string}>}
 */
export async function fetchOne(url, rootDir) {
  const dest = localPathFor(url, rootDir);
  fs.mkdirSync(path.dirname(dest), { recursive: true });

  // HEAD first: size for skip-check + integrity
  let expectedBytes = null;
  try {
    const head = await fetch(url, { method: 'HEAD' });
    if (head.ok) {
      const len = head.headers.get('content-length');
      expectedBytes = len ? Number(len) : null;
    }
  } catch {
    /* HEAD failure is non-fatal; GET decides */
  }

  if (expectedBytes && fs.existsSync(dest) && fs.statSync(dest).size === expectedBytes) {
    return { ok: true, path: dest, expectedBytes, skipped: true };
  }

  const res = await fetch(url);
  if (!res.ok) return { ok: false, path: dest, expectedBytes, error: `HTTP ${res.status}` };
  await pipeline(Readable.fromWeb(res.body), fs.createWriteStream(dest));
  const size = fs.statSync(dest).size;
  if (expectedBytes && size !== expectedBytes) {
    return { ok: false, path: dest, expectedBytes, error: `size mismatch ${size}≠${expectedBytes}` };
  }
  return { ok: true, path: dest, expectedBytes: expectedBytes ?? size };
}

/** Fetch every manifest URL with small concurrency; returns summary rows. */
export async function fetchAll(manifestFile, rootDir, concurrency = 6) {
  const urls = fs
    .readFileSync(manifestFile, 'utf8')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  const results = [];
  let i = 0;
  async function worker() {
    while (i < urls.length) {
      const url = urls[i++];
      try {
        const r = await fetchOne(url, rootDir);
        results.push({ url, ...r });
        if (!r.ok) console.error(`FAIL ${url}: ${r.error}`);
      } catch (e) {
        results.push({ url, ok: false, error: String(e).slice(0, 120) });
        console.error(`FAIL ${url}: ${e}`);
      }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  return results;
}

// ---------- CLI ----------
const isMain = process.argv[1] && path.basename(process.argv[1]) === 'fetch_media.mjs';
if (isMain) {
  const repo = process.cwd();
  const manifest = path.join(repo, 'migration/input/media_manifest.txt');
  const root = path.join(repo, 'public');
  const t0 = Date.now();
  const rows = await fetchAll(manifest, root);
  const ok = rows.filter((r) => r.ok);
  const failed = rows.filter((r) => !r.ok);
  const skipped = rows.filter((r) => r.skipped);
  const bytes = ok.reduce((s, r) => s + (r.expectedBytes ?? 0), 0);
  const gifs = ok.filter((r) => r.url.toLowerCase().endsWith('.gif'));
  console.log('---');
  console.log(`fetched ${ok.length}/${rows.length} (${skipped.length} skipped-existing) in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
  console.log(`total ${(bytes / 1024 / 1024).toFixed(1)} MB · GIFs ${gifs.length} (${(gifs.reduce((s, r) => s + r.expectedBytes, 0) / 1024 / 1024).toFixed(1)} MB)`);
  if (failed.length) {
    console.log(`FAILURES: ${failed.length}`);
    failed.forEach((f) => console.log(`  ${f.url} — ${f.error}`));
    process.exitCode = 1;
  }
}
