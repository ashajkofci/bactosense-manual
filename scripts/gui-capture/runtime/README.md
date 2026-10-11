# Native GUI screenshot runtime

## Advanced scheduler supplement

Run `python3 scripts/gui-capture/runtime/scheduler_capture.py --locales en` for an English review, then repeat with `--locales de fr it es`. This additive helper reuses the built Qt executable and server binary below, preserves existing reviewed images, starts its own disposable runtime, captures four unsaved scheduler states per locale, and cleans up its recorded processes. It uses actual production clicks and the real weekly-preview endpoint; Save and Start are not executed. See [scheduler sources and capture scope](../../../maintenance/advanced-scheduler-sources.md).

After updating the five chapter editions, run `node scripts/gui-capture/prepare-scheduler-figures.mjs`. It prepares four context images and eight workflow-table control crops per locale from the same raw captures. Render only the printed figure IDs, visually inspect each final image, and record its exact reviewed hash in `maintenance/gui-screenshots.json` before the standard screenshot/content checks and build.

This harness embeds the current sibling `../gui` production QML and image
resources unchanged. It uses the existing native integration entry point,
which creates a temporary `GUI.conf`, calls real HTTP/WebSocket controllers,
and disables the GUI's older screenshot substitution mode. The application
renders its own screenshots with `grabToImage` at 1600 × 960 from its normal
800 × 480 layout. No replacement screen is drawn by the capture scripts.

The local server runs the actual sibling `../bactoserver` Go executable against
its shipped `demodata-sigrist` archive. All copied files, settings, logs, users,
and Redis data live under ignored `output/gui-capture/`; the product test mode
also creates temporary databases whose exact paths are tracked for cleanup.
The API binds to `127.0.0.1:18889`, Redis to `127.0.0.1:16389` database 9.

Prerequisites for this macOS recipe: Go, Python 3, CMake, Homebrew Redis, and
Qt 5 with Qt Quick Test, Charts, Graphical Effects, and Virtual Keyboard.

```sh
python3 scripts/gui-capture/runtime/prepare_server.py
go -C ../bactoserver build -trimpath -o "$PWD/output/gui-capture/runtime/server/bactoserver" .
python3 scripts/gui-capture/runtime/prepare_server.py --start
python3 scripts/gui-capture/runtime/seed_capture.py
cmake -S scripts/gui-capture/runtime -B output/gui-capture/runtime/qt-build -DCMAKE_PREFIX_PATH=/opt/homebrew/opt/qt@5
cmake --build output/gui-capture/runtime/qt-build -j4
python3 scripts/gui-capture/runtime/capture.py
```

Use `capture.py --locales en` for a focused English review or
`capture.py --locales fr de it es` after that review. Each PNG has a paired JSON
file with actual production element names and logical bounds. Capture logs
include the source data selected for result/error/warning screens and the real
online-chart series count. The native recipe must use
`QT_QPA_PLATFORM=cocoa QSG_RENDER_LOOP=basic` with `QT_QUICK_BACKEND` unset.
On this Qt/macOS installation, the offscreen platform silently selects the
software renderer and omits masked `ImageIconBtn` controls. Successful Qt test
execution alone does not prove a complete screenshot. The wrapper requires
an actual `GL_RENDERER` entry in the log, and the images still need review.
The harness uses a temporary visible window, requests a fresh frame before
each capture, and starts a new process per locale. Keep the capture window
exposed while it runs. The 40 states include support/service information,
the input scheduler, all four gate action controls, and the complete result
detail/metrics/dotplot sequence.

Prepared teaching examples are limited to the disposable API:

- A custom `ICC Water` set is cloned from the shipped ICC gate, leaving default
  gate sets unchanged. The gate list therefore shows custom, default, and
  double-default examples with their real action permissions.
- The real manual ICC `Tap Water Zürich` measurement gains a W04 warning so its
  details, metrics popup, and FL1/FL2 zoom remain one consistent measurement.
  All counts and original plot URLs/files are preserved.
- W04 warning details use real `Tap Water Ecublens` data, including its complete
  FL1/FL2, FL1/SSC, and FL1 archived plots. The ICC montage record has only the
  two plots its archive actually supplies.
- E15 `MixerInflationError` non-critical, E04 `CartridgeMissingError` critical,
  and C02 `ErrorsCleared` events use current product message definitions and
  the event shapes in the shipped error fixtures. Their teaching dates sit
  beside the April 2026 archive.
- Self-check output is copied exactly from the product's shipped PASS fixture;
  its timestamp is moved beside the archive. It is a simulated teaching result.
- Service ports 80/502, an enabled ICC digital-input draft with a 60-minute
  scheduler, the cartridge-remaining alarm source, and TCC/ICC gate templates
  are prepared only in unsaved application forms. No apply/save, protocol,
  export/import, error-clear, or hardware-test action runs during capture.
- The private hardware stub provides documentation IP `192.0.2.50`; timezone
  choices come from the real macOS zoneinfo tree with `Europe/Zurich` selected.
  USB choices come from the product's shipped `mock/fdisk.sh` fixture, made
  executable in the private copy as the normal Docker image does.
- Cloud/update promotional dialogs are suppressed through temporary GUI
  preferences so they do not cover the documented screens.

Full fixture payloads, original result data, and fixture-source SHA-256 values
are recorded privately in
`output/gui-capture/runtime/capture-fixture-provenance.json`. Current source
revisions for this run were GUI `afa2595ffe3b9d8dda369d22805fef5b266b5547` and
Bactoserver `26b9cbaad199dc1387d1a8ace72fef02b3fa1c64`; both sibling worktrees
were clean. Docker availability was checked according to the GUI guidance,
but the daemon was unavailable. No sibling GUI or Bactoserver source was edited.

Once native and web captures have finished and been reviewed, stop only the
recorded private processes and remove their tracked temporary databases:

```sh
python3 scripts/gui-capture/runtime/cleanup.py
```

The ignored runtime and raw images remain available for inspection and reruns.

## Supplemental activation and enrollment navigation

The additive capture keeps every prior reviewed image. It has a separate
private runtime in `output/gui-capture/activation/runtime/server`, and writes
only new raw states under `output/gui-capture/activation/native/{locale}`.
Stop the original private capture runtime before starting this one on the
same isolated ports. The Qt executable and server binary from the build
recipe above are reused; sibling source revisions are recorded in provenance.

```sh
python3 scripts/gui-capture/runtime/activation_capture.py prepare
python3 scripts/gui-capture/runtime/activation_capture.py start
python3 scripts/gui-capture/runtime/activation_capture.py capture --tests activation
python3 scripts/gui-capture/runtime/activation_capture.py capture --tests navigation roles
# Review each of the 30 raw PNGs before recording their acceptance:
python3 scripts/gui-capture/runtime/activation_review.py
python3 scripts/gui-capture/runtime/navigation_review.py
python3 scripts/gui-capture/runtime/activation_capture.py check-preserved
python3 scripts/gui-capture/runtime/activation_capture.py cleanup
```

The shipped server `-test` mode adds both package keys as `test`, overriding
the copied configuration. The prepare/start wrapper therefore clears only
the Scientific flag with `{"scientificPackageOptionKey":""}` on its own
PID-verified disposable API. The production setter returns on an empty value
before any activation implementation. Management's shipped demo flag stays
present for real user management and Audit trail navigation. No license key
is entered, submitted, purchased or activated. Cloud settings keep their
actual blank API key and organization. Full fixture state and source/binary
hashes are private in `activation/provenance.json`.

All six states per locale are reached through real production mouse clicks:
Home; Settings menu; System settings menu; Upgrades; empty activation-key
keyboard; and Cloud Settings. The harness cancels the empty activation
keyboard and does not click Cloud Enroll or Save. Every raw is 1600 × 960 with
a paired JSON containing logical 800 × 480 control bounds and actual text.
The current compiled translations are authoritative; for example, EN renders
the cloud connection state as `Offline`.

Production deploys its virtual keyboard style separately from the QML qrc.
The wrapper copies the unmodified `../gui/CustomVirtualKeyboardStyle` into
a private Qt module import tree, symlinks the installed Virtual Keyboard
plugins, and sets `QT_IM_MODULE=qtvirtualkeyboard`,
`QT_VIRTUALKEYBOARD_STYLE=BactosenseStyle`, and
`QT_VIRTUALKEYBOARD_LAYOUT_PATH` to the actual sibling custom layout. This
reproduces the blue product keyboard instead of Qt's black fallback style.
Cocoa OpenGL remains mandatory. Capture logs check the real GL renderer.

Navigation/role evidence is recorded separately from images in
`activation/navigation-navigation-roles-<locale>.json`. The checks use actual
disposable Basic, Advanced and Admin accounts, visit documented menu routes,
inspect restricted controls, open both measurement wizards, select Prime and
open its instructions, and toggle the management checkbox only in an unsaved
form. They do not press Save/Apply on services/settings/users, clear errors, rerun self-check,
start measurement/scheduler/maintenance, import/export, or enroll. Online
Home's current action is `Start`; Manual Home's is `Measure`. System
configuration commits with `Save`; System services commits with `Apply`.
Changing the operating mode writes only `guiMode` and its audit event to the
private server; the final state is restored to Manual. The review checks exact
request payload keys and confirms the scheduler is stopped, no protocol is
running, package flags remain as prepared, and cloud key/organization stay blank.
The final initial EN/DE audit was supplemented only for Gate New and Advanced
Maintenance with `capture --locales en de --tests additional`; the compact
review merges those separate evidence files. A fresh full run already includes
the same checks and does not require the focused supplement.

The accepted per-file report is `activation/capture-review.json`, and the
compact native route/label matrix is `activation/navigation-review.json`.

## Digital-output configuration rows

The narrow helper reuses the built native Qt harness and server binary. It
starts a fresh private runtime, clicks Home → Settings → Online mode settings
→ Digital outputs, then scrolls the production list using mouse-wheel input.

```sh
python3 scripts/gui-capture/runtime/digital_outputs_capture.py
```

It writes one new lower-list capture and element tree per language to
`output/gui-capture/digital-output/native/{locale}/digital-outputs-lower`.
The shipped Alarm 2 is enabled only in the unsaved QML form so both default
assignments are visible: Alarm 1 sets output 3 to 0; Alarm 2 sets output 4
to 0. No output values change, no settings are saved, and no hardware action
runs. The helper verifies unchanged API alarm/output settings, preserves
existing image hashes, and stops its recorded API/Redis processes afterward.
Use `--locales en` for a focused capture. Cocoa OpenGL remains mandatory.

The existing `native/{locale}/digital-outputs.png` provides the base row at
logical y124. The new critical, non-critical and two alarm rows are at y150,
y202, y306 and y358, respectively. Their four controls occupy x470..790;
each row is 52 pixels high in the logical 800 × 480 layout. Publication uses
the clean English 1–4 header crop at [470,100,320,24] for every language,
because the German Output label extends into the first column. All values
come from the corresponding localized raw. Raw acceptance and provenance
are in `digital-output/capture-review.json` and `digital-output/provenance.json`.
Independent final crop acceptance is recorded in
`output/gui-digital-output-review/capture-and-crop-review.json`.
