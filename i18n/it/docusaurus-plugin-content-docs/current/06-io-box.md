---
title: "6. I/O-Box"
sidebar_label: "6. I/O-Box"
slug: /io-box
sidebar_position: 6
description: "Manuale d’uso BactoSense: I/O-Box."
---

L’I/O-Box è un accessorio di BactoSense. Può essere utilizzato per collegare gli ingressi e le uscite di BactoSense a un sistema PLC/SCADA.

In alternativa all’I/O-Box è possibile utilizzare Modbus TCP. Per i dettagli, consultare la sezione [Modbus TCP](07-field-bus-interface.md#section-7-1).

## 6.1 Specifiche tecniche {#section-6-1}

:::info[Esaminare le specifiche]

Leggere attentamente le specifiche tecniche prima di preparare l’integrazione.

:::

### 6.1.1 Ingressi digitali {#section-6-1-1}

- Utilizzo: 4 ingressi digitali riferiti a Common consentono di controllare lo strumento mediante una tensione esterna (ad esempio proveniente da un PLC).
- Specifiche: ingresso con optoaccoppiatore: tensione diretta 1.2 VDC con 3 kΩ in serie, catodo collegato a COMMON, max. 30 mA, max. 50 mW.

Note aggiuntive

:::info[Requisiti degli ingressi digitali]

- Common (porta 18) deve essere collegato alla tensione di riferimento della tensione di ingresso (ad esempio 0 V / massa della sorgente di alimentazione esterna).
- Per produrre un livello logico alto o “1”, la tensione degli ingressi digitali (porte 14 - 17) deve essere compresa tra 5 - 30 V. In caso contrario, viene prodotto un livello logico basso o “0”.
- Se uno qualsiasi degli ingressi digitali è a livello logico alto o “1”, BactoSense entra in modalità PLC (“PLC-mode”).

:::

### 6.1.2 Uscite digitali {#section-6-1-2}

- Utilizzo: 4 uscite digitali consentono di segnalare 4 stati logici diversi, ad esempio errori o allarmi. Poiché i morsetti di uscita sono l’uscita di un relè a stato solido basato su MOS (LH1540AAB), non vi è polarità. I morsetti A e B possono essere utilizzati in entrambe le direzioni e scambiati. I morsetti A e B si trovano in uno stato ad alta impedenza (scollegati) o a bassa impedenza (collegati).
- Specifiche: liberamente configurabili, uscita SSR: max. 48 VDC, max. 300 mW, resistenza in conduzione 2 Ω.

### 6.1.3 Uscite analogiche {#section-6-1-3}

- Utilizzo: 2 uscite analogiche (4 – 20 mA) consentono di trasmettere due valori analogici, ad esempio il conteggio cellulare totale e HNAP. Nota: per trasmettere risultati precisi si consiglia di utilizzare Modbus TCP. Vedere sezione [Modbus TCP](07-field-bus-interface.md#section-7-1).
- Specifiche: 2 x 0/4 – 20 mA, carico consigliato 250 Ω

### 6.1.4 Schema dell’I/O-Box {#section-6-1-4}

![Illustrazione del manuale originale, pagina stampata 32](/img/manual/asset-da9ff033639d.png "width=633")

*Figura 6-1 Schema dell’I/O-Box di BactoSense.*

### 6.1.5 Panoramica dell’I/O-Box {#section-6-1-5}

![Illustrazione del manuale originale, pagina stampata 33](/img/manual/asset-30fbce76cafa.png "width=240")

*Figura 6-2 Panoramica dell’I/O-Box di BactoSense*

<table>

<tbody>

<tr>

<td>

①

</td>

<td>

Posizione delle uscite digitali Morsetti 1 – 8 Requisiti dei cavi: • AWG 12 – 22 • Sezione: 0.25 – 2.5 mm2

</td>

<td>

②

</td>

<td>

Posizione delle uscite analogiche Morsetti 9 – 12 Requisiti dei cavi: • AWG 12 – 22 • Sezione: 0.25 – 2.5 mm2

</td>

</tr>

<tr>

<td>

③

</td>

<td>

Posizione degli ingressi digitali Morsetti 14 – 18 Requisiti dei cavi: • AWG 12 – 22 • Sezione: 0.25 – 2.5 mm2

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

### 6.1.6 Tabella di riferimento dell’I/O-Box {#section-6-1-6}

*Tabella 6-1 Tabella di riferimento dell’I/O-Box*

| Morsetto | Funzione | Colore del morsetto | Colore del cavo |
| --- | --- | --- | --- |
| 1 | Uscita digitale 1 - A | Grigio | Rosso |
| 2 | Uscita digitale 1 - B | Grigio | Blu |
| 3 | Uscita digitale 2 - A | Grigio | Rosa |
| 4 | Uscita digitale 2 - B | Grigio | Grigio |
| 5 | Uscita digitale 3 - A | Grigio | Giallo |
| 6 | Uscita digitale 3 - B | Grigio | Verde |
| 7 | Uscita digitale 4 - A | Grigio | Marrone |
| 8 | Uscita digitale 4 - B | Grigio | Bianco |
| 9 | Analogico 1+ mA | Arancione | Nero |
| 10 | Analogico 1- mA | Blu | Viola |
| 11 | Analogico 2+ mA | Arancione | Rosa-Grigio |
| 12 | Analogico 2- mA | Blu | Rosso-Blu |
| 13 | Schermatura | Verde/Giallo |  |
| 14 | Ingresso digitale 1 | Grigio | Bianco |
| 15 | Ingresso digitale 2 | Grigio | Marrone |
| 16 | Ingresso digitale 3 | Grigio | Blu |
| 17 | Ingresso digitale 4 | Grigio | Nero |
| 18 | Comune | Nero | Grigio |

## 6.2 Collegamento dell’I/O-Box {#section-6-2}

:::info[Controllare i collegamenti I/O]

Esaminare le specifiche tecniche delle sezioni [Ingressi digitali](06-io-box.md#section-6-1-1), [Uscite digitali](06-io-box.md#section-6-1-2) e [Uscite analogiche](06-io-box.md#section-6-1-3) e lo schema della sezione [Schema dell’I/O-Box](06-io-box.md#section-6-1-4) per garantire un’installazione corretta.

:::

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Inserire i due connettori M16 dell’I/O-Box sul lato destro dello strumento. | ![Illustrazione della procedura, pagina stampata 35](/img/manual/asset-6a48e9fcafbe.png "width=241") |
| 2. | Rimuovere il coperchio dell’involucro svitando le quattro viti (cerchi). | ![Illustrazione della procedura, pagina stampata 35](/img/manual/asset-9f5e3eb5f1fd.png "width=225") |
| 3. | Inserire il cavo attraverso il pressacavo (A, B o C) e collegare i conduttori ai morsetti corrispondenti secondo la tabella di riferimento dell’I/O-Box nella sezione [Tabella di riferimento dell’I/O-Box](06-io-box.md#section-6-1-6). | ![Illustrazione della procedura, pagina stampata 35](/img/manual/asset-fb6376380698.png "width=222") |
| 4. | Serrare il pressacavo. Provare a tirare il cavo per verificare che il pressacavo sia serrato a sufficienza. |  |
| 5. | Opzionale: l’I/O-Box può essere montato a parete. Utilizzare viti M4 con lunghezza minima di 20 mm. Con il coperchio ancora rimosso, posizionare le 4 viti e fissare l’involucro alla parete. | ![Illustrazione della procedura, pagina stampata 35](/img/manual/asset-3e67c8d4a4e6.png "width=242") |
| 6. | Rimontare il coperchio dell’involucro e serrare le quattro viti per sigillarlo. |  |

## 6.3 Collegamento delle uscite senza I/O-Box {#section-6-3}

BactoSense rende disponibili le uscite su un connettore femmina M16 a 12 pin. È comunque consigliato l’utilizzo di un I/O-Box. L’assegnazione dei pin del connettore è riportata di seguito.

![Illustrazione del manuale originale, pagina stampata 36](/img/manual/asset-223bcd55d2e3.png "width=80")

*Figura 6-3 Panoramica dell’assegnazione dei pin del connettore di uscita*

|  |  |  |  |
| --- | --- | --- | --- |
| A | Uscita digitale 4 - B | G | Uscita digitale 1 - B |
| B | Uscita digitale 4 - A | H | Uscita digitale 1 - A |
| C | Uscita digitale 3 - B | J | Analogico 1+ |
| D | Uscita digitale 3 - A | K | Analogico 1- |
| E | Uscita digitale 2 - B | L | Analogico 2+ |
| F | Uscita digitale 2 - A | M | Analogico 2- |

## 6.4 Collegamento degli ingressi senza I/O-Box {#section-6-4}

BactoSense rende disponibili gli ingressi su un connettore femmina M16 a 5 pin. È consigliato l’utilizzo di un I/O-Box. L’assegnazione dei pin del connettore è riportata di seguito.

![Illustrazione del manuale originale, pagina stampata 37](/img/manual/asset-b6ab0aef5737.png "width=120")

*Figura 6-4 Panoramica dell’assegnazione dei pin del connettore di ingresso*

<table>

<tbody>

<tr>

<td>

1

</td>

<td>

Ingresso digitale 1

</td>

<td>

2

</td>

<td>

Ingresso digitale 2

</td>

</tr>

<tr>

<td>

3

</td>

<td>

Ingresso digitale 3

</td>

<td>

4

</td>

<td>

Ingresso digitale 4

</td>

</tr>

<tr>

<td>

5

</td>

<td>

Comune

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

## 6.5 Configurazione degli ingressi digitali e modalità PLC {#section-6-5}

Lo strumento può essere controllato da un controllore logico programmabile (PLC) esterno. Per evitare conflitti all’avvio di un processo, il PLC blocca prima lo strumento in “PLC Mode”, in cui lo strumento opera come slave del PLC. In questa modalità, tutte le funzioni dell’interfaccia grafica relative all’esecuzione di protocolli e altri processi sono bloccate. Una volta in modalità PLC, i protocolli possono essere avviati e interrotti dal PLC tramite gli ingressi digitali dello strumento. Le uscite digitali forniscono quindi un riscontro al PLC per un funzionamento sicuro.

La modalità PLC è una modalità online controllata a distanza: il PLC può richiedere una singola misurazione oppure avviare il pianificatore per eseguire protocolli a intervalli predefiniti. Le misurazioni avviate dal PLC compaiono anche nei risultati della modalità online.

Quando nessun conduttore è collegato agli ingressi digitali, il loro stato è 0000.

*Tabella 6-2 Panoramica degli stati degli ingressi digitali e delle funzioni associate.*

<table>

<tbody>

<tr>

<th rowSpan="2">

DESCRIZIONE

</th>

<th colSpan="4">

INGRESSI DIGITALI

</th>

</tr>

<tr>

<td>

1

</td>

<td>

2

</td>

<td>

3

</td>

<td>

4

</td>

</tr>

<tr>

<td>

Forzare la modalità PLC: lo strumento è inattivo, ma opera come slave del PLC.

</td>

<td>

1

</td>

<td>

0

</td>

<td>

0

</td>

<td>

0

</td>

</tr>

<tr>

<td>

Eseguire il protocollo / intervallo di misurazione configurabile

</td>

<td>

1

</td>

<td>

0

</td>

<td>

0

</td>

<td>

1

</td>

</tr>

<tr>

<td>

Eseguire il protocollo / intervallo di misurazione configurabile

</td>

<td>

1

</td>

<td>

0

</td>

<td>

1

</td>

<td>

0

</td>

</tr>

<tr>

<td>

Eseguire il protocollo / intervallo di misurazione configurabile

</td>

<td>

1

</td>

<td>

0

</td>

<td>

1

</td>

<td>

1

</td>

</tr>

<tr>

<td>

Eseguire il protocollo / intervallo di misurazione configurabile

</td>

<td>

1

</td>

<td>

1

</td>

<td>

0

</td>

<td>

0

</td>

</tr>

<tr>

<td>

Eseguire il protocollo / intervallo di misurazione configurabile

</td>

<td>

1

</td>

<td>

1

</td>

<td>

0

</td>

<td>

1

</td>

</tr>

<tr>

<td>

Eseguire il protocollo / intervallo di misurazione configurabile

</td>

<td>

1

</td>

<td>

1

</td>

<td>

1

</td>

<td>

0

</td>

</tr>

<tr>

<td>

Interrompere il protocollo in corso

</td>

<td>

1

</td>

<td>

1

</td>

<td>

1

</td>

<td>

1

</td>

</tr>

<tr>

<td>

Modalità slave disattivata. Fine della modalità PLC.

</td>

<td>

0

</td>

<td>

0

</td>

<td>

0

</td>

<td>

0

</td>

</tr>

</tbody>

</table>

Per eseguire un protocollo più volte, utilizzare l’opzione di pianificazione oppure avviare una nuova misurazione dal PLC riportando lo stato degli ingressi a 1000 e poi nuovamente allo stato “Run” corrispondente.

![BactoSense — Configurazione degli ingressi digitali](/img/gui/it/digital-input-configuration.png "width=532")

*Figura 6-5 Configurazione degli ingressi digitali*

<table className="manual-digital-input-config">

<colgroup>

<col className="di-config-step-column" />

<col className="di-config-description-column" />

<col className="di-config-marker-column" />

<col className="di-config-detail-column" />

</colgroup>

<tbody>

<tr>

<td>

1

</td>

<td>

Abilitare o disabilitare gli ingressi digitali. Se disabilitati, la modalità PLC non è mai attiva.

</td>

<td>

2

</td>

<td>

Parametri del protocollo: Name, Protocol e Gates.

</td>

</tr>

<tr>

<td>

3

</td>

<td>

Selezionare lo stato degli ingressi da configurare. Quando lo stato selezionato in (3) viene applicato agli ingressi digitali, viene eseguito il protocollo definito in (2), (4) e (5).

</td>

<td>

4

</td>

<td>

Se abilitato, avviare il protocollo immediatamente dopo il cambiamento dello stato degli ingressi. Altrimenti, attendere la durata dell’intervallo del pianificatore prima dell’avvio.

</td>

</tr>

<tr>

<td>

5

</td>

<td>

Impostazioni del pianificatore: se attivo, il protocollo viene ripetuto all’intervallo selezionato fino al cambiamento dello stato degli ingressi. Se disattivato, il protocollo viene eseguito una sola volta.

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

Per configurare gli stati configurabili degli ingressi digitali, seguire questi passaggi:

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Nella schermata Home, premere Impostazioni. |  |
| 2. | Premere il pulsante Impostazioni della Modalità Online. |  |
| 3. | Premere il pulsante Input digitali. |  |
| 4. | Assicurarsi che l’interruttore sia impostato su Abilitato. |  |
| 5. | Attivare e selezionare lo stato da configurare nell’Elenco degli input, inserire un nome per il campione, scegliere un protocollo e un gate. |  |
| 6. | Per ripetere automaticamente il protocollo, selezionare la casella “Utilizzare lo scheduler” e scegliere un intervallo. |  |
| 7. | Nel caso precedente, scegliere se eseguire il protocollo immediatamente o alla fine del primo intervallo tramite la casella “Avvia ora”. | Questa opzione è utile solo se il pianificatore è attivo. |
| 8. | Premere il pulsante Salva. |  |

## 6.6 Configurazione delle uscite digitali {#section-6-6}

I valori delle uscite digitali vengono modificati nelle seguenti situazioni:

- Quando lo strumento è spento, tutte le uscite sono impostate su 0.
- Quando lo strumento è acceso, le uscite mostrano lo stato di errore corrente: nessuno / critico / non critico.
- Al termine di una misurazione in modalità online, le uscite vengono modificate per indicare errori e allarmi secondo le impostazioni definite dall’utilizzatore.
- Quando si fa clic su Reset nella schermata di prova delle uscite o si preme Save nelle impostazioni delle uscite digitali, le uscite vengono aggiornate per mostrare solo lo stato di errore (gli allarmi vengono ignorati).
- Dopo la cancellazione manuale degli errori, le uscite vengono ripristinate automaticamente (e mostrano quindi il nuovo stato di errore senza allarmi).
- In momenti specifici durante la misurazione possono essere trasmessi segnali aggiuntivi. Per impostazione predefinita, nessuno di questi viene trasmesso alle uscite. Si tratta di:

**-** Processo in corso. Attivo quando un protocollo è in esecuzione.

**-** Dispositivo di campionamento in uso. Attivo quando il dispositivo di campionamento viene utilizzato. Torna inattivo dopo la fase di preparazione del campione dei protocolli di misurazione.

**-** Cartuccia quasi vuota. Attivo quando il livello della cartuccia è inferiore al 15 % o se si stima che la cartuccia si esaurirà entro un mese in base alla frequenza di misurazione corrente.

**-** Cartuccia scaduta. Attivo quando la cartuccia è scaduta.

Lo stato delle uscite digitali al termine di una misurazione viene definito secondo i seguenti valori predefiniti, modificabili nelle impostazioni:

- Se non vi sono errori né allarmi, tutti i morsetti sono impostati sullo stato di base definito dall’utilizzatore. Per impostazione predefinita, è 1 per tutti.
- In caso di errore critico, la prima uscita è impostata su 0.
- Gli errori non critici impostano la seconda uscita su 0.
- Gli allarmi impostano la terza e la quarta uscita su 0.
- In caso di conflitto nelle impostazioni delle uscite, viene data priorità a:

**-** 1. Errori critici

**-** 2. Errori non critici

**-** 3. Stati della cartuccia

**-** 4. Allarme

:::info[È richiesto l’accesso Admin]

Solo gli utenti Admin possono modificare le impostazioni delle uscite, poiché queste possono influire in modo critico sui sistemi PLC esterni.

:::

La procedura seguente descrive come regolare le uscite digitali.

<table>

<tbody>

<tr>

<th>

</th>

<th>

OPERAZIONE

</th>

<th>

INFORMAZIONI AGGIUNTIVE / IMMAGINI

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

Nella schermata Home, premere Impostazioni.

</td>

<td>

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Premere il pulsante Impostazioni della Modalità Online.

</td>

<td>

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Premere il pulsante Output digitali.

</td>

<td>

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Scegliere lo stato di base, ossia lo stato delle uscite quando tutto funziona correttamente: Uscita 1 2 3 4 Stato di base 1 1 1 1

</td>

<td>

1: l’interruttore è chiuso. 0: l’interruttore è aperto.

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Scegliere su quale uscita segnalare lo stato di errore critico: Uscita 1 2 3 4 Errore critico 0 / / /

</td>

<td>

Per impostazione predefinita, un errore critico apre l’uscita 1. 1: l’interruttore è chiuso. 0: l’interruttore è aperto. /: l’interruttore non è influenzato da questo errore.

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Scegliere su quale uscita segnalare lo stato di errore non critico: Uscita 1 2 3 4 Errore non critico / 0 / /

</td>

<td>

Per impostazione predefinita, un errore non critico apre l’uscita 2.

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

Assegnare gli allarmi alle uscite rimanenti: Uscita 1 2 3 4 Allarme 1 / / 0 0 Allarme 2 ... ... ... ... ...

</td>

<td>

È possibile assegnare solo allarmi abilitati. È possibile assegnare più allarmi alla stessa uscita.

</td>

</tr>

<tr>

<td>

8\.

</td>

<td>

Premere il pulsante Salva.

</td>

<td>

</td>

</tr>

</tbody>

</table>

## 6.7 Configurazione delle uscite analogiche {#section-6-7}

La corrente delle uscite analogiche viene modificata nelle seguenti situazioni:

- Quando lo strumento è spento, entrambe le uscite sono impostate su 0 mA.
- Quando lo strumento è acceso, entrambe le uscite sono impostate su 2 mA.
- Quando una misurazione in modalità online termina dopo il conteggio cellulare, il valore viene impostato tra 4 e 20 mA, in base all’intervallo e alla sorgente definiti nelle impostazioni delle uscite analogiche. Se la misurazione fallisce a causa di un errore prima dell’inizio del conteggio cellulare, l’uscita mantiene il valore precedente.
- Quando un utilizzatore prova manualmente l’uscita, la corrente viene impostata sul valore scelto. Il pulsante di ripristino imposta le uscite su 4 mA.

:::info[Valori di uscita precisi]

Per trasmettere risultati precisi, si consiglia di utilizzare Modbus TCP. Vedere sezione [Modbus TCP](07-field-bus-interface.md#section-7-1).

Solo gli utenti **Admin** possono modificare le uscite analogiche 4 .. 20 mA.

:::

![BactoSense — Configurazione delle uscite analogiche](/img/gui/it/analog-output-configuration.png "width=553")

*Figura 6-6 Impostazioni delle uscite analogiche*

<table>

<tbody>

<tr>

<td>

1

</td>

<td>

Selezione della porta di uscita

</td>

<td>

2

</td>

<td>

Source: definisce quale risultato di misurazione viene trasmesso da questa porta di uscita.

</td>

</tr>

<tr>

<td>

3

</td>

<td>

Lower limit 4 mA: valore del risultato di misurazione che deve corrispondere a 4 mA.

</td>

<td>

4

</td>

<td>

Upper limit 20 mA: valore del risultato di misurazione che deve corrispondere a 20 mA.

</td>

</tr>

<tr>

<td>

5

</td>

<td>

Se selezionato, interpola l’intervallo del conteggio cellulare scelto con una scala logaritmica nel modo seguente: `ratio = 1 + 9 × (counts − low) / (high − low)` `output = 4 mA + log<sub>10</sub>(ratio) × 16 mA`  counts: conteggio cellulare misurato low: limite inferiore del conteggio cellulare high: limite superiore del conteggio cellulare output: intensità di corrente in mA

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

La procedura seguente descrive come regolare le uscite analogiche.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Nella schermata Home, premere Impostazioni. |  |
| 2. | Premere il pulsante Impostazioni della Modalità Online. |  |
| 3. | Premere il pulsante Output analogici. |  |
| 4. | Scegliere Porta 1 o Porta 2 (figura 6-6). |  |
| 5. | Scegliere la sorgente (figura 6-6, posizione 2). |  |
| 6. | Definire il limite inferiore dell’intervallo (figura 6-6, posizione 3). | Quando la sorgente è uguale a questo valore, sulla porta selezionata vengono erogati 4 mA. |
| 7. | Definire il limite superiore dell’intervallo (figura 6-6, posizione 4). | Quando la sorgente è uguale a questo valore, sulla porta selezionata vengono erogati 20 mA. |
| 8. | Premere il pulsante Salva. |  |

## 6.8 Prova delle uscite digitali e analogiche {#section-6-8}

:::warning[Prevenire allarmi involontari]

L’interfaccia Test outputs consente di generare un segnale fisico di uscita a scopo di prova. Assicurarsi che tali prove non generino allarmi sul sistema di controllo.

:::

![BactoSense — Test delle uscite](/img/gui/it/output-test-controls.png "width=523")

*Figura 6-7 Prova delle uscite analogiche e digitali*

<table>

<tbody>

<tr>

<td>

1

</td>

<td>

Definire lo stato delle uscite digitali per la prova.

</td>

<td>

2

</td>

<td>

Impostare le uscite digitali sullo stato definito in (1).

</td>

</tr>

<tr>

<td>

3

</td>

<td>

Impostare tutte le uscite digitali e analogiche contemporaneamente.

</td>

<td>

4

</td>

<td>

Impostare la corrente su entrambe le uscite analogiche.

</td>

</tr>

<tr>

<td>

5

</td>

<td>

Ripristinare le uscite allo stato precedente alle prove.

</td>

<td>

6

</td>

<td>

Impostare la corrente sulla porta 2.

</td>

</tr>

<tr>

<td>

7

</td>

<td>

Impostare la corrente sulla porta 1.

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

La procedura seguente descrive come provare le uscite analogiche e digitali.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Nella schermata Home, premere Impostazioni. |  |
| 2. | Premere il pulsante Impostazioni della Modalità Online. |  |
| 3. | Premere il pulsante Testa gli output. |  |
| 4. | Inserire i valori di prova da inviare al PLC. | Per le uscite digitali: 1: l’interruttore è chiuso. 0: l’interruttore è aperto. |
| 5. | Le prove possono essere avviate singolarmente o insieme (vedere figura 6-7): • Prova delle sole uscite digitali sui morsetti 1 – 4. • Prova delle sole uscite analogiche sulle porte 1, 2 o entrambe. • Prova di tutte le uscite. | I segnali di uscita possono essere misurati sui morsetti. |
| 6. | Premere il pulsante Ripristina. |  |
