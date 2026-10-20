---
title: "16. Warnungen, Fehler und Fehlerbehebung"
sidebar_label: "16. Warnungen, Fehler und Fehlerbehebung"
sidebar_position: 16
slug: /warnings-errors-and-troubleshooting
---

Stellt das Gerät ein Problem fest, wechselt es, abhängig von dessen Schweregrad, in einen anderen Status. Es gibt Warnungen sowie unkritische und kritische Fehler. Jeder Typ hat verschiedene Folgen und erfordert andere Aktionen.

## 16.1 Warnmeldungen {#section-16-1}

Wird bei einer ansonsten erfolgreichen Messung etwas Ungewöhnliches festgestellt, erscheinen Warnmeldungen. Diese können auf verringerte Genauigkeit der Messergebnisse oder drohende Fehler hindeuten. Anders als Fehler hindern Warnmeldungen das Gerät nicht daran, zu funktionieren, doch sollte der Benutzer darauf achten, da sie auf Quellen von Ungenauigkeit hinweisen können.

| WARNUNG | ABBILDUNG |
| --- | --- |
| Wird etwas Ungewöhnliches festgestellt, wird neben den Messergebnissen eine Warnmeldung angezeigt. Weitere Informationen über die Warnung können eingesehen werden, wenn Sie im Warnungsprotokoll auf den entsprechenden Warnungseintrag neben den Messergebnissen klicken. | ![BactoSense — Warnung bei hohem SSC-Basissignal](/img/gui/de/warning-high-ssc-baseline.png "width=252 class=manual-figure") |

Es können folgende Warnmeldungen angezeigt werden:

**Tabelle 16-1 Warnmeldungen**

| FEHLERCODE | NAME | BESCHREIBUNG | URSACHEN / ABHILFE |
| --- | --- | --- | --- |
| W01 | Kartusche abgelaufen | Die Reagenzien der Kartusche sind abgelaufen. Die Messgenauigkeit kann beeinträchtigt sein. | • Bitte wechseln Sie die Kartusche baldmöglichst aus. |
| W02-04 | Hohes Basisliniensignal in FL1 / FL2 / SSC | Die Basisliniensignale sind zu hoch. Dies liegt normalerweise an Blasen oder Partikeln in der Probenlösung. Die Messgenauigkeit könnte beeinträchtigt sein. | • Überprüfen Sie das Einlassschlauchsystem auf jegliche Anzeichen von Ablagerungen. • Überprüfen Sie die Wasserverbindungen und stellen Sie sicher, dass sie korrekt befestigt sind (kein Lufteintritt) • Erscheint die Warnung weiterhin, führen Sie bitte mittels des Reinigungskits eine Gerätereinigung durch. |
| W05 | Inkubatortemperatur weicht vom Sollwert ab | Die Bruttemperatur wich um mehr als 2°C vom Sollwert ab. Die Zellanzahl könnte beeinflusst sein. Der Brutapparat könnte defekt sein. | • Besteht das Problem weiterhin, wenden Sie sich bitte an den Kundendienst. |
| W06 | Keine Ereignisse erkannt | Während der Messung wurden keine Ereignisse erkannt. | • Besteht das Problem weiterhin, wenden Sie sich bitte an den Kundendienst. |
| W07 | TCC außerhalb des Messbereichs | TCC liegt über der BactoSense-Spezifikationsgrenze von 2’000’000 Zellen/ml. | • Bitte verdünnen Sie die Probe, um die Messgenauigkeit sicherzustellen. |
| W08 | Luftblasen erkannt | Die Probe scheint Luftblasen zu enthalten. | • Bitte überprüfen Sie, ob das Probenahmegerät korrekt eingebaut ist. • Bitte überprüfen Sie die Probe auf Blasen. • Arbeiten Sie mit einem Online- Probenahmegerät, so überprüfen Sie bitte, ob das Wasser unter korrektem Druck geliefert wird. |
| W10 | Gehäuse zu kalt | Das Gehäuse ist zu kalt. Vor dem Fortsetzen des Protokolls wurde die Schnellheizung aktiviert. | • Das Gerät kann nicht sicher betrieben werden, wenn die interne Temperatur zu niedrig ist. • Schnelle Gehäuseaufheizversuche, um einen sicheren Betrieb sicherzustellen. • Die Messungen beginnen, sobald die interne Temperatur ausreicht. |
| W11 | Wartung erforderlich | Das Gerät muss gewartet werden. Die Messpräzision kann nicht mehr gewährleistet werden. Weiterer Betrieb kann zu Undichtigkeiten führen, die das Gerät beschädigen können. | • Die Wartung ist überfällig. • Ventil und Stößel haben das Ende ihrer Lebensdauer erreicht. • Bitte wenden Sie sich an Ihren Servicepartner. |
| W13 | Laser am Ende seiner Lebensdauer | Der Laser hat das Ende seiner Lebensdauer erreicht. | • Bitte wenden Sie sich an Ihren Servicepartner. |
| W14 | Unkritischer Stromausfall | Das Gerät wurde unerwartet ausgeschaltet. | • Bitte stellen Sie die Sauberkeit des Geräts sicher. • Passiert dies häufiger, installieren Sie bitte eine unterbrechungsfreie Spannungsversorgung. |

## 16.2 Unkritische Fehler {#section-16-2}

Unkritische Fehler sorgen dafür, dass eine Messung nicht erfolgreich abgeschlossen werden kann, aber hindern das Gerät nicht daran, danach weitere Messungen durchzuführen. Diese Fehler erfordern keinen Eingriff des Benutzers. Einige unkritische Fehler werden kritisch, wenn sie sich dreimal wiederholen.

| UNKRITISCHE FEHLER |  |
| --- | --- |
| Das Protokoll stoppt. Die Fehlerursache wird in der Regel durch Wiederholen der Analyse oder Warten behoben. • Eine weitere Messung kann sofort gestartet werden. Wird sie erfolgreich abgeschlossen, wird der Fehlerzustand gelöscht. • Weitere Informationen finden Sie im Fehlerprotokoll, indem Sie den entsprechenden Fehlereintrag auswählen. | ![BactoSense — Unkritischer Fehler: leere Probe](/img/gui/de/noncritical-error-empty-sample.png "width=255 class=manual-figure") |

Die folgenden unkritischen Fehlermeldungen können angezeigt werden:

**Tabelle 16-2 Liste unkritischer Fehler.**

| FEHLERCODE | NAME | BESCHREIBUNG | URSACHEN / ABHILFE |
| --- | --- | --- | --- |
| E01 | Kartuschenfachtür offen | Die Kartuschenfachtür ist offen und verhindert die Durchführung von Messungen. | • Bitte schließen Sie die Tür und versuchen Sie erneut, die Analyse zu starten. |
| E08 | Gehäuse zu feucht | Die Feuchtigkeit im Gehäuse ist für einen sicheren Betrieb zu hoch. | • Bitte tauschen Sie den Trockenmittelbeutel aus, indem Sie den großen Deckel auf der linken Seite des Geräts abschrauben (siehe [Ersetzen des Trockenmittelbeutels](15-maintenance.md#section-15-2-6)). • Besteht das Problem weiterhin, wenden Sie sich bitte an den Kundendienst. |
| E09 | System überhitzt | Die Innentemperatur ist für einen sicheren Betrieb zu hoch. | • Bitte reduzieren Sie die Umgebungstemperatur oder erhöhen Sie das Messintervall, damit das Gerät abkühlen kann. |
| E14 | Laser zu heiß | Die Lasertemperatur ist für einen sicheren Betrieb zu hoch. | • Bitte reduzieren Sie die Umgebungstemperatur oder erhöhen Sie das Messintervall, damit das Gerät abkühlen kann. |
| E15 | Fehler beim Aufblasen des Mischers | Beim Mischen oder Dosieren wurde Unterdruck erkannt. | • Fehlende Probe. • Luft im Einlass. • Undichtigkeit im System. • Bitte führen Sie das Optik- Reinigungsprotokoll aus (siehe [Protokollübersicht im manuellen Modus](10-measurements.md#section-10-9-1)). |
| E18 | Pumpenunterdruckfehler | Beim Dosieren wurde Unterdruck erkannt. | • Fehlende Probe. • Luft im Einlass. • Undichtigkeit im System. • Bitte führen Sie das Optik- Reinigungsprotokoll aus (siehe [Protokollübersicht im manuellen Modus](10-measurements.md#section-10-9-1)). |
| E19 | System überhitzt | Die Innentemperatur ist für den Betrieb zu hoch. | • Vermindern Sie die Umgebungstemperatur des Gerätes oder erhöhen Sie das Messintervall, damit das Gerät abkühlen kann. |
| E33 | Speicherüberlauf bei der Verarbeitung | Der Speicher der Signalverarbeitungsschaltungen ist übergelaufen. | • Bitte führen Sie das Optik- Reinigungsprotokoll aus (siehe [Protokollübersicht im manuellen Modus](10-measurements.md#section-10-9-1)). • Wiederholen Sie die Messung. |
| E42 | Gehäuse trotz Heizung zu kalt | Die Temperatur im Gerät bleibt trotz aktiver Erwärmung zu tief. | • Die Umgebungstemperatur liegt unter 5°C (41°F). • Bitte erhöhen Sie die Umgebungstemperatur. |
| E44 | Startfehler des Pumpenmoduls | Das Pumpenmodul konnte nicht korrekt eingeschaltet werden. | • Bitte wiederholen Sie die Messung einfach. |
| E45 | Anteil des gültigen Volumens zu niedrig | Das gültige Volumenverhältnis ist zu gering. Dies kann durch zu viel bakteriellen Inhalt im Wasser oder Trübung/ Schmutzpartikel verursacht werden. | • Die Messgenauigkeit ist wahrscheinlich sehr gering. Bitte wiederholen Sie die Messung, während Sie die Probe mit klarem Wasser verdünnen. |
| E46 | Kartusche noch beschäftigt | Beim Start der Messung wurde die Kartusche noch initialisiert. | • Unkritischer Fehler. Bitte wiederholen Sie die Messung. Besteht dieses Problem weiterhin, wenden Sie sich bitte an einen Servicetechniker. |
| E48 | Mikrofluidisches Subsystem beschäftigt | Der Mikrofluidik-Controller führt während der Messung eine andere Aufgabe aus. | • Unkritischer Fehler. Bitte wiederholen Sie die Messung. Besteht dieses Problem weiterhin, wenden Sie sich bitte an einen Servicetechniker. |
| E49 | GPIO-Zeitüberschreitung | Die Verarbeitungsplatine wartet auf die Antwort eines anderen Moduls. | • Unkritischer Fehler. Bitte wiederholen Sie die Messung. Besteht dieses Problem weiterhin, wenden Sie sich bitte an einen Servicetechniker. |
| E50 | Pumpenbewegung blockiert | Die Bewegung der Pumpe ist blockiert. | • Unkritischer Fehler. Bitte wiederholen Sie die Messung. Besteht dieses Problem weiterhin, wenden Sie sich bitte an einen Servicetechniker. |
| E51 | Temperaturwert nicht verfügbar | Temperaturmessung kann nicht durchgeführt werden Daher ist die Kontrollschleife deaktiviert. | • Unkritischer Fehler. Bitte wiederholen Sie die Messung. Besteht dieses Problem weiterhin, wenden Sie sich bitte an einen Servicetechniker. |
| E52 | Bewegung des Kartuschenventils blockiert | Die Bewegung des Kartuschenventils ist blockiert. | • Unkritischer Fehler. Bitte wiederholen Sie die Messung. Besteht das Problem weiterhin, wenden Sie sich bitte an den Kundendienst. |
| E55 | M7 nicht verbunden | Der Erfassungsprozessor kann nicht initialisiert werden. | • Starten Sie das Gerät neu. • Besteht das Problem weiterhin, wenden Sie sich bitte an den Kundendienst. |
| E56 | Leere Erfassung | Während der Erfassung wurden keine Ereignisse erkannt. | • Bitte reinigen Sie das Probenahmegerät mittels der Washstation. Dann führen Sie bitte eine Klarwassermessung durch. • Besteht das Problem weiterhin, wenden Sie sich bitte an den Kundendienst. |
| E57 | Kartusche beschäftigt (Spezialbefehl aktiv) | Die Kommunikation mit der Kartusche ist fehlgeschlagen. | • Unkritischer Fehler. Bitte wiederholen Sie die Messung. • Besteht das Problem weiterhin, wenden Sie sich bitte an den Kundendienst. |
| E58 | Kartusche beschäftigt (Zeitüberschreitung) | Die Kommunikation mit der Kartusche ist fehlgeschlagen. | • Bitte überprüfen Sie die elektronische Verbindung zwischen der Kartusche und dem Gerät. • Bitte wiederholen Sie die Messung. • Besteht das Problem weiterhin, wenden Sie sich bitte an den Kundendienst. |
| E59 | Ventilsensorfehler | Ventilposition kann nicht gelesen werden. | • Nehmen Sie Kontakt mit dem Kundendienst auf. |

## 16.3 Kritische Fehler {#section-16-3}

Kritische Fehler unterbrechen die Geräteworkflows und erfordern Eingriffe vom Bediener. Die Fehlerquelle muss beseitigt und das Gerät in einen lauffähigen Status zurückversetzt werden. Kritische Fehler müssen gelöscht werden.

| KRITISCHE FEHLER | ABBILDUNG |
| --- | --- |
| Tritt während des Betriebs ein kritischer Fehler auf, hat dies folgende Auswirkungen: • Das Protokoll stoppt sofort. • Das Gerät wechselt in einen kritischen Fehlerzustand. Vor dem Start eines neuen Protokolls ist ein manueller Eingriff erforderlich. • Ein Bediener muss die Fehlerursache beheben. Anschließend können die Fehler wie unter [Fehlerliste](16-warnings-errors-and-troubleshooting.md#section-16-4-1) und [Fehler löschen](16-warnings-errors-and-troubleshooting.md#section-16-5) beschrieben manuell im Fehlerprotokoll gelöscht werden. | ![BactoSense — Kritischer Fehler: fehlende Kartusche](/img/gui/de/critical-error-missing-cartridge.png "width=253 class=manual-figure") |

Die folgenden kritischen Fehlermeldungen können angezeigt werden:

**Tabelle 16-3 Liste kritischer Fehler.**

| FEHLERCODE | NAME | BESCHREIBUNG | URSACHEN / ABHILFE |
| --- | --- | --- | --- |
| E00 | Allgemeiner Fehler | Unbehandelter Fehler. | • Bitte wenden Sie sich an den Kundendienst. |
| E02 | Kartusche leer | Die Kartusche ist leer. | • Kartusche ersetzen (siehe [Kartuschen wechseln](08-general-operations-and-configurations.md#section-8-9-4)). |
| E04 | Kartusche fehlt | Es ist keine Kartusche vorhanden. | • Kartusche einsetzen (siehe [Einsetzen einer Kartusche](08-general-operations-and-configurations.md#section-8-9-6)). |
| E05 | Abfallbeutel voll | Der Abfallbeutel der Kartusche ist voll. | • Kartusche ersetzen (siehe [Kartuschen wechseln](08-general-operations-and-configurations.md#section-8-9-4)). |
| E06 | Kommunikation mit der Kartusche nicht möglich | Die Kartusche ist nicht installiert, die Tür ist offen oder die Elektronik der Kartusche ist beschädigt. | • Bitte stellen Sie sicher, dass das Kartuschenkabel korrekt angeschlossen ist und dass die Tür korrekt geschlossen ist. • Hilft dies nicht, ersetzen Sie bitte die Kartusche und informieren Sie den Kundendienst. |
| E07 | Datenträger voll | Nicht genügend Speicherplatz zum Fortsetzen des Betriebs. | • Bitte löschen Sie alte Messungen und versuchen Sie es erneut (siehe [Freigeben von Speicherplatz](15-maintenance.md#section-15-2-8)) • Hiermit löschen Sie die Messungen dauerhaft von Ihrem Gerät. • Sie könnten zur Datensicherung Ihre Messungen exportieren. |
| E12 | FPGA-Initialisierungsfehler | Die Initialisierung der Signalverarbeitungs- Hardware ist fehlgeschlagen. | • Starten Sie das Gerät neu. |
| E16 | Verarbeitungsfehler | Bei der Verarbeitung der Signale wurde ein Fehler erkannt. | • Die Genauigkeit des neuesten Messergebnisses kann nicht gewährleistet werden. Bitte wiederholen Sie die Analyse. |
| E17 | Überdruck erkannt | Beim Dosieren wurde Überdruck erkannt. | • Wahrscheinliche Ursache: Der Ausgabefilter ist wahrscheinlich verstopft. • Optische Durchflusszelle blockiert. • Bitte wenden Sie sich an den Kundendienst. |
| E20 | Unerwartetes Ausschalten | Das Protokoll wurde aus unbekanntem Grund unterbrochen, meist durch einen Stromausfall. | • Deutet normalerweise auf einen Spannungsausfall oder eine andere externe Messungsunterbrechun g hin. • Bitte führen Sie die Protokolle „Optik reinigen“ und „Probenahmegerät reinigen“ durch, bevor Sie eine neue Messung starten (siehe [Protokollübersicht im manuellen Modus](10-measurements.md#section-10-9-1)). |
| E23 | Kommunikationsfehler des Temperatursensors | Kommunikation mit dem Temperatursensor auf dem IO-Board nicht möglich. | • Nehmen Sie Kontakt mit dem Kundendienst auf. |
| E24 | Kommunikationsfehler des Lasers | Kommunikation mit der Optikeinheit nicht möglich. | • Nehmen Sie Kontakt mit dem Kundendienst auf. |
| E25 | Pumpen- Kommunikations- fehler | Kommunikation mit dem Pumpenmodul nicht möglich. | • Nehmen Sie Kontakt mit dem Kundendienst auf. |
| E26 | Kommunikationsfehler der Spannungsversorgung | Kommunikation mit dem Netzteilmodul nicht möglich. | • Nehmen Sie Kontakt mit dem Kundendienst auf. |
| E27 | Zeitüberschreitung bei der Pumpenkommunikation | Zeitüberschreitung der Kommunikation mit der Pumpe. | • Die Kartuschentür ist offen. • Ein Kabel ist nicht angeschlossen. • Eine Leiterplatte ist beschädigt, entweder in der Pumpe oder in der Kartusche. |
| E28 | Farbstoffzufuhr leer | Der mit der Kartusche verbundene Farbstoffschlauch ist leer. | • Der Schlauch ist nicht angeschlossen. • Die Kartusche ist defekt. • Bitte wiederholen Sie den Kartuschenwechsel und stellen Sie sicher, dass alle Schläuche korrekt angeschlossen sind. |
| E29 | Spülflüssigkeitszufuhr leer | Der mit der Kartusche verbundene Spülflüssigkeitsschlauch ist leer. | • Der Schlauch ist nicht angeschlossen. • Die Kartusche ist defekt. • Bitte wiederholen Sie den Kartuschenwechsel und stellen Sie sicher, dass alle Schläuche korrekt angeschlossen sind. |
| E30 | Bleichmittelzufuhr leer | Der mit der Kartusche verbundene Bleichmittelschlauch ist leer. | • Der Schlauch ist nicht angeschlossen. • Die Kartusche ist defekt. • Bitte wiederholen Sie den Kartuschenwechsel und stellen Sie sicher, dass alle Schläuche korrekt angeschlossen sind. |
| E31 | Ausfall der Kartuschenelektronik | Der Kartuschenfüllstand kann nicht mehr genau bestimmt werden. | • Ersetzen Sie die Kartusche und wenden Sie sich an den Kundendienst. |
| E32 | Inkompatible Kartusche | Der Kartuschentyp ist mit diesem Gerät oder dieser Software nicht kompatibel. | • Versichern Sie sich, dass sie den richtigen Kartuschentyp für dieses Gerät nutzen. |
| E33 | Speicherüberlauf bei der Verarbeitung | Der Speicher der Signalverarbeitungsschaltungen ist übergelaufen. | • Bitte führen Sie das Optik- Reinigungsprotokoll aus (siehe [Protokollübersicht im manuellen Modus](10-measurements.md#section-10-9-1)). • Wiederholen Sie die Messung. |
| E38 | Kartusche nicht bereit | Die neue Kartusche wurde nicht korrekt initialisiert. | • Führen Sie das Verfahren „Cartridge Change“ aus (siehe [Kartuschen wechseln](08-general-operations-and-configurations.md#section-8-9-4)). |
| E39 | Laserstromgrenze erreicht | Der Laser hat seine obere Stromgrenze erreicht. Dies weist auf das Ende seiner Lebensdauer hin. | • Der Laser muss ersetzt werden. Bitte wenden Sie sich an einen Servicetechniker. |
| E40 | Gating-Set nicht gefunden | Der Verweis auf das für die Messung ausgewählte Gating-Set ist in den Geräteeinstellungen nicht auffindbar. | • Das Gating-Set wurde gelöscht. • Wechseln Sie das Gating-Set und wiederholen Sie die Messung. |
| E41 | Inkompatibles Gating-Set | Das für die Messung ausgewählte Gating-Set kann mit dieser Kartusche nicht verwendet werden. | • Der Kartuschenwechselprozess wurde nicht eingehalten. • Falsche Konfiguration des digitalen Eingangs. • Bitte ändern Sie das Gate-Set und wiederholen Sie die Messung. |
| E43 | Außentemperatur zu niedrig | Die Umgebungstemperatur liegt außerhalb der Gerätespezifikation. | • Erhöhen Sie die Umgebungstemperatur. • Der Betrieb oder die Lagerung unter 5 °C (41 °F) kann das Gerät beschädigen. |
| E47 | Hauptreferenzmagnet bei Referenzfahrt nicht gefunden | Während der Initialisierung hat das Ventil nicht richtig geparkt. | • Nehmen Sie Kontakt mit dem Kundendienst auf. |
| E53 | Keine Kommunikation mit dem Motor möglich | Die Kommunikation zum Motorcontroller des Mischers ist defekt. | • Nehmen Sie Kontakt mit dem Kundendienst auf. |
| E54 | Fehler des Lasertemperatursensors | Lasertemperatur kann nicht ermittelt werden. | • Nehmen Sie Kontakt mit dem Kundendienst auf. |

## 16.4 Logs {#section-16-4}

Das Gerät zeichnet Fehler, Warnmeldungen, Alarme und Benutzeraktivitäten in Logs auf. Drücken Sie auf der Startseite **Einstellungen** und dann **Logs**. Das Menü **Logs** enthält die folgenden Einträge:

| EINTRAG | INHALT | VERFÜGBAR FÜR |
| --- | --- | --- |
| **Fehlerliste** | Kritische und unkritische Fehler sowie die Ereignisse, mit denen sie quittiert wurden. Siehe [Fehlerliste](16-warnings-errors-and-troubleshooting.md#section-16-4-1). | Basic-, Advanced- und Admin-Benutzer |
| **Liste aller Warnungen** | Während Messungen ausgegebene Warnmeldungen. Siehe [Liste aller Warnungen](16-warnings-errors-and-troubleshooting.md#section-16-4-2). | Basic-, Advanced- und Admin-Benutzer |
| **Alarm-Protokoll** | Durch Messergebnisse ausgelöste Alarme, einschließlich BactoCloud-Alarmen. Siehe [Alarm-Protokoll](16-warnings-errors-and-troubleshooting.md#section-16-4-3). | Basic-, Advanced- und Admin-Benutzer |
| **Zugriffsprotokoll** | Fehlgeschlagene Anmeldeversuche. Siehe [Zugriffsprotokoll und Prüfpfad](16-warnings-errors-and-troubleshooting.md#section-16-4-4). | Admin-Benutzer, mit dem Management Package |
| **Prüfpfad** | Vorgänge und Einstellungsänderungen durch Benutzer und das Gerät. Siehe [Zugriffsprotokoll und Prüfpfad](16-warnings-errors-and-troubleshooting.md#section-16-4-4). | Admin-Benutzer, mit dem Management Package |
| **Results (manual mode)**, **Results (online mode)**, **Validationsresultate** | Messergebnisse des jeweiligen Modus. Siehe [Filtern von Messungen](10-measurements.md#section-10-7) und [Ergebnisse und Datenanalyse](11-results-and-data-analysis.md). | Basic-, Advanced- und Admin-Benutzer |

Die neuesten Einträge stehen oben. **Fehlerliste**, **Liste aller Warnungen**, **Alarm-Protokoll** und **Prüfpfad** zeigen in der Aktionsleiste die **Angezeigte Zeitspanne:**. Standardmäßig reicht sie vom ältesten bis zum neuesten Eintrag; der **Prüfpfad** zeigt die letzten sieben Tage. Drücken Sie auf die Zeitspanne, um einen anderen Zeitraum anzuzeigen (siehe [Angezeigte Zeitspanne ändern](16-warnings-errors-and-troubleshooting.md#section-16-4-5)).

### 16.4.1 Fehlerliste {#section-16-4-1}

![BactoSense — Fehlerprotokoll](/img/gui/de/error-log.png "width=558 class=manual-figure")

*Abbildung 16-1 : Fehlerliste*

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| ① | Datum und Uhrzeit des Ereignisses | ② | Ereignistyp. Nur der neueste Eintrag zeigt sein Symbol in Farbe; ältere Einträge zeigen es grau. | \< |
| ^ | ^ | ^ | ![BactoSense — Protokolleintrag: kritischer Fehler](/img/gui/icons/critical-error-event.png "width=32 class=manual-icon") | Kritischer Fehler |
| ^ | ^ | ^ | ![BactoSense — Protokolleintrag: unkritischer Fehler](/img/gui/icons/noncritical-error-event.png "width=32 class=manual-icon") | Unkritischer Fehler |
| ^ | ^ | ^ | ![BactoSense — Protokolleintrag: Fehler gelöscht](/img/gui/icons/errors-cleared-event.png "width=32 class=manual-icon") | Fehler gelöscht |
| ③ | Code und Kurzbeschreibung des Fehlers oder Ereignisses. Die Zahl in Klammern gibt an, wie oft der Fehler seit dem letzten Löschen der Fehler aufgetreten ist. | ④ | Taste **Fehlermeldung quittieren** (für Basic-, Advanced- und Admin-Benutzer verfügbar, wenn das Gerät nicht läuft). Siehe [Fehler löschen](16-warnings-errors-and-troubleshooting.md#section-16-5). | \< |
| ⑤ | Angezeigte Zeitspanne. Drücken Sie darauf, um den Zeitraum zu ändern. |  |  | \< |

Die Zeilenfarbe zeigt den Typ jedes Eintrags: rot für kritische Fehler, gelb für unkritische Fehler und blau für Ereignisse, mit denen Fehler gelöscht wurden. Fehlercodes beginnen mit E und sind unter [Unkritische Fehler](16-warnings-errors-and-troubleshooting.md#section-16-2) und [Kritische Fehler](16-warnings-errors-and-troubleshooting.md#section-16-3) aufgeführt. Zwei Ereignisse dokumentieren das Löschen von Fehlern:

- **C01 – Fehlermeldungen automatisch quittiert**: Nach einem unkritischen Fehler hat das Gerät ein Protokoll erfolgreich abgeschlossen und betrachtet die vorherigen Fehler als behoben.
- **C02 – Fehlermeldungen manuell quittiert**: Ein Benutzer hat **Fehlermeldung quittieren** gedrückt (siehe [Fehler löschen](16-warnings-errors-and-troubleshooting.md#section-16-5)).

Wurde in der angezeigten Zeitspanne kein Fehler aufgezeichnet, erscheint **No errors in this date range**.

:::info[Ereignisdetails anzeigen]

Wählen Sie einen Eintrag aus, um eine Seite mit weiteren Informationen zur Fehlerursache und empfohlenen Schritten zur Behebung zu öffnen. Drücken Sie **Schliessen**, um zur Liste zurückzukehren.

:::

### 16.4.2 Liste aller Warnungen {#section-16-4-2}

Die **Liste aller Warnungen** enthält die während Messungen ausgegebenen Warnmeldungen. Jede Zeile zeigt:

- **Datum**: Datum und Uhrzeit der Warnmeldung.
- **Beschreibung**: Code und Name der Warnmeldung. Die Codes sind unter [Warnmeldungen](16-warnings-errors-and-troubleshooting.md#section-16-1) aufgeführt.
- **Kontext**: wo die Warnmeldung auftrat: **Manuell** (manueller Modus), **Auto** (Online-Modus), **Wartung** oder **Validation**.

Wählen Sie eine Warnmeldung aus, um ihre Beschreibung anzuzeigen. Drücken Sie **Schliessen**, um zur Liste zurückzukehren. Wurde in der angezeigten Zeitspanne keine Warnmeldung aufgezeichnet, erscheint **No warnings in this date range**.

### 16.4.3 Alarm-Protokoll {#section-16-4-3}

Das **Alarm-Protokoll** listet die durch Messergebnisse ausgelösten Alarme auf. Es enthält die Alarme des Geräts (siehe [Alarmkonfiguration](08-general-operations-and-configurations.md#section-8-5)) und, wenn das Gerät mit BactoCloud verbunden ist, die durch BactoCloud-Alarmregeln ausgelösten Alarme (siehe [BactoCloud](14-bactocloud.md)). Jede Zeile zeigt:

- **Datum**: Datum und Uhrzeit der Messung, die den Alarm ausgelöst hat.
- **Name**: ein Glockensymbol und den Namen des Alarms. Bei Gerätealarmen ist die Glocke rot. Bei BactoCloud-Alarmen zeigt ihre Farbe den Schweregrad: rot für Kritisch, orange für Warnung und blau für Infos.
- **Alarm**: Quelle, Bedingung und Schwellenwert des Alarms, zum Beispiel *Cartridge Remaining < 10 %*.

BactoCloud-Alarme zeigen zusätzlich ein Cloud-Symbol am Zeilenende. Um einen BactoCloud-Alarm nach der Prüfung zu bestätigen, drücken Sie die Häkchen-Taste neben dem Cloud-Symbol; bestätigte Alarme zeigen stattdessen ein Häkchen. **Acknowledge all** bestätigt alle unbestätigten BactoCloud-Alarme der Liste und ist nur verfügbar, solange mindestens einer unbestätigt ist. Die Bestätigung wird in BactoCloud gespeichert. Sie dokumentiert die Prüfung, behebt aber nicht die Ursache des Alarms.

Wählen Sie einen Alarm aus, um das Messergebnis zu öffnen, das ihn ausgelöst hat.

### 16.4.4 Zugriffsprotokoll und Prüfpfad {#section-16-4-4}

**Zugriffsprotokoll** und **Prüfpfad** sind Teil des Management Package (siehe [Management Package](09-upgrade-packages.md#section-9-2)) und für Admin-Benutzer verfügbar. Ohne das Paket zeigt ein Druck auf eine der beiden Tasten stattdessen Informationen zum Management Package.

**Zugriffsprotokoll** öffnet die Liste **Fehlgeschlagene Anmeldeversuche** der letzten 30 Tage. Jede Zeile zeigt **Datum**, **Benutzer-ID** und **Rolle** des Benutzers sowie die Anzahl seiner fehlgeschlagenen Anmeldeversuche an diesem Tag. Gibt es keine, erscheint **Keine fehlgeschlagenen Anmeldeversuche**.

**Prüfpfad** listet relevante Vorgänge und Einstellungsänderungen durch Benutzer oder das Gerät auf. Jeder Eintrag zeigt **Datum**, **Benutzername** und **Ereignis** sowie gegebenenfalls den geänderten **Parameter** mit **Alter Stand** und **Neuer Stand**. Der Prüfpfad ist auch im Export aller Daten auf einen USB Stick enthalten und kann in der Web-Benutzeroberfläche angezeigt werden.

### 16.4.5 Angezeigte Zeitspanne ändern {#section-16-4-5}

Das folgende Verfahren gilt für **Fehlerliste**, **Liste aller Warnungen**, **Alarm-Protokoll** und **Prüfpfad**.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1. | Öffnen Sie die Liste und drücken Sie die Zeitspannen-Taste neben **Angezeigte Zeitspanne:**. | Die Ansicht **Zeitspanne auswählen** öffnet sich. |
| 2. | Tippen Sie auf das Feld unter **Startdatum** und wählen Sie im Kalender den ersten Tag. Tippen Sie auf das Zeitfeld darunter und stellen Sie Stunde und Minute ein. Stellen Sie **Enddatum** und die zugehörige Zeit auf die gleiche Weise ein. | Das Ende kann nicht vor dem Start liegen. |
| 3. | Drücken Sie **OK**. | Die Liste zeigt nur die Einträge im gewählten Zeitraum. |

Um die Standard-Zeitspanne wiederherzustellen, drücken Sie in der Ansicht **Zeitspanne auswählen** auf **Zurücksetzen** und dann auf **OK**.

## 16.5 Fehler löschen {#section-16-5}

Kritische Fehler müssen manuell gelöscht werden. Stellen Sie sicher, dass Sie zuerst die Ursache des Problems beseitigen, bevor Sie den Fehler mittels der unten gezeigten Schritte löschen. Bitte beachten Sie, dass Sie mit den untenstehenden Schritten nicht automatisch die Fehlerursache beheben.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1. | Drücken Sie auf der Startseite **Einstellungen**, um das Einstellungsmenü zu öffnen. |  |
| 2. | Drücken Sie **Logs** und anschließend **Fehlerliste**. |  |
| 3. | Stellen Sie sicher, dass Sie das Problem, das die Fehlermeldung(en) verursacht hat, gelöst haben. Drücken Sie dann **Fehlermeldung quittieren**. | Die Taste ist für Basic-, Advanced- und Admin-Benutzer verfügbar, solange kein Protokoll läuft.<br />![BactoSense — Fehler löschen](/img/gui/de/error-log-clear-errors.png "width=245 class=manual-figure") |
| 4. | Oben in der Liste wird das Ereignis **C02 – Fehlermeldungen manuell quittiert** hinzugefügt, und die Symbole der vorherigen Fehler werden grau. Das Gerät kann nun weitere Analysen durchführen. |  |

## 16.6 Automatischer Selbsttest {#section-16-6}

Das Tool Automatischer Selbsttest überprüft, ob jede Komponente des BactoSense korrekt funktioniert und identifiziert jene, die nicht korrekt funktionieren. Es kann verwendet werden, um geräteinterne Probleme zu erkennen.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1\. | Drücken Sie als Advanced- oder Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |  |
| 2\. | Drücken Sie die Taste Wartung. |  |
| 3\. | Drücken Sie die Taste Selbstkontrolle. |  |
| 4\. | :::info[Zusätzliche Informationen] Drücken Sie die Taste Wiederholen. Sobald die Ausführung abgeschlossen wurde, zeigt das Gerät eine Liste aller Tests mit grünen PASS- oder roten FAIL-Anzeigen. Möglicherweise wurden einige Tests übersprungen: Kann das System mit der Kartusche nicht kommunizieren, werden alle Tests, die Kartuschenkommunikation erfordern, ausgelassen. ::: | ![BactoSense — Selbstprüfergebnisse](/img/gui/de/self-check-results.png "width=245 class=manual-figure") |

## 16.7 Betrieb bei niedriger Temperatur {#section-16-7}

Das Gerät muss innerhalb eines festgelegten Temperaturbereichs betrieben werden, um Schäden zu vermeiden und zuverlässige, reproduzierbare Messergebnisse sicherzustellen (siehe [Technische Daten](03-instrument-overview.md#section-3-2)). Bei sehr niedrigen oder sehr hohen Umgebungstemperaturen unter 5 °C (41 °F) oder über 30 °C (86 °F) werden keine Protokolle ausgeführt. Bei niedrigen Umgebungstemperaturen wärmt sich das Gerät vor einer Messung automatisch auf die erforderliche Temperatur auf. Währenddessen zeigt der Gerätestatus „Heating...“ an. Wird die Zieltemperatur auch nach mehreren Stunden nicht erreicht, endet das Protokoll mit einem Fehler (Tabelle 16-2, E42).

:::info[Aufwärmzeit berücksichtigen]

Messungen können sich verzögern, wenn längeres Aufheizen erforderlich ist. Halten Sie die Gerätetemperatur über 10 °C (50 °F), um dies zu vermeiden.

:::

## 16.8 Fehlerbehebung {#section-16-8}

In der folgenden Tabelle finden Sie eine Übersicht von Problemen und Lösungen. Kann ein Problem nicht Gelöst werden, wenden Sie sich bitte an Ihren lokalen Vertriebsbeauftragten oder den bNovate-Kundendienst. Kontaktinformationen des bNovate-Kundendienstes finden Sie unter [Kontakt mit dem Kundendienst](19-contact.md#section-19-1).

**Tabelle 16-4 Anweisungen zur Fehlerbehebung**

|  |  |
| --- | --- |
| BEOBACHTUNG | ANWEISUNG |
| Das Display zeigt nichts an | • Prüfen Sie, ob der BactoSense mit Strom versorgt wird und eingeschaltet ist. |
| Display nicht responsiv oder flackert | • Mögliche elektromagnetische Störung durch nahegelegene Maschine (z.B. Pumpe). Platzieren Sie den BactoSense um. |
| Fehlermeldung auf dem Display | • Reagieren Sie auf die Fehlermeldung gemäß den Anweisungen in diesem Kapitel. |
| Die Messergebnisse sind augenscheinlich falsch | • Stellen Sie sicher, dass die Proben- und Betriebsbedingungen unter [Technische Daten](../instrument-overview/#section-3-2) erfüllt sind. • Überprüfen Sie, ob das Gerät gemäß [Installation](../installation/) korrekt installiert ist. • Stellen Sie sicher, dass die notwendigen Wartungsarbeiten gemäß den unter [Regelmäßige Vorsorgewartung durch Fachpersonal](../maintenance/#section-15-1) und [Wartung durch den Benutzer](../maintenance/#section-15-2) beschriebenen Wartungsplänen durchgeführt wurden. • Führen Sie eine Gerätereinigung mittels des Reinigungskits durch. • Führen Sie eine Gerätevalidierung mittels des Validierungskits durch. |
