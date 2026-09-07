# Social Sanitation Website Redesign

## Goal
Build a premium, responsive homepage for Social Sanitation that immediately reads as an established Central Florida commercial cleaning and sanitation company, with veteran ownership and real service capability as primary trust signals.

## Experience
- Create a clean premium navigation with a restrained text wordmark, anchor links, and a persistent “Request a Quote” action.
- Lead with a full-bleed commercial-cleaning photograph, oversized direct messaging, veteran-owned positioning, and one primary quote CTA.
- Follow with an editorial trust statement and a compact service-area cue for Central Florida without inventing locations or performance claims.
- Present the real service catalog in varied groupings: large featured service photography, horizontal service lists, and selective supporting panels rather than a uniform card grid.
- Feature specialized cleaning work—floor care, carpet extraction, medical sanitation, high dusting, windows, and facility maintenance—with dedicated imagery.
- Add a large before/after comparison slider as visual proof, designed for touch and keyboard use.
- Include a focused quote section with a readable commercial inquiry form and a substantial, uncluttered footer.

## Visual Direction
- Use brand green `#06F51D` and cyan `#77E7FB` only as sharp accents against white, off-white, charcoal, and deep slate.
- Use a bold editorial display face with a highly readable sans-serif body face.
- Mix full-width image bands, asymmetric split layouts, oversized typography, overlap, and whitespace; avoid repetitive card grids, glass effects, blobs, and oversized shadows.
- Generate a cohesive set of authentic commercial-cleaning images showing active professional teams and real facility environments, never residential house cleaning.
- Use restrained motion for image reveals, the comparison slider, navigation, and hover states, respecting reduced-motion preferences.

## Technical Implementation
- Replace the placeholder index route with reusable React sections and data-driven service content.
- Define semantic OKLCH design tokens, typography, and shared motion in `src/styles.css`; load fonts from the root route head.
- Add unique homepage metadata for Social Sanitation.
- Keep all interactions frontend-only: anchor navigation, mobile menu, before/after slider, and a quote form with clear non-submitting demo feedback rather than inventing backend delivery.
- Verify the completed page in the live browser at desktop and mobile widths, including navigation, slider, form usability, image loading, overflow, and console/runtime errors.

## Scope
This pass delivers the primary website experience at `/` as a substantial single-page commercial services site. Navigation will move between homepage sections; no unsupported claims, reviews, customer logos, awards, certifications, or statistics will be added.
