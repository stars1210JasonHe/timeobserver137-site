import { describe, it, expect, beforeAll } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fetchOne, localPathFor } from '../scripts/migrate/fetch_media.mjs';

/**
 * Task 4.2 media fetcher tests. Uses two small REAL assets from our own live
 * site (per plan step 1) — network required, same origin the batch run hits.
 */

const PNG_URL = 'https://timeobserver137.cyou/content/images/2026/07/fig1-fleet-growth-fits.png';
const GIF_URL = 'https://timeobserver137.cyou/content/images/2026/05/gif2_collinear_lpoints.gif';

let tmpRoot: string;
beforeAll(() => {
  tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'media-test-'));
});

describe('localPathFor', () => {
  it('preserves the original /content/images/ subpath under the target root', () => {
    expect(localPathFor(PNG_URL, '/tmp/x')).toBe(
      path.join('/tmp/x', 'content/images/2026/07/fig1-fleet-growth-fits.png'),
    );
  });
  it('handles size-variant URLs (some are real article src)', () => {
    expect(localPathFor('https://timeobserver137.cyou/content/images/size/w1200/2026/07/c.png', '/r')).toBe(
      path.join('/r', 'content/images/size/w1200/2026/07/c.png'),
    );
  });
});

describe('fetchOne', () => {
  it('downloads a png, byte length matches content-length', async () => {
    const res = await fetchOne(PNG_URL, tmpRoot);
    expect(res.ok).toBe(true);
    const stat = fs.statSync(res.path);
    expect(stat.size).toBe(res.expectedBytes);
    expect(stat.size).toBeGreaterThan(1000);
  }, 30000);

  it('downloads a gif VERBATIM — bytes start GIF89a/GIF87a, no transform', async () => {
    const res = await fetchOne(GIF_URL, tmpRoot);
    expect(res.ok).toBe(true);
    const head = fs.readFileSync(res.path).subarray(0, 6).toString('ascii');
    expect(['GIF89a', 'GIF87a']).toContain(head);
    expect(fs.statSync(res.path).size).toBe(res.expectedBytes);
  }, 30000);

  it('skips re-download when file exists with matching size', async () => {
    const res = await fetchOne(PNG_URL, tmpRoot);
    expect(res.skipped).toBe(true);
  }, 30000);
});
