/**
 * zh <-> en pairing for writing entries (Yeqiu 2026-10-16: every Chinese essay gets an
 * English version). A translation is the file of the SAME name under content/writing/en/,
 * carrying the same `ghostSlug` when the Chinese one has it, so both resolve to the same
 * slug: /zh/writing/<slug>/ and /writing/<slug>/. Pairing is by slug, nothing else.
 */
import { getCollection } from 'astro:content';
import { postSlug } from './slug';

/** slugs of PUBLISHED (non-draft) entries in a language */
export async function publishedSlugs(lang: 'zh' | 'en'): Promise<Set<string>> {
  const entries = await getCollection('writing', (e) => e.data.lang === lang && !e.data.draft);
  return new Set(entries.map(postSlug));
}
