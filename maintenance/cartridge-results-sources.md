# CBC, EBC and NBC result documentation

Section 11.3.4–11.3.6 was added on 2026-10-11 for the software 3.2.0 manual. The current English chapter is authoritative; the four translations retain the same section IDs, parameters, units and table structure.

## Sources and claim mapping

| Source | Used for |
| --- | --- |
| [ID / FIB Sales Training Sep 2026](https://docs.google.com/presentation/d/1maOYcaX5wUEWv7WKxwX8K0DlrHzGmptbY7K0nyiaSyc/edit), modified 2026-10-07; slides 14, 19, 21 and 23–24 | Three separate cartridges; compatibility with BactoSense ID and SMART; one result parameter per cartridge; the β-galactosidase / β-glucuronidase / β-glucosidase target-enzyme mapping; fluorescent enzymatic labelling; cell counts and culture CFU measure different properties. |
| [bSense Modbus TCP register spec](https://docs.google.com/spreadsheets/d/13OVmMnMKYtpdMuPhPyI4OF6PVMhEGJ5Px9xBfMSxp0s/edit), modified 2026-09-23 | Independent CBC, EBC and NBC result registers introduced in software 3.2.0. Register addresses belong in chapter 7 and are not repeated here. |
| [BactoSense software 3.2.0 changelog](https://drive.google.com/file/d/1ej_AvIamSyguFemvjBhYamrnIMHtDxLb/view), release dated 2026-09-25 | Software 3.2.0 supports the FIB cartridge family; concentration units use 1/mL. |
| Sibling `bactosense/bactosense/gate_set.py`, classes `GateSetCBC`, `GateSetEBC` and `GateSetNBC` | Each type requires one gate (`cbc`, `ebc` or `nbc`), exposes exactly one matching result, normalizes it by sample volume, rounds it, and defines no additional computed parameters. The supplied checkout uses `gate_set.py`; no `gate_type.py` was present. |
| Sibling `bactoserver/config-default.yaml`, `cbc_default`, `ebc_default` and `nbc_default` | All three default gates are polygons on the FL1-FL2 plane. Coordinates are configuration values and are not prescribed by the manual. |
| Sibling `bactosense/bactosense/measurement.py`, result-export headings | CBC, EBC and NBC are exported with units `[1/mL]`. |

The Drive documents were read through the Google Drive connector. Internal pricing, customer examples, launch plans and other unrelated material were not copied into the manual. This file is maintenance provenance and is excluded from the static deployment.

The training deck describes EBC availability as forthcoming. The added subsections document its software-supported assay and results, without promising commercial availability or a shipment date. Timing, shelf life, cartridge capacity and sample limits are outside the scope of these result-parameter sections.

## Editorial maintenance

Edit `docs/11-results-and-data-analysis.md` and update its DE, FR, IT and ES counterparts together. Keep the body in `scripts/editorial/11-results-and-data-analysis.md` identical to the English chapter body so optional PDF re-extraction preserves the supplement. The source-page mapping remains unchanged because these new subsections have no corresponding pages in the older source PDF.

The new index entries point to 11.3.4 (CBC), 11.3.5 (EBC) and 11.3.6 (NBC). Tables 11-7 through 11-12 continue the existing numbering without changing earlier sections.
