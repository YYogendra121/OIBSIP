# Landing Page — Task 1

A static, responsive landing page built with plain HTML5 and CSS3 (no JavaScript, no build step, no dependencies beyond two Google Fonts).

Two versions are included:

| File | Concept | Style |
|---|---|---|
| `ledgerline.html` | **Ledgerline** — a B2B finance-ops SaaS | Professional / corporate: navy & blue, product dashboard mockup, trust logos, stats band |
| `index.html` | **Contact Sheet Co.** — a mail-in film developing lab | Editorial / brand-driven: darkroom palette, filmstrip motif |

Open either file directly in a browser — there's nothing to install or build.

---

## Quick start

```bash
# just open it
open ledgerline.html          # macOS
start ledgerline.html         # Windows
xdg-open ledgerline.html      # Linux
```

Or serve it locally if you prefer:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/ledgerline.html
```

---

## Structure (`ledgerline.html`)

```
<header class="topbar">      sticky nav — logo, 4 links, sign in, CTA
<section class="hero">       headline, subheadline, CTA pair, CSS product mockup
<div class="logo-strip">     "trusted by" text-based logo row
<section class="features">   6-item feature card grid
<section class="stats">      4-stat dark band
<section class="testimonials"> 3 customer quote cards
<section class="cta-banner"> gradient closing CTA
<footer>                     5-column link footer + legal bar
```

All styling lives in a single `<style>` block at the top of the file — no external CSS files, no CSS-in-JS, no build tooling.

---

## Design tokens

Defined once as CSS custom properties in `:root`, so the whole palette/type system can be re-themed by editing a handful of variables:

```css
--bg / --bg-alt        backgrounds
--navy / --navy-soft    text + dark sections
--blue / --blue-dark    primary action color
--teal                  secondary/positive accent
--border / --border-2   hairlines
--muted                 secondary text
--display: 'Manrope'    headings
--body: 'Inter'         body copy
--radius / --shadow-*   corner radius + elevation scale
```

Fonts are pulled from Google Fonts via `<link>` tags in `<head>`; swap the `href` and the `--display` / `--body` variables to re-skin typography.

---

## Feature checklist (from the brief)

- [x] Sticky nav bar, 4 links (Product / Features / Customers / Pricing) + sign-in + CTA
- [x] Hero: headline, subheadline, CTA button(s), supporting visual
- [x] More than 2 content sections (Features, Stats, Testimonials, CTA banner)
- [x] Footer with contact/social/legal placeholder links
- [x] Consistent color palette applied across every section
- [x] Responsive layout via CSS Grid/Flexbox, breakpoints at `980px` and `680px`
- [x] Explicit `box-sizing: border-box`, padding, and margin — no overlapping elements
- [x] Two type scales (Manrope display / Inter body) plus a mono-style numeric treatment in the stats

---

## Customizing

- **Copy** — all text is inline in the HTML, no CMS or data file to edit.
- **Colors** — edit the `:root` variables at the top of the `<style>` block.
- **Breakpoints** — two `@media` queries near the bottom of the CSS (`980px` tablet, `680px` mobile) control grid collapsing and nav hiding.
- **Icons** — inline SVGs in the feature cards and hero; swap the `<path>`/`<svg>` markup to change them without adding an icon library.
- **Product mockup** — the hero's "dashboard" is pure HTML/CSS (`.mockup`), so bar heights, stat values, and row labels can be edited directly with no image assets involved.

---

## Notes

- No JavaScript is used or required — this is a static deliverable.
- No external assets other than the two Google Fonts requests; everything else (icons, mockup, dividers) is inline SVG/CSS.
- Tested down to ~360px viewport width without horizontal scroll or element overlap.
