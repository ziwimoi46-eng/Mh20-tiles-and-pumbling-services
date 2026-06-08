# MH20 Tiles & Plumbing Services

Pure static website for MH20 Tiles & Plumbing Services — Chhatrapati Sambhajinagar.

## Structure

```
/
├── index.html          ← Full single-page website
├── css/style.css       ← All styles
├── js/main.js          ← Menu toggle, FAQ accordion, WhatsApp form
├── images/             ← Bathroom renovation photos (bathroom1–10.jpg)
├── vercel.json         ← Vercel static deployment config
└── .gitignore
```

## Run locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Or with Node:
```bash
npx serve .
```

## Deploy to Vercel

1. Push to GitHub
2. Import repository in Vercel
3. **No build command, no output directory** — Vercel reads `vercel.json` and serves the root as-is

## WhatsApp booking

Phone: `919820636495` (with country code prefix)  
Form data is encoded as a pre-filled WhatsApp message to `wa.me/919820636495`

## Business address

Shop No 4, Beed Bypass Rd, Opposite PNG Jewellery,  
Satara Deolai Parisar, Chhatrapati Sambhajinagar, Maharashtra 431001

## User preferences

- Pure HTML/CSS/JS only — no build tools, no frameworks, no TypeScript
- Deployable directly on Vercel/Netlify/GitHub Pages with zero build step
