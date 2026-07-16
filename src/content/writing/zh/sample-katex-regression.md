---
title: "渲染回归样张（fixture，勿删）"
date: 2026-07-16
lang: zh
tags:
  - fixture
draft: true
ghostSlug: sample-katex-regression
---

本页是 Post 布局的永久回归样张（`draft: true`，不进索引/正式站）。每个区块对应一条 parity gate 风险。

## 一、KaTeX：花括号重度公式（Escher 陷阱 #1）

行内公式：当 $n > 2$ 且 $\zeta_{17} = e^{2\pi i/17}$ 时成立。

Display 带 pmatrix（MDX 会炸、.md 必须安然无恙）：

$$
\begin{pmatrix} a & b \\ c & d \end{pmatrix}
\begin{pmatrix} x \\ y \end{pmatrix}
=
\begin{pmatrix} ax + by \\ cx + dy \end{pmatrix}
$$

长公式必须在自己的框里横向滚动，不许撑破页面：

$$
|M| = 2^{46} \cdot 3^{20} \cdot 5^{9} \cdot 7^{6} \cdot 11^{2} \cdot 13^{3} \cdot 17 \cdot 19 \cdot 23 \cdot 29 \cdot 31 \cdot 41 \cdot 47 \cdot 59 \cdot 71 = 808017424794512875886459904961710757005754368000000000
$$

## 二、动图（GIF passthrough，不过 Image 管线）

![共线拉格朗日点](/content/images/2026/05/gif2_collinear_lpoints.gif)

*图：欧拉的共线拉格朗日点 —— 该 GIF 有 283 帧，必须在动*

## 三、嵌入（YouTube iframe 原样保留）

<iframe width="200" height="113" src="https://www.youtube.com/embed/TewR3xBIRcA?feature=oembed" allowfullscreen title="对称与怪兽（六）"></iframe>

## 四、站内链接与表格

站内链接样例：[回到本页](/zh/writing/sample-katex-regression/)。

<table><thead><tr><th>元素</th><th>gate</th></tr></thead><tbody><tr><td>公式</td><td>1</td></tr><tr><td>动图</td><td>3</td></tr></tbody></table>

## 五、图片点击放大（medium-zoom）

![单位根静态图](/content/images/2026/05/fig_s1_1_roots_zeta.png)

*点击图片应放大（lightbox）*
