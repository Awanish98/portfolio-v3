# Awanish Kumar (Jordan) — Portfolio Website

A single-page, fully animated portfolio built from the references in this folder and the project inventory you supplied.

## What's inside

- **Hero** — cinematic intro using `hero.jpg`, animated starfield canvas, glowing orbs, animated counters and a live ticker.
- **Final Builds** — 3 highlighted, shipped projects (Aura Music, LDM Paramedical College, Jordan Portfolio) with live embedded previews and direct links.
- **Business Website Showcase** — 10 live business websites with embedded previews, category filters, click-to-expand modal and **Visit** links.
- **Complete Inventory** — all 52 project entries in a timeline grouped by category (A–E), with status badges and links where a real URL was supplied.
- **In the Lab** — the 14 planned / in-progress agents and systems, shown honestly as unfinished work.
- **About & Contact** — skills, experience, education, certifications and a mailto-based contact form.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure |
| `styles.css` | Design system, layout, animation and responsive rules |
| `script.js` | All project data, rendering and interactions |
| `pic.jpg` | Your portrait — used in the hero, nav, About card and contact badge |
| `hero.jpg` | Hero background (from the workspace) |
| `10years.pixelmatters.com.zip`, `Les vraies rencontres - …html` | Original reference files, left untouched |

## Run it

Just open `index.html` in a browser. For local development with live previews at full size:

```bash
python -m http.server 8080
# then open http://127.0.0.1:8080/index.html
```

## Deploy

It is a static site — upload these files to GitHub Pages, Netlify or any static host. No build step, no dependencies.

## Notes

- No repository URL was invented. Projects without a supplied URL link to the GitHub profile or show "repo link pending".
- Aura Music's Render deployment blocks iframe embedding, so its preview uses the supplied GitHub Pages build; the "Live site" button still opens the Render deployment.
- Animations respect `prefers-reduced-motion`.
- Premium motion layer: portrait mouse/scroll parallax, rotating orbit rings, animated portrait shine/scan, shimmer title, magnetic buttons, 3D card tilt, scroll-linked timeline fill and a floating progress/back-to-top button.
