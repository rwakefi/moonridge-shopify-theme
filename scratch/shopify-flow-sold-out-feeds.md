# Shopify Flow — keep sold-out products off paid feeds

Flow is already installed on Moon Ridge. These two workflows replace the one-time sweep so the next sellout does not land back on Google / Facebook / TikTok / Shop.

Do **not** hide from Online Store, POS, or Headless (hat finder).

Exclude from both workflows: Services, Gift Cards, Hat Sale Wall, Lucchese / Boots (same hold as the 8/21 sweep). Untracked products usually do not fire inventory triggers anyway.

---

## Workflow 1 — Sold out → hide from paid feeds

1. Shopify admin → **Apps** → **Flow** → **Create workflow**.
2. Title: `Sold out — hide from paid feeds`.
3. Trigger: **Inventory quantity changed**.
4. Condition (check **Product**, not just the variant that moved):
   - Product status **is equal to** `Active`
   - AND product type **is not** `Service`
   - AND product type **is not** `Gift Cards`
   - AND product type **is not** `Boots`
   - AND vendor **is not** `LUCCHESE`
   - AND product title **does not contain** `Hat Sale Wall`
   - AND product **total inventory** **is less than or equal to** `0`
5. Action: **Hide product** / **Unpublish product**.
   - Sales channels: **Google & YouTube**, **Facebook & Instagram**, **TikTok**, **Shop**.
   - Leave Online Store, Point of Sale, and Moon Ridge Headless unchecked.
6. Turn the workflow **on**.

Inventory quantity changed fires per variant. The total-inventory check is what stops a size-7 selling out from hiding a hat that still has other sizes.

---

## Workflow 2 — Restocked → put back on paid feeds

1. Create workflow. Title: `Restocked — publish to paid feeds`.
2. Trigger: **Inventory quantity changed**.
3. Condition:
   - Product status **is equal to** `Active`
   - AND product type **is not** `Service` / `Gift Cards` / `Boots`
   - AND vendor **is not** `LUCCHESE`
   - AND product title **does not contain** `Hat Sale Wall`
   - AND product **total inventory** **is greater than** `0`
4. Action: **Publish product**.
   - Same four channels: Google & YouTube, Facebook & Instagram, TikTok, Shop.
5. Turn **on**.

---

## Optional catch-up (if you want a safety net)

Scheduled time, once a day in CDT business hours → **Get product data** with `inventory_total:<=0` AND `status:active` → For each → same hide action. Not required after the 8/21 sweep; the two live triggers cover new sellouts.

---

## Do not use

The Shopify template that hides out-of-stock products from the **Online Store**. That would pull sold-out hats off moonridgecompany.com and POS, which we are not doing.
