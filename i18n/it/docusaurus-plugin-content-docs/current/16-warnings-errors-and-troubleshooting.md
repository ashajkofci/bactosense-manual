---
title: "16. Avvertimenti, errori e risoluzione dei problemi"
sidebar_label: "16. Avvertimenti, errori e risoluzione dei problemi"
sidebar_position: 16
slug: /warnings-errors-and-troubleshooting
---

Se lo strumento rileva un problema, passa a uno stato diverso in base alla sua gravità. Esistono avvertimenti, errori non critici ed errori critici, ciascuno con conseguenze e azioni necessarie differenti.

## 16.1 Avvertimenti {#section-16-1}

Gli avvertimenti compaiono quando viene rilevato un comportamento insolito durante una misura altrimenti riuscita. Possono indicare una minore accuratezza dei risultati o errori imminenti. A differenza degli errori, non impediscono il funzionamento dello strumento, ma richiedono attenzione perché possono segnalare cause di imprecisione.

| AVVERTIMENTO | IMMAGINE |
| --- | --- |
| Quando viene rilevato un comportamento insolito, accanto ai risultati compare un avvertimento. Per ulteriori informazioni, selezionare la voce corrispondente accanto ai risultati o direttamente nel registro degli avvertimenti. | ![BactoSense — Avviso di segnale SSC di base elevato](/img/gui/it/warning-high-ssc-baseline.png "width=252 class=manual-figure") |

Possono essere visualizzati i seguenti messaggi di avvertimento:

**Tabella 16-1 Avvertimenti**

| CODICE DI ERRORE | NOME | DESCRIZIONE | CAUSE / COSA FARE |
| --- | --- | --- | --- |
| W01 | Cartuccia scaduta | I reagenti della cartuccia sono scaduti. L’accuratezza della misura potrebbe essere compromessa. | • Sostituire la cartuccia appena possibile. |
| W02-04 | Segnale di base elevato in FL1 / FL2 / SSC | I segnali di base sono troppo elevati. In genere ciò è dovuto a bolle o particelle sospese nel campione. L’accuratezza della misura potrebbe essere compromessa. | • Controllare il tubo d’ingresso per individuare depositi.<br/>• Verificare che tutti i collegamenti idrici siano a tenuta (nessun<br/>ingresso d’aria). • Se l’avvertimento persiste, pulire lo strumento con il Cleaning Kit. |
| W05 | Temperatura dell’incubatore fuori obiettivo | Durante l’incubazione, la temperatura si è discostata dall’obiettivo di oltre 2 °C. I conteggi cellulari potrebbero essere alterati. L’incubatore potrebbe essere difettoso. | • Se il problema persiste, contattare il servizio clienti. |
| W06 | Nessun evento rilevato | Non sono stati rilevati eventi durante la misura. | • Se il problema persiste, contattare il servizio clienti. |
| W07 | TCC fuori intervallo | Il TCC supera il limite specificato del BactoSense di 2’000’000 cellule/ml. | • Diluire il campione per garantire l’accuratezza della misura. |
| W08 | Rilevate bolle d’aria | Il campione sembra contenere bolle d’aria. | • Verificare che il dispositivo di campionamento sia installato correttamente.<br/>• Controllare la presenza di bolle nel<br/>campione. • Se si utilizza il dispositivo in linea, verificare che l’acqua sia fornita alla pressione corretta. |
| W10 | Involucro troppo freddo | L’involucro è troppo freddo; è stato attivato il riscaldamento rapido prima di proseguire il protocollo. | • Lo strumento non può funzionare in sicurezza se la temperatura interna è<br/>troppo bassa. • Il riscaldamento rapido tenta di riscaldare l’involucro per un<br/>funzionamento sicuro. • Le misure inizieranno quando la temperatura interna sarà sufficiente. |
| W11 | Manutenzione necessaria | È necessaria la manutenzione dello strumento. La precisione delle misure non è più garantita. Continuare a utilizzarlo può causare perdite e danneggiare lo strumento. | • La data del prossimo intervento<br/>è stata superata. • Valvola e pistone hanno raggiunto la<br/>fine della vita utile. • Contattare il referente dell’assistenza. |
| W13 | Fine vita del laser | Il laser ha raggiunto la fine della vita utile. | • Contattare il referente dell’assistenza. |
| W14 | Interruzione di alimentazione non critica | Lo strumento è stato spento inaspettatamente. | • Verificare la pulizia dello strumento. •<br/>Se il problema si verifica spesso, installare un gruppo di continuità. |

## 16.2 Errori non critici {#section-16-2}

Gli errori non critici impediscono il completamento corretto di una misura, ma non l’esecuzione di una misura successiva. Non richiedono intervento umano. Alcuni errori non critici diventano critici se si ripetono tre volte.

| ERRORI NON CRITICI |  |
| --- | --- |
| Il protocollo si arresta. La causa dell’errore si risolve in genere ripetendo l’analisi<br/>o attendendo. • È possibile avviare immediatamente un’altra misura. Se riesce, lo stato di errore<br/>viene azzerato. • Ulteriori informazioni sono disponibili nel registro degli errori, selezionando la voce corrispondente. | ![BactoSense — Errore non critico: campione vuoto](/img/gui/it/noncritical-error-empty-sample.png "width=255 class=manual-figure") |

Possono essere visualizzati i seguenti messaggi di errore non critico:

**Tabella 16-2 Elenco degli errori non critici.**

| CODICE DI ERRORE | NOME | DESCRIZIONE | CAUSE / COSA FARE |
| --- | --- | --- | --- |
| E01 | Sportello della cartuccia aperto | Lo sportello della cartuccia è aperto e impedisce l’esecuzione delle misure. | • Chiudere lo sportello e ripetere la misura. |
| E08 | Involucro troppo umido | L’umidità nell’involucro è troppo elevata per un funzionamento sicuro. | • Sostituire il sacchetto essiccante svitando il grande tappo sul lato sinistro dello strumento (vedere sezione [Sostituire il sacchetto essiccante](15-maintenance.md#section-15-2-6)).<br/>• Se il problema persiste, contattare il servizio clienti. |
| E09 | Sistema surriscaldato | La temperatura interna è troppo elevata per un funzionamento sicuro. | • Ridurre la temperatura ambiente o aumentare l’intervallo di misura per consentire allo strumento di raffreddarsi. |
| E14 | Laser troppo caldo | La temperatura del laser è troppo elevata per un funzionamento sicuro. | • Ridurre la temperatura ambiente o aumentare l’intervallo di misura per consentire allo strumento di raffreddarsi. |
| E15 | Errore di riempimento del miscelatore | Rilevata una depressione durante la miscelazione o l’erogazione. | • Campione assente.<br/>• Aria all’ingresso.<br/>• Perdita nel<br/>sistema. • Eseguire il protocollo Clean Optics (vedere sezione [Panoramica dei protocolli in modalità manuale](10-measurements.md#section-10-9-1)). |
| E18 | Errore di depressione della pompa | Rilevata una depressione durante l’erogazione. | • Campione assente.<br/>• Aria all’ingresso.<br/>• Perdita nel<br/>sistema. • Eseguire il protocollo Clean Optics (vedere sezione [Panoramica dei protocolli in modalità manuale](10-measurements.md#section-10-9-1)). |
| E19 | Sistema surriscaldato | La temperatura interna è troppo elevata per il funzionamento. | • Ridurre la temperatura ambiente o aumentare l’intervallo di misura per consentire allo strumento di raffreddarsi. |
| E33 | Overflow della memoria di elaborazione | La capacità della memoria dei circuiti di elaborazione del segnale è stata superata. | • Eseguire Clean Optics (vedere sezione [Panoramica dei protocolli in modalità manuale](10-measurements.md#section-10-9-1)). •<br/>Ripetere la misura. |
| E42 | Involucro troppo freddo nonostante il riscaldamento | La temperatura dell’involucro rimane troppo bassa dopo la procedura di riscaldamento. | • La temperatura ambiente è inferiore a 5 °C (41<br/>°F). • Aumentare la temperatura ambiente. |
| E44 | Errore di avvio del modulo pompa | Il modulo pompa non si è acceso correttamente. | • Ripetere semplicemente la misura. |
| E45 | Errore di rapporto del volume valido troppo basso | Il rapporto del volume valido è troppo basso. Può essere causato da un contenuto batterico troppo elevato nell’acqua oppure da torbidità/detriti. | • L’accuratezza della misura è probabilmente molto bassa. Ripetere la misura diluendo il campione con acqua limpida. |
| E46 | Cartuccia ancora occupata | La cartuccia era ancora in fase di inizializzazione all’avvio della misura. | • Errore non critico. Ripetere la misura. Se il problema persiste, contattare un tecnico dell’assistenza. |
| E48 | Sottosistema microfluidico occupato | Il controllore microfluidico stava eseguendo un’altra attività durante la misura. | • Errore non critico. Ripetere la misura. Se il problema persiste, contattare un tecnico dell’assistenza. |
| E49 | Errore di timeout GPIO | La scheda di elaborazione attende la risposta di un altro modulo. | • Errore non critico. Ripetere la misura. Se il problema persiste, contattare un tecnico dell’assistenza. |
| E50 | Movimento della pompa bloccato | Il movimento della pompa è bloccato. | • Errore non critico. Ripetere la misura. Se il problema persiste, contattare un tecnico dell’assistenza. |
| E51 | Impossibile leggere la temperatura | Impossibile leggere la temperatura. Il circuito di regolazione è quindi disattivato. | • Errore non critico. Ripetere la misura. Se il problema persiste, contattare un tecnico dell’assistenza. |
| E52 | Movimento della valvola della cartuccia bloccato | Il movimento della valvola della cartuccia è bloccato. | • Errore non critico. Ripetere la misura. Se il problema persiste, contattare il servizio clienti. |
| E55 | M7 non collegato | Il processore di acquisizione non può essere inizializzato. | • Riavviare lo strumento.<br/>• Se il problema persiste, contattare il servizio clienti. |
| E56 | Acquisizione vuota | Nessun evento rilevato durante l’acquisizione | • Pulire il dispositivo di campionamento con Washstation, quindi misurare acqua pulita. •<br/>Se il problema persiste, contattare il servizio clienti. |
| E57 | Cartuccia occupata (comando speciale in corso) | Comunicazione con la cartuccia non riuscita. | • Errore non critico. Ripetere la misura.<br/>• Se il problema persiste, contattare il servizio clienti. |
| E58 | Cartuccia occupata (timeout) | Comunicazione con la cartuccia non riuscita. | • Verificare il connettore elettronico tra cartuccia e strumento. • Ripetere<br/>la misura. •<br/>Se il problema persiste, contattare il servizio clienti. |
| E59 | Errore del sensore della valvola | Impossibile leggere la posizione della valvola. | • Contattare il servizio clienti. |

## 16.3 Errori critici {#section-16-3}

Gli errori critici interrompono i processi dello strumento e richiedono intervento umano. Occorre eliminare la causa dell’errore e ripristinare le condizioni operative. Gli errori critici devono essere azzerati.

| ERRORI CRITICI | IMMAGINE |
| --- | --- |
| Se durante il funzionamento si verifica un errore critico: • Il protocollo<br/>si arresta immediatamente. • Lo<br/>strumento passa allo stato di errore critico ed è necessario un intervento manuale prima di avviare un nuovo protocollo. •<br/>Un operatore deve risolvere la causa dell’errore. Gli errori possono poi essere azzerati manualmente da Error log, come descritto nelle sezioni [Registri degli errori e degli avvertimenti](16-warnings-errors-and-troubleshooting.md#section-16-4) e [Azzerare gli errori](16-warnings-errors-and-troubleshooting.md#section-16-5). | ![BactoSense — Errore critico: cartuccia assente](/img/gui/it/critical-error-missing-cartridge.png "width=253 class=manual-figure") |

Possono essere visualizzati i seguenti messaggi di errore critico:

**Tabella 16-3 Elenco degli errori critici**

| CODICE DI ERRORE | NOME | DESCRIZIONE | CAUSE / COSA FARE |
| --- | --- | --- | --- |
| E00 | Errore generale | Errore non gestito. | • Contattare il servizio clienti |
| E02 | Cartuccia vuota | La cartuccia è vuota. | • Sostituire la cartuccia (vedere sezione [Sostituzione delle cartucce](08-general-operations-and-configurations.md#section-8-9-4)) |
| E04 | Cartuccia assente | La cartuccia è assente. | • Inserire una cartuccia (vedere sezione [Installazione di una cartuccia](08-general-operations-and-configurations.md#section-8-9-6)) |
| E05 | Sacca dei rifiuti piena | La sacca dei rifiuti della cartuccia è piena. | • Sostituire la cartuccia (vedere sezione [Sostituzione delle cartucce](08-general-operations-and-configurations.md#section-8-9-4)) |
| E06 | Comunicazione con la cartuccia impossibile | La cartuccia è scollegata, lo sportello è aperto oppure l’elettronica della cartuccia è danneggiata. | • Verificare che il cavo elettronico della cartuccia sia collegato correttamente e che lo sportello sia ben chiuso.<br/>• Se il problema rimane, sostituire la cartuccia e informare il servizio clienti. |
| E07 | Disco di memoria pieno | Spazio di memoria insufficiente per proseguire. | • Eliminare le vecchie misure e riprovare (vedere sezione<br/>[Liberare spazio sul disco](15-maintenance.md#section-15-2-8)). • Le misure verranno eliminate definitivamente dal dispositivo. • Esportarle<br/>per conservarne una copia di sicurezza. |
| E12 | Errore di inizializzazione FPGA | Impossibile inizializzare il chip di elaborazione del segnale. | • Riavviare lo strumento. |
| E16 | Errore di elaborazione | È stato rilevato un errore durante l’elaborazione dei segnali. | • L’accuratezza dell’ultimo risultato non è garantita. Ripetere l’analisi. |
| E17 | Sovrapressione rilevata | Rilevata una sovrapressione durante l’erogazione. | • Causa probabile: il filtro di uscita è ostruito. •<br/>Cella di flusso ottica bloccata.<br/>• Contattare il servizio clienti. |
| E20 | Arresto anomalo | Protocollo interrotto per ragioni sconosciute, in genere per una mancanza di alimentazione. | • Indica in genere un’interruzione di alimentazione o un’altra interruzione esterna della<br/>misura. • Eseguire Clean Optics e Clean Sampling Device prima di una nuova misura (vedere sezione [Panoramica dei protocolli in modalità manuale](10-measurements.md#section-10-9-1)). |
| E23 | Errore di comunicazione del sensore di temperatura | Comunicazione con il sensore di temperatura della scheda I/O non riuscita. | • Contattare il servizio clienti. |
| E24 | Errore di comunicazione del laser | Comunicazione con l’unità ottica non riuscita. | • Contattare il servizio clienti. |
| E25 | Errore di comunicazione della pompa | Comunicazione con il modulo pompa impossibile. | • Contattare il servizio clienti. |
| E26 | Errore di comunicazione dell’alimentazione | Comunicazione con il modulo di alimentazione impossibile. | • Contattare il servizio clienti. |
| E27 | Timeout di comunicazione della pompa | Tempo massimo di comunicazione con il modulo pompa superato. | • Lo sportello della cartuccia è<br/>aperto. • Un cavo è<br/>scollegato. • Una scheda elettronica della pompa o della cartuccia è danneggiata. |
| E28 | Riserva di colorante vuota | Il tubo del colorante collegato alla cartuccia è vuoto. | • Il tubo è scollegato.<br/>• La cartuccia è<br/>difettosa. • Ripetere la procedura di sostituzione della cartuccia, verificando il collegamento di tutti i tubi. |
| E29 | Riserva di liquido di risciacquo vuota | Il tubo del liquido di risciacquo collegato alla cartuccia è vuoto. | • Il tubo è scollegato.<br/>• La cartuccia è<br/>difettosa. • Ripetere la procedura di sostituzione della cartuccia, verificando il collegamento di tutti i tubi. |
| E30 | Riserva di soluzione sbiancante vuota | Il tubo della soluzione sbiancante collegato alla cartuccia è vuoto | • Il tubo è scollegato.<br/>• La cartuccia è<br/>difettosa. • Ripetere la procedura di sostituzione della cartuccia, verificando il collegamento di tutti i tubi. |
| E31 | Guasto dell’elettronica della cartuccia | Non è più possibile determinare con precisione il livello della cartuccia. | • Sostituire la cartuccia e contattare il servizio clienti. |
| E32 | Cartuccia incompatibile | Il tipo di cartuccia è incompatibile con questo strumento o software. | • Verificare di utilizzare il tipo di cartuccia corretto per questo strumento. |
| E33 | Overflow della memoria di elaborazione | La capacità della memoria dei circuiti di elaborazione del segnale è stata superata. | • Eseguire Clean Optics (vedere sezione [Panoramica dei protocolli in modalità manuale](10-measurements.md#section-10-9-1)). •<br/>Ripetere la misura. |
| E38 | Errore: cartuccia non pronta | La nuova cartuccia non è stata inizializzata correttamente | • Eseguire la procedura “Cartridge Change” (vedere sezione [Sostituzione delle cartucce](08-general-operations-and-configurations.md#section-8-9-4)). |
| E39 | Raggiunto il limite di corrente del laser | Il laser ha raggiunto il limite superiore di corrente, segno della fine della sua vita utile. | • Il laser deve essere sostituito. Contattare un tecnico dell’assistenza. |
| E40 | Set di gate non trovato | Il riferimento al set di gate selezionato per la misura non è presente nelle impostazioni dello strumento. | • Il set di gate è stato<br/>eliminato. • Cambiare set di gate e ripetere la misura. |
| E41 | Set di gate incompatibile | Il set di gate selezionato per la misura non può essere utilizzato con questa cartuccia. | • Non è stata seguita la procedura corretta di sostituzione<br/>della cartuccia. • Configurazione errata degli ingressi<br/>digitali. • Cambiare set di gate e ripetere la misura. |
| E43 | Temperatura esterna troppo bassa | La temperatura ambiente non rientra nelle specifiche dello strumento. | • Aumentare la temperatura ambiente.<br/>• Tentare di utilizzare o conservare lo strumento sotto 5 °C (41 °F) può danneggiarlo. |
| E47 | Impossibile trovare il magnete di riferimento principale durante l’azzeramento | Durante l’inizializzazione, la valvola non è tornata correttamente alla posizione di riferimento. | • Contattare il servizio clienti. |
| E53 | Impossibile comunicare con il motore | La comunicazione con il controllore del motore del miscelatore è difettosa. | • Contattare il servizio clienti. |
| E54 | Errore del sensore di temperatura del laser | Impossibile leggere la temperatura del laser. | • Contattare il servizio clienti. |

## 16.4 Registri degli errori e degli avvertimenti {#section-16-4}

Nella schermata Home, premere Impostazioni, quindi Registri. Selezionare Registro degli errori o Registro degli avvisi per aprire il registro corrispondente.

![BactoSense — Registro degli errori](/img/gui/it/error-log.png "width=558 class=manual-figure")

*Figura 16-1: Registri degli errori*

<table className="manual-table">

<tbody>

<tr>

<td rowSpan="4">

①

</td>

<td rowSpan="4">

Data e ora dell’evento

</td>

<td rowSpan="4">

②

</td>

<td colSpan="2">

Tipo di evento

</td>

</tr>

<tr>

<td>

![BactoSense — Voce del registro: errore critico](/img/gui/icons/critical-error-event.png "width=32 class=manual-icon")

</td>

<td>

Errore critico

</td>

</tr>

<tr>

<td>

![BactoSense — Voce del registro: errore non critico](/img/gui/icons/noncritical-error-event.png "width=32 class=manual-icon")

</td>

<td>

Errore non critico

</td>

</tr>

<tr>

<td>

![BactoSense — Voce del registro: errori azzerati](/img/gui/icons/errors-cleared-event.png "width=32 class=manual-icon")

</td>

<td>

Errori azzerati

</td>

</tr>

<tr>

<td>

③

</td>

<td>

Breve descrizione dell’errore o dell’evento

</td>

<td>

④

</td>

<td colSpan="2">

Pulsante per cancellare manualmente gli errori (disponibile agli utenti Basic, Advanced e Admin quando lo strumento è inattivo)

</td>

</tr>

<tr>

<td>

⑤

</td>

<td>

Intervallo temporale degli eventi visualizzati. Selezionarlo per modificarlo.

</td>

<td>

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

:::info[Visualizzare i dettagli degli eventi]

Selezionando un evento nell’elenco si apre una pagina con ulteriori informazioni sulla causa dell’errore e sulle azioni consigliate per risolverlo.

:::

## 16.5 Azzerare gli errori {#section-16-5}

Gli errori critici devono essere azzerati manualmente. Risolvere prima la causa del problema, quindi azzerare l’errore con la procedura seguente. Questa procedura non risolve automaticamente la causa dell’errore.

|  | FASE OPERATIVA | INFORMAZIONI AGGIUNTIVE / IMMAGINE |
| --- | --- | --- |
| 1. | Nella schermata Home, premere Impostazioni per aprire il menu delle impostazioni. |  |
| 2. | Premere Registri, quindi Registro degli errori. |  |
| 3. | Verificare di aver risolto il problema che ha causato gli errori visualizzati. Premere quindi Cancella gli errori. | ![BactoSense — Cancella errori](/img/gui/it/error-log-clear-errors.png "width=245 class=manual-figure") |
| 4. | Gli errori azzerati compaiono con simboli grigi e al registro viene aggiunto l’evento “Errors cleared”. Lo strumento è nuovamente pronto per l’analisi. |  |

## 16.6 Autodiagnosi automatica {#section-16-6}

L’autodiagnosi automatica verifica il corretto funzionamento di ogni componente del BactoSense e identifica quelli non funzionanti. Può essere utilizzata per individuare problemi dello strumento.

<table className="manual-table">

<tbody>

<tr>

<th scope="col">

</th>

<th scope="col">

FASE OPERATIVA

</th>

<th scope="col">

INFORMAZIONI AGGIUNTIVE / IMMAGINE

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

Come utente Advanced o Admin, nella schermata Home premere Impostazioni per aprire il menu delle impostazioni.

</td>

<td>

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Premere il pulsante Manutenzione.

</td>

<td>

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Premere il pulsante Autocontrollo.

</td>

<td>

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

:::info[Informazioni aggiuntive]

Premere il pulsante Ripeti. Al termine, lo strumento mostra tutti i test con un indicatore PASS verde o FAIL rosso. Alcuni test possono essere saltati: se il sistema non riesce a comunicare con la cartuccia, vengono saltati tutti i test che richiedono tale comunicazione.

:::

</td>

<td>

![BactoSense — Risultati dell’autotest](/img/gui/it/self-check-results.png "width=245 class=manual-figure")

</td>

</tr>

</tbody>

</table>

## 16.7 Funzionamento a bassa temperatura {#section-16-7}

Lo strumento deve funzionare entro un intervallo di temperatura specifico per evitare danni e garantire risultati affidabili e riproducibili (vedere sezione [Dati tecnici](03-instrument-overview.md#section-3-2)). A temperature ambiente molto basse o elevate (sotto 5 °C (41 °F) o sopra 30 °C (86 °F)), i protocolli non vengono eseguiti. A basse temperature, lo strumento si riscalda automaticamente prima della misura fino a raggiungere la temperatura richiesta. Durante il riscaldamento, lo stato mostra “Heating...”. Se la temperatura obiettivo non viene raggiunta dopo diverse ore, il protocollo termina con un errore (tabella 16-2, E42).

:::info[Prevedere il tempo di riscaldamento]

Le misure possono essere ritardate se è necessario un riscaldamento prolungato. Per evitarlo, mantenere lo strumento sopra 10 °C (50 °F).

:::

## 16.8 Risoluzione dei problemi {#section-16-8}

La tabella seguente offre una panoramica dei problemi e delle soluzioni. Se il problema non può essere risolto, contattare il referente locale dell’assistenza o il servizio clienti bNovate. I recapiti sono riportati nella sezione [Contattare il servizio clienti](19-contact.md#section-19-1).

**Tabella 16-4 Istruzioni per la risoluzione dei problemi**

|  |  |
| --- | --- |
| OSSERVAZIONE | ISTRUZIONE |
| Nessuna visualizzazione sullo schermo | • Verificare che il BactoSense sia collegato all’alimentazione e acceso. |
| Interfaccia utente non reattiva o lampeggiante | • Possibile interferenza elettromagnetica da una macchina vicina (ad esempio una pompa). Spostare il BactoSense. |
| Messaggio di errore sullo schermo | • Gestire il messaggio di errore come descritto in questo capitolo. |
| Le misure sembrano errate | • Verificare il rispetto delle condizioni del campione e di funzionamento descritte<br/>nella sezione [Dati tecnici](../instrument-overview/#section-3-2). • Verificare che lo strumento sia installato correttamente<br/>secondo il capitolo [Installazione](../installation/). • Verificare che la manutenzione sia stata eseguita secondo i programmi delle sezioni [Manutenzione preventiva periodica da parte di tecnici qualificati](../maintenance/#section-15-1) e<br/>[Manutenzione da parte dell’utente](../maintenance/#section-15-2). • Pulire lo strumento con il Cleaning<br/>Kit. • Validare lo strumento con il Validation Kit. |
