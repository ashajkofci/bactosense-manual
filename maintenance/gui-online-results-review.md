# Online measurement result review

Section 11.1 now illustrates a selected TCC result in Online mode. The main screen, result-information window and enlarged FL1/FL2 dotplot all show the same shipped demo measurement: **DWTP TCC after SSF**, **11 March 2026 at 23:31**. Its TCC is **162860 cells/mL**, comprising LNAC **110497** and HNAC **52363**; HNAP displays **32.15%**. The archived scientific values, gate and plot files are unchanged.

The new **11** annotation identifies the trend plot of neighboring Online measurements. A real touch inside its production MouseArea opened `qrc:/controllers/autoScreens/AutoMainScreen.qml` in every language. The badge and leader avoid the status card and measurement markers. The legend links to section 10.2.3, which explains the full Online results chart. Existing dotplot callouts 3 and 4 continue to identify the distinct result-information preview and enlarged dotplot.

The native status card displays **Critical Deviation** for the measurement's archived **High TCC** alarm (`TCC > 159470`). A real touch opened its alarm details. Legend 5 now describes the Online alarm/warning status field. All other existing legends remain unchanged; the caption and introductory sentence identify the TCC Online example in all five editions. The maintained English editorial body matches the chapter.

Five explicitly named `/img/gui/{locale}/online-result-details.png` montages replace the earlier Manual ICC images at the same section position. Callouts 1–10 remain present, and each edition gains callout 11. The 324 other published GUI image bytes and complete figure/review records remain unchanged.

The fresh Qt 5 Cocoa OpenGL runtime compiles a private snapshot of the current production GUI resources at revision `6360d9fb5ee980c04dc967eaf3a11f6b3958c2f8`, including the existing manual-help changes in the shared product checkout. Its resource fingerprint is `e4f9b2232b99d3cd7781a58b3bd551d126a432ec3e30a88833b50de9179d839b`. The capture reads the disposable Bactoserver's shipped demo archive and checks both popup plots reach `Image.Ready`. Each result has 13 genuine neighboring measurements. All API settings remain unchanged, and no measurement or hardware action is started.

The versioned [procedure and source record](gui-online-results-review.json) and [screenshot manifest](gui-screenshots.json) retain the scope, geometry and reviewed image hashes. Private evidence is under `output/gui-online-results-review/` and `output/gui-capture/online-results/`.

To reproduce:

```sh
python3 scripts/gui-capture/runtime/online_results_capture.py
node scripts/gui-capture/prepare-online-result-figures.mjs
node scripts/gui-capture/render-figures.mjs en-online-result-details de-online-result-details fr-online-result-details it-online-result-details es-online-result-details
```

Review the five final images and sign their exact hashes before running the standard content checks and build. The general preparation script uses this layout's separate capture directory and preserves its capture-report references.

All three standard checks pass: 105 documents, 84 translations and 329 reviewed GUI figures with 405 labeled callouts. The isolated five-language website/PDF build passes. Browser review covers 15 chapter views at desktop, 390 px and 320 px widths, all 11 legends and five image-zoom dialogs, with no browser errors or document overflow.

The primary agent and independent subagents individually reviewed all 10 affected PDF pages across the five editions. Each final PDF embeds the new montage as an exact decoded RGB match. The complete image and caption stay together; the status and touch legends print in complete rows, and the translated PDF touch links resolve to section 10.2.3. The local generated `public/` tree and all five development/download PDF copies were refreshed from the reviewed build. Concurrent on-device-manual source and dependency edits were preserved.
