# Cart add-ons — session notes (Aug 2026)

## Status
Paused. Theme support is already live; no code changes needed to get a basic "Add to your order" strip in the cart drawer.

## What it is
Cart add-ons / cart upsells — suggested products shown in the cart drawer so customers can bump the order before checkout.

## Where it lives
| Piece | Path |
| --- | --- |
| Markup | `snippets/cart-drawer-addons.liquid` |
| Mounted in | `snippets/cart-drawer.liquid` (`{% render 'cart-drawer-addons' %}`, above drawer footer) |
| Styles | `assets/cart-drawer-extras.css` (`.cart-addons*`) |
| Theme settings | Cart → "Suggested add-ons" in `config/settings_schema.json` |
| Current values | `config/settings_data.json`: enable on, collection `cart-add-ons`, heading "Add to your order", limit 6 |

## Behavior
- Only shows when the cart is not empty and the collection has available products.
- Skips products already in the cart.
- Single-variant / no-options products: AJAX add via `<product-form>` (loads `product-form.js`).
- Multi-variant or quantity-rule products: "Choose options" link to the product page.
- Re-renders with the drawer on cart changes, so added items drop out of the list.

## Likely next steps when resumed
1. Confirm the Shopify collection with handle `cart-add-ons` exists and has the products Zack wants (hat bands, care kits, drinkware, etc.).
2. If the section isn't showing on the live store, check that collection first — not the theme.
3. Optional: change heading/copy, limit, or layout in Theme settings / CSS.
4. Optional later: smarter suggestions based on cart contents (e.g. hat → band) instead of a static collection.

## Decisions not made
- Which products belong in the add-ons collection
- Whether to redesign the look or keep the current horizontal strip
- Whether to build cart-aware smart recommendations
