# Goorin Bros brand page — heritage copy (draft)

Built to match the Stetson / Resistol / Pendleton brand-page structure and
Moon Ridge voice (short sentences, concrete places, no brochure fluff).
Sources checked against Goorin Bros.’ official About timeline
(goorin.com/pages/about), Goorin-sourced Farm Mag / EU about pages,
California Secretary of State filing data for the 1947 incorporation, and
contemporary coverage of Ben Goorin’s retail revival.

**Fact notes:**
- Founder spelling is **Cassel Goorin** (not Morris). Company record:
  horse-drawn cart, Pittsburgh, **1895**.
- The “Brothers” are Cassel’s sons **Al (Alfred) and Ted**.
- **April 15, 1947** is the California incorporation date (Goorin’s timeline
  + CA filing). Some EU pages say the SF shop opened 1949 at Mission &
  First; Goorin’s own timeline puts Al at **2nd and Mission** under the
  1947 West-coast move. We follow Goorin’s official timeline for the
  corporation date and 2nd & Mission shop.
- **1960** Winter Olympics at Squaw Valley — Goorin was the official
  headwear licensee; **Raindri** water-repellent finish dates to this era
  (family formula still held close).
- **Animal Farm / The Farm:** Goorin-sourced Farm Mag copy says Ben Goorin
  created it in **2003** while experimenting with trucker patches — original
  five: pig, beaver, rooster, goat, donkey. Goorin’s US About page labels a
  “Rise of Animal Farm” beat **2005** but the body text there is a
  copy-paste of the 1970s western trucker paragraph. We follow the 2003
  Farm origin (more specific, Goorin-sourced) and treat mid-2000s as the
  fashion breakout.
- **2006** North Beach, San Francisco — first Goorin retail hat shop in
  over fifty years; flagship for the “Bold Hatmakers since 1895” era.

---

## Page body (intro under the logo)

Replace the current main-page body with:

```
Cassel Goorin sold handmade hats from a horse-drawn cart on the streets of
Pittsburgh in 1895. His sons Al and Ted — the Goorin Brothers — took the
name west, incorporated in California in 1947, and kept building everyday
hats for work, the lake, and the slopes. Four generations later the line
still runs from classic felt to Animal Farm truckers with a patch you can
spot across a room. We carry Goorin Bros. here in Fayetteville.
```

(Use as a single paragraph in the page editor; line breaks above are for
readability only.)

Also update `custom.brand_story` to the same text.

Tagline unchanged: `Smooth Never Meant Subtle`.

---

## Heritage image metafields

No single painted icon like Stetson’s Megargee. Leave
`custom.heritage_image`, `custom.heritage_caption`, and
`custom.heritage_credit` empty for now — the brand-heritage block will
still render the timeline. A cart-era photo, North Beach shop shot, or
classic Animal Farm patch board can go in later if Zack wants the
left-hand figure band.

---

## Timeline metafields (`custom.brand_timeline` → brand_timeline_entry)

### 1. 1895 · A cart full of hats

**era:** `1895`  
**title:** `A cart full of hats`  
**body:**

```
Cassel Goorin started on the streets of Pittsburgh with a horse-drawn cart
and a stack of handmade hats. No storefront yet — just craft, a route, and
the idea that what sat on a man’s head should be built to last. That cart
is still the origin story the company tells. Year one for a family that
hasn’t put the name down since.
```

### 2. 1900s–1930s · Built for work and the lake

**era:** `1900s–1930s`  
**title:** `Built for work and the lake`  
**body:**

```
Hats sat on every head in America — factory floor, ballroom, Sunday street.
Cassel’s sons Al and Ted grew up in the trade and in the outdoors: fishing,
hunting, days on the water. Goorin cut everyday wear that worked on the
job and on the lake. Through the Depression the hat stayed a daily
essential — practical, presentable, and still worth making well.
```

### 3. 1947 · Headed out West

**era:** `1947`  
**title:** `Headed out West`  
**body:**

```
Al Goorin set up shop in San Francisco at 2nd and Mission. On April 15,
1947, Goorin Brothers became a California corporation — coast to coast
under one family name. Postwar prosperity pulled the line wider:
Grenadier sporting goods, fishing gear, gloves. Hats first. Lifestyle
close behind.
```

### 4. 1960 · Official on the mountain

**era:** `1960`  
**title:** `Official on the mountain`  
**body:**

```
Goorin was the official headwear licensee of the 1960 Winter Olympics at
Squaw Valley. Ski fashion was taking off, and the family leaned in — knits,
accessories, and Raindri, a water-repellent finish that turned an everyday
hat into something you could wear in the snow. The formula stayed in the
family. The slopes kept buying.
```

### 5. 1990s–2006 · Animal Farm and the parlor shop

**era:** `1990s–2006`  
**title:** `Animal Farm and the parlor shop`  
**body:**

```
Fourth-generation Ben Goorin pointed the brand at San Francisco’s edge —
beanies and truckers for skate and snowboard shops, including Thrasher.
In 2003 he started sewing animal patches onto truckers: pig, beaver,
rooster, goat, donkey. Animal Farm took off. In 2006 he opened a North
Beach hat shop — the first Goorin storefront in over fifty years — more
hatter’s parlor than chain store. More than thirty neighborhood shops
followed.
```

### 6. Today · Fitted in Fayetteville

**era:** `Today`  
**title:** `Fitted in Fayetteville`  
**body:**

```
Still family-run out of San Francisco. Felt classics, fashion shapes, and
the Animal Farm truckers people collect and argue over. We carry Goorin
Bros. at Moon Ridge in Fayetteville — try the fit in person at the hat
bar, or shop the line online and we’ll ship it to your door.
```

---

## What changed vs. the live page

| Piece | Change |
| --- | --- |
| Intro / brand_story | Rewrote out of brochure voice; Cassel → Brothers → West → Animal Farm → Moon Ridge close |
| Timeline | New — six eras mirroring Stetson/Resistol/Pendleton (none existed before) |
| Heritage image | Left empty pending a Goorin-specific visual |
| Tagline | Unchanged — `Smooth Never Meant Subtle` |
