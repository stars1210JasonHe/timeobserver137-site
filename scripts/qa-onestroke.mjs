// Behavior-level QA for /zh/play/: actually play level 1 (triangle) to the win,
// then verify Königsberg reveals the theorem panel. Exits non-zero on any miss.
import { chromium } from 'playwright';

const BASE = process.env.QA_BASE || 'http://localhost:4329';
const fail = (m) => { console.error('FAIL ' + m); process.exit(1); };

const browser = await chromium.launch();
const page = await browser.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));

await page.goto(BASE + '/zh/play/', { waitUntil: 'networkidle' });

// nodes rendered?
await page.waitForSelector('.os-node', { timeout: 5000 }).catch(() => fail('no .os-node rendered'));
const nodes = await page.$$('.os-node');
if (nodes.length !== 3) fail(`level 1 should have 3 nodes, got ${nodes.length}`);

// play triangle: 0 -> 1 -> 2 -> 0
for (const i of [0, 1, 2, 0]) await nodes[i].click();
const status = await page.textContent('.os-status');
if (!status.includes('一笔画成')) fail(`triangle not solved, status: ${status}`);

// solved state persisted?
const saved = await page.evaluate(() => localStorage.getItem('onestroke-v1'));
if (!saved || !JSON.parse(saved).done.includes(0)) fail('progress not persisted');

// jump to Königsberg, why-button reveals panel
await page.click('.os-lvl:nth-child(6)');
const whyHidden = await page.$eval('.os-why', (el) => el.classList.contains('hidden'));
if (whyHidden) fail('why-button hidden on Königsberg');
await page.click('.os-why');
const panelHidden = await page.$eval('.os-explain', (el) => el.classList.contains('hidden'));
if (panelHidden) fail('explain panel did not open');
const panel = await page.textContent('.os-explain');
if (!panel.includes('1736')) fail('explain panel missing content');

// edge classes actually paint (pixel-adjacent: computed stroke changes on done)
await page.click('.os-lvl:nth-child(1)');
const n2 = await page.$$('.os-node');
await n2[0].click(); await n2[1].click();
await page.waitForTimeout(350); // let the 0.2s stroke transition finish — computed style mid-transition reads the start color
const doneStroke = await page.$eval('.os-edge.done', (el) => getComputedStyle(el).stroke);
const todoStroke = await page.$eval('.os-edge:not(.done)', (el) => getComputedStyle(el).stroke);
if (doneStroke === todoStroke) fail('traversed edge not visually distinct');

if (errors.length) fail('page errors: ' + errors.join(' | '));
console.log('QA PASS: triangle solved, progress saved, Königsberg theorem panel opens, edges paint distinctly');
await browser.close();
