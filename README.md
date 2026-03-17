# macwaneric.github.io — Eric Macwan

Your GitHub Pages portfolio site: modern, cinematic, and built as simple static files (no build step).

## Pages

- **`index.html`**: Research portfolio (Overview, Focus, Selected work, Publications, Writing, Contact)
- **`about.html`**: “Everything about me” page (Media + Now updates)

## Structure

```
macwaneric.github.io/
├── index.html
├── about.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── .gitkeep
└── README.md
```

## Run locally

Open `index.html` directly, or serve the folder:

```bash
cd "/Users/emacwan/Documents/projects/macwaneric.github.io"
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy (GitHub Pages)

This repo name matches the required format for a user site: `macwaneric.github.io`.

- Push to GitHub on the `main` branch
- GitHub → **Repo Settings** → **Pages**
  - Source: **Deploy from a branch**
  - Branch: **main** / **root**

Your site will be available at `https://macwaneric.github.io`.

## Customize content

- **Homepage sections**: edit `index.html`
  - Update **Selected work**, **Publications**, and **Writing** links (`href="#"`) to real URLs (PDF/DOI/code/articles).
  - Update contact email (`eric@example.com`) and your social links.
- **About page**: edit `about.html`
  - Add photos/videos in **Media**
  - Keep **Now** short and updated (this makes the site feel alive)

## Add photos and videos

- Put files in **`assets/`**, then reference them in HTML.

### Photo example

```html
<img class="inline-media" src="assets/my-photo.jpg" alt="Eric at a conference">
```

### Video example (local MP4)

```html
<video class="inline-media" controls playsinline src="assets/talk-demo.mp4"></video>
```

### Video example (YouTube embed)

```html
<iframe
  class="inline-media"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Talk"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
```

## Features

- **Light/Dark mode** (saved in `localStorage`, falls back to system preference)
- Cursor-following **spotlight**
- Canvas **particle constellation**
- Smooth scroll reveal transitions
- Responsive layout and mobile navigation
