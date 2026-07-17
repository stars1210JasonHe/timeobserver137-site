/**
 * Canonical URL slug for a writing entry.
 *
 * Migrated legacy posts keep their Ghost slug (`ghostSlug` frontmatter).
 * New posts (git flow, PUBLISHING.md) have no ghostSlug — their content-layer
 * id is the path inside the collection (`zh/<file>`), so the language folder
 * must be stripped or the `[slug]` route receives a multi-segment param and
 * the build fails ("Missing parameter: slug" — caught 2026-07-17 by the
 * bare-angle probe, the first non-migrated post ever built).
 */
export const postSlug = (entry: { id: string; data: { ghostSlug?: string } }): string =>
  entry.data.ghostSlug ?? entry.id.split('/').pop()!;
