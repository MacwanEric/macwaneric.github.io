# Eric Macwan — Researcher Portfolio

A modern, single-page researcher portfolio with smooth transitions and subtle sparkling effects.

## Structure

```
test2/
├── index.html          # Main page (About, Research, Publications, Experience, Contact)
├── css/
│   └── styles.css      # Layout, theme, transitions, sparkle animations
├── js/
│   └── main.js         # Sparkles, scroll-in animations, nav behavior
└── README.md           # This file
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
# Python 3
python3 -m http.server 8080

# Node (npx)
npx serve .
```

Then visit `http://localhost:8080` (or the port shown).

## Customize

- **Content**: Edit `index.html` — replace placeholder text, publication titles, experience, and contact links (email, Google Scholar, LinkedIn, ORCID).
- **Photo**: Add a profile image by giving `.about-image` a `background-image` in `css/styles.css`, or replace the div with an `<img>` and style it.
- **Colors**: Change CSS variables in `:root` in `css/styles.css` (e.g. `--accent`, `--bg-deep`).

## Features

- Dark theme with gold/amber accent
- Floating sparkle effect (CSS + JS)
- Scroll-triggered fade-in for sections and cards
- Sticky header with blur
- Responsive layout and mobile menu
- Smooth scroll and hover transitions
