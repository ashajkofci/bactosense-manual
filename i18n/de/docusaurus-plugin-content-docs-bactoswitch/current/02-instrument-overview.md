---
title: "2. Geräteübersicht"
sidebar_label: "2. Geräteübersicht"
slug: /instrument-overview
sidebar_position: 2
description: "BactoSwitch-Bedienungsanleitung: Geräteübersicht."
---

## 2.1 Übersicht über den BactoSwitch {#section-2-1}

Die folgende Abbildung zeigt eine Übersicht über die Elemente des BactoSwitch:

![Elemente des BactoSwitch in den Ansichten A bis F](/img/bactoswitch/bactoswitch-elements.png "width=700")

*Abbildung 2-1 Elemente des BactoSwitch*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Griff | 2 | Anschlüsse der Eingangsleitungen |
| 3 | Wandhalterung | 4 | Befestigungsknopf der Frontabdeckung |
| 5 | Abnehmbare Frontabdeckung | 6 | Anzeigeleuchte der ausgewählten Leitung |
| 7 | Statusanzeigeleuchte | 8 | Wasserleitung zum BactoSense |
| 9 | Wasserleitung vom BactoSense | 10 | Wasserausgang zum Ablauf |
| 11 | USB-C-Buchse | 12 | Netzanschlussbuchse |
| 13 | Handbetätigung zum Öffnen/Schließen der Leitung | 14 | Drehknopf zur Durchflusseinstellung |
| 15 | Einstellfreiraum des Druckreglers | 16 | Durchflussmesser |

## 2.2 Leuchtanzeigen {#section-2-2}

Das Verhalten der Leuchtanzeigen ist in Tabelle 2-1 zusammengefasst. Die Nummern beziehen sich auf [Abbildung 2-1](02-instrument-overview.md#section-2-1), Ansicht B.

*Tabelle 2-1 Verhalten der Leuchtanzeigen*

| LEUCHTANZEIGE | VERHALTEN |
| --- | --- |
| Leitungsauswahlleuchten (6) | **Blau:** Leitung offen<br />**Aus:** Leitung geschlossen |
| Statusleuchte (7) | **Grünes Licht:** Ruhezustand<br />**Langsam blinkendes grünes Licht:** Messung läuft, keine Probenahme<br />**Schnell blinkendes grünes Licht:** Messung läuft, Wasser wird aus der Leitung entnommen<br />**Rotes Licht:** Messfehler |

## 2.3 Funktionsprinzip {#section-2-3}

Das folgende Schema zeigt die grundlegende Funktionsweise des BactoSwitch (zur besseren Übersicht ohne Frontabdeckung). Das Wasser jeder Eingangsleitung (1) fließt durch ein Rückschlagventil (2, nicht sichtbar), durch einen Druckregler (3), dann durch ein Nadelventil zur Durchflussregelung (4) und schließlich durch ein Magnetventil (5). Das Wasser der offenen Leitungen (jede Leitung kann geöffnet oder geschlossen sein) wird anschließend zusammengeführt und fließt aus dem BactoSwitch zum Online-Probenahmegerät des BactoSense (6). Nach dem Durchfließen des Probenahmegeräts fließt das Wasser zurück zum BactoSwitch, durch den Durchflussmesser (7) und schließlich zum Ablauf (8).

![Funktionsprinzip des BactoSwitch mit nummeriertem Wasserweg](/img/bactoswitch/working-principle.png "width=700")

*Abbildung 2-2 Funktionsprinzip des BactoSwitch. Erläuterungen siehe Text oben.*

:::info[Nicht verwendete Leitungen schließen]

Die Magnetventile nicht verwendeter Eingangsleitungen müssen manuell geschlossen und die entsprechenden Leitungen in der Software deaktiviert werden. Weitere Informationen finden Sie unter [Installation der Eingangsleitungen](04-installation.md#section-4-4-3) und [Leitungskonfiguration](04-installation.md#section-4-6).

:::

## 2.4 Typenschild des BactoSwitch {#section-2-4}

Das Typenschild des BactoSwitch befindet sich auf der rechten Seite des Geräts.

![Position und Elemente des Typenschilds des BactoSwitch](/img/bactoswitch/type-plate.png "width=654")

*Abbildung 2-3 Typenschild des BactoSwitch*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Hersteller | 2 | Produktname |
| 3 | Seriennummer | 4 | Barcode |
| 5 | Herstellungsdatum | 6 | Ursprungsland |
| 7 | Spannungs- und Leistungsaufnahme | 8 | CE-Logo |
| 9 | UKCA-Logo | 10 | Entspricht kanadischen EMV-<br />und Interferenzstandards |
| 11 | Bedienungsanleitung lesen und umsichtig<br />bedienen | 12 | Informationen zur Entsorgung |

## 2.5 Typenschild des Netzteils des BactoSwitch {#section-2-5}

Das Typenschild des Netzteils des BactoSwitch befindet sich auf dem Netzteil und besteht aus den folgenden Elementen:

![Elemente des Typenschilds des BactoSwitch-Netzteils](/img/bactoswitch/power-supply-type-plate.png "width=514")

*Abbildung 2-4 Typenschild des Netzteils des BactoSwitch*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Hersteller | 2 | Produktname |
| 3 | Teilenummer (abhängig vom Steckertyp) | 4 | Herstellungsdatum |
| 5 | Eingangsspannung und -frequenz | 6 | Leistungsaufnahme |
| 7 | CE-Logo | 8 | UKCA-Logo |
| 9 | Entspricht kanadischen EMV-<br />und Interferenzstandards | 10 | Bedienungsanleitung lesen und umsichtig<br />bedienen |
| 11 | Informationen zur Entsorgung |  |  |

## 2.6 Technische Daten {#section-2-6}

*Tabelle 2-2 Technische Daten des BactoSwitch*

| EIGENSCHAFT | SPEZIFIKATION |
| --- | --- |
| **ALLGEMEIN** | \< |
| Erforderliche Hardwareversion | BactoSense CORE/SMART ab Seriennummer 910500 |
| Erforderliche Softwareversion | 3.1.0-BS und höher |
| Betriebsumgebung | Verwendung in Innenräumen |
| Einsatzhöhe | Max. 2000 m (6600 ft) über Meeresspiegel |
| Betriebstemperatur | 5 °C – 30 °C (41 °F – 86 °F) |
| Luftfeuchtigkeit im Betrieb | Relative Luftfeuchtigkeit 10 % – 90 % |
| Lagertemperatur | 5 °C – 30 °C (41 °F – 86 °F) |
| Lagerluftfeuchtigkeit | Relative Luftfeuchtigkeit 10 % – 70 % |
| Belüftungsanforderungen | Keine |
| Schalldruckpegel | < 64 dBA |
| Schutzart | Gerät: IP65<br />Netzteil: IP67 |
| **PROBENAHME** | \< |
| Probenahmetyp | Online |
| Probenbedingungen | Nur Wasser<br />Temperatur: 5 °C – 40 °C (41 °F – 104 °F)<br />Trübung: 0 – 10 FTU, 0 – 10 FNU<br />Leitfähigkeit: 0 – 100.000 μS/cm bei 20 °C<br />pH-Wert: 5 – 12<br />Chlor: max. 3 mg/L<br />Eisen: max. 200 μg/L<br />Mangan: max. 50 μg/L<br />Feststoffpartikel: < 0,5 mm |
| Anzahl der Eingänge | 4 |
| Eingangsdruckbereich | 0,1 – 5 bar |
| Durchflussbereich je Leitung | 150 – 400 mL/min |
| Druckregler | Eingebaut und voreingestellt (ohne Sekundärentlüftung) |
| Durchflussregelung | Einstellbares Nadelventil |
| Leitungsauswahl | Stromlos offene, mediengetrennte Magnetventile<br />Manuelles Schließen per Handbetätigung |
| Fluidische Anschlüsse | Steckanschluss ø6x1 mm |
| Einlassschläuche | Material: PFA (transparent)<br />Außendurchmesser: 6 mm<br />Innendurchmesser: 4 mm<br />Maximale Länge: 4 m<br />Anzahl: 4x |
| Schläuche des Online-Probenahmegeräts | Material: PFA (transparent)<br />Außendurchmesser: 6,35 mm (1/4″)<br />Innendurchmesser: 4,35 mm<br />Empfohlene Länge: 200 mm<br />Anzahl: 2x |
| Auslassschlauch zum Ablauf | Material: PFA (transparent)<br />Außendurchmesser: 6 mm<br />Innendurchmesser: 4 mm<br />Maximale Länge: 2 m<br />Anzahl: 1x |
| Medienberührte Werkstoffe | PFA, Edelstahl 316L, Edelstahl 316Ti, FKM, EPDM, ENP-Messing, PPS 40 % GF, PVDF, Zirkonoxidkeramik |
| **REINIGUNG** | \< |
| Mittel und Bedingungen | Wasser (Temperatur: 1 °C – 85 °C, Druck: max. 2 bar, Dauer: max. 15 min)<br />Chlor: max. 10.000 mg/L Aktivchlor (Temperatur: max. 25 °C) |
| **PHYSIKALISCHE DATEN** | \< |
| Abmessungen (B x T x H) | 264 x 206 x 300 mm (10,4 x 8,1 x 11,8″) |
| Gewicht | 12 kg (26,5 lbs) |
| Abmessungen Netzteil (B x T x H) | 230 x 80 x 65 mm (9,0 x 3,1 x 2,6″) |
| Gewicht Netzteil | 0,9 kg (2,0 lbs) |
| **ELEKTRISCHE DATEN** | \< |
| Kategorie der Installation | II |
| Verschmutzungsgrad | 2 |
| Spannungsversorgung | Netzteil: 100 – 240 VAC ± 10 %, 50/60 Hz, 1,4 A<br />BactoSwitch: 24 VDC, 60 W |
| Leistungsaufnahme | Max. 60 W |
| **SCHNITTSTELLEN** | \< |
| USB | 1 x USB 2.0 Typ C (Buchse) |
