import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  // PREVIEW BASE — flip back to https://timeobserver137.cyou at domain cutover
  // (og/canonical URLs must resolve on the host that actually serves them TODAY,
  // or every share-test shows a blank card — Yeqiu hit this three times).
  site: 'https://timeobserver137.pages.dev',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { strict: false, throwOnError: false }]],
    shikiConfig: { theme: 'github-dark' },
  },
});
