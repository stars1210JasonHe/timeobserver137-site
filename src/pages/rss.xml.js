/**
 * Task 5.1 — RSS feed replacing the Ghost /rss/ feed.
 * Same item set as /zh/writing/ (published zh posts, newest first); links
 * mirror [slug].astro's path rule (ghostSlug ?? id) so feed URLs and page
 * URLs can never drift apart. Old /rss/ 301s here via _redirects.
 */
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { postSlug } from '../data/slug';

export async function GET(context) {
  const posts = (await getCollection('writing', (e) => e.data.lang === 'zh' && !e.data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  return rss({
    title: '时间观察者 137',
    description: '科学史随笔：对称与怪兽、欧拉系列、及更多。',
    site: context.site,
    items: posts.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      description: entry.data.excerpt ?? '',
      link: `/zh/writing/${postSlug(entry)}/`,
      categories: entry.data.tags,
    })),
    customData: '<language>zh-cn</language>',
  });
}
