# Resistol brand page — heritage copy (draft)

Built to match the Stetson brand-page structure and Moon Ridge voice
(short sentences, concrete places, no brochure fluff). Sources checked
against Resistol’s own Resistol 101 / Hats Off to Harry pages, Texas
Monthly’s Resistol primer, Wikipedia, and the Garland Landmark Society.

**Fact notes:**
- Resistol’s own timeline uses **1927** for Byer-Rolnick / the Resistol
  name. (Garland Landmark Society cites 1929 for the corporation — we
  follow Resistol’s record, same as we followed Stetson’s on Megargee.)
- Founder spelling is **E.R. Byer** (Byer-Rolnick), not “Buyer” — that
  typo appears on one Resistol marketing page.
- Name origin: “resist all” weather, and a patented headband that kept
  scalp oil / sweat from soaking the felt.

---

## Page body (intro under the logo)

Replace the current main-page body with:

```
Harry Rolnick was a Dallas hat maker with a patent and an idea. In 1927
he partnered with E.R. Byer, put both under the name Resistol — resist
all — and set out to build a felt hat that held its shape through weather,
work, and a long day on a hot head. They moved the works to Garland,
Texas in 1938. Same town still makes them. We carry Resistol, shape it,
and fit it here in Fayetteville.
```

(Use as a single paragraph in the page editor; line breaks above are for
readability only.)

Also update `custom.brand_story` to the same text.

---

## Heritage image metafields

Resistol does not have a single painted icon like Stetson’s Megargee.
Leave `custom.heritage_image`, `custom.heritage_caption`, and
`custom.heritage_credit` empty for now — the brand-heritage block will
still render the timeline. Add a Garland-factory or PRCA image later if
Zack wants the left-hand figure band.

---

## Timeline metafields (`custom.brand_timeline` → brand_timeline_entry)

### 1. 1927 · Built to resist all

**era:** `1927`  
**title:** `Built to resist all`  
**body:**

```
Harry Rolnick learned hats the hard way — renovating them with his
brothers in Houston, then cutting new ones in Dallas. In 1927 he joined
forces with E.R. Byer, a customer with capital, and formed Byer-Rolnick.
They hung the work under a new brand name: Resistol. Resist all. The
point was a felt hat that could take weather and still look like a hat
when the day was over.
```

### 2. 1927–1935 · A band that finds your head

**era:** `1927–1935`  
**title:** `A band that finds your head`  
**body:**

```
Rolnick patented a way to keep sweat and scalp oil from soaking through
the felt — the stain working cowboys wore as a badge and businessmen
hated. He followed it with the Self-Conforming sweatband, leather that
settled to the shape of the head that wore it, and the Kitten Finish, a
sanding that left the felt soft as suede. Dress hats first. Then, in
1935, the western line.
```

### 3. 1938 · Garland, Texas

**era:** `1938`  
**title:** `Garland, Texas`  
**body:**

```
The company outgrew Dallas. In 1938 Byer-Rolnick moved into a long, low
plant on Marion Drive in Garland — fifty acres, room to grow, and a
whistle the neighborhood set its clocks by. Byer settled on a farm at
the edge of town and kept backing the business. The hats are still made
under that same Garland roof.
```

### 4. 1930s–1960s · The West puts it on

**era:** `1930s–1960s`  
**title:** `The West puts it on`  
**body:**

```
Rolnick sold the western image as hard as he sold the felt. John Wayne
and Henry Fonda wore Resistols. For a stretch he designed exclusively
for Warner Bros. Lyndon B. Johnson tipped one. Decades later J.R.
Ewing’s Resistol landed in the Smithsonian, and every Texas DPS trooper
still wears one in a special color called Texan.
```

### 5. Mid-century · Two hundred processes under one roof

**era:** `Mid-century`  
**title:** `Two hundred processes under one roof`  
**body:**

```
To control the felt from start to finish, Byer-Rolnick bought a fur
cutting plant and built a rough-body works in Longview, Texas. That made
them the first — and still the only — hat maker to run the entire fur
felt process in-house: more than two hundred steps, from raw fur to a
finished brim. Same vertical mill that later turned out Stetson and
Charlie 1 Horse under one Garland campus.
```

### 6. Today · Shaped in Fayetteville

**era:** `Today`  
**title:** `Shaped in Fayetteville`  
**body:**

```
Resistol is still Texas-made, still the Official Hat of the PRCA, and
still built for a working head. Most leave the factory already creased.
Good felt doesn't mind a second opinion — steam opens it, and a new
shape holds. We set yours at the bench in Fayetteville, two doors south
of the bowling alley.
```

---

## What changed vs. the live page

| Piece | Change |
| --- | --- |
| Intro / brand_story | Rewrote out of brochure voice; concrete founders, Garland, Moon Ridge close |
| Timeline | New — six eras mirroring Stetson structure (none existed before) |
| Heritage image | Left empty pending a Resistol-specific visual |
| Tagline | Unchanged — `Best All Around` |
