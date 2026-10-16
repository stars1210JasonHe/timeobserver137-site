---
title: "Decoding the Cube: the group in your hands"
date: 2026-10-16
lang: en
ghostSlug: symmetry-monster-cube
draft: true
---
> timeobserver137 side episode · the hands-on installment. You can read it without having seen the previous eight episodes.
> The main text tells only the story and the line of the ideas; the derivations are in Appendices A–G (in one place only the direction is given and the argument is not carried through, as stated at the end of Appendix C); every number marked "computed for this article" in the appendices can be recomputed yourself, and the sources for the historical figures are at the end.
> For those who have seen the earlier episodes: the cosets, Lagrange's theorem and quotient groups covered in Episodes 2 and 3 reappear in Sections 2, 5, 6 and 8.

---

**Companion video (YouTube)**

<iframe width="200" height="113" src="https://www.youtube.com/embed/vKuEZ0ek054?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="Decoding the Cube: the group in your hands"></iframe>

## 0. A cube that cannot be solved

This cube looks as if it is one move away from solved: apart from the one color on a corner that is wrong, all the other colors and faces are already done.

But in fact, however we twist it, we will not get back, not in an afternoon of twisting and not in a lifetime.

This is not because it is hard, but because it simply is not among the states that "can be twisted into being". This has something to do with the parity from group theory that we discussed earlier, and in this side episode we will look together at the appeal and the secrets of the cube.

## 1. 1974: a wooden box in Budapest

Ernő Rubik was born in Budapest in 1944. He first studied architecture and later also studied interior design. In the 1970s he taught design at the Academy of Applied Arts in Budapest and made all kinds of geometric models in his spare time. In 1974 he used twenty-seven small wooden blocks to put together the first solid that could turn without falling apart. He said later that when he built it, he was not setting out to make a puzzle; but after he had scrambled it, it took him more than a month to get it back for the first time.

In January 1975 he filed a Hungarian patent application; the name on the patent was "Spatial logic toy". At the end of 1977 the thing went on sale in Hungary, under a Hungarian name that translates literally as "Magic Cube"; in 1979 it was licensed to the American Ideal Toy Company and renamed Rubik's Cube, and from 1980 it was sold all over the world.

Everything this piece is about starts from that wooden box.

## 2. First, count them

Look at how the cube is built: it has eight corner pieces, twelve edge pieces, and the six center pieces that never change as the faces turn. Each arrangement the cube can be put into is called a state; the number of different arrangements there can be is called the number of states.

For the moment, set aside how to solve the cube and count every arrangement: how the corner pieces can be arranged and which way each corner can face, how the edge pieces can be arranged and whether each edge is flipped. Eight corner pieces placed into eight corner slots give 8! arrangements, and each corner piece has three orientations, so eight of them give $3^8$; twelve edge pieces give 12! arrangements, and each edge has two orientations, giving $2^{12}$; multiply the four numbers (Appendix B computes them term by term). The product is 519,024,039,293,878,272,000.

The states that can really be reached by turning number 43,252,003,274,489,856,000.

The first number is exactly twelve times the second.

And this twelve is not a correction factor multiplied in wholesale. It is in fact 3×2×2, three independent factors, corresponding to three things that cannot be done on a cube: twisting a single corner on its own, flipping a single edge on its own, and swapping just two pieces while nothing else moves. The unsolvable cube of Section 0 commits exactly the first of these.

These three things can be explained precisely with group theory. Each one corresponds to a quantity: the remainder when the number of steps each of the eight corners has been twisted is added up and divided by three; whether the total number of edge flips across the twelve edges is odd or even; and whether the total number of pairwise swaps among the twenty pieces is odd or even. Turning any face does not change any of these three quantities (Appendix C checks all six faces one by one), so no matter how many moves are strung together, they stay the same as in the solved state. The three quantities take only 3, 2 and 2 values respectively, and multiplying these gives that twelve. [Episode 3](/zh/writing/symmetry-monster-ep3/) used the same tool when it covered sgn: a map that turns "two actions done one after the other" into "two numbers added together", which that episode called a homomorphism; here there are three such maps side by side. As soon as an arrangement of the cube does not match on these three quantities, it can never return to the state of six faces in six colors.

We might go on to ask: now that we know the patterns that can never be restored, is there a method that can restore the cube? If there is, what exactly is that method, and how is it related to our group theory? Next we will start from observing the most basic turns and work our way, step by step, to the formulas for solving the cube.

## 3. Six moves generate everything

There are only six things you can do on a cube: turn the six faces. The solving steps that look very complicated are also just these six things done one after another. In mathematics these six are called generators; all the actions that can be strung together this way, and that can all be undone, taken together are called a group. What this piece calls "the cube group" from here on is exactly this.

This episode also has a moving picture: we project the cube's fifty-four color tiles onto fifty-four points, clustered by face into six small patches; each kind of turn corresponds to a ring that strings together the color tiles that this turn will move. Whichever face is turned, that ring lights up, and the points on the ring move along it, like turning a dial.

<video src="/content/motion/2026/10/dial_S3-02_15s-28s_720p.mp4" autoplay muted loop playsinline preload="metadata"></video>

A point is one color tile of the cube, and a ring is one kind of turn.

## 4. Twisting it back, layer by layer

First, let us define the cube's turns. The surface of the cube has fifty-four small squares in all, which we call color tiles here (early cubes had colored paper stuck on, so the appendices also call them stickers): each corner piece carries three color tiles, each edge piece two, and each center piece one. Holding the cube, the face toward you is called F (front), the face opposite it B (back), the top is U (up), the bottom D (down), the left face L (left), the right face R (right). A letter means turning that face clockwise by ninety degrees, "clockwise" being the direction as seen looking straight at that face; a letter followed by a prime (as in $R'$) means turning it counterclockwise by ninety degrees; followed by 2 (as in $R2$) means turning it by one hundred eighty degrees. Check it on a real cube: after one $R$, the right-hand column of the front face moves up, and the right-hand column of the top face moves toward the back. A string of letters means doing them in order: $R\,U\,R'$ is first turning the right face, then the top face, then turning the right face back. Appendix A lists where every color tile goes after one $R$.

A position is named by the faces it sits on: UFR is the corner where the up, front and right faces meet, and UF is the edge between the up face and the front face.

Beginner solving methods all go layer by layer: white face down, yellow face up. The official instruction booklet divides the solve into eight steps, and here we follow its division and its order. Each step deals with just one thing; from the third step on, after each step is done, the parts already assembled are all still in place (the daisy of the first step is an exception: it only gathers the four white edges on the top layer first, and the second step turns them down one petal at a time). Below, in order, for each step we say what it does; where there is a formula we give the formula and exactly which pieces it moves (computed for this article), and how many moves it took in the example further on.

If you want to twist along, see the official [Rubik's 3×3 Solve Guide](https://rubiks.com/solve-guide), or Ruwix's [step-by-step illustrated beginner's method](https://ruwix.com/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/); in the video this section starts at [4:50](https://youtu.be/vKuEZ0ek054?t=290). Each step is followed by an animation taken from the example in the video: a random twenty-five-move scramble, then twisted back by these eight steps (it is the one in "Solving a real one" at the end of this section). In the top left corner of the animation are the step number and the formula being done; at the bottom, how many turns this step took and how many in total; the two cubes on the left are the front and back of the same cube, and on the right is the dial picture from Section 3.

**Step 1, make a daisy.** Find the four edges that carry white, turn them to the top layer, white facing up, around the yellow center, like a flower with four petals. This step needs no formula; just twist while looking. In the example it took 7 moves.

<video src="/content/motion/2026/10/eight_S4-03_step1_12.43s-32.77s_540p.mp4" autoplay muted loop playsinline preload="metadata"></video>

*Animation: Step 1 in the example, the daisy, 7 turns.*

**Step 2, the white cross.** Turn U to bring one petal to the face whose color matches its side color, then turn that face one hundred eighty degrees, and the petal is turned down to the bottom face, white facing down. Once all four petals are down, the bottom face has a white cross, and the side color of each edge matches its center. In the example, 8 moves.

<video src="/content/motion/2026/10/eight_S4-03_step2_32.77s-68.39s_540p.mp4" autoplay muted loop playsinline preload="metadata"></video>

*Animation: Step 2 in the example, the white cross, 8 turns.*

**Step 3, the white corners.** Turn a white corner to directly above the slot it has to go into, and hold the cube so that this corner is at the front right. When the white faces right, repeat

$$
R\,U\,R'\,U'
$$

until it drops in (the official web version calls its first three moves $R\,U\,R'$ the "right trigger": turn the right face, turn the top layer, turn the right face back; the booklet, for this step, uses a different set of formulas with the white cross facing up and involving $D$, see Source 15); when the white faces front it is the same, just keep repeating, five times in all (you can also hold it the other way, with this corner at the front left and white facing left, and do the mirror image $L'\,U'\,L\,U$ once with the left hand, with the same result; the example below uses the five repetitions); when the white faces up, three times in all: first do $R\,U\,R'\,U'$ twice, which turns it so that white faces right, then do it once more; if the corner is already in the bottom layer but in the wrong position or orientation, first use the same formula to push it up. This formula moves only three corners and two edges of the top layer, one middle-layer edge, and the one bottom-layer slot about to be filled; it does not touch the white cross or the corners already placed. In the example, 41 moves.

<video src="/content/motion/2026/10/eight_S4-03_step3_68.39s-152.17s_540p.mp4" autoplay muted loop playsinline preload="metadata"></video>

*Animation: Step 3 in the example, the white corners, 41 turns ($R\,U\,R'\,U'$ done three times, twice, and five times).*

**Step 4, the middle layer.** With the first face at the bottom, the middle layer still has four edges not in place, and they are all in the top layer (if one is stuck in the wrong slot of the middle layer, or in the right slot but flipped, first use the formula below to put some other edge into that slot, and it gets pushed out). Turn U so that an edge without yellow has its side color aligned with its center, hold the cube so that this face is toward you, and then look at whether its top color belongs to the face on the left or the one on the right. To go to the slot on the right, use

$$
U\,R\,U'\,R'\;U'\,F'\,U\,F
$$

To go to the slot on the left, use

$$
U'\,L'\,U\,L\;U\,F\,U'\,F'
$$

These two formulas move only the top layer (three corners, four edges) and the one middle-layer edge about to be filled. In the example, 31 moves.

<video src="/content/motion/2026/10/eight_S4-03_step4_152.17s-210.47s_540p.mp4" autoplay muted loop playsinline preload="metadata"></video>

*Animation: Step 4 in the example, the middle layer, 31 turns.*

**Step 5, the yellow cross.** Now only the top layer is left. First get the four top-layer edges yellow side up, using

$$
F\;U\,R\,U'\,R'\;F'
$$

Before doing it, first look at what the yellow on the top face looks like (look only at the center and the four edges; the yellow on the corners does not count), and hold the cube according to the booklet's three pictures: only the center is yellow (a dot); three yellows in a row across the middle (a line, held horizontally); yellow on the center, back-middle and left-middle (an angle, opening toward the front right). If after doing it there is still no cross, match against the pictures again and do it again, at most three times. It moves only the four corners and three edges of the top layer. In the example, 6 moves.

<video src="/content/motion/2026/10/eight_S4-03_step5_210.47s-226.16s_540p.mp4" autoplay muted loop playsinline preload="metadata"></video>

*Animation: Step 5 in the example, the yellow cross, 6 turns.*

**Step 6, the yellow face.** Twist the four corners so that yellow faces up; the formula is

$$
R\,U\,R'\,U\,R\,U2\,R'
$$

How to hold it depends on how many corners on the top face already have yellow facing up: if none, turn the top layer so that the yellow tile of the front-left corner faces the left face (the booklet's mnemonic "none, left"); if one, put it at the front left (mnemonic "feed the fish": that yellow corner is like a fish's head, eating from your left hand); if two, turn to the position where you can press your left thumb on the yellow tile at the upper left of the front face. If after doing it the face is not all yellow, match against the pictures again and do it again; it may take quite a few times, and the transitions do not follow a fixed order. It moves only the top layer (four corners, three edges). In the example it was done twice, 14 moves.

<video src="/content/motion/2026/10/eight_S4-03_step6_226.16s-254.45s_540p.mp4" autoplay muted loop playsinline preload="metadata"></video>

*Animation: Step 6 in the example, the yellow face, formula done twice, 14 turns.*

**Step 7, positioning the yellow corners.** All four corners face up; now swap them into the right positions. First turn U and see whether two corners can be in place at the same time (the colors on their sides both match the centers); if so, put these two corners at the back (the booklet calls them "taillights": the correct corners are like a car's taillights, placed at the rear of the car) and do

$$
R'\,F\,R'\,B2\,R\,F'\,R'\,B2\,R2\;U'
$$

If the two correct corners are adjacent, place them this way and do it once, and all four corners are in place; two diagonal ones cannot both be put at the back, so hold it any way and do it once, then turn U and two adjacent ones will be in place; do it once more as for the adjacent case. The first nine moves only cycle three corners once around, with no twisting and without touching the edges (computed for this article); the final $U'$ just turns the top layer back into alignment. In the example, 11 moves.

<video src="/content/motion/2026/10/eight_S4-03_step7_254.45s-279.12s_540p.mp4" autoplay muted loop playsinline preload="metadata"></video>

*Animation: Step 7 in the example, positioning the yellow corners, 11 turns.*

**Step 8, positioning the yellow edges.** The last four edges. Put the side face that is already all one color at the back (if there is none, put it anywhere), and do

$$
F2\,U\,L\,R'\,F2\,L'\,R\,U\,F2
$$

It only cycles the front, left and right edges once around, leaves the back edge where it is, and does not touch a single corner (computed for this article). At most three times; before each time, find again the side face that is all one color and put it at the back (the formula does not touch the back edge, so after doing it once there is certainly one face that is complete); if the color of the front edge is the same as the right center, change the two $U$ into $U'$. In the example, 0 moves.

<video src="/content/motion/2026/10/eight_S4-03_step8_279.12s-303.49s_540p.mp4" autoplay muted loop playsinline preload="metadata"></video>

*Animation: Step 8 in the example. This time the four edges were already in their places, so not a single turn was needed; the animation only reads through the formula once, to show which three edges it would cycle.*

**Solving a real one.** Starting from the solved state, scramble it with twenty-five random moves:

$$
D'\,R'\,L\,U'\,B2\,R\,D2\,U'\,B'\,F\,U'\,L'\,U2\,F'\,U2\,B2\,L'\,U'\,R\,F'\,U'\,L\,U'\,F'\,U'
$$

Then twist it back by the eight steps above: daisy 7 moves, white cross 8, white corners 41, middle layer 31, yellow cross 6, yellow face 14, positioning the yellow corners 11, positioning the yellow edges 0, 118 moves in total (adjacent turns of the same face within one step have been merged; only the yellow-face step did the formula in full twice, and the turns at the seam between the two were not merged; computed for this article: the scramble followed by these 118 moves puts every piece back in its place, with every orientation correct). The yellow-edge step being 0 moves is a coincidence of this scramble: none of the first seven steps dealt with the positions of the four yellow edges, so after the seventh step there are twelve possible arrangements of them, and this time it happened to be the one that is already in order; in general this step takes one to three repetitions. The complete turn sequence of the eight steps is at the end of Appendix D, and the animation is drawn from it: after each step is done, the pieces that step assembled are highlighted.

**Where these formulas come from.** Taken apart, apart from the two steps of the daisy and the white cross, which are twisted by eye, the formulas are all made of two kinds of move. One is called a commutator: do A, do B, undo A, undo B, written $[A,B]=A\,B\,A^{-1}\,B^{-1}$. Each of the two parts moves a large area; after undoing, some of the pieces return to their places, and what remains is those few pieces near the range the two parts share: the two parts of $[R,U]$ share three pieces, and of the thirteen pieces moved, six come back; in the example in Appendix D the two parts share only one piece, and of fifteen pieces twelve come back (all computed for this article). The other is called a conjugate: first do a move $X$ to send the pieces to be fixed to where the formula can reach them, do the formula, then undo $X$, written $X\,A\,X^{-1}$: the same trick, used in a different place. The $R\,U\,R'\,U'$ of Step 3 is exactly $[R,U]$; the middle-layer formula for the right is two commutators strung together ($[U,R]$ followed by $[U',F']$), and the one for the left is its mirror image. The four last-layer formulas are all "a commutator wrapped in a conjugate" (not counting the final U′ for alignment in the yellow-corner one): yellow cross $F\,[U,R]\,F'$; yellow face $R\,[U\,R',\,U]\,R'$; the first nine moves of positioning the yellow corners $R'\,[F,\,R'\,B2\,R]\,R$; positioning the yellow edges $(F2\,U)\,[U2,\,R2\,F2\,R2]\,(F2\,U)^{-1}$, which written out is eleven moves and is the same group element as the nine moves printed in the booklet (all four computed for this article; an exhaustive search by program showed that when A and B are each at most three moves, this one has no pure commutator form, so within this length the outer conjugate layer cannot be avoided). In Steps 5 and 6, turning U once before doing the formula is the first half of a conjugate: sending the pieces to be fixed to where the formula can reach them; that U does not need to be undone, because these two steps look only at orientation, and it does not matter where the top layer is turned to. Appendix D works through these two kinds of move piece by piece.

![Figure D: the seven formulas, one per line, with the two parts of each commutator and the outer conjugate marked in color](/content/images/2026/10/figD_S4-04_formulas_last_frame_1080p.png)

*Figure D: a commutator is "do A, do B, undo A, undo B", and the only pieces it moves are those few near the range the two parts share; a conjugate is "first use X to send the pieces to be fixed to where the formula can reach them, and when done undo X". Legend: A green, B orange; the A′ and B′ that undo them have the same color as the original part but one shade lighter; the outer X…X′ is framed in gold.*

The order of these eight steps also has its reasons: from the white cross on, each time a step is done a batch of pieces is locked, and after each later step they are all still in their places. Section 5 is about the mathematical version of this.

## 5. Writing the solve as a chain

In 1981 the British mathematician Morwen Thistlethwaite took the approach of the previous section, locking one batch of pieces per step, all the way: he broke the job of solving into four stages. He received his doctorate in mathematics at Manchester in 1972, then spent three years studying piano, and only in 1975 turned back to mathematics as his profession; when he came up with this method he was teaching at the South Bank Polytechnic in London, and he later became known for knot theory. His method is this: each time a stage is done, a batch of pieces is locked, and at the same time some kinds of turn are no longer used from then on, so the states that can be reached become fewer. When the last stage ends, only the solved state is left. With this method he proved that any state can be solved within fifty-two moves, which was the best upper bound at the time.

What the four stages do is listed below in a form that can be drawn. "States remaining" is obtained by dividing the total from Section 2 stage by stage, and every division comes out exact (computed for this article); the "number of cases" for each stage comes from Source 13.

| Stage | What this stage achieves | Number of cases in this stage | Turns still usable afterwards | States remaining afterwards |
|---|---|---|---|---|
| Start | A scrambled cube | | All six faces can be turned by ninety degrees | 43,252,003,274,489,856,000 |
| One | Set the flips of all twelve edges right | 2,048 = $2^{11}$ | $L,R,F,B$ turned freely; $U,D$ only by one hundred eighty degrees | 21,119,142,223,872,000 |
| Two | Set the twists of all eight corners right; put the four edges UF, UB, DF, DB back into the ring between the left and right faces | 1,082,565 = $3^{7}\times 495$ | $L,R$ turned freely; the other four faces only by one hundred eighty degrees | 19,508,428,800 |
| Three | Put each of the remaining eight edges back into its own ring; split the eight corners into two groups, each returning to the four positions of its own group; make the parities agree | 29,400 = $70\times70\times6$ | All six faces only by one hundred eighty degrees | 663,552 |
| Four | Using only one-hundred-eighty-degree turns, put all the rest in place | 663,552 | No more turns needed | 1 |

At the end of each stage, the turns that can be made are fewer than in the previous stage, and the states that can be reached are also fewer than in the previous stage: the four ranges sit one inside another, each later one contained in the one before. In mathematics this is called a subgroup chain. [Episode 3](/zh/writing/symmetry-monster-ep3/), when it covered Galois, peeled $S_4$ apart layer by layer: $S_4$ shrinks to $A_4$, then to $V_4$, all the way down until only $e$ is left, which that episode called a composition series. The shape is exactly the same as here; there, the layers were peeled off to see why the quartic equation can be solved and why the $A_5$ of the quintic cannot be peeled; here, the layers are peeled off to twist the cube back. Solving does not have to mean searching blindly among forty-three quintillion states; the range can be narrowed layer by layer.

This table is the storyboard for the animation: each stage highlights the pieces it locks, crosses out the turns no longer used from then on, and the state count in the corner shrinks along with it, until after four stages only one is left.

Today's computer solvers basically all follow this idea. In 1992 Herbert Kociemba compressed the four stages into two, and this is the two-phase algorithm; the solving program he later wrote, Cube Explorer, uses it, and for any state it can usually give a solution of twenty moves or fewer in under a second. The first station of the two phases is exactly the range reached after the second stage of the table above (arranged in a different direction: the up and down faces turned freely, the other four faces only by one hundred eighty degrees); Appendix E computes that it has 19,508,428,800 states and that the whole cube group is cut by it into 2,217,093,120 pieces. This is also the starting point of the proof in the next section.

## 6. Twenty moves

In July 2010, Tomas Rokicki, Herbert Kociemba, Morley Davidson and John Dethridge proved that any legal cube state can be solved within twenty moves, with turning a face by ninety or by one hundred eighty degrees each counted as one move. The computation used about thirty-five CPU-years. One CPU-year is the amount of work of one processor computing nonstop for a year; by their own conversion, a good desktop machine of the time would have needed thirty-five years, while spread over a large number of idle machines donated by Google it was done in a few weeks.

Four years later, in August 2014, Rokicki and Davidson computed the result for another way of counting: if a one-hundred-eighty-degree turn is counted as two moves, then the upper limit for solving is twenty-six moves. That computation used about twenty-nine CPU-years, on machines at the Ohio Supercomputer Center.

Their proof did not compute the forty-three quintillion states one by one. Their idea was to cut the whole state space into pieces according to a subgroup (in mathematics these are called cosets); the states in the same piece use the same set of turns to get back to that subgroup, so each piece only needs to be computed once; then, using the symmetries of the cube and letting the pieces already computed cover other pieces as well, they pressed the number of pieces to be computed down to two and a half percent of the original. In other words, what really made this computable was group theory.

The word coset already appeared in [Episode 2](/zh/writing/symmetry-monster-ep2/): the six actions of $S_3$, cut by the subgroup $A_3$ (the three rotations) into two pieces, the other piece being the three reflections; the two pieces are the same size and fill the whole group with no overlap and no gap, $6 = 2 \times 3$. This is Lagrange's theorem ([Episode 3](/zh/writing/symmetry-monster-ep3/) proved it from scratch). Here the same thing is scaled up to forty-three quintillion: the subgroup $H$ has 19,508,428,800 states, it cuts out 2,217,093,120 pieces, and multiplying the two numbers gives exactly 43,252,003,274,489,856,000, not one more and not one less (Appendix E computes this division).

The subgroup chain of Section 5 and the cosets here are two uses of the same idea: one narrows the range stage by stage, the other gives an upper bound piece by piece.

## 7. Up to what order?

Besides the most common 3×3×3 cube, we may also have seen 4×4×4, 5×5×5, even 10×10×10 cubes. So, going up in order, is there some order at which the cube can no longer be solved? Just as the quintic equation has no solution in radicals?

The answer is no. Any legal scramble is made by a string of turns. Doing that string of turns backward brings you back to the solved state. The group of cube-solving is finite, and every element has an inverse. "Can be scrambled" and "can be twisted back" are, from the start, the two sides of the same operation.

The only thing that changes is the number of moves. For an $n\times n\times n$ cube, the number of moves needed to solve it in the worst case is of the order $\Theta(n^2/\log n)$, meaning that the number of moves grows roughly in proportion to $n^2/\log n$. Where this upper bound comes from: run the standard solving method in parallel, and one turn can bring several mutually unrelated pieces into place at once, and what is saved is exactly that $\log n$.

So asking "up to what order" gives not an order but a growth law. What really stops us is that the cube cannot be built or cannot be turned, not that it cannot be solved.

On the 4×4×4 there are some more interesting things: the three conserved quantities of Section 2 each fare differently on the 4×4×4.

The one about corner orientation is unchanged. The one about edge flips has no corresponding rule on the 4×4×4, and the reason is shape: an edge on the 4×4×4 is a pair of two pieces, and a single piece cannot be flipped over. What on the 3×3×3 is "flipping one edge" shows up on the 4×4×4 as swapping the two pieces of the same edge, which is a matter of position, no longer a matter of orientation.

The parity one is the most interesting: it has not disappeared, it just can no longer be seen. The center pieces of the 4×4×4 move along with face turns, and the four center pieces of the same color look exactly alike, so an odd permutation of the corners can hide its trace in the centers, and from the surface you cannot see that anything is wrong. The 3×3×3 has only one center per face, which cannot hide it, so the trace stays on the parity conserved quantity. As soon as the center pieces are made distinguishable from one another (as picture cubes are), that odd permutation immediately becomes visible again.

People who play the 4×4×4 call this kind of stuck situation parity, and when you hit it you have to go through an extra sequence. It also has another origin: one edge of the 3×3×3 is two pieces on the 4×4×4, and the example in Appendix G is of that kind. It is not that the 4×4×4 is "harder"; it is that that conserved quantity of the 3×3×3 has nowhere to stand on the 4×4×4.

Of the three "cannot be done" items, edge flipping and parity are properties of the 3×3×3, not properties of the cube as such; corner twisting still holds on the 4×4×4.

## 8. There is a group in your hands

The previous eight episodes mainly discussed simple groups: the kind of group that cannot be broken down any further, like the primes among numbers. The cube group is not a simple group; it can be broken apart. And breaking it apart needs no deep tools; the parity from Section 2 is enough.

First, what parity means. Any arrangement of the eight corner pieces can be obtained by a number of "swap two corners" steps; the number of swaps can vary, but whether it is odd or even is fixed. Turning a face cycles four corners once around, which amounts to three swaps, so it is odd; two turns in a row are even. The third conserved quantity of Section 2 says that the corner parity and the edge parity multiplied together are always even; but the corner half on its own does change.

So the operations in the cube group split into two heaps: those after which the corner pieces are in an even permutation, and those after which they are in an odd permutation. The even heap forms a group by itself: two even operations strung together are still even, doing nothing at all also counts as even, and the inverse of an even operation is still even. This heap makes up half of the whole cube group.

It has a still stronger property. Take any operation $g$, first do $g$, then do some operation from the even heap, and finally undo $g$. An operation "done in a different place" this way is still in the even heap: the parity brought in by $g$ and the parity brought in by undoing $g$ cancel each other, the middle step is even, and together it is still even. In mathematics a heap like this is called a normal subgroup. [Episode 3](/zh/writing/symmetry-monster-ep3/) drew this picture: the Cayley table of $S_3$ cut by $A_3$ into two pieces, one called "even" and one called "odd"; even followed by even is even, even followed by odd is odd, odd followed by odd is even, and the whole six-by-six table shrinks to a two-by-two table, which that episode called the quotient group $S_3/A_3$. Cutting the cube group by corner parity gives the same two-by-two table: the even heap is the $A_3$ here, and the sign of the corner permutation is that episode's sgn. Only this time, one half of the table holds more than twenty-one quintillion operations. Appendix F checked this by program: for two hundred random operations, corner parity times edge parity was always even; for sixty random $g$, after being done in a different place, all were still in the even heap.

As soon as a group has one such normal subgroup (neither the one containing only "do nothing" nor the group itself), it is not a simple group. The cube group has one, so it is not a simple group. Appendix F has two more: the two-element subgroup made up of the operation that flips all twelve edges and "do nothing", and the heap of operations that put every piece back in its place and change only orientations.

The simple groups in the previous eight episodes cannot be broken apart; the cube group can, and the way to break it is written right on its surface: you can see it by looking at the parity of the corner pieces. This is exactly why it is suited to serve as a teaching aid: solving methods also follow this kind of path, narrowing the group layer by layer, as the subgroup chain of Section 5 and the cosets of Section 6 both do.

## 9. Summary

Finally, look once more at the product for the number of states (the two numbers counted in Section 2) (Appendix B). The positions of the corners and edges give $8!\cdot12!$, orientations give $3^7$ and $2^{11}$, and the final one half comes from the parities having to match. Compared with the unrestricted count, $3^8$ shrinks to $3^7$, $2^{12}$ shrinks to $2^{11}$, and then there is a division by 2, which is exactly the $3\times2\times2$ of Section 2. Every factor corresponds to a concrete fact: where the pieces can go, which way the pieces can face, and which swaps are forbidden.

Three conserved quantities, six generators, one subgroup chain, twenty moves. That is all this episode is: these few things and nothing else.

Finally, back to the cube of Section 0. That corner has been twisted by one step; add up how many steps each of the eight corners has been twisted, divide by three, and the remainder is one, not zero. Of course it can be twisted back: just twist that corner back one step by hand. What it cannot reach is the other route: turning the six faces, no matter how many moves are strung together, never gets there. It is not a very hard problem; it is simply not in this game at all.

---

## Appendices

## Appendix A · Groups, generators, group actions

> The words this appendix provides are: group, generator, permutation, cycle and cycle decomposition, order, group action, and the step "all arrangements also form a group". Other terms are defined in the appendix that uses them (the sign in C, normal subgroups in F).
> Each conclusion is paired with an example you can compute yourself; all numbers are generated by program, not copied by hand.

### A.1 Starting from "actions that can be undone"

Everything you can do on a cube shares one property: **once done, it can be undone**. Turn the right face clockwise by ninety degrees, then counterclockwise by ninety degrees, and the cube is back as it was.

Collect actions of this kind together, and you get a **group**. The word group asks for only four things, and each of them can be seen on the cube:

| Requirement             | Name  | What it is on the cube                         |
| -------------- | --- | ------------------------------- |
| Two actions strung together are still one action  | Closure  | Turning the right face and then the top face is, as a whole, also an action that can be undone           |
| How the sequence is grouped does not affect the result    | Associativity  | $(ab)c$ and $a(bc)$ are the same string of turns; the parentheses are only punctuation |
| There is a "do nothing"     | Identity | Leave it as it is                            |
| Every action has an action that undoes it | Inverse  | The inverse of clockwise ninety degrees is counterclockwise ninety degrees                 |

Note that a group only requires "stringing together" to make sense; **it does not require commutativity**: turning the right face and then the top face gives a different result from turning the top face and then the right face. The cube is a non-commutative group, and that is exactly why it has content.

### A.2 Six generators

There are only six basic actions on the cube: turning the six faces. They are written $U,D,L,R,F,B$ (up, down, left, right, front, back); adding a prime means the opposite direction ($R'$), and adding $2$ means turning by one hundred eighty degrees (written $R2$, also often written $R^2$; the formulas below always use $R2$).

The group formed by all the actions strung together from these six actions is written
$$
G=\langle U,D,L,R,F,B\rangle .
$$
The angle brackets are read "generated by …": the ones inside the brackets are called **generators**, and every element of $G$ is a finite string of them.

**Example (what $R$ actually moves, generated by program)**. Number the fifty-four stickers of the six faces $0$–$53$; after one $R$, the positions of the stickers are moved like this:

$$
(2\;20\;29\;51)\quad(5\;23\;32\;48)\quad(8\;26\;35\;45)\quad(9\;15\;17\;11)\quad(10\;12\;16\;14)
$$

![Appendix A figure: the numbers of the fifty-four stickers, and the twenty that one $R$ moves](/content/images/2026/09/fig-A-sticker-map.png)

*Figure A: the cube unfolded into six blocks; the number in each square is the number of that sticker. The twenty with colored corner tags are the ones one $R$ moves; the number on the tag tells which of the five cycles below it belongs to. The center sticker of the right face (number 13) has no tag; it is a fixed point. This figure was drawn by the same code that generates the numbers in the appendices.*

The notation inside the parentheses is called a **cycle**, read here as "which square the sticker now in this square came from": square $2$ now holds the sticker that was at $20$, square $20$ the one that was at $29$, $29$ the one that was at $51$, and $51$ the one that was at $2$. Switching to "where the sticker went" reverses it: the sticker on $2$ goes to $51$, $51$ goes to $29$, $29$ goes to $20$, and $20$ returns to $2$. Keep this in mind when checking against a real cube: after one $R$, the right-hand column of the top face moves toward the back, and the right-hand column of the front face moves up. One $R$ moves **20** stickers, exactly five cycles of length $4$. These 20 fall into two parts: the 8 of the right face itself, and the 12 carried along from around it. The position of the right-face center sticker does not change; in the permutation it is a **fixed point**; physically that center piece really does turn in place, it just cannot be seen from the colors of the stickers.

### A.3 Permutations, cycle decomposition, the order of an element

A correspondence of the kind above, "which position goes to which position", is called a **permutation**. Breaking a permutation into disjoint cycles is called **cycle decomposition**. The decomposition is unique, but "unique" needs to be stated carefully: not counting the order in which these cycles are written down, nor which element each cycle is written starting from (for the five above, I chose a starting point for each). In this sense it is unique, so it is the fingerprint of an action.

**The number of times an action is repeated before it returns to the original is called its order.** The order is not a mysterious number: the number of times each cycle needs to turn back to its original position is its length, and the smallest number of times at which they all return together is the **least common multiple** of these lengths.

**Example (three rows, all computed)**

| Action | Stickers moved | Cycle lengths | Least common multiple = order |
|---|---|---|---|
| $R$ | 20 | $4,4,4,4,4$ | $4$ |
| $R\,U$ | 32 | $3,7,7,15$ | $105$ |
| $R\,U\,R$ | 32 | $2,2,5,5,6,6,6$ | $30$ |

Look at the second row: $RU$ has to be repeated **105** times to return to the original, and $105=3\cdot5\cdot7$ is sitting right there in those three cycle lengths ($15=3\cdot5$). **This number does not need guessing; it is counted out directly.**

The third row is a **control**: $R\,U\,R$ adds only one more $R$ than the second row, yet its order is $30$. Adding one move can change the order a great deal; so orders have to be counted one by one, and cannot be guessed from how similar formulas look.

### A.4 Group actions: actions and states are two different things

The last word, and one the following appendices use again and again: **group action**.

The elements of $G$ are **actions**; the arrangements the cube is put into are **states**. An action acting on a state gives another state. Starting from the solved state, each action in $G$ gives a state, and **the states that can be obtained this way are called "the ones that can be twisted into being"**.

Keeping these two things apart has a direct use. Imagine prying out a corner piece, twisting it one step in place, and putting it back: the resulting **state** certainly exists, you have it in your hands; but it is not the result of any string of turns acting on the solved state, so **it is not among the states that "can be twisted into being"**.

There is one way of putting it to avoid: you cannot say that that state "has no inverse". Pry it out and twist it back and it is restored, so as an arrangement it is of course invertible. **What it lacks is not an inverse but a path to reach it**: turning the six faces, no matter how many moves are strung together, never gets there. Appendix C will turn this intuition into a criterion that can be computed.

There is one more step to explain here, or else an extra object will suddenly appear later. **Arrangements themselves can also be strung together**: first set the pieces out according to one arrangement, then rearrange them once more according to another arrangement, and the result is still an arrangement. So **all arrangements also form a group**, and its size is what Appendix B counts; and the $G$ made up of the actions that "can be twisted into being" sits inside it. The 12 computed in C and F's statement that "those three quantities divide the larger set" both refer to this.

In the following appendices, the words of this section are used like this: B counts the number of **states**; the three quantities defined in C are functions of **states**, and they are unchanged under every action of $G$; E cuts $G$ by a subgroup, and the pieces cut out are called cosets; F asks whether $G$ can be broken down further internally.

---

## Appendix B · Counting the number of states

**What this section does.** The main text, §2, says that the unrestricted count of states is 12 times the true value. Here both numbers are counted, and the ratio 12 is computed exactly; as for where this 12 comes from, that is Appendix C's business.

### First, what "a state" means

Take the cube apart and three kinds of piece come out: **8 corner pieces** (three colors), **12 edge pieces** (two colors), **6 center pieces** (one color). The center pieces never change places with one another; they only turn in place, so the six centers fix "which face should be which color", and we use them as the coordinate system and no longer count them in the state.

So a state is determined by four things:

1. which **corner slot** each of the 8 corner pieces lands in;
2. **which step of rotation** each corner piece is in, in its own position (a corner slot has three stickers, and a designated sticker of the corner piece can land in the position of any one of them);
3. which **edge slot** each of the 12 edge pieces lands in;
4. whether each edge piece is **flipped or not** (an edge slot has two stickers).

Items 1 and 3 are each a **permutation**: an arrangement assigning 8 pieces one-to-one to 8 positions, with no two pieces in the same position. Item 2 is called **orientation**, and item 4 is called **flip**; this appendix only needs to count them, and their precise definitions are in Appendix C.

### Counting without restrictions

Count the four things separately, then multiply:

$$
8!\;\cdot\;3^{8}\;\cdot\;12!\;\cdot\;2^{12}.
$$

Where each term comes from: 8 corner pieces placed into 8 corner slots have $8!$ arrangements; each corner piece has 3 orientations, so 8 corner pieces give $3^8$; edges likewise, $12!$ and $2^{12}$.

**Example (computed digit by digit)**:

| Factor | Value |
|---|---|
| $8!$ | 40 320 |
| $3^{8}$ | 6 561 |
| $12!$ | 479 001 600 |
| $2^{12}$ | 4 096 |
| Product | 519 024 039 293 878 272 000 $\approx 5.19\times10^{20}$ |

### The number of states that can really be twisted into being

$$
|G| = \frac{8!\cdot 3^{7}\cdot 12!\cdot 2^{11}}{2} = 43\,252\,003\,274\,489\,856\,000 \approx 4.33\times10^{19}.
$$

This formula has three contractions in it: $3^8$ becomes $3^7$, $2^{12}$ becomes $2^{11}$, and finally there is a division by 2.

**Example (computing the ratio)**:

$$
\frac{8!\cdot 3^{8}\cdot 12!\cdot 2^{12}}{8!\cdot 3^{7}\cdot 12!\cdot 2^{11}/2} = 3\times 2\times 2 = 12 ,
$$

Dividing the two large numbers gives the same result: $519\,024\,039\,293\,878\,272\,000 \div 43\,252\,003\,274\,489\,856\,000 = 12$, with remainder 0 (computed for this article).

**Control (would this ratio be 12 whatever is filled in?)**: write $3^7$ mistakenly as $3^8$, and the right-hand side becomes $129\,756\,009\,823\,469\,568\,000$ (exactly 3 times $|G|$), the ratio becomes 4, and it is no longer equal to $|G|$ either. So the "exact 12" above is not a forced fit.

**This 12 is not a correction factor applied wholesale, but three independent factors $3\times2\times2$.** Each factor corresponds to one "cannot be done", and each of the three is a conserved quantity. Appendix C writes these three quantities down and proves that they really do not move.

---

## Appendix C · Three conserved quantities

**What this section does.** It cashes the $3\times2\times2$ of Appendix B in as three concrete quantities: each is a number that can be computed directly from a state, and no turn ever changes it. With them, the three things "twist just one corner", "flip just one edge" and "swap just two pieces" can be explained in one sentence: they change a quantity that should not change.

### Fixing orientation and flip

To compute, we must first define "which step of rotation" and "flipped or not" so that they can be read off piece by piece.

**Corner orientation.** Each corner slot carries three stickers. Order these three **counterclockwise as seen from outside**, and put the one on the U face or D face in first place (each corner slot carries exactly one sticker on either U or D). Each corner piece also has a designated sticker: the one that is on the U or D face in the solved state. **Orientation $o$** is which of the stickers of its current corner slot this piece's designated sticker now lands on, taking the values 0, 1, 2.

**Edge flip.** Each edge slot carries two stickers, one of which is designated the "primary position": if the edge slot carries a U or D sticker, take that one; for the other four middle-layer edge slots, take the one on F or B. Each edge piece likewise has a primary sticker (determined by the edge slot it occupies when solved). **Flip $f$** is 0 if the primary sticker lands on the primary position, and 1 if it lands on the other one.

These two definitions use only "which sticker is where", and a reader with a real cube can read them off piece by piece.

### The three quantities

Let a state be $(p, o, q, f)$: $p$ is the corner permutation, $o=(o_1,\dots,o_8)$ the orientations of the eight corners, $q$ the edge permutation, $f=(f_1,\dots,f_{12})$ the flips of the twelve edges. Define

$$
\sigma = \sum_{i=1}^{8} o_i \bmod 3,\qquad
\tau = \sum_{j=1}^{12} f_j \bmod 2,\qquad
\mathrm{sgn} = \operatorname{sign}(p)\cdot\operatorname{sign}(q).
$$

**$\bmod 3$** means keeping only the remainder after division by 3: the three values $0,1,2$, with $2+2=1$. **The sign of a permutation $\operatorname{sign}$** is defined like this: break a permutation into a number of successive "swap two pieces" operations; the way of breaking it is not unique, but **the parity of the number of swaps is unique**; an even number is recorded as $+1$, an odd number as $-1$. For example, turning four pieces once around (a 4-cycle) needs three swaps, and its sign is $-1$.

### What one turn does to these three quantities

Take any face and turn it 90°, say $R$. It cycles the pieces in four corner slots once around and the pieces in four edge slots once around, and no other piece moves. **Example (the six generators read off one by one, computed for this article)**:

| Turn | 4-cycle on corners | Corner orientation increments | 4-cycle on edges | Edge flip increments |
|---|---|---|---|---|
| $U$ | (UBL ULF UFR URB) | all 0 | (UL UF UR UB) | all 0 |
| $D$ | (DLB DBR DRF DFL) | all 0 | (DL DB DR DF) | all 0 |
| $R$ | (DBR URB UFR DRF) | $1,2,1,2$ | (DR BR UR FR) | all 0 |
| $L$ | (DLB DFL ULF UBL) | $2,1,2,1$ | (DL FL UL BL) | all 0 |
| $F$ | (DFL DRF UFR ULF) | $2,1,2,1$ | (FL DF FR UF) | each of the four edges flipped 1 |
| $B$ | (DLB UBL URB DBR) | $1,2,1,2$ | (BL UB BR DB) | each of the four edges flipped 1 |

Reading this table line by line:

- **Sign**: every generator is "a 4-cycle of corners × a 4-cycle of edges". The sign of a 4-cycle is $-1$, and the two multiplied give $(-1)\times(-1)=+1$. So $\mathrm{sgn}$ does not change.
- **Corner orientation**: $U$ and $D$ twist nothing at all; the other four turns twist the four corners by $1,2,1,2$ respectively (read in cycle order, $R$ and $B$ are $1,2,1,2$, $L$ and $F$ are $2,1,2,1$), and the four numbers always add up to 6, $6 \bmod 3 = 0$. So $\sigma$ does not change.
- **Edge flip**: $U,D,R,L$ flip none; $F$ and $B$ flip all four of their edges, $4 \bmod 2 = 0$. So $\tau$ does not change.

None of the three quantities moves. And note: **it is not "every piece stays put", it is "the sum stays put"**: $F$ plainly flips four edges, yet $\tau$ still does not change. This is exactly what a conserved quantity means.

### From one turn to any string of turns

The previous paragraph checked only the six generators. To extend to any state, one property is needed: these three quantities **add (multiply)** when "two strings of turns are strung together".

First, to state it precisely. Two states strung together are still a state: first arrange according to $y$, then according to $x$. The corner orientation of the new state is then

$$
o^{x\circ y}_i = o^{x}_{y(i)} + o^{y}_i \pmod 3 ,
$$

Here $o$ is numbered by **piece**, and $y(i)$ is the position where piece $i$ is after $y$: piece $i$, carrying the orientation it got in $y$, $o^{y}_i$, first goes to position $y(i)$, and then $x$ adds one more increment $o^{x}_{y(i)}$ at that position. When summing the eight terms, $y$ only renumbers the eight numbers of $o^x$, and the sum does not depend on the numbering, so

$$
\sigma(x\circ y) = \sigma(x) + \sigma(y) \pmod 3 .
$$

The same calculation gives $\tau(x\circ y) = \tau(x)+\tau(y) \bmod 2$; and the sign of a permutation satisfies $\operatorname{sign}(p_1p_2)=\operatorname{sign}(p_1)\operatorname{sign}(p_2)$ to begin with, so $\mathrm{sgn}$ multiplies too.

A map that, like this, "turns stringing together into adding (multiplying)" is called a **homomorphism**. Pack the three quantities into one map

$$
\Phi: (p,o,q,f)\;\longmapsto\;(\sigma,\ \tau,\ \mathrm{sgn})\;\in\;\mathbb{Z}/3\times\mathbb{Z}/2\times\{\pm1\},
$$

and it is a homomorphism, with $3\times2\times2 = 12$ values in all on the right-hand side.

So: the $\Phi$ value of every generator is $(0,0,+1)$; any string of turns is generators strung together; a homomorphism turns "stringing together" into "adding", and what is added is always 0. **So for any state that can be twisted into being, the $\Phi$ value is $(0,0,+1)$**.

**Example (300 random moves, computed for this article)**: starting from the solved state, twist randomly for 300 moves, reading $(\sigma,\tau,\mathrm{sgn})$ after each move; all 300 readings are $(0,0,+1)$.

### Three things that cannot be done

![Appendix C figure: three states that cannot be reached, each breaking only one of the three conserved quantities](/content/images/2026/09/fig-C-invariants.png)

*Figure C: a solved cube altered by hand, one column for each of the three ways of altering it. Red frames mark the stickers that were changed, and the three cells below are the same set of readings $\sigma$, $\tau$, $\mathrm{sgn}$. **In each column exactly one number has left its conserved value**, and that number is the reason this alteration cannot be done. The third column has only two stickers changing color because the two upward-facing stickers that were swapped are both white, so that half of the swap cannot be seen in the colors. This figure was drawn by the same code that computes the three quantities of Appendix C.*

Used the other way round: **as soon as the $\Phi$ value of some state is computed to be other than $(0,0,+1)$, it certainly cannot be twisted into being.**

**Example (three states, computed one by one, computed for this article)**:

| State altered by hand | $\sigma$ | $\tau$ | $\mathrm{sgn}$ | Conclusion |
|---|---|---|---|---|
| Twist the UFR corner one step in place, nothing else moved | $1$ | 0 | $+1$ | $\sigma\neq0$ ⟹ cannot be twisted into being |
| Flip the UR edge in place, nothing else moved | 0 | $1$ | $+1$ | $\tau\neq0$ ⟹ cannot be twisted into being |
| Swap the two edges UR and UF, nothing else moved | 0 | 0 | $-1$ | $\mathrm{sgn}\neq+1$ ⟹ cannot be twisted into being |

The first row is exactly the cube with the twisted corner from §0: it is not "very hard to solve", it is **impossible** to solve: the one missing step leaves $\sigma$ holding a $1$, and no turn can change $1$ back into $0$.

(Twist the corner one step in the other direction and $\sigma$ reads $2$; $2$ is not $0$ either, and the conclusion is the same.)

### Where 12 comes from

Now the question Appendix B left can be answered. The $5.19\times10^{20}$ arrangements counted without restrictions form a set $S$; $\Phi$ maps $S$ onto 12 values.

- **$\Phi$ really takes all 12 values**: the three rows of the table above give $(1,0,+1)$, $(0,1,+1)$, $(0,0,-1)$ respectively, and stringing them together gives all 12 combinations.
- **The 12 heaps of arrangements corresponding to the 12 values are the same size**: fix an arrangement $a$; the map $s \mapsto a\circ s$ maps $S$ one-to-one onto itself (because $a$ can be undone), while the $\Phi$ values are all shifted by a fixed amount. So the 12 heaps are pairwise the same size, $|S|/12$ each.
- The states that can be twisted into being are all in the heap $\Phi=(0,0,+1)$, so

$$
|G| \le \frac{|S|}{12} = 43\,252\,003\,274\,489\,856\,000 .
$$

**How far this proof goes.** What is proved above is "$\le$": the three conserved quantities **rule out** 11/12 of the arrangements. The other half: **every arrangement for which all three quantities are right really can be twisted into being**. This appendix does not prove it. What it needs is a construction: formulas that can cycle any three pieces once around without moving the other pieces (the three-cycles of Appendix D), and formulas that adjust only orientation. With this kit, any state with $\Phi=(0,0,+1)$ can be restored step by step, so that $|G| = |S|/12$ holds with equality. Appendix D gives the three-cycles among them (an example that adjusts only corner orientation is in Appendix F); stringing them into a route that works for every state is what the four-stage chain mentioned in the main text, §5, does (see Source 6 at the end), and this article does not walk through that route.

---

## Appendix D · Commutators and conjugates: shrinking the range of action

**What this section does.** What Appendix C proved is one half: the three conserved quantities **rule out** eleven twelfths of the arrangements. To close $\le$ into $=$, the reverse ability is needed: **given any state for which all three quantities are right, it can be twisted back**. This section builds two tools: the conjugate and the commutator. They are the engine of every solving method, and also the building material for that half.

### How many pieces one turn moves

First, a number: turning $R$ by 90° moves 4 corner pieces + 4 edge pieces = **8 pieces** (computed for this article). $U$ is also 8 pieces. Turning any face is 8 pieces.

This is where the difficulty lies: to put the last two or three pieces right, every move available also moves 8 pieces along the way. **So the question is not "can you twist it" but "can you move only the few pieces you want to move".**

### Conjugate: the same trick, used in a different place

Let $A$ be a string of turns, and $X$ another. Read

$$
X A X^{-1}
$$

as three steps: first do $X$ to send the pieces you want to move **to where $A$ can reach them**, then do $A$, and finally use $X^{-1}$ to **put the scene back**. The net effect: **the trick $A$ is left exactly as it is; only the objects it acts on are changed.**

**Example (computed for this article)**. Take

$$
A = R\,B'\,R\,F2\,R'\,B\,R\,F2\,R2 ,
$$

It is a **pure corner three-cycle**: it only cycles three corner pieces once around, moves no edge piece, and leaves no twist behind (for its relation to the commutator, see "One more step: orientation" below). Computed readings:

| Formula | Order | Corner pieces moved | Edge pieces moved |
|---|---|---|---|
| $A$ | 3 | ULF, URB, UFR | none |
| $U A U^{-1}$ | 3 | UBL, URB, UFR | none |

**It is still "three corners cycled once around", but a different triple**: the ULF that $A$ moves has been replaced by UBL, and the other two are unchanged. This is the conjugate: the trick is unchanged, the objects have changed. Whichever three corners the reader wants to move, find an $X$ that sends them to the three positions of $A$.

(A detail, left for the punctilious reader: if the $U$ above is replaced with $F$, the resulting three-cycle carries a twist. The reason is that in Appendix C "orientation" is defined relative to the U/D faces, and $F$ changes this reference. In other words, conjugation preserves "the shape of the permutation", but orientation has to be reconverted.)

### Commutator: let two tricks cancel each other, leaving only a few pieces near their intersection

Let $A$ and $B$ each be a string of turns. The **commutator** is defined as

$$
[A, B] = A\,B\,A^{-1}\,B^{-1} .
$$

How to read it: do $A$, do $B$, undo $A$, undo $B$. If the pieces $A$ and $B$ each move barely overlap, then the two undoing steps restore almost everything: **what is left different is only a few pieces: the pieces that fall in the range the two share, and the pieces that the two tricks carry into and out of that range**.

**Example (computed for this article)**: take $A = R\,U\,R'$, $B = D$.

| Formula | Pieces moved | Details |
|---|---|---|
| $R\,U\,R'$ | 8 | corners UBL, ULF, DRF, UFR; edges UL, UB, UF, FR |
| $D$ | 8 | corners DLB, DFL, DBR, DRF; edges DL, DB, DF, DR |
| $[R\,U\,R',\,D]$ | **3** | corners DFL, DRF, UFR; edges **none** |

Each of the two tricks moves 8 pieces, while the commutator combining them moves only 3. Their ranges of corner pieces share only one, DRF, and **the difference left behind lies exactly around this intersection**.

**The commutator presses the range of action down from "eight pieces" to "three pieces".**

### One more step: orientation

$[R\,U\,R',\,D]$ moves only three corners and does not touch the edges, but the computed readings show: **two of the corners carry twists** (DRF twisted 1, UFR twisted 2). So it is not yet a "clean" three-cycle.

This is exactly an echo of Appendix C's three quantities here: **position** and **orientation** are two independent things; the commutator settles position first, and orientation has to be paid back separately. Swap out $A$ and $B$ and try again, and the twist can be pressed out too; the $A = R\,B'\,R\,F2\,R'\,B\,R\,F2\,R2$ above is the result: 3 corners, 0 edges, 0 twist.

The matching edge version was also computed:

$$
R2\,U\,R\,U\,R'\,U'\,R'\,U'\,R'\,U\,R' \quad\text{: order 3; only cycles three edge pieces once around, moves no corner piece, no flips.}
$$

### Order: how many times a string of turns is repeated before it returns to the start

Keep doing the same string of turns over and over, and you always come back to the solved state (the states are finite, and every step can be undone). The number of times is called the **order** of this string of turns.

**Example (all computed for this article)**:

| Formula | Order |
|---|---|
| $R\,U$ | 105 |
| $R\,U\,R$ | 30 |
| $R\,U\,R'\,U'$ | 6 |
| $R'\,D'\,R\,D$ | 6 |
| $R\,U\,R'\,U'\,R'\,F\,R\,F'$ | 3 |
| $R\,B'\,R\,F2\,R'\,B\,R\,F2\,R2$ | 3 |

⚠️ **An order of 3 does not mean "it is a three-cycle".** The last two rows of the table above both have order 3, but the readings differ: $R\,B'\,R\,F2\,R'\,B\,R\,F2\,R2$ moves only 3 corners; while $R\,U\,R'\,U'\,R'\,F\,R\,F'$ **moves 3 corners and 3 edges at the same time** (two corners twisted, two edges flipped). An order of 3 only says "doing it three times returns to the start", which a corner three-cycle and an edge three-cycle multiplied together also satisfy. If you want "moves only three pieces", you have to read off directly which pieces are moved.

### Connecting this kit back to Appendix C

A three-cycle is an **even permutation**: cycling three pieces once around equals two transpositions. So no matter how three-cycles are combined, $\mathrm{sgn}$ is always $+1$, in full agreement with the conserved quantity of Appendix C, and **"swap just two pieces" can never be assembled**.

Conversely, with pure three-cycles (one for corners, one for edges) plus formulas that adjust only orientation, any state for which all three quantities are right can be restored step by step: if the corner permutation and the edge permutation are both odd ($\mathrm{sgn}=+1$ allows this, and one face turn is such a case), first turn a face once to make both even at the same time; then use three-cycles to put the positions right, and then adjust orientations. This is the direction for completing the boundary at the end of Appendix C; turning it into a complete route that holds for every state is what the four-stage chain mentioned in the main text, §5 (Source 6), does, and this article only points out the direction.

### The complete solve from the main text, §4

Scramble (starting from the solved state, twenty-five moves, computed for this article):

$$
D'\,R'\,L\,U'\,B2\,R\,D2\,U'\,B'\,F\,U'\,L'\,U2\,F'\,U2\,B2\,L'\,U'\,R\,F'\,U'\,L\,U'\,F'\,U'
$$

Twisted back by the official eight steps, with the turns of each step (adjacent turns of the same face within one step have been merged; Step 6 does the formula in full twice, and the seam is not merged):

- Step 1, daisy, 7 moves: $R'\,F'\,B\,U\,R'\,B\,R$
- Step 2, white cross, 8 moves: $U\,R2\,U2\,F2\,U2\,L2\,U2\,B2$
- Step 3, white corners, 41 moves: $U2\,R\,U\,R'\,U'\,R\,U\,R'\,U'\,R\,U\,R'\,U'\,F\,U\,F'\,U'\,F\,U\,F'\,U'\,B\,U\,B'\,U'\,B\,U\,B'\,U'\,B\,U\,B'\,U'\,B\,U\,B'\,U'\,B\,U\,B'\,U'$
- Step 4, middle layer, 31 moves: $U\,R\,U'\,R'\,U'\,F'\,U\,F\,U'\,R\,U'\,R'\,U'\,F'\,U\,F\,U2\,L'\,U\,L\,U\,F\,U'\,F'\,B'\,U\,B\,U\,L\,U'\,L'$
- Step 5, yellow cross, 6 moves: $L\,U\,F\,U'\,F'\,L'$
- Step 6, yellow face (twisting corners), 14 moves: $B\,U\,B'\,U\,B\,U2\,B'\,B\,U\,B'\,U\,B\,U2\,B'$
- Step 7, positioning the yellow corners, 11 moves: $U\,R'\,F\,R'\,B2\,R\,F'\,R'\,B2\,R2\,U'$
- Step 8, positioning the yellow edges, 0 moves: not needed for this scramble (the four edges are each already in place)

118 moves in total. Check: the scramble followed by these 118 moves puts every piece back in its place, with every orientation correct. The animation is drawn in these eight segments.

---

## Appendix E · Subgroups, cosets and Lagrange: the 2010 proof

**What this section does.** It uses a real example to explain "subgroup" and "coset": the 2010 computation proving that "any state can be solved within 20 moves" was itself a coset decomposition. All the numbers can be checked yourself.

### Subgroups

A **subgroup** means a subset of a group that is closed in itself: any two elements in it strung together are still in it, and the inverse of each element is also in it.

The protagonist of this section is this one:

$$
H = \langle\, U,\ D,\ R2,\ L2,\ F2,\ B2 \,\rangle
$$

This group lets only the up and down faces turn freely, while the other four faces can only turn 180°. The angle brackets mean "generated by these turns": all the states that can be obtained by stringing them together in any way. This is the intermediate set in Herbert Kociemba's two-phase solving method.

**What $|H|$ is (example, computed term by term)**: in $H$,
- the 8 corner pieces can be arranged in any way: $8!$;
- the 8 edge pieces of the up and down layers can be arranged in any way: $8!$;
- the 4 edge pieces of the middle layer can only stay in the middle layer, and can be arranged in any way: $4!$;
- orientations are all locked (these turns do not change the orientation of any piece), and the parity of the corner permutation and of the edge permutation must agree, giving a factor $\tfrac12$.

These four items only show that $H$ cannot have more states than this; that these arrangements really can all be generated, so that equality holds, this article does not prove; the equality is cited from Source 1 (cube20.org gives 19 508 428 800 states per coset).

$$
|H| = \frac{8!\cdot 8!\cdot 4!}{2} = \frac{40320 \times 40320 \times 24}{2} = 19\,508\,428\,800 .
$$

### Cosets

Fix a state $g$. First arrange according to any element of $H$, then go on to do $g$; the resulting heap of states is written $Hg$ and is called the **coset** of $g$. (Read the symbols the way the formula is written, left to right being the order in time; the order matters: $H$ first, $g$ after. The other way round, "first $g$, then $H$", gives a different heap, and the statement below, "the same distance from $H$", does not hold for it; $R$ and $R\,U$ are a pair of counterexamples: one gets back to $H$ in one move, the other needs at least two.)

Two cosets either coincide completely or have no intersection at all, and every coset is the same size as $H$. These two facts together are **Lagrange's theorem**: (these two facts were demonstrated in [Episode 2](/zh/writing/symmetry-monster-ep2/) with $S_3$ and $A_3$, and [Episode 3](/zh/writing/symmetry-monster-ep3/) gave the complete proof; here that approach is just applied to a much larger group.)

$$
|G| = (\text{number of cosets}) \times |H| .
$$

**Example (computed for this article)**:

$$
\frac{|G|}{|H|} = \frac{43\,252\,003\,274\,489\,856\,000}{19\,508\,428\,800} = 2\,217\,093\,120
$$

The remainder is 0. Multiplying back also works: $2\,217\,093\,120 \times 19\,508\,428\,800 = |G|$.

**Control**: change the size of each coset to 19 508 428 801, and the product no longer equals $|G|$: this equation is not trivially true.

### This is how the 2010 proof cut it

Cut the whole cube group by $H$ into 2 217 093 120 cosets $Hg$. For states in the same coset, the turns needed to get back to $H$ are the same set: when $x = h\,g$, $x\,m \in H$ if and only if $g\,m \in H$, independent of $h$. So "how far from $H$" is a number shared by the whole coset. Proving "any state within 20 moves" therefore does not require checking $4.3\times10^{19}$ states one by one; it only requires giving an upper bound for each coset.

The three numbers given in the original (`cube20.org/How We Did It`):

| Number | Value | Checked for this article |
|---|---|---|
| Number of cosets | 2 217 093 120 | matches $\vert G\vert/\vert H\vert$ |
| Size of each coset | 19 508 428 800 | matches $8!\cdot8!\cdot4!/2$ |
| Cosets actually computed after using symmetry and set cover | 55 882 296 | **2.52%** of all cosets |

The last row is the reason this computation could be finished: the cube has 48 symmetries (rotations plus mirror images), and in addition the result for one coset can cover other cosets, so only 2.52% actually needed to be worked on.

**Example**: $55\,882\,296 \div 2\,217\,093\,120 = 2.5205\%$ (computed for this article).

### Relation to the main text, §5

The Thistlethwaite four-stage method described in the main text, §5, is an earlier version of the same idea: not one subgroup but a **subgroup chain**, each stage restricting the problem to a smaller subgroup. $H$ is equivalent to the second station on this chain: Thistlethwaite let the left and right faces turn freely and the other four faces turn only by one hundred eighty degrees; Kociemba switched the two free faces to up and down, and he himself says the two are equivalent. The four-stage method turns "solving" into "entering smaller subgroups stage by stage", while the 2010 proof turns "counting moves" into "giving an upper bound coset by coset".

---

## Appendix F · The cube group is not a simple group

**What this section does.** The main thread of the whole series is **simple groups**: the kind of group that cannot be broken down any further. The cube group $G$ is **not** a simple group: it can be broken apart. Here a concrete witness is given, and it is verified item by item that it satisfies the definition.

### Two words

**Normal subgroup**: take a group $G$ and a subgroup $N$ of it; if for every $g\in G$

$$
gNg^{-1} = N ,
$$

then $N$ is called normal. How to read it: do the operations in $N$ **in a different place** (the conjugate of Appendix D), and what you get is still in $N$: this heap of operations, done as a whole in a different place, is still this heap.

**Simple group**: a group with only two normal subgroups (the one containing only the identity, and the group itself). That is, it cannot be broken apart. (Both words were defined in [Episode 3](/zh/writing/symmetry-monster-ep3/), which used the Cayley table of $S_3$ to draw "cutting into blocks by a normal subgroup, and how blocks multiply with one another"; here they are simply taken over.)

### A road that does not go through (stated clearly first)

The handiest idea is to use the three conserved quantities of Appendix C: doesn't each quantity give "the operations that do not change it"?

**This road does not go through.** $\sigma$, $\tau$, $\mathrm{sgn}$ are homomorphisms defined on **the group $S$ of all arrangements**. In the states that **can be twisted into being**, the three quantities **are all at the conserved value $(0,0,+1)$ to begin with** (the conclusion of Appendix C). So "the operations that do not change $\sigma$" are, in $G$, **all the operations**, and nothing is separated out.

In other words: these three quantities divide **the larger set** $S$, of which the cube group is only one twelfth; they fence $G$ into a normal subgroup of $S$ (that the two are equal depends on the half that Appendix C did not prove), but they say not one word about the structure **inside** $G$.

### Witness: look only at the parity of the corner permutation

The third quantity in Appendix C is the **product** of two signs: $\operatorname{sign}(\text{corner permutation})\cdot\operatorname{sign}(\text{edge permutation})$, which on $G$ is constantly $+1$.

**But either half on its own is not constant.** Define

$$
\varepsilon: G \longrightarrow \{\pm1\},\qquad
\varepsilon(g) = \operatorname{sign}(\text{corner permutation of }g) .
$$

- It is a homomorphism: when two strings of turns are strung together, the corner permutations multiply, and the signs multiply.
- It takes both values: $\varepsilon(R) = -1$, $\varepsilon(R^2) = +1$ (**computed for this article**).

So $N = \{\,g : \varepsilon(g) = +1\,\}$, that is, **the operations that put the corner pieces in an even permutation**, is a normal subgroup of $G$ of index 2. $G$ is cut by it into two halves, one half being $N$ and the other half the odd operations like $R$.

To put it plainly: **the operations that put the corner pieces in an even permutation form a heap of their own; any operation that does this whole heap in a different place still gives this heap.**

#### Verifying the definition item by item (example, computed for this article)

| What is checked | How | Result |
|---|---|---|
| Agreement with Appendix C | 200 random elements, comparing "corner sign × edge sign" | always $+1$, 0 violations (the homomorphism property needs no test: the sign of a permutation multiplies to begin with) |
| Surjective | compute $\varepsilon(R)$, $\varepsilon(R^2)$, $\varepsilon(\mathrm{id})$ | $-1$, $+1$, $+1$ ⟹ both values are taken |
| $gNg^{-1}=N$ | take $n = R^2 \in N$, and with 60 random $g$ form $gng^{-1}$ | all 60 are still in $N$ |
| **Control** | take the odd element $R\notin N$, and conjugate it 60 times in the same way | all 60 are still odd ⟹ this check **can** report an error; it is not trivially true |

The last row shows that this check can tell inside from outside: an odd element is still odd after conjugation, and is not counted into $N$.

### Second witness: flipping all twelve edges

There is an even smaller normal subgroup, with only two elements: the identity, and the state that **flips all 12 edge pieces in place** (called the superflip).

It can be done in 20 moves; the formula below is taken from Source 1:

$$
R\,L\,U2\,F\,U'\,D\,F2\,R2\,B2\,L\,U2\,F'\,B'\,U\,R2\,D\,F2\,U\,R2\,U
$$

**Computed for this article**: this formula really does only flip the 12 edges, moves no corner, and does not change the position of any piece; it is in $G$; it **commutes with all** of the six generators and 60 random elements (doing it first and then something else gives the same result as doing the other thing first and then it); done twice it returns to the solved state.

**Commuting** is the only new word here, and it gives normality directly: if $n$ commutes with every $g$, then $gng^{-1} = n$, and this heap is of course still the original heap.

### Third witness: the operations that only twist without changing places

There is also the candidate that looks most natural: the operations that **put every piece back in its place, with only some pieces turned by a step**. It is normal (it is the kernel of the homomorphism "forget orientation, look only at position"), and **a member can be exhibited** (computed for this article):

$$
(R'\,D'\,R\,D)^2\;U\;(R'\,D'\,R\,D)^4\;U'
$$

After the twenty-six moves are done, all twenty pieces are in their original places and no edge is flipped; only UFR is twisted one step and URB one step in the opposite direction ($1+2=3\equiv0$, exactly in accord with the $\sigma$ of Appendix C); its order is 3. So this kernel contains more than just the identity, and is a third nontrivial normal subgroup of $G$.

Why it can be found: doing $R'D'RD$ twice only twists UFR one step and messes up the bottom layer; the $U$ in the middle swaps another corner into the same position; doing it four more times twists that corner two steps, and the six repetitions in total are exactly the order of $R'D'RD$, so the mess in the bottom layer is exactly paid back.

### Where this lands

The cube group can be broken apart: $\varepsilon$ cuts it into two halves, the superflip gives a two-element normal subgroup (it lies in the center; that the center has exactly these two elements is a known result, and this article checked only the first half), and pure twists give a third normal subgroup. **It is not a simple group.** The simple groups on the main thread of the series (especially the Monster) cannot be broken apart; the cube group is not one of them, and it is precisely this "breakability" that makes it a good teaching aid: solving methods follow the same kind of path, narrowing the group layer by layer (the subgroup chain of the main text, §5, and the cosets of Appendix E).

---

## Appendix G · Generalizing to order $n$

**What this section does.** The main text, §7, asks "at what order does it become unsolvable". Here the three conserved quantities of the 3×3×3 are taken one by one to the 4×4×4 (for higher orders only the number of moves is discussed): which one still holds, which one has no counterpart at all, and which one breaks down. Where it lands is one sentence: **of the three "cannot be done" items, two are properties of the 3×3×3, not properties of the cube as such; corner twisting still holds on the 4×4×4.**

### The kinds of piece change with $n$

Taken apart, an order-$n$ cube has three classes of piece:

- **Corner pieces**: always 8, with 3 stickers each.
- **Pieces on the edges**: on the 3×3×3, 1 per edge; on order $n$, $n-2$ per edge. For $n\ge4$ they are called **wings**, with 2 stickers each.
- **Face centers**: $(n-2)^2$ per face, with 1 sticker each.

Two differences from the 3×3×3, both used later:

1. **When $n$ is even there are no fixed centers.** The six centers of the 3×3×3 never change places with one another and define "which face is which color"; the 24 centers of the 4×4×4 all move.
2. **Center pieces of the same color cannot be told apart.** Four white centers swapped among themselves look exactly the same.

### The number of states of the 4×4×4

Counted term by term (**example, computed for this article**):

| Part | Count | Origin |
|---|---|---|
| Corner positions and orientations | $8!\cdot 3^{7}$ | the 8 corners arranged in any way (**including odd permutations**); the orientations of 7 corners free, the 8th uniquely determined |
| 24 wings | $24!$ | arranged in any way, **including odd permutations**; a wing cannot be flipped on its own |
| 24 center pieces | $24!/(4!)^{6}$ | arranged in any way, but the 4 of each color cannot be told apart |
| Overall orientation | $\div\,24$ | with no fixed centers, the 24 ways of setting the whole cube down look the same |

$$
\frac{8!\cdot 3^{7}\cdot (24!)^2}{24^{7}} = 7\,401\,196\,841\,564\,901\,869\,874\,093\,974\,498\,574\,336\,000\,000\,000 \approx 7.40\times10^{45} .
$$

($24^7 = (4!)^6\times 24$: the sixth power comes from the six colors, and the final 24 from the overall orientation.)

David Singmaster gave the same result as early as 1982 [1]; he wrote it as $8!\cdot24!\cdot24!\cdot3^8/(3\cdot24^7)$ (the same as the formula above, since $3^8/3 = 3^7$), followed by the same 46 digits. This article first computed it term by term independently, and then went back to check against his original.

### Going through the three conserved quantities one by one

![Appendix G figure: the three conserved quantities read once on the 3×3×3 and once on the 4×4×4](/content/images/2026/09/fig-G-n-order.png)

*Figure G: the same three quantities, read once on the 3×3×3 and once on the 4×4×4. The upper half shows the kinds and numbers of pieces, each number computed twice (enumerating the small pieces + closed form), and the two agree. The lower half shows what becomes of the three conserved quantities: $\sigma$ holds on both; $\tau$ has **no counterpart** on the 4×4×4, because a wing cannot be flipped over at all, and what looks like "flipping one edge" on the 3×3×3 is a swap on the 4×4×4; $\mathrm{sgn}$ **breaks down** on the 4×4×4, and there are two origins: an odd permutation of the corners hides in the center pieces, which are of the same color and therefore identical to one another; and one edge of the 3×3×3 becomes two pieces on the 4×4×4. The last row is where this appendix really lands: there is no order that "cannot be solved"; what grows is only the number of moves needed to solve.*

#### $\sigma$ (the sum of corner twists $\bmod 3$): still holds

The corner pieces of the 4×4×4 are still corner pieces with three stickers, and face turns still twist them in the same way.

**Example (computed for this article)**: 200 random 4×4×4 scrambles (including inner slice turns and double-layer turns), $\sigma$ computed once for each, **0 violations**. **Control**: twist a corner one step in place by hand, and $\sigma$ reads 1, not 0. So this check can report an error.

This is also exactly where the $3^7$ term in the count above comes from.

#### $\tau$ (the sum of edge flips $\bmod 2$): no counterpart

On the 3×3×3, "flip" means an edge piece turning over in its place. **A wing of the 4×4×4 cannot do this**, and the reason is physical:
> The 24 edges cannot be flipped, due to the internal shape of the pieces. [2]

Then what does "flipping one edge" on the 3×3×3 look like on the 4×4×4? **It is swapping the two wings on the same edge.** That is a **permutation**, not an orientation. So $\tau$ has no corresponding conserved quantity on the 4×4×4; its role is merged into the next one.

#### $\mathrm{sgn}$ (the sign of the permutation): breaks down

On the 3×3×3, "swap just two pieces, nothing else moved" is ruled out by $\mathrm{sgn}$ (Appendix C). **On the 4×4×4, something that looks the same can be done.**

**Example (computed for this article)**. On the 4×4×4, perform

$$
r2\ U2\ r2\ Uw2\ r2\ u2
$$

($r$ is the inner slice that is the second layer counted from the right face, $Uw$ is the top two layers turned together, $u$ is the second layer counted from the top). Readings:

- all 8 corners **in place**;
- all 24 centers **appear to be in place** (the four centers of each face are all that face's color; center pieces of the same color cannot be told apart, so what is checked here is color. Counted by piece, 8 center pieces have changed places among pieces of the same color);
- all 12 edges **paired** (the two wings of each edge have matching colors);
- read the 3×3×3 way, **exactly two edges have swapped places**, and the other ten have not moved. The sign of this permutation is $-1$.

**Two controls**: the solved state, read the same way, gives 12 paired edges and sign $+1$; a single turn of $U$ gives a cycle of four edges, sign $-1$, and the corner pieces **not** in place. So "sign $-1$" is not a result that this way of reading always gives.

On the 3×3×3, this kind of state (only two edges swapped, everything else at home) is exactly the kind in the third row of the table in Appendix C, judged by $\mathrm{sgn}$ to be impossible to twist into being; this formula swaps the two edges UF and UB. On the 4×4×4 it can be twisted into being.

**Where the difference lies.** An edge of the 3×3×3 is one piece; an edge of the 4×4×4 is two wings. Swapping two edges as wholes is two swaps on the 24 wings, which is an **even** permutation (computed for this article: two swaps of wings, not a single corner moved, and the center pieces, counted by piece, four swaps, also even). The reason the $\mathrm{sgn}$ of the 3×3×3 stops it is that it counts each edge as one piece. So in this example no odd permutation is hidden; what happens is that the "one piece" of the 3×3×3 becomes "two pieces" on the 4×4×4.

On the 4×4×4 there is another kind of odd permutation that really is hidden, hidden in the center pieces:
> An odd permutation of the corners implies an odd permutation of the centres and vice versa; however, even and odd permutations of the centres are indistinguishable due to the identical appearance of the pieces. [2]

The six centers of the 3×3×3 are one each, which cannot hide it, so an odd permutation of the corners leaves a trace on the outside, and that trace is $\mathrm{sgn}$. On the 4×4×4, four same-color centers swapped among themselves cannot be seen: one outer face turn gives a four-cycle on the corners and a four-cycle on the centers (computed for this article), the center half cannot be seen, and an odd permutation of the corners no longer has anything like $\mathrm{sgn}$ to stop it.

This "hidden" is not rhetoric; it is operational: **make the center pieces distinguishable from one another (for example, a picture cube), and an odd permutation of the centers immediately becomes visible**, and the number of states is multiplied back accordingly [2].

### Up to what order

There is no "up to". Every order can be solved: a scramble is a string of turns, every step can be undone, and doing it backward is enough.

What really grows with $n$ is **how many moves are needed in the worst case**. Its order of magnitude is known:

$$
\Theta\!\left(\frac{n^2}{\log n}\right) ,
$$

Demaine et al. 2011 (arXiv:1106.5736, **the original abstract checked for this article**): the upper bound comes from running the standard $\Theta(n^2)$ solving methods **in parallel**, so that one turn can handle many mutually unrelated pieces at the same time, and what is saved is exactly $\log n$; the lower bound comes from counting [3].

So the answer to the question in the main text, §7, is not an order; **it is a growth law**.

---

### References

[1] D. Singmaster, *Cubic Circular*, Issue 3 & 4 (spring and summer 1982), the section "Rubik's Revenge — The $4^3$". Original text: "the correct (I hope!) answer is $8!\cdot24!\cdot24!\cdot3^8/(3\cdot24^7)$ = 7 40119 68415 64901 86987 40939 74498 57433 60000 00000 = $7.4\times10^{45}$", and it explains that the 24s in the denominator come from the six sets of four identical centers each having 24 arrangements, and from the cube having 24 indistinguishable orientations. Accessed 2026-09-20 (the archived version on jaapsch.net).

[2] Wikipedia, *Rubik's Revenge*, the Permutations section (accessed 2026-09-20): the two quotations above are from this page; the formula and the full number it gives agree with [1], and this article uses it as a secondhand cross-check.

[3] E. D. Demaine, M. L. Demaine, S. Eisenstat, A. Lubiw, A. Winslow, *Algorithms for Solving Rubik's Cubes*, arXiv:1106.5736. Original abstract: "we show that the n x n x n Rubik's Cube … has a 'God's Number' (diameter of the configuration space) of Theta(n^2/log n). The upper bound comes from effectively parallelizing standard Theta(n^2) solution algorithms, while the lower bound follows from a counting argument."


---

## Sources

**Primary**
1. Tomas Rokicki, Herbert Kociemba, Morley Davidson, John Dethridge, *God's Number is 20*, <https://cube20.org/> (20 moves, about 35 CPU-years, the history table, and the coset and symmetry-reduction numbers of "How We Did It")
2. Tomas Rokicki, Morley Davidson, *God's Number is 26 in the Quarter Turn Metric*, <https://cube20.org/qtm/> (August 2014, the two authors, about 29 CPU-years, Ohio Supercomputer Center; only one state is known to need 26 moves, together with its two rotated images)
3. David Singmaster, *Cubic Circular* Issue 3 & 4 (1982), <https://www.jaapsch.net/puzzles/cubic3.htm> (the original formula and full number for the 4×4×4 state count; the parity coupling of centers and corners)
4. Erik D. Demaine, Martin L. Demaine, Sarah Eisenstat, Anna Lubiw, Andrew Winslow, *Algorithms for Solving Rubik's Cubes*, arXiv:1106.5736 (the diameter of the $n\times n\times n$ is $\Theta(n^2/\log n)$)
5. Herbert Kociemba, the two-phase algorithm, <https://www.kociemba.org/math/imptwophase.htm>
6. Morwen Thistlethwaite's original typescript (scanned by Singmaster, transcribed by Jaap Scherphuis), <https://www.jaapsch.net/puzzles/thistle.htm>
7. Hungarian patent HU170062B (filed 1975-01-30, published 1977-03-28, family title "Spatial logic toy"), <https://patents.google.com/patent/HU170062B/en>
8. Gathering 4 Gardner, verbatim transcript of an interview with Rubik (recorded 2018, published 2019; the source of the two statements that he was not setting out to make a puzzle and that it took more than a month to get it back for the first time, original words "The cube was not created as a puzzle" and "It was more than a month I find my practical solution"), <https://www.gathering4gardner.org/an-interview-with-erno-rubik/>

**Secondary (used as cross-checks)**
9. *Rubik's Revenge*, English Wikipedia, <https://en.wikipedia.org/wiki/Rubik%27s_Revenge> (the formula and full number for the 4×4×4 state count, citing Singmaster; wings cannot be flipped on their own; same-color centers make odd permutations invisible)
11. *Ernő Rubik*, English Wikipedia, <https://en.wikipedia.org/wiki/Ern%C5%91_Rubik> (year of birth, education, teaching post at the Academy of Applied Arts, the prototype of twenty-seven wooden blocks, 1977 Hungarian launch, 1979 license to Ideal, 1980 worldwide sale; the year of the prototype is still handled as described in the note at the end)
12. The CV on Morwen Thistlethwaite's own homepage, <https://web.math.utk.edu/~mthistle/bio.html> (1968–1972 doctorate, University of Manchester; 1972–1975 Piano studies; 1975–1978 North London Polytechnic; 1978–1987 South Bank Polytechnic, London; read on October 12, 2026); *Morwen Thistlethwaite*, English Wikipedia, <https://en.wikipedia.org/wiki/Morwen_Thistlethwaite> (knot theory; that page also says he gave recitals in London while studying piano, with no footnote and not in the CV, and this article does not adopt it); for the year and the upper bound of 52 moves, see the history table of Source 1 (July 1981)
13. *Optimal solutions for the Rubik's Cube*, English Wikipedia, <https://en.wikipedia.org/wiki/Optimal_solutions_for_the_Rubik%27s_Cube> (Kociemba compressing the four stages into two: this page gives 1992, while his own page (Source 5) gives 1991 to 1992; for Cube Explorer, see the home page of the site where Source 5 is)
14. *How to solve the Rubik's Cube: Beginner's Method*, ruwix.com, <https://ruwix.com/the-rubiks-cube/how-to-solve-the-rubiks-cube-beginners-method/> (used as a cross-check: the formulas of this article's Steps 3 and 4 (the right trigger, the two middle-layer ones) are the same as in its beginner's method; its last layer takes another route, positioning the edges first, then the corners, and finally twisting the corners with $R'\,D'\,R\,D$; versions v0.18–v0.23 of this article were once written following that route)
15. *Rubik's 3×3 Solve Guide*, rubiks.com (Spin Master), <https://rubiks.com/solve-guide>, and the booklet included in the box, *You Can Do The Rubik's Cube Solution Guide* (V1-EU-M-2020; V2-2020 has the same pages and text) (the division into eight steps in §4, their names, their order, how to hold the cube in each step, and the four last-layer formulas come from here: yellow cross pp. 28–29, yellow face pp. 30–31, positioning the yellow corners pp. 32–35, positioning the yellow edges pp. 36–37; the "trigger" wording and the three cases of Step 3, the white corners, come from STEP 3 of the web version, while that step on pp. 18–21 of the booklet has the white cross facing up and uses another set of formulas with $D$; the letter strings of the formulas were checked letter by letter against the cards printed in the booklet, and for every one of them this article recomputed by program which pieces it moves)
10. Lu Changhai, 《魔方与"上帝之数"》 [The Rubik's Cube and "God's Number"], 《科学画报》 (*Kexue Huabao*), 2008, no. 12 (the basis for the three Chinese renderings 鲁比克 (Rubik), 科先巴 (Kociemba) and 罗基奇 (Rokicki); the Chinese name for Singmaster follows 「大卫·辛马斯特」 in the Chinese Wikipedia article 「魔方」)

**A note**: for the making of the prototype in 1974, all sources are later retellings, and there is no primary document from that year; wherever the text touches on this year, it follows the generally accepted account and does not present it as his own words.
