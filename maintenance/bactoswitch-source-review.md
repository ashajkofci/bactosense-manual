# BactoSwitch manual: source and editorial review

The BactoSwitch manual in `manuals/bactoswitch/` was imported from the 69-page English user manual **UM_0001-02EN** (`UM_0001-02EN_User Manual BactoSwitch.pdf`, SHA-256 `2c8659b9ca4ccdcb711e85fa4c45ec88fff0bef63249afd3ad2ebaaebf29088e`). The PDF is a local reference input and is not committed. Chapters, section numbers and figure numbers follow the PDF; the BactoSense conventions for notices, tables, procedures and images apply.

## Figures

The images in `static/img/bactoswitch/` were rendered from the PDF at the visible size of each placed image (its clip region), so callout numbers and arrows drawn over the artwork are kept. GUI screenshots taken through a remote viewer had the viewer’s window bar removed. Two images used twice in the PDF are stored once (`tubing-cut-square.png`, `psu-cover-screws.png`).

The GUI screenshots are localized captures of GUI `2bddd04b` against Bactoserver `develop` (`8ae07bdd`). Both predate the automatic BactoSwitch detection (Bactoserver `v3`, GUI `2cdf7767`): the current Sample Lines page has no **Enable BactoSwitch** checkbox and names the lines “Stream N”, so section 4.6 and its screenshots need a recapture against GUI `qt514` and Bactoserver `v3`. The captures were recorded with the BactoSense method ([native runtime](../scripts/gui-capture/runtime/README.md#bactoswitch-manual-screens)): 22 native GUI states and one web interface state per language, published as `static/img/gui/<locale>/bactoswitch-*.png` with highlights computed from the captured control bounds. Their sources, fixture, renders and visual reviews are recorded in `gui-screenshots.json` (catalog `bactoswitch`). Three images keep the English PDF artwork in every language:

- `gui-digital-inputs-line.png` and `gui-digital-inputs-scheduler.png` (5.2.3): the current GUI does not show the **Line** box for the BactoSwitch protocol (see below), so the documented state cannot be captured.
- `bactocloud-multi-line.png` (5.2.1): a BactoCloud screen, outside the instrument GUI and web interface.

The capture fixture runs in the disposable runtime only. It presents a connected four-valve BactoSwitch through the product's status keys, enables BactoSwitch in the GUI's in-memory settings, assigns the shipped demo series *DWTP TCC after SSF* (105 hourly measurements, 27 February – 25 March 2026) round-robin to the default lines 1–4 without changing any count or plot, and uses unsaved form drafts. All four lines therefore show the same source water.

## Product issues found during capture

| Product | Issue |
| --- | --- |
| Bactoweb | Bactoserver `v3` (commit `26eb4a17`) removed `sosdEnabled`: the BactoSwitch is detected automatically and reported as the status key `sosd_connected`. The GUI followed in `2cdf7767` (it now uses `Status.isBactoSwitchConnected`). Bactoweb `v3` and `v3_modern` still read `settings.sosdEnabled` (`scripts/forza/Navigation.js`, `views/bactoswitch.html`, `views/diagnostics.html`, `views/settings.html`), so its BactoSwitch menu, page and diagnostics rows stay hidden. The line list itself is unchanged: `sosdConfig` (`streamId`, `streamName`, `enabled`, `color`, `gateSetName`), with `sosdSchedulerConfig` and `autoModeUseSOSDStream`. |
| GUI | `SettingsDigitalInputsScreen.qml` shows the **Line** box only when `protocol.indexOf('sosd_auto') > 0`; the protocol key is `sosd_auto` itself (index 0), so the box never appears (since commit `9f223cd2`, which replaced `=== 'sosd_auto'`). The variants `sosd_auto_cfda` and `sosd_auto_fib` also start at index 0; `startsWith('sosd_auto')` covers all three. |
| GUI translations | DE, FR, IT and ES show **Water Analysis with BactoSwitch** in English; IT and ES also show the **Alarm** tile in English. FR labels open valves **OUVERTURE** (“opening”) instead of *OUVERT*. The manuals quote the labels as displayed. |

## Corrections to the source

| Section | Source | Online edition | Reason |
| --- | --- | --- | --- |
| 2.2 | “Numbers refer to Figure 1-1, view B.” | Figure 2-1, view B | The light indicators (6, 7) are in Figure 2-1. |
| 2.6 | Operating and storage temperature “5 °C – 30 °C (34 °F – 86 °F)” | 41 °F – 86 °F | 5 °C = 41 °F. |
| 4.3.1, step 1 | Screw head “less than 7 mm (0.15”) thick” | 0.28″ | 7 mm = 0.28″. |
| 4.3.1, step 1 | “at least 30 kg (177 lbs)” | 30 kg (66 lbs) | 30 kg = 66 lbs. **Confirm the required load with engineering**; 177 lbs would correspond to 80 kg. |
| 4.5 | Stable power supply “as specified in … section 2.5” | Technical data (2.6) | Section 2.5 is the power supply type plate. |
| 4.5, step 3 | “Plug the J, E or G-type plugs” | J, E, G or B-type plugs | Table 4-2 lists type B (USA) supplies. |
| 4.5, step 9 | “See section 2.6 for more information on the status light” | Light indicators (2.2) | The status light is described in 2.2. |
| 4.5.1 | Title “Modifying the standard power supply unit with a different” | … with a different connector | Truncated title; wording from the BactoSense manual. |
| 4.6 and others | “4.6 Lines configuration” | Line configuration | Matches the section title. |
| 8.3 | “Ship the BactoSense to bNovate” | Ship the BactoSwitch | The section describes returning the BactoSwitch. |
| 8.4 | “Plastic (ABS VO)” | ABS V0 | Flammability class V-0. |
| Various | “BactoSwich”, “90o”, “85 oC”, “1 mm2” | BactoSwitch, 90°, 85 °C, 1 mm² | Typography. |

## Editorial decisions

- **Retained as in the source:** 4.5.1 “It is forbidden to modify or repair the BactoSense instrument.” The chapter 4 introduction instead states that modification of the BactoSwitch by non-agreed technicians voids the warranty. Confirm whether this bullet should name the BactoSwitch.
- **Storage temperature:** 2.6 gives 5 °C – 30 °C, while 8.1 gives 10 °C – 30 °C for storage. Both are kept as published; confirm the binding range.
- **GUI labels:** the PDF screenshots show **Filter by line**; the current BactoSense manual (10.7) documents the newer label **Filter by stream**. The BactoSwitch text follows its own screenshots.
- **Safety symbols (1.3):** the legend adds the protective-gloves notice, which the PDF uses in 4.4, 7.1 and 8.1 without listing it. The intro sentence and notice titles reuse the BactoSense manual’s wording.
- **Pictograms (1.4):** as in the BactoSense manual, work-step hand and screenshot pictograms are omitted; information icons become info boxes.
- **Notice types** follow the PDF symbols: DANGER → `danger`, EXPLOSION → `explosion`, WARNING → `warning`, CAUTION → `caution`, gloves → `gloves`, information → `info`. Notices printed inside procedure tables are table-cell notices.
- **Cross-references to the BactoSense manual** (“please refer to the BactoSense user manual”) link to the matching section under `/bactosense/`, so the build verifies them.

## Open questions for the next source revision

Found while translating; the online edition keeps the published wording until the source is revised. Fix the English first, then all four translations.

| Section | Question |
| --- | --- |
| 1.2 | CISPR 11:2024 is an EMC standard but is listed under the applied safety standards. |
| 2.1, item 15 | “Pressure regulator set clearance” is unclear; translators rendered it as access for adjusting the pressure regulator. |
| 2.3 | “The open water lines (each of which can be open or closed)” contradicts itself; it probably means the water from the open lines. |
| 4.3.1, Figure 4-1a/b | The serial-number split (up to 960015, from 960016) does not say whether it refers to the BactoSwitch or the BactoSense. |
| 4.5 | “It is recommended that the transformer be connected …” probably means the power supply unit (same wording as the BactoSense manual). |
| 4.8 | “If the pressure drop is above 0.3 bar, the flow rate should adjust automatically within the limits after factory calibration” is unclear. |
| 5.2.2 | The web interface now labels the section **Online mode results**, not “Auto-mode results”, and its screenshot column reads **Stream ID** where the text says “Line ID”. |
| 7.1.2 | Gives only the precautions, not the tubing replacement procedure; it could refer to [Installation of the input lines](../manuals/bactoswitch/04-installation.md). |

## Translations

German, French, Italian and Spanish follow `translation-glossary.md`, including its BactoSwitch terms. Passages shared with the BactoSense manual (safety notices, usage restrictions, power supply modification, storage, returns, disposal, contact, publisher notice) reuse the approved BactoSense wording of each language. Control labels come from the GUI catalogs `../gui/gui_<locale>.ts`, mapped through `gui_en-US.ts` where the English display text differs from the catalog key; web interface labels come from `../bactoweb/app/assets/locales/locale-<locale>.json`. The Italian and Spanish welcome pages carry the same machine-translation notice as their BactoSense editions.
