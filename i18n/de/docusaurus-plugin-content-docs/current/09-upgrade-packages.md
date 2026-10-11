---
title: "9. Erweiterungspakete"
sidebar_label: "9. Erweiterungspakete"
slug: /upgrade-packages
sidebar_position: 9
description: "BactoSense-Bedienungsanleitung: Erweiterungspakete."
---

Je nach BactoSense-Modell sind einige Funktionalitäten optional und können mit einem Lizenzschlüssel aktiviert werden.

## 9.1 Scientific Package {#section-9-1}

Das *Scientific Package* richtet sich an Fachleute der Wasserforschung zur erweiterten Datenanalyse. Es bietet folgende Funktionen:

- Anwendung eines zusätzlichen konfigurierbaren Polygongatters auf die FL1 / FL2- Daten direkt in der Benutzeroberfläche.
- Aufzeichnung und Anzeige von Vorwärts- und Seitenstreuungsdaten für jedes erkannte Ereignis. Abrufen von Daten in FCS-Dateien für die Nachbearbeitung.

**Zusätzliches Polygon-Gate** Das frei konfigurierbare zusätzliche Polygon-Gate hat folgende Eigenschaften:

- Das zusätzliche Gate ist für TCC- und ICC-Kartuschen verfügbar.
- Der Ergebnisparameter ist eine Zellkonzentration namens „Gate+“.
- Das Gate kann ähnlich wie die TCC- oder ICC-Standardgates angepasst werden. Bitte beachten Sie [Gates ändern](11-results-and-data-analysis.md#section-11-4).

**Vorwärts- und Seitenstreudetektor** Der Vorwärtsstreudetektor (FSC) misst von Bakterien oder anderen Partikeln gestreutes Licht. Er ist in einem kleinen Winkel zur Richtung des Laserstrahls angeordnet und misst dadurch Lichtsignale in Vorwärtsrichtung. Der Seitenstreudetektor (SSC) ist dagegen im Winkel von 90 Grad zum Laserstrahl angeordnet und misst seitlich gestreutes Licht. Die Kombination aus Fluoreszenz- und Streulichtinformationen liefert detaillierte Daten für Anwendungen wie mikrobiologische Fingerabdrücke, Profile oder die Erkennung von Abweichungen.

FSC-Daten sind auf folgende Arten verfügbar:

- In Durchflusszytometriestandarddateien (FCS). Weitere Informationen zu diesem Dateiformat finden Sie unter [Erweiterte Datenanalyse](11-results-and-data-analysis.md#section-11-5).
- In der Benutzeroberfläche des BactoSense als FSC/SSC-Punktdiagramm
- In der Web-Oberfläche als FSC/SSC-Punktdiagramm
- Durch Herunterladen der Punktdiagramme in Bildformat

**Aktivierung des** **Scientific Package**

Aktivieren Sie das Paket, wenn das Gerät im Leerlauf ist und SPS-Modus sowie Demo-Modus deaktiviert sind.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1. | Kontaktieren Sie Ihren bNovate- Vertriebspartner, um einen Aktivierungsschlüssel zu erwerben. |  |
| 2. | Nachdem Sie den Aktivierungsschlüssel erhalten haben, loggen Sie sich als Admin in den BactoSense ein. |  |
| 3. | Drücken Sie auf dem Startbildschirm Einstellungen. |  |
| 4. | Drücken Sie im Einstellungsmenü erneut die Taste Einstellungen, um die Systemeinstellungen zu öffnen. | ![BactoSense — Einstellungsmenü: Systemeinstellungen](/img/gui/de/settings-menu-system-settings.png "width=360") |
| 5. | Drücken Sie die Taste Upgrades. | ![BactoSense — Systemeinstellungen: Upgrades](/img/gui/de/scientific-package-upgrades-menu.png "width=360") |
| 6. | Drücken Sie die Taste Upgrade. | ![BactoSense — Scientific-Package-Lizenz und Upgrade-Taste](/img/gui/de/scientific-package-upgrades.png "width=360") |
| 7. | Geben Sie den Aktivierungsschlüssel ein und drücken Sie OK. | OK wird verfügbar, sobald Sie einen Schlüssel eingeben.<br />![BactoSense — Eingabe des Scientific-Package-Aktivierungsschlüssels](/img/gui/de/scientific-package-activation-key.png "width=360") |

Drücken Sie nach erfolgreicher Aktivierung in der Bestätigungsmeldung OK. Falls das Gerät neu startet, warten Sie, bis es bereit ist, und öffnen Sie erneut Upgrades. Prüfen Sie, ob Wissenschaftliches Package den Status Aktiviert anzeigt.

## 9.2 Management Package {#section-9-2}

Das *Management Package* ist für den Gerätebetrieb in Umgebungen mit höheren Anforderungen an die Rückverfolgbarkeit vorgesehen. Es bietet folgende Funktionen:

- Erweiterte Benutzerverwaltung (rollenbasierte Zugriffskontrolle)
- Audit Trail

**Erweiterte Benutzerverwaltung** Mit der Funktion *Erweiterte Benutzerverwaltung* kann der Geräteinhaber verschiedene Benutzer anlegen und ihnen die Rollen Basic, Advanced oder Admin zuweisen. Dadurch können einzelnen Benutzern unterschiedliche Berechtigungen erteilt und ihre Aktivitäten für den Audit Trail protokolliert werden.

**Audit Trail** Der *Audit Trail* zeichnet alle relevanten Vorgänge und Änderungen am Gerät auf. Es liefert einen detaillierten Verlauf der vom Benutzer oder vom Gerät selbst ausgeführten Aktionen. Der *Audit Trail* kann folgendermaßen aufgerufen werden:

- Öffnen Sie auf der Benutzeroberfläche des Geräts Startbildschirm → Einstellungen → Logs → Prüfpfad.
- Beim Export von allen Daten auf einen USB Stick, siehe [Export von Daten auf ein USB-Gerät](12-data-access-and-export.md#section-12-1).
- Über die Web-Benutzeroberfläche. Der Zugang zur Web-Benutzeroberfläche ist unter [Web-Benutzeroberfläche](13-web-user-interface.md) beschrieben.

**Aktivierung des** **Management Package**

Aktivieren Sie das Paket, wenn das Gerät im Leerlauf ist und SPS-Modus sowie Demo-Modus deaktiviert sind.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1. | Kontaktieren Sie Ihren bNovate- Vertriebspartner, um einen Aktivierungsschlüssel zu erwerben. |  |
| 2. | Nachdem Sie den Aktivierungsschlüssel erhalten haben, loggen Sie sich als Admin in den BactoSense ein. |  |
| 3. | Drücken Sie auf dem Startbildschirm Einstellungen. |  |
| 4. | Drücken Sie im Einstellungsmenü erneut die Taste Einstellungen, um die Systemeinstellungen zu öffnen. |  |
| 5. | Drücken Sie die Taste Upgrades. |  |
| 6. | Drücken Sie die Taste Upgrade. |  |
| 7. | Geben Sie den Aktivierungsschlüssel ein und drücken Sie OK. | Hinweis: Die erweiterte Benutzerverwaltung ist noch nicht aktiviert. Führen Sie zur Aktivierung die folgenden Schritte aus. |
| 8. | Drücken Sie auf dem Startbildschirm Einstellungen. |  |
| 9. | Drücken Sie im Einstellungsmenü erneut die Taste Einstellungen, um die Systemeinstellungen zu öffnen. |  |
| 10. | Drücken Sie auf Systemparameter. |  |
| 11. | Aktivieren Sie das Kontrollkästchen Erweiterter Benutzerverwaltungsmodus. |  |
| 12. | Drücken Sie Speichern und bestätigen Sie die Meldung mit OK. |  |
