# Pendleton brand page — heritage copy (draft)

Built to match the Stetson / Resistol brand-page structure and Moon Ridge
voice (short sentences, concrete places, no brochure fluff). Sources
checked against Pendleton’s own historical timeline and company story PDF,
the Oregon Encyclopedia, Wikipedia (Pendleton Woolen Mills), and Pendleton
blog posts on the Glacier Park blanket and shirtmaking.

**Fact notes:**
- Pendleton dates its founding to **1863** — the year Thomas Lister Kay
  arrived in Oregon — even though Pendleton Woolen Mills was incorporated
  in **1909** under the Bishop family. We follow Pendleton’s own record
  (same rule we used for Stetson’s Megargee year and Resistol’s 1927).
- Kay’s Salem mill (Thomas Kay Woolen Mill) opened **1889**; the 1863 date
  is arrival / establishing himself in Oregon wool, not the Pendleton
  town mill.
- Town bond for the 1909 rebuild: local merchants subscribed **$30,000**,
  matched by the Bishop family (Oregon Encyclopedia).
- First customers of the 1909 mill: Columbia Plateau tribes — Cayuse,
  Walla Walla, Umatilla (Pendleton’s own story). Joe Rawnsley later
  expanded design work toward Navajo, Hopi, and Zuni preferences.
- Glacier National Park blanket: **1916**, same year as the National Park
  Service. Commissioned for Great Northern Railway park stores
  (Pendleton’s record).
- Men’s colorful virgin-wool shirt: **1924**. Women’s line / ’49er jacket:
  **1949**. Pendletones (later the Beach Boys) take the name from the
  plaid shirt: **1961**.

---

## Page body (intro under the logo)

Replace the current main-page body with:

```
Thomas Lister Kay was an English master weaver who crossed an ocean and
the Isthmus of Panama to reach Oregon in 1863. His daughter Fannie learned
the mill floor beside him; she married retailer C.P. Bishop, and their
three sons rebuilt an idle mill in the sheep town of Pendleton in 1909 —
blankets first, then shirts, still woven under the same family name. One
of the last vertically integrated woolen mills in America. We carry
Pendleton here in Fayetteville.
```

(Use as a single paragraph in the page editor; line breaks above are for
readability only.)

Also update `custom.brand_story` to the same text.

Tagline unchanged: `Woven in Oregon Since 1863`.

---

## Heritage image metafields

Pendleton does not have a single painted icon like Stetson’s Megargee.
Leave `custom.heritage_image`, `custom.heritage_caption`, and
`custom.heritage_credit` empty for now — the brand-heritage block will
still render the timeline. A mill floor, Jacquard loom, or Glacier Park
blanket image can go in later if Zack wants the left-hand figure band.

---

## Timeline metafields (`custom.brand_timeline` → brand_timeline_entry)

### 1. 1863 · An English weaver lands in Oregon

**era:** `1863`  
**title:** `An English weaver lands in Oregon`  
**body:**

```
Thomas Lister Kay grew up in Yorkshire mills — bobbin boy first, then
weaver — before training on the American East Coast. In 1863 he took the
long way west: Atlantic ship, burro across the Isthmus of Panama, Pacific
up the coast. Oregon had sheep, clean water, and room for a man who knew
wool. He helped organize early mills, then opened his own in Salem in
1889. Pendleton still counts that arrival as year one.
```

### 2. 1876–1909 · A mill the town paid for

**era:** `1876–1909`  
**title:** `A mill the town paid for`  
**body:**

```
Kay’s daughter Fannie learned the floor and the books beside him. In 1876
she married C.P. Bishop, a Salem clothier — mill craft on one side, retail
on the other. Their sons Clarence, Roy, and Chauncey trained at the
Philadelphia Textile School. In 1909 the town of Pendleton put up a
$30,000 bond and the Bishops matched it, rebuilt an idle scouring mill,
and hung the family name on the building. First product out of finishing
that September: Jacquard trade blankets.
```

### 3. 1909–1916 · Blankets for the Plateau

**era:** `1909–1916`  
**title:** `Blankets for the Plateau`  
**body:**

```
The first customers were the Cayuse, Walla Walla, and Umatilla — neighbors
on the Columbia Plateau who already knew what a good trade blanket was
worth. Joe Rawnsley, a Jacquard hand who’d learned the loom at the
Philadelphia Textile School, spent time with Native communities to get
color and pattern right, then cut those preferences into the machine.
Square corners replaced the old round ones. In 1916 Pendleton wove the
Glacier National Park blanket for Great Northern’s park stores — candy
stripes at each end, the first in a National Park line that still runs.
```

### 4. 1912–1929 · A shirt that wasn't grey

**era:** `1912–1929`  
**title:** `A shirt that wasn't grey`  
**body:**

```
In 1912 the Bishops bought a second mill in Washougal, Washington — lighter
cloth, suitings, room to grow beyond blankets. Headquarters moved to
Portland in 1919. Clarence Morton Bishop wanted something the drab work
shirt market didn’t have: virgin wool in real color and plaid. In 1924 the
Pendleton shirt landed. Ranchers, loggers, and sportsmen took it first. By
1929 the company ran a full men’s sportswear line off the same Pacific
Northwest looms.
```

### 5. 1940s–1960s · War wool to Pendletones

**era:** `1940s–1960s`  
**title:** `War wool to Pendletones`  
**body:**

```
World War II put most of the looms on military blankets and uniform cloth.
After the war, Pendleton opened a women’s line — the ’49er jacket in 1949
became the postwar hit. In 1961 a California band called themselves the
Pendletones after the plaid wool shirt surfers wore on cold beach mornings.
They changed the name to the Beach Boys. The shirt kept the nickname
anyway.
```

### 6. Today · Woven in the Northwest

**era:** `Today`  
**title:** `Woven in the Northwest`  
**body:**

```
Six generations of the Bishop family still run Pendleton — same Oregon and
Washougal mills, virgin wool dyed, spun, and woven in-house, still
“Warranted To Be A Pendleton.” Blankets for home and ceremony. Shirts that
break in instead of wearing out. We carry the line at Moon Ridge in
Fayetteville. Come feel the wool in person, or shop it online and we’ll
ship it to your door.
```

---

## What changed vs. the live page

| Piece | Change |
| --- | --- |
| Intro / brand_story | Rewrote out of brochure voice; Kay → Fannie/Bishop → 1909 mill → Moon Ridge close |
| Timeline | New — six eras mirroring Stetson/Resistol (none existed before) |
| Heritage image | Left empty pending a Pendleton-specific visual |
| Tagline | Unchanged — `Woven in Oregon Since 1863` |
