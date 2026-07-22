# Altura Talent Partners — Brand Guide

This document covers logo usage, color palette, typography and voice for
Altura Talent Partners. It's the reference for anyone producing new
materials — decks, ads, signage, print — so the brand stays consistent
wherever it shows up.

---

## 1. Logo

The mark is two ascending navy peaks forming an abstract "A" — a nod to
*Altura* (Spanish for height/elevation) — with a gold wedge accent at the
crossbar.

**Files (in this folder):**

| File | Use |
|---|---|
| `logo-mark.svg` | Icon only, navy — for light backgrounds, app icons, watermarks |
| `logo-mark-light.svg` | Icon only, white — for dark/photo backgrounds |
| `logo-horizontal.svg` | Icon + wordmark, navy text — primary lockup for light backgrounds |
| `logo-horizontal-dark.svg` | Icon + wordmark, white text — for dark backgrounds |
| `logo-stacked.svg` | Centered icon + wordmark + tagline — social avatars, title slides, the business card front |
| `og-image.svg` / `og-image.png` | 1200×630 social share image |
| `linkedin-banner.svg` / `linkedin-banner.png` | 1584×396 LinkedIn company page banner |
| `business-card-front.svg/png`, `business-card-back.svg/png` | 3.5×2in print-ready business card (300dpi, 1050×600px) |
| `email-signature.html` | HTML email signature template |

**Clear space:** leave a margin around the mark equal to at least the width
of one of its legs. Don't crowd it with text or edges.

**Minimum size:** don't render the icon smaller than 24px, or the
horizontal lockup narrower than 120px wide — the crossbar detail gets lost
below that.

**Don't:**
- Recolor the mark outside the approved palette below
- Stretch or skew the lockup — scale proportionally only
- Place the navy mark on a dark background, or the white mark on a light one
- Add drop shadows, outlines or effects not shown in the source files

**Note on type in the SVGs:** the wordmark text in these files uses a
system sans-serif fallback stack rather than embedded Inter outlines, so
they render correctly on any machine without the font installed. If you're
producing final print files, open in Illustrator/Figma with Inter
installed and convert the text to outlines before sending to a printer.

**LinkedIn banner safe zone:** LinkedIn overlays your company logo (a small
circle) near the bottom-left corner of the banner on most layouts. Preview
the banner in LinkedIn's own upload tool before publishing, and re-crop if
needed.

---

## 2. Color Palette

| Color | Hex | Use |
|---|---|---|
| **Primary — Deep Navy** | `#0F172A` | Headlines, navigation, footer, primary buttons |
| **Secondary — Corporate Blue** | `#1E40AF` | Supporting accents, secondary emphasis |
| **Accent — Action Blue** | `#2563EB` | Links, primary CTAs, focus states |
| **Gold — Brand Accent** | `#B08D57` | Logo accent only. Use sparingly — small caps labels, dividers, premium touches. Never as a large fill. |
| **Gray — Section Background** | `#F8FAFC` | Alternating section backgrounds |
| White | `#FFFFFF` | Base background |
| Ink 700 | `#334155` | Body text |
| Ink 500 | `#64748B` | Muted / secondary text |
| Ink 300 | `#CBD5E1` | Borders on dark backgrounds |
| Ink 200 | `#E2E8F0` | Borders, dividers on light backgrounds |

**Usage rule of thumb:** the site is 90% white/navy/gray. Blue is for
action (links, buttons). Gold is a *finishing accent* — logo, small labels,
dividers — never a dominant color. If a layout feels like it needs more
color, add whitespace instead.

---

## 3. Typography

**Typeface:** [Inter](https://fonts.google.com/specimen/Inter) (variable),
self-hosted via `@fontsource-variable/inter` — no external font requests,
keeps the site fast and works offline.

| Token | Size | Use |
|---|---|---|
| `--fs-5xl` | clamp(2.5rem, 6.5vw, 4rem) | H1 / hero headlines |
| `--fs-4xl` | clamp(2rem, 5vw, 3.25rem) | Large display text |
| `--fs-3xl` | clamp(1.75rem, 4vw, 2.5rem) | H2 / section headings |
| `--fs-2xl` | 1.875rem | H3-level emphasis |
| `--fs-xl` | 1.5rem | Card / block headings |
| `--fs-lg` | 1.25rem | Lede paragraphs |
| `--fs-base` | 1.0625rem | Body text |
| `--fs-sm` | 0.9375rem | Secondary body text |
| `--fs-xs` | 0.8125rem | Labels, eyebrows, captions |
| `--fs-2xs` | 0.75rem | Fine print |

Headings use `font-weight: 600–700` with tight letter-spacing (`-0.02em` to
`-0.03em`). Body copy stays at regular weight with generous line-height
(1.6–1.75) for readability at a consulting-firm pace, not a marketing-blast
pace.

**For print/brand assets without web font access**, use system equivalents
in this order: **Inter → Helvetica Neue → Arial → sans-serif.**

---

## 4. Voice & Tone

Altura writes like an experienced B2B consultant, not a recruiting
template:

- **Direct, not hype-y.** Say what we do in plain terms. Avoid "rockstar,"
  "ninja," "10x," "game-changer."
- **Specific over generic.** "We recruit across North America, LATAM and
  Europe" beats "we have a global reach."
- **Confident, not boastful.** State capability plainly; let the process
  and positioning do the persuading.
- **Business-literate.** Write like someone who understands org design,
  runway and hiring risk — because the reader does too.

---

## 5. Imagery

No stock photography of people shaking hands or staged "office" scenes.
The site relies on:
- Clean typography and whitespace as the primary visual language
- Original geometric/line-based SVG illustrations (see
  `src/components/HeroGraphic.astro` and `Icon.astro`) in navy, blue and
  gold
- A subtle dot-grid texture as the only background pattern, used sparingly

If real photography is added later (team, office), keep it desaturated
toward navy/gray tones so it doesn't clash with the palette.
