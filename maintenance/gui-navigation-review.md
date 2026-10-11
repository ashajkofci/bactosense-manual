# Current GUI navigation review

Reviewed on 11 October 2026 for the English, German, French, Italian and Spanish editions. Menu-bearing instructions in chapters 6–17 were checked against the current sibling GUI and web sources, compiled native translation catalogs and the disposable demo interface. The remaining chapters were searched for navigation instructions; chapter 20's Home references now name the Home screen and Settings menu.

## Evidence

| Interface | Revision | Verification |
| --- | --- | --- |
| Native GUI | `afa2595ffe3b9d8dda369d22805fef5b266b5547` | Production QML/resources and compiled `.qm` translations; actual mouse clicks through 51 route states per language |
| Demo Bactoserver | `26b9cbaad199dc1387d1a8ace72fef02b3fa1c64` | Isolated test-mode instance with copied demo data |
| Web GUI | `515cb39e9d12493103c3a63319b8964022650365` | Current Angular controllers/templates/translations and the previously reviewed local API-backed captures |
| BactoCloud | Current sibling source | Organization navigation, displayed actions and permission guards; no live account session or cloud operation |

The native runtime passed 255 actual route states across all five languages, including Basic, Advanced and Admin menu differences. Confirmation text and the effects of Save, Apply, export/import, run, reboot and delete were checked in source without executing those actions. Switching measurement modes wrote only private demo mode settings and corresponding audit events. No package was activated and no instrument was enrolled.

Detailed versioned evidence is in [the native review](gui-navigation-native-review.json), [the additional chapter review](gui-navigation-root-review.json) and [the web/cloud review](gui-navigation-web-review.json). These record section-level changes, source excerpts/hashes, actual localized labels and verification boundaries. Private click logs and the complete route matrix are in ignored `output/gui-capture/activation/navigation-review.json`.

## Corrected routes and actions

| Manual area | Current route or action |
| --- | --- |
| Settings | Home → Settings opens the settings menu. Home itself is a measurement dashboard. |
| Digital/analog outputs | Settings → Online mode settings → the relevant output screen. Test outputs also exists under Maintenance and requires Admin/Service, an idle instrument and PLC mode disabled. |
| Modbus and network services | Settings → System settings → System services. Apply saves the settings; reboot only when prompted. |
| Scientific Package | Settings → System settings → Upgrades → Upgrade → activation-key entry → OK. Use Admin while idle with PLC and Demo mode disabled; follow the success/restart message and verify Activated. |
| Management Package | After licensing, Settings → System settings → System configuration → Advanced user management mode → Save → OK. Audit trail is under Settings → Logs. |
| Own PIN | Basic users open Change password directly under Settings. Advanced/Admin users use System settings → Users → selected profile → Edit → Change PIN. Admin can change the PIN of Basic/Advanced profiles as well as their own. |
| NTP | Settings → System settings → Date & time → Time synchronization settings. Test NTP checks reachability; OK saves settings. |
| Online measurement | Home → Mode → Online mode → Back → Start opens the online wizard. Its later Start control starts the configured measurement schedule. |
| Manual protocols | Home → Mode → Manual mode → Back → Measure opens the manual wizard. New returns to the protocol list after a completed protocol. |
| Historical results | Settings → Logs → Results (manual mode) or Results (online mode). The native historical-bucket labels remain English where the compiled catalog falls back to English. |
| Result export | Export series selects a range/name filter; a long press selects a replicate group for Export; the single-result view exports one measurement. |
| Gate editing | Settings → Gate settings. With New, choose a template compatible with the installed cartridge. An edited set offers Save or Save as new set; a new template uses Yes. |
| Cartridge procedures | Settings → Maintenance → Cartridge change → Change cartridge, Install cartridge or Remove cartridge. Basic users open Cartridge change directly under Settings. |
| Maintenance | Settings → Maintenance opens Intervention log, Self-check, Delete old measurements and System update. The update list selects a USB source or online repository; Update requires Yes. |
| Error clearing | Settings → Logs → Error log → Clear errors. Basic, Advanced and Admin users can clear resolved errors while idle. |
| Native cloud enrolment | Settings → System settings → BactoCloud → Cloud Settings → Enroll. Check Enrolled and Organisation after following the messages. |
| Cloud inventory | Header organization selector → Organisation Settings → Instruments. Enrol instrument and unlink are permission-dependent actions. |
| Web results | Results contains separate measurement-mode tables and downloads. FCS links are at the right of each result row. |
| Web plots | Plots selects one measurement timestamp. Download GIF exports up to 60 latest Online mode plots, independently of the slider position. |
| Web interval and reboot | Settings accepts 30–360 minutes and SAVE. Admin/service accounts can select Reboot in the user menu and confirm it. |

Button names were checked in the compiled native catalogs rather than by choosing a duplicate entry from a `.ts` source. This matters for, among others, French Start immediately, Spanish Rename, German Clear errors, the singular Alarm menu label and the repeated German Einstellungen entries. The translated text identifies those actual controls.

## Images

Four individually reviewed, annotated screenshots illustrate Scientific Package activation in each language. Chapter 14's four native enrolment positions now use matching current localized captures. The shared Settings-menu capture serves both procedures. The supplemental catalog adds 35 final images from 30 individually reviewed raw captures; each final review signs its exact published SHA-256 in [the screenshot manifest](gui-screenshots.json).

The five `web-plots-date-range.png` files were renamed to `web-plots-measurement-time.png` because the slider selects a timestamp. Their reviewed PNG bytes are unchanged. The four superseded native cloud images are privately archived and removed from published assets.

Forty procedure illustrations that accompany a Settings instruction now show the current localized Settings control. Home icons remain with steps that actually return to Home. Print rendering keeps each large procedure screenshot with its instruction, each illustrated enrolment step together, and figure captions with their illustrations.

## Boundaries

The BactoCloud unlink confirmation warns that uploads stop and existing cloud measurements are deleted, while the current backend handler retains historical measurements when removing the association. The manual reports the displayed warning and asks users to export needed measurements first; it makes no retention guarantee. This source discrepancy is recorded in the web/cloud review. No unlink was attempted.

The native review used the real Cocoa/OpenGL interface. Docker integration was unavailable on this machine; this work changed manual content and capture helpers, with sibling product sources untouched. Hardware protocols, live activation, cloud account actions and remote service access were not exercised.

Website/PDF build results and final layout checks are recorded in [the screenshot review](gui-screenshot-review.md).
