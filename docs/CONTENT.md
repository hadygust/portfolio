# Updating content

Content is kept separate from the design. You change the files below and don't touch the components.

| What | Where |
|---|---|
| Name, email, phone, social links, nav | `src/data/site.ts` |
| Summary, experience, education, skills, publications, awards | `src/data/profile.ts` |
| Projects (work case studies and side projects) | `src/content/projects/*.mdx` |
| Resume PDF | `public/resume.pdf` |
| Headshot | `src/assets/profile.jpg` |
| Diagrams | `src/assets/diagrams/*.svg` |
| Homepage section order | `src/pages/index.astro` |

## Add a project
Create `src/content/projects/<slug>.mdx`. The slug becomes the URL, `/projects/<slug>`.

```mdx
---
title: My project            # required
summary: One sentence.       # required, shown on cards and as the page description
kind: side                   # required: work (large case-study slip) or side (compact row)
order: 4                     # required: sort order within its kind
stack: [Go, Redis]           # required
role: Senior IT Developer    # optional
org: Company name            # optional
period: Jan 2027 – Present   # optional
highlights:                  # optional, shown on work slips (2–4 short wins)
  - Built X that does Y.
links:                       # optional
  - label: Source on GitHub
    href: https://github.com/...
---

## Overview
Markdown body…
```

Frontmatter is validated by `src/content.config.ts`. A missing required field or a malformed URL fails the build with a clear message. Optional fields can be left out.

To add a diagram, import the SVG and wrap it in `<Figure>`. Copy the pattern from `matahari-commerce-integration.mdx`. Diagrams use the theme's CSS variables, so they work in light and dark mode.

## Replace the resume
Overwrite `public/resume.pdf` with the new file and keep the same name. Visitors download it as `Hady-Gustianto-Resume.pdf`; you can change that name in `src/data/site.ts`. If the file is ever missing, all resume buttons hide themselves instead of breaking.

## Change the homepage
`src/pages/index.astro` lists the sections in order. Reorder or delete lines to change the page.
