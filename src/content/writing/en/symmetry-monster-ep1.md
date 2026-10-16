---
title: "Symmetry and the Monster (1): The language of symmetry, starting from five solids"
date: 2026-06-11
lang: en
tags:
  - symmetry-monster
series: symmetry-monster
seriesOrder: 1
ghostSlug: symmetry-monster-ep1
draft: true
---

## Author's note

My original intention in making this series was to put into practice a way of learning in the age of AI. I personally believe the value of AI is not only that it can help us with our work and get things done, but also that it can help us satisfy our own desire to explore and our thirst for knowledge. When AI can do many things in our place, we naturally wonder whether AI can read books in our place, and my answer is no. Precisely because AI exists in this era, the meaning of reading books has become even more important than before. Reading, understanding, thinking and feeling are the main features that distinguish us humans from AI. If we give up thinking and let AI do everything, that may lead us to ask ourselves philosophical questions such as the meaning of being alive. As for the answer to that question, although it differs from person to person, one thing is certain: the person reading this article at this moment is definitely alive, and being alive, we inevitably fall into this kind of thinking. I have wandered off. In a word: AI does not replace us; it is a tool for satisfying our curiosity and thirst for knowledge.

Back to this series. This book, *Symmetry and the Monster*, currently has no Chinese edition, so I chose it on purpose to make a series of reading a book together with AI. I myself actually only studied group theory later, at the graduate stage, but before that I had always been very interested in the fact that equations of degree five and above have no root formula (no solution by radicals) (and also in ancient straightedge-and-compass problems such as trisecting an arbitrary angle). I used to wonder why such simple questions took the mathematical world hundreds or even thousands of years to resolve. Behind this there is in fact a deep reason, and that is group theory. Group theory is not just an abstract mathematical theory; behind it is a way of looking at the world. It holds philosophical reflection on beauty and ugliness, and it also holds the cosmic origins of symmetry and asymmetry.

Next, let us walk into the world of group theory together.

*— Yeqiu*

---

**🎬 The companion video for this installment is now online (YouTube)**

<iframe width="200" height="113" src="https://www.youtube.com/embed/mJJ_Mcy3Y8w?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="Symmetry and the Monster (1): a 190,000-dimensional giant beast hidden in five perfect solids"></iframe>

## Contents

- [**§0 A monster living in 196883 dimensions**](#0-a-monster-living-in-196883-dimensions) — Starting from the end: the Monster group and the five solids, the two ends of the same "periodic table of symmetry"
- [**§1 Five perfect solids**](#1-five-perfect-solids) — Why exactly five: an enumeration of the angle sums at a vertex, and the one-line inequality from Euler's formula $\tfrac1p+\tfrac1q>\tfrac12$
- [**§2 The obsession of the ancients**](#2-the-obsession-of-the-ancients) — The recipe for all things in Plato's [*Timaeus*](https://plato.stanford.edu/entries/plato-timaeus/), the capstone of Book XIII of Euclid's *Elements*, Theaetetus, the riddle of the Roman dodecahedron
- [**§3 Symmetry is really an "action"**](#3-symmetry-is-really-an-action) — Turning "symmetry" from an adjective into a verb: operations that leave things unchanged, and the first appearance of the "group"
- [**§4 Just how symmetric are these solids**](#4-just-how-symmetric-are-these-solids) — Counting symmetries: cube 24, icosahedron 60; duality (cube↔octahedron, dodecahedron↔icosahedron, the tetrahedron self-dual)
- [**§5 Symmetry is right beside you**](#5-symmetry-is-right-beside-you) — Dice, virus capsids, C60, radiolarians, tilings: why nature too favors these five shapes
- [**§6 The atoms of symmetry**](#6-the-atoms-of-symmetry) — $A_5$: the first atom of symmetry that "cannot be broken apart"; swapping the order differs by 120° (non-commutative); tame and wild
- [**§7 Coda: Kepler's beautiful mistake**](#7-coda-keplers-beautiful-mistake) — 1596, [*Mysterium Cosmographicum*](https://en.wikipedia.org/wiki/Mysterium_Cosmographicum) fits the solar system with the five solids; how a beautiful mistake led him to the right place

## §0 A monster living in 196883 dimensions

We begin looking back on this journey from its end — even though this end looks like a book of heavenly script.

In mathematics there is a thing called the **Monster group**, so big that it needs a space of **196,883 dimensions** to fit. It is not a figure, nor a number, but a mass of "symmetry itself": an astonishing number of symmetry actions that nevertheless interlock with one another seamlessly. It is like a giant beast in mathematics. Stranger still: this giant beast, living in nearly two hundred thousand dimensions, seems to have matched some kind of secret code with something **completely unrelated** in number theory — between two fields of mathematics that ought to have nothing to do with each other, there seems to exist some kind of connection.

Why there should be such a connection is something this series tells only at the very end. If I threw the answer at you now, you would not be stunned; you would only think it was a string of numbers. **To be truly stunned by it, we still have to start from the beginning — from 2300 years ago, from five blocks of wood.** Because the giant beast and those five solids are the two ends of the same story: they both have the intrinsic property of symmetry. What we will do along the way is to find all the symmetry properties, the complete set.

**This book was written starting from a "coincidence".** In 1978, the mathematician John McKay, while leafing through a number connected with this giant beast, found that it was almost exactly the same as a number from a **completely unrelated** field in number theory. Most people would shrug and say "coincidence"; McKay did not — he wrote a letter telling his colleague John Thompson about this "coincidence", and a group of people thus began a pursuit of the question. Mark Ronan wrote the book [*Symmetry and the Monster*](https://en.wikipedia.org/wiki/Mark_Ronan) precisely about this pursuit; and this series is us following this book to understand it together. What those two numbers actually are, and why they collided, is revealed only at the very end of the whole journey; for now you only need to remember: the seed of the story is a person who refused to treat a coincidence as a coincidence.

---

## §1 Five perfect solids

The starting point of the story is the five perfect solids in the hands of the ancient Greeks: the regular tetrahedron, the cube, the regular octahedron, the regular dodecahedron, and the regular icosahedron. They are so regular that it is hard to believe it is a coincidence — and the more astonishing fact is: **there are exactly five such perfect solids, no more and no less.**

First define a "regular polyhedron" by two precise conditions: a **convex** polyhedron in which (i) every face is a **congruent regular $p$-gon**, and (ii) at every vertex **exactly $q$ faces meet**. Such a solid is completely determined by a pair of integers $\{p,q\}$ (called the Schläfli symbol) — even "every vertex looks exactly the same" is a by-product forced automatically by these two conditions plus "convex", and need not be listed separately.

**So why only five — here is an argument you can walk through in your head.** At a vertex of a solid, the interior angles of the several faces must add up to **less than 360°** (equal, and it flattens out; greater, and it bursts). So: an equilateral triangle has 60° per angle, and putting together 3, 4 or 5 of them all works (→ tetrahedron/octahedron/icosahedron); 6 gives exactly 360° — out; a square has 90°, and only 3 can be put together (→ cube); a regular pentagon has 108°, also only 3 (→ dodecahedron); a regular hexagon has 120°, and putting 3 together is again 360° — and everything beyond exceeds it. **So there can only be five.**

> **The more rigorous way to say it (Euler's formula).**
>
> The same thing, using what we used again and again in the previous few installments,
>
> **Euler's formula**
>
> $V-E+F=2$: gather it up and it becomes a one-line inequality: $\tfrac1p+\tfrac1q>\tfrac12$; and the integer solutions with $p,q\ge3$ are
>
> **exactly five pairs**, precisely the five solids above. ("At most five" is necessity, "all five can be built" is existence — only when both sides are joined does it count as "exactly", the same kind of thinking as the "upper bound + lower bound" in the installment on the four-color theorem.)

| $\{p,q\}$ | Solid | $V$ | $E$ | $F$ |
| --- | --- | --- | --- | --- |
| $\{3,3\}$ | Regular tetrahedron | 4 | 6 | 4 |
| $\{4,3\}$ | Cube | 8 | 12 | 6 |
| $\{3,4\}$ | Regular octahedron | 6 | 12 | 8 |
| $\{5,3\}$ | Regular dodecahedron | 20 | 30 | 12 |
| $\{3,5\}$ | Regular icosahedron | 12 | 30 | 20 |

![The five solids + the enumeration ladder](/content/images/2026/06/figE1_1_platonic.png)

*Figure 1.1: The five Platonic solids side by side; the "enumeration ladder" on the right lights up the cells where $\tfrac1p+\tfrac1q>\tfrac12$ is feasible and strikes out the whole row $p\ge6$ — the window frames only five cells. Dual pairs have frames of the same color (cube↔octahedron, dodecahedron↔icosahedron, the tetrahedron self-dual, see §4).*

![The five Platonic solids rotating](/content/images/2026/06/figE1_2_five_solids_spin.gif)

*Figure 1.2 (animation): The five Platonic solids each rotating, dual pairs in the same color (cube + octahedron blue, dodecahedron + icosahedron purple, the tetrahedron self-dual red) — this is the "family portrait of the protagonists" that runs through the whole series.*

---

## §2 The obsession of the ancients

Two thousand years ago, people were already fascinated by these five solids — once treating them as the recipe for all things, and another time as the capstone of mathematics.

**Plato's recipe (*Timaeus*, about 360 BC).** Plato matched each of the four basic "elements" of the world with a solid: **fire** is the sharpest and lightest **pyramid** (only later called the tetrahedron), **earth** is the most stable and stackable **cube**, **air** is the **octahedron**, **water** is the **icosahedron**. One **dodecahedron** remained, and he reserved it for **the whole universe** — according to him, the god used it to adorn the heavens. These five perfect shapes were, for the first time, treated as the underlying language of all things.

![Bust of Plato](/content/images/2026/06/figE2_1_plato.jpg)

*Figure 2.1: Plato (about 427–347 BC). In the _Timaeus_ he matched each of the four elements with a solid and reserved the dodecahedron for the universe — the five perfect shapes were for the first time treated as the underlying language of all things. (Public domain)*

**Euclid's capstone (*Elements*, Book XIII, about 300 BC).** Three hundred years later, Euclid turned this obsession into iron mathematics. Of the thirteen books of the *Elements*, **the last book** is devoted entirely to these five solids: first each of them is precisely **constructed** (inscribed in a sphere), and at the end it proves the thing we just walked through in §1 — **there are exactly five perfect solids**. The bible of two thousand years of mathematics has these five shapes as its capstone.

![Euclid (as painted by Ribera)](/content/images/2026/06/figE2_2_euclid.jpg)

*Figure 2.2: Euclid, oil painting by Jusepe de Ribera, about 1630–1635 (Getty collection; the museum's title is "Euclid"). The last book of the _Elements_ is devoted entirely to the five Platonic solids and is capped by "there are exactly five". (Public domain)*

**The person who proved that such solids are "only five": Theaetetus.** Historically this is credited to the Athenian mathematician **Theaetetus (about 417–369 BC; another account says 391 BC)** — a contemporary of Plato, who was even written by Plato into a dialogue named after him. He was the first to treat these five solids systematically and mathematically, and very likely the first to prove "there are only five"; Book XIII of the *Elements* largely derives from his work. (The scene in which he "was wounded, caught dysentery and died" comes from the commemorative literary frame at the opening of Plato's [*Theaetetus*](https://mathshistory.st-andrews.ac.uk/Biographies/Theaetetus/), and is not an independent biography; scholars also have two accounts of the year of his death, 369 / 391 — we keep only what is most certain: he gave that **proof**.)

By the way, the **first chapter** of Ronan's book is simply called "Theaetetus's Icosahedron". For a symmetry journey of more than two thousand years, he did not start from the cube, nor from the simplest tetrahedron, but turned the camera on the most complex and most symmetric of the five — the icosahedron, and the first person to explain it clearly. Later you will see that it is precisely the 60 rotations of this icosahedron that become the first "atom of symmetry" we are looking for.

![Theaetetus (image of a classical scholar)](/content/images/2026/06/figE2_3_theaetetus.png)

*Figure 2.3: Theaetetus (about 417–369 BC) — very likely the first person to prove that "there are only five perfect solids"; Book XIII of the _Elements_ largely derives from his work. No authentic portrait survives; this is an illustration in the style of a classical scholar (AI-generated, with an icosahedron set into the background — his emblem).*

**And the obsession of the ancients lived not only in philosophy and mathematics, but also in the hands of craftsmen.** Since the first record in 1739, archaeologists in the northwestern provinces of the Roman Empire (today's France, Germany, Britain and thereabouts) have dug up, one after another, more than a hundred small **hollow copper-alloy dodecahedra**, dated to the 2nd to 4th centuries AD: twelve pentagonal faces, each with a round hole of **varying size** opened in its center, and a small knob bulging out at each of the twelve corners. They are regular and exquisite, and clearly someone cast them with great care. But what were they actually used for — measuring distance? Weaving? Divination? Over two thousand years more than fifty guesses have accumulated, and **to this day not one has been confirmed** (the fact alone that the holes vary in size makes the "precision measuring instrument" claim very hard to sustain). An ancient civilization deeply drawn to symmetry left us a gift of symmetry whose very purpose is a riddle.

![Roman bronze dodecahedron](/content/images/2026/06/figE2_4_roman_dodeca.png)

*Figure 2.4: An illustration of a hollow copper-alloy dodecahedron of the Roman Empire (2nd–4th century AD) — twelve pentagonal faces, a round hole of varying size in the center of each face, a small knob bulging out at each of the twelve corners. More than a hundred have been unearthed; their purpose is a riddle to this day.*

---

## §3 Symmetry is really an "action"

Up to here it has all still been "shapes". But the real protagonist of this series is their **symmetry**.

**Symmetry is a figurative way of speaking; behind it is an abstract "action"**: a transformation that carries an object back onto itself, with no visible difference. Rotate a cube $90°$ about its central axis, and after the rotation it is as if it had not been rotated — this is one of its symmetries. How symmetric an object actually is depends on how many such actions it has. Let us count the cube's.

Counting only rigid rotations (leaving out mirror images for now), classified by axis of rotation:

| Axis of rotation | Number of axes | Non-trivial rotations per axis | Subtotal |
| --- | --- | --- | --- |
| Identity (not moving) | — | — | $1$ |
| Through the centers of a pair of opposite faces | $3$ | $90°,180°,270°$ | $9$ |
| Through a pair of opposite vertices (body diagonal) | $4$ | $120°,240°$ | $8$ |
| Through the midpoints of a pair of opposite edges | $6$ | $180°$ | $6$ |

In total $1+9+8+6=\mathbf{24}$ rotations. Allow mirror images as well, and it doubles to $\mathbf{48}$.

![The three kinds of rotation axes of the cube](/content/images/2026/06/figE2_1_cube_axes-1.png)

*Figure 3.1: One representative of each of the three kinds of rotation axes of the cube (face axis / body-diagonal axis / edge-midpoint axis), with the total $1+9+8+6=24$ in the corner.*

Now notice three properties of these actions — they are so plain that you would almost overlook them, yet they are the whole key:

- Doing any two symmetries **in relay** (first rotate this one, then that one), the result is **still a symmetry**;
- Every action can be **undone** (rotate $90°$, then rotate back $90°$, and you return to the original);
- There is an action that **"does nothing at all"** (the identity).

**Walk through the "relay" with your own hands.** First set the cube straight and rotate it 90° about the vertical axis through "the centers of the top and bottom faces"; then rotate it 90° about the horizontal axis through "the centers of the front and back faces". After both steps, the whole cube looks the same as if it had not moved — all its corners, edges and faces have landed precisely back on positions that were already there. In other words, the combined action "rotate 90° then rotate 90°" **is itself one of those 24 rotations**. This is "closure under relay": you can never jump outside these 24. (A setup for later: if you **swap the order**, horizontal first and vertical second, the landing point will be different — this matter of "order matters" will become key in §6.)

![Relaying two cube rotations](/content/images/2026/06/figE3_2_two_rotations.gif)

*Figure 3.2 (animation): The same cube, "A first then B" and "B first then A", setting out from the same starting point, yet landing in different orientations — the result of the relay is still a symmetry of the cube, but the order matters (a setup for §6).*

"Can be relayed, can be undone, has a not-moving one" — a "set of actions" satisfying these three conditions is so important that mathematicians gave it a name: a **group**. The 24 rotations of the cube are a group; its symmetry is **completely packed up** by this group.

> Don't rush to memorize the definition. In this episode you only need to remember one sentence:
>
> **A "group" is the language of symmetry — it translates "how symmetric a thing is" into mathematics that can be calculated.**
>
> As for the strict axioms of a group and its fine internal structure, those are for later episodes; here we have only just learned to say this word.

---

## §4 Just how symmetric are these solids

Since "how much symmetry" can be counted, let us count it for all five solids (counting only rotations; in parentheses is the total including mirror images):

| Solid | Rotational symmetries | Including mirror images |
| --- | --- | --- |
| Regular tetrahedron | 12 | 24 |
| Cube | 24 | 48 |
| Regular octahedron | 24 | 48 |
| Regular dodecahedron | 60 | 120 |
| Regular icosahedron | 60 | 120 |

Two regularities are visible at a glance, and both connect back to the **duality** of §1: **solids that are dual to each other have exactly the same number of symmetries** (cube = octahedron 24, dodecahedron = icosahedron 60, the tetrahedron self-dual 12); and **the 60 of the icosahedron/dodecahedron is the most of the five** — they are the most symmetric solids. Remember this **60**; §6 will use it.

**Where do these numbers come from? Count the smallest one, the regular tetrahedron, once and you will understand** (the method is exactly the same as counting the cube in §3, classifying by axis of rotation): the identity, 1; the axes through "a vertex ↔ the center of the opposite face" are 4 in number, each with two rotations, $120°$ and $240°$, 8 in all; the axes through "the midpoints of two opposite edges" are 3 in number, each with one rotation of $180°$, 3 in all. In total $1+8+3=\mathbf{12}$, which matches exactly that row of the table (allow mirror images as well, and it doubles to 24). If you can count this one, you can count all five solids: **find all the axes of rotation → count how many non-trivial rotations there are on each axis → finally add the one that "does not move"**.

![Symmetry counts of the five solids](/content/images/2026/06/figE4_1_symmetry_counts.png)

*Figure 4.1: The number of rotational symmetries of each solid (and including mirror images). Dual pairs are equal; the 60 of the icosahedron/dodecahedron (120 including mirror images) is the most symmetric.*

**The golden ratio hidden in the icosahedron.** The icosahedron also hides an unexpected beauty: take **three mutually perpendicular "golden rectangles"** (whose length-to-width ratio is exactly the golden ratio $\varphi=\tfrac{1+\sqrt5}{2}\approx1.618$), and their **12 corners are exactly the 12 vertices of the icosahedron**. The most perfect solid is built with that most famous ratio.

**Why does it have to be the golden ratio?** Put the icosahedron into a coordinate system, and its 12 vertices can be written extremely cleanly: $(0,\pm1,\pm\varphi)$, $(\pm1,\pm\varphi,0)$, $(\pm\varphi,0,\pm1)$ — three groups of 4 each, exactly 12, and these three groups are precisely the four corners of those three mutually perpendicular golden rectangles. For the nearest-neighbor distances of these 12 points to be **all equal** (that is, for the edge lengths to be uniform and for it really to be a regular icosahedron), that length-to-width ratio **can only** take $\varphi=\tfrac{1+\sqrt5}{2}$ — a little more or a little less, and the edges become uneven. So the golden ratio is not a decoration patched on afterward; it is **the unique answer forced out** by the geometric problem "make the 12 corners form a regular icosahedron".

![Golden rectangles forming the icosahedron](/content/images/2026/06/figE4_2_golden_rectangles.png)

*Figure 4.2: Three mutually perpendicular golden rectangles with length-to-width ratio $\varphi:1$; their 12 corners are exactly the 12 vertices of the icosahedron.*

![Cube↔octahedron duality](/content/images/2026/06/figE4_3_cube_octa_dual.gif)

*Figure 4.3 (animation): Connect the centers of each face of the cube, and its dual grows out — the octahedron; and vice versa. The two dual solids share the same set of symmetries (so their symmetry counts are equal).*

**Why must the symmetry counts of dual solids be equal?** It is not a coincidence: the octahedron grows out of the cube by **connecting the centers of each of its faces** (Figure 4.3), so each vertex of the octahedron lives precisely at the very center of some face of the cube. Now perform a rotation that returns the cube to its place — it carries faces to faces, so those face centers are carried along too, and the face centers are exactly the vertices of the octahedron. The same action returns the cube to its place on one side and also returns the octahedron to its place on the other: so every symmetry of the cube **is automatically** a symmetry of the octahedron, and the other way round as well, not one more and not one less. So their symmetry counts must be equal (both 24); the same goes for the 60 of dodecahedron↔icosahedron.

---

## §5 Symmetry is right beside you

These five perfect symmetries are not mathematicians' fantasies on paper — they really exist in our world. They are like children of the same family, resembling one another, but the more they "look alike", the more careful we must be: what nature gives is often an "approximation", not mathematical "perfection".

**But first an "exact" exception: dice.** A complete set of tabletop-game dice, d4/d6/d8/d12/d20, is exactly the five Platonic solids. They can serve as "fair dice" entirely thanks to the kind of symmetry in §3 — under the symmetry actions every face is completely equivalent to every other face, so the probabilities of landing face up are seamlessly equal; the most symmetric, the icosahedron (that 60 of §4), became the d20, with the most faces and the closest to "rolling a random number". These are man-made, geometrically exact five solids (a small note: fair dice are not only of the Platonic-solid kind; the ten-sided d10 is also fair). **And nature's versions are almost all "approximations"** — for the ones below, the more they look alike, the more you should remember that they only approach it, and are not mathematical perfection.

![Dice of the five Platonic solids](/content/images/2026/06/figE5_0_dice.png)

*Figure 5.0: A complete set of tabletop-game dice, d4/d6/d8/d12/d20, is exactly the five Platonic solids — man-made, geometrically exact "five solids". Under the symmetry actions every face is equivalent, so the probabilities of landing face up are seamlessly equal.*

**Viruses: saving genes with symmetry.** The protein shells (capsids) of many viruses have **icosahedral symmetry** — adenovirus, poliovirus and many bacteriophages all do. Why? In 1962 Caspar and Klug gave an elegant reason: **genetic economy**. A virus's genome is too small and can encode only a few kinds of shell protein; to assemble a closed shell from the fewest "kinds of parts", icosahedral symmetry lets a minimum of **60 identical subunits** tile one layer seamlessly. Symmetry became the virus's engineering solution for saving genes. (Note: the capsid has icosahedral **symmetry**; it is itself a quasi-spherical shell, not a solid with sharp edges and pointed corners.)

![Icosahedral virus capsid](/content/images/2026/06/figE5_4_capsid.png)

*Figure 5.4: Illustration of a virus capsid with icosahedral symmetry: 20 triangular faces, 3 identical subunits per face = a minimum of 60 identical parts (Caspar–Klug, 1962), assembled seamlessly into a quasi-spherical closed shell. This is the engineering solution of "saving genes with symmetry".*

**Radiolarians: an "icosahedron" in the sea.** The nineteenth-century naturalist Ernst Haeckel drew a single-celled radiolarian, *Circogonia icosahedra*, whose siliceous skeleton is arranged as an icosahedron — nature really did build, in one marine single cell, a symmetry approximating a Platonic solid. (Haeckel's drawings are **idealized** art: he picked the most symmetric specimens and the most flattering angles; real specimens are only approximations, so do not take them for perfect regular icosahedra.)

![Haeckel's icosahedral radiolarian](/content/images/2026/06/figE5_1_radiolaria.png)

*Figure 5.1: Circogonia icosahedra from Haeckel's _Art Forms in Nature_ — a single-celled radiolarian whose siliceous skeleton is arranged as an icosahedron. (Haeckel idealized it; real specimens are only approximations.)*

**Minerals: geometry in stone.** **Pyrite** (fool's gold) often grows into twelve-faced crystals that at first glance are regular dodecahedra — but it is actually a **pyritohedron**, whose faces are **irregular** pentagons, **similar in form but not** a Platonic solid. The reason runs deep: the **crystallographic restriction theorem** forbids periodic crystals from having fivefold symmetry axes (only 2/3/4/6-fold are allowed), so true regular-dodecahedral symmetry (which contains fivefold axes) is forbidden in crystals. **Fluorite**, on the other hand, cleaves along fixed directions, and broken open it is a clean octahedron (although its most common growth form is actually the cube).

**An aside: why exactly can "5" not get into the plane?** One line of arithmetic is enough. To cover a floor with one kind of regular polygon, see whether its interior angle divides 360° evenly: the equilateral triangle, 60° (6 of them, ✓), the square, 90° (4 of them, ✓), the regular hexagon, 120° (3 of them, ✓, the honeycomb is this one); when it comes to the regular pentagon, the interior angle is 108°, and 360÷108≈3.33 **is not an integer**: 3 placed together fall a little short, 4 overshoot, and gaps are left however you do it. So pentagons cannot tile the plane, and "fivefold symmetry" is by nature shut out of periodic arrangements — this is the same wall that keeps pyrite from growing into a true dodecahedron, and that keeps the icosahedron of §6 from being pressed into the plane.

**The football, and a molecule.** The football at your feet is geometrically called a **truncated icosahedron** — assembled from 12 pentagons + 20 hexagons, with 60 vertices. In 1985 the chemists Kroto, Curl and Smalley proposed that there is a molecule made of **60 carbon atoms**, with the carbon atoms sitting exactly on these 60 vertices — this is the **C60 buckyball (buckminsterfullerene)**, named in tribute to the architect Buckminster Fuller's lattice domes (the structure was confirmed around 1990, and it won the 1996 Nobel Prize in **Chemistry**). The shape of a football is at the same time the shell of a virus, a molecule of carbon, a dome of architecture — this is the power of the hidden language of "symmetry". (That "dome of architecture" is not a metaphor: C60 is called a "buckyball" precisely because Kroto felt its shape resembled the **lattice domes** built by the architect Buckminster Fuller — triangular steel frames that subdivide the icosahedron again and again to approach a sphere; the United States pavilion at the 1967 Montreal World's Fair was one. The shell of a virus, a molecule of carbon, a steel frame tens of meters high, really are the same icosahedral symmetry saying the same sentence at three scales.)

![Football→C60](/content/images/2026/06/figE5_3_football_c60.gif)

*Figure 5.3 (animation): Truncating the icosahedron → 12 pentagons + 20 hexagons (a football, 60 vertices) → one carbon atom on each vertex → the C60 buckyball molecule.*

**And symmetry can also be pure art.** The Agent that writes this series is called Escher, precisely in memory of the Dutch artist M.C. Escher — all his life he drew **symmetry of the plane**: making lizards, birds and fish cover the entire plane seamlessly, the tail of one being exactly the wing of another, endlessly. This is called **tiling (tessellation)**. One contrast is worth remembering: **symmetry in the plane is "tame"** — meaning that it is simple and restricted: all you can do is translate, rotate, reflect and glide; mathematicians have proved that there are **only 17 kinds in total** of such repeating patterns in the plane (called "wallpaper groups"), and the orders of rotation that can appear are only 2-, 3-, 4- and 6-fold (**there is no fivefold axis at all**, which is exactly the "crystallographic restriction theorem" of pyrite above). But the 60 rotations of the icosahedron **cannot be squeezed into the plane however you flatten them**. This difference, "the plane cannot hold it", is precisely the protagonist of the next section.

![Escher-style tiling of the plane](/content/images/2026/06/figE5_2_tessellation.png)

*Figure 5.2: An Escher-style "tiling of the plane": the same shape covers the entire plane seamlessly, endlessly. Symmetry in the plane is "tame" — there are only 17 kinds in total of such repeating patterns (wallpaper groups). (An AI-generated illustration in Escher's style, not an original work by Escher.)*

---

## §6 The atoms of symmetry

By now we have the language (groups), and we have also counted how symmetric each of the five solids is. But the question that really drives the whole series is: **can these "symmetries" be broken apart further? Is there a symmetry that "cannot be broken apart" — an atom of symmetry?**

First look at the biggest number, the icosahedron's: its rotation group has **60** elements. It too is an "atom" — but unlike the earlier symmetries that "can be rotated out within the plane":

> It is
>
> **the smallest atom of symmetry that "the plane cannot hold and that must have three dimensions"**
>
> .

Not one qualifier in this sentence can be omitted. Recall the Escher tilings of §5: **the finite rotational symmetries in the plane, however you turn them over, are only those few cyclic kinds** (rotation about a point by $\tfrac{2\pi}{n}$, and pairwise commutative — whichever you rotate first, it is the same), all "tame". Whereas this order-60 symmetry of the icosahedron is **non-commutative** and structurally complex, and however you flatten it, it cannot be squeezed into two dimensions — it **must have three dimensions**. It has a name: $A_5$.

(This is also why Ronan uses the icosahedron to open the whole book: the finite rotations in the plane, however you turn them over, are only the cyclic $C_n$, whereas $A_5$ is **the first atom on this journey that jumps out of the plane and can no longer be broken apart**. Note that it does not belong only to the icosahedron — the **dodecahedron**, which shares the same order-60 set of symmetries with the icosahedron, embodies the same $A_5$. This first atom is offered up jointly by the dodecahedron/icosahedron, this pair of "dual brothers".)

![A₅: the first atom of symmetry](/content/images/2026/06/figE6_2_a5_atom.png)

*Figure 6.2: The first "atom of symmetry", $A_5$: the 60 rotations of the icosahedron, surrounded by the "orbital halo" woven by these 60 symmetry actions. It is the smallest symmetry that cannot be broken apart, that the plane cannot hold and that must have three dimensions — the key to proving, in later episodes, that "the quintic equation has no root formula" is hidden precisely inside it.*

**What does "non-commutative" feel like? Try it with a phone.** With the phone's front facing you: **first** rotate it 90° within the tabletop, **then** tip it backward 90°, and remember where the screen faces; now change the order — **first** tip it backward 90°, **then** rotate it 90° within the tabletop, and you will find the screen **facing a completely different way**. The same two actions, merely with their order swapped, and the landing point changes; this is called **non-commutative**. Compare the plane: on paper, rotating about the same pin first by 30° and then by 50°, and first by 50° and then by 30°, give exactly the same result (both are 80°) — rotations in the plane are always commutative, and this is precisely the source of their "tameness". As soon as you enter three dimensions and the axes can point in every direction, order immediately starts to matter; the 60 rotations of the icosahedron live in this world where "order matters".

![Phone non-commutativity: one lying, one standing](/content/images/2026/06/figE6_3_phone_noncomm-1.png)

*Figure 6.3: The final states of the phone in the two orders: left (first rotate within the tabletop, then tip backward) the phone lies flat, screen facing up; right (first tip backward, then rotate within the tabletop) the phone stands upright. One lying, one standing — after swapping the order the final states are completely different.*

**A common misunderstanding, worth spelling out:** you might think that "swapping the order" would give a symmetric result that is the original "swapped around". **It does not.** In the figure above one lies flat and one stands upright, and the two orientations have **no simple correspondence at all** — you cannot simply deduce B from A. In fact, for the special case of **two $90°$ rotations about orthogonal axes**, whichever comes first, the two final states obtained in the two orders **differ by exactly one $120°$ rotation** (about an axis in the direction of a **body diagonal**). (This pretty "$120°$" is a coincidence peculiar to the special case "orthogonal + $90°$"; do not take it as a general law of non-commutativity — general non-commutativity only guarantees "order matters, the landing points differ", not necessarily a difference of exactly $120°$.) The point here is already clear enough: "swapping the order" is not only not a mirror-image swap, it instead produces out of nowhere an extra **rotation about a new direction (that body diagonal)** — this "unpredictably going their separate ways" is exactly the root of why rotations in three dimensions are "wilder" than in the plane.

![Tame vs wild](/content/images/2026/06/figE6_1_tame_vs_wild.gif)

*Figure 6.1 (animation): Left: a 6-fold rotation in the plane, turning cleanly about a point, always lying flat ("tame") ‖ Right: the icosahedron tears as soon as it is pressed toward the plane — its symmetry must have three dimensions ("wild").*

**Why it "cannot be broken apart", and how this matter decides that "the quintic equation has no root formula" — that is the main thread of the later episodes. Here we only leave the suspense.** (Don't rush to believe "cannot be broken apart"; that has to be proved rigorously. In this episode we only point out that it is there.)

And this connects right back to the monster of §0: **the monster is also an atom — the largest of all the atoms.** From the 60 of the icosahedron to the monster's $8\times10^{53}$, they are two cells of the same "periodic table of symmetry". **(The two phrases "atom of symmetry" and "periodic table of symmetry" are precisely the main metaphors that Mark Ronan runs through the whole of *Symmetry and the Monster* — he calls each symmetry that cannot be broken apart an atom of symmetry, and likens finding them all and arranging them by family to chemists' filling in the periodic table of the elements in their day.)** What this series will do is follow this table of his and fill it in cell by cell — find all the atoms of symmetry, and see how they fall into a few infinite families, and how, in the most unexpected place, a string of unreasonable exceptions jumps out.

---

## §7 Coda: Kepler's beautiful mistake

Two thousand years later, these five solids once again wanted to "explain the universe" — and once again, beautiful, but wrong.

**1596, *Mysterium Cosmographicum*.** The young Kepler firmly believed that God made the world with geometry. He noticed that the planets known at the time were exactly **six**, and the perfect solids exactly **five** — could it be that the spacings of the six planetary orbits were produced by the five Platonic solids nested layer within layer? He fitted the cube, tetrahedron, dodecahedron, icosahedron and octahedron (in this order from Saturn inward) between the planets' spherical shells, so that the inscribed sphere and circumscribed sphere of each solid exactly held the orbits of two adjacent planets. A model that explains the whole solar system with five perfect solids — explaining both "why there are only six planets" and, it was hoped, the ratios of their orbits. Breathtakingly beautiful. (He wrote it in Graz, and because there was no suitable printer there, he had it printed in Tübingen.)

![The original 1596 engraving of Kepler's Mysterium Cosmographicum](/content/images/2026/06/figE7_1b_mysterium_real.jpg)

*Figure 7.1: The original engraving from Kepler's _Mysterium Cosmographicum_ (1596): the five Platonic solids nested layer within layer between the spherical shells of the six planets — outermost is Saturn's shell, and inward are nested in turn the cube, tetrahedron, dodecahedron, icosahedron and octahedron. This is an attempt to explain the whole solar system with pure geometry. (Public domain)*

**Then his own data shook it.** Over the next twenty years, Kepler, with Tycho Brahe's extremely precise observations of Mars, forced out the truth: planetary orbits are **not perfect circles but ellipses** ([*Astronomia nova*](https://en.wikipedia.org/wiki/Astronomia_nova), 1609). Once the orbits are ellipses and the distances are precisely measured, the spacings of that set of perfect solids **no longer match** — the dream of explaining the universe with pure geometry, as physics, could not quite stand.

![Tycho Brahe](/content/images/2026/06/figE7_2_tycho.jpg)

*Figure 7.2: Tycho Brahe (1546–1601). It was precisely his extremely precise observations of Mars that forced out "the orbits are ellipses" — with Tycho's data, Kepler made his own perfect-solid model obsolete with his own hands. (Public-domain engraving)*

![Circular orbits overturned by ellipses](/content/images/2026/06/figE7_3_nested_ellipse.png)

*Figure 7.3: When circular orbits give way to ellipses (with the sun sitting at one focus), the spacings of the nested solids, which were held in place by "inscribed/circumscribed spheres fitting seamlessly", no longer match — the perfect geometric model is quietly overturned by more precise data.*

**But what is intriguing is — Kepler never gave it up.** In 1621 he still published a **second edition** of *Mysterium Cosmographicum*, full of added footnotes, yet keeping the core of that set of nested solids; in the 1619 [*Harmonices Mundi*](https://en.wikipedia.org/wiki/Harmonice_Mundi), the five solids are still there. **It was not Kepler who overturned it with his own hands; it was his own more precise astronomy that quietly made it obsolete.** He kept a lifelong love for this beautiful model; what he lost was only its qualification to "explain the universe".

This is exactly the question this journey will ask again and again: **what counts as an "explanation"?** Twice the five solids wanted to explain the universe — Plato as a recipe, Kepler as a framework — and twice they lost to "more precise". Two thousand years later, a giant beast called the "Monster group" seems again to have "matched a secret code" with number theory, and we will run into the same question a third time.

**(A beautiful reversal, as a footnote.)** Kepler lost to "more precise"; but in the history of science there are also times when it goes the other way. Remember that iron law of §5 — periodic crystals allow only 2-, 3-, 4- and 6-fold symmetry, fivefold is forbidden? In 1982 the materials scientist Dan Shechtman, staring at the electron diffraction pattern of an aluminum-manganese alloy, saw a neat ring of **ten bright spots** — the underlying **fivefold symmetry** it revealed "should not exist at all" according to that iron law. He wrote three question marks in his notebook. What followed was a hard fight: he was asked by the head of his laboratory to leave the research group, and it is said that even the two-time Nobel laureate Pauling mocked that there are no quasicrystals, only quasi-scientists; only in 1984 was it published. But he was right — this kind of solid, whose atomic arrangement is highly ordered yet never repeats, is called a **quasicrystal**: it does not violate that iron law, which governs only "periodic" crystals (because it is not periodic at all), yet it really does possess fivefold symmetry. In 2011 Shechtman alone won the Nobel Prize in Chemistry. The same contest over "what counts as right" — this time, nature found a small path around the ban.

**To close this episode, and the whole book too, in one sentence:** this is a journey from **the simplest atom of symmetry** to **the most enormous monster** — the starting point is the five solids you saw today, the end point is that giant beast we dare only glance at from afar. What this episode has done is put the first stop and the last stop side by side for a first look; what remains is to fill in the middle cell by cell.

**Next episode (EP2)**: a 20-year-old young man who wrote a mathematical testament on the night before a duel — Galois. What he will tell us is: **why some equations simply cannot have a root formula written down.** And the answer is hidden in an "atom that cannot be broken apart".

---

## Sources

**Original texts and ancient sources** - Plato, *Timaeus* (the "recipe for all things" of the four elements and the regular polyhedra; the dodecahedron belongs to "the universe as a whole", not to a fifth element) — [Stanford Encyclopedia: Plato's Timaeus](https://plato.stanford.edu/entries/plato-timaeus/) - Euclid, *Elements*, Book XIII (the construction of the five regular polyhedra, and the closing proposition that "there is no sixth") — [Euclid's Elements, Book XIII (D. Joyce, Clark Univ.)](https://mathcs.clarku.edu/~djoyce/java/elements/bookXIII/bookXIII.html) - Theaetetus (died about 369 BC, another account says 391; the systematic treatment of the regular octahedron and icosahedron is attributed to him) — [MacTutor: Theaetetus](https://mathshistory.st-andrews.ac.uk/Biographies/Theaetetus/)

**The Roman dodecahedron** - More than a hundred bronze dodecahedra have been unearthed; there is still no scholarly consensus on their use ("purpose a riddle" is a statement of the current state, not clickbait) — [Wikipedia: Roman dodecahedron](https://en.wikipedia.org/wiki/Roman_dodecahedron)

**Symmetry in nature** - The icosahedral symmetry of virus capsids (Caspar–Klug theory) — [Wikipedia: Capsid](https://en.wikipedia.org/wiki/Capsid) - C60 fullerene (discovered 1985, Nobel Prize in Chemistry 1996) — [Wikipedia: Buckminsterfullerene](https://en.wikipedia.org/wiki/Buckminsterfullerene), [Nobel Prize in Chemistry 1996](https://www.nobelprize.org/prizes/chemistry/1996/summary/) - Haeckel, *Art Forms in Nature* (radiolarian plates; the tendency to idealize is attributed to Haeckel himself) — [Wikipedia: Kunstformen der Natur](https://en.wikipedia.org/wiki/Kunstformen_der_Natur) - Overview of the regular polyhedra — [Wikipedia: Platonic solid](https://en.wikipedia.org/wiki/Platonic_solid), [Wikipedia: Dual polyhedron](https://en.wikipedia.org/wiki/Dual_polyhedron)

**Group theory and the Monster** - Mark Ronan, *Symmetry and the Monster* (OUP 2006; the two metaphors "atom of symmetry" and "periodic table of symmetry" come from this book; Chapter 1, "Theaetetus's Icosahedron") — [Wikipedia: Mark Ronan (the author)](https://en.wikipedia.org/wiki/Mark_Ronan) - The Monster group (order about $8\times10^{53}$, dimension of the smallest faithful representation 196883) — [Wikipedia: Monster group](https://en.wikipedia.org/wiki/Monster_group) - The alternating group $A_5$ (the smallest non-commutative simple group, order 60) — [Wikipedia: Alternating group](https://en.wikipedia.org/wiki/Alternating_group)

**Kepler** - *Mysterium Cosmographicum* (1596; the solar-system model of the nested five solids, still not given up in the 1621 second edition) — [Wikipedia: Mysterium Cosmographicum](https://en.wikipedia.org/wiki/Mysterium_Cosmographicum) - *Astronomia nova* (1609; elliptical orbits) — [Wikipedia: Astronomia nova](https://en.wikipedia.org/wiki/Astronomia_nova) - *Harmonices Mundi* (1619) — [Wikipedia: Harmonice Mundi](https://en.wikipedia.org/wiki/Harmonice_Mundi) - Tycho Brahe (his observational data were the key that let Kepler walk out of his "beautiful mistake") — [Wikipedia: Tycho Brahe](https://en.wikipedia.org/wiki/Tycho_Brahe)

*The historical facts in this article were checked in two rounds against primary sources (including the dates of Theaetetus, the current state of research on the Roman dodecahedron, the C60 timeline, the boundaries of Plato's text, etc.).*
