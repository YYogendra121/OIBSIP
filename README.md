# 🌐 OIBSIP — Web Development Internship (5 july - 15 Aug 2026)

<p align="center">
  <img src="https://img.shields.io/badge/Internship-Oasis%20Infobyte-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>
  Three self-contained front-end projects built for the <b>OIBSIP (Oasis Infobyte)</b> Web Development internship track — no build tools, no package manager, no backend required.
</p>
Portfolio website- 🔗 Live demo:(https://yyogendra121.github.io/Portfoliowebsite/)
Temperature Conveter- 🔗 Live demo:(https://yyogendra121.github.io/Portfoliowebsite/)

---

## 📁 Project Structure

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

### ▶️ Running any task

Every task can be run the same way — just open its `index.html` in a browser, or serve the folder locally:

```bash
cd task1-landing-page   # or task2-portfolio / task3-temperature-converter
python3 -m http.server 8000
# visit http://localhost:8000
```

---

## 🧾 Task 1 — Landing Page

**Files:** `task1-landing-page/index.html` (+ `contact-sheet-co.html` as an alternate concept)
**Stack:** HTML5, CSS3 only — no JavaScript

A single-page marketing site for **Ledgerline**, a fictional B2B finance-ops SaaS product. Corporate palette (navy / blue / teal), sticky nav, hero with a CSS-only product dashboard mockup, feature grid, stats band, testimonials, CTA banner, and a multi-column footer.

**🔗 Live demo:** [yyogendra121.github.io/Portfoliowebsite](https://yyogendra121.github.io/Portfoliowebsite/)
<p align="center">
  <img src="images/Landpage.jpg" alt="Ledgerline landing page image" width="850">
</p>

**Highlights**
- Sticky navigation with 4 links, sign-in, and a primary CTA
- Hero: headline, subheadline, dual CTAs, supporting visual
- 4 additional content sections (Features, Stats, Testimonials, CTA banner)
- Footer with contact/social/legal placeholder links
- One consistent color system driven by CSS custom properties (`:root`)
- Responsive via CSS Grid/Flexbox — breakpoints at `980px` and `680px`
- Explicit `box-sizing`, padding, and margin throughout — no overlapping elements
- Two type families (Manrope for display, Inter for body) plus a numeric/mono treatment in the stats band

> `contact-sheet-co.html` is a second, editorial-style take on the same brief (a mail-in film-developing brand) kept for reference/comparison.

---

## 👨‍💻 Task 2 — Portfolio Website

**Files:** `task2-portfolio/index.html`, `style.css`, `script.js`
**Stack:** HTML5, CSS3, vanilla JavaScript

A personal developer portfolio with a dark theme and bold accent palette, built to introduce the developer, their skills, and their project work.

**🔗 Live demo:** [yyogendra121.github.io/Portfoliowebsite](https://yyogendra121.github.io/Portfoliowebsite/)

<p align="center">
  <img src="images/Portfolio.jpg" alt="Portfolio website image" width="850">
</p>

**Sections**
Sticky nav (with mobile hamburger menu) → Hero with intro & CTA links → About → Services → Projects (case-study cards with tags and links) → Skills → Teams → Contact → footer.

**JavaScript handles**
- Toggling the mobile navigation menu (and closing it after a link is tapped)
- A typing/rotating-role effect in the hero
- A demo contact-form submit handler that prevents the default page reload and shows an inline confirmation message (no backend wired up — swap in a real form endpoint to go live)

Responsive breakpoints at `980px` and `680px`; all interactive elements have visible hover/focus states.

---

## 🌡️ Task 3 — Temperature Converter

**Files:** `task3-temperature-converter/index.html`, `style.css`, `script.js`
**Stack:** HTML5, CSS3, vanilla JavaScript

A single-card utility app — **Thermo** — that converts a temperature value between **Celsius, Fahrenheit, and Kelvin**, live, as you type.

**🔗 Live demo:** [yyogendra121.github.io/Portfoliowebsite](https://yyogendra121.github.io/Portfoliowebsite/)
<p align="center">
  <img src="images/Temperature.jpg" alt="Temperature converter images" width="850">
</p>

**Highlights**
- One numeric input + a "from unit" dropdown (Celsius / Fahrenheit / Kelvin)
- All three converted values update on every keystroke (`input`/`change` events — no submit button needed)
- The unit you typed in is visually highlighted among the three result cards
- Input validation:
  - Empty input clears the results silently
  - A non-numeric value shows an inline error
  - A value below absolute zero (−273.15 °C) is rejected with an explanatory error message
- Conversion formulas shown at the bottom of the card for reference

Conversion logic (`script.js`) normalizes whatever unit is entered to Celsius first, then derives the other two:

```js
F = C × 9/5 + 32
K = C + 273.15
C = (F − 32) × 5/9
```

---

## 🛠️ Tech Stack

| Task | HTML | CSS | JavaScript |
|------|:----:|:---:|:----------:|
| 1 — Landing Page | ✅ | ✅ | — |
| 2 — Portfolio | ✅ | ✅ | ✅ |
| 3 — Temperature Converter | ✅ | ✅ | ✅ |

---

## 📝 Notes for Reviewers

- All three tasks are static front-end deliverables; Task 2 and Task 3 use small amounts of vanilla JS for interactivity, Task 1 intentionally uses none.
- No external dependencies beyond Google Fonts (`<link>` tags in each `<head>`) — everything else (icons, mockups, layout) is hand-written HTML/CSS/JS.
- Each task folder is independent and can be zipped/deployed separately (e.g. to GitHub Pages, Netlify, or Vercel) without pulling in the other two.

---
<p align="center">
  Made with ❤️ during the <b>Oasis Infobyte Web Development Internship</b>
</p>
