---
title: "5. Funzionamento"
sidebar_label: "5. Funzionamento"
slug: /operation
sidebar_position: 5
description: "Manuale d’uso BactoSwitch: Funzionamento."
---

## 5.1 Funzionamento tramite l’interfaccia grafica di BactoSense {#section-5-1}

Questa sezione fornisce un’introduzione di base al funzionamento di BactoSwitch e alla visualizzazione dei risultati, che sono molto simili al funzionamento e alla visualizzazione dei dati di BactoSense in modalità online. Per ulteriori dettagli, consultare la sezione [Misurazione automatica in modalità online](/bactosense/measurements#section-10-2) nella versione più recente del manuale d’uso di BactoSense.

### 5.1.1 Avvio delle misure in modalità online {#section-5-1-1}

Assicurarsi che BactoSwitch sia installato correttamente come descritto nel capitolo [Installazione](04-installation.md).

Passare alla schermata Home dell’interfaccia utente di BactoSense. Se lo strumento è in modalità manuale, passare alla modalità online con **Modalità**. Premere quindi **Avvio**:

![Schermata Home di BactoSense in modalità online con Avvio evidenziato](/img/gui/it/bactoswitch-home-start.png "width=639")

Nella finestra del grafico della modalità online, premere **Avvio**:

![Finestra del grafico della modalità online con Avvio evidenziato](/img/gui/it/bactoswitch-plot-start.png "width=637")

Selezionare il protocollo **Water Analysis with BactoSwitch** e premere **Avanti**.

![Selezione del protocollo con Water Analysis with BactoSwitch selezionato](/img/gui/it/bactoswitch-protocol-selection.png "width=638")

Infine, selezionare l’intervallo di misura e premere **Avvio**. Si noti che si tratta dell’intervallo tra una misura e la successiva. L’intervallo di misura per ciascuna sorgente è N volte più lungo, dove N è il numero di sorgenti abilitate. Ad esempio, se si abilitano 4 sorgenti e si seleziona un intervallo di 30 min, ogni singola sorgente viene misurata a intervalli di 2 h.

![Impostazioni dell’intervallo con Avvio evidenziato](/img/gui/it/bactoswitch-interval-settings.png "width=635")

### 5.1.2 Visualizzazione dei risultati delle misure {#section-5-1-2}

Non appena le misure vengono avviate, viene nuovamente visualizzata la finestra del grafico della modalità online. Quando è collegato un BactoSwitch, la finestra della modalità online visualizza i conteggi delle singole linee [1/mL], ma non LNA/HNA [%] né altri parametri.

![Grafico della modalità online con una curva per ogni linea](/img/gui/it/bactoswitch-plot-lines.png "width=637")

Le impostazioni di visualizzazione possono essere modificate tramite il pulsante al centro della parte superiore del grafico.

![Impostazioni di visualizzazione del grafico della modalità online](/img/gui/it/bactoswitch-display-settings.png "width=633")

Premendo il pulsante **Visualizza i risultati** si apre l’elenco **Risultati della Modalità Online**. I nomi dei campioni corrispondono ai nomi delle linee impostati nella sezione [Configurazione delle linee](04-installation.md#section-4-6).

![Elenco dei risultati della modalità online con una voce per ogni misura di linea](/img/gui/it/bactoswitch-online-results.png "width=630")

Premendo una delle misure se ne visualizzano i dettagli (anche in questo caso, per ulteriori dettagli consultare il manuale d’uso di BactoSense).

![Dettagli del risultato in modalità online di una misura BactoSwitch](/img/gui/it/bactoswitch-result-details.png "width=637")

Premendo il pulsante **Filtro** nell’elenco **Risultati della Modalità Online** si apre la finestra **Filtra i risultati**. Qui è possibile filtrare i risultati in base a una stringa tramite il campo **Filtra per nome**.

![Finestra Filtra i risultati](/img/gui/it/bactoswitch-filter-results.png "width=635")

Oltre al filtraggio per data di inizio e di fine e per nome della misura, premendo il pulsante **Filtrare per linea** è possibile filtrare i risultati per linea BactoSwitch.

![Finestra Filtra i risultati con Filtrare per linea evidenziato](/img/gui/it/bactoswitch-filter-by-line-button.png "width=638")

![Selezione di una linea di campionamento BactoSwitch](/img/gui/it/bactoswitch-select-line.png "width=635")

I filtri si applicano non solo all’elenco dei risultati della modalità online, ma anche al grafico della modalità online, il che consente di rappresentare selettivamente i risultati in base ai numeri o ai nomi delle linee (come definiti nella sezione [Configurazione delle linee](04-installation.md#section-4-6)). Vedere anche la sezione [Filtraggio delle misurazioni](/bactosense/measurements#section-10-7) del manuale d’uso di BactoSense.

![Grafico della modalità online filtrato per la linea 1](/img/gui/it/bactoswitch-plot-filtered.png "width=293") ![Risultati della modalità online filtrati per la linea 1](/img/gui/it/bactoswitch-results-filtered.png "width=293")

### 5.1.3 Impostazione degli allarmi {#section-5-1-3}

La finestra **Configurazione dell'allarme** (accessibile tramite **Impostazioni** / **Impostazioni della Modalità Online** / **Alarm**) consente di definire allarmi selettivamente per determinate linee:

![Configurazione degli allarmi con una linea di campionamento selezionata](/img/gui/it/bactoswitch-alarm-sample-line.png "width=625")

## 5.2 Controllo remoto e visualizzazione dei dati {#section-5-2}

### 5.2.1 BactoCloud {#section-5-2-1}

BactoCloud è la soluzione cloud di bNovate per il controllo remoto degli strumenti, la visualizzazione dei dati e l’analisi avanzata. La versione base di BactoCloud è disponibile con tutti gli strumenti.

BactoCloud include funzionalità che rendono particolarmente semplice visualizzare i dati multilinea generati da un BactoSense dotato di BactoSwitch. Inoltre, le analisi avanzate semplificano i calcoli differenziali, ad es. per qualificare l’efficienza microbiologica delle fasi di trattamento dell’acqua. Per collegare lo strumento, vedere il capitolo [BactoCloud](/bactosense/bactocloud) del manuale d’uso di BactoSense.

![Misure multilinea in BactoCloud](/img/bactoswitch/bactocloud-multi-line.png "width=700")

### 5.2.2 Interfaccia utente web {#section-5-2-2}

L’[interfaccia utente web](/bactosense/web-user-interface) di BactoSense offre funzionalità che consentono di filtrare i dati delle diverse linee BactoSwitch.

Nella scheda **Risultati**, nella sezione **Risultati della Modalità online**, è possibile filtrare i dati per **Nome** o per **ID linea**. Questi campi corrispondono ai numeri e ai nomi delle linee assegnati nella sezione [Configurazione delle linee](04-installation.md#section-4-6). Il filtraggio si applica anche al grafico della modalità online.

![Risultati della modalità online nell’interfaccia utente web filtrati per nome, con le colonne Nome e ID linea evidenziate](/img/gui/it/bactoswitch-web-online-results.png "width=634")

### 5.2.3 Controllo di BactoSwitch tramite il modulo I/O di BactoSense {#section-5-2-3}

Il funzionamento di BactoSwitch può essere controllato con un controllore logico programmabile (PLC) tramite BactoSense e il modulo I/O (I/O-Box) opzionale. Per informazioni più dettagliate, consultare la sezione [Configurazione degli ingressi digitali e modalità PLC](/bactosense/io-box#section-6-5) del manuale d’uso di BactoSense. Qui vengono illustrate solo le specificità del funzionamento di BactoSwitch.

Da **Impostazioni**, passare a **Impostazioni della Modalità Online** / **Input digitali**. La linea BactoSwitch può essere selezionata tramite la casella **Linea**.

Nell’esempio seguente, con l’opzione **Utilizzare lo scheduler** deselezionata, quando il PLC imposta gli ingressi digitali su 1100 viene avviata immediatamente una misura sulla linea n. 1:

![Configurazione degli ingressi digitali con la linea 1 selezionata](/img/gui/it/bactoswitch-digital-inputs-line.png "width=641")

Per avviare misure regolari, selezionare l’opzione **Utilizzare lo scheduler** e impostare l’intervallo desiderato. Tutte le linee attive vengono lette in sequenza, a partire dalla linea selezionata (linea n. 1 in questo esempio):

![Configurazione degli ingressi digitali con lo scheduler abilitato](/img/gui/it/bactoswitch-digital-inputs-scheduler.png "width=633")

La lettura dei dati di una linea specifica tramite le uscite analogiche deve essere eseguita subito dopo il termine della misura su tale linea, ad es. assegnando il segnale **Processo in corso** a una specifica uscita digitale e attivando la lettura dell’uscita analogica quando lo stato di tale uscita cambia. Si noti che questa non è l’impostazione predefinita. Per ulteriori dettagli, consultare la sezione [Configurazione delle uscite digitali](/bactosense/io-box#section-6-6) del manuale d’uso di BactoSense.

![Assegnazione degli eventi alle uscite con la riga Processo in corso evidenziata](/img/gui/it/bactoswitch-assign-events-process-running.png "width=638")

### 5.2.4 Modbus TCP {#section-5-2-4}

BactoSwitch e BactoSense possono essere controllati da remoto tramite il protocollo Modbus TCP (Transmission Control Protocol), che non richiede alcun modulo I/O. Per ulteriori dettagli, consultare la sezione [Modbus TCP](/bactosense/field-bus-interface#section-7-1) del manuale d’uso di BactoSense.

La configurazione dello strumento per il controllo tramite Modbus TCP è identica a quanto spiegato nella sezione precedente relativa al modulo I/O. Per selezionare Modbus TCP come sorgente degli ingressi digitali, nella finestra **Configurazione degli input digitali (PLC)** premere **Seleziona la sorgente di input digitali (Input fisici)** in basso.

![Configurazione degli input digitali (PLC) con Seleziona la sorgente di input digitali evidenziato](/img/gui/it/bactoswitch-digital-input-source-button.png "width=624")

Impostare quindi la sorgente su **Modbus TCP** e premere **Indietro**.

![Sorgente degli ingressi digitali impostata su Modbus TCP](/img/gui/it/bactoswitch-digital-input-source-modbus.png "width=624")

Oltre ai consueti registri Modbus di BactoSense, sono disponibili registri Modbus specifici per leggere le informazioni di BactoSwitch:

- Linea di misurazione corrente
- Linea di misurazione successiva
- Portata
- Stato
- Collegamento
- Stato delle elettrovalvole

Per i dettagli sugli indirizzi e sui formati dei registri, consultare la sezione [Elenco degli indirizzi Modbus TCP](/bactosense/field-bus-interface#section-7-1-2) nella versione più recente del manuale d’uso di BactoSense.

Per estrarre i risultati di una determinata linea, i dati desiderati devono essere letti al termine di una misura, che il PLC può rilevare quando il registro **Fase di misurazione** torna a 0.
