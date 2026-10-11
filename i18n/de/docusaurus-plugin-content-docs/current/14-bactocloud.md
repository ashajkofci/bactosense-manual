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

Um eine Organisation für Ihre eigene Geräteflotte anzulegen, wählen Sie **New Organisation**, geben Sie ihren Namen ein, wählen Sie Zeitzone und Anwendungen und klicken Sie auf **Create Organisation**. Wählen Sie die gewünschte Organisation aus, bevor Sie einen Registrierungscode erzeugen.

## 14.3 Instrumente registrieren {#section-14-3}

Die Registrierung verbindet ein Gerät mit genau einer BactoCloud-Organisation. Sie benötigen eine Mitgliedschaft in dieser Organisation und Zugriff auf die lokale Geräteoberfläche, entweder am Gerät selbst oder über eine freigegebene [Fernansicht](13-web-user-interface.md#section-13-2). Ein Gerät kann immer nur einer Organisation angehören.

Prüfen Sie vor der Registrierung die installierte BactoSense-Software: Rev3-Geräte benötigen **3.1.0 oder neuer**, Rev2-Geräte **2.4.0 oder neuer**. Einzelne Cloud-Funktionen können neuere Software oder Geräteoptionen voraussetzen. Wenn Sie eine Aktualisierung nicht lokal installieren können, wenden Sie sich vor dem Fortfahren an Ihren Servicepartner.

### 14.3.1 Registrierungscode erzeugen {#section-14-3-1}

1. Melden Sie sich bei BactoCloud an und wählen Sie über die Organisationsauswahl die Organisation aus, der das Gerät zugeordnet werden soll.
2. Öffnen Sie **Organization → Instruments** und wählen Sie **Enrol instrument**. Wenn noch keine Geräte registriert sind, können Sie auch von der leeren Flottenseite aus beginnen.
3. Lesen Sie die Erläuterungen zur Registrierung und zu den Softwareanforderungen und wählen Sie **Generate new code**.
4. Notieren oder kopieren Sie den erzeugten Code.

![Einführung in die BactoCloud-Registrierung mit der Aktion Generate new code und den Mindestanforderungen an die Software.](/img/manual/bactocloud/enrolment.png)

Der Abschnitt **Enrolment codes** zeigt vorhandene Codes und deren Ablaufdaten. Verwenden Sie einen Code vor seinem Ablaufdatum oder erzeugen Sie einen neuen, wenn er abgelaufen ist. Jeder Code gehört zu der Organisation, in der er erzeugt wurde. Ist die Registrierungsaktion nicht verfügbar, bitten Sie einen Organisationsadministrator, Ihre Zugriffsrechte zu prüfen.

### 14.3.2 Code am Gerät eingeben {#section-14-3-2}

1. Wählen Sie auf der BactoSense-Startseite in der unteren Werkzeugleiste **Settings**.

   ![Werkzeugleiste der BactoSense-Startseite: Settings auswählen.](/img/manual/bactocloud/enrolment-device-home.png)

2. Wählen Sie im Menü Settings die Option **System settings**.

   ![BactoSense-Menü Settings: System settings auswählen.](/img/manual/bactocloud/enrolment-device-settings.png)

3. Wählen Sie **BactoCloud**, um **Cloud Settings** zu öffnen.

   ![BactoSense-Menü System settings: BactoCloud auswählen.](/img/manual/bactocloud/enrolment-device-system.png)

4. Wählen Sie **Enrol**, geben Sie den in BactoCloud erzeugten Code ein und folgen Sie den Bildschirmanweisungen, um die Registrierung abzuschließen. Das mitgelieferte gedruckte Handbuch bezeichnet diese Aktion als **Enroll device**.

   ![BactoSense Cloud Settings vor der Registrierung: Enrol auswählen, um den Code der Organisation einzugeben.](/img/manual/bactocloud/enrolment-device-cloud.png)

### 14.3.3 Registrierung bestätigen {#section-14-3-3}

Öffnen Sie in BactoCloud die Liste **Instruments** der Organisation und prüfen Sie Gerätename, Seriennummer und gemeldeten Verbindungsstatus. Vergewissern Sie sich, dass aktuelle Statusmeldungen und Messungen eintreffen. **Last seen** bezeichnet den Zeitpunkt der zuletzt von BactoCloud empfangenen Statusmeldung; damit wird die aktuelle Netzwerkverbindung nicht geprüft.

Wenn das Gerät fehlt, prüfen Sie, ob der Code unter der richtigen Organisation erzeugt und der Vorgang am Gerät abgeschlossen wurde. Wird ein Code abgelehnt oder gehört das Gerät bereits zu einer anderen Organisation, wenden Sie sich an einen Organisationsadministrator oder den Support.

Wenn keine Statusmeldungen oder Messungen mehr eintreffen, notieren Sie Seriennummer, Softwareversion, Zeitstempel und Zeitpunkt der letzten erfolgreichen Übertragung. Bitten Sie den Netzwerkadministrator, DNS und ausgehende Verbindungen aus dem Gerätenetzwerk anhand der folgenden Informationen zu prüfen: [IT Anforderungen](#section-14-1).

Die Geräteübersicht der Organisation zeigt auch **Enrolled since** an. Möchten Sie ein Gerät entfernen und ist **Unenrol** verfügbar, prüfen Sie das ausgewählte Gerät und geben Sie vor dem Fortfahren dessen Seriennummer in der Bestätigung ein.
