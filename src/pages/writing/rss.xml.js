/**
 * English RSS feed — /writing/rss.xml (2026-10-18). /rss.xml stays the Chinese feed: it is what the old
 * Ghost /rss/ 301s to, so existing subscribers keep the language they subscribed in. Links mirror
 * writing/[slug].astro (postSlug) so feed URLs and page URLs cannot drift apart.
 */
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { postSlug } from '../../data/slug';

export async function GET(context) {
  const posts = (await getCollection('writing', (e) => e.data.lang === 'en' && !e.data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  return rss({
    title: 'timeobserver137',
    description: 'Science-history essays: Symmetry and the Monster, the Euler series, and more.',
    site: context.site,
    items: posts.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      description: entry.data.excerpt ?? '',
      link: `/writing/${postSlug(entry)}/`,
      categories: entry.data.tags.filter((t) => t !== 'draft'),
    })),
    customData: '<language>en</language>',
    stylesheet: '/rss-style.xsl',
  });
}
