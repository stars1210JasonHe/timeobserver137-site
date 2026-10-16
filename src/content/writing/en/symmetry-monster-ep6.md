---
title: "Symmetry and the Monster (6): Pandora's box"
date: 2026-07-14
lang: en
series: symmetry-monster
seriesOrder: 6
ghostSlug: symmetry-monster-ep6
---

> Episode six of the series. In the last episode we watched that "Thirty Years' War" all the way through: the classification of all the finite "atoms of symmetry" (the finite simple groups). The conclusion: almost all of them line up in neat infinite families, one after another, but there are
>
> **26** left over that fit into nobody's family. In this episode we open the box holding these 26 exceptions and see where they came from.
>
> When you have picked your first mushroom, or made your first discovery, look around: they grow in clusters. — George Pólya (1887–1985) (quoted in translation)

---

**[Author's note — Yeqiu]**

> Actually, having made this series as far as this episode, I still often doubt myself. The cost and the return of videos like these are completely out of proportion; they do not even get basic traffic, so what is my purpose in making them? I think their purpose may lie in recording my own life and the things I love. As one of the first group of people to come into deep contact with the AI revolution, its impact on me has been very large. From start to finish I have looked at AI with an attitude of embrace, but recent developments have gradually made me doubt it. If AI is really strong enough to replace people easily in a great deal of work, then what is the meaning of human existence? Perhaps from the very beginning we should not have been defined only by work and by economic value?

---

**Companion video (YouTube)**

<iframe width="200" height="113" src="https://www.youtube.com/embed/TewR3xBIRcA?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="Symmetry and the Monster (6): Pandora's box"></iframe>

## Prologue · The exceptions in the box

The master table given by the classification theorem reads almost reassuringly: the finite simple groups, those atoms of symmetry that cannot be taken apart any further, mostly line up in neat infinite families, one family after another, like chemical elements arranged in the periodic table.

How many such families are there in the end? The answer is **18**. The 16 families of groups of "Lie type" that we worked so hard on in the last episode are the main force among them; add the **alternating groups** $A_n$, which we met two episodes earlier, and the plainest of all, the **cyclic groups of prime order**, and you have exactly 18 infinite families. The part of the finite simple groups that "is regular and can be lined up in infinite sequences" ends there.

But in a corner of the master table crouch **26 exceptions**. They belong to no family, and no obvious kinship can be seen among them either; mathematicians gave them a special name: the **sporadic simple groups**; "sporadic" means "one here, one there, not forming a sequence". At the end of the last episode we said we would "open that box"; what the box holds is these 26 sporadic groups.

This box is a bit like Pandora's box: once it is opened, what is inside does not pour out all at once, but **comes out one after another, decades apart**. The earliest batch showed up as early as the 1860s, and then the whole mathematical world **forgot them for nearly a century**, and for a time even suspected that they did not exist at all. Then in 1965 a "starting gun" went off, and over the following ten years sporadic groups were found one after another, more and more of them. And all these sporadic groups, in the end, faintly point toward the same monster, unreasonably large; that will be revealed only in the last two episodes of the series.

In this episode we follow the order in which they made their entrance, through four stories: a **group whose existence was denied and later rehabilitated**, a **surprise that broke the complacency of "the list is already complete"**, a **man holding a gem he could not open**, and a **young man who shut himself in a room, planning to compute for a year, and cracked it in a single day**.

---

---

## Contents

- [§1 · The earliest exceptions: the Mathieu groups that were once denied](#1--the-earliest-exceptions-the-mathieu-groups-that-were-once-denied)
- [§2 · The combinatorial design that holds them up: $S(5,8,24)$ and 759](#2--the-combinatorial-design-that-holds-them-up-s5824s5824s5824-and-759)
- [§3 · Jumping into 24 dimensions: the man who held a gem he could not open](#3--jumping-into-24-dimensions-the-man-who-held-a-gem-he-could-not-open)
- [§4 · A behemoth computed in one day: the Conway group](#4--a-behemoth-computed-in-one-day-the-conway-group)
- [§5 · The same 24: from points, to dimensions, to matrices](#5--the-same-24-from-points-to-dimensions-to-matrices)
- [Epilogue · The box is not closed yet](#epilogue--the-box-is-not-closed-yet)
- [Sources](#sources)

---

## §1 · The earliest exceptions: the Mathieu groups that were once denied

The story begins in Paris in the 1860s. **Émile Mathieu (1835–1890)**, a Frenchman later remembered more for mathematical physics, was studying permutations (rearranging a row of things) when he found a few groups that behaved abnormally.

It is a sad thing to tell: the man who discovered these treasures of the world of symmetry was rejected by the Parisian mathematical world almost all his life. After receiving his doctorate in 1859, for many years he could only make a living by private tutoring and teaching at secondary schools; at a trial lecture arranged to "prove his teaching ability", the dean wrote a devastating assessment of him: that he had learning, but **did not even have the qualities of a mediocre professor**. A chair of mathematical physics that he had waited for anxiously for **19 years** finally fell vacant in 1886, and still it did not go to him. In fact, while this string of setbacks was piling up, from the late 1860s on he had gradually shifted his focus from pure mathematics to mathematical physics: the "Mathieu equation" that physics students all learn today comes from this period (1868), and from 1873 on he also published, volume by volume, his *Course of Mathematical Physics*; by his own account, it was because he had not received, in pure mathematical research, the encouragement he had hoped for. That last disappointment in 1886 only drove the final nail into a road that had long since turned. And so those few strange groups became, if anything, a side line done along the way: a side line that would later make his name immortal in the history of mathematics, from the hands of a man left out in the cold by the establishment all his life.

![The icosahedron that M12 acts on](/content/images/2026/07/mathieu_m12-5.jpg)

*We searched MacTutor, Wikipedia and even the historical archives of the University of Nancy in France, and could not find a single portrait of Émile Mathieu. This man, left out in the cold by Paris all his life, could not even leave his own likeness to posterity; what remains is only these few groups, named after him and like nothing else. (The picture shows an icosahedron: its $12$ vertices are exactly a concrete image of the stage on which $M_{12}$ acts, the "$12$ points". Do not confuse it with the last episode: the rotational symmetry group of the icosahedron itself is still the $A_5$ of EP3, while $M_{12}$ is a different, much larger set of "shuffling methods" on these same $12$ points; the two are not the same thing. Model photograph by Maproom, CC BY-SA 3.0.)*

To say clearly what is abnormal about these groups, we first need one word: **degree of transitivity**. Think of a group as a set of "shuffling methods" acting on $n$ cards. If, no matter which card you name and which position you want to move it to, there is always a method in the group that can do it, we call it **transitive**; if you pick any $k$ cards and name any $k$ positions for them each to go to, and there is always a method in the group that does all of it at once, we call it **$k$-fold transitive** ($k$-transitive). The larger $k$ is, the more "all-powerful" this group is; it is a very strong requirement. (For the precise definition and all the order computations later on, see **Appendix A**.)

How hard is it to satisfy $k$-transitivity, really? Here is an astonishing fact, and it is precisely a by-product of that thirty-year war of the last episode: apart from two groups that are "born large", all rearrangements $S_n$ and its subgroup of even permutations $A_n$, as soon as $k\ge 4$, $k$-transitive groups are **so rare as to be almost nonexistent**. In the whole list of finite simple groups, those that can be 4-transitive, **apart from $S_n$, $A_n$, number only four in all**: exactly the $M_{11}$, $M_{12}$, $M_{23}$, $M_{24}$ that Mathieu discovered (of which $M_{12}$, $M_{24}$ are even 5-transitive, and above 5, apart from $S_n/A_n$, there is not a single one). In other words, these four groups themselves **are** that list of "rare in the extreme". What Mathieu discovered more than a century ago, by hand computation, were some of the most unusual stones in the whole world of symmetry.

He first introduced $M_{12}$ in **1861**, and then fully exhibited $M_{24}$ in **1873**. But after the discovery, what awaited these groups was not applause but **nearly a century of neglect, and a case about "whether it exists at all"**.

The problem lay here: Mathieu defined $M_{24}$ by giving a few "generating methods". But from a few generators alone it is hard to judge how big a group they actually generate. Could these methods, turned over and over, in fact generate only a larger and more ordinary alternating group $A_{24}$, so that the "new group" Mathieu thought he had was an illusion? In an era without modern computing tools, this question hung in the air for decades. In 1898 the American group theorist **G. A. Miller** even published a paper **claiming to have "proved" that $M_{24}$ does not exist at all**, until two years later, in 1900, he withdrew the conclusion himself. (The doubt about existence is real history; this episode with Miller is as recorded in historical sources.) A group later recognized as a treasure of the world of symmetry was once sentenced in black and white as "nonexistent", and a few years later the verdict was overturned: twists like this are not common in the history of mathematics.

The one who really settled the matter of these groups for good, and revealed where their strangeness comes from, was **Ernst Witt (1911–1991)** in 1938. He proved: $M_{24}$ is nothing other than the symmetry group of an unbelievably intricate combinatorial design. That design is called $S(5,8,24)$, and we will go and build it in the next section. The reason the sporadic groups are sporadic has its root buried in combinatorics.

But even with Witt's solid foundation, for more than twenty years after that these five Mathieu groups were still like **five lonely exhibits in a museum**: real, exquisite, yet not known to be connected to anything. The field gradually formed a tacit view: the list of finite simple groups was probably already complete: the infinite families of Lie type, plus the alternating groups, plus the cyclic groups of prime order, and what remained was only these five strange Mathieu exceptions, and nothing more. The box, it seemed, had already been closed.

**What broke this complacency was a starting gun in 1965.** The Croatian mathematician **Zvonimir Janko (1932–2022)** was at the time working on a technical classification problem with very tight conditions. He followed the conditions down, expecting to get a known group, and instead **derived a completely new sporadic group that nobody had expected**, later called $J_1$. This was the first new sporadic group since Mathieu in 1873, **a full 92 years later**.

Janko's road to this point is legendary enough in itself: when young, because of an action labeled "nationalist", he was shut out by the academic world in Yugoslavia and for a time could only teach physics at a secondary school in Bosnia; after many twists and turns he settled in Canberra, Australia. And the discovery of $J_1$ was an enormous surprise, because it **was originally supposed to be proved "nonexistent"**. At the time Janko was writing a paper with that giant of group theory from the last episode, John Thompson, trying to rule out a certain class of possible groups; but he got stuck on the **simplest** case, could not rule it out however he tried, and instead the more he computed, the more it looked as if a new group nobody expected was hiding there. He wrote to Thompson that there was trouble here, and Thompson wrote back that the proof ruling it out was lying right in front of him at that moment, and that if Janko could not manage it, he would. But by the time this letter reached Canberra, Janko **had already built the group**. Even Thompson had misjudged it.

That was at the end of 1964. If this group existed, its order should be 175,560, generated by a set of $7\times7$ matrices (mod 11). Janko and two graduate students of the department reprogrammed an old computer with a memory of only 20K to do these matrix multiplications, computing for several days and nights on end, with input on punched cards and the output checked by hand, the living-room floor covered with rolls of printout. At daybreak all the elements finally came together: the group really was there. There were no mobile phones then to wake the sleeping Janko, so the two graduate students waited in the department for him to arrive in the morning; one of them went up to him, took his hand and told him: **the group exists!**

![Zvonimir Janko, 1964](/content/images/2026/07/janko-4.jpg)

*Zvonimir Janko (1932–2022), photographed in 1964, the very year he computed $J_1$. (Image source: croatianhistory.net, Bjelovar local archive.)*

The silence of 92 years was broken in one stroke, and the shock was enormous: if even one could appear "by accident" like this, by what right could the list be counted complete? $J_1$, like a starting gun, woke the whole field up: in just the following ten years (about 1965 to 1975), sporadic groups were found one after another, more and more of them. Pandora's box had been opened again, and this time no one dared to say lightly that it was empty.

---

## §2 · The combinatorial design that holds them up: $S(5,8,24)$ and 759

Witt's sentence, "$M_{24}$ is the symmetry group of a certain design", traced the strangeness of the sporadic groups all the way to a purely combinatorial object. This object is worth a separate look, because it is so intricate as to seem almost unreal, and this "unreal precision" is exactly the source of the strange temperament of the sporadic groups.

It is called a **Steiner system**. A Steiner system $S(t,k,n)$ is a choice, on $n$ points, of a collection of $k$-point subsets (called **blocks**) such that **every $t$-point subset lies in exactly one block**: no more, no less, exactly one. The larger $t$ is, the harsher this condition. (In the appendix of the last episode we saw the smallest one: $S(2,3,7)$, which is the **Fano plane**, with 7 points, 7 lines, and every 2 points determining 1 line.)

Behind Mathieu's $M_{24}$ is the version of this idea pushed to the limit: **$S(5,8,24)$**: 24 points, the blocks are 8-point subsets (they have a special name, **octads**), and **any 5 points lie in exactly one octad**. Steiner systems with $t=5$ are extremely rare, and $S(5,8,24)$ is the most famous and most symmetric of them. Think how harsh this precision is: grab any 5 of the 24 points, and somewhere there is a unique 8-point set waiting for them; such a coincidence is held up entirely by a seamless combinatorial blueprint behind it.

Here is a signature number: **there are exactly 759 such octads**.

Where does 759 come from? There is a reason so simple it can be told in one line (**double counting**): all $\binom{24}{5}=42504$ of the 5-point subsets are divided up by the 759 octads **with no overlaps and no omissions**: each octad covers exactly the $\binom{8}{5}=56$ 5-subsets inside it. So the number of octads can only be $42504/56=759$. The beauty of it is that this number **does not depend on how you build the design**: as long as the sentence "every 5 points belong to exactly one octad" holds, 759 is fixed. And if you really set out to build one (it can be built hanging on an error-correcting code called the **binary Golay code**), you will count the same 759 again, independently, from a completely different direction. One road proves "any such design must have 759 blocks", the other proves "our concrete construction really realizes it": one hard, one concrete, pinning this number down firmly. (For the explicit construction of $S(5,8,24)$ and the two independent proofs of 759, see **Appendix B**.)

And $M_{24}$ is all the rearrangements of the 24 points that **keep these 759 octads unchanged as a whole**. The combinatorial design and the sporadic group become one here. This also explains the strange high transitivity of the Mathieu groups: what they inherit is the perfect symmetry of this design, in which "any 5 points have exactly equal standing".

---

## §3 · Jumping into 24 dimensions: the man who held a gem he could not open

$S(5,8,24)$ does not grow just one group. It also quietly holds up **the most perfect kind of sphere packing in 24-dimensional space**, and this is where the story of the sporadic groups is pushed to its climax.

First let us put the problem in terms of low-dimensional intuition. **Sphere packing** means stuffing a pile of equal spheres into space as fully as possible without overlapping. A closely related quantity is called the **kissing number**: at most how many spheres of the same size can **touch** one sphere at the same time? In 2 dimensions (imagine a pile of coins), the answer is 6: six one-cent coins exactly surround one in the middle, and no one can squeeze in a seventh. In 3 dimensions the answer is 12; this number looks simple, yet it was once the subject of a dispute between Newton and Gregory, and was only rigorously proved in **1953**.

As soon as the dimension goes up, the kissing number shoots up, and in most dimensions no one can say to this day "what exactly the optimum is". But precisely in **24 dimensions** there appears an anomalous, lone-peak-like spike: **the kissing number is exactly 196560**, a clean, definite number that appears nowhere else.

This number comes from a lattice, the **Leech lattice**. A "lattice" is a regular point array in space extending without end; the kissing number equals the **number of the shortest nonzero vectors** in this point array. Around 1965, the British mathematician **John Leech (1926–1992)**, while studying high-dimensional sphere packing and error-correcting codes, constructed this 24-dimensional lattice (formally published in 1967). It hangs on the $S(5,8,24)$ / Golay code of the previous section: the combinatorial design makes its appearance once more. (Leech was the kind of person who played with mathematics, coding and early computers all together.)

![John Leech](/content/images/2026/07/leech-4.jpg)

*John Leech (1926–1992). (Image source: MacTutor History of Mathematics Archive.)*

Next comes the most human scene in this story. Leech soon realized that the lattice he had built had **an unusually high symmetry**, abnormally high, as if a whole palace he could not see clearly were hiding in it. But Leech himself worked on packings and coding; he was **not a group theory expert, and could not compute** how many symmetries this lattice actually had. He held a gem in his hand, and could not open it.

So he asked around for help. In his own later words (this sentence checked first-hand by Gauss; rendered here in translation): *"I hung this problem under the noses of several people, including Coxeter, Todd and Graham Higman, but the first to bite was Conway."* And the one who made the connection and passed the problem to Conway was the mathematician **John McKay** (there are also recollections that it was Leech himself who promoted it all along the way). The man who "was the first to bite", a young man who was not yet very well known at the time but was about to become famous by this one bite, was called **John Conway (1937–2020)**.

Those 196560 shortest vectors fall exactly into three kinds, each hanging on a concrete structure: those with two coordinates equal to $\pm4$; those with eight coordinates equal to $\pm2$ and lying on some octad; and those with one coordinate equal to $\pm3$ and all the rest $\pm1$, as prescribed by a Golay codeword. Count each of the three kinds, and together they add up to exactly $196560 = 1104 + 97152 + 98304$. (For the complete count of the three kinds of minimal vectors, and why there are exactly these three kinds, see **Appendix C**.)

The unopenable gem that Leech handed over fell next into exactly the right pair of hands.

---

## §4 · A behemoth computed in one day: the Conway group

The Conway who took up this problem was at the time at a low point in his life.

In 1968 he had already been at Cambridge for a few years, yet had "not achieved much of anything" (in the words of his biographer Roberts). He had hardly published any papers, and spent his days in the common room playing chess and all kinds of games he had invented himself. He later recalled that period quite openly, saying that he had become **very depressed, felt he was not doing real mathematics, had published nothing, and felt deeply guilty about it**. The more practical pressure: he had a wife and a group of daughters to support, and the hard-working professors in the department made him genuinely worry whether he might be fired.

![John Conway](/content/images/2026/07/conway-4.jpg)

*John Conway (1937–2020). (Photographed by Thane Plambeck at a 2005 Banff conference, CC BY 2.0.)*

Just then, Leech's "unopenable gem" was passed, through others, into his hands. Interestingly, Conway **was not at all a group theory expert at the time**: later, when Thompson was explaining the relevant arguments to him, Thompson was at one point surprised to find that **he did not even know these things**, and had to give him a remedial lesson on the spot. Yet it was precisely this "outsider to group theory" who took up the problem that even Leech himself could not compute.

He made an almost tragically heroic decision: he drew up an open-ended battle schedule for himself, computing without fail every Wednesday from six in the evening to midnight and every Saturday from noon to midnight, and he said goodbye to his wife, ready to fight a hard battle lasting a year. The result: **the first time he sat down, in half a day to a day, he had worked it out** (that is, in the session of the first Saturday he had scheduled). (His old friend Mike Guy ran the computer part for him, but in their words, the final construction was all done by hand. Conway gave this group a nickname, $\cdot\mathrm{O}$, pronounced "dotto".)

The group he computed is called the **Conway group $\mathrm{Co}_0$**: the set of all the symmetries of the Leech lattice. How big is it? Using the 196560 shortest vectors of the previous section as a handle, its order can be computed step by step. The key step, which is exactly the deepest part of Conway's whole computation and which we too can only cite, not prove, in Appendix D, is this fact: $\mathrm{Co}_0$ can rearrange these 196560 vectors at will, moving any one of them to any other (mathematicians call this "transitive"). So its order equals **the total number of vectors** times **the number of symmetries that "pin down one of the vectors and move only in the remaining space"**, that is, 196560 times the order of a stabilizer, coming in the end to

$$
|\mathrm{Co}_0| = 8{,}315{,}553{,}613{,}086{,}720{,}000 \approx 8.3\times10^{18}.
$$

More than eight billion billion. An obscure young man, still worried about his job, computed by hand, in about one Saturday, from a 24-dimensional point array, a symmetry group of order more than eight billion billion. (Every arithmetic step of this chain of orders will be laid out step by step in Appendix D; the orders and standard notation of the sporadic groups are all cited from the **ATLAS**, the *ATLAS of Finite Groups* (edited jointly by Conway, Curtis, Norton, Parker and Wilson, Oxford University Press 1985): the standard reference handbook of the finite simple groups, in which the order, standard notation, character table and maximal subgroups of each group are all tabulated, the equivalent of a "periodic table handbook" for group theory. Wherever this article marks [ATLAS], it means "this data is cited from this handbook, not rebuilt"; this explanation is not repeated below.)

Here, in passing, a widely circulated version that even quite a few popular books get backwards must be corrected.

That version says: it was Thompson, the one in §1 and also the giant of group theory who proved the odd order theorem in the last episode, who, like an oracle, had computed **in advance** the order this group should have, and Conway only went to verify it. **In fact it was exactly the other way round.** The truth is: after Conway computed the order, **he made a phone call to Thompson; a few minutes later Thompson called back and told him that this was the "double cover" of a new simple group**. One was in charge of computing this astronomical number out of 24 dimensions; the other, within a few minutes, worked back from it to the skeleton of the whole building. At the time a joke went around the mathematical community: **the best way to find a new sporadic group is to phone Thompson, casually give him a number as the order of a group, and see what he says.**

That computation uncovered not one group but a whole cluster. $\mathrm{Co}_0$ itself carries a center $\{\pm I\}$ (reversing the sign of the whole lattice obviously gives the lattice itself again), so it is **strictly speaking not a simple group**; only by dividing out this center do we get the first genuinely new sporadic simple group, $\mathrm{Co}_1$. Pinning down vectors of different types grows two more new sporadic groups, $\mathrm{Co}_2$ and $\mathrm{Co}_3$. And not only that: several sporadic groups that had just been discovered independently by others at the time and were still scattered on their own (McLaughlin, Higman–Sims, Suzuki and others) were also all shown to be **hiding inside $\mathrm{Co}_0$**, and were taken in along with it. One day's computation poured a whole family out of the box at once. (For the order of $\mathrm{Co}_0$ and its relation to $\mathrm{Co}_1/\mathrm{Co}_2/\mathrm{Co}_3$, see **Appendix D**: you will see that the stabilizer that "pins down one shortest vector" is itself exactly the sporadic group $\mathrm{Co}_2$.)

This computation also completely changed Conway himself. That guilt-ridden "games addict" suddenly became famous. And more interestingly, **in the 12 months he later called his "miracle year" (around 1969)**, he also did two other things that made his name go down in history: using Go stones on a Go board, he worked out by hand the "**Game of Life**": on a square grid, each cell lives and dies in step according to just a few extremely simple rules, "with too many live neighbors it disappears from crowding, with too few it disappears from loneliness, with neither too many nor too few a new one is born", and yet with just these few rules, crawling, oscillating, self-replicating complex patterns evolve spontaneously, and people later even built a complete computer inside it (it became a sensation in 1970 through Martin Gardner's popular science column). In the same year he also invented a whole new kind of number, the "**surreal numbers**": starting from an analysis of "who can win a game", he grew a number system large enough to hold all the real numbers, the infinitely large and the infinitely small. The self-doubt that had troubled him for years was swept away within this year. He later set himself an "oath":

> ***"Thou shalt stop worrying and feeling guilty; thou shalt do whatever thou pleasest."***
>
> (You shall stop worrying and feeling guilty; you shall do as you please.)

The man who had once felt guilty about "playing games all day and neglecting his proper work" was at peace from then on. In his own later words, rendered here in translation: *"You play games, and by playing games you play your way to the surreal numbers. At Cambridge I always used to feel guilty about playing games all day... until I discovered the surreal numbers and finally understood: playing games is itself mathematics."*

The best way to appreciate this "extreme simplicity generating complexity" is to run it yourself. Below is a minimal implementation that can be run directly; the actual rule of life and death is only the line in the middle:

```python
import numpy as np

# Rule of life and death (Conway B3/S23): a cell stays alive only with 2-3 live neighbors; an empty cell with exactly 3 live neighbors is born
def step(g):
    n = sum(np.roll(np.roll(g, i, 0), j, 1)
            for i in (-1, 0, 1) for j in (-1, 0, 1)) - g
    return ((n == 3) | ((g == 1) & (n == 2))).astype(int)

# Initial live cells of the Gosper glider gun (column, row)
gun = [(0,4),(0,5),(1,4),(1,5),(10,4),(10,5),(10,6),(11,3),(11,7),
       (12,2),(12,8),(13,2),(13,8),(14,5),(15,3),(15,7),(16,4),(16,5),
       (16,6),(17,5),(20,2),(20,3),(20,4),(21,2),(21,3),(21,4),(22,1),
       (22,5),(24,0),(24,1),(24,5),(24,6),(34,2),(34,3),(35,2),(35,3)]

grid = np.zeros((50, 80), int)
for x, y in gun:
    grid[y + 3, x + 3] = 1
for _ in range(120):        # evolve 120 generations; each generation calls only the step above
    grid = step(grid)
```

First, two words explained. Among the patterns in the Game of Life, some stay still in place, some blink in place, and some **crawl across the grid** like little bugs. The simplest crawling pattern is called a **glider**: a small arrow made of five live cells, which recovers its shape every four steps while moving one cell diagonally, and so glides on and on. A **glider gun** goes one step further: it **itself stays in place**, yet every thirty steps it **spits out a new glider**, without ever stopping, so the number of live cells keeps growing without bound. The one Bill Gosper built in $1970$ was the first glider gun in history. When run, it looks like this:

![Conway's Game of Life · the Gosper glider gun](/content/images/2026/07/gosper_glider_gun-3.gif)

*Figure · The most direct demonstration of "extremely simple rules spontaneously growing complex, self-propagating structures". It was precisely this "gun" that settled an open case: Conway had offered a prize of 50 dollars, betting that "no initial pattern can make the number of live cells grow without bound", and in 1970 Bill Gosper's group at MIT built it as a counterexample and won the prize money. (This figure was rendered generation by generation from the code above; the complete script is at blog-assets/gol/game_of_life.py.)*

---

## §5 · The same 24: from points, to dimensions, to matrices

Looking back over this episode, you will find that everything revolves around the same number: **24**. This is not a coincidence: it is the nail that strings the three stories of Mathieu, Leech and Conway into one line.

Following the idea that "a group is the symmetry of a geometric object", we can give every group appearing in this episode two things: **what it is the symmetry of** (its geometric form), and what it concretely **looks like** (its mathematical representation: permutations, or matrices). And these three stories are exactly the same 24 appearing at three levels:

- **24 points**: the Mathieu groups are symmetries on 24 (or 12) **points**: rearrangements that preserve a Steiner design. Their representation is the **permutations** of these points (swapping points around), discrete and visible.
- **24 dimensions**: the Leech lattice lives in **24-dimensional** space.
- **24×24 matrices**: the Conway group is the symmetry that preserves the Leech lattice; its representation is **24×24 real matrices** (linear transformations), continuous and multipliable.

And the most crucial point among them is: **the Mathieu group $M_{24}$ sits inside the Conway group $\mathrm{Co}_0$**: it is exactly the part of the symmetries in $\mathrm{Co}_0$ that "only swaps the 24 coordinate axes around and leaves everything else alone". From beginning to end it is **the same set of 24**: the 24 points of $S(5,8,24)$, the 24 coordinates of the Golay code, the 24 dimensions in which the Leech lattice lives, the $24\times24$ of the Conway group.

| Group | Geometric form (symmetry group of what object) | Concrete representation (permutation degree / matrix dimension × field) | Order |
| --- | --- | --- | --- |
| $M_{11}$ | The stabilizer in $M_{12}$ of $1$ fixed point ($=\mathrm{Aut}\,S(4,5,11)$) | Permutation degree $11$ (sharply $4$-transitive) [ATLAS] | $7920$ |
| $M_{12}$ | Automorphism group of the Steiner design $S(5,6,12)$ | Permutation degree $12$ (sharply $5$-transitive); $\subset M_{24}$ [ATLAS] | $95040$ |
| $M_{22}$ | The pointwise stabilizer in $M_{24}$ of $2$ fixed points | Permutation degree $22$ ($3$-transitive) [ATLAS] | $443520$ |
| $M_{23}$ | The pointwise stabilizer in $M_{24}$ of $1$ fixed point ($=\mathrm{Aut}\,S(4,7,23)$) | Permutation degree $23$ ($4$-transitive) [ATLAS] | $10200960$ |
| $M_{24}$ | Automorphism group of the Witt design $S(5,8,24)$ (preserving the $759$ octads) | Permutation degree $24$ ($5$-transitive); $24\times24$ **permutation matrices** (linearly $=\mathbf{1}\oplus\mathbf{23}$) | $244823040$ |
| $\mathrm{Co}_0$ | **Automorphism group of the Leech lattice $\Lambda_{24}$** (the orthogonal transformations preserving the lattice) | $24\times24$ **real orthogonal matrices** (a finite subgroup, $\subset O(24)$); contains $-I$ | $\approx 8.3\times10^{18}$ |
| $\mathrm{Co}_1$ | $\mathrm{Co}_0/\{\pm I\}$ (the first new **simple** sporadic group) | ⚠️**Not** $24$-dimensional; minimal faithful matrix dimension $=276$ [ATLAS] | $\tfrac12\vert \mathrm{Co}_0\vert $ |
| $\mathrm{Co}_2$ | The stabilizer in $\mathrm{Co}_0$ of a **type-2** (minimal) vector (there are $196560$ type-2 vectors in all) | Acts on the **$23$-dimensional orthogonal complement** $v^\perp$ of that vector ($\mathbb{R}^{24}{=}\mathbb{R}v\oplus v^\perp$); minimal faithful matrix dimension $=\mathbf{23}$ [ATLAS] | $42305421312000$ |
| $\mathrm{Co}_3$ | The stabilizer in $\mathrm{Co}_0$ of a **type-3** (norm $6$) vector (there are $16773120$ type-3 vectors in all) | Acts on the **$23$-dimensional orthogonal complement** of that vector; minimal faithful matrix dimension $=\mathbf{23}$ [ATLAS] | $495766656000$ |

*The minimal faithful permutation degrees / matrix dimensions in the table are facts of ATLAS representation theory (marked [ATLAS]).*

**Two honest small notes** (to keep you from reading it wrong):

- **"Permutation degree" and "matrix dimension" are two different things**. The 24, 23… in the Mathieu column of the table are **numbers of points**; but looking at $M_{24}$ as matrices, its permutation representation on 24 points is "reducible" and can be split into $\mathbf{1}\oplus\mathbf{23}$; the smallest truly **irreducible** matrix dimension is **23**. The 24 of $\mathrm{Co}_0$ is the genuine, unsplittable 24-dimensional matrix representation.
- **The only break in this "24 line" is at $\mathrm{Co}_1$**. For the simple group obtained from $\mathrm{Co}_0$ by dividing out the center $\{\pm I\}$, $\mathrm{Co}_1$, that 24-dimensional representation cannot be passed down, and its smallest faithful matrix dimension jumps to **276**. For honesty's sake, this spot has to be marked.

---

## Epilogue · The box is not closed yet

From Mathieu's five, denied and rehabilitated, to Janko's starting gun, and on to the whole cluster Conway poured out in one day: once the box was opened, the sporadic groups came out one after another. Add the batch that **Bernd Fischer** later found by another method (studying a class of objects called "3-transposition groups"), and the list grew longer and longer.

A necessary reminder must be inserted here, because it is a classic notational trap: Fischer at first wrote the three groups he found as $M(22)$, $M(23)$, $M(24)$, **deliberately** borrowing the letters of Mathieu's three largest groups $M_{22}$, $M_{23}$, $M_{24}$, because they are built on closely related point configurations. But they are **completely different groups**: Mathieu's $M_{22}$ has order 443,520, while Fischer's one (written in modern notation as $\mathrm{Fi}_{22}$, "Fi" taken from the surname of its discoverer Fischer) has order about $6.46\times10^{13}$, about **one hundred and fifty million times** larger. The same letter, the same subscript, two groups worlds apart; modern literature separates them as $\mathrm{Fi}$ and $M$, and when you read about them elsewhere you need to be careful too.

In the end, this list stopped at the number **26**. And among these 26 sporadic groups lies a dividing line that gives one pause: most of them, 20 out of the 26, were in the end all found to be **parts of the same Monster group**; the mathematician Griess gave this family a warm name, the "**happy family**", and the whole cluster Conway computed single-handedly is in it. The remaining 6 are groups wholly outside, which even this Monster cannot take into its belly, and their name is just as fitting: the **pariahs**. What gives one pause is that the Janko group $J_1$, which "fired the starting gun" at the beginning of this episode, is itself exactly one of these 6 pariahs: the one who set off the whole hunt is in the end not in that warm big family. 26 sporadic groups: 20 belong to the same Monster, and 6 stand in a class of their own, acknowledging no one.

The Monster that can take 20 sporadic groups into its belly is the very thing this whole series has been hinting at from a distance since the first episode. How big exactly it is, and why it turns out to share a secret code with a branch of mathematics that seems to have nothing to do with it: that is the business of the last two episodes of the series.

The box is not closed yet.

---

### Appendix A (full proof) · Multiple transitivity and the Mathieu groups

![Multiple transitivity and the five Mathieu groups](/content/images/2026/07/ep06_mathieu_v1-4.png)

*Figure A · What $k$-transitivity means ($k=1\dots5$), "apart from $S_n/A_n$ there are only four 4-transitive groups", the chain of orders $M_{24}\to M_{23}\to M_{22}\to M_{21}=\mathrm{PSL}(3,4)$, and the orders of the five Mathieu groups. (Made by this channel · mathematical infographic)*

![Animation A · Orbit–stabilizer](/content/images/2026/07/fig_orbitstab_24-1.gif)

*Animation A · The orbit–stabilizer theorem: the order of a group = orbit size × stabilizer size (illustrated here with $24=4\times6$). This is exactly the tool this appendix uses to count the orders of the five Mathieu groups.*

**What this section is going to do**. The main text says that the "abnormally high degree of transitivity" of the Mathieu groups is the first sign of their strangeness. We first make the word "degree of transitivity" precise, then borrow a general tool for "counting how big a group is" and count out the orders of the five Mathieu groups one by one; the end point will land back on that $\mathrm{PSL}(3,4)$ of EP5 Appendix B, a hidden thread that sews the two episodes together.

**Concept explained here: what "degree of transitivity" is**. Permutations, permutation groups, $S_n$ and $A_n$, and the smallest non-abelian example $S_3$ were all explained thoroughly in the "group theory toolbox" of EP2; here one sentence is enough to wake them up: a **permutation group** $G$ is a set of rearrangements on some finite point set $\Omega$ ($n$ points) that itself forms a group (closed under composition, contains "do nothing", every step can be undone). This episode asks of it only one new question that EP2 did not ask: how **flexible** can this set of rearrangements be? This is the **degree of transitivity**. We call $G$ **$k$-fold transitive** ($k$-transitive) if, for **any** two **ordered** lists of $k$ distinct points each, $(a_1,\dots,a_k)$ and $(b_1,\dots,b_k)$, one can always find in the group a $g$ that moves the former onto the latter, one by one. **To give an analogy**: $G$ is so large that it is like a nimble hand: any $k$ pieces on the table, it can place all at once on any $k$ squares you name. If such a $g$ is also **unique** (there is only one way of placing them), it is called **sharply $k$-fold transitive** (sharply $k$-transitive). The larger $k$ is, the more marvelous the powers of this hand, and "marvelous powers" is precisely a synonym for rarity.

**Small examples (warming up first, with zero prerequisites)**.

- The full symmetric group $S_n$ (all rearrangements of $n$ points) is **sharply $n$-transitive**: from any arrangement to any arrangement, there is exactly one way of moving.
- The alternating group $A_n$ (even permutations) is **$(n{-}2)$-transitive**: the first $n-2$ points can be moved at will, and the order of the last two points is locked by "evenness".
- In general, multiply transitive groups with $k\ge4$ are **extremely rare**. How rare? The classification theorem (that thirty-year war of EP5) gives a categorical corollary: **apart from $S_n/A_n$, $4$-transitive groups number only four in all**, exactly the Mathieu groups $M_{11},M_{12},M_{23},M_{24}$ (of which $M_{12},M_{24}$ go further up to $5$-transitive, and above $5$, apart from $S_n/A_n$, not one is left). These four sporadic groups **themselves are** that list of rarities: this is the first fingerprint of their "belonging to no family".

**Explicit object: where the five Mathieu groups come from**. They all grow on **the same family of Steiner designs** (what a design is, Appendix B explains thoroughly; here we just use it): $M_{24}$ is **all the automorphisms** of the design $S(5,8,24)$. An "automorphism" is a **structure-preserving rearrangement**: all the ways of moving that rearrange the $24$ points but leave the structure of "which $8$ points count as a block" not the least bit disturbed; the notation $\mathrm{Aut}$ is its abbreviation, and $\mathrm{Aut}\,X$ reads "the group formed by all automorphisms of $X$". $M_{23},M_{22}$ are what is left of it after **holding $1$, $2$ points fixed** (called **pointwise stabilizers**). And $M_{12},M_{11}$ live on a **sister design** $S(5,6,12)$: $12$ points, $6$-point blocks, every $5$ points falling in exactly one block, the "$12$-point version" of the same idea, $M_{12}=\mathrm{Aut}\,S(5,6,12)$ ($M_{11}$ fixes one more point). (The answer to "where these $12$ points come from" is right here: it is not a subset game of picking, out of the $24$ points, $12$, but a small design of its own, independent and self-contained.)

**Degree of multiple transitivity (citing Ernst Witt's theorem)**. The defining property of $S(5,8,24)$, "every $5$ points lie in exactly one octad", puts "any $5$ points" on a completely equal footing, so

> **Theorem (Witt 1938)**: $M_{24}=\mathrm{Aut}\,S(5,8,24)$ is, on $24$ points, **$5$-transitive**; peeling off points one at a time gives $M_{23}$ ($4$-transitive) and $M_{22}$ ($3$-transitive). Likewise $M_{12}$ is, on $12$ points, **sharply $5$-transitive**, and $M_{11}$ sharply $4$-transitive.

**What exactly the words "Witt's theorem" refer to and where they come from, explained once and for all**. In 1938, Witt published two companion papers back to back in the same volume of the *Abhandlungen aus dem Mathematischen Seminar der Universität Hamburg*: *Die 5-fach transitiven Gruppen von Mathieu* (literally "Mathieu's $5$-fold transitive groups", pp. 256–264) and *Über Steinersche Systeme* ("On Steiner systems", pp. 265–275). The "Witt's theorem" cited in this appendix is **the transitivity statement in the box above**, from **the first paper** (its title is its content); **the second paper** studies Steiner systems themselves and gives a systematic construction of $S(5,8,24)$ (together with the sister design $S(5,6,12)$), which is why it is called the "**Witt design**" (this design had been described even earlier, in Carmichael 1931, *Tactical Configurations of Rank Two*; the contribution of Witt's two papers was to truly establish the equation "design $\leftrightarrow$ group"). The **uniqueness** of the design (there is only one up to isomorphism) is today a standard theorem; for a modern textbook proof see Wilson, *The Finite Simple Groups*, §5.2.4 "Uniqueness of the Steiner system $S(5,8,24)$" in the references section. The complete proof needs the "**extendability**" of designs (the technique of growing small designs layer by layer into big ones), and this episode **only cites it, without rebuilding it**. But **as soon as we have it, the orders can be counted out by us step by step**; below, the same tool is used throughout.

**The key tool: orbit–stabilizer; first, why it is right**. First let us ground the word "action": to say $G$ **acts** on a point set means that each group element moves these points by a fixed rule, and "first move by $g$, then by $h$" agrees with the group multiplication. EP5 Appendix H already used orbit–stabilizer to compute the involution centralizer of $A_5$ (the account of $60/15=4$); here we walk through "why it is right" completely. $G$ acts on a point set; fix your eye on one point $x$: all the positions it can be moved to are called the **orbit** of $x$, and those $g$ that hold it fixed form a subgroup $G_x$ (the **stabilizer**). The theorem says $|G|=|\text{orbit}|\cdot|G_x|$. **Why?** Sort the elements of $G$ into piles by "where they send $x$": the $g$ that send it to the same target point together make exactly one big block (each of size equal to the stabilizer, $|G_x|$), and the number of piles $=$ the number of places $x$ can go to $=$ the orbit size. Multiply, and you have the whole of $|G|$. Carry this over to **ordered $k$-tuples**: $k$-transitivity means that an ordered $k$-tuple can go anywhere (orbit $=$ all $n(n{-}1)\cdots(n{-}k{+}1)$ of them), hence

$$
|G|\;=\;\underbrace{n(n-1)\cdots(n-k+1)}_{\text{number of ordered }k\text{-tuples}}\;\times\;\bigl|G_{(x_1,\dots,x_k)}\bigr|.
$$

**Step by step: the order of $M_{24}$ lands back on $\mathrm{PSL}(3,4)$**. $M_{24}$ is $3$-transitive, so $|M_{24}| = 24\cdot23\cdot22\cdot|M_{21}|$, where $M_{21}$ is the pointwise stabilizer left after holding $3$ points fixed. This $M_{21}$ has a familiar face: it is exactly **$\mathrm{PSL}(3,4)$**.

At first sight this name is three letters and two numbers, but in fact each layer is doing one plain thing; let us take it apart here:

- **The base $\mathbb{F}_4$ (that "$4$")**: the finite field with $4$ elements, the smallest four-element number system in which you can add, subtract, multiply and divide. It is **not** "arithmetic mod $4$", $\mathbb{Z}/4$ (there $2\times2=0$ and $2$ has no inverse, so division limps); it is $\{0,\,1,\,\omega,\,\omega^2\}$, and the whole multiplication is uniquely determined by one rule, $\omega^2=\omega+1$. In EP5 we got used to $\mathbb{F}_2=\{0,1\}$; $\mathbb{F}_4$ is its four-element cousin. Note one small fact that we are about to use: in $\mathbb{F}_4$ **every nonzero element satisfies $x^3=1$** (there are exactly $3$ nonzero elements, precisely the three cube roots of $1$).
- **$\mathrm{GL}(3,4)$** (General Linear): over $\mathbb{F}_4$, all the **invertible $3\times3$ matrices**.
- **Add S** (Special, $\mathrm{SL}$): keep only those with **determinant $=1$**.
- **Add P** (Projective, $\mathrm{PSL}$): then regard the **scalar matrices** $\lambda I$ (overall stretching) as "the same do-nothing", and quotient them out.

In one sentence: $\mathrm{PSL}(3,4)$ = "over the field with $4$ elements, the invertible $3\times3$ matrices, the symmetries left after fixing the determinant and flattening out overall stretching".

**Seeing is believing: a few concrete members**. Over $\mathbb{F}_4=\{0,1,\omega,\omega^2\}$ ($\omega^2=\omega+1$), the three matrices below all have determinant equal to $1$, and are all members of $\mathrm{SL}(3,4)$:

$$
M_1=\begin{pmatrix}1&\omega&0\\0&1&0\\0&0&1\end{pmatrix},\qquad M_2=\begin{pmatrix}0&1&0\\0&0&1\\1&0&0\end{pmatrix},\qquad M_3=\begin{pmatrix}\omega&0&0\\0&\omega^2&0\\0&0&1\end{pmatrix}.
$$

($M_1$ is upper triangular with all $1$s on the diagonal, $\det=1$ visible at a glance; $M_2$ rotates the three coordinates around once, $\det=1$; for $M_3$, $\det=\omega\cdot\omega^2\cdot1=\omega^3=1$.) **First count how many matrices $\mathrm{SL}(3,4)$ has in all**, which we are about to need: invertible $=$ the three rows are linearly independent; count row by row. The first row is any nonzero vector, $4^3-1=63$ choices; the second row must not be a multiple of the first, $4^3-4=60$ choices; the third row must not fall into the plane spanned by the first two rows, $4^3-4^2=48$ choices. So $|\mathrm{GL}(3,4)|=63\cdot60\cdot48=181440$. The determinant, over its $3$ nonzero values, **divides** these $181440$ matrices **evenly into three parts** (why evenly? Take a fixed matrix with $\det=\omega$, call it $D$; "multiplying on the right by $D$" moves the part with $\det=1$ one-to-one onto the part with $\det=\omega$, so the three parts must be the same size), and the part with $\det=1$ is

$$
|\mathrm{SL}(3,4)|=181440/3=60480.
$$

**"Quotienting out the scalars", made concrete**, means: there are exactly three scalar matrices $\lambda I$ ($\lambda=1,\omega,\omega^2$, which, since $\lambda^3=1$, all stay in $\mathrm{SL}$), so

$$
M_1,\qquad \omega M_1=\begin{pmatrix}\omega&\omega^2&0\\0&\omega&0\\0&0&\omega\end{pmatrix},\qquad \omega^2 M_1
$$

these three matrices **count as the same element** in $\mathrm{PSL}(3,4)$: the $60480$ $\mathrm{SL}$ matrices just counted are glued together three by three in this way, giving $60480/3=20160$ truly different symmetries.

**This step of "identification" is itself a theorem, not a matter of course**: after holding $3$ points fixed, the remaining $21$ points arrange themselves exactly into a **projective plane** $\mathrm{PG}(2,4)$. This "plane" can be built here in one sentence: in three-dimensional space $\mathbb{F}_4^3$, take the **lines through the origin** as "points" and the **planes through the origin** as "lines", and "a point lies on a line" means "the line lies in the plane". Count how many "points" there are: there are $4^3-1=63$ nonzero vectors in all; vectors that are multiples of one another span the same line through the origin, and each such line carries exactly $4-1=3$ nonzero vectors, so the number of "points" $=(4^3-1)/(4-1)=63/3=21$: no more, no less, it matches exactly. **You have seen this face**: the Fano plane of EP5 Appendix E is what the same construction produces over $\mathbb{F}_2$, $\mathrm{PG}(2,2)$ ($7$ points, $7$ lines, $3$ points on each line); change the field from $2$ elements to $4$ elements, and it is "enlarged" into $\mathrm{PG}(2,4)$: **$21$ points, $21$ lines, $5$ points on each line ($=4+1$: in a plane through the origin there are exactly $(4^2-1)/3=5$ lines through the origin), and any $2$ points determine a unique line**. Invertible matrices by nature carry "lines through the origin" to "lines through the origin", and this is exactly the way $\mathrm{PSL}(3,4)$ acts on $\mathrm{PG}(2,4)$ (a scalar matrix maps every line back to itself, so only after flattening out the scalars is the action clean and without repetition); and that the action of $M_{21}$ on these $21$ points is exactly this belongs to Witt's theory of designs; the ATLAS simply writes $M_{21}:=\mathrm{PSL}(3,4)$, and this episode **cites it without rebuilding it**. With this, the order counted in EP5 Appendix B can be carried over directly:

$$
|M_{21}|=|\mathrm{PSL}(3,4)|=\frac{(4^3{-}1)(4^3{-}4)(4^3{-}16)}{(4-1)\cdot\gcd(3,3)}=\frac{63\cdot60\cdot48}{3\cdot3}=20160.
$$

This formula can now be read through at a glance: **the numerator $63\cdot60\cdot48=181440$ is exactly the $|\mathrm{GL}(3,4)|$ counted row by row just now**; **the first $\div\,3$ is exactly that step of "pinning down the determinant"** ($181440/3=60480=|\mathrm{SL}(3,4)|$); **the second $\div\,3$ (that is, $\gcd(3,3)$) is "flattening out the stretching"**: for $\lambda I$ to stay in $\mathrm{SL}$ it must have $\det(\lambda I)=\lambda^3=1$; the small fact from before says that, of $\mathbb{F}_4$, the $3$ nonzero elements **all** satisfy this, so exactly $3$ scalar matrices fold into one "do nothing", and we divide by $3$ once more. $181440/3/3=20160$: together with that "three glued into one" of $M_1,\omega M_1,\omega^2M_1$, these are two readings of the same account.

Hence

$$
\boxed{\,|M_{24}| = 24\cdot23\cdot22\cdot 20160 = 244{,}823{,}040 = 2^{10}\cdot3^{3}\cdot5\cdot7\cdot11\cdot23.\,}
$$

Peel off two more layers point by point: $|M_{23}|=|M_{24}|/24=10{,}200{,}960$, $|M_{22}|=|M_{23}|/23=443{,}520$.

**The two sharp little brothers**. $M_{12}$ is sharply $5$-transitive $\Rightarrow$ after holding $5$ points fixed, **nothing is left** (the stabilizer is trivial, of order $1$), and its order is just the number of ordered $5$-tuples itself:

$$
|M_{12}| = 12\cdot11\cdot10\cdot9\cdot8 = 95040 = 2^{6}\cdot3^{3}\cdot5\cdot11,\qquad |M_{11}| = 11\cdot10\cdot9\cdot8 = 7920 = 2^{4}\cdot3^{2}\cdot5\cdot11.
$$

**Let us compute one concretely (how big $M_{24}$ still is after holding $5$ points fixed)**. $M_{24}$ is $5$-transitive but **not** sharply so: the orbit of an ordered $5$-tuple has size $=24\cdot23\cdot22\cdot21\cdot20=5{,}100{,}480$, so each ordered $5$-tuple is held fixed by exactly

$$
\bigl|G_{(x_1,\dots,x_5)}\bigr| = \frac{|M_{24}|}{24\cdot23\cdot22\cdot21\cdot20} = \frac{244823040}{5100480} = 48
$$

elements: after holding $5$ points fixed, a group of order $48$ is still left moving on the remaining $19$ points (this is what its "not sharp" means; if it were sharp, this would be $1$). Compare with $M_{12}$: $95040/95040=1$, the stabilizer really is trivial: sharpness in its bare form.

---

### Appendix B (full proof) · The Witt design $S(5,8,24)$ and the $759$ octads

![S(5,8,24): 24 points, a real octad, 5 points forcing out 3 points](/content/images/2026/07/ep06_mog_v1-3.png)

*Figure B · $S(5,8,24)$ seen with your own eyes: the $24$ points arranged in a $4\times6$ array (the layout borrows the shape of Curtis's Miracle Octad Generator (MOG, 1976); the labels $1$–$24$ are the coordinates of this appendix's Golay construction). Left: take any $5$ points, here $\{1,2,3,4,5\}$; right: of all $759$ octads exactly one contains them, $\{1,2,3,4,5,15,17,21\}$, and the $3$ points forced out ($15,17,21$) are marked in red. This is not a schematic: the octad in the figure is taken from the real construction of this appendix, and the labels correspond bit for bit to the generator matrix. (Made by this channel)*

![Animation B · 759 by double counting](/content/images/2026/07/fig_doublecount_759-1.gif)

*Animation B · Double counting: all $\binom{24}{5}=42504$ of the 5-point subsets are divided up, with no overlaps and no omissions, by the $\binom{8}{5}=56$ inside each octad, so there are exactly $42504/56=759$ octads.*

**What this section is going to do**. Why $M_{24}$ exists and why it is so symmetric is all staked on an unbelievably intricate combinatorial design. We **build it with our own hands**, and then count the signature number $759$ along two roads that have nothing to do with each other; only when the two roads agree does it really stand firm.

**Concept explained here: Steiner systems**. $S(t,k,n)$ is a choice, on $n$ points, of a collection of $k$-point subsets (each piece is called a **block**), with the requirement that **every $t$-point subset is covered by exactly one block**. **To give an analogy**: like the rules of a perfect jigsaw puzzle, any $t$ points fall, no more and no less, into exactly one piece. The larger $t$ is, the harsher it is; $t=5$ is already an extremely rare existence.

**Small example (tying back to EP5 Appendix E)**. $S(2,3,7)$ is the **Fano plane**: $7$ points, $7$ "lines" ($3$-point blocks), every $2$ points lying on exactly one line; in EP5 Appendix E we already listed all seven lines. $S(5,8,24)$ is the same idea pushed to the extreme: $24$ points, $8$-point blocks, $5$ points determining one block.

**Explicit object: the Witt design $S(5,8,24)$**. $24$ points; the blocks are $8$-point subsets, given a special name, **octads** (octad: think of it as, among the $24$ points, a chosen "$8$-point building block"); **every $5$ points fall in exactly one octad**. That it exists is not obvious; we borrow a harder object to build it for real.

**Existence construction (hanging on the binary Golay code)**. **First, do not be scared off by the word "code"; its use can be said clearly in one sentence: we want to build a pile of special $8$-point subsets, and the Golay code is the machine that generates them.** Concretely, the **extended binary Golay code** $\mathcal{G}_{24}$ is, in $\mathbb{F}_2^{24}$ (the vector space of vectors with $24$ components, each $0/1$), a $12$-dimensional subspace, with $2^{12}=4096$ **codewords** in all (that is, the vectors in the subspace), and the **Hamming weight** of any nonzero codeword (that is, the number of $1$s) is at least $8$. This number has a common short name, the "**weight**"; below, "weight" and "Hamming weight" are used interchangeably, and both mean this one number. **Small example**: the $4$-bit string $0110$ has weight $=2$; the $8$-bit string $10110100$ has weight $=4$; to say a $24$-bit codeword has "weight $8$" is to say that on exactly $8$ coordinates it takes $1$, and the remaining $16$ coordinates are all $0$. Construction: the generator matrix $[\,I_{12}\mid A\,]$, where the $12\times12$ matrix $A$ is filled, using the **quadratic residues** modulo $11$ (the nonzero remainders that can be written as the square of some number; squaring one by one modulo $11$ gives them: $1^2=1,\ 2^2=4,\ 3^2=9,\ 4^2=16\equiv5,\ 5^2=25\equiv3$, while $6^2,\dots,10^2$ only give the same batch of numbers again, so the quadratic residues $=\{1,3,4,5,9\}$), on $\{\infty,0,\dots,10\}$ (Paley bordered type). Saying "written out" means really written out: below is the generator matrix with $12$ rows and $24$ columns that we use, $G=[\,I_{12}\mid A\,]$. Left of the vertical bar is the identity matrix $I_{12}$, corresponding to coordinates $1$–$12$ (information bits); on the right is $A$, corresponding to coordinates $13$–$24$ (check bits). The rows and columns of $A$ are both numbered by $\{\infty,0,1,\dots,10\}$, and the filling rule is three sentences: the $\infty$ row and the $\infty$ column are all filled with $1$ (only the top-left cell $\infty\infty$ is filled with $0$); the diagonal is filled with $1$; for the other cells, row $a$ column $b$ is filled with $1$ if and only if $(a-b)\bmod 11\in\{1,3,4,5,9\}$ (in the block below, each row: the left $12$ bits are a row of $I_{12}$, the right $12$ bits are the corresponding row of $A$; if bit $k$ of the left half is $1$, it is row $k$):

```text
100000000000 | 011111111111
010000000000 | 110100011101
001000000000 | 111010001110
000100000000 | 101101000111
000010000000 | 110110100011
000001000000 | 111011010001
000000100000 | 111101101000
000000010000 | 101110110100
000000001000 | 100111011010
000000000100 | 100011101101
000000000010 | 110001110110
000000000001 | 101000111011
```

All $2^{12}=4096$ codewords are everything you can get by "picking any of these $12$ rows and adding them modulo $2$ (bitwise XOR)". **The key is one sentence**: regard each codeword of **weight exactly $8$** as the coordinates where its $8$ entries $1$ sit (an $8$-point subset); these **are** the octads.

**Compute one on the spot**. Add rows $1$ to $5$ modulo $2$, and get

```text
111110000000 | 001010001000
```

Count them: exactly $8$ entries $1$, at coordinates $1,2,3,4,5,15,17,21$ (cells $3,5,9$ of the right half are coordinates $15,17,21$): a genuine weight-$8$ codeword, exactly the octad highlighted in Figure B, $\{1,2,3,4,5,15,17,21\}$. The left half is the identity matrix, so the codeword whose "information bits are exactly $\{1,2,3,4,5\}$" is this one and only this one; a computation shows its weight is exactly $8$, so it is an octad containing $\{1,2,3,4,5\}$. "$5$ points forcing out $3$ points", brought down onto the matrix, is the check bits $15,17,21$ being **computed** by these five rows (as for "it is the **only** octad containing these $5$ points", that is the Steiner property below, not the matrix's business). A free bonus: apart from row $1$ (weight $12$), **rows $2$ to $12$ are themselves all weight-$8$ codewords**: lying ready-made in this matrix are $11$ octads; for example row $2$ is $\{2,13,14,16,20,21,22,24\}$.

The weight distribution of these $4096$ codewords (how many codewords there are of each Hamming weight) is:

$$
\text{weight}\ 0:1,\quad 8:759,\quad 12:2576,\quad 16:759,\quad 24:1.
$$

So the weight-$8$ codewords number **exactly $759$**; and this construction really achieves "every $5$ points lie in exactly one octad": $S(5,8,24)$ holds. (This extended code $\mathcal{G}_{24}$ derives from the perfect binary code $[23,12,7]$ that Golay gave in 1949 (published at the time only in the form of a generator matrix); $\mathcal{G}_{24}=[24,12,8]$ is its standard extension by one overall parity bit; and the **uniqueness**, "a binary code of length $24$, dimension $12$ and minimum weight $8$ is, up to equivalence, **only this one**", is a theorem proved later. Textbook treatments of both are in van Lint–Wilson, Chapter 20, in the references section. What is given above is an explicit construction.)

**Full proof of $759$ (the first road: double counting)**. **First, the intuition of this move: count the same pile of things once from each of two angles, and the two numbers must be equal; this is the sharpest knife in combinatorics.** The "things" we want to count = all the pairs "(a $5$-point subset, an octad containing it)". Suppose there are $N$ octads in all:

- **Counting from the side of the $5$-subsets**: each $5$-point subset belongs to exactly $1$ octad (the definition of the design), so the number of pairs $=\dbinom{24}{5}\cdot 1$.
- **Counting from the side of the octads**: each octad contains $\dbinom{8}{5}$ $5$-subsets inside it, so the number of pairs $=N\cdot\dbinom{8}{5}$.

The same pile of pairs, so the two numbers are equal:

$$
N\cdot\binom{8}{5}=\binom{24}{5}\ \Longrightarrow\ \boxed{\,N=\frac{\binom{24}{5}}{\binom{8}{5}}=\frac{24\cdot23\cdot22\cdot21\cdot20}{8\cdot7\cdot6\cdot5\cdot4}=\frac{42504}{56}=759.\,}
$$

**Why this division must come out exactly (it is not luck)**. Look at it from another angle and you will understand: $759$ was not "happened upon" by our particular construction. As long as the rule "every $5$ points belong to exactly one octad" holds, all $\binom{24}{5}$ of the $5$-subsets are divided by the octads, **with no overlaps and no omissions, into small piles of $\binom{8}{5}$ each**, and the number of piles is of course the integer $\binom{24}{5}/\binom{8}{5}$. **It is the rule itself that forces** $56\mid 42504$, and fixes the quotient at $759$.

**Full proof of $759$ (the second road: counting Golay weights)**. Starting completely afresh: $759 = \#\{\text{weight-}8\text{ Golay codewords}\}$ (read directly from the weight distribution above). The two roads give the same $759$. **The two in fact have different jobs, which is harder than "two computations that happen to agree"**: **double counting proves an "object-independent necessity"**: **any** $S(5,8,24)$, no matter who builds it or how, **cannot escape** having $759$ blocks (it does not count any concrete octad at all, it uses only that rule); **weight counting proves "our particular Golay construction really realizes it"**. One says "it must be this many", the other says "mine really does it": squeezed from both ends, $759$ is locked.

**$M_{24}=\mathrm{Aut}\,S(5,8,24)$**. Keeping these $759$ octads unchanged as a whole: the rearrangements of the $24$ points that do this, all of them together, are $M_{24}$ (for its order see Appendix A). The combinatorial design and the sporadic group become one here.

**Its elements can be written out too: a concrete member of $M_{24}$**. The way of filling the generator matrix $A$ uses only "the difference of the row label and the column label modulo $11$", so "shifting these labels $\{0,1,\dots,10\}$ as a whole by $+1$ ($10$ wraps around to $0$), with the two $\infty$ fixed" does not change the whole construction. Landing on the $24$ coordinates, this is the permutation (first learn **cycle notation** here: $(a\;b\;c)$ reads "$a$ moves to $b$, $b$ moves to $c$, $c$ wraps around to $a$": inside the parentheses, from left to right, each passes on to the next, and the last goes back to the first; **points not written in any parentheses stay where they are**. **Small example**: $(1\;2\;3)$ acting on $\{1,2,3,4\}$ is $1\to2$, $2\to3$, $3\to1$, $4$ fixed):

$$
\sigma=(2\;3\;4\;5\;6\;7\;8\;9\;10\;11\;12)\,(14\;15\;16\;17\;18\;19\;20\;21\;22\;23\;24):
$$

Read it just as in the small example: coordinates $1$ and $13$ are not written in any parentheses and **stay where they are**; the first string $2\to3\to\cdots\to12$ wraps around to $2$, the second string $14\to15\to\cdots\to24$ wraps around to $14$: the two strings, of $11$ coordinates each, each rotate by one place. It carries every octad to an octad (for example, it carries the one above, $\{1,2,3,4,5,15,17,21\}$, to $\{1,3,4,5,6,16,18,22\}$, which is likewise an octad), so $\sigma\in M_{24}$. Written as a **matrix**, it is the $24\times24$ **permutation matrix** $P_\sigma$: exactly one $1$ in each row and each column; in column $j$, the $1$ sits in row $\sigma(j)$. Divided into blocks by "coordinate $1$; coordinates $2$–$12$; coordinate $13$; coordinates $14$–$24$", it looks in full like this:

$$
P_\sigma=\begin{pmatrix}1&&&\\&C_{11}&&\\&&1&\\&&&C_{11}\end{pmatrix},\qquad C_{11}=\begin{pmatrix}0&&&1\\1&0&&\\&\ddots&\ddots&\\&&1&0\end{pmatrix},
$$

where $C_{11}$ is the $11\times11$ "rotate by one place" matrix (all $1$s on the subdiagonal, one $1$ in the top-right corner, $0$ everywhere blank). When the table in §5 says $M_{24}$ has a $24\times24$ permutation matrix representation, it means matrices of this kind.

**Let us take one octad out concretely and look at it**. In our construction ($1$-indexed), a real octad is

$$
\{1,2,3,4,5,15,17,21\}.
$$

Take its $5$-subset $\{1,2,3,4,5\}$: of all $759$ octads, the one containing these $5$ points is this one and only this one (uniqueness $\checkmark$).

**This "unique" is not a coincidence but a necessity of the definition.** Look back at the definition of a Steiner system $S(t,k,n)$: the level $t=5$ says precisely "**every** $5$ points belong to a **unique** block", so "take any $5$ points: a unique octad" necessarily holds for **any** $S(5,8,24)$, regardless of how you construct it: it is a direct reading of the defining property. For this particular Golay construction, "every $5$ points belong to exactly one octad" really holds; this is precisely its credential for being called $S(5,8,24)$; and so "$\{1,2,3,4,5\}$ lies in only one octad" is just that property showing itself on one concrete five-point set. This is the same division of labor as the "one hard, one concrete" for $759$: **the definition takes care of "it must be so", the construction takes care of "it really is so".**

Any two octads can only meet in $0$, $2$ or $4$ points: for example, $\{1,2,3,4,6,9,13,19\}$ meets it in $4$ points, $\{1,2,3,4\}$, while $\{6,7,8,9,10,12,16,24\}$ **does not touch it at all**. (The concrete labels depend on the coordinate labeling of the construction; a different Golay code construction gives an isomorphic design with different labels, just like the two sets of labels for the Fano plane in EP5.)

---

### Appendix C (full proof) · The kissing number $196560$ and the Leech lattice

![The kissing number and the Leech lattice, 196560](/content/images/2026/07/ep06_kissing_v1-4.png)

*Figure C · Kissing numbers: $2D{=}6$, $3D{=}12$, $24D{=}196560$ (the Leech lattice), and the three kinds of minimal vectors, $196560=1104+97152+98304$ ($(\pm4^2)$ / eight $\pm2$ on an octad / one $\pm3$ plus twenty-three $\pm1$). (Made by this channel · mathematical infographic)*

![Animation C · the three kinds of 196560](/content/images/2026/07/fig_threeclasses_196560-1.gif)

*Animation C · The kissing number $196560$ split into three kinds of minimal vectors, each counted out: $1104+97152+98304=196560$.*

**What this section is going to do**. The same $S(5,8,24)$ does not grow just one group; it also holds up the most perfect sphere packing in $24$ dimensions. We make "kissing number" precise, build the Leech lattice, and then split $196560$ into three piles and count each pile out; and you will see that it is precisely the octads and Golay codewords of Appendix B that, behind the scenes, pin down the size of each pile.

**Concepts explained here**. **Sphere packing** = equal spheres filling space without overlapping. The **kissing number** of a sphere = at most how many spheres of the same size it can **touch** at the same time (distance between centers $=$ diameter). **To give an analogy**: at most how many oranges of the same size can be touching one orange at the same time. A **lattice** = a regular, discrete point array in $\mathbb{R}^d$ laid out by the integer combinations of a set of basis vectors. The **minimal vectors** of a lattice = the ring of nonzero lattice points nearest the origin (think of the nearest ring of neighbors around the center of a clock); their number = the kissing number when spheres are packed with the lattice points as centers.

**Small example (low-dimensional intuition)**. In $2$ dimensions: six coins around one central coin, kissing number $=6$. In $3$ dimensions: $=12$ (the Newton–Gregory dispute, rigorously settled only in $1953$). As soon as the dimension goes up, the kissing number shoots up; jump to **$24$ dimensions**, and an anomalous spike appears.

**Explicit object: the Leech lattice $\Lambda_{24}$** (hanging on $S(5,8,24)$/the Golay code). Match the $24$ coordinates one-to-one with the points of $S(5,8,24)$, all $24$ of them. **The intuition in one sentence: the Leech lattice is a batch of $24$-dimensional integer points sifted out "using the Golay code as a sieve"; the Golay code decides which combinations of coordinates are allowed.** Strictly, $\Lambda_{24}$ takes the integer coordinate vectors $x=(x_1,\dots,x_{24})$ (then all multiplied by $1/\sqrt8$) satisfying a set of congruence constraints hanging on the Golay code (all coordinates of the same parity; where the coordinates fall modulo $4$ is prescribed by Golay codewords; the coordinate sum $\equiv 4m\!\pmod 8$); for the complete definition see Conway–Sloane, *Sphere Packings, Lattices and Groups* (SPLAG). **Scaling convention**: the minimal squared length (norm) of the integer representative vectors is $32$; after multiplying by $1/\sqrt8$ the minimal norm $=32/8=4$. Below we count on the **integer representatives** (norm $32$).

**Full proof of $196560$: the minimal vectors fall into exactly three kinds**. **Why exactly three shapes? Intuition: the norm has to equal exactly $32$, and there are only three ways to make $32$ out of integer coordinates**: either a few large coordinates, or a stretch of medium coordinates, or one slightly larger one plus a whole row of small ones. Each of the three ways has its number pinned down by the Golay code:

**Kind 1: $(\pm4^2,0^{22})$** (two large coordinates): two coordinates take $\pm4$, the rest $0$. $4^2+4^2=32$ $\checkmark$. Number = choices of positions $\dbinom{24}{2}=276$ $\times$ two signs $2^2$:

$$
276\times 2^2 = 1104.
$$

**Kind 2: $(\pm2^8,0^{16})$, eight $\pm2$ lying on an octad** (a stretch of medium coordinates): $8\cdot2^2=32$ $\checkmark$. **Why must they lie on an octad?** Because the constraints of the lattice require these $8$ nonzero positions to form exactly the **support** of a Golay codeword (support: in a $0/1$ string, the set formed by "the coordinate positions that take $1$"; the support of a weight-$8$ codeword is exactly an $8$-point set), and the weight-$8$ codewords **are** the octads (Appendix B); this is where the design pins down the number behind the scenes. It is further required that the signs contain **an even number of minus signs** (this too comes from the lattice constraints). **Why the even-minus patterns number exactly $2^7$**: each of the $8$ positions can be positive or negative, $2^8=256$ sign patterns in all; of these, those with "an even number of minus signs" make up exactly half: the signs of the first $7$ positions are free, and the last is determined by parity: $256/2=2^7=128$. The octads, $759$ of them, $\times$ the even-minus patterns, $128$:

$$
759\times 2^7 = 97152.
$$

**Kind 3: $(\mp3,\pm1^{23})$, signs determined by a Golay codeword** (one slightly larger $+$ a whole row of small ones): $3^2+23\cdot1^2=32$ $\checkmark$. One coordinate takes $\pm3$, the remaining $23$ take $\pm1$, and the whole pattern of signs must form a Golay codeword (again the Golay code pins down the number). Positions for the $3$: $24$ $\times$ compatible sign patterns: $2^{12}$ codewords:

$$
24\times 2^{12} = 24\times4096 = 98304.
$$

**Total**:

$$
\boxed{\,196560 = \underbrace{1104}_{(\pm4^2)} + \underbrace{97152}_{(\pm2^8)\text{ octads}} + \underbrace{98304}_{(\mp3,\pm1^{23})\text{ Golay}} = 2^4\cdot3^3\cdot5\cdot7\cdot13.\,}
$$

All three kinds have norm exactly $32$ ($4$ after scaling), do not overlap one another, and exhaust all the minimal vectors ("there are no others" is a conclusion of the Leech/Conway construction, cited from SPLAG; the **counts** of the three kinds are tallied kind by kind as above). This $196560$ is the kissing number in $24$ dimensions: a perfect number that appears nowhere else.

**Let us give one concrete vector of each kind and check that the norm really is $32$**.

- Kind 1: $(4,4,0,\dots,0)$, norm $16+16=32$.
- Kind 2: take the octad $\{1,2,3,4,5,15,17,21\}$ (the one from Appendix B), put $+2$ in these eight positions and $0$ elsewhere ($0$ minus signs, even): norm $8\cdot4=32$; flipping two of the $+2$ into $-2$ (still an even number of minus signs) is just as much a minimal vector.
- Kind 3: in coordinate $1$ put $-3$, in the remaining $23$ put $+1$ (corresponding to the all-$0$ Golay codeword), norm $9+23=32$.

---

### Appendix D (full proof) · The Conway group $\mathrm{Co}_0$

![The Conway group Co0 = Aut(Leech)](/content/images/2026/07/ep06_conway_v1-4.png)

*Figure D · $\mathrm{Co}_0=\mathrm{Aut}(\Lambda_{24})$: the $24\times24$ orthogonal matrices preserving the Leech lattice ($R^{\mathsf T}R=I_{24}$), the order via $196560\times$ stabilizer $=8.3\times10^{18}$, $\mathrm{Co}_1=\mathrm{Co}_0/\{\pm I\}$, and $\mathrm{Co}_2/\mathrm{Co}_3$ as the stabilizers of type-2/3 vectors. (Made by this channel · mathematical infographic)*

![Animation D · the Co₀ lineage](/content/images/2026/07/fig_co0lineage_tree-1.gif)

*Animation D · The $\mathrm{Co}_0$ lineage: dividing out the center $\{\pm I\}$ gives $\mathrm{Co}_1$; fixing a type-2 / type-3 vector further gives $\mathrm{Co}_2/\mathrm{Co}_3$.*

**What this section is going to do**. In $1968$, John Conway took a computation **originally expected to take a whole year** and, according to the usual account, **got it done in about a day**: he computed the **complete symmetry group** of the Leech lattice, at one stroke producing three new sporadic groups and also taking in several known ones. (Specific time spans such as "an afternoon plus a night" belong to popular accounts; for the historical facts, the main text / Gauss's first-hand check is authoritative; here only the checkable skeleton "budgeted a year → about a day" is used.) We make this group and its order of $8.3\times10^{18}$ concrete, **and we will find that what counts its order is exactly that old tool from Appendix A**.

**Concepts explained here**. The **automorphism group** of a lattice $\Lambda$, $\mathrm{Aut}(\Lambda)$, = all the linear transformations that fix the origin, preserve all distances between points (equivalently: orthogonal transformations), and also **map the whole lattice back onto itself**. The **Conway group** $\mathrm{Co}_0$ is the automorphism group of the Leech lattice:

$$
\mathrm{Co}_0 = \mathrm{Aut}(\Lambda_{24}) = \{\,T\in O(24,\mathbb{R}):\ T(\Lambda_{24})=\Lambda_{24}\,\}.
$$

($O(24,\mathbb{R})$ = the $24\times24$ real orthogonal matrices, that is, the length-preserving linear transformations; $\mathrm{Co}_0$ is the small handful among them that **preserve exactly the Leech lattice**, a finite group.)

**What do its elements look like? Two kinds can be written out on the spot**.

**Permutation type**. That $\sigma\in M_{24}$ from Appendix B (two strings of $11$-cycles): its permutation matrix $P_\sigma$ preserves the Leech lattice: $M_{24}$ only rearranges the $24$ coordinates, and in the definition of the Leech lattice "which coordinate patterns are allowed" is decided entirely by the Golay code; $M_{24}$ preserves the Golay code, so $P_\sigma\in\mathrm{Co}_0$. When the table in §5 says "$M_{24}$ sits inside $\mathrm{Co}_0$", its concrete identity is this batch of $24\times24$ permutation matrices.

**Sign type**. Take any Golay codeword $C$, and let $\varepsilon_C$ be the diagonal matrix: the coordinates on the support of $C$ are multiplied by $-1$, the rest by $+1$. For example, take that octad $C=\{1,2,3,4,5,15,17,21\}$:

$$
\varepsilon_C=\mathrm{diag}(\underbrace{-1,-1,-1,-1,-1}_{1\text{–}5},+1,\dots,+1,\underbrace{-1}_{15},+1,\underbrace{-1}_{17},+1,+1,+1,\underbrace{-1}_{21},+1,+1,+1).
$$

Such $\varepsilon_C$ number $2^{12}=4096$ in all (one for each codeword), and every one of them preserves the lattice. (Why they preserve the lattice, in one sentence: the three "membership clauses" of Leech look only at the parity of the coordinates, at whether where they fall modulo $4$ forms a Golay codeword, and at the coordinate sum modulo $8$; flipping signs along a codeword leaves the first two completely unchanged (the Golay code is closed under "symmetric difference with a codeword"), while the change in the coordinate sum is always a multiple of $8$, with its root in two arithmetic properties of the Golay code: **doubly even** (the weight of every codeword is a multiple of $4$; looking back at the weight distribution of Appendix B, $\{0,8,12,16,24\}$, they are indeed all multiples of $4$) and **self-dual** (any two codewords overlap in an even number of positions); details cited from SPLAG.) The phrase "contains $-I$" in the table now also has a concrete identity: the sign flip of all $24$ coordinates together, $-I$, is exactly, when one takes $C=$ **the all-$1$ codeword** (the $24$ coordinates all equal to $1$, weight $24$: that lone "$24:1$" at the end of the weight distribution table), the corresponding $\varepsilon_C$.

**But these two kinds together are still far from all of it**. The "monomial" subgroup put together from the permutation type and the sign type (monomial matrix = exactly one nonzero entry in each row and each column, here exactly one $\pm1$) has order about $1.0\times10^{12}$ ($=2^{12}\times|M_{24}|$), and of $\mathrm{Co}_0$ ($8.3\times10^{18}$) it makes up only a fraction $1/8{,}292{,}375$. Moreover, monomial matrices only ever map a "shape" to the same "shape": the $(\pm4^2)$ type is always mapped back to the $(\pm4^2)$ type; yet the minimal vectors of the three shapes of Appendix C can **be moved into one another** under $\mathrm{Co}_0$. What achieves this is a third kind of orthogonal matrix that "comes in at a slant" (it truly mixes different coordinates, and fractions of the kind $\pm\tfrac12$ appear among the matrix entries; Conway's original 1968/1969 papers give generators of this kind, which this episode cites without rebuilding). The core of Conway's computation was precisely building this slanted kind, merging the three shapes into a single orbit.

**The order: that orbit–stabilizer once again**. **First bring back the tool of Appendix A: the size of a group = (how many places a thing can go) × (how big a subgroup is needed to pin it down).** Here let the "thing" = one of the $196560$ minimal vectors of Appendix C. $\mathrm{Co}_0$ acts on them **transitively**: any minimal vector can be moved to any minimal vector (even between the three shapes they can be moved into one another, and this is exactly the core of Conway's computation), so a minimal vector "can go to $196560$ places". Orbit–stabilizer then gives:

$$
|\mathrm{Co}_0| = \underbrace{196560}_{\text{places a minimal vector can go}}\times\ \bigl|\,\mathrm{Stab}(v)\,\bigr|.
$$

The order of the stabilizer of a single minimal vector is $|\mathrm{Stab}(v)| = 2^{18}\cdot3^{6}\cdot5^{3}\cdot7\cdot11\cdot23 = 42{,}305{,}421{,}312{,}000$ (Conway's further orbit analysis, cited from SPLAG/ATLAS). Multiply the two numbers:

$$
\boxed{\,|\mathrm{Co}_0| = 2^{22}\cdot3^{9}\cdot5^{4}\cdot7^{2}\cdot11\cdot13\cdot23 = 8{,}315{,}553{,}613{,}086{,}720{,}000 \approx 8.3\times10^{18}.\,}
$$

**The lineage of sporadic groups sitting inside $\mathrm{Co}_0$** (only touched on; the main proof is for $\mathrm{Co}_0$). **Think of $\mathrm{Co}_0$ as a tree trunk, and the new groups below as branches growing from it.** First get ready two tools used in earlier episodes. **Center** $=$ the elements that commute with all the elements of the group (defined in EP5: there $\mathrm{PSL}$ was obtained from $\mathrm{SL}$ by "dividing out the center"); the center of $\mathrm{Co}_0$ is exactly $\{\pm I\}$; $-I$ obviously preserves the lattice (it flips every point through the origin, mapping the whole lattice back onto itself). **"Quotienting out"** $=$ **regarding as the same** two elements that "differ by an element of the center" (the $\mathrm{SL}\to\mathrm{PSL}$ of EP5 Appendix B, and the "three glued into one" of $M_1$ with $\omega M_1,\omega^2M_1$ in Appendix A, both do the same thing); the coset blocks of EP2 (that account of Lagrange) guarantee that folding like this keeps the books clean: every $|\{\pm I\}|=2$ elements fold into one, and the total is divided by $2$. So, dividing out the center, we get **the first new sporadic group**

$$
\mathrm{Co}_1 = \mathrm{Co}_0/\{\pm I\},\qquad |\mathrm{Co}_1| = \tfrac12|\mathrm{Co}_0| = 2^{21}\cdot3^{9}\cdot5^{4}\cdot7^{2}\cdot11\cdot13\cdot23.
$$

Fixing a **type-$2$ vector** (norm $4$, that is, one of those $196560$ minimal vectors) further gives $\mathrm{Co}_2$; fixing a **type-$3$ vector** (norm $6$) gives $\mathrm{Co}_3$ (two more new sporadic groups). Here is a piece of free connective tissue: **the minimal-vector stabilizer of order $42{,}305{,}421{,}312{,}000$ computed above is itself $\mathrm{Co}_2$**: $|\mathrm{Co}_2|=2^{18}\cdot3^{6}\cdot5^{3}\cdot7\cdot11\cdot23$, the same number as in the ATLAS digit for digit. ($\mathrm{Co}_3$ is the stabilizer of a type-$3$ vector, $|\mathrm{Co}_3|=2^{10}\cdot3^{7}\cdot5^{3}\cdot7\cdot11\cdot23$, which also divides $|\mathrm{Co}_0|$.) Known sporadic groups such as McLaughlin ($\mathrm{McL}$), Higman–Sims ($\mathrm{HS}$) and Suzuki ($\mathrm{Suz}$, which shares its name with, but is a different thing from, the Suzuki groups **of Lie type** in EP5) were also "taken in" as **sections** in $\mathrm{Co}_0$ (section: first take a subgroup in the big group, then quotient it by one of its own normal subgroups, the combined product of the two steps "subgroup $+$ quotient"; normal subgroups were used in EP3 when taking $A_5$ apart). That one computation uncovered a whole cluster of sporadic groups in the box.

**Let us use this tool to work back concretely to how big the stabilizer is**. Given $|\mathrm{Co}_0|$ and the orbit $196560$, solve backwards for the stabilizer:

$$
|\mathrm{Stab}(v)| = \frac{|\mathrm{Co}_0|}{196560} = \frac{8315553613086720000}{196560} = 42{,}305{,}421{,}312{,}000 = 2^{18}\cdot3^{6}\cdot5^{3}\cdot7\cdot11\cdot23.
$$

This group of order $42305421312000$ (exactly the $\mathrm{Co}_2$ named above) is the symmetry that "fixes one minimal vector and moves only that vector's **$23$-dimensional orthogonal complement**" ($\mathbb{R}^{24}=\mathbb{R}v\oplus v^\perp$; after fixing $v$, only, on $v^\perp$, the $23$ dimensions are left moving; this $23$ is exactly the smallest matrix size in which $\mathrm{Co}_2$ can be written **faithfully** as a matrix group ("**faithful**" = different group elements correspond to different matrices, not one bit of information lost; the minimal faithful representation dimension of $\mathrm{Co}_2$ listed in the ATLAS is $23$), and it is the same splitting as $M_{24}$'s $\mathbf{1}\oplus\mathbf{23}$ in Appendix A, $24{=}1{+}23$). A behemoth of $8.3\times10^{18}$, entered through the local symmetry of one minimal vector: this is exactly the local-analysis motif of EP5 §3 appearing once again in the world of the sporadic groups.

---

## Sources

**The story's source book**

- Ronan, M. *Symmetry and the Monster: One of the Greatest Quests of Mathematics.* Oxford University Press, 2006. The narrative skeleton of this episode corresponds to Chapter 11, "Pandora's Box" (pp. 127–141) and Chapter 12, "The Leech Lattice" (pp. 142–156): the Mathieu groups, the Witt design S(5,8,24), Janko's J₁, the Leech lattice and Conway's Co₀ (the epigraph at the opening is also quoted from Chapter 11 of this book). The mathematical derivations and historical details have all been independently verified first-hand; see below.

**Mathematics (theorems / constructions / data)**

- Witt, E. *Die 5-fach transitiven Gruppen von Mathieu.* Abh. Math. Sem. Univ. Hamburg **12** (1938) 256–264. DOI [10.1007/BF02948947](https://doi.org/10.1007/BF02948947)
- Witt, E. *Über Steinersche Systeme.* Abh. Math. Sem. Univ. Hamburg **12** (1938) 265–275. DOI [10.1007/BF02948948](https://doi.org/10.1007/BF02948948) (companion paper in the same volume, the systematic construction of $S(5,8,24)$; see the paragraph "where Witt's theorem comes from" in Appendix A)
- Conway, J. H. *A perfect group of order 8,315,553,613,086,720,000 and the sporadic simple groups.* PNAS **61**(2) (1968) 398–400. DOI [10.1073/pnas.61.2.398](https://doi.org/10.1073/pnas.61.2.398)
- Conway, J. H. & Sloane, N. J. A. [*Sphere Packings, Lattices and Groups*](https://doi.org/10.1007/978-1-4757-6568-7) (SPLAG). Springer Grundlehren 290, 3rd ed. 1999.
- Conway, J. H. et al. *ATLAS of Finite Groups.* Oxford University Press, 1985 (online group representation data: [ATLAS of Finite Group Representations](http://brauer.maths.qmul.ac.uk/Atlas/v3/)). (Standard table of the orders of the sporadic groups)
- Leech, J. *Notes on Sphere Packings.* Canad. J. Math. **19** (1967) 251–267. DOI [10.4153/CJM-1967-017-0](https://doi.org/10.4153/CJM-1967-017-0)

**Derivations in the appendices · advanced textbooks (for the complete derivations; chapter numbers verified item by item)**

- **Appendix A (multiple transitivity · orders of the Mathieu groups · M₂₁=PSL(3,4) · PG(2,4))** — Dixon, J. D. & Mortimer, B. [*Permutation Groups*](https://doi.org/10.1007/978-1-4612-0731-3)*.* Springer GTM 163, 1996: §1.4 (pp. 7–11) the orbit–stabilizer theorem; Chapter 6 §6.1–6.8 (pp. 177–209) complete constructions and orders of the five Mathieu groups and the Steiner systems (§6.5–6.6 are the identification M₂₁=PSL(3,4) and the derivation of the 21-point projective plane PG(2,4)); §7.3 (pp. 218–219) the upper bound and classification of degrees of multiple transitivity. The original literature on the degree of transitivity is Witt 1938, listed above.
- **Appendix B (Steiner S(5,8,24) · the binary Golay code · 759 by double counting)** — van Lint, J. H. & Wilson, R. M. [*A Course in Combinatorics*](https://doi.org/10.1017/CBO9780511987045)*.* Cambridge University Press, 2nd ed. 2001: Chapter 19, "Designs", **Theorem 19.2 (p. 219) is the 759 double-counting argument of Appendix B** ($b=\lambda\binom{v}{t}/\binom{k}{t}$, "count in two ways"); Chapter 20, "Codes and designs", the construction of the Golay code $G=[I_{12}\,|\,P]$ (p. 254), weight-8 codewords = blocks of S(5,8,24) (p. 255). For the group side (M₂₄ = Aut S(5,8,24) and uniqueness) see also Wilson, R. A. [*The Finite Simple Groups*](https://doi.org/10.1007/978-1-84800-988-2)*.* Springer GTM 251, 2009, §5.2.2–5.2.4 (pp. 185–190); for the MOG level see Curtis 1976 listed above and SPLAG Chapter 11 §5–6 (pp. 303–307).
- **Appendix C (kissing number 196560 · the Leech lattice · the three kinds of minimal vectors)** — SPLAG, listed above (Conway–Sloane, Springer Grundlehren 290, 3rd ed. 1999): Chapter 4 §11 (p. 131) the Golay congruence construction of the Leech lattice $\Lambda_{24}$; Chapter 10 §3.2 (p. 286) the shapes and counts of the three kinds of minimal vectors (196560 = 1104 + 97152 + 98304); Chapter 14 §4 (p. 345) the uniqueness of the 196560 configuration. For a textbook-style treatment see also Wilson GTM 251 §5.4.1 (p. 203).
- **Appendix D (order of Co₀ · orbit–stabilizer · Co₀/Co₁/Co₂/Co₃)** — SPLAG, listed above: Chapter 10 §3.1–3.6 (pp. 286–294, the third of Conway's own "three lectures"): the definition of Co₀, its transitivity on the minimal vectors and its order, the lineage of subgroups (§3.5 Higman–Sims and McLaughlin, §3.6 Co₃). For a modern textbook treatment see Wilson GTM 251 §5.4.2–5.4.4 (pp. 205–208) and §5.5.3/§5.5.4 (pp. 216–217, Co₃/Co₂ as stabilizers of type-3/type-2 vectors).
- Curtis, R. T. *A new combinatorial approach to $M_{24}$.* Math. Proc. Cambridge Philos. Soc. **79** (1976) 25–42. DOI [10.1017/S0305004100052075](https://doi.org/10.1017/S0305004100052075)

**Historical sources / people**

- Émile Mathieu — MacTutor: [https://mathshistory.st-andrews.ac.uk/Biographies/Mathieu_Emile/](https://mathshistory.st-andrews.ac.uk/Biographies/Mathieu_Emile/)
- Mathieu group M₂₄ (doubts about existence + Witt's S(5,8,24)): [https://en.wikipedia.org/wiki/Mathieu_group_M24](https://en.wikipedia.org/wiki/Mathieu_group_M24)
- Janko group J₁ (discovered 1965): [https://en.wikipedia.org/wiki/Janko_group_J1](https://en.wikipedia.org/wiki/Janko_group_J1)
- John Leech — MacTutor: [https://mathshistory.st-andrews.ac.uk/Biographies/Leech/](https://mathshistory.st-andrews.ac.uk/Biographies/Leech/); Leech lattice: [https://en.wikipedia.org/wiki/Leech_lattice](https://en.wikipedia.org/wiki/Leech_lattice)
- John Conway and the Conway group (including the Thompson quotation, checked first-hand): [https://en.wikipedia.org/wiki/Conway_group](https://en.wikipedia.org/wiki/Conway_group); obituary (Quanta, Borcherds quotation): [https://www.quantamagazine.org/john-conway-solved-mathematical-problems-with-his-bare-hands-20200420/](https://www.quantamagazine.org/john-conway-solved-mathematical-problems-with-his-bare-hands-20200420/)
- Fischer group: origin of the notation + orders: [https://en.wikipedia.org/wiki/Fischer_group](https://en.wikipedia.org/wiki/Fischer_group)
- Sporadic simple groups (26 + the happy family / the pariahs): [https://en.wikipedia.org/wiki/Sporadic_group](https://en.wikipedia.org/wiki/Sporadic_group)

**Image sources (people / concept graphics)**

- John Conway — photographed by Thane Plambeck at Banff BIRS 2005, CC BY 2.0 (Wikimedia Commons)
- John Leech — MacTutor History of Mathematics Archive (educational fair use)
- Zvonimir Janko (1964) — croatianhistory.net / Bjelovar local archive
- Émile Mathieu — no surviving portrait could be found; replaced by an icosahedron model for $M_{12}$ (Maproom, CC BY-SA 3.0)
- Concept infographics for Appendices A–D (759 / 196560 / Co₀ / Mathieu) — made by this channel
