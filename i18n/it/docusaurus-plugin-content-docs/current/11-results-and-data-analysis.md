---
title: "11. Risultati e analisi dei dati"
sidebar_label: "11. Risultati e analisi dei dati"
sidebar_position: 11
slug: /results-and-data-analysis
---

## 11.1 Risultati delle misurazioni {#section-11-1}

La figura seguente mostra il risultato di una misurazione TCC selezionata in modalità online. Da questa vista, l’utilizzatore può eliminare o rinominare la misurazione, consultare risultati precedenti (ed esportarli) oppure esportare il risultato corrente. Gli utenti esperti possono ripetere il conteggio cellulare con nuovi gate. Alcuni elementi dell’interfaccia o azioni sono disponibili solo per determinati ruoli utente (Basic, Advanced o Admin).

![BactoSense — Dettagli e grafici del risultato online](/img/gui/it/online-result-details.png "width=674 class=manual-figure")

*Figura 11-1 Visualizzazione del risultato di una misurazione TCC in modalità online.*

|  |  |
| --- | --- |
| 1 | Parametri principali del risultato, in funzione del tipo di cartuccia utilizzato. Ulteriori informazioni sono riportate nella sezione [Cartucce, gate e parametri dei risultati](../results-and-data-analysis/#section-11-3). Toccare l’icona delle informazioni accanto al risultato principale per visualizzare tutti i parametri del risultato (2). |
| 2 | Finestra delle informazioni sul risultato con tutti i parametri disponibili e il diagramma a punti principale. |
| 3 | Diagramma a punti principale nella finestra delle informazioni sul risultato. Il diagramma FL1 rispetto a FL2 mostra tutti gli eventi rilevati in base all’ampiezza dei segnali di fluorescenza FL1 (535 nm, asse X) e FL2 (715 nm, asse Y). Il poligono rosso e la linea verticale mostrano il gate configurato. Per i dettagli, consultare la sezione [Cartucce, gate e parametri dei risultati](../results-and-data-analysis/#section-11-3). Toccando questa anteprima si apre una finestra popup con accesso a tutti i diagrammi a punti (4). |
| 4 | Finestra popup con accesso a tutti i diagrammi a punti. Il diagramma FL1 rispetto a SSC mostra solo le cellule all’interno del gate poligonale FL1 - FL2, in base al segnale di fluorescenza FL1 (535 nm) e al segnale di luce diffusa SSC (488 nm). L’istogramma FL1 mostra tutte le cellule all’interno del gate poligonale FL1 - FL2, raggruppate per intervalli di fluorescenza FL1. I diagrammi disponibili dipendono dal modello e dalla configurazione dello strumento. |
| 5 | Il campo di stato della misurazione indica gli allarmi o gli avvertimenti. Toccare un’indicazione di allarme o di avvertimento per visualizzarne i dettagli. |
| 6 | Il pulsante Cancella elimina definitivamente la misurazione (è richiesta una conferma). |
| 7 | Il pulsante Rinomina consente di modificare il nome della misurazione. |
| 8 | Il pulsante Risultato del re-gate consente di applicare gate diversi ai dati di misurazione. Per i dettagli, consultare la sezione [Rianalisi delle misurazioni con altri gate](../results-and-data-analysis/#section-11-4-1). |
| 9 | Il pulsante Esporta consente di salvare questo risultato su una chiavetta USB. Ulteriori informazioni sono riportate nella sezione [Esportazione su un’unità USB](../measurements/#section-10-8-1). |
| 10 | I pulsanti di navigazione a sinistra e a destra della vista del risultato consentono di passare rispettivamente alla misurazione precedente e successiva. |
| 11 | Toccare il grafico dell’andamento per aprire il grafico della modalità automatica (il grafico completo dei risultati online). Vedere [Consultazione delle misurazioni automatiche in linea](../measurements/#section-10-2-3). |

:::info[Selezionare più misurazioni]

Selezione multipla e operazioni in gruppo: nell’elenco delle misurazioni, tenere premuta una misurazione per attivare la selezione multipla, quindi selezionare Cancella / Re-gate o Esporta.

:::

## 11.2 Introduzione ai gate {#section-11-2}

Seguendo gli standard della citometria a flusso, BactoSense utilizza gate per contare le cellule nei campioni.

Si definiscono:

- Gate: linea o poligono applicato a un diagramma a punti per quantificare le popolazioni di cellule misurate.
- Gruppo di gate, o gating set: insieme di due o più gate utilizzato nella strategia di selezione. I tipi di gate sono fissi, ma gli utenti possono modificare i limiti di ciascuno. Sono diversi per le misurazioni TCC e ICC.
- Strategia di selezione tramite gate: definisce come combinare i gate per contare le cellule. Ad esempio, HNAC è il numero di cellule all’interno del poligono TCC e al di sopra del limite inferiore HNA. Queste strategie sono diverse per le misurazioni TCC e ICC.

I gruppi di gate sono specifici per un tipo di cartuccia. Ad esempio, solo i gruppi di tipo TCC possono essere utilizzati con misurazioni eseguite con una cartuccia TCC.

### 11.2.1 Gruppi di gate predefiniti {#section-11-2-1}

BactoSense dispone di gruppi di gate preconfigurati per tutti i tipi di cartuccia disponibili. Sono denominati gruppi di gate predefiniti e sono stati progettati con cura per essere applicabili alla grande maggioranza dei campioni.

- Nella schermata Home, premere Impostazioni, quindi Impostazioni del gate per visualizzare i gruppi di gate disponibili.
- I gruppi di gate predefiniti non possono essere modificati né eliminati.
- È possibile creare nuovi gruppi modificando una copia di un gruppo esistente, come descritto nella sezione [Creazione di un nuovo gruppo di gate](11-results-and-data-analysis.md#section-11-4-2).

### 11.2.2 Elenco dei gruppi di gate disponibili e delle operazioni {#section-11-2-2}

Nella schermata Home, premere Impostazioni, quindi Impostazioni del gate per visualizzare i gruppi di gate disponibili.

![BactoSense — Elenco dei gate](/img/gui/it/gate-settings-list.png "width=599 class=manual-figure")

*Figura 11-2 Elenco dei gruppi di gate disponibili e delle opzioni per copiarli e crearne di nuovi. I gate predefiniti sono preconfigurati e non possono essere eliminati o modificati.*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Esempio di un gate personalizzato per la cartuccia ICC. | 2 | Gate predefinito ICC. I gate predefiniti sono preconfigurati. |
| 3 | Gate predefinito doppio ICC. Questo gruppo contiene un ulteriore gate poligonale configurabile. Nota: per alcuni modelli di strumento è necessaria una funzione aggiuntiva per utilizzare il gate supplementare (vedere sezione [Pacchetto Scientific](../upgrade-packages/#section-9-1)). | 4 | Tipi di gate da utilizzare con il corrispondente tipo di cartuccia. |
| 5 | Eliminare un gruppo di gate esistente. I gate predefiniti non possono essere eliminati. | 6 | Visualizzare l’anteprima del gruppo di gate. |
| 7 | Creare una copia del gruppo di gate. | 8 | Modificare il gruppo di gate. I gate predefiniti non possono essere modificati. |
| 9 | Creare un nuovo gruppo di gate. |  |  |

## 11.3 Cartucce, gate e parametri dei risultati {#section-11-3}

A seconda della cartuccia utilizzata per una misurazione, vengono misurati parametri differenti. Le sottosezioni seguenti descrivono i set di gate e i parametri dei risultati per TCC (conteggio cellulare totale), ICC (conteggio delle cellule integre), ACC (conteggio delle cellule attive), CBC (conteggio delle cellule coliformi), EBC (conteggio delle cellule di E. coli) e NBC (conteggio delle cellule di Enterococcus).

Le cartucce CBC, EBC e NBC sono compatibili con BactoSense ID e BactoSense SMART. Ciascuna utilizza una marcatura enzimatica selettiva e un singolo gate poligonale e fornisce una concentrazione cellulare. Per queste cartucce non vengono calcolate sottopopolazioni HNA o definite in base all’attività.

:::info[Interpretazione dei risultati CBC, EBC e NBC]

CBC, EBC e NBC sono concentrazioni cellulari espresse in cellule per millilitro (1/mL). I conteggi cellulari e i risultati delle colture espressi in unità formanti colonia (CFU) misurano proprietà diverse di un campione e non possono essere confrontati direttamente.

:::

### 11.3.1 Cartuccia TCC {#section-11-3-1}

TCC significa Total Cell Count, ossia conteggio cellulare totale. La cartuccia TCC viene quindi utilizzata per misurare la concentrazione di tutte le cellule.

**Tabella 11-1 Gruppo di gate utilizzato per la cartuccia TCC.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| GATE | TIPO | DESCRIZIONE |
| --- | --- | --- |
| TCC | Poligono | Poligono definito sul piano FL1-FL2. I punti al suo interno vengono contati come cellule (TCC). |
| Limite inferiore HNA | Linea verticale | Soglia su FL1. I punti all’interno di TCC ma superiori al limite inferiore HNA in FL1 vengono contati come HNAC. Quelli all’interno di TCC ma inferiori al limite vengono contati come LNAC. |

</div>

**Tabella 11-2 Parametri dei risultati ottenuti con la cartuccia TCC.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARAMETRO | UNITÀ | NOME | DESCRIZIONE |
| --- | --- | --- | --- |
| TCC | 1/mL | Conteggio cellulare totale | Numero totale di cellule rilevate all’interno del gate TCC. È la somma di HNAC e LNAC: TCC = HNAC + LNAC |
| HNAP | % | Percentuale di cellule ad alto contenuto di acidi nucleici | Percentuale di cellule HNA rispetto a TCC: HNAP = (HNAC / TCC) × 100 |
| LNAC | 1/mL | Conteggio delle cellule a basso contenuto di acidi nucleici | Numero di cellule all’interno del gate TCC ma al di sotto del limite inferiore HNA (gate a linea verticale). |
| HNAC | 1/mL | Conteggio delle cellule ad alto contenuto di acidi nucleici | Numero di cellule all’interno del gate TCC e al di sopra del limite inferiore HNA (gate a linea verticale). |

</div>

Per ulteriori informazioni sulla regolazione dei gate, vedere sezione [Modifica dei gate](11-results-and-data-analysis.md#section-11-4).

### 11.3.2 Cartuccia ICC {#section-11-3-2}

ICC significa Intact Cell Count, ossia conteggio delle cellule integre. La cartuccia ICC viene quindi utilizzata per misurare la concentrazione delle cellule integre.

**Tabella 11-3 Gruppo di gate utilizzato per la cartuccia ICC.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| GATE | TIPO | DESCRIZIONE |
| --- | --- | --- |
| ICC | Poligono | Poligono definito sul piano FL1-FL2. I punti al suo interno vengono contati come cellule integre (ICC). |
| Limite inferiore HNA | Linea verticale | Soglia su FL1. I punti all’interno di ICC ma superiori al limite inferiore HNA in FL1 vengono contati come HNAC. Quelli all’interno di ICC ma inferiori al limite vengono contati come LNAC. |

</div>

**Tabella 11-4 Parametri dei risultati ottenuti con la cartuccia ICC.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARAMETRO | UNITÀ | NOME | DESCRIZIONE |
| --- | --- | --- | --- |
| ICC | 1/mL | Conteggio delle cellule integre | Numero totale di cellule integre all’interno del gate ICC: ICC = HNAC + LNAC |
| HNAP | % | Percentuale di cellule ad alto contenuto di acidi nucleici | Percentuale di cellule HNA rispetto a ICC: HNAP = (HNAC / ICC) × 100 |
| LNAC | 1/mL | Conteggio delle cellule a basso contenuto di acidi nucleici | Numero di cellule LNA all’interno del gate ICC ma al di sotto del limite inferiore HNA (gate a linea verticale). |
| HNAC | 1/mL | Conteggio delle cellule ad alto contenuto di acidi nucleici | Numero di cellule HNA all’interno del gate ICC e al di sopra del limite inferiore HNA (gate a linea verticale). |

</div>

Per ulteriori informazioni sulla regolazione dei gate, vedere sezione [Modifica dei gate](11-results-and-data-analysis.md#section-11-4).

### 11.3.3 Cartuccia ACC {#section-11-3-3}

ACC significa Active Cell Count, ossia conteggio delle cellule attive. La cartuccia ACC viene quindi utilizzata per misurare la concentrazione di cellule metabolicamente attive mediante un saggio enzimatico.

**Tabella 11-5 Gruppo di gate utilizzato per la cartuccia ACC.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| GATE | TIPO | DESCRIZIONE |
| --- | --- | --- |
| ACC | Poligono | Poligono definito sul piano FL1-FL2. I punti al suo interno vengono contati come cellule attive (ACC). |
| Limite inferiore HACC | Linea verticale | Soglia su FL1. I punti all’interno di ACC ma superiori al limite inferiore HACC in FL1 vengono contati come HACC. Quelli all’interno di ACC ma inferiori al limite vengono contati come LACC. |

</div>

**Tabella 11-6 Parametri dei risultati ottenuti con la cartuccia ACC.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARAMETRO | UNITÀ | NOME | DESCRIZIONE |
| --- | --- | --- | --- |
| ACC | 1/mL | Conteggio delle cellule attive | Numero totale di cellule attive all’interno del gate ACC: ACC = HACC + LACC |
| HACC | 1/mL | Conteggio delle cellule altamente attive | Numero di cellule attive con intensità FL1 superiore al gate verticale HACC. |
| LACC | 1/mL | Conteggio delle cellule a bassa attività | Numero di cellule attive con intensità FL1 inferiore al gate verticale HACC. |
| HACP | % | Percentuale di cellule altamente attive | Percentuale di HACC rispetto ad ACC. HACP = (HACC / ACC) × 100 |

</div>

Per ulteriori informazioni sulla regolazione dei gate, vedere sezione [Modifica dei gate](11-results-and-data-analysis.md#section-11-4).

### 11.3.4 Cartuccia CBC {#section-11-3-4}

CBC significa Coliform Cell Count, ossia conteggio delle cellule coliformi. La cartuccia CBC misura la concentrazione di batteri coliformi mediante un saggio enzimatico basato sull’attività della β-galattosidasi. L’enzima converte il substrato della cartuccia in un prodotto fluorescente, consentendo di rilevare le cellule marcate mediante citometria a flusso.

**Tabella 11-7 Set di gate utilizzato per la cartuccia CBC.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| GATE | TIPO | DESCRIZIONE |
| --- | --- | --- |
| CBC | Poligono | Poligono definito sul piano FL1-FL2. Le cellule coliformi marcate con fluorescenza all’interno di questo poligono contribuiscono a CBC. |

</div>

**Tabella 11-8 Parametro del risultato ottenuto con la cartuccia CBC.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARAMETRO | UNITÀ | NOME | DESCRIZIONE |
| --- | --- | --- | --- |
| CBC | 1/mL | Conteggio delle cellule coliformi | Concentrazione di cellule coliformi marcate all’interno del gate CBC, calcolata dal conteggio cellulare e dal volume di campione analizzato. |

</div>

Per ulteriori informazioni sulla regolazione dei gate, vedere sezione [Modifica dei gate](11-results-and-data-analysis.md#section-11-4).

### 11.3.5 Cartuccia EBC {#section-11-3-5}

EBC significa E. coli Cell Count, ossia conteggio delle cellule di E. coli. La cartuccia EBC misura la concentrazione di batteri *Escherichia coli* mediante un saggio enzimatico basato sull’attività della β-glucuronidasi. L’enzima converte il substrato della cartuccia in un prodotto fluorescente, consentendo di rilevare le cellule marcate mediante citometria a flusso.

**Tabella 11-9 Set di gate utilizzato per la cartuccia EBC.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| GATE | TIPO | DESCRIZIONE |
| --- | --- | --- |
| EBC | Poligono | Poligono definito sul piano FL1-FL2. Le cellule di E. coli marcate con fluorescenza all’interno di questo poligono contribuiscono a EBC. |

</div>

**Tabella 11-10 Parametro del risultato ottenuto con la cartuccia EBC.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARAMETRO | UNITÀ | NOME | DESCRIZIONE |
| --- | --- | --- | --- |
| EBC | 1/mL | Conteggio delle cellule di E. coli | Concentrazione di cellule di E. coli marcate all’interno del gate EBC, calcolata dal conteggio cellulare e dal volume di campione analizzato. |

</div>

Per ulteriori informazioni sulla regolazione dei gate, vedere sezione [Modifica dei gate](11-results-and-data-analysis.md#section-11-4).

### 11.3.6 Cartuccia NBC {#section-11-3-6}

NBC significa Enterococcus Cell Count, ossia conteggio delle cellule di Enterococcus. La cartuccia NBC misura la concentrazione di enterococchi mediante un saggio enzimatico basato sull’attività della β-glucosidasi. L’enzima converte il substrato della cartuccia in un prodotto fluorescente, consentendo di rilevare le cellule marcate mediante citometria a flusso.

**Tabella 11-11 Set di gate utilizzato per la cartuccia NBC.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| GATE | TIPO | DESCRIZIONE |
| --- | --- | --- |
| NBC | Poligono | Poligono definito sul piano FL1-FL2. Gli enterococchi marcati con fluorescenza all’interno di questo poligono contribuiscono a NBC. |

</div>

**Tabella 11-12 Parametro del risultato ottenuto con la cartuccia NBC.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARAMETRO | UNITÀ | NOME | DESCRIZIONE |
| --- | --- | --- | --- |
| NBC | 1/mL | Conteggio delle cellule di Enterococcus | Concentrazione di enterococchi marcati all’interno del gate NBC, calcolata dal conteggio cellulare e dal volume di campione analizzato. |

</div>

Per ulteriori informazioni sulla regolazione dei gate, vedere sezione [Modifica dei gate](11-results-and-data-analysis.md#section-11-4).

## 11.4 Modifica dei gate {#section-11-4}

### 11.4.1 Rianalisi delle misurazioni con altri gate {#section-11-4-1}

La rianalisi con altri gate consiste nell’applicare un gruppo di gate diverso ai dati di misurazione esistenti.

- Un prerequisito è la disponibilità di tale gruppo aggiuntivo. Nella schermata Home, premere Impostazioni, quindi Impostazioni del gate per visualizzare i gruppi di gate disponibili.
- La modifica di un gruppo di gate esistente è descritta nella sezione [Modifica dei gruppi di gate esistenti](11-results-and-data-analysis.md#section-11-4-3).

<table className="manual-table">

<tbody>

<tr>

<th scope="col">

</th>

<th scope="col">

OPERAZIONE

</th>

<th scope="col">

INFORMAZIONI AGGIUNTIVE / IMMAGINI

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

Nella schermata Home, premere Impostazioni per aprire il menu delle impostazioni.

</td>

<td>

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Premere Registri, quindi Results (manual mode) o Results (online mode) in base alla modalità di misurazione utilizzata.

</td>

<td>

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Per rianalizzare una singola misurazione, selezionarla per visualizzare la pagina dei dettagli. Per rianalizzare più misurazioni in gruppo, tenere premuta una misurazione finché non viene evidenziata e compare una casella a sinistra. Toccare quindi altre misurazioni per selezionare anche queste.

</td>

<td>

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Premere Risultato del re-gate nella vista di un singolo risultato oppure Re-gate quando sono selezionate più misurazioni.

</td>

<td>

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Selezionare il gruppo di gate desiderato spuntando la relativa casella.

</td>

<td>

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Premere Confirm per avviare la rianalisi.

</td>

<td>

:::info[Informazioni aggiuntive]

A seconda del numero di misurazioni, la rianalisi può richiedere diversi minuti.

:::

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

Al termine, premere OK.

</td>

<td>

</td>

</tr>

</tbody>

</table>

### 11.4.2 Creazione di un nuovo gruppo di gate {#section-11-4-2}

I nuovi gruppi di gate possono essere creati copiando un gruppo esistente oppure da zero.

Creazione di un nuovo gruppo di gate da una copia

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Come utente Advanced o Admin, nella schermata Home premere Impostazioni per aprire il menu delle impostazioni. |  |
| 2. | Premere il pulsante Impostazioni del gate. |  |
| 3. | Nell’elenco dei gruppi disponibili, individuare quello da copiare per creare il nuovo gruppo. | Assicurarsi che il tipo di gate (ad esempio TCC, ICC) corrisponda all’applicazione prevista. |
| 4. | Premere l’icona Copy per creare una copia del gruppo di gate. |  |
| 5. | Nella copia appena creata, premere l’icona Modifica e seguire le istruzioni di modifica nella sezione [Modifica dei gruppi di gate esistenti](11-results-and-data-analysis.md#section-11-4-3). | ![BactoSense — Modificare il gate](/img/gui/icons/edit-gate-button.png "width=48 class=manual-icon") |

Creazione di un nuovo gruppo di gate da zero

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Come utente Advanced o Admin, nella schermata Home premere Impostazioni per aprire il menu delle impostazioni. |  |
| 2. | Premere il pulsante Impostazioni del gate. |  |
| 3. | Nella barra delle azioni in basso, premere Nuovo. |  |
| 4. | Inserire un nome per il gruppo di gate e selezionare uno dei modelli disponibili per la cartuccia installata. |  |
| 5. | Seguire quindi la procedura guidata di configurazione sullo schermo, come descritto nelle istruzioni di modifica dei gate nella sezione [Modifica dei gruppi di gate esistenti](11-results-and-data-analysis.md#section-11-4-3). |  |
| 6. | Al termine, è possibile selezionare il nuovo gruppo quando si creano nuove misurazioni oppure rianalizzare misurazioni esistenti, come descritto nella sezione [Rianalisi delle misurazioni con altri gate](11-results-and-data-analysis.md#section-11-4-1). |  |

### 11.4.3 Modifica dei gruppi di gate esistenti {#section-11-4-3}

Tutti i gruppi di gate possono essere modificati, tranne quelli predefiniti. La modifica può comprendere la rinomina, il cambiamento della posizione del gate verticale e del numero e della posizione dei vertici del gate poligonale.

Questa sezione descrive il processo generale di modifica di un gruppo di gate. La sezione [Strategia di regolazione dei gate per TCC e ICC](11-results-and-data-analysis.md#section-11-4-4) descrive una strategia specifica per regolare i gruppi nelle misurazioni TCC e ICC.

![BactoSense — Definizione e anteprima del gate TCC](/img/gui/it/tcc-gate-definition.png "width=576 class=manual-figure")

*Figura 11-3 Impostazioni dei gate per TCC*

|  |  |  |  |
| --- | --- | --- | --- |
| ① | Coordinate dei punti del gate. a: primo punto del gate b: secondo punto del gate c: terzo punto del gate d: quarto punto del gate | ② | Rimuovere un punto dal gate. |
| ③ | Aggiungere un nuovo punto al gate. | ④ | Modificare la coordinata selezionata. In questa schermata è selezionata la coordinata FL1 (a, FL1) del primo punto, che può quindi essere spostato lungo l’asse FL1 (asse X). |
| ⑤ | Limite inferiore HNA: questo gate viene definito nella schermata successiva. | ⑥ | Anteprima |

La procedura seguente descrive come regolare un gate:

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINE |
| --- | --- | --- |
| 1. | Come utente Advanced o Admin, nella schermata Home premere Impostazioni per aprire il menu delle impostazioni. | ![BactoSense — Pulsante Impostazioni](/img/gui/it/home-settings-button.png "width=57 class=manual-icon-settings-button-half") |
| 2. | Premere il pulsante Impostazioni del gate. | ![BactoSense — Impostazioni dei gate](/img/gui/icons/gate-settings-button.png "width=48 class=manual-icon") |
| 3. | Premere Modifica per il gate da modificare. | ![BactoSense — Modificare il gate](/img/gui/icons/edit-gate-button.png "width=48 class=manual-icon") |
| 4. | Modificare il nome se desiderato, quindi premere Avanti. |  |
| 5. | Regolare il numero e la posizione dei vertici del poligono (per TCC e ICC, consultare la sezione [Strategia di regolazione dei gate per TCC e ICC](11-results-and-data-analysis.md#section-11-4-4)). Un gate poligonale può avere da 3 a 6 vertici. | ![BactoSense — Definizione del gate ICC](/img/gui/it/icc-gate-definition.png "width=282 class=manual-figure") |
| 6. | Premere il pulsante Avanti. |  |
| 7. | Inserire il limite inferiore HNA (per TCC e ICC, consultare la sezione [Strategia di regolazione dei gate per TCC e ICC](11-results-and-data-analysis.md#section-11-4-4)). | ![BactoSense — Limite inferiore HNA](/img/gui/it/hna-lower-limit.png "width=282 class=manual-figure") |
| 8. | Premere Salva. Nella finestra di dialogo, scegliere Salva per aggiornare il gruppo esistente oppure Salva come nuovo set per conservare l’originale e creare un nuovo gruppo. |  |
| 9. | Al termine, è possibile selezionare il gruppo modificato quando si creano nuove misurazioni oppure rianalizzare misurazioni esistenti, come descritto nella sezione [Rianalisi delle misurazioni con altri gate](11-results-and-data-analysis.md#section-11-4-1). |  |

### 11.4.4 Strategia di regolazione dei gate per TCC e ICC {#section-11-4-4}

BactoSense è fornito con gruppi di gate predefiniti adatti alla grande maggioranza dei campioni. Se necessario, gli utenti avanzati possono tuttavia regolarli. Di seguito è descritta una procedura generale di regolazione, valida sia per le cartucce TCC sia per quelle ICC.

<div className="manual-narrow-details-scroll">

<table className="manual-table manual-narrow-details">

<colgroup>
<col className="procedure-step-column" />
<col className="procedure-instruction-column" />
<col className="procedure-detail-column" />
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

Misurare un campione d’acqua utilizzando il protocollo standard Water analysis. Nella pagina Result details, il diagramma FL1 rispetto a FL2 mostra: 1) cellule LNA e HNA nell’acqua 2) rumore elettrico dei rilevatori ottici 3) detriti/rumore di fondo (che possono includere cellule danneggiate, aggregati o altre particelle).

</td>

<td>

![Illustrazione della tabella a pagina 108 del manuale](/img/manual/cell-564a3512838d.png "width=126 class=manual-figure")

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Nella schermata Home, premere Impostazioni per aprire il menu delle impostazioni. Premere il pulsante Impostazioni del gate.

</td>

<td>

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

In base alle necessità, eseguire una delle seguenti operazioni: • creare un nuovo gruppo di gate • modificare un gruppo esistente • copiare un gruppo esistente e modificare la copia.

</td>

<td>

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Assegnare un nome al gruppo di gate e premere Avanti.

</td>

<td>

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Posizionare il gate poligonale alle estremità sinistra e destra. Ad esempio, utilizzare questi quattro punti:

<table className="manual-table">

<tbody>

<tr>

<td>

FL1

</td>

<td>

FL2

</td>

</tr>

<tr>

<td>

3.0

</td>

<td>

0.0

</td>

</tr>

<tr>

<td>

3.0

</td>

<td>

6.1

</td>

</tr>

<tr>

<td>

6.5

</td>

<td>

6.1

</td>

</tr>

<tr>

<td>

6.5

</td>

<td>

0.0

</td>

</tr>

</tbody>

</table>

</td>

<td>

![Illustrazione della tabella a pagina 108 del manuale](/img/manual/cell-374bfaa7d23b.png "width=126 class=manual-figure")

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Premere Avanti e Salva. Per un nuovo modello, confermare con Sì. Per un gruppo modificato, scegliere Salva o Salva come nuovo set nella finestra di dialogo.

</td>

<td>

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

Accedere alla vista del risultato del campione d’acqua misurato in precedenza.

</td>

<td>

</td>

</tr>

<tr>

<td>

8\.

</td>

<td>

Nella vista del risultato, premere Risultato del re-gate.

</td>

<td>



</td>

</tr>

<tr>

<td>

9\.

</td>

<td>

Selezionare il gate appena creato e rielaborare i dati con il nuovo gate premendo Conferma.

</td>

<td>



</td>

</tr>

<tr>

<td>

10\.

</td>

<td>

Aprire l’istogramma FL1 e individuare la prima valle dopo il picco del rumore, ossia il primo minimo dopo il picco all’estrema sinistra (freccia nell’immagine). Annotare il valore FL1 di questo minimo (ad esempio 3.8).

</td>

<td>

![Illustrazione della tabella a pagina 109 del manuale](/img/manual/cell-d44e977152e1.png "width=126 class=manual-figure")

</td>

</tr>

<tr>

<td>

11\.

</td>

<td>

Tornare a Gate settings e modificare nuovamente il gate. Posizionare i limiti sinistri del gate sul valore FL1 determinato in precedenza. In questo modo si esclude il rumore elettrico dei rilevatori ottici. Se necessario, per l’asse FL2, posizionare i punti “b” e “c” appena sotto l’area dei detriti/rumore di fondo (generalmente visibile come diagonali diritte).

</td>

<td>

![Illustrazione della tabella a pagina 109 del manuale](/img/manual/cell-67de70c6bd1f.png "width=126 class=manual-figure")

</td>

</tr>

<tr>

<td>

12\.

</td>

<td>

Salvare il gate regolato.

</td>

<td>



</td>

</tr>

<tr>

<td>

13\.

</td>

<td>

Accedere nuovamente alla vista del risultato del campione d’acqua misurato in precedenza.

</td>

<td>



</td>

</tr>

<tr>

<td>

14\.

</td>

<td>

Nella vista del risultato, premere Risultato del re-gate.

</td>

<td>



</td>

</tr>

<tr>

<td>

15\.

</td>

<td>

Selezionare il gate appena creato e rielaborare i dati con il nuovo gate premendo Conferma.

</td>

<td>



</td>

</tr>

<tr>

<td>

16\.

</td>

<td>

Per posizionare il limite inferiore HNA, aprire nuovamente l’istogramma FL1 e individuare il minimo tra i picchi LNA e HNA (linea verticale nell’immagine). Annotarne il valore FL1 (ad esempio 4.8).

</td>

<td>

![Illustrazione della tabella a pagina 110 del manuale](/img/manual/cell-3dd4365d2ad3.png "width=126 class=manual-figure")

</td>

</tr>

<tr>

<td>

17\.

</td>

<td>

Tornare a Gate settings e modificare nuovamente il gate.

</td>

<td>



</td>

</tr>

<tr>

<td>

18\.

</td>

<td>

Accedere al passaggio di configurazione del limite inferiore HNA. Inserire il limite precedentemente individuato nel campo FL1, premere Salva e scegliere Salva nella finestra di dialogo.

</td>

<td>



</td>

</tr>

<tr>

<td>

19\.

</td>

<td>

Rianalizzare nuovamente la misurazione dell’acqua e verificare che il gate sia adatto. Regolarlo ulteriormente se necessario.

</td>

<td>



</td>

</tr>

</tbody>

</table>

</div>
## 11.5 Analisi avanzata dei dati {#section-11-5}

I dati di misurazione di BactoSense possono essere esportati nel formato Flow Cytometry Standard (FCS) 3.1. Il formato FCS è standardizzato dall’International Society for Advancement of Cytometry (ISAC) per garantire l’interoperabilità tra diversi strumenti di citometria a flusso e software di analisi. Esistono diverse versioni del formato, ciascuna delle quali introduce miglioramenti e funzioni aggiuntive. I dati FCS possono essere utilizzati per elaborazioni successive personalizzate offline, come l’applicazione di strategie complesse di selezione tramite gate, l’“impronta microbiologica”, il rilevamento automatico di anomalie e molto altro.

### 11.5.1 Recupero dei file FCS {#section-11-5-1}

I file FCS possono essere recuperati nei seguenti modi:

- Scaricandoli su una chiavetta USB mediante Export all (vedere sezione [Esportazione di impostazioni, diagnostica o tutti i dati su USB](12-data-access-and-export.md#section-12-1-1)).

- Scaricandoli dall’interfaccia web, come file singoli (vedere sezione [Download di un file FCS](13-web-user-interface.md#section-13-4)) o multipli (vedere sezione [Download di un file ZIP con più risultati](13-web-user-interface.md#section-13-5)).

- Accedendo tramite FTP (vedere sezione [Recupero dei dati tramite FTP](12-data-access-and-export.md#section-12-2)).

- Accedendo tramite HTTPS (vedere sezione [Recupero dei file tramite HTTP o HTTPS](12-data-access-and-export.md#section-12-3)).

Per assistenza nella configurazione di una catena di strumenti per l’analisi avanzata dei dati, contattare support@bnovate.com.

## 11.6 Confronto con altri citometri a flusso {#section-11-6}

Per confrontare i risultati di BactoSense con quelli di un altro citometro a flusso, è possibile analizzare una soluzione di riferimento contenente microsfere autofluorescenti. Questo metodo consente di confrontare le scale di misurazione di dispositivi diversi.

<div className="manual-narrow-details-scroll">

<table className="manual-table manual-narrow-details manual-narrow-details-split">

<colgroup>
<col className="procedure-step-column" />
<col className="procedure-instruction-column" />
<col className="procedure-detail-column" />
<col className="procedure-detail-column" />
</colgroup>

<thead>

<tr>

<th scope="col">

</th>

<th scope="col">

OPERAZIONE

</th>

<th scope="col" colSpan="2">

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

Si consiglia di utilizzare il kit di validazione, che contiene una soluzione di microsfere pronta all’uso.

</td>

<td colSpan="2">

Leggere le istruzioni del kit di validazione per ulteriori informazioni.

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Installare il dispositivo di campionamento manuale secondo il manuale d’uso.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Prelevare una delle soluzioni di microsfere del kit di validazione e caricarla nel dispositivo di campionamento.

</td>

<td colSpan="2">

Leggere le istruzioni del kit di validazione per ulteriori informazioni.

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

:::info[Informazioni aggiuntive]

Premere Home. Premere Back tante volte quanto necessario per far comparire il pulsante Home.

:::

</td>

<td>

![BactoSense — Pulsante della schermata iniziale](/img/gui/icons/home-button.png "width=48 class=manual-icon")

</td>

<td>

![BactoSense — Pulsante Indietro](/img/gui/icons/back-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Nella schermata Home, premere Modalità e selezionare Modalità manuale. Premere Indietro, quindi Misura per aprire l’assistente di misurazione.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Selezionare Prepara dall’elenco dei protocolli.

</td>

<td colSpan="2">

Vedere sezione [Esecuzione di un adescamento (Prime)](../measurements/#section-10-9-3).

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

Premere Avanti e Avvio. Attendere il completamento del protocollo di adescamento.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

8\.

</td>

<td>

Premere Nuovo, scegliere Analisi delle sferette dall’elenco, quindi premere Avanti e Avvio.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

9\.

</td>

<td>

Attendere i risultati e, se necessario, regolare con precisione il gate del diagramma FL1 rispetto a FL2 per contare solo le 4 popolazioni di microsfere. È importante assicurarsi che rumore, fondo e detriti non vengano inclusi nel gate.

</td>

<td colSpan="2">

Vedere sezione [Modifica dei gruppi di gate esistenti](../results-and-data-analysis/#section-11-4-3) per regolare il gate. ![Illustrazione della tabella a pagina 112 del manuale](/img/manual/render-fa85ea9255cb.webp "width=246 class=manual-figure")

</td>

</tr>

<tr>

<td>

10\.

</td>

<td>

Nell’istogramma FL1 rispetto ai conteggi, stimare il valore logaritmico del centro di ogni picco sull’asse FL1. In questo esempio si ottengono approssimativamente (in log): 1<sup>º</sup> picco = 4.05 2<sup>º</sup> picco = 4.3 3<sup>º</sup> picco = 5.35 4<sup>º</sup> picco = 6.2

</td>

<td>

![Illustrazione della tabella a pagina 113 del manuale](/img/manual/cell-c2ba9a559620.png "width=246 class=manual-figure")

</td>

</tr>

<tr>

<td>

11\.

</td>

<td>

Misurare le stesse microsfere con l’altro citometro a flusso da confrontare e ripetere i passaggi 10 e 11. In questo esempio si ottengono approssimativamente (in log): 1<sup>º</sup> picco = log(10<sup>3</sup>) = 3 2<sup>º</sup> picco = log(2*10<sup>3</sup>) = 3.3 3<sup>º</sup> picco = log(2.4*10<sup>4</sup>) = 4.4 4<sup>º</sup> picco = log(1.6*10<sup>5</sup>) = 5.2

</td>

<td>

![Illustrazione della tabella a pagina 113 del manuale](/img/manual/cell-4c2343e0bbfe.png "width=246 class=manual-figure")

</td>

</tr>

<tr>

<td>

12\.

</td>

<td>

Con i diversi valori ottenuti per entrambi i dispositivi, è ora possibile confrontarne le scale e le finestre di misurazione.

</td>

<td>



</td>

</tr>

</tbody>

</table>

</div>
