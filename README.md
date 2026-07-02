# Nina's ePortfolio

A static ePortfolio website showcasing my learning and growth throughout my course in
**Evaluation, Assessment, and Data-Driven Learning Design**.

## Tabs

- **Home / About Me** — background, education, and teaching philosophy
- **My Learning Journey** — initial & final vision statements, concept map, reflection
- **Course Artifacts** — assessment project, evaluation project, data-driven learning design
- **Resources / Toolbox** — the tools I use
- **Contact** — how to reach me

## Color palette

An accessible teal + lavender scheme (no red/green pairing — safe for deuteranopia & protanopia):

| Role | Hex |
|------|-----|
| Slide background (soft sage white) | `#F0F7F4` |
| Accent / header fills (muted teal) | `#5DCAA5` |
| Secondary accent (soft lavender) | `#EEEDFE` |
| Body text (near black) | `#2C2C2A` |

## Files

| File | Purpose |
|------|---------|
| `index.html` | All page content, organized into tabs |
| `styles.css` | Styling, palette tokens, responsive layout |
| `script.js` | Tab switching, mobile menu, deep-linking |

## Editing content

All the text lives in `index.html`. Search for the section you want (each tab is a
`<section class="tab-panel">`) and replace the placeholder copy. To add images (e.g. your
concept map or photo), create an `images/` folder, drop the file in, and reference it like:

```html
<img src="images/concept-map.png" alt="My concept map" />
```

## Deploying to GitHub Pages

This site is published straight from a branch (no build step needed):

1. Push these files to the branch you want to publish from (e.g. `claude/recreate-deploy-github-pages-19iatr`).
2. Go to **Settings → Pages**.
3. Under *Build and deployment*, set **Source: Deploy from a branch**, pick that branch, folder **/ (root)**.
4. Your site publishes at `https://<username>.github.io/<repo>/`.
