---
title: "10. Misurazioni"
sidebar_label: "10. Misurazioni"
sidebar_position: 10
slug: /measurements
---

## 10.1 Campioni {#section-10-1}

BactoSense può misurare singoli campioni raccolti manualmente utilizzando il dispositivo di campionamento manuale e prelevare automaticamente campioni da una sorgente d’acqua collegata mediante il dispositivo di campionamento in linea.

Tipi di campioni e pretrattamenti:

- Le acque grezze, e in particolare quelle superficiali, devono essere filtrate con un filtro da 20 µm. Le particelle possono ostruire i filtri interni e danneggiare lo strumento. L’acqua limpida presumibilmente potabile in genere non necessita di filtrazione.
- Lo strumento non può misurare acqua gassata e bevande analcoliche.
- L’acqua con un’elevata concentrazione di cloro può influire sui risultati della misurazione.
- Devono essere rispettate le condizioni del campione e di funzionamento elencate nei dati tecnici della sezione [Dati tecnici](03-instrument-overview.md#section-3-2).

## 10.2 Misurazione automatica in modalità online {#section-10-2}

La misurazione in modalità online è una configurazione in cui BactoSense è collegato a una sorgente d’acqua tramite il dispositivo di campionamento in linea e preleva e misura automaticamente un campione a intervalli predefiniti.

Per misurare invece campioni raccolti manualmente, consultare la sezione [Misurazione in modalità manuale](10-measurements.md#section-10-3).

Per intervalli diversi o determinati giorni della settimana, vedere [Pianificazione avanzata](10-measurements.md#section-10-2-4).

### 10.2.1 Configurazione e avvio delle misurazioni automatiche in linea {#section-10-2-1}

Le istruzioni seguenti mostrano come configurare e avviare le misurazioni automatiche in linea con il relativo dispositivo di campionamento.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Assicurarsi che il dispositivo di campionamento in linea sia saldamente installato come descritto nella sezione [Installazione del dispositivo di campionamento in linea](05-installation.md#section-5-5). | Se è installato il dispositivo di campionamento manuale e si desidera passare a quello in linea, consultare la sezione [Rimozione del dispositivo di campionamento manuale](08-general-operations-and-configurations.md#section-8-10-2) per rimuovere il dispositivo manuale e la sezione [Installazione del dispositivo di campionamento in linea](05-installation.md#section-5-5) per installare quello in linea. |
| 2. | Accedere alla schermata Home dell’interfaccia utente di BactoSense. |  |
| 3. | Nella schermata Home, premere Modalità e selezionare Modalità Online. Premere Indietro per tornare alla schermata Home. |  |
| 4. | Premere Avvio nella schermata Home per aprire l’assistente di misurazione online. |  |
| 5. | In Protocollo, verificare che sia selezionata la casella “Dispositivo di campionamento online (con backflush)”. |  |
| 6. | Inserire un nome per il campione toccando il campo di testo Nome del campione. |  |
| 7. | Selezionare il gate da applicare alle misurazioni toccando il campo di testo Gate. | In genere si utilizzano i gate predefiniti TCC e ICC. Utilizzare gate definiti dall’utente se l’applicazione lo richiede. La creazione e la regolazione dei gate sono descritte nel capitolo [Risultati e analisi dei dati](11-results-and-data-analysis.md). |
| 8. | Premere il pulsante Avanti. |  |
| 9. | Se viene mostrato l’editor della programmazione settimanale, premere Indietro per tornare alla programmazione a intervalli semplice. Selezionare l’intervallo di misurazione utilizzando la rotella sul lato destro. | L’intervallo di misurazione indica il tempo tra misurazioni successive e può variare da 30 min a 6 ore. |
| 10. | Se necessario, ritardare l’avvio deselezionando Avvia ora e scegliendo un orario di avvio specifico. | L’impostazione dell’ora di BactoSense è descritta nella sezione [Data e ora](08-general-operations-and-configurations.md#section-8-3-2). |
| 11. | Premere il pulsante Avvio. | Durante la misurazione, la stima corrente della concentrazione cellulare viene visualizzata nella barra delle azioni sotto “Last”. |
| 12. | Dopo ogni misurazione, il grafico della serie temporale viene aggiornato. | Per ulteriori dettagli, premere Visualizza i risultati. |
| 13. | Per arrestare una serie di misurazioni in linea, consultare la sezione [Termine delle misurazioni automatiche in linea](10-measurements.md#section-10-2-2). |  |

### 10.2.2 Termine delle misurazioni automatiche in linea {#section-10-2-2}

Seguire i passaggi seguenti per terminare una serie di misurazioni in modalità online.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | In modalità online, toccare il grafico della schermata Home per aprire il grafico online. Premere Stop. |  |
| 2. | Confermare il messaggio per arrestare la serie di misurazioni in modalità online. |  |
| 3. | Se una misurazione è in corso, è possibile scegliere se interromperla immediatamente o attenderne il completamento. |  |
| 4. | Se non si prosegue con un’altra serie nelle ore successive, rimuovere il dispositivo di campionamento in linea come descritto nella sezione [Rimozione del dispositivo di campionamento in linea](08-general-operations-and-configurations.md#section-8-10-1) e installare quello manuale come descritto nella sezione [Installazione del dispositivo di campionamento manuale](05-installation.md#section-5-4). |  |
| 5. | Per visualizzare i dati, consultare la sezione [Consultazione delle misurazioni automatiche in linea](10-measurements.md#section-10-2-3). Per recuperarli, consultare il capitolo [Accesso ai dati ed esportazione](12-data-access-and-export.md). |  |

### 10.2.3 Consultazione delle misurazioni automatiche in linea {#section-10-2-3}

In modalità online, toccare il grafico nella schermata Home per aprire il grafico a linee dei risultati delle misurazioni nel tempo.

![BactoSense — Grafico dei risultati online](/img/gui/it/online-results-chart.png "width=532 class=manual-figure")

*Figura 10-1 Grafico riepilogativo dei risultati in modalità online*

Toccando il pulsante con l’icona dell’ingranaggio (freccia nella figura 10-1), è possibile modificare le scale e le grandezze visualizzate (vedere figura 10-2). Per visualizzare gli allarmi nel grafico, creare un allarme e abilitare la relativa impostazione “Display alarm” (vedere la sezione [Configurazione degli allarmi](08-general-operations-and-configurations.md#section-8-5)).

![BactoSense — Impostazioni del grafico online](/img/gui/it/online-chart-settings.png "width=531 class=manual-figure")

*Figura 10-2 Impostazioni del grafico in modalità online*

|  |  |
| --- | --- |
| 1 | Regolare la scala percentuale. Toccare la metà superiore della barra della scala per spostare il limite superiore e la metà inferiore per spostare quello inferiore. |
| 2 | Regolare la scala dei conteggi. Toccare la metà superiore della barra della scala per spostare il limite superiore e la metà inferiore per spostare quello inferiore. |
| 3 | Scegliere l’intervallo di visualizzazione o filtrare per nome (vedere sezione [Filtraggio delle misurazioni](../measurements/#section-10-7)). |
| 4 | Scegliere la scala verticale: • Auto scale si adatta ai dati correnti • Full scale mostra l’intero intervallo dello strumento • Custom scale si regola con i cursori 1 e 2. Log e Linear controllano la scala dei conteggi (a destra). |
| 5 | Scegliere le grandezze da visualizzare nel grafico. |

### 10.2.4 Pianificazione avanzata {#section-10-2-4}

Utilizzare la pianificazione avanzata per eseguire misure a intervalli diversi o in determinati giorni della settimana. Un programma settimanale combina una o più regole, ciascuna con protocollo, nome della misura, set di gate e orari propri. Lo stesso programma si ripete finché non viene modificato o arrestato.

La pianificazione avanzata richiede l’attivazione del Management Package o del Scientific Package. Se **Avanzato** non è disponibile, verificare lo stato del pacchetto in **Impostazioni → Impostazioni di sistema → Aggiornamenti**; vedere [Pacchetti di aggiornamento](09-upgrade-packages.md). Prima di avviare, installare il dispositivo di campionamento online e verificare [data e ora](08-general-operations-and-configurations.md#section-8-3-2) dello strumento.

#### Creare un programma settimanale {#advanced-scheduler-create}

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Seguire i passaggi 1–8 di [Configurazione e avvio delle misure automatiche online](10-measurements.md#section-10-2-1) per scegliere modalità online, protocollo, nome del campione e gate. | Premere **Avanti** per accedere alla pianificazione. |
| 2. | Premere **Avanzato**. Se è già configurato un programma settimanale, l’editor delle regole può aprirsi direttamente. | La figura 10-3 mostra **Avanzato** nella schermata dell’intervallo semplice. <br />![BactoSense — Pulsante Avanzato](/img/gui/it/advanced-scheduler-select.png "width=220 class=manual-figure") |
| 3. | Selezionare una regola nell’elenco a sinistra per modificarla oppure premere **Nuova regola**. Per rimuovere una regola non necessaria dalla bozza, selezionarla e premere **Cancella**. | Esaminare le regole esistenti prima di aggiungerne un’altra: tutte contribuiscono al programma settimanale. <br />![BactoSense — Pulsante Nuova regola](/img/gui/it/advanced-scheduler-new-rule.png "width=180 class=manual-figure") |
| 4. | Impostare **Nome**, **Protocollo** e **Gate** per la regola selezionata. | **Nome** identifica le misure risultanti. Scegliere un set di gate compatibile con la cartuccia installata. I protocolli di manutenzione che non richiedono gate nascondono questo campo. |
| 5. | Scegliere **30 minutes**, **1 hour**, **2 ore**, **Giornaliero** o **Personalizzato**. | Gli intervalli predefiniti si ripetono ogni giorno. **Giornaliero** programma un’esecuzione al giorno all’**Ora di inizio** scelta. Utilizzare **Personalizzato** per selezionare giorni, un altro intervallo o una fascia oraria. |
| 6. | In **Personalizzato**, impostare l’**Ora di inizio**, selezionare i **Giorni** richiesti e impostare l’**Intervallo** in minuti. Premere **Set time range** per scegliere la fascia giornaliera, quindi confermare con **OK**. | Scorrere i campi sotto i pulsanti di frequenza per visualizzare **Intervallo**, **Set time range** e la fascia oraria. Le figure 10-4 e 10-5 mostrano la stessa regola prima e dopo lo scorrimento. <br />![BactoSense — Pulsante Set time range](/img/gui/it/advanced-scheduler-time-range-button.png "width=160 class=manual-figure") |
| 7. | Ripetere i passaggi 3–6 per aggiungere altre regole. Premere **Anteprima**. | Se l’anteprima non è disponibile perché manca un set di gate, selezionarlo. Se l’anteprima segnala un conflitto, tornare alle regole e modificare orari o intervalli per consentire ai protocolli di terminare. <br />![BactoSense — Pulsante Anteprima](/img/gui/it/advanced-scheduler-preview-button.png "width=130 class=manual-figure") |
| 8. | Selezionare ciascun giorno nell’anteprima e verificare le voci generate. Selezionare una voce per esaminare **Ora**, **Nome**, **Protocollo** e **Gate**. | L’anteprima può includere protocolli di pulizia inseriti automaticamente durante le pause lunghe. Verificarli insieme alle voci di misura; vedere la figura 10-6. <br />![BactoSense — Selezione del giorno](/img/gui/it/advanced-scheduler-days.png "width=240 class=manual-figure") |
| 9. | Apportare le modifiche alle singole voci descritte sotto, se necessarie, quindi premere **Salva** per applicare il programma settimanale. | Le modifiche alle regole e alle voci dell’anteprima restano una bozza fino alla pressione di **Salva**. <br />![BactoSense — Pulsante Salva](/img/gui/it/advanced-scheduler-save.png "width=130 class=manual-figure") |
| 10. | Alla domanda **Avviare lo scheduler ora?**, premere **Sì** per avviare il programma salvato oppure **No** per salvarlo senza avviare uno scheduler arrestato. | Verificare lo stato operativo nella schermata Home. Per arrestare una serie in corso, vedere [Interruzione delle misure automatiche online](10-measurements.md#section-10-2-2). |

![BactoSense — Selezione della pianificazione avanzata nella schermata dell’intervallo](/img/gui/it/advanced-scheduler-select.png "width=400 class=manual-figure")

*Figura 10-3 Aprire la pianificazione avanzata dalla schermata dell’intervallo semplice*

![BactoSense — Regola personalizzata per i giorni della settimana](/img/gui/it/advanced-scheduler-rule.png "width=600 class=manual-figure")

*Figura 10-4 Editor delle regole con impostazioni di misura, frequenza e giorni*

![BactoSense — Intervallo personalizzato e fascia oraria giornaliera](/img/gui/it/advanced-scheduler-range.png "width=600 class=manual-figure")

*Figura 10-5 Scorrere i campi personalizzati per verificare intervallo e fascia oraria*

**Esempio: monitoraggio ogni ora nei giorni feriali.** Scegliere **Personalizzato**, impostare **Ora di inizio** su **08:00**, **Giorni** su lunedì–venerdì, **Intervallo** su **60 min** e la fascia oraria su **08:00–17:00**. Le misure iniziano alle 08:00, 09:00, …, 16:00 in questi giorni. La fascia termina alle 17:00 e non aggiunge un avvio alle 17:00. Questi valori illustrano i comandi: scegliere un programma adatto alla propria applicazione.

Per una fascia che attraversa la mezzanotte, utilizzare regole distinte per le parti prima e dopo la mezzanotte e selezionare i giorni corrispondenti. Confrontare l’anteprima generata con gli orari desiderati.

#### Modificare singole voci nell’anteprima {#advanced-scheduler-preview}

Utilizzare l’anteprima per introdurre un’eccezione al programma generato, ad esempio spostare un’esecuzione o modificarne il nome della misura.

![BactoSense — Anteprima settimanale con una voce selezionata](/img/gui/it/advanced-scheduler-preview.png "width=600 class=manual-figure")

*Figura 10-6 Anteprima giorno per giorno e impostazioni della voce selezionata*

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Selezionare un giorno, quindi una voce nell’elenco a sinistra. | I campi a destra mostrano le impostazioni di quella voce. |
| 2. | Toccare **Ora**, **Nome**, **Protocollo** o **Gate** per modificare la voce selezionata. | La modifica si applica a quella voce. Verificare nuovamente il set di gate se si cambia protocollo. Per i protocolli che utilizzano BactoSwitch è disponibile anche il campo **Linea**. <br />![BactoSense — Ora della voce selezionata](/img/gui/it/advanced-scheduler-entry-time.png "width=280 class=manual-figure") |
| 3. | Premere **Nuovo** per aggiungere una voce al giorno selezionato, quindi modificarne i campi. Per rimuovere una voce, selezionarla e premere **Cancella**. | Verificare ora, protocollo e set di gate della nuova voce prima di salvare. <br />![BactoSense — Pulsante Nuovo](/img/gui/it/advanced-scheduler-new-entry.png "width=130 class=manual-figure") |
| 4. | Utilizzare **Copia nella settimana** solo se tutti i giorni devono avere le stesse voci del giorno selezionato. Confermare il messaggio con **OK**. | Questa azione sostituisce le voci degli altri giorni nella bozza, comprese quelle del fine settimana e le eccezioni specifiche di un giorno. Verificare poi tutti e sette i giorni. <br />![BactoSense — Pulsante Copia nella settimana](/img/gui/it/advanced-scheduler-copy-week.png "width=140 class=manual-figure") |
| 5. | Premere **Salva**, quindi rispondere a **Avviare lo scheduler ora?** come descritto sopra. | Se il salvataggio non riesce, esaminare il messaggio e correggere i conflitti di orario o le impostazioni mancanti prima di riprovare. <br />![BactoSense — Pulsante Salva](/img/gui/it/advanced-scheduler-save.png "width=130 class=manual-figure") |

:::info[Conservare le modifiche alle singole voci]

**Indietro** riporta dall’anteprima alle regole. Modificare una regola e generare una nuova anteprima può sostituire le modifiche alle singole voci. Apportare queste modifiche dopo l’anteprima definitiva delle regole e verificarle prima di salvare.

:::

#### Modificare un programma esistente o tornare a un intervallo semplice {#advanced-scheduler-change}

Mentre lo scheduler è in funzione, aprire **Home → Impostazioni → Impostazioni della Modalità Online → Programma l'intervallo**. Modificare le regole settimanali, premere **Anteprima**, verificare le voci e premere **Salva**. Se lo scheduler è arrestato, utilizzare **Avvio** nella schermata Home in modalità online per riaprire la procedura guidata di misura.

Per utilizzare di nuovo un intervallo costante, premere **Indietro** per passare dall’anteprima alle regole, quindi ancora **Indietro** per aprire la schermata dell’intervallo semplice. Scegliere l’intervallo e confermare con **OK** in **Programma l'intervallo**, oppure con **Avvio** nella procedura guidata. Confermando il programma semplice si sostituisce il programma settimanale avanzato; la sola pressione di **Indietro** non applica la modifica.

## 10.3 Misurazione in modalità manuale {#section-10-3}

La misurazione in modalità manuale è una configurazione in cui il dispositivo di campionamento manuale è collegato a BactoSense e l’operatore collega allo strumento singoli campioni raccolti in provette da 5 mL con tappo a vite.

### 10.3.1 Esecuzione di una misurazione in modalità manuale {#section-10-3-1}

Le istruzioni seguenti mostrano come configurare e avviare una misurazione in modalità manuale.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Assicurarsi che il dispositivo di campionamento manuale sia saldamente installato come descritto nella sezione [Installazione del dispositivo di campionamento manuale](05-installation.md#section-5-4). |  |
| 2. | Se il dispositivo di campionamento manuale è appena stato installato o lo strumento è rimasto spento o inattivo per più di 3 giorni, si consiglia di pulire il dispositivo. Se è disponibile una Washstation, seguire la procedura della sezione [Pulire il dispositivo di campionamento manuale con Washstation](15-maintenance.md#section-15-2-2); altrimenti quella della sezione [Pulire il dispositivo di campionamento manuale con pulizia di base](15-maintenance.md#section-15-2-3). |  |
| 3. | Se è stata eseguita una pulizia del dispositivo di campionamento manuale (vedere passaggio precedente), si consiglia di effettuare un adescamento prima di misurare il campione. Seguire la procedura della sezione [Esecuzione di un adescamento (Prime)](10-measurements.md#section-10-9-3). |  |
| 4. | Accedere alla schermata Home dell’interfaccia utente di BactoSense. |  |
| 5. | Nella schermata Home, premere Modalità e selezionare Modalità manuale. Premere Indietro, quindi Misura per aprire l’assistente di misurazione. |  |
| 6. | Selezionare Analisi dell'acqua dall’elenco dei protocolli disponibili. | Per ottenere repliche tecniche, selezionare il numero di repliche nella colonna Repliche. Per impostazione predefinita, viene misurato un campione. Se sono configurate più repliche, dalla stessa provetta vengono prelevati più campioni. |
| 7. | Inserire un nome per il campione toccando il campo Nome del campione, digitando il nome e premendo OK. |  |
| 8. | Verificare che nel campo Gate sia configurato il gate desiderato. Per utilizzarne un altro, toccare il campo Gate e selezionarlo tra le opzioni disponibili (in funzione della cartuccia installata). | In genere si utilizzano i gate predefiniti TCC e ICC. Utilizzare gate definiti dall’utente se l’applicazione lo richiede. La creazione e la regolazione dei gate sono descritte nel capitolo [Risultati e analisi dei dati](11-results-and-data-analysis.md). |
| 9. | Premere il pulsante Avanti. |  |
| 10. | Collegare al dispositivo di campionamento manuale una provetta da 5 mL con tappo a vite contenente 2 – 5 mL di campione. |  |
| 11. | Premere il pulsante Avvio. | Vengono visualizzate la durata stimata del protocollo e l’ora prevista di conclusione. Lo stato corrente della misurazione è indicato nella barra superiore (ad esempio Initializing, Mixing...). |
| 12. | Al termine della misurazione, premere Avanti per visualizzare i risultati. I risultati sono spiegati nella sezione [Risultati delle misurazioni](11-results-and-data-analysis.md#section-11-1). |  |
| 13. | Per proseguire con la misurazione successiva, premere Nuovo. |  |
| 14. | Per visualizzare i risultati delle misurazioni precedenti, premere Visualizza i risultati. |  |
| 15. | Per rinominare, rianalizzare con altri gate o esportare la misurazione, consultare le istruzioni nelle sezioni seguenti. |  |
| 16. | Se non si desidera misurare altri campioni e lo strumento rimarrà inattivo o verrà spento, pulire il dispositivo di campionamento manuale. Se è disponibile una Washstation, seguire la procedura della sezione [Pulire il dispositivo di campionamento manuale con Washstation](15-maintenance.md#section-15-2-2); altrimenti quella della sezione [Pulire il dispositivo di campionamento manuale con pulizia di base](15-maintenance.md#section-15-2-3). |  |

## 10.4 Rinomina delle misurazioni {#section-10-4}

Le misurazioni possono essere rinominate dalla vista dettagliata dei risultati.

|  | OPERAZIONE |
| --- | --- |
| 1. | Nella schermata Home, premere Impostazioni, quindi Registri, e selezionare Results (manual mode) o Results (online mode). |
| 2. | Nell’elenco dei risultati, selezionare la misurazione da rinominare. Eccezione: per rinominare un gruppo di repliche (vedere sezione [Utilizzo delle repliche di misurazione](10-measurements.md#section-10-5)), tenere premuto il gruppo e poi premere il pulsante di rinomina. |
| 3. | Nella vista dettagliata del risultato, premere Rinomina (vedere sezione [Risultati delle misurazioni](11-results-and-data-analysis.md#section-11-1)). |
| 4. | Vengono visualizzati una tastiera e un campo di testo con il nome corrente del campione. Utilizzare la tastiera per modificare il nome e premere OK. |

## 10.5 Utilizzo delle repliche di misurazione {#section-10-5}

In modalità manuale è possibile ripetere i protocolli di analisi. Ciò è particolarmente utile per ottenere repliche tecniche di un singolo campione.

- Il numero di repliche può essere selezionato durante la configurazione di una misurazione manuale, come descritto nella sezione [Esecuzione di una misurazione in modalità manuale](10-measurements.md#section-10-3-1).
- Nell’elenco dei risultati in modalità manuale, le repliche sono raggruppate in una voce e il numero tra parentesi accanto al nome del campione indica quante sono. In questa vista, i risultati del gruppo comprendono media e deviazione standard. È possibile accedere alle singole misurazioni premendo sul gruppo di repliche.
- I gruppi di repliche possono essere facilmente rinominati, eliminati, esportati o rianalizzati con altri gate tenendo premuto il gruppo nell’elenco dei risultati della modalità manuale.

## 10.6 Rianalisi delle misurazioni con altri gate {#section-10-6}

La regolazione dei gate di singole misurazioni o gruppi di misurazioni è descritta nella sezione [Modifica dei gate](11-results-and-data-analysis.md#section-11-4).

## 10.7 Filtraggio delle misurazioni {#section-10-7}

È possibile applicare filtri per visualizzare un sottoinsieme dei risultati delle misurazioni. Sono disponibili filtri per testo e intervallo di date.

|  | OPERAZIONE |
| --- | --- |
| 1. | Nella schermata Home, premere Impostazioni, quindi Registri, e selezionare Results (manual mode) o Results (online mode). |
| 2. | Nell’elenco dei risultati, premere Filtro. |
| 3. | Specificare il filtro applicando una o entrambe le seguenti opzioni: • definire un intervallo di date indicando la data iniziale e finale • definire una stringa di testo per filtrare in base al nome della misurazione. |
| 4. | Premere OK. L’elenco dei risultati viene aggiornato mostrando i risultati filtrati. |

## 10.8 Esportazione delle misurazioni {#section-10-8}

Esistono diversi modi per recuperare i dati di misurazione. Il recupero tramite HTTP, HTTPS, FTP e interfaccia web è descritto nei capitoli [Accesso ai dati ed esportazione](12-data-access-and-export.md) e [Interfaccia utente web](13-web-user-interface.md). Questa sezione descrive l’esportazione su un’unità USB.

### 10.8.1 Esportazione su un’unità USB {#section-10-8-1}

È possibile esportare le misurazioni selezionate o tutte le misurazioni su un’unità flash USB.

Assicurarsi che l’unità flash USB sia formattata in FAT32.

|  | OPERAZIONE |
| --- | --- |
| 1. | Nella schermata Home, premere Impostazioni, quindi Registri, e selezionare Results (manual mode) o Results (online mode). |
| 2. | Nell’elenco dei risultati:<br/>• Premere Esporta la sequenza, scegliere l’intervallo di date e l’eventuale filtro del nome, quindi premere OK per esportare una serie.<br/>• Tenere premuto un gruppo di repliche, quindi premere Esporta per esportare il gruppo.<br/>• Aprire una singola misurazione, quindi premere Esporta per esportare solo quella. |
| 3. | Nel campo del nome della cartella viene mostrato il nome della cartella di destinazione che sarà creata sull’unità USB. Modificarlo se desiderato. |
| 4. | Inserire una chiavetta USB con memoria disponibile sufficiente. Premere Aggiorna l'elenco per visualizzare la chiavetta collegata. |
| 5. | Opzioni di esportazione • premere Esporta i risultati per esportare solo i risultati di base (vedere i dettagli nell’interfaccia) • premere Esporta tutto per esportare risultati, dati grezzi e informazioni diagnostiche (vedere i dettagli nell’interfaccia). |
| 6. | Attendere il completamento dell’esportazione e premere OK. |

## 10.9 Protocolli di analisi e manutenzione disponibili {#section-10-9}

### 10.9.1 Panoramica dei protocolli in modalità manuale {#section-10-9-1}

In modalità manuale, gli operatori possono scegliere tra due protocolli di analisi.

**Tabella 10-1 Protocolli di analisi per la modalità manuale**

| NOME DEL PROTOCOLLO | DESCRIZIONE DEL PROTOCOLLO |
| --- | --- |
| Water Analysis | Analizza un campione d’acqua e termina con un ciclo di pulizia. Se vengono eseguite più repliche, la pulizia viene effettuata una sola volta, alla fine. Tra le repliche viene eseguito automaticamente un adescamento. |
| Beads Analysis | Questo protocollo è destinato all’analisi di microsfere di calibrazione ed è utilizzato con il kit di validazione. Termina automaticamente con un ciclo di pulizia. Se vengono eseguite più repliche, la pulizia viene effettuata una sola volta, alla fine. |

I protocolli di manutenzione possono essere eseguiti prima o tra i protocolli di analisi per preparare, risciacquare o pulire il sistema. In modalità manuale sono disponibili i seguenti protocolli di manutenzione:

**Tabella 10-2 Protocolli di manutenzione per la modalità manuale**

| NOME DEL PROTOCOLLO | DESCRIZIONE DEL PROTOCOLLO |
| --- | --- |
| Clean Optics | Avvia una fase di pulizia che lava tutti i componenti interni di BactoSense a contatto con il campione, escluso il dispositivo di campionamento. |
| Clean Sampling Device with Washstation | Pulisce il dispositivo di campionamento manuale in modo da lavare completamente il filtro esterno e l’interno e l’esterno dell’ago tra le misurazioni, dopo un campione sporco o in caso di ostruzione del filtro. Perché questo protocollo compaia, la Washstation deve essere montata sul dispositivo di campionamento manuale e deve essere installata una cartuccia. Questo protocollo ha un potere disinfettante superiore a Clean Sampling Device e va quindi preferito. L’utilizzo della Washstation è il modo migliore per mantenere pulito il dispositivo di campionamento manuale ed evitare contaminazioni incrociate. Le istruzioni sono riportate nella sezione [Pulire il dispositivo di campionamento manuale con Washstation](15-maintenance.md#section-15-2-2). |
| Clean Sampling Device | Pulisce il dispositivo di campionamento consentendo di lavare il filtro esterno e l’interno dell’ago dopo un campione estremamente carico o in caso di ostruzione del filtro. Le istruzioni sono riportate nella sezione [Pulire il dispositivo di campionamento manuale con pulizia di base](15-maintenance.md#section-15-2-3). |
| Fill Tubing | Riempie tutti i tubi che trasportano reagenti dalla cartuccia per rimuovere le bolle. Al termine del processo pulisce l’ottica. |
| Prime and Clean Optics | Riempie i tubi con il liquido del campione. Aiuta a diluire eventuali residui, ad esempio dopo una pulizia del dispositivo di campionamento. Termina con la fase di pulizia. |
| Prime | Carica il campione nello strumento. Le istruzioni sono riportate nella sezione [Esecuzione di un adescamento (Prime)](10-measurements.md#section-10-9-3). |

### 10.9.2 Panoramica dei protocolli in modalità online {#section-10-9-2}

In modalità online, gli operatori possono scegliere tra due protocolli di analisi. Tabella 10-3 Protocolli di analisi per la modalità online

| NOME DEL PROTOCOLLO | DESCRIZIONE DEL PROTOCOLLO |
| --- | --- |
| Online Sampling Device (with Backflush) | È il protocollo standard da utilizzare con il dispositivo di campionamento in linea. Include procedure di pulizia automatica tra le misurazioni. |
| Manual Sampling Device | Questo protocollo viene utilizzato con il dispositivo di campionamento manuale installato. |

### 10.9.3 Esecuzione di un adescamento (Prime) {#section-10-9-3}

L’adescamento precondiziona BactoSense con il campione. Può essere utilizzato per ridurre il trascinamento di cellule o sostanze indesiderate e richiede circa 5 minuti.

Utilizzare un adescamento nelle seguenti circostanze:

- Dopo un protocollo Clean Sampling Device (con o senza Washstation).
- Dopo aver misurato un campione con un’elevata concentrazione di cloro o altre sostanze indesiderate che potrebbero influire sulle misurazioni successive.

|  | OPERAZIONE |
| --- | --- |
| 1. | Assicurarsi che il dispositivo di campionamento manuale sia saldamente installato come descritto nella sezione [Installazione del dispositivo di campionamento manuale](05-installation.md#section-5-4). |
| 2. | Accedere alla schermata Home dell’interfaccia utente di BactoSense. |
| 3. | Nella schermata Home, premere Modalità e selezionare Modalità manuale. Premere Indietro, quindi Misura per aprire l’assistente di misurazione. |
| 4. | Selezionare Prepara dall’elenco dei protocolli disponibili. |
| 5. | Premere il pulsante Avanti. |
| 6. | Collegare al dispositivo di campionamento manuale il campione che si desidera misurare successivamente. |
| 7. | Premere il pulsante Avvio. |
