# Current GUI screenshot review

Captured and reviewed on 11 October 2026 from the local production GUI resources and a disposable demo Bactoserver.

The 36 obsolete GUI screenshot assets and 38 obsolete control/status assets are replaced at their existing chapter and table positions in all five editions. The final catalog contains 37 screenshots/crops per language and 29 shared icons: **214 reviewed images**, used by 415 document references. Descriptive paths distinguish both language and screen, for example `/img/gui/fr/alarm-configuration.png` and `/img/gui/icons/maintenance-button.png`. Superseded assets are archived locally in ignored `output/gui-capture/originals/` and removed from the published assets.

The eight scientific examples and 29 hardware/safety illustrations identified in the inventory retain their exact source SHA-256 hashes. Chapter 14's previously reviewed BactoCloud supplement remains outside the instrument/web replacement inventory.

## Capture sources

| Source | Revision | Capture method |
| --- | --- | --- |
| Native GUI | `afa2595ffe3b9d8dda369d22805fef5b266b5547` | Qt 5.15.19 Cocoa OpenGL, production QML and image resources, `grabToImage` at 2× |
| Bactoserver | `26b9cbaad199dc1387d1a8ace72fef02b3fa1c64` | Isolated test-mode server, copied demo archives and disposable settings/databases |
| Web GUI | `515cb39e9d12493103c3a63319b8964022650365` | Current Angular source/templates/translations/styles, Chromium at 2× |

Native capture produced 40 real interface states in each language (200 raw screenshots). Web capture produced 15 states/crops in each language (75 raw screenshots). The UI language is selected through the current interface. Neither sibling application source tree was edited. Web staging uses current application source and only third-party vendor files from the available distribution archive.

Software rendering was rejected during capture because it omitted masked Qt icons. The final native captures use Cocoa OpenGL and include the actual production controls. The fixture's USB helper is the shipped mock, enabled only inside the disposable runtime. The documentation IP is `192.0.2.50`. Owned Qt, API and Redis processes were stopped after capture.

## Demo state and scientific data

The images use the shipped demo measurements and their genuine plots. The ICC result example retains its recorded 104050 cells/ml and HNAP 35.64%. Its warning indicator is a teaching fixture using the current warning definition; the counts and plots are unchanged. Error-log examples use current E04, E15 and C02 definitions. The backend enum for the displayed E15 empty-sample error is `MixerInflationError`.

Temporary settings and fixtures expose the controls needed for the source annotations: digital input/scheduler, analog outputs, service ports, cartridge alarm source, editable/default/double gates, a four-vertex TCC polygon, HNA limit and self-check results. They modify the copied demo state only. The exact fixture provenance is retained locally in `output/gui-capture/runtime/capture-fixture-provenance.json`; the scripts reproduce it.

## Annotation and content decisions

The replacements retain **375 numbered callouts**, **25 letter/position callouts** (including a–d and X), the Home screen's A/B/C regions and 45 arrows. Callout targets and meanings are recorded per figure in `gui-screenshots.json`. Genuine crops and montages retain their aspect ratio; no control or reading is painted into a screenshot.

- The current Home screen is a measurement dashboard. Its footer annotations 7–9 now describe **Results**, **Mode** and **Measure**. Instructions enter the former settings menu through **Settings**.
- The ICC result figure includes its real information window and dotplot. The selected archive supplies FL1/FL2 and a histogram; it does not supply an SSC plot, so the screenshot does not imply one.
- TCC gate vertices a–d, coordinate columns 1–3, HNA limit 5 and preview 6 remain paired with the correct legend. The preview uses the real GUI plot.
- Support and service information is opened from the current direct **Support & Service** menu entry. Its caption and procedure match that entry.
- The current web navigation uses **Plots** and localized equivalents. Date stepping, slider, actual `fcs` link, ZIP selection and XLSX/CSV/PDF downloads are illustrated with their real controls. The GIF instruction matches the visible export control.
- The import-options crop focuses on the three actual checkboxes; the current product's long, clipped instruction line is excluded. No production UI text or layout was altered.
- Identical legacy System settings artwork had also been used for Maintenance; the replacement in the affected Maintenance row now uses the correct production control.
- The Settings and System info labels in chapter 13 distinguish the native instrument interface from the current localized web navigation.

`gui-content-updates.json` records 210 narrow navigation, caption and legend corrections across the five editions. These changes align the instructions with the captured controls while preserving technical parameters, scientific examples and safety requirements. The optional PDF import normalizer reapplies the English mapping and corresponding wording so re-extraction cannot restore obsolete screenshots.

## Visual review

Every original inventory image, all 275 raw captures and all 214 final images were visually reviewed. English native figures and shared icons received individual full-size review. All localized final figures received complete per-language contact-sheet review, with full-size inspection of annotation-heavy figures, montages and wrapped controls. Independent subagents reviewed the native and web sets; the primary agent additionally inspected the English sheets and complex final figures.

Review fixed the web System info crop, the date-stepping arrow in wrapped toolbars, four translated alarm outlines/leaders, and Italian gate-list/error-log header collisions. Every changed figure was reopened after its final render. There are no unresolved annotation findings. Each final visual review signs the exact published image SHA-256 in `gui-screenshots.json`; rerendering a changed image invalidates the matching review.

Detailed private evidence is under `output/gui-capture/native/annotated-*-review.json`, `output/gui-capture/web/annotated-review.json` and the capture provenance reports. The versioned manifest retains the per-image reviewer, method, notes and reviewed hash without requiring those local files for normal builds.

## Validation

`npm run manual:check`, `npm run translations:check` and `npm run screenshots:check` pass after application. They verify all 105 chapter documents, matching localized screenshot paths, all 74 obsolete GUI assets superseded, complete annotation coverage, 214 reviewed image hashes and the unchanged hashes of 37 preserved illustrations. Optional import mapping was checked for HTML/Markdown, the page-specific Maintenance control and repeated application.

The full five-language website/PDF build passes, and the complete generated site is refreshed in `public/`. Each PDF contains 21 chapter entries and 177 images. Print rendering keeps 16 GUI screenshot/caption pairs together and expands 15 wide GUI illustrations below their corresponding procedure instructions; small controls retain their icon size. This fixes unreadable procedure-column screenshots and the Italian/Spanish Home captions previously separated from their images.

Browser review passes for 85 chapter views covering all 45 affected documents across the five editions, with desktop, 390 px and 320 px layouts. Every referenced GUI image loads in its matching language, full-size image links work, icons retain their intended size, and there are no browser errors or page-width overflow. The focused review of the revised navigation/download wording also passed.

Final PDF verification finds exact decoded RGB matches for all 66 expected GUI images in each edition (330 matches), with every placement inside its page. All 80 GUI figure captions remain on a page with their corresponding screenshot. The generated and published PDF copies have matching hashes. Evidence is retained in `output/gui-capture/browser-review/report.json`, `pdf-image-verification.json`, `pdf-caption-verification.json` and the final PDF visual-review reports.

The primary agent visually inspected nine final English PDF pages, and the native-runtime subagent inspected 36 final translated pages. These cover Home, alarms, ICC/TCC montages, system services, the error log, web download formats, plot date controls and measurement settings. Every page passed, with no remaining layout or annotation findings. Their exact reviewed PDF hashes and page lists are retained in `output/gui-capture/pdf-review-en-final/report.json` and `pdf-review-agent.json`.

The sibling `gui`, `bactoserver` and `bactoweb` worktrees remain clean.
