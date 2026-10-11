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
| Wird etwas Ungewöhnliches festgestellt, wird neben den Messergebnissen eine Warnmeldung angezeigt. Weitere Informationen über die Warnung können eingesehen werden, wenn Sie im Warnungsprotokoll auf den entsprechenden Warnungseintrag neben den Messergebnissen klicken. | <img src="/img/manual/cell-16a091792775.png" alt="Abbildung zur Tabelle auf Handbuchseite 139" width="252" className="manual-figure" loading="lazy"/> |

Es können folgende Warnmeldungen angezeigt werden:

**Tabelle 16-1 Warnmeldungen**

| FEHLERCODE | NAME | BESCHREIBUNG | URSACHEN / ABHILFE |
| --- | --- | --- | --- |
| W01 | Kartusche abgelaufen | Die Reagenzien der Kartusche sind abgelaufen. Die Messgenauigkeit kann beeinträchtigt sein. | • Bitte wechseln Sie die Kartusche baldmöglichst aus. |
| W02-04 | Hohes Basisliniensignal in FL1 / FL2 / SSC | Die Basisliniensignale sind zu hoch. Dies liegt normalerweise an Blasen oder Partikeln in der Probenlösung. Die Messgenauigkeit könnte beeinträchtigt sein. | • Überprüfen Sie das Einlassschlauchsystem auf jegliche Anzeichen von Ablagerungen. • Überprüfen Sie die Wasserverbindungen und stellen Sie sicher, dass sie korrekt befestigt sind (kein Lufteintritt) • Erscheint die Warnung weiterhin, führen Sie bitte mittels des Reinigungskits eine Gerätereinigung durch. |
| W05 | Inkubatortemperatur weicht vom Sollwert ab | Die Bruttemperatur wich um mehr als 2°C vom Sollwert ab. Die Zellanzahl könnte beeinflusst sein. Der Brutapparat könnte defekt sein. | • Besteht das Problem weiterhin, wenden Sie sich bitte an den Kundendienst. |

| FEHLERCODE | NAME | BESCHREIBUNG | URSACHEN / ABHILFE |
| --- | --- | --- | --- |
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
| Das Protokoll stoppt. Die Fehlerursache wird in der Regel durch Wiederholen der Analyse oder Warten behoben. • Eine weitere Messung kann sofort gestartet werden. Wird sie erfolgreich abgeschlossen, wird der Fehlerzustand gelöscht. • Weitere Informationen finden Sie im Fehlerprotokoll, indem Sie den entsprechenden Fehlereintrag auswählen. | <img src="/img/manual/cell-7a9639648396.png" alt="Abbildung zur Tabelle auf Handbuchseite 141" width="255" className="manual-figure" loading="lazy"/> |

Die folgenden unkritischen Fehlermeldungen können angezeigt werden:

**Tabelle 16-2 Liste unkritischer Fehler.**

| FEHLERCODE | NAME | BESCHREIBUNG | URSACHEN / ABHILFE |
| --- | --- | --- | --- |
| E01 | Kartuschenfachtür offen | Die Kartuschenfachtür ist offen und verhindert die Durchführung von Messungen. | • Bitte schließen Sie die Tür und versuchen Sie erneut, die Analyse zu starten. |
| E08 | Gehäuse zu feucht | Die Feuchtigkeit im Gehäuse ist für einen sicheren Betrieb zu hoch. | • Bitte tauschen Sie den Trockenmittelbeutel aus, indem Sie den großen Deckel auf der linken Seite des Geräts abschrauben (siehe Abschnitt 15.2.6). • Besteht das Problem weiterhin, wenden Sie sich bitte an den Kundendienst. |
| E09 | System überhitzt | Die Innentemperatur ist für einen sicheren Betrieb zu hoch. | • Bitte reduzieren Sie die Umgebungstemperatur oder erhöhen Sie das Messintervall, damit das Gerät abkühlen kann. |
| E14 | Laser zu heiß | Die Lasertemperatur ist für einen sicheren Betrieb zu hoch. | • Bitte reduzieren Sie die Umgebungstemperatur oder erhöhen Sie das Messintervall, damit das Gerät abkühlen kann. |

| FEHLERCODE | NAME | BESCHREIBUNG | URSACHEN / ABHILFE |
| --- | --- | --- | --- |
| E15 | Fehler beim Aufblasen des Mischers | Beim Mischen oder Dosieren wurde Unterdruck erkannt. | • Fehlende Probe. • Luft im Einlass. • Undichtigkeit im System. • Bitte führen Sie das Optik- Reinigungsprotokoll aus (siehe Abschnitt 10.9.1). |
| E18 | Pumpenunterdruckfehler | Beim Dosieren wurde Unterdruck erkannt. | • Fehlende Probe. • Luft im Einlass. • Undichtigkeit im System. • Bitte führen Sie das Optik- Reinigungsprotokoll aus (siehe Abschnitt 10.9.1). |
| E19 | System überhitzt | Die Innentemperatur ist für den Betrieb zu hoch. | • Vermindern Sie die Umgebungstemperatur des Gerätes oder erhöhen Sie das Messintervall, damit das Gerät abkühlen kann. |
| E33 | Speicherüberlauf bei der Verarbeitung | Der Speicher der Signalverarbeitungsschaltungen ist übergelaufen. | • Bitte führen Sie das Optik- Reinigungsprotokoll aus (siehe Abschnitt 10.9.1). • Wiederholen Sie die Messung. |
| E42 | Gehäuse trotz Heizung zu kalt | Die Temperatur im Gerät bleibt trotz aktiver Erwärmung zu tief. | • Die Umgebungstemperatur liegt unter 5°C (41°F). • Bitte erhöhen Sie die Umgebungstemperatur. |
| E44 | Startfehler des Pumpenmoduls | Das Pumpenmodul konnte nicht korrekt eingeschaltet werden. | • Bitte wiederholen Sie die Messung einfach. |
| E45 | Anteil des gültigen Volumens zu niedrig | Das gültige Volumenverhältnis ist zu gering. Dies kann durch zu viel bakteriellen Inhalt im Wasser oder Trübung/ Schmutzpartikel verursacht werden. | • Die Messgenauigkeit ist wahrscheinlich sehr gering. Bitte wiederholen Sie die Messung, während Sie die Probe mit klarem Wasser verdünnen. |
| E46 | Kartusche noch beschäftigt | Beim Start der Messung wurde die Kartusche noch initialisiert. | • Unkritischer Fehler. Bitte wiederholen Sie die Messung. Besteht dieses Problem weiterhin, wenden Sie sich bitte an einen Servicetechniker. |

| FEHLERCODE | NAME | BESCHREIBUNG | URSACHEN / ABHILFE |
| --- | --- | --- | --- |
| E48 | Mikrofluidisches Subsystem beschäftigt | Der Mikrofluidik-Controller führt während der Messung eine andere Aufgabe aus. | • Unkritischer Fehler. Bitte wiederholen Sie die Messung. Besteht dieses Problem weiterhin, wenden Sie sich bitte an einen Servicetechniker. |
| E49 | GPIO-Zeitüberschreitung | Die Verarbeitungsplatine wartet auf die Antwort eines anderen Moduls. | • Unkritischer Fehler. Bitte wiederholen Sie die Messung. Besteht dieses Problem weiterhin, wenden Sie sich bitte an einen Servicetechniker. |
| E50 | Pumpenbewegung blockiert | Die Bewegung der Pumpe ist blockiert. | • Unkritischer Fehler. Bitte wiederholen Sie die Messung. Besteht dieses Problem weiterhin, wenden Sie sich bitte an einen Servicetechniker. |
| E51 | Temperaturwert nicht verfügbar | Temperaturmessung kann nicht durchgeführt werden Daher ist die Kontrollschleife deaktiviert. | • Unkritischer Fehler. Bitte wiederholen Sie die Messung. Besteht dieses Problem weiterhin, wenden Sie sich bitte an einen Servicetechniker. |
| E52 | Bewegung des Kartuschenventils blockiert | Die Bewegung des Kartuschenventils ist blockiert. | • Unkritischer Fehler. Bitte wiederholen Sie die Messung. Besteht das Problem weiterhin, wenden Sie sich bitte an den Kundendienst. |
| E55 | M7 nicht verbunden | Der Erfassungsprozessor kann nicht initialisiert werden. | • Starten Sie das Gerät neu. • Besteht das Problem weiterhin, wenden Sie sich bitte an den Kundendienst. |
| E56 | Leere Erfassung | Während der Erfassung wurden keine Ereignisse erkannt. | • Bitte reinigen Sie das Probenahmegerät mittels der Washstation. Dann führen Sie bitte eine Klarwassermessung durch. • Besteht das Problem weiterhin, wenden Sie sich bitte an den Kundendienst. |

| FEHLERCODE | NAME | BESCHREIBUNG | URSACHEN / ABHILFE |
| --- | --- | --- | --- |
| E57 | Kartusche beschäftigt (Spezialbefehl aktiv) | Die Kommunikation mit der Kartusche ist fehlgeschlagen. | • Unkritischer Fehler. Bitte wiederholen Sie die Messung. • Besteht das Problem weiterhin, wenden Sie sich bitte an den Kundendienst. |
| E58 | Kartusche beschäftigt (Zeitüberschreitung) | Die Kommunikation mit der Kartusche ist fehlgeschlagen. | • Bitte überprüfen Sie die elektronische Verbindung zwischen der Kartusche und dem Gerät. • Bitte wiederholen Sie die Messung. • Besteht das Problem weiterhin, wenden Sie sich bitte an den Kundendienst. |
| E59 | Ventilsensorfehler | Ventilposition kann nicht gelesen werden. | • Nehmen Sie Kontakt mit dem Kundendienst auf. |

## 16.3 Kritische Fehler {#section-16-3}

Kritische Fehler unterbrechen die Geräteworkflows und erfordern Eingriffe vom Bediener. Die Fehlerquelle muss beseitigt und das Gerät in einen lauffähigen Status zurückversetzt werden. Kritische Fehler müssen gelöscht werden.

| KRITISCHE FEHLER | ABBILDUNG |
| --- | --- |
| Tritt während des Betriebs ein kritischer Fehler auf, hat dies folgende Auswirkungen: • Das Protokoll stoppt sofort. • Das Gerät wechselt in einen kritischen Fehlerzustand. Vor dem Start eines neuen Protokolls ist ein manueller Eingriff erforderlich. • Ein Bediener muss die Fehlerursache beheben. Anschließend können die Fehler wie in den Abschnitten 16.4 und 16.5 beschrieben manuell im Fehlerprotokoll gelöscht werden. | <img src="/img/manual/cell-2ba5234a6f92.png" alt="Abbildung zur Tabelle auf Handbuchseite 145" width="253" className="manual-figure" loading="lazy"/> |

Die folgenden kritischen Fehlermeldungen können angezeigt werden:

**Tabelle 16-3 Liste kritischer Fehler.**

| FEHLERCODE | NAME | BESCHREIBUNG | URSACHEN / ABHILFE |
| --- | --- | --- | --- |
| E00 | Allgemeiner Fehler | Unbehandelter Fehler. | • Bitte wenden Sie sich an den Kundendienst. |
| E02 | Kartusche leer | Die Kartusche ist leer. | • Kartusche ersetzen (siehe Abschnitt 8.9.4). |
| E04 | Kartusche fehlt | Es ist keine Kartusche vorhanden. | • Kartusche einsetzen (siehe Abschnitt 8.9.6). |
| E05 | Abfallbeutel voll | Der Abfallbeutel der Kartusche ist voll. | • Kartusche ersetzen (siehe Abschnitt 8.9.4). |
| E06 | Kommunikation mit der Kartusche nicht möglich | Die Kartusche ist nicht installiert, die Tür ist offen oder die Elektronik der Kartusche ist beschädigt. | • Bitte stellen Sie sicher, dass das Kartuschenkabel korrekt angeschlossen ist und dass die Tür korrekt geschlossen ist. • Hilft dies nicht, ersetzen Sie bitte die Kartusche und informieren Sie den Kundendienst. |

| FEHLERCODE | NAME | BESCHREIBUNG | URSACHEN / ABHILFE |
| --- | --- | --- | --- |
| E07 | Datenträger voll | Nicht genügend Speicherplatz zum Fortsetzen des Betriebs. | • Bitte löschen Sie alte Messungen und versuchen Sie es erneut (siehe Abschnitt 15.2.8) • Hiermit löschen Sie die Messungen dauerhaft von Ihrem Gerät. • Sie könnten zur Datensicherung Ihre Messungen exportieren. |
| E12 | FPGA-Initialisierungsfehler | Die Initialisierung der Signalverarbeitungs- Hardware ist fehlgeschlagen. | • Starten Sie das Gerät neu. |
| E16 | Verarbeitungsfehler | Bei der Verarbeitung der Signale wurde ein Fehler erkannt. | • Die Genauigkeit des neuesten Messergebnisses kann nicht gewährleistet werden. Bitte wiederholen Sie die Analyse. |
| E17 | Überdruck erkannt | Beim Dosieren wurde Überdruck erkannt. | • Wahrscheinliche Ursache: Der Ausgabefilter ist wahrscheinlich verstopft. • Optische Durchflusszelle blockiert. • Bitte wenden Sie sich an den Kundendienst. |
| E20 | Unerwartetes Ausschalten | Das Protokoll wurde aus unbekanntem Grund unterbrochen, meist durch einen Stromausfall. | • Deutet normalerweise auf einen Spannungsausfall oder eine andere externe Messungsunterbrechun g hin. • Bitte führen Sie die Protokolle „Optik reinigen“ und „Probenahmegerät reinigen“ durch, bevor Sie eine neue Messung starten (siehe Abschnitt 10.9.1). |
| E23 | Kommunikationsfehler des Temperatursensors | Kommunikation mit dem Temperatursensor auf dem IO-Board nicht möglich. | • Nehmen Sie Kontakt mit dem Kundendienst auf. |
| E24 | Kommunikationsfehler des Lasers | Kommunikation mit der Optikeinheit nicht möglich. | • Nehmen Sie Kontakt mit dem Kundendienst auf. |
| E25 | Pumpen- Kommunikations- fehler | Kommunikation mit dem Pumpenmodul nicht möglich. | • Nehmen Sie Kontakt mit dem Kundendienst auf. |

| FEHLERCODE | NAME | BESCHREIBUNG | URSACHEN / ABHILFE |
| --- | --- | --- | --- |
| E26 | Kommunikationsfehler der Spannungsversorgung | Kommunikation mit dem Netzteilmodul nicht möglich. | • Nehmen Sie Kontakt mit dem Kundendienst auf. |
| E27 | Zeitüberschreitung bei der Pumpenkommunikation | Zeitüberschreitung der Kommunikation mit der Pumpe. | • Die Kartuschentür ist offen. • Ein Kabel ist nicht angeschlossen. • Eine Leiterplatte ist beschädigt, entweder in der Pumpe oder in der Kartusche. |
| E28 | Farbstoffzufuhr leer | Der mit der Kartusche verbundene Farbstoffschlauch ist leer. | • Der Schlauch ist nicht angeschlossen. • Die Kartusche ist defekt. • Bitte wiederholen Sie den Kartuschenwechsel und stellen Sie sicher, dass alle Schläuche korrekt angeschlossen sind. |
| E29 | Spülflüssigkeitszufuhr leer | Der mit der Kartusche verbundene Spülflüssigkeitsschlauch ist leer. | • Der Schlauch ist nicht angeschlossen. • Die Kartusche ist defekt. • Bitte wiederholen Sie den Kartuschenwechsel und stellen Sie sicher, dass alle Schläuche korrekt angeschlossen sind. |
| E30 | Bleichmittelzufuhr leer | Der mit der Kartusche verbundene Bleichmittelschlauch ist leer. | • Der Schlauch ist nicht angeschlossen. • Die Kartusche ist defekt. • Bitte wiederholen Sie den Kartuschenwechsel und stellen Sie sicher, dass alle Schläuche korrekt angeschlossen sind. |
| E31 | Ausfall der Kartuschenelektronik | Der Kartuschenfüllstand kann nicht mehr genau bestimmt werden. | • Ersetzen Sie die Kartusche und wenden Sie sich an den Kundendienst. |
| E32 | Inkompatible Kartusche | Der Kartuschentyp ist mit diesem Gerät oder dieser Software nicht kompatibel. | • Versichern Sie sich, dass sie den richtigen Kartuschentyp für dieses Gerät nutzen. |
| E33 | Speicherüberlauf bei der Verarbeitung | Der Speicher der Signalverarbeitungsschaltungen ist übergelaufen. | • Bitte führen Sie das Optik- Reinigungsprotokoll aus (siehe Abschnitt 10.9.1). • Wiederholen Sie die Messung. |

| FEHLERCODE | NAME | BESCHREIBUNG | URSACHEN / ABHILFE |
| --- | --- | --- | --- |
| E38 | Kartusche nicht bereit | Die neue Kartusche wurde nicht korrekt initialisiert. | • Führen Sie das Verfahren „Cartridge Change“ aus (siehe Abschnitt 8.9.4). |
| E39 | Laserstromgrenze erreicht | Der Laser hat seine obere Stromgrenze erreicht. Dies weist auf das Ende seiner Lebensdauer hin. | • Der Laser muss ersetzt werden. Bitte wenden Sie sich an einen Servicetechniker. |
| E40 | Gating-Set nicht gefunden | Der Verweis auf das für die Messung ausgewählte Gating-Set ist in den Geräteeinstellungen nicht auffindbar. | • Das Gating-Set wurde gelöscht. • Wechseln Sie das Gating-Set und wiederholen Sie die Messung. |
| E41 | Inkompatibles Gating-Set | Das für die Messung ausgewählte Gating-Set kann mit dieser Kartusche nicht verwendet werden. | • Der Kartuschenwechselprozess wurde nicht eingehalten. • Falsche Konfiguration des digitalen Eingangs. • Bitte ändern Sie das Gate-Set und wiederholen Sie die Messung. |
| E43 | Außentemperatur zu niedrig | Die Umgebungstemperatur liegt außerhalb der Gerätespezifikation. | • Erhöhen Sie die Umgebungstemperatur. • Der Betrieb oder die Lagerung unter 5 °C (41 °F) kann das Gerät beschädigen. |
| E47 | Hauptreferenzmagnet bei Referenzfahrt nicht gefunden | Während der Initialisierung hat das Ventil nicht richtig geparkt. | • Nehmen Sie Kontakt mit dem Kundendienst auf. |
| E53 | Keine Kommunikation mit dem Motor möglich | Die Kommunikation zum Motorcontroller des Mischers ist defekt. | • Nehmen Sie Kontakt mit dem Kundendienst auf. |
| E54 | Fehler des Lasertemperatursensors | Lasertemperatur kann nicht ermittelt werden. | • Nehmen Sie Kontakt mit dem Kundendienst auf. |

## 16.4 Fehler- und Warnungsprotokolle {#section-16-4}

Auf die Fehler- und Warnungsprotokollansichten kann separat über die Startseite der Benutzeroberfläche und Drücken der Taste Protokolle zugegriffen werden.

<img src="/img/figures-second/figure-3bdcc49f453689.webp" alt="Abbildung 16-1 : Fehlerprotokolle" width="558" className="manual-figure" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Abbildung aus der BactoSense-Bedienungsanleitung" width="57" className="manual-icon" loading="lazy" />

*Abbildung 16-1 : Fehlerprotokolle*

<table className="manual-table"><tbody><tr><td rowSpan="4">①</td><td rowSpan="4">Datum und Uhrzeit des Ereignisses</td><td rowSpan="4">②</td><td colSpan="2">Ereignistyp</td></tr><tr><td><img src="/img/manual/cell-67d152256921.png" alt="Abbildung zur Tabelle auf Handbuchseite 149" width="56" className="manual-icon" loading="lazy" /></td><td>Kritischer Fehler</td></tr><tr><td><img src="/img/manual/cell-168772cd9e6b.png" alt="Abbildung zur Tabelle auf Handbuchseite 149" width="56" className="manual-icon" loading="lazy" /></td><td>Unkritischer Fehler</td></tr><tr><td><img src="/img/manual/cell-b4d48ec33659.png" alt="Abbildung zur Tabelle auf Handbuchseite 149" width="56" className="manual-icon" loading="lazy" /></td><td>Fehler gelöscht</td></tr><tr><td>③</td><td>Kurzbeschreibung des Fehlers oder Ereignisses</td><td>④</td><td colSpan="2">Taste, um Fehler manuell zu löschen (nur für Admin und Service verfügbar)</td></tr><tr><td>⑤</td><td>Datumsbereich der angezeigten Ereignisse. Klicken, um den Bereich zu bearbeiten.</td><td></td><td colSpan="2"></td></tr></tbody></table>

:::info[Ereignisdetails anzeigen]

Wenn Sie ein Ereignis aus der Liste auswählen, öffnet sich eine Seite mit weiteren Informationen zur Fehlerursache und empfohlenen Schritten zur Behebung.

:::

## 16.5 Fehler löschen {#section-16-5}

Kritische Fehler müssen manuell gelöscht werden. Stellen Sie sicher, dass Sie zuerst die Ursache des Problems beseitigen, bevor Sie den Fehler mittels der unten gezeigten Schritte löschen. Bitte beachten Sie, dass Sie mit den untenstehenden Schritten nicht automatisch die Fehlerursache beheben.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1. | Navigieren Sie zur Startseite der Benutzeroberfläche des BactoSense. |  |
| 2. | Drücken Sie die Taste Protokolle und dann die Taste Fehlerprotokoll |  |
| 3. | Stellen Sie sicher, dass Sie das Problem, das die Fehlermeldung(en) verursacht hat, gelöst haben. Drücken Sie dann die Taste Fehler löschen. | <img src="/img/manual/cell-df45180c59d7.png" alt="Abbildung zur Tabelle auf Handbuchseite 150" width="245" className="manual-figure" loading="lazy"/> |
| 4. | Gelöschte Fehler erscheinen mit grauen Fehlersymbolen, und es wird ein Ereignis „Fehler gelöscht” zum Protokoll hinzugefügt. Das Gerät kann nun weitere Analysen durchführen. |  |

## 16.6 Automatischer Selbsttest {#section-16-6}

Das Tool Automatischer Selbsttest überprüft, ob jede Komponente des BactoSense korrekt funktioniert und identifiziert jene, die nicht korrekt funktionieren. Es kann verwendet werden, um geräteinterne Probleme zu erkennen.

<table className="manual-table"><tbody><tr><th scope="col"></th><th scope="col">ARBEITSSCHRITT</th><th scope="col">ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG</th></tr><tr><td>1.</td><td>Navigieren Sie zur Startseite der Benutzeroberfläche des BactoSense.</td><td></td></tr><tr><td>2.</td><td>Auf der Startseite der BactoSense Benutzeroberfläche, drücken Sie auf Wartung.</td><td></td></tr><tr><td>3.</td><td>Drücken Sie die Taste Selbsttest.</td><td></td></tr><tr><td>4.</td><td><Admonition type="info" title="Zusätzliche Informationen">Drücken Sie die Taste Start oder Neustart, um den Selbsttest zu starten. Sobald die Ausführung abgeschlossen wurde, zeigt das Gerät eine Liste aller Tests mit grünen PASS- oder roten FAIL-Anzeigen. Möglicherweise wurden einige Tests übersprungen: Kann das System mit der Kartusche nicht kommunizieren, werden alle Tests, die Kartuschenkommunikation erfordern, ausgelassen.</Admonition></td><td><img src="/img/manual/cell-725c4037614b.png" alt="Abbildung zur Tabelle auf Handbuchseite 150" width="245" className="manual-figure" loading="lazy" /></td></tr></tbody></table>

## 16.7 Betrieb bei niedriger Temperatur {#section-16-7}

Das Gerät muss innerhalb eines festgelegten Temperaturbereichs betrieben werden, um Schäden zu vermeiden und zuverlässige, reproduzierbare Messergebnisse sicherzustellen (siehe Abschnitt 3.2). Bei sehr niedrigen oder sehr hohen Umgebungstemperaturen unter 5 °C (41 °F) oder über 30 °C (86 °F) werden keine Protokolle ausgeführt. Bei niedrigen Umgebungstemperaturen wärmt sich das Gerät vor einer Messung automatisch auf die erforderliche Temperatur auf. Währenddessen zeigt der Gerätestatus „Heating...“ an. Wird die Zieltemperatur auch nach mehreren Stunden nicht erreicht, endet das Protokoll mit einem Fehler (Tabelle 16-2, E42).

:::info[Aufwärmzeit berücksichtigen]

Messungen können sich verzögern, wenn längeres Aufheizen erforderlich ist. Halten Sie die Gerätetemperatur über 10 °C (50 °F), um dies zu vermeiden.

:::

## 16.8 Fehlerbehebung {#section-16-8}

In der folgenden Tabelle finden Sie eine Übersicht von Problemen und Lösungen. Kann ein Problem nicht Gelöst werden, wenden Sie sich bitte an Ihren lokalen Vertriebsbeauftragten oder den bNovate-Kundendienst. Kontaktinformationen des bNovate-Kundendienstes finden Sie im Abschnitt 19.1.

**Tabelle 16-4 Anweisungen zur Fehlerbehebung**

<table className="manual-table"><tbody><tr><td>BEOBACHTUNG</td><td>ANWEISUNG</td></tr><tr><td>Das Display zeigt nichts an</td><td>• Prüfen Sie, ob der BactoSense mit Strom versorgt wird und eingeschaltet ist.</td></tr><tr><td>Display nicht responsiv oder flackert</td><td>• Mögliche elektromagnetische Störung durch nahegelegene Maschine (z.B. Pumpe). Platzieren Sie den BactoSense um.</td></tr><tr><td>Fehlermeldung auf dem Display</td><td>• Reagieren Sie auf die Fehlermeldung gemäß Kapitel 16 dieser Bedienungsanleitung.</td></tr><tr><td>Die Messergebnisse sind augenscheinlich falsch</td><td>• Stellen Sie sicher, dass die Proben- und Betriebsbedingungen in Abschnitt 3.2 erfüllt sind. • Überprüfen Sie, ob das Gerät gemäß Kapitel 5 korrekt installiert ist. • Stellen Sie sicher, dass die notwendigen Wartungsarbeiten gemäß den in den Abschnitten 15.1 und 15.2 beschriebenen Wartungsplänen durchgeführt wurden. • Führen Sie eine Gerätereinigung mittels des Reinigungskits durch. • Führen Sie eine Gerätevalidierung mittels des Validierungskits durch.</td></tr></tbody></table>
