---
title: "12. Accesso ai dati ed esportazione"
sidebar_label: "12. Accesso ai dati ed esportazione"
sidebar_position: 12
slug: /data-access-and-export
---

## 12.1 Esportazione dei dati su un dispositivo USB {#section-12-1}

Per esportare i dati di misurazione, consultare la sezione 10.8.1.

### 12.1.1 Esportazione di impostazioni, diagnostica o tutti i dati su USB {#section-12-1-1}

La funzione “Special import/export” consente di esportare tutti i dati di misurazione dello strumento oppure solo i dati diagnostici interpretabili dai tecnici dell’assistenza.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINE |
| --- | --- | --- |
| 1. | Nella schermata Home, premere Impostazioni per aprire il menu delle impostazioni. |  |
| 2. | Premere Maintenance e poi Special export import. |  |
| 3. | Collegare un dispositivo di archiviazione USB. L’unità flash USB deve essere formattata in FAT32. Se necessario, premere Refresh USB list finché il dispositivo non viene visualizzato. |  |
| 4. | Nel campo Folder name viene mostrato il nome della cartella che sarà creata sul dispositivo USB. Inserire un nuovo nome se desiderato. | <img src="/img/manual/cell-2af37708a475.png" alt="Illustrazione della tabella a pagina 114 del manuale" width="261" className="manual-figure" loading="lazy"/> |
| 5. | • Per esportare tutti i dati, premere Export all. • Per esportare i dati diagnostici, premere Export diagnostics. • Per esportare le impostazioni, premere Export diagnostics. Non rimuovere il dispositivo di archiviazione USB durante il trasferimento dei dati. | L’esportazione di tutti i dati può richiedere diverse ore. Se la capacità di archiviazione disponibile sul dispositivo USB è insufficiente, viene visualizzata una notifica. |
| 6. | Al termine dell’esportazione, premere OK e rimuovere il dispositivo USB. |  |

## 12.2 Recupero dei dati tramite FTP {#section-12-2}

È possibile accedere da remoto ai dati di BactoSense tramite il protocollo FTP (RFC 3659).

- L’autenticazione FTP utilizza le stesse coppie nome utente/password dell’interfaccia grafica dello strumento. I nomi degli account predefiniti sono: basic, advanced e admin.
- I file CSV ed Excel vengono generati al momento e contengono quindi sempre i dati di misurazione più recenti.

<img src="/img/figures-second/figure-f9252ec82a57de.webp" alt="Figura 12-1 Vista Manage services dell’interfaccia utente di BactoSense." width="559" className="manual-figure" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Illustrazione dal manuale d’uso BactoSense" width="57" className="manual-icon" loading="lazy" />

*Figura 12-1 Vista Manage services dell’interfaccia utente di BactoSense.*

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINE |
| --- | --- | --- |
| 1. | • Installare un client FTP sul dispositivo da utilizzare per recuperare i dati, ad esempio un portatile. • In alternativa, è possibile utilizzare Esplora file di Windows. |  |
| 2. | Collegare BactoSense via Ethernet a una rete sicura (ad esempio LAN). Collegare il proprio dispositivo alla stessa rete. | Per informazioni sulle configurazioni di rete (ossia impostazioni IP statiche e dinamiche), consultare la sezione 8.6. |
| 3. | Nella schermata Home, premere Impostazioni per aprire il menu delle impostazioni. |  |
| 4. | Premere il pulsante Impostazioni di sistema. |  |
| 5. | Premere il pulsante Servizi di sistema. |  |
| 6. | Assicurarsi che sia selezionata la casella Enable FTP data access. |  |
| 7. | Scegliere una porta per il server FTP. | La porta predefinita è la 21. |

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINE |
| --- | --- | --- |
| 8. | Premere Apply per riavviare BactoSense. | Necessario solo se è stata modificata la configurazione. |
| 9. | Nella schermata Home, premere Impostazioni, quindi Informazioni sul sistema per recuperare l’indirizzo IP di BactoSense. | Per informazioni sulle configurazioni di rete (ossia impostazioni IP statiche e dinamiche), consultare la sezione 8.6. |
| 10. | Per il client FTP: aprire il client e inserire i dati di accesso. Per Esplora file di Windows: inserire il seguente indirizzo nella barra degli indirizzi: ftp://user:password@ip:port | • User/username: nome utente per accedere a BactoSense • Password: password per accedere a BactoSense • Host/ip: indirizzo IP di BactoSense • Port: porta configurata nella vista System services (vedere figura 12-1) |

## 12.3 Recupero dei file tramite HTTP o HTTPS {#section-12-3}

I server HTTP e HTTPS sono abilitati per impostazione predefinita e accessibili tramite un browser web o una libreria di richieste HTTP. Utilizzare la procedura seguente per recuperare file specifici tramite HTTP o HTTPS. In alternativa, considerare l’interfaccia web (capitolo 13) o FTP (sezione 12.2).

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINE |
| --- | --- | --- |
| 1. | Collegare BactoSense via Ethernet a una rete sicura (ad esempio LAN). Collegare il proprio dispositivo alla stessa rete. | Per informazioni sulle configurazioni di rete (ossia impostazioni IP statiche e dinamiche), consultare la sezione 8.6. |
| 2. | Nella schermata Home, premere Impostazioni per aprire il menu delle impostazioni. |  |
| 3. | Premere il pulsante Impostazioni di sistema. |  |
| 4. | Premere il pulsante Servizi di sistema. |  |
| 5. | Per HTTP: assicurarsi che sia selezionata la casella Abilita l'accesso web HTTP. Per HTTPS: assicurarsi che sia selezionata la casella Abilita l'accesso web HTTPS. |  |
| 6. | Scegliere una porta per il server HTTP o HTTPS. | La porta predefinita per HTTP è 80. La porta predefinita per HTTPS è 443. |

<table className="manual-table"><tbody><tr><th scope="col"></th><th scope="col">OPERAZIONE</th><th scope="col">INFORMAZIONI AGGIUNTIVE / IMMAGINE</th></tr><tr><td>7.</td><td>Premere Apply per riavviare BactoSense.</td><td>Necessario solo se è stata modificata la configurazione.</td></tr><tr><td>8.</td><td>Nella schermata Home, premere Impostazioni, quindi Informazioni sul sistema per recuperare l’indirizzo IP di BactoSense.</td><td></td></tr><tr><td>9.</td><td colSpan="2">Aprire un browser web sul proprio dispositivo e inserire l’indirizzo del file di destinazione nel campo degli indirizzi. L’indirizzo del file ha la seguente forma. Per HTTP: <code>http&#58;//ipaddress&#58;port/export/filename.extension?hash=myhash</code> Esempio: http://192.168.1.2/export/history_auto.xlsx?hash=QWRtaW46MTExMQ Per HTTPS: <code>https&#58;//ipaddress&#58;port/export/filename.extension?hash=myhash</code> Esempio: https://192.168.1.2/export/history_auto.xlsx?hash=QWRtaW46MTExMQ <table><thead><tr><th>Nome</th><th>Descrizione</th></tr></thead><tbody><tr><td><code>ipaddress</code></td><td>Indirizzo IP locale dello strumento</td></tr><tr><td><code>port</code></td><td>Porta del server HTTP o HTTPS (per impostazione predefinita rispettivamente 80 e 443)</td></tr><tr><td><code>filename</code></td><td>Nome del file di destinazione. Esempio: history_auto</td></tr><tr><td><code>extension</code></td><td>Estensione del file (csv, xlsx, pdf)</td></tr><tr><td><code>myhash</code></td><td>Chiave di sicurezza contenente l’identificazione dell’utente. La chiave è univoca per ogni combinazione utente-password. È possibile trovarla nell’interfaccia web (capitolo 13) copiando il collegamento mostrato durante il download di un file. Ad esempio: hash=QWRtaW46MTExMQ</td></tr></tbody></table></td></tr></tbody></table>

## 12.4 Trasmissione dell’interfaccia grafica tramite VNC {#section-12-4}

Virtual Network Computing (VNC) è un sistema di condivisione del desktop grafico per controllare da remoto un altro computer. Trasmette attraverso una rete gli input di tastiera e mouse da un computer all’altro e gli aggiornamenti dello schermo grafico. Il server VNC integrato in BactoSense consente di condividere l’interfaccia utente solo sulla rete locale (LAN), con l’eccezione dell’accesso remoto tramite VPN.

:::warning[Limitare l’accesso VNC]

VNC è un protocollo non sicuro e non è consigliato al di fuori di una rete locale o con una connessione VPN.

:::

:::info[Chiudere VNC dopo l’uso]

Una connessione VNC può rallentare l’interfaccia utente perché richiede molta potenza di elaborazione. Assicurarsi di chiudere la connessione VNC dopo l’uso.

:::

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINE |
| --- | --- | --- |
| 1. | Installare un client VNC sul computer. |  |
| 2. | Collegare BactoSense via Ethernet a una rete sicura (LAN). Collegare il computer alla stessa rete. | Per informazioni sulle configurazioni di rete (ossia impostazioni IP statiche e dinamiche), consultare la sezione 8.6. |
| 3. | Nella schermata Home, premere Impostazioni per aprire il menu delle impostazioni. |  |
| 4. | Premere il pulsante Impostazioni di sistema. |  |
| 5. | Premere il pulsante Servizi di sistema. |  |
| 6. | Assicurarsi che sia selezionata la casella Enable VNC remote control. |  |
| 7. | Scegliere una porta per il server VNC. | La porta predefinita è la 5900. |
| 8. | Premere Apply per riavviare BactoSense. | Necessario solo se è stata modificata la configurazione. |
| 9. | Nella schermata Home, premere Impostazioni, quindi Informazioni sul sistema per recuperare l’indirizzo IP di BactoSense. |  |
| 10. | Aprire il client VNC sul computer e collegarsi a BactoSense utilizzando l’indirizzo IP e la porta identificati in precedenza. | Il client VNC potrebbe consentire di modificare le impostazioni per ottimizzare la velocità della connessione, se necessario. |
| 11. | Al termine, disabilitare la connessione VNC nella pagina System services di BactoSense. | La connessione VNC può rallentare l’interfaccia utente di BactoSense. |
