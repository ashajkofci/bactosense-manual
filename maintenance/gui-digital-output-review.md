# Digital output procedure review

Chapter 6.6 steps 4–7 previously contained flattened miniature tables, such as `Output 1 2 3 4 Critical error 0 / / /`. The five editions now give a short instruction naming the actual GUI row and show a small screenshot of its four numbered controls. Existing explanations of 1 (closed), 0 (open), / (unaffected), error-output defaults and enabled-alarm assignment remain beside the controls.

The figures use real production Qt screenshots. Base-state values come from the earlier reviewed native captures. Five additional captures scroll the actual digital-output list to its lower rows. The captured values are base `1 1 1 1`, critical error `0 / / /`, non-critical error `/ 0 / /`, and the two enabled example alarms `/ / 0 /` and `/ / / 0`. The alarm captions identify the captured High TCC and High HNAP rows; the former flattened `/ / 0 0` example is not presented as a factory default.

Each crop combines the genuine 1–4 header with the relevant value row, preserving all four controls and their aspect ratio. The numeric header is language-neutral and comes from the clean English strip; this avoids a fragment of German `Ausgang` entering the crop. Each value row comes from the corresponding localized capture. No controls, words or values are painted into the images.

Compiled row labels are used in the instructions, including German **Normalzustand**, French **Etat initial**, Italian **Stato di riferimento** and Spanish **Estado base**. Capture only enabled the second alarm in an unsaved teaching draft. Output settings were neither changed nor saved, and no hardware action ran. The isolated processes were stopped and the sibling GUI/server sources remain untouched.

Versioned source and text evidence is in [the procedure record](gui-digital-output-review.json); per-image reviewed hashes are in [the screenshot manifest](gui-screenshots.json). Private capture, geometry and review evidence is under ignored `output/gui-capture/digital-output/` and `output/gui-digital-output-review/`.

To reproduce the additive figures after preparing the original native runtime:

```sh
python3 scripts/gui-capture/runtime/digital_outputs_capture.py
node scripts/gui-capture/prepare-digital-output-figures.mjs
# Pass only the 20 printed IDs to render-figures.mjs; review before signing.
```

The legacy preparation script preserves this additive catalog. The optional English import normalizer uses eight file/section/step/cell mappings to restore the corrected instructions and images when importing the original PDF.

The isolated five-language website build, final PDF compilation and all three content/translation/screenshot checks pass. Browser verification covers 15 table views at desktop, 390 px and 320 px widths, 60 image/cell comparisons and all 20 image-zoom dialogs, with no errors or document overflow. Independent reviewers inspected 12 affected translated PDF pages; the primary agent inspected the three English pages. All four illustrated steps remain readable and inside complete table rows. The German orphaned table header is fixed by grouping the header and first step during print assembly, using the figure's localized alt to identify it even when the PNG is inlined. PDF verification finds all 77 expected GUI images per edition as exact decoded RGB matches (385 total), with every placement inside its page.

The stable reviewed website and PDFs are in ignored `output/gui-digital-output-review/final-site/`. Its chapter 6.6 sections and 20 procedure image hashes match the working files. The shared checkout's latest full content checks report unrelated unfinished chapter 10 scheduler figures and translations from concurrent work. Those sources and its generated `public/` tree were preserved; this review signs the isolated copies.
