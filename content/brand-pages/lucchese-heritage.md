# Lucchese brand page — heritage copy (draft)

Built to match the Stetson / Resistol / Pendleton / Goorin brand-page
structure and Moon Ridge voice (short sentences, concrete places, no
brochure fluff). Sources checked against Lucchese’s official timeline
(lucchese.com/pages/timeline), Lucchese’s twisted-cone last story, the
Handbook of Texas (Sam Lucchese), and Wikipedia (Lucchese Boot Company).

**Fact notes:**
- Founded **1883** in San Antonio by Salvatore “Sam” Lucchese and brother
  **Joseph**, Sicilian immigrants (arrived Galveston **1882**). Shop near
  **Fort Sam Houston** — cavalry first customers. Pronunciation:
  /luːˈkeɪsi/.
- **1921:** Robert J. Kleberg Sr. of King Ranch buys a pair for $37.50 —
  Lucchese’s own timeline marks this as the ranching partnership start.
- Salvatore dies **1929**; son **Cosimo** incorporates Lucchese Boot
  Company. Cosimo dies **1960**; grandson **Samuel J. Lucchese (Sam Jr.)**
  carries the craft and develops the proprietary **twisted-cone last**.
- Celebrity / LBJ era under Sam Jr.; sold to Blue Bell (Wrangler parent)
  **1970**; HQ/production move San Antonio → **El Paso 1986**.
- Live page previously mixed Cosimo/Sam Sr. chronology and still said
  “Rafter M” in the close — rewritten clean.

---

## Page body (intro under the logo)

Replace the current main-page body with:

```
Salvatore Lucchese left Palermo for Texas in 1882 and, with his brother
Joseph, opened a boot shop near Fort Sam Houston in 1883 — cavalry first,
ranchers next. Three generations of Luccheses hand-lasted boots on wooden
forms until the name meant fit as much as leather. The twisted-cone last
Sam Jr. built still shapes the pair. Made in El Paso now. We carry
Lucchese here in Fayetteville.
```

(Use as a single paragraph in the page editor; line breaks above are for
readability only.)

Also update `custom.brand_story` to the same text.

Tagline unchanged: `Bootmaker`.

---

## Heritage image metafields

Leave `custom.heritage_image`, `custom.heritage_caption`, and
`custom.heritage_credit` empty for now — timeline still renders. A Fort
Sam / bench / El Paso factory image can go in later if wanted.

---

## Timeline metafields (`custom.brand_timeline` → brand_timeline_entry)

### 1. 1883 · Sicily to Fort Sam Houston

**era:** `1883`  
**title:** `Sicily to Fort Sam Houston`  
**body:**

```
Salvatore “Sam” Lucchese was born in Palermo in 1868 into a family of
shoemakers. In 1882 he and his brother Joseph sailed for Texas — Galveston
first — and in 1883 opened a small shop near Fort Sam Houston in San
Antonio. Cavalry officers needed boots that held up in the saddle. The
Luccheses built them by hand, and a Texas name took root.
```

### 2. 1910s–1920s · King Ranch and the West

**era:** `1910s–1920s`  
**title:** `King Ranch and the West`  
**body:**

```
By 1919 the shop was turning out dozens of custom pairs a day. Lorenzo
Quesada of Mexico became the first international customer in 1910. In
1921 Robert J. Kleberg Sr. of the King Ranch paid $37.50 for a pair —
ranching royalty, and the start of a long Western standard. Sam also put
down roots in San Antonio’s Spanish-language theater world, but the boots
were always the family’s lasting work.
```

### 3. 1929 · Cosimo keeps the name

**era:** `1929`  
**title:** `Cosimo keeps the name`  
**body:**

```
Sam Lucchese died in 1929. His son Cosimo incorporated the business as
Lucchese Boot Company and kept the benches running through the Depression
and the war years. Hollywood found the boots in the 1930s — Josephine
Hutchinson in 1934, Bing Crosby by the early forties. In 1949 Lucchese
built the State Boots Collection, one pair for each state’s symbols. Fewer
than twenty-five of those pairs are known to survive.
```

### 4. 1960s · The twisted-cone last

**era:** `1960s`  
**title:** `The twisted-cone last`  
**body:**

```
Cosimo died in 1960. His son Samuel J. Lucchese — Sam Jr. — took the
company and the fit obsession further. He studied how a foot actually
stands and walks, then built the twisted-cone last: wider at the ball,
tapered at the toe, with a slight twist that matches the bone. Lucchese
still lasts on that idea. President Lyndon B. Johnson wore the boots for
decades. So did ranchers who never made the papers.
```

### 5. 1970–1986 · El Paso

**era:** `1970–1986`  
**title:** `El Paso`  
**body:**

```
In 1970 the family sold to Blue Bell, Wrangler’s parent — ownership
changed, the handwork didn’t. In 1986 Lucchese moved headquarters and
production from San Antonio to El Paso. The boots still pass through
roughly 150 to 200 hands, lemonwood pegs and all. Texas recognized the
company as cultural heritage in 2009. The factory floor is still in El
Paso.
```

### 6. Today · Tried on in Fayetteville

**era:** `Today`  
**title:** `Tried on in Fayetteville`  
**body:**

```
Lucchese still means a smaller menu and better execution — full-grain
leathers, exotic skins when they earn it, and a fit you feel when you
stand up. We carry the line at Moon Ridge in Fayetteville. Come try a
pair on the floor, or shop online and we’ll ship them to your door.
```

---

## What changed vs. the live page

| Piece | Change |
| --- | --- |
| Intro / brand_story | Rewrote; fixed Cosimo/Sam Jr. chronology; cut “Rafter M” close and Claude CSS classes |
| Timeline | New — six eras (none existed before) |
| Heritage image | Left empty |
| Tagline | Unchanged — `Bootmaker` |
