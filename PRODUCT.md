# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Two readers, weighted equally:
- **Tech recruiters and HR.** They skim fast and need role, company and impact at a glance, then the resume download.
- **Engineering leads and hiring managers.** They open the case studies and care about architecture, scale and the decisions behind them.

The site serves a fast skim on top, with depth one click down.

## Product Purpose
This is the personal portfolio of Hady Gustianto, used for software-engineering job applications. It presents his professional profile, selected work, experience and contact channels. Success means a reader quickly understands who he is and what he has built, then downloads the resume or gets in touch.

## Positioning
Hady is a backend-leaning full-stack engineer who designs and builds integration-heavy systems end to end. His two professional projects are his biggest achievements and must read as clearly more significant than his side projects:
- the Go microservices commerce backend at MDS Retailing (Matahari);
- the hospitality pricing and revenue engine at Karana OS.

He works daily in agentic, AI-assisted development workflows.

## Operating Context
- Readers arrive from job applications, LinkedIn and GitHub.
- The resume PDF is the companion document. It downloads as `Hady-Gustianto-Resume.pdf` rather than opening in the browser.

## Capabilities and Constraints
- **Stack and hosting:** a static Astro site with Tailwind CSS and MDX, deployed to Vercel on the owner's own domain. The owner does the deployment himself.
- **Routes:** `/`, `/projects`, `/projects/[slug]`, `/about`, a custom 404 page and `/resume.pdf`.
- **Content:** projects are MDX entries with `kind: work | side`. Work case studies appear as large feature blocks. Side projects appear as a compact list, kept clearly separate.
- **Theme:** light and dark are both required. The site follows the OS setting and has a manual toggle.
- **Not included:** no analytics, no forms, no CMS.
- **Confidentiality:** work case studies stay at the level of detail in the resume. Diagrams must not include internal service names, screenshots or code.

## Brand Commitments
- **Look:** minimal, modern and professional. Color is restrained, with generous whitespace (from the requirements doc).
- **Palette:** the owner rejected the first cool grey and ink-blue palette, and its fonts. The palette must be softer and warmer.
- **Profile photo:** `src/assets/profile.jpg` is a formal headshot on a white background. Show it at profile-photo scale only, never as a large hero image.

## Evidence on Hand
- **Resume:** `public/resume.pdf`, with source at `!DOCS/Resume`.
- **Professional work:** the Matahari and Karana OS case studies, limited to facts from the resume.
- **Side projects:** url-shortener, cinema-booking and LinkhedIn, with public GitHub repos and READMEs.
- **Publications:** "Forensic Voice Analysis…" (Springer link) and "Data Mod Security Processing for Machine Learning" (accepted, no link).
- **Awards:** Best Teaching Index Award (BINUS SLC) and COMPFEST 15.
- **Not available:** no testimonials, no metrics beyond the resume, and no product screenshots from employers. Do not fabricate any of them.

## Product Principles
1. The two professional projects lead. Side projects support them and never compete for attention.
2. Every claim must be traceable to the resume or a public repo.
3. A recruiter skimming for 10 seconds should be able to find role, company, impact and the resume download.
4. Depth is always one click away for engineers.

## Accessibility & Inclusion
Target WCAG 2.2 AA (from the requirements doc). The site must be keyboard navigable, show visible focus, respect reduced motion, and have sufficient contrast in both themes.
