# Manual on the instrument

The prototype adds **Support & Service → Manuals → User manual**
to the sibling `../gui` checkout. All 21 documents are exported in English,
German, French, Italian and Spanish: 105 chapters in total. Every language,
including English, is stored on disk beside the executable rather than embedded.
The reader offers chapter contents, section shortcuts, searchable
text, internal cross-references, reading history, 16–28 px text, and figure zoom
with panning. The manual text uses the system font. Notice headings use the
published PDF's original symbol, uppercase bold title and severity colours.
It retains the device status bar and Back control, hides the title
strip on this screen, and uses the existing `SmallButton` and `ListItemSurface`
components. Contents and sections use continuous `ListItemSurface` lists.
Their labels use `TextUI.list_item_dark` normally and `TextUI.list_item_pr`
while pressed, matching `ListItemManualResult`.
Interface copy and accessibility labels use `qsTr()`; translation catalogs
have not been regenerated. The manual follows the GUI language, with English
as the fallback from disk for unsupported languages, including Chinese, and
for unavailable or invalid translated indices.
Support & Service is available to Basic operators; its diagnostic,
service and contact-editing actions retain their own permission checks.

## Contextual help

`TemplateScreen.manualReference` optionally adds help beside the screen title:

```qml
manualReference: "manual:measurements#advanced-scheduler-create"
```

`InfoBarView` displays a small circled question mark on the right of the title
bar. It uses `GenericIcon.Help`: the same vector circle as the existing Info
icon, with a bold question mark in the GUI's existing font. The button surface
and border are transparent; pressing or focusing it changes the icon colour.
Its touch area is 44 × 40 px. Title and wizard text reserve that space.
The logout control, clock and user name keep their original top-bar positions.
No help control is inserted when the title bar is hidden or the reference is empty.

Contextual help uses a separate loader for `SettingsUserManualScreen`, initially
opening the specified chapter and anchor. The originating screen remains alive
with its local drafts and selections; its screen history is unchanged. The
device Back arrow replaces the manual's separate Back button. It first closes
an enlarged figure or section list, then follows the reading history, and finally
closes help and restores that same screen instance. Tapping the toolbar center
closes the manual immediately, including when opened from Support & Service.
The manual reuses the existing screen button callback and `previousScreen`
signal; other screens keep their original toolbar behavior. This avoids
repeating `Component.onCompleted` operations, such as re-gating, and preserves
unsaved schedule and gate edits. Search still uses the existing modal keyboard.

Three subagents reviewed all controller screens against the actual English
instructions, with repeated stricter passes. A reference is retained only when
it adds practical instructions, field meanings or decision guidance beyond the
screen's existing labels and explanations. Useful links include measurement
setup, scheduling rules and preview, result interpretation and multiselection,
USB export requirements, gate geometry, cartridge replacement, IO configuration,
networking, errors and supported settings. References are conditional on the
documented workflow and visible controls.

The following deliberately have no contextual help:

- Autosampler and batch workflows, BactoSwitch setup/control, private service
  diagnostics and protocol logs: no matching instructions in this manual.
- Validation/SST and undocumented protocol variants: relevant text redirects
  to separate kit manuals rather than explaining the visible workflow.
- Alarm history, audit trail, intervention history, system info, log filter
  dialogs and password-policy settings: available text mainly repeats labels
  or navigation and omits the screen's controls or field meanings.
- Broad settings menus and deletion progress: the chapter overview or setup
  procedure does not provide useful help at that point.
- Login, all logged-out screens, initial PIN and date setup, automatic-logout
  settings and Language: linked instructions are
  obvious, assume a different authentication context, or add less than the UI.
- Export and re-gating progress: available procedures concern preparation and
  starting the operation rather than explaining the current progress/error state.
- Games, UI previews and the manual reader itself.
- IO output testing: the manual's Reset description does not match the current
  reset implementation, so that screen has no help link.

References change with the active scheduler or cartridge step. Cloud login,
private contact editing and validation gates suppress unrelated help. Cartridge
links follow the selected exchange/removal/installation workflow and disappear
after the documented operator steps. Measurement wizards expose help only
when logged in and outside validation mode.
Home, Demo and User management retain their links at the user's explicit
request: the Home overview (§8.8.1), Demo mode (§8.12), and Login, user roles
and permissions (§8.2). All retained anchors match across the five manuals.

## Export approach

Docusaurus [builds a static site](https://docusaurus.io/docs/deployment).
Its [plugin lifecycle](https://docusaurus.io/docs/api/plugin-methods/lifecycle-apis#postbuildprops)
includes `allContentLoaded` for the published chapter inventory and `postBuild`
for processing the finished HTML. These are useful extension points for a
device export. The prototype adds a project plugin rather than introducing
another document authoring format.

| Approach | Consequence for this GUI |
| --- | --- |
| Embed the complete Docusaurus site in a web view | Preserves browser rendering, but adds a browser engine and its deployment requirements. The GUI currently has no WebEngine dependency. |
| Parse source Markdown in QML JavaScript | Needs a Markdown implementation plus support for Docusaurus notices, MDX images, explicit heading IDs and existing HTML tables. Qt's native Markdown support was introduced in 5.14, after the GUI's 5.12 target. |
| Export rendered content to JSON and use native rich text | Uses Docusaurus to resolve the source syntax once. One QML reader loads all chapters and their local artwork. This is the implemented prototype. |
| Use the generated PDF | Provides the existing printable edition, but requires a PDF viewer and a layout suited to a small touchscreen. |

Qt documents a [supported HTML subset](https://doc.qt.io/qt-5/richtext-html-subset.html),
including tables, merged cells, lists, links, images, scientific subscripts and
superscripts. Its [Text documentation](https://doc.qt.io/qt-5/qml-qtquick-text.html)
describes rich text and the later Markdown format. The exporter converts the
website content to that subset; the device does not execute the site's React
or JavaScript code.

## Build and preview

From this manual checkout:

```sh
npm run manual:device
npm run manual:preview
# Preview a specific installed language:
npm run manual:preview -- --locale fr
```

The first command builds every configured language from the current sources into
`output/device-site/`, runs the export plugin, and assembles the complete bundle
in `output/device-manual/`. By default it installs all five language folders,
`locales.json` and `manual.qrc` in the sibling `../gui/manual/`, resolved relative
to this manual checkout. It skips PDF compilation and Apache publication.
Use `npm run manual:device -- --bundle-only` to create the bundle without
installing it, or `npm run manual:device -- --gui /path/to/gui` to select another
GUI checkout containing `gui.pro`. An inaccessible GUI checkout fails before
generation; maintained GUI files such as `manual.pri` and `install.cmake` are
preserved during installation.

The preview opens the same reusable reader in an 800 × 480 desktop window.
It requires the sibling `../gui` prototype, CMake and Qt 5 development libraries,
and uses the same `ModalKeyboard` and keyboard style as the GUI. Set `QT5_CMAKE_PREFIX`
to the Qt installation when it differs from the default. The small native
preview host supplies the device controls' context and resources, and keeps its GUI
preferences in a private temporary directory.
Qt Virtual Keyboard must also be installed. Set `QT5_QML_PATH` if its modules
are outside the detected Qt installation. The launcher copies the existing
GUI keyboard style into a private import tree.

Build the GUI after installing the prototype. `gui.pro` includes the reusable
QML screen and `manual/manual.qrc`; the latter contains only `locales.json`, a
small language inventory with `embeddedLocales: []`. No chapter, search text or
manual artwork is linked into the executable. The versioned language folders
let a fresh GUI checkout compile and consult the manual without Node.js,
Docusaurus or the manual source checkout.

The qmake build copies all five folders through `manual/manual.pri`. The CMake
preview and capture hosts use `manual/install.cmake` for the same layout:

```text
gui
manual/
  en/  (index.json, search.json, chapters/, assets/, report.json)
  de/
  fr/
  it/
  es/
```

`ManualDirectoryUrl` points to this `manual/` directory relative to the running
executable. On macOS it is inside `gui.app/Contents/MacOS/`; in the desktop
preview it is next to `manual-preview`. Linux `make install` copies the folders
under `target.path/manual/`; the existing development deployment scripts send
them to `/root/gui/manual/` with the GUI. Ship all five folders, including English.
The sibling `v3_build/build.sh` stages the exported folders at that same path
after applying the base filesystem and overlay. Its shared Python helper checks
the locale inventory, file hashes and image widths before copying. Dev, beta and
stable builds share this step; backend-only builds validate the manuals already
staged with their existing GUI.

Subsequent chapter or artwork edits need another export and replacement of the
disk folders. Running the build refreshes those copies without relinking for
manual-only changes; `make manual-data` also copies them independently in a
qmake build directory. Only changes to the embedded language inventory require
recompiling the executable.

Normal `npm run build` also exports each locale with the same plugin: English
under `build/device-manual/en/` and translations under
`build/<locale>/device-manual/<locale>/`. `manual:device` assembles those exports
into one firmware data bundle without publishing the website.

## Files and runtime

| File | Purpose |
| --- | --- |
| `plugins/manual-device.cjs` | Docusaurus lifecycle integration for all configured languages. |
| `plugins/manual-chapters.cjs` | Shared sidebar inventory for the PDF and device exports. |
| `scripts/export-device-manual.mjs` | Converts rendered HTML, copies artwork and validates cross-references. |
| `../gui/manual/locales.json` | Small embedded inventory of available languages; no embedded manuals. |
| `../gui/manual/manual.pri`, `install.cmake` | Copy all language folders beside the qmake/CMake executable. |
| `../gui/manual/<locale>/index.json` | Localized chapter order, metadata, headings and anchor-to-block mappings. |
| `../gui/manual/<locale>/chapters/*.json` | Heading, rich-text and figure blocks for each chapter. |
| `../gui/manual/<locale>/search.json` | Localized search text and chapter/block destinations. |
| `../gui/manual/<locale>/assets/` | Referenced images and safety SVGs, retaining source filenames and directories. |
| `../gui/manual/<locale>/report.json` | Inventory, original/exported dimensions, resize decisions, source paths, sizes and SHA-256 values. |
| `../gui/views/manual/ManualReader.qml` | Shared chapter loading, consultation controls, search, history and figure zoom. |
| `../gui/views/manual/ManualBlock.qml` | Reusable heading, rich-text/table and figure rendering. |
| `../gui/utils/manualDocument.js` | Qt 5.12-compatible JSON validation, links, search and image sizing. |

Each of the five languages contains 21 documents, 178 images and 655 validated
internal references. Artwork occupies about 10.9–11.3 MiB per language.
53 images per language were resized. Every exported asset is at most 800 px wide.

The exporter resolves Docusaurus' hashed URLs and small inline images back to
their tracked source paths by matching the original bytes. For example,
`static/img/gui/en/home-overview.png` becomes
`en/assets/img/gui/en/home-overview.png`, with the same filename even when resized
or updated. Duplicate locale artwork prefers the current language. Genuinely anonymous
inline images use a digest of the original bytes as a fallback name.

Images wider than 800 px are resized before copying, preserving their aspect
ratio, format and transparency with [Sharp](https://sharp.pixelplumbing.com/api-resize/).
Smaller assets are copied byte for byte. Oversized SVGs keep their vector viewBox
and receive capped width/height dimensions. The website's original assets are
unchanged. Source and exported hashes in `report.json` make the conversion
traceable. QML figure decoding also respects the exported width.

The GUI reads `qrc:/manual/locales.json`, selects the base language of
`System.locale.name`, then asynchronously reads that language's index and selected
chapter from `ManualDirectoryUrl/<locale>/`. Search data is loaded when first
needed. Other language files are not read. Locale changes clear the previous
index, chapter, history and search data; figure caching is disabled. Article blocks use a
virtualized `ListView`. Wide tables can scroll horizontally, and their
illustrations can open in the image viewer. External references display the
address for use on another device. Loading failures offer a retry; request
generation numbers prevent an older read from changing a newer navigation.
If a default translated index is missing, invalid or for the wrong language,
the reader tries the disk English index and preserves the requested help section.
If English is also missing, the normal load-error and Retry controls appear.
Explicit custom `bundleUrl` overrides retain their own errors. A configurable
`diskRootUrl` also supports custom native hosts.

Every language bundle retains all published chapter text, lists, tables, notices,
illustrations and anchors. Website styling and browser interactions are
adapted to native controls. No QML file is generated per manual page. The
exporter rejects missing images, unknown safety symbols and broken internal
references. Embedded data-URI images are converted to ordinary local assets.

## Validation and limits

Before the contextual-help and resize changes, the reader was checked with native Qt 5.15.19 on macOS, using the actual GUI
QML and image resources, a private Bactoserver demo runtime, Cocoa OpenGL and
the separately installed production virtual keyboard style. Both Basic and
Admin consultation flows passed. These flows cover the menu link, a mouse
click on a rendered index cross-reference, search entry and cancellation,
section shortcuts, figure zoom, text sizing and the device Back control.

At that stage, the JavaScript suite passed 310 checks; the QML suite passed 198.
The new bundle checks resolve all exported references and images. Reader
checks load every chapter, protect heading geometry, test missing resources
and cancelled loads, and require visible, nonzero image dimensions.
`npm run manual:check` also passed for all five website editions.

The subsequent contextual-help, image-export and disk-loading updates successfully
rebuilt all five Docusaurus/device bundles and the native Qt 5.15 preview and GUI.
The packaged executables have all five disk folders, each with 21 chapter files.
The manual resource collection embeds only the 108-byte language inventory.
QML syntax checks passed for the changed components, and literal help destinations
were compared with each exported index. Dynamic destinations were reviewed
against their screen state and source chapter.

After the toolbar navigation update, `npm run test:all` passed with 310 JavaScript
checks and 198 QML checks in the Linux `node:20` CI environment using a snapshot
of tracked files. The pipeline now installs Qt Quick Controls 2. The binary
ignore rule is restricted to `/gui`, so exported screenshots under
`manual/<locale>/assets/img/gui/` are tracked. The JavaScript export check covers
all five languages. The V3 staging helper also successfully copied and validated
all five complete bundles; a full firmware build was not run on this macOS host.

The GUI's focused integration story is `SUP.OnDeviceManual`, in
`test/integration/tst_SUP_UserManual.qml`. It uses the existing integration
harness and its disposable server. The native capture wrapper is
`scripts/device-prototype/tst_capture.qml`; local screenshots are under
`output/device-prototype/screenshots/` at 1600 × 960 from the logical
800 × 480 interface. Reviewed states include Support & Service, contents,
safety notices, Advanced scheduling, section navigation, search, enlarged
artwork and a procedure table.

Docker was unavailable during the original consultation checks, so that Docker
integration run was not completed. Docker is available now; the integration
suite was not rerun for the export, help-link and disk-loading changes.
The Qt 5.12 target and physical instrument have not been exercised here.
Hardware validation should assess startup/read latency, image decoding memory
and touch scrolling with long tables. Consultation currently resets when the
operator leaves the manual screen. All five available manual languages are installed;
the GUI's Chinese locale uses the English manual.
