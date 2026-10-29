---
title: "7. Feldbusschnittstelle"
sidebar_label: "7. Feldbusschnittstelle"
slug: /field-bus-interface
sidebar_position: 7
description: "BactoSense-Bedienungsanleitung: Feldbusschnittstelle."
---

## 7.1 Modbus-TCP {#section-7-1}

### 7.1.1 Allgemeine Informationen zum Betrieb mit Modbus-TCP {#section-7-1-1}

Der BactoSense kann über das Modbus-Transmission-Control-Protocol (TCP) betrieben werden. Es müssen folgende Voraussetzungen erfüllt sein:

- Der Computer und/oder das Verwaltungs-/Kontrollsystem muss zu Modbus-TCP kompatibel sein.
- Der Computer und/oder das Verwaltungs-/Kontrollsystem muss über Software verfügen, die vom BactoSense gelieferten Daten korrekt verarbeiten kann.
- Der Modbus-TCP-Dienst des BactoSense muss unter Startbildschirm → Einstellungen → Einstellungen → Systemdienste aktiviert sein.
- Der BactoSense muss mit dem Bussystem verbunden sein.
- Um mit Modbus-TCP arbeiten zu können, müssen die Netzwerkeinstellungen korrekt sein.

Zusätzliche Informationen

- Die Modbus-TCP-Schnittstelle ist standardmäßig in den BactoSense integriert.
- Der Ethernet-Port befindet sich auf der rechten Seite des Geräts.
- Die für die Programmierung erforderliche Adresstabelle kann separat unter [Adressenliste auf Modbus-TCP](07-field-bus-interface.md#section-7-1-2) gefunden werden.
- Alle Register sind Big-Endian-codiert.
- Die Modbus-TCP-Kommunikation läuft über den Port 502.
- Die Fehlercodeliste kann unter [Unkritische Fehler](16-warnings-errors-and-troubleshooting.md#section-16-2) bzw. unter [Kritische Fehler](16-warnings-errors-and-troubleshooting.md#section-16-3) gefunden werden.
- Modbus TCP kann zur Zeitsynchronisierung verwendet werden. Folgen Sie den Anweisungen unter [NTP-Server einstellen](08-general-operations-and-configurations.md#section-8-7) und wählen Sie *Modbus-TCP* als Synchronisierungsquelle.

### 7.1.2 Adressenliste auf Modbus-TCP: {#section-7-1-2}

Die folgenden Werte können mit Modbus-Funktion 3 oder 4 gelesen und mit Modbus- Funktion 16 geschrieben werden.

<div className="manual-modbus-address-scroll manual-modbus-address-list">

| REGISTERNR. | ADRESSE (OFFSET) | DATENTYP | FUNKTION | WERTE |
| --- | --- | --- | --- | --- |
| 300201 400201 | 0x00C8 | Vorzeichenlose Integer-Bits 0-15 | Digitale Eingänge. Wird ignoriert, wenn auf der Einstellungsseite der digitalen Eingänge nicht „Modbus TCP“ als Quelle ausgewählt ist. | Bit 0: Eingang 1; Bit 1: Eingang 2; Bit 2: Eingang 3; Bit 3: Eingang 4. Die korrekte Zuordnung der Bits zu den Eingängen ist unter [Konfiguration digitaler Eingänge und PLC-Modus](06-io-box.md#section-6-5), insbesondere in Tabelle 6-2 und Abbildung 6-5, beschrieben. Eingang 1111 = 15 bedeutet Abbruch. |
| 300202 400202 | 0x00C9 | Vorzeichenlose Integer-Bits 0-15 | Betriebssteuerung | Bit 0: Ausschalten; Bit 1: Neustart |
| 300203 400203 | 0x00CA | Uint16 | Watchdog | Schreiben Sie den Sollwert in Sekunden, um den Countdown zu aktivieren oder zurückzusetzen. Nach dem Schreiben wird der Wert jede Sekunde um 1 verringert. Während des Countdowns liefert ein Lesezugriff auf das Register den Sollwert zurück. Erreicht der Countdown 0, werden laufende Protokolle abgebrochen. Ein Lesezugriff liefert dann 0 zurück. Schreiben Sie 0, um den Countdown zu deaktivieren. |
| 300204 400204 | 0x00CB | Uint16 | Testregister | Schreiben Sie 1, um auf der Seite zur DI-Quelle der Benutzeroberfläche eine Meldung anzuzeigen. Wird beim Start auf 0 zurückgesetzt. |
| 300211 400211 | 0x00D2 | UInt16: Jahr | Datum und Uhrzeit lesen/setzen. Die Zeit wird geändert, sobald der Schreibvorgang abgeschlossen ist. Nur die Felder mit beschriebenen Registern werden geändert: Wird nur der Monat geschrieben, wird nur der Monat aktualisiert. | [0,9999] |
| 300212 400212 | 0x00D3 | UInt16: Monat | ^ | [1,12] |
| 300213 400213 | 0x00D4 | UInt16: Tag | ^ | [0,31] |
| 300214 400214 | 0x00D5 | UInt16: Stunde | ^ | [0,24] |
| 300215 400215 | 0x00D6 | UInt16: Minute | ^ | [0,59] |
| 300216 400216 | 0x00D7 | UInt16: Sekunde | ^ | [0,59] |
| Die folgenden Werte können mit Modbus-Funktion 3 oder 4 gelesen werden. | \< | \< | \< | \< |
| 300001 400001 | 0x0000 | UInt16 (einzelne Bits) | Digitale Ausgänge | Bit 0: Ausgang 1; Bit 1: Ausgang 2; Bit 2: Ausgang 3; Bit 3: Ausgang 4. Die korrekte Zuordnung der Bits zu den Ausgängen ist unter [Konfiguration der digitalen Ausgänge](../io-box/#section-6-6) beschrieben. Alternativ verwenden Sie die unter [Testen der digitalen und analogen Ausgänge](../io-box/#section-6-8) beschriebene Testoberfläche für die Ausgänge. |
| 300002 400002 | 0x0001 | UInt16 (einzelne Bits) | Gerätestatus: 0 = Nein, 1 = Ja | Bit 0: Prozess läuft; Bit 1: Kritischer Fehler; Bit 2: Unkritischer Fehler; Bit 3: PLC-Modus aktiv; Bit 4: Schnellheizung (im Wintermodus); Bit 5: Hintergrundheizung (Wintermodus); Bit 6: Probenahmegerät in Verwendung |
| 300003 400003 | 0x0002 | UInt16 (einzelne Bits) | Alarmstatus, d. h. während der letzten Messung ausgelöste Alarme. | Bit 0: Alarm 1; Bit 1: Alarm 2; Bit 2: Alarm 3 … |
| 300004 400004 | 0x0003 | UInt32 MSB (einzelne Bits) | Warnungsstatus, d. h. während der letzten Messung aufgetretene Warnungen. | Bit 0: Warnung W01; Bit 1: Warnung W02 ... Bit 31: Warnung W32 |
| 300005 400005 | 0x0004 | UInt32 LSB (einzelne Bits) | ^ | ^ |
| 300006 400006 | 0x0005 | UInt16 | Fehlercode | Siehe Fehlercodeliste. Hinweis: E00 (unbehandelter Softwarefehler) wird als 999 ausgegeben, um Verwechslungen mit „kein Fehler“ zu vermeiden. Unkritische Fehlercodes bleiben bestehen, bis sie durch ein erfolgreiches Protokoll automatisch oder manuell gelöscht werden. |
| 300007 400007 | 0x0006 | UInt16 | Heartbeat | Sekunden der Uhr. Der Wert ändert sich jede Sekunde. Verwenden Sie ihn, um das Antwortverhalten des Systems zu überwachen. |
| 300008 400008 | 0x0007 | UInt16 | Messphase | BEREIT 0; INITIALISIEREN 1; HEIZEN 2; BEFÜLLEN 3; ANSAUGEN 4; MISCHEN 5; INKUBIEREN 6; ANALYSIEREN 7; REINIGEN 8; SPÜLEN 9; VERARBEITEN 10; VALIDIEREN 11; BEWEGEN 12; AUSWERFEN 13; EXPORTIEREN 14; UMBENENNEN 15; LÖSCHEN 16; SPEICHERN 17; SELBSTTEST 18; ABGEBROCHEN 19; UNBEKANNT 98; FEHLER 99 |
| 300011 400011 | 0x000A | UInt16 | Messfortschritt | [0, 100] 0 .. 100 % |
| 300012 400012 | 0x000B | Float 32 MSB | Temperatur der I/O-Platine | Celsius |
| 300013 400013 | 0x000C | Float 32 LSB | ^ | ^ |
| 300014 400014 | 0x000D | UInt16 | Feuchtigkeit an der I/O-Platine | [0, 100] 0 .. 100 % |
| 300015 400015 | 0x000E | UInt16: Jahr | Datum und Uhrzeit der letzten Probenahme | \< |
| 300016 400016 | 0x000F | UInt16: Monat | ^ | ^ |
| 300017 400017 | 0x0010 | UInt16: Tag | ^ | ^ |
| 300018 400018 | 0x0011 | UInt16: Stunde | ^ | ^ |
| 300019 400019 | 0x0012 | UInt16: Minute | ^ | ^ |
| 300020 400020 | 0x0013 | UInt16: Sekunde | ^ | ^ |
| 300021 400021 | 0x0014 | UInt16 | Kartuschenfüllstand in Prozent | [0, 100] 0 .. 100 % |
| 300022 400022 | 0x0015 | UInt32 MSB | Seriennummer der Kartusche |  |
| 300023 400023 | 0x0016 | UInt32 LSB | ^ | ^ |
| 300024 400024 | 0x0017 | UInt32 MSB | Seriennummer der Befüllung |  |
| 300025 400025 | 0x0018 | UInt32 LSB |  | ^ |
| 300026 400026 | 0x0019 | Uint16 | Kartuschentyp | 1 = TCC 1002 = ICC 1030 = ACC 1003 = ICC-BWT |
| 300027 400027 | 0x001A | UInt16: Jahr | Ablaufdatum der Kartusche | UTC-Datum |
| 300028 400028 | 0x001B | UInt16: Monat | ^ | ^ |
| 300029 400029 | 0x001c | UInt16: Tag | ^ | ^ |
| 300031 400031 | 0x001E | UInt32 MSB | Seriennummer des Geräts |  |
| 300032 400032 | 0x001F | UInt32 LSB | ^ | ^ |
| 300033 400033 | 0x0020 | String-Zeichen 1-2 | Softwareversion | Bei weniger als 16 Zeichen wird der String mit Nullzeichen aufgefüllt. Beispiel: '1.4.0-BS\0\0\0\0...' |
| 300034 400034 | 0x0021 | String-Zeichen 3-4 | ^ | ^ |
| 300035 400035 | 0x0022 | String-Zeichen 5-6 | ^ | ^ |
| 300036 400036 | 0x0023 | String-Zeichen 7-8 | ^ | ^ |
| 300037 400037 | 0x0024 | String-Zeichen 9-10 | ^ | ^ |
| 300038 400038 | 0x0025 | String-Zeichen 11-12 |  |  |
| 300039 400039 | 0x0026 | String-Zeichen 13-14 | ^ | ^ |
| 300040 400040 | 0x0027 | String-Zeichen 15-16 | ^ | ^ |
| 300041 400041 | 0x0028 | UInt16 | Verbleibender Speicherplatz | Ungefähre Anzahl weiterer Messungen, bis der Datenträger voll ist |
| 300042 400042 | 0x0029 | UInt16 | Verbleibende Ventillebensdauer | [0, 100], Prozentsatz der bis zur Wartung verbleibenden Bewegungen. |
| 300043 400043 | 0x002A | UInt16 | Verbleibende Kolbenlebensdauer | [0, 100], Prozentsatz der bis zur Wartung verbleibenden Bewegungen. |
| 300044 400044 | 0x002B | UInt16: Jahr | Nächster Wartungstermin | UTC-Datum |
| 300045 400045 | 0x002C | UInt16: Monat | ^ | ^ |
| 300046 400046 | 0x002D | UInt16: Tag | ^ | ^ |
| 300101 400101 | 0x0064 | UInt32 MSB | TCC | Wird nach einem Reinigungsprotokoll oder beim Neustart auf null zurückgesetzt. |
| 300102 400102 | 0x0065 | UInt32 LSB | ^ | ^ |
| 300103 400103 | 0x0066 | UInt32 MSB | ICC | Immer 0, wenn die Kartusche keinen ICC-Wert liefert. |
| 300104 400104 | 0x0067 | UInt32 LSB | ^ | ^ |
| 300105 400105 | 0x0068 | UInt32 MSB | Gate+ | Immer 0, wenn die Kartusche keinen Gate+-Wert liefert. |
| 300106 400106 | 0x0069 | UInt32 LSB | ^ | ^ |
| 300107 400107 | 0x006A | UInt32 MSB | HNAC |  |
| 300108 400108 | 0x006B | UInt32 LSB | ^ | ^ |
| 300109 400109 | 0x006C | UInt32 MSB | LNAC |  |
| 300110 400110 | 0x006D | UInt32 LSB | ^ | ^ |
| 300111 400111 | 0x006E | Float 32 MSB | HNAP |  |
| 300112 400112 | 0x006F | Float 32 LSB | ^ | ^ |
| 300113 400113 | 0x0070 | UInt32 MSB | ACC | Immer 0, wenn keine ACC-Kartusche verwendet wird. |
| 300114 400114 | 0x0071 | UInt32 LSB | ^ | ^ |
| 300115 400115 | 0x0072 | UInt32 MSB | HACC | Immer 0, wenn keine ACC-Kartusche verwendet wird. |
| 300116 400116 | 0x0073 | UInt32 LSB | ^ | ^ |
| 300117 400117 | 0x0074 | UInt32 MSB | LACC | Immer 0, wenn keine ACC-Kartusche verwendet wird. |
| 300118 400118 | 0x0075 | UInt32 LSB | ^ | ^ |
| 300119 400119 | 0x0076 | Float 32 MSB | HACP | Immer 0, wenn keine ACC-Kartusche verwendet wird. |
| 300120 400120 | 0x0077 | Float 32 LSB | ^ | ^ |
| 300121 400121 | 0x0078 | UInt32 MSB | Live-TCC | Wie TCC, der Wert wird jedoch während einer Messung in Echtzeit aktualisiert. Nützlich für die frühzeitige Erkennung von Kontaminationen (zum Beispiel: Anhalten einer Pumpe oder Umleiten von Online-Wasser). Wird am Ende der Messung auf null zurückgesetzt. |
| 300122 400122 | 0x0079 | UInt32 LSB | ^ | ^ |
| 300123 400123 | 0x007A | UInt32 MSB | Live-ICC | siehe oben. |
| 300124 400124 | 0x007B | UInt32 LSB | ^ | ^ |
| 300125 400125 | 0x007C | UInt32 MSB | Live-Gate+ | siehe oben. |
| 300126 400126 | 0x007D | UInt32 LSB | ^ | ^ |
| 300127 400127 | 0x007E | UInt32 MSB | Live-HNAC | siehe oben. |
| 300128 400128 | 0x007F | UInt32 LSB | ^ | ^ |
| 300129 400129 | 0x0080 | UInt32 MSB | Live-LNAC | siehe oben. |
| 300130 400130 | 0x0081 | UInt32 LSB | ^ | ^ |
| 300131 400131 | 0x0082 | Float 32 MSB | Live-HNAP | siehe oben. |
| 300132 400132 | 0x0083 | Float 32 LSB | ^ | ^ |
| 300135 400135 | 0x0086 | UInt32 MSB | Live-ACC | siehe oben. |
| 300136 400136 | 0x0087 | UInt32 LSB | ^ | ^ |
| 300137 400137 | 0x0088 | UInt32 MSB | Live-HACC | siehe oben. |
| 300138 400138 | 0x0089 | UInt32 LSB | ^ | ^ |
| 300139 400139 | 0x008A | UInt32 MSB | Live-LACC | siehe oben. |
| 300140 400140 | 0x008B | UInt32 LSB | ^ | ^ |
| 300141 400141 | 0x008C | Float 32 MSB | Live-HACP | siehe oben. |
| 300142 400142 | 0x008D | Float 32 LSB | ^ | ^ |
| 300151 400151 | 0x0096 | UInt16: Jahr | Datum und Uhrzeit des letzten abrupten Ausschaltens. | \< |
| 300152 400152 | 0x0097 | UInt16: Monat | ^ | ^ |
| 300153 400153 | 0x0098 | UInt16: Tag | ^ | ^ |
| 300154 400154 | 0x0099 | UInt16: Stunde | ^ | ^ |
| 300155 400155 | 0x009A | UInt16: Minute | ^ | ^ |
| 300156 400156 | 0x009B | UInt16: Sekunde | ^ | ^ |
| 300157 400157 | 0x009C | UInt16 | Ausschaltzeit | In Sekunden |
| 300165 400165 | 0x00A4 | UInt16: Jahr | Datum und Uhrzeit des letzten Protokollstarts. | \< |
| 300166 400166 | 0x00A5 | UInt16: Monat | ^ | ^ |
| 300167 400167 | 0x00A6 | UInt16: Tag | ^ | ^ |
| 300168 400168 | 0x00A7 | UInt16: Stunde | ^ | ^ |
| 300169 400169 | 0x00A8 | UInt16: Minute | ^ | ^ |
| 300170 400170 | 0x00A9 | UInt16: Sekunde | ^ | ^ |
| 300171 400171 | 0x00AA | UInt16 | Aktuelle Messleitung des BactoSwitch | Von 1 bis 4 |
| 300172 400172 | 0x00AB | UInt16 | Nächste Messleitung des BactoSwitch | Von 1 bis 4 |
| 300173 400173 | 0x00AC | UInt16 | Durchfluss des BactoSwitch | mL/min |
| 300174 400174 | 0x00AD | UInt16 | BactoSwitch-Status | 0 bedeutet kein Fehler. |
| 300175 400175 | 0x00AE | UInt16 | BactoSwitch-Verbindung | 0 = nicht verbunden, 1 = erfolgreich verbunden |
| 300176 400176 | 0x00AF | UInt16 | Ventilzustand des BactoSwitch | Bitmaske: 0x01 = Ventil von Leitung 1 usw.; Integer 15 = alle offen |
| 300181 400181 | 0x00B4 | UInt32 MSB | CBC |  |
| 300182 400182 | 0x00B5 | UInt32 LSB | ^ | ^ |
| 300183 400183 | 0x00B6 | UInt32 MSB | EBC |  |
| 300184 400184 | 0x00B7 | UInt32 LSB | ^ | ^ |
| 300185 400185 | 0x00B8 | UInt32 MSB | NBC |  |
| 300186 400186 | 0x00B9 | UInt32 LSB | ^ | ^ |
| 300187 400187 | 0x00BA | UInt32 MSB | Live-CBC | siehe oben. |
| 300188 400188 | 0x00BB | UInt32 LSB | ^ | ^ |
| 300189 400189 | 0x00BC | UInt32 MSB | Live-EBC | siehe oben. |
| 300190 400190 | 0x00BD | UInt32 LSB | ^ | ^ |
| 300191 400191 | 0x00BE | UInt32 MSB | Live-NBC | siehe oben. |
| 300192 400192 | 0x00BF | UInt32 LSB | ^ | ^ |

</div>
