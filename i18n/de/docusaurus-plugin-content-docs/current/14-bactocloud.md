---
title: "14. BactoCloud"
sidebar_label: "14. BactoCloud"
sidebar_position: 14
slug: /bactocloud
---

BactoCloud ist die sichere Cloud-Plattform für BactoSense-Benutzer, die Echtzeitüberwachung, Fernzugriff und intelligente Datenintegration ermöglicht.

## 14.1 IT Anforderungen {#section-14-1}

BactoSense baut eine ausgehende Internetverbindung zu BactoCloud auf. Die Verbindung kann über BactoLink, einen 4G/5G-Zugangspunkt oder einen kabelgebundenen Internetanschluss erfolgen. Mehrere Geräte können sich hinter NAT eine Internetverbindung teilen; VPN oder eingehende Portweiterleitungen sind nicht erforderlich.

| Anforderung | Konfiguration |
| --- | --- |
| Netzwerkadressierung | Stellen Sie eine funktionsfähige IP-Adresse, Subnetzmaske, ein Gateway und einen DNS-Resolver bereit. DHCP und statische Adressierung werden unterstützt. Stimmen Sie statische Einstellungen mit dem Netzwerkadministrator ab. |
| Ausgehender Zugriff | Erlauben Sie ausgehenden Zugriff aus dem Gerätenetzwerk auf `*.bactocloud.com` und `*.bnovate.net`. |
| Bandbreite | Planen Sie mehr als 1 Mbit/s ein. |
| Datenvolumen | Rechnen Sie bei stündlichen Messungen mit ungefähr 0.5–1 GB pro Monat und Gerät. Die Synchronisierung älterer Daten, Diagnosen und Softwareaktualisierungen verursachen zusätzlichen Datenverkehr. |
| Zeitsynchronisierung | Konfigurieren Sie bei Bedarf eine freigegebene Zeitquelle, damit Zeitstempel von Ereignissen miteinander verglichen werden können. |
| Browser-Proxy | Ein von BactoCloud-Benutzern verwendeter Proxy muss sichere WebSocket-Verbindungen zu BactoCloud unterstützen. |

Betreiben Sie die lokale Web-Oberfläche des Geräts in einem kontrollierten Anlagennetzwerk und machen Sie Gerätedienste nicht aus dem öffentlichen Internet erreichbar. Vorhandene PLC-, Modbus- und I/O-Verbindungen können weiterverwendet werden.

Zur Gerätekonfiguration siehe [Netzwerkkonfiguration](08-general-operations-and-configurations.md#section-8-6) und [NTP-Server einstellen](08-general-operations-and-configurations.md#section-8-7).

## 14.2 Benutzerkonto erstellen {#section-14-2}

Öffnen Sie [www.bactocloud.com/register](https://www.bactocloud.com/register), geben Sie die angeforderten Kontodaten ein und bestätigen Sie Ihre E-Mail-Adresse. Bei der Registrierung entsteht Ihr persönliches Konto; die Organisationsmitgliedschaft verbindet es mit einer Geräteflotte.

Wenn Sie eine Einladung erhalten haben, folgen Sie deren Link und melden Sie sich an oder registrieren Sie sich mit genau der eingeladenen E-Mail-Adresse. Wählen Sie nach dem Annehmen der Einladung die Organisation in der Kopfzeile aus.

Um eine Organisation für Ihre eigene Geräteflotte anzulegen, öffnen Sie die Organisationsauswahl in der Kopfzeile und wählen Sie **New Organisation**. Geben Sie ihren Namen ein, wählen Sie Zeitzone und Anwendungen und klicken Sie auf **Create Organisation**. Wählen Sie die gewünschte Organisation aus, bevor Sie einen Registrierungscode erzeugen.

## 14.3 Instrumente registrieren {#section-14-3}
Die Registrierung verbindet ein Gerät mit genau einer BactoCloud-Organisation. Sie benötigen die Berechtigung zum Registrieren von Geräten in dieser Organisation und ein **admin**-Konto am Gerät. Verwenden Sie den Touchscreen des Geräts oder eine freigegebene [VNC-Fernansicht](12-data-access-and-export.md#section-12-4) dieses Touchscreens. Ein Gerät kann immer nur einer Organisation angehören.

Prüfen Sie vor der Registrierung die installierte BactoSense-Software: Rev3-Geräte benötigen **3.1.0 oder neuer**, Rev2-Geräte **2.4.0 oder neuer**. Einzelne Cloud-Funktionen können neuere Software oder Geräteoptionen voraussetzen. Wenn Sie eine Aktualisierung nicht lokal installieren können, wenden Sie sich vor dem Fortfahren an Ihren Servicepartner.

### 14.3.1 Registrierungscode erzeugen {#section-14-3-1}

1. Melden Sie sich bei BactoCloud an und wählen Sie über die Organisationsauswahl die Organisation aus, der das Gerät zugeordnet werden soll.
2. Öffnen Sie die Organisationsauswahl in der Kopfzeile, wählen Sie **Organisation Settings** und anschließend **Instruments** in der Seitenleiste. Wählen Sie **Enrol instrument**. Diese Aktion ist auch auf der leeren Flottenseite verfügbar, wenn noch keine Geräte registriert sind.
3. Lesen Sie die Erläuterungen zur Registrierung und zu den Softwareanforderungen und wählen Sie **Generate new code**.
4. Notieren oder kopieren Sie den erzeugten Code.

![Einführung in die BactoCloud-Registrierung mit der Aktion Generate new code und den Mindestanforderungen an die Software.](/img/manual/bactocloud/enrolment.png)

Der Abschnitt **Enrolment codes** zeigt vorhandene Codes und deren Ablaufdaten. Verwenden Sie einen Code vor seinem Ablaufdatum oder erzeugen Sie einen neuen, wenn er abgelaufen ist. Jeder Code gehört zu der Organisation, in der er erzeugt wurde. Ist die Registrierungsaktion nicht verfügbar, bitten Sie einen Organisationsadministrator, Ihre Zugriffsrechte zu prüfen.

### 14.3.2 Code am Gerät eingeben {#section-14-3-2}

1. Wählen Sie auf der BactoSense-Startseite in der unteren Werkzeugleiste **Einstellungen**.

   ![BactoSense — Startbildschirm: Einstellungen](/img/gui/de/bactocloud-enrolment-home.png)

2. Wählen Sie im Menü **Einstellungen** die Kachel **Einstellungen**, um die Systemeinstellungen zu öffnen.

   ![BactoSense — Einstellungsmenü: Systemeinstellungen](/img/gui/de/settings-menu-system-settings.png)

3. Wählen Sie **BactoCloud**, um **Cloud-Einstellungen** zu öffnen.

   ![BactoSense — Systemeinstellungen: BactoCloud](/img/gui/de/bactocloud-enrolment-menu.png)

4. Wählen Sie **Anmelden unter**, geben Sie den in BactoCloud erzeugten Code ein und bestätigen Sie die Eingabe. Folgen Sie den Bildschirmmeldungen und prüfen Sie danach, ob **Eingeschrieben** den Wert **Ja** anzeigt und unter **Organisation** die gewünschte Organisation steht.

   ![BactoSense — BactoCloud-Registrierungseinstellungen](/img/gui/de/bactocloud-enrolment-settings.png)

Ist **BactoCloud** nicht verfügbar, prüfen Sie Ihre lokale Benutzerrolle und ob der Demo-Modus oder SPS-Modus aktiv ist.

### 14.3.3 Registrierung bestätigen {#section-14-3-3}
Öffnen Sie in BactoCloud über die Organisationsauswahl in der Kopfzeile **Organisation Settings → Instruments** und prüfen Sie Gerätename, Seriennummer und gemeldeten Verbindungsstatus. Vergewissern Sie sich, dass aktuelle Statusmeldungen und Messungen eintreffen. **Last seen at** bezeichnet den Zeitpunkt der zuletzt von BactoCloud empfangenen Statusmeldung; damit wird die aktuelle Netzwerkverbindung nicht geprüft.

Wenn das Gerät fehlt, prüfen Sie, ob der Code unter der richtigen Organisation erzeugt und der Vorgang am Gerät abgeschlossen wurde. Wird ein Code abgelehnt oder gehört das Gerät bereits zu einer anderen Organisation, wenden Sie sich an einen Organisationsadministrator oder den Support.

Wenn keine Statusmeldungen oder Messungen mehr eintreffen, notieren Sie Seriennummer, Softwareversion, Zeitstempel und Zeitpunkt der letzten erfolgreichen Übertragung. Bitten Sie den Netzwerkadministrator, DNS und ausgehende Verbindungen aus dem Gerätenetzwerk anhand der folgenden Informationen zu prüfen: [IT Anforderungen](#section-14-1).

Die Geräteübersicht der Organisation zeigt auch **Enrolled since** an. Benutzer mit der Berechtigung zum Löschen von Geräten können die Zeilenaktion **Unlink Instrument from organisation** wählen. Exportieren Sie zuvor alle Messungen, die Sie behalten möchten. Die Bestätigung warnt, dass das Trennen die Übertragung stoppt und die vorhandenen Cloud-Messungen löscht. Prüfen Sie das ausgewählte Gerät, geben Sie dessen Seriennummer in der Bestätigung ein und wählen Sie **Unlink instrument**.
