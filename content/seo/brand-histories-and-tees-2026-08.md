# SEO: Brand Histories + Brand T-Shirts (Aug 2026)

Skill used: **Affilino `ecommerce-seo-audit`** (v1.1, Jan 2026) at `.cursor/skills/ecommerce-seo-audit/`, plus 2026 GEO/AI retail guidance (entity-clear titles, ~150–160 char metas, “Best for” lines for AI extractability).

## Canonical brand history URLs (live, SEO-clean)

Shopify was serving stale HTML on several short handles (ghost cache beat redirects). Fresh keyword-rich handles are the working canonicals:

| Brand | Canonical URL | Title tag |
|-------|---------------|-----------|
| Hub | `/pages/legendary-hat-brands` | Legendary Hat Brands We Carry \| Moon Ridge |
| Stetson | `/pages/stetson-hat-history` | Stetson Hat History & Heritage \| Moon Ridge |
| Resistol | `/pages/resistol-hat-history` | Resistol Hat History & Heritage \| Moon Ridge |
| Goorin Bros. | `/pages/goorin-bros-hat-history` | Goorin Bros. Hat History & Heritage \| Moon Ridge |
| Lucchese | `/pages/lucchese-boot-history` | Lucchese Boot History & Heritage \| Moon Ridge |
| Bigalli | `/pages/bigalli-hat-history` | Bigalli Hat History & Heritage \| Moon Ridge |
| Pendleton | `/pages/pendleton` | Pendleton Wool History & Heritage \| Moon Ridge |

Roots → **Our Legendary Brands** points at the hub page. Grid CTAs use the new brand URLs. Redirects exist from old short paths (e.g. `/pages/stetson`), but ghost HTML may still win on those old URLs until Shopify clears edge cache—prefer linking only to the new handles.

Hub H1 (section heading): **Legendary Hat Brands We Carry** (was “Our Legendary Brands”).

## Brand t-shirts (live)

Unique SEO title + meta on Stetson tees, Pendleton graphic tees, Moon Ridge/Rafter M legacy tee, Hot Girls Wear Boots, Cowboy Bar. Thin/empty bodies filled with short unique copy + **Best for:** lines where needed (`rafter-m-t-shirt`, `hot-girls-wear-boots-t-shirt`, `cowboy-bar-t-shirt`).

## Theme fix (this PR)

`layout/theme.liquid` + `snippets/meta-tags.liquid` honor `global.title_tag` / `description_tag` on pages and products, with handle fallbacks for brand history pages (old + new handles).

## Next (not done)

- FAQ blocks + FAQPage schema on brand histories (strong for AI Overviews)
- Collection SEO for brand collections
- Soft internal links hub ↔ brands ↔ tee PDPs
- GSC URL inspection after index refresh
- Ask Shopify support to purge ghost HTML on old short handles if they still serve stale titles
