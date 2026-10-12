# BactoSense

A Docusaurus site based on the structure, typography, local search, and light/dark theme of the sibling `bactocloud-manual` project. This manual covers BactoSense software **3.2.0** and uses document ID **UM-0006**. Its source is the supplied 173-page **UM_0006-01EN** manual (originally published for software 3.1.0). Chapter 14 supplements its IT requirements, registration and instrument enrolment with the reviewed English content and images from `bactocloud-manual`.

## Serve with Apache

The public site is **https://manual.bnovate.net/**. `public/` contains the generated HTML pages, JavaScript, styles, fonts, images, local search index and downloadable PDF. Commit this directory together with the source changes. On the server, updating the checkout with `git pull` updates the public pages directly. Apache serves static files; no Node.js, Chromium, build command or PHP application is needed on the server.

If Apache already serves the repository root, the included root `.htaccess` routes public URLs into `public/` and prevents requests from serving the source tree. Enable `mod_rewrite` and allow `.htaccess` overrides for that directory. Chapter URLs stay at `/bactocloud/`, `/installation/`, and so on.

Alternatively, point Apache directly at `public/`:

```apache
DocumentRoot "/var/www/bactosense-manual/public"
<Directory "/var/www/bactosense-manual/public">
    Require all granted
    AllowOverride All
    Options -Indexes
    DirectoryIndex index.html
</Directory>
```

After editing content on a development machine, run `npm run manual:check` and `npm run build`, then commit the source changes and the refreshed `public/` directory before pushing. Every successful full build replaces `public/` after the site, PDFs, search indexes and internal links have been checked. A build with `--locale` refreshes that language's local output; run the full build to refresh the complete Apache deployment. Do not edit the generated files in `public/` directly.

## Run locally

Requires Node.js 22 or later.

```sh
npm ci
npm run browser:install
npm run build
npm start
```

Open the localhost URL printed by Docusaurus. The initial build creates the PDF download. Rebuild after editing content to refresh it. For the production build, including the local search index and generated PDF:

```sh
npm run manual:check
npm run build
npm run serve
```

## Content and assets

- `docs/`: the 20 chapters plus the introduction and publisher notice.
- `i18n/`: German, French, Italian and Spanish editions, with translated interface labels.
- `static/img/`: only referenced illustrations, icons, branding and current GUI figures. Full-page PDF facsimiles, redundant table screenshots and unused extraction crops are removed.
- `public/`: versioned Apache deployment, refreshed by `npm run build`.
- `maintenance/translation-glossary.md`: preferred terms for all five languages. Consult it before translating or revising terminology.
- `maintenance/source-sections.json`: editorial mapping from printed source pages to current chapter/section URLs; it adds no markup to the manual.
- `maintenance/gui-*.json`: GUI figure inventories and provenance.
- `scripts/editorial/`: maintained English content applied during optional source re-extraction: the section 2.3 safety-symbol legend, section 10.2.4 Advanced scheduling, section 15.4 Embedded manual and chapter 9, 11 and 14 bodies. Chapter 9 retains the illustrated package-activation procedure. Chapter 11 includes the CBC, EBC and NBC supplement; its sources are recorded in `maintenance/cartridge-results-sources.md`.
- Root-level `UM_0006-*.pdf`: local reference inputs, ignored by Git and excluded from deployment. The website contains only generated PDFs.
- `output/pdf/<locale>/`: generated PDF copies and reports (ignored).
- `static/pdf/`: ignored copies of the latest generated PDFs for the development server.

Use Markdown for paragraphs, emphasis, lists and simple tables. HTML remains only where needed for merged cells, nested table content, line breaks inside table cells, and scientific superscripts/subscripts. Headerless Markdown tables use a blank header row, which the site removes during rendering. Sized images use standard Markdown image syntax with a layout title, for example `![Instrument](/img/manual/example.png "width=600 class=manual-figure")`; the image component applies the size and removes the metadata from the tooltip. `npm run manual:format` simplifies equivalent markup across all five editions; review its changes before accepting them. Native admonitions provide warning and information boxes with short custom titles. On the web, images enlarge in a lightbox; close it with Escape, the close button, or a click outside the image. Index links use stable section headings, independent of the original PDF pagination.

Write a notice directly in Markdown:

```md
:::warning[Prevent condensation]

The covers and lids must always be attached during operation.

:::
```

Choose the notice type to match the original PDF symbol and signal word:

| Type | Symbol | Purpose |
| --- | --- | --- |
| `danger` | Lightning in a yellow triangle | The source manual's DANGER notices, including electrical hazards. |
| `explosion` | Explosion in a yellow triangle | Explosion hazards; retains the native danger color. |
| `warning` | Exclamation mark in a yellow triangle | The source manual's WARNING notices. |
| `caution` | The same exclamation triangle | The source manual's CAUTION notices; preserve the distinct signal word. |
| `gloves` | White protective gloves in a blue circle | Mandatory gloves for handling samples, sampling devices and cartridges. |
| `info` | Information letter i in a rounded rectangle | Additional information, including Intended use in section 2.5. |

For example, use `:::explosion[Explosive environments]`, `:::caution[Prevent condensation]`, or `:::gloves[Wear protective gloves]` with the body and closing `:::`. Native Docusaurus boxes provide the layout, severity colors and localized titles; the icons use the original vector artwork from the PDFs. Section 2.3 explains the five safety notice types in every language. `maintenance/safety-symbols.json` records their source pages and rendering mappings; `.venv/bin/python scripts/safety_symbols.py` re-exports the five shared SVGs, including the information letter as a font outline, without importing page text.

For a blue information box, write `:::info[Network settings]` followed by the body and closing `:::`. Native notice fences also work inside HTML table cells when separated by blank lines. Use four colons for an outer notice containing a three-colon notice. The optional extraction parsers apply `scripts/native_notices.py` and `scripts/manual_artwork.py` so regeneration keeps native notices, their symbols and their custom titles. Work-step hand icons are omitted, and information icons become blue info boxes.

The source PDF is in English. Configured translations have their own language directories in the generated deployment. The BactoCloud supplement records cloud enrolment prerequisites and interface labels from the sibling manual; it does not update the instrument-version scope of the other chapters.

## Re-extract the source

Re-extraction is an optional import workflow, not part of normal editing or builds. It requires the local English source PDF and Python 3.9 or later. Extraction output is disposable and ignored by Git; the repository no longer retains the full-page renders or intermediate text/layout dumps.

```sh
python3 -m venv .venv
.venv/bin/pip install -r requirements-extraction.txt
.venv/bin/python scripts/extract_pdf.py
.venv/bin/python scripts/parse_first_half.py
.venv/bin/python scripts/parse_second_half.py
.venv/bin/python scripts/audit-text.py
npm run manual:check
npm run build
```

The extraction and parser scripts overwrite their generated artifacts and chapters. The parsers apply reviewed content from `scripts/editorial/` after extraction; keep the section 2.3 legend, section 15.4 Embedded manual and chapter 9, 11 and 14 bodies there in sync with their counterparts in `docs/`. `scripts/manual_artwork.py` reapplies the current GUI figure mapping and reviewed chapter-specific English navigation/legend changes from `maintenance/gui-*.json`. Keep other editorial changes in the parser or review the diff before accepting a regeneration. The second parser runs the Markdown simplifier after both chapter passes. Re-extraction can recreate unused artwork; remove unreferenced output again before publishing. Review all translations after changing the English source.

Exact decoded-pixel duplicates share assets. Similar icons are consolidated only after visual comparison; screenshots with different settings, readings or states remain distinct.

## Languages and translation maintenance

All 21 documents are translated into German (`de`), French (`fr`), Italian (`it`) and Spanish (`es`) under `i18n/<locale>/docusaurus-plugin-content-docs/current/`. English remains at `/`; translated editions are served at `/de/`, `/fr/`, `/it/` and `/es/`. Filenames, slugs and explicit anchors are shared, so switching language keeps the corresponding chapter. Search and the site interface are localized, and each edition has its own generated PDF.

The current English Markdown is the source of truth. The older German and French PDFs were extracted locally and used for terminology; newer instructions, technical details and the BactoCloud chapter were translated from the current content. The terminology decisions and reference document hashes are recorded in the translation glossary; temporary reference extracts are disposable. Instrument and web GUI screenshots, including native instrument enrolment, use the matching interface language in each edition, under `static/img/gui/<locale>/`. Language-independent icons, hardware illustrations, scientific examples and the retained BactoCloud browser supplement image are shared. Device labels and protocol names retain their displayed form so users can identify controls.

Update the four translated counterparts when editing English. Keep corresponding image names, section IDs, table structure, safety-notice types, technical identifiers, values and units intact. Only the GUI screenshot directory's locale segment differs between editions. `npm run translations:check` compares the complete document inventory and structure, validates matching screenshot languages, and runs automatically before builds to prevent silent English chapter fallbacks. This check verifies structural coverage, not linguistic correctness. Its local report is `output/translations/coverage.json`.

## Refresh GUI screenshots

The current figures were captured from the sibling `gui`, `bactoserver` and `bactoweb` repositories against a disposable local demo server. They retain the original chapter positions and annotation numbers, with captions and navigation revised where the current GUI changed. Filenames describe the screen or control, for example `home-overview.png`, `digital-input-configuration.png`, `scientific-package-activation-key.png` and `web-plots-measurement-time.png`.

Follow [the native capture instructions](scripts/gui-capture/runtime/README.md) and [the web capture instructions](scripts/gui-capture/web/README.md). Raw images, bounds, temporary databases and detailed runtime logs stay in ignored `output/gui-capture/`. Capture uses production UI resources; only the isolated demo data contains teaching fixtures. The native renderer requires Cocoa OpenGL because software rendering omits some masked icons.

```sh
npm run screenshots:prepare
npm run screenshots:render
# Visually review every final image and record its exact SHA-256 in the manifest.
npm run screenshots:apply
npm run screenshots:check
npm run build
```

`maintenance/gui-screenshots.json` records source revisions, capture geometry, descriptive filenames, original annotations and final visual reviews. Preparing or rerendering a changed figure requires a fresh review before application. `screenshots:check` verifies the reviewed hashes, annotation coverage, replacement coverage in all five editions and unchanged scientific/hardware artwork; it also checks raw capture dimensions when local captures are present. This check runs before each build. See [the screenshot review](maintenance/gui-screenshot-review.md) for capture scope and reviewed differences.

For the package-activation and native enrolment figures, run `node scripts/gui-capture/prepare-supplemental.mjs`, then pass its printed figure IDs to `node scripts/gui-capture/render-figures.mjs`. This prepares only the supplemental catalog and preserves unchanged image reviews. Inspect each final image before recording its reviewed hash and applying it. [The navigation review](maintenance/gui-navigation-review.md) records the current routes, localized control labels, role restrictions and source/runtime evidence behind the updated instructions.

For chapter 6.6's small output-control captures, run `node scripts/gui-capture/prepare-digital-output-figures.mjs` and render only its 20 printed IDs. [The digital-output review](maintenance/gui-digital-output-review.md) records the actual row values, capture composition, localized instructions and print checks.

For development in a specific language, run `npm start -- --locale de` (or `fr`, `it`, `es`). The development server serves one language at a time; use `npm run build` followed by `npm run serve` to test switching across all five editions. `npm run manual:pdf -- de` regenerates just the German PDF from an existing build; omitting the locale regenerates all five. Rebuild the website first after changing Markdown.

## On-device manual prototype

All five manual languages can also be exported for the native instrument GUI. Run
`npm run manual:device -- --gui ../gui`, rebuild the GUI, and open
**Support & Service → Manuals → User manual**. One QML reader uses
the device's existing buttons and lists to display all chapters, tables,
notices, images and internal links from local JSON resources. Its title strip
is hidden to give the article more room. The GUI selects its own language's
manual, with English fallback for unsupported languages.
Documented GUI features can also open a specific section from a small help
icon in the title bar. Exported images are capped at 800 px wide and keep their
source filenames and directories.

`npm run manual:preview` opens the same reader in a desktop Qt 5 window without
Bactoserver. See [the export investigation and prototype guide](maintenance/on-device-manual.md)
for the Docusaurus integration, resource layout, build commands and validation.

## Generated PDF

The navbar's **Download PDF** downloads the compiled online manual. `npm run build` generates it automatically using local Playwright Chromium, with a cover, linked contents, bookmarks, page numbers, embedded fonts, tables, images and native notices. Generation fails on missing chapters, fonts, images or internal links. It reads the built HTML and never fetches remote assets. The supplied PDFs are retained locally as source references; Download PDF always serves the current language’s generated online manual.

After a website build, `npm run manual:pdf` regenerates the PDF from that build (use `npm run build` to refresh the Apache deployment and include Markdown changes). The report at `output/pdf/en/report.json` records the included chapters, image count, timestamp and SHA-256. The generated PDF in `public/pdf/` is committed with the deployed website; temporary copies remain ignored.

## Deployment

`npm run build` produces static `build/` and `public/` directories for `https://manual.bnovate.net/` by default. `build/` is the local preview and Docker input; `public/` is versioned for Apache deployment by Git. For another deployment, set `MANUAL_SITE_URL` to its origin and `MANUAL_BASE_PATH` if hosting below a subdirectory before building. Environment values must be passed to the build process; `.env.example` documents them. The root `.htaccess` is configured for this manual at the root of its domain.

The included Dockerfile installs Chromium in its build stage, builds the site and PDF, and serves both with nginx. Chromium is not included in the runtime image. Pass deployment settings as build arguments:

```sh
docker build --build-arg MANUAL_SITE_URL=https://manual.bnovate.net -t bactosense-manual .
docker run --rm -p 8080:80 bactosense-manual
```

### Bitbucket pipeline

`bitbucket-pipelines.yml` follows the sibling BactoCloud manual's self-hosted Docker runner setup. It builds and checks the nginx image for branches, publishes `registry.bactocloud.com/bactosense-manual:latest` on `main`, and publishes `v*` tags without the leading `v`. The custom `publish-user-manual` pipeline accepts a `VERSION` (default `latest`). Every image includes the freshly generated PDF.

Configure secured repository variables `BNOVATE_REGISTRY_USERNAME` and `BNOVATE_REGISTRY_PASSWORD` with permission to push this image. Set `MANUAL_SITE_URL` to the deployed origin; optionally set `MANUAL_BASE_PATH` (default `/`). The build script forwards these settings into Docker. These publishing credentials are only used for Docker login and are not passed to the image build.

Run the same build and nginx check locally with `sh scripts/ci-image.sh build`. The `publish` action additionally logs in, pushes the image and verifies its registry manifest.

The static site requires no external search service. The original publisher and copyright notices are retained in the introduction.

## Validation

`npm run manual:check` checks chapter presence, unresolved font glyphs, obsolete pagination anchors and referenced image/document files. `npm run translations:check` verifies matching document inventories, routes, semantic headings, Markdown and HTML table structure, notices, images and links across all editions. Docusaurus treats broken internal links and anchors as build failures. Neither check requires source PDFs or extraction dumps.

For optional source review, `scripts/audit-text.py` compares text tokens by chapter using the editorial source-to-section map. This is a diagnostic, not proof of semantic accuracy: figure labels and the rewritten index can differ intentionally. The former page-geometry visual audit is retired; review the rendered website and generated PDFs for correct figures, table layout and unclipped content.
