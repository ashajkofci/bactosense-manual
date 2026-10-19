---
title: "8. Allgemeiner Betrieb und Konfigurationen"
sidebar_label: "8. Allgemeiner Betrieb und Konfigurationen"
slug: /general-operations-and-configurations
sidebar_position: 8
description: "BactoSense-Bedienungsanleitung: Allgemeiner Betrieb und Konfigurationen."
---

## 8.1 Ein- und Ausschalten {#section-8-1}

Der Einschaltknopf des BactoSense befindet sich auf der rechten Seite des Geräts.

![Abbildung aus dem Originalhandbuch, gedruckte Seite 58](/img/manual/asset-9b1ae5aeca7f.png "width=160")

*Abbildung 8-1 Einschaltknopf des BactoSense*

:::caution[Stromversorgung prüfen]

Bevor Sie den BactoSense einschalten, stellen Sie sicher, dass das Gerät mit einer stabilen Spannungsversorgung verbunden ist, welche die unter [Anschluss des BactoSense an die Spannungsversorgung](05-installation.md#section-5-3) aufgeführten Anforderungen erfüllt.

:::

**Einschalten** Drücken Sie kurz auf den Einschaltknopf, um den BactoSense einzuschalten. Die LED im Einschaltknopf leuchtet dauerhaft. Nach einigen Sekunden erscheint die Begrüßungsseite der Benutzeroberfläche.

**Ausschalten** Wenn Sie angemeldet sind und den BactoSense ausschalten möchten, tippen Sie oben rechts in der Benutzeroberfläche auf die Abmeldetaste und wählen Sie *Herunterfahren*. Wenn Sie das Gerät direkt von der Anmeldeseite aus ausschalten möchten, halten Sie den Einschaltknopf 10 Sekunden lang gedrückt.

:::caution[Stromversorgung sicher trennen]

Um den BactoSense von der Spannungsversorgung zu trennen, schalten Sie das Gerät zunächst aus. Trennen Sie dann das Netzteil von der Spannungsquelle, bevor Sie das Netzteil vom BactoSense trennen.

:::

## 8.2 Einloggen, Benutzerrollen und Berechtigungen {#section-8-2}

Der Betrieb des BactoSense erfordert es, dass Benutzer sich anmelden. Es sind verschiedene Benutzerrollen mit unterschiedlichen Berechtigungen verfügbar. Die Berechtigungen der Benutzerrollen sind unter [Benutzerrollen und Berechtigungen](08-general-operations-and-configurations.md#section-8-2-7) aufgeführt. Alle Logins werden durch Kennwörter geschützt.

Login und Logout können mittels der Login-Taste in der oberen rechten Ecke der Benutzeroberfläche initiiert werden. Die aktuell aktive Benutzerrolle wird neben dieser Taste angezeigt.

### 8.2.1 Anmelden {#section-8-2-1}

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Drücken Sie in der oberen rechten Ecke der Benutzeroberfläche die Login-Taste oder auf die Login-Leiste unten, sofern Sie das Gerät eingeschaltet haben. |
| 2. | Für BactoSense CORE oder BactoSense ID in der Standardkonfiguration: Wählen Sie eines der Benutzerprofile Basic, Advanced oder Admin. Für BactoSense CORE oder BactoSense ID mit dem Management Package (siehe [Management Package](09-upgrade-packages.md#section-9-2)) und aktivierter erweiterter Benutzerverwaltung (siehe [Aktivierung des erweiterten Benutzerverwaltungsmodus](08-general-operations-and-configurations.md#section-8-2-4)): Geben Sie Ihre Benutzerkennung ein. |
| 3. | Geben Sie das Kennwort ein und drücken Sie OK. Kennen Sie Ihr Kennwort nicht, wenden Sie sich bitte an einen Administrator. An einem neuen Gerät sind keine Kennwörter gesetzt. In diesen Fall, folgen Sie bitte den unter [Kennwörter von Benutzerrollen setzen und ändern](08-general-operations-and-configurations.md#section-8-2-5) beschriebenen Schritten. |
| 4. | Nachdem Sie sich eingeloggt haben, sehen Sie die Benutzeroberfläche des BactoSense. |
| 5. | Um sich auszuloggen, folgen Sie bitte den unter [Manueller Logout](08-general-operations-and-configurations.md#section-8-2-2) beschriebenen Schritten. |

### 8.2.2 Manueller Logout {#section-8-2-2}

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Stellen Sie sicher, dass alle Prozesse (z.B. Messungen oder Reinigungen) abgeschlossen sind. Der Status „Bereit“ des Geräts wird in der Benutzeroberfläche des BactoSense oben links angezeigt. |
| 2. | Drücken Sie die Taste Logout oben rechts auf der Benutzeroberfläche. |
| 3. | Wählen Sie Abmelden Bildschirm sperren. |
| 4. | Um sich erneut einzuloggen, folgen Sie bitte den unter [Anmelden](08-general-operations-and-configurations.md#section-8-2-1) beschriebenen Schritten. |

### 8.2.3 Automatisches Abmelden {#section-8-2-3}

Es ist möglich, ein automatisches Logout des Benutzers nach einer vordefinierten Inaktivitätsperiode zu konfigurieren.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1. | Drücken Sie als Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |  |
| 2. | Drücken Sie die Taste Einstellungen. |  |
| 3. | Drücken Sie die Taste Benutzer. |  |
| 4. | Drücken Sie Einstellungen. |  |
| 5. | Stellen Sie die gewünschte Zeitspanne bis zur automatischen Abmeldung ein. |  |
| 6. | Drücken Sie Speichern. |  |

### 8.2.4 Aktivierung des erweiterten Benutzerverwaltungsmodus {#section-8-2-4}

Mit der Funktion *Erweiterte Benutzerverwaltung* kann ein Geräteadministrator verschiedene Benutzer anlegen und ihnen die Rollen Basic, Advanced oder Admin zuweisen. Dadurch können einzelnen Benutzern unterschiedliche Berechtigungen erteilt und ihre Aktivitäten für den Audit Trail protokolliert werden.

Der erweiterte Benutzerverwaltungsmodus ist für BactoSense SMART und PURE, sowie für BactoSense CORE oder BactoSense ID mit Management-Paket (siehe [Management Package](09-upgrade-packages.md#section-9-2)) verfügbar.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1. | Drücken Sie als Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |  |
| 2. | Drücken Sie die Taste Einstellungen. |  |
| 3. | Drücken Sie die Taste Systemparameter. |  |
| 4. | Aktivieren Sie das Kontrollkästchen Erweiterter Benutzerverwaltungsmodus. |  |
| 5. | Drücken Sie Speichern. |  |

### 8.2.5 Kennwörter von Benutzerrollen setzen und ändern {#section-8-2-5}

Jede Benutzerrolle ist kennwortgeschützt.

**Kennwort bei der ersten Anmeldung festlegen** Klicken Sie bei der ersten Anmeldung mit einer beliebigen Benutzerrolle auf *OK* , wenn Sie zur Kennworteingabe aufgefordert werden. Dadurch wird der Assistent zum Festlegen Ihres Kennworts gestartet. Einzige Ausnahme ist das Service-Kennwort, für das ein voreingestelltes Kennwort bereitgestellt wird.

**Kennwörter festlegen und ändern** Jedes Benutzerprofil kann sein eigenes Kennwort ändern. Admin-Benutzer dürfen auch die Kennwörter anderer Benutzerprofile ändern. Das folgende Verfahren beschreibt die Kennwortänderung.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Drücken Sie auf der Startseite Einstellungen. Basic-Benutzer drücken Passwort ändern; Advanced- und Admin-Benutzer drücken im Menü Einstellungen und anschließend Benutzer. |  |
| 2. | Wählen Sie das zu bearbeitende Benutzerprofil und drücken Sie Bearbeiten. | Basic- und Advanced-Benutzer können ihre eigene PIN ändern. Admin-Benutzer können auch die PIN von Basic- und Advanced-Benutzern ändern. |
| 3. | Drücken Sie PIN ändern. Geben Sie die neue PIN in PIN und PIN bestätigen ein und drücken Sie Speichern. |  |

### 8.2.6 Änderung von Kennworteinstellungen {#section-8-2-6}

Kennworteigenschaften wie Gültigkeitsdauer, Länge usw. können eingestellt werden.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1. | Drücken Sie als Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |  |
| 2. | Drücken Sie die Taste Einstellungen. |  |
| 3. | Drücken Sie die Taste Benutzer. |  |
| 4. | Drücken Sie Einstellungen. |  |
| 5. | Konfigurieren Sie die Kennworteigenschaften gemäss Ihren Anforderungen. |  |
| 6. | Drücken Sie Speichern. |  |

### 8.2.7 Benutzerrollen und Berechtigungen {#section-8-2-7}

*Tabelle 8-1 Benutzerrollen und Berechtigungen*

<div className="manual-user-roles-scroll manual-user-roles-permissions">

| BERECHTIGUNG | BASIC | ADVANCED | ADMIN |
| --- | --- | --- | --- |
| Letztes Ergebnis anzeigen | ✓ | ✓ | ✓ |
| Alle Ergebnisse anzeigen und exportieren | ✓ | ✓ | ✓ |
| Messungen starten, stoppen und planen | ✓ | ✓ | ✓ |
| Zwischen Online- und manuellem Modus umschalten | ✓ | ✓ | ✓ |
| Fehler- und Warnungsprotokolle anzeigen | ✓ | ✓ | ✓ |
| Ergebnisse umbenennen | ✓ | ✓ | ✓ |
| Gerät validieren | ✓ | ✓ | ✓ |
| Eigenes Kennwort ändern | ✓ | ✓ | ✓ |
| Systeminfo anzeigen | ✓ | ✓ | ✓ |
| Netzwerkeinstellungen anzeigen | ✓ | ✓ | ✓ |
| Letzten Selbsttest anzeigen | ✓ | ✓ | ✓ |
| Kartusche wechseln | ✓ | ✓ | ✓ |
| Fehler löschen | ✓ | ✓ | ✓ |
| Interventionsprotokoll ansehen | ✓ | ✓ | ✓ |
| Validierungsergebnisse ansehen | ✓ | ✓ | ✓ |
| Ergebnisse löschen |  | ✓ | ✓ |
| Ergebnisse regaten |  | ✓ | ✓ |
| Alarme einstellen |  | ✓ | ✓ |
| Gates einstellen |  | ✓ | ✓ |
| Neustarten |  | ✓ | ✓ |
| Selbsttest ausführen |  | ✓ | ✓ |
| Messungen löschen |  | ✓ | ✓ |
| Alle exportieren |  | ✓ | ✓ |
| Interventionsinfo ansehen |  | ✓ | ✓ |
| Diagnose exportieren |  | ✓ | ✓ |
| Analog- und Digitalausgänge ändern |  |  | ✓ |
| Analog- und Digitalausgänge testen |  |  | ✓ |
| Kennwörter anderer Benutzer ändern |  |  | ✓ |
| Benutzer erstellen |  |  | ✓ |
| Authentifizierungseinstellungen ändern |  |  | ✓ |
| Gerätenamen festlegen |  |  | ✓ |
| Datum und Uhrzeit einstellen |  |  | ✓ |
| Netzwerkeinstellungen ändern |  |  | ✓ |
| Diensteeinstellungen ändern |  |  | ✓ |
| Modbus aktivieren (mit Schlüssel) oder deaktivieren |  |  | ✓ |
| Sprache ändern |  |  | ✓ |
| In Demo-Modus wechseln |  |  | ✓ |
| Einstellungen zurücksetzen |  |  | ✓ |
| Full-Factory-Reset (außer Interventionsprotokoll) |  |  | ✓ |
| Einstellungen importieren |  |  | ✓ |
| Automatisches Einschalten konfigurieren |  |  | ✓ |
| Erweiterungspakete mit Code aktivieren |  |  | ✓ |

</div>
## 8.3 Basiskonfiguration {#section-8-3}

### 8.3.1 Sprache der Benutzeroberfläche {#section-8-3-1}

Die Sprache kann nur durch Administratoren geändert werden.

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Drücken Sie als Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |
| 2. | Drücken Sie die Taste Einstellungen. Drücken Sie die Taste Sprache. |
| 3. | Wählen Sie die gewünschte Sprache aus und drücken Sie die OK-Taste. |
| 4. | Drücken Sie in der Meldung zum Neuladen der Benutzeroberfläche GUI neu laden. |

### 8.3.2 Datum und Uhrzeit {#section-8-3-2}

Datum und Zeit können nur durch Administratoren geändert werden.

:::info[Automatische Zeitsynchronisierung]

Ist die Zeitsynchronisierung über NTP-Server oder Modbus TCP aktiviert, werden manuell eingestellte Datums- und Uhrzeitwerte bei der nächsten Synchronisierung überschrieben. Die Einstellungen finden Sie unter Startseite > Einstellungen > Einstellungen > Datum und Zeit > Einstellungen zur Zeitsynchronisation. Die Einrichtung eines NTP-Servers ist unter [NTP-Server einstellen](08-general-operations-and-configurations.md#section-8-7) beschrieben.

:::

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Drücken Sie als Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |
| 2. | Drücken Sie die Taste Einstellungen. |
| 3. | Drücken Sie die Taste Datum und Zeit. |
| 4. | Geben Sie Datum und Zeit ein. |
| 5. | Wählen Sie die Zeitzone aus. |
| 6. | Drücken Sie die Taste Setzen. |

### 8.3.3 Gerätename {#section-8-3-3}

Die Gerätename kann nur durch Administratoren geändert werden.

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Drücken Sie als Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |
| 2. | Drücken Sie die Taste Einstellungen. |
| 3. | Drücken Sie die Taste Systemparameter. |
| 4. | Tippen Sie auf das Feld Gerätename. |
| 5. | Geben Sie den Gerätenamen über die Tastatur ein und drücken Sie OK. |
| 6. | Drücken Sie die Taste Speichern. |

### 8.3.4 Automatisches Einschalten {#section-8-3-4}

Der BactoSense verfügt über eine Funktion zum automatischen Einschalten, um nach Unterbrechungen der Spannungsversorgung automatisch starten zu können. Abhängig von der Konfiguration kann das Gerät einfach neustarten, aber auch in den Betrieb übergehen, indem es sich reinigt und eine automatische Messserie startet.

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Drücken Sie als Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |
| 2. | Drücken Sie die Taste Einstellungen. |
| 3. | Drücken Sie die Taste Systemparameter. |
| 4. | Wählen Sie Ihre bevorzugten Einstellungen zum automatischen Einschalten aus. Hinweis: Die Selbstreinigung findet nur statt, wenn die Spannungsversorgung während einer Messung unterbrochen wurde. |
| 5. | Drücken Sie die Taste Speichern. |

### 8.3.5 Tonbenachrichtigungen {#section-8-3-5}

Sie können hörbare Benachrichtigungen aktivieren, um das Ende einer Messung oder einer Wartung oder einen Alarm oder einen Fehler bekanntzugeben. Die Benachrichtigung besteht aus einem oder mehreren Pieptönen des Geräts.

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Drücken Sie als Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |
| 2. | Drücken Sie die Taste Einstellungen. |
| 3. | Drücken Sie die Taste Systemparameter. |
| 4. | Aktivieren Sie Ton-Benachrichtigungen. |
| 5. | Drücken Sie die Taste Speichern. |

## 8.4 Import/Export von Einstellungen {#section-8-4}

Die Einstellungen werden nach den Anweisungen unter [Einstellungen, Diagnosedaten oder alles auf USB-Gerät exportieren](12-data-access-and-export.md#section-12-1-1) auf einen USB-Datenträger exportiert. Sie werden in einer Datei mit Zeitstempel und der Endung **.bnv** zusammengefasst. Um die Einstellungen auf einem neuen Gerät oder als Sicherung zu importieren, kopieren Sie die **.bnv**-Datei in das Stammverzeichnis des USB-Datenträgers oder in das Verzeichnis, in das sie exportiert wurde. Befinden sich mehrere Kopien der Einstellungen auf einem USB-Datenträger, verwendet das System die neueste.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1. | Drücken Sie als Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. | ![BactoSense — Schaltfläche Einstellungen](/img/gui/de/home-settings-button.png "width=57 class=manual-icon-settings-button-half") |
| 2. | Drücken Sie die Taste Wartung. | ![BactoSense — Wartungsmenü](/img/gui/icons/maintenance-button.png "width=48 class=manual-icon") |
| 3. | Drücken Sie die Taste Spezieller Export Import. | ![BactoSense — Spezielle Export- und Importoptionen](/img/gui/icons/special-import-export-button.png "width=48 class=manual-icon") |
| 4. | Schließen Sie einen USB-Datenträger an. Bei Bedarf drücken Sie die Taste Liste der USB Speichermedien neu laden, bis das Gerät erkannt wird. | Stellen Sie sicher, dass die *.bnv-Datei sich im Stammverzeichnis des USB- Datenträgers befindet. Der USB-Datenträger muss FAT32- formatiert sein, was normalerweise der Fall ist. |
| 5. | Drücken Sie die Taste Importeinstellungen. | ![BactoSense — USB-Import und -Export](/img/gui/de/usb-import-and-export.png "width=263") |
| 6. | Wählen Sie die zu importierenden Einstellungen. Die Messeinstellungen umfassen Gating-Sets, I/O-Einstellungen, Alarme sowie Datum und Uhrzeit. Die Netzwerkeinstellungen umfassen IP-, DNS- und NTP-Adressen. | ![BactoSense — Einstellungen importieren](/img/gui/de/import-settings-options.png "width=269") |
| 7. | Drücken Sie Importeinstellungen und im Bestätigungsfenster Jetzt neu starten. Warten Sie, bis das Gerät neu gestartet ist. |  |

## 8.5 Alarmkonfiguration {#section-8-5}

Auf Alarme finden die folgenden Regeln Anwendung:

- Nur **Advanced** und **Admin** Benutzer können die Alarmeinstellungen ändern.
- Alarme sind nur aktiv im **Online-Modus**.

BactoSense zeichnet Alarme auf die folgenden Weisen auf:

- In der Benutzeroberfläche erscheint ein Popup
- In der oberen Leiste erscheint ein Alarmglockensymbol, wenn bei der letzten Messung der Alarmgrenzwert überschritten wurde. Der Alarm wird in der Messungszusammenfassung gezeigt, wenn ein Ergebnis angesehen wird..
- Über die (konfigurierbaren) digitalen Ausgänge kann ein Signal an einen PLC geschickt werden.

![BactoSense — Alarmkonfiguration](/img/gui/de/alarm-configuration.png "width=517")

*Abbildung 8-2 Alarmkonfiguration in der Benutzeroberfläche des BactoSense.*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Alarme auswählen, aktivieren oder deaktivieren. Es können bis zu 9 Alarme konfiguriert werden. | 2 | Name des aktuell ausgewählten Alarms. |
| 3 | Alarmquelle: Welches Messergebnis ausgewertet werden soll. Siehe Abbildung 8-3. | 4 | Bedingung: Alarm auslösen, wenn der gemessene Parameter größer (>) oder kleiner (&lt;) als der Grenzwert ist. |
| 5 | Grenzwert | 6 | Anzeige: Bei aktivierter Option wird im Diagramm des Online-Modus eine Linie in der gewählten Farbe angezeigt. |

![BactoSense — Kartuschenalarmquelle](/img/gui/de/cartridge-alarm-source.png "width=290")

*Abbildung 8-3 BactoSense-Alarmquellen. Für eine ausgewählte Quelle werden eine Bedingung und ein Grenzwert festgelegt.* *Im obigen Beispiel wird bei einem bestimmten Kartuschenfüllstand ein Alarm ausgelöst.*

Die folgenden Schritte beschreiben, wie Sie den Alarm konfigurieren können.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Drücken Sie auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |  |
| 2. | Drücken Sie die Taste Online-Modus Einstellungen. |  |
| 3. | Drücken Sie die Taste Alarm. |  |
| 4. | Aktivieren, wählen und konfigurieren Sie die Alarme entsprechend Abbildung 8-2 und Abbildung 8-3. | Standardmäßig sind keine Alarme aktiviert. |
| 5. | Drücken Sie Speichern, um die Alarmkonfiguration zu speichern. |  |

## 8.6 Netzwerkkonfiguration {#section-8-6}

:::info[Netzwerkeinstellungen]

Bitte fragen Sie Ihren Netzwerkadministrator nach den korrekten Einstellungen.

:::

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1\. | Drücken Sie als Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. | ![BactoSense — Schaltfläche Einstellungen](/img/gui/de/home-settings-button.png "width=57 class=manual-icon-settings-button-half") |
| 2\. | Drücken Sie die Taste Einstellungen. | ![BactoSense — Systemeinstellungen](/img/gui/icons/system-settings-button.png "width=48 class=manual-icon") |
| 3\. | Drücken Sie die Taste Netzwerk. | ![BactoSense — Netzwerkeinstellungen](/img/gui/icons/network-button.png "width=48 class=manual-icon") |
| 4\. | A: Für eine Dynamische IP-Adresse wählen Sie die Option DHCP (1). Hinweis: In den meisten Fällen ist diese Konfiguration die richtige, wenn der BactoSense an einen Router oder einen Switch angeschlossen ist.<br /><br />B: Für eine Statische IP-Adresse wählen Sie die Option DHCP (1) ab und geben Sie Ihre gewünschte Netzwerkkonfiguration von Hand ein (2). Hinweis: In den meisten Fällen ist diese Konfiguration die richtige, wenn der BactoSense mittels Ethernet direkt an einen Computer angeschlossen ist. Stellen Sie sicher, dass auch der Computer über die korrekte Netzwerkkonfiguration verfügt. | ![BactoSense — Netzwerkkonfiguration](/img/gui/de/network-configuration.png "width=260") |
| 5\. | Drücken Sie die Taste Speichern. |  |
| 6\. | Drücken Sie die Taste Jetzt neu starten. |  |

## 8.7 NTP-Server einstellen {#section-8-7}

Das Network Time Protocol (NTP) synchronisiert die Uhrzeit von Computern über ein Netzwerk. Standardmäßig erfolgt die Synchronisierung mit den Servern der Network Time Foundation (ntp.org). Eigene NTP-Server können Sie festlegen im Menü *Datum und Zeit*.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1\. | Drücken Sie als Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. | ![BactoSense — Schaltfläche Einstellungen](/img/gui/de/home-settings-button.png "width=57 class=manual-icon-settings-button-half") |
| 2\. | Drücken Sie die Taste Einstellungen. | ![BactoSense — Systemeinstellungen](/img/gui/icons/system-settings-button.png "width=48 class=manual-icon") |
| 3\. | Drücken Sie die Taste Datum und Zeit. | ![BactoSense — Datum und Uhrzeit](/img/gui/icons/date-time-button.png "width=48 class=manual-icon") |
| 4\. | Drücken Sie die Taste Einstellungen zur Zeitsynchronisation. | ![BactoSense — Datum und Uhrzeit](/img/gui/de/date-and-time-settings.png "width=261") |
| 5\. | Wählen Sie die gewünschte Synchronisationsquelle. | :::info[Zusätzliche Informationen] Die Uhrzeit kann über einen NTP-Server oder Modbus TCP synchronisiert werden. Weitere Informationen zu Modbus TCP finden Sie unter [Modbus-TCP](../field-bus-interface/#section-7-1). ::: |
| 6\. | NTP-Server aktualisieren. | ![BactoSense — Zeitsynchronisation](/img/gui/de/time-synchronization-settings.png "width=261") |
| 7 | Drücken Sie die Taste OK. | :::info[Zusätzliche Informationen] Drücken Sie NTP testen, um die Erreichbarkeit der konfigurierten Server zu prüfen. Drücken Sie OK, um die Synchronisationseinstellungen zu speichern. ::: |

## 8.8 Die Benutzeroberfläche des BactoSense {#section-8-8}

### 8.8.1 Allgemeine Struktur, Startseite und Einstellungsmenü {#section-8-8-1}

![BactoSense — Übersicht der Startseite](/img/gui/de/home-overview.png "width=587")

*Abbildung 8-4 Die Startseite der Benutzeroberfläche des BactoSense.*

Die Startseite zeigt das letzte Messergebnis. Drücken Sie Einstellungen, um das Einstellungsmenü zu öffnen.

Die Benutzeroberfläche des BactoSense ist in drei Hauptabschnitte unterteilt:

|  |  |
| --- | --- |
| A | Obere Leiste |
| B | Inhaltsansicht |
| C | Aktionsleiste |

Die Hauptelemente der Benutzeroberfläche sind:

<div className="manual-ui-elements-scroll manual-ui-elements">

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Home- oder Return-Taste. Zur Navigation durch das Menü. | 2 | Betriebsart (Manuell oder Online) Gerätestatus (aktuell aktiver Prozess) |
| 3 | Aktuelle Ansicht | 4 | Die Symbole auf der oberen Leiste werden unter [Die Symbole auf der oberen Leiste](../general-operations-and-configurations/#section-8-8-2) vorgestellt. |
| 5 | Benutzerrolle Aktuelle Uhrzeit | 6 | Ausloggen oder Abschalten |
| 7 | Resultate: Messergebnisse des gewählten Modus anzeigen. | 8 | Modus: Wählen Sie den Online-Modus für fortlaufende Messungen mit dem Online-Probenahmegerät oder den manuellen Modus für Einzelproben mit dem manuellen Probenahmegerät. |
| 9 | Messen: Messassistenten öffnen und ein Analyseprotokoll wählen (manueller Modus). |  | \< |

</div>

Abhängig von der Benutzerrolle können bestimmte Optionen ausgeblendet oder deaktiviert sein.

### 8.8.2 Die Symbole auf der oberen Leiste {#section-8-8-2}

Die Symbole auf der oberen Leiste finden Sie am oberen Rand der Anzeige. Sie zeigen den Gerätestatus an.

*Tabelle 8-2 Symbole auf der oberen Leiste*

| SYMBOL | BESCHREIBUNG | SYMBOL | BESCHREIBUNG |
| --- | --- | --- | --- |
| ![BactoSense — Prozess läuft](/img/gui/icons/process-running-status.png "width=32 class=manual-icon") | Prozess läuft | ![BactoSense — Demomodus aktiv](/img/gui/icons/demo-mode-status.png "width=32 class=manual-icon") | Demo-Modus aktiviert |
| ![BactoSense — Kartusche fast leer](/img/gui/icons/cartridge-almost-empty-status.png "width=32 class=manual-icon") | Kartusche fast leer | ![BactoSense — Wartung erforderlich](/img/gui/icons/service-required-status.png "width=32 class=manual-icon") | Wartung erforderlich (siehe [Wartung](15-maintenance.md)) |
| ![BactoSense — Kartusche läuft bald ab](/img/gui/icons/cartridge-almost-expired-status.png "width=32 class=manual-icon") | Kartusche läuft bald ab | ![BactoSense — Kartuschenfüllstand](/img/gui/icons/cartridge-level-status.png "width=32 class=manual-icon") | Kartuschenfüllstandsanzeige |
| ![BactoSense — Kartusche nicht bereit](/img/gui/icons/cartridge-not-ready-status.png "width=32 class=manual-icon") | Kartusche nicht korrekt initialisiert oder keine Kartusche vorhanden | ![BactoSense — Kartusche leer](/img/gui/icons/cartridge-empty-status.png "width=32 class=manual-icon") | Kartusche leer |
| ![BactoSense — Kritischer Fehler](/img/gui/icons/critical-error-status.png "width=32 class=manual-icon") | Kritischer Fehler ([Kritische Fehler](16-warnings-errors-and-troubleshooting.md#section-16-3)) | ![BactoSense — Kartusche abgelaufen](/img/gui/icons/cartridge-expired-status.png "width=32 class=manual-icon") | Kartusche abgelaufen |
| ![BactoSense — Alarm aktiv](/img/gui/icons/alarm-status.png "width=32 class=manual-icon") | Alarm bei der letzten Messung (nur im Online-Modus, siehe [Alarmkonfiguration](08-general-operations-and-configurations.md#section-8-5)) | ![BactoSense — Unkritischer Fehler](/img/gui/icons/noncritical-error-status.png "width=32 class=manual-icon") | Unkritischer Fehler ([Unkritische Fehler](16-warnings-errors-and-troubleshooting.md#section-16-2)) |

## 8.9 Handhabung von Kartuschen {#section-8-9}

Die BactoSense-Kartuschen enthalten die Reagenzien für Messungen und die Reinigung des Geräts. Verfügbare Kartuschentypen sind TCC (Gesamtzellzahl), ICC (Intaktzellzahl), EBC (E.-coli-Zellzahl), ACC (Anzahl aktiver Zellen), CBC (Anzahl coliformer Zellen) und NBC (Enterokokken-Zellzahl). Die folgenden Abschnitte erklären die Handhabung der Kartuschen. Lagerung, Transport und Wiederbefüllung sind unter [Lagerung, Transport und Entsorgung](17-storage-transport-and-disposal.md) beschrieben.

### 8.9.1 Allgemeine Hinweise zur Handhabung von Kartuschen {#section-8-9-1}

Beim Arbeiten mit der Kartusche müssen die folgenden Anweisungen beachtet werden:

*Tabelle 8-3 Anweisungen zur Handhabung von Kartuschen*

|  |  |  |  |
| --- | --- | --- | --- |
| ![Bitte halten Sie sich an die in dieser Anleitung beschriebenen Vorgehensweisen.](/img/manual/cell-28af480709ce.png "width=31 class=cartridge-handling-icon-31") | Bitte halten Sie sich an die in dieser Anleitung beschriebenen Vorgehensweisen. | ![Abbildung zum Arbeitsschritt, gedruckte Seite 73](/img/manual/asset-32c675a70f3d.png "width=24 class=cartridge-handling-icon-24") | Lagern und transportieren zwischen 15 °C – 25 °C (59 °F – 77 °F). Die optimale Temperatur beträgt 15 °C (59 °F). |
| ![Tragen Sie beim Arbeiten mit der Kartusche Nitrilhandschuhe.](/img/safety/gloves.svg "width=31 class=cartridge-handling-icon-31") | Tragen Sie beim Arbeiten mit der Kartusche Nitrilhandschuhe. | ![Abbildung zum Arbeitsschritt, gedruckte Seite 73](/img/manual/asset-65d703b8ec50.png "width=24 class=cartridge-handling-icon-24") | Lagern und transportieren zwischen 20 % and 60 % relativer Luftfeuchtigkeit. |
| ![Tragen Sie beim Umgang mit der Kartusche eine Schutzbrille.](/img/manual/cell-d6353e538e2e.png "width=31 class=cartridge-handling-icon-31") | Tragen Sie beim Umgang mit der Kartusche eine Schutzbrille. | ![Die Kartusche ist zur Wiederbefüllung vorgesehen.](/img/manual/cell-a80baea9abca.png "width=29 class=cartridge-handling-icon-29") | Die Kartusche ist zur Wiederbefüllung vorgesehen. |
| ![In der angegebenen Ausrichtung transportieren, installieren und lagern.](/img/manual/cell-7ac996bd1fed.png "width=31 class=cartridge-handling-icon-31") | In der angegebenen Ausrichtung transportieren, installieren und lagern. | ![Werfen Sie die Kartusche nicht in den Hausmüll.](/img/manual/cell-bc083b74fc3c.png "width=29 class=cartridge-handling-icon-29") | Werfen Sie die Kartusche nicht in den Hausmüll. |

### 8.9.2 Füllstand und Ablaufdatum der Kartusche überprüfen {#section-8-9-2}

Der Füllstand und das Ablaufdatum der Kartusche können an mehreren Stellen abgelesen werden.

- Das Kartuschensymbol in der oberen Leiste der Benutzeroberfläche zeigt ständig den ungefähren Füllstand der Kartusche. Ist das Ablaufdatum der Kartusche fast erreicht, so wird dies ebenfalls durch dieses Symbol angezeigt. Die verschiedenen Symbole werden unter [Die Symbole auf der oberen Leiste](08-general-operations-and-configurations.md#section-8-8-2) erklärt.
- Für weitere Informationen drücken Sie auf der *Startseite* zuerst *Einstellungen* und anschließend *Informationen*. Unter *Cartridge capacity remaining (Verbleibender Kartuschenfüllstand)* sehen Sie den verbleibenden Füllstand in Prozent. Unter *Ablaufdatum der Kartusche* sehen Sie das Ablaufdatum der Kartusche. Dieselben Informationen sind auch über die Web-Oberfläche abrufbar (siehe [Web-Benutzeroberfläche](13-web-user-interface.md)).

### 8.9.3 Kartuschenübersicht {#section-8-9-3}

Die BactoSense-Kartusche wird im Gerät in einem separaten Kartuschenfach untergebracht. Das Kartuschenfach wird von einer Tür verschlossen. Diese Tür ist für das Entfernen bzw. Einsetzen von Kartuschen zu öffnen.

![Abbildung aus dem Originalhandbuch, gedruckte Seite 74](/img/manual/asset-f8b0a7f1f4e5.png "width=381")

*Abbildung 8-5 Das BactoSense-Kartuschenfach lässt sich durch Entfernen von zwei 7-mm-Sechskantmuttern* *mit dem mitgelieferten Steckschlüssel öffnen.*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | 7mm-Sechskantschrauben sichern die Kartuschenfachtür | 2 | Kartuschenfachtür |

:::caution[Passendes Werkzeug für die Tür verwenden]

Öffnen und schließen Sie die Kartuschenfachtür nur mittels des dedizierten 7mm- Sechskant-Steckschlüssel.

:::

Nach dem Öffnen der Kartuschenfachtür hat der Benutzer Zugriff auf die Kartusche und die Anschlüsse, mit der die Kartusche an den BactoSense angeschlossen wird.

![Abbildung aus dem Originalhandbuch, gedruckte Seite 75](/img/manual/asset-8e1d2269e91e.png "width=659")

*Abbildung 8-6 Übersicht einer eingesetzten Kartusche. Die Kartusche wird oben durch einen* *Fixierriegel (4) gesichert und über mehrere Flüssigkeitsanschlüsse (5 –* *- 8) sowie einen elektronischen Anschluss (9) mit dem Gerät verbunden. Ist keine Kartusche eingesetzt, können die Flüssigkeits- und elektronischen*  *Anschlüsse im entnehmbaren Steckerhalter (10) gesichert werden.*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | BactoSense-Gerät | 2 | Kartusche |
| 3 | Kartuschengriff | 4 | Kartuschenfixierriegel |
| 5 | Farbstoffanschluss (grün) | 6 | Bleichmittelanschluss (rot) |
| 7 | Abwasseranschluss (schwarz oder beige) | 8 | Spülungsanschluss (blau) |
| 9 | Elektronischer Anschluss | 10 | Entnehmbarer Steckerhalter |
| 11 | Kartuschenfachtür |  | \< |

:::caution[Unbenutzten Anschluss schützen]

Der BactoSense hat fünf fluidische Anschlüsse. Je nach Kartuschentyp werden nur vier oder alle fünf fluidischen Anschlüsse benötigt. Bei TCC- oder ICC-Kartuschen ist darauf zu achten, dass der unbenutzte fünfte Anschluss immer am Steckerhalter montiert ist, um Kontaminationen zu vermeiden.

:::

### 8.9.4 Kartuschen wechseln {#section-8-9-4}

Im Folgenden wird der Prozess des Kartuschenwechsels beschrieben. Folgen Sie dieser Prozedur, wenn Sie eine Kartusche entfernen und sofort durch eine neue ersetzen wollen. Möchten Sie nur die vorhandene Kartusche entnehmen, ohne eine neue einzusetzen, folgen Sie den Anweisungen unter [Entfernen einer Kartusche](08-general-operations-and-configurations.md#section-8-9-5). Die Dauer des Kartuschenwechselprozesses beträgt ungefähr 35 min.

:::caution[Kartuschenassistenten befolgen]

Befolgen Sie das Verfahren des Bildschirmassistenten genau. **Entfernen oder installieren Sie Kartuschen niemals ohne dieses Verfahren.**

:::

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1\. | Halten Sie die akklimatisierte Ersatzkartusche bereit. |  |
| 2\. | Drücken Sie auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |  |
| 3\. | Drücken Sie die Taste Wartung. | Basic-Benutzer überspringen diesen Schritt. |
| 4\. | Drücken Sie die Taste Kartusche wechseln. |  |
| 5\. | Wählen Sie Kartusche wechseln. |  |
| 6\. | :::warning[Kartuschenassistenten befolgen] Bestätigen Sie, dass Sie den Anweisungen des Bildschirmassistenten folgen. Öffnen Sie die Kartuschenfachtür erst nach entsprechender Aufforderung. Beachten Sie die allgemeinen Hinweise zur Kartuschenhandhabung unter [Allgemeine Hinweise zur Handhabung von Kartuschen](../general-operations-and-configurations/#section-8-9-1). Tragen Sie Nitrilhandschuhe und eine Schutzbrille. Verschließen Sie die Flüssigkeitsanschlüsse der alten Kartusche vor dem Entfernen fest mit den angebrachten Verschlüssen. Stellen Sie abschließend sicher, dass die Kartuschenfachtür fest geschlossen und gesichert ist. ::: | :::warning[Kartuschenassistenten überspringen] Nur sehr erfahrene Benutzer, die die sichere Kartuschenhandhabung beherrschen, dürfen die Bildschirmanweisungen überspringen. Bei TCC- und ICC-Kartuschen muss der unbenutzte fünfte Anschluss immer im Steckerhalter befestigt sein, um Verunreinigungen zu vermeiden. ::: |
| 7\. | Handhabung der entnommenen Kartusche: • Beachten Sie zur Lagerung die Hinweise unter [Lagerung der Kartusche](../storage-transport-and-disposal/#section-17-1-3). • Beachten Sie zur Wiederbefüllung die Hinweise unter [Rückgabe einer Kartusche zur Wiederbefüllung](../storage-transport-and-disposal/#section-17-3-2). |  |

### 8.9.5 Entfernen einer Kartusche {#section-8-9-5}

Diese Beschreibung behandelt das Entfernen einer Kartusche ohne das sofortige Einsetzen einer neuen. Möchten Sie Ihre Kartusche austauschen, folgen Sie bitte den Schritten unter [Kartuschen wechseln](08-general-operations-and-configurations.md#section-8-9-4). Die Dauer des Kartuschenwechselprozesses beträgt ungefähr 5 min.

:::caution[Kartuschenassistenten befolgen]

Befolgen Sie das Verfahren des Bildschirmassistenten genau. **Entfernen oder installieren Sie Kartuschen niemals ohne dieses Verfahren.**

:::

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1\. | Drücken Sie auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |  |
| 2\. | Drücken Sie die Taste Wartung. | Basic-Benutzer überspringen diesen Schritt. |
| 3\. | Drücken Sie die Taste Kartusche wechseln. |  |
| 4\. | Wählen Sie Kartusche entfernen. |  |
| 5\. | :::warning[Kartuschenassistenten befolgen] Bestätigen Sie, dass Sie den Anweisungen des Bildschirmassistenten folgen. Öffnen Sie die Kartuschenfachtür erst nach entsprechender Aufforderung. Beachten Sie die allgemeinen Hinweise zur Kartuschenhandhabung unter [Allgemeine Hinweise zur Handhabung von Kartuschen](../general-operations-and-configurations/#section-8-9-1). Tragen Sie Nitrilhandschuhe und eine Schutzbrille. Verschließen Sie die Flüssigkeitsanschlüsse der alten Kartusche vor dem Entfernen fest mit den angebrachten Verschlüssen. Stellen Sie abschließend sicher, dass die Kartuschenfachtür fest geschlossen und gesichert ist. ::: | :::warning[Kartuschenassistenten überspringen] Nur sehr erfahrene Benutzer, die den sicheren Betrieb von Kartuschen beherrschen, dürfen die Anweisungen auf dem Bildschirm überspringen. ::: |
| 6\. | Handhabung der entnommenen Kartusche: • Beachten Sie zur Lagerung die Hinweise unter [Lagerung der Kartusche](../storage-transport-and-disposal/#section-17-1-3). • Beachten Sie zur Wiederbefüllung die Hinweise unter [Rückgabe einer Kartusche zur Wiederbefüllung](../storage-transport-and-disposal/#section-17-3-2). | Die obere Leiste der Benutzeroberfläche zeigt an, dass keine Kartusche angeschlossen ist. Im Einstellungsmenü ist Wartung hervorgehoben; Basic-Benutzer sehen dort direkt die hervorgehobene Taste Kartusche wechseln.<br />![BactoSense — Kartusche nicht bereit](/img/gui/icons/cartridge-not-ready-status.png "width=30 class=manual-icon") |

### 8.9.6 Einsetzen einer Kartusche {#section-8-9-6}

Dieser Ablauf behandelt den Fall der Installation einer Kartusche, wenn gerade keine Kartusche in den BactoSense eingesetzt ist. Ist bereits eine Kartusche eingesetzt und Sie möchten diese austauschen, folgen Sie bitte den Schritten unter [Kartuschen wechseln](08-general-operations-and-configurations.md#section-8-9-4). Die Dauer des Kartuschenwechselprozesses beträgt ungefähr 30 min.

:::caution[Kartuschenassistenten befolgen]

Befolgen Sie das Verfahren des Bildschirmassistenten genau. **Entfernen oder installieren Sie Kartuschen niemals ohne dieses Verfahren.**

:::

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1\. | Halten Sie die akklimatisierte Ersatzkartusche bereit. |  |
| 2\. | Drücken Sie auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |  |
| 3\. | Drücken Sie die Taste Wartung. | Wenn keine Kartusche eingesetzt ist, wird die Wartungstaste orange hervorgehoben. Basic-Benutzer überspringen diesen Schritt. |
| 4\. | Drücken Sie die Taste Kartusche wechseln. |  |
| 5\. | Wählen Sie Kartusche installieren. |  |
| 6\. | :::warning[Kartuschenassistenten befolgen] Bestätigen Sie, dass Sie den Anweisungen des Bildschirmassistenten folgen. Öffnen Sie die Kartuschenfachtür erst nach entsprechender Aufforderung. Beachten Sie die allgemeinen Hinweise zur Kartuschenhandhabung unter [Allgemeine Hinweise zur Handhabung von Kartuschen](../general-operations-and-configurations/#section-8-9-1). Tragen Sie Nitrilhandschuhe und eine Schutzbrille. Stellen Sie abschließend sicher, dass die Kartuschenfachtür fest geschlossen und gesichert ist. ::: | :::warning[Kartuschenassistenten überspringen] Nur sehr erfahrene Benutzer, die die sichere Kartuschenhandhabung beherrschen, dürfen die Bildschirmanweisungen überspringen. Bei TCC- und ICC-Kartuschen muss der unbenutzte fünfte Anschluss immer im Steckerhalter befestigt sein, um Verunreinigungen zu vermeiden. ::: |
| 7\. | Nachdem Sie sämtliche auf dem Bildschirm gezeigten Schritte durchlaufen haben, haben Sie die neue Kartusche korrekt initialisiert. | Der Kartuschenstatus wird durch das Kartuschensymbol im oberen Teil der BactoSense-Benutzeroberfläche dargestellt, siehe [Die Symbole auf der oberen Leiste](../general-operations-and-configurations/#section-8-8-2). |

## 8.10 Wechseln zwischen Probenahmegeräten {#section-8-10}

Der BactoSense kann sowohl mit dem manuellen als auch mit dem Online- Probenahmegerät betrieben werden. Im Folgenden wird der Prozess des Austauschs des Probenahmegeräts beschrieben. Informationen zur Lagerung eines Probenahmegeräts finden Sie unter [Lagerung der Probenahmegeräte](17-storage-transport-and-disposal.md#section-17-1-2).

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Entfernen Sie das aktuell installierte Probenahmegerät entsprechend den Anweisungen unter [Entfernen des Online-Probenahmegeräts](08-general-operations-and-configurations.md#section-8-10-1) bzw. [Entfernen des manuellen Probenahmegeräts](08-general-operations-and-configurations.md#section-8-10-2) |  |
| 2. | Setzen Sie das neue Probenahmegerät entsprechend den Anweisungen unter [Installation des Online-Probenahmegeräts](05-installation.md#section-5-5) bzw. [Installation des manuellen Probenahmegeräts](05-installation.md#section-5-4) ein |  |

### 8.10.1 Entfernen des Online-Probenahmegeräts {#section-8-10-1}

Wechseln Sie zum manuellen Probenahmegerät, muss das Online-Probenahmegerät entfernt werden. Folgen Sie der untenstehenden Prozedur, um das Gerät sicher zu entfernen und es für die Lagerung vorzubereiten.

:::gloves[Schutzhandschuhe tragen]

Vermeiden Sie die Kontaminierung des Geräts. Tragen Sie beim Hantieren mit Proben, Probenahmegeräten und Komponenten, die damit in Kontakt kommen, Nitrilhandschuhe.

:::

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Schließen Sie eine eventuell noch laufende Messserie ab, wie unter [Automatische Online-Messungen abbrechen](10-measurements.md#section-10-2-2) gezeigt. |
| 2. | Stoppen Sie den Wasserfluss durch das Probenahmegerät und dessen Schläuche. |
| 3. | Schrauben Sie den gerändelten Fixierungsring der Probenahmevorrichtung vorsichtig ab, bis das Probenahmegerät entfernt werden kann. |
| 4. | Entfernen Sie das Online-Probenahmegerät. Stellen Sie sicher, dass der Verschluss am Schlauchanschluss des Probenahmegeräts weiterhin fest sitzt. Tut er dies nicht, könnte er im Probenahmegeräteanschluss des BactoSense zurückgeblieben sein. In diesem Fall entfernen Sie ihn vorsichtig mittels einer Pinzette und setzen Sie ihn zurück in das Probenahmegerät. |
| 5. | Trennen Sie die Einlass- und Auslassschläuche von der Wasserquelle und dem Gehäuse des Probenahmegeräts und lassen Sie sie leerlaufen. |
| 6. | Überprüfen Sie die Einlass- und Auslassschläuche auf Verunreinigungen und Schäden. Verwenden Sie ausschließlich saubere und intakte Schläuche. |
| 7. | Möchten Sie das Probenahmegerät lagern, verwahren Sie das Gerät und die Schläuche separat in sauberen, trockenen Plastikbeuteln und folgen Sie den Anweisungen zur Lagerung unter [Lagerung der Probenahmegeräte](17-storage-transport-and-disposal.md#section-17-1-2). |
| 8. | Um das manuelle Probenahmegerät zu montieren, folgen Sie den Anweisungen unter [Installation des manuellen Probenahmegeräts](05-installation.md#section-5-4). |

### 8.10.2 Entfernen des manuellen Probenahmegeräts {#section-8-10-2}

Wechseln Sie zum Online-Probenahmegerät, muss das manuelle Probenahmegerät entfernt werden. Folgen Sie der untenstehenden Prozedur, um das Gerät sicher zu entfernen und es für die Lagerung vorzubereiten.

:::gloves[Schutzhandschuhe tragen]

Vermeiden Sie die Kontaminierung des Geräts. Tragen Sie beim Hantieren mit Proben, Probenahmegeräten und Komponenten, die damit in Kontakt kommen, Nitrilhandschuhe.

:::

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Reinigen Sie das manuelle Probenahmegerät: Ist eine Washstation verfügbar, folgen Sie den Anweisungen unter [Manuelles Probenahmegerät mit Washstation reinigen](15-maintenance.md#section-15-2-2), andernfalls denen unter [Manuelles Probenahmegerät mittels Basisreinigung reinigen](15-maintenance.md#section-15-2-3). |
| 2. | Nachdem Sie fertig sind, setzen Sie ein sauberes und leeres 5-mL- Schraubverschlussröhrchen bzw. die Washstation auf das Probenahmegerät auf. |
| 3. | Schrauben Sie den gerändelten Fixierungsring oben am Gerät vorsichtig ab, bis das Probenahmegerät entfernt werden kann. |
| 4. | Entfernen Sie das manuelle Probenahmegerät. Stellen Sie sicher, dass der Verschluss am Schlauchanschluss des Probenahmegeräts weiterhin fest sitzt. Tut er dies nicht, könnte er im Probenahmegeräteanschluss des BactoSense zurückgeblieben sein. In diesem Fall entfernen Sie ihn vorsichtig mittels einer Pinzette und setzen Sie ihn zurück in das Probenahmegerät. |
| 5. | Möchten Sie das Probenahmegerät lagern, verwahren Sie das Gerät und die Schläuche separat in sauberen, trockenen Plastikbeuteln und folgen Sie den Anweisungen zur Lagerung unter [Lagerung der Probenahmegeräte](17-storage-transport-and-disposal.md#section-17-1-2). |
| 6. | Um das Online-Probenahmegerät zu montieren, folgen Sie den Anweisungen unter [Installation des Online-Probenahmegeräts](05-installation.md#section-5-5). |

## 8.11 Qualifizierung {#section-8-11}

Um sicherzustellen, dass der BactoSense wie gewünscht funktioniert, ist der Prozess einer Betriebsqualifizierung vonnöten. Es stehen verschiedene Optionen zur Verfügung.

Um eine vollautomatische Schnellprüfung des Gerätestatus durchzuführen, führen Sie den unter [Automatischer Selbsttest](16-warnings-errors-and-troubleshooting.md#section-16-6) beschriebenen Selbsttest durch. Dieser Test benötigt keinerlei Reagenzien oder Benutzeraktionen, läuft schnell ab und überprüft die Integrität und die Kommunikation der verschiedenen Module des BactoSense.

Um die Sauberkeit des BactoSense zu bewerten und eine Verunreinigung auszuschließen, führen Sie die [Überprüfung der Sauberkeit](08-general-operations-and-configurations.md#section-8-11-1) durch.

Verwenden Sie in Betriebsumgebungen, die einen Systemeignungstest erfordern, das *System Suitability Test Kit (SST Kit)* und folgen Sie dem Verfahren in dessen Bedienungsanleitung.

Für andere Betriebsumgebungen wird eine Gerätequalifizierung mit dem *Validierungskit*in folgenden Situationen empfohlen:

- Nach dem Versand des Geräts oder einem anderen Langstreckentransport, bei dem das Gerät Vibrationen oder Stößen ausgesetzt wurde.
- Nachdem das Gerät mehr als einen Monat gelagert wurde.
- Wenn es Hinweise darauf gibt, dass die Messergebnisse fehlerhaft sein könnten.

### 8.11.1 Überprüfung der Sauberkeit {#section-8-11-1}

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Bitte stellen Sie sicher, dass das manuelle Probenahmegerät korrekt gemäß [Installation des manuellen Probenahmegeräts](05-installation.md#section-5-4) installiert ist. |
| 2. | Führen Sie eine Reinigung des Probenahmegeräts mit zwei Replikationen durch: Ist eine Washstation verfügbar, folgen Sie den Anweisungen unter [Manuelles Probenahmegerät mit Washstation reinigen](15-maintenance.md#section-15-2-2), andernfalls denen unter [Manuelles Probenahmegerät mittels Basisreinigung reinigen](15-maintenance.md#section-15-2-3). |
| 3. | Bereiten Sie die Blindprobe in einem 5-mL-Röhrchen mit Schraubverschluss vor. Es gibt zwei Möglichkeiten: A) Verwenden Sie zellfreies Wasser, z. B. ein Aliquot steriler Lösung aus dem Validierungskit. Entfernen Sie hierfür den Deckel des Aliquots und setzen Sie es wie in der Bedienungsanleitung des Validierungskits beschrieben in ein leeres 5-mL-Röhrchen mit Schraubverschluss. B) Filtern Sie stilles Mineralwasser zweimal mit einem Membranfilter mit einer Porengröße von 0.22 µm oder kleiner. |
| 4. | Navigieren Sie zur Startseite der Benutzeroberfläche des BactoSense. |
| 5. | Drücken Sie auf der Startseite Modus und wählen Sie „Manueller Modus“. Drücken Sie Zurück und anschließend Messen, um den Messassistenten zu öffnen. |
| 6. | Wählen Sie Ansaugen aus der Liste der verfügbaren Protokolle. |
| 7. | Drücken Sie die Taste Weiter. |
| 8. | Entfernen Sie den Schlauch bzw. die Washstation vom manuellen Probenahmegerät und bringen Sie die Blindprobe an. |
| 9. | Drücken Sie die Taste Start, um das Ansaugvorgang-Protokoll auszuführen. |
| 10. | Nachdem der Ansaugvorgang abgeschlossen ist, drücken Sie die Taste Neu, um zurück zur Liste der verfügbaren Protokolle zu navigieren. |
| 11. | Wählen Sie Wasseranalyse aus der Liste der verfügbaren Protokolle. |
| 12. | Konfigurieren Sie zwei Replikationen. |
| 13. | Geben Sie einen Probennamen ein, indem Sie in das Textfeld Probenname tippen und nach Eingabe des Namens OK drücken. |
| 14. | Stellen Sie sicher, dass das ICC- oder TCC-Standardgate konfiguriert ist. Ansonsten ändern Sie dies, indem Sie in das Gates-Feld tippen. |
| 15. | Drücken Sie die Taste Weiter. |
| 16. | Drücken Sie die Taste Start und warten Sie, bis die beiden Messungen abgeschlossen sind. |
| 17. | Wenn Sie fertig sind, drücken Sie die Taste Weiter, um sich die Ergebnisse anzusehen. |
| 18. | Vergleichen Sie die Ergebnisse mit den nachstehenden Referenzwerten. Der BactoSense ist sauber, wenn folgende Kriterien erfüllt sind: • TCC-Kartuschen: TCC [/mL] &lt; 300 • ICC-Kartuschen: ICC [/mL] &lt; 100 |
| 19. | Liegen die Zellkonzentrationen über den angegebenen Grenzen, gehen Sie folgendermaßen vor: • Wiederholen Sie das Verfahren mit einer frisch vorbereiteten Blindprobe. • Wiederholen Sie das Verfahren nach einer Dekontaminierung mit dem Reinigungskit (siehe [Verbrauchsmaterial](18-supply-scope-accessories-and-consumables.md#section-18-3)). • Schlägt der Test weiterhin fehl, wenden Sie sich an den bNovate-Support oder Ihren lokalen Servicepartner. |
| 20. | Nachdem Sie fertig sind, setzen Sie ein sauberes und leeres 5-mL- Schraubverschlussröhrchen bzw. die Washstation auf das manuelle Probenahmegerät auf. |

## 8.12 Demo-Modus {#section-8-12}

Der Demomodus kann verwendet werden, um die Funktionen des Geräts zu demonstrieren oder um zu lernen, wie die Navigation durch die Menüs und die Verwendung der Funktionen vonstatten gehen. Wird er aktiviert, startet das Gerät neu in einem besonderen Modus, in dem es Demodaten anzeigt (die Messdaten des Geräts bleiben verborgen). Alle Funktionen des Geräts werden durch Simulationen ersetzt, die nie die Hardware bewegen oder die Ergebnisdatenbank verändern können. Somit können Protokolle gestartet werden, ohne dass eine Probe geladen werden muss. Benutzer können die Löschung oder das Regaten von Ergebnissen simulieren, ohne die gespeicherten Daten zu beeinflussen. Solange der Demomodus aktiv ist, wird oben in der Mitte auf dem Bildschirm ***Demo*** angezeigt. Wird das Gerät in den Normalmodus zurückversetzt, werden die vorhandenen Daten wieder angezeigt und alle Funktionen sind wieder aktiv.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG | \< |
| --- | --- | --- | --- |
| 1\. | Drücken Sie als Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. | ![BactoSense — Schaltfläche Einstellungen](/img/gui/de/home-settings-button.png "width=57 class=manual-icon-settings-button-half") | \< |
| 2\. | Drücken Sie die Taste Einstellungen. Drücken Sie die Taste Demo-Modus. | ![BactoSense — Systemeinstellungen](/img/gui/icons/system-settings-button.png "width=48 class=manual-icon") | ![BactoSense — Einstellungen für den Demomodus](/img/gui/icons/demo-mode-button.png "width=48 class=manual-icon") |
| 3\. | Aktivieren Sie das Kontrollkästchen Demo-Modus aktivieren. |  | \< |
| 4\. | Drücken Sie die Taste Speichern und neu starten. |  | \< |
| 5\. | Das Gerät startet automatisch neu. |  | \< |

Um zum Normalbetrieb zurückzukehren, folgen Sie demselben Verfahren und deaktivieren Sie die Option **Demo-Modus aktivieren** .

## 8.13 Werkseinstellungen {#section-8-13}

Der Factory-Reset setzt die meisten Geräteeinstellungen auf Werkseinstellungen zurück: Gatinggrenzen, Messintervall, Standard-Protokollnamen, Benutzer, Sprache und Netzeinstellungen. Diese Option steht nur Admin- und Servicebenutzern zur Verfügung.

Die folgenden Schritte beschreiben, wie Sie einen Factory-Reset durchführen können.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG | \< |
| --- | --- | --- | --- |
| 1\. | Drücken Sie als Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. | ![BactoSense — Schaltfläche Einstellungen](/img/gui/de/home-settings-button.png "width=57 class=manual-icon-settings-button-half") | \< |
| 2\. | Drücken Sie auf Wartung und dann Werkseinstellungen. | ![BactoSense — Wartungsmenü](/img/gui/icons/maintenance-button.png "width=48 class=manual-icon") | ![BactoSense — Werkseinstellungen wiederherstellen](/img/gui/icons/factory-reset-button.png "width=48 class=manual-icon") |
| 3\. | Wählen Sie mithilfe der Kontrollkästchen die zurückzusetzenden Parameter: • Geräteeinstellungen • Messungen einschließlich Fehler und Protokolle • beides | :::info[Zusätzliche Informationen] Wartungsprotokolle, Validierungsergebnisse und der Softwareaktualisierungsverlauf werden nicht gelöscht. ::: | \< |
| 4\. | Drücken Sie Gerät zurücksetzen und neu starten und bestätigen Sie mit Ja. |  | \< |
