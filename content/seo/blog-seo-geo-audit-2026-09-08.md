# Blog SEO + AI-finding audit — 2026-09-08

Audited live HTML on moonridgecompany.com (not theme files alone). Schema checked in source (`application/ld+json` is server-rendered, so curl is valid here). Compared with the 2026-08-27 Hat Education pass.

Blogs in the sitemap:

| Blog | Role | Posts |
| --- | --- | --- |
| `/blogs/hat-education` | Commercial SEO / GEO cluster | 10 guides |
| `/blogs/moon-ridge-travel` | Brand / E-E-A-T travel essays | 10 posts |
| `/blogs/roots` | Story hub (custom template, no posts) | 0 |
| `/blogs/rafter-m-hat-company-is-now-moon-ridge-company` | Rebrand announcement | 1 |

---

## Executive summary

**Hat Education is in good traditional-SEO shape.** Unique titles and metas, one H1, real H2s, self-canonicals, indexable robots, BlogPosting + breadcrumbs, internal links, and most posts now have featured images (that was the open item on 8/27). Google is already picking the guides up.

**The gap is AI citation, not crawlability.** None of the guides had FAQPage or HowTo on the article itself. Homepage FAQ answers talked about the same topics but did not point at the guide URLs, so an answer engine could cite the homepage instead of the page that actually ranks. Travel and the rebrand post had **no Article schema at all**. Shopify’s `/llms.txt` and `/agents.md` are generic commerce docs — they never mention Hat Education.

This PR does the theme-side GEO work (FAQ + HowTo on the guides, Article schema on Travel, homepage FAQs cite the guide URLs, richer author). Content leftovers still need Zack in Shopify Admin.

**Top 5 issues (priority order)**

1. **High** — Hat Education had no on-page FAQ / FAQPage (AI Overviews and Perplexity cite Q&A blocks). *Fixed in this PR.*
2. **High** — Travel + rebrand articles emitted no BlogPosting. *Fixed in this PR.*
3. **High** — Face-shape and head-shape guides still have no featured image (OG + schema fall back to `Social.png` / omit image).
4. **Medium** — Travel posts: auto-generated metas, titles over 60 characters, pasted Squarespace HTML leaking extra H1s.
5. **Medium** — Homepage FAQ answers did not include the guide URLs. *Fixed in this PR.*

---

## Technical SEO findings

### Crawlability & indexation

| Check | Status |
| --- | --- |
| robots.txt | Default Shopify. Blogs allowed. AI bots not blocked (GPTBot / ClaudeBot / PerplexityBot inherit `User-agent: *`). |
| Sitemap | `sitemap_blogs_1.xml` lists all four blogs + every article. Hat Education lastmod is current (clean felt image landed 2026-09-08). |
| Canonicals | Self-referencing HTTPS on every audited URL. |
| robots meta | `index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1` |
| Google index | Guides are indexed (`site:` returns crown, brim, face, head, clean-felt URLs). |

**Issue:** `/blogs` 404s. Fine — indexes live at each blog URL; nav already points at Hat Education.

**Issue:** Default blog template (`templates/blog.json`) hardcodes the **Moon Ridge Travel** intro. The Origin Stories blog (`/blogs/rafter-m-hat-company-is-now-moon-ridge-company`) reuses that template, so it has **no H1** and travel copy in the intro block.

- **Impact:** Medium
- **Fix:** Give Origin Stories its own blog template, or drive the intro heading from `blog.title`. Do not flip Travel’s heading to H1 until those two blogs are split.

### Site architecture

Hat Education is in the header mega-menu, homepage intro, and hat-sizing page. Guides interlink. Travel is linked from Roots. That is a clean cluster.

Travel index heading is an **H2** (`heading_tag: h2` in `blog.json`) — **no H1** on `/blogs/moon-ridge-travel`.

- **Impact:** Medium
- **Fix:** After splitting Origin Stories off that template, set Travel’s intro heading to H1.

### Schema (pre-PR vs this PR)

| Surface | Before | After this PR |
| --- | --- | --- |
| Hat Education article | BlogPosting + BreadcrumbList. Author = name only. No FAQPage / HowTo. | Same + Person `jobTitle` / `worksFor`, `isPartOf` Blog, FAQPage (visible FAQ), HowTo on clean + store |
| Hat Education index | Blog + blogPost list | Unchanged (already good) |
| Travel / rebrand article | Organization / LocalBusiness / WebSite only — **no Article** | BlogPosting + BreadcrumbList |
| Roots hub | No Blog schema (not a post list) | Unchanged |
| Homepage / Hat Bar page | FAQPage + Service | FAQ answers now include canonical guide URLs |

**Do not treat missing `llms.txt` as a problem.** Shopify already serves `/llms.txt` and `/agents.md` (and `sitemap_agentic_discovery.xml`). They are checkout/UCP docs. Google has said you do not need extra AI text files. The useful move is making the **guides themselves** extractable (FAQ, HowTo, citations), which this PR does.

---

## On-page SEO — Hat Education

Live checklist (2026-09-08):

| Post | Title ~50–60 | Meta ~150–160 | 1× H1 | Content H2s | BlogPosting | Featured img |
| --- | --- | --- | --- | --- | --- | --- |
| Felt vs Straw | ✅ 57 | ✅ 144 | ✅ | ✅ | ✅ | ✅ |
| Crown shapes | ✅ 46 | ✅ 151 | ✅ | ✅ | ✅ | ✅ |
| Brim shapes | ✅ 45 | ✅ 141 | ✅ | ✅ | ✅ | ✅ |
| Types of straw | ✅ 51 | ✅ 150 | ✅ | ✅ | ✅ | ✅ |
| X-ratings | ✅ 59 | ✅ 158 | ✅ | ✅ | ✅ | ✅ |
| Clean felt | ✅ 57 | ✅ 141 | ✅ | ✅ | ✅ | ✅ (added 9/8) |
| Head shape | ✅ 54 | ✅ 142 | ✅ | ✅ | ✅ | ❌ OG = Social.png |
| Face shape | ✅ 43 | ✅ 142 | ✅ | ✅ | ✅ | ❌ OG = Social.png |
| Store cowboy hat | ✅ 59 | ✅ 156 | ✅ | ✅ | ✅ | ✅ |
| Felt vs straw season | ✅ 56 | ✅ 133 | ✅ | ✅ | ✅ | ✅ |
| Blog index | ✅ 52 | ✅ 160 | ✅ | — | Blog | shop default |

Notes:

- **H1 vs title** differs on purpose for a few posts (e.g. H1 “Learn Your Head Shape” / title “Hat Fit by Head Shape…”). That is fine — title carries the query, H1 stays human.
- Word counts 560–1,300. Enough depth. Head-shape is the thinnest (563).
- Internal links are present (guides ↔ collections ↔ hat sizing ↔ products). Hat Finder is linked from straw types.
- Authors: Zack on most; Natalie on clean-felt, head shape, face shape. Good E-E-A-T if schema says who they are (this PR).
- Store-hat meta still HTML-encodes `Moon Ridge&#39;s` — Shopify double-encoding. Rewrite the SEO description in Admin to use “Moon Ridge hat bar” and avoid the apostrophe, or re-save the metafield.

**Issue:** Face-shape and head-shape still have no article image.

- **Impact:** High for social + image search + BlogPosting `image`
- **Fix:** 1200×630 featured image with descriptive alt, same as the other eight.

**Issue:** Cart drawer injects extra H2s (“Your cart is empty”) on every page. Sitewide outline noise, not unique to the blog.

- **Impact:** Low
- **Fix:** Separate pass — change cart headings to `<p>` / visually-hidden.

---

## On-page SEO — Travel, Roots, Origin

**Travel posts**

- **Issue:** Title tags append the full shop name. Live examples run 78–87 characters (truncated in SERPs). *This PR shortens the fallback suffix to ` | Moon Ridge`.*
- **Issue:** Meta descriptions are the first 160 characters of the body (lounge breakfast, star ratings) — not written for search.
- **Issue:** Jackson Hole (and likely others) still contain pasted Squarespace HTML. A comment that says “No images inside `<h1>`…” is parsed as a second H1 wrapping a chunk of the post.
- **Issue:** Cleveland origin story uses two H1s (`NOTES THAT DEFINE US` + `CLEVELAND, OHIO`) and still says “Rafter M” in the title. Fine as heritage; add a one-line “now Moon Ridge” if you want entity clarity.
- **Impact:** Medium for Google, low for product SEO. These essays help E-E-A-T if they are clean and attributed.
- **Fix:** In Admin, write a unique SEO title + meta per trip; strip editor-exported `<style>` / extra `<h1>`; keep one H1 (the theme already prints the title).

**Origin / rebrand post**

- Title is fine. Meta starts with a non-breaking space and `If you&amp;#39;ve` (double-encoded). No BlogPosting before this PR.
- **Fix:** Rewrite the SEO description in Admin. Theme now emits Article schema.

**Roots**

- Custom hub, not a blog index. Title “Roots | Moon Ridge Hats and Heritage” is short. Meta is good. H1 “Roots” is thin — “Moon Ridge Roots: Family, Craft, and Brands” would work harder without getting salesy.

---

## Content / GEO (AI finding)

AI engines (ChatGPT, Perplexity, Gemini, Google AI Overviews, Copilot) **cite pages**, they do not “rank #1” the way Google-10-blue-links does. What helps:

1. **Answer-first FAQ on the URL you want cited** — now on each Hat Education guide (visible + FAQPage).
2. **HowTo with visible steps** — clean-felt and store-hat.
3. **Statistics and specific names** — already strong (crown/brim aliases, straw price bands, X-rating ranges). Keep those; do not keyword-stuff.
4. **Author as a Person who works here** — Zack / Natalie + jobTitle + Organization. This PR.
5. **Homepage FAQs pointing at the guide URLs** — so a model that reads the homepage still discovers the canonical page. This PR.
6. **Fresh dates** — ChatGPT cites recent pages more. Touch a guide when you add a photo or a correction so `dateModified` moves.
7. **Entity consistency** — Organization already has alternateName (Rafter M, Arkansas’s Original Hat Bar) and Wikidata `Q139594213`. This PR adds hat-education topics to `knowsAbout`.
8. **Do not build a custom llms.txt** to “get into ChatGPT.” Shopify’s file is for agent checkout. Teaching files do not replace indexed, structured pages.

Content still worth adding in Admin (draft until you say go):

- Featured images on face-shape and head-shape.
- One sourced line where it is honest (e.g. Stetson 1865, toquilla from Ecuador) — you already do this; keep it.
- Soft links from brand history pages → matching education guides (X-rating from Stetson heritage, straw types from Bigalli/Panama).
- Unique Travel metas.

Out of scope / do not do:

- Creating a second `llms.txt` in the theme (Shopify owns `/llms.txt`).
- SMS / Omnisend from this work.
- Publishing FAQ copy that contradicts in-store rules (shaping remains in-store only).

---

## Prioritized action plan

### 1. Critical / blocking

Nothing is blocking indexation. Guides are live and indexed.

### 2. This PR (theme — merge publishes)

- FAQ + FAQPage on all 10 Hat Education guides
- HowTo on clean-felt and store-hat
- BlogPosting on Travel and Origin articles
- Homepage FAQ answers cite the guide URLs
- Shorter article title suffix (`| Moon Ridge`)
- Richer author / `knowsAbout`

### 3. Quick wins in Shopify Admin (Zack)

1. Featured images for **Hat Styles for Your Face Shape** and **Learn Your Head Shape**
2. Rewrite Travel + Origin SEO titles/descriptions (stop using the first paragraph)
3. Strip leftover Squarespace HTML from Travel bodies (Jackson is the obvious one)
4. Re-save the store-hat meta so `&#39;` is gone
5. GSC URL inspection on the 10 guides after merge

### 4. Longer term

- Own blog template for Origin Stories so Travel can have a real H1
- Brand-history pages: FAQ blocks + links into Hat Education
- Optional: PDF one-pagers of the X-rating / crown-shape guides (Perplexity likes PDFs) — only if you want a sales-counter handout anyway
- Keep Google Business Profile NAP identical to schema (already aligned: 2218 N College Ave, (479) 430-2667)

---

## Target queries already covered

Felt vs straw cowboy hat · cowboy hat crown shapes · cowboy hat brim shapes · types of straw hats / Bangora / Panama · hat X-rating 4X 100X · how to clean a felt hat · head shape hat fit · hat styles face shape · how to store a cowboy hat · felt season / straw season

Travel is not competing for those queries. Keep it as brand/story.
