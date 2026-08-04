# Bigalli brand page — heritage copy (draft)

Built to match the Stetson / Resistol / Pendleton / Goorin brand-page
structure and Moon Ridge voice (short sentences, concrete places, no
brochure fluff). Sources checked against Bigalli USA About
(bigallihats.us), Bigalli’s 100-years heritage post, and Bigalli B2B
history (Ezio Bigalli Corbani / Ecuador).

**Fact notes:**
- Brand dates itself to **1926** (“Crafting Timeless Hats Since 1926”).
- Founder: **Ezio Bigalli Corbani**, from a hatmaking family in **Signa,
  Italy** (US About traces the tradition to **1900** in Signa). B2B copy
  says he left Italy in **1920** for Ecuador; the company founding year
  the brand leads with is **1926**. We follow 1926 as year one and note
  the Signa roots + 1920 emigration in earlier eras.
- Craft blend: Italian felt / millinery precision + Ecuadorian **paja
  toquilla** (Panama straw) weaving.
- Still family-run across **four generations**; US distribution through
  Dallas. Page handle cleaned from `bigalli-1` → `bigalli` when this
  heritage pass went live.

---

## Page body (intro under the logo)

Replace the current main-page body with:

```
Ezio Bigalli Corbani grew up in Signa, Italy, in a family of hatmakers,
then crossed to Ecuador and put Italian felt craft next to paja toquilla
straw. In 1926 the Bigalli workshop was underway — Panama straw woven the
Ecuadorian way, wool felt finished with an Italian eye. Four generations
later the family still runs the looms and the blocks. We carry Bigalli
here in Fayetteville.
```

(Use as a single paragraph in the page editor; line breaks above are for
readability only.)

Also update `custom.brand_story` to the same text.

Tagline unchanged: `Crafting Timeless Hats Since 1926`.

---

## Heritage image metafields

Leave empty for now — timeline still renders. A Signa / Quito workshop or
toquilla weaving image can go in later if wanted.

---

## Timeline metafields (`custom.brand_timeline` → brand_timeline_entry)

### 1. 1900 · Signa, Italy

**era:** `1900`  
**title:** `Signa, Italy`  
**body:**

```
Ezio Bigalli Corbani came out of Signa, a Tuscan town that knew hats the
way other towns knew wine. The family trade was millinery — block, felt,
finish — learned young and kept close. That Italian standard of clean
lines and tight work is still the first half of every Bigalli story.
```

### 2. 1920–1926 · Ecuador workshop

**era:** `1920–1926`  
**title:** `Ecuador workshop`  
**body:**

```
Ezio left Italy for Ecuador in 1920 and found a country famous for
toquilla straw — the fiber the world calls Panama. By 1926 the Bigalli
workshop was open: European hatmaking on one bench, Ecuadorian straw
craft on the other. One family name on both.
```

### 3. Paja toquilla · The real Panama

**era:** `Paja toquilla`  
**title:** `The real Panama`  
**body:**

```
Panama hats are woven in Ecuador. Bigalli built its straw line on paja
toquilla — fine, light, worked by hands that had the weave in their
families before the brand had a label. The point was never a costume
hat. It was a straw that held a shape and earned the brim.
```

### 4. Felt and straw · Two crafts, one house

**era:** `Felt and straw`  
**title:** `Two crafts, one house`  
**body:**

```
Italian felt tradition never left the shop. Merino wool, clean blocks,
dress shapes beside the straw. Bigalli’s edge is still that double
fluency — a house that can cut a fedora and a Panama without treating
either like a side project. Materials first. Then the finish.
```

### 5. Four generations · Still family

**era:** `Four generations`  
**title:** `Still family`  
**body:**

```
The name stayed in the family. Four generations have kept the workshop
standard while the hats moved into international markets and a U.S.
distribution hub in Dallas. Same argument as year one: make it well
enough that the next generation can put their name on it too.
```

### 6. Today · Fitted in Fayetteville

**era:** `Today`  
**title:** `Fitted in Fayetteville`  
**body:**

```
Bigalli still means Italian eye and Ecuadorian hands — straw and felt,
built to wear. We carry the line at Moon Ridge in Fayetteville. Come try
one on at the hat bar, or shop online and we’ll ship it to your door.
```

---

## What changed vs. the live page

| Piece | Change |
| --- | --- |
| Intro / brand_story | Rewrote out of brochure voice; Signa → Ecuador 1926 → dual craft → Moon Ridge |
| Timeline | New — six eras (none existed before) |
| Heritage image | Left empty |
| Tagline | Unchanged — `Crafting Timeless Hats Since 1926` |
| URL | Handle updated `bigalli-1` → `bigalli` |
