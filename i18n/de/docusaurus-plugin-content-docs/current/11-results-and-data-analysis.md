---
title: "11. Ergebnisse und Datenanalyse"
sidebar_label: "11. Ergebnisse und Datenanalyse"
sidebar_position: 11
slug: /results-and-data-analysis
---

## 11.1 Messergebnisse {#section-11-1}

Untenstehende Abbildung zeigt das Ergebnis einer ausgewählten Messung. Von hier aus kann der Benutzer Messresultate anschauen, löschen, umbenennen, neu gaten oder exportieren. Einige Aktionen sind an bestimmte Benutzerrollen gebunden (Basic, Advanced oder Admin).

<img src="/img/figures-second/figure-1dc7da95b4adc8.webp" alt="Abbildung 11-1 : Anzeige eines einzelnen ICC Messergebnisses." width="674" className="manual-figure" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Abbildung aus der BactoSense-Bedienungsanleitung" width="57" className="manual-icon" loading="lazy" />

*Abbildung 11-1 : Anzeige eines einzelnen ICC Messergebnisses.*

<table className="manual-table"><tbody><tr><td>1</td><td>Hauptresultatparameter, abhängig von der Kartusche. Mehr Information zu den Parametern finden Sie in Abschnitt 11.3. Drücken Sie auf das Informationssymbol neben dem Hauptresultat, um ein Fenster mit allen verfügbaren Parametern zu öffnen (2).</td></tr><tr><td>2</td><td>Resultatinformationen mit allen verfügbaren Resultatparametern und dem primären Dotplot.</td></tr><tr><td>3</td><td>Primärer Dotplot im Fenster mit den Resultatinformationen. Dieser FL1/FL2 Dotplot zeigt alle registrierten Events anhand deren gemessenen Fluoreszenzsignal an. X-Achse = FL1 bei 535 nm. Y-Achse = FL2 bei 715 nm. Das rote Polygon und die rote vertikale Linie zeigen das konfigurierte Gate. Details dazu in Abschnitt 11.3. Drücken Sie auf diese Dotplot-Vorschau, um ein neues Fenster mit allen Dotplots zu öffnen (4).</td></tr></tbody></table>

<table className="manual-table"><tbody><tr><td>4</td><td>Popup-Fenster mit Zugriff auf alle Dotplots. Der FL1/SSC-Dotplot zeigt nur Zellen innerhalb des FL1-FL2-Polygon-Gates anhand ihres Fluoreszenzsignals FL1 (535 nm) und ihres Streulichtsignals SSC (488 nm). Das FL1-Histogramm zeigt alle Zellen innerhalb des FL1-FL2-Polygon-Gates, gruppiert nach ihrer FL1-Fluoreszenz. Die verfügbaren Dotplots hängen vom Gerätemodell und der Konfiguration ab.</td></tr><tr><td>5</td><td>Das Warnungsfeld zeigt an, falls Warnungen generiert wurden während der Messung. Drücken Sie auf die Warnung, um mehr zu erfahren.</td></tr><tr><td>6</td><td>Die Taste Delete löscht die Messung dauerhaft; eine Bestätigung ist erforderlich.</td></tr><tr><td>7</td><td>Mit dem Umbenennen-Knopf können Messungen umbenannt werden.</td></tr><tr><td>8</td><td>Mit dem Resultat neu gaten-Knopf können Messungen neu gegatet werden. Mehr Details dazu in Abschnitt 11.4.1.</td></tr><tr><td>9</td><td>Mit dem Exportieren-Knopf können Messungen auf einen USB Stick exportiert werden. Mehr Details dazu in Abschnitt 10.8.1.</td></tr><tr><td>10</td><td>Mit den Navigationspfeilen links und rechts können Sie zur vorherigen und nächsten Messung springen.</td></tr></tbody></table>

:::info[Mehrere Messungen auswählen]

Mehrfachauswahl und gemeinsame Aktionen: Halten Sie in der Messungsliste eine Messung gedrückt, um die Mehrfachauswahl zu aktivieren. Wählen Sie anschließend Delete / Re-gate oder Export.

:::

## 11.2 Einführung in Gates {#section-11-2}

Den Standards der Durchflusszytometrie folgend, verwendet der BactoSense Gates, um Zellen aus Proben zu zählen.

Wir definieren:

- Gate: Eine Linie oder ein Vieleck, das auf ein Punktdiagramm angewandt wird, um Populationen gemessener Zellen zu quantifizieren.
- Set aus Gates oder Gating-Set: Eine Zusammenstellung aus zwei oder mehr Gates zur Verwendung für die Gatingstrategie. Die Gatetypen sind fix, doch können die Benutzer die Grenzen eines jeden Gates ändern. Sie unterscheiden sich für TCC- und ICC-Messungen.
- Gatingstrategie: Definiert, wie die Gates kombiniert werden, um Zellen zu zählen. Beispielsweise ist HNAC die Anzahl Zellen, die sich innerhalb des TCC-Vielecks befinden und die HNA-Untergrenze überschreiten. Diese Strategien unterscheiden sich für TCC- und ICC-Messungen.

Gating Sets sind spezifisch für einen Kartuschentyp. Beispielsweise können für mit einer TCC-Kartusche durchgeführte Messungen nur Gating Sets des Typs TCC verwendet werden.

### 11.2.1 Standard-Gating-Sets {#section-11-2-1}

Der BactoSense verfügt über voreingestellte Gating Sets für alle verfügbaren Kartuschentypen. Diese Gating Sets nennt man Default-Gating-Sets. Sie wurden sorgfältig entwickelt, um mit einer Vielzahl an Proben einsetzbar zu sein.

- Die Standardgates am BactoSense finden Sie, wenn Sie auf der Startseite der Benutzeroberfläche des BactoSense auf Gateeinstellungen drücken.
- Standard-Gating-Sets können weder bearbeitet noch gelöscht werden.
- Neue Gating Sets können erstellt werden, indem Sie eine Kopie eines existierenden Gating Sets anlegen, wie in Abschnitt 11.4.2 beschrieben.

### 11.2.2 Liste verfügbarer Gating Sets und Vorgänge {#section-11-2-2}

Einer Liste aller am BactoSense verfügbaren Standardgates finden Sie, wenn Sie auf der Startseite der Benutzeroberfläche des BactoSense auf Gateeinstellungen drücken.

<img src="/img/figures-second/figure-899e3c5869ed8f.webp" alt="Abbildung 11-2 Liste aller verfügbaren Standardgates und Optionen zum Kopieren und Erstellen neuer Sets. Standardgates sind voreingestellt und können weder gelöscht noch bearbeitet werden." width="599" className="manual-figure" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Abbildung aus der BactoSense-Bedienungsanleitung" width="57" className="manual-icon" loading="lazy" />

*Abbildung 11-2 Liste aller verfügbaren Standardgates und Optionen zum Kopieren und Erstellen neuer Sets. Standardgates sind voreingestellt und können weder gelöscht noch bearbeitet werden.*

<table className="manual-table"><tbody><tr><td>1</td><td>Beispiel eines benutzerdefinierten Gates für die ICC-Kartusche.</td><td>2</td><td>ICC-Standardgate. Standardgates sind vorkonfiguriert.</td></tr><tr><td>3</td><td>ICC Doppelgate Standard Gate. Dieses Gating Set enthält ein zusätzliches konfigurierbares Polygon-Gate. Hinweis: Für einige Instrumentenmodelle wird ein zusätzliches Feature benötigt, um dieses Gate zu benutzen (siehe Abschnitt 9.1).</td><td>4</td><td>Gatetypen, zu verwenden mit dem entsprechenden Kartuschentyp.</td></tr><tr><td>5</td><td>Vorhandenes Gating-Set löschen. Standardgates können nicht gelöscht werden.</td><td>6</td><td>Vorschau des Gating-Sets.</td></tr><tr><td>7</td><td>Kopie des Gating-Sets erstellen.</td><td>8</td><td>Gating-Set bearbeiten. Standardgates können nicht bearbeitet werden.</td></tr><tr><td>9</td><td>Erstellen eines neuen Gating-Sets.</td><td></td><td></td></tr></tbody></table>

## 11.3 Kartuschen, Gates und Ergebnisparameter {#section-11-3}

Je nach der für eine Messung verwendeten Kartusche werden unterschiedliche Parameter ermittelt. Verfügbare Kartuschentypen sind TCC (Gesamtzellzahl), ICC (Intaktzellzahl), EBC (E.-coli-Zellzahl), ACC (Anzahl aktiver Zellen), CBC (Anzahl coliformer Zellen) und NBC (Enterokokken-Zellzahl). Die folgenden Unterabschnitte beschreiben Gating-Sets und Ergebnisparameter für TCC-, ICC- und ACC-Kartuschen.

### 11.3.1 TCC-Kartusche {#section-11-3-1}

TCC bedeutet Total Cell Count (Gesamtzellzahl). Die TCC-Kartusche wird daher verwendet, um die Konzentration aller Zellen zu messen.

**Tabelle 11-1 Für die TCC-Kartusche verwendetes Gating Set.**

| GATE | TYP | BESCHREIBUNG |
| --- | --- | --- |
| TCC | Vieleck | Ein auf der FL1-FL2-Ebene definiertes Polygon. Punkte innerhalb dieses Polygons werden als Zellen (TCC) gezählt. |
| HNA- Untergrenze | Vertikale Linie | Ein Grenzwert auf FL1. Punkte innerhalb des TCC-Gates oberhalb der HNA-Untergrenze in FL1 werden als HNAC gezählt. Punkte innerhalb des TCC-Gates unterhalb dieser Grenze werden als LNAC gezählt. |

**Tabelle 11-2 Von der TCC-Kartusche erhaltene Ergebnisparameter.**

| PARAMETER | EINHEIT | NAME | BESCHREIBUNG |
| --- | --- | --- | --- |
| TCC | 1/mL | Gesamtzellzahl | Gesamtzahl der innerhalb des TCC-Gates erkannten Zellen. Sie ist die Summe aus HNAC und LNAC: TCC = HNAC + LNAC |
| HNAP | % | Prozentanteil der Zellen mit hohem Nukleinsäuregehalt | Anteil der HNA-Zellen an TCC in Prozent: HNAP = (HNAC / TCC) × 100 |
| LNAC | 1/mL | Anzahl der Zellen mit niedrigem Nukleinsäuregehalt | Anzahl der Zellen innerhalb des TCC-Gates unterhalb der HNA-Untergrenze (vertikales Linien-Gate). |
| HNAC | 1/mL | Anzahl der Zellen mit hohem Nukleinsäuregehalt | Anzahl der Zellen innerhalb des TCC-Gates oberhalb der HNA-Untergrenze (vertikales Linien-Gate). |

Weitere Informationen zum Anpassen der Gates finden Sie im Abschnitt 11.4.

### 11.3.2 ICC-Kartusche {#section-11-3-2}

ICC bedeutet Intact Cell Count (Intaktzellzahl). Die ICC-Kartusche wird daher verwendet, um die Konzentration intakter Zellen zu messen.

**Tabelle 11-3 Für die ICC-Kartusche verwendetes Gating Set.**

| GATE | TYP | BESCHREIBUNG |
| --- | --- | --- |
| ICC | Vieleck | Ein auf der FL1-FL2-Fläche definiertes Vieleck. Punkte innerhalb dieses Vielecks werden als intakte Zellen gezählt (ICC). |
| HNA- Untergrenze | Vertikale Linie | Ein Grenzwert auf FL1. Punkte innerhalb des ICC, aber größer als die HNA-Untergrenze in FL1 werden als HNAC gezählt. Punkte innerhalb des ICC, aber kleiner als die Grenze werden als LNAC gezählt. |

**Tabelle 11-4 Von der ICC-Kartusche erhaltene Ergebnisparameter.**

| PARAMETER | EINHEIT | NAME | BESCHREIBUNG |
| --- | --- | --- | --- |
| ICC | 1/mL | Intaktzellzahl | Gesamtzahl intakter Zellen innerhalb des ICC-Gates: ICC = HNAC + LNAC |
| HNAP | % | Prozentanteil der Zellen mit hohem Nukleinsäuregehalt | Anteil der HNA-Zellen an ICC in Prozent: HNAP = (HNAC / ICC) × 100 |
| LNAC | 1/mL | Anzahl der Zellen mit niedrigem Nukleinsäuregehalt | Anzahl der LNA-Zellen innerhalb des ICC-Gates unterhalb der HNA-Untergrenze (vertikales Linien-Gate). |
| HNAC | 1/mL | Anzahl der Zellen mit hohem Nukleinsäuregehalt | Anzahl der HNA-Zellen innerhalb des ICC-Gates oberhalb der HNA-Untergrenze (vertikales Linien-Gate). |

Weitere Informationen zum Anpassen der Gates finden Sie im Abschnitt 11.4.

### 11.3.3 ACC Kartusche {#section-11-3-3}

ACC steht für Aktiv-Zellzahl. Die ACC Kartusche wird verwendet, um die Konzentration an metabolisch aktiven Zellen zu messen. Dies ist möglich dank einer Anfärbung der Zellen durch eine enzymatische Reaktion.

**Tabelle 11-5 Für die ACC-Kartusche verwendetes Gating Set.**

| GATE | TYP | BESCHREIBUNG |
| --- | --- | --- |
| ACC | Vieleck | Ein auf der FL1-FL2-Ebene definiertes Polygon. Punkte innerhalb dieses Polygons werden als aktive Zellen (ACC) gezählt. |
| HACC-Untergrenze | Vertikale Linie | Ein Grenzwert auf FL1. Punkte innerhalb des ACC-Gates oberhalb der HACC-Untergrenze in FL1 werden als HACC gezählt. Punkte innerhalb des ACC-Gates unterhalb dieser Grenze werden als LACC gezählt. |

**Tabelle 11-6 Von der ACC-Kartusche erhaltene Ergebnisparameter.**

| PARAMETER | EINHEIT | NAME | BESCHREIBUNG |
| --- | --- | --- | --- |
| ACC | 1/mL | Anzahl aktiver Zellen | Gesamtzahl aktiver Zellen innerhalb des ACC-Gates: ACC = HACC + LACC |
| HACC | 1/mL | Anzahl hochaktiver Zellen | Anzahl aktiver Zellen mit einer FL1-Intensität oberhalb des vertikalen HACC-Gates. |
| LACC | 1/mL | Anzahl gering aktiver Zellen | Anzahl aktiver Zellen mit einer FL1-Intensität unterhalb des vertikalen HACC-Gates. |
| HACP | % | Prozentanteil hochaktiver Zellen | Anteil von HACC an ACC in Prozent: HACP = (HACC / ACC) × 100 |

Weitere Informationen zum Anpassen der Gates finden Sie im Abschnitt 11.4.

## 11.4 Gates ändern {#section-11-4}

### 11.4.1 Messungen regaten {#section-11-4-1}

Regating ist der Prozess des Anwendens eines anderen Gating Sets auf bestehende Messdaten.

- Eine Voraussetzung für Regating ist das Vorhandensein eines solchen zusätzlichen Gating Sets. Einer Liste aller für Ihren Kartuschentyp verfügbaren Gating Sets finden Sie, wenn Sie auf der Startseite der Benutzeroberfläche des BactoSense auf Gateeinstellungen drücken.
- Der Prozess des Bearbeiten eines bestehenden Gating Sets wird in Abschnitt 11.4.3 beschrieben.

<table className="manual-table"><tbody><tr><th scope="col"></th><th scope="col">ARBEITSSCHRITT</th><th scope="col">ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN</th></tr><tr><td>1.</td><td>Navigieren Sie zur Startseite der Benutzeroberfläche des BactoSense.</td><td></td></tr><tr><td>2.</td><td>Anhängig davon, wie die Messung durchgeführt wurde, drücken Sie Ergebnisse (manuell) oder Ergebnisse (auto), um die Ergebnisliste zu sehen.</td><td></td></tr><tr><td>3.</td><td>Um eine Einzelmessung zu regaten, wählen Sie die Messung aus, um die Ergebnisdetailseite zu sehen. Um mehrere Messungen (Batch) zu regaten, drücken Sie lange auf die Messung, bis sie markiert ist und links ein Ankreuzkästchen erscheint. Tippen Sie dann weitere Messungen an, um auch diese zum Regaten auszuwählen.</td><td></td></tr><tr><td>4.</td><td>Drücken Sie dann die Taste Regate.</td><td></td></tr><tr><td>5.</td><td>Wählen Sie den das gewünschte Gating Set, indem Sie das entsprechende Kästchen ankreuzen.</td><td></td></tr><tr><td>6.</td><td>Drücken Sie Confirm (Bestätigen), um die erneute Gate-Auswertung zu starten.</td><td><Admonition type="info" title="Zusätzliche Informationen">Je nach Anzahl der Messungen kann die erneute Gate-Auswertung mehrere Minuten dauern.</Admonition></td></tr><tr><td>7.</td><td>Drücken Sie nach Ende des Vorgangs OK.</td><td></td></tr></tbody></table>

### 11.4.2 Erstellen eines neuen Gating Sets {#section-11-4-2}

Neue Gating Sets können erstellt werden, indem Sie entweder eine Kopie eines existierenden Gating Sets anlegen oder ganz bei Null anfangen.

Erstellen eines neuen Gating-Sets aus einer Kopie

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Navigieren Sie zur Startseite der Benutzeroberfläche des BactoSense. |  |
| 2. | Drücken Sie die Taste Gateeinstellungen. |  |
| 3. | Identifizieren Sie in der Liste der verfügbaren Gating Sets das Gating Set, von dem Sie eine Kopie erstellen wollen, um das neue Gating Set zu erstellen. | Stellen Sie sicher, dass der Gatingtyp (z.B. TCC, ICC) zu Ihrer Zielanwendung passt. |
| 4. | Drücken Sie das Kopieren-Symbol, um eine Kopie des Gating Sets zu erstellen. |  |
| 5. | In der neu erstellten Kopie drücken Sie das Bearbeiten-Symbol und folgen den Bearbeitungsanweisungen in Abschnitt 11.4.3. | <img src="/img/manual/cell-95fee81e2625.png" alt="Abbildung zur Tabelle auf Handbuchseite 105" width="264" className="manual-figure" loading="lazy"/> |

Erstellen eines neuen Gating-Sets von Grund auf

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Navigieren Sie zur Startseite der Benutzeroberfläche des BactoSense. |  |
| 2. | Drücken Sie die Taste Gateeinstellungen. |  |
| 3. | Drücken Sie unten in der Aktionsleiste Neu. |  |
| 4. | Geben Sie in das Namensfeld einen Namen für das Gateset ein. Wählen Sie im Typfeld aus, für welche Kartusche das Gateset genutzt werden soll. |  |
| 5. | Folgen Sie dann dem Gatekonfigurations- assistenten auf dem Bildschirm, wie in den Gatebearbeitungsanweisungen in Abschnitt 11.4.3 beschrieben. |  |
| 6. | Wenn Sie fertig sind, können Sie das neue Gating Set auswählen, wenn Sie neue Messungen erstellen oder bestehende Messungen regaten möchten, siehe Beschreibung im Abschnitt 11.4.1. |  |

### 11.4.3 Bearbeiten bestehender Gating Sets {#section-11-4-3}

Außer den Standard-Gating Sets können alle Gating Sets bearbeitet werden. Gatebearbeitung umfasst Umbenennen, Ändern der Position des vertikalen Gates sowie Ändern von Anzahl und Position der Ecken des Vieleck-Gates.

In diesem Abschnitt wird der allgemeine Prozess der Bearbeitung eines Gating Sets beschrieben. Abschnitt 11.4.4 beschreibt eine bestimmte Strategie, um Gating Sets für TCC- und ICC- Messungen anzupassen.

<img src="/img/figures-second/figure-8dc71f8c5efcd4.webp" alt="Abbildung 11-3 Gateeinstellungen für TCC" width="576" className="manual-figure" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Abbildung aus der BactoSense-Bedienungsanleitung" width="57" className="manual-icon" loading="lazy" />

*Abbildung 11-3 Gateeinstellungen für TCC*

<table className="manual-table"><tbody><tr><td>①</td><td>Koordinaten der Gatepunkte. a: Erster Punkt im Gate b: Zweiter Punkt im Gate c: Dritter Punkt im Gate d: Vierter Punkt im Gate</td><td>②</td><td>Punkt aus dem Gate entfernen.</td></tr><tr><td>③</td><td>Neuen Punkt zum Gate hinzufügen.</td><td>④</td><td>Bearbeiten der ausgewählten Koordinate. In diesem Screenshot ist die FL1(a, FL1)-Koordinate des ersten Punkts ausgewählt, also können wir den ersten Punkt im Gate entlang der FL1-Achse (X-Achse) verschieben.</td></tr><tr><td>⑤</td><td>HNA-Untergrenze: Dieses Gate wird auf der nächsten Seite festgelegt.</td><td>⑥</td><td>Vorschau</td></tr></tbody></table>

Die folgenden Schritte beschreiben, wie Sie ein Gate anpassen:

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1. | Navigieren Sie zur Startseite der Benutzeroberfläche des BactoSense. | <img src="/img/manual/cell-d07318a281b1.png" alt="Abbildung zur Tabelle auf Handbuchseite 107" width="282" className="manual-figure" loading="lazy"/> |
| 2. | Drücken Sie die Taste Gateeinstellungen. | <img src="/img/manual/cell-882cf24141b5.png" alt="Abbildung zur Tabelle auf Handbuchseite 107" width="282" className="manual-figure" loading="lazy"/> |
| 3. | Drücken Sie die Taste Bearbeiten des zu bearbeitenden Gates. | <img src="/img/manual/cell-fd72b5bdcc2a.png" alt="Abbildung zur Tabelle auf Handbuchseite 107" width="282" className="manual-figure" loading="lazy"/> |
| 4. | Falls gewünscht, ändern Sie den Namen und drücken dann die Taste Weiter. |  |
| 5. | Passen Sie die Anzahl und die Positionen der Ecken des Vielecks an (für TCC und ICC schauen Sie in Abschnitt 11.4.4 nach). Ein Vieleck-Gate kann zwischeb 3 und 6 Ecken haben. | <img src="/img/manual/cell-7440601f6ebb.png" alt="Abbildung zur Tabelle auf Handbuchseite 107" width="282" className="manual-figure" loading="lazy"/> |
| 6. | Drücken Sie die Taste Weiter. |  |
| 7. | Geben Sie die HNA-Untergrenze ein (für TCC und ICC schauen Sie im Abschnitt 11.4.4 nach). | <img src="/img/manual/cell-ec7e624b3c7f.png" alt="Abbildung zur Tabelle auf Handbuchseite 107" width="282" className="manual-figure" loading="lazy"/> |
| 8. | Drücken Sie die Taste Speichern und bestätigen Sie. |  |
| 9. | Wenn Sie fertig sind, können Sie das bearbeitete Gating Set auswählen, wenn Sie neue Messungen erstellen oder bestehende Messungen regaten möchten, siehe Beschreibung im Abschnitt 11.4.1. |  |

### 11.4.4 Strategie zur Anpassung von Gates für TCC und ICC {#section-11-4-4}

Der BactoSense wird mit Standard-Gate-Sets geliefert, die sich für die Mehrheit der Proben eignen. Falls erforderlich können erfahrene Benutzer jedoch Gates anpassen. Eine allgemeine Prozedur zum Anpassen eines Gates wird unten dargestellt und gilt sowohl für TCC- als auch ICC-Kartuschen.

<table className="manual-table"><tbody><tr><th scope="col"></th><th scope="col">ARBEITSSCHRITT</th><th scope="col">ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG</th></tr><tr><td>1.</td><td>Messen Sie mittels des Standard- Wasseranalyse-Protokolls eine Wasserprobe. Auf der Ergebnisseite zeigt das FL1-vs-FL2- Punktdiagramm: 1) LNA- und HNA-Zellen im Wasser 2) Elektrisches Rauschen von den optischen Detektoren 3) Schmutz/Hintergrundrauschen (Dies kann beschädigte Zellen, Ansammlungen oder andere Partikel umfassen)</td><td><img src="/img/manual/cell-564a3512838d.png" alt="Abbildung zur Tabelle auf Handbuchseite 108" width="252" className="manual-figure" loading="lazy" /></td></tr><tr><td>2.</td><td>Navigieren Sie zur Startseite der Benutzeroberfläche des BactoSense und drücken Sie die Taste Gateeinstellungen.</td><td></td></tr><tr><td>3.</td><td>Führen Sie je nach Bedarf eine der folgenden Aktionen aus: • Neues Gating-Set erstellen • Vorhandenes Gating-Set bearbeiten • Vorhandenes Gating-Set kopieren und die Kopie bearbeiten</td><td></td></tr><tr><td>4.</td><td>Diesem Gateset einen Namen geben und Weiter drücken.</td><td></td></tr><tr><td>5.</td><td>Platzieren Sie das Vieleck-Gate an beiden Enden (links und rechts). Sie könnten zum Beispiel diese vier Punkte verwenden:<table className="manual-table"><tbody><tr><td>FL1</td><td>FL2</td></tr><tr><td>3.0</td><td>0.0</td></tr><tr><td>3.0</td><td>6.1</td></tr><tr><td>6.5</td><td>6.1</td></tr><tr><td>6.5</td><td>0.0</td></tr></tbody></table></td><td><img src="/img/manual/cell-374bfaa7d23b.png" alt="Abbildung zur Tabelle auf Handbuchseite 108" width="252" className="manual-figure" loading="lazy" /></td></tr><tr><td>6.</td><td>Drücken Sie Weiter und Speichern. Bestätigen Sie, dass Sie das neue Gateset speichern möchten.</td><td></td></tr><tr><td>7.</td><td>Navigieren Sie zur Ergebnisansicht der zuvor gemessenen Wasserprobe.</td><td></td></tr></tbody></table>

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 8. | Drücken Sie in der Ergebnisansicht die Taste Ergebnis regaten. |  |
| 9. | Wählen Sie das gerade erstellte Gate aus und reprozessieren Sie die Daten mit dem neuen Gate, indem Sie die Taste Bestätigen drücken. |  |
| 10. | Öffnen Sie das FL1-Histogramm und suchen Sie nach dem ersten Tief nach dem Rausch- Peak, also nach dem ersten Minimum nach dem Maximum ganz links (im Bild mittels Pfeil verdeutlicht). Schreiben Sie sich den FL1-Wert dieses Minimums auf (z.B. 3,8). | <img src="/img/manual/cell-d44e977152e1.png" alt="Abbildung zur Tabelle auf Handbuchseite 109" width="252" className="manual-figure" loading="lazy"/> |
| 11. | Kehren Sie zu den Gateeinstellungen zurück und bearbeiten Sie Ihr Gate erneut. Platzieren Sie die linken Grenzen des Gates an dem zuvor bestimmten FL1-Wert. Damit wird das elektrische Rauschen des optischen Detektors ignoriert. Falls erforderlich, platzieren Sie die Punkte „b“ und „c“ des Gates für die FL2-Achse gerade unterhalb des Verschmutzungs-/ Hintergrundrauschen-Bereichs (erscheint grundsätzlich in Form gerader Diagonalen). | <img src="/img/manual/cell-67de70c6bd1f.png" alt="Abbildung zur Tabelle auf Handbuchseite 109" width="252" className="manual-figure" loading="lazy"/> |
| 12. | Speichern Sie das angepasste Gate. |  |
| 13. | Navigieren Sie zurück zur Ergebnisansicht der zuvor gemessenen Wasserprobe. |  |
| 14. | Drücken Sie in der Ergebnisansicht die Taste Ergebnis regaten. |  |
| 15. | Wählen Sie das gerade erstellte Gate aus und reprozessieren Sie die Daten mit dem neuen Gate, indem Sie die Taste Bestätigen drücken. |  |

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 16. | Um die HNA-Untergrenze zu setzen, öffnen Sie erneut das FL1-Histogramm und suchen Sie nach dem Minimum zwischen den LNA- und HNA-Peaks (vertikale Linie im Bild). Schreiben Sie dessen FL1-Wert auf (z.B. 4.8). | <img src="/img/manual/cell-3dd4365d2ad3.png" alt="Abbildung zur Tabelle auf Handbuchseite 110" width="252" className="manual-figure" loading="lazy"/> |
| 17. | Kehren Sie zu den Gateeinstellungen zurück und bearbeiten Sie Ihr Gate erneut. |  |
| 18. | Navigieren Sie zum Konfigurationsschritt der HNA-Untergrenze. Geben Sie die zuvor bestimmte HNA-Untergrenze in das FL1-Feld ein, drücken Sie die Taste Speichern und bestätigen Sie. |  |
| 19. | Regaten Sie nochmals die Wasseranalyse und stellen Sie sicher, dass das Gate geeignet ist. Falls erforderlich, passen Sie es noch einmal an. |  |

## 11.5 Erweiterte Datenanalyse {#section-11-5}

BactoSense-Messdaten können im Durchflusszytometrie-(FCS)-3.1-Standard-Dateiformat exportiert werden. Das FCS-Dateiformat wurde durch die International Society for Advancement of Cytometry (ISAC) standardisiert, um die Interoperabilität zwischen verschiedenen Durchflusszytometriegeräten und Analysesoftware sicherzustellen. Es gibt verschiedene Versionen des FCS-Formats, wobei jede Version Verbesserungen und zusätzliche Funktionen mitbringt. FCS-Daten können für benutzerdefiniertes Offline-Postprocessing benutzt werden, z.B. die Anwendung komplexer Gatingstrategien, „microbial fingerprinting”, automatisierter Anomalienerkennung und viele mehr.

### 11.5.1 Abruf von FCS-Dateien {#section-11-5-1}

FCS-Dateien können auf die folgenden Arten abgerufen werden:

- Auf einen USB-Datenträger herunterladen: über Export all (siehe Abschnitt 12.1.1)

- Über die Web-Oberfläche herunterladen: einzelne Dateien (siehe Abschnitt 13.4) oder mehrere Dateien (siehe Abschnitt 13.5)

- Zugriff über FTP (siehe Abschnitt 12.2)

- Zugriff über HTTPS (siehe Abschnitt 12.3)

Für Hilfestellung bei der Einführung einer erweiterten Datenanalysetoolkette wenden Sie sich bitte an support@bnovate.com.

## 11.6 Vergleich mit anderen Durchflusszytometern {#section-11-6}

Um die Ergebnisse des BactoSense mit einem anderen Durchflusszytometer vergleichen zu können, kann eine Referenzlösung mit autofluoreszierenden Perlen analysiert werden. Diese Methode erlaubt es dem Benutzer, die Messskalen verschiedener Geräte zu vergleichen.

<table className="manual-table"><tbody><tr><th scope="col"></th><th scope="col">ARBEITSSCHRITT</th><th scope="col" colSpan="2">ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG</th></tr><tr><td>1.</td><td>Es wird empfohlen, das Validierungskit mit einer gebrauchsfertigen Perlenlösung zu verwenden.</td><td colSpan="2">Bitte lesen Sie die Anleitung des Validierungskits für weitere Informationen.</td></tr><tr><td>2.</td><td>Installieren Sie das manuelle Probenahmegerät entsprechend den Anweisungen in der Bedienungsanleitung.</td><td colSpan="2"></td></tr><tr><td>3.</td><td>Nehmen Sie eine der Perlenlösungen des Validierungskits und laden Sie sie in das Probenahmegerät.</td><td colSpan="2">Bitte lesen Sie die Anleitung des Validierungskits für weitere Informationen.</td></tr><tr><td>4.</td><td><Admonition type="info" title="Zusätzliche Informationen">Drücken Sie die Taste Home. Drücken Sie die Taste Zurück so oft wie nötig, bis die Taste Home erscheint.</Admonition></td><td><img src="/img/manual/cell-d07318a281b1.png" alt="Abbildung zur Tabelle auf Handbuchseite 112" width="119" className="manual-figure" loading="lazy" /></td><td><img src="/img/manual/cell-05da61fc8424.png" alt="Abbildung zur Tabelle auf Handbuchseite 112" width="119" className="manual-figure" loading="lazy" /></td></tr><tr><td>5.</td><td>Drücken Sie auf der Startseite Modus und wählen Sie „Manueller Modus“. Drücken Sie Zurück und anschließend Messen, um den Messassistenten zu öffnen.</td><td colSpan="2"></td></tr><tr><td>6.</td><td>Wählen Sie aus der Liste das Protokoll Prime (Ansaugen).</td><td colSpan="2">Siehe Abschnitt 10.9.3.</td></tr><tr><td>7.</td><td>Drücken Sie die Tasten Weiter und Starten. Lassen Sie das Ansaugprotokoll zu Ende laufen.</td><td colSpan="2"></td></tr><tr><td>8.</td><td>Wählen Sie aus der Liste das Perlenanalyse-Protokoll aus und starten Sie es.</td><td colSpan="2"></td></tr><tr><td>9.</td><td>Warten Sie die Ergebnisse ab und, falls notwendig, passen Sie das Gate des FL1-vs-FL2-Graphen behutsam so an, dass nur die vier Perlenpopulationen gezählt werden. Stellen Sie sicher, dass Rauschen, Hintergrund und Zelltrümmer im Gate nicht mitgezählt werden.</td><td colSpan="2">Zur Anpassung des Gates siehe Abschnitt 11.4.3.<br /><img src="/img/manual/render-fa85ea9255cb.webp" alt="Abbildung zur Tabelle auf Handbuchseite 112" width="246" className="manual-figure" loading="lazy" /></td></tr></tbody></table>

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 10. | Schätzen Sie im FL1/Zellzahl-Histogramm den logarithmischen Wert der Mitte jedes Peaks auf der FL1-Achse. In diesem Beispiel erhalten wir ungefähr (logarithmisch): 1. Peak = 4.05; 2. Peak = 4.3; 3. Peak = 5.35; 4. Peak = 6.2 | <img src="/img/manual/cell-c2ba9a559620.png" alt="Abbildung zur Tabelle auf Handbuchseite 113" width="248" className="manual-figure" loading="lazy"/> |
| 11. | Messen Sie dieselben Perlen mit dem anderen zu vergleichenden Durchflusszytometer und wiederholen Sie die Schritte 10 und 11. In diesem Beispiel erhalten wir ungefähr (logarithmisch): 1. Peak = log(10<sup>3</sup>) = 3 2. Peak = log(2*10<sup>3</sup>) = 3.3 3. Peak = log(2.4*10<sup>4</sup>) = 4.4 4. Peak = log(1.6*10<sup>5</sup>) = 5.2 | <img src="/img/manual/cell-4c2343e0bbfe.png" alt="Abbildung zur Tabelle auf Handbuchseite 113" width="248" className="manual-figure" loading="lazy"/> |
| 12. | Mit den unterschiedlichen Werten für die beiden Geräte ist es nun möglich, ihre Skalen und ihre Messfenster zu vergleichen. |  |
