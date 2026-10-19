# Testing and verification

Last run: 2026-10-19, against the production build (`npm run build && npm run preview`).

## Automated
| Check | Command | Result |
|---|---|---|
| Type check (Astro + TS) | `astro check`, part of `npm run build` | 0 errors, 0 warnings |
| Production build | `npm run build` | 9 pages built, plus sitemap and robots.txt |
| Internal links and resume file | `node scripts/check-links.mjs`, part of `npm run build` | no broken internal links, `resume.pdf` present |
| Content schema | Zod schema in `src/content.config.ts`, applied at build | all 5 projects valid |
| Accessibility | axe-core 4.10 (WCAG 2.0/2.1/2.2 A+AA and best practice) on all 9 routes, light and dark | see notes below |

## Accessibility notes
- **Landmark nesting:** axe flagged `landmark-complementary-is-top-level` on `/` because the hero ID tag was an `<aside>` inside a section. It's now a `<div>`, which fixes this.
- **Button contrast (false positive):** axe flagged `color-contrast` once on the primary button in light mode. The audit swapped the theme mid-transition, which caused it. The computed colors are #FFFDF9 on #8A5527, which is 6.06:1 and passes AA.
- **Contrast of all pairings:** computed by hand. The tightest is muted text on kraft-soft at 4.84:1 (light) and 5.54:1 (dark). Full table in DESIGN.md.

## Manual (Playwright)
- **Routes:**
  - `/`, `/projects`, all 5 `/projects/<slug>` pages and `/about` render.
  - An unknown URL returns HTTP 404 with the custom page, and the page shows the requested path.
- **Viewports:** at 375, 768 and 1280px there is no horizontal overflow (`scrollWidth === clientWidth`). Diagrams scroll sideways inside their own frame on small screens, as intended.
- **Resume:**
  - The nav, hero, about and footer links all have `download="Hady-Gustianto-Resume.pdf"`.
  - If `public/resume.pdf` is removed, the links disappear rather than break.
- **Theme:**
  - The site follows the OS setting by default.
  - The toggle sets `data-theme` and `aria-pressed`, and the choice survives navigating to another page and reloading.
- **Keyboard:**
  - The first Tab press reveals "Skip to content".
  - Focus outlines are visible on links, buttons and the toggle (2px accent outline).
  - The current page is marked with `aria-current="page"`.
- **Console:** no errors, other than the expected 404 status on the not-found route.
- **Design detector** (impeccable `detect.mjs`): no findings.

## Re-running
```bash
npm run build      # check + build + link check
npm run preview    # then open http://localhost:4321 and spot-check light/dark and mobile
```
