import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://timeobserver137.cyou', // cutover 2026-07-17: the real domain serves this build
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    mdx(),
    // Draft previews live under /zh/preview/ and must never enter the sitemap —
    // they are unpublished posts handed out as a private link (see src/pages/zh/preview/).
    sitemap({ filter: (page) => !page.includes('/zh/preview/') }),
  ],
  vite: { plugins: [tailwindcss()] },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { strict: false, throwOnError: false }]],
    shikiConfig: { theme: 'github-dark' },
  },
});
