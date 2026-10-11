# Native GUI screenshot runtime

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
