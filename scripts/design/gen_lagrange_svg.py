# Generates src/assets/lagrange-hero.svg — the hero "star" (spec §6.7 star layer).
#
# Restricted three-body problem, rotating frame, dimensionless units:
#   Omega(x, y) = (x^2 + y^2)/2 + (1 - mu)/r1 + mu/r2
# Primaries at (-mu, 0) and (1 - mu, 0). Contours at Jacobi levels bracketing
# C(L1), C(L2), C(L3) produce the characteristic neck/horseshoe topology.
# L4/L5 sit at the equilateral points. Provenance: Yeqiu's E10 essay on Euler's
# collinear points (the earned referent — Gauss report §0/§6.7).
#
# Design rules baked in (Gauss §6.7): sparse bright lines (not dim carpet),
# color keying — sun gold / planet blue / L-points gold; manual <tspan>
# subscripts (Unicode subscripts caused tofu in the live E10 figure).
#
# Run: uv run --with numpy --with matplotlib python scripts/design/gen_lagrange_svg.py
import sys
import numpy as np

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

MU = 0.15
W, H = 860, 660
XLIM, YLIM = (-1.85, 1.85), (-1.42, 1.42)

def omega(x, y):
    r1 = np.hypot(x + MU, y)
    r2 = np.hypot(x - (1 - MU), y)
    return (x**2 + y**2) / 2 + (1 - MU) / r1 + MU / r2

def omega_x(x):  # d(Omega)/dx on the x-axis (y=0), for collinear L-points
    r1 = x + MU
    r2 = x - (1 - MU)
    return x - (1 - MU) * np.sign(r1) / r1**2 - MU * np.sign(r2) / r2**2

def bisect(f, a, b, n=200):
    fa = f(a)
    for _ in range(n):
        m = (a + b) / 2
        fm = f(m)
        if fa * fm <= 0:
            b = m
        else:
            a, fa = m, fm
    return (a + b) / 2

# collinear points: L1 between primaries, L2 right of planet, L3 left of sun
L1 = bisect(omega_x, -MU + 1e-6 + 0.01, (1 - MU) - 1e-6 - 0.01)
L2 = bisect(omega_x, (1 - MU) + 0.01, 2.0)
L3 = bisect(omega_x, -1.8, -MU - 0.01)
L4 = (0.5 - MU, np.sqrt(3) / 2)
L5 = (0.5 - MU, -np.sqrt(3) / 2)

C1, C2, C3 = (2 * omega(np.array(x), np.array(0.0)) for x in (L1, L2, L3))
print(f"L1={L1:.4f} L2={L2:.4f} L3={L3:.4f}  C1={C1:.4f} C2={C2:.4f} C3={C3:.4f}")

x = np.linspace(*XLIM, 900)
y = np.linspace(*YLIM, 700)
X, Y = np.meshgrid(x, y)
C = 2 * omega(X, Y)

# sparse level set: the three critical curves + one inside + one outside
levels = sorted({round(v, 4) for v in [C1, C2, C3, C1 + 0.28, C3 - 0.02 if C3 - 0.02 > 3.0 else C3 * 0.999, C2 - 0.035]})
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

cs = plt.contour(X, Y, C, levels=levels)

def to_px(px, py):
    sx = (px - XLIM[0]) / (XLIM[1] - XLIM[0]) * W
    sy = H - (py - YLIM[0]) / (YLIM[1] - YLIM[0]) * H
    return sx, sy

paths = []
for lvl_idx, segs in enumerate(cs.allsegs):
    for seg in segs:
        if len(seg) < 24:
            continue
        pts = seg[::4]  # decimate
        d = "M" + "L".join(f"{to_px(p[0], p[1])[0]:.1f} {to_px(p[0], p[1])[1]:.1f}" for p in pts)
        paths.append((lvl_idx, d))
print(f"levels={len(levels)} paths={len(paths)}")

sun_px = to_px(-MU, 0)
planet_px = to_px(1 - MU, 0)
lpts = [("1", *to_px(L1, 0)), ("2", *to_px(L2, 0)), ("3", *to_px(L3, 0)),
        ("4", *to_px(*L4)), ("5", *to_px(*L5))]

svg = []
svg.append(f'<svg viewBox="0 0 {W} {H}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" '
           f'aria-label="Effective-potential contours of the restricted three-body problem with Lagrange points L1 to L5">')
svg.append('<g class="contours" stroke="#5996c8" stroke-width="1.3" opacity="0.92">')
for i, (lvl, d) in enumerate(paths):
    svg.append(f'<path d="{d}" pathLength="1" style="--i:{i}"/>')
svg.append("</g>")
# primaries
svg.append(f'<circle class="sun" cx="{sun_px[0]:.1f}" cy="{sun_px[1]:.1f}" r="10" fill="#dda25b"/>')
svg.append(f'<circle class="planet" cx="{planet_px[0]:.1f}" cy="{planet_px[1]:.1f}" r="5" fill="#7db3e0"/>')
# L-points: gold markers + serif labels with manual tspan subscripts (no Unicode-subscript tofu)
svg.append('<g class="lpoints" font-family="Georgia, \'Times New Roman\', serif" font-style="italic" font-size="19" fill="#dda25b">')
off = {"1": (8, -10), "2": (10, -10), "3": (-30, -10), "4": (10, -8), "5": (10, 16)}
for n, px_, py_ in lpts:
    dx, dy = off[n]
    svg.append(f'<circle cx="{px_:.1f}" cy="{py_:.1f}" r="3.2" fill="#dda25b"/>')
    svg.append(f'<text x="{px_ + dx:.1f}" y="{py_ + dy:.1f}">L<tspan font-size="13" dy="4">{n}</tspan></text>')
svg.append("</g></svg>")

out = "src/assets/lagrange-hero.svg"
import pathlib
pathlib.Path("src/assets").mkdir(exist_ok=True)
pathlib.Path(out).write_text("\n".join(svg), encoding="utf-8")
print(f"wrote {out} ({pathlib.Path(out).stat().st_size // 1024} KB)")
