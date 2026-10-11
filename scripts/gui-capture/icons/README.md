# Current instrument GUI control captures

The atlas renders the production `MenuButtonView`, `ToolBarButton`,
`ImageIconBtn`, `ToolBarCenter`, and `ListItemError` components from the sibling
GUI's compiled QRC resources. It renders rare toolbar/error states directly so
that the manual does not depend on an accidental live instrument error. The
resulting map publishes only text-free control crops.

Start the disposable capture demo server and compile the native capture harness
as described in `../runtime/`. Then capture on macOS:

```sh
mkdir -p output/gui-capture/icons
env -u QT_QUICK_BACKEND \
  BACTOSERVER_URL=http://127.0.0.1:18889 \
  QT_QPA_PLATFORM=cocoa QSG_INFO=1 QSG_RENDER_LOOP=basic \
  output/gui-capture/runtime/qt-build/gui-capture \
  -input scripts/gui-capture/icons/tst_icons.qml \
  > output/gui-capture/icons/capture.log 2>&1
.venv/bin/python scripts/gui-capture/icons/build-map.py
```

The QML `outputRoot` points to this checkout's ignored output directory. Update
that property when reproducing the capture in a different checkout.

Use the Cocoa OpenGL renderer here: Qt's offscreen software backend drops the
production `OpacityMask` inside rounded `ImageIconBtn` controls while reporting
successful tests. The mapper requires GPU renderer evidence in the capture log
and rejects QML failures, blank crops, and out-of-bounds crops.

`maintenance/gui-icon-map.json` maps 38 old assets to 29 current icons with source
hashes and logical crop bounds. Review
`output/gui-capture/icons/review-contact-sheet.png` and each preview before
publishing the cropped assets. Event crops stop at the production icon boundary
to exclude adjacent error-type text. Final manual assets are written by the main
screenshot renderer, not by this mapper.

The inventory records two source-context inconsistencies that require
per-occurrence handling: the old system-settings glyph beside Factory reset
should use the current Maintenance glyph, and the old generic information glyph
beside the instrument-web account menu needs a current web-menu crop.
