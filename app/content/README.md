# Content maintenance

The public pages render from the typed modules in this directory.

- `site.ts`: maintain the site name, official domain, primary contact, university link, and main navigation in one place.
- `people.ts`: add a lab member with a unique, stable `id`. Set `status` to `alumni` when they leave; do not delete their historical record. Add separately advised SW·AI convergence students to `convergenceStudents` with their organization and thesis topic.
- `news.ts`: add a news item with its year and display `order`. Paper acceptance items must use the `paper()` helper and publication ID, which automatically reuses the verified publication thumbnail. For other news, `image` is optional and must be omitted when no directly related public image exists.
- `publications.ts`: add a publication with an explicit year, order, full venue name, authors, thumbnail, and topic tags. `link` is the paper/PDF destination; use `page` only for a separate project or tutorial page. Put awards, rankings, and other distinctions in `recognition`. Year sections are generated from `publicationGroups`.
- `publication-supplements.ts`: maintain Preprints, Patents, and Domestic Conference records.
- `teaching.ts` and `course-details.ts`: maintain the course index and its linked course pages.
- `lab-life.ts`: maintain Events cards and gallery records. Use a descriptive event image filename rather than numbered names. Event detail pages live under `app/events/` and `app/research/`.
- `tutorials.ts`, `research.ts`, and `join.ts`: maintain the corresponding page content.

Keep media paths explicit and reuse only images already approved for public display. Do not add unverified titles, dates, affiliations, or contact details.

Media is grouped by purpose under `public/media/brand`, `people`, `publications`, `news`, `research`, and `lab-life`. Add new files to the matching folder and reference the complete public path in the content record. News may reuse a directly related publication, person, or event image without copying it; never substitute a decorative but unrelated image.

## Safe update checklist

1. Add or update the data record; preserve existing IDs and public routes.
2. Add the approved image under the matching `public/media/` folder.
3. Verify email, affiliation, title, year, venue, links, and public status from a confirmed source.
4. Add a new route to `site.config.mjs` when a page is introduced; never remove a published legacy route without retaining an alias page.
5. Run `pnpm check`; do not publish when a route, asset, link, or anchor check fails.
