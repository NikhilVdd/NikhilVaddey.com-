# Portfolio content guide

The live experience deliberately avoids fabricating personal material. Replace the labeled placeholders with verified assets as they become available.

## Photography

- Story images: add optimized `.webp` files to `public/images/story/` and replace the four `.chapter-art` placeholder blocks in `components/portfolio-experience.tsx`.
- Personal images: add optimized `.webp` files to `public/images/life/`, then add filename, category, caption, location, date, and alt text to a content record before rendering them.
- Product screenshots: add files to `public/images/work/<project-slug>/`. Mark conceptual screens and simulated metrics in the caption.

Use descriptive filenames, supply accurate alt text, and keep full-resolution originals outside the deployed repository.

## Resume and contact links

- Add the verified resume as `public/resume.pdf`, then add a `Download resume` link to the header.
- Add confirmed email, LinkedIn, and GitHub URLs only after verification. The current contact control opens the site navigation instead of inventing contact details.

## Editable content

Project, story, experience, update, and interest content is centralized in `lib/site-content.ts`. Dates are omitted where no verified resume was supplied. The journal route is ready for real MDX-backed articles; its current titles are visibly marked as drafts.

## Accuracy notes

- NnR Technologies says “five-figure revenue” without claiming a monthly cadence.
- Citco savings are labeled projected, not realized.
- Orbit, GRUB, and market interfaces clearly distinguish illustrative or conceptual content.
- Never add confidential client or Citco materials.
