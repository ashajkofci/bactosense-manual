---
title: "11. Ergebnisse und Datenanalyse"
sidebar_label: "11. Ergebnisse und Datenanalyse"
sidebar_position: 11
slug: /results-and-data-analysis
---

## 11.1 Messergebnisse {#section-11-1}

Die folgende Abbildung zeigt das Ergebnis einer ausgewählten TCC-Messung im Online-Modus. Von hier aus kann der Benutzer Messresultate anschauen, löschen, umbenennen, neu gaten oder exportieren. Einige Aktionen sind an bestimmte Benutzerrollen gebunden (Basic, Advanced oder Admin).

![BactoSense — Online-Ergebnisdetails und Diagramme](/img/gui/de/online-result-details.png "width=674 class=manual-figure")

*Abbildung 11-1 Anzeige des Ergebnisses einer TCC-Messung im Online-Modus.*

|  |  |
| --- | --- |
| 1 | Hauptresultatparameter, abhängig von der Kartusche. Mehr Information zu den Parametern finden Sie unter [Kartuschen, Gates und Ergebnisparameter](../results-and-data-analysis/#section-11-3). Drücken Sie auf das Informationssymbol neben dem Hauptresultat, um ein Fenster mit allen verfügbaren Parametern zu öffnen (2). |
| 2 | Resultatinformationen mit allen verfügbaren Resultatparametern und dem primären Dotplot. |
| 3 | Primärer Dotplot im Fenster mit den Resultatinformationen. Dieser FL1/FL2 Dotplot zeigt alle registrierten Events anhand deren gemessenen Fluoreszenzsignal an. X-Achse = FL1 bei 535 nm. Y-Achse = FL2 bei 715 nm. Das rote Polygon und die rote vertikale Linie zeigen das konfigurierte Gate. Details dazu unter [Kartuschen, Gates und Ergebnisparameter](../results-and-data-analysis/#section-11-3). Drücken Sie auf diese Dotplot-Vorschau, um ein neues Fenster mit allen Dotplots zu öffnen (4). |
| 4 | Popup-Fenster mit Zugriff auf alle Dotplots. Der FL1/SSC-Dotplot zeigt nur Zellen innerhalb des FL1-FL2-Polygon-Gates anhand ihres Fluoreszenzsignals FL1 (535 nm) und ihres Streulichtsignals SSC (488 nm). Das FL1-Histogramm zeigt alle Zellen innerhalb des FL1-FL2-Polygon-Gates, gruppiert nach ihrer FL1-Fluoreszenz. Die verfügbaren Dotplots hängen vom Gerätemodell und der Konfiguration ab. |
| 5 | Das Statusfeld der Messung zeigt Alarme oder Warnungen an. Tippen Sie auf eine Alarm- oder Warnungsanzeige, um deren Details anzuzeigen. |
| 6 | Die Taste Löschen löscht die Messung dauerhaft; eine Bestätigung ist erforderlich. |
| 7 | Mit dem Umbenennen-Knopf können Messungen umbenannt werden. |
| 8 | Mit dem Resultat neu gaten-Knopf können Messungen neu gegatet werden. Mehr Details dazu unter [Messungen regaten](../results-and-data-analysis/#section-11-4-1). |
| 9 | Mit dem Exportieren-Knopf können Messungen auf einen USB Stick exportiert werden. Mehr Details dazu unter [Export auf einen USB-Datenträger](../measurements/#section-10-8-1). |
| 10 | Mit den Navigationspfeilen links und rechts können Sie zur vorherigen und nächsten Messung springen. |
| 11 | Tippen Sie auf das Trenddiagramm, um das Diagramm für den Auto-Modus (das vollständige Diagramm der Online-Ergebnisse) zu öffnen. Siehe [Ansehen automatischer Onlinemessungen](../measurements/#section-10-2-3). |

:::info[Mehrere Messungen auswählen]

Mehrfachauswahl und gemeinsame Aktionen: Halten Sie in der Messungsliste eine Messung gedrückt, um die Mehrfachauswahl zu aktivieren. Wählen Sie anschließend Löschen / Neu-gaten oder Exportieren.

:::

Um nur bestimmte Messungen in der Ergebnisliste anzuzeigen, filtern Sie nach Datum, Name oder BactoSwitch-Probenlinie; siehe [Filtern von Messungen](../measurements/#section-10-7).

## 11.2 Einführung in Gates {#section-11-2}

Den Standards der Durchflusszytometrie folgend, verwendet der BactoSense Gates, um Zellen aus Proben zu zählen.

Wir definieren:

- Gate: Eine Linie oder ein Vieleck, das auf ein Punktdiagramm angewandt wird, um Populationen gemessener Zellen zu quantifizieren.
- Set aus Gates oder Gating-Set: Eine Zusammenstellung aus zwei oder mehr Gates zur Verwendung für die Gatingstrategie. Die Gatetypen sind fix, doch können die Benutzer die Grenzen eines jeden Gates ändern. Sie unterscheiden sich für TCC- und ICC-Messungen.
- Gatingstrategie: Definiert, wie die Gates kombiniert werden, um Zellen zu zählen. Beispielsweise ist HNAC die Anzahl Zellen, die sich innerhalb des TCC-Vielecks befinden und die HNA-Untergrenze überschreiten. Diese Strategien unterscheiden sich für TCC- und ICC-Messungen.

Gating Sets sind spezifisch für einen Kartuschentyp. Beispielsweise können für mit einer TCC-Kartusche durchgeführte Messungen nur Gating Sets des Typs TCC verwendet werden.

### 11.2.1 Standard-Gating-Sets {#section-11-2-1}

Der BactoSense verfügt über voreingestellte Gating Sets für alle verfügbaren Kartuschentypen. Diese Gating Sets nennt man Default-Gating-Sets. Sie wurden sorgfältig entwickelt, um mit einer Vielzahl an Proben einsetzbar zu sein.

- Drücken Sie auf der Startseite Einstellungen und dann Gate Einstellungen, um die verfügbaren Gating-Sets anzuzeigen.
- Standard-Gating-Sets können weder bearbeitet noch gelöscht werden.
- Neue Gating Sets können erstellt werden, indem Sie eine Kopie eines existierenden Gating Sets anlegen, wie unter [Erstellen eines neuen Gating Sets](11-results-and-data-analysis.md#section-11-4-2) beschrieben.

### 11.2.2 Liste verfügbarer Gating Sets und Vorgänge {#section-11-2-2}

Drücken Sie auf der Startseite Einstellungen und dann Gate Einstellungen, um die verfügbaren Gating-Sets anzuzeigen.

![BactoSense — Liste der Gates](/img/gui/de/gate-settings-list.png "width=599 class=manual-figure")

*Abbildung 11-2 Liste aller verfügbaren Standardgates und Optionen zum Kopieren und Erstellen neuer Sets. Standardgates sind voreingestellt und können weder gelöscht noch bearbeitet werden.*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Beispiel eines benutzerdefinierten Gates für die ICC-Kartusche. | 2 | ICC-Standardgate. Standardgates sind vorkonfiguriert. |
| 3 | ICC Doppelgate Standard Gate. Dieses Gating Set enthält ein zusätzliches konfigurierbares Polygon-Gate. Hinweis: Für einige Instrumentenmodelle wird ein zusätzliches Feature benötigt, um dieses Gate zu benutzen (siehe [Scientific Package](../upgrade-packages/#section-9-1)). | 4 | Gatetypen, zu verwenden mit dem entsprechenden Kartuschentyp. |
| 5 | Vorhandenes Gating-Set löschen. Standardgates können nicht gelöscht werden. | 6 | Vorschau des Gating-Sets. |
| 7 | Kopie des Gating-Sets erstellen. | 8 | Gating-Set bearbeiten. Standardgates können nicht bearbeitet werden. |
| 9 | Erstellen eines neuen Gating-Sets. |  |  |

## 11.3 Kartuschen, Gates und Ergebnisparameter {#section-11-3}

Je nach der für eine Messung verwendeten Kartusche werden unterschiedliche Parameter ermittelt. Die folgenden Unterabschnitte beschreiben Gate-Sets und Ergebnisparameter für TCC (Gesamtzellzahl), ICC (Intaktzellzahl), ACC (Anzahl aktiver Zellen), CBC (Anzahl coliformer Zellen), EBC (Anzahl der E.-coli-Zellen) und NBC (Enterokokken-Zellzahl).

CBC-, EBC- und NBC-Kartuschen sind mit BactoSense ID und BactoSense SMART kompatibel. Jede dieser Kartuschen verwendet eine selektive enzymatische Markierung und ein einzelnes Polygon-Gate und liefert eine Zellkonzentration. Für diese Kartuschen werden keine HNA- oder Aktivitäts-Unterpopulationen berechnet.

:::info[Interpretation der CBC-, EBC- und NBC-Ergebnisse]

CBC, EBC und NBC sind Zellkonzentrationen in Zellen pro Milliliter (1/mL). Zellzahlen und Kulturergebnisse in koloniebildenden Einheiten (CFU) erfassen unterschiedliche Eigenschaften einer Probe und können nicht direkt miteinander verglichen werden.

:::

### 11.3.1 TCC-Kartusche {#section-11-3-1}

TCC bedeutet Total Cell Count (Gesamtzellzahl). Die TCC-Kartusche wird daher verwendet, um die Konzentration aller Zellen zu messen.

**Tabelle 11-1 Für die TCC-Kartusche verwendetes Gating Set.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| GATE | TYP | BESCHREIBUNG |
| --- | --- | --- |
| TCC | Vieleck | Ein auf der FL1-FL2-Ebene definiertes Polygon. Punkte innerhalb dieses Polygons werden als Zellen (TCC) gezählt. |
| HNA- Untergrenze | Vertikale Linie | Ein Grenzwert auf FL1. Punkte innerhalb des TCC-Gates oberhalb der HNA-Untergrenze in FL1 werden als HNAC gezählt. Punkte innerhalb des TCC-Gates unterhalb dieser Grenze werden als LNAC gezählt. |

</div>

**Tabelle 11-2 Von der TCC-Kartusche erhaltene Ergebnisparameter.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARAMETER | EINHEIT | NAME | BESCHREIBUNG |
| --- | --- | --- | --- |
| TCC | 1/mL | Gesamtzellzahl | Gesamtzahl der innerhalb des TCC-Gates erkannten Zellen. Sie ist die Summe aus HNAC und LNAC: TCC = HNAC + LNAC |
| HNAP | % | Prozentanteil der Zellen mit hohem Nukleinsäuregehalt | Anteil der HNA-Zellen an TCC in Prozent: HNAP = (HNAC / TCC) × 100 |
| LNAC | 1/mL | Anzahl der Zellen mit niedrigem Nukleinsäuregehalt | Anzahl der Zellen innerhalb des TCC-Gates unterhalb der HNA-Untergrenze (vertikales Linien-Gate). |
| HNAC | 1/mL | Anzahl der Zellen mit hohem Nukleinsäuregehalt | Anzahl der Zellen innerhalb des TCC-Gates oberhalb der HNA-Untergrenze (vertikales Linien-Gate). |

</div>

Weitere Informationen zum Anpassen der Gates finden Sie unter [Gates ändern](11-results-and-data-analysis.md#section-11-4).

### 11.3.2 ICC-Kartusche {#section-11-3-2}

ICC bedeutet Intact Cell Count (Intaktzellzahl). Die ICC-Kartusche wird daher verwendet, um die Konzentration intakter Zellen zu messen.

**Tabelle 11-3 Für die ICC-Kartusche verwendetes Gating Set.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| GATE | TYP | BESCHREIBUNG |
| --- | --- | --- |
| ICC | Vieleck | Ein auf der FL1-FL2-Fläche definiertes Vieleck. Punkte innerhalb dieses Vielecks werden als intakte Zellen gezählt (ICC). |
| HNA- Untergrenze | Vertikale Linie | Ein Grenzwert auf FL1. Punkte innerhalb des ICC, aber größer als die HNA-Untergrenze in FL1 werden als HNAC gezählt. Punkte innerhalb des ICC, aber kleiner als die Grenze werden als LNAC gezählt. |

</div>

**Tabelle 11-4 Von der ICC-Kartusche erhaltene Ergebnisparameter.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARAMETER | EINHEIT | NAME | BESCHREIBUNG |
| --- | --- | --- | --- |
| ICC | 1/mL | Intaktzellzahl | Gesamtzahl intakter Zellen innerhalb des ICC-Gates: ICC = HNAC + LNAC |
| HNAP | % | Prozentanteil der Zellen mit hohem Nukleinsäuregehalt | Anteil der HNA-Zellen an ICC in Prozent: HNAP = (HNAC / ICC) × 100 |
| LNAC | 1/mL | Anzahl der Zellen mit niedrigem Nukleinsäuregehalt | Anzahl der LNA-Zellen innerhalb des ICC-Gates unterhalb der HNA-Untergrenze (vertikales Linien-Gate). |
| HNAC | 1/mL | Anzahl der Zellen mit hohem Nukleinsäuregehalt | Anzahl der HNA-Zellen innerhalb des ICC-Gates oberhalb der HNA-Untergrenze (vertikales Linien-Gate). |

</div>

Weitere Informationen zum Anpassen der Gates finden Sie unter [Gates ändern](11-results-and-data-analysis.md#section-11-4).

### 11.3.3 ACC Kartusche {#section-11-3-3}

ACC steht für Aktiv-Zellzahl. Die ACC Kartusche wird verwendet, um die Konzentration an metabolisch aktiven Zellen zu messen. Dies ist möglich dank einer Anfärbung der Zellen durch eine enzymatische Reaktion.

**Tabelle 11-5 Für die ACC-Kartusche verwendetes Gating Set.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| GATE | TYP | BESCHREIBUNG |
| --- | --- | --- |
| ACC | Vieleck | Ein auf der FL1-FL2-Ebene definiertes Polygon. Punkte innerhalb dieses Polygons werden als aktive Zellen (ACC) gezählt. |
| HACC-Untergrenze | Vertikale Linie | Ein Grenzwert auf FL1. Punkte innerhalb des ACC-Gates oberhalb der HACC-Untergrenze in FL1 werden als HACC gezählt. Punkte innerhalb des ACC-Gates unterhalb dieser Grenze werden als LACC gezählt. |

</div>

**Tabelle 11-6 Von der ACC-Kartusche erhaltene Ergebnisparameter.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARAMETER | EINHEIT | NAME | BESCHREIBUNG |
| --- | --- | --- | --- |
| ACC | 1/mL | Anzahl aktiver Zellen | Gesamtzahl aktiver Zellen innerhalb des ACC-Gates: ACC = HACC + LACC |
| HACC | 1/mL | Anzahl hochaktiver Zellen | Anzahl aktiver Zellen mit einer FL1-Intensität oberhalb des vertikalen HACC-Gates. |
| LACC | 1/mL | Anzahl gering aktiver Zellen | Anzahl aktiver Zellen mit einer FL1-Intensität unterhalb des vertikalen HACC-Gates. |
| HACP | % | Prozentanteil hochaktiver Zellen | Anteil von HACC an ACC in Prozent: HACP = (HACC / ACC) × 100 |

</div>

Weitere Informationen zum Anpassen der Gates finden Sie unter [Gates ändern](11-results-and-data-analysis.md#section-11-4).

### 11.3.4 CBC-Kartusche {#section-11-3-4}

CBC steht für Coliform Cell Count (Anzahl coliformer Zellen). Die CBC-Kartusche misst die Konzentration coliformer Bakterien mit einem enzymatischen Assay auf Basis der β-Galactosidase-Aktivität. Das Enzym wandelt das Substrat der Kartusche in ein fluoreszierendes Produkt um, sodass die markierten Zellen mittels Durchflusszytometrie nachgewiesen werden können.

**Tabelle 11-7 Für die CBC-Kartusche verwendetes Gate-Set.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| GATE | TYP | BESCHREIBUNG |
| --- | --- | --- |
| CBC | Polygon | Ein auf der FL1-FL2-Ebene definiertes Polygon. Fluoreszenzmarkierte coliforme Zellen innerhalb dieses Polygons tragen zu CBC bei. |

</div>

**Tabelle 11-8 Von der CBC-Kartusche erhaltener Ergebnisparameter.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARAMETER | EINHEIT | NAME | BESCHREIBUNG |
| --- | --- | --- | --- |
| CBC | 1/mL | Anzahl coliformer Zellen | Konzentration markierter coliformer Zellen innerhalb des CBC-Gates, berechnet aus der Zellzahl und dem analysierten Probenvolumen. |

</div>

Weitere Informationen zum Anpassen der Gates finden Sie unter [Gates ändern](11-results-and-data-analysis.md#section-11-4).

### 11.3.5 EBC-Kartusche {#section-11-3-5}

EBC steht für E. coli Cell Count (Anzahl der E.-coli-Zellen). Die EBC-Kartusche misst die Konzentration von *Escherichia coli* mit einem enzymatischen Assay auf Basis der β-Glucuronidase-Aktivität. Das Enzym wandelt das Substrat der Kartusche in ein fluoreszierendes Produkt um, sodass die markierten Zellen mittels Durchflusszytometrie nachgewiesen werden können.

**Tabelle 11-9 Für die EBC-Kartusche verwendetes Gate-Set.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| GATE | TYP | BESCHREIBUNG |
| --- | --- | --- |
| EBC | Polygon | Ein auf der FL1-FL2-Ebene definiertes Polygon. Fluoreszenzmarkierte E.-coli-Zellen innerhalb dieses Polygons tragen zu EBC bei. |

</div>

**Tabelle 11-10 Von der EBC-Kartusche erhaltener Ergebnisparameter.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARAMETER | EINHEIT | NAME | BESCHREIBUNG |
| --- | --- | --- | --- |
| EBC | 1/mL | Anzahl der E.-coli-Zellen | Konzentration markierter E.-coli-Zellen innerhalb des EBC-Gates, berechnet aus der Zellzahl und dem analysierten Probenvolumen. |

</div>

Weitere Informationen zum Anpassen der Gates finden Sie unter [Gates ändern](11-results-and-data-analysis.md#section-11-4).

### 11.3.6 NBC-Kartusche {#section-11-3-6}

NBC steht für Enterococcus Cell Count (Enterokokken-Zellzahl). Die NBC-Kartusche misst die Konzentration von Enterokokken mit einem enzymatischen Assay auf Basis der β-Glucosidase-Aktivität. Das Enzym wandelt das Substrat der Kartusche in ein fluoreszierendes Produkt um, sodass die markierten Zellen mittels Durchflusszytometrie nachgewiesen werden können.

**Tabelle 11-11 Für die NBC-Kartusche verwendetes Gate-Set.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| GATE | TYP | BESCHREIBUNG |
| --- | --- | --- |
| NBC | Polygon | Ein auf der FL1-FL2-Ebene definiertes Polygon. Fluoreszenzmarkierte Enterokokken innerhalb dieses Polygons tragen zu NBC bei. |

</div>

**Tabelle 11-12 Von der NBC-Kartusche erhaltener Ergebnisparameter.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARAMETER | EINHEIT | NAME | BESCHREIBUNG |
| --- | --- | --- | --- |
| NBC | 1/mL | Enterokokken-Zellzahl | Konzentration markierter Enterokokken innerhalb des NBC-Gates, berechnet aus der Zellzahl und dem analysierten Probenvolumen. |

</div>

Weitere Informationen zum Anpassen der Gates finden Sie unter [Gates ändern](11-results-and-data-analysis.md#section-11-4).

## 11.4 Gates ändern {#section-11-4}

### 11.4.1 Messungen regaten {#section-11-4-1}

Regating ist der Prozess des Anwendens eines anderen Gating Sets auf bestehende Messdaten.

- Eine Voraussetzung für Regating ist das Vorhandensein eines solchen zusätzlichen Gating Sets. Drücken Sie auf der Startseite Einstellungen und dann Gate Einstellungen, um die verfügbaren Gating-Sets anzuzeigen.
- Der Prozess des Bearbeiten eines bestehenden Gating Sets wird unter [Bearbeiten bestehender Gating Sets](11-results-and-data-analysis.md#section-11-4-3) beschrieben.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1\. | Drücken Sie auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |  |
| 2\. | Drücken Sie Logs und je nach Messart Results (manual mode) oder Results (online mode). |  |
| 3\. | Um eine Einzelmessung zu regaten, wählen Sie die Messung aus, um die Ergebnisdetailseite zu sehen. Um mehrere Messungen (Batch) zu regaten, drücken Sie lange auf die Messung, bis sie markiert ist und links ein Ankreuzkästchen erscheint. Tippen Sie dann weitere Messungen an, um auch diese zum Regaten auszuwählen. |  |
| 4\. | Drücken Sie in der Einzelresultatansicht Resultat neu gaten oder bei mehreren ausgewählten Messungen Neu-gaten. |  |
| 5\. | Wählen Sie den das gewünschte Gating Set, indem Sie das entsprechende Kästchen ankreuzen. |  |
| 6\. | Drücken Sie Bestätigen, um die erneute Gate-Auswertung zu starten. | :::info[Zusätzliche Informationen] Je nach Anzahl der Messungen kann die erneute Gate-Auswertung mehrere Minuten dauern. ::: |
| 7\. | Drücken Sie nach Ende des Vorgangs OK. |  |

### 11.4.2 Erstellen eines neuen Gating Sets {#section-11-4-2}

Neue Gating Sets können erstellt werden, indem Sie entweder eine Kopie eines existierenden Gating Sets anlegen oder ganz bei Null anfangen.

Erstellen eines neuen Gating-Sets aus einer Kopie

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Drücken Sie als Advanced- oder Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |  |
| 2. | Drücken Sie die Taste Gate Einstellungen. |  |
| 3. | Identifizieren Sie in der Liste der verfügbaren Gating Sets das Gating Set, von dem Sie eine Kopie erstellen wollen, um das neue Gating Set zu erstellen. | Stellen Sie sicher, dass der Gatingtyp (z.B. TCC, ICC) zu Ihrer Zielanwendung passt. |
| 4. | Drücken Sie das Kopieren-Symbol, um eine Kopie des Gating Sets zu erstellen. |  |
| 5. | In der neu erstellten Kopie drücken Sie das Bearbeiten-Symbol und folgen den Bearbeitungsanweisungen unter [Bearbeiten bestehender Gating Sets](11-results-and-data-analysis.md#section-11-4-3). | ![BactoSense — Gate bearbeiten](/img/gui/icons/edit-gate-button.png "width=48 class=manual-icon") |

Erstellen eines neuen Gating-Sets von Grund auf

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Drücken Sie als Advanced- oder Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |  |
| 2. | Drücken Sie die Taste Gate Einstellungen. |  |
| 3. | Drücken Sie unten in der Aktionsleiste Neu. |  |
| 4. | Geben Sie einen Namen für das Gating-Set ein und wählen Sie eine der verfügbaren Vorlagen für die eingesetzte Kartusche. |  |
| 5. | Folgen Sie dann dem Gatekonfigurations- assistenten auf dem Bildschirm, wie in den Gatebearbeitungsanweisungen unter [Bearbeiten bestehender Gating Sets](11-results-and-data-analysis.md#section-11-4-3) beschrieben. |  |
| 6. | Wenn Sie fertig sind, können Sie das neue Gating Set auswählen, wenn Sie neue Messungen erstellen oder bestehende Messungen regaten möchten, siehe Beschreibung unter [Messungen regaten](11-results-and-data-analysis.md#section-11-4-1). |  |

### 11.4.3 Bearbeiten bestehender Gating Sets {#section-11-4-3}

Außer den Standard-Gating Sets können alle Gating Sets bearbeitet werden. Gatebearbeitung umfasst Umbenennen, Ändern der Position des vertikalen Gates sowie Ändern von Anzahl und Position der Ecken des Vieleck-Gates.

In diesem Abschnitt wird der allgemeine Prozess der Bearbeitung eines Gating Sets beschrieben. Die Anpassung von Gating Sets für TCC- und ICC-Messungen wird unter [Strategie zur Anpassung von Gates für TCC und ICC](11-results-and-data-analysis.md#section-11-4-4) beschrieben.

![BactoSense — TCC-Gatedefinition und Vorschau](/img/gui/de/tcc-gate-definition.png "width=576 class=manual-figure")

*Abbildung 11-3 Gateeinstellungen für TCC*

|  |  |  |  |
| --- | --- | --- | --- |
| ① | Koordinaten der Gatepunkte. a: Erster Punkt im Gate b: Zweiter Punkt im Gate c: Dritter Punkt im Gate d: Vierter Punkt im Gate | ② | Punkt aus dem Gate entfernen. |
| ③ | Neuen Punkt zum Gate hinzufügen. | ④ | Bearbeiten der ausgewählten Koordinate. In diesem Screenshot ist die FL1(a, FL1)-Koordinate des ersten Punkts ausgewählt, also können wir den ersten Punkt im Gate entlang der FL1-Achse (X-Achse) verschieben. |
| ⑤ | HNA-Untergrenze: Dieses Gate wird auf der nächsten Seite festgelegt. | ⑥ | Vorschau |

Die folgenden Schritte beschreiben, wie Sie ein Gate anpassen:

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1. | Drücken Sie als Advanced- oder Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. | ![BactoSense — Schaltfläche Einstellungen](/img/gui/de/home-settings-button.png "width=57 class=manual-icon-settings-button-half") |
| 2. | Drücken Sie die Taste Gate Einstellungen. | ![BactoSense — Gate-Einstellungen](/img/gui/icons/gate-settings-button.png "width=48 class=manual-icon") |
| 3. | Drücken Sie die Taste Bearbeiten des zu bearbeitenden Gates. | ![BactoSense — Gate bearbeiten](/img/gui/icons/edit-gate-button.png "width=48 class=manual-icon") |
| 4. | Falls gewünscht, ändern Sie den Namen und drücken dann die Taste Weiter. |  |
| 5. | Passen Sie die Anzahl und die Positionen der Ecken des Vielecks an (für TCC und ICC schauen Sie unter [Strategie zur Anpassung von Gates für TCC und ICC](11-results-and-data-analysis.md#section-11-4-4) nach). Ein Vieleck-Gate kann zwischeb 3 und 6 Ecken haben. | ![BactoSense — ICC-Gatedefinition](/img/gui/de/icc-gate-definition.png "width=282 class=manual-figure") |
| 6. | Drücken Sie die Taste Weiter. |  |
| 7. | Geben Sie die HNA-Untergrenze ein (für TCC und ICC schauen Sie unter [Strategie zur Anpassung von Gates für TCC und ICC](11-results-and-data-analysis.md#section-11-4-4) nach). | ![BactoSense — HNA-Untergrenze](/img/gui/de/hna-lower-limit.png "width=282 class=manual-figure") |
| 8. | Drücken Sie Speichern. Wählen Sie im Dialog Speichern, um das vorhandene Set zu aktualisieren, oder Speichern als neues Gating, um das Original zu behalten und ein neues Set anzulegen. |  |
| 9. | Wenn Sie fertig sind, können Sie das bearbeitete Gating Set auswählen, wenn Sie neue Messungen erstellen oder bestehende Messungen regaten möchten, siehe Beschreibung unter [Messungen regaten](11-results-and-data-analysis.md#section-11-4-1). |  |

### 11.4.4 Strategie zur Anpassung von Gates für TCC und ICC {#section-11-4-4}

Der BactoSense wird mit Standard-Gate-Sets geliefert, die sich für die Mehrheit der Proben eignen. Falls erforderlich können erfahrene Benutzer jedoch Gates anpassen. Eine allgemeine Prozedur zum Anpassen eines Gates wird unten dargestellt und gilt sowohl für TCC- als auch ICC-Kartuschen.

<div className="manual-narrow-details-scroll">

<table className="manual-table manual-narrow-details">

<colgroup>
<col className="procedure-step-column" />
<col className="procedure-instruction-column" />
<col className="procedure-detail-column" />
</colgroup>

<thead>

<tr>

<th scope="col">

</th>

<th scope="col">

ARBEITSSCHRITT

</th>

<th scope="col">

ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

1\.

</td>

<td>

Messen Sie mittels des Standard- Wasseranalyse-Protokolls eine Wasserprobe. Auf der Ergebnisseite zeigt das FL1-vs-FL2- Punktdiagramm: 1) LNA- und HNA-Zellen im Wasser 2) Elektrisches Rauschen von den optischen Detektoren 3) Schmutz/Hintergrundrauschen (Dies kann beschädigte Zellen, Ansammlungen oder andere Partikel umfassen)

</td>

<td>

![Abbildung zur Tabelle auf Handbuchseite 108](/img/manual/cell-564a3512838d.png "width=126 class=manual-figure")

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Drücken Sie auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. Drücken Sie die Taste Gate Einstellungen.

</td>

<td>

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Führen Sie je nach Bedarf eine der folgenden Aktionen aus: • Neues Gating-Set erstellen • Vorhandenes Gating-Set bearbeiten • Vorhandenes Gating-Set kopieren und die Kopie bearbeiten

</td>

<td>

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Diesem Gateset einen Namen geben und Weiter drücken.

</td>

<td>

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Platzieren Sie das Vieleck-Gate an beiden Enden (links und rechts). Sie könnten zum Beispiel diese vier Punkte verwenden:

<table className="manual-table">

<tbody>

<tr>

<td>

FL1

</td>

<td>

FL2

</td>

</tr>

<tr>

<td>

3.0

</td>

<td>

0.0

</td>

</tr>

<tr>

<td>

3.0

</td>

<td>

6.1

</td>

</tr>

<tr>

<td>

6.5

</td>

<td>

6.1

</td>

</tr>

<tr>

<td>

6.5

</td>

<td>

0.0

</td>

</tr>

</tbody>

</table>

</td>

<td>

![Abbildung zur Tabelle auf Handbuchseite 108](/img/manual/cell-374bfaa7d23b.png "width=126 class=manual-figure")

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Drücken Sie Weiter und Speichern. Bestätigen Sie eine neue Vorlage mit Ja. Wählen Sie bei einem bearbeiteten Set im Dialog Speichern oder Speichern als neues Gating.

</td>

<td>

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

Navigieren Sie zur Ergebnisansicht der zuvor gemessenen Wasserprobe.

</td>

<td>

</td>

</tr>

<tr>

<td>

8\.

</td>

<td>

Drücken Sie in der Ergebnisansicht die Taste Ergebnis regaten.

</td>

<td>

</td>

</tr>

<tr>

<td>

9\.

</td>

<td>

Wählen Sie das gerade erstellte Gate aus und reprozessieren Sie die Daten mit dem neuen Gate, indem Sie die Taste Bestätigen drücken.

</td>

<td>

</td>

</tr>

<tr>

<td>

10\.

</td>

<td>

Öffnen Sie das FL1-Histogramm und suchen Sie nach dem ersten Tief nach dem Rausch- Peak, also nach dem ersten Minimum nach dem Maximum ganz links (im Bild mittels Pfeil verdeutlicht). Schreiben Sie sich den FL1-Wert dieses Minimums auf (z.B. 3,8).

</td>

<td>

![Abbildung zur Tabelle auf Handbuchseite 109](/img/manual/cell-d44e977152e1.png "width=126 class=manual-figure")

</td>

</tr>

<tr>

<td>

11\.

</td>

<td>

Kehren Sie zu den Gateeinstellungen zurück und bearbeiten Sie Ihr Gate erneut. Platzieren Sie die linken Grenzen des Gates an dem zuvor bestimmten FL1-Wert. Damit wird das elektrische Rauschen des optischen Detektors ignoriert. Falls erforderlich, platzieren Sie die Punkte „b“ und „c“ des Gates für die FL2-Achse gerade unterhalb des Verschmutzungs-/ Hintergrundrauschen-Bereichs (erscheint grundsätzlich in Form gerader Diagonalen).

</td>

<td>

![Abbildung zur Tabelle auf Handbuchseite 109](/img/manual/cell-67de70c6bd1f.png "width=126 class=manual-figure")

</td>

</tr>

<tr>

<td>

12\.

</td>

<td>

Speichern Sie das angepasste Gate.

</td>

<td>

</td>

</tr>

<tr>

<td>

13\.

</td>

<td>

Navigieren Sie zurück zur Ergebnisansicht der zuvor gemessenen Wasserprobe.

</td>

<td>

</td>

</tr>

<tr>

<td>

14\.

</td>

<td>

Drücken Sie in der Ergebnisansicht die Taste Ergebnis regaten.

</td>

<td>

</td>

</tr>

<tr>

<td>

15\.

</td>

<td>

Wählen Sie das gerade erstellte Gate aus und reprozessieren Sie die Daten mit dem neuen Gate, indem Sie die Taste Bestätigen drücken.

</td>

<td>

</td>

</tr>

<tr>

<td>

16\.

</td>

<td>

Um die HNA-Untergrenze zu setzen, öffnen Sie erneut das FL1-Histogramm und suchen Sie nach dem Minimum zwischen den LNA- und HNA-Peaks (vertikale Linie im Bild). Schreiben Sie dessen FL1-Wert auf (z.B. 4.8).

</td>

<td>

![Abbildung zur Tabelle auf Handbuchseite 110](/img/manual/cell-3dd4365d2ad3.png "width=126 class=manual-figure")

</td>

</tr>

<tr>

<td>

17\.

</td>

<td>

Kehren Sie zu den Gateeinstellungen zurück und bearbeiten Sie Ihr Gate erneut.

</td>

<td>

</td>

</tr>

<tr>

<td>

18\.

</td>

<td>

Navigieren Sie zum Konfigurationsschritt der HNA-Untergrenze. Geben Sie die zuvor bestimmte HNA-Untergrenze in das FL1-Feld ein, drücken Sie die Taste Speichern und bestätigen Sie.

</td>

<td>

</td>

</tr>

<tr>

<td>

19\.

</td>

<td>

Regaten Sie nochmals die Wasseranalyse und stellen Sie sicher, dass das Gate geeignet ist. Falls erforderlich, passen Sie es noch einmal an.

</td>

<td>

</td>

</tr>

</tbody>

</table>

</div>
## 11.5 Erweiterte Datenanalyse {#section-11-5}

BactoSense-Messdaten können im Durchflusszytometrie-(FCS)-3.1-Standard-Dateiformat exportiert werden. Das FCS-Dateiformat wurde durch die International Society for Advancement of Cytometry (ISAC) standardisiert, um die Interoperabilität zwischen verschiedenen Durchflusszytometriegeräten und Analysesoftware sicherzustellen. Es gibt verschiedene Versionen des FCS-Formats, wobei jede Version Verbesserungen und zusätzliche Funktionen mitbringt. FCS-Daten können für benutzerdefiniertes Offline-Postprocessing benutzt werden, z.B. die Anwendung komplexer Gatingstrategien, „microbial fingerprinting”, automatisierter Anomalienerkennung und viele mehr.

### 11.5.1 Abruf von FCS-Dateien {#section-11-5-1}

FCS-Dateien können auf die folgenden Arten abgerufen werden:

- Auf einen USB-Datenträger herunterladen: über Export all (siehe [Einstellungen, Diagnosedaten oder alles auf USB-Gerät exportieren](12-data-access-and-export.md#section-12-1-1))

- Über die Web-Oberfläche herunterladen: einzelne Dateien (siehe [Herunterladen einer FCS-Datei](13-web-user-interface.md#section-13-4)) oder mehrere Dateien (siehe [Herunterladen einer Zip-Datei mit mehreren Ergebnissen](13-web-user-interface.md#section-13-5))

- Zugriff über FTP (siehe [Daten über FTP herunterladen](12-data-access-and-export.md#section-12-2))

- Zugriff über HTTPS (siehe [Datenabruf über HTTP oder HTTPS](12-data-access-and-export.md#section-12-3))

Für Hilfestellung bei der Einführung einer erweiterten Datenanalysetoolkette wenden Sie sich bitte an support@bnovate.com.

## 11.6 Vergleich mit anderen Durchflusszytometern {#section-11-6}

Um die Ergebnisse des BactoSense mit einem anderen Durchflusszytometer vergleichen zu können, kann eine Referenzlösung mit autofluoreszierenden Perlen analysiert werden. Diese Methode erlaubt es dem Benutzer, die Messskalen verschiedener Geräte zu vergleichen.

<div className="manual-narrow-details-scroll manual-narrow-details manual-narrow-details-split">

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG | \< |
| --- | --- | --- | --- |
| 1\. | Es wird empfohlen, das Validierungskit mit einer gebrauchsfertigen Perlenlösung zu verwenden. | Bitte lesen Sie die Anleitung des Validierungskits für weitere Informationen. | \< |
| 2\. | Installieren Sie das manuelle Probenahmegerät entsprechend den Anweisungen in der Bedienungsanleitung. |  | \< |
| 3\. | Nehmen Sie eine der Perlenlösungen des Validierungskits und laden Sie sie in das Probenahmegerät. | Bitte lesen Sie die Anleitung des Validierungskits für weitere Informationen. | \< |
| 4\. | :::info[Zusätzliche Informationen] Drücken Sie die Taste Home. Drücken Sie die Taste Zurück so oft wie nötig, bis die Taste Home erscheint. ::: | ![BactoSense — Schaltfläche Startseite](/img/gui/icons/home-button.png "width=48 class=manual-icon") | ![BactoSense — Schaltfläche Zurück](/img/gui/icons/back-button.png "width=48 class=manual-icon") |
| 5\. | Drücken Sie auf der Startseite Modus und wählen Sie „Manueller Modus“. Drücken Sie Zurück und anschließend Messen, um den Messassistenten zu öffnen. |  | \< |
| 6\. | Wählen Sie Ansaugen aus der Protokollliste. | Siehe [Durchführen eines Ansaugens](../measurements/#section-10-9-3). | \< |
| 7\. | Drücken Sie die Tasten Weiter und Starten. Lassen Sie das Ansaugprotokoll zu Ende laufen. |  | \< |
| 8\. | Drücken Sie Neu, wählen Sie Beads Analyse aus der Liste und drücken Sie Weiter und Start. |  | \< |
| 9\. | Warten Sie die Ergebnisse ab und, falls notwendig, passen Sie das Gate des FL1-vs-FL2-Graphen behutsam so an, dass nur die vier Perlenpopulationen gezählt werden. Stellen Sie sicher, dass Rauschen, Hintergrund und Zelltrümmer im Gate nicht mitgezählt werden. | Zur Anpassung des Gates siehe [Bearbeiten bestehender Gating Sets](../results-and-data-analysis/#section-11-4-3).<br />![Abbildung zur Tabelle auf Handbuchseite 112](/img/manual/render-fa85ea9255cb.webp "width=246 class=manual-figure") | \< |
| 10\. | Schätzen Sie im FL1/Zellzahl-Histogramm den logarithmischen Wert der Mitte jedes Peaks auf der FL1-Achse. In diesem Beispiel erhalten wir ungefähr (logarithmisch): 1. Peak = 4.05; 2. Peak = 4.3; 3. Peak = 5.35; 4. Peak = 6.2 | ![Abbildung zur Tabelle auf Handbuchseite 113](/img/manual/cell-c2ba9a559620.png "width=246 class=manual-figure") | \< |
| 11\. | Messen Sie dieselben Perlen mit dem anderen zu vergleichenden Durchflusszytometer und wiederholen Sie die Schritte 10 und 11. In diesem Beispiel erhalten wir ungefähr (logarithmisch): 1. Peak = log(10<sup>3</sup>) = 3 2. Peak = log(2*10<sup>3</sup>) = 3.3 3. Peak = log(2.4*10<sup>4</sup>) = 4.4 4. Peak = log(1.6*10<sup>5</sup>) = 5.2 | ![Abbildung zur Tabelle auf Handbuchseite 113](/img/manual/cell-4c2343e0bbfe.png "width=246 class=manual-figure") | \< |
| 12\. | Mit den unterschiedlichen Werten für die beiden Geräte ist es nun möglich, ihre Skalen und ihre Messfenster zu vergleichen. |  | \< |

</div>
