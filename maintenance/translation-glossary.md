# BactoSense translation glossary

Preferred terminology for the English source and the German (DE), French (FR), Italian (IT) and Spanish (ES) editions. Apply it to prose, headings, table cells, captions, alternative text and index entries when editing translations.

The current English Markdown is authoritative for meaning, procedures, specifications and safety requirements. The older German and French PDFs establish terminology; they must not replace newer English instructions. Italian and Spanish terms are editorial choices for this manual, not quotations from approved Italian or Spanish PDFs.

## Sources and precedence

| Reference | Local source | Use |
| --- | --- | --- |
| EN | [Current English chapters](../docs/welcome.md) and [English source PDF](../UM_0006-EN_BactoSense_User_Manual.pdf) | Current content, technical meaning, identifiers and literal UI labels. |
| DE-PDF | [German original](../UM_0006-DE_BactoSense_Bedienungsanleitung.pdf), **UM_0006-01DE**, valid from software **3.1.0** | Chapter 1: cytometry; chapters 3–5: hardware and sampling; chapters 8–11: operation and gates; chapters 15–17: maintenance and errors. |
| FR-PDF | [French original](../UM_0006-FR_BactoSense_Manuel_d'Utilisation.pdf), **UM_0006-01FR**, valid from software **3.1.0** | Corresponding chapters for French terminology, with corrections for inconsistent or misleading wording. |
| Current translations | [DE](../i18n/de/docusaurus-plugin-content-docs/current/welcome.md), [FR](../i18n/fr/docusaurus-plugin-content-docs/current/welcome.md), [IT](../i18n/it/docusaurus-plugin-content-docs/current/welcome.md), [ES](../i18n/es/docusaurus-plugin-content-docs/current/welcome.md) | Existing usage and consistency review; a variant does not override the preferred terminology below. |

The PDFs have different pagination. Compare chapter and section numbers, not interchangeable printed page numbers. This glossary was checked against locally extracted text from both PDFs. Those ignored working extracts are disposable; the PDFs linked above are the durable references.

Reference file SHA-256 checksums:

| Reference | SHA-256 |
| --- | --- |
| DE-PDF | `4cf776325c92f7a5a74cbf63a3c3eb4fc706074a24c7aad4b5b05236f0d8cf2a` |
| FR-PDF | `ba75fb61984662d402ba1122830e3c889e3afa59c638b42f0470aba65fae97c7` |

The DE/FR columns contain normalized editorial forms grounded in those sources, not claims of verbatim wording. Normalization resolves grammar, compounds, ambiguous hardware names and inconsistent synonyms. For newer concepts absent from an older glossary, translate the current English definition.

## Rules that take precedence over the term tables

1. **Preserve literal controls.** When referring to an English label visible in a retained screenshot, keep its exact wording: **Home**, **Settings**, **System settings**, **System info**, **Start**, **Next**, **Save**, **Cancel**, **Re-gate**, **Clear Errors**, **Prime**, **Self-check**, **Clean Optics**, **Clean Sampling Device**, **Enrol**, etc. Translate the surrounding instruction. Use a localized label only when verified against the corresponding localized interface; do not invent it from this glossary.
2. **Preserve product names and identifiers.** Keep BactoSense CORE/SMART/PURE/Online, BactoCloud, BactoLink, BactoSwitch, BactoCare Essential/Plus, Washstation, Scientific Package, Management Package and Gate+ unchanged. Keep Modbus TCP, HTTP, HTTPS, FTP, VNC, VPN, NTP, FCS, CSV and XLSX unchanged.
3. **Preserve result acronyms.** Keep TCC, ICC, ACC, HACC, LACC, HACP, HNA, LNA, HNAC, LNAC, HNAP, CBC, EBC, NBC, FL1, FL2, FSC and SSC unchanged. The old German PDF uses GZZ/IZZ/AZZ and related localized forms; do not restore them. Translate their explanations.
4. **Preserve values and references.** Do not translate register addresses, bit indices, error codes, part numbers, filenames, extensions, URL parameters, account names (**basic**, **advanced**, **admin**), formulas, section identifiers or image paths. Preserve numerical values, inequalities and units. Do not substitute limits from an older translation.
5. **Distinguish quantities.** A cell count, a concentration in cells/mL and a percentage are different quantities. Do not turn “intact” into “active”, “total” into “viable”, or a cytometry “gate” into a physical door or valve.
6. **Use native notices.** Keep Markdown directive identifiers **danger**, **warning** and **info** in English. Translate only their concise custom titles and contents, e.g. **:::info[Informations complémentaires]**. Current caution notices use the native **warning** presentation; do not reintroduce bitmap notice icons or weaken instructions.
7. **Use a consistent instructional register.** Prefer direct polite instructions in DE/FR, the neutral instructional infinitive in IT and formal direct instructions in ES. Preserve the force of “must”, “must not”, “only” and “recommended”.

For example: DE “Drücken Sie **Prime**.”; FR “Appuyez sur **Prime**.”; IT “Premere **Prime**.”; ES “Pulse **Prime**.” The process in prose is **Ansaugen / amorçage / adescamento / cebado**.

## Instrument, components and consumables

Reference basis: DE-PDF and FR-PDF chapters 1, 3, 5, 8.9 and 18. Distinguish a physical component from its service or process.

| English | DE | FR | IT | ES |
| --- | --- | --- | --- | --- |
| user manual | Bedienungsanleitung | manuel d’utilisation | manuale d’uso | manual de usuario |
| instrument | Gerät | instrument | strumento | instrumento |
| power supply unit | Netzteil | bloc d’alimentation | alimentatore | fuente de alimentación |
| power supply (electrical supply) | Spannungsversorgung | alimentation électrique | alimentazione elettrica | alimentación eléctrica |
| power button | Ein-/Aus-Taste | bouton d’alimentation | pulsante di accensione | botón de encendido |
| touchscreen | Touchscreen | écran tactile | touchscreen | pantalla táctil |
| type plate / rating plate | Typenschild | plaque signalétique | targhetta identificativa | placa de características |
| cartridge | Kartusche | cartouche | cartuccia | cartucho |
| cartridge compartment door | Kartuschenfachtür | porte du compartiment de cartouche | sportello del vano cartuccia | puerta del compartimento del cartucho |
| reagent | Reagenz | réactif | reagente | reactivo |
| cartridge refill | Nachfüllen der Kartusche | remplissage de la cartouche | ricarica della cartuccia | recarga del cartucho |
| expiration date | Verfallsdatum | date de péremption | data di scadenza | fecha de caducidad |
| cartridge filling level | Kartuschenfüllstand | niveau de remplissage de la cartouche | livello di riempimento della cartuccia | nivel de llenado del cartucho |
| tubing / tube (fluidic line) | Schlauch | tuyau | tubo | tubo |
| inlet tubing | Einlassschlauch | tuyau d’entrée | tubo d’ingresso | tubo de entrada |
| outlet tubing | Auslassschlauch | tuyau de sortie | tubo di uscita | tubo de salida |
| ferrule | Klemmring | bague de serrage | ogiva | férula |
| fixation ring | Befestigungsring | bague de fixation | ghiera di fissaggio | anillo de fijación |
| hex nut driver | Sechskant-Steckschlüssel | clé à douille hexagonale | chiave a bussola esagonale | llave para tuercas hexagonales |
| desiccant bag | Trockenmittelbeutel | sachet déshydratant | sacchetto essiccante | bolsa desecante |
| filter | Filter | filtre | filtro | filtro |
| drain | Ablauf | évacuation | scarico | desagüe |

**5 mL screw-cap tube**: DE *5-mL-Schraubröhrchen*, FR *tube à bouchon fileté de 5 mL*, IT *provetta da 5 mL con tappo a vite*, ES *tubo de 5 mL con tapón de rosca*. This sample container is not fluidic tubing.

Retain the door tool size **7 mm**. A nut driver is not an Allen key: avoid *Inbusschlüssel*, *clé Allen* or *chiave a brugola*. The older French *tournevis hexagonal* is ambiguous; the preferred term explicitly identifies a socket tool.

## Sampling and measurement

Reference basis: DE-PDF and FR-PDF chapters 5, 8.10 and 10. “Online” here means automatic sampling from a connected water source, not Internet access.

| English | DE | FR | IT | ES |
| --- | --- | --- | --- | --- |
| sample | Probe | échantillon | campione | muestra |
| grab sample | Einzelprobe | échantillon ponctuel | campione istantaneo | muestra puntual |
| manual sampling device | manuelles Probenahmegerät | dispositif d’échantillonnage manuel | dispositivo di campionamento manuale | dispositivo de muestreo manual |
| online sampling device | Online-Probenahmegerät | dispositif d’échantillonnage en ligne | dispositivo di campionamento in linea | dispositivo de muestreo en línea |
| manual mode (prose) | manueller Modus | mode manuel | modalità manuale | modo manual |
| automatic / auto mode (prose) | automatischer Modus | mode automatique | modalità automatica | modo automático |
| measurement | Messung | mesure | misura | medición |
| measurement interval | Messintervall | intervalle de mesure | intervallo di misura | intervalo de medición |
| replicate | Wiederholungsmessung | répétition | ripetizione | réplica |
| prime / priming (process) | Ansaugen | amorçage | adescamento | cebado |
| backflush | Rückspülung | rinçage à contre-courant | controlavaggio | lavado a contracorriente |

Keep **Manual**, **Auto**, **Replications** and **Prime** when quoting interface labels. A replicate is another measurement of the same sample, not a second independently collected sample. Cartridge initialization, filling reagent tubing and priming are distinct procedures.

## Flow cytometry and result parameters

Reference basis: DE-PDF and FR-PDF chapters 1, 9.1 and 11. Current English chapter 1 and sections 11.2–11.3 govern newer cartridge types and definitions. Retain each acronym alongside its translated explanation.

| English | DE | FR | IT | ES |
| --- | --- | --- | --- | --- |
| flow cytometry | Durchflusszytometrie | cytométrie en flux | citometria a flusso | citometría de flujo |
| gate | Gate | fenêtre | gate | región de análisis |
| gate set / gating set | Gate-Set | jeu de fenêtres | set di gate | conjunto de regiones de análisis |
| polygon gate | Polygon-Gate | fenêtre polygonale | gate poligonale | región poligonal |
| gating strategy | Gatingstrategie | stratégie de fenêtrage | strategia di gating | estrategia de análisis por regiones |
| regating | Regating | redéfinition des fenêtres | riapplicazione dei gate | reanálisis con otras regiones |
| dot plot | Dotplot | nuage de points | grafico a punti | diagrama de puntos |
| histogram | Histogramm | histogramme | istogramma | histograma |
| forward scatter (FSC) | Vorwärtsstreuung (FSC) | diffusion vers l’avant (FSC) | diffusione in avanti (FSC) | dispersión frontal (FSC) |
| side scatter (SSC) | Seitenstreuung (SSC) | diffusion latérale (SSC) | diffusione laterale (SSC) | dispersión lateral (SSC) |
| fluorescence | Fluoreszenz | fluorescence | fluorescenza | fluorescencia |
| cell count | Zellzahl | nombre de cellules | conteggio cellulare | recuento celular |
| cell concentration | Zellkonzentration | concentration cellulaire | concentrazione cellulare | concentración celular |
| Total Cell Count (TCC) | Gesamtzellzahl (TCC) | nombre total de cellules (TCC) | conteggio cellulare totale (TCC) | recuento total de células (TCC) |
| Intact Cell Count (ICC) | Intaktzellzahl (ICC) | nombre de cellules intactes (ICC) | conteggio delle cellule integre (ICC) | recuento de células intactas (ICC) |
| Active Cell Count (ACC) | Anzahl aktiver Zellen (ACC) | nombre de cellules actives (ACC) | conteggio delle cellule attive (ACC) | recuento de células activas (ACC) |
| High Nucleic Acid (HNA) | hoher Nukleinsäuregehalt (HNA) | haut taux d’acide nucléique (HNA) | alto contenuto di acidi nucleici (HNA) | alto contenido de ácidos nucleicos (HNA) |
| Low Nucleic Acid (LNA) | niedriger Nukleinsäuregehalt (LNA) | faible taux d’acide nucléique (LNA) | basso contenuto di acidi nucleici (LNA) | bajo contenido de ácidos nucleicos (LNA) |
| High Nucleic Acid Count (HNAC) | Anzahl der HNA-Zellen (HNAC) | nombre de cellules HNA (HNAC) | conteggio delle cellule HNA (HNAC) | recuento de células HNA (HNAC) |
| Low Nucleic Acid Count (LNAC) | Anzahl der LNA-Zellen (LNAC) | nombre de cellules LNA (LNAC) | conteggio delle cellule LNA (LNAC) | recuento de células LNA (LNAC) |
| High Nucleic Acid Percentage (HNAP) | prozentualer Anteil der HNA-Zellen (HNAP) | pourcentage de cellules HNA (HNAP) | percentuale di cellule HNA (HNAP) | porcentaje de células HNA (HNAP) |
| HACC | Anzahl aktiver Zellen oberhalb der HACC-Grenze (HACC) | nombre de cellules actives au-dessus du seuil HACC (HACC) | conteggio delle cellule attive sopra la soglia HACC (HACC) | recuento de células activas por encima del umbral HACC (HACC) |
| LACC | Anzahl aktiver Zellen unterhalb der HACC-Grenze (LACC) | nombre de cellules actives en dessous du seuil HACC (LACC) | conteggio delle cellule attive sotto la soglia HACC (LACC) | recuento de células activas por debajo del umbral HACC (LACC) |
| HACP | prozentualer HACC-Anteil an ACC (HACP) | pourcentage de HACC parmi les ACC (HACP) | percentuale di HACC rispetto ad ACC (HACP) | porcentaje de HACC respecto a ACC (HACP) |
| Coliform Cell Count (CBC) | Anzahl coliformer Zellen (CBC) | nombre de cellules coliformes (CBC) | conteggio delle cellule coliformi (CBC) | recuento de células coliformes (CBC) |
| E. coli Cell Count (EBC) | Anzahl der E.-coli-Zellen (EBC) | nombre de cellules E. coli (EBC) | conteggio delle cellule di E. coli (EBC) | recuento de células de E. coli (EBC) |
| Enterococcus Cell Count (NBC) | Enterokokken-Zellzahl (NBC) | nombre de cellules Enterococcus (NBC) | conteggio delle cellule di Enterococcus (NBC) | recuento de células de enterococos (NBC) |

Use *fenêtre* for a French geometric selection and *fenêtrage* for the operation/strategy, not interchangeably for every gate set. *Refenêtrage* is an acceptable short form after defining *redéfinition des fenêtres*. Never use *porte* for a cytometry gate.

Spanish may shorten *región de análisis* to *región* and *conjunto de regiones de análisis* to *conjunto de regiones* once the context is clear. At first mention, *región de análisis (gate)* connects it to English labels. Italian retains *gate* rather than translating it literally. These are deliberate editorial choices.

HACC and LACC describe active cells classified by the FL1 threshold in the ACC analysis; do not redefine them as intact cells. Preserve the current manual’s formulas and full gate definitions.

## Operation and maintenance

Reference basis: DE-PDF and FR-PDF chapters 8 and 15–17. These terms describe processes; literal interface controls remain unchanged.

| English | DE | FR | IT | ES |
| --- | --- | --- | --- | --- |
| settings | Einstellungen | paramètres | impostazioni | configuración |
| user role | Benutzerrolle | rôle utilisateur | ruolo utente | rol de usuario |
| password | Passwort | mot de passe | password | contraseña |
| clear errors | Fehler löschen | acquitter les erreurs | azzerare gli errori | borrar errores |
| automatic self-check | automatischer Selbsttest | autovérification automatique | autodiagnosi automatica | autocomprobación automática |
| preventive maintenance | vorbeugende Wartung | maintenance préventive | manutenzione preventiva | mantenimiento preventivo |
| calibration | Kalibrierung | étalonnage | calibrazione | calibración |
| validation | Validierung | validation | validazione | validación |
| system suitability test | Systemeignungstest | test d’adéquation du système | test di idoneità del sistema | prueba de idoneidad del sistema |
| decontamination | Dekontamination | décontamination | decontaminazione | descontaminación |
| storage | Lagerung | stockage | conservazione | almacenamiento |
| disposal | Entsorgung | élimination | smaltimento | eliminación |

Clearing errors resets the error state after resolving the cause; it does not delete measurement data or repair the cause automatically. Calibration, validation, self-check and system suitability testing are separate activities.

## Safety notices

Reference basis: DE-PDF and FR-PDF sections 2.3, 2.5–2.7 and chapter 4. Translate the meaning without changing notice severity.

| English | DE | FR | IT | ES |
| --- | --- | --- | --- | --- |
| danger | Gefahr | danger | pericolo | peligro |
| warning | Warnung | avertissement | avvertimento | advertencia |
| caution | Vorsicht | attention | attenzione | precaución |
| additional information | zusätzliche Informationen | informations complémentaires | informazioni aggiuntive | información adicional |
| electric shock | elektrischer Schlag | choc électrique | scossa elettrica | descarga eléctrica |
| risk of injury | Verletzungsgefahr | risque de blessure | rischio di lesioni | riesgo de lesiones |
| material damage | Sachschaden | dommages matériels | danni materiali | daños materiales |
| protective earth (PE) | Schutzleiter (PE) | terre de protection (PE) | terra di protezione (PE) | tierra de protección (PE) |
| intended use | bestimmungsgemäße Verwendung | utilisation conforme | uso previsto | uso previsto |
| improper use | unsachgemäßer Gebrauch | utilisation non conforme | uso improprio | uso indebido |

Use a specific short custom title when possible, such as the translated equivalent of “Disconnect power safely”. This table does not require replacing every custom title with a generic severity label.

## Interfaces, networking and data

Reference basis: DE-PDF and FR-PDF chapters 6, 7 and 12–14. BactoCloud enrolment and organization wording follows current English chapter 14 where it exceeds the older PDFs.

| English | DE | FR | IT | ES |
| --- | --- | --- | --- | --- |
| I/O-Box (accessory, prose) | IO-Box | boîte d’E/S | modulo I/O | caja de E/S |
| field bus interface | Feldbusschnittstelle | interface de bus de terrain | interfaccia bus di campo | interfaz de bus de campo |
| digital input | digitaler Eingang | entrée numérique | ingresso digitale | entrada digital |
| digital output | digitaler Ausgang | sortie numérique | uscita digitale | salida digital |
| analogue output | analoger Ausgang | sortie analogique | uscita analogica | salida analógica |
| register | Register | registre | registro | registro |
| address offset | Adressoffset | décalage d’adresse | offset dell’indirizzo | desplazamiento de dirección |
| IP address | IP-Adresse | adresse IP | indirizzo IP | dirección IP |
| firewall | Firewall | pare-feu | firewall | cortafuegos |
| export data | Daten exportieren | exporter les données | esportare i dati | exportar datos |
| import settings | Einstellungen importieren | importer les paramètres | importare le impostazioni | importar la configuración |
| instrument enrolment | Geräteregistrierung | enregistrement de l’instrument | registrazione dello strumento | registro del instrumento |
| enrolment code | Registrierungscode | code d’enregistrement | codice di registrazione | código de registro |
| organization | Organisation | organisation | organizzazione | organización |
| measurement history | Messverlauf | historique des mesures | cronologia delle misure | historial de mediciones |

Keep **I/O-Box** when quoting the accessory’s literal name; the explanatory noun in prose may follow the table. Keep **Enrol instrument**, **Generate new code**, **Enrol**, **Unenrol**, **Last seen** and **Enrolled since** when identifying current BactoCloud controls or fields. Account registration and instrument enrolment are different actions even where the same base noun is used.

## Context and accepted variants

These decisions record recurring source variants and accepted contextual differences. Apply the preferred treatment during updates; exact interface labels remain exceptions.

| Edition / area | Observed variation | Preferred treatment |
| --- | --- | --- |
| DE, gate terminology | The source PDF and translated passages use *Gate-Set*, *Gate-Satz* and *Gating Set*. | Use **Gate-Set** for the collection and **Gatingstrategie** for the rule. |
| DE, fluid outlet | The older PDF uses *Verwurf* in drain/outlet descriptions. | Use **Ablauf** for the drain. Distinguish it from **Auslassschlauch**, the outlet tube. |
| FR, sampling and maintenance | Chapters 5 and 15 use both *tubulure(s)* and *tuyau(x)*. | Prefer **tuyau(x)** for individual tubes; use a more specific assembly term only when justified by English. |
| FR, gates | The PDF varies between *ensemble de délimitation*, *fenêtrage*, *ensemble de fenêtres* and *jeu de fenêtres*; some variants passed into the translation. | Use **jeu de fenêtres** for a set, **fenêtrage** for the operation and **fenêtre** for one gate. |
| FR, ACC descriptions | The older PDF has inconsistent descriptions in its ACC table. | Follow current English: **cellules actives** versus **cellules intactes**, unchanged ACC/ICC labels and formulas. |
| IT, manual name | Earlier translations alternated between *manuale d’uso* and *manuale utente*. | Prefer **manuale d’uso** in prose and titles. Preserve a verified literal catalog name if applicable. |
| IT, I/O accessory | Chapter 6 uses *I/O-Box*, while welcome/index prose uses *modulo I/O*. | Acceptable literal-name distinction; introduce **modulo I/O (I/O-Box)** on first prose mention. |
| ES, gates | *Región de análisis* and *región*, and full/short forms of *conjunto de regiones*, both occur. | Accept the short form after the full definition; avoid introducing a third synonym. |
| ES, tools and counts | *Llave para tuercas hexagonales* is shortened in captions; *recuento de células* and *recuento celular* both occur. | Accept contextual abbreviations, but never turn the tool into an Allen key or a count into a concentration. |
| All, screenshot labels | New prose often quotes English controls; older DE/FR references contain localized captions. | Match the exact label visible in the accompanying screenshot. Do not globally replace ordinary words that may also be literal controls. |

## Applying and maintaining the glossary

Consult this glossary before adding or revising any translation. Use the preferred term when it describes the same concept, and check the current English chapter and the relevant DE/FR PDF section when the meaning is uncertain. An established literal interface label takes precedence over a prose translation. When English content changes, update all four translated editions; when a terminology decision changes, update the glossary and every affected locale together.

For terminology-only edits, preserve chapter IDs, slugs, anchors, links, image references, tables and notice types. Review every replacement in context, especially “gate”, “clear”, “sample”, “count”, “port”, “register” and “power”. These words have multiple meanings and are unsuitable for unrestricted replacement.

Compare every numerical limit, unit, formula, protocol name, error code and directional instruction against English. Verify that no sentence, cell, safety instruction or new English feature was omitted. Run the existing content/localization checks, then verify the affected site pages and generated locale PDF. Add a glossary entry for a new technical term rather than inventing a different equivalent in each chapter.
