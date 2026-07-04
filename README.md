# OIBSIP — Web Development Internship Tasks

Submissions for the OIBSIP (Oasis Infobyte) Web Development internship track. Three static/front-end projects, each self-contained in its own folder — no build tools, no package manager, no backend required unless noted.

```
oibsip/
├── README.md
├── task1-landing-page/
│   ├── index.html              → primary submission (Ledgerline — SaaS landing page)
│   └── contact-sheet-co.html   → alternate concept (film-lab brand landing page)
├── task2-portfolio/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── task3-temperature-converter/
    ├── index.html
    ├── style.css
    └── script.js
```

Every task can be run the same way: open its `index.html` in a browser, or serve the folder locally:

```bash
cd task1-landing-page   # or task2-portfolio / task3-temperature-converter
python3 -m http.server 8000
# visit http://localhost:8000
```

---

## Task 1 — Landing Page

**Files:** `task1-landing-page/index.html` (+ `contact-sheet-co.html` as an alternate concept)
**Stack:** HTML5, CSS3 only — no JavaScript.

A single-page marketing site for **Ledgerline**, a fictional B2B finance-ops SaaS product. Corporate palette (navy / blue / teal), sticky nav, hero with a CSS-only product dashboard mockup, feature grid, stats band, testimonials, CTA banner, and a multi-column footer.

- Sticky navigation with 4 links, sign-in, and a primary CTA
- Hero: headline, subheadline, dual CTAs, supporting visual
- 4 additional content sections (Features, Stats, Testimonials, CTA banner)
- Footer with contact/social/legal placeholder links
- One consistent color system driven by CSS custom properties (`:root`)
- Responsive via CSS Grid/Flexbox — breakpoints at `980px` and `680px`
- Explicit `box-sizing`, padding, and margin throughout — no overlapping elements
- Two type families (Manrope for display, Inter for body) plus a numeric/mono treatment in the stats band

`contact-sheet-co.html` is a second, editorial-style take on the same brief (a mail-in film-developing brand) kept for reference/comparison.

---

## Task 2 — Portfolio Website

**Files:** `task2-portfolio/index.html`, `style.css`, `script.js`
**Stack:** HTML5, CSS3, vanilla JavaScript.

A personal developer portfolio for a fictional full-stack engineer, **Alex Rivera**. Dark theme with a teal/indigo accent, monospace touches for a "developer" identity.

Sections: sticky nav (with mobile hamburger menu) → hero with intro & résumé/CTA links → About (with a CSS "code card" visual) → Skills (grouped chip grid) → Projects (3 case-study cards with tags and links) → Contact (info panel + working front-end form) → footer.

JavaScript handles:
- Toggling the mobile navigation menu (and closing it after a link is tapped)
- A demo contact-form submit handler that prevents the default page reload and shows an inline confirmation message (no backend wired up — swap in a real form endpoint to go live)

Responsive breakpoints at `980px` and `680px`; all interactive elements have visible hover/focus states.

---

## Task 3 — Temperature Converter

**Files:** `task3-temperature-converter/index.html`, `style.css`, `script.js`
**Stack:** HTML5, CSS3, vanilla JavaScript.

A single-card utility app that converts a temperature value between **Celsius, Fahrenheit, and Kelvin** simultaneously and live, as you type.

- One numeric input + a "from unit" dropdown (Celsius / Fahrenheit / Kelvin)
- All three converted values update on every keystroke (`input`/`change` events — no submit button needed)
- The unit you typed in is visually highlighted among the three result cards
- Input validation: empty input clears the results silently; a non-numeric value shows an inline error; a value below absolute zero (−273.15 °C) is rejected with an explanit error message instead of showing a nonsensical result
- Conversion formulas shown at the bottom of the card for reference

Conversion logic (`script.js`) normalizes whatever unit is entered to Celsius first, then derives the other two:

```js
F = C × 9/5 + 32
K = C + 273.15
C = (F − 32) × 5/9
```

---

## Notes for reviewers

- All three tasks are static front-end deliverables; Task 2 and Task 3 use small amounts of vanilla JS for interactivity, Task 1 intentionally uses none.
- No external dependencies beyond Google Fonts (`<link>` tags in each `<head>`) — everything else (icons, mockups, layout) is hand-written HTML/CSS/JS.
- Each task folder is independent and can be zipped/deployed separately (e.g. to GitHub Pages, Netlify, or Vercel) without pulling in the other two.
