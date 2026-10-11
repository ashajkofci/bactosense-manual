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

<table className="manual-table">

<tbody>

<tr>

<th scope="col">

</th>

<th scope="col">

ARBEITSSCHRITT

</th>

<th scope="col" colSpan="2">

ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

Verbinden Sie den BactoSense mittels Ethernet mit einem abgesicherten Netz (z.B. LAN). Verbinden Sie Ihr Gerät (z.B. Computer, Tablet) mit dem selben Netz.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Drücken Sie auf der Startseite der BactoSense-Benutzeroberfläche Einstellungen und anschließend Informationen.

</td>

<td>

![BactoSense — Schaltfläche Startseite](/img/gui/icons/home-button.png "width=48 class=manual-icon")

</td>

<td>

![BactoSense — Systeminformationen](/img/gui/icons/system-info-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Rufen Sie auf der Systeminfoseite die IP- Adresse des BactoSense ab.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Öffnen Sie auf Ihrem Gerät einen Webbrowser.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Geben Sie die IP-Adresse des BactoSense in die Adresszeile ein und drücken Sie Enter.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Geben Sie auf der Loginseite die selbe Kombination aus Benutzernamen und Kennwort ein wie Sie sie für den BactoSense verwenden. Drücken Sie Login.

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

## 13.3 Startseite im manuellen Modus {#section-13-3}

![BactoSense — Web-Dashboard](/img/gui/de/web-dashboard.png "width=654 class=manual-figure")

*Abbildung 13-1 Startseite in der Web-Oberfläche*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Menü | 2 | Gerätestatus |
| 3 | Dashboard mit den neuesten Messergebnissen | 4 | Sprache: Dropdown-Menü zum Ändern der Sprache. |
| 5 | Aus der Web-Oberfläche abmelden und Optionen zum Neustarten des BactoSense | 6 | Fortschritt der aktuellen Messung |

## 13.4 Herunterladen einer FCS-Datei {#section-13-4}

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Wählen Sie in der Web-Oberfläche im Navigationsfeld links die Seite Ergebnisse. |  |
| 2. | Navigieren Sie zum zu exportierenden Ergebnis. |  |
| 3. | Klicken Sie auf den fcs-Link (Position X). | ![BactoSense — FCS-Downloadlink](/img/gui/de/web-fcs-download.png "width=271 class=manual-figure") |
| 4. | Warten Sie, bis der Download abgeschlossen ist. |  |

## 13.5 Herunterladen einer Zip-Datei mit mehreren Ergebnissen {#section-13-5}

Die Ergebnisse mehrerer Messungen können als Zip-Datei heruntergeladen werden. Diese Zip enthält die FCS-Datei und die zusammenfassenden Darstellungen jeder Messung.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Wählen Sie in der Web-Oberfläche im Navigationsfeld links die Seite Ergebnisse. |  |
| 2. | Suchen Sie die Ergebnisse für den gewünschten Modus: Ergebnisse des Online-Modus oder des manuellen Modus. |  |
| 3. | Wählen Sie den gewünschten Datumsbereich und klicken Sie Zip herunterladen. Es erscheint oben im Browser ein Fortschrittsbalken, bis der Download des Zip beginnt. | ![BactoSense — ZIP-Download](/img/gui/de/web-zip-download.png "width=282 class=manual-figure") |
| 4. | Warten Sie, bis der Download abgeschlossen ist. |  |

## 13.6 Alle Ergebnisse als CSV, XLSX oder PDF herunterladen {#section-13-6}

Die Liste aller Ergebnisse kann über die Web-Oberfläche in den Formaten Excel XLSX, CSV und PDF heruntergeladen werden. Die Ergebnisse des Online-Modus sind von denen des manuellen Modus abgetrennt.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Wählen Sie in der Web-Oberfläche im Navigationsfeld links die Seite Ergebnisse. |  |
| 2. | Suchen Sie den Abschnitt ERGEBNISSE HERUNTERLADEN unterhalb des Ergebnisdiagramms. |  |
| 3. | Klicken Sie auf die gewünschte Datei (xlsx, csv or PDF), um den Download zu beginnen. | ![BactoSense — Formate für Ergebnisdownloads](/img/gui/de/web-results-download-formats.png "width=282 class=manual-figure") |
| 4. | Warten Sie, bis der Download abgeschlossen ist. |  |

## 13.7 Animieren der Entwicklung von Punktdiagrammen {#section-13-7}

Die Web-Oberfläche kann Punktdiagramme aus dem Online-Modus animieren, um den Verlauf der Messung darzustellen. Diese Funktion zeigt Standbilder in schneller Abfolge. Die Animation kann mit der Taste GIF herunterladen exportiert werden.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Wählen Sie in der Web-Oberfläche im Navigationsfeld links die Seite Plots. | ![BactoSense — Navigation zu Plots](/img/gui/de/web-plots-navigation.png "width=283 class=manual-figure") |
| 2. | Verwenden Sie die Pfeile oder den Schieberegler, um den Regler auf dem gewünschten Datumsbereich zu platzieren. | ![BactoSense — Datumsbereich der Diagramme](/img/gui/de/web-plots-date-range.png "width=283 class=manual-figure") |
| 3. | Drücken Sie die Play-Taste, um die Animation zu starten. | ![BactoSense — Wiedergabesteuerung der Diagramme](/img/gui/de/web-plots-play.png "width=283 class=manual-figure") |
| 4. | Passen Sie die Animationsgeschwindigkeit mittels des Feldes Animationsgeschwindigkeit an, falls erforderlich. |  |
| 5. | Die Animation kann als GIF-Datei heruntergeladen werden, wenn Sie die Taste GIF herunterladen drücken. |  |

## 13.8 Ändern des Messintervalls {#section-13-8}

Befindet das Gerät sich im Online-Modus, kann das Messintervall über die Web-Oberfläche geändert werden.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Wählen Sie in der Web-Oberfläche im Navigationsfeld links die Seite Einstellungen. | ![BactoSense — Messintervall](/img/gui/de/web-measurement-interval.png "width=283 class=manual-figure") |
| 2. | Ändern Sie die Dauer des Messintervalls. |  |
| 3. | Klicken Sie auf SAVE, um zu bestätigen. |  |

## 13.9 Screenshotnahme vom GUI {#section-13-9}

Screenshotnahme der BactoSense-Benutzeroberfläche aus der Web-Oberfläche:

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Wählen Sie in der Web-Oberfläche im Navigationsfeld links die Seite Diagnose. | ![BactoSense — Navigation zur Web-Systeminformation](/img/gui/de/web-system-info-navigation.png "width=284 class=manual-figure") |
| 2. | Drücken Sie unten auf der Seite die Taste Screenshot nehmen. |  |
| 3. | Der Screenshot wird unten angezeigt. |  |

## 13.10 Neustart aus der Web-Oberfläche {#section-13-10}

Der BactoSense kann mittels folgender Schritte über die Web-Oberfläche neugestartet werden.

:::info[Einschalten aus der Ferne nicht verfügbar]

Das Gerät kann nicht aus der Ferne eingeschaltet werden.

:::

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Klicken Sie in der oberen rechten Ecke der Web-Oberfläche auf den Benutzernamen, um das Benutzermenü zu öffnen. | ![BactoSense — Benutzermenü für Neustart](/img/gui/de/web-user-reboot-menu.png "width=284 class=manual-figure") |
| 2. | Wählen Sie Neustart und bestätigen Sie die folgende Abfrage. |  |
| 3. | Das Gerät startet neu und es ist ein neuer Login erforderlich. |  |
