# Hat Education SEO audit — 2026-08-27

Audited all 10 live posts on `/blogs/hat-education` against on-page SEO + GEO checklist (`agent/skills/seo-geo`). Content lives in **Shopify Admin** (not theme Liquid). Theme PR only covers schema/OG helpers.

## Verdict

Most guides were already solid (unique titles, metas, H1, H2s, BlogPosting + breadcrumbs, internal links). Biggest gaps were on **Felt Season vs Straw Season** (no SEO fields, wrong template) and **face-shape** (no H2 hierarchy). **None** of the posts have a featured image — that still needs Zack with photos.

## Applied live (Shopify Admin API) — 2026-08-27

| Handle | Change |
| --- | --- |
| `felt-season-vs-straw-season` | Added SEO title + meta; set template `hat-education`; fixed excerpt; removed stray `<meta charset>` in body; tags |
| `finding-the-style-that-fits-your-face` | Rewrote body with H2s per face shape; refreshed SEO title/meta/excerpt |
| `learn-your-head-shape` | Trimmed meta ≤160 |
| `how-to-clean-a-felt-hat` | Trimmed meta ≤160 |
| `cowboy-hat-crown-shapes` | Title brand suffix → `\| Moon Ridge` |
| `cowboy-hat-brim-shapes` | Title brand suffix → `\| Moon Ridge` |
| `types-of-straw-in-straw-hats` | Title includes brand: `Types of Straw Hats: Bangora to Panama \| Moon Ridge` |

## Theme (this PR)

- `snippets/hat-education-article.liquid` — BlogPosting `description` prefers `global.description_tag`; publisher logo when theme logo set
- `snippets/meta-tags.liquid` — article OG image prefers `article.image` when present

## Still open (needs Zack / photos)

1. **Featured image on every Hat Education article** — until then OG + BlogPosting `image` fall back to shop Social.png / omit schema image. Ideal: 1200×630, descriptive alt.
2. **FAQPage blocks** on high-intent guides (X-ratings, face shape, felt vs straw) for AI Overviews — draft only until approved.
3. Soft internal links from brand history pages ↔ hat education (optional).
4. GSC URL inspection after Google recrawls the updated titles/metas.

## Live checklist (post-fix)

| Post | Title ~50–60 | Meta ~150–160 | 1× H1 | Content H2s | BlogPosting | Featured img |
| --- | --- | --- | --- | --- | --- | --- |
| Felt vs Straw | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Crown shapes | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Brim shapes | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Types of straw | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| X-ratings | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Clean felt | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Head shape | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Face shape | ✅ | ✅ | ✅ | ✅ (fixed) | ✅ | ❌ |
| Store cowboy hat | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Felt vs straw season | ✅ (fixed) | ✅ (fixed) | ✅ | ✅ | ✅ | ❌ |
| Blog index | ✅ | ✅ | ✅ | — | — | shop default |

## Target keywords (already covered)

- felt vs straw cowboy hat / when to wear
- cowboy hat crown shapes / cattleman Gus etc.
- cowboy hat brim shapes
- types of straw hats / bangora panama
- hat X-rating / 4X 100X
- how to clean a felt hat
- head shape hat fit
- hat styles face shape
- how to store a cowboy hat
- felt season / straw season
