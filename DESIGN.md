# Design system: Kraft & Ink

The visual world comes from retail logistics labels: SKU tags, packing slips and shipping labels. That is the physical form of the product, stock and fulfillment data Hady's systems move. The labels are minimal by nature: warm paper, dark ink, and information arranged in labeled fields.

## Principles
1. **Label grammar only where data lives.** Field grids, tags and slips are for structured facts: role, company, period and stack. Prose, navigation and page chrome stay plain.
2. **Work outranks side projects.** Each work case study is a full packing slip. Side projects are plain list rows, never slips.
3. **Every label part does a job.** No decorative codes or fake data. The tear-off stub holds real contact links. The 404 "not delivered" stamp is the only playful detail.
4. **Warm and soft.** No blue and no cold greys. Ink is warm charcoal, not black.

## Color
Tokens are CSS variables in `src/styles/global.css`.
- **Light:** paper on a warm ground.
- **Dark:** a warm brown-black, "warehouse at night".
- **Theme switching:** with no `data-theme` the site follows the OS; `data-theme` holds the manual choice.

| Token | Light | Dark | Role |
|---|---|---|---|
| `--bg` | #F6F4F0 | #1C1916 | page ground |
| `--surface` | #FFFDF9 | #252119 | label stock (tags, slips) |
| `--text` | #2B2622 | #EEE7DC | ink |
| `--muted` | #6B6158 | #A99D8F | secondary text, field labels |
| `--line` | #E3DCD1 | #3A332B | borders, rules, perforation |
| `--kraft` | #D9C4A3 | #7D6547 | kraft marks (tag hole, stamps) |
| `--kraft-soft` | #EFE5D5 | #2E271F | slip header band |
| `--accent` | #8A5527 | #DDB37C | links, primary button, focus |
| `--on-accent` | #FFFDF9 | #1C1916 | text on accent |

Every text pairing is AA or better. The tightest are muted on kraft-soft (4.84:1 light, 5.54:1 dark) and muted on bg (5.50:1 light).

## Type
- **Archivo Variable** is the only family. It has weight 100–900 and width 62–125%.
- **Body:** normal width, weight 400. Measure is at most 40rem.
- **Headings and field labels:** condensed with `font-stretch: 78%` (the `.font-condensed` utility).
  - Headings use weight 650.
  - Field labels are uppercase only inside label components (tag, slip, stamp), at 0.6875rem with letter-spacing 0.08em.
- **No monospace.** Tech stacks are set in condensed Archivo.
- **Scale:** display `clamp(2.5rem, 6vw, 4.25rem)` / title `clamp(2rem, 5vw, 3rem)` / 2xl / xl / lg / base / sm.

## Components
- **Tag** (hero ID card): stock with a 1px line border, radius 12px and a soft offset shadow. It has a kraft punched-hole circle at the top right, the headshot at badge size (88px) mounted on a kraft-soft backing, and a field grid. A dashed perforation separates a tear-off stub of three contact links (Email, GitHub, LinkedIn), divided by dashed rules.
- **Slip** (work case study):
  - The stock has a kraft-soft header band reading "Professional work", with the period aligned right.
  - Under the band: the title as a condensed heading, a summary, then a field grid of Role / Company / Period / Stack separated by 1px line rules.
  - Highlights follow as ruled line items, like the rows on a packing slip.
  - At the bottom, a full-width tear-off stub with a dashed rule holds "Read the case study" and an arrow.
- **Row** (side project): plain. Title, summary and condensed stack, with no border. On hover the background turns surface-colored.
- **Buttons:** radius 8px and minimum height 44px.
  - Primary: accent fill.
  - Secondary: 1px line border.
  - Resume: always a download (`download="Hady-Gustianto-Resume.pdf"`) with a down-arrow icon.
- **Section:** on desktop, the heading sits in a 13rem left column with content on the right. Wide sections such as Work stack the heading above.

- **Header:** sticky to the top on a solid `--bg` ground. A 1px line divider appears once the page has scrolled.
  - On the homepage the nav name starts hidden, because the hero shows it large. It fades and slides in (300ms ease-out) once the hero heading scrolls under the header.
  - On other pages the nav name is always visible.
  - Below the `sm` breakpoint, the nav Resume button is hidden; the hero, About page and footer still offer the download.

## Motion
- **Entrance reveal:** content blocks fade up 1rem over 600ms the first time they enter view. Siblings are staggered by 70ms (capped at 6 steps). Mark an element with `data-reveal` and optionally `style="--i: n"`. The reveal is skipped entirely with reduced motion or without JS, so content is never hidden.
  - Animates: hero lines, buttons and ID tag (on load), section headings, each work slip as one unit, side-project rows, timeline roles, About and Contact blocks, page intros, the case-study header, and About page list items.
  - Stays still: header and footer, case-study prose and prev/next nav, anything inside a slip or tag (fields, stack, buttons, links), and the 404 stamp.
- **Other transitions:** color changes on hover and the nav-name reveal. Reduced motion is respected globally.

## Don'ts
- No uppercase or letter-spaced labels outside label components.
- No monospace costume.
- No cards for side projects.
- The headshot is never larger than badge scale.
