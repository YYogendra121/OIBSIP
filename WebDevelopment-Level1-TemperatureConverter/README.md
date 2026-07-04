# 🌡️ Thermo — Temperature Converter

A premium, SaaS-inspired temperature converter built with **pure HTML5, CSS3, and Vanilla JavaScript** — no frameworks, no libraries, no build step.

Convert between **Celsius**, **Fahrenheit**, and **Kelvin** with real-time validation, a glassmorphism UI, and light/dark modes.

---

## ✨ Features

### Core
- Convert between Celsius ↔ Fahrenheit ↔ Kelvin (any direction)
- **From** / **To** unit dropdowns
- Numeric input field with **real-time validation**
  - Blocks invalid characters as you type (only digits, one `-`, one `.`)
  - Friendly error messages for empty or invalid input
  - Bonus check: rejects values below absolute zero (−273.15 °C)
- Results rounded to **2 decimal places**
- **Convert** button with a simulated 500ms loading spinner
- **Swap** button — flips From/To units (and carries the result into the input)
- **Reset** button — clears the form back to defaults

### Extras
- Live, auto-updating **date & time** in the header
- **Light / dark mode** toggle
- **Copy result** button with checkmark feedback
- Smooth fade, pulse, and hover animations throughout
- Fully responsive: desktop, tablet, and mobile layouts
- Expanded footer with brand info, social links, and an auto-updating copyright year

### Design
- Glassmorphism panels with backdrop blur
- Animated gradient background blobs — the accent gradient runs
  **cold blue → violet → hot coral**, echoing the temperature spectrum the tool measures
- Modern type pairing: **Sora** (display), **Inter** (body), **JetBrains Mono** (numbers/data)
- All icons are **inline SVG** — no icon library

---

## 🗂️ Project Structure

```
temp-converter/
├── index.html    # Semantic markup & structure
├── style.css     # Design tokens, theming, layout, animations
├── script.js     # Conversion logic, validation, interactivity
└── README.md     # This file
```

---

## 🛠️ Tech Stack

| Layer      | Technology                          |
|------------|--------------------------------------|
| Structure  | HTML5 (semantic elements, ARIA)      |
| Styling    | CSS3 (custom properties, Flexbox, Grid) |
| Behavior   | Vanilla JavaScript (ES6+, no dependencies) |
| Fonts      | Google Fonts (Sora, Inter, JetBrains Mono) |

No Bootstrap, Tailwind, React, Vue, or jQuery — everything is hand-built.

---

## 🚀 Getting Started

1. Download or clone all three files (`index.html`, `style.css`, `script.js`) into the **same folder** — the HTML references the other two by relative path.
2. Open `index.html` directly in any modern browser (Chrome, Firefox, Edge, Safari). No server or build step required.

Optional — run a local server (useful if your browser restricts the Clipboard API on `file://` URLs):

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

---

## 🧮 How Conversion Works

Every conversion routes through Celsius as a common base, in `script.js`:

```js
toCelsius(value, fromUnit)      
fromCelsius(celsius, toUnit)   
```

| From → To         | Formula                          |
|-------------------|-----------------------------------|
| Celsius → Fahrenheit | `(C × 9/5) + 32`               |
| Fahrenheit → Celsius | `(F − 32) × 5/9`               |
| Celsius → Kelvin     | `C + 273.15`                   |
| Kelvin → Celsius     | `K − 273.15`                   |

---

## 🎨 Customization

- **Theme colors**: edit the CSS custom properties in `style.css` under `:root`, `[data-theme="dark"]`, and `[data-theme="light"]`.
- **Fonts**: swap the Google Fonts `<link>` in `index.html` and the `--font-*` variables in `style.css`.
- **Author name**: replace `"Your Name"` in the footer of `index.html`.
- **Persisting theme across visits**: the theme toggle currently keeps its state in a JS variable for the session only. To persist it across page reloads when hosting on your own server, store/read the value with `localStorage` in the theme toggle handler in `script.js`.

---

## ♿ Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `nav`)
- Labeled form controls and `aria-label`s on icon-only buttons
- Visible focus states on interactive elements
- `prefers-reduced-motion` respected — animations are disabled for users who request it

---

## 📄 License

Free to use and modify for personal, academic, or internship submission purposes.

---

**Created by YOGENDRA SINGH**