import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['zh', 'en']),
    tags: z.array(z.string()).default([]),
    excerpt: z.string().optional(),
    cover: z.string().optional(),        // maps Ghost feature_image (4 posts have one)
    ghostSlug: z.string().optional(),    // original slug — drives redirects + parity
    draft: z.boolean().default(false),   // regression fixtures / WIP — rendered in dev, excluded from indexes+sitemap
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    lang: z.enum(['en', 'zh']),
    stack: z.array(z.string()),
    role: z.string(),
    links: z.object({ live: z.string().optional(), github: z.string().optional() }).default({}),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { writing, projects };
