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

A modern, responsive landing page built with **HTML** and **CSS** for **Ledgerline**, a fictional B2B Finance Operations SaaS platform.
The project focuses on clean UI design, responsive layouts, semantic HTML, and modern CSS techniques without using JavaScript.

---

**🔗 Live demo:** [yyogendra121.github.io/Portfoliowebsite](https://yyogendra121.github.io/Portfoliowebsite/)
<p align="center">
  <img src="images/Landpage (1).jpg" alt="Ledgerline landing page image" width="850">
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
# ✨ Features

- Responsive Landing Page
- Sticky Navigation Bar
- Hero Section with CSS-only Dashboard Mockup
- Feature Grid
- Statistics Section
- Testimonials
- Call-to-Action Banner
- Multi-column Footer
- Corporate Color Palette (Navy • Blue • Teal)
- CSS Variables (`:root`) for consistent theming
- CSS Grid & Flexbox Layout
- Mobile Responsive Design
- Clean Semantic HTML5
- No JavaScript

---

## 👨‍💻 Task 2 — Portfolio Website

**Files:** `task2-portfolio/index.html`, `style.css`, `script.js`
**Stack:** HTML5, CSS3, vanilla JavaScript

A modern, fully responsive personal developer portfolio designed to showcase my skills, projects, and professional profile. Built with HTML, CSS, and vanilla JavaScript, the website features a sleek dark theme, interactive UI elements, and a mobile-first responsive design to deliver a smooth user experience across all devices.
**🔗 Live demo:** [yyogendra121.github.io/Portfoliowebsite](https://yyogendra121.github.io/Portfoliowebsite/)

<p align="center">
  <img src="images/Portfolio.jpg" alt="Portfolio website image" width="850">
</p>

✨ Highlights
Modern dark-themed UI with a bold accent color palette
Fully responsive design for desktop, tablet, and mobile devices
Sticky navigation with a mobile-friendly hamburger menu
Interactive hero section with a dynamic typing animation
Clean, well-structured sections for About, Services, Skills, Projects, Teams, and Contact
Professional project showcase using case-study style cards
Smooth hover and focus animations for better user experience
JavaScript-powered interactive components without external frameworks
Demo contact form with inline success feedback (frontend only)
Clean, semantic HTML and maintainable CSS architecture

🚀 Key Features
📌 Sticky navigation bar with responsive mobile menu
🎯 Hero section featuring an animated typing effect
👨‍💻 About section introducing the developer
💼 Services section highlighting offered expertise
📂 Project showcase with technology tags and project links
⚡ Skills section displaying technical proficiencies
👥 Teams section presenting collaborators or team members
📬 Contact form with JavaScript-based submission handling
🌙 Elegant dark theme with consistent design system
📱 Responsive layouts using CSS Grid, Flexbox, and media queries (980px & 680px)
🎨 Smooth hover, transition, and focus effects for improved accessibility
⚙️ Built entirely with HTML, CSS, and Vanilla JavaScript (no frameworks)
📈 Optimized structure for performance, readability, and easy future enhancements
- A demo contact-form submit handler that prevents the default page reload and shows an inline confirmation message (no backend wired up — swap in a real form endpoint to go live)

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
