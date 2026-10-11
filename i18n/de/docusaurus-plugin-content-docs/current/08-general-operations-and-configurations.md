---
title: "8. Allgemeiner Betrieb und Konfigurationen"
sidebar_label: "8. Allgemeiner Betrieb und Konfigurationen"
slug: /general-operations-and-configurations
sidebar_position: 8
description: "BactoSense-Bedienungsanleitung: Allgemeiner Betrieb und Konfigurationen."
---

## 8.1 Ein- und Ausschalten {#section-8-1}

Der Einschaltknopf des BactoSense befindet sich auf der rechten Seite des Geräts.

<img src="/img/manual/asset-9b1ae5aeca7f.png" alt="Abbildung aus dem Originalhandbuch, gedruckte Seite 58" width="224" loading="lazy" />

*Abbildung 8-1 Einschaltknopf des BactoSense*

:::warning[Stromversorgung prüfen]

Bevor Sie den BactoSense einschalten, stellen Sie sicher, dass das Gerät mit einer stabilen Spannungsversorgung verbunden ist, welche die Anforderungen aus Abschnitt 5.3 erfüllt.

:::

**Einschalten** Drücken Sie kurz auf den Einschaltknopf, um den BactoSense einzuschalten. Die LED im Einschaltknopf leuchtet dauerhaft. Nach einigen Sekunden erscheint die Begrüßungsseite der Benutzeroberfläche.

**Ausschalten** Wenn Sie angemeldet sind und den BactoSense ausschalten möchten, tippen Sie oben rechts in der Benutzeroberfläche auf die Abmeldetaste und wählen Sie *Power off (Ausschalten)*. Wenn Sie das Gerät direkt von der Anmeldeseite aus ausschalten möchten, halten Sie den Einschaltknopf 10 Sekunden lang gedrückt.

:::warning[Stromversorgung sicher trennen]

Um den BactoSense von der Spannungsversorgung zu trennen, schalten Sie das Gerät zunächst aus. Trennen Sie dann das Netzteil von der Spannungsquelle, bevor Sie das Netzteil vom BactoSense trennen.

:::

## 8.2 Einloggen, Benutzerrollen und Berechtigungen {#section-8-2}

Der Betrieb des BactoSense erfordert es, dass Benutzer sich anmelden. Es sind verschiedene Benutzerrollen mit unterschiedlichen Berechtigungen verfügbar. Die Berechtigungen der Benutzerrollen sind in Abschnitt 8.2.7 aufgeführt. Alle Logins werden durch Kennwörter geschützt.

Login und Logout können mittels der Login-Taste in der oberen rechten Ecke der Benutzeroberfläche initiiert werden. Die aktuell aktive Benutzerrolle wird neben dieser Taste angezeigt.

### 8.2.1 Anmelden {#section-8-2-1}

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Drücken Sie in der oberen rechten Ecke der Benutzeroberfläche die Login-Taste oder auf die Login-Leiste unten, sofern Sie das Gerät eingeschaltet haben. |
| 2. | Für BactoSense CORE in der Standardkonfiguration: Wählen Sie eines der Benutzerprofile Basic, Advanced oder Admin. Für BactoSense CORE mit dem Management Package (siehe Abschnitt 9.2) und aktivierter erweiterter Benutzerverwaltung (siehe Abschnitt 8.2.4): Geben Sie Ihre Benutzerkennung ein. |
| 3. | Geben Sie das Kennwort ein und drücken Sie OK. Kennen Sie Ihr Kennwort nicht, wenden Sie sich bitte an einen Administrator. An einem neuen Gerät sind keine Kennwörter gesetzt. In diesen Fall, folgen Sie bitte den in Abschnitt 8.2.5 beschriebenen Schritten. |
| 4. | Nachdem Sie sich eingeloggt haben, sehen Sie die Benutzeroberfläche des BactoSense. |
| 5. | Um sich auszuloggen, folgen Sie bitte den in Abschnitt 8.2.2 beschriebenen Schritten. |

### 8.2.2 Manueller Logout {#section-8-2-2}

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Stellen Sie sicher, dass alle Prozesse (z.B. Messungen oder Reinigungen) abgeschlossen sind. Der Status „Bereit“ des Geräts wird in der Benutzeroberfläche des BactoSense oben links angezeigt. |
| 2. | Drücken Sie die Taste Logout oben rechts auf der Benutzeroberfläche. |
| 3. | Wählen Sie Ausloggen Bildschirm sperren. |
| 4. | Um sich erneut einzuloggen, folgen Sie bitte den in Abschnitt 8.2.1 beschriebenen Schritten. |

### 8.2.3 Automatisches Abmelden {#section-8-2-3}

Es ist möglich, ein automatisches Logout des Benutzers nach einer vordefinierten Inaktivitätsperiode zu konfigurieren.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1. | Drücken Sie auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |  |
| 2. | Drücken Sie die Taste Systemeinstellungen. |  |
| 3. | Drücken Sie Benutzer. |  |
| 4. | Drücken Sie Einstellungen. |  |
| 5. | Stellen Sie die gewünschte Zeitspanne bis zur automatischen Abmeldung ein. |  |
| 6. | Drücken Sie Speichern. |  |

### 8.2.4 Aktivierung des erweiterten Benutzerverwaltungsmodus {#section-8-2-4}

Mit der Funktion *Erweiterte Benutzerverwaltung* kann ein Geräteadministrator verschiedene Benutzer anlegen und ihnen die Rollen Basic, Advanced oder Admin zuweisen. Dadurch können einzelnen Benutzern unterschiedliche Berechtigungen erteilt und ihre Aktivitäten für den Audit Trail protokolliert werden.

Der erweiterte Benutzerverwaltungsmodus ist für BactoSense SMART und PURE, sowie für BactoSense CORE mit Management-Paket (siehe Abschnitt 9.2) verfügbar.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1. | Drücken Sie auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |  |
| 2. | Drücken Sie die Taste Systemeinstellungen. |  |
| 3. | Drücken Sie auf Systemparameter. |  |
| 4. | Aktivieren Sie den Erweiterten Benutzerverwaltungsmodus. |  |
| 5. | Drücken Sie Speichern. |  |

### 8.2.5 Kennwörter von Benutzerrollen setzen und ändern {#section-8-2-5}

Jede Benutzerrolle ist kennwortgeschützt.

**Kennwort bei der ersten Anmeldung festlegen** Klicken Sie bei der ersten Anmeldung mit einer beliebigen Benutzerrolle auf *OK* , wenn Sie zur Kennworteingabe aufgefordert werden. Dadurch wird der Assistent zum Festlegen Ihres Kennworts gestartet. Einzige Ausnahme ist das Service-Kennwort, für das ein voreingestelltes Kennwort bereitgestellt wird.

**Kennwörter festlegen und ändern** Jedes Benutzerprofil kann sein eigenes Kennwort ändern. Admin-Benutzer dürfen auch die Kennwörter anderer Benutzerprofile ändern. Das folgende Verfahren beschreibt die Kennwortänderung.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Drücken Sie auf der Startseite Einstellungen und anschließend im Menü Einstellungen (Systemeinstellungen). |  |
| 2. | Drücken Sie auf Benutzer und wählen Sie dann das zu bearbeitende Benutzerprofil. Nachdem Sie ein Kästchen angehakt haben, drücken Sie Bearbeiten. | Administratoren sind auch berech- tigt, die Kennwörter anderer Benutzer zu ändern. |
| 3. | Drücken Sie auf PIN ändern, geben Sie die neue PIN zweimal ein und drücken Sie Speichern. |  |

### 8.2.6 Änderung von Kennworteinstellungen {#section-8-2-6}

Kennworteigenschaften wie Gültigkeitsdauer, Länge usw. können eingestellt werden.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1. | Drücken Sie auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |  |
| 2. | Drücken Sie die Taste Systemeinstellungen. |  |
| 3. | Drücken Sie Benutzer. |  |
| 4. | Drücken Sie Einstellungen. |  |
| 5. | Konfigurieren Sie die Kennworteigenschaften gemäss Ihren Anforderungen. |  |
| 6. | Drücken Sie Speichern. |  |

### 8.2.7 Benutzerrollen und Berechtigungen {#section-8-2-7}

*Tabelle 8-1 Benutzerrollen und Berechtigungen*

| BERECHTIGUNG | BASIC | ADVANCED | ADMIN |
| --- | --- | --- | --- |
| Letztes Ergebnis anzeigen | ✓ | ✓ | ✓ |
| Alle Ergebnisse anzeigen und exportieren | ✓ | ✓ | ✓ |
| Messungen starten, stoppen und planen | ✓ | ✓ | ✓ |
| Zwischen Auto- und manuellem Modus umschalten | ✓ | ✓ | ✓ |
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

| BERECHTIGUNG | BASIC | ADVANCED | ADMIN |
| --- | --- | --- | --- |
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

## 8.3 Basiskonfiguration {#section-8-3}

### 8.3.1 Sprache der Benutzeroberfläche {#section-8-3-1}

Die Sprache kann nur durch Administratoren geändert werden.

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Drücken Sie auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |
| 2. | Drücken Sie Systemeinstellungen und drücken Sie dann Sprache. |
| 3. | Wählen Sie die gewünschte Sprache aus und drücken Sie die OK-Taste. |
| 4. | Es erscheint eine Meldung, die ein Neuladen der Benutzeroberfläche anfordert. Bestätigen Sie diese Meldung. |

### 8.3.2 Datum und Uhrzeit {#section-8-3-2}

Datum und Uhrzeit können nur durch Administratoren geändert werden.

:::info[Automatische Zeitsynchronisierung]

Ist die Zeitsynchronisierung über NTP-Server oder Modbus TCP aktiviert, werden manuell eingestellte Datums- und Uhrzeitwerte bei der nächsten Synchronisierung überschrieben. Die Einstellungen finden Sie unter *System settings* > *Date & Time* > *Time synchronization settings*. Die Einrichtung eines NTP-Servers ist in Abschnitt 8.7 beschrieben.

:::

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Drücken Sie auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |
| 2. | Drücken Sie die Taste Systemeinstellungen. |
| 3. | Drücken Sie die Taste Datum & Uhrzeit. |
| 4. | Geben Sie Datum und Uhrzeit ein. |
| 5. | Wählen Sie die Zeitzone aus. |
| 6. | Drücken Sie die Taste Setzen. |

### 8.3.3 Gerätename {#section-8-3-3}

Die Gerätename kann nur durch Administratoren geändert werden.

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Drücken Sie auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |
| 2. | Drücken Sie die Taste Systemeinstellungen. |
| 3. | Drücken Sie auf Systemparameter. |
| 4. | Drücken Sie die Taste Gerätename. |
| 5. | Geben Sie in das Eingabefeld Ihren gewünschten Gerätenamen ein. |
| 6. | Drücken Sie die Taste Speichern. |

### 8.3.4 Automatisches Einschalten {#section-8-3-4}

Der BactoSense verfügt über eine Funktion zum automatischen Einschalten, um nach Unterbrechungen der Spannungsversorgung automatisch starten zu können. Abhängig von der Konfiguration kann das Gerät einfach neustarten, aber auch in den Betrieb übergehen, indem es sich reinigt und eine automatische Messserie startet.

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Drücken Sie als Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |
| 2. | Drücken Sie die Taste Systemeinstellungen. |
| 3. | Drücken Sie auf Systemparameter. |
| 4. | Wählen Sie Ihre bevorzugten Einstellungen zum automatischen Einschalten aus. Hinweis: Die Selbstreinigung findet nur statt, wenn die Spannungsversorgung während einer Messung unterbrochen wurde. |
| 5. | Drücken Sie die Taste Speichern. |

### 8.3.5 Tonbenachrichtigungen {#section-8-3-5}

Sie können hörbare Benachrichtigungen aktivieren, um das Ende einer Messung oder einer Wartung oder einen Alarm oder einen Fehler bekanntzugeben. Die Benachrichtigung besteht aus einem oder mehreren Pieptönen des Geräts.

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Drücken Sie als Admin-Benutzer auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |
| 2. | Drücken Sie die Taste Systemeinstellungen. |
| 3. | Drücken Sie auf Systemparameter. |
| 4. | Aktivieren Sie die Option Soundbenachrichtigungen. |
| 5. | Drücken Sie die Taste Speichern. |

## 8.4 Import/Export von Einstellungen {#section-8-4}

Die Einstellungen werden gemäß Abschnitt 12.1.1 auf einen USB-Datenträger exportiert. Sie werden in einer Datei mit Zeitstempel und der Endung **.bnv** zusammengefasst. Um die Einstellungen auf einem neuen Gerät oder als Sicherung zu importieren, kopieren Sie die **.bnv**-Datei in das Stammverzeichnis des USB-Datenträgers oder in das Verzeichnis, in das sie exportiert wurde. Befinden sich mehrere Kopien der Einstellungen auf einem USB-Datenträger, verwendet das System die neueste.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG |
| --- | --- | --- |
| 1. | Drücken Sie auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. | <img src="/img/manual/asset-c4707aba8b28.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 66" width="73" loading="lazy"/> |
| 2. | Drücken Sie im Einstellungsmenü auf Wartung. | <img src="/img/manual/asset-41c98df7efd4.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 66" width="72" loading="lazy"/> |
| 3. | Drücken Sie die Taste Spezial-Export/- Import. | <img src="/img/manual/asset-e8682259cb34.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 66" width="73" loading="lazy"/> |
| 4. | Schließen Sie einen USB-Datenträger an. Bei Bedarf drücken Sie die Taste USB- Liste aktualisieren, bis das Gerät erkannt wird. | Stellen Sie sicher, dass die *.bnv-Datei sich im Stammverzeichnis des USB- Datenträgers befindet. Der USB-Datenträger muss FAT32- formatiert sein, was normalerweise der Fall ist. |
| 5. | Drücken Sie Einstellungen importieren | <img src="/img/manual/asset-f4dd80d89669.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 66" width="263" loading="lazy"/> |
| 6. | Wählen Sie die zu importierenden Einstellungen. Die Messeinstellungen umfassen Gating-Sets, I/O-Einstellungen, Alarme sowie Datum und Uhrzeit. Die Netzwerkeinstellungen umfassen IP-, DNS- und NTP-Adressen. | <img src="/img/manual/asset-3445f2d05cf6.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 66" width="269" loading="lazy"/> |
| 7. | Drücken Sie Einstellungen importieren und warten Sie, bis das Gerät neustartet |  |

## 8.5 Alarmkonfiguration {#section-8-5}

Auf Alarme finden die folgenden Regeln Anwendung:

- Nur **Advanced** und **Admin** Benutzer können die Alarmeinstellungen ändern.
- Alarme sind nur aktiv im **Auto-Modus**.

BactoSense zeichnet Alarme auf die folgenden Weisen auf:

- In der Benutzeroberfläche erscheint ein Popup
- In der oberen Leiste erscheint ein Alarmglockensymbol, wenn bei der letzten Messung der Alarmgrenzwert überschritten wurde. Der Alarm wird in der Messungszusammenfassung gezeigt, wenn ein Ergebnis angesehen wird..
- Über die (konfigurierbaren) digitalen Ausgänge kann ein Signal an einen PLC geschickt werden.

<img src="/img/manual/asset-8dd01c5c0a3f.png" alt="Abbildung aus dem Originalhandbuch, gedruckte Seite 67" width="517" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Beispiel-Screenshot" width="32" loading="lazy" />

*Abbildung 8-2 Alarmkonfiguration in der Benutzeroberfläche des BactoSense.*

<table><tbody><tr><td>1</td><td>Alarme auswählen, aktivieren oder deaktivieren. Es können bis zu 9 Alarme konfiguriert werden.</td><td>2</td><td>Name des aktuell ausgewählten Alarms.</td></tr><tr><td>3</td><td>Alarmquelle: Welches Messergebnis ausgewertet werden soll. Siehe Abbildung 8-3.</td><td>4</td><td>Bedingung: Alarm auslösen, wenn der gemessene Parameter größer (>) oder kleiner (&lt;) als der Grenzwert ist.</td></tr><tr><td>5</td><td>Grenzwert</td><td>6</td><td>Anzeige: Bei aktivierter Option wird im Diagramm des Auto-Modus eine Linie in der gewählten Farbe angezeigt.</td></tr></tbody></table>

<img src="/img/manual/asset-1ac20898071f.png" alt="Abbildung aus dem Originalhandbuch, gedruckte Seite 68" width="581" loading="lazy" />

*Abbildung 8-3 BactoSense-Alarmquellen. Für eine ausgewählte Quelle werden eine Bedingung und ein Grenzwert festgelegt.* *Im obigen Beispiel wird bei einem bestimmten Kartuschenfüllstand ein Alarm ausgelöst.*

Die folgenden Schritte beschreiben, wie Sie den Alarm konfigurieren können.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Drücken Sie auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen. |  |
| 2. | Drücken Sie die Taste Einstellungen des Auto-Modus. |  |
| 3. | Drücken Sie Alarme. |  |
| 4. | Aktivieren, wählen und konfigurieren Sie die Alarme entsprechend Abbildung 8-2 und Abbildung 8-3. | Standardmäßig sind keine Alarme aktiviert. |
| 5. | Drücken Sie Speichern, um die Alarmkonfiguration zu speichern. |  |

## 8.6 Netzwerkkonfiguration {#section-8-6}

:::info[Netzwerkeinstellungen]

Bitte fragen Sie Ihren Netzwerkadministrator nach den korrekten Einstellungen.

:::

<table><tbody><tr><th></th><th>ARBEITSSCHRITT</th><th>ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG</th></tr><tr><td>1.</td><td>Drücken Sie auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen.</td><td><img src="/img/manual/asset-c4707aba8b28.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 69" width="73" loading="lazy" /></td></tr><tr><td>2.</td><td>Drücken Sie die Taste Systemeinstellungen.</td><td><img src="/img/manual/asset-a7a911718f1c.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 69" width="73" loading="lazy" /></td></tr><tr><td>3.</td><td>Drücken Sie die Taste Netzwerk.</td><td><img src="/img/manual/asset-74d2c341d686.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 69" width="73" loading="lazy" /></td></tr><tr><td rowSpan="2">4.</td><td>A: Für eine Dynamische IP-Adresse wählen Sie die Option DHCP (1). Hinweis: In den meisten Fällen ist diese Konfiguration die richtige, wenn der BactoSense an einen Router oder einen Switch angeschlossen ist.</td><td rowSpan="2"><img src="/img/manual/asset-d8ec1a3e87c6.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 69" width="260" loading="lazy" /></td></tr><tr><td>B: Für eine Statische IP-Adresse wählen Sie die Option DHCP (1) ab und geben Sie Ihre gewünschte Netzwerkkonfiguration von Hand ein (2). Hinweis: In den meisten Fällen ist diese Konfiguration die richtige, wenn der BactoSense mittels Ethernet direkt an einen Computer angeschlossen ist. Stellen Sie sicher, dass auch der Computer über die korrekte Netzwerkkonfiguration verfügt.</td></tr><tr><td>5.</td><td>Drücken Sie die Taste Speichern.</td><td></td></tr><tr><td>6.</td><td>Drücken Sie die Taste Jetzt neu starten.</td><td></td></tr></tbody></table>

## 8.7 NTP-Server einstellen {#section-8-7}

Das Network Time Protocol (NTP) synchronisiert die Uhrzeit von Computern über ein Netzwerk. Standardmäßig erfolgt die Synchronisierung mit den Servern der Network Time Foundation (ntp.org). Eigene NTP-Server können Sie festlegen im Menü *Datum und Uhrzeit*.

<table><tbody><tr><th></th><th>ARBEITSSCHRITT</th><th>ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG</th></tr><tr><td>1.</td><td>Drücken Sie auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen.</td><td><img src="/img/manual/asset-c4707aba8b28.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 70" width="73" loading="lazy" /></td></tr><tr><td>2.</td><td>Drücken Sie die Taste Systemeinstellungen.</td><td><img src="/img/manual/asset-a7a911718f1c.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 70" width="73" loading="lazy" /></td></tr><tr><td>3.</td><td>Drücken Sie die Taste Datum & Uhrzeit.</td><td><img src="/img/manual/asset-a42806c7c455.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 70" width="73" loading="lazy" /></td></tr><tr><td>4.</td><td>Drücken Sie die Taste Uhrzeit- Synchronisierungseinstellungen.</td><td><img src="/img/manual/asset-53a90550e48e.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 70" width="261" loading="lazy" /></td></tr><tr><td>5.</td><td>Wählen Sie die gewünschte Synchronisierungsquelle (Sync Source).</td><td><Admonition type="info" title="Zusätzliche Informationen">Die Uhrzeit kann über einen NTP-Server oder Modbus TCP synchronisiert werden. Weitere Informationen zu Modbus TCP finden Sie in Abschnitt 7.1.</Admonition></td></tr><tr><td>6.</td><td>NTP-Server aktualisieren.</td><td><img src="/img/manual/asset-ac0fbb8d54d0.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 70" width="261" loading="lazy" /></td></tr><tr><td>7</td><td>Drücken Sie die Taste OK.</td><td><Admonition type="info" title="Zusätzliche Informationen">Wenn Sie eine Serveradresse bearbeiten und OK drücken, wird der Server automatisch angepingt und Datum und Uhrzeit werden aktualisiert.</Admonition></td></tr></tbody></table>

## 8.8 Die Benutzeroberfläche des BactoSense {#section-8-8}

### 8.8.1 Allgemeine Struktur und Startseite {#section-8-8-1}

<img src="/img/manual/asset-7301dbe18d0b.png" alt="Abbildung aus dem Originalhandbuch, gedruckte Seite 71" width="587" loading="lazy" />

*Abbildung 8-4 Die Startseite der Benutzeroberfläche des BactoSense.*

Die Startseite zeigt das letzte Messergebnis. Drücken Sie Einstellungen, um das Einstellungsmenü zu öffnen.

Die Benutzeroberfläche des BactoSense ist in drei Hauptabschnitte unterteilt:

<table><tbody><tr><td>A</td><td>Obere Leiste</td></tr><tr><td>B</td><td>Inhaltsansicht</td></tr><tr><td>C</td><td>Aktionsleiste</td></tr></tbody></table>

Die Hauptelemente der Benutzeroberfläche sind:

<table><tbody><tr><td>1</td><td>Home- oder Return-Taste. Zur Navigation durch das Menü.</td><td>2</td><td>Betriebsart (Manuell oder Online/Auto) Gerätestatus (aktuell aktiver Prozess)</td></tr><tr><td>3</td><td>Aktuelle Ansicht</td><td>4</td><td>Die Symbole auf der oberen Leiste werden in 8.8.2 vorgestellt.</td></tr><tr><td>5</td><td>Benutzerrolle Aktuelle Uhrzeit</td><td>6</td><td>Ausloggen oder Abschalten</td></tr><tr><td>7</td><td>Resultate: Messergebnisse des gewählten Modus anzeigen.</td><td>8</td><td>Modus: Wählen Sie den Online-Modus (Auto) für fortlaufende Messungen mit dem Online-Probenahmegerät oder den manuellen Modus für Einzelproben mit dem manuellen Probenahmegerät.</td></tr><tr><td>9</td><td>Messen: Messassistenten öffnen und ein Analyseprotokoll wählen (manueller Modus).</td><td colSpan="2"></td></tr></tbody></table>

Abhängig von der Benutzerrolle können bestimmte Optionen ausgeblendet oder deaktiviert sein.

### 8.8.2 Die Symbole auf der oberen Leiste {#section-8-8-2}

Die Symbole auf der oberen Leiste finden Sie am oberen Rand der Anzeige. Sie zeigen den Gerätestatus an.

*Tabelle 8-2 Symbole auf der oberen Leiste*

| SYMBOL | BESCHREIBUNG | SYMBOL | BESCHREIBUNG |
| --- | --- | --- | --- |
| <img src="/img/manual/asset-dc77eba566ee.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 72" width="40" loading="lazy"/> | Prozess läuft | <img src="/img/manual/asset-0a659e5a284a.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 72" width="40" loading="lazy"/> | Demo-Modus aktiviert |
| <img src="/img/manual/asset-f8c9ed6e595a.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 72" width="41" loading="lazy"/> | Kartusche fast leer | <img src="/img/manual/cell-c721cca85bf4.png" alt="Wartung erforderlich (siehe Kapitel 15)" width="60" loading="lazy"/> | Wartung erforderlich (siehe Kapitel 15) |
| <img src="/img/manual/asset-c3efc86358a9.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 72" width="41" loading="lazy"/> | Kartusche läuft bald ab | <img src="/img/manual/cell-7b30939634a3.png" alt="Kartuschenfüllstandsanzeige" width="60" loading="lazy"/> | Kartuschenfüllstandsanzeige |
| <img src="/img/manual/cell-7bf18abd5784.png" alt="Kartusche nicht korrekt initialisiert oder keine Kartusche vorhanden" width="60" loading="lazy"/> | Kartusche nicht korrekt initialisiert oder keine Kartusche vorhanden | <img src="/img/manual/cell-ec16f9129509.png" alt="Kartusche leer" width="60" loading="lazy"/> | Kartusche leer |
| <img src="/img/manual/asset-1bbc128332f2.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 72" width="48" loading="lazy"/> | Kritischer Fehler (Abschnitt 16.3) | <img src="/img/manual/cell-9447c1d395cc.png" alt="Kartusche abgelaufen" width="60" loading="lazy"/> | Kartusche abgelaufen |
| <img src="/img/manual/asset-601829975ed7.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 72" width="48" loading="lazy"/> | Alarm bei der letzten Messung (nur im Auto-Modus, siehe Abschnitt 8.5) | <img src="/img/manual/asset-4b23f6b46f1e.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 72" width="48" loading="lazy"/> | Unkritischer Fehler (Abschnitt 16.2) |

## 8.9 Handhabung von Kartuschen {#section-8-9}

Die BactoSense-Kartuschen enthalten die Reagenzien für Messungen und die Reinigung des Geräts. Verfügbare Kartuschentypen sind TCC (Gesamtzellzahl), ICC (Intaktzellzahl), EBC (E.-coli-Zellzahl), ACC (Anzahl aktiver Zellen), CBC (Anzahl coliformer Zellen) und NBC (Enterokokken-Zellzahl). Die folgenden Abschnitte erklären die Handhabung der Kartuschen. Lagerung, Transport und Wiederbefüllung sind in Kapitel 17 beschrieben.

### 8.9.1 Allgemeine Hinweise zur Handhabung von Kartuschen {#section-8-9-1}

Beim Arbeiten mit der Kartusche müssen die folgenden Anweisungen beachtet werden:

*Tabelle 8-3 Anweisungen zur Handhabung von Kartuschen*

<table><tbody><tr><td><img src="/img/manual/cell-28af480709ce.png" alt="Bitte halten Sie sich an die in dieser Anleitung beschriebenen Vorgehensweisen." width="93" loading="lazy" /></td><td>Bitte halten Sie sich an die in dieser Anleitung beschriebenen Vorgehensweisen.</td><td><img src="/img/manual/asset-32c675a70f3d.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 73" width="72" loading="lazy" /></td><td>Lagern und transportieren zwischen 15 °C – 25 °C (59 °F – 77 °F). Die optimale Temperatur beträgt 15 °C (59 °F).</td></tr><tr><td><img src="/img/manual/cell-27e561e22ac1.png" alt="Tragen Sie beim Arbeiten mit der Kartusche Nitrilhandschuhe." width="93" loading="lazy" /></td><td>Tragen Sie beim Arbeiten mit der Kartusche Nitrilhandschuhe.</td><td><img src="/img/manual/asset-65d703b8ec50.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 73" width="72" loading="lazy" /></td><td>Lagern und transportieren zwischen 20 % and 60 % relativer Luftfeuchtigkeit.</td></tr><tr><td><img src="/img/manual/cell-d6353e538e2e.png" alt="Tragen Sie beim Umgang mit der Kartusche eine Schutzbrille." width="93" loading="lazy" /></td><td>Tragen Sie beim Umgang mit der Kartusche eine Schutzbrille.</td><td><img src="/img/manual/cell-a80baea9abca.png" alt="Die Kartusche ist zur Wiederbefüllung vorgesehen." width="88" loading="lazy" /></td><td>Die Kartusche ist zur Wiederbefüllung vorgesehen.</td></tr><tr><td><img src="/img/manual/cell-7ac996bd1fed.png" alt="In der angegebenen Ausrichtung transportieren, installieren und lagern." width="93" loading="lazy" /></td><td>In der angegebenen Ausrichtung transportieren, installieren und lagern.</td><td><img src="/img/manual/cell-bc083b74fc3c.png" alt="Werfen Sie die Kartusche nicht in den Hausmüll." width="88" loading="lazy" /></td><td>Werfen Sie die Kartusche nicht in den Hausmüll.</td></tr></tbody></table>

### 8.9.2 Füllstand und Ablaufdatum der Kartusche überprüfen {#section-8-9-2}

Der Füllstand und das Ablaufdatum der Kartusche können an mehreren Stellen abgelesen werden.

- Das Kartuschensymbol in der oberen Leiste der Benutzeroberfläche zeigt ständig den ungefähren Füllstand der Kartusche. Ist das Ablaufdatum der Kartusche fast erreicht, so wird dies ebenfalls durch dieses Symbol angezeigt. Die verschiedenen Symbole werden in Abschnitt 8.8.2 erklärt.
- Für weitere Informationen drücken Sie auf der *Startseite* zuerst *Einstellungen* und anschließend *Informationen*. Unter *Cartridge capacity remaining (Verbleibender Kartuschenfüllstand)* sehen Sie den verbleibenden Füllstand in Prozent. Unter *Ablaufdatum der Kartusche* sehen Sie das Ablaufdatum der Kartusche. Dieselben Informationen sind auch über die Web-Oberfläche abrufbar (siehe Kapitel 13).

### 8.9.3 Kartuschenübersicht {#section-8-9-3}

Die BactoSense-Kartusche wird im Gerät in einem separaten Kartuschenfach untergebracht. Das Kartuschenfach wird von einer Tür verschlossen. Diese Tür ist für das Entfernen bzw. Einsetzen von Kartuschen zu öffnen.

<img src="/img/manual/asset-f8b0a7f1f4e5.png" alt="Abbildung aus dem Originalhandbuch, gedruckte Seite 74" width="381" loading="lazy" />

*Abbildung 8-5 Das BactoSense-Kartuschenfach lässt sich durch Entfernen von zwei 7-mm-Sechskantmuttern* *mit dem mitgelieferten Steckschlüssel öffnen.*

<table><tbody><tr><td>1</td><td>7mm-Sechskantschrauben sichern die Kartuschenfachtür</td><td>2</td><td>Kartuschenfachtür</td></tr></tbody></table>

:::warning[Passendes Werkzeug für die Tür verwenden]

Öffnen und schließen Sie die Kartuschenfachtür nur mittels des dedizierten 7mm- Sechskant-Steckschlüssel.

:::

Nach dem Öffnen der Kartuschenfachtür hat der Benutzer Zugriff auf die Kartusche und die Anschlüsse, mit der die Kartusche an den BactoSense angeschlossen wird.

<img src="/img/manual/asset-8e1d2269e91e.png" alt="Abbildung aus dem Originalhandbuch, gedruckte Seite 75" width="659" loading="lazy" />

*Abbildung 8-6 Übersicht einer eingesetzten Kartusche. Die Kartusche wird oben durch einen* *Fixierriegel (4) gesichert und über mehrere Flüssigkeitsanschlüsse (5 –* *- 8) sowie einen elektronischen Anschluss (9) mit dem Gerät verbunden. Ist keine Kartusche eingesetzt, können die Flüssigkeits- und elektronischen*  *Anschlüsse im entnehmbaren Steckerhalter (10) gesichert werden.*

<table><tbody><tr><td>1</td><td>BactoSense-Gerät</td><td>2</td><td>Kartusche</td></tr><tr><td>3</td><td>Kartuschengriff</td><td>4</td><td>Kartuschenfixierriegel</td></tr><tr><td>5</td><td>Farbstoffanschluss (grün)</td><td>6</td><td>Bleichmittelanschluss (rot)</td></tr><tr><td>7</td><td>Abwasseranschluss (schwarz oder beige)</td><td>8</td><td>Spülungsanschluss (blau)</td></tr><tr><td>9</td><td>Elektronischer Anschluss</td><td>10</td><td>Entnehmbarer Steckerhalter</td></tr><tr><td>11</td><td>Kartuschenfachtür</td><td colSpan="2"></td></tr></tbody></table>

:::warning[Unbenutzten Anschluss schützen]

Der BactoSense hat fünf fluidische Anschlüsse. Je nach Kartuschentyp werden nur vier oder alle fünf fluidischen Anschlüsse benötigt. Bei TCC- oder ICC-Kartuschen ist darauf zu achten, dass der unbenutzte fünfte Anschluss immer am Steckerhalter montiert ist, um Kontaminationen zu vermeiden.

:::

### 8.9.4 Kartuschen wechseln {#section-8-9-4}

Im Folgenden wird der Prozess des Kartuschenwechsels beschrieben. Folgen Sie dieser Prozedur, wenn Sie eine Kartusche entfernen und sofort durch eine neue ersetzen wollen. Möchten Sie nur die vorhandene Kartusche entnehmen, ohne eine neue einzusetzen, folgen Sie den Anweisungen in Abschnitt 8.9.5. Die Dauer des Kartuschenwechselprozesses beträgt ungefähr 35 min.

:::warning[Kartuschenassistenten befolgen]

Befolgen Sie das Verfahren des Bildschirmassistenten genau. **Entfernen oder installieren Sie Kartuschen niemals ohne dieses Verfahren.**

:::

<table><tbody><tr><th></th><th>ARBEITSSCHRITT</th><th>ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG</th></tr><tr><td>1.</td><td>Halten Sie die akklimatisierte Ersatzkartusche bereit.</td><td></td></tr><tr><td>2.</td><td>Drücken Sie auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen.</td><td></td></tr><tr><td>3.</td><td>Auf der Startseite der BactoSense Benutzeroberfläche, drücken Sie auf Wartung.</td><td>Basic-Benutzer überspringen diesen Schritt.</td></tr><tr><td>4.</td><td>Drücken Sie die Taste Kartuschenwechsel.</td><td></td></tr><tr><td>5.</td><td>Wählen Sie die Option Kartusche wechseln.</td><td></td></tr><tr><td>6.</td><td><Admonition type="warning" title="Kartuschenassistenten befolgen">Bestätigen Sie, dass Sie den Anweisungen des Bildschirmassistenten folgen. Öffnen Sie die Kartuschenfachtür erst nach entsprechender Aufforderung. Beachten Sie die allgemeinen Hinweise zur Kartuschenhandhabung in Abschnitt 8.9.1. Tragen Sie Nitrilhandschuhe und eine Schutzbrille. Verschließen Sie die Flüssigkeitsanschlüsse der alten Kartusche vor dem Entfernen fest mit den angebrachten Verschlüssen. Stellen Sie abschließend sicher, dass die Kartuschenfachtür fest geschlossen und gesichert ist.</Admonition></td><td><Admonition type="warning" title="Kartuschenassistenten überspringen">Nur sehr erfahrene Benutzer, die die sichere Kartuschenhandhabung beherrschen, dürfen die Bildschirmanweisungen überspringen. Bei TCC- und ICC-Kartuschen muss der unbenutzte fünfte Anschluss immer im Steckerhalter befestigt sein, um Verunreinigungen zu vermeiden.</Admonition></td></tr><tr><td>7.</td><td>Handhabung der entnommenen Kartusche: • Beachten Sie zur Lagerung die Hinweise in Abschnitt 17.1.3. • Beachten Sie zur Wiederbefüllung die Hinweise in Abschnitt 17.3.2.</td><td></td></tr></tbody></table>

### 8.9.5 Entfernen einer Kartusche {#section-8-9-5}

Diese Beschreibung behandelt das Entfernen einer Kartusche ohne das sofortige Einsetzen einer neuen. Möchten Sie Ihre Kartusche austauschen, folgen Sie bitte den Schritten in Abschnitt 8.9.4. Die Dauer des Kartuschenwechselprozesses beträgt ungefähr 5 min.

:::warning[Kartuschenassistenten befolgen]

Befolgen Sie das Verfahren des Bildschirmassistenten genau. **Entfernen oder installieren Sie Kartuschen niemals ohne dieses Verfahren.**

:::

<table><tbody><tr><th></th><th>ARBEITSSCHRITT</th><th>ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG</th></tr><tr><td>1.</td><td>Drücken Sie auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen.</td><td></td></tr><tr><td>2.</td><td>Auf der Startseite der BactoSense Benutzeroberfläche, drücken Sie auf Wartung.</td><td>Basic-Benutzer überspringen diesen Schritt.</td></tr><tr><td>3.</td><td>Drücken Sie die Taste Kartuschenwechsel.</td><td></td></tr><tr><td>4.</td><td>Wählen Sie die Option Kartusche entfernen.</td><td>t</td></tr><tr><td>5.</td><td><Admonition type="warning" title="Kartuschenassistenten befolgen">Bestätigen Sie, dass Sie den Anweisungen des Bildschirmassistenten folgen. Öffnen Sie die Kartuschenfachtür erst nach entsprechender Aufforderung. Beachten Sie die allgemeinen Hinweise zur Kartuschenhandhabung in Abschnitt 8.9.1. Tragen Sie Nitrilhandschuhe und eine Schutzbrille. Verschließen Sie die Flüssigkeitsanschlüsse der alten Kartusche vor dem Entfernen fest mit den angebrachten Verschlüssen. Stellen Sie abschließend sicher, dass die Kartuschenfachtür fest geschlossen und gesichert ist.</Admonition></td><td><Admonition type="warning" title="Kartuschenassistenten überspringen">Nur sehr erfahrene Benutzer, die den sicheren Betrieb von Kartuschen beherrschen, dürfen die Anweisungen auf dem Bildschirm überspringen.</Admonition></td></tr><tr><td>6.</td><td>Handhabung der entnommenen Kartusche: • Beachten Sie zur Lagerung die Hinweise in Abschnitt 17.1.3. • Beachten Sie zur Wiederbefüllung die Hinweise in Abschnitt 17.3.2.</td><td>Die obere Leiste der Benutzeroberfläche zeigt an, dass keine Kartusche angeschlossen ist. Die Taste Wartung auf der Startseite wird nun in orange gezeigt.<br /><img src="/img/manual/asset-b2065e0aa4d5.png" alt="Abbildung: Die obere Leiste der Benutzeroberfläche zeigt an, dass keine Kartusche angeschlossen ist. Die Wartungstaste im Home-Menü wird orange angezeigt." width="30" loading="lazy" /></td></tr></tbody></table>

### 8.9.6 Einsetzen einer Kartusche {#section-8-9-6}

Dieser Ablauf behandelt den Fall der Installation einer Kartusche, wenn gerade keine Kartusche in den BactoSense eingesetzt ist. Ist bereits eine Kartusche eingesetzt und Sie möchten diese austauschen, folgen Sie bitte den Schritten in Abschnitt 8.9.4. Die Dauer des Kartuschenwechselprozesses beträgt ungefähr 30 min.

:::warning[Kartuschenassistenten befolgen]

Befolgen Sie das Verfahren des Bildschirmassistenten genau. **Entfernen oder installieren Sie Kartuschen niemals ohne dieses Verfahren.**

:::

<table><tbody><tr><th></th><th>ARBEITSSCHRITT</th><th>ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG</th></tr><tr><td>1.</td><td>Halten Sie die akklimatisierte Ersatzkartusche bereit.</td><td></td></tr><tr><td>2.</td><td>Drücken Sie auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen.</td><td></td></tr><tr><td>3.</td><td>Auf der Startseite der BactoSense Benutzeroberfläche, drücken Sie auf Wartung.</td><td>Wenn keine Kartusche eingesetzt ist, wird die Wartungstaste orange hervorgehoben. Basic-Benutzer überspringen diesen Schritt.</td></tr><tr><td>4.</td><td>Drücken Sie die Taste Kartuschenwechsel.</td><td></td></tr><tr><td>5.</td><td>Wählen Sie die Option Kartusche installieren.</td><td></td></tr><tr><td>6.</td><td><Admonition type="warning" title="Kartuschenassistenten befolgen">Bestätigen Sie, dass Sie den Anweisungen des Bildschirmassistenten folgen. Öffnen Sie die Kartuschenfachtür erst nach entsprechender Aufforderung. Beachten Sie die allgemeinen Hinweise zur Kartuschenhandhabung in Abschnitt 8.9.1. Tragen Sie Nitrilhandschuhe und eine Schutzbrille. Stellen Sie abschließend sicher, dass die Kartuschenfachtür fest geschlossen und gesichert ist.</Admonition></td><td><Admonition type="warning" title="Kartuschenassistenten überspringen">Nur sehr erfahrene Benutzer, die die sichere Kartuschenhandhabung beherrschen, dürfen die Bildschirmanweisungen überspringen. Bei TCC- und ICC-Kartuschen muss der unbenutzte fünfte Anschluss immer im Steckerhalter befestigt sein, um Verunreinigungen zu vermeiden.</Admonition></td></tr><tr><td>7.</td><td>Nachdem Sie sämtliche auf dem Bildschirm gezeigten Schritte durchlaufen haben, haben Sie die neue Kartusche korrekt initialisiert.</td><td>Der Kartuschenstatus wird durch das Kartuschensymbol im oberen Teil der BactoSense-Benutzeroberfläche dargestellt, siehe 8.8.2.</td></tr></tbody></table>

## 8.10 Wechseln zwischen Probenahmegeräten {#section-8-10}

Der BactoSense kann sowohl mit dem manuellen als auch mit dem Online- Probenahmegerät betrieben werden. Im Folgenden wird der Prozess des Austauschs des Probenahmegeräts beschrieben. Informationen zur Lagerung eines Probenahmegeräts finden Sie im Abschnitt 17.1.2.

|  | ARBEITSSCHRITT | ZUSÄTZLICHE INFORMATIONEN / ABBILDUNGEN |
| --- | --- | --- |
| 1. | Entfernen Sie das aktuell installierte Probenahmegerät entsprechend den Anweisungen im Abschnitt 8.10.1 (Online- Probenahmegerät) bzw. 8.10.2 (manuelles Probenahmegerät) |  |
| 2. | Setzen Sie das neue Probenahmegerät entsprechend den Anweisungen im Abschnitt 5.5 (Online-Probenahmegerät) bzw. 5.4 (manuelles Probenahmegerät) ein |  |

### 8.10.1 Entfernen des Online-Probenahmegeräts {#section-8-10-1}

Wechseln Sie zum manuellen Probenahmegerät, muss das Online-Probenahmegerät entfernt werden. Folgen Sie der untenstehenden Prozedur, um das Gerät sicher zu entfernen und es für die Lagerung vorzubereiten.

<img src="/img/manual/icon-gloves.png" alt="Schutzhandschuhe tragen" width="32" loading="lazy" />

Vermeiden Sie die Kontaminierung des Geräts. Tragen Sie beim Hantieren mit Proben, Probenahmegeräten und Komponenten, die damit in Kontakt kommen, Nitrilhandschuhe.

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Schließen Sie eine eventuell noch laufende Messserie ab, wie in Abschnitt 10.2.2 gezeigt. |
| 2. | Stoppen Sie den Wasserfluss durch das Probenahmegerät und dessen Schläuche. |
| 3. | Schrauben Sie den gerändelten Fixierungsring der Probenahmevorrichtung vorsichtig ab, bis das Probenahmegerät entfernt werden kann. |
| 4. | Entfernen Sie das Online-Probenahmegerät. Stellen Sie sicher, dass der Verschluss am Schlauchanschluss des Probenahmegeräts weiterhin fest sitzt. Tut er dies nicht, könnte er im Probenahmegeräteanschluss des BactoSense zurückgeblieben sein. In diesem Fall entfernen Sie ihn vorsichtig mittels einer Pinzette und setzen Sie ihn zurück in das Probenahmegerät. |
| 5. | Trennen Sie die Einlass- und Auslassschläuche von der Wasserquelle und dem Gehäuse des Probenahmegeräts und lassen Sie sie leerlaufen. |
| 6. | Überprüfen Sie die Einlass- und Auslassschläuche auf Verunreinigungen und Schäden. Verwenden Sie ausschließlich saubere und intakte Schläuche. |
| 7. | Möchten Sie das Probenahmegerät lagern, verwahren Sie das Gerät und die Schläuche separat in sauberen, trockenen Plastikbeuteln und folgen Sie den Anweisungen zur Lagerung in Abschnitt 17.1.2. |
| 8. | Um das manuelle Probenahmegerät zu montieren, folgen Sie den Anweisungen in Abschnitt 5.4. |

### 8.10.2 Entfernen des manuellen Probenahmegeräts {#section-8-10-2}

Wechseln Sie zum Online-Probenahmegerät, muss das manuelle Probenahmegerät entfernt werden. Folgen Sie der untenstehenden Prozedur, um das Gerät sicher zu entfernen und es für die Lagerung vorzubereiten.

<img src="/img/manual/icon-gloves.png" alt="Schutzhandschuhe tragen" width="32" loading="lazy" />

Vermeiden Sie die Kontaminierung des Geräts. Tragen Sie beim Hantieren mit Proben, Probenahmegeräten und Komponenten, die damit in Kontakt kommen, Nitrilhandschuhe.

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Reinigen Sie das manuelle Probenahmegerät: Ist eine Washstation verfügbar, folgen Sie den Anweisungen in Abschnitt 15.2.2, andernfalls denen in Abschnitt 15.2.3. |
| 2. | Nachdem Sie fertig sind, setzen Sie ein sauberes und leeres 5-mL- Schraubverschlussröhrchen bzw. die Washstation auf das Probenahmegerät auf. |
| 3. | Schrauben Sie den gerändelten Fixierungsring oben am Gerät vorsichtig ab, bis das Probenahmegerät entfernt werden kann. |
| 4. | Entfernen Sie das manuelle Probenahmegerät. Stellen Sie sicher, dass der Verschluss am Schlauchanschluss des Probenahmegeräts weiterhin fest sitzt. Tut er dies nicht, könnte er im Probenahmegeräteanschluss des BactoSense zurückgeblieben sein. In diesem Fall entfernen Sie ihn vorsichtig mittels einer Pinzette und setzen Sie ihn zurück in das Probenahmegerät. |
| 5. | Möchten Sie das Probenahmegerät lagern, verwahren Sie das Gerät und die Schläuche separat in sauberen, trockenen Plastikbeuteln und folgen Sie den Anweisungen zur Lagerung in Abschnitt 17.1.2. |
| 6. | Um das Online-Probenahmegerät zu montieren, folgen Sie den Anweisungen in Abschnitt 5.5. |

## 8.11 Qualifizierung {#section-8-11}

Um sicherzustellen, dass der BactoSense wie gewünscht funktioniert, ist der Prozess einer Betriebsqualifizierung vonnöten. Es stehen verschiedene Optionen zur Verfügung.

Um eine vollautomatische Schnellprüfung des Gerätestatus durchzuführen, führen Sie den in Abschnitt 16.6 beschriebenen Selbsttest durch. Dieser Test benötigt keinerlei Reagenzien oder Benutzeraktionen, läuft schnell ab und überprüft die Integrität und die Kommunikation der verschiedenen Module des BactoSense.

Um die Sauberkeit des BactoSense zu bewerten und eine Verunreinigung auszuschließen, führen Sie eine Überprüfung der Sauberkeit gemäß Abschnitt 8.11.1 durch.

Verwenden Sie in Betriebsumgebungen, die einen Systemeignungstest erfordern, das *System Suitability Test Kit (SST Kit)* und folgen Sie dem Verfahren in dessen Bedienungsanleitung.

Für andere Betriebsumgebungen wird eine Gerätequalifizierung mit dem *Validierungskit*in folgenden Situationen empfohlen:

- Nach dem Versand des Geräts oder einem anderen Langstreckentransport, bei dem das Gerät Vibrationen oder Stößen ausgesetzt wurde.
- Nachdem das Gerät mehr als einen Monat gelagert wurde.
- Wenn es Hinweise darauf gibt, dass die Messergebnisse fehlerhaft sein könnten.

### 8.11.1 Überprüfung der Sauberkeit {#section-8-11-1}

|  | ARBEITSSCHRITT |
| --- | --- |
| 1. | Bitte stellen Sie sicher, dass das manuelle Probenahmegerät korrekt gemäß Abschnitt 5.4 installiert ist. |
| 2. | Führen Sie eine Reinigung des Probenahmegeräts mit zwei Replikationen durch: Ist eine Washstation verfügbar, folgen Sie den Anweisungen in Abschnitt 15.2.2, andernfalls denen in Abschnitt 15.2.3. |
| 3. | Bereiten Sie die Blindprobe in einem 5-mL-Röhrchen mit Schraubverschluss vor. Es gibt zwei Möglichkeiten: A) Verwenden Sie zellfreies Wasser, z. B. ein Aliquot steriler Lösung aus dem Validierungskit. Entfernen Sie hierfür den Deckel des Aliquots und setzen Sie es wie in der Bedienungsanleitung des Validierungskits beschrieben in ein leeres 5-mL-Röhrchen mit Schraubverschluss. B) Filtern Sie stilles Mineralwasser zweimal mit einem Membranfilter mit einer Porengröße von 0.22 µm oder kleiner. |
| 4. | Navigieren Sie in der Benutzeroberfläche des BactoSense auf die Startseite. |
| 5. | Drücken Sie auf der Startseite Modus und wählen Sie „Manueller Modus“. Drücken Sie Zurück und anschließend Messen, um den Messassistenten zu öffnen. |
| 6. | Wählen Sie aus der Liste der verfügbaren Protokolle das Ansaugvorgang-Protokoll aus. |
| 7. | Drücken Sie die Taste Weiter. |

|  | ARBEITSSCHRITT |
| --- | --- |
| 8. | Entfernen Sie den Schlauch bzw. die Washstation vom manuellen Probenahmegerät und bringen Sie die Blindprobe an. |
| 9. | Drücken Sie die Taste Start, um das Ansaugvorgang-Protokoll auszuführen. |
| 10. | Nachdem der Ansaugvorgang abgeschlossen ist, drücken Sie die Taste Neu, um zurück zur Liste der verfügbaren Protokolle zu navigieren. |
| 11. | Wählen Sie aus der Liste der verfügbaren Protokolle das Wasseranalyse-Protokoll aus. |
| 12. | Konfigurieren Sie zwei Replikationen. |
| 13. | Geben Sie einen Probennamen ein, indem Sie in das Textfeld Probenname tippen und nach Eingabe des Namens OK drücken. |
| 14. | Stellen Sie sicher, dass das ICC- oder TCC-Standardgate konfiguriert ist. Ansonsten ändern Sie dies, indem Sie in das Gates-Feld tippen. |
| 15. | Drücken Sie die Taste Weiter. |
| 16. | Drücken Sie die Taste Start und warten Sie, bis die beiden Messungen abgeschlossen sind. |
| 17. | Wenn Sie fertig sind, drücken Sie die Taste Weiter, um sich die Ergebnisse anzusehen. |
| 18. | Vergleichen Sie die Ergebnisse mit den nachstehenden Referenzwerten. Der BactoSense ist sauber, wenn folgende Kriterien erfüllt sind: • TCC-Kartuschen: TCC [/mL] &lt; 300 • ICC-Kartuschen: ICC [/mL] &lt; 100 |
| 19. | Liegen die Zellkonzentrationen über den angegebenen Grenzen, gehen Sie folgendermaßen vor: • Wiederholen Sie das Verfahren mit einer frisch vorbereiteten Blindprobe. • Wiederholen Sie das Verfahren nach einer Dekontaminierung mit dem Reinigungskit (siehe Abschnitt 18.3). • Schlägt der Test weiterhin fehl, wenden Sie sich an den bNovate-Support oder Ihren lokalen Servicepartner. |
| 20. | Nachdem Sie fertig sind, setzen Sie ein sauberes und leeres 5-mL- Schraubverschlussröhrchen bzw. die Washstation auf das manuelle Probenahmegerät auf. |

## 8.12 Demo-Modus {#section-8-12}

Der Demomodus kann verwendet werden, um die Funktionen des Geräts zu demonstrieren oder um zu lernen, wie die Navigation durch die Menüs und die Verwendung der Funktionen vonstatten gehen. Wird er aktiviert, startet das Gerät neu in einem besonderen Modus, in dem es Demodaten anzeigt (die Messdaten des Geräts bleiben verborgen). Alle Funktionen des Geräts werden durch Simulationen ersetzt, die nie die Hardware bewegen oder die Ergebnisdatenbank verändern können. Somit können Protokolle gestartet werden, ohne dass eine Probe geladen werden muss. Benutzer können die Löschung oder das Regaten von Ergebnissen simulieren, ohne die gespeicherten Daten zu beeinflussen. Solange der Demomodus aktiv ist, wird oben in der Mitte auf dem Bildschirm ***Demo*** angezeigt. Wird das Gerät in den Normalmodus zurückversetzt, werden die vorhandenen Daten wieder angezeigt und alle Funktionen sind wieder aktiv.

<table><tbody><tr><th></th><th>ARBEITSSCHRITT</th><th colSpan="2">ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG</th></tr><tr><td>1.</td><td>Drücken Sie auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen.</td><td colSpan="2"><img src="/img/manual/asset-c4707aba8b28.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 83" width="73" loading="lazy" /></td></tr><tr><td>2.</td><td>Gehen Sie in die Systemeinstellungen und betätigen Sie die Taste Demomodus.</td><td><img src="/img/manual/asset-a7a911718f1c.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 83" width="73" loading="lazy" /></td><td><img src="/img/manual/asset-65a7aba669db.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 83" width="73" loading="lazy" /></td></tr><tr><td>3.</td><td>Wählen Sie das Feld Demomodus aktivieren.</td><td colSpan="2"></td></tr><tr><td>4.</td><td>Drücken Sie die Taste Speichern und neustarten.</td><td colSpan="2"></td></tr><tr><td>5.</td><td>Das Gerät startet automatisch neu.</td><td colSpan="2"></td></tr></tbody></table>

Um zum Normalbetrieb zurückzukehren, folgen Sie demselben Verfahren und deaktivieren Sie die Option **Activate demo**  **mode (Demo-Modus aktivieren)** .

## 8.13 Werkseinstellungen {#section-8-13}

Der Factory-Reset setzt die meisten Geräteeinstellungen auf Werkseinstellungen zurück: Gatinggrenzen, Messintervall, Standard-Protokollnamen, Benutzer, Sprache und Netzeinstellungen. Diese Option steht nur Admin- und Servicebenutzern zur Verfügung.

Die folgenden Schritte beschreiben, wie Sie einen Factory-Reset durchführen können.

<table><tbody><tr><th></th><th>ARBEITSSCHRITT</th><th colSpan="2">ZUSÄTZLICHE INFORMATIONEN / ABBILDUNG</th></tr><tr><td>1.</td><td>Drücken Sie auf der Startseite Einstellungen, um das Einstellungsmenü zu öffnen.</td><td colSpan="2"><img src="/img/manual/asset-c4707aba8b28.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 84" width="73" loading="lazy" /></td></tr><tr><td>2.</td><td>Drücken Sie auf Wartung und dann Werkseinstellungen.</td><td><img src="/img/manual/asset-a7a911718f1c.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 84" width="73" loading="lazy" /></td><td><img src="/img/manual/asset-e6d546463675.png" alt="Abbildung zum Arbeitsschritt, gedruckte Seite 84" width="73" loading="lazy" /></td></tr><tr><td>3.</td><td>Wählen Sie mithilfe der Kontrollkästchen die zurückzusetzenden Parameter: • Geräteeinstellungen • Messungen einschließlich Fehler und Protokolle • beides</td><td colSpan="2"><Admonition type="info" title="Zusätzliche Informationen">Wartungsprotokolle, Validierungsergebnisse und der Softwareaktualisierungsverlauf werden nicht gelöscht.</Admonition></td></tr><tr><td>4.</td><td>Drücken Sie dann die Taste Gerät zurücksetzen und neu starten.</td><td colSpan="2"></td></tr></tbody></table>
