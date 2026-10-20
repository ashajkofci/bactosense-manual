---
title: "9. Erweiterungspakete"
sidebar_label: "9. Erweiterungspakete"
slug: /upgrade-packages
sidebar_position: 9
description: "BactoSense-Bedienungsanleitung: Erweiterungspakete."
---

Je nach BactoSense-Modell sind einige Funktionen optional und können mit einem Lizenzschlüssel aktiviert werden.

## 9.1 Scientific Package {#section-9-1}

Das *Scientific Package* richtet sich an Fachleute aus der Wasserforschung und ermöglicht erweiterte Datenanalysen. Es umfasst folgende Funktionen:

- Zusätzliches Gate: Wenden Sie direkt in der Benutzeroberfläche ein zusätzliches, konfigurierbares Polygon-Gate auf die FL1 / FL2-Daten an.
- Streulichtdaten: Zeichnen Sie für jedes erkannte Ereignis Vorwärts- und Seitenstreuungsdaten auf und zeigen Sie sie an. Rufen Sie die Daten zur Nachbearbeitung in FCS-Dateien ab.

**Zusätzliches Polygon-Gate** Das frei konfigurierbare zusätzliche Polygon-Gate hat folgende Eigenschaften:

- Es ist für TCC- und ICC-Kartuschen verfügbar.
- Der Ergebnisparameter ist eine Zellkonzentration mit der Bezeichnung „Gate+“.
- Das Gate kann wie die TCC- oder ICC-Standard-Gates angepasst werden. Siehe [Gates ändern](11-results-and-data-analysis.md#section-11-4).

**Vorwärts- und Seitenstreudetektor** Der Vorwärtsstreudetektor (FSC) misst Licht, das von Bakterien oder anderen Partikeln gestreut wird. Der Detektor ist in einem kleinen Winkel zur Richtung des Laserstrahls angeordnet und misst so Lichtsignale in „Vorwärtsrichtung“. Der Seitenstreudetektor (SSC) ist dagegen im Winkel von 90 Grad zur Strahlrichtung angeordnet und misst das zur Seite gestreute Licht. Die Kombination von Fluoreszenz- und Streulichtinformationen liefert inhaltsreiche Daten und ermöglicht Anwendungen wie mikrobiologische Fingerabdruckanalyse, Profilerstellung oder Anomalieerkennung. Insbesondere ermöglichen die Streulichtdetektoren eine präzise Fingerabdruckanalyse (BactoScore), mit der sich Veränderungen der Bakterienpopulation verfolgen lassen.

Streulichtdaten sind auf folgende Weise verfügbar:

- in den FCS-Dateien (Flow Cytometry Standard). Weitere Informationen zu diesem Dateiformat finden Sie unter [Erweiterte Datenanalyse](11-results-and-data-analysis.md#section-11-5).
- in der Benutzeroberfläche des BactoSense als FSC / SSC-Dotplot
- in der Web-Benutzeroberfläche als FSC / SSC-Dotplot
- beim Herunterladen der Dotplots als Bilder

**Aktivierung des** **Scientific Package**

Aktivieren Sie das Paket, während sich das Gerät im Leerlauf befindet und PLC-Modus sowie Demo-Modus deaktiviert sind.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1. | Wenden Sie sich an Ihre bNovate-Vertriebsvertretung, um einen Aktivierungsschlüssel zu erwerben. |  |
| 2. | Melden Sie sich nach Erhalt des Aktivierungsschlüssels als Admin-Benutzer am BactoSense an. |  |
| 3. | Drücken Sie auf dem Startbildschirm Einstellungen. |  |
| 4. | Drücken Sie im Einstellungsmenü erneut die Taste Einstellungen, um die Systemeinstellungen zu öffnen. | ![BactoSense — Einstellungsmenü: Systemeinstellungen](/img/gui/de/settings-menu-system-settings.png "width=360") |
| 5. | Drücken Sie die Taste Upgrades. | ![BactoSense — Systemeinstellungen: Upgrades](/img/gui/de/scientific-package-upgrades-menu.png "width=360") |
| 6. | Drücken Sie die Taste Upgrade. | ![BactoSense — Scientific-Package-Lizenz und Upgrade-Taste](/img/gui/de/scientific-package-upgrades.png "width=360") |
| 7. | Geben Sie den Aktivierungsschlüssel ein und drücken Sie OK. | OK ist verfügbar, sobald Sie einen Schlüssel eingegeben haben.<br />![BactoSense — Eingabe des Scientific-Package-Aktivierungsschlüssels](/img/gui/de/scientific-package-activation-key.png "width=360") |

Drücken Sie nach erfolgreicher Aktivierung in der Bestätigungsmeldung OK. Falls das Gerät neu startet, warten Sie, bis der Neustart abgeschlossen ist, und öffnen Sie dann erneut Upgrades. Prüfen Sie, ob bei Wissenschaftliches Package der Status Aktiviert angezeigt wird.

## 9.2 Management Package {#section-9-2}

Das *Management Package* ist für den Gerätebetrieb in Umgebungen mit erhöhten Anforderungen an die Rückverfolgbarkeit vorgesehen. Es umfasst folgende Funktionen:

- Erweiterte Benutzerverwaltung (rollenbasierte Zugriffskontrolle)
- Audit Trail
- Erweiterte Zeitplanung

**Erweiterte Benutzerverwaltung** Mit der Funktion *Erweiterte Benutzerverwaltung* kann der Geräteeigentümer verschiedene Benutzer anlegen und ihnen unterschiedliche Benutzerrollen (Basic, Advanced, Admin) zuweisen. So lassen sich einzelnen Benutzern unterschiedliche Berechtigungen erteilen und ihre Aktivitäten für den Audit Trail protokollieren.

**Audit Trail** Der *Audit Trail* ist eine Aufzeichnung aller relevanten Vorgänge und Änderungen, die am Gerät vorgenommen wurden. Er liefert einen detaillierten Verlauf der Aktionen, die vom Benutzer oder vom Gerät selbst ausgeführt wurden. Der *Audit Trail* kann auf folgende Weise aufgerufen werden:

- Öffnen Sie in der Benutzeroberfläche des Geräts Startbildschirm → Einstellungen → Logs → Prüfpfad (siehe [Zugriffsprotokoll und Prüfpfad](16-warnings-errors-and-troubleshooting.md#section-16-4-4)).
- Beim Export aller Daten auf einen USB-Stick, siehe [Export von Daten auf ein USB-Gerät](12-data-access-and-export.md#section-12-1).
- Über die Web-Benutzeroberfläche. Der Zugriff auf die Web-Benutzeroberfläche ist unter [Web-Benutzeroberfläche](13-web-user-interface.md) beschrieben.

**Aktivierung des** **Management Package**

Aktivieren Sie das Paket, während sich das Gerät im Leerlauf befindet und PLC-Modus sowie Demo-Modus deaktiviert sind.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1. | Wenden Sie sich an Ihre bNovate-Vertriebsvertretung, um einen Aktivierungsschlüssel zu erwerben. |  |
| 2. | Melden Sie sich nach Erhalt des Aktivierungsschlüssels als Admin-Benutzer am BactoSense an. |  |
| 3. | Drücken Sie auf dem Startbildschirm Einstellungen. |  |
| 4. | Drücken Sie im Einstellungsmenü erneut die Taste Einstellungen, um die Systemeinstellungen zu öffnen. |  |
| 5. | Drücken Sie die Taste Upgrades. |  |
| 6. | Drücken Sie die Taste Upgrade. |  |
| 7. | Geben Sie den Aktivierungsschlüssel ein und drücken Sie OK. | Hinweis: Die erweiterte Benutzerverwaltung ist damit noch nicht aktiviert. Wenn Sie die erweiterte Benutzerverwaltung aktivieren möchten, führen Sie die folgenden Schritte aus. |
| 8. | Drücken Sie auf dem Startbildschirm Einstellungen. |  |
| 9. | Drücken Sie im Einstellungsmenü erneut die Taste Einstellungen, um die Systemeinstellungen zu öffnen. |  |
| 10. | Drücken Sie die Taste Systemparameter. |  |
| 11. | Aktivieren Sie das Kontrollkästchen Erweiterter Benutzerverwaltungsmodus. |  |
| 12. | Drücken Sie Speichern und bestätigen Sie die Meldung mit OK. |  |
