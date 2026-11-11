---
id: bactolink
title: BactoLink
sidebar_position: 6
slug: /bactolink
document_id: 40501-01
manual_version: "1"
software_version: "2.2"
---

Konnektivitätsmodul für BactoSense und BactoSense Multi. Diese Ausgabe beschreibt den BactoHub-Ablauf und gilt ab BactoSense-Software 2.2.

## Allgemeine Benutzerinformationen {#general-user-information}

### Bestimmungsgemäße Verwendung {#intended-use}

BactoLink stellt eine Fernverbindung zwischen dem Gerät und Ihrem PC her. Initiieren Sie die Verbindung über das BactoHub-Portal mit HTTPS und einem Webbrowser. Das Portal ist der Zugangspunkt für BactoLink und die zugehörigen Geräte. Eine Verbindung bleibt **30 Minuten** aktiv und muss danach erneut hergestellt werden.

### Piktogramme {#pictograms}

:::info[Zusätzliche Informationen]

Informationshinweise enthalten zusätzliche Angaben zum jeweiligen Thema. Nummerierte Listen beschreiben praktische Abläufe. Screenshots dienen als Beispiele und können vom aktuellen Gerät abweichen.

:::

### Überblick und Voraussetzungen {#prerequisites}

BactoLink besteht aus einer Antenne, einem Ethernet-Kabel und einem Power-over-Ethernet-Injektor (PoE-Injektor). Der Injektor wird an die Spannungsversorgung von BactoSense oder BactoSense Multi angeschlossen.

Vor der Installation:

- Prüfen Sie, ob auf dem Gerät **Software 2.2 oder höher** installiert ist.
- Aktivieren Sie **DHCP** und **HTTPS** in den Geräteeinstellungen.
- Aktivieren Sie **VNC**, wenn GUI-Relay benötigt wird.
- Stellen Sie sicher, dass Sie ein Konto bei [hub.bnovate.com](https://hub.bnovate.com) haben. Fordern Sie bei Bedarf ein Konto unter [support@bnovate.com](mailto:support@bnovate.com) an.

### Power-over-Ethernet-Injektor {#poe-injector}

Der PoE-Injektor versorgt die Antenne über Ethernet mit Strom. Seine Ethernet- und Stromanschlüsse zum Gerät sind fest integriert. Er verfügt über einen Anschluss für das mit BactoSense gelieferte Netzkabel und einen Ethernet-Anschluss zur Antenne.

![Abmessungen des PoE-Injektors](/img/other-manuals/bactolink-poe-dimensions.png "width=550")

Die Höhe des Injektors von den Füßen bis zur Oberseite beträgt **65.5 mm**.

| Mechanische Spezifikation | Wert |
| --- | --- |
| Material | Polycarbonat (PC) |
| Anschlüsse | RJ45, Stromanschluss |
| Schutzart | IP67 |
| Abmessungen, L × H × B | 165 × 165 × 54 mm |
| Betriebstemperatur | 5–30 °C |

### Antenne {#antenna}

Die Antenne ist über Ethernet mit dem PoE-Injektor verbunden und enthält die SIM-Karte für Mobilfunkverbindungen (**4G/LTE, 3G, 2G**). Informationen zur Montagehalterung finden Sie unter [Montage von BactoLink](#mounting).

![Ansichten und Abmessungen der Antenne](/img/other-manuals/bactolink-antenna-dimensions.png "width=600")

| Mechanische Spezifikation | Wert |
| --- | --- |
| Materialien | ABS, PC, FR4 |
| Anschluss | RJ45 |
| Schutzart | IP67 |
| Abmessungen, L × H × B | 165 × 165 × 54 mm |
| Gewicht | 0.8 kg |
| Betriebstemperatur | −40–80 °C |

## Installation {#installation}

### Geräteanschlüsse {#instrument-connections}

![Verbindungen zwischen BactoSense, PoE-Injektor, Antenne und Spannungsversorgung](/img/other-manuals/bactolink-connections.png "width=700")

| Verbindung | Beschreibung |
| --- | --- |
| 1 | Ethernet zwischen dem PoE-Injektor und dem RJ45-Anschluss des Geräts |
| 2 | Stromverbindung zwischen dem PoE-Injektor und dem Stromanschluss des Geräts |
| 3 | Ethernet zwischen dem PoE-Injektor und der Antenne |
| 4 | Spannungsversorgung des PoE-Injektors. Das Netzteil wird mit BactoSense geliefert. |

### Anschließen von Antenne und PoE-Injektor {#antenna-connection}

1. Öffnen Sie den Beutel mit dem Ethernet-Kabel.
2. Öffnen Sie die Verpackung des PoE-Injektors und den separaten Beutel mit den Anschlusskomponenten. Entnehmen Sie die Kappe, den Dichtring mit Öffnung, das Distanzstück und den Anschlussstecker für den PoE-Injektor. Ordnen Sie die Teile wie abgebildet auf dem Ethernet-Kabel an.

   ![Reihenfolge der Teile des PoE-Anschlusssteckers auf dem Ethernet-Kabel](/img/other-manuals/bactolink-p08-1.png "width=450")

3. Führen Sie den RJ45-Stecker in den PoE-Anschlussstecker ein. Beide lassen nur eine Ausrichtung zu. Schieben Sie den RJ45-Stecker so weit wie möglich nach vorne. Schieben Sie das Distanzstück und den Dichtring in den PoE-Anschlussstecker. Schrauben Sie die Kappe handfest auf und drücken Sie dabei die Teile leicht zusammen. Die so entstandene Verbindung zum PoE-Injektor ist ein Bajonettverschluss.

   ![Zusammenbau des PoE-Anschlusssteckers](/img/other-manuals/bactolink-p08-2.png "width=400")

4. Legen Sie das andere Ende des Ethernet-Kabels vor sich zurecht.
5. Entnehmen Sie den Antennenanschlussstecker und den O-Ring aus der Antennenverpackung.

   ![Antennenanschlussstecker und O-Ring](/img/other-manuals/bactolink-p08-3.png "width=450")

6. Schrauben Sie den Antennenanschlussstecker auseinander und drücken Sie den Dichtring heraus. Verwenden Sie bei Bedarf den gebogenen Montagebügel, um ihn herauszudrücken.

   ![Entfernen des Dichtrings aus dem Antennenanschlussstecker](/img/other-manuals/bactolink-p09-0.png "width=300")

7. Ordnen Sie die Teile des Antennenanschlusssteckers wie abgebildet auf dem Ethernet-Kabel an.

   :::caution[Antennenanschlussstecker in der richtigen Reihenfolge montieren]

   Verbinden Sie zuerst den RJ45-Stecker mit der Antenne, befestigen Sie den Anschlussstecker an der Antenne und montieren Sie zuletzt die Kappe. Dadurch wird verhindert, dass das Kabel unter der Dichtung eingeklemmt wird.

   :::

   ![Reihenfolge der Teile des Antennenanschlusssteckers](/img/other-manuals/bactolink-p09-1.png "width=450")

8. Schieben Sie den RJ45-Stecker leicht in den Antennenanschlussstecker. Stellen Sie sicher, dass sich seine kleine Lasche innerhalb der Antenne befindet.
9. Schieben Sie den Dichtring in den Antennenanschlussstecker.
10. Setzen Sie den O-Ring auf den Antennenanschlussstecker und schließen Sie den RJ45-Stecker an.
11. Schrauben Sie den Anschlussstecker in die Antenne.
12. Schrauben Sie die Kappe auf den Anschlussstecker.

    ![Fertig montierter Antennenanschlussstecker](/img/other-manuals/bactolink-p10-0.png "width=350")

### Montage von BactoLink {#mounting}

Mit dem Montageset wird die Antenne an zylindrischen oder quadratischen Gegenständen, Rohren oder Stangen befestigt.

1. Öffnen Sie die Antennenverpackung und suchen Sie die Montagehalterung und die Montageteile.
2. Identifizieren Sie die Montageplatte (A), den gebogenen Bügel (B) und das Distanzstück (C). Die Platte wird an BactoLink befestigt, der gebogene Bügel hält es in Position und das Distanzstück hält den Abstand zwischen Bügel und Platte aufrecht.

   ![Montageplatte, gebogener Bügel und Distanzstück](/img/other-manuals/bactolink-p11-1.png "width=400")

3. Suchen Sie die beiden Schrauben und Unterlegscheiben in der Antennenverpackung.
4. Positionieren Sie die Montageplatte auf BactoLink. Führen Sie die Schrauben durch die Platte in BactoLink ein und legen Sie die Unterlegscheiben zwischen Schraubenköpfe und Platte. Ziehen Sie die Schrauben mit einem **5 mm Inbusschlüssel** fest, bis die Platte sicher befestigt ist.

   ![Befestigung der Montageplatte an BactoLink](/img/other-manuals/bactolink-p11-3.png "width=300")

5. Suchen Sie die beiden Flanschmuttern.
6. Positionieren Sie den gebogenen Bügel und das Distanzstück in der gewünschten Ausrichtung auf der Platte.

   ![An der Antenne montierte Montagehalterung](/img/other-manuals/bactolink-p11-2.png "width=450")

7. Setzen Sie die beiden Flanschmuttern auf die Gewindeenden des gebogenen Bügels. Ziehen Sie sie von Hand oder mit einem **13 mm Schraubenschlüssel** fest, bis sich die Muttern nicht mehr bewegen und BactoLink sicher befestigt ist.

   ![Befestigung des gebogenen Bügels und des Distanzstücks](/img/other-manuals/bactolink-p12-1.png "width=450")

### Erstinstallation {#first-installation}

1. Prüfen Sie, ob auf dem Gerät **Software 2.2 oder höher** installiert ist. Wenden Sie sich für ein Upgrade an [support@bnovate.com](mailto:support@bnovate.com).
2. Scannen Sie den 2D-Barcode auf der Rückseite der Antenne. Geben Sie den zuvor für BactoHub gewählten Benutzernamen und das Passwort ein. Wenn Sie ein Konto benötigen, wenden Sie sich an den Support.
3. Schalten Sie das Gerät aus. Verbinden Sie die Geräte wie unter [Geräteanschlüsse](#instrument-connections) und [Anschließen von Antenne und PoE-Injektor](#antenna-connection) beschrieben.

   ![Beispiel für die Geräteanschlüsse](/img/other-manuals/bactolink-p13-1.png "width=450")

4. Schalten Sie das Gerät ein.
5. Öffnen Sie **Home → System Settings → Network**. Aktivieren Sie bei Bedarf **DHCP**.

   :::caution[Vor dem Neustart warten]

   Schalten Sie das Gerät nicht sofort aus und wieder ein.

   :::

   ![Beispiel einer Netzwerkkonfiguration](/img/other-manuals/bactolink-p13-2.png "width=500")

6. Öffnen Sie **Home → System Settings → System Services**. Aktivieren Sie **HTTPS** für den WebUI-Zugriff und weisen Sie **Port 443** zu. Wenn Sie Änderungen vorgenommen haben, starten Sie BactoSense neu. HTTPS ist für die Funktion von BactoLink erforderlich. Schalten Sie das Gerät aus und wieder ein oder führen Sie zuerst den optionalen nächsten Schritt aus.
7. Wenn GUI-Relay benötigt wird, aktivieren Sie unter **System Services** **VNC** und weisen Sie **Port 5900** zu. Schalten Sie das Gerät anschließend aus und wieder ein.

   :::caution[Sichtbarkeit des Bildschirms aus der Ferne]

   Bei Verwendung von GUI-Relay sind Ihre Aktionen auf dem Bildschirm für Personen am Gerät und für Benutzer mit Fernverbindung sichtbar. Dabei könnten vertrauliche Informationen weitergegeben werden.

   :::

8. Konfigurieren Sie BactoLink mit seiner Seriennummer und einem leicht verständlichen Namen. Klicken Sie auf **Connect**.

   ![Einrichtung der BactoLink-Verbindung](/img/other-manuals/bactolink-p15-0.png "width=500")

9. Warten Sie, bis das Gerät verbunden ist, und klicken Sie dann auf **Finish**.

   ![Abschluss der Verbindungseinrichtung](/img/other-manuals/bactolink-p15-1.png "width=500")

10. Das Gerät erscheint in der BactoHub-Geräteliste. Wählen Sie **WebUI** oder **GUI relay**. Die Verbindung öffnet sich in einem separaten Tab und bleibt **30 Minuten** gültig. Stellen Sie die Verbindung nach Ablauf dieser Zeit erneut her.

    ![BactoHub-Geräteliste mit WebUI- und GUI-Relay-Verbindungen](/img/other-manuals/bactolink-p15-2.png "width=500")

### Neukonfiguration von BactoHub {#reconfiguration}

1. Klicken Sie unter **My Instruments** auf **Initialize BactoLink**. Geben Sie die Seriennummer des Geräts und einen leicht verständlichen Namen ein und drücken Sie dann **Continue**.
2. Wiederholen Sie die Schritte **2–9** der [Erstinstallation](#first-installation). Anschließend können Sie über WebUI und GUI-Relay auf das Gerät zugreifen.

## Fernverbindungen {#remote-connections}

### Web-Benutzeroberfläche (WebUI) {#webui}

Die WebUI ermöglicht den Zugriff auf Gerätedaten über den RJ45-Anschluss. Klicken Sie in BactoHub auf **WebUI**, um eine Verbindung über BactoLink herzustellen. Wenn Sie BactoSense über die WebUI neu starten, laden Sie auch die Webseite erneut.

#### Passwort

Geben Sie bei Aufforderung den Benutzernamen des BactoSense-Geräts (**Basic**, **Advanced**, **Admin** oder **Service**) und das dafür gewählte Passwort ein.

![WebUI-Anmeldeaufforderung](/img/other-manuals/bactolink-p17-0.png "width=350")

#### Dashboard

Das Dashboard zeigt die neuesten Messergebnisse, den Gerätestatus und Warnungen zu abgelaufenen Kartuschen an.

![WebUI-Dashboard](/img/other-manuals/bactolink-p17-1.png "width=650")

#### Dotplots

Dotplots zeigen eine Animation der letzten Messungen. Das Laden kann je nach Verbindung einige Zeit dauern. Beginnen Sie mit der Animationsgeschwindigkeit **1**; verwenden Sie höhere Geschwindigkeiten, sobald die Bilder vollständig geladen sind. Downloads sind in den Formaten GIF und FCS verfügbar.

![WebUI-Dotplots und Animationssteuerung](/img/other-manuals/bactolink-p17-2.png "width=650")

#### Ergebnisse

Die Ergebnisse zeigen Messungen im zeitlichen Verlauf und bieten Downloadmöglichkeiten. Unterhalb des Diagramms befinden sich Downloadbereiche für den automatischen Modus, den manuellen Modus und die Gerätevalidierung. Die automatischen und manuellen Ergebnisse werden am unteren Rand aufgelistet. Sie können sie als Tabelle anzeigen, kumulierte ZIP-Dateien herunterladen oder IMG- und FCS-Dateien für jede Messung herunterladen. BactoSense Multi zeigt nur den manuellen Modus und verfügt über kein Zeitverlaufsdiagramm.

![WebUI-Ergebnisse und Downloadbereiche](/img/other-manuals/bactolink-p18-0.png "width=650")

#### Protokollprotokoll

Das Protokollprotokoll zeigt ausgeführte Protokolle und Fehlermeldungen an. Laden Sie die Daten als CSV herunter.

![WebUI-Protokollprotokoll](/img/other-manuals/bactolink-p18-1.png "width=650")

#### Fehlerprotokoll

Das Fehlerprotokoll listet Fehler und Warnungen auf, die als XLSX, CSV oder PDF heruntergeladen werden können.

![WebUI-Fehlerprotokoll](/img/other-manuals/bactolink-p19-0.png "width=650")

#### Systeminformationen

Die Systeminformationen enthalten allgemeine Angaben zum System und ermöglichen die Aufnahme von Screenshots.

![WebUI-Systeminformationen](/img/other-manuals/bactolink-p19-1.png "width=650")

#### Einstellungen

Unter Einstellungen können Probennamen, Messintervalle und der Gerätename geändert werden. Diese Funktion ist für BactoSense Multi nicht verfügbar.

![WebUI-Einstellungen](/img/other-manuals/bactolink-p19-2.png "width=650")

### Weiterleitung der grafischen Benutzeroberfläche (GUI-Relay) {#gui-relay}

GUI-Relay ermöglicht den Zugriff auf den Remote-Desktop, als wären Sie persönlich am Gerät anwesend.

![Beispiel des GUI-Relay-Remote-Desktops](/img/other-manuals/bactolink-p20-0.png "width=650")

:::caution[Sichtbarkeit des Bildschirms aus der Ferne]

Ihre Aktionen auf dem Bildschirm sind für Personen am Gerät und für Benutzer mit Fernverbindung sichtbar. Dabei könnten vertrauliche Informationen weitergegeben werden.

:::

## Fehlerbehebung {#troubleshooting}

Wenn das Gerät während der Installation ausgeschaltet war, sollte BactoLink sofort funktionieren. Falls weiterhin Probleme auftreten:

1. Stellen Sie sicher, dass BactoLink vollständig eingeschaltet ist, bevor Sie BactoSense einschalten. Warten Sie mindestens **3 Minuten**, bis das Gerät eine Netzwerkverbindung hergestellt hat.
2. Prüfen Sie mit Ihrem Mobiltelefon die Mobilfunkverbindung am Standort.
3. Wenn keine Verbindung möglich ist, trennen Sie die Antenne vom PoE-Injektor und schließen Sie sie erneut an, um die Antenne aus- und wieder einzuschalten.
4. Überprüfen Sie alle Anschlüsse am Injektor und an den angeschlossenen Geräten.
5. Falls die Probleme weiterhin bestehen, schalten Sie BactoSense aus und wieder ein.

## Herausgeber und Kontakt {#contact}

© bNovate Technologies SA. Technische Änderungen ohne Vorankündigung vorbehalten, Oktober 2023. Verfasst von bNovate Technologies SA. Das Kopieren, Ändern oder Weitergeben des Dokuments an Dritte bedarf der ausdrücklichen Zustimmung des Herausgebers.

bNovate Technologies SA, Ch. Dent d’Oche 1A, CH-1024 Ecublens, Schweiz. Telefon: +41 21 552 14 21. [info@bnovate.com](mailto:info@bnovate.com) · [www.bnovate.com](https://www.bnovate.com).
