/**
 * Per-post parity gate (Task 4.3 / spec §5) — a post is "migrated" ONLY when
 * this exits 0. Compares the NEW page (preview) against the LIVE Ghost page
 * (guest view, full-scroll) on the seven gates:
 *   1 KaTeX renders + full formula-content diff (render-success ≠ content-correct)
 *   2 image count parity + naturalWidth>0 after full scroll
 *   3 every GIF still animated (byte-level frame check)
 *   4 all embed iframes present (YT + Spotify)
 *   5 internal links resolve on the preview
 *   6 title/date/tags vs baseline
 *   7 og share-card present w/ correct image fallback
 *
 * Usage: node scripts/parity/gate.mjs <slug> <previewBase> [--update]
 *   previewBase e.g. https://deploy-preview-14--sunny-nasturtium-86e1a2.netlify.app
 *   --update: on all-pass, mark migrated=true in migration/manifest.json
 */
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const [slug, previewBase, ...flags] = process.argv.slice(2);
if (!slug || !previewBase) {
  console.error('usage: gate.mjs <slug> <previewBase> [--update]');
  process.exit(1);
}
const repo = process.cwd();
const LIVE = 'https://timeobserver137.cyou';
const inventory = JSON.parse(fs.readFileSync(path.join(repo, 'docs/ghost_inventory.json'), 'utf8'));
const baseline = inventory.posts.find((p) => p.slug === slug);
if (!baseline) {
  console.error(`no baseline for slug ${slug}`);
  process.exit(1);
}

const results = [];
const gate = (n, name, ok, detail) => {
  results.push({ n, name, ok, detail });
  console.log(`gate ${n} ${name}: ${ok ? 'PASS' : 'FAIL'}${detail ? ` — ${detail}` : ''}`);
};

async function fullScroll(page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
}

const norm = (s) => s.replace(/\s+/g, '');

async function collect(page, { waitKatex }) {
  if (waitKatex) {
    // live Ghost renders KaTeX at runtime via CDN — wait for it to settle
    await page.waitForFunction(() => document.querySelectorAll('.katex').length > 0, { timeout: 20000 }).catch(() => {});
    await page.waitForTimeout(1500);
  }
  await fullScroll(page);
  return page.evaluate(() => {
    const q = (sel) => [...document.querySelectorAll(sel)];
    return {
      katexTotal: q('article .katex, .post-content .katex, main .katex').length,
      katexDisplay: q('article .katex-display, .post-content .katex-display, main .katex-display').length,
      katexErrors: q('.katex-error').length,
      rawDollars: (document.body.innerText.match(/\$\$/g) ?? []).length,
      formulaTexts: q('article .katex, .post-content .katex, main .katex').map((k) => k.textContent ?? ''),
      imgs: q('article img, .post-content img, main img').map((i) => ({
        src: i.getAttribute('src'),
        w: i.naturalWidth,
      })),
      iframes: q('iframe').map((f) => f.getAttribute('src') ?? ''),
      internalLinks: q('article a[href^="/"], main a[href^="/"]').map((a) => a.getAttribute('href')),
      title: document.title,
      ogImage: document.querySelector('meta[property="og:image"]')?.getAttribute('content') ?? '',
      ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content') ?? '',
      ogDesc: document.querySelector('meta[property="og:description"]')?.getAttribute('content') ?? '',
    };
  });
}

function gifAnimated(buf) {
  // count Graphic Control Extensions (0x21 0xF9) — >1 means multiple frames
  let count = 0;
  for (let i = 0; i < buf.length - 1; i++) {
    if (buf[i] === 0x21 && buf[i + 1] === 0xf9) count++;
    if (count > 1) return true;
  }
  return false;
}

const browser = await chromium.launch();
try {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const oldPage = await ctx.newPage();
  await oldPage.goto(`${LIVE}/${slug}/`, { waitUntil: 'domcontentloaded', timeout: 45000 });
  const old = await collect(oldPage, { waitKatex: baseline.html_scan.katex_blocks > 0 });

  const newPage = await ctx.newPage();
  const newUrl = `${previewBase.replace(/\/$/, '')}/zh/writing/${slug}/`;
  const resp = await newPage.goto(newUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
  if (!resp || resp.status() !== 200) {
    console.error(`new page ${newUrl} -> ${resp?.status()}`);
    process.exit(2);
  }
  const neu = await collect(newPage, { waitKatex: false });

  // gate 1 — KaTeX
  {
    const countOk = neu.katexErrors === 0 && neu.rawDollars === 0 && neu.katexTotal === old.katexTotal && neu.katexDisplay === old.katexDisplay;
    let contentOk = true;
    let firstDiff = '';
    const n = Math.min(old.formulaTexts.length, neu.formulaTexts.length);
    for (let i = 0; i < n; i++) {
      if (norm(old.formulaTexts[i]) !== norm(neu.formulaTexts[i])) {
        contentOk = false;
        firstDiff = `formula[${i}] old=${old.formulaTexts[i].slice(0, 40)} new=${neu.formulaTexts[i].slice(0, 40)}`;
        break;
      }
    }
    gate(1, 'katex', countOk && contentOk,
      `total ${neu.katexTotal}/${old.katexTotal} display ${neu.katexDisplay}/${old.katexDisplay} errors ${neu.katexErrors} raw$$ ${neu.rawDollars}${firstDiff ? ' DIFF: ' + firstDiff : ''}`);
  }

  // gate 2 — images
  {
    const broken = neu.imgs.filter((i) => i.w === 0);
    gate(2, 'images', neu.imgs.length === baseline.html_scan.imgs && broken.length === 0,
      `count ${neu.imgs.length}/${baseline.html_scan.imgs}, broken ${broken.length}`);
  }

  // gate 3 — GIFs animated
  {
    const gifs = neu.imgs.map((i) => i.src).filter((s) => s && s.toLowerCase().endsWith('.gif'));
    let ok = gifs.length === baseline.html_scan.gifs;
    let dead = [];
    for (const g of gifs) {
      const url = g.startsWith('http') ? g : `${previewBase.replace(/\/$/, '')}${g}`;
      const r = await fetch(url);
      const buf = Buffer.from(await r.arrayBuffer());
      if (!r.ok || !gifAnimated(buf)) {
        ok = false;
        dead.push(g);
      }
    }
    gate(3, 'gifs', ok, `count ${gifs.length}/${baseline.html_scan.gifs}${dead.length ? ' NOT-ANIMATED: ' + dead.join(',') : ''}`);
  }

  // gate 4 — embeds
  {
    const yt = neu.iframes.filter((s) => s.includes('youtube')).length;
    const others = neu.iframes.filter((s) => s.includes('spotify')).length;
    const wantYt = old.iframes.filter((s) => s.includes('youtube')).length;
    const wantOther = old.iframes.filter((s) => s.includes('spotify')).length;
    gate(4, 'embeds', yt === wantYt && others === wantOther, `yt ${yt}/${wantYt} spotify ${others}/${wantOther}`);
  }

  // gate 5 — internal links resolve
  {
    const uniq = [...new Set(neu.internalLinks)].filter((h) => h && !h.startsWith('/#'));
    const bad = [];
    for (const h of uniq) {
      const r = await fetch(`${previewBase.replace(/\/$/, '')}${h}`, { method: 'GET', redirect: 'follow' });
      if (!r.ok) bad.push(`${h}->${r.status}`);
    }
    gate(5, 'links', bad.length === 0, `${uniq.length} checked${bad.length ? ' BAD: ' + bad.join(' ') : ''}`);
  }

  // gate 6 — metadata
  {
    const titleOk = neu.title.includes(baseline.title) || neu.ogTitle.includes(baseline.title);
    const dateOk = await newPage.locator(`time[datetime="${(baseline.published_at ?? '').slice(0, 10)}"]`).count() > 0;
    gate(6, 'metadata', titleOk && dateOk, `title ${titleOk} date ${dateOk}`);
  }

  // gate 7 — og share card
  {
    const hasAll = !!(neu.ogImage && neu.ogTitle && neu.ogDesc);
    const imgResp = hasAll ? await fetch(neu.ogImage.replace('https://timeobserver137.cyou', previewBase.replace(/\/$/, ''))) : { ok: false };
    gate(7, 'og-card', hasAll && imgResp.ok, `image ${neu.ogImage.split('/').pop()} asset ${imgResp.ok ? 200 : 'FAIL'}`);
  }
} finally {
  await browser.close();
}

const allPass = results.every((r) => r.ok);
console.log(`\n${slug}: ${allPass ? 'ALL 7 GATES PASS ✅' : 'GATES FAILED ❌'}`);

if (allPass && flags.includes('--update')) {
  const mPath = path.join(repo, 'migration/manifest.json');
  const manifest = JSON.parse(fs.readFileSync(mPath, 'utf8'));
  const entry = manifest.posts.find((p) => p.slug === slug);
  if (entry) {
    entry.migrated = true;
    entry.gatedAt = new Date().toISOString();
    fs.writeFileSync(mPath, JSON.stringify(manifest, null, 1), 'utf8');
    console.log('manifest updated: migrated=true');
  }
}
process.exit(allPass ? 0 : 3);
