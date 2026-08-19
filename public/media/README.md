# Media maintenance

Store each image in the folder matching its primary purpose:

- `brand/`: the IDEA Lab logo and approved brand assets
- `people/`: faculty, student, intern, and future alumni portraits
- `publications/`: publication thumbnails and figures
- `news/`: images created specifically for a news item
- `lab-life/`: conference, workshop, seminar, dinner, and other event photos. Use descriptive names such as `2026-04-itrc-exhibition.jpg`; never return to `event-1.jpg` numbering.
- `research/`: approved research-area visuals
- `collaborators/`: approved institution and company logo files. When no verified logo asset is available, keep a text wordmark in `app/content/research.ts` instead of inventing a symbol.
- `archive/`: retained legacy assets that are not used by the current site

Use lowercase kebab-case filenames for new media, preferably with a stable date or content ID, such as `2026-08-cikm-acceptance.jpg` or `2027-sigir-paper-title.png`.

Publication figures use `publications/<year-group>/<publication-id>.<ext>`. The directory and filename must match the publication record in `app/content/publications.ts`; for example, `publications/2026/2026-sigir-sprint.png`. Papers from 2020 and earlier live under `publications/2020-and-before/`. The legacy `pub-01` through `pub-18` files are retained but are no longer referenced by the site.

Do not overwrite an existing image when the new file represents a different person, paper, or event. Add the new file and update the corresponding record in `app/content/` instead. News may reference an existing event photo or publication thumbnail without duplicating the file.
