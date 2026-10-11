---
title: "6. I/O-Box"
sidebar_label: "6. I/O-Box"
slug: /io-box
sidebar_position: 6
description: "BactoSense-Bedienungsanleitung: I/O-Box."
---

Die IO-Box ist ein Zubehörteil des BactoSense. Sie kann verwendet werden, um die Ein- und Ausgänge des BactoSense mit einem PLC/SCADA-System zu verbinden.

Alternativ zur I/O-Box kann Modbus TCP verwendet werden. Einzelheiten finden Sie in Abschnitt 7.1.

## 6.1 Technische Spezifikationen {#section-6-1}

:::info[Spezifikationen prüfen]

Lesen Sie die technischen Spezifikationen sorgfältig durch, bevor Sie die Integration vornehmen.

:::

### 6.1.1 Digitale Eingänge {#section-6-1-1}

- Verwendung: 4 digitale Eingänge, die auf Common bezogen sind, ermöglichen die Steuerung des Geräts durch eine externe Spannung (z.B. Spannung aus einer SPS).
- Spezifikationen: Optokopplereingang: Durchlassspannung 1,2 VDC mit 3 kΩ in Reihe, Kathode an COMMON angeschlossen, max. 30 mA, max. 50 mW.

Zusätzliche Informationen

:::info[Anforderungen an digitale Eingänge]

- Der Common (Anschluss 18) muss mit der Referenzspannung der Eingangsspannung (z.B. 0 V / Erde der externen Stromquelle) verbunden werden.
- Der Spannungsbereich der digitalen Eingänge (Anschlüsse 14 - 17) liegt zwischen 5 - 30 V, um einen logischen High-Pegel oder eine „1“ zu erzeugen. Andernfalls wird ein logischer Low-Pegel oder eine „0“ erzeugt.
- Wenn einer der digitalen Eingänge einen logischen High-Pegel oder eine „1“ hat, geht BactoSense in den „PLC-Modus“.

:::

### 6.1.2 Digitale Ausgänge {#section-6-1-2}

- Verwendung: 4 digitale Ausgänge ermöglichen die Meldung von 4 verschiedenen logischen Zuständen, z.B. Fehler oder Alarme. Da es sich bei den Ausgangsklemmen um den Ausgang eines MOS-basierten Solid-State-Relais (LH1540AAB) handelt, gibt es keine Polarität. Die Klemmen A und B können in beide Richtungen verwendet werden und sind vertauschbar. Die Klemmen A und B sind entweder hochohmig (abgetrennt) oder niederohmig (angeschlossen).
- Spezifikationen: frei konfigurierbar, SSR-Ausgang: max. 48 VDC, max. 300 mW, EIN- Widerstand 2 Ω.

### 6.1.3 Analoge Ausgänge {#section-6-1-3}

- Verwendung: 2 Analogausgänge (4 - 20 mA) ermöglichen die Meldung von zwei Analogwerten, z. B. Gesamtzellzahl und HNAP. Hinweis: Für die Übertragung präziser Ergebnisse wird die Verwendung von Modbus TCP empfohlen. Siehe Abschnitt 7.1.
- Spezifikationen: 2 x 0/4 - 20 mA, empfohlene 250 Ω Last

### 6.1.4 IO-Box Schema {#section-6-1-4}

<img src="/img/manual/asset-da9ff033639d.png" alt="Abbildung aus dem Originalhandbuch, gedruckte Seite 32" width="633" loading="lazy" />

*Abbildung 6-1 BactoSense IO-Box Schema.*

### 6.1.5 Übersicht über die IO-Box {#section-6-1-5}

<img src="/img/manual/asset-30fbce76cafa.png" alt="Abbildung aus dem Originalhandbuch, gedruckte Seite 33" width="634" loading="lazy" />

*Abbildung 6-2 Übersicht über die BactoSense-IO-Box*

<table><tbody><tr><th>①</th><th>Position der digitalen Ausgänge. Klemmen 1 – 8. Kabelanforderungen: • AWG 12 – 22 • Querschnitt: 0.25 – 2.5 mm2</th><th>②</th><th>Position der analogen Ausgänge. Klemmen 9 – 12. Kabelanforderungen: • AWG 12 – 22 • Querschnitt: 0.25 – 2.5 mm2</th></tr><tr><td>③</td><td>Position der digitalen Eingänge. Klemmen 14 – 18. Kabelanforderungen: • AWG 12 – 22 • Querschnitt: 0.25 – 2.5 mm2</td><td colSpan="2"></td></tr></tbody></table>

### 6.1.6 Referenztabelle der IO-Box {#section-6-1-6}

*Tabelle 6-1 Referenztabelle der IO-Box*

| Klemme | Funktion | Klemmenfarbe | Kabelfarbe |
| --- | --- | --- | --- |
| 1 | Digitaler Ausgang 1 - A | Grau | Rot |
| 2 | Digitaler Ausgang 1 - B | Grau | Blau |
| 3 | Digitaler Ausgang 2 - A | Grau | Rosa |
| 4 | Digitaler Ausgang 2 - B | Grau | Grau |
| 5 | Digitaler Ausgang 3 - A | Grau | Gelb |
| 6 | Digitaler Ausgang 3 - B | Grau | Grün |
| 7 | Digitaler Ausgang 4 - A | Grau | Braun |
| 8 | Digitaler Ausgang 4 - B | Grau | Weiß |
| 9 | Analog 1+ mA | Orange | Schwarz |
| 10 | Analog 1- mA | Blau | Violett |
| 11 | Analog 2+ mA | Orange | Rosa-Grau |
| 12 | Analog 2- mA | Blau | Rot-Blau |
| 13 | Schirmung | Grün/Gelb |  |
| 14 | Digitaler Eingang 1 | Grau | Weiß |
| 15 | Digitaler Eingang 2 | Grau | Braun |
| 16 | Digitaler Eingang 3 | Grau | Blau |
| 17 | Digitaler Eingang 4 | Grau | Schwarz |
| 18 | Common | Schwarz | Grau |

## 6.2 Anschluss der IO-Box {#section-6-2}

:::info[I/O-Verbindungen prüfen]

Lesen Sie die technischen Spezifikationen in den Abschnitten 6.1.1 bis 6.1.3 und das Schema in Abschnitt 6.1.4, um die korrekte Installation sicherzustellen.

:::

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Schließen Sie die zwei M16-Stecker der IO- Box rechts am Gerät an. | <img src="/img/manual/asset-6a48e9fcafbe.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 35" width="241" loading="lazy"/> |
| 2. | Entfernen Sie die Abdeckung des Gehäuses, indem Sie die vier Schrauben (eingekreist) entfernen. | <img src="/img/manual/asset-9f5e3eb5f1fd.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 35" width="225" loading="lazy"/> |
| 3. | Führen Sie das Kabel durch die Kabelverschraubung ein (A, B oder C) und verbinden Sie die Drähte mit dem entsprechenden Terminal gemäß der Referenztabelle der IO-Box im Abschnitt 6.1.6. | <img src="/img/manual/asset-fb6376380698.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 35" width="222" loading="lazy"/> |
| 4. | Befestigen Sie die Kabelverschraubung. Ziehen Sie am Kabel, um herauszufinden, ob die Kabelverschraubung eng genug ist. |  |
| 5. | Optional: Die IO-Box kann an einer Wand angebracht werden. Es sollten M4-Schrauben mit einer Mindestlänge von 20mm verwendet werden. Platzieren Sie die vier Schrauben, ohne dass die Abdeckung montiert ist, und befestigen Sie das Gehäuse an der Wand. | <img src="/img/manual/asset-3e67c8d4a4e6.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 35" width="242" loading="lazy"/> |
| 6. | Bringen Sie wieder die Gehäuseabdeckung und ziehen Sie die vier Schrauben an, um sie zu befestigen. |  |

## 6.3 Anschluss der Ausgänge ohne IO-Box {#section-6-3}

Der BactoSense stellt die Ausgänge über einen 12-adrigen, weiblichen M16-Anschluss bereit. Es wird jedoch empfohlen, eine IO-Box zu verwenden. Die Pinbelegung des Steckers ist unten angegeben.

<img src="/img/manual/asset-223bcd55d2e3.png" alt="Abbildung aus dem Originalhandbuch, gedruckte Seite 36" width="311" loading="lazy" />

*Abbildung 6-3 Übersicht über die Pinbelegung des Steckers*

<table><tbody><tr><td>A</td><td>Digitaler Ausgang 4 - B</td><td>G</td><td>Digitaler Ausgang 1 - B</td></tr><tr><td>B</td><td>Digitaler Ausgang 4 - A</td><td>H</td><td>Digitaler Ausgang 1 - A</td></tr><tr><td>C</td><td>Digitaler Ausgang 3 - B</td><td>J</td><td>Analog 1+</td></tr><tr><td>D</td><td>Digitaler Ausgang 3 - A</td><td>K</td><td>Analog 1-</td></tr><tr><td>E</td><td>Digitaler Ausgang 2 - B</td><td>L</td><td>Analog 2+</td></tr><tr><td>F</td><td>Digitaler Ausgang 2 - A</td><td>M</td><td>Analog 2-</td></tr></tbody></table>

## 6.4 Anschluss der Eingänge ohne IO-Box {#section-6-4}

Der BactoSense stellt die Eingänge über einen 5-adrigen, weiblichen M16-Anschluss bereit. Es wird empfohlen, eine IO-Box zu verwenden. Die Pinbelegung des Steckers ist unten angegeben.

<img src="/img/manual/asset-b6ab0aef5737.png" alt="Abbildung aus dem Originalhandbuch, gedruckte Seite 37" width="320" loading="lazy" />

*Abbildung 6-4 Übersicht über die Pinbelegung des Steckers*

<table><tbody><tr><td>1</td><td>Digitaler Eingang 1</td><td>2</td><td>Digitaler Eingang 2</td></tr><tr><td>3</td><td>Digitaler Eingang 3</td><td>4</td><td>Digitaler Eingang 4</td></tr><tr><td>5</td><td>Common</td><td colSpan="2"></td></tr></tbody></table>

## 6.5 Konfiguration digitaler Eingänge und PLC-Modus {#section-6-5}

Das Gerät kann durch einen externen Programmable Logic Controller (PLC) gesteuert werden. Um jegliche Konflikte beim Starten eines Prozesses zu vermeiden, sperrt der PLC das Gerät zunächst im „PLC-Modus”, in dem das Gerät als Slave des PLC agiert. In diesem Modus sind alle Funktionen des GUI bezüglich laufender Protokolle und anderer Prozesse blockiert. Sobald das Gerät sich im PLC-Modus befindet, können vom PLC aus unter Verwendung der digitalen Eingänge des Geräts Protokolle gestartet und abgebrochen werden Die digitalen Ausgänge melden dann zwecks eines sicheren Betriebs an den PLC zurück.

Der PLC-Modus ist ein ferngesteuerter Auto-Modus: der PLC kann eine Einzelmessung anfordern oder den Scheduler starten, um in vordefinierten Intervallen Protokolle auszuführen. Vom PLC gestartete Messungen erscheinen auch unter den Ergebnissen des Auto-Modus.

Sind die digitalen Eingänge nicht verbunden, so haben sie den Status 0000.

*Tabelle 6-2 Statusübersicht der digitalen Eingänge und zugehörige Funktionen.*

<table><tbody><tr><th rowSpan="2">BESCHREIBUNG</th><th colSpan="4">DIGITALE EINGÄNGE</th></tr><tr><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><td>PLC-Modus erzwingen: Das Gerät ist inaktiv, aber Slave des PLC.</td><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td>Konfigurierbares Protokoll/Messintervall ausführen</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>Konfigurierbares Protokoll/Messintervall ausführen</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td>Konfigurierbares Protokoll/Messintervall ausführen</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>Konfigurierbares Protokoll/Messintervall ausführen</td><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><td>Konfigurierbares Protokoll/Messintervall ausführen</td><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>Konfigurierbares Protokoll/Messintervall ausführen</td><td>1</td><td>1</td><td>1</td><td>0</td></tr><tr><td>Aktuelles Protokoll abbrechen</td><td>1</td><td>1</td><td>1</td><td>1</td></tr><tr><td>Slave-Modus deaktiviert. PLC-Modus beendet.</td><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>

Um ein Protokoll mehrmals auszuführen, verwenden Sie entweder die Scheduler-Option oder lösen vom PLC aus eine neue Messung aus, indem Sie die Eingänge auf Status 1000 und dann zurück in den entsprechenden Run-Status setzen.

<img src="/img/manual/asset-6d53ddd3d47c.png" alt="Abbildung aus dem Originalhandbuch, gedruckte Seite 39" width="532" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Beispiel-Screenshot" width="32" loading="lazy" />

*Abbildung 6-5 Konfiguration digitaler Eingänge*

<table><tbody><tr><td>1</td><td>Digitale Eingänge aktivieren oder deaktivieren. Bei deaktivierten Eingängen ist der PLC-Modus niemals aktiv.</td><td>2</td><td>Protokollparameter: Name, Protokoll und Gates.</td></tr><tr><td>3</td><td>Wählen Sie den zu konfigurierenden Eingängestatus. Wenn der in (3) gewählte Status auf die digitalen Eingänge angewandt wird, wird das in (2), (4) und (5) definierte Protokoll ausgeführt</td><td>4</td><td>Ist dies aktiviert, startet das Protokoll unmittelbar, nachdem der Eingängestatus sich geändert hat. Falls nicht, warten Sie bitte für die Dauer eines Schedulerintervalls, bevor Sie starten.</td></tr><tr><td>5</td><td>Schedulereinstellungen: Ist der Scheduler aktiviert, so wird das Protokoll im ausgewählten Intervall solange wiederholt, bis der Eingängestatus sich geändert hat. Ist der Scheduler deaktiviert, läuft das Protokoll nur einmal.</td><td colSpan="2"></td></tr></tbody></table>

Um die Status der digitalen Eingänge zu konfigurieren, folgen Sie diesen Schritten:

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Navigieren Sie zur Startseite der Benutzeroberfläche des BactoSense. |  |
| 2. | Drücken Sie die Taste Einstellungen des Auto-Modus. |  |
| 3. | Drücken Sie die Taste Digitale Eingänge. |  |
| 4. | Stellen Sie sicher, dass der Schalter auf Aktiviert steht. |  |
| 5. | Schalten Sie ihn an und wählen Sie in der Eingängeliste den zu konfigurierenden Status, geben Sie einen Probennamen ein, wählen Sie ein Protokoll sowie ein Gate. |  |
| 6. | Soll das Protokoll sich automatisch wiederholen, haken Sie das Feld „Scheduler aktiviert” an und wählen Sie ein Intervall aus. |  |
| 7. | Im obigen Fall wählen Sie mittels des Felds „Sofort starten” aus, ob das Protokoll sofort ausgeführt oder am Ende des ersten Intervalls gestartet werden soll. | Diese Option ist nur sinnvoll zu nut- zen, wenn der Scheduler aktiviert ist. |
| 8. | Drücken Sie die Taste Speichern. |  |

## 6.6 Konfiguration der digitalen Ausgänge {#section-6-6}

Die Werte der digitalen Ausgänge ändern sich in den folgenden Fällen:

- Wenn das Gerät abgeschaltet wird, werden die Werte aller Ausgänge auf 0 gesetzt.
- Wird das Gerät eingeschaltet, so zeigen die Ausgänge den aktuellen Fehlerstatus: nicht vorhanden/kritisch/unkritisch.
- Am Ende einer Messung im Auto-Modus ändern die Ausgänge sich entsprechend den benutzerdefinierten Einstellungen so, dass sie Fehler und Alarme anzeigen.
- Wird aus dem Ausgangtestbildschirm „Reset“ geklickt oder in den Einstellungen der digitalen Ausgänge „Speichern“ gedrückt, werden die Ausgänge so aktualisiert, dass sie nur den Fehlerstatus zeigen (Alarme werden ignoriert).
- Nachdem die Fehler manuell gelöscht wurden, werden die Ausgänge automatisch zurückgesetzt (und zeigen so den neuen Fehlerstatus und keine Alarme).
- Zu bestimmten Zeitpunkten während einer Messung können zusätzliche Signale weitergegeben werden. Standardmäßig wird keiner an die Ausgänge weitergegeben. Es handelt sich um die folgenden:

**-** Prozess läuft. Aktiv, während ein Protokoll ausgeführt wird.

**-** Probenahmegerät in Verwendung. Aktiv, während das Probenahmegerät verwendet wird. Nach dem Probenvorbereitungsschritt eines Messprotokolls wird der Ausgang wieder inaktiv.

**-** Kartusche fast leer. Aktiv, wenn der Kartuschenfüllstand unter 15 % liegt oder die Kartusche bei der aktuellen Messhäufigkeit voraussichtlich innerhalb eines Monats leer wird.

**-** Kartusche abgelaufen. Aktiv, wenn die Kartusche abgelaufen ist.

Der Status des digitalen Ausgangs am Ende einer Messung richtet sich nach diesen Standardwerten, die in den Einstellungen geändert werden:

- Liegen keine Fehler und keine Alarme vor, werden alle Terminals auf den benutzerdefinierten Status gesetzt. Standardmäßig liegt überall eine 1 an.
- Im Fall eines kritischen Fehlers wird der erste Ausgang auf 0 gesetzt.
- Im Fall unkritischer Fehler wird der zweite Ausgang auf 0 gesetzt.
- Alarme setzen den dritten und den vierten Ausgang auf 0.
- Im Fall von Konflikten in den Ausgabeeinstellungen, wird folgendermaßen priorisiert:

**-** 1. Kritische Fehler

**-** 2. Unkritische Fehler

**-** 3. Kartuschenzustände

**-** 4. Alarm

:::info[Admin-Zugriff erforderlich]

Nur Admin-Benutzer dürfen die Ausgangseinstellungen ändern, da diese externe PLC-Systeme entscheidend beeinflussen können.

:::

Die folgenden Schritte beschreiben, wie Sie die Ausgänge konfigurieren können.

<table><tbody><tr><th></th><th>ARBEITSSCHRITT</th><th>ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN</th></tr><tr><td>1.</td><td>Navigieren Sie zur Startseite der Benutzeroberfläche des BactoSense.</td><td></td></tr><tr><td>2.</td><td>Drücken Sie die Taste Einstellungen des Auto-Modus.</td><td></td></tr><tr><td>3.</td><td>Drücken Sie die Taste Digitale Ausgänge.</td><td></td></tr><tr><td>4.</td><td><Admonition type="info" title="Zusätzliche Informationen">Wählen Sie den Grundzustand, also den Ausgangszustand bei störungsfreiem Betrieb: Ausgang 1 2 3 4; Grundzustand 1 1 1 1</Admonition></td><td>1: Der Schalter ist geschlossen. 0: Der Schalter ist offen.</td></tr><tr><td>5.</td><td>Wählen Sie den Ausgang, über den kritische Fehler signalisiert werden: Ausgang 1 2 3 4; Kritischer Fehler 0 / / /</td><td>Standardmäßig öffnet ein kritischer Fehler Ausgang 1. 1: Der Schalter ist geschlossen. 0: Der Schalter ist offen. /: Der Fehler beeinflusst den Schalter nicht.</td></tr><tr><td>6.</td><td>Wählen Sie den Ausgang, über den unkritische Fehler signalisiert werden: Ausgang 1 2 3 4; Unkritischer Fehler / 0 / /</td><td>Standardmäßig öffnet ein unkritischer Fehler Ausgang 2.</td></tr><tr><td>7.</td><td>Weisen Sie den übrigen Ausgängen Alarme zu: Ausgang 1 2 3 4; Alarm 1 / / 0 0; Alarm 2 ... ... ... ... ...</td><td>Sie können nur aktivierte Alarme zuweisen. Einem Ausgang können mehrere Alarme zugewiesen werden.</td></tr><tr><td>8.</td><td>Drücken Sie die Taste Speichern.</td><td></td></tr></tbody></table>

## 6.7 Konfiguration der analogen Ausgänge {#section-6-7}

Der Strom am Analogausgang ändert sich in den folgenden Fällen:

- Wenn das Gerät abgeschaltet wird, liefern beide Ausgänge 0mA.
- Wenn das Gerät eingeschaltet wird, liefern beide Ausgänge 2mA.
- Endet eine Messung im Auto-Modus nach der Zellzählung, wird der Wert entsprechend Bereichs- und Quellendefinition des analogen Ausgangs zwischen 4 und 20mA betragen. Schlägt die Messung aufgrund eines Fehlers fehl, bevor die Zellzählung beginnt, verbleibt der Ausgang auf seinem bisherigen Wert.
- Testet ein Benutzer den Ausgang manuell, wird die Stromstärke auf den vom Benutzer gewählten Wert gesetzt. Die Reset-Taste setzt sie auf 4mA.

:::info[Präzise Ausgangswerte]

Für die Übertragung präziser Ergebnisse wird die Verwendung von Modbus TCP empfohlen. Siehe Abschnitt 7.1.

Nur **Admin**-Benutzer dürfen die analogen 4 .. 20-mA-Ausgänge bearbeiten.

:::

<img src="/img/manual/asset-9b0542204c11.png" alt="Abbildung aus dem Originalhandbuch, gedruckte Seite 43" width="553" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Beispiel-Screenshot" width="32" loading="lazy" />

*Abbildung 6-6 Einstellungen des Analogausgangs*

<table><tbody><tr><td>1</td><td>Ausgangsport auswählen</td><td>2</td><td>Quelle: Legt fest, welches Messergebnis über diesen Ausgang übertragen wird.</td></tr><tr><td>3</td><td>Untergrenze 4 mA: Messwert, der 4 mA entsprechen soll.</td><td>4</td><td>Obergrenze 20 mA: Messwert, der 20 mA entsprechen soll.</td></tr><tr><td>5</td><td>Wird dies ausgewählt, wird der Wertebereich der Zellzählung folgendermaßen logarithmisch interpoliert:<br /><code>ratio = 1 + 9 × (counts − low) / (high − low)</code><br /><code>output = 4 mA + log<sub>10</sub>(ratio) × 16 mA</code><br /><br />counts: Gemessene Zellzahl<br />low: Untere Zellzahlgrenze<br />high: Obere Zellzahlgrenze<br />output: Stromstärke in mA</td><td colSpan="2"></td></tr></tbody></table>

Die folgenden Schritte beschreiben, wie Sie die Analogausgänge konfigurieren können.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Navigieren Sie zur Startseite der Benutzeroberfläche des BactoSense. |  |
| 2. | Drücken Sie die Taste Einstellungen des Auto-Modus. |  |
| 3. | Drücken Sie die Taste Analoge Ausgänge. |  |
| 4. | Wählen Sie Port 1 oder Port 2 (Abbildung 6-6) |  |
| 5. | Wählen Sie die Quelle aus (Abbildung 6-6, Position 2). |  |
| 6. | Definieren Sie die untere Bereichsgrenze (Abbildung 6-6, Position 3). | Entspricht die Quelle diesem Wert, werden am ausgewählten Ausgang 4 mA ausgegeben. |
| 7. | Definieren Sie die obere Bereichsgrenze (Abbildung 6-6, Position 4). | Entspricht die Quelle diesem Wert, werden am ausgewählten Ausgang 20 mA ausgegeben. |
| 8. | Drücken Sie die Taste Speichern. |  |

## 6.8 Testen der digitalen und analogen Ausgänge {#section-6-8}

:::warning[Unbeabsichtigte Alarme vermeiden]

Die Ausgangstestschnittstelle ermöglicht es, zu Testzwecken ein physisches Ausgangssignal zu erzeugen. Stellen Sie sicher, dass diese Tests an Ihrem Steuerungssystem keinen Alarm verursachen. CAUTION!

:::

<img src="/img/manual/asset-c774c093b426.png" alt="Abbildung aus dem Originalhandbuch, gedruckte Seite 45" width="523" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Beispiel-Screenshot" width="32" loading="lazy" />

*Abbildung 6-7 Analog- und Digitalausgänge testen*

<table><tbody><tr><td>1</td><td>Zustand der digitalen Ausgänge für den Test festlegen.</td><td>2</td><td>Digitale Ausgänge auf den unter (1) definierten Zustand setzen.</td></tr><tr><td>3</td><td>Alle digitalen und analogen Ausgänge gleichzeitig setzen.</td><td>4</td><td>Stromstärke beider Analogausgänge setzen.</td></tr><tr><td>5</td><td>Ausgänge auf den Zustand vor den Tests zurücksetzen.</td><td>6</td><td>Stromstärke an Port 2 setzen.</td></tr><tr><td>7</td><td>Stromstärke an Port 1 setzen.</td><td colSpan="2"></td></tr></tbody></table>

Die folgenden Schritte beschreiben, wie Sie die analogen und digitalen Ausgänge testen.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Navigieren Sie zur Startseite der Benutzeroberfläche des BactoSense. |  |
| 2. | Drücken Sie die Taste Einstellungen des Auto-Modus. |  |
| 3. | Drücken Sie die Taste Test outputs (Ausgänge testen). |  |

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 4. | Geben Sie die Testwerte ein, die Sie an die PLC senden möchten. | Für digitale Ausgänge: 1: Der Schalter ist geschlossen. 0: Der Schalter ist offen. |
| 5. | Tests lassen sich einzeln oder gemeinsam auslösen (siehe Abbildung 6-7): • Nur die digitalen Ausgänge an den Klemmen 1 – 4 testen. • Nur die analogen Ausgänge an Port 1, Port 2 oder beiden Ports testen. • Alle Ausgänge testen. | Die Ausgangssignale können an den Klemmen gemessen werden. |
| 6. | Drücken Sie die Taste Reset (Zurücksetzen). |  |
