---
id: bactolink
title: BactoLink
sidebar_position: 6
slug: /bactolink
document_id: 40501-01
manual_version: "1"
software_version: "2.2"
---

Modulo di connettività per BactoSense e BactoSense Multi. Questa edizione descrive il flusso di lavoro con BactoHub ed è valida a partire dalla versione 2.2 del software BactoSense.

## Informazioni generali per l'utente {#general-user-information}

### Uso previsto {#intended-use}

BactoLink stabilisce una connessione remota tra lo strumento e il PC. Avviare la connessione tramite il portale BactoHub utilizzando HTTPS e un browser web. Il portale è il punto di accesso a BactoLink e agli strumenti associati. Una connessione rimane attiva per **30 minuti**, dopodiché deve essere ristabilita.

### Pittogrammi {#pictograms}

:::info[Informazioni aggiuntive]

Gli avvisi informativi forniscono ulteriori dettagli sull'argomento trattato. Gli elenchi numerati descrivono le procedure pratiche. Le schermate sono esempi e possono differire da quelle del dispositivo attuale.

:::

### Panoramica e prerequisiti {#prerequisites}

BactoLink è costituito da un'antenna, un cavo Ethernet e un iniettore Power-over-Ethernet (PoE). L'iniettore si collega all'alimentazione elettrica di BactoSense o BactoSense Multi.

Prima dell'installazione:

- Verificare che lo strumento utilizzi la **versione software 2.2 o successiva**.
- Attivare **DHCP** e **HTTPS** nelle impostazioni dello strumento.
- Attivare **VNC** se è necessario il relay della GUI.
- Assicurarsi di disporre di un account su [hub.bnovate.com](https://hub.bnovate.com). Se necessario, richiedere un account a [support@bnovate.com](mailto:support@bnovate.com).

### Iniettore Power-over-Ethernet {#poe-injector}

L'iniettore PoE alimenta l'antenna tramite Ethernet. I suoi collegamenti Ethernet e di alimentazione allo strumento sono integrati in modo permanente. Dispone di una porta per il cavo di alimentazione fornito con BactoSense e di un collegamento Ethernet all'antenna.

![Dimensioni dell'iniettore PoE](/img/other-manuals/bactolink-poe-dimensions.png "width=550")

L'altezza dell'iniettore dai piedini alla sommità è di **65.5 mm**.

| Specifica meccanica | Valore |
| --- | --- |
| Materiale | Policarbonato (PC) |
| Connettori | RJ45, connettore di alimentazione |
| Protezione | IP67 |
| Dimensioni, L × H × W | 165 × 165 × 54 mm |
| Temperatura di esercizio | 5–30 °C |

### Antenna {#antenna}

L'antenna si collega all'iniettore PoE tramite Ethernet e alloggia la scheda SIM per le connessioni mobili (**4G/LTE, 3G, 2G**). Per la staffa di montaggio, vedere [Montaggio di BactoLink](#mounting).

![Viste e dimensioni dell'antenna](/img/other-manuals/bactolink-antenna-dimensions.png "width=600")

| Specifica meccanica | Valore |
| --- | --- |
| Materiali | ABS, PC, FR4 |
| Connettore | RJ45 |
| Protezione | IP67 |
| Dimensioni, L × H × W | 165 × 165 × 54 mm |
| Peso | 0.8 kg |
| Temperatura di esercizio | −40–80 °C |

## Installazione {#installation}

### Collegamenti dello strumento {#instrument-connections}

![Collegamenti tra BactoSense, l'iniettore PoE, l'antenna e l'alimentazione elettrica](/img/other-manuals/bactolink-connections.png "width=700")

| Collegamento | Descrizione |
| --- | --- |
| 1 | Collegamento Ethernet tra l'iniettore PoE e la porta RJ45 dello strumento |
| 2 | Collegamento di alimentazione tra l'iniettore PoE e la porta di alimentazione dello strumento |
| 3 | Collegamento Ethernet tra l'iniettore PoE e l'antenna |
| 4 | Alimentazione elettrica dell'iniettore PoE. L'alimentatore è fornito con BactoSense. |

### Collegamento dell'antenna e dell'iniettore PoE {#antenna-connection}

1. Aprire il sacchetto contenente il cavo Ethernet.
2. Aprire la confezione dell'iniettore PoE e il sacchetto separato del connettore. Estrarre il tappo, l'anello di tenuta con apertura, il distanziatore e il connettore per l'iniettore PoE. Disporli sul cavo Ethernet come illustrato.

   ![Ordine dei componenti del connettore PoE sul cavo Ethernet](/img/other-manuals/bactolink-p08-1.png "width=450")

3. Inserire il connettore RJ45 nel connettore PoE. Entrambi consentono un solo orientamento. Spingere il connettore RJ45 il più avanti possibile. Inserire il distanziatore e l'anello di tenuta nel connettore PoE. Avvitare il tappo spingendo delicatamente insieme i componenti, fino a serrarlo a mano. Il raccordo così ottenuto si innesta a baionetta nell'iniettore PoE.

   ![Assemblaggio del connettore PoE](/img/other-manuals/bactolink-p08-2.png "width=400")

4. Disporre davanti a sé l'altra estremità del cavo Ethernet.
5. Estrarre il connettore dell'antenna e l'O-ring dalla confezione dell'antenna.

   ![Connettore dell'antenna e O-ring](/img/other-manuals/bactolink-p08-3.png "width=450")

6. Svitare il connettore dell'antenna e spingere fuori l'anello di tenuta. Se necessario, utilizzare l'asta curva di montaggio per estrarlo.

   ![Rimozione dell'anello di tenuta dal connettore dell'antenna](/img/other-manuals/bactolink-p09-0.png "width=300")

7. Disporre i componenti del connettore dell'antenna sul cavo Ethernet come illustrato.

   :::caution[Assemblare il connettore dell'antenna nell'ordine indicato]

   Collegare prima l'RJ45 all'antenna, fissare il connettore all'antenna e montare il tappo per ultimo. In questo modo si evita che il cavo rimanga bloccato sotto la guarnizione.

   :::

   ![Ordine dei componenti del connettore dell'antenna](/img/other-manuals/bactolink-p09-1.png "width=450")

8. Spingere leggermente il connettore RJ45 nel connettore dell'antenna. Assicurarsi che la sua piccola linguetta si trovi all'interno dell'antenna.
9. Spingere l'anello di tenuta nel connettore dell'antenna.
10. Posizionare l'O-ring sul connettore dell'antenna e collegare l'RJ45.
11. Avvitare il connettore nell'antenna.
12. Avvitare il tappo sul connettore.

    ![Connettore dell'antenna assemblato](/img/other-manuals/bactolink-p10-0.png "width=350")

### Montaggio di BactoLink {#mounting}

Il kit di montaggio consente di fissare l'antenna a oggetti cilindrici o a sezione quadrata, tubi o aste.

1. Aprire la confezione dell'antenna e individuare la staffa e i componenti di montaggio.
2. Identificare la piastra di montaggio (A), l'asta curva (B) e il distanziatore (C). La piastra si fissa a BactoLink, l'asta curva lo mantiene in posizione e il distanziatore mantiene la distanza tra l'asta e la piastra.

   ![Piastra di montaggio, asta curva e distanziatore](/img/other-manuals/bactolink-p11-1.png "width=400")

3. Individuare le due viti e le rondelle nella confezione dell'antenna.
4. Posizionare la piastra di montaggio su BactoLink. Inserire le viti attraverso la piastra in BactoLink, collocando le rondelle tra le teste delle viti e la piastra. Serrare con una **chiave a brugola da 5 mm** fino a ottenere un fissaggio sicuro.

   ![Fissaggio della piastra di montaggio a BactoLink](/img/other-manuals/bactolink-p11-3.png "width=300")

5. Individuare i due dadi flangiati.
6. Posizionare l'asta curva e il distanziatore sulla piastra nell'orientamento desiderato.

   ![Staffa di montaggio assemblata sull'antenna](/img/other-manuals/bactolink-p11-2.png "width=450")

7. Inserire i due dadi flangiati sulle estremità filettate dell'asta curva. Serrare a mano o con una **chiave da 13 mm**, fino a quando i dadi non si muovono e BactoLink è fissato saldamente.

   ![Fissaggio dell'asta curva e del distanziatore](/img/other-manuals/bactolink-p12-1.png "width=450")

### Prima installazione {#first-installation}

1. Verificare che lo strumento utilizzi la **versione software 2.2 o successiva**. Per un aggiornamento, contattare [support@bnovate.com](mailto:support@bnovate.com).
2. Scansionare il codice a barre 2D sul retro dell'antenna. Inserire il nome utente e la password precedentemente scelti per BactoHub. Se è necessario un account, contattare l'assistenza.
3. Spegnere lo strumento. Collegare i dispositivi come descritto in [Collegamenti dello strumento](#instrument-connections) e [Collegamento dell'antenna e dell'iniettore PoE](#antenna-connection).

   ![Esempio di collegamenti dello strumento](/img/other-manuals/bactolink-p13-1.png "width=450")

4. Accendere il dispositivo.
5. Aprire **Home → System Settings → Network**. Se necessario, attivare **DHCP**.

   :::caution[Attendere prima di riavviare]

   Non spegnere e riaccendere immediatamente lo strumento.

   :::

   ![Esempio di configurazione di rete](/img/other-manuals/bactolink-p13-2.png "width=500")

6. Aprire **Home → System Settings → System Services**. Attivare **HTTPS** per l'accesso alla WebUI e assegnare la **porta 443**. Se l'impostazione è stata modificata, riavviare BactoSense. HTTPS è necessario per il funzionamento di BactoLink. Spegnere e riaccendere lo strumento oppure eseguire prima il passaggio facoltativo successivo.
7. Se è necessario il relay della GUI, attivare **VNC** in **System Services**, assegnandogli la **porta 5900**. Spegnere e riaccendere quindi lo strumento.

   :::caution[Visibilità dello schermo da remoto]

   Con il relay della GUI, le azioni sullo schermo sono visibili alle persone presenti presso lo strumento e agli utenti connessi da remoto. Potrebbero essere condivise informazioni riservate.

   :::

8. Configurare BactoLink utilizzando il numero di serie e un nome facilmente riconoscibile. Fare clic su **Connect**.

   ![Configurazione della connessione BactoLink](/img/other-manuals/bactolink-p15-0.png "width=500")

9. Attendere che lo strumento sia connesso, quindi fare clic su **Finish**.

   ![Completamento della configurazione della connessione](/img/other-manuals/bactolink-p15-1.png "width=500")

10. Lo strumento compare nell'elenco degli strumenti di BactoHub. Selezionare **WebUI** o **GUI relay**. La connessione si apre in una scheda separata e rimane valida per **30 minuti**. Riconnettersi al termine di questo periodo.

    ![Elenco degli strumenti BactoHub con connessioni WebUI e GUI relay](/img/other-manuals/bactolink-p15-2.png "width=500")

### Riconfigurazione di BactoHub {#reconfiguration}

1. Fare clic su **Initialize BactoLink** sotto **My Instruments**. Inserire il numero di serie dello strumento e un nome facilmente riconoscibile, quindi premere **Continue**.
2. Ripetere i passaggi **2–9** della [Prima installazione](#first-installation). È quindi possibile accedere allo strumento tramite WebUI e GUI relay.

## Connessioni remote {#remote-connections}

### Interfaccia utente web (WebUI) {#webui}

La WebUI consente di accedere ai dati dello strumento tramite la porta RJ45. Fare clic su **WebUI** in BactoHub per stabilire una connessione tramite BactoLink. Se si riavvia BactoSense tramite la WebUI, ricaricare anche la pagina web.

#### Password

Quando richiesto, inserire il nome utente del dispositivo BactoSense (**Basic**, **Advanced**, **Admin** o **Service**) e la password scelta.

![Richiesta di accesso alla WebUI](/img/other-manuals/bactolink-p17-0.png "width=350")

#### Pannello di controllo

Il pannello di controllo fornisce gli ultimi risultati delle misure, lo stato dello strumento e gli avvisi relativi alle cartucce scadute.

![Pannello di controllo della WebUI](/img/other-manuals/bactolink-p17-1.png "width=650")

#### Grafici a punti

I grafici a punti mostrano un'animazione delle misure recenti. Il caricamento può richiedere tempo, a seconda della connessione. Iniziare con la velocità di animazione **1**; utilizzare velocità maggiori una volta caricate completamente le immagini. Sono disponibili opzioni di download nei formati GIF e FCS.

![Grafici a punti e comandi di animazione della WebUI](/img/other-manuals/bactolink-p17-2.png "width=650")

#### Risultati

La sezione dei risultati mostra le misure nel tempo e offre opzioni di download. Sotto il grafico sono presenti aree di download per la modalità automatica, la modalità manuale e la validazione dello strumento. I risultati automatici e manuali sono elencati in fondo. È possibile visualizzarli come tabella, scaricare file ZIP cumulativi oppure scaricare file IMG e FCS per ogni misura. BactoSense Multi mostra solo la modalità manuale e non dispone di un grafico delle serie temporali.

![Risultati e aree di download della WebUI](/img/other-manuals/bactolink-p18-0.png "width=650")

#### Registro dei protocolli

Il registro dei protocolli mostra i protocolli eseguiti e i messaggi di errore. È possibile scaricare i dati in formato CSV.

![Registro dei protocolli della WebUI](/img/other-manuals/bactolink-p18-1.png "width=650")

#### Registro degli errori

Il registro degli errori elenca errori e avvisi, scaricabili in formato XLSX, CSV o PDF.

![Registro degli errori della WebUI](/img/other-manuals/bactolink-p19-0.png "width=650")

#### Informazioni di sistema

La sezione delle informazioni di sistema fornisce informazioni generali sul sistema e consente di acquisire schermate.

![Informazioni di sistema della WebUI](/img/other-manuals/bactolink-p19-1.png "width=650")

#### Impostazioni

La sezione delle impostazioni consente di modificare i nomi dei campioni, gli intervalli di misura e il nome dello strumento. Non è disponibile per BactoSense Multi.

![Impostazioni della WebUI](/img/other-manuals/bactolink-p19-2.png "width=650")

### Relay dell'interfaccia utente grafica (GUI relay) {#gui-relay}

Il relay della GUI consente l'accesso remoto al desktop come se si fosse fisicamente presenti presso lo strumento.

![Esempio di desktop remoto tramite GUI relay](/img/other-manuals/bactolink-p20-0.png "width=650")

:::caution[Visibilità dello schermo da remoto]

Le azioni sullo schermo sono visibili alle persone presenti presso lo strumento e agli utenti connessi da remoto. Potrebbero essere condivise informazioni riservate.

:::

## Risoluzione dei problemi {#troubleshooting}

Se lo strumento era spento durante l'installazione, BactoLink dovrebbe funzionare immediatamente. Se i problemi persistono:

1. Assicurarsi che BactoLink sia completamente acceso prima di accendere BactoSense. Attendere almeno **3 minuti** affinché lo strumento stabilisca una connessione di rete.
2. Verificare la connettività della rete mobile nel luogo di installazione utilizzando il proprio telefono cellulare.
3. Se non è possibile stabilire una connessione, scollegare e ricollegare l'antenna all'iniettore PoE per spegnerla e riaccenderla.
4. Controllare tutti i collegamenti sull'iniettore e sugli strumenti collegati.
5. Se i problemi persistono, spegnere e riaccendere BactoSense.

## Editore e contatti {#contact}

© bNovate Technologies SA. Con riserva di modifiche tecniche senza preavviso, ottobre 2023. Redatto da bNovate Technologies SA. La copia, la modifica o la distribuzione del documento a terzi richiede il consenso esplicito dell'editore.

bNovate Technologies SA, Ch. Dent d’Oche 1A, CH-1024 Ecublens, Svizzera. Telefono: +41 21 552 14 21. [info@bnovate.com](mailto:info@bnovate.com) · [www.bnovate.com](https://www.bnovate.com).
