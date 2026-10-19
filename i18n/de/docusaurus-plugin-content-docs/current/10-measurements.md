---
title: "10. Messungen"
sidebar_label: "10. Messungen"
sidebar_position: 10
slug: /measurements
---

## 10.1 Proben {#section-10-1}

Der BactoSense kann mittels des manuellen Probenahmegeräts manuell entnommene Proben messen und ebenfalls mittels des Online-Probenahmegeräts aus einer angeschlossenen Wasserquelle automatisch Proben nehmen.

Probentypen und Vorbehandlungen:

- Rohwasser und insbesondere Oberflächenwasser müssen durch einen 20 µm-Filter gefiltert werden. Partikel können die internen Filter verstopfen und das Gerät beschädigen. Klares Trinkwasser muss normalerweise nicht gefiltert werden.
- Sprudelwasser und Softdrinks können mit dem Gerät nicht gemessen werden.
- Wasser mit hohem Chloranteil kann die Messergebnisse beeinflussen.
- Die unter [Technische Daten](03-instrument-overview.md#section-3-2) gelisteten Proben- und Betriebsbedingungen müssen erfüllt sein.

## 10.2 Automatisches Messen im Online-Modus {#section-10-2}

Messen im Online-Modus beschreibt eine Konfiguration, in welcher der BactoSense mittels des Online-Probenahmegeräts an eine Wasserquelle angeschlossen ist und die Messungen automatisch in vorgegebenen Intervallen nimmt.

Wenn Sie stattdessen manuell entnommene Einzelproben messen möchten, beachten Sie [Messungen im manuellen Modus](10-measurements.md#section-10-3).

Für unterschiedliche Intervalle oder bestimmte Wochentage siehe [Erweiterte Zeitplanung](10-measurements.md#section-10-2-4).

### 10.2.1 Konfigurieren und Starten automatischer Online-Messungen {#section-10-2-1}

Die folgenden Anweisungen zeigen, wie Sie mittels des Online-Probenahmegeräts eine automatische Online-Messung konfigurieren und starten.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Stellen Sie sicher, dass das Online-Probenahmegerät gemäß [Installation des Online-Probenahmegeräts](05-installation.md#section-5-5) fest installiert ist. | Wenn das manuelle Probenahmegerät installiert ist und Sie zum Online-Probenahmegerät wechseln möchten, entfernen Sie es gemäß [Entfernen des manuellen Probenahmegeräts](08-general-operations-and-configurations.md#section-8-10-2) und installieren Sie das Online-Probenahmegerät gemäß [Installation des Online-Probenahmegeräts](05-installation.md#section-5-5). |
| 2. | Navigieren Sie zur Startseite der Benutzeroberfläche des BactoSense. |  |
| 3. | Drücken Sie auf der Startseite **Modus**. Tippen Sie im Bildschirm **Modusauswahl** auf **Online-Modus** und drücken Sie **Zurück**, um zur Startseite zurückzukehren. | Der aktuelle Modus ist hervorgehoben. Durch Tippen auf einen Modus wird sofort zu diesem gewechselt. Läuft eine Messung, drücken Sie **Anhalten**, um sie abzubrechen, oder **Bitte warten** und wählen Sie den Modus nach Abschluss der Messung erneut. Erscheint **Gerätevalidationsmodus kann nicht im Online-Modus benutzt werden. Möchten Sie den Gerätevalidationsmodus ausschalten?**, drücken Sie **Ja**. Fragt die Startseite anschließend **Möchten Sie den Online-Modus starten?**, drücken Sie **Nein** und fahren Sie mit dem nächsten Schritt fort; **Ja** startet die Serie erneut mit den zuletzt gespeicherten Einstellungen des Online-Modus. |
| 4. | Drücken Sie auf der Startseite Start, um den Assistenten für Online-Messungen zu öffnen. |  |
| 5. | Stellen Sie unter Messprotokoll sicher, dass das Kontrollkästchen für „Kontinuierliche Probenahme (mit Rückspülung)“ aktiviert ist. |  |
| 6. | Geben Sie einen Probennamen ein, indem Sie in das Textfeld Probenname tippen. |  |
| 7. | Wählen Sie das für die Messung gewünschte Gate, indem Sie in das Textfeld Gates tippen. | Im Allgemeinen werden die Standard- TCC- und ICC-Gates verwendet. Wenn Ihre Anwendung dies verlangt, verwenden Sie benutzerdefinierte Gates. Das Erstellen und das Anpassen von Gates sind unter [Ergebnisse und Datenanalyse](11-results-and-data-analysis.md) beschrieben. |
| 8. | Drücken Sie die Taste Weiter. |  |
| 9. | Wenn der Editor für Wochenpläne angezeigt wird, drücken Sie Zurück, um zum einfachen Intervallplan zurückzukehren. Wählen Sie das Messintervall mit dem Rad auf der rechten Seite. | Das Messintervall ist die Zeit zwischen den Messungen. Es kann zwischen 30 min und 6 Stunden liegen. |
| 10. | Bei Bedarf können Sie die Startzeit verzögern, indem Sie Sofort beginnen deaktivieren und eine bestimmte Startzeit auswählen. | Die Uhrzeiteinstellung des BactoSense wird unter [Datum und Uhrzeit](08-general-operations-and-configurations.md#section-8-3-2) beschrieben. |
| 11. | Drücken Sie die Start-Taste. | Während der Messung wird die aktuelle Schätzung der Zellkonzentration in der Aktionsleiste unter „Last“ angezeigt. |
| 12. | Nach jeder Messung wird das Zeitreihendiagramm aktualisiert. | Drücken Sie für weitere Einzelheiten die Taste Resultate anzeigen. |
| 13. | Möchten Sie eine Onlinemessserie stoppen, schauen Sie unter [Automatische Online-Messungen abbrechen](10-measurements.md#section-10-2-2) nach. |  |

### 10.2.2 Automatische Online-Messungen abbrechen {#section-10-2-2}

Folgen Sie den untenstehenden Schritten, um eine Messserie im Online-Modus zu stoppen.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Tippen Sie im Online-Modus auf das Diagramm der Startseite, um das Online-Diagramm zu öffnen. Drücken Sie Anhalten. |  |
| 2. | Bestätigen Sie die Meldung zum Stoppen der Messserie im Online-Modus. |  |
| 3. | Läuft gerade eine Messung, so können Sie auswählen, ob Sie sie sofort abbrechen oder auf deren Abschluss warten möchten. |  |
| 4. | Möchten Sie innerhalb der nächsten paar Stunden keine weitere Messung durchführen, entfernen Sie das Online- Probenahmegerät wie unter [Entfernen des Online-Probenahmegeräts](08-general-operations-and-configurations.md#section-8-10-1) beschrieben und installieren Sie das manuelle Probenahmegerät gemäß [Installation des manuellen Probenahmegeräts](05-installation.md#section-5-4). |  |
| 5. | Zum Anzeigen Ihrer Daten siehe [Ansehen automatischer Onlinemessungen](10-measurements.md#section-10-2-3). Zum Abrufen Ihrer Daten siehe [Datenzugriff und -export](12-data-access-and-export.md). |  |

### 10.2.3 Ansehen automatischer Onlinemessungen {#section-10-2-3}

Tippen Sie im Online-Modus auf das Diagramm auf der Startseite, um das Liniendiagramm der Messergebnisse über die Zeit zu öffnen.

![BactoSense — Online-Ergebnisdiagramm](/img/gui/de/online-results-chart.png "width=532 class=manual-figure")

*Abbildung 10-1 Übersichtsdiagramm für den Online-Modus*

Durch Antippen der Taste mit dem Zahnradsymbol (Pfeil in Abbildung 10-1) können Sie die Skalen und angezeigten Messgrößen ändern (siehe Abbildung 10-2). Um Alarme im Diagramm anzuzeigen, erstellen Sie einen Alarm und aktivieren Sie dessen Einstellung „Display alarm“ (siehe [Alarmkonfiguration](08-general-operations-and-configurations.md#section-8-5)).

![BactoSense — Online-Diagrammeinstellungen](/img/gui/de/online-chart-settings.png "width=531 class=manual-figure")

*Abbildung 10-2 Einstellungen für Liniendiagramme im Online-Modus*

|  |  |
| --- | --- |
| 1 | Prozentskala einstellen. Berühren Sie die obere Hälfte des Skalenbalkens, um die obere Grenze zu verändern. Berühren Sie die untere Hälfte, um die untere Grenze zu verändern. |
| 2 | Zahlenskala einstellen. Berühren Sie die obere Hälfte des Skalenbalkens, um die obere Grenze zu verändern. Berühren Sie die untere Hälfte, um die untere Grenze zu verändern. |
| 3 | Wählen Sie das Anzeigeintervall oder filtern Sie nach Namen (siehe [Filtern von Messungen](../measurements/#section-10-7)). |
| 4 | Wählen Sie die vertikale Skala: • Auto scale passt sich an die aktuellen Daten an. • Full scale zeigt den gesamten Messbereich des Geräts. • Custom scale wird mit den Schiebereglern 1 und 2 eingestellt. Log und Linear bestimmen die Zellzahlskala auf der rechten Seite. |
| 5 | Wählen Sie, welche Metriken im Diagramm angezeigt werden sollen. |

### 10.2.4 Erweiterte Zeitplanung {#section-10-2-4}

Verwenden Sie die erweiterte Zeitplanung, wenn Messungen in unterschiedlichen Intervallen oder an bestimmten Wochentagen stattfinden sollen. Ein Wochenplan kombiniert eine oder mehrere Regeln mit jeweils eigenem Messprotokoll, Messnamen, Gate-Set und Zeitplan. Der Wochenplan wiederholt sich, bis Sie ihn ändern oder stoppen.

Die erweiterte Zeitplanung erfordert ein aktiviertes Management Package oder Scientific Package. Ist **Advanced** nicht verfügbar, prüfen Sie den Paketstatus unter **Einstellungen → Einstellungen → Upgrades**; siehe [Upgrade-Pakete](09-upgrade-packages.md). Installieren Sie vor dem Start das Online-Probenahmegerät und prüfen Sie [Datum und Uhrzeit](08-general-operations-and-configurations.md#section-8-3-2) des Instruments.

#### Einen Wochenplan erstellen {#advanced-scheduler-create}

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / BILDER |
| --- | --- | --- |
| 1. | Folgen Sie den Schritten 1–8 unter [Automatische Online-Messungen konfigurieren und starten](10-measurements.md#section-10-2-1), um Online-Modus, Messprotokoll, Probenname und Gates auszuwählen. | Drücken Sie **Weiter**, um die Zeitplanung zu öffnen. |
| 2. | Drücken Sie **Advanced**. Ist bereits ein Wochenplan eingerichtet, kann sich der Regeleditor direkt öffnen. | Abbildung 10-3 zeigt **Advanced** auf dem Bildschirm für das einfache Messintervall. <br />![BactoSense — Schaltfläche Advanced](/img/gui/de/advanced-scheduler-select.png "width=220 class=manual-figure") |
| 3. | Wählen Sie links eine Regel zum Bearbeiten oder drücken Sie **Neue Regel**. Um eine nicht benötigte Regel aus dem Entwurf zu entfernen, wählen Sie sie aus und drücken Sie **Löschen**. | Prüfen Sie die vorhandenen Regeln, bevor Sie eine weitere hinzufügen. Alle Regeln tragen zum Wochenplan bei. <br />![BactoSense — Schaltfläche Neue Regel](/img/gui/de/advanced-scheduler-new-rule.png "width=180 class=manual-figure") |
| 4. | Stellen Sie **Name**, **Messprotokoll** und **Gate** für die gewählte Regel ein. | **Name** bezeichnet die erzeugten Messungen. Wählen Sie ein Gate-Set, das zur installierten Kartusche passt. Bei Wartungsprotokollen ohne Gates wird dieses Feld ausgeblendet. |
| 5. | Wählen Sie **30 minutes**, **1 hour**, **2 Stunden**, **Täglich** oder **Benutzerdefiniert**. | Die Intervallvorgaben wiederholen sich jeden Tag. **Täglich** plant einen Lauf pro Tag zur gewählten **Startzeit**. Mit **Benutzerdefiniert** wählen Sie Wochentage, ein anderes Intervall oder ein Zeitfenster. |
| 6. | Stellen Sie unter **Benutzerdefiniert** die **Startzeit** ein, wählen Sie die gewünschten **Tage** und legen Sie das **Intervall** in Minuten fest. Drücken Sie **Set time range**, wählen Sie das tägliche Zeitfenster und bestätigen Sie mit **OK**. | Scrollen Sie die Felder unter den Häufigkeitsschaltflächen, um **Intervall**, **Set time range** und **Bereich** zu sehen. Abbildungen 10-4 und 10-5 zeigen dieselbe Regel vor und nach dem Scrollen. <br />![BactoSense — Schaltfläche Set time range](/img/gui/de/advanced-scheduler-time-range-button.png "width=160 class=manual-figure") |
| 7. | Wiederholen Sie die Schritte 3–6 für weitere Regeln. Drücken Sie **Vorschau**. | Wählen Sie ein Gate-Set, wenn die Vorschau wegen eines fehlenden Gates nicht verfügbar ist. Meldet die Vorschau einen Konflikt, kehren Sie zu den Regeln zurück und passen Sie Zeiten oder Intervalle so an, dass die Protokolle abgeschlossen werden können. <br />![BactoSense — Schaltfläche Vorschau](/img/gui/de/advanced-scheduler-preview-button.png "width=130 class=manual-figure") |
| 8. | Wählen Sie in der Vorschau jeden Wochentag und prüfen Sie die erzeugten Einträge. Wählen Sie einen Eintrag, um **Zeit**, **Name**, **Messprotokoll** und **Gate** zu prüfen. | Bei langen Pausen kann die Vorschau automatisch eingefügte Reinigungsprotokolle enthalten. Prüfen Sie diese zusammen mit den Messeinträgen; siehe Abbildung 10-6. <br />![BactoSense — Wochentag auswählen](/img/gui/de/advanced-scheduler-days.png "width=240 class=manual-figure") |
| 9. | Nehmen Sie bei Bedarf die unten beschriebenen Einzeländerungen vor und drücken Sie **Speichern**, um den Wochenplan anzuwenden. | Änderungen an Regeln und Vorschau-Einträgen bleiben bis zum Drücken von **Speichern** ein Entwurf. <br />![BactoSense — Schaltfläche Speichern](/img/gui/de/advanced-scheduler-save.png "width=130 class=manual-figure") |
| 10. | Drücken Sie bei **Planer jetzt starten?** auf **Ja**, um den gespeicherten Plan zu starten, oder auf **Nein**, um ihn zu speichern, ohne einen gestoppten Planer zu starten. | Prüfen Sie den Betriebszustand auf dem Startbildschirm. Zum Stoppen einer laufenden Serie siehe [Automatische Online-Messungen beenden](10-measurements.md#section-10-2-2). |

![BactoSense — Auswahl der erweiterten Zeitplanung auf dem Intervallbildschirm](/img/gui/de/advanced-scheduler-select.png "width=400 class=manual-figure")

*Abbildung 10-3 Erweiterte Zeitplanung vom Bildschirm für das einfache Messintervall öffnen*

![BactoSense — Benutzerdefinierte Regel für Wochentage](/img/gui/de/advanced-scheduler-rule.png "width=600 class=manual-figure")

*Abbildung 10-4 Regeleditor mit Messeinstellungen, Häufigkeit und Wochentagen*

![BactoSense — Benutzerdefiniertes Intervall und tägliches Zeitfenster](/img/gui/de/advanced-scheduler-range.png "width=600 class=manual-figure")

*Abbildung 10-5 Benutzerdefinierte Felder scrollen, um Intervall und Zeitfenster zu prüfen*

**Beispiel: stündliche Überwachung an Werktagen.** Wählen Sie **Benutzerdefiniert**, setzen Sie **Startzeit** auf **08:00**, **Tage** auf Montag–Freitag, **Intervall** auf **60 Min.** und das Zeitfenster auf **08:00–17:00**. Die Messeinträge beginnen an diesen Tagen um 08:00, 09:00, …, 16:00. Das Zeitfenster endet um 17:00; es fügt keinen Start um 17:00 hinzu. Diese Werte veranschaulichen die Bedienung. Wählen Sie einen Plan, der zu Ihrer Anwendung passt.

Für ein Zeitfenster über Mitternacht verwenden Sie getrennte Regeln für die Abschnitte vor und nach Mitternacht und wählen die jeweiligen Wochentage. Vergleichen Sie die erzeugte Vorschau mit den vorgesehenen Zeiten.

#### Einzelne Einträge in der Vorschau anpassen {#advanced-scheduler-preview}

In der Vorschau können Sie Ausnahmen zum erzeugten Plan vornehmen, etwa einen einzelnen Lauf verschieben oder seinen Messnamen ändern.

![BactoSense — Wochenplanvorschau mit ausgewähltem Eintrag](/img/gui/de/advanced-scheduler-preview.png "width=600 class=manual-figure")

*Abbildung 10-6 Tagesweise Vorschau und Einstellungen des ausgewählten Eintrags*

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / BILDER |
| --- | --- | --- |
| 1. | Wählen Sie einen Wochentag und anschließend einen Eintrag in der linken Liste. | Die Felder rechts zeigen die Einstellungen dieses Eintrags. |
| 2. | Tippen Sie auf **Zeit**, **Name**, **Messprotokoll** oder **Gate**, um den ausgewählten Eintrag zu ändern. | Die Änderung gilt für diesen Eintrag. Prüfen Sie das Gate-Set erneut, wenn Sie das Messprotokoll ändern. Bei Protokollen mit BactoSwitch ist auch das Feld **Leitung** verfügbar. <br />![BactoSense — Zeit des ausgewählten Eintrags](/img/gui/de/advanced-scheduler-entry-time.png "width=280 class=manual-figure") |
| 3. | Drücken Sie **Neu**, um dem ausgewählten Tag einen Eintrag hinzuzufügen, und passen Sie dessen Felder an. Zum Entfernen wählen Sie einen Eintrag und drücken **Löschen**. | Prüfen Sie Zeit, Messprotokoll und Gate-Set des neuen Eintrags vor dem Speichern. <br />![BactoSense — Schaltfläche Neu](/img/gui/de/advanced-scheduler-new-entry.png "width=130 class=manual-figure") |
| 4. | Verwenden Sie **In Woche kopieren** nur, wenn jeder Tag dieselben Einträge wie der ausgewählte Tag erhalten soll. Bestätigen Sie die Meldung mit **OK**. | Dadurch werden die Einträge der anderen Tage im Entwurf ersetzt, einschließlich Wochenenden und tagesbezogener Ausnahmen. Prüfen Sie danach alle sieben Tage. <br />![BactoSense — Schaltfläche In Woche kopieren](/img/gui/de/advanced-scheduler-copy-week.png "width=140 class=manual-figure") |
| 5. | Drücken Sie **Speichern** und beantworten Sie **Planer jetzt starten?** wie oben beschrieben. | Schlägt das Speichern fehl, prüfen Sie die Meldung und korrigieren Sie Zeitkonflikte oder fehlende Einstellungen vor einem erneuten Versuch. <br />![BactoSense — Schaltfläche Speichern](/img/gui/de/advanced-scheduler-save.png "width=130 class=manual-figure") |

:::info[Einzeländerungen erhalten]

**Zurück** führt von der Vorschau zu den Regeln. Wenn Sie eine Regel ändern und eine neue Vorschau erzeugen, können einzelne Anpassungen ersetzt werden. Nehmen Sie diese Anpassungen nach der endgültigen Regelvorschau vor und prüfen Sie sie vor dem Speichern.

:::

#### Einen bestehenden Plan ändern oder zum einfachen Intervall zurückkehren {#advanced-scheduler-change}

Öffnen Sie bei laufendem Planer **Startbildschirm → Einstellungen → Online-Modus Einstellungen → Messintervall**. Bearbeiten Sie die Wochenregeln, drücken Sie **Vorschau**, prüfen Sie die Einträge und drücken Sie **Speichern**. Ist der Planer gestoppt, öffnen Sie mit **Start** auf dem Startbildschirm im Online-Modus den Messassistenten erneut.

Um wieder ein konstantes Intervall zu verwenden, drücken Sie **Zurück**, um von der Vorschau zu den Regeln zu gelangen, und dann nochmals **Zurück**, um den Bildschirm für das einfache Messintervall zu öffnen. Wählen Sie das Intervall und bestätigen Sie im Bildschirm **Messintervall** mit **OK** oder im Messassistenten mit **Start**. Die Bestätigung ersetzt den erweiterten Wochenplan durch den einfachen Plan. **Zurück** allein wendet die Änderung nicht an.

## 10.3 Messungen im manuellen Modus {#section-10-3}

Messungen im manuellen Modus beschreibt eine Konfiguration, in der das manuelle Probenahmegerät an den BactoSense angeschlossen ist und der Bediener Einzelproben in 5-mL-Schraubverschlussröhrchen an das Gerät anbringt.

### 10.3.1 Durchführen einer Messung im manuellen Modus {#section-10-3-1}

Die folgenden Anweisungen zeigen, wie Sie im manuellen Modus eine Messung konfigurieren und starten.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Bitte stellen Sie sicher, dass das manuelle Probenahmegerät korrekt gemäß [Installation des manuellen Probenahmegeräts](05-installation.md#section-5-4) installiert ist. |  |
| 2. | Wurde das manuelle Probenahmegerät neu installiert oder das Gerät war für über drei Tage ausgeschaltet bzw. nicht in Benutzung, wird empfohlen, das Probenahmegerät zu reinigen. Ist eine Washstation verfügbar, folgen Sie den Anweisungen unter [Manuelles Probenahmegerät mit Washstation reinigen](15-maintenance.md#section-15-2-2), andernfalls denen unter [Manuelles Probenahmegerät mittels Basisreinigung reinigen](15-maintenance.md#section-15-2-3). |  |
| 3. | Wurde für das manuelle Probenahmegerät eine Reinigung durchgeführt (siehe voriger Schritt), so wird empfohlen, vor der nächsten Messung einen Ansaugvorgang durchzuführen. Folgen Sie den Schritten unter [Durchführen eines Ansaugens](10-measurements.md#section-10-9-3). |  |
| 4. | Navigieren Sie zur Startseite der Benutzeroberfläche des BactoSense. |  |
| 5. | Drücken Sie auf der Startseite **Modus**. Tippen Sie im Bildschirm **Modusauswahl** auf **Manueller Modus**. Drücken Sie **Zurück** und anschließend **Messen**, um den Messassistenten zu öffnen. | Der aktuelle Modus ist hervorgehoben. Durch Tippen auf einen Modus wird sofort zu diesem gewechselt. Ist eine Serie im Online-Modus aktiv, bestätigen Sie **Möchten Sie den Automatischen Modus wirklich beenden?** mit **Ja**. Läuft eine Messung, drücken Sie **Anhalten**, um sie abzubrechen, oder **Bitte warten** und wählen Sie den Modus nach Abschluss der Messung erneut. **Manueller Modus** kann nicht gewählt werden, solange der PLC-Modus aktiv ist (siehe [Konfiguration digitaler Eingänge und PLC-Modus](06-io-box.md#section-6-5)). |
| 6. | Wählen Sie Wasseranalyse aus der Liste der verfügbaren Protokolle. | Wenn Sie technische Replikate wünschen, wählen Sie deren Anzahl in der Spalte Wiederholungen. Standardmäßig wird eine Probe gemessen. Bei mehreren Replikaten werden mehrere Proben aus demselben Probenröhrchen entnommen. |
| 7. | Geben Sie einen Probennamen ein, indem Sie in das Textfeld Probenname tippen und nach Eingabe des Namens OK drücken. |  |
| 8. | Überprüfen Sie, ob Ihr gewünschtes Gate im Feld Gates konfiguriert ist. Möchten Sie ein anderes Gate verwenden, tippen Sie in das Feld Gates und wählen Sie das gewünschte Gate aus der Liste der verfügbaren Optionen aus (abhängig von der installierten Kartusche). | Im Allgemeinen werden die Standard- TCC- und ICC-Gates verwendet. Wenn Ihre Anwendung dies verlangt, verwenden Sie benutzerdefinierte Gates. Das Erstellen und das Anpassen von Gates sind unter [Ergebnisse und Datenanalyse](11-results-and-data-analysis.md) beschrieben. |
| 9. | Drücken Sie die Taste Weiter. |  |
| 10. | Bringen Sie ein frisches 5mL- Probenröhrchen mit 2 – 5mL-Proben am manuellen Probenahmegerät an. |  |
| 11. | Drücken Sie die Start-Taste. | Die geschätzte Protokolldauer und die erwartete Endzeit werden angezeigt. Der aktuelle Status der Messung (z.B. Initialisieren, Mischen...) wird in der oberen Leiste angezeigt |
| 12. | Nach Abschluss der Messung drücken Sie Weiter, um die Ergebnisse anzusehen. Die Ergebnisse werden unter [Messergebnisse](11-results-and-data-analysis.md#section-11-1) besprochen. |  |
| 13. | Möchten Sie mit der nächsten Messung fortfahren, drücken Sie die Taste Neu. |  |
| 14. | Um ältere Messerebnisse zu sehen, drücken Sie die Taste Resultate anzeigen. |  |
| 15. | Möchten Sie die Messung umbenennen, regaten oder exportieren, folgen Sie bitte den Anweisungen in den folgenden Abschnitten. |  |
| 16. | Möchten Sie keine weiteren Proben messen und das Gerät soll inaktiv bleiben oder ausgeschaltet werden, führen Sie eine Reinigung des manuellen Probenahmegeräts durch. Ist eine Washstation verfügbar, folgen Sie den Anweisungen unter [Manuelles Probenahmegerät mit Washstation reinigen](15-maintenance.md#section-15-2-2), andernfalls denen unter [Manuelles Probenahmegerät mittels Basisreinigung reinigen](15-maintenance.md#section-15-2-3). |  |

## 10.4 Messungen umbenennen {#section-10-4}

Messungen können in der Ergebnisdetailansicht umbenannt werden.

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Drücken Sie auf der Startseite Einstellungen, dann Logs, und wählen Sie Results (manual mode) oder Results (online mode). |
| 2. | Wählen Sie das umzubenennende Ergebnis aus der Ergebnisliste aus. Ausnahme: Möchten Sie eine Gruppe von Replikaten umbenennen (siehe [Arbeiten mit Messreplikaten](10-measurements.md#section-10-5)), drücken Sie lange auf die Replikategruppe und drücken Sie dann die Umbenennen-Taste. |
| 3. | In der Ergebnisdetailansicht drücken Sie die Taste Umbenennen (siehe [Messergebnisse](11-results-and-data-analysis.md#section-11-1)). |
| 4. | Es erscheinen eine Tastatur und ein Textfeld mit dem aktuellen Namen der Probe. Verwenden Sie die Tastatur, um den Probennamen zu ändern und drücken Sie OK. |

## 10.5 Arbeiten mit Messreplikaten {#section-10-5}

Wenn Sie im manuellen Modus arbeiten, können Analyseprotokolle wiederholt werden. Dies ist insbesondere dann nützlich, wenn Sie von einer einzelnen Probe technische Replikate erzeugen wollen.

- Die Anzahl der Replikate kann bei der Konfiguration einer manuellen Messung gewählt werden, siehe [Durchführen einer Messung im manuellen Modus](10-measurements.md#section-10-3-1).
- In der Ergebnisliste des manuellen Modus werden Replikate in einem Eintrag gruppiert. Die Zahl in Klammern neben der Probe zeigt die Anzahl der Replikate an. In dieser Ansicht bestehen die für die Replikategruppe gezeigten Ergebnisse aus Durchschnitts- und Standardabweichung. Einzelne Replikatmessungen sind nach Drücken auf die Replikatgruppe zugänglich.
- Replikatgruppen können einfach umbenannt, gelöscht, exportiert oder regatet werden, wenn Sie in der Ergebnisliste des manuellen Modus lange auf die Replikatgruppe drücken.

## 10.6 Messungen regaten {#section-10-6}

Das Anpassen von Gates einzelner Messungen oder eines Satzes von Messungen wird unter [Gates ändern](11-results-and-data-analysis.md#section-11-4) beschrieben.

## 10.7 Filtern von Messungen {#section-10-7}

Mit Filtern beschränken Sie die Ergebnisliste auf die benötigten Messungen. Sie können nach Datumsbereich, nach Messungsname und, wenn BactoSwitch aktiviert ist, nach BactoSwitch-Probenlinie filtern. Wenn Sie Filter kombinieren, werden nur Messungen angezeigt, die alle Filter erfüllen. Die Filter durchsuchen alle auf dem Gerät gespeicherten Messungen.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Drücken Sie auf der Startseite **Resultate**. | Die Liste zeigt die Ergebnisse des aktuellen Betriebsmodus: **Online-Modus-Ergebnisse** oder **Resultatdetails Manueller Modus**. Um die Liste des anderen Modus zu öffnen, drücken Sie **Einstellungen**, dann **Logs**, und wählen Sie **Results (online mode)** oder **Results (manual mode)**. |
| 2. | Drücken Sie **Filter**. | Der Bildschirm **Resultate filtern** wird geöffnet. Die Felder links zeigen die aktuellen Filter. |
| 3. | Um nach Datum zu filtern, tippen Sie auf das Feld unter **Startdatum** und wählen Sie im Kalender den ersten Tag. Tippen Sie auf das Zeitfeld darunter und stellen Sie Stunde und Minute mit den Rädern ein. Stellen Sie **Enddatum** und die zugehörige Zeit auf die gleiche Weise ein. | Beide Grenzen sind eingeschlossen: Messungen bis zum Ende der gewählten Endminute werden angezeigt. Das Ende kann nicht vor dem Start liegen. Ohne Datumsfilter reicht der Bereich von der ältesten bis zur neuesten Messung. |
| 4. | Um nach Namen zu filtern, tippen Sie auf das Feld unter **Nach Namen filtern**, geben Sie einen Teil des Messungsnamens ein und drücken Sie **OK**. | Die Liste behält jede Messung, deren Name diesen Text enthält; Groß- und Kleinschreibung werden nicht unterschieden. So findet *tap* zum Beispiel „Tap Water Zürich“. **Keine** bedeutet, dass kein Namensfilter gesetzt ist. Um den Namensfilter zu entfernen, löschen Sie den Text und drücken Sie **OK**. |
| 5. | Um nach BactoSwitch-Probenlinie zu filtern, drücken Sie **Nach Zeilen filtern**, wählen Sie die Probenlinie und drücken Sie **Bestätigen**. | Diese Schaltfläche wird nur angezeigt, wenn BactoSwitch aktiviert ist. Jede Probenlinie wird mit ihrem Namen und ihrer Nummer aufgeführt; die Schaltfläche zeigt danach **Gefiltert nach Zeile #n**. Nur Messungen im Online-Modus, die über BactoSwitch beprobt wurden, gehören zu einer Probenlinie. Alle anderen Messungen werden ausgeblendet, solange dieser Filter aktiv ist. Um den Probenlinienfilter zu entfernen, wählen Sie die markierte Probenlinie erneut und drücken Sie **Bestätigen**. |
| 6. | Drücken Sie **OK**, um die Filter anzuwenden und zur Ergebnisliste zurückzukehren. | Die Aktionsleiste zeigt den Datumsbereich sowie aktive Probenlinien- und Namensfilter. Wenn keine Messung passt, erscheint **No measurements to display**; drücken Sie **Change filters**, um die Filter anzupassen. |

:::info[Filter zurücksetzen]

Drücken Sie **Zurücksetzen** auf dem Bildschirm **Resultate filtern**, um Namens- und Probenlinienfilter zu entfernen und den vollständigen Datumsbereich wiederherzustellen. Filter in den Ergebnissen des manuellen Modus werden gelöscht, wenn Sie zur Startseite zurückkehren. Im Online-Modus bleiben Namens- und Probenlinienfilter aktiv, auch im Online-Diagramm (siehe [Ansehen automatischer Onlinemessungen](10-measurements.md#section-10-2-3)), bis Sie sie zurücksetzen.

:::

## 10.8 Export von Messungen {#section-10-8}

Es gibt mehrere Wege, Messdaten abzurufen. Der Abruf über HTTP, HTTPS, FTP und die Web-Oberfläche wird unter [Web-Benutzeroberfläche](13-web-user-interface.md) und [Datenzugriff und -export](12-data-access-and-export.md) beschrieben. In diesem Abschnitt wird der Export von Daten auf einen USB-Datenträger beschrieben.

### 10.8.1 Export auf einen USB-Datenträger {#section-10-8-1}

Ausgewählte oder alle Messungen können auf einen USB-Datenträger exportiert werden.

Stellen Sie sicher, dass der USB-Datenträger im Format FAT32 formatiert ist.

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Drücken Sie auf der Startseite Einstellungen, dann Logs, und wählen Sie Results (manual mode) oder Results (online mode). |
| 2. | In der Ergebnisliste:<br/>• Drücken Sie Serie exportieren, wählen Sie den Datumsbereich und bei Bedarf einen Namensfilter, und drücken Sie OK, um eine Serie zu exportieren.<br/>• Halten Sie eine Replikatgruppe gedrückt und drücken Sie Exportieren, um diese Gruppe zu exportieren.<br/>• Öffnen Sie eine einzelne Messung und drücken Sie Exportieren, um nur diese Messung zu exportieren. |
| 3. | Im Feld Ordnername wird der Name des Zielordners, der auf dem USB-Datenträger erstellt wird, angezeigt. Den Namen können Sie, falls gewünscht, ändern. |
| 4. | Schließen Sie einen USB-Datenträger mit ausreichend freiem Speicherplatz an. Drücken Sie Liste aktualisieren, um den angeschlossenen USB-Datenträger anzuzeigen. |
| 5. | Exportoptionen: • Drücken Sie Resultate exportieren, um nur die grundlegenden Ergebnisse zu exportieren (Einzelheiten in der Benutzeroberfläche). • Drücken Sie Alle exportieren, um Ergebnisse, Rohdaten und Diagnoseinformationen zu exportieren (Einzelheiten in der Benutzeroberfläche). |
| 6. | Warten Sie, bis der Export abgeschlossen ist und drücken Sie OK. |

## 10.9 Verfügbare Analyse- und Wartungsprotokolle {#section-10-9}

### 10.9.1 Protokollübersicht im manuellen Modus {#section-10-9-1}

Im manuellen Modus kann der Bediener zwischen zwei Analyseprotokollen wählen.

**Tabelle 10-1 Analyseprotokolle für den manuellen Modus**

| PROTOKOLLNAME | PROTOKOLLBESCHREIBUNG |
| --- | --- |
| Wasseranalyse | Analysieren Sie eine Wasserprobe und schließen Sie mit einem Reinigungszyklus ab. Werden mehrere Replikationen durchgeführt, läuft die Reinigung nur einmal ab, nämlich ganz am Ende. Zwischen zwei Replikationen wird automatisch ein Ansaugvorgang durchgeführt. |
| Perlen-Analyse | Dieses Protokoll dient der Analyse der Kalibrierungsperlen und wird zusammen mit dem Validierungskit benutzt. Das Protokoll endet automatisch mit einem Reinigungszyklus. Werden mehrere Replikationen durchgeführt, läuft die Reinigung nur einmal ab, nämlich ganz am Ende. |

Wartungsprotokolle können vor oder zwischen Analyseprotokollen durchgeführt werden, um das System vorzubereiten, zu spülen oder zu reinigen. Im manuellen Modus stehen die folgenden Wartungsprotokolle zur Verfügung:

**Tabelle 10-2 Wartungsprotokolle für den manuellen Modus**

| PROTOKOLLNAME | PROTOKOLLBESCHREIBUNG |
| --- | --- |
| Clean Optics (Optik reinigen) | Startet einen Reinigungsschritt für alle mit der Probe in Kontakt stehenden Komponenten im BactoSense, ausgenommen das Probenahmegerät. |
| Clean Sampling Device with Washstation (Probenahmegerät mit Washstation reinigen) | Reinigt das manuelle Probenahmegerät, sodass der äußere Filter sowie Innen- und Außenseite der Nadel zwischen Messungen, nach einer verschmutzten Probe oder bei einer Filterverstopfung vollständig gespült werden können. Damit dieses Protokoll erscheint, müssen die Washstation am manuellen Probenahmegerät und eine Kartusche installiert sein. Dieses Protokoll hat eine höhere Desinfektionswirkung als Clean Sampling Device und sollte daher bevorzugt werden. Die Washstation ist die beste Möglichkeit, das manuelle Probenahmegerät sauber zu halten und Kreuzkontaminationen zu vermeiden. Anweisungen zu diesem Protokoll finden Sie unter [Manuelles Probenahmegerät mit Washstation reinigen](15-maintenance.md#section-15-2-2). |
| Clean Sampling Device (Probenahmegerät reinigen) | Reinigt das Probenahmegerät, sodass der äußere Filter und das Innere der Nadel nach einer stark belasteten Probe oder bei einer Filterverstopfung gespült werden können. Anweisungen zu diesem Protokoll finden Sie unter [Manuelles Probenahmegerät mittels Basisreinigung reinigen](15-maintenance.md#section-15-2-3). |
| Fill Tubing (Schläuche befüllen) | Befüllt alle reagenzienführenden Schläuche aus der Kartusche, um Luftblasen zu entfernen. Zum Abschluss wird die Optik gereinigt. |
| Prime and Clean Optics (Ansaugen und Optik reinigen) | Befüllt die Schläuche mit Probenflüssigkeit. Dies verdünnt beispielsweise Rückstände nach einer Reinigung des Probenahmegeräts. Abschließend erfolgt ein Reinigungsschritt. |
| Prime (Ansaugen) | Lädt die Probe in das Gerät. Anweisungen finden Sie unter [Durchführen eines Ansaugens](10-measurements.md#section-10-9-3). |

### 10.9.2 Übersicht über die Protokolle im Online-Modus {#section-10-9-2}

Im Online-Modus kann der Bediener zwischen zwei Analyseprotokollen wählen. Tabelle 10-3 Analyseprotokolle für den Online-Modus

| PROTOKOLLNAME | PROTOKOLLBESCHREIBUNG |
| --- | --- |
| Online Sampling Device (with Backflush) (Online-Probenahmegerät mit Rückspülung) | Standardprotokoll für das Online-Probenahmegerät. Es umfasst automatische Reinigungsverfahren zwischen den Messungen. |
| Manuelles Probenahmegerät | Dieses Protokoll wird verwendet, wenn das manuelle Probenahmegerät installiert ist. |

### 10.9.3 Durchführen eines Ansaugens {#section-10-9-3}

Ansaugen bereitet den BactoSense mit der Probe vor. Ansaugen kann verwendet werden, um die Verschleppung von Zellen oder unerwünschter Substanzen zu verringern und dauert ungefähr 5 Minuten.

Verwenden Sie das Ansaugen unter folgenden Umständen:

- Nach einem Probenahmegerät-reinigen-Protokoll (mit/ohne Washstation)
- Nach dem Messen einer Probe mit hoher Chlorkonzentration oder anderen unerwünschten Substanzen, die nachfolgende Messungen beeinflussen könnten

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Bitte stellen Sie sicher, dass das manuelle Probenahmegerät korrekt gemäß [Installation des manuellen Probenahmegeräts](05-installation.md#section-5-4) installiert ist. |
| 2. | Navigieren Sie zur Startseite der Benutzeroberfläche des BactoSense. |
| 3. | Drücken Sie auf der Startseite Modus und wählen Sie „Manueller Modus“. Drücken Sie Zurück und anschließend Messen, um den Messassistenten zu öffnen. |
| 4. | Wählen Sie Ansaugen aus der Liste der verfügbaren Protokolle. |
| 5. | Drücken Sie die Taste Weiter. |
| 6. | Bringen Sie die nächste zu messende Probe an das manuelle Probenahmegerät an. |
| 7. | Drücken Sie die Start-Taste. |
