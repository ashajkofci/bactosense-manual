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

To capture against a Bactoserver branch other than the sibling checkout's, export
it and point `BACTOSERVER_SOURCE` at the export for every helper (the commit is
read from its `.source-commit`), then build the server from that tree:

```sh
mkdir -p output/gui-capture/bactoserver-v3
git -C ../bactoserver archive origin/v3 | tar -x -C output/gui-capture/bactoserver-v3
git -C ../bactoserver rev-parse origin/v3 > output/gui-capture/bactoserver-v3/.source-commit
export BACTOSERVER_SOURCE=$PWD/output/gui-capture/bactoserver-v3
go -C "$BACTOSERVER_SOURCE" build -trimpath -o "$PWD/output/gui-capture/runtime/server/bactoserver" .
```

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
`output/gui-capture/runtime/capture-fixture-provenance.json`, which also
records the Bactoserver commit; `capture.py` records the GUI commit and worktree
per language in `output/gui-capture/runtime/native-provenance.json`.
`prepare-figures.mjs` accepts only one GUI commit, either clean or with one
recorded patch. The November 2026 run used GUI `qt514`
`5142b6fed18f647a5ce6d9901c71752d41b1a97d` with the recorded text-fit patch
and Bactoserver `v3` `f36ca33d9e9cdec8002367c975157a155dad902c`, exported with
`git archive` (`BACTOSERVER_SOURCE=output/gui-capture/bactoserver-v3`), so the
sibling `../bactoserver` checkout keeps its own branch. The October run used GUI
`afa2595f` and Bactoserver `26b9cbaa`.

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

## Online result details and plot touch

```sh
python3 scripts/gui-capture/runtime/online_results_capture.py
```

This focused run snapshots the current sibling GUI resources, records their
commit and file hashes, and builds a separate native executable so concurrent
GUI work cannot change the five-language capture halfway through. The sibling
source files are read only. A fresh private Bactoserver serves its unchanged
demo archive. The selected TCC record has 13 genuine neighboring measurements;
its details, metrics and FL1/FL2 popup all retain the same measurement and
original plot files. The harness clicks the actual primary-plot MouseArea and
verifies that it opens `AutoMainScreen.qml`. It also verifies the illustrated
alarm card opens the alarm details. No server setting or hardware action runs.

Four PNGs and paired element trees per language are written under
`output/gui-capture/online-results/native/{locale}`: `online-result-detail`,
`online-result-metrics`, `online-result-dotplot` and `online-chart-after-touch`.
The last state is private navigation evidence. The capture automatically stops
its API/Redis processes and checks that every existing image hash is preserved.
Use `--reuse-snapshot --locales en` for a focused rerun of the same built GUI.
Provenance, scientific checks, raw acceptance and compact control geometry
are in ignored `output/gui-online-results-review/`.

## BactoSwitch manual screens

```sh
python3 scripts/gui-capture/runtime/bactoswitch_capture.py build
python3 scripts/gui-capture/runtime/bactoswitch_capture.py start
for test in screens measure results plc; do
  python3 scripts/gui-capture/runtime/bactoswitch_capture.py capture --test "$test"
done
node scripts/gui-capture/web/stage.mjs   # after the Less install of the web recipe
node scripts/gui-capture/web/capture-bactoswitch.mjs
python3 scripts/gui-capture/runtime/bactoswitch_capture.py cleanup
node scripts/gui-capture/prepare-bactoswitch-figures.mjs
```

`build` snapshots the sibling GUI resources (recording commit and dirty state),
exports a Bactoserver ref with `git archive` (`--server-ref`, default `origin/v3`,
so the sibling checkout's branch is left alone) and builds both. `start` runs the
standard private runtime from that export and seeds the BactoSwitch teaching
fixture: the `DWTP TCC after SSF` demo series is assigned round-robin to the
default lines 1–4 through the data API, and the product's BactoSwitch status keys
(`sosd_connected`, valve count, flow, valve state) are set in the private Redis.
Bactoserver `v3` detects the BactoSwitch on USB and serves these keys through
`/api/status`; macOS has no device attached, and `tst_bactoswitch.qml` checks
that the connection comes from the server. Only the single-open-valve state
(valve 4 alone at 326 mL/min) is set in the GUI's in-memory status instead of
pressing valve buttons.

The four tests capture 24 states per language through real clicks: settings
menus, Sample Lines and Control Panel; Home, plot, display settings and the
measurement wizard up to its final **Start** (not pressed); results, details, the
real Filter flow with the line picker; and unsaved alarm, digital input (with the Line box and scheduler), output
and input-source drafts. The results and plot use the product's date filter and
*1 Month* chart span for the line period. A request guard fails the run on any
settings save or hardware/run request; each locale's requests are kept in
`native/<locale>/requests-<test>.json`. The web capture filters the Online mode
results by name in the real grid and records the column bounds.

`prepare-bactoswitch-figures.mjs` derives the highlights from each language's
control trees (`bactoswitch-layouts.mjs`), reuses each edition's alt text, and
registers the figures. Render them, review every final image, record verdicts
with `node scripts/gui-capture/record-reviews.mjs <verdicts.json>` (each verdict
names the reviewed image's SHA-256), then apply and check as usual.

## Text overflow check

Every native harness logs `CAPTURE_TEXT <locale>/<state>` beside each capture: the
read-only layout metrics of each visible Qt Quick `Text` item (`textMetrics.js`),
with its painted size, fit mode, alignment and ancestor rectangles. Nothing in
the GUI is changed. `text_overflow.py` reads these lines from any capture logs and
reports text that is painted larger than its box (`self`), outside its nearest
sized container or the screen, cut by a non-scrolling clip, elided by Qt, or
overlapping other text in the same layer (screen, modal or bar). Text behind an
open modal and text scrolled outside a list viewport are ignored. `box` marks a
text box that extends past its container: harmless while the text fits, but the
cause of overflow once a translation is longer. The check compares text with
text only: text running under an opaque control (a button drawn above it) is
not reported, so the visual review still matters.

```sh
python3 scripts/gui-capture/runtime/text_overflow.py output/gui-capture/runtime/capture-*.log \
  output/gui-capture/{scheduler,bactoswitch,activation,digital-output,online-results}/capture-*.log
node scripts/gui-capture/text-overflow-crops.mjs elided clipped self container screen overlap
```

The report is `output/gui-capture/text-overflow/report.json`; the crops outline the
painted text (red), its box (blue) and its container (green). Confirm each
finding in the crop before changing the GUI. `CustomText` shrinks with
`Text.Fit` only within its `width`, so the usual fix is the width: bind it to
the real container instead of leaving it implicit or fixed. To verify a GUI
change without replacing the capture harness, build the patched tree into
another directory and point `GUI_CAPTURE_EXECUTABLE` at it (honored by
`capture.py` and the scheduler and digital-output helpers).
