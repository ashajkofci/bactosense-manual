# Bactoweb manual capture

These scripts stage the current sibling `../bactoweb/app` and capture the actual
application against the disposable demo Bactoserver. They do not modify either
product repository or save settings, submit measurements, or reboot the device.

```sh
npm install --prefix output/gui-capture/web/deps --no-audit --no-fund --no-package-lock less@1.7.5
node scripts/gui-capture/web/stage.mjs
node scripts/gui-capture/web/capture.mjs
```

The manual repository's installed Playwright package and Chromium are required.
The API defaults to `http://127.0.0.1:18889`; change it with
`BACTOWEB_CAPTURE_API`. A temporary static/proxy server runs on port18910 for the
capture and closes when the run finishes. Change that with
`BACTOWEB_CAPTURE_PORT`. `BACTOWEB_CAPTURE_LOCALES=en,de,fr,it,es` selects locales.

Use only this disposable API fixture, whose local Admin account has an empty
PIN. Login follows the product form and receives the real expiring API session.
No session storage state or credentials are exported.

Current application scripts, views, templates, translations, fonts and styles
all come from the sibling checkout. Less1.7.5 compiles the current theme;
templates are regenerated from the current HTML. Since Bower is absent, only
third-party vendor JS/CSS are extracted from the sibling's 2023 release archive.
No old application bundle or old theme styles are used. Exact source commits
and dependency hashes are recorded in the ignored
`output/gui-capture/web/source-provenance.json`.

The capture uses the real language dropdown and sidebar navigation, waits for
fonts/plots/images, chooses the product's All data date range for historical
fixture measurements, and leaves animation stopped. To expose the FCS links in
the current narrow Files column, it hides unrelated metrics using the actual
ui-grid column menus. It records these choices in capture evidence.

Screenshots use descriptive filenames inside
`output/gui-capture/web/{en,de,fr,it,es}/`. Whole-screen PNGs are 2560×1600 pixels
(1280×800 CSS pixels, DPR 2). Crop `bounds` in `capture-evidence.json` use CSS
pixels; multiply by 2 to map them back to source PNGs. Every screenshot records
its route, purpose and bounds. Browser errors and HTTP failures are recorded
per locale. The current app briefly requests an unresolved interpolation URL
before the real dotplot image; final loaded image is verified before capture.

Annotated publication images are generated separately by the manual workflow.
Raw images, staged dependencies and browser evidence remain in ignored output.
