# GUI screenshot inventory

Reviewed 111 unique candidate assets: 36 GUI screenshots, 38 control/status icons, 8 scientific examples and 29 hardware/safety illustrations. GUI screenshots include 28 native Qt screens/crops/composites and 8 local instrument web screens/crops/composites.

The JSON companion records every existing English/German/French/Italian/Spanish image occurrence with document path, line, source page and surrounding procedure text. Source-page anchors and figure numbers should stay in place. Current captures need a separate visual review after generation.

## Compatibility findings

- **Home/navigation changed:** current home is latest result + Results/Settings/Mode/Start; the old tile grid lives in the Settings menu, and Auto/Manual selection lives behind Mode. Figure 8-4 labels 7 and 8 and several navigation steps need adaptation to the real UI.
- **ICC result is a three-image composite:** use the same measurement for main view, all-results dialog and dotplot dialog. The old source accidentally uses a Beads Analysis plot popup. Keep labels 1–10 and a real warning target for label 5.
- **TCC gate editor is a two-image composite:** preserve labels 1–6 and polygon vertices a–d; both panels must agree with the shown coordinate values.
- **Scientific data stays:** histogram valleys, bead peaks, scatter populations and polygon bounds are referenced numerically in the text. Arbitrary current demo graphs would change the teaching example.
- **Local web interface is separate:** chapter 13 screenshot replacements come from the instrument web UI, not from BactoCloud.
- **Source PDF archive stays:** old original pages remain provenance; replacing live manual pictures does not rewrite the publisher PDF.

## GUI screenshots

| ID | Printed page | Figure / operator purpose | Form | Capture key | Annotations |
| --- | --- | --- | --- | --- | --- |
| gui-source-111 | 30 | Figure 5-4 BactoSense system services configuration menu. | full_screen | system-services | None |
| gui-source-009 | 39 | Figure 6-5 Digital inputs configuration | full_screen | digital-inputs | 1, 2, 3, 4, 5 |
| gui-source-010 | 43 | Figure 6-6 Analogue output settings | full_screen | analog-outputs | 1, 2, 3, 4, 5 |
| gui-source-011 | 45 | Figure 6-7 Testing analogue and digital outputs | full_screen | test-outputs | 1, 2, 3, 4, 5, 6, 7 |
| gui-source-013 | 66 | Import-settings options with measurement/language/network categories and Cancel/Import settings. | full_screen | import-settings | None |
| gui-source-017 | 66 | Special import/export screen with a demo USB storage entry selected, folder-name field and Import settings/Export diagnostics/Export all. | full_screen | special-import-export | None |
| gui-source-018 | 67 | Figure 8-2 Alarm configuration in the BactoSense graphical user interface. | full_screen | alarms | 1, 2, 3, 4, 5, 6 |
| gui-source-019 | 68 | Figure 8-3 BactoSense alarm sources. | crop | alarm-source | None |
| gui-source-022 | 69 | Network settings with DHCP checkbox and static IP/netmask/gateway/DNS visible. | full_screen | network | 1, 2 |
| gui-source-023 | 70 | Date/time calendar and Time synchronization settings control. | full_screen | date-time | None |
| gui-source-025 | 70 | NTP server source selected and two NTP server fields visible. | full_screen | time-sync | None |
| gui-source-026 | 71 | Figure 8-4 The Home menu of the BactoSense user interface. | full_screen | home-structure | 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C |
| gui-source-052 | 91 | Figure 10-1 Auto mode results overview plot | full_screen | auto-results-chart | arrow |
| gui-source-053 | 91 | Figure 10-2 Auto mode plot settings | full_screen | auto-chart-settings | 1, 2, 3, 4, 5 |
| gui-source-054 | 98 | Figure 11-1 Display of an ICC measurement result. | composite | icc-result-composite | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 |
| gui-source-055 | 100 | Figure 11-2 List of available gating sets and options to copy and create new sets. | full_screen | gate-settings | 1, 2, 3, 4, 5, 6, 7, 8, 9 |
| gui-source-057 | 106 | Figure 11-3 Gate settings for TCC | composite | tcc-gate-editor-composite | 1, 2, 3, 4, 5, 6, a, b, c, d |
| gui-source-058 | 107 | ICC gate polygon-coordinate editor. | full_screen | icc-gate-polygon | None |
| gui-source-061 | 107 | HNA lower-limit step of gate wizard; FL1 value visible with Preview and Save. | full_screen | hna-limit | None |
| gui-source-072 | 114 | Special import/export screen with selected demo USB, folder name and Export diagnostics/Export all. | full_screen | special-import-export | None |
| gui-source-073 | 115 | Figure 12-1 The Manage services view of the BactoSense user interface. | full_screen | system-services | None |
| gui-source-076 | 120 | Figure 13-1 Start page on web user interface | full_screen | web-dashboard | 1, 2, 3, 4, 5, 6 |
| gui-source-077 | 120 | Results page with one row of img/fcs links, plus enlarged detail of FCS link region. | composite | web-fcs-download | X, arrow |
| gui-source-078 | 121 | Auto mode results section header with selected date range and Download Zip button. | crop | web-zip-download | None |
| gui-source-079 | 121 | Results page with Download Results section, plus enlarged panel with xlsx/csv/pdf links for Auto/Manual/validation. | composite | web-all-results-download | arrow |
| gui-source-080 | 122 | Dotplots page with left Dotplots navigation selected and populated plots. | crop | web-dotplots | arrow |
| gui-source-081 | 122 | Auto-mode settings with sample name, interval field and Save; left Settings entry selected. | crop | web-measurement-interval | arrow-1, arrow-2 |
| gui-source-082 | 122 | Top of Dotplots page with playback controls and time-range slider; pause/no active animation for capture. | crop | web-dotplots-play | arrow |
| gui-source-083 | 122 | Top of Dotplots page with previous/next controls and date-range slider. | crop | web-dotplots-range | arrow-1, arrow-2 |
| gui-source-086 | 126 | Figure 15-1 Intervention info screen | full_screen | intervention-info | None |
| gui-source-102 | 139 | Warning detail screen with title, warning icon, explanation, measurement context and plot thumbnails; old example is high SSC baseline. | full_screen | warning-details | None |
| gui-source-103 | 141 | Non-critical E15 Empty sample error detail with amber warning/error glyph and recommended cleaning action. | full_screen | noncritical-error-details | None |
| gui-source-104 | 145 | Critical E04 Missing cartridge detail with red critical glyph and remedy. | full_screen | critical-error-details | None |
| gui-source-105 | 149 | Figure 16-1 Error logs | full_screen | error-log | 1, 2, 3, 4, 5 |
| gui-source-109 | 150 | Completed automatic self-check result with PASS/FAIL/SKIP indicators and Run/Rerun action. | full_screen | self-check | None |
| gui-source-110 | 150 | Populated error-log screen with Clear Errors button outlined/highlighted. | crop | error-log-clear | frame |

### gui-source-111: system-services

Old asset: `/img/manual/asset-bf9346bebae6.png`. Current source: `../gui/controllers/settingsScreens/SettingsSystemServiceScreen.qml`.

System services with HTTP/HTTPS/Modbus TCP/VNC/FTP toggles and their communication ports.

Required context: Complete communication-services overview; native Qt capture. Can share capture with Fig12-1 if both references retain matching features.

References: en `docs/05-installation.md:229` (printed p30); de `i18n/de/docusaurus-plugin-content-docs/current/05-installation.md:229` (printed p30); es `i18n/es/docusaurus-plugin-content-docs/current/05-installation.md:229` (printed p30); fr `i18n/fr/docusaurus-plugin-content-docs/current/05-installation.md:229` (printed p30).

### gui-source-009: digital-inputs

Old asset: `/img/manual/asset-6d53ddd3d47c.png`. Current source: `../gui/controllers/settingsScreens/SettingsDigitalInputsScreen.qml`.

Enable digital inputs; select state 1100; configure sample/protocol/gate; show Start immediately and Scheduler activated with interval.

Callouts: 1 — Enabled/disabled toggle; 2 — Sample name, Protocol and Gates fields; 3 — Input-state list selection; 4 — Start immediately checkbox; 5 — Scheduler activated checkbox and interval.

Required context: Admin role; configurable input state visible; all callouts must land on their current controls.

References: en `docs/06-io-box.md:136` (printed p39); de `i18n/de/docusaurus-plugin-content-docs/current/06-io-box.md:136` (printed p39); es `i18n/es/docusaurus-plugin-content-docs/current/06-io-box.md:136` (printed p39); fr `i18n/fr/docusaurus-plugin-content-docs/current/06-io-box.md:136` (printed p39).

### gui-source-010: analog-outputs

Old asset: `/img/manual/asset-9b0542204c11.png`. Current source: `../gui/controllers/settingsScreens/SettingsAnalogOutputsScreen.qml`.

Select Port 1; show TCC source and lower 4 mA/upper 20 mA mappings; Log scale checkbox.

Callouts: 1 — Output-port selection; 2 — Result-source selector; 3 — 4 mA lower limit; 4 — 20 mA upper limit; 5 — Log scale checkbox.

Required context: Admin role; all 5 original legend meanings remain valid; ports and units must remain legible.

References: en `docs/06-io-box.md:210` (printed p43); de `i18n/de/docusaurus-plugin-content-docs/current/06-io-box.md:210` (printed p43); es `i18n/es/docusaurus-plugin-content-docs/current/06-io-box.md:210` (printed p43); fr `i18n/fr/docusaurus-plugin-content-docs/current/06-io-box.md:210` (printed p43).

### gui-source-011: test-outputs

Old asset: `/img/manual/asset-c774c093b426.png`. Current source: `../gui/controllers/settingsScreens/SettingsTestOutputsScreen.qml`.

Show all four digital test values, both analog ports and individual/combined Test controls plus Reset.

Callouts: 1 — Digital-output values; 2 — Digital-output Test button; 3 — Test all digital and analog outputs; 4 — Test both analog ports; 5 — Reset outputs; 6 — Set/test analog Port 2; 7 — Set/test analog Port 1.

Required context: Use demo backend only; every callout must identify the right current Test control; do not trigger physical outputs.

References: en `docs/06-io-box.md:236` (printed p45); de `i18n/de/docusaurus-plugin-content-docs/current/06-io-box.md:236` (printed p45); es `i18n/es/docusaurus-plugin-content-docs/current/06-io-box.md:236` (printed p45); fr `i18n/fr/docusaurus-plugin-content-docs/current/06-io-box.md:236` (printed p45).

### gui-source-013: import-settings

Old asset: `/img/manual/asset-3445f2d05cf6.png`. Current source: `../gui/controllers/globalScreens/ImportConfigScreen.qml`.

Import-settings options with measurement/language/network categories and Cancel/Import settings.

Required context: Same categories described in table; do not actually import/reboot.

References: en `docs/08-general-operations-and-configurations.md:154` (printed p66); de `i18n/de/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:154` (printed p66); es `i18n/es/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:154` (printed p66); fr `i18n/fr/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:154` (printed p66).

### gui-source-017: special-import-export

Old asset: `/img/manual/asset-f4dd80d89669.png`. Current source: `../gui/controllers/globalScreens/ExportAllFolderNameScreen.qml`.

Special import/export screen with a demo USB storage entry selected, folder-name field and Import settings/Export diagnostics/Export all.

Required context: Show available storage; do not show an empty USB list as a successful settings-import example.

References: en `docs/08-general-operations-and-configurations.md:154` (printed p66); de `i18n/de/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:154` (printed p66); es `i18n/es/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:154` (printed p66); fr `i18n/fr/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:154` (printed p66).

### gui-source-018: alarms

Old asset: `/img/manual/asset-8dd01c5c0a3f.png`. Current source: `../gui/controllers/settingsScreens/SettingsAlarmsScreen.qml`.

Select one enabled alarm; show name, source, comparator, threshold, Display alarm and color. Other alarms visible in list.

Callouts: 1 — Alarm selection and enabled state; 2 — Selected alarm name; 3 — Result-source selector; 4 — Greater-than/less-than condition; 5 — Threshold field; 6 — Display-alarm and color controls.

Required context: Advanced/Admin role; exactly six source legends; use a meaningful demo threshold and consistent source units.

References: en `docs/08-general-operations-and-configurations.md:169` (printed p67); de `i18n/de/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:169` (printed p67); es `i18n/es/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:169` (printed p67); fr `i18n/fr/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:169` (printed p67).

### gui-source-019: alarm-source

Old asset: `/img/manual/asset-1ac20898071f.png`. Current source: `../gui/controllers/settingsScreens/SettingsAlarmsScreen.qml`.

Open source-selection dialog and select Cartridge Remaining.

Required context: Caption explicitly describes cartridge filling level, so Cartridge Remaining must be the selected source; show Confirm/Cancel if they remain current.

References: en `docs/08-general-operations-and-configurations.md:180` (printed p68); de `i18n/de/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:180` (printed p68); es `i18n/es/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:180` (printed p68); fr `i18n/fr/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:180` (printed p68).

### gui-source-022: network

Old asset: `/img/manual/asset-d8ec1a3e87c6.png`. Current source: `../gui/controllers/settingsScreens/SettingsNetworkScreen.qml`.

Network settings with DHCP checkbox and static IP/netmask/gateway/DNS visible.

Callouts: 1 — DHCP checkbox; 2 — Static IP configuration fields.

Required context: Both labels are referenced in adjacent A/B steps; static fields may be disabled under DHCP but visible; use fictitious/local demo addresses.

References: en `docs/08-general-operations-and-configurations.md:199` (printed p69); de `i18n/de/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:199` (printed p69); es `i18n/es/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:199` (printed p69); fr `i18n/fr/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:199` (printed p69).

### gui-source-023: date-time

Old asset: `/img/manual/asset-53a90550e48e.png`. Current source: `../gui/controllers/settingsScreens/SettingsDateTimeScreen.qml`.

Date/time calendar and Time synchronization settings control.

Required context: Step 4 needs the exact button that opens synchronization settings; calendar date can be current demo date.

References: en `docs/08-general-operations-and-configurations.md:208` (printed p70); de `i18n/de/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:208` (printed p70); es `i18n/es/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:208` (printed p70); fr `i18n/fr/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:208` (printed p70).

### gui-source-025: time-sync

Old asset: `/img/manual/asset-ac0fbb8d54d0.png`. Current source: `../gui/controllers/settingsScreens/SettingsTimeSync.qml`.

NTP server source selected and two NTP server fields visible.

Required context: Step 6 says Update NTP servers; show NTP fields and source selector, not only date/time overview.

References: en `docs/08-general-operations-and-configurations.md:208` (printed p70); de `i18n/de/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:208` (printed p70); es `i18n/es/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:208` (printed p70); fr `i18n/fr/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:208` (printed p70).

### gui-source-026: home-structure

Old asset: `/img/manual/asset-7301dbe18d0b.png`. Current source: `../gui/controllers/globalScreens/HomeScreen.qml`.

Current home/result view with toolbar and HomeBottomBar; also review SettingsMenuHomeScreen and ModeSelectionScreen for the relocated controls.

Callouts: 1 — Home or return button; 2 — Operating mode and instrument/process state; 3 — Current view name; 4 — Toolbar status icons; 5 — User role and time; 6 — Logout/power control; 7 — Auto-mode selection; 8 — Manual-mode selection; 9 — Protocol-list/start action; A — Top bar; B — Content view; C — Action bar.

Required context: COMPATIBILITY CHANGE: current HomeScreen is latest-result dashboard; Settings tile menu is now separate. Auto/manual choice lives behind Mode. Update adjacent legend/procedure text or use clearly labelled companion panels; do not point 7/8 at unrelated controls. Keep A/B/C region frames plus all valid callouts; current menu label is Settings.

References: en `docs/08-general-operations-and-configurations.md:217` (printed p71); de `i18n/de/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:217` (printed p71); es `i18n/es/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:217` (printed p71); fr `i18n/fr/docusaurus-plugin-content-docs/current/08-general-operations-and-configurations.md:217` (printed p71).

### gui-source-052: auto-results-chart

Old asset: `/img/figures-second/figure-0ecc3fd1aba0ae.webp`. Current source: `../gui/controllers/autoScreens/AutoMainScreen.qml`.

Show non-empty multi-series auto-mode chart and settings gear button.

Callouts: arrow — Chart settings gear.

Required context: Preserve arrow to exact gear button; chart must contain populated demo measurements.

References: en `docs/10-measurements.md:59` (printed p91); de `i18n/de/docusaurus-plugin-content-docs/current/10-measurements.md:59` (printed p91); es `i18n/es/docusaurus-plugin-content-docs/current/10-measurements.md:59` (printed p91); fr `i18n/fr/docusaurus-plugin-content-docs/current/10-measurements.md:59` (printed p91).

### gui-source-053: auto-chart-settings

Old asset: `/img/figures-second/figure-f099449be57ef2.webp`. Current source: `../gui/controllers/autoScreens/AutoMainScreen.qml`.

Open chart-settings overlay; show interval presets, auto/full/custom scale and log/linear controls, metric toggles plus percentage and counts scale limits.

Callouts: 1 — Percentage scale upper/lower limits on left; 2 — Counts scale upper/lower limits on right; 3 — Display interval or name filter; 4 — Vertical scale controls; 5 — Metric checkboxes.

Required context: 5 source legends; controls must correspond to actual current chart settings; if layout changed update text while preserving purpose.

References: en `docs/10-measurements.md:65` (printed p91); de `i18n/de/docusaurus-plugin-content-docs/current/10-measurements.md:65` (printed p91); es `i18n/es/docusaurus-plugin-content-docs/current/10-measurements.md:65` (printed p91); fr `i18n/fr/docusaurus-plugin-content-docs/current/10-measurements.md:65` (printed p91).

### gui-source-054: icc-result-composite

Old asset: `/img/figures-second/figure-1dc7da95b4adc8.webp`. Current source: `../gui/controllers/globalScreens/SingleResultScreen.qml`.

Compose main manual ICC-result screen, all-metrics popup and dotplot/histogram popup for the SAME demo measurement.

Callouts: 1 — Main ICC/HNAP result metrics; tap opens all results; 2 — All-results popup panel; 3 — Main FL1/FL2 dotplot; tap opens plots; 4 — All-dotplots popup panel; 5 — Measurement-warning field; 6 — Delete result button; 7 — Rename button; 8 — Re-gate result button; 9 — Export button; 10 — Previous/next result navigation.

Required context: Use actual ICC data/gate, populated dotplot and warning indicator; Admin role so operations present. Old source is internally inconsistent: popup says Beads Analysis while caption/main panel says ICC. New panels must use one consistent ICC result. Retain hand/tap cues or equivalent arrows on interactive metric, plot and navigation targets; do not cover data.

References: en `docs/11-results-and-data-analysis.md:16` (printed p98); de `i18n/de/docusaurus-plugin-content-docs/current/11-results-and-data-analysis.md:16` (printed p98); fr `i18n/fr/docusaurus-plugin-content-docs/current/11-results-and-data-analysis.md:16` (printed p98).

### gui-source-055: gate-settings

Old asset: `/img/figures-second/figure-899e3c5869ed8f.webp`. Current source: `../gui/controllers/settingsScreens/SettingsGateSettingsScreen.qml`.

Show custom ICC gate plus ICC default and ICC double default gate, type column, Delete/Preview/Copy/Edit columns and New.

Callouts: 1 — Custom ICC gating set; 2 — ICC default gate; 3 — ICC double default gate; 4 — Gate/cartridge type column; 5 — Delete (enabled on custom gates only); 6 — Preview; 7 — Copy; 8 — Edit (enabled on custom gates only); 9 — New gating set.

Required context: Exact legend distinguishes custom versus default and double gate; seed a clearly fictional custom ICC gate if demo lacks it. Do not show editable/deletable defaults as normal behavior.

References: en `docs/11-results-and-data-analysis.md:64` (printed p100); de `i18n/de/docusaurus-plugin-content-docs/current/11-results-and-data-analysis.md:64` (printed p100); fr `i18n/fr/docusaurus-plugin-content-docs/current/11-results-and-data-analysis.md:64` (printed p100).

### gui-source-057: tcc-gate-editor-composite

Old asset: `/img/figures-second/figure-8dc71f8c5efcd4.webp`. Current source: `../gui/controllers/globalScreens/GateWizardScreen.qml`.

Compose TCC polygon editor and preview; four points a–d, with first FL1 coordinate selected; include HNA limit in preview.

Callouts: 1 — Gate-point coordinate list with rows a–d; 2 — Remove-point controls; 3 — Add-point controls; 4 — Selected-coordinate editor; 5 — HNA lower-limit line in preview (configured next screen); 6 — Preview panel; a — First polygon vertex; b — Second polygon vertex; c — Third polygon vertex; d — Fourth polygon vertex.

Required context: Both panels must show the SAME polygon coordinates and HNA limit; keep 1–6 and a–d. Current UI editor may differ from tumbler; adapt callout 4 to real current coordinate editor and change adjacent sentence if no first-FL1 selection exists.

References: en `docs/11-results-and-data-analysis.md:171` (printed p106); de `i18n/de/docusaurus-plugin-content-docs/current/11-results-and-data-analysis.md:171` (printed p106); fr `i18n/fr/docusaurus-plugin-content-docs/current/11-results-and-data-analysis.md:171` (printed p106).

### gui-source-058: icc-gate-polygon

Old asset: `/img/manual/cell-7440601f6ebb.png`. Current source: `../gui/controllers/globalScreens/GateWizardScreen.qml`.

ICC gate polygon-coordinate editor.

Required context: Table step 5 specifically adjusts polygon corners; show coordinate editor, not gate list or HNA-only page.

References: en `docs/11-results-and-data-analysis.md:185` (printed p107); de `i18n/de/docusaurus-plugin-content-docs/current/11-results-and-data-analysis.md:185` (printed p107); fr `i18n/fr/docusaurus-plugin-content-docs/current/11-results-and-data-analysis.md:185` (printed p107).

### gui-source-061: hna-limit

Old asset: `/img/manual/cell-ec7e624b3c7f.png`. Current source: `../gui/controllers/globalScreens/GateWizardScreen.qml`.

HNA lower-limit step of gate wizard; FL1 value visible with Preview and Save.

Required context: Table step 7 specifically enters HNA limit; current FL1 value need not equal old 5.10 unless preserved text requires it.

References: en `docs/11-results-and-data-analysis.md:185` (printed p107); de `i18n/de/docusaurus-plugin-content-docs/current/11-results-and-data-analysis.md:185` (printed p107); fr `i18n/fr/docusaurus-plugin-content-docs/current/11-results-and-data-analysis.md:185` (printed p107).

### gui-source-072: special-import-export

Old asset: `/img/manual/cell-2af37708a475.png`. Current source: `../gui/controllers/globalScreens/ExportAllFolderNameScreen.qml`.

Special import/export screen with selected demo USB, folder name and Export diagnostics/Export all.

Required context: Table step 4 describes folder name and step 5 export actions; show correct controls, may share capture with p66 if state/permissions match.

References: en `docs/12-data-access-and-export.md:20` (printed p114); de `i18n/de/docusaurus-plugin-content-docs/current/12-data-access-and-export.md:20` (printed p114); fr `i18n/fr/docusaurus-plugin-content-docs/current/12-data-access-and-export.md:20` (printed p114).

### gui-source-073: system-services

Old asset: `/img/figures-second/figure-f9252ec82a57de.webp`. Current source: `../gui/controllers/settingsScreens/SettingsSystemServiceScreen.qml`.

System services with HTTP/HTTPS/Modbus TCP/VNC/FTP enable controls and ports 80/443/502/5900/21.

Required context: Native Qt instrument screen, not web UI. Can share capture with Fig5-4 if complete controls/state match. FTP image originally disabled; prose says enable it in next step. Either show configuration overview or enable demo FTP consistently.

References: en `docs/12-data-access-and-export.md:33` (printed p115); de `i18n/de/docusaurus-plugin-content-docs/current/12-data-access-and-export.md:33` (printed p115); fr `i18n/fr/docusaurus-plugin-content-docs/current/12-data-access-and-export.md:33` (printed p115).

### gui-source-076: web-dashboard

Old asset: `/img/figures-second/figure-57e499d51a174f.webp`. Current source: `WEB dashboard route`.

Manual-mode dashboard with menu, state, latest result summary, language selector/user menu and measurement progress.

Callouts: 1 — Left navigation menu; 2 — Instrument state; 3 — Latest-results dashboard; 4 — Language selector; 5 — User logout/reboot options; 6 — Measurement progress.

Required context: This is local instrument web interface, not BactoCloud. Capture populated fictional demo; use actual active/progress state for label 6; preserve 1–6 and source frames/lines or clear equivalent callouts.

References: en `docs/13-web-user-interface.md:29` (printed p120); de `i18n/de/docusaurus-plugin-content-docs/current/13-web-user-interface.md:29` (printed p120); fr `i18n/fr/docusaurus-plugin-content-docs/current/13-web-user-interface.md:29` (printed p120).

### gui-source-077: web-fcs-download

Old asset: `/img/manual/cell-0c18cf68589a.png`. Current source: `WEB results route`.

Results page with one row of img/fcs links, plus enlarged detail of FCS link region.

Callouts: X — FCS link (named Position X in table); arrow — Enlarged selected FCS-link region.

Required context: Keep Position X marker on actual current fcs download control and keep row context. Composite must come from one results capture; no invented data/download labels.

References: en `docs/13-web-user-interface.md:39` (printed p120); de `i18n/de/docusaurus-plugin-content-docs/current/13-web-user-interface.md:39` (printed p120); fr `i18n/fr/docusaurus-plugin-content-docs/current/13-web-user-interface.md:39` (printed p120).

### gui-source-078: web-zip-download

Old asset: `/img/manual/cell-836f089084c0.png`. Current source: `WEB results route`.

Auto mode results section header with selected date range and Download Zip button.

Required context: Crop must include date range + ZIP action, because table describes both.

References: en `docs/13-web-user-interface.md:49` (printed p121); de `i18n/de/docusaurus-plugin-content-docs/current/13-web-user-interface.md:49` (printed p121); fr `i18n/fr/docusaurus-plugin-content-docs/current/13-web-user-interface.md:49` (printed p121).

### gui-source-079: web-all-results-download

Old asset: `/img/manual/cell-9979275487c3.png`. Current source: `WEB results route`.

Results page with Download Results section, plus enlarged panel with xlsx/csv/pdf links for Auto/Manual/validation.

Callouts: arrow — Download-results panel.

Required context: Show correct formats/sections and source region in same capture; preserve download action semantics.

References: en `docs/13-web-user-interface.md:55` (printed p121); de `i18n/de/docusaurus-plugin-content-docs/current/13-web-user-interface.md:55` (printed p121); fr `i18n/fr/docusaurus-plugin-content-docs/current/13-web-user-interface.md:55` (printed p121).

### gui-source-080: web-dotplots

Old asset: `/img/manual/cell-0615055418e0.png`. Current source: `WEB dotplots route`.

Dotplots page with left Dotplots navigation selected and populated plots.

Callouts: arrow — Dotplots navigation entry.

Required context: Arrow must point to current Dotplots entry; capture real plots from demo.

References: en `docs/13-web-user-interface.md:65` (printed p122); de `i18n/de/docusaurus-plugin-content-docs/current/13-web-user-interface.md:65` (printed p122); fr `i18n/fr/docusaurus-plugin-content-docs/current/13-web-user-interface.md:65` (printed p122).

### gui-source-081: web-measurement-interval

Old asset: `/img/manual/cell-6df7821e3a62.png`. Current source: `WEB settings route`.

Auto-mode settings with sample name, interval field and Save; left Settings entry selected.

Callouts: arrow-1 — Settings navigation entry; arrow-2 — Measurement-interval field.

Required context: Must be Auto mode; actual current interval field + Save visible.

References: en `docs/13-web-user-interface.md:71` (printed p122); de `i18n/de/docusaurus-plugin-content-docs/current/13-web-user-interface.md:71` (printed p122); fr `i18n/fr/docusaurus-plugin-content-docs/current/13-web-user-interface.md:71` (printed p122).

### gui-source-082: web-dotplots-play

Old asset: `/img/manual/cell-fb7fd241751c.png`. Current source: `WEB dotplots route`.

Top of Dotplots page with playback controls and time-range slider; pause/no active animation for capture.

Callouts: arrow — Play button.

Required context: Arrow to real current Play control; match dotplots screenshot theme and dataset used for p122 navigation/range.

References: en `docs/13-web-user-interface.md:65` (printed p122); de `i18n/de/docusaurus-plugin-content-docs/current/13-web-user-interface.md:65` (printed p122); fr `i18n/fr/docusaurus-plugin-content-docs/current/13-web-user-interface.md:65` (printed p122).

### gui-source-083: web-dotplots-range

Old asset: `/img/manual/cell-fec791f8e8fd.png`. Current source: `WEB dotplots route`.

Top of Dotplots page with previous/next controls and date-range slider.

Callouts: arrow-1 — Previous/next stepping controls; arrow-2 — Date-range slider handle.

Required context: Preserve two arrows and full slider date context; match same demo/viewport as Play crop.

References: en `docs/13-web-user-interface.md:65` (printed p122); de `i18n/de/docusaurus-plugin-content-docs/current/13-web-user-interface.md:65` (printed p122); fr `i18n/fr/docusaurus-plugin-content-docs/current/13-web-user-interface.md:65` (printed p122).

### gui-source-086: intervention-info

Old asset: `/img/figures-second/figure-03a4dc812c6e8b.webp`. Current source: `../gui/controllers/settingsScreens/SettingsInterventionInfoScreen.qml`.

Service due date, valve/plunger lifetime and support contact information.

Required context: Use current bNovate support info rendered by demo; service date need not reproduce obsolete 2022 date.

References: en `docs/15-maintenance.md:56` (printed p126); de `i18n/de/docusaurus-plugin-content-docs/current/15-maintenance.md:56` (printed p126); fr `i18n/fr/docusaurus-plugin-content-docs/current/15-maintenance.md:56` (printed p126).

### gui-source-102: warning-details

Old asset: `/img/manual/cell-16a091792775.png`. Current source: `../gui/controllers/settingsScreens/SettingsSingleWarningScreen.qml`.

Warning detail screen with title, warning icon, explanation, measurement context and plot thumbnails; old example is high SSC baseline.

Required context: Use a real demo warning code; preferably W04 High baseline signal in SSC to match source. Do not fabricate a warning popup from unrelated screenshot; date/result context must belong to selected warning.

References: en `docs/16-warnings-errors-and-troubleshooting.md:18` (printed p139); de `i18n/de/docusaurus-plugin-content-docs/current/16-warnings-errors-and-troubleshooting.md:18` (printed p139); fr `i18n/fr/docusaurus-plugin-content-docs/current/16-warnings-errors-and-troubleshooting.md:18` (printed p139).

### gui-source-103: noncritical-error-details

Old asset: `/img/manual/cell-7a9639648396.png`. Current source: `../gui/controllers/settingsScreens/SettingsSingleErrorScreen.qml`.

Non-critical E15 Empty sample error detail with amber warning/error glyph and recommended cleaning action.

Required context: Non-critical severity; source example E15/no sample detected. Use same or another real documented non-critical code with matching explanation.

References: en `docs/16-warnings-errors-and-troubleshooting.md:40` (printed p141); de `i18n/de/docusaurus-plugin-content-docs/current/16-warnings-errors-and-troubleshooting.md:40` (printed p141); fr `i18n/fr/docusaurus-plugin-content-docs/current/16-warnings-errors-and-troubleshooting.md:40` (printed p141).

### gui-source-104: critical-error-details

Old asset: `/img/manual/cell-2ba5234a6f92.png`. Current source: `../gui/controllers/settingsScreens/SettingsSingleErrorScreen.qml`.

Critical E04 Missing cartridge detail with red critical glyph and remedy.

Required context: Critical severity; source example E04 missing cartridge. Do not use non-critical icon/details for this row.

References: en `docs/16-warnings-errors-and-troubleshooting.md:74` (printed p145); de `i18n/de/docusaurus-plugin-content-docs/current/16-warnings-errors-and-troubleshooting.md:74` (printed p145); fr `i18n/fr/docusaurus-plugin-content-docs/current/16-warnings-errors-and-troubleshooting.md:74` (printed p145).

### gui-source-105: error-log

Old asset: `/img/figures-second/figure-3bdcc49f453689.webp`. Current source: `../gui/controllers/settingsScreens/SettingsErrorLogScreen.qml`.

Populated log with dates, critical/non-critical/cleared event icons, descriptions, selected date range and Clear Errors.

Callouts: 1 — Event date/time column; 2 — Event-type/severity icon column; 3 — Event-description column; 4 — Clear Errors button; 5 — Displayed date range/filter.

Required context: Admin/Service role for Clear Errors; show all three documented event types. Current displayed log and range must contain the same events, not a stale empty list.

References: en `docs/16-warnings-errors-and-troubleshooting.md:108` (printed p149); de `i18n/de/docusaurus-plugin-content-docs/current/16-warnings-errors-and-troubleshooting.md:108` (printed p149); fr `i18n/fr/docusaurus-plugin-content-docs/current/16-warnings-errors-and-troubleshooting.md:108` (printed p149).

### gui-source-109: self-check

Old asset: `/img/manual/cell-725c4037614b.png`. Current source: `../gui/controllers/settingsScreens/SettingsSelfCheckScreen.qml`.

Completed automatic self-check result with PASS/FAIL/SKIP indicators and Run/Rerun action.

Required context: Completed demo self-check, not a loading/failure spinner; statuses must come from demo execution or declared deterministic demo fixture.

References: en `docs/16-warnings-errors-and-troubleshooting.md:136` (printed p150); de `i18n/de/docusaurus-plugin-content-docs/current/16-warnings-errors-and-troubleshooting.md:136` (printed p150); fr `i18n/fr/docusaurus-plugin-content-docs/current/16-warnings-errors-and-troubleshooting.md:136` (printed p150).

### gui-source-110: error-log-clear

Old asset: `/img/manual/cell-df45180c59d7.png`. Current source: `../gui/controllers/settingsScreens/SettingsErrorLogScreen.qml`.

Populated error-log screen with Clear Errors button outlined/highlighted.

Callouts: frame — Clear Errors button.

Required context: Use same underlying log as Fig16-1 if permissions/state match; highlight exact current button. No need to execute clearing for the screenshot.

References: en `docs/16-warnings-errors-and-troubleshooting.md:130` (printed p150); de `i18n/de/docusaurus-plugin-content-docs/current/16-warnings-errors-and-troubleshooting.md:130` (printed p150); fr `i18n/fr/docusaurus-plugin-content-docs/current/16-warnings-errors-and-troubleshooting.md:130` (printed p150).

## Control/status artwork

These small symbols are reviewed independently from the full screenshots. Several distinct extracted pixel assets depict the same function; one verified current artwork/crop can replace them consistently.

| ID | Printed pages | Meaning | Old asset |
| --- | --- | --- | --- |
| gui-source-014 | 66 | Maintenance menu button | `/img/manual/asset-41c98df7efd4.png` |
| gui-source-015 | 66, 69, 70, 83, 84 | Home/navigation button | `/img/manual/asset-c4707aba8b28.png` |
| gui-source-016 | 66 | Special export/import menu button | `/img/manual/asset-e8682259cb34.png` |
| gui-source-020 | 69 | Network menu button | `/img/manual/asset-74d2c341d686.png` |
| gui-source-021 | 69, 70, 83, 84 | System settings menu button | `/img/manual/asset-a7a911718f1c.png` |
| gui-source-024 | 70 | Date and Time menu button | `/img/manual/asset-a42806c7c455.png` |
| gui-source-027 | 72 | Demo mode activated | `/img/manual/asset-0a659e5a284a.png` |
| gui-source-028 | 72 | Critical error | `/img/manual/asset-1bbc128332f2.png` |
| gui-source-029 | 72 | Non-critical error | `/img/manual/asset-4b23f6b46f1e.png` |
| gui-source-030 | 72 | Alarm on last auto measurement | `/img/manual/asset-601829975ed7.png` |
| gui-source-031 | 72 | Cartridge almost expired | `/img/manual/asset-c3efc86358a9.png` |
| gui-source-032 | 72 | Process running | `/img/manual/asset-dc77eba566ee.png` |
| gui-source-033 | 72 | Cartridge almost empty | `/img/manual/asset-f8c9ed6e595a.png` |
| gui-source-034 | 72 | Cartridge level indication | `/img/manual/cell-7b30939634a3.png` |
| gui-source-035 | 72 | No cartridge/not initialized | `/img/manual/cell-7bf18abd5784.png` |
| gui-source-036 | 72 | Cartridge expired | `/img/manual/cell-9447c1d395cc.png` |
| gui-source-037 | 72 | Service required | `/img/manual/cell-c721cca85bf4.png` |
| gui-source-038 | 72 | Cartridge empty | `/img/manual/cell-ec16f9129509.png` |
| gui-source-049 | 77 | No cartridge/not initialized | `/img/manual/asset-b2065e0aa4d5.png` |
| gui-source-050 | 83 | Demo mode menu button | `/img/manual/asset-65a7aba669db.png` |
| gui-source-051 | 84 | Factory reset menu button | `/img/manual/asset-e6d546463675.png` |
| gui-source-056 | 105 | Edit gating-set action | `/img/manual/cell-95fee81e2625.png` |
| gui-source-059 | 107 | Gate settings menu button | `/img/manual/cell-882cf24141b5.png` |
| gui-source-060 | 107, 112, 126 | Home/navigation button | `/img/manual/cell-d07318a281b1.png` |
| gui-source-062 | 107 | Edit gating-set action | `/img/manual/cell-fd72b5bdcc2a.png` |
| gui-source-068 | 112 | Back/navigation button | `/img/manual/cell-05da61fc8424.png` |
| gui-source-074 | 119 | Home/navigation button | `/img/manual/cell-6a3f9ce5d051.png` |
| gui-source-075 | 119 | System info menu button | `/img/manual/cell-fc64c36946da.png` |
| gui-source-084 | 123 | System info menu button | `/img/manual/cell-71bc4e13a72d.png` |
| gui-source-085 | 123 | System info menu button (source uses generic info even for Reboot) | `/img/manual/cell-f60b02982fd9.png` |
| gui-source-087 | 126 | Maintenance menu button | `/img/manual/cell-2633a4bc793a.png` |
| gui-source-088 | 126 | Intervention info menu button | `/img/manual/cell-c75e8c1aa658.png` |
| gui-source-089 | 127 | Home/navigation button | `/img/manual/cell-a1bf5eaa91cd.png` |
| gui-source-090 | 127 | Intervention log menu button | `/img/manual/cell-c425fdd03b9b.png` |
| gui-source-091 | 127 | Maintenance menu button | `/img/manual/cell-fbee6be10e98.png` |
| gui-source-106 | 149 | Non-critical error event icon | `/img/manual/cell-168772cd9e6b.png` |
| gui-source-107 | 149 | Critical error event icon | `/img/manual/cell-67d152256921.png` |
| gui-source-108 | 149 | Errors cleared event icon | `/img/manual/cell-b4d48ec33659.png` |

## Scientific examples to preserve

| ID | Printed page | Meaning and required context | Old asset |
| --- | --- | --- | --- |
| gui-source-063 | 108 | Keep original scatter data and red gate; adjacent table specifies points (3.0,0.0),(3.0,6.1),(6.5,6.1),(6.5,0.0). | `/img/manual/cell-374bfaa7d23b.png` |
| gui-source-064 | 108 | Preserve labels 1 (LNA/HNA cells),2 (electrical noise),3 (debris/background) and ellipse regions; different random demo data would invalidate teaching. | `/img/manual/cell-564a3512838d.png` |
| gui-source-065 | 109 | Preserve the shown diagonal gate and b/c positions below debris; text references those exact corners. | `/img/manual/cell-67de70c6bd1f.png` |
| gui-source-066 | 109 | Preserve arrow at about FL1=3.8; narrative asks the reader to locate this minimum. | `/img/manual/cell-d44e977152e1.png` |
| gui-source-067 | 110 | Preserve red vertical line at about FL1=4.8 between LNA/HNA peaks, because text references this exact example. | `/img/manual/cell-3dd4365d2ad3.png` |
| gui-source-069 | 112 | Preserve four bead populations, noise/background exclusion, and annotated red gate; used for bead-comparison method, not UI styling. | `/img/manual/render-fa85ea9255cb.webp` |
| gui-source-070 | 113 | Publisher/other instrument data comparison; preserve exact peaks and log values 3,3.3,4.4,5.2. | `/img/manual/cell-4c2343e0bbfe.png` |
| gui-source-071 | 113 | Preserve four peaks and log values 4.05,4.3,5.35,6.2, because table quantifies them. | `/img/manual/cell-c2ba9a559620.png` |

## Other preserved source illustrations

The JSON catalog explicitly classifies every reviewed wiring/pinout, connector, device photograph, hardware maintenance image and safety/shipping symbol as non-GUI. They are not screenshot-refresh targets.

Local review evidence (ignored): `output/gui-capture/inventory/contact-01.jpg` through `contact-05.jpg`, 30 complete source pages in `output/gui-capture/inventory/source-pages/`, and full-size composite/plot-settings inspections.
