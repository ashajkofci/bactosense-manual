---
title: "7. Interfaccia bus di campo"
sidebar_label: "7. Interfaccia bus di campo"
slug: /field-bus-interface
sidebar_position: 7
description: "Manuale d’uso BactoSense: Interfaccia bus di campo."
---

## 7.1 Modbus TCP {#section-7-1}

### 7.1.1 Informazioni generali sul funzionamento con Modbus TCP {#section-7-1-1}

BactoSense può essere utilizzato tramite il protocollo Modbus Transmission Control Protocol (TCP). Devono essere soddisfatti i seguenti requisiti:

- Il computer e/o il sistema di gestione o controllo devono essere compatibili con Modbus TCP.
- Il computer e/o il sistema di gestione o controllo devono disporre di un software in grado di elaborare correttamente i dati forniti da BactoSense.
- Il servizio Modbus TCP di BactoSense deve essere attivato in Home → Impostazioni → Impostazioni di sistema → Servizi di sistema.
- BactoSense deve essere collegato al sistema bus.
- Per poter utilizzare Modbus TCP, le impostazioni di rete devono essere configurate correttamente.

Informazioni aggiuntive

- L’interfaccia Modbus TCP è integrata di serie in BactoSense.
- La presa Ethernet si trova sul lato destro dello strumento.
- La tabella degli indirizzi necessaria per la programmazione è riportata separatamente nella sezione [Elenco degli indirizzi Modbus TCP](07-field-bus-interface.md#section-7-1-2).
- Tutti i registri sono codificati in big-endian.
- La comunicazione Modbus TCP utilizza la porta 502.
- L’elenco dei codici di errore è riportato nelle sezioni [Errori non critici](16-warnings-errors-and-troubleshooting.md#section-16-2) (errori non critici) e [Errori critici](16-warnings-errors-and-troubleshooting.md#section-16-3) (errori critici).
- Modbus TCP può essere utilizzato per la sincronizzazione dell’ora. Seguire le istruzioni della sezione [Impostazione dei server NTP](08-general-operations-and-configurations.md#section-8-7) e selezionare *Modbus TCP* come sorgente di sincronizzazione.

### 7.1.2 Elenco degli indirizzi Modbus TCP: {#section-7-1-2}

I seguenti valori possono essere letti con la funzione Modbus 3 o 4 e scritti con la funzione Modbus 16.

<div className="manual-modbus-address-scroll manual-modbus-address-list">

| N. REGISTRO | INDIRIZZO (OFFSET) | TIPO DI DATO | FUNZIONE | VALORI |
| --- | --- | --- | --- | --- |
| 300201 400201 | 0x00C8 | Intero senza segno, bit 0-15 | Ingressi digitali. Ignorati a meno che “Modbus TCP” sia selezionato come sorgente nella schermata delle impostazioni Digital Inputs. | Bit 0: ingresso 1 Bit 1: ingresso 2 Bit 2: ingresso 3 Bit 3: ingresso 4 Per la corretta corrispondenza tra bit e ingressi, consultare la sezione [Configurazione degli ingressi digitali e modalità PLC](06-io-box.md#section-6-5), in particolare la tabella 6-2 e la figura 6-5. Ingresso 1111 = 15 significa interruzione. |
| 300202 400202 | 0x00C9 | Intero senza segno, bit 0-15 | Controllo dell’alimentazione | Bit 0: spegnimento Bit 1: riavvio |
| 300203 400203 | 0x00CA | Uint16 | Watchdog | Scrivere il valore di riferimento in secondi per attivare o riavviare il conto alla rovescia. Dopo la scrittura, un conto alla rovescia lo decrementa di 1 ogni secondo. Durante il conto alla rovescia, la lettura del registro restituisce il valore di riferimento. Se il conto alla rovescia raggiunge 0, qualsiasi protocollo in corso viene interrotto. La lettura del registro restituisce 0. Scrivere 0 per disabilitare il conto alla rovescia. |
| 300204 400204 | 0x00CB | Uint16 | Registro di prova | Scrivere 1 per visualizzare un messaggio nella pagina della sorgente DI dell’interfaccia grafica. Si ripristina a 0 all’avvio. |
| 300211 400211 | 0x00D2 | UInt16: anno | Lettura/impostazione di data e ora. L’ora viene modificata non appena termina la scrittura. Vengono modificati solo i campi i cui registri sono stati scritti: se viene scritto solo il mese, viene aggiornato solo il mese. | [0,9999] |
| 300212 400212 | 0x00D3 | UInt16: mese | ^ | [1,12] |
| 300213 400213 | 0x00D4 | UInt16: giorno | ^ | [0,31] |
| 300214 400214 | 0x00D5 | UInt16: ora | ^ | [0,24] |
| 300215 400215 | 0x00D6 | UInt16: minuto | ^ | [0,59] |
| 300216 400216 | 0x00D7 | UInt16: secondo | ^ | [0,59] |
| I seguenti valori possono essere letti con la funzione Modbus 3 o 4. | \< | \< | \< | \< |
| 300001 400001 | 0x0000 | UInt16 (singoli bit) | Uscite digitali | Bit 0: uscita 1 Bit 1: uscita 2 Bit 2: uscita 3 Bit 3: uscita 4 Per la corretta corrispondenza tra bit e uscite, consultare la sezione [Configurazione delle uscite digitali](../io-box/#section-6-6) oppure utilizzare l’interfaccia di prova delle uscite come descritto nella sezione [Prova delle uscite digitali e analogiche](../io-box/#section-6-8). |
| 300002 400002 | 0x0001 | UInt16 (singoli bit) | Stato dello strumento 0 = No 1 = Sì | Bit 0: processo in corso Bit 1: errore critico Bit 2: errore non critico Bit 3: modalità PLC attiva Bit 4: riscaldamento rapido (in modalità invernale) Bit 5: riscaldamento di fondo (modalità invernale) Bit 6: dispositivo di campionamento in uso |
| 300003 400003 | 0x0002 | UInt16 (singoli bit) | Stato degli allarmi, ossia allarmi generati durante l’ultima misurazione. | Bit 0: allarme 1 Bit 1: allarme 2 Bit 2: allarme 3 … |
| 300004 400004 | 0x0003 | UInt32 MSB (singoli bit) | Stato degli avvertimenti, ossia avvertimenti generati durante l’ultima misurazione. | Bit 0: avvertimento W01 Bit 1: avvertimento W02 ... Bit 31: avvertimento W32 |
| 300005 400005 | 0x0004 | UInt32 LSB (singoli bit) | ^ | ^ |
| 300006 400006 | 0x0005 | UInt16 | Codice di errore | Vedere l’elenco dei codici di errore. Nota: E00 (errore software non gestito) viene rinominato 999 per evitare confusione con “nessun errore”. I codici degli errori non critici permangono finché non vengono cancellati automaticamente da un protocollo riuscito o manualmente. |
| 300007 400007 | 0x0006 | UInt16 | Segnale di attività (heartbeat) | Secondi dell’orologio. Il valore cambia ogni secondo; utilizzarlo per monitorare la reattività del sistema. |
| 300008 400008 | 0x0007 | UInt16 | Fase di misurazione | INATTIVO (IDLE) 0 INIZIALIZZAZIONE (INITIALIZING) 1 RISCALDAMENTO (HEATING) 2 RIEMPIMENTO (FILLING) 3 ADESCAMENTO (PRIMING) 4 MISCELAZIONE (MIXING) 5 INCUBAZIONE (INCUBATING) 6 ANALISI (ANALYZING) 7 PULIZIA (CLEANING) 8 RISCIACQUO (FLUSHING) 9 ELABORAZIONE (PROCESSING) 10 VALIDAZIONE (VALIDATING) 11 MOVIMENTO (MOVING) 12 ESPULSIONE (EJECTING) 13 ESPORTAZIONE (EXPORTING) 14 RINOMINA (RENAMING) 15 ELIMINAZIONE (DELETING) 16 SALVATAGGIO (SAVING) 17 AUTOVERIFICA (SELFCHECK) 18 INTERROTTO (ABORTED) 19 SCONOSCIUTO (UNKNOWN) 98 ERRORE (ERROR) 99 |
| 300011 400011 | 0x000A | UInt16 | Avanzamento della misurazione | [0, 100] 0 .. 100 % |
| 300012 400012 | 0x000B | Float 32 MSB | Temperatura della scheda I/O | Celsius |
| 300013 400013 | 0x000C | Float 32 LSB | ^ | ^ |
| 300014 400014 | 0x000D | UInt16 | Umidità presso la scheda I/O | [0, 100] 0 .. 100 % |
| 300015 400015 | 0x000E | UInt16: anno | Data e ora dell’ultimo campionamento | \< |
| 300016 400016 | 0x000F | UInt16: mese | ^ | ^ |
| 300017 400017 | 0x0010 | UInt16: giorno | ^ | ^ |
| 300018 400018 | 0x0011 | UInt16: ora | ^ | ^ |
| 300019 400019 | 0x0012 | UInt16: minuto | ^ | ^ |
| 300020 400020 | 0x0013 | UInt16: secondo | ^ | ^ |
| 300021 400021 | 0x0014 | UInt16 | Percentuale della cartuccia | [0, 100] 0 .. 100 % |
| 300022 400022 | 0x0015 | UInt32 MSB | Numero di serie della cartuccia |  |
| 300023 400023 | 0x0016 | UInt32 LSB | ^ | ^ |
| 300024 400024 | 0x0017 | UInt32 MSB | Numero di serie del riempimento |  |
| 300025 400025 | 0x0018 | UInt32 LSB |  | ^ |
| 300026 400026 | 0x0019 | Uint16 | Tipo di cartuccia | 1 = TCC 1002 = ICC 1030 = ACC 1003 = ICC-BWT |
| 300027 400027 | 0x001A | UInt16: anno | Data di scadenza della cartuccia | Data UTC |
| 300028 400028 | 0x001B | UInt16: mese | ^ | ^ |
| 300029 400029 | 0x001c | UInt16: giorno | ^ | ^ |
| 300031 400031 | 0x001E | UInt32 MSB | Numero di serie dello strumento |  |
| 300032 400032 | 0x001F | UInt32 LSB | ^ | ^ |
| 300033 400033 | 0x0020 | Caratteri 1-2 della stringa | Versione software | Se la stringa è più corta di 16 caratteri, viene completata con caratteri nulli. Esempio: '1.4.0-BS\0\0\0\0...' |
| 300034 400034 | 0x0021 | Caratteri 3-4 della stringa | ^ | ^ |
| 300035 400035 | 0x0022 | Caratteri 5-6 della stringa | ^ | ^ |
| 300036 400036 | 0x0023 | Caratteri 7-8 della stringa | ^ | ^ |
| 300037 400037 | 0x0024 | Caratteri 9-10 della stringa | ^ | ^ |
| 300038 400038 | 0x0025 | Caratteri 11-12 della stringa |  |  |
| 300039 400039 | 0x0026 | Caratteri 13-14 della stringa | ^ | ^ |
| 300040 400040 | 0x0027 | Caratteri 15-16 della stringa | ^ | ^ |
| 300041 400041 | 0x0028 | UInt16 | Memoria rimanente | Numero approssimativo di misurazioni rimanenti prima che il disco sia pieno |
| 300042 400042 | 0x0029 | UInt16 | Vita utile residua della valvola | [0, 100], percentuale di movimenti rimanenti prima della manutenzione. |
| 300043 400043 | 0x002A | UInt16 | Vita utile residua dello stantuffo | [0, 100], percentuale di movimenti rimanenti prima della manutenzione. |
| 300044 400044 | 0x002B | UInt16: anno | Data della prossima manutenzione | Data UTC |
| 300045 400045 | 0x002C | UInt16: mese | ^ | ^ |
| 300046 400046 | 0x002D | UInt16: giorno | ^ | ^ |
| 300101 400101 | 0x0064 | UInt32 MSB | TCC | Si azzera dopo un protocollo di pulizia o al riavvio. |
| 300102 400102 | 0x0065 | UInt32 LSB | ^ | ^ |
| 300103 400103 | 0x0066 | UInt32 MSB | ICC | Sempre 0 se la cartuccia non fornisce ICC. |
| 300104 400104 | 0x0067 | UInt32 LSB | ^ | ^ |
| 300105 400105 | 0x0068 | UInt32 MSB | Gate+ | Sempre 0 se la cartuccia non fornisce Gate+ |
| 300106 400106 | 0x0069 | UInt32 LSB | ^ | ^ |
| 300107 400107 | 0x006A | UInt32 MSB | HNAC |  |
| 300108 400108 | 0x006B | UInt32 LSB | ^ | ^ |
| 300109 400109 | 0x006C | UInt32 MSB | LNAC |  |
| 300110 400110 | 0x006D | UInt32 LSB | ^ | ^ |
| 300111 400111 | 0x006E | Float 32 MSB | HNAP |  |
| 300112 400112 | 0x006F | Float 32 LSB | ^ | ^ |
| 300113 400113 | 0x0070 | UInt32 MSB | ACC | Sempre 0 se non è una cartuccia ACC. |
| 300114 400114 | 0x0071 | UInt32 LSB | ^ | ^ |
| 300115 400115 | 0x0072 | UInt32 MSB | HACC | Sempre 0 se non è una cartuccia ACC. |
| 300116 400116 | 0x0073 | UInt32 LSB | ^ | ^ |
| 300117 400117 | 0x0074 | UInt32 MSB | LACC | Sempre 0 se non è una cartuccia ACC. |
| 300118 400118 | 0x0075 | UInt32 LSB | ^ | ^ |
| 300119 400119 | 0x0076 | Float 32 MSB | HACP | Sempre 0 se non è una cartuccia ACC. |
| 300120 400120 | 0x0077 | Float 32 LSB | ^ | ^ |
| 300121 400121 | 0x0078 | UInt32 MSB | TCC in tempo reale | Come TCC, ma il valore viene aggiornato in tempo reale durante una misurazione. Utile per il rilevamento precoce di una contaminazione (ad esempio: arresto di una pompa o deviazione dell'acqua online). Torna a zero al termine della misurazione. |
| 300122 400122 | 0x0079 | UInt32 LSB | ^ | ^ |
| 300123 400123 | 0x007A | UInt32 MSB | ICC in tempo reale | Vedere sopra. |
| 300124 400124 | 0x007B | UInt32 LSB | ^ | ^ |
| 300125 400125 | 0x007C | UInt32 MSB | Gate+ in tempo reale | Vedere sopra. |
| 300126 400126 | 0x007D | UInt32 LSB | ^ | ^ |
| 300127 400127 | 0x007E | UInt32 MSB | HNAC in tempo reale | Vedere sopra. |
| 300128 400128 | 0x007F | UInt32 LSB | ^ | ^ |
| 300129 400129 | 0x0080 | UInt32 MSB | LNAC in tempo reale | Vedere sopra. |
| 300130 400130 | 0x0081 | UInt32 LSB | ^ | ^ |
| 300131 400131 | 0x0082 | Float 32 MSB | HNAP in tempo reale | Vedere sopra. |
| 300132 400132 | 0x0083 | Float 32 LSB | ^ | ^ |
| 300135 400135 | 0x0086 | UInt32 MSB | ACC in tempo reale | Vedere sopra. |
| 300136 400136 | 0x0087 | UInt32 LSB | ^ | ^ |
| 300137 400137 | 0x0088 | UInt32 MSB | HACC in tempo reale | Vedere sopra. |
| 300138 400138 | 0x0089 | UInt32 LSB | ^ | ^ |
| 300139 400139 | 0x008A | UInt32 MSB | LACC in tempo reale | Vedere sopra. |
| 300140 400140 | 0x008B | UInt32 LSB | ^ | ^ |
| 300141 400141 | 0x008C | Float 32 MSB | HACP in tempo reale | Vedere sopra. |
| 300142 400142 | 0x008D | Float 32 LSB | ^ | ^ |
| 300151 400151 | 0x0096 | UInt16: anno | Data e ora dell’ultimo arresto improvviso. | \< |
| 300152 400152 | 0x0097 | UInt16: mese | ^ | ^ |
| 300153 400153 | 0x0098 | UInt16: giorno | ^ | ^ |
| 300154 400154 | 0x0099 | UInt16: ora | ^ | ^ |
| 300155 400155 | 0x009A | UInt16: minuto | ^ | ^ |
| 300156 400156 | 0x009B | UInt16: secondo | ^ | ^ |
| 300157 400157 | 0x009C | UInt16 | Tempo di spegnimento | In secondi |
| 300165 400165 | 0x00A4 | UInt16: anno | Data e ora dell’ultimo avvio di un protocollo. | \< |
| 300166 400166 | 0x00A5 | UInt16: mese | ^ | ^ |
| 300167 400167 | 0x00A6 | UInt16: giorno | ^ | ^ |
| 300168 400168 | 0x00A7 | UInt16: ora | ^ | ^ |
| 300169 400169 | 0x00A8 | UInt16: minuto | ^ | ^ |
| 300170 400170 | 0x00A9 | UInt16: secondo | ^ | ^ |
| 300171 400171 | 0x00AA | UInt16 | Linea di misurazione corrente di BactoSwitch | Da 1 a 4 |
| 300172 400172 | 0x00AB | UInt16 | Linea di misurazione successiva di BactoSwitch | Da 1 a 4 |
| 300173 400173 | 0x00AC | UInt16 | Portata di BactoSwitch | mL/min |
| 300174 400174 | 0x00AD | UInt16 | Stato di BactoSwitch | 0 significa nessun errore. |
| 300175 400175 | 0x00AE | UInt16 | Collegamento di BactoSwitch | 0 = non collegato 1 = collegato correttamente |
| 300176 400176 | 0x00AF | UInt16 | Stato delle valvole di BactoSwitch | Maschera di bit 0x01 = valvola della linea 1, ecc. int 15 = tutte aperte |
| 300181 400181 | 0x00B4 | UInt32 MSB | CBC |  |
| 300182 400182 | 0x00B5 | UInt32 LSB | ^ | ^ |
| 300183 400183 | 0x00B6 | UInt32 MSB | EBC |  |
| 300184 400184 | 0x00B7 | UInt32 LSB | ^ | ^ |
| 300185 400185 | 0x00B8 | UInt32 MSB | NBC |  |
| 300186 400186 | 0x00B9 | UInt32 LSB | ^ | ^ |
| 300187 400187 | 0x00BA | UInt32 MSB | CBC in tempo reale | Vedere sopra. |
| 300188 400188 | 0x00BB | UInt32 LSB | ^ | ^ |
| 300189 400189 | 0x00BC | UInt32 MSB | EBC in tempo reale | Vedere sopra. |
| 300190 400190 | 0x00BD | UInt32 LSB | ^ | ^ |
| 300191 400191 | 0x00BE | UInt32 MSB | NBC in tempo reale | Vedere sopra. |
| 300192 400192 | 0x00BF | UInt32 LSB | ^ | ^ |

</div>
