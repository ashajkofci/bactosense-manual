---
title: "5. Betrieb"
sidebar_label: "5. Betrieb"
slug: /operation
sidebar_position: 5
description: "BactoSwitch-Bedienungsanleitung: Betrieb."
---

## 5.1 Bedienung über die Benutzeroberfläche des BactoSense {#section-5-1}

Dieser Abschnitt bietet eine grundlegende Einführung in den Betrieb des BactoSwitch und in die Anzeige der Ergebnisse. Beides ähnelt stark dem Betrieb und der Datenansicht des BactoSense im automatischen Modus. Weitere Einzelheiten finden Sie unter [Automatisches Messen im Online-Modus](/bactosense/measurements#section-10-2) in der neuesten Version der Bedienungsanleitung des BactoSense.

### 5.1.1 Starten von Messungen im automatischen Modus {#section-5-1-1}

Stellen Sie sicher, dass der BactoSwitch wie unter [Installation](04-installation.md) beschrieben korrekt installiert ist.

Navigieren Sie auf der Benutzeroberfläche des BactoSense zur Startseite. Wählen Sie dann **Automatischer Modus** und drücken Sie **Start**:

![Startseite des BactoSense mit hervorgehobenen Schaltflächen Automatischer Modus und Start](/img/bactoswitch/gui-home-auto-mode-start.png "width=639")

Drücken Sie im Diagrammfenster des automatischen Modus **Start**:

![Diagrammfenster des automatischen Modus mit hervorgehobener Schaltfläche Start](/img/bactoswitch/gui-auto-mode-plot-start.png "width=637")

Wählen Sie das Messprotokoll **BactoSwitch (mit Rückspülung)** und drücken Sie **Weiter**.

![Protokollauswahl mit ausgewähltem Protokoll BactoSwitch (mit Rückspülung)](/img/bactoswitch/gui-protocol-selection.png "width=638")

Wählen Sie abschließend das Messintervall. Beachten Sie, dass dies das Intervall zwischen zwei aufeinanderfolgenden Messungen ist. Das Messintervall für jede einzelne Quelle ist N-mal größer, wobei N die Anzahl der aktivierten Quellen ist. Wenn Sie beispielsweise 4 Quellen aktivieren und ein Intervall von 30 min wählen, wird jede einzelne Quelle in einem Intervall von 2 h gemessen.

![Intervalleinstellungen mit einem Intervall von 30 Minuten](/img/bactoswitch/gui-interval-settings.png "width=635")

### 5.1.2 Anzeigen der Messergebnisse {#section-5-1-2}

Sobald die Messungen gestartet sind, wird wieder das Diagrammfenster des automatischen Modus angezeigt. Wenn ein BactoSwitch angeschlossen ist, zeigt das Fenster des automatischen Modus die Zellzahlen der einzelnen Leitungen [1/mL] an, jedoch keine LNA/HNA-Werte [%] oder andere Parameter.

![Diagramm des automatischen Modus mit einer Kurve pro Leitung](/img/bactoswitch/gui-auto-mode-plot-lines.png "width=637")

Die Anzeigeeinstellungen können über die Schaltfläche oben in der Mitte des Diagramms geändert werden.

![Anzeigeeinstellungen des Diagramms im automatischen Modus](/img/bactoswitch/gui-display-settings.png "width=633")

Durch Drücken der Schaltfläche **Resultate anzeigen** öffnet sich die Ergebnisansicht (Liste) des automatischen Modus. Die Probennamen entsprechen den unter [Leitungskonfiguration](04-installation.md#section-4-6) festgelegten Leitungsnamen.

![Ergebnisliste des automatischen Modus mit einem Eintrag pro Leitungsmessung](/img/bactoswitch/gui-auto-mode-results.png "width=630")

Durch Drücken auf eine der Messungen werden deren Details angezeigt (weitere Einzelheiten finden Sie auch hier in der Bedienungsanleitung des BactoSense).

![Ergebnisdetails einer BactoSwitch-Messung im automatischen Modus](/img/bactoswitch/gui-result-details.png "width=637")

Durch Drücken der Schaltfläche **Filter** im Fenster der Ergebnisliste des automatischen Modus öffnet sich das Fenster **Resultate filtern**. Hier können Sie die Ergebnisse über das Feld **Nach Namen filtern** anhand einer Zeichenfolge filtern.

![Fenster Resultate filtern](/img/bactoswitch/gui-filter-results.png "width=635")

Zusätzlich zur Filterung nach Start- und Enddatum sowie nach Messungsname können Sie die Ergebnisse über die Schaltfläche **Nach Zeilen filtern** nach BactoSwitch-Leitung filtern.

![Fenster Resultate filtern mit hervorgehobener Schaltfläche Nach Zeilen filtern](/img/bactoswitch/gui-filter-by-line-button.png "width=638")

![Auswahl einer BactoSwitch-Probenleitung](/img/bactoswitch/gui-select-sample-line.png "width=635")

Die Filter gelten nicht nur für die Ergebnisliste des automatischen Modus, sondern auch für das Diagramm des automatischen Modus. So können Sie gezielt Ergebnisse anhand der Leitungsnummern oder Leitungsnamen (wie unter [Leitungskonfiguration](04-installation.md#section-4-6) festgelegt) darstellen. Siehe auch [Filtern von Messungen](/bactosense/measurements#section-10-7) in der Bedienungsanleitung des BactoSense.

![Nach Leitung 1 gefiltertes Diagramm des automatischen Modus](/img/bactoswitch/gui-auto-mode-plot-filtered.png "width=293") ![Nach Leitung 1 gefilterte Ergebnisse des automatischen Modus](/img/bactoswitch/gui-auto-mode-results-filtered.png "width=293")

### 5.1.3 Einrichten von Alarmen {#section-5-1-3}

Im Fenster **Alarmkonfiguration** (erreichbar über das Hauptmenü unter **Automatischer Modus Einstellungen** / **Alarme**) können Sie Alarme gezielt für bestimmte Leitungen festlegen:

![Alarmkonfiguration mit ausgewählter Probenleitung](/img/bactoswitch/gui-alarm-configuration.png "width=625")

## 5.2 Fernsteuerung und Datenvisualisierung {#section-5-2}

### 5.2.1 BactoCloud {#section-5-2-1}

BactoCloud ist die cloudbasierte Lösung von bNovate für die Fernsteuerung von Geräten, die Datenvisualisierung und erweiterte Analysen. Die Basisversion von BactoCloud ist für alle Geräte verfügbar.

BactoCloud enthält Funktionen, mit denen sich die Mehrleitungsdaten eines mit einem BactoSwitch ausgestatteten BactoSense besonders einfach visualisieren lassen. Darüber hinaus erleichtern erweiterte Analysen Differenzberechnungen, z. B. zur Bewertung der mikrobiologischen Wirksamkeit von Wasseraufbereitungsschritten. Wie Sie das Gerät verbinden, erfahren Sie unter [BactoCloud](/bactosense/bactocloud) in der Bedienungsanleitung des BactoSense.

![Mehrleitungsmessungen in BactoCloud](/img/bactoswitch/bactocloud-multi-line.png "width=700")

### 5.2.2 Web-Benutzeroberfläche {#section-5-2-2}

Die [Web-Benutzeroberfläche](/bactosense/web-user-interface) des BactoSense enthält Funktionen zum Filtern der Daten der verschiedenen BactoSwitch-Leitungen.

Auf der Registerkarte **Ergebnisse** können Sie im Bereich **Ergebnisse des Online-Modus** die Daten entweder nach **Name** oder nach **Zeilen-ID** filtern. Diese Felder entsprechen den unter [Leitungskonfiguration](04-installation.md#section-4-6) vergebenen Leitungsnummern und -namen. Die Filterung gilt auch für das Diagramm des automatischen Modus.

![Ergebnisse des automatischen Modus in der Web-Benutzeroberfläche mit hervorgehobenen Spalten Name und Stream ID](/img/bactoswitch/web-auto-mode-results.png "width=634")

### 5.2.3 Steuerung des BactoSwitch über die I/O-Box des BactoSense {#section-5-2-3}

Der Betrieb des BactoSwitch kann über den BactoSense und die optionale I/O-Box mit einem Programmable Logic Controller (PLC) gesteuert werden. Ausführlichere Informationen finden Sie unter [Konfiguration digitaler Eingänge und PLC-Modus](/bactosense/io-box#section-6-5) in der Bedienungsanleitung des BactoSense. Hier werden nur die Besonderheiten des BactoSwitch-Betriebs erläutert.

Navigieren Sie im Hauptmenü zu **Automatischer Modus Einstellungen** / **Digitale Eingänge**. Die BactoSwitch-Leitung kann über das Feld **Leitung** ausgewählt werden.

Im folgenden Beispiel ist die Option **Planer verwenden** deaktiviert. Setzt der PLC die digitalen Eingänge auf 1100, wird sofort eine Messung an Leitung Nr. 1 gestartet:

![Konfiguration der digitalen Eingänge mit ausgewählter Leitung 1](/img/bactoswitch/gui-digital-inputs-line.png "width=641")

Um regelmäßige Messungen zu starten, aktivieren Sie die Option **Planer verwenden** und stellen Sie das gewünschte Intervall ein. Alle aktiven Leitungen werden nacheinander beprobt, beginnend mit der ausgewählten Leitung (in diesem Beispiel Leitung Nr. 1):

![Konfiguration der digitalen Eingänge mit aktiviertem Planer](/img/bactoswitch/gui-digital-inputs-scheduler.png "width=633")

Daten einer bestimmten Leitung müssen über die analogen Ausgänge unmittelbar nach Abschluss der Messung an dieser Leitung ausgelesen werden, z. B. indem Sie das Signal **Prozess läuft** einem bestimmten digitalen Ausgang zuweisen und das Auslesen der analogen Ausgänge auslösen, wenn sich der Status dieses Ausgangs ändert. Beachten Sie, dass dies nicht die Standardeinstellung ist. Weitere Einzelheiten finden Sie unter [Konfiguration der digitalen Ausgänge](/bactosense/io-box#section-6-6) in der Bedienungsanleitung des BactoSense.

![Zuweisung von Ereignissen zu Ausgängen mit Prozess läuft an Ausgang 3](/img/bactoswitch/gui-assign-events-to-outputs.png "width=638")

### 5.2.4 Modbus TCP {#section-5-2-4}

BactoSwitch und BactoSense können über Modbus TCP (Transmission Control Protocol) ferngesteuert werden; dafür ist keine I/O-Box erforderlich. Weitere Einzelheiten finden Sie unter [Modbus TCP](/bactosense/field-bus-interface#section-7-1) in der Bedienungsanleitung des BactoSense.

Die Einrichtung des Geräts für die Steuerung über Modbus TCP ist identisch mit der im vorherigen Abschnitt zur I/O-Box beschriebenen Einrichtung. Um Modbus TCP als digitale Eingangsquelle auszuwählen, drücken Sie im Fenster **Konfiguration der digitalen Eingänge (SPS)** unten auf **Digitale Eingangsquelle wählen**.

![Konfiguration der digitalen Eingänge mit hervorgehobener Schaltfläche Digitale Eingangsquelle wählen](/img/bactoswitch/gui-digital-input-source-button.png "width=624")

Stellen Sie dann die Quelle auf **Modbus-TCP** um und drücken Sie **Zurück**.

![Digitale Eingangsquelle auf Modbus TCP eingestellt](/img/bactoswitch/gui-digital-input-source-modbus.png "width=624")

Zusätzlich zu den üblichen Modbus-Registern des BactoSense stehen spezielle Modbus-Register zur Verfügung, um Informationen vom BactoSwitch auszulesen:

- Aktuelle Messleitung
- Nächste Messleitung
- Durchfluss
- Status
- Verbindung
- Zustand der Magnetventile

Einzelheiten zu Registeradressen und -formaten finden Sie unter [Adressenliste auf Modbus TCP](/bactosense/field-bus-interface#section-7-1-2) in der neuesten Bedienungsanleitung des BactoSense.

Um die Ergebnisse einer bestimmten Leitung zu erhalten, müssen die gewünschten Daten am Ende einer Messung ausgelesen werden. Der PLC erkennt das Ende der Messung daran, dass das Register **Messphase** wieder auf 0 gesetzt wird.
