---
title: "13. Web-Benutzeroberfläche"
sidebar_label: "13. Web-Benutzeroberfläche"
sidebar_position: 13
slug: /web-user-interface
---

## 13.1 Allgemeine Informationen {#section-13-1}

- Die Web-Oberfläche erlaubt es dem Benutzer, Ergebnisse und weitere Daten über einen Remotecomputer zu durchsuchen und zu exportieren sowie den Gerätestatus (aktive Prozesse, Kartuschenfüllstand, Alarme usw.) zu überwachen.
- Der BactoSense muss mit dem selben Netz verbunden sein wie der Computer, der auf die Web-Oberfläche zugreifen soll.
- Die Web-Oberfläche kann mit jedem Browser auf Computern oder Mobilgeräten angesehen werden.
- Sorgen Sie für Daten- und Netzwerksicherheit mit allen üblichen Maßnahmen.

## 13.2 Verbinden mit der Web-Oberfläche {#section-13-2}

Ein **admin** muss zuerst unter **Einstellungen → Einstellungen → Systemdienste** den HTTP- oder HTTPS-Webzugriff aktivieren, die Änderungen übernehmen und das Gerät neu starten, wenn er dazu aufgefordert wird. Die Diensteinstellungen und Ports sind unter [Dateien über HTTP oder HTTPS abrufen](12-data-access-and-export.md#section-12-3) beschrieben.

<div className="manual-narrow-details-scroll manual-narrow-details manual-narrow-details-split">

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN | \< |
| --- | --- | --- | --- |
| 1\. | Verbinden Sie den BactoSense mittels Ethernet mit einem abgesicherten Netz (z.B. LAN). Verbinden Sie Ihr Gerät (z.B. Computer, Tablet) mit dem selben Netz. |  | \< |
| 2\. | Drücken Sie auf der Startseite der BactoSense-Benutzeroberfläche **Einstellungen** und anschließend **Informationen**. | ![BactoSense — Schaltfläche Einstellungen](/img/gui/de/home-settings-button.png "width=57 class=manual-icon-settings-button-half") | ![BactoSense — Systeminformationen](/img/gui/icons/system-info-button.png "width=48 class=manual-icon") |
| 3\. | Lesen Sie auf der Seite **Informationen** die IP-Adresse des BactoSense ab. |  | \< |
| 4\. | Öffnen Sie auf Ihrem Gerät einen Webbrowser. |  | \< |
| 5\. | Geben Sie `http://<IP-Adresse>` oder `https://<IP-Adresse>` entsprechend dem aktivierten Dienst in die Adresszeile ein. Hängen Sie `:<Port>` an, wenn der Port vom Standard abweicht, und drücken Sie Enter. |  | \< |
| 6\. | Geben Sie auf der Loginseite denselben Benutzernamen und dasselbe Kennwort wie am BactoSense ein und drücken Sie **Login**. |  | \< |

</div>

## 13.3 Startseite im manuellen Modus {#section-13-3}

![BactoSense — Web-Dashboard](/img/gui/de/web-dashboard.png "width=654 class=manual-figure")

*Abbildung 13-1 Startseite in der Web-Oberfläche*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Menü | 2 | Gerätestatus |
| 3 | Dashboard mit den neuesten Messergebnissen | 4 | Sprache: Dropdown-Menü zum Ändern der Sprache. |
| 5 | Benutzermenü: abmelden; admin- und Servicekonten können den BactoSense auch neu starten | 6 | Fortschritt der aktuellen Messung |

## 13.4 Herunterladen einer FCS-Datei {#section-13-4}

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Wählen Sie in der Web-Oberfläche im Navigationsfeld links die Seite Ergebnisse. |  |
| 2. | Suchen Sie die Messung in der passenden Ergebnistabelle unterhalb des Diagramms. Scrollen Sie bei Bedarf horizontal zu den Links am rechten Rand der Zeile. |  |
| 3. | Klicken Sie auf den **fcs**-Link (Position X). | ![BactoSense — FCS-Downloadlink](/img/gui/de/web-fcs-download.png "width=271 class=manual-figure") |
| 4. | Warten Sie, bis der Download abgeschlossen ist. |  |

## 13.5 Herunterladen einer Zip-Datei mit mehreren Ergebnissen {#section-13-5}

Die Ergebnisse mehrerer Messungen können als Zip-Datei heruntergeladen werden. Diese Zip enthält die FCS-Datei und die zusammenfassenden Darstellungen jeder Messung.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Wählen Sie in der Web-Oberfläche im Navigationsfeld links die Seite Ergebnisse. |  |
| 2. | Suchen Sie die Tabelle **Ergebnisse des Online-Modus** oder **Ergebnisse des manuellen Modus** für die gewünschten Messungen. |  |
| 3. | Wählen Sie den Datumsbereich für diese Tabelle und klicken Sie auf **ZIP herunterladen**. Oben im Browser erscheint ein Fortschrittsbalken, bis der ZIP-Download beginnt. | ![BactoSense — ZIP-Download](/img/gui/de/web-zip-download.png "width=282 class=manual-figure") |
| 4. | Warten Sie, bis der Download abgeschlossen ist. |  |

## 13.6 Alle Ergebnisse als CSV, XLSX oder PDF herunterladen {#section-13-6}
Die Liste aller Ergebnisse kann über die Web-Oberfläche in den Formaten Excel XLSX, CSV und PDF heruntergeladen werden. Ergebnisse des Online-Modus, des manuellen Modus und der Instrumentenvalidierung werden getrennt heruntergeladen.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Wählen Sie in der Web-Oberfläche im Navigationsfeld links die Seite Ergebnisse. |  |
| 2. | Suchen Sie den Abschnitt **ERGEBNISSE HERUNTERLADEN** unterhalb des Ergebnisdiagramms und wählen Sie die Zeile für den gewünschten Messmodus oder die Instrumentenvalidierung. |  |
| 3. | Klicken Sie in dieser Zeile auf **XLSX herunterladen**, **CSV herunterladen** oder **PDF herunterladen**, um den Download zu starten. | ![BactoSense — Formate für Ergebnisdownloads](/img/gui/de/web-results-download-formats.png "width=282 class=manual-figure") |
| 4. | Warten Sie, bis der Download abgeschlossen ist. |  |

## 13.7 Animieren der Entwicklung von Punktdiagrammen {#section-13-7}

Die Web-Oberfläche kann Punktdiagramme aus dem Online-Modus animieren, um den Verlauf der Messung darzustellen. Diese Funktion zeigt Standbilder in schneller Abfolge. Die Animation kann mit der Taste GIF herunterladen exportiert werden.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Wählen Sie in der Web-Oberfläche im Navigationsfeld links die Seite Plots. | ![BactoSense — Navigation zu Plots](/img/gui/de/web-plots-navigation.png "width=283 class=manual-figure") |
| 2. | Wählen Sie mit den Pfeilen für die vorherige und nächste Messung oder mit dem Schieberegler eine Messung anhand ihres Zeitstempels aus. | ![BactoSense — Auswahl des Diagrammzeitstempels](/img/gui/de/web-plots-measurement-time.png "width=283 class=manual-figure") |
| 3. | Drücken Sie die dreieckige Play-Taste, um die Animation zu starten. Drücken Sie sie erneut, um die Animation anzuhalten. | ![BactoSense — Wiedergabesteuerung der Diagramme](/img/gui/de/web-plots-play.png "width=283 class=manual-figure") |
| 4. | Geben Sie im Feld **Animationsgeschwindigkeit** die gewünschte positive Anzahl von Diagrammen pro Sekunde ein. |  |
| 5. | Drücken Sie **GIF herunterladen**, um bis zu 60 der neuesten Diagramme aus dem Online-Modus mit der gewählten Geschwindigkeit zu exportieren. Der Export verwendet die neuesten Diagramme unabhängig von der Position des Schiebereglers. |  |

## 13.8 Ändern des Messintervalls {#section-13-8}
Das Messintervall für Messungen im Online-Modus kann über die Web-Oberfläche geändert werden.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Wählen Sie in der Web-Oberfläche im Navigationsfeld links die Seite Einstellungen. | ![BactoSense — Messintervall](/img/gui/de/web-measurement-interval.png "width=283 class=manual-figure") |
| 2. | Geben Sie im Feld **Messspanne [Minuten]** ein Intervall von 30 bis 360 Minuten ein. |  |
| 3. | Klicken Sie auf **SAVE**, um das Intervall zu übernehmen. |  |

## 13.9 Screenshotnahme vom GUI {#section-13-9}

Screenshotnahme der BactoSense-Benutzeroberfläche aus der Web-Oberfläche:

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Wählen Sie in der Web-Oberfläche im Navigationsfeld links die Seite Diagnose. | ![BactoSense — Navigation zur Web-Systeminformation](/img/gui/de/web-system-info-navigation.png "width=284 class=manual-figure") |
| 2. | Drücken Sie unten auf der Seite die Taste **Mach ein Bildschirmfoto**. |  |
| 3. | Der Screenshot wird unten angezeigt. |  |

## 13.10 Neustart aus der Web-Oberfläche {#section-13-10}
Ein **admin** oder ein Servicekonto kann den BactoSense mit den folgenden Schritten über die Web-Oberfläche neu starten.

:::info[Einschalten aus der Ferne nicht verfügbar]

Das Gerät kann nicht aus der Ferne eingeschaltet werden.

:::

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Klicken Sie in der oberen rechten Ecke der Web-Oberfläche auf den Benutzernamen, um das Benutzermenü zu öffnen. | ![BactoSense — Benutzermenü für Neustart](/img/gui/de/web-user-reboot-menu.png "width=284 class=manual-figure") |
| 2. | Wählen Sie **Neustart** und klicken Sie im Bestätigungsdialog auf **Neustart**. |  |
| 3. | Warten Sie, bis das Gerät neu gestartet ist, laden Sie die Web-Oberfläche erneut und melden Sie sich bei Aufforderung wieder an. |  |
