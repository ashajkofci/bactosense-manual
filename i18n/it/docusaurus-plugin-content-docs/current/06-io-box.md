---
title: "6. I/O-Box"
sidebar_label: "6. I/O-Box"
slug: /io-box
sidebar_position: 6
description: "Manuale d’uso BactoSense: I/O-Box."
---

L’I/O-Box è un accessorio di BactoSense. Può essere utilizzato per collegare gli ingressi e le uscite di BactoSense a un sistema PLC/SCADA.

In alternativa all’I/O-Box è possibile utilizzare Modbus TCP. Per i dettagli, consultare la sezione 7.1.

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

- Utilizzo: 2 uscite analogiche (4 – 20 mA) consentono di trasmettere due valori analogici, ad esempio il conteggio cellulare totale e HNAP. Nota: per trasmettere risultati precisi si consiglia di utilizzare Modbus TCP. Vedere sezione 7.1.
- Specifiche: 2 x 0/4 – 20 mA, carico consigliato 250 Ω

### 6.1.4 Schema dell’I/O-Box {#section-6-1-4}

<img src="/img/manual/asset-da9ff033639d.png" alt="Illustrazione del manuale originale, pagina stampata 32" width="633" loading="lazy" />

*Figura 6-1 Schema dell’I/O-Box di BactoSense.* 

### 6.1.5 Panoramica dell’I/O-Box {#section-6-1-5}

<img src="/img/manual/asset-30fbce76cafa.png" alt="Illustrazione del manuale originale, pagina stampata 33" width="634" loading="lazy" />

*Figura 6-2 Panoramica dell’I/O-Box di BactoSense*

<table><tbody><tr><th>①</th><th>Posizione delle uscite digitali Morsetti 1 – 8 Requisiti dei cavi: • AWG 12 – 22 • Sezione: 0.25 – 2.5 mm2</th><th>②</th><th>Posizione delle uscite analogiche Morsetti 9 – 12 Requisiti dei cavi: • AWG 12 – 22 • Sezione: 0.25 – 2.5 mm2</th></tr><tr><td>③</td><td>Posizione degli ingressi digitali Morsetti 14 – 18 Requisiti dei cavi: • AWG 12 – 22 • Sezione: 0.25 – 2.5 mm2</td><td colSpan="2"></td></tr></tbody></table>

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

Esaminare le specifiche tecniche delle sezioni da 6.1.1 a 6.1.3 e lo schema della sezione 6.1.4 per garantire un’installazione corretta.

:::

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Inserire i due connettori M16 dell’I/O-Box sul lato destro dello strumento. | <img src="/img/manual/asset-6a48e9fcafbe.png" alt="Illustrazione della procedura, pagina stampata 35" width="241" loading="lazy"/> |
| 2. | Rimuovere il coperchio dell’involucro svitando le quattro viti (cerchi). | <img src="/img/manual/asset-9f5e3eb5f1fd.png" alt="Illustrazione della procedura, pagina stampata 35" width="225" loading="lazy"/> |
| 3. | Inserire il cavo attraverso il pressacavo (A, B o C) e collegare i conduttori ai morsetti corrispondenti secondo la tabella di riferimento dell’I/O-Box nella sezione 6.1.6. | <img src="/img/manual/asset-fb6376380698.png" alt="Illustrazione della procedura, pagina stampata 35" width="222" loading="lazy"/> |
| 4. | Serrare il pressacavo. Provare a tirare il cavo per verificare che il pressacavo sia serrato a sufficienza. |  |
| 5. | Opzionale: l’I/O-Box può essere montato a parete. Utilizzare viti M4 con lunghezza minima di 20 mm. Con il coperchio ancora rimosso, posizionare le 4 viti e fissare l’involucro alla parete. | <img src="/img/manual/asset-3e67c8d4a4e6.png" alt="Illustrazione della procedura, pagina stampata 35" width="242" loading="lazy"/> |
| 6. | Rimontare il coperchio dell’involucro e serrare le quattro viti per sigillarlo. |  |

## 6.3 Collegamento delle uscite senza I/O-Box {#section-6-3}

BactoSense rende disponibili le uscite su un connettore femmina M16 a 12 pin. È comunque consigliato l’utilizzo di un I/O-Box. L’assegnazione dei pin del connettore è riportata di seguito.

<img src="/img/manual/asset-223bcd55d2e3.png" alt="Illustrazione del manuale originale, pagina stampata 36" width="311" loading="lazy" />

*Figura 6-3 Panoramica dell’assegnazione dei pin del connettore di uscita*

<table><tbody><tr><td>A</td><td>Uscita digitale 4 - B</td><td>G</td><td>Uscita digitale 1 - B</td></tr><tr><td>B</td><td>Uscita digitale 4 - A</td><td>H</td><td>Uscita digitale 1 - A</td></tr><tr><td>C</td><td>Uscita digitale 3 - B</td><td>J</td><td>Analogico 1+</td></tr><tr><td>D</td><td>Uscita digitale 3 - A</td><td>K</td><td>Analogico 1-</td></tr><tr><td>E</td><td>Uscita digitale 2 - B</td><td>L</td><td>Analogico 2+</td></tr><tr><td>F</td><td>Uscita digitale 2 - A</td><td>M</td><td>Analogico 2-</td></tr></tbody></table>

## 6.4 Collegamento degli ingressi senza I/O-Box {#section-6-4}

BactoSense rende disponibili gli ingressi su un connettore femmina M16 a 5 pin. È consigliato l’utilizzo di un I/O-Box. L’assegnazione dei pin del connettore è riportata di seguito.

<img src="/img/manual/asset-b6ab0aef5737.png" alt="Illustrazione del manuale originale, pagina stampata 37" width="320" loading="lazy" />

*Figura 6-4 Panoramica dell’assegnazione dei pin del connettore di ingresso*

<table><tbody><tr><td>1</td><td>Ingresso digitale 1</td><td>2</td><td>Ingresso digitale 2</td></tr><tr><td>3</td><td>Ingresso digitale 3</td><td>4</td><td>Ingresso digitale 4</td></tr><tr><td>5</td><td>Comune</td><td colSpan="2"></td></tr></tbody></table>

## 6.5 Configurazione degli ingressi digitali e modalità PLC {#section-6-5}

Lo strumento può essere controllato da un controllore logico programmabile (PLC) esterno. Per evitare conflitti all’avvio di un processo, il PLC blocca prima lo strumento in “PLC Mode”, in cui lo strumento opera come slave del PLC. In questa modalità, tutte le funzioni dell’interfaccia grafica relative all’esecuzione di protocolli e altri processi sono bloccate. Una volta in modalità PLC, i protocolli possono essere avviati e interrotti dal PLC tramite gli ingressi digitali dello strumento. Le uscite digitali forniscono quindi un riscontro al PLC per un funzionamento sicuro.

La modalità PLC è una modalità Auto controllata a distanza: il PLC può richiedere una singola misurazione oppure avviare il pianificatore per eseguire protocolli a intervalli predefiniti. Le misurazioni avviate dal PLC compaiono anche nei risultati della modalità Auto.

Quando nessun conduttore è collegato agli ingressi digitali, il loro stato è 0000.

*Tabella 6-2 Panoramica degli stati degli ingressi digitali e delle funzioni associate.*

<table><tbody><tr><th rowSpan="2">DESCRIZIONE</th><th colSpan="4">INGRESSI DIGITALI</th></tr><tr><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><td>Forzare la modalità PLC: lo strumento è inattivo, ma opera come slave del PLC.</td><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td>Eseguire il protocollo / intervallo di misurazione configurabile</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>Eseguire il protocollo / intervallo di misurazione configurabile</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td>Eseguire il protocollo / intervallo di misurazione configurabile</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>Eseguire il protocollo / intervallo di misurazione configurabile</td><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><td>Eseguire il protocollo / intervallo di misurazione configurabile</td><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>Eseguire il protocollo / intervallo di misurazione configurabile</td><td>1</td><td>1</td><td>1</td><td>0</td></tr><tr><td>Interrompere il protocollo in corso</td><td>1</td><td>1</td><td>1</td><td>1</td></tr><tr><td>Modalità slave disattivata. Fine della modalità PLC.</td><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>

Per eseguire un protocollo più volte, utilizzare l’opzione di pianificazione oppure avviare una nuova misurazione dal PLC riportando lo stato degli ingressi a 1000 e poi nuovamente allo stato “Run” corrispondente.

<img src="/img/manual/asset-6d53ddd3d47c.png" alt="Illustrazione del manuale originale, pagina stampata 39" width="532" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Schermata di esempio" width="32" loading="lazy" />

*Figura 6-5 Configurazione degli ingressi digitali*

<table><tbody><tr><td>1</td><td>Abilitare o disabilitare gli ingressi digitali. Se disabilitati, la modalità PLC non è mai attiva.</td><td>2</td><td>Parametri del protocollo: Name, Protocol e Gates.</td></tr><tr><td>3</td><td>Selezionare lo stato degli ingressi da configurare. Quando lo stato selezionato in (3) viene applicato agli ingressi digitali, viene eseguito il protocollo definito in (2), (4) e (5).</td><td>4</td><td>Se abilitato, avviare il protocollo immediatamente dopo il cambiamento dello stato degli ingressi. Altrimenti, attendere la durata dell’intervallo del pianificatore prima dell’avvio.</td></tr><tr><td>5</td><td>Impostazioni del pianificatore: se attivo, il protocollo viene ripetuto all’intervallo selezionato fino al cambiamento dello stato degli ingressi. Se disattivato, il protocollo viene eseguito una sola volta.</td><td colSpan="2"></td></tr></tbody></table>

Per configurare gli stati configurabili degli ingressi digitali, seguire questi passaggi:

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Accedere al menu Home dell’interfaccia utente di BactoSense. |  |
| 2. | Premere il pulsante Auto mode settings. |  |
| 3. | Premere il pulsante Digital inputs. |  |
| 4. | Assicurarsi che l’interruttore sia impostato su Enabled. |  |
| 5. | Attivare e selezionare lo stato da configurare nell’elenco Inputs, inserire un nome per il campione, scegliere un protocollo e un gate. |  |
| 6. | Per ripetere automaticamente il protocollo, selezionare la casella “Scheduler activated” e scegliere un intervallo. |  |
| 7. | Nel caso precedente, scegliere se eseguire il protocollo immediatamente o alla fine del primo intervallo tramite la casella “Start immediately”. | Questa opzione è utile solo se il pianificatore è attivo. |
| 8. | Premere il pulsante Save. |  |

## 6.6 Configurazione delle uscite digitali {#section-6-6}

I valori delle uscite digitali vengono modificati nelle seguenti situazioni:

- Quando lo strumento è spento, tutte le uscite sono impostate su 0.
- Quando lo strumento è acceso, le uscite mostrano lo stato di errore corrente: nessuno / critico / non critico.
- Al termine di una misurazione in modalità Auto, le uscite vengono modificate per indicare errori e allarmi secondo le impostazioni definite dall’utilizzatore.
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

<table><tbody><tr><th></th><th>OPERAZIONE</th><th>INFORMAZIONI AGGIUNTIVE / IMMAGINI</th></tr><tr><td>1.</td><td>Accedere al menu Home dell’interfaccia utente di BactoSense.</td><td></td></tr><tr><td>2.</td><td>Premere il pulsante Auto mode settings.</td><td></td></tr><tr><td>3.</td><td>Premere il pulsante Digital outputs.</td><td></td></tr><tr><td>4.</td><td><Admonition type="info" title="Informazioni aggiuntive">Scegliere lo stato di base, ossia lo stato delle uscite quando tutto funziona correttamente: Uscita 1 2 3 4 Stato di base 1 1 1 1</Admonition></td><td>1: l’interruttore è chiuso. 0: l’interruttore è aperto.</td></tr><tr><td>5.</td><td>Scegliere su quale uscita segnalare lo stato di errore critico: Uscita 1 2 3 4 Errore critico 0 / / /</td><td>Per impostazione predefinita, un errore critico apre l’uscita 1. 1: l’interruttore è chiuso. 0: l’interruttore è aperto. /: l’interruttore non è influenzato da questo errore.</td></tr><tr><td>6.</td><td>Scegliere su quale uscita segnalare lo stato di errore non critico: Uscita 1 2 3 4 Errore non critico / 0 / /</td><td>Per impostazione predefinita, un errore non critico apre l’uscita 2.</td></tr><tr><td>7.</td><td>Assegnare gli allarmi alle uscite rimanenti: Uscita 1 2 3 4 Allarme 1 / / 0 0 Allarme 2 ... ... ... ... ...</td><td>È possibile assegnare solo allarmi abilitati. È possibile assegnare più allarmi alla stessa uscita.</td></tr><tr><td>8.</td><td>Premere il pulsante Save.</td><td></td></tr></tbody></table>

## 6.7 Configurazione delle uscite analogiche {#section-6-7}

La corrente delle uscite analogiche viene modificata nelle seguenti situazioni:

- Quando lo strumento è spento, entrambe le uscite sono impostate su 0 mA.
- Quando lo strumento è acceso, entrambe le uscite sono impostate su 2 mA.
- Quando una misurazione in modalità Auto termina dopo il conteggio cellulare, il valore viene impostato tra 4 e 20 mA, in base all’intervallo e alla sorgente definiti nelle impostazioni delle uscite analogiche. Se la misurazione fallisce a causa di un errore prima dell’inizio del conteggio cellulare, l’uscita mantiene il valore precedente.
- Quando un utilizzatore prova manualmente l’uscita, la corrente viene impostata sul valore scelto. Il pulsante di ripristino imposta le uscite su 4 mA.

:::info[Valori di uscita precisi]

Per trasmettere risultati precisi, si consiglia di utilizzare Modbus TCP. Vedere sezione 7.1.

Solo gli utenti **Admin** possono modificare le uscite analogiche 4 .. 20 mA.

:::

<img src="/img/manual/asset-9b0542204c11.png" alt="Illustrazione del manuale originale, pagina stampata 43" width="553" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Schermata di esempio" width="32" loading="lazy" />

*Figura 6-6 Impostazioni delle uscite analogiche*

<table><tbody><tr><td>1</td><td>Selezione della porta di uscita</td><td>2</td><td>Source: definisce quale risultato di misurazione viene trasmesso da questa porta di uscita.</td></tr><tr><td>3</td><td>Lower limit 4 mA: valore del risultato di misurazione che deve corrispondere a 4 mA.</td><td>4</td><td>Upper limit 20 mA: valore del risultato di misurazione che deve corrispondere a 20 mA.</td></tr><tr><td>5</td><td>Se selezionato, interpola l’intervallo del conteggio cellulare scelto con una scala logaritmica nel modo seguente: <code>ratio = 1 + 9 × (counts − low) / (high − low)</code> <code>output = 4 mA + log<sub>10</sub>(ratio) × 16 mA</code>  counts: conteggio cellulare misurato low: limite inferiore del conteggio cellulare high: limite superiore del conteggio cellulare output: intensità di corrente in mA</td><td colSpan="2"></td></tr></tbody></table>

La procedura seguente descrive come regolare le uscite analogiche.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Accedere al menu Home dell’interfaccia utente di BactoSense. |  |
| 2. | Premere il pulsante Auto mode settings. |  |
| 3. | Premere il pulsante Analog outputs. |  |
| 4. | Scegliere Port 1 o Port 2 (figura 6-6). |  |
| 5. | Scegliere la sorgente (figura 6-6, posizione 2). |  |
| 6. | Definire il limite inferiore dell’intervallo (figura 6-6, posizione 3). | Quando la sorgente è uguale a questo valore, sulla porta selezionata vengono erogati 4 mA. |
| 7. | Definire il limite superiore dell’intervallo (figura 6-6, posizione 4). | Quando la sorgente è uguale a questo valore, sulla porta selezionata vengono erogati 20 mA. |
| 8. | Premere il pulsante Save. |  |

## 6.8 Prova delle uscite digitali e analogiche {#section-6-8}

:::warning[Prevenire allarmi involontari]

L’interfaccia Test outputs consente di generare un segnale fisico di uscita a scopo di prova. Assicurarsi che tali prove non generino allarmi sul sistema di controllo.

:::

<img src="/img/manual/asset-c774c093b426.png" alt="Illustrazione del manuale originale, pagina stampata 45" width="523" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Schermata di esempio" width="32" loading="lazy" />

*Figura 6-7 Prova delle uscite analogiche e digitali*

<table><tbody><tr><td>1</td><td>Definire lo stato delle uscite digitali per la prova.</td><td>2</td><td>Impostare le uscite digitali sullo stato definito in (1).</td></tr><tr><td>3</td><td>Impostare tutte le uscite digitali e analogiche contemporaneamente.</td><td>4</td><td>Impostare la corrente su entrambe le uscite analogiche.</td></tr><tr><td>5</td><td>Ripristinare le uscite allo stato precedente alle prove.</td><td>6</td><td>Impostare la corrente sulla porta 2.</td></tr><tr><td>7</td><td>Impostare la corrente sulla porta 1.</td><td colSpan="2"></td></tr></tbody></table>

La procedura seguente descrive come provare le uscite analogiche e digitali.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Accedere al menu Home dell’interfaccia utente di BactoSense. |  |
| 2. | Premere il pulsante Auto mode settings. |  |
| 3. | Premere il pulsante Test outputs. |  |

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 4. | Inserire i valori di prova da inviare al PLC. | Per le uscite digitali: 1: l’interruttore è chiuso. 0: l’interruttore è aperto. |
| 5. | Le prove possono essere avviate singolarmente o insieme (vedere figura 6-7): • Prova delle sole uscite digitali sui morsetti 1 – 4. • Prova delle sole uscite analogiche sulle porte 1, 2 o entrambe. • Prova di tutte le uscite. | I segnali di uscita possono essere misurati sui morsetti. |
| 6. | Premere il pulsante Reset. |  |
