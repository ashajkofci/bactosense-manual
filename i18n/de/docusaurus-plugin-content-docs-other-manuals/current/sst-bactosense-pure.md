---
id: sst-bactosense-pure
title: Systemeignungstest-Kit für BactoSense PURE
sidebar_position: 3
slug: /sst-bactosense-pure
document_id: UM_0004-01
manual_version: "01"
---

## Allgemeine Informationen {#general-information}

Gemäß United States Pharmacopeia USP \<1058> überprüft der Systemeignungstest (SST), ob ein System die im Testverfahren festgelegten Kriterien erfüllt. Das SST-Kit für BactoSense PURE ist ein Reagenzienkit zur Durchführung dieser Leistungsüberprüfung.

Voraussetzungen:

- BactoSense PURE mit installiertem manuellem Probenahmegerät.
- SST-Kit, das unter geeigneten Bedingungen gelagert wurde und dessen Verfallsdatum nicht überschritten ist.
- Eine persönliche Geräteanmeldung mit **Advanced**- oder **Admin**-Berechtigungen.

Lagern Sie das Kit gekühlt bei **2–8 °C (35–47 °F)** und lichtgeschützt. Unter diesen Bedingungen beträgt die Haltbarkeit **ein Jahr**. Das Kit reicht für **10 Tests**.

## Sicherheitshinweise {#safety}

:::gloves[Schutzhandschuhe tragen]

Bei Hautkontakt sofort mit reichlich frischem Wasser abspülen. Bei Schmerzen oder Reizungen einen Arzt aufsuchen.

:::

:::warning[Schutzbrille tragen]

Bei Augenkontakt die Augen sofort 10–15 Minuten lang unter fließendem Wasser spülen, dabei die Augenlider auseinanderhalten und einen Arzt aufsuchen.

:::

:::info[Vor Gebrauch die Anweisungen lesen]

Befolgen Sie diese Anleitung und die Bedienungsanleitung für BactoSense PURE sorgfältig.

:::

## Inhalt {#contents}

| Artikel | Menge | Dokumentnummer des Sicherheitsdatenblatts | Verwendung |
| --- | --- | --- | --- |
| Alkoholtücher (Alcohol Wipes) | 10 | — | Einmalgebrauch |
| Beads-Lösung (Beads Solution) | 10 | 50106 | Einmalgebrauch |
| Referenzlösung (Reference Solution) | 10 | — | Einmalgebrauch |
| Sterile Lösung (Sterile Solution) | 10 | — | Einmalgebrauch |
| Röhrchenhalter (Tube Holder) | 1 | — | Mehrfachgebrauch |

Entsorgen Sie Einmalartikel gemäß den örtlichen Abfallentsorgungsvorschriften. Sicherheitsdatenblätter sind auf Anfrage bei bNovate Technologies SA erhältlich.

## Wann das Systemeignungstest-Kit zu verwenden ist {#when-to-use}

Führen Sie einen SST durch:

- Im Rahmen der Qualitätssicherung und Validierung, beispielsweise bei der Betriebsqualifizierung, Leistungsqualifizierung, einem Kartuschenwechsel oder einer Wartung.
- Nach einer Lagerung des Geräts von mehr als einem Monat.
- Wenn Hinweise darauf bestehen, dass Messergebnisse fehlerhaft sein könnten.

Das Verfahren besteht aus drei Teilen, die in dieser Reihenfolge durchgeführt werden: [Optische Validierung](#optical-validation), [Referenzvalidierung](#reference-validation) und [Sterilvalidierung](#sterile-validation). Alle Testakzeptanzkriterien müssen erfüllt sein. Das Verfahren dauert ungefähr **2,5 Stunden**.

## Vorbereitungen {#preparations}

1. Überprüfen Sie, dass das Verfallsdatum des SST-Kits nicht überschritten ist und das Kit unter den angegebenen Bedingungen gelagert wurde.
2. Entnehmen Sie ein Alkoholtuch, eine Beads-Lösung, eine Referenzlösung, eine sterile Lösung und den Röhrchenhalter.
3. Stellen Sie sicher, dass das manuelle Probenahmegerät fest am BactoSense PURE installiert ist.
4. Packen Sie das Alkoholtuch aus. Wischen Sie die Probenahmenadel von oben nach unten ab, um Verunreinigungen zu entfernen. Lassen Sie sie **30 Sekunden** trocknen.
5. Melden Sie sich am BactoSense PURE mit Ihrem persönlichen Benutzernamen und Passwort an. **Advanced**- oder **Admin**-Berechtigungen sind erforderlich.
6. Öffnen Sie **Home → Maintenance → Instrument validation**. Aktivieren Sie **Activate Instrument validation** und drücken Sie **Save**.
7. Fahren Sie mit Teil A fort.

## Teil A: Optische Validierung {#optical-validation}

Hierbei wird das optische System des Geräts durch Messung einer Lösung mit fluoreszierenden Partikeln getestet.

1. Befestigen Sie die Washstation am manuellen Probenahmegerät.
2. Öffnen Sie **Home → Manual mode → Start**. Wählen Sie **Clean Sampling Device with Washstation** mit **einer Wiederholungsmessung**. Drücken Sie **Next** und starten Sie das Protokoll.
3. Schütteln Sie nach Abschluss das Röhrchen mit der Beads-Lösung **10 Sekunden** lang kräftig von Hand oder mit einem Vortexmischer.
4. Entfernen Sie die Verschlüsse vom Röhrchen mit der Beads-Lösung und vom Röhrchenhalter. Setzen Sie das geöffnete Röhrchen in den Halter ein. Entfernen Sie die Washstation und befestigen Sie den Halter mit der Beads-Lösung.

   :::caution[Das gesamte Reagenzröhrchen verwenden]

   Setzen Sie das gesamte Reagenzröhrchen in den Röhrchenhalter ein, anstatt seinen Inhalt in den Halter zu gießen.

   :::

   ![Öffnen und Einsetzen eines Einweg-Reagenzröhrchens in den Röhrchenhalter](/img/other-manuals/sst-tube-holder-insertion.png "width=650")

5. Kehren Sie zur Protokollübersicht zurück. Wählen Sie **Prime** mit **einer Wiederholungsmessung**. Drücken Sie **Next** und starten Sie das Protokoll.
6. Kehren Sie nach Abschluss zur Protokollübersicht zurück. Wählen Sie **Beads Analysis** mit **einer Wiederholungsmessung**. Drücken Sie **Next** und starten Sie das Protokoll.
7. Überprüfen Sie die Ergebnisse. Alle folgenden Kriterien müssen erfüllt sein:

   **TCC: 50,000–75,000/mL**

   | Kanal | CV (%) | Median |
   | --- | --- | --- |
   | FL1 | Weniger als 15 | 5.7–6.5 |
   | FL2 | Weniger als 20 | 5.1–5.7 |
   | SSC | Weniger als 25 | 4.7–6.3 |

   ![Beispiel für Ergebnisse der optischen Validierung](/img/other-manuals/sst-optical-results.png "width=450")

8. Wenn der Test bestanden ist, entfernen Sie den Halter, entnehmen Sie das Röhrchen mit der Beads-Lösung, verschließen und entsorgen Sie es. Fahren Sie mit Teil B fort.

   Wenn der Test nicht bestanden ist, wiederholen Sie ihn und stellen Sie sicher, dass die Beads-Lösung gut durchmischt ist. Wenn der Test weiterhin nicht bestanden wird, wenden Sie sich an den bNovate-Support.

## Teil B: Referenzvalidierung {#reference-validation}

Hierbei wird der automatisierte Färbeprozess des Geräts getestet.

1. Befestigen Sie die Washstation am manuellen Probenahmegerät.
2. Öffnen Sie **Home → Manual mode → Start**. Führen Sie **Clean Sampling Device with Washstation** mit **einer Wiederholungsmessung** aus. Drücken Sie **Next** und starten Sie das Protokoll.
3. Entfernen Sie den Verschluss eines Röhrchens mit Referenzlösung und setzen Sie das gesamte Röhrchen wie in Teil A gezeigt in den Halter ein. Entfernen Sie nach Abschluss des Reinigungsprotokolls die Washstation und befestigen Sie den Halter mit der Referenzlösung.
4. Kehren Sie zur Protokollübersicht zurück. Führen Sie **Prime** mit **einer Wiederholungsmessung** aus.
5. Kehren Sie nach Abschluss zur Protokollübersicht zurück. Wählen Sie **Water Analysis** mit **einer Wiederholungsmessung**. Wählen Sie unter **Gates** die Option **ICC Default Gate**. Drücken Sie **Next** und starten Sie das Protokoll.
6. Vergleichen Sie die Hauptwolken der Bakterien mit den Referenzkriterien:

   | Dotplot | Akzeptanzkriterium |
   | --- | --- |
   | FL1 / FL2 | Hauptwolke oberhalb von 4.5 auf der FL1-Achse und unterhalb von 5 auf der FL2-Achse |
   | FL1 / SSC | Hauptwolke oberhalb von 2 und unterhalb von 5.5 auf der SSC-Achse |

   ![Referenz-Dotplots mit orange eingekreisten Hauptwolken der Bakterien](/img/other-manuals/validation-reference-dotplots.png "width=650")

   :::info[Aussehen der Wolken]

   Je nach Kartusche und Lagerbedingungen können die Wolken vom Beispiel abweichen.

   :::

7. Wenn der Test bestanden ist, entfernen Sie den Halter, entnehmen Sie das Röhrchen mit der Referenzlösung, verschließen und entsorgen Sie es. Fahren Sie mit Teil C fort.

   Wenn der Test nicht bestanden ist, wiederholen Sie ihn mit einer frischen Referenzlösung. Wenn der Test weiterhin nicht bestanden wird, wenden Sie sich an den bNovate-Support.

## Teil C: Sterilvalidierung {#sterile-validation}

Hierbei wird die Sauberkeit des Probenahmegeräts und des Fluidiksystems durch Messung von zellfreiem Wasser überprüft.

1. Befestigen Sie die Washstation am manuellen Probenahmegerät.
2. Öffnen Sie **Home → Manual mode → Start**. Führen Sie **Clean Sampling Device with Washstation** mit **einer Wiederholungsmessung** aus. Drücken Sie **Next** und starten Sie das Protokoll.
3. Entfernen Sie den Verschluss eines Röhrchens mit steriler Lösung und setzen Sie das gesamte Röhrchen wie in Teil A gezeigt in den Halter ein. Entfernen Sie nach Abschluss des Reinigungsprotokolls die Washstation und befestigen Sie den Halter mit der sterilen Lösung.
4. Kehren Sie zur Protokollübersicht zurück. Führen Sie **Prime** mit **einer Wiederholungsmessung** aus.
5. Kehren Sie nach Abschluss zur Protokollübersicht zurück. Wählen Sie **Water Analysis** mit **einer Wiederholungsmessung**. Wählen Sie **ICC Default Gate**, drücken Sie **Next** und starten Sie das Protokoll.
6. Überprüfen Sie das Ergebnis. Das Akzeptanzkriterium ist **ICC weniger als 100/mL**.
7. Wenn der Test bestanden ist, entfernen Sie den Halter, entnehmen Sie das Röhrchen mit der sterilen Lösung, verschließen und entsorgen Sie es. Legen Sie den Halter zurück in das SST-Kit, lagern Sie das Kit unter den angegebenen Bedingungen und befestigen Sie die Washstation am manuellen Probenahmegerät.

   Wenn der Test nicht bestanden ist, führen Sie eine biologische Dekontamination mit dem Cleaning Kit durch. Wiederholen Sie den Test mit einer frischen sterilen Lösung. Wenn der Test weiterhin nicht bestanden wird, wenden Sie sich an den bNovate-Support.

8. Öffnen Sie **Home → Maintenance → Instrument validation**. Deaktivieren Sie **Activate Instrument validation** und drücken Sie **Save**.

Der Systemeignungstest ist erfolgreich abgeschlossen, wenn alle drei Teile bestanden wurden.
