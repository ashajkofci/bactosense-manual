# Other manuals source review

The six English PDFs supplied at the repository root were imported as independently editable Markdown documents in `manuals/other-manuals/`. Each document is one website chapter and its own PDF publication, using the BactoSense notice, image, table, link, search and PDF pipeline. Source PDFs are not copied into the downloads and are not required to build the site.

| Source PDF | Pages | Chapter | Document ID / revision |
| --- | --- | --- | --- |
| `40101-11EN_Quick_Guide_BactoSense-1.pdf` | 2 | `quick-guide.md` | 40101-11EN / 11 |
| `UM_0003-EN_User_Manual_Validation_Kit_BactoSense.pdf` | 6 | `validation-kit.md` | UM_0003-01EN / 01 |
| `UM_0004-EN_System_Suitability_Test_Kit_BactoSense_PURE.pdf` | 5 | `sst-bactosense-pure.md` | UM_0004-01EN / 01 |
| `UM_0005-EN_System_Suitability_Test_Kit_AQU@Sense.pdf` | 5 | `sst-aquasense.md` | UM_0005-01EN / 01 |
| `UM_40108-EN_Cleaning_Kit_BactoSense.pdf` | 4 | `cleaning-kit.md` | 40108-02EN / 02 |
| `UM_40501-EN_BactoLink.pdf` | 22 | `bactolink.md` | 40501-01_EN / 1; valid from software 2.2 |

PDF columns, line wrapping, repeated headings/footers and printed-page references were replaced with Markdown paragraphs, tables, ordered procedures and stable section links. The instrument instructions, reagent quantities, storage limits, acceptance criteria and support organisations were retained. In particular, the Validation Kit uses two analysis replications, whereas the SST kits use one; non-biological cleaning includes a three-hour wait and three rinsing Prime replications.

Figures under `static/img/other-manuals/` were extracted from the original embedded images. Identical image bytes were deduplicated. The reagent insertion illustrations originate from Validation Kit page 3, SST page 3 and Cleaning Kit page 3. The reference dotplots on Validation Kit page 5 and SST page 4 are identical and share one asset. The SST kits also share their identical insertion and optical-result illustrations. The Quick Guide's four status icons come from page 2. BactoLink's dimensions, connection diagram, connector and mounting pictures and interface examples come from PDF pages 5–20. No full-page PDF facsimiles are used on the site.

Editorial corrections:

- The source's `SCC` spelling for side scatter in reference-validation instructions was normalised to `SSC`, consistent with the actual measurement channel.
- The Validation Kit's Part C introductory reference to “Reference Validation” was corrected to refer to the relevant partial validation.
- BactoLink's instruction to tighten flanged nuts with a “13 mm Allen wrench” is expressed as a 13 mm wrench; the source's separate 5 mm Allen key requirement is retained.
- BactoLink's erroneous repeated “Instruction Manual BactoSense” page header was omitted. Its original publisher notice and October 2023 edition were retained.

The BactoLink edition explicitly describes BactoHub and retains that service's source terminology and screenshots. It has not been rewritten as a BactoCloud workflow. Its PoE injector specification table lists 165 × 165 × 54 mm while its figure caption states a 65.5 mm total height; both source values are retained pending publisher clarification.

Maintain the current Markdown directly. Re-extraction is unnecessary for adding, removing, reordering or editing a chapter.

All six manuals also have German, French, Italian and Spanish editions, generated through the repository's translation workflow using its glossary and local reference context. Their numerical values, routes, section anchors, tables, notices and shared illustrations were checked against the English documents. Publication metadata is shared across editions; generated PDF filenames append the export language to the document ID and use the translated title. One-chapter PDFs omit the Contents page.

The Other manuals home-page thumbnail, `static/img/home/bactolink.webp`, comes from the BactoLink product photograph embedded on the source PDF's cover.
