import { describe, it, expect } from 'vitest';
import { genRedirects } from '../scripts/redirects/gen.mjs';

/**
 * Task 3.2 — _redirects generator. Reads the migration manifest and emits:
 * - migrated post  -> 301 to /zh/writing/<slug>/
 * - pending post   -> 200 proxy to ghost-origin (phased cutover)
 * - static lines (rss, about, images passthrough) driven by flags
 */

const GHOST = 'https://ghost-origin.timeobserver137.cyou';

describe('genRedirects', () => {
  const manifest = {
    posts: [
      { slug: 'done-slug', migrated: true },
      { slug: 'pending-slug', migrated: false },
    ],
    aboutMigrated: true,
    rssMigrated: false,
    imagesLocal: false,
  };

  it('301s migrated posts, proxies pending posts', () => {
    const out = genRedirects(manifest, GHOST);
    expect(out).toContain('/done-slug/ /zh/writing/done-slug/ 301');
    expect(out).toContain(`/pending-slug/ ${GHOST}/pending-slug/ 200`);
  });

  it('about 301 when migrated; rss proxied until feed lands', () => {
    const out = genRedirects(manifest, GHOST);
    expect(out).toContain('/about/ /zh/about/ 301');
    expect(out).toContain(`/rss/ ${GHOST}/rss/ 200`);
  });

  it('images proxy to ghost until local media flips', () => {
    const out = genRedirects(manifest, GHOST);
    expect(out).toContain(`/content/images/* ${GHOST}/content/images/:splat 200`);
  });

  it('images line disappears when imagesLocal', () => {
    const out = genRedirects({ ...manifest, imagesLocal: true }, GHOST);
    expect(out).not.toContain('/content/images/*');
  });

  it('rss 301s to /rss.xml when feed is live', () => {
    const out = genRedirects({ ...manifest, rssMigrated: true }, GHOST);
    expect(out).toContain('/rss/ /rss.xml 301');
  });
});
