---
title: "12. Datenzugriff und -export"
sidebar_label: "12. Datenzugriff und -export"
sidebar_position: 12
slug: /data-access-and-export
---

## 12.1 Export von Daten auf ein USB-Gerät {#section-12-1}

Um Messdaten zu exportieren, schauen Sie bitte unter [Export auf einen USB-Datenträger](10-measurements.md#section-10-8-1) in der Bedienungsanleitung nach.

### 12.1.1 Einstellungen, Diagnosedaten oder alles auf USB-Gerät exportieren {#section-12-1-1}

Die Funktion „Spezial-Import/-Export” ermöglicht es den Benutzern, entweder alle Messdaten vom Gerät oder nur Diagnosedaten für Servicetechniker zu exportieren.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1. | Drücken Sie als Advanced- oder Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |  |
| 2. | Drücken Sie die Taste Wartung. Drücken Sie die Taste Spezieller Export Import. |  |
| 3. | Bitte schließen Sie einen USB-Datenträger an. Der USB-Flashdatenträger sollte FAT32-formatiert sein. Bei Bedarf drücken Sie die Taste USB- Liste aktualisieren, bis das Gerät angezeigt wird. |  |
| 4. | Der Name des Ordners, der auf dem USB- Gerät erstellt wird, wird im Feld Ordnername angezeigt. Falls gewünscht, geben Sie dort einen anderen Namen ein. | ![BactoSense — USB-Import und -Export](/img/gui/de/usb-import-and-export.png "width=261 class=manual-figure") |
| 5. | • Um alle Daten zu exportieren, drücken Sie die Taste Alles exportieren. • Um Diagnosedaten zu exportieren, drücken Sie die Taste Diagnose exportieren. • Um Einstellungen zu exportieren, drücken Sie die Taste Einstellungen exportieren. Entfernen Sie den USB-Datenträger nicht, solange die Daten übertragen werden. | Der Export aller Daten kann mehrere Stunden in Anspruch nehmen. Reicht der verfügbare Speicherplatz auf dem USB-Datenträger nicht aus, werden Sie benachrichtigt. |
| 6. | Nach Abschluss des Exports drücken Sie die Taste OK und entfernen Sie das USB- Gerät. |  |

## 12.2 Daten über FTP herunterladen {#section-12-2}

BactoSense-Daten sind per FTP (RFC 3659) aus der Ferne zugänglich.

- FTP-Authentifizierung verlangt die selbe Kombination aus Benutzernamen und Kennwort wie das GUI des Geräts. Die Standardkontonamen lauten: basic, advanced und admin.
- Die CSV- und Excel-Dateien werden on-the-fly erzeugt und enthalten somit stets die neuesten Messdaten.

![BactoSense — Systemdienste](/img/gui/de/system-services.png "width=559 class=manual-figure")

*Abbildung 12-1 Die Ansicht „Dienste verwalten“ der BactoSense-Benutzeroberfläche.*

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1. | • Installieren Sie überall da, wo Sie Daten abrufen möchten, z.B. auf Ihrem Computer, einen FTP-Client. • Alternativ kann der Windows- Dateiexplorer verwendet werden. |  |
| 2. | Verbinden Sie den BactoSense mittels Ethernet mit einem abgesicherten Netz (z.B. LAN). Verbinden Sie Ihr Clientgerät mit dem selben Netz. | Informationen über die Netzwerkkonfiguration (z.B. statische und dynamische IP-Einstellungen) finden Sie unter [Netzwerkkonfiguration](08-general-operations-and-configurations.md#section-8-6). |
| 3. | Drücken Sie als Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |  |
| 4. | Drücken Sie die Taste Einstellungen. |  |
| 5. | Drücken Sie die Taste Systemdienste. |  |
| 6. | Stellen Sie sicher, dass das Kästchen FTP- Datenzugriff angehakt ist. |  |
| 7. | Wählen Sie einen Port für den FTP-Server. | Der Standardport ist 21. |
| 8. | Drücken Sie Änderungen übernehmen, um die Änderungen zu speichern. Wird ein Neustart angefordert, drücken Sie Jetzt neu starten. | Nur erforderlich, wenn Sie die Konfiguration geändert haben. |
| 9. | Drücken Sie auf der Startseite Einstellungen und anschließend Informationen, um die IP-Adresse des BactoSense abzurufen. | Informationen über die Netzwerkkonfiguration (z.B. statische und dynamische IP-Einstellungen) finden Sie unter [Netzwerkkonfiguration](08-general-operations-and-configurations.md#section-8-6). |
| 10. | Im FTP-Client: Öffnen Sie den Client und geben Sie die Anmeldedaten ein. Im Windows-Dateiexplorer: Geben Sie in das Adressfeld die folgende Adresse ein: ftp://user:password@ip:port | • Benutzer/Benutzername: Der Benutzername zur Anmeldung am BactoSense • Kennwort: Der Kennwort zur Anmeldung am BactoSense • Host/IP: IP-Adresse des BactoSense • Port: Der in der Ansicht Systemdienste (siehe Bild 12-1) konfigurierte Port |

## 12.3 Datenabruf über HTTP oder HTTPS {#section-12-3}

Der HTTP-/HTTPS-Server ist standardmäßig aktiviert und kann über einen Webbrowser oder eine beliebige HTTP-Request-Bibliothek angesprochen werden. So können Sie gewünschte Dateien über HTTP oder HTTPS herunterladen. Alternativ können Sie auf die Web-Oberfläche (siehe [Web-Benutzeroberfläche](13-web-user-interface.md)) oder FTP (siehe [Daten über FTP herunterladen](12-data-access-and-export.md#section-12-2)) zurückgreifen.

<table className="manual-table manual-http-retrieval">
<colgroup>
<col className="http-step-column" />
<col className="http-instruction-column" />
<col className="http-detail-column" />
</colgroup>

<thead>

<tr>

<th scope="col">



</th>

<th scope="col">

ARBEITSSCHRITT

</th>

<th scope="col">

ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

1\.

</td>

<td>

Verbinden Sie den BactoSense mittels Ethernet mit einem abgesicherten Netz (z.B. LAN). Verbinden Sie Ihr Clientgerät mit dem selben Netz.

</td>

<td>

Informationen über die Netzwerkkonfiguration (z.B. statische und dynamische IP-Einstellungen) finden Sie unter [Netzwerkkonfiguration](08-general-operations-and-configurations.md#section-8-6).

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Drücken Sie als Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen.

</td>

<td>



</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Drücken Sie die Taste Einstellungen.

</td>

<td>



</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Drücken Sie die Taste Systemdienste.

</td>

<td>



</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Für HTTP: Stellen Sie sicher, dass das Kästchen HTTP-Webzugriff angehakt ist. Für HTTPS: Stellen Sie sicher, dass das Kästchen HTTPS-Webzugriff angehakt ist.

</td>

<td>



</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Wählen Sie einen Port für den HTTP- oder HTTPS-Server.

</td>

<td>

Der Standardport für HTTP ist 80 und für HTTPS 443.

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

Drücken Sie Änderungen übernehmen, um die Änderungen zu speichern. Wird ein Neustart angefordert, drücken Sie Jetzt neu starten.

</td>

<td>

Nur erforderlich, wenn Sie die Konfiguration geändert haben.

</td>

</tr>

<tr>

<td>

8\.

</td>

<td>

Drücken Sie auf der Startseite Einstellungen und anschließend Informationen, um die IP-Adresse des BactoSense abzurufen.

</td>

<td>

</td>

</tr>

<tr>

<td>

9\.

</td>

<td colSpan="2">

Öffnen Sie auf Ihrem Gerät einen Webbrowser und geben Sie die Adresse der Zieldatei in die Adressleiste ein. Die Dateiadresse hat folgende Form. Für HTTP: `http://ipaddress:port/export/filename.extension?hash=myhash` Beispiel: http://192.168.1.2/export/history_auto.xlsx?hash=QWRtaW46MTExMQ. Für HTTPS: `https://ipaddress:port/export/filename.extension?hash=myhash` Beispiel: https://192.168.1.2/export/history_auto.xlsx?hash=QWRtaW46MTExMQ

<table className="manual-http-parameters">
<colgroup>
<col className="http-parameter-column" />
<col className="http-description-column" />
</colgroup>

<thead>

<tr>

<th>

Name

</th>

<th>

Beschreibung

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`ipaddress`

</td>

<td>

Lokale IP-Adresse des Geräts

</td>

</tr>

<tr>

<td>

`port`

</td>

<td>

Port des HTTP- oder HTTPS-Servers (standardmäßig 80 bzw. 443)

</td>

</tr>

<tr>

<td>

`filename`

</td>

<td>

Name der Zieldatei. Beispiel: history_auto

</td>

</tr>

<tr>

<td>

`extension`

</td>

<td>

Dateiendung (csv, xlsx, pdf)

</td>

</tr>

<tr>

<td>

`myhash`

</td>

<td>

Sicherheitsschlüssel mit der Benutzerkennung. Der Schlüssel ist für jede Kombination aus Benutzer und Kennwort eindeutig. Sie finden ihn in der [Web-Benutzeroberfläche](../web-user-interface/), indem Sie den beim Herunterladen einer Datei angezeigten Link kopieren. Beispiel: hash=QWRtaW46MTExMQ

</td>

</tr>

</tbody>

</table>

</td>

</tr>

</tbody>

</table>

## 12.4 GUI-Relay mit VNC {#section-12-4}

Virtual Network Computing (VNC) ist ein grafisches Desktop-Sharing-System, mit dem Sie aus der Ferne einen anderen Computer steuern können. Es sendet Tastatur- und Mauseingaben von einem Computer an einen anderen und schickt das Monitorbild über das Netz zurück. Der in den BactoSense eingebettete VNC-Server ist nur in der Lage, die Benutzeroberfläche über das lokale Netz (LAN) freizugeben (Ausnahme: Remotezugriff mittels VPN).

:::caution[VNC-Zugriff beschränken]

VNC ist ein unsicheres Protokoll. Die Verwendung außerhalb eines lokalen Netzes oder einer VPN-Verbindung wird nicht empfohlen.

:::

:::info[VNC nach Gebrauch schließen]

Eine VNC-Verbindung kann die Benutzeroberfläche stark verlangsamen, da diese viel Rechenleistung beansprucht. Bitte stellen Sie sicher, dass Sie Ihre VNC-Verbindung nach Verwendung schließen.

:::

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1. | Installieren Sie auf Ihrem Computer einen VNC-Client. |  |
| 2. | Verbinden Sie den BactoSense mittels Ethernet mit einem abgesicherten Netz (z.B. LAN). Verbinden Sie Ihren Computer mit dem selben Netz. | Informationen über die Netzwerkkonfiguration (z.B. statische und dynamische IP-Einstellungen) finden Sie unter [Netzwerkkonfiguration](08-general-operations-and-configurations.md#section-8-6). |
| 3. | Drücken Sie als Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |  |
| 4. | Drücken Sie die Taste Einstellungen. |  |
| 5. | Drücken Sie die Taste Systemdienste. |  |
| 6. | Stellen Sie sicher, dass das Kästchen VNC-Fernsteuerung angehakt ist. |  |
| 7. | Wählen Sie einen Port für den VNC-Server. | Der Standardport ist 5900. |
| 8. | Drücken Sie Änderungen übernehmen, um die Änderungen zu speichern. Wird ein Neustart angefordert, drücken Sie Jetzt neu starten. | Nur erforderlich, wenn Sie die Konfiguration geändert haben. |
| 9. | Drücken Sie auf der Startseite Einstellungen und anschließend Informationen, um die IP-Adresse des BactoSense abzurufen. |  |
| 10. | Öffnen Sie auf Ihrem Computer den VNC-Client und verbinden Sie sich unter Verwendung der zuvor festgestellten IP- Adresse und der Portnummer mit dem BactoSense. | Ihr VNC-Client erlaubt Ihnen eine Änderung der Verbindungseinstellungen, sofern es notwendig sein sollte, die Geschwindigkeit zu optimieren. |
| 11. | Kehren Sie nach Abschluss zu Systemdienste zurück, deaktivieren Sie das VNC-Kästchen und drücken Sie Änderungen übernehmen. Wird ein Neustart angefordert, drücken Sie Jetzt neu starten. | Eine VNC-Verbindung kann die Benutzeroberfläche des BactoSense stark verlangsamen. |
