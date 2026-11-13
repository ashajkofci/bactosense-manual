---
id: validation-kit
title: Validierungskit für BactoSense
sidebar_position: 2
slug: /validation-kit
document_id: UM_0003-01
manual_version: "01"
---

## Allgemeine Informationen {#general-information}

Das Validierungskit ist ein Reagenzienkit zur Validierung der ordnungsgemäßen Funktion von BactoSense. Seine Reagenzien wurden für die Anwendung nach der Messung von Trinkwasserproben entwickelt. Das Kit ist möglicherweise nicht wirksam, wenn es unter ungeeigneten Bedingungen gelagert wurde, abgelaufen ist oder andere Proben als Trinkwasser gemessen wurden.

Lagern Sie das Kit gekühlt bei **2–8 °C (35–47 °F)** und lichtgeschützt. Unter diesen Bedingungen beträgt die Haltbarkeit **ein Jahr**. Das Kit reicht für **10 Validierungen**.

## Sicherheitshinweise {#safety}

:::gloves[Schutzhandschuhe tragen]

Spülen Sie bei Hautkontakt sofort mit reichlich frischem Wasser. Konsultieren Sie bei Schmerzen oder Reizungen einen Arzt.

:::

:::warning[Schutzbrille tragen]

Spülen Sie bei Augenkontakt die Augen sofort 10–15 Minuten lang unter fließendem Wasser und halten Sie dabei die Augenlider auseinander. Konsultieren Sie einen Arzt.

:::

:::info[Anweisungen vor Gebrauch lesen]

Befolgen Sie diese Anleitung und die [BactoSense-Bedienungsanleitung](/bactosense/) sorgfältig.

:::

## Inhalt {#contents}

| Artikel | Menge | Dokumentnummer des Sicherheitsdatenblatts | Verwendung |
| --- | --- | --- | --- |
| Alkoholtücher | 10 | — | Einmalig |
| Beads Solution | 10 | 50106 | Einmalig |
| Reference Solution | 10 | — | Einmalig |
| Sterile Solution | 10 | — | Einmalig |
| Tube Holder | 1 | — | Mehrfach |

Entsorgen Sie Einmalartikel gemäß den örtlichen Abfallentsorgungsvorschriften. Sicherheitsdatenblätter (SDS) sind auf Anfrage bei bNovate oder Ihrem lokalen Vertriebspartner erhältlich.

## Wann das Validierungskit zu verwenden ist {#when-to-use}

Führen Sie eine Gerätevalidierung durch:

- Nach dem Versand oder einem anderen Transport über längere Strecken mit Vibrationen oder Stößen.
- Nach einer Lagerung des Geräts von mehr als einem Monat.
- Wenn Anzeichen dafür vorliegen, dass Messergebnisse fehlerhaft sein könnten.

Die vollständige Validierung besteht aus drei Teilen, die in dieser Reihenfolge durchgeführt werden: [optische Validierung](#optical-validation), [Referenzvalidierung](#reference-validation) und [Sterilvalidierung](#sterile-validation). Alle Akzeptanzkriterien müssen erfüllt sein. Eine vollständige Validierung dauert etwa **3 Stunden**.

In bestimmten Fällen kann eine Teilvalidierung durchgeführt werden. Schließen Sie zuerst die Vorbereitungen ab und führen Sie anschließend den entsprechenden Teil durch.

## Vorbereitungen {#preparations}

1. Vergewissern Sie sich, dass das Kit nicht abgelaufen ist und unter den angegebenen Bedingungen gelagert wurde.
2. Entnehmen Sie für eine vollständige Validierung ein Alkoholtuch, eine Beads Solution, eine Reference Solution, eine Sterile Solution und den Tube Holder. Entnehmen Sie für eine Teilvalidierung nur das Tuch, den Tube Holder und die betreffende Lösung.
3. Stellen Sie sicher, dass das manuelle Probenahmegerät fest an BactoSense montiert ist.
4. Packen Sie das Alkoholtuch aus. Wischen Sie die Probenahmenadel von oben nach unten ab, um Verunreinigungen zu entfernen. Lassen Sie sie **30 Sekunden** trocknen.
5. Melden Sie sich als **Admin** an. Drücken Sie unter **Home → Maintenance → Self-check** auf **Rerun**. Vergewissern Sie sich, dass bei jedem Test ein grünes **PASS** angezeigt wird.
6. Öffnen Sie **Home → Maintenance → Instrument validation**. Aktivieren Sie **Activate Instrument validation** und drücken Sie auf **Save**.
7. Fahren Sie für eine vollständige Validierung mit Teil A fort. Fahren Sie für eine Teilvalidierung mit dem entsprechenden Teil fort.

## Teil A: Optische Validierung {#optical-validation}

Dabei wird das optische System durch Messung einer Lösung mit fluoreszierenden Partikeln geprüft.

1. Schließen Sie die [Vorbereitungen](#preparations) ab, falls noch nicht geschehen.
2. Befestigen Sie die Washstation am manuellen Probenahmegerät. Falls keine vorhanden ist, befestigen Sie ein leeres, sauberes 5-mL-Schraubröhrchen.
3. Öffnen Sie als **Admin** **Home → Manual mode → Start**. Wählen Sie **Clean Sampling Device with Washstation** mit **einer Wiederholungsmessung**. Wählen Sie ohne Washstation **Clean Sampling Device** mit **zwei Wiederholungsmessungen**. Drücken Sie auf **Next** und starten Sie das Protokoll.
4. Schütteln Sie nach Abschluss das Röhrchen mit Beads Solution **10 Sekunden** lang kräftig von Hand oder mit einem Vortexmischer.
5. Entfernen Sie die Verschlüsse vom Röhrchen mit Beads Solution und vom Tube Holder. Setzen Sie das geöffnete Röhrchen in den Halter ein. Entfernen Sie die Washstation und befestigen Sie den Halter mit der Beads Solution am manuellen Probenahmegerät.

   :::caution[Das gesamte Reagenzröhrchen verwenden]

   Setzen Sie das gesamte Reagenzröhrchen in den Tube Holder ein, anstatt seinen Inhalt in den Halter zu gießen.

   :::

   ![Öffnen des Reagenzröhrchens und Einsetzen des gesamten Röhrchens in den Tube Holder](/img/other-manuals/tube-holder-insertion.png "width=650")

6. Öffnen Sie **Home → Manual mode → Start**. Wählen Sie **Prime** mit **einer Wiederholungsmessung**. Drücken Sie auf **Next** und starten Sie das Protokoll.
7. Kehren Sie zur Protokollübersicht zurück. Wählen Sie **Beads Analysis** mit **zwei Wiederholungsmessungen**. Drücken Sie auf **Next** und starten Sie das Protokoll.
8. Prüfen Sie die Ergebnisse. Alle folgenden Kriterien müssen erfüllt sein:

   **TCC: 50,000–75,000/mL**

   | Kanal | CV (%) | Median |
   | --- | --- | --- |
   | FL1 | Weniger als 15 | 5.7–6.5 |
   | FL2 | Weniger als 20 | 5.1–5.7 |
   | SSC | Weniger als 25 | 4.7–6.3 |

   ![Beispiel für Messergebnisse der optischen Validierung](/img/other-manuals/validation-optical-results.png "width=450")

9. Wenn der Test bestanden ist, entfernen Sie den Tube Holder, entnehmen Sie das Röhrchen mit Beads Solution, verschließen Sie es und entsorgen Sie es. Fahren Sie mit Teil B fort.

   Wenn der Test nicht bestanden ist, prüfen Sie das Verfallsdatum und die Lagerbedingungen des Kits. Wiederholen Sie anschließend den Test und stellen Sie sicher, dass die Beads Solution gut durchmischt ist. Wenn die Tests weiterhin nicht bestanden werden, wenden Sie sich an den bNovate-Support oder Ihren lokalen Servicepartner.

## Teil B: Referenzvalidierung {#reference-validation}

Dabei wird der automatisierte Färbeprozess validiert.

1. Schließen Sie die [Vorbereitungen](#preparations) ab, wenn Sie diesen Teil einzeln durchführen.
2. Befestigen Sie die Washstation oder, falls keine vorhanden ist, ein leeres, sauberes 5-mL-Schraubröhrchen.
3. Öffnen Sie als **Admin** **Home → Manual mode → Start**. Führen Sie **Clean Sampling Device with Washstation** mit **einer Wiederholungsmessung** aus. Führen Sie ohne Washstation **Clean Sampling Device** mit **zwei Wiederholungsmessungen** aus. Drücken Sie auf **Next** und starten Sie das Protokoll.
4. Öffnen Sie das Röhrchen mit Reference Solution und setzen Sie das gesamte Röhrchen wie in Teil A gezeigt in den Tube Holder ein. Entfernen Sie die Washstation und befestigen Sie den Halter mit der Reference Solution.
5. Öffnen Sie **Home → Manual mode → Start**. Führen Sie **Prime** mit **einer Wiederholungsmessung** aus.
6. Kehren Sie zur Protokollübersicht zurück. Wählen Sie **Water Analysis** mit **zwei Wiederholungsmessungen**. Wählen Sie unter **Gates** das Standard-Gate für den Kartuschentyp, beispielsweise **ICC Default Gate** oder **TCC Default Gate**. Drücken Sie auf **Next** und starten Sie das Protokoll.
7. Vergleichen Sie die Hauptwolken der Bakterien mit den Referenzkriterien:

   | Dotplot | Akzeptanzkriterium |
   | --- | --- |
   | FL1 / FL2 | Hauptwolke oberhalb von 4.5 auf der FL1-Achse und unterhalb von 5 auf der FL2-Achse |
   | FL1 / SSC | Hauptwolke oberhalb von 2 und unterhalb von 5.5 auf der SSC-Achse |

   ![Referenz-Dotplots mit orange eingekreisten Hauptwolken der Bakterien](/img/other-manuals/validation-reference-dotplots.png "width=650")

   :::info[Aussehen der Wolken]

   Abhängig von der Kartusche und den Lagerbedingungen können die Wolken vom Beispiel abweichen.

   :::

8. Wenn der Test bestanden ist, entfernen Sie den Tube Holder, entnehmen Sie das Röhrchen mit Reference Solution, verschließen Sie es und entsorgen Sie es. Fahren Sie mit Teil C fort.

   Wenn der Test nicht bestanden ist, prüfen Sie das Verfallsdatum und die Lagerbedingungen des Kits. Wiederholen Sie den Test mit einer frischen Reference Solution. Wenn die Tests weiterhin nicht bestanden werden, wenden Sie sich an den bNovate-Support oder Ihren lokalen Servicepartner.

## Teil C: Sterilvalidierung {#sterile-validation}

Dabei wird die Sauberkeit von BactoSense durch Messung von zellfreiem Wasser validiert.

1. Schließen Sie die [Vorbereitungen](#preparations) ab, wenn Sie diesen Teil einzeln durchführen.
2. Befestigen Sie die Washstation oder, falls keine vorhanden ist, ein leeres, sauberes 5-mL-Schraubröhrchen.
3. Öffnen Sie als **Admin** **Home → Manual mode → Start**. Führen Sie **Clean Sampling Device with Washstation** mit **einer Wiederholungsmessung** aus. Führen Sie ohne Washstation **Clean Sampling Device** mit **zwei Wiederholungsmessungen** aus. Drücken Sie auf **Next** und starten Sie das Protokoll.
4. Öffnen Sie das Röhrchen mit Sterile Solution und setzen Sie das gesamte Röhrchen wie in Teil A gezeigt in den Tube Holder ein. Entfernen Sie die Washstation und befestigen Sie den Halter mit der Sterile Solution.
5. Öffnen Sie **Home → Manual mode → Start**. Führen Sie **Prime** mit **einer Wiederholungsmessung** aus.
6. Kehren Sie zur Protokollübersicht zurück. Wählen Sie **Water Analysis** mit **zwei Wiederholungsmessungen**. Wählen Sie unter **Gates** je nach Kartusche **ICC Default Gate** oder **TCC Default Gate**. Drücken Sie auf **Next** und starten Sie das Protokoll.
7. Prüfen Sie die Ergebnisse. Das jeweils geltende Kriterium muss erfüllt sein:

   | Kartusche | Akzeptanzkriterium |
   | --- | --- |
   | TCC | TCC weniger als 300/mL |
   | ICC | ICC weniger als 100/mL |

8. Wenn der Test bestanden ist, entfernen Sie den Tube Holder, entnehmen Sie das Röhrchen mit Sterile Solution, verschließen Sie es und entsorgen Sie es. Legen Sie den Halter zurück in das Validierungskit und befestigen Sie die Washstation am manuellen Probenahmegerät.

   Wenn der Test nicht bestanden ist, prüfen Sie das Verfallsdatum und die Lagerbedingungen des Kits. Führen Sie eine [biologische Dekontamination](cleaning-kit.md#biological-contamination) durch und wiederholen Sie den Test anschließend mit einer frischen Sterile Solution. Wenn die Tests weiterhin nicht bestanden werden, wenden Sie sich an den bNovate-Support oder Ihren lokalen Servicepartner.

9. Öffnen Sie **Home → Maintenance → Instrument validation**. Deaktivieren Sie **Activate Instrument validation** und drücken Sie auf **Save**.

Ihr Gerät ist erfolgreich validiert, wenn alle erforderlichen Teile bestanden wurden.
