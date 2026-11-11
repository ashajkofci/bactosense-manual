# bNovate Manuals

A Docusaurus platform for bNovate product manuals, based on the structure, typography, local search, and light/dark theme of the sibling `bactocloud-manual` project. Every manual shares the same theme, Markdown conventions, notices, tables, search, PDF compilation and languages, and is served below its own URL: `/bactosense/`, `/<manual id>/`. The home page at `/` lists all manuals.

**BactoSense** is the principal manual. It covers BactoSense software **3.2.0** and uses document ID **UM-0006**. Its source is the supplied 173-page **UM_0006-01EN** manual (originally published for software 3.1.0). Chapter 14 supplements its IT requirements, registration and instrument enrolment with the reviewed English content and images from `bactocloud-manual`. Unless a section says otherwise, the editorial, translation, screenshot, extraction and on-device sections below describe the BactoSense manual.

**BactoSwitch**, the multi-line selector for BactoSense, is the second manual (`manuals/bactoswitch/`, document ID **UM-0001**). It was imported from the 69-page **UM_0001-02EN** manual and follows the same notice, table, procedure, glossary and translation rules in all five languages. Its references to the BactoSense manual link to the corresponding `/bactosense/` sections. [The BactoSwitch source review](maintenance/bactoswitch-source-review.md) records the figure export, the corrections made to the source and the open questions. Its screenshots are the English captures from the PDF in every language.

## Manuals

`manuals.json` lists the published manuals; the first entry is the principal manual. Each entry becomes a Docusaurus docs instance at `/<id>/`, a navbar item, a home page card, a footer link and one generated PDF per language.

| Field | Purpose |
| --- | --- |
| `id` | URL segment and PDF name (`pdf/<id>-manual-<locale>.pdf`). Lowercase letters, digits and hyphens. |
| `title` | Navbar, home page and PDF cover. |
| `image` | Picture of the instrument on the home page card, under `static/` (for example `/img/home/bactosense.webp`). Optional: without it the card shows only the title. |
| `description` | Optional summary text (a string or a per-language object). The home page no longer displays it. |
| `documentId`, `version`, `softwareVersion` | PDF cover and footer; `softwareVersion` is optional. |
| `locales` | Languages the manual is translated into (`en` is required). PDFs and translation checks cover these; other site languages show the English pages. |
| `logo` | PDF cover image under `static/`. |
| `path`, `docsPluginId` | Content folder (default `manuals/<id>`) and docs instance id (default `<id>`). BactoSense uses `manuals/bactosense/` and keeps the `default` instance, so its translations stay in `i18n/<locale>/docusaurus-plugin-content-docs/current/`. |
| `chapters` | Optional: number of numbered chapters (`01-…` to `NN-…`) that `manual:check` requires in every language. |
| `device` | Optional: export this manual to the instrument GUI. At most one manual (BactoSense). |

Create a new manual with:

```sh
npm run manual:new -- bactocontrol "BactoControl" UM-0012 --software 1.0.0
```

This creates `manuals/bactocontrol/` with an introduction and a first chapter, and appends the manual to `manuals.json`. Write its chapters with the same Markdown, notice and table conventions as BactoSense; put its images in `static/img/<id>/`. Its translations go in `i18n/<locale>/docusaurus-plugin-content-docs-<id>/current/` with the same filenames; add the language to `locales` once translated, so `npm run translations:check` enforces it. The command refuses ids that would shadow a site folder, a language or a former BactoSense URL.

Inside a manual, a root-absolute link addresses that manual's own pages: `[8.4](/general-operations-and-configurations#section-8-4)` renders as `/bactosense/general-operations-and-configurations/#section-8-4` (`plugins/manual-links.cjs`). Links that begin with another manual's id, and static files such as `/img/…` and `/pdf/…`, are left unchanged. With two or more manuals, search covers the manual being read, and the home page searches all of them.

BactoSense was served at the site root before the platform existed. Its former chapter URLs (`/installation/`, `/de/installation/`, …) are kept as redirect pages to `/bactosense/…`, including the section anchor. The PDF downloads keep their URLs (`/pdf/bactosense-manual-<locale>.pdf`).

## Serve with Apache

The public site is **https://manual.bnovate.net/**. `public/` contains the generated HTML pages, JavaScript, styles, fonts, images, local search index and downloadable PDFs. Commit this directory together with the source changes. On the server, updating the checkout with `git pull` updates the public pages directly. Apache serves static files; no Node.js, Chromium, build command or PHP application is needed on the server.

If Apache already serves the repository root, the included root `.htaccess` routes public URLs into `public/` and prevents requests from serving the source tree. Enable `mod_rewrite` and allow `.htaccess` overrides for that directory. Chapter URLs are `/bactosense/installation/` and so on.

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

- `manuals.json`: the manual registry; `plugins/manuals.cjs` reads it for the site configuration and scripts.
- `manuals/bactosense/`: the 20 BactoSense chapters plus the introduction and publisher notice.
- `manuals/<id>/`: English chapters of each manual, also including `manuals/bactoswitch/` (9 chapters plus the introduction); BactoSwitch translations are in `i18n/<locale>/docusaurus-plugin-content-docs-bactoswitch/current/` and its images in `static/img/bactoswitch/`.
- `i18n/`: German, French, Italian and Spanish editions, with translated interface labels.
- `static/img/`: only referenced illustrations, icons, branding and current GUI figures. Full-page PDF facsimiles, redundant table screenshots and unused extraction crops are removed.
- `public/`: versioned Apache deployment, refreshed by `npm run build`.
- `maintenance/translation-glossary.md`: preferred terms for all five languages. Consult it before translating or revising terminology.
- `maintenance/source-sections.json`: editorial mapping from printed source pages to current chapter/section URLs; it adds no markup to the manual.
- `maintenance/gui-*.json`: GUI figure inventories and provenance.
- `scripts/editorial/`: maintained English content applied during optional source re-extraction: the section 2.3 safety-symbol legend, section 10.2.4 Advanced scheduling, section 10.7 Filtering measurements, section 15.1.2 Intervention log, section 15.4 Embedded manual, sections 16.4 Logs and 16.5 Clearing errors, and chapter 9, 11 and 14 bodies. Chapter 9 retains the illustrated package-activation procedure. Chapter 11 includes the CBC, EBC and NBC supplement; its sources are recorded in `maintenance/cartridge-results-sources.md`.
- Root-level `UM_0006-*.pdf`: local reference inputs, ignored by Git and excluded from deployment. The website contains only generated PDFs.
- `output/pdf/<manual id>/<locale>/`: generated PDF copies and reports (ignored).
- `static/pdf/`: ignored copies of the latest generated PDFs for the development server.

Website and PDF builds read the current chapters from `manuals/<id>/` directly. `scripts/editorial/` preserves reviewed BactoSense content when re-extracting the older source PDF; `manual:format` also formats its retained chapter bodies, and `manual:check` checks that its safety-symbol legend matches the English chapter.

Use Markdown for paragraphs, emphasis, lists and tables. HTML remains only for `<br />` line breaks inside table cells that hold separate lines (value lists, `Label:` and value pairs, bullets), the `<div className="…">` wrapper that carries a table's formatting classes, and scientific superscripts/subscripts. Do not use `<br />` to copy the PDF's line wrapping; write the text as one line. A table cannot sit inside another table's cell: place it below the procedure table, or write its values as a sentence. Headerless Markdown tables use a blank header row, which the site removes during rendering. Sized images use standard Markdown image syntax with a layout title, for example `![Instrument](/img/manual/example.png "width=600 class=manual-figure")`; the image component applies the size and removes the metadata from the tooltip. `npm run manual:format` simplifies equivalent markup across all five editions; review its changes before accepting them. Native admonitions provide warning and information boxes with short custom titles. On the web, images enlarge in a lightbox; close it with Escape, the close button, or a click outside the image. Index links use stable section headings, independent of the original PDF pagination.

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

For a blue information box, write `:::info[Network settings]` followed by the body and closing `:::`. Inside a Markdown table cell, write the notice on one line: `:::caution[Wall mounting] The fixation must carry 60 kg. :::`. Separate further paragraphs of the notice with `<br /><br />`. Use four colons for an outer notice containing a three-colon notice. The optional extraction parsers apply `scripts/native_notices.py` and `scripts/manual_artwork.py` so regeneration keeps native notices, their symbols and their custom titles. Work-step hand icons are omitted, and information icons become blue info boxes.

Tables are plain Markdown pipe tables. Merged cells use two markers, handled by `plugins/manual-tables.cjs`: a cell containing only `\<` merges with the cell on its left (colSpan) and a cell containing only `^` merges with the cell above (rowSpan); the top-left cell of the merged block holds the content. A merged bold-only cell that spans every column, such as `| **GENERAL** | \< |`, renders as a section header. A row that ends early extends its last cell to the table edge. Formatting classes go on a wrapper `<div className="…">` with the table separated by blank lines; the stylesheets in `src/css/custom.css` and `scripts/pdf.css` target `.class table` and set column widths on the first row (for example `.manual-ui-elements`, `.manual-user-roles-permissions`, `.manual-modbus-address-list`, `.manual-narrow-details`). Wrappers ending in `-scroll` add horizontal scrolling on narrow screens. `npm run manual:format` converts remaining HTML tables with the same rules, keeping the tables identical across all five editions, and lists any table it leaves as HTML (currently none).

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

The extraction and parser scripts overwrite their generated artifacts and chapters. The parsers apply reviewed content from `scripts/editorial/` after extraction; keep the section 2.3 legend, sections 10.2.4, 10.7, 15.1.2, 15.4, 16.4 and 16.5, and chapter 9, 11 and 14 bodies there in sync with their counterparts in `manuals/bactosense/`. `scripts/manual_artwork.py` reapplies the current GUI figure mapping and reviewed chapter-specific English navigation/legend changes from `maintenance/gui-*.json`. Keep other editorial changes in the parser or review the diff before accepting a regeneration. The second parser runs the Markdown simplifier after both chapter passes. Re-extraction can recreate unused artwork; remove unreferenced output again before publishing. Review all translations after changing the English source.

Exact decoded-pixel duplicates share assets. Similar icons are consolidated only after visual comparison; screenshots with different settings, readings or states remain distinct.

## Languages and translation maintenance

All 21 BactoSense documents are translated into German (`de`), French (`fr`), Italian (`it`) and Spanish (`es`) under `i18n/<locale>/docusaurus-plugin-content-docs/current/`. English is served at `/bactosense/`; translated editions at `/de/bactosense/`, `/fr/bactosense/`, `/it/bactosense/` and `/es/bactosense/`. Filenames, slugs and explicit anchors are shared, so switching language keeps the corresponding chapter. Search and the site interface are localized, and each edition has its own generated PDF.

The current English Markdown is the source of truth. The older German and French PDFs were extracted locally and used for terminology; newer instructions, technical details and the BactoCloud chapter were translated from the current content. The terminology decisions and reference document hashes are recorded in the translation glossary; temporary reference extracts are disposable. Instrument and web GUI screenshots, including native instrument enrolment, use the matching interface language in each edition, under `static/img/gui/<locale>/`. Language-independent icons, hardware illustrations, scientific examples and the retained BactoCloud browser supplement image are shared. Device labels and protocol names retain their displayed form so users can identify controls.

Update the four translated counterparts when editing English. Keep corresponding image names, section IDs, table structure, safety-notice types, technical identifiers, values and units intact. Only the GUI screenshot directory's locale segment differs between editions. `npm run translations:check` compares the complete document inventory and structure, validates matching screenshot languages, and runs automatically before builds to prevent silent English chapter fallbacks. This check verifies structural coverage, not linguistic correctness. Its local report is `output/translations/coverage.json`.

## Automated translation sync and builds

Two independent GitHub workflows use the environment **`agent`**. [Sync manual translations](.github/workflows/sync-translations.yml) uses OpenAI and runs on pushes to `main` that change English manuals, the manual registry, translation guidance or sync code. [Build manuals](.github/workflows/build-manuals.yml) uses no OpenAI API calls or credentials and runs when a tag is pushed, a pull request is merged into `main`, or it is started manually. Both workflows are available under **Actions → workflow name → Run workflow**.

For translation sync, configure `OPENAI_API_KEY` as a secret in that environment. The key needs `api.agents.read`, `api.agents.write` and `api.responses.write` permissions for the [OpenAI Agents API](https://developers.openai.com/api/docs/guides/agents-api/quickstart). Translation uses **`gpt-6.1-terra`**; the build workflow does not need this secret. Allow GitHub Actions to create pull requests in the repository's Actions settings; both workflows request `contents: write` and `pull-requests: write` for their jobs.

The sync uses `manuals.json` to locate each manual and its translated editions. `maintenance/translation-sync.json` records the English source hash last synchronized for each translated file, the glossary hash and the translation-context hash. It is initialized to the current translations, so the first run only translates subsequent English changes or missing chapters. A glossary or translation-context change selects all chapters; select **force** for a manual full sync. Existing human translation edits are retained when English, the glossary and the translation context have not changed.

The agent receives the current English chapter, its existing translation, the complete [translation glossary](maintenance/translation-glossary.md), and [translation context](maintenance/translation-context.md) covering products, audience, style and source precedence. It also receives the manual's document/software metadata, English and translated introductions, a bilingual chapter outline, and up to 3,000 characters from each neighboring translated chapter. English and the glossary take precedence over potentially outdated translated context. It returns structured Markdown without access to the runner's shell or credentials. Generated translations must preserve routes, section IDs, links, tables, notice types and localized screenshot paths. One repair is attempted on a structural failure; a failed batch does not advance the manifest. These checks establish structural consistency, not linguistic or scientific accuracy.

After translation, the sync workflow runs the manual and translation checks and **commits only the translations and sync manifest to `automation/sync-translations`**, then opens or updates a pull request against the default branch. It checks for work before installing dependencies or accessing the API key. With no chapters to translate or remove, it reports zero changes and skips dependency installation, tests, validation and the Git commit step. It never installs Chromium or builds the site.

Every sync produces progress logs and `output/translations/sync-report.json` plus `sync-report.md`, including on failure or a dry run. Reports count files actually **modified, created and removed**, distinguish skipped files from requested translations that returned identical content, and include API translation attempts, failures, per-manual/language totals and file details. Candidates discarded after a failed batch are not counted as modifications. The Markdown report appears in the GitHub run summary and translation pull request; both report files are retained in the `translation-sync-reports` artifact for 14 days.

The separate build workflow validates the manuals, installs Chromium and runs the complete `npm run build`. It **commits the rebuilt `public/` site and all PDF downloads to Git**. Branch builds open or update a pull request from `automation/build-manuals/<branch>`; merge it to update that branch's versioned deployment. Tag builds check out the exact tag and save their results to `automation/builds/<tag>`, preserving the tag and leaving newer branch content intact. The generated site and build reports are also retained as artifacts. A merged pull request that changes only `public/` is skipped before dependency or Chromium installation, so merging a build pull request does not start another build. The merge trigger uses [GitHub's documented `merged` condition](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#running-your-pull_request_target-workflow-when-a-pull-request-merges) and checks out the base branch. Closing an unmerged pull request does not build.

The automation branches are owned by their workflows and are replaced on subsequent runs. Generated files do not trigger another translation sync. The build workflow's summary links to its saved Git commit and build pull request, when applicable.

Run the same sync locally with an exported API key (the script does not load `.env` automatically):

```sh
npm run translations:sync -- --dry-run
npm run translations:sync
# Retranslate every chapter using API credits:
npm run translations:sync -- --force
npm run manual:check
npm run build
```

Review translated terminology and safety instructions before merging. Keep the manifest with the corresponding translations so future runs can skip unchanged chapters.

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

The BactoSwitch manual's localized screenshots have their own capture and teaching fixture: follow [the BactoSwitch capture recipe](scripts/gui-capture/runtime/README.md#bactoswitch-manual-screens). [The BactoSwitch source review](maintenance/bactoswitch-source-review.md) lists the BactoCloud image that keeps the PDF artwork and the product issues found during capture.

For chapter 6.6's small output-control captures, run `node scripts/gui-capture/prepare-digital-output-figures.mjs` and render only its 20 printed IDs. [The digital-output review](maintenance/gui-digital-output-review.md) records the actual row values, capture composition, localized instructions and print checks.

For development in a specific language, run `npm start -- --locale de` (or `fr`, `it`, `es`). The development server serves one language at a time; use `npm run build` followed by `npm run serve` to test switching across all five editions. `npm run manual:pdf -- de` regenerates just the German PDFs from an existing build, and `npm run manual:pdf -- bactosense de` only the German BactoSense PDF; without arguments it regenerates every manual in every language. Rebuild the website first after changing Markdown.

To update the user manual downloads of the instrument web interface, run `npm run build`, then `npm run manual:web -- --optimize` (add `--bactoweb <path>` if the checkout is not `../bactoweb`). It validates the English, German and French BactoSense PDFs from `public/` and replaces `app/UM_0006-*.pdf` in bactoweb, leaving the quick guides alone. `--optimize` recompresses the images with Ghostscript (`brew install ghostscript` on macOS; use the [Ghostscript Windows installer](https://ghostscript.com/releases/gsdnld.html) on Windows) to about 6 MiB per PDF instead of 22 MiB, and checks that the page count is unchanged; without it the PDFs are copied as built. On Windows it detects `gswin64c.exe` or `gswin32c.exe` on `PATH` or in standard `Program Files/gs` installations. Add `--dry-run` to preview, `--locales de,fr` to update only some languages, or `--from output` to use the latest local build instead of the committed `public/` PDFs. It warns when the manual sources are newer than the PDF. Review and commit the result in bactoweb.

## On-device manual prototype

All five manual languages can also be exported for the native instrument GUI. Run
`npm run manual:device` to generate and install them in `../gui/manual/`, rebuild the GUI, and open
**Support & Service → Manuals → User manual**. One QML reader uses
the device's existing buttons and lists to display all chapters, tables,
notices, images and internal links from local JSON resources. Its title strip
is hidden to give the article more room. The GUI selects its own language's
manual, with English fallback for unsupported languages. All five manuals,
including English, stay outside the executable in `manual/<locale>/` beside it.
Chapter text and images are read from disk on demand; search data is loaded
when first needed. The GUI build and installation copy these folders automatically.
Documented GUI features can also open a specific section from a small help
icon in the title bar. Exported images are capped at 800 px wide and keep their
source filenames and directories.

The export builds only the manual marked `"device": true` in `manuals.json`
(BactoSense). GUI help references use `manual:<doc id>#<anchor>`, for example
`manual:measurements#section-10-7`, so they do not depend on the website URL
(`/bactosense/…`).

Use `npm run manual:device -- --gui /path/to/gui` to install into another GUI
checkout, or `npm run manual:device -- --bundle-only` to export only to
`output/device-manual/`.

`npm run manual:preview` opens the same reader in a desktop Qt 5 window without
Bactoserver. See [the export investigation and prototype guide](maintenance/on-device-manual.md)
for the Docusaurus integration, resource layout, build commands and validation.

## Generated PDF

The navbar's **Download PDF** downloads the compiled online edition of the manual being read; the home page cards link the same files. Each manual gets `pdf/<id>-manual-<locale>.pdf` for every language in its `locales`. `npm run build` generates it automatically using local Playwright Chromium, with a cover, linked contents, bookmarks, page numbers, embedded fonts, tables, images and native notices. Generation fails on missing chapters, fonts, images or internal links. It reads the built HTML and never fetches remote assets. The supplied PDFs are retained locally as source references; Download PDF always serves the current language’s generated online manual.

After a website build, `npm run manual:pdf` regenerates the PDF from that build (use `npm run build` to refresh the Apache deployment and include Markdown changes). The report at `output/pdf/bactosense/en/report.json` records the included chapters, image count, timestamp and SHA-256. The generated PDF in `public/pdf/` is committed with the deployed website; temporary copies remain ignored.

## Deployment

`npm run build` produces static `build/` and `public/` directories for `https://manual.bnovate.net/` by default. `build/` is the local preview and Docker input; `public/` is versioned for Apache deployment by Git. For another deployment, set `MANUAL_SITE_URL` to its origin and `MANUAL_BASE_PATH` if hosting below a subdirectory before building. Environment values must be passed to the build process; `.env.example` documents them. The root `.htaccess` is configured for this manual at the root of its domain.

The included Dockerfile installs Chromium in its build stage, builds the site and PDF, and serves both with nginx. Chromium is not included in the runtime image. Pass deployment settings as build arguments:

```sh
docker build --build-arg MANUAL_SITE_URL=https://manual.bnovate.net -t bactosense-manual .
docker run --rm -p 8080:80 bactosense-manual
```

### Bitbucket pipeline

`bitbucket-pipelines.yml` follows the sibling BactoCloud manual's self-hosted Docker runner setup. It builds and checks the nginx image for branches, publishes `registry.bactocloud.com/bactosense-manual:latest` on `main` (the image keeps its original name so existing deployments continue to pull it; it contains every manual), and publishes `v*` tags without the leading `v`. The custom `publish-user-manual` pipeline accepts a `VERSION` (default `latest`). Every image includes the freshly generated PDF.

Configure secured repository variables `BNOVATE_REGISTRY_USERNAME` and `BNOVATE_REGISTRY_PASSWORD` with permission to push this image. Set `MANUAL_SITE_URL` to the deployed origin; optionally set `MANUAL_BASE_PATH` (default `/`). The build script forwards these settings into Docker. These publishing credentials are only used for Docker login and are not passed to the image build.

Run the same build and nginx check locally with `sh scripts/ci-image.sh build`. The `publish` action additionally logs in, pushes the image and verifies its registry manifest.

The static site requires no external search service. The original publisher and copyright notices are retained in the introduction.

## Validation

Both checks cover every manual in `manuals.json`, in the languages it lists. `npm run manual:check` checks chapter presence, unresolved font glyphs, obsolete pagination anchors and referenced image/document files. `npm run translations:check` verifies matching document inventories, routes, semantic headings, Markdown and HTML table structure, notices, images and links across all editions. Docusaurus treats broken internal links and anchors as build failures. Neither check requires source PDFs or extraction dumps.

For optional source review, `scripts/audit-text.py` compares text tokens by chapter using the editorial source-to-section map. This is a diagnostic, not proof of semantic accuracy: figure labels and the rewritten index can differ intentionally. The former page-geometry visual audit is retired; review the rendered website and generated PDFs for correct figures, table layout and unclipped content.
