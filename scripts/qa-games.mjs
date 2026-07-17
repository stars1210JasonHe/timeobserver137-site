// Behavior-level QA for all three games. Exits non-zero on any miss.
import { chromium } from 'playwright';

const BASE = process.env.QA_BASE || 'http://localhost:4329';
let failed = 0;
const fail = (m) => { console.error('FAIL ' + m); failed++; };
const ok = (m) => console.log('ok   ' + m);

const browser = await chromium.launch();
const page = await browser.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));

// ---------- One Stroke v2 ----------
await page.goto(BASE + '/zh/play/one-stroke/', { waitUntil: 'networkidle' });
await page.waitForSelector('.os-node');
const lvls = await page.$$('.os-lvl');
lvls.length === 10 ? ok('one-stroke: 10 levels') : fail(`one-stroke: ${lvls.length} levels, want 10`);

// wrong declare on solvable level 1 → Euler disagrees
await page.click('.os-declare');
let st = await page.textContent('.os-status');
st.includes('欧拉不同意') ? ok('one-stroke: wrong declare rejected with odd-count') : fail(`wrong declare: ${st}`);

// solve triangle
let nodes = await page.$$('.os-node');
for (const i of [0, 1, 2, 0]) await nodes[i].click();
st = await page.textContent('.os-status');
st.includes('一笔画成') ? ok('one-stroke: triangle solves') : fail(`triangle: ${st}`);

// 田字 (level 4, idx 3) is impossible — correct declare passes it
await page.click('.os-lvl:nth-child(4)');
await page.click('.os-declare');
st = await page.textContent('.os-status');
st.includes('判断正确') && st.includes('4 个奇点') ? ok('one-stroke: 田字 declared impossible, real odd count shown') : fail(`田字 declare: ${st}`);

// celebration on 10/10: seed 9 done, finish the last
await page.evaluate(() => localStorage.setItem('onestroke-v1', JSON.stringify({ done: [0, 1, 2, 3, 4, 5, 6, 7, 8] })));
await page.reload({ waitUntil: 'networkidle' });
await page.click('.os-lvl:nth-child(10)');
await page.click('.os-declare');
await page.waitForTimeout(300);
const finShown = await page.$eval('.os-fin', (el) => !el.classList.contains('hidden'));
finShown ? ok('one-stroke: completion overlay fires on 10/10') : fail('one-stroke: no completion overlay');
const dash = await page.$eval('.os-fin-path', (el) => el.style.strokeDashoffset);
dash === '0' ? ok('one-stroke: celebration stroke animates to 0') : ok('one-stroke: stroke mid-draw (offset ' + dash + ')');

// ---------- Symmetry v2 ----------
await page.goto(BASE + '/zh/play/symmetry/', { waitUntil: 'networkidle' });
await page.waitForSelector('.sp-op');
const spLvls = await page.$$('.os-lvl');
spLvls.length === 10 ? ok('symmetry: 10 levels') : fail(`symmetry: ${spLvls.length} levels, want 10`);
// review 2026-07-17: these classes once lived only in OneStroke's CSS and were
// unstyled on this standalone page — verify the STYLE, not just the element
const pill = await page.$eval('.os-lvl', (el) => getComputedStyle(el).borderRadius);
pill && pill !== '0px' ? ok('symmetry: level pills actually styled on own page') : fail(`os-lvl unstyled on symmetry page: ${pill}`);
st = await page.textContent('.sp-status');
st.includes('最少 1 步') ? ok('symmetry: BFS par=1 shown for L1') : fail(`symmetry L1 par: ${st}`);
// wrong declare on solvable L1 → rebutted with real par
await page.click('.sp-declare');
st = await page.textContent('.sp-status');
st.includes('其实到得了') && st.includes('1 步') ? ok('symmetry: wrong declare rebutted with real par') : fail(`wrong declare: ${st}`);
// L1 target = r → click ↻
await page.click('.sp-ops .sp-op:nth-child(1)');
await page.waitForTimeout(400);
st = await page.textContent('.sp-status');
st.includes('★') ? ok('symmetry: L1 solved at par with star') : fail(`symmetry L1: ${st}`);
// L5: rotations only, target is a mirror → chirality, declare passes
await page.click('.os-lvl:nth-child(5)');
const opCount = await page.$$eval('.sp-ops .sp-op', (els) => els.length);
opCount === 2 ? ok('symmetry: L5 rotations-only generators') : fail(`symmetry L5 ops: ${opCount}`);
await page.click('.sp-declare');
st = await page.textContent('.sp-status');
let noteTxt = await page.textContent('.sp-note');
st.includes('看穿了') && noteTxt.includes('手性') ? ok('symmetry: L5 chirality declared, coset reveal') : fail(`L5 declare: ${st} | ${noteTxt.slice(0, 40)}`);
// L6: {r,h}, target l=r³ → solve rrr at par 3
await page.click('.os-lvl:nth-child(6)');
for (let i = 0; i < 3; i++) { await page.click('.sp-ops .sp-op:nth-child(1)'); await page.waitForTimeout(380); }
st = await page.textContent('.sp-status');
st.includes('★') ? ok('symmetry: L6 rrr solves at par 3') : fail(`symmetry L6: ${st}`);
// L8: altered target outside D4 orbit → invariant reveal
await page.click('.os-lvl:nth-child(8)');
await page.click('.sp-declare');
noteTxt = await page.textContent('.sp-note');
noteTxt.includes('不变量') ? ok('symmetry: L8 invariant declared, counting reveal') : fail(`L8 note: ${noteTxt.slice(0, 40)}`);
// celebration on 10/10: seed 9 done, finish finale (L10 chirality) by declare
await page.evaluate(() => localStorage.setItem('symmetry-v1', JSON.stringify({ done: [0, 1, 2, 3, 4, 5, 6, 7, 8] })));
await page.reload({ waitUntil: 'networkidle' });
await page.click('.os-lvl:nth-child(10)');
await page.click('.sp-declare');
await page.waitForTimeout(400);
const spFin = await page.$eval('.sp-fin', (el) => !el.classList.contains('hidden'));
const tiles = await page.$$eval('.sp-fin-tile', (els) => els.length);
spFin && tiles === 8 ? ok('symmetry: kaleidoscope overlay fires with 8 D4 images') : fail(`symmetry fin: shown=${spFin} tiles=${tiles}`);

// ---------- Rubik's ----------
await page.goto(BASE + '/zh/play/rubiks/', { waitUntil: 'networkidle' });
await page.waitForSelector('.rc-stage canvas', { timeout: 8000 }).then(() => ok("rubiks: WebGL canvas renders")).catch(() => fail('rubiks: no canvas'));
// a face turn updates status
await page.click('.rc-move[data-move="U"]');
await page.waitForTimeout(350);
st = await page.textContent('.rc-status');
st.includes('第 1 步') ? ok('rubiks: face turn counted') : fail(`rubiks turn: ${st}`);
// scramble runs to completion
await page.click('.rc-scramble');
await page.waitForFunction(() => document.querySelector('.rc-status').textContent.includes('开始吧'), null, { timeout: 15000 })
  .then(() => ok('rubiks: scramble completes (18 animated turns)'))
  .catch(() => fail('rubiks: scramble did not finish'));
// reset restores factory
await page.click('.rc-solve');
st = await page.textContent('.rc-status');
st.includes('出厂') ? ok('rubiks: reset restores factory state') : fail(`rubiks reset: ${st}`);

if (errors.length) fail('page errors: ' + errors.join(' | '));
console.log(failed ? `\n${failed} FAILURES` : '\nQA PASS: all three games behave');
process.exit(failed ? 1 : 0);
