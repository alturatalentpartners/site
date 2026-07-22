# Altura Talent Partners — Website

The production website for **Altura Talent Partners**, a boutique executive
search and strategic recruiting firm. Built with [Astro](https://astro.build),
hosted **free forever** on GitHub Pages.

---

## Tech stack — and why

**[Astro](https://astro.build)**, static output, zero client-side
JavaScript framework overhead.

Astro was the right call here, not just the default preference:

- **Ships zero JS by default.** Every page is plain HTML/CSS at build time;
  the only JavaScript on the site is a handful of small `<script>` tags for
  the mobile menu, scroll reveal, back-to-top button and the contact form
  — no React/Vue/Svelte runtime shipped to the browser. That's what makes
  a 95+ Lighthouse score realistic without extra tuning.
- **Static output = free hosting.** Astro builds to plain files in `dist/`,
  which is exactly what GitHub Pages serves. No server, no functions, no
  paid tier required.
- **Component-based, but simple.** `.astro` components gave this project
  reusable Navbar/Footer/Cards without needing a heavier framework a
  content-driven marketing site doesn't need.

If this were an app with a lot of client-side interactivity (dashboards,
auth, live data), a framework like Next.js would make more sense — but it
would also push you toward paid hosting (Vercel/Netlify functions) for
anything beyond a purely static export. For a marketing site that's 100%
content, Astro is the leaner, faster, genuinely-free choice.

---

## Project structure

```
altura-talent-partners/
├── .github/workflows/deploy.yml   # GitHub Actions → GitHub Pages deploy
├── brand/                         # Logo files, social banners, business card, brand guide
├── public/                        # Static files copied as-is (favicon, robots.txt, images)
├── src/
│   ├── components/                # Navbar, Footer, cards, forms, icons, etc.
│   ├── data/                      # Site copy as data: services, industries, FAQ, testimonials, careers
│   ├── i18n/                      # ui.js (shared UI strings) + utils.js (locale helpers)
│   ├── layouts/Layout.astro       # Shared <head>, SEO meta, hreflang, nav/footer wrapper
│   ├── pages/                     # English routes (default locale, unprefixed)
│   │   └── es/                    # Spanish routes — thin wrappers around the English page components
│   └── styles/global.css          # Design tokens + base styles
├── astro.config.mjs
└── package.json
```

### Bilingual site (English / Spanish)

The site is fully bilingual — English at `/` and Spanish at `/es/` — using
Astro's built-in i18n routing (`astro.config.mjs`). Each page (e.g.
`src/pages/about.astro`) owns both languages' copy in a `copy = { en: {...},
es: {...} }[lang]` object at the top of the file; the language is detected
via `Astro.currentLocale`. The `src/pages/es/*.astro` files are 3-line
wrappers that import and render the matching English page component — so
there's one source of truth per page, not two files to keep in sync.

To add a new page, follow that same pattern: write the page once with a
bilingual `copy` object, then add a matching `src/pages/es/<name>.astro`
wrapper. Shared chrome (nav labels, footer, buttons) lives in
`src/i18n/ui.js` instead of being repeated per page.

---

## Getting started

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev        # http://localhost:4321
```

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

Type-check the project (Astro + TypeScript diagnostics):

```bash
npx astro check
```

---

## Before you deploy — required configuration

`astro.config.mjs`, `src/data/site.js`, `public/robots.txt` and
`brand/email-signature.html` are already configured for
**github.com/alturatalentpartners/alturaweb**. If you ever rename the repo
or move to a different GitHub account, update the `GITHUB_USERNAME` /
`REPO_NAME` constants at the top of `astro.config.mjs` and mirror the
change in those other 3 files.

If you're deploying to a **custom domain** or a **user/org page** (a repo
literally named `<username>.github.io`) instead of a project page, open
`astro.config.mjs` and set `base: '/'` instead of `/alturaweb`.

### Contact form and career applications (free, no backend)

Both the contact form (`src/components/ContactForm.astro`) and the careers
application form (`src/components/ApplicationForm.astro`, includes a PDF
résumé upload) submit via [Web3Forms](https://web3forms.com) — free
forever, no credit card, no signup wall.

1. Go to [web3forms.com](https://web3forms.com), enter your email, get a
   free Access Key.
2. Paste that same key into **both** `WEB3FORMS_ACCESS_KEY` constants —
   one in `ContactForm.astro`, one in `ApplicationForm.astro` — replacing
   `YOUR_WEB3FORMS_ACCESS_KEY`.

Until you do this, each form shows visitors a friendly message pointing
them to email you directly instead — it won't silently fail. Keep résumé
PDFs under ~5MB; double-check current attachment limits in your Web3Forms
dashboard.

---

## Deploying to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which builds and
deploys the site automatically on every push to `main` — no manual build
step, no `gh-pages` branch, no paid CI minutes for a public repo.

### 1. Create the GitHub repository

Go to [github.com/new](https://github.com/new) and create a new repository
named **`alturaweb`** under the **alturatalentpartners** account. Leave it
empty — no README, no `.gitignore` — since this project already has both.

**Keep it public.** GitHub Pages is free forever for public repositories.
Private repos require a paid GitHub plan to use Pages.

### 2. Push this project

From inside this project folder:

```bash
git remote add origin https://github.com/alturatalentpartners/alturaweb.git
git branch -M main
git push -u origin main
```

(This repo has already been initialized and committed locally — see
[Git status](#git-status) below.)

### 3. Enable GitHub Pages

1. On GitHub, go to your repo → **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**
   (not "Deploy from a branch").
3. That's it — the push in step 2 already triggered the workflow. Check
   the **Actions** tab to watch it build and deploy.
4. Once it finishes, your site is live at:
   `https://alturatalentpartners.github.io/alturaweb/`

Every future `git push` to `main` redeploys automatically.

---

## Git status

This project has already been initialized as a git repository with an
initial commit. You only need to add your remote and push (step 2 above).

---

## Brand assets

See [`brand/brand-guide.md`](brand/brand-guide.md) for the full logo usage
guide, color palette, typography system and voice guidelines, plus
ready-to-use files:

- SVG logo (mark, horizontal, stacked, light/dark variants)
- Favicon
- Social share image (1200×630) and LinkedIn banner (1584×396)
- Business card front/back (print-ready, 300dpi)
- HTML email signature template

---

## SEO

Already wired up:

- Per-page meta titles/descriptions, canonical URLs, Open Graph + Twitter
  Card tags
- `hreflang` alternate tags (English/Spanish) on every page, plus
  language-aware entries in the sitemap
- `schema.org` JSON-LD (Organization, WebSite, ItemList, AboutPage,
  ContactPage)
- Auto-generated `sitemap-index.xml` via `@astrojs/sitemap`
- `robots.txt`
- Semantic HTML throughout (`<header>`, `<nav>`, `<main>`, `<article>`,
  proper heading hierarchy)

---

## Performance

The production build (`npm run build`) outputs 17 pages (8 English + 8
Spanish + a single shared `404.html`) — self-hosted variable font (woff2,
subset by script), a handful of small hand-written SVG icons, and no
client-side framework. That footprint is what makes a 95+ Lighthouse score
achievable without additional tuning; verify it yourself in Chrome DevTools
→ Lighthouse against the deployed URL or `npm run preview`.

---

## License

All content, copy and the Altura Talent Partners name/mark are proprietary
to Altura Talent Partners. Code structure may be reused as a starting
point for other projects.
