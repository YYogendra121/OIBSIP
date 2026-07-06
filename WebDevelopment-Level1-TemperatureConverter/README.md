<div align="center">

# 🌡️ Thermo — Temperature Converter

### A premium, SaaS-inspired temperature converter with a glassmorphism UI

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![No Frameworks](https://img.shields.io/badge/Frameworks-None-6C63FF?style=for-the-badge)](#)

**No frameworks · No libraries · No build step — just pure HTML, CSS & JS**

</div>

---

## ✨ Overview

**Thermo** converts between **Celsius**, **Fahrenheit**, and **Kelvin** — in any direction — with real-time input validation, a glassmorphism interface, and full light/dark mode support. Everything is hand-built: no Bootstrap, no Tailwind, no React, no jQuery.

---

## 🚀 Features

### 🔧 Core Functionality

| Feature | Description |
|---|---|
| 🔄 Any-direction conversion | Celsius ↔ Fahrenheit ↔ Kelvin |
| 📋 From / To dropdowns | Pick any unit pair |
| ⌨️ Real-time validation | Blocks invalid characters as you type (digits, one `-`, one `.`) |
| ⚠️ Friendly error handling | Clear messages for empty or invalid input |
| 🧊 Absolute zero check | Rejects values below −273.15 °C |
| 🎯 Precision | Results rounded to 2 decimal places |
| ⏳ Convert button | Simulated 500ms loading spinner |
| 🔁 Swap button | Flips From/To units and carries the result into the input |
| ♻️ Reset button | Clears the form back to defaults |

### 🎁 Extras

- 🕒 Live, auto-updating date & time in the header
- 🌗 Light / dark mode toggle
- 📋 Copy result button with checkmark feedback
- 🎬 Smooth fade, pulse & hover animations throughout
- 📱 Fully responsive — desktop, tablet, and mobile
- 🦶 Expanded footer with brand info, social links & auto-updating copyright year

### 🎨 Design

- **Glassmorphism panels** with backdrop blur
- **Animated gradient background blobs** — cold blue → violet → hot coral, echoing the temperature spectrum the tool measures
- **Modern type pairing** — `Sora` (display), `Inter` (body), `JetBrains Mono` (numbers/data)
- **All icons are inline SVG** — no icon library required

---

## 🗂️ Project Structure

```bash
temp-converter/
├── index.html    # Semantic markup & structure
├── style.css     # Design tokens, theming, layout, animations
├── script.js     # Conversion logic, validation, interactivity
└── README.md     # This file
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Structure** | HTML5 (semantic elements, ARIA) |
| **Styling** | CSS3 (custom properties, Flexbox, Grid) |
| **Behavior** | Vanilla JavaScript (ES6+, zero dependencies) |
| **Fonts** | Google Fonts — Sora, Inter, JetBrains Mono |

> No Bootstrap, Tailwind, React, Vue, or jQuery — everything is hand-built.

---

## ⚡ Getting Started

1. **Download** or clone all three files — `index.html`, `style.css`, `script.js` — into the same folder (the HTML references the others by relative path).
2. **Open** `index.html` directly in any modern browser (Chrome, Firefox, Edge, Safari). No server or build step required.
3. **Optional** — run a local server (useful if your browser restricts the Clipboard API on `file://` URLs):

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit **http://localhost:8000** 🎉

---

## 🧮 How Conversion Works

Every conversion routes through **Celsius** as a common base, in `script.js`:

```js
toCelsius(value, fromUnit)
fromCelsius(celsius, toUnit)
```

| From → To | Formula |
|---|---|
| Celsius → Fahrenheit | `(C × 9/5) + 32` |
| Fahrenheit → Celsius | `(F − 32) × 5/9` |
| Celsius → Kelvin | `C + 273.15` |
| Kelvin → Celsius | `K − 273.15` |

---

## 🎨 Customization

| What | Where |
|---|---|
| **Theme colors** | CSS custom properties in `style.css` under `:root`, `[data-theme="dark"]`, `[data-theme="light"]` |
| **Fonts** | Swap the Google Fonts `<link>` in `index.html` and the `--font-*` variables in `style.css` |
| **Author name** | Replace `"Your Name"` in the footer of `index.html` |
| **Persist theme** | Currently session-only (JS variable). Store/read via `localStorage` in the theme toggle handler in `script.js` to persist across reloads |

---

## ♿ Accessibility

- ✅ Semantic landmarks (`header`, `main`, `footer`, `nav`)
- ✅ Labeled form controls and `aria-label`s on icon-only buttons
- ✅ Visible focus states on interactive elements
- ✅ `prefers-reduced-motion` respected — animations disabled on request

---

## 📄 License

Free to use and modify for personal, academic, or internship submission purposes.

<div align="center">

### 🌡️ Built with pure code, no shortcuts.

**Created by Yogendra Singh**

</div>
