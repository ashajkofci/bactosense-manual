# Current GUI screenshot review

Captured and reviewed on 11–12 October 2026 from the local production GUI resources and a disposable demo Bactoserver.

The 36 obsolete GUI screenshot assets and 38 obsolete control/status assets are replaced at their existing chapter and table positions in all five editions. Including the digital-output procedure follow-up, the catalog contains 48 screenshots/crops per language and 29 shared icons: **269 reviewed images**, used by 475 document references. Descriptive paths distinguish both language and screen, for example `/img/gui/fr/alarm-configuration.png`, `/img/gui/en/scientific-package-activation-key.png`, `/img/gui/en/digital-output-critical-error.png` and `/img/gui/icons/maintenance-button.png`. Superseded assets are archived locally in ignored `output/gui-capture/originals/` and removed from the published assets.

The eight scientific examples and 29 hardware/safety illustrations identified in the inventory retain their exact source SHA-256 hashes. The follow-up adds four annotated Scientific Package activation images per language and replaces chapter 14's four older native enrolment positions with current localized captures. Those four superseded cloud assets are privately archived separately from the original replacement inventory.

## Capture sources

| Source | Revision | Capture method |
| --- | --- | --- |
| Native GUI | `afa2595ffe3b9d8dda369d22805fef5b266b5547` | Qt 5.15.19 Cocoa OpenGL, production QML and image resources, `grabToImage` at 2× |
| Bactoserver | `26b9cbaad199dc1387d1a8ace72fef02b3fa1c64` | Isolated test-mode server, copied demo archives and disposable settings/databases |
| Web GUI | `515cb39e9d12493103c3a63319b8964022650365` | Current Angular source/templates/translations/styles, Chromium at 2× |

The initial native capture produced 40 real interface states in each language (200 raw screenshots). Web capture produced 15 states/crops in each language (75 raw screenshots). The additive activation/enrolment capture produced six more native states per language (30 raw screenshots); digital-output lower rows add one native capture per language (five raw screenshots), for **310 reviewed raw captures** overall. The UI language is selected through the current interface. Neither sibling application source tree was edited. Web staging uses current application source and only third-party vendor files from the available distribution archive.

Software rendering was rejected during capture because it omitted masked Qt icons. The final native captures use Cocoa OpenGL and include the actual production controls. The fixture's USB helper is the shipped mock, enabled only inside the disposable runtime. The documentation IP is `192.0.2.50`. Owned Qt, API and Redis processes were stopped after capture.

## Demo state and scientific data

The images use the shipped demo measurements and their genuine plots. The ICC result example retains its recorded 104050 cells/ml and HNAP 35.64%. Its warning indicator is a teaching fixture using the current warning definition; the counts and plots are unchanged. Error-log examples use current E04, E15 and C02 definitions. The backend enum for the displayed E15 empty-sample error is `MixerInflationError`.

Temporary settings and fixtures expose the controls needed for the source annotations: digital input/scheduler, analog outputs, service ports, cartridge alarm source, editable/default/double gates, a four-vertex TCC polygon, HNA limit and self-check results. They modify the copied demo state only. The exact fixture provenance is retained locally in `output/gui-capture/runtime/capture-fixture-provenance.json`; the scripts reproduce it.

## Annotation and content decisions

The replacements retain **375 numbered callouts**, **25 letter/position callouts** (including a–d and X), and the Home screen's A/B/C regions. The current catalog contains 65 arrows and 65 highlights, including the supplemental procedure targets. Callout targets and meanings are recorded per figure in `gui-screenshots.json`. Genuine crops and montages retain their aspect ratio; no control or reading is painted into a screenshot.

- The current Home screen is a measurement dashboard. Its footer annotations 7–9 describe **Results**, **Mode** and **Measure** in the illustrated Manual mode. Online mode uses **Start**. Instructions enter the settings menu through **Settings**; forty procedure illustrations now show the matching localized Settings control.
- The ICC result figure includes its real information window and dotplot. The selected archive supplies FL1/FL2 and a histogram; it does not supply an SSC plot, so the screenshot does not imply one.
- TCC gate vertices a–d, coordinate columns 1–3, HNA limit 5 and preview 6 remain paired with the correct legend. The preview uses the real GUI plot.
- Support and service information is opened from the current direct **Support & Service** menu entry. Its caption and procedure match that entry.
- The current web navigation uses **Plots** and localized equivalents. Measurement stepping, timestamp slider, actual `fcs` link, ZIP selection and XLSX/CSV/PDF downloads are illustrated with their real controls. GIF export uses up to 60 latest Online mode plots, independently of the slider position. The five timestamp captures now use `web-plots-measurement-time.png`; their reviewed PNG bytes are unchanged.
- The import-options crop focuses on the three actual checkboxes; the current product's long, clipped instruction line is excluded. No production UI text or layout was altered.
- Identical legacy System settings artwork had also been used for Maintenance; the replacement in the affected Maintenance row now uses the correct production control.
- The Settings and System info labels in chapter 13 distinguish the native instrument interface from the current localized web navigation.

`gui-content-updates.json` retains the initial 210 narrow navigation, caption and legend corrections across the five editions, with the compiled English **System services** label corrected. The follow-up navigation evidence is recorded in the three reviews linked from [the navigation review](gui-navigation-review.md). The optional PDF import normalizer adds 156 separate English fragment mappings: 148 navigation mappings and eight digital-output procedure cells, using file, section and procedure-cell context to distinguish repeated controls. Maintained English editorial bodies cover chapters 9, 11 and 14. These changes preserve technical parameters, scientific examples and safety requirements.

## Visual review

Before the digital-output follow-up, every original inventory image, all 305 raw captures and all 249 final images were visually reviewed. English native figures and shared icons received individual full-size review. The initial localized figures received complete per-language contact-sheet review, with full-size inspection of annotation-heavy figures, montages and wrapped controls. All 35 activation/enrolment final images received individual full-size review. Independent subagents reviewed the native and web sets; the primary agent additionally inspected the English sheets, complex final figures and supplemental English/German/French images.

The digital-output follow-up adds 20 individually reviewed control crops, and all 45 component panels exactly match their genuine source pixels. The previous 249 images and their review records remain unchanged. [The digital-output review](gui-digital-output-review.md) records the four illustrated steps, actual row values, localized labels and source provenance.

Review fixed the web System info crop, the date-stepping arrow in wrapped toolbars, four translated alarm outlines/leaders, and Italian gate-list/error-log header collisions. Every changed figure was reopened after its final render. There are no unresolved annotation findings. Each final visual review signs the exact published image SHA-256 in `gui-screenshots.json`; rerendering a changed image invalidates the matching review.

Detailed private evidence is under `output/gui-capture/native/annotated-*-review.json`, `output/gui-capture/web/annotated-review.json`, `output/gui-navigation-review/annotated-*-review.json` and the capture provenance reports. The versioned manifest retains the per-image reviewer, method, notes and reviewed hash without requiring those local files for normal builds.

## Validation

`npm run manual:check`, `npm run translations:check` and `npm run screenshots:check` pass in the isolated digital-output build snapshot. They verify all 105 chapter documents, matching localized screenshot paths, all 74 original obsolete GUI assets superseded, complete annotation coverage, 269 reviewed image hashes and the unchanged hashes of 37 preserved illustrations. Optional import mapping passed unchanged/idempotent dry runs on all 21 English documents and editorial chapters 9, 11 and 14. The navigation pass verified 86 scoped imported-HTML cell probes, including the two different Start steps and cartridge parent/child actions; the digital-output pass additionally verified its eight scoped imported cells.

The navigation pass's full five-language website/PDF build passed. Its stable reviewed build is retained in ignored `output/gui-navigation-review/final-site/`; each PDF contains 21 chapter entries and 178 images. Those reviewed PDFs contain 172 English, 181 German, 184 French, 175 Italian and 182 Spanish pages. Print rendering keeps large procedure images inside the same unbreakable row as their instructions and keeps each illustrated enrolment list item together. Single illustrations and their figure captions are grouped, including the preserved cartridge hardware illustration.

Browser review passes for **150 chapter views covering 70 documents**, with desktop, 390 px and 320 px layouts. Every referenced GUI image loads in its matching language, full-size image links and actual image-zoom dialogs work, icons retain their intended size, and there are no browser errors or page-width overflow. The revised navigation/download wording is checked in source and in the built pages.

The navigation pass's PDF verification finds exact decoded RGB matches for all 73 expected GUI images in each edition (**365 matches**), with every placement inside its page. All **269 image/caption/instruction pairs** remain together. Evidence is retained in `output/gui-navigation-review/browser-review/report.json`, `pdf-image-verification.json` and `pdf-pair-verification.json`.

The primary agent individually inspected 14 final English PDF pages; independent subagents inspected 63 German/French and 26 Italian/Spanish pages, for **103 reviewed pages**. These cover every new activation/enrolment screen and the affected native/web procedures, including earlier pagination and localized-control findings. No screenshot or navigation findings remain in the reviewed scope. Exact PDF hashes, per-page render hashes and review notes are retained in `output/gui-navigation-review/pdf-review-en-final/report.json`, `pdf-review-native-localized.json` and `pdf-review-web-localized.json`.

The digital-output pass's isolated five-language website/PDF build also passed. Its stable reviewed copies are in `output/gui-digital-output-review/final-site/`; each PDF contains 21 chapter entries and 182 images, with 170 English, 182 German, 184 French, 175 Italian and 181 Spanish pages. All 77 expected GUI images per edition exactly match their decoded source RGB (**385 matches**), and all placements are inside their page. Browser review verifies 15 table views at desktop, 390 px and 320 px widths, 60 image/cell comparisons and 20 actual image-zoom dialogs. The primary agent and independent subagents individually reviewed 15 affected PDF pages across all five editions. The table header stays with its first step, and steps 4–7 keep each small screenshot with its instruction and explanation.

The initial replacement pass refreshed `public/`. Independent work in the shared checkout continues to rebuild that generated tree and the shared `output/pdf/` reports for other manual edits. Follow-up PDF acceptance therefore signs the stable owned `final-site/` copies rather than asserting that the concurrently generated public PDFs retain those hashes. The latest shared-checkout content checks report unfinished chapter 10 scheduler images and translation changes from that independent work; the validated chapter 6.6 sections and 20 new images match the reviewed snapshot. No unrelated source edits were reverted.

The sibling `gui`, `bactoserver` and `bactoweb` worktrees remain clean.
