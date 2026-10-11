---
title: "12. Accesso ai dati ed esportazione"
sidebar_label: "12. Accesso ai dati ed esportazione"
sidebar_position: 12
slug: /data-access-and-export
---

## 12.1 Esportazione dei dati su un dispositivo USB {#section-12-1}

Per esportare i dati di misurazione, consultare la sezione [Esportazione su un’unità USB](10-measurements.md#section-10-8-1).

### 12.1.1 Esportazione di impostazioni, diagnostica o tutti i dati su USB {#section-12-1-1}

La funzione “Special import/export” consente di esportare tutti i dati di misurazione dello strumento oppure solo i dati diagnostici interpretabili dai tecnici dell’assistenza.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINE |
| --- | --- | --- |
| 1. | Come utente Advanced o Admin, nella schermata Home premere Impostazioni per aprire il menu delle impostazioni. |  |
| 2. | Premere il pulsante Manutenzione. Premere il pulsante Importazione/Esportazione speciale. |  |
| 3. | Collegare un dispositivo di archiviazione USB. L’unità flash USB deve essere formattata in FAT32. Se necessario, premere Aggiorna l'elenco USB finché il dispositivo non viene visualizzato. |  |
| 4. | Nel campo Folder name viene mostrato il nome della cartella che sarà creata sul dispositivo USB. Inserire un nuovo nome se desiderato. | ![BactoSense — Importazione ed esportazione USB](/img/gui/it/usb-import-and-export.png "width=261 class=manual-figure") |
| 5. | • Per esportare tutti i dati, premere Esporta tutto. • Per esportare i dati diagnostici, premere Esporta la diagnostica. • Per esportare le impostazioni, premere Esporta la diagnostica. Non rimuovere il dispositivo di archiviazione USB durante il trasferimento dei dati. | L’esportazione di tutti i dati può richiedere diverse ore. Se la capacità di archiviazione disponibile sul dispositivo USB è insufficiente, viene visualizzata una notifica. |
| 6. | Al termine dell’esportazione, premere OK e rimuovere il dispositivo USB. |  |

## 12.2 Recupero dei dati tramite FTP {#section-12-2}

È possibile accedere da remoto ai dati di BactoSense tramite il protocollo FTP (RFC 3659).

- L’autenticazione FTP utilizza le stesse coppie nome utente/password dell’interfaccia grafica dello strumento. I nomi degli account predefiniti sono: basic, advanced e admin.
- I file CSV ed Excel vengono generati al momento e contengono quindi sempre i dati di misurazione più recenti.

![BactoSense — Servizi di sistema](/img/gui/it/system-services.png "width=559 class=manual-figure")

*Figura 12-1 Vista Manage services dell’interfaccia utente di BactoSense.*

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINE |
| --- | --- | --- |
| 1. | • Installare un client FTP sul dispositivo da utilizzare per recuperare i dati, ad esempio un portatile. • In alternativa, è possibile utilizzare Esplora file di Windows. |  |
| 2. | Collegare BactoSense via Ethernet a una rete sicura (ad esempio LAN). Collegare il proprio dispositivo alla stessa rete. | Per informazioni sulle configurazioni di rete (ossia impostazioni IP statiche e dinamiche), consultare la sezione [Configurazione della rete](08-general-operations-and-configurations.md#section-8-6). |
| 3. | Come utente Admin, nella schermata Home premere Impostazioni per aprire il menu delle impostazioni. |  |
| 4. | Premere il pulsante Impostazioni di sistema. |  |
| 5. | Premere il pulsante Servizi di sistema. |  |
| 6. | Assicurarsi che sia selezionata la casella Enable FTP data access. |  |
| 7. | Scegliere una porta per il server FTP. | La porta predefinita è la 21. |
| 8. | Premere Applica per salvare le modifiche. Se viene richiesto un riavvio, premere Riavvia ora. | Necessario solo se è stata modificata la configurazione. |
| 9. | Nella schermata Home, premere Impostazioni, quindi Informazioni sul sistema per recuperare l’indirizzo IP di BactoSense. | Per informazioni sulle configurazioni di rete (ossia impostazioni IP statiche e dinamiche), consultare la sezione [Configurazione della rete](08-general-operations-and-configurations.md#section-8-6). |
| 10. | Per il client FTP: aprire il client e inserire i dati di accesso. Per Esplora file di Windows: inserire il seguente indirizzo nella barra degli indirizzi: ftp://user:password@ip:port | • User/username: nome utente per accedere a BactoSense • Password: password per accedere a BactoSense • Host/ip: indirizzo IP di BactoSense • Port: porta configurata nella vista System services (vedere figura 12-1) |

## 12.3 Recupero dei file tramite HTTP o HTTPS {#section-12-3}

I server HTTP e HTTPS sono abilitati per impostazione predefinita e accessibili tramite un browser web o una libreria di richieste HTTP. Utilizzare la procedura seguente per recuperare file specifici tramite HTTP o HTTPS. In alternativa, considerare l’interfaccia web (capitolo [Interfaccia utente web](13-web-user-interface.md)) o FTP (sezione [Recupero dei dati tramite FTP](12-data-access-and-export.md#section-12-2)).

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

OPERAZIONE

</th>

<th scope="col">

INFORMAZIONI AGGIUNTIVE / IMMAGINE

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

1\.

</td>

<td>

Collegare BactoSense via Ethernet a una rete sicura (ad esempio LAN). Collegare il proprio dispositivo alla stessa rete.

</td>

<td>

Per informazioni sulle configurazioni di rete (ossia impostazioni IP statiche e dinamiche), consultare la sezione [Configurazione della rete](08-general-operations-and-configurations.md#section-8-6).

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Come utente Admin, nella schermata Home premere Impostazioni per aprire il menu delle impostazioni.

</td>

<td>



</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Premere il pulsante Impostazioni di sistema.

</td>

<td>



</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Premere il pulsante Servizi di sistema.

</td>

<td>



</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Per HTTP: assicurarsi che sia selezionata la casella Abilita l'accesso web HTTP. Per HTTPS: assicurarsi che sia selezionata la casella Abilita l'accesso web HTTPS.

</td>

<td>



</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Scegliere una porta per il server HTTP o HTTPS.

</td>

<td>

La porta predefinita per HTTP è 80. La porta predefinita per HTTPS è 443.

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

Premere Applica per salvare le modifiche. Se viene richiesto un riavvio, premere Riavvia ora.

</td>

<td>

Necessario solo se è stata modificata la configurazione.

</td>

</tr>

<tr>

<td>

8\.

</td>

<td>

Nella schermata Home, premere Impostazioni, quindi Informazioni sul sistema per recuperare l’indirizzo IP di BactoSense.

</td>

<td>

</td>

</tr>

<tr>

<td>

9\.

</td>

<td colSpan="2">

Aprire un browser web sul proprio dispositivo e inserire l’indirizzo del file di destinazione nel campo degli indirizzi. L’indirizzo del file ha la seguente forma. Per HTTP: `http://ipaddress:port/export/filename.extension?hash=myhash` Esempio: http://192.168.1.2/export/history_auto.xlsx?hash=QWRtaW46MTExMQ Per HTTPS: `https://ipaddress:port/export/filename.extension?hash=myhash` Esempio: https://192.168.1.2/export/history_auto.xlsx?hash=QWRtaW46MTExMQ

<table className="manual-http-parameters">
<colgroup>
<col className="http-parameter-column" />
<col className="http-description-column" />
</colgroup>

<thead>

<tr>

<th>

Nome

</th>

<th>

Descrizione

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`ipaddress`

</td>

<td>

Indirizzo IP locale dello strumento

</td>

</tr>

<tr>

<td>

`port`

</td>

<td>

Porta del server HTTP o HTTPS (per impostazione predefinita rispettivamente 80 e 443)

</td>

</tr>

<tr>

<td>

`filename`

</td>

<td>

Nome del file di destinazione. Esempio: history_auto

</td>

</tr>

<tr>

<td>

`extension`

</td>

<td>

Estensione del file (csv, xlsx, pdf)

</td>

</tr>

<tr>

<td>

`myhash`

</td>

<td>

Chiave di sicurezza contenente l’identificazione dell’utente. La chiave è univoca per ogni combinazione utente-password. È possibile trovarla nell’interfaccia web (capitolo [Interfaccia utente web](../web-user-interface/)) copiando il collegamento mostrato durante il download di un file. Ad esempio: hash=QWRtaW46MTExMQ

</td>

</tr>

</tbody>

</table>

</td>

</tr>

</tbody>

</table>

## 12.4 Trasmissione dell’interfaccia grafica tramite VNC {#section-12-4}

Virtual Network Computing (VNC) è un sistema di condivisione del desktop grafico per controllare da remoto un altro computer. Trasmette attraverso una rete gli input di tastiera e mouse da un computer all’altro e gli aggiornamenti dello schermo grafico. Il server VNC integrato in BactoSense consente di condividere l’interfaccia utente solo sulla rete locale (LAN), con l’eccezione dell’accesso remoto tramite VPN.

:::caution[Limitare l’accesso VNC]

VNC è un protocollo non sicuro e non è consigliato al di fuori di una rete locale o con una connessione VPN.

:::

:::info[Chiudere VNC dopo l’uso]

Una connessione VNC può rallentare l’interfaccia utente perché richiede molta potenza di elaborazione. Assicurarsi di chiudere la connessione VNC dopo l’uso.

:::

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINE |
| --- | --- | --- |
| 1. | Installare un client VNC sul computer. |  |
| 2. | Collegare BactoSense via Ethernet a una rete sicura (LAN). Collegare il computer alla stessa rete. | Per informazioni sulle configurazioni di rete (ossia impostazioni IP statiche e dinamiche), consultare la sezione [Configurazione della rete](08-general-operations-and-configurations.md#section-8-6). |
| 3. | Come utente Admin, nella schermata Home premere Impostazioni per aprire il menu delle impostazioni. |  |
| 4. | Premere il pulsante Impostazioni di sistema. |  |
| 5. | Premere il pulsante Servizi di sistema. |  |
| 6. | Assicurarsi che sia selezionata la casella Enable VNC remote control. |  |
| 7. | Scegliere una porta per il server VNC. | La porta predefinita è la 5900. |
| 8. | Premere Applica per salvare le modifiche. Se viene richiesto un riavvio, premere Riavvia ora. | Necessario solo se è stata modificata la configurazione. |
| 9. | Nella schermata Home, premere Impostazioni, quindi Informazioni sul sistema per recuperare l’indirizzo IP di BactoSense. |  |
| 10. | Aprire il client VNC sul computer e collegarsi a BactoSense utilizzando l’indirizzo IP e la porta identificati in precedenza. | Il client VNC potrebbe consentire di modificare le impostazioni per ottimizzare la velocità della connessione, se necessario. |
| 11. | Al termine, tornare a Servizi di sistema, disattivare la casella VNC e premere Applica. Se viene richiesto un riavvio, premere Riavvia ora. | La connessione VNC può rallentare l’interfaccia utente di BactoSense. |
