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

### 10.2.1 Konfigurieren und Starten automatischer Online-Messungen {#section-10-2-1}

Die folgenden Anweisungen zeigen, wie Sie mittels des Online-Probenahmegeräts eine automatische Online-Messung konfigurieren und starten.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Stellen Sie sicher, dass das Online-Probenahmegerät gemäß [Installation des Online-Probenahmegeräts](05-installation.md#section-5-5) fest installiert ist. | Wenn das manuelle Probenahmegerät installiert ist und Sie zum Online-Probenahmegerät wechseln möchten, entfernen Sie es gemäß [Entfernen des manuellen Probenahmegeräts](08-general-operations-and-configurations.md#section-8-10-2) und installieren Sie das Online-Probenahmegerät gemäß [Installation des Online-Probenahmegeräts](05-installation.md#section-5-5). |
| 2. | Navigieren Sie in der Benutzeroberfläche des BactoSense auf die Startseite. |  |
| 3. | Wählen Sie unten auf der Aktionsleiste Online-Modus und drücken Sie Start. |  |
| 4. | Drücken Sie die Start-Taste. |  |
| 5. | Stellen Sie sicher, dass unter Protokoll der Haken bei „Online-Probenahmegerät (mit Rückspülung)” gesetzt ist. |  |
| 6. | Geben Sie einen Probennamen ein, indem Sie in das Textfeld Probenname tippen. |  |
| 7. | Wählen Sie das für die Messung gewünschte Gate, indem Sie in das Textfeld Gates tippen. | Im Allgemeinen werden die Standard- TCC- und ICC-Gates verwendet. Wenn Ihre Anwendung dies verlangt, verwenden Sie benutzerdefinierte Gates. Das Erstellen und das Anpassen von Gates sind unter [Ergebnisse und Datenanalyse](11-results-and-data-analysis.md) beschrieben. |
| 8. | Drücken Sie die Taste Weiter. |  |
| 9. | Wählen Sie das Messintervall mit dem Rad auf der rechten Seite. | Das Messintervall ist die Zeit zwischen den Messungen. Es kann zwischen 30 min und 6 Stunden liegen. |
| 10. | Falls erforderlich, können Sie den Start verzögern, indem Sie die Option Sofort starten deaktivieren und eine Startzeit angeben. | Die Uhrzeiteinstellung des BactoSense wird unter [Datum und Uhrzeit](08-general-operations-and-configurations.md#section-8-3-2) beschrieben. |
| 11. | Drücken Sie die Start-Taste. | Während der Messung wird die aktuelle Schätzung der Zellkonzentration in der Aktionsleiste unter „Last“ angezeigt. |
| 12. | Nach jeder Messung wird das Zeitreihendiagramm aktualisiert. | Drücken Sie für weitere Einzelheiten die Taste View results (Ergebnisse anzeigen). |
| 13. | Möchten Sie eine Onlinemessserie stoppen, schauen Sie unter [Automatische Online-Messungen abbrechen](10-measurements.md#section-10-2-2) nach. |  |

### 10.2.2 Automatische Online-Messungen abbrechen {#section-10-2-2}

Folgen Sie den untenstehenden Schritten, um eine Messserie im Online-Modus zu stoppen.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Drücken Sie in der Benutzeroberfläche die Taste Stop. |  |
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

## 10.3 Messungen im manuellen Modus {#section-10-3}

Messungen im manuellen Modus beschreibt eine Konfiguration, in der das manuelle Probenahmegerät an den BactoSense angeschlossen ist und der Bediener Einzelproben in 5-mL-Schraubverschlussröhrchen an das Gerät anbringt.

### 10.3.1 Durchführen einer Messung im manuellen Modus {#section-10-3-1}

Die folgenden Anweisungen zeigen, wie Sie im manuellen Modus eine Messung konfigurieren und starten.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Bitte stellen Sie sicher, dass das manuelle Probenahmegerät korrekt gemäß [Installation des manuellen Probenahmegeräts](05-installation.md#section-5-4) installiert ist. |  |
| 2. | Wurde das manuelle Probenahmegerät neu installiert oder das Gerät war für über drei Tage ausgeschaltet bzw. nicht in Benutzung, wird empfohlen, das Probenahmegerät zu reinigen. Ist eine Washstation verfügbar, folgen Sie den Anweisungen unter [Manuelles Probenahmegerät mit Washstation reinigen](15-maintenance.md#section-15-2-2), andernfalls denen unter [Manuelles Probenahmegerät mittels Basisreinigung reinigen](15-maintenance.md#section-15-2-3). |  |
| 3. | Wurde für das manuelle Probenahmegerät eine Reinigung durchgeführt (siehe voriger Schritt), so wird empfohlen, vor der nächsten Messung einen Ansaugvorgang durchzuführen. Folgen Sie den Schritten unter [Durchführen eines Ansaugens](10-measurements.md#section-10-9-3). |  |
| 4. | Navigieren Sie in der Benutzeroberfläche des BactoSense auf die Startseite. |  |
| 5. | Drücken Sie auf der Startseite Modus und wählen Sie „Manueller Modus“. Drücken Sie Zurück und anschließend Messen, um den Messassistenten zu öffnen. |  |
| 6. | Wählen Sie aus der Liste verfügbarer Protokolle Water Analysis (Wasseranalyse). | Wenn Sie technische Replikate wünschen, wählen Sie deren Anzahl in der Spalte Replications. Standardmäßig wird eine Probe gemessen. Bei mehreren Replikaten werden mehrere Proben aus demselben Probenröhrchen entnommen. |
| 7. | Geben Sie einen Probennamen ein, indem Sie in das Textfeld Probenname tippen und nach Eingabe des Namens OK drücken. |  |
| 8. | Überprüfen Sie, ob Ihr gewünschtes Gate im Feld Gates konfiguriert ist. Möchten Sie ein anderes Gate verwenden, tippen Sie in das Feld Gates und wählen Sie das gewünschte Gate aus der Liste der verfügbaren Optionen aus (abhängig von der installierten Kartusche). | Im Allgemeinen werden die Standard- TCC- und ICC-Gates verwendet. Wenn Ihre Anwendung dies verlangt, verwenden Sie benutzerdefinierte Gates. Das Erstellen und das Anpassen von Gates sind unter [Ergebnisse und Datenanalyse](11-results-and-data-analysis.md) beschrieben. |
| 9. | Drücken Sie die Taste Weiter. |  |
| 10. | Bringen Sie ein frisches 5mL- Probenröhrchen mit 2 – 5mL-Proben am manuellen Probenahmegerät an. |  |
| 11. | Drücken Sie die Start-Taste. | Die geschätzte Protokolldauer und die erwartete Endzeit werden angezeigt. Der aktuelle Status der Messung (z.B. Initialisieren, Mischen...) wird in der oberen Leiste angezeigt |
| 12. | Nach Abschluss der Messung schauen Sie sich bitte die Ergebnisse an. Die Ergebnisse werden unter [Messergebnisse](11-results-and-data-analysis.md#section-11-1) besprochen. |  |
| 13. | Möchten Sie mit der nächsten Messung fortfahren, drücken Sie die Taste Neu. |  |
| 14. | Um ältere Messerebnisse zu sehen, drücken Sie die Taste Ergebnisse anzeigen. |  |
| 15. | Möchten Sie die Messung umbenennen, regaten oder exportieren, folgen Sie bitte den Anweisungen in den folgenden Abschnitten. |  |
| 16. | Möchten Sie keine weiteren Proben messen und das Gerät soll inaktiv bleiben oder ausgeschaltet werden, führen Sie eine Reinigung des manuellen Probenahmegeräts durch. Ist eine Washstation verfügbar, folgen Sie den Anweisungen unter [Manuelles Probenahmegerät mit Washstation reinigen](15-maintenance.md#section-15-2-2), andernfalls denen unter [Manuelles Probenahmegerät mittels Basisreinigung reinigen](15-maintenance.md#section-15-2-3). |  |

## 10.4 Messungen umbenennen {#section-10-4}

Messungen können in der Ergebnisdetailansicht umbenannt werden.

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Navigieren Sie zur Startseite und drücken Sie Ergebnisse (manuell) oder Ergebnisse (Online). |
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

Um eine Untergruppe der Messergebnisse anzusehen, können Filter angewandt werden. Sie können nach Text und Datum filtern.

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Navigieren Sie zur Startseite und drücken Sie Ergebnisse (manuell) oder Ergebnisse (Online). |
| 2. | Drücken Sie in der Ergebnisliste die Taste Filter. |
| 3. | Legen Sie den Filter mit einer oder beiden folgenden Optionen fest: • Datumsbereich durch Angabe von Start- und Enddatum definieren. • Textzeichenfolge zum Filtern nach Messungsnamen definieren. |
| 4. | Drücken Sie OK. Die Ergebnisliste wird neu geladen und zeigt nur Ihre Filterergebnisse. |

## 10.8 Export von Messungen {#section-10-8}

Es gibt mehrere Wege, Messdaten abzurufen. Der Abruf über HTTP, HTTPS, FTP und die Web-Oberfläche wird unter [Web-Benutzeroberfläche](13-web-user-interface.md) und [Datenzugriff und -export](12-data-access-and-export.md) beschrieben. In diesem Abschnitt wird der Export von Daten auf einen USB-Datenträger beschrieben.

### 10.8.1 Export auf einen USB-Datenträger {#section-10-8-1}

Ausgewählte oder alle Messungen können auf einen USB-Datenträger exportiert werden.

Stellen Sie sicher, dass der USB-Datenträger im Format FAT32 formatiert ist.

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Navigieren Sie zur Startseite und drücken Sie Ergebnisse (manuell) oder Ergebnisse (Online). |
| 2. | In der Ergebnisliste: • Drücken Sie Export series, um einen Satz von Messungen oder alle Messungen zu exportieren. • Wählen Sie eine Replikatgruppe und drücken Sie Export series, um diese Gruppe zu exportieren. • Wählen Sie eine einzelne Messung und drücken Sie Export, um nur diese Messung zu exportieren. |
| 3. | Im Feld Ordnername wird der Name des Zielordners, der auf dem USB-Datenträger erstellt wird, angezeigt. Den Namen können Sie, falls gewünscht, ändern. |
| 4. | Schließen Sie einen USB-Datenträger mit ausreichend freiem Speicherplatz an. Drücken Sie Liste aktualisieren, um den angeschlossenen USB-Datenträger anzuzeigen. |
| 5. | Exportoptionen: • Drücken Sie Export results, um nur die grundlegenden Ergebnisse zu exportieren (Einzelheiten in der Benutzeroberfläche). • Drücken Sie Export all, um Ergebnisse, Rohdaten und Diagnoseinformationen zu exportieren (Einzelheiten in der Benutzeroberfläche). |
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

| PROTOKOLLNAME | PROTOKOLLBESCHREIBUNG |
| --- | --- |
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
| 2. | Navigieren Sie in der Benutzeroberfläche des BactoSense auf die Startseite. |
| 3. | Drücken Sie auf der Startseite Modus und wählen Sie „Manueller Modus“. Drücken Sie Zurück und anschließend Messen, um den Messassistenten zu öffnen. |
| 4. | Wählen Sie aus der Liste der verfügbaren Protokolle das Ansaugvorgang-Protokoll aus. |
| 5. | Drücken Sie die Taste Weiter. |
| 6. | Bringen Sie die nächste zu messende Probe an das manuelle Probenahmegerät an. |
| 7. | Drücken Sie die Start-Taste. |
