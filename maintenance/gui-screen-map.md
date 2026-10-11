# Screenshot state map

Checked against the local `../gui` and `../bactoweb` sources on 2026-10-11. These are capture instructions, not changes to the product repositories.

## Native GUI capture shell

`../gui/AGENTS.md` requires integration coverage for product workflow changes. Screenshot capture does not modify GUI behavior. Reuse the production `qrc:/UILoader.qml` shell, with real demo API data, using the bootstrap in `test/integration/IntegrationWorkflowTestCase.qml:845`:

1. Set `Models.System.saved_port_web` to the disposable API port, select English, log in as the local fixture Admin, and fetch status, settings, and data.
2. Call `Models.Protocols.setBucket("manual")`, clear key filters, reset dates, and open the real WebSocket.
3. Instantiate `Qt.createComponent("qrc:/UILoader.qml").createObject(captureRoot)`.
4. `findChild(ui, "navigationHost").navigateTo(fullQrcUrl, true)` changes screens. `screenLoader` and `modalLoader` are the shell's object names. Wait for non-null loader items and their first rendered frame before capture.
5. Capture the whole 800 by 480 shell; dialogs belong to the same shell. Do not build a replica of a screen or replace API values with arbitrary screenshots.

The existing test helpers find menu views by the `menuButtonModel` property, then click the delegate named `menuButton` plus its model index. Global action buttons are named `actionBarButton0` to `actionBarButton4`. Match unnamed buttons by `text` plus the `visuallyDisabled` property; a plain label is not a button. Home actions expose `label` and `clicked`.

## Native states and replacements

Use prefix `qrc:/controllers/settingsScreens/` for settings controllers and `qrc:/controllers/globalScreens/` for global controllers.

| Manual image / purpose | Current screen and preparation | Controls and review points |
| --- | --- | --- |
| 8-2 `asset-8dd01c5c0a3f.png`: alarm configuration | `SettingsAlarmsScreen.qml`; call `Settings.initializeTempAlarms()` before navigation; select an enabled alarm with `.currentIndex`. | Existing six callouts remain: alarm list / enabled checkbox, Name, Source, Condition, Threshold, Display alarm / Color. Current screen also has Sound / Play sound and optional BactoSwitch Stream. Threshold count units are `[1/mL]`, ratio/cartridge units `[%]`. |
| 8-3 `asset-1ac20898071f.png`: alarm sources | Same screen plus its source field's `showCheckList(metricsAndComputationKeys, selectedSource)`. | `metricsAndComputationKeys` contains current cartridge metrics, computations, then `Cartridge Remaining`. To show cartridge source after dismissing the list, select it and use a `<` threshold expressed as a percentage. |
| 8.4 special export button and folder panel; 12.1 folder panel | `ExportAllFolderNameScreen.qml`; `System.folderName` and USB list arrive through real API. | Bottom labels: Cancel, Refresh USB list, Import settings, Export diagnostics, Export all. `exportUsbList`, `exportUsbRowN` identify USB delegates. There is no separate Export settings button; diagnostics contains settings. |
| 8.4 import options `asset-3445f2d05cf6.png` | `ImportConfigScreen.qml` after Import settings. | Three checkboxes read Import measurement settings, Import language settings, Import network settings. Capture options without submitting an import. |
| 8.6 network `asset-d8ec1a3e87c6.png` | `SettingsNetworkScreen.qml`. | `networkDhcp`, `networkStaticIp`; fields Static IP, Subnet mask, Gateway, DNS; current API IP appears at bottom left. Static fields remain disabled until DHCP is off. Capture static configuration by toggling the temporary GUI field without saving. Optional Wi-Fi depends on device version/configuration. |
| 8.7 time button and NTP `asset-53a90550e48e.png`, `asset-ac0fbb8d54d0.png` | `SettingsDateTimeScreen.qml`, then `SettingsTimeSync.qml` via middle action button. | Titles Define date and time / Time synchronization settings. NTP panel labels Sync Source, NTP Server / Modbus TCP, NTP Server 1, NTP Server 2; Reset / OK actions. Modbus choice is disabled when serviceModbus is false. |
| 8-4 `asset-7301dbe18d0b.png`: Home layout | `HomeScreen.qml`, plus `ModeSelectionScreen.qml` inset if preserving callouts 7 and 8. | Home is now the latest-result dashboard. Lower bar has Results, Settings, Mode, Measure in Manual mode; Online mode has Start / Next / Edit scheduler action. The former settings grid is now `SettingsMenuHomeScreen.qml`, reached by Settings. Use the actual dashboard as main image, place the operating mode choices in an inset if keeping the old nine-item legend. |
| Home / Settings / Maintenance / Network / Date icon crops | `HomeScreen.qml`, `SettingsMenuHomeScreen.qml`, `SettingsMenuSystemSettingsScreen.qml`, `SettingsMenuMaintenanceScreen.qml`. | Home Settings leads to the settings grid. Current system services menu label is Services. Grid positions are dynamic by role/variant; crop each rendered control by its actual bounds rather than old pixels. |
| 10-1 `figure-0ecc3fd1aba0ae.webp`: online trend | `AutoMainScreen.qml` under `qrc:/controllers/autoScreens/`; `Protocols.setBucket("auto")`, `System.mode="auto"`; clear filters, reset dates, update chart values. | `autoFullChartView`, `autoFullChartModel`, `autoFullChartFlickable`, `autoChartTimeSelector`. Select a time range with real points and correct count/ratio metrics. Settings button is at the top time selector. Avoid empty ranges or interpolating missing long data gaps. |
| 10-2 `figure-f099449be57ef2.webp`: trend configuration | Same screen; `findChild(ui,"autoChartTimeSelector").expand = true`. | `ratioZoomRail` left and `countZoomRail` right; time/name choices; Auto scale / Full scale / Custom scale / Log / Linear; one current unified metrics grid `measurementGrid`. Callouts 1–5 still apply, but old annotation boxes must move to the new row positions. |
| 11-1 `figure-1dc7da95b4adc8.webp`: ICC result montage | `SingleResultScreen.qml` with a real historical ICC result selected in `Data.filtered_vars[Data.data_index]`. Tap `resultPrimaryModuleInfo`, then popup `metricsPlotPreview`. | Main result detail now has no Manual-mode plot. Info opens `ModalMetricsInfo.qml`, containing all values, Gates, Protocol used, and plot preview. Tapping preview opens `ModalZoom.qml`. Montage needs the details screenshot plus both actual dialogs. Main fields: `resultSampleName`, `resultPrimaryModuleHeader`, `resultPrimaryModuleValue`. Actions Delete / Rename / Re-gate result / Export; page buttons remain. |
| 11-2 `figure-899e3c5869ed8f.webp`: ICC gates list | `SettingsGateSettingsScreen.qml`, Manual bucket; current cartridge must offer ICC gates. | `gateList`, `gateRowN`; row controls `gateDelete`, `gatePreview`, `gateDuplicate`, `gateEdit`. Add a clearly named custom gate through the disposable API before capture if one is absent. Default delete/edit controls must appear disabled. Gate types are filtered by cartridge. |
| 11-3 `figure-8dc71f8c5efcd4.webp`: TCC polygon editor and preview | Set `Settings.gates_to_edit` to a custom TCC set, `Settings.setTempGates(...)`; open `GateWizardScreen.qml`, click Next. Capture editor and Preview popup. | `.state` starts `nameType`, then `gates`. `gateEditor`, `gatePointSelector`; point labels/coordinates; remove/add icons. Preview is `ModalGatePreview.qml`, chart `gatePreviewChart`. Next advances to HNA lower limit; final action becomes Save. Geometry preview needs no sample dataset. |
| 11.4.3 procedural crops `cell-95fee81e2625`, `fd72b5bdcc2a`, `7440601f6ebb`, `ec7e624b3c7f` | Gate list copy/edit row, name step, polygon step, next HNA-limit step. | Crop the current rendered controls. Default sets cannot be edited. `gatePointSelector.setCurrentIndexAt(0,integer)` and `(1,fraction)` control exact values. Preserve 3–6 polygon-corner rule. |
| 12-1 `figure-f9252ec82a57de.webp`: system services | `SettingsSystemServiceScreen.qml`. | HTTP/HTTPS labels now read Enable HTTP web access / Enable HTTPS web access. Others: Enable Modbus TCP protocol, Enable VNC remote control, Enable FTP data access, Enable SMB access; ports on right. SSH only for service/factory. Admin screenshot should not expose service-only rows. |
| Users and settings (no large ch8 screenshot) | `SettingsUserManagementScreen.qml` after real `getUsersList()`; then Settings to `SettingsConfigurationScreen.qml`. | `userList`, `userRowN`; Settings / Delete / New / Edit. Inputs include Auto-logout (minutes), Password expiration (days), Minimum password length, Maximum failed login attempts. |
| Audit trail (no ch8–13 figure) | `SettingsAuditTrailScreen.qml` after fetching audit trail. | `auditTrailList`, `auditTrailRowN`; Date / User / Event / Parameter / Old value / New value; date-range action at bottom. Preserve real fixture audit entries. |
| Manual / Online wizard states | `ManualMeasurementWizardScreen.qml` under manualScreens; `AutoInstructionWizardScreen.qml` under autoScreens. | Call `System.initWizardState()` before entering Manual wizard. Name/protocol state is `nameProtocol`; subsequent Manual states infoAnalysis / infoMaintenance / analysis / result. Current mode chooser labels are translated from System.modeString. Sequence workflows exist for autosampler, but no screenshot in ch8–13 requires inventing an autosampler screen. |

## Existing annotations and minimal wording changes

- 8.8: old Auto/Manual selector and Go to protocol list are no longer on the settings grid. Current home lower bar opens Mode selection or Measure. Use a dashboard + mode inset and describe those visible controls. Settings opens the grid, where System settings / Maintenance / Logs / System info / Gate settings / Auto mode settings / Intervention info remain.
- 10.2.3: the full trend is reached from the Online-mode dashboard; update the sentence that calls the trend itself the home screen. The expanded selector still supports all five legend functions.
- 11.1: change “If you tap on the results” to tapping the result information icon. Describe the main dotplot as being in the result information window; tap that preview to open the full plot window. Keep ten callout numbers, moved to current controls.
- 12.2/12.3: match current Services menu and the HTTP/HTTPS web-access checkboxes shown in Figure 12-1.
- 13.7: current interface has Download GIF. The introductory sentence saying animation can only be exported through screen recording contradicts both the current UI and its own existing step 5.

## Scientific illustrations retained as source examples

Visually inspected `cell-564a3512838d.png`, `cell-374bfaa7d23b.png`, `cell-d44e977152e1.png`, `cell-67de70c6bd1f.png`, `cell-3dd4365d2ad3.png`, `render-fa85ea9255cb.webp`, and `cell-c2ba9a559620.png`. These are scientific plots already cropped without old GUI chrome. Their sample populations, arrows, gate positions and cited FL1 values are instructional evidence. Keep them as the original sample examples unless the original FCS and matching processing are recovered.

The mock record named “Beads, 4 populations” points to `mock/archive/manual/20150515-132849/FL1.png`, whose plot actually shows a broad dominant peak, unlike the manual's four-peak example. The new Sigrist Beads demo has different peaks as well. Neither is an accurate replacement for the manual's numerical comparison. `cell-4c2343e0bbfe.png` is an external flow cytometer comparison, not a BactoSense GUI screenshot.

## Current Bactoweb pages (chapter 13)

`../bactoweb` has no AGENTS file. Package version 3.2.0, AngularJS 1.5.9, Grunt build. Source routes in `app/scripts/app.js`: `#/` is dashboard, `#/results` is the results page; `#/:templateFile` loads `views/<templateFile>.html`. The dev proxy is hardcoded to 172.16.11.5:80, so capture should serve a staged build with its API/WebSocket/archive/export forwarded to the disposable demo API. `grunt build` and the current default task only build; `grunt locales` is a separate network task.

| Manual image | Current route and stable target |
| --- | --- |
| 13-1 `figure-57e499d51a174f.webp` | `#/` / `views/index.html`, `CountsCtrl`: dashboard tiles based on Status metrics, sample name, progress bar. Global header shows instrument state, language dropdown, Admin dropdown; sidebar `#sidebar`, header `#header`. Capture real idle or running state with matching callout 6. |
| `cell-0c18cf68589a.png`: FCS result link | `#/results`: scroll to Auto or Manual table. The ui-grid Result column contains the real clickable text `fcs` with `grid.appScope.downloadFCS(row.entity.fcsUrl)`. Crop a real row and the link. |
| `cell-836f089084c0.png`: ZIP date range | `#/results`: panel heading AUTO MODE RESULTS or MANUAL MODE RESULTS; button `[daterangepicker]`, followed by `button[ng-click="downloadZip('auto')"]` or manual. Capture without downloading. |
| `cell-9979275487c3.png`: summary downloads | `#/results`: DOWNLOAD RESULTS panel. Anchors have `download="...history_auto.xlsx"` etc and translated Download XLSX / Download CSV / Download PDF labels. Capture Auto/Manual rows. |
| `cell-0615055418e0.png`, `fec791f8e8fd.png`, `fb7fd241751c.png`: dotplot page/slider/play | `#/dotplots`: `button[ng-click="toggleAnimation()"]`, rewind/shiftBackwards/shiftForward controls, Download GIF/FCS, `rzslider`, `input[ng-model="vars.speed"]`, and current plot image. Wait for actual archive image. Capture with animation stopped. |
| `cell-6df7821e3a62.png`: interval settings | `#/settings`: `input[name="fAutoInterval"]` using `auto.autoInterval`; Save calls `update(autoForm,auto)`. Fields are disabled according to current role and mode. Do not save solely for capture. |
| `cell-71bc4e13a72d.png`: get screenshot | `#/diagnostics` / `views/diagnostics.html`: scroll to `button[ng-click="getScreenshot()"]` at page bottom, near screenshot image. This requires actual Qt GUI screenshot endpoint to work; obtain native shot separately if the headless fixture has no screen. |
| `cell-f60b02982fd9.png`: reboot dropdown | Global header Admin dropdown contains `openRebootModal()` and Sign out. Open dropdown only; do not click reboot. |
| `cell-6a3f9ce5d051.png`, `cell-fc64c36946da.png`: Home/System info procedure icons | Native GUI controls, not Bactoweb source. Crop Home and System info from current Qt capture. |

Current web auth accepts Basic credentials only for login, asks `GET /api/login?session=true`, then uses an expiring server session. Use the local demo account through the actual login form; do not retain the session in published screenshot provenance or URLs.

## Captured web evidence

The reusable harness is `scripts/gui-capture/web/`. It stages all current application source, views, fonts, translations and compiled theme LESS, using only the third-party vendor JS/CSS from the sibling repository's release archive. Dependency provenance is recorded in ignored `output/gui-capture/web/source-provenance.json`.

Captured and visually reviewed 15 states for each of English, German, French, Italian and Spanish, using the actual language dropdown and sidebar navigation. Raw files are `output/gui-capture/web/{en,de,fr,it,es}/<semantic-name>.png`. Whole screens are 2560×1600 physical pixels; `capture-evidence.json` crop bounds are 1280×800 CSS pixels at DPR 2. The final `review.json` records each reviewed PNG's dimensions and SHA-256.

Current product details affecting capture:

- The default six-month result filter omits the historical online fixture data. The capture chooses the product's translated All data range.
- The current Files column shrinks to 30 pixels when many metric columns are visible. The capture uses actual Hide Column menu actions to expose the complete `img | fcs` links.
- German, French and Italian Plots controls wrap Download FCS onto a second row. Their date slider is lower than in English and Spanish; use each locale's bounds.
- The current Save label stays English across locales because the source lacks a translation directive. Keep its actual rendered label.
- Italian and Spanish extra full-view `web-results.png` retain an existing plot title/scale-label overlap at the captured desktop width. The published download-summary, ZIP and FCS crops are clean.
- Each locale produced zero JavaScript errors. The source briefly requests an unresolved interpolation URL before loading the real archive plot; that transient 404 is logged, and the final loaded scientific image is verified before capture.

For the old Plots navigation arrow, use `web-dotplots.png` with its sidebar retained. For the old interval pair of arrows, use `web-settings.png` with Settings navigation and the interval field retained. For the old stepping/date pair, use the toolbar plus slider together from `web-dotplots.png`, or combine `web-dotplots-navigation.png` and `web-dotplots-date-slider.png`. The separate menu exception uses `web-user-reboot-menu.png`, with both Admin and Reboot visible.
