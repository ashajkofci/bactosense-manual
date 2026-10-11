---
title: "13. Interfaccia utente web"
sidebar_label: "13. Interfaccia utente web"
sidebar_position: 13
slug: /web-user-interface
---

## 13.1 Informazioni generali {#section-13-1}

- L’interfaccia web consente di consultare ed esportare risultati e altri dati da un computer remoto e di monitorare lo stato dello strumento (processo attivo, livello della cartuccia, avvisi, ecc.).
- BactoSense deve essere collegato alla stessa rete del computer che accede all’interfaccia web.
- L’interfaccia web può essere caricata in qualsiasi browser su computer desktop o dispositivi mobili.
- Adottare tutte le misure consuete per la sicurezza dei dati e della rete.

## 13.2 Collegamento all’interfaccia utente web {#section-13-2}

Un **admin** deve prima attivare l’accesso web HTTP o HTTPS in **Impostazioni → Impostazioni di sistema → Servizi di sistema**, applicare le modifiche e riavviare lo strumento quando richiesto. Per i servizi e le porte, vedere [Recupero di file tramite HTTP o HTTPS](12-data-access-and-export.md#section-12-3).

<div className="manual-narrow-details-scroll">

<table className="manual-table manual-narrow-details manual-narrow-details-split">

<colgroup>
<col className="procedure-step-column" />
<col className="procedure-instruction-column" />
<col className="procedure-detail-column" />
<col className="procedure-detail-column" />
</colgroup>

<tbody>

<tr>

<th scope="col">

</th>

<th scope="col">

OPERAZIONE

</th>

<th scope="col" colSpan="2">

INFORMAZIONI AGGIUNTIVE / IMMAGINI

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

Collegare BactoSense via Ethernet a una rete sicura (ad esempio LAN). Collegare il proprio dispositivo (ad esempio computer o tablet) alla stessa rete.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Nella schermata iniziale dell’interfaccia utente di BactoSense, premere **Impostazioni**, quindi **Informazioni sul sistema**.

</td>

<td>

![BactoSense — Pulsante Impostazioni](/img/gui/it/home-settings-button.png "width=57 class=manual-icon-settings-button-half")

</td>

<td>

![BactoSense — Informazioni di sistema](/img/gui/icons/system-info-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Leggere l’indirizzo IP di BactoSense nella pagina **Informazioni sul sistema**.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Aprire un browser web sul proprio dispositivo.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Inserire `http://<indirizzo IP>` o `https://<indirizzo IP>` nella barra degli indirizzi, in base al servizio attivato. Aggiungere `:<porta>` se la porta è diversa da quella predefinita, quindi premere Invio.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Nella pagina di accesso, utilizzare lo stesso nome utente e la stessa password di BactoSense, quindi premere **Accedi**.

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

</div>

## 13.3 Pagina iniziale in modalità manuale {#section-13-3}

![BactoSense — Dashboard Web](/img/gui/it/web-dashboard.png "width=654 class=manual-figure")

*Figura 13-1 Pagina iniziale dell’interfaccia utente web*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Menu | 2 | Stato dello strumento |
| 3 | Pannello riepilogativo con gli ultimi risultati | 4 | Lingua: menu a discesa per cambiare la lingua. |
| 5 | Menu utente: disconnessione; gli account admin e di assistenza possono anche riavviare BactoSense | 6 | Avanzamento della misurazione corrente |

## 13.4 Download di un file FCS {#section-13-4}

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Nell’interfaccia web, selezionare la pagina Risultati nel pannello di navigazione a sinistra. |  |
| 2. | Individuare la misurazione nella tabella dei risultati appropriata sotto il grafico. Se necessario, scorrere orizzontalmente fino ai collegamenti a destra della riga. |  |
| 3. | Fare clic sul collegamento **fcs** (posizione X). | ![BactoSense — Link di download FCS](/img/gui/it/web-fcs-download.png "width=271 class=manual-figure") |
| 4. | Attendere il completamento del download. |  |

## 13.5 Download di un file ZIP con più risultati {#section-13-5}

I risultati di più misurazioni possono essere scaricati come file ZIP. L’archivio comprende il file FCS e i grafici riepilogativi di ogni misurazione.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Nell’interfaccia web, selezionare la pagina Risultati nel pannello di navigazione a sinistra. |  |
| 2. | Individuare la tabella **Risultati della Modalità online** o **Risultati della Modalità Manuale** per le misurazioni desiderate. |  |
| 3. | Selezionare l’intervallo di date per la tabella e fare clic su **Scaricare in formato ZIP**. Una barra di avanzamento appare nella parte superiore del browser fino all’avvio del download ZIP. | ![BactoSense — Download ZIP](/img/gui/it/web-zip-download.png "width=282 class=manual-figure") |
| 4. | Attendere il completamento del download. |  |

## 13.6 Download di tutti i risultati in formato CSV, XLSX o PDF {#section-13-6}
L’elenco di tutti i risultati può essere scaricato dall’interfaccia web in formato Excel XLSX, CSV o PDF. I risultati della modalità online, della Modalità Manuale e della convalida dello strumento hanno download separati.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Nell’interfaccia web, selezionare la pagina Risultati nel pannello di navigazione a sinistra. |  |
| 2. | Individuare la sezione **SCARICA I RISULTATI** sotto il grafico dei risultati e scegliere la riga della modalità di misurazione desiderata o della convalida dello strumento. |  |
| 3. | Fare clic su **Scaricare in formato XLSX**, **Scaricare in formato CSV** o **Scaricare in formato PDF** nella riga per avviare il download. | ![BactoSense — Formati di download dei risultati](/img/gui/it/web-results-download-formats.png "width=282 class=manual-figure") |
| 4. | Attendere il completamento del download. |  |

## 13.7 Animazione dell’evoluzione dei diagrammi a punti {#section-13-7}

L’interfaccia web può animare i diagrammi a punti della modalità online per aiutare a visualizzare l’evoluzione delle misurazioni. Questa funzione mostra immagini statiche in rapida successione; l’animazione può essere esportata con il pulsante Scaricare in formato GIF.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Nell’interfaccia web, selezionare la pagina Grafici nel pannello di navigazione a sinistra. | ![BactoSense — Navigazione a Grafici](/img/gui/it/web-plots-navigation.png "width=283 class=manual-figure") |
| 2. | Utilizzare le frecce precedente e successiva o il cursore per selezionare una misurazione in base alla sua marca temporale. | ![BactoSense — Selezione della marca temporale del grafico](/img/gui/it/web-plots-measurement-time.png "width=283 class=manual-figure") |
| 3. | Premere il pulsante Play triangolare per avviare l’animazione. Premerlo di nuovo per metterla in pausa. | ![BactoSense — Controlli di riproduzione dei grafici](/img/gui/it/web-plots-play.png "width=283 class=manual-figure") |
| 4. | Impostare **Velocità di animazione** sul numero positivo desiderato di grafici al secondo. |  |
| 5. | Premere **Scaricare in formato GIF** per esportare fino a 60 dei grafici più recenti della modalità online alla velocità scelta. L’esportazione utilizza gli ultimi grafici, indipendentemente dalla posizione del cursore. |  |

## 13.8 Modifica dell’intervallo di misurazione {#section-13-8}
L’intervallo utilizzato per le misurazioni in modalità online può essere modificato dall’interfaccia web.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Nell’interfaccia web, selezionare la pagina Impostazioni nel pannello di navigazione a sinistra. | ![BactoSense — Intervallo di misura](/img/gui/it/web-measurement-interval.png "width=283 class=manual-figure") |
| 2. | Inserire un intervallo da 30 a 360 minuti nel campo **Intervallo di misurazione [minuti]**. |  |
| 3. | Fare clic su **SAVE** per applicare l’intervallo. |  |

## 13.9 Acquisizione di schermate dell’interfaccia grafica {#section-13-9}

Acquisire schermate dell’interfaccia grafica di BactoSense dall’interfaccia web:

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Nell’interfaccia web, selezionare la pagina Informazioni di sistema nel pannello di navigazione a sinistra. | ![BactoSense — Navigazione alle informazioni di sistema Web](/img/gui/it/web-system-info-navigation.png "width=284 class=manual-figure") |
| 2. | Premere **Fai uno screenshot** nella parte inferiore della pagina. |  |
| 3. | La schermata viene visualizzata sotto. |  |

## 13.10 Riavvio dall’interfaccia utente web {#section-13-10}
Un **admin** o un account di assistenza può riavviare BactoSense dall’interfaccia web con la procedura seguente.

:::info[L’accensione remota non è disponibile]

Lo strumento non può essere acceso da remoto.

:::

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Nell’angolo superiore destro dell’interfaccia web, fare clic sul nome utente per aprire il menu utente. | ![BactoSense — Menu utente per il riavvio](/img/gui/it/web-user-reboot-menu.png "width=284 class=manual-figure") |
| 2. | Selezionare **Riavvia**, quindi fare clic su **Riavvia** nella finestra di conferma. |  |
| 3. | Attendere il riavvio dello strumento, ricaricare l’interfaccia web e accedere nuovamente se richiesto. |  |
