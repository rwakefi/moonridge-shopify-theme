# X-Rating of Hats — Hat Education publish brief

Hat Education articles live in **Shopify Admin** (not theme Liquid). Use this brief + `x-rating-of-hats.html` to publish.

## Publish in Shopify Admin

1. Go to **Online Store → Blog posts → Add blog post**
2. Set **Blog** to **Hat Education**
3. Fill in the fields below
4. Switch the editor to **HTML** / Show HTML and paste the contents of `x-rating-of-hats.html`
5. Under **Theme template**, choose **`hat-education`**
6. Add a featured image (felt hat close-up or shop floor / shaping context works well)
7. **Save** then **Publish**

## Suggested fields

| Field | Value |
| --- | --- |
| **Title** | Understanding the X-Rating of Hats |
| **Handle / URL** | `x-rating-of-hats` → `/blogs/hat-education/x-rating-of-hats` |
| **Excerpt / deck** | The X on a felt hat is shorthand for fur-felt quality — finer fiber, better hand, and more longevity. Here's how to read the number without getting lost in marketing. |
| **SEO title** | Understanding Hat X-Ratings \| Moon Ridge Hat Education |
| **SEO description** | Learn what hat X-ratings mean — from 4X to 100X — how brands differ, and how to choose the right felt quality for everyday wear or an heirloom hat. |
| **Template** | `hat-education` |
| **Tags** (optional) | `felt`, `hat education`, `x-rating`, `cowboy hats` |

## After publish (optional polish)

- Confirm the post appears on [Hat Education](https://moonridgecompany.com/blogs/hat-education)
- Confirm it shows in the header **Hat Education** dropdown
- From related guides, add a “see also” link to this article when convenient
- Homepage already points people to Hat Education for “X-rating, materials, and care” — no theme change required once this post is live

## Why this is a content file, not theme code

Existing guides (`how-to-clean-a-felt-hat`, `learn-your-head-shape`, `finding-the-style-that-fits-your-face`) are Admin blog posts rendered by `snippets/hat-education-article.liquid`. Matching that workflow keeps the new guide on the same index, nav, and related-guides rails.
