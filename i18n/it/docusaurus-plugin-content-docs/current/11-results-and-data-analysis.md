---
title: "11. Risultati e analisi dei dati"
sidebar_label: "11. Risultati e analisi dei dati"
sidebar_position: 11
slug: /results-and-data-analysis
---

## 11.1 Risultati delle misurazioni {#section-11-1}

La figura seguente mostra il risultato di una misurazione selezionata. Da questa vista, l’utilizzatore può eliminare o rinominare la misurazione, consultare risultati precedenti (ed esportarli) oppure esportare il risultato corrente. Gli utenti esperti possono ripetere il conteggio cellulare con nuovi gate. Alcuni elementi dell’interfaccia o azioni sono disponibili solo per determinati ruoli utente (Basic, Advanced o Admin).

<img src="/img/figures-second/figure-1dc7da95b4adc8.webp" alt="Figura 11-1 Visualizzazione del risultato di una misurazione ICC." width="674" className="manual-figure" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Illustrazione dal manuale d’uso BactoSense" width="57" className="manual-icon" loading="lazy" />

*Figura 11-1 Visualizzazione del risultato di una misurazione ICC.*

<table className="manual-table"><tbody><tr><td>1</td><td>Parametri principali del risultato, in funzione del tipo di cartuccia utilizzato. Ulteriori informazioni sono riportate nella sezione 11.3. Toccare l’icona delle informazioni accanto al risultato principale per visualizzare tutti i parametri del risultato (2).</td></tr><tr><td>2</td><td>Finestra delle informazioni sul risultato con tutti i parametri disponibili e il diagramma a punti principale.</td></tr><tr><td>3</td><td>Diagramma a punti principale nella finestra delle informazioni sul risultato. Il diagramma FL1 rispetto a FL2 mostra tutti gli eventi rilevati in base all’ampiezza dei segnali di fluorescenza FL1 (535 nm, asse X) e FL2 (715 nm, asse Y). Il poligono rosso e la linea verticale mostrano il gate configurato. Per i dettagli, consultare la sezione 11.3. Toccando questa anteprima si apre una finestra popup con accesso a tutti i diagrammi a punti (4).</td></tr></tbody></table>

<table className="manual-table"><tbody><tr><td>4</td><td>Finestra popup con accesso a tutti i diagrammi a punti. Il diagramma FL1 rispetto a SSC mostra solo le cellule all’interno del gate poligonale FL1 - FL2, in base al segnale di fluorescenza FL1 (535 nm) e al segnale di luce diffusa SSC (488 nm). L’istogramma FL1 mostra tutte le cellule all’interno del gate poligonale FL1 - FL2, raggruppate per intervalli di fluorescenza FL1. I diagrammi disponibili dipendono dal modello e dalla configurazione dello strumento.</td></tr><tr><td>5</td><td>Il campo facoltativo degli avvertimenti indica se durante la misurazione sono stati generati avvertimenti. Toccare il campo per ulteriori informazioni.</td></tr><tr><td>6</td><td>Il pulsante Delete elimina definitivamente la misurazione (è richiesta una conferma).</td></tr><tr><td>7</td><td>Il pulsante Rename consente di modificare il nome della misurazione.</td></tr><tr><td>8</td><td>Il pulsante Re-Gate result consente di applicare gate diversi ai dati di misurazione. Per i dettagli, consultare la sezione 11.4.1.</td></tr><tr><td>9</td><td>Il pulsante Export consente di salvare questo risultato su una chiavetta USB. Ulteriori informazioni sono riportate nella sezione 10.8.1.</td></tr><tr><td>10</td><td>I pulsanti di navigazione a sinistra e a destra della vista del risultato consentono di passare rispettivamente alla misurazione precedente e successiva.</td></tr></tbody></table>

:::info[Selezionare più misurazioni]

Selezione multipla e operazioni in gruppo: nell’elenco delle misurazioni, tenere premuta una misurazione per attivare la selezione multipla, quindi selezionare Delete / Re-gate o Export.

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

- I gate predefiniti di BactoSense sono accessibili premendo Gate settings nel menu Home dell’interfaccia utente.
- I gruppi di gate predefiniti non possono essere modificati né eliminati.
- È possibile creare nuovi gruppi modificando una copia di un gruppo esistente, come descritto nella sezione 11.4.2.

### 11.2.2 Elenco dei gruppi di gate disponibili e delle operazioni {#section-11-2-2}

L’elenco di tutti i gruppi di gate disponibili su BactoSense è accessibile premendo Gate settings nel menu Home dell’interfaccia utente.

<img src="/img/figures-second/figure-899e3c5869ed8f.webp" alt="Figura 11-2 Elenco dei gruppi di gate disponibili e delle opzioni per copiarli e crearne di nuovi. I gate predefiniti sono preconfigurati e non possono essere eliminati o modificati." width="599" className="manual-figure" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Illustrazione dal manuale d’uso BactoSense" width="57" className="manual-icon" loading="lazy" />

*Figura 11-2 Elenco dei gruppi di gate disponibili e delle opzioni per copiarli e crearne di nuovi. I gate predefiniti sono preconfigurati e non possono essere eliminati o modificati.*

<table className="manual-table"><tbody><tr><td>1</td><td>Esempio di un gate personalizzato per la cartuccia ICC.</td><td>2</td><td>Gate predefinito ICC. I gate predefiniti sono preconfigurati.</td></tr><tr><td>3</td><td>Gate predefinito doppio ICC. Questo gruppo contiene un ulteriore gate poligonale configurabile. Nota: per alcuni modelli di strumento è necessaria una funzione aggiuntiva per utilizzare il gate supplementare (vedere sezione 9.1).</td><td>4</td><td>Tipi di gate da utilizzare con il corrispondente tipo di cartuccia.</td></tr><tr><td>5</td><td>Eliminare un gruppo di gate esistente. I gate predefiniti non possono essere eliminati.</td><td>6</td><td>Visualizzare l’anteprima del gruppo di gate.</td></tr><tr><td>7</td><td>Creare una copia del gruppo di gate.</td><td>8</td><td>Modificare il gruppo di gate. I gate predefiniti non possono essere modificati.</td></tr><tr><td>9</td><td>Creare un nuovo gruppo di gate.</td><td></td><td></td></tr></tbody></table>

## 11.3 Cartucce, gate e parametri dei risultati {#section-11-3}

A seconda della cartuccia utilizzata per una misurazione, vengono misurati parametri differenti. I tipi disponibili sono TCC (conteggio cellulare totale), ICC (conteggio delle cellule integre), EBC (conteggio delle cellule di E. coli), ACC (conteggio delle cellule attive), CBC (conteggio delle cellule coliformi) e NBC (conteggio delle cellule di Enterococcus). Le sottosezioni seguenti descrivono i gruppi di gate e i parametri dei risultati per le cartucce TCC, ICC e ACC.

### 11.3.1 Cartuccia TCC {#section-11-3-1}

TCC significa Total Cell Count, ossia conteggio cellulare totale. La cartuccia TCC viene quindi utilizzata per misurare la concentrazione di tutte le cellule.

**Tabella 11-1 Gruppo di gate utilizzato per la cartuccia TCC.**

| GATE | TIPO | DESCRIZIONE |
| --- | --- | --- |
| TCC | Poligono | Poligono definito sul piano FL1-FL2. I punti al suo interno vengono contati come cellule (TCC). |
| Limite inferiore HNA | Linea verticale | Soglia su FL1. I punti all’interno di TCC ma superiori al limite inferiore HNA in FL1 vengono contati come HNAC. Quelli all’interno di TCC ma inferiori al limite vengono contati come LNAC. |

**Tabella 11-2 Parametri dei risultati ottenuti con la cartuccia TCC.**

| PARAMETRO | UNITÀ | NOME | DESCRIZIONE |
| --- | --- | --- | --- |
| TCC | 1/mL | Conteggio cellulare totale | Numero totale di cellule rilevate all’interno del gate TCC. È la somma di HNAC e LNAC: TCC = HNAC + LNAC |
| HNAP | % | Percentuale di cellule ad alto contenuto di acidi nucleici | Percentuale di cellule HNA rispetto a TCC: HNAP = (HNAC / TCC) × 100 |
| LNAC | 1/mL | Conteggio delle cellule a basso contenuto di acidi nucleici | Numero di cellule all’interno del gate TCC ma al di sotto del limite inferiore HNA (gate a linea verticale). |
| HNAC | 1/mL | Conteggio delle cellule ad alto contenuto di acidi nucleici | Numero di cellule all’interno del gate TCC e al di sopra del limite inferiore HNA (gate a linea verticale). |

Per ulteriori informazioni sulla regolazione dei gate, vedere sezione 11.4.

### 11.3.2 Cartuccia ICC {#section-11-3-2}

ICC significa Intact Cell Count, ossia conteggio delle cellule integre. La cartuccia ICC viene quindi utilizzata per misurare la concentrazione delle cellule integre.

**Tabella 11-3 Gruppo di gate utilizzato per la cartuccia ICC.**

| GATE | TIPO | DESCRIZIONE |
| --- | --- | --- |
| ICC | Poligono | Poligono definito sul piano FL1-FL2. I punti al suo interno vengono contati come cellule integre (ICC). |
| Limite inferiore HNA | Linea verticale | Soglia su FL1. I punti all’interno di ICC ma superiori al limite inferiore HNA in FL1 vengono contati come HNAC. Quelli all’interno di ICC ma inferiori al limite vengono contati come LNAC. |

**Tabella 11-4 Parametri dei risultati ottenuti con la cartuccia ICC.**

| PARAMETRO | UNITÀ | NOME | DESCRIZIONE |
| --- | --- | --- | --- |
| ICC | 1/mL | Conteggio delle cellule integre | Numero totale di cellule integre all’interno del gate ICC: ICC = HNAC + LNAC |
| HNAP | % | Percentuale di cellule ad alto contenuto di acidi nucleici | Percentuale di cellule HNA rispetto a ICC: HNAP = (HNAC / ICC) × 100 |
| LNAC | 1/mL | Conteggio delle cellule a basso contenuto di acidi nucleici | Numero di cellule LNA all’interno del gate ICC ma al di sotto del limite inferiore HNA (gate a linea verticale). |
| HNAC | 1/mL | Conteggio delle cellule ad alto contenuto di acidi nucleici | Numero di cellule HNA all’interno del gate ICC e al di sopra del limite inferiore HNA (gate a linea verticale). |

Per ulteriori informazioni sulla regolazione dei gate, vedere sezione 11.4.

### 11.3.3 Cartuccia ACC {#section-11-3-3}

ACC significa Active Cell Count, ossia conteggio delle cellule attive. La cartuccia ACC viene quindi utilizzata per misurare la concentrazione di cellule metabolicamente attive mediante un saggio enzimatico.

**Tabella 11-5 Gruppo di gate utilizzato per la cartuccia ACC.**

| GATE | TIPO | DESCRIZIONE |
| --- | --- | --- |
| ACC | Poligono | Poligono definito sul piano FL1-FL2. I punti al suo interno vengono contati come cellule attive (ACC). |
| Limite inferiore HACC | Linea verticale | Soglia su FL1. I punti all’interno di ACC ma superiori al limite inferiore HACC in FL1 vengono contati come HACC. Quelli all’interno di ACC ma inferiori al limite vengono contati come LACC. |

**Tabella 11-6 Parametri dei risultati ottenuti con la cartuccia ACC.**

| PARAMETRO | UNITÀ | NOME | DESCRIZIONE |
| --- | --- | --- | --- |
| ACC | 1/mL | Conteggio delle cellule attive | Numero totale di cellule attive all’interno del gate ACC: ACC = HACC + LACC |
| HACC | 1/mL | Conteggio delle cellule altamente attive | Numero di cellule attive con intensità FL1 superiore al gate verticale HACC. |
| LACC | 1/mL | Conteggio delle cellule a bassa attività | Numero di cellule attive con intensità FL1 inferiore al gate verticale HACC. |
| HACP | % | Percentuale di cellule altamente attive | Percentuale di HACC rispetto ad ACC. HACP = (HACC / ACC) × 100 |

Per ulteriori informazioni sulla regolazione dei gate, vedere sezione 11.4.

## 11.4 Modifica dei gate {#section-11-4}

### 11.4.1 Rianalisi delle misurazioni con altri gate {#section-11-4-1}

La rianalisi con altri gate consiste nell’applicare un gruppo di gate diverso ai dati di misurazione esistenti.

- Un prerequisito è la disponibilità di tale gruppo aggiuntivo. Tutti i gruppi disponibili per il tipo di cartuccia in uso sono accessibili premendo Gate settings nel menu Home dell’interfaccia di BactoSense.
- La modifica di un gruppo di gate esistente è descritta nella sezione 11.4.3.

<table className="manual-table"><tbody><tr><th scope="col"></th><th scope="col">OPERAZIONE</th><th scope="col">INFORMAZIONI AGGIUNTIVE / IMMAGINI</th></tr><tr><td>1.</td><td>Accedere al menu Home dell’interfaccia utente di BactoSense.</td><td></td></tr><tr><td>2.</td><td>In base alla modalità di esecuzione della misurazione, premere Results (manual) o Results (auto) per visualizzare l’elenco dei risultati.</td><td></td></tr><tr><td>3.</td><td>Per rianalizzare una singola misurazione, selezionarla per visualizzare la pagina dei dettagli. Per rianalizzare più misurazioni in gruppo, tenere premuta una misurazione finché non viene evidenziata e compare una casella a sinistra. Toccare quindi altre misurazioni per selezionare anche queste.</td><td></td></tr><tr><td>4.</td><td>Premere quindi il pulsante Re-gate.</td><td></td></tr><tr><td>5.</td><td>Selezionare il gruppo di gate desiderato spuntando la relativa casella.</td><td></td></tr><tr><td>6.</td><td>Premere Confirm per avviare la rianalisi.</td><td><Admonition type="info" title="Informazioni aggiuntive">A seconda del numero di misurazioni, la rianalisi può richiedere diversi minuti.</Admonition></td></tr><tr><td>7.</td><td>Al termine, premere OK.</td><td></td></tr></tbody></table>

### 11.4.2 Creazione di un nuovo gruppo di gate {#section-11-4-2}

I nuovi gruppi di gate possono essere creati copiando un gruppo esistente oppure da zero.

Creazione di un nuovo gruppo di gate da una copia

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Accedere al menu Home dell’interfaccia utente di BactoSense. |  |
| 2. | Premere il pulsante Gate settings. |  |
| 3. | Nell’elenco dei gruppi disponibili, individuare quello da copiare per creare il nuovo gruppo. | Assicurarsi che il tipo di gate (ad esempio TCC, ICC) corrisponda all’applicazione prevista. |
| 4. | Premere l’icona Copy per creare una copia del gruppo di gate. |  |
| 5. | Nella copia appena creata, premere l’icona Edit e seguire le istruzioni di modifica nella sezione 11.4.3. | <img src="/img/manual/cell-95fee81e2625.png" alt="Illustrazione della tabella a pagina 105 del manuale" width="264" className="manual-figure" loading="lazy"/> |

Creazione di un nuovo gruppo di gate da zero

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Accedere al menu Home dell’interfaccia utente di BactoSense. |  |
| 2. | Premere il pulsante Gate settings. |  |
| 3. | Nella barra delle azioni in basso, premere New. |  |
| 4. | Nel campo del nome, digitare un nome per il gruppo di gate. Nel campo del tipo, selezionare il tipo di cartuccia con cui verrà utilizzato. |  |
| 5. | Seguire quindi la procedura guidata di configurazione sullo schermo, come descritto nelle istruzioni di modifica dei gate nella sezione 11.4.3. |  |
| 6. | Al termine, è possibile selezionare il nuovo gruppo quando si creano nuove misurazioni oppure rianalizzare misurazioni esistenti, come descritto nella sezione 11.4.1. |  |

### 11.4.3 Modifica dei gruppi di gate esistenti {#section-11-4-3}

Tutti i gruppi di gate possono essere modificati, tranne quelli predefiniti. La modifica può comprendere la rinomina, il cambiamento della posizione del gate verticale e del numero e della posizione dei vertici del gate poligonale.

Questa sezione descrive il processo generale di modifica di un gruppo di gate. La sezione 11.4.4 descrive una strategia specifica per regolare i gruppi nelle misurazioni TCC e ICC.

<img src="/img/figures-second/figure-8dc71f8c5efcd4.webp" alt="Figura 11-3 Impostazioni dei gate per TCC" width="576" className="manual-figure" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Illustrazione dal manuale d’uso BactoSense" width="57" className="manual-icon" loading="lazy" />

*Figura 11-3 Impostazioni dei gate per TCC*

<table className="manual-table"><tbody><tr><td>①</td><td>Coordinate dei punti del gate. a: primo punto del gate b: secondo punto del gate c: terzo punto del gate d: quarto punto del gate</td><td>②</td><td>Rimuovere un punto dal gate.</td></tr><tr><td>③</td><td>Aggiungere un nuovo punto al gate.</td><td>④</td><td>Modificare la coordinata selezionata. In questa schermata è selezionata la coordinata FL1 (a, FL1) del primo punto, che può quindi essere spostato lungo l’asse FL1 (asse X).</td></tr><tr><td>⑤</td><td>Limite inferiore HNA: questo gate viene definito nella schermata successiva.</td><td>⑥</td><td>Anteprima</td></tr></tbody></table>

La procedura seguente descrive come regolare un gate:

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINE |
| --- | --- | --- |
| 1. | Accedere al menu Home dell’interfaccia utente di BactoSense. | <img src="/img/manual/cell-d07318a281b1.png" alt="Illustrazione della tabella a pagina 107 del manuale" width="282" className="manual-figure" loading="lazy"/> |
| 2. | Premere il pulsante Gate settings. | <img src="/img/manual/cell-882cf24141b5.png" alt="Illustrazione della tabella a pagina 107 del manuale" width="282" className="manual-figure" loading="lazy"/> |
| 3. | Premere Edit per il gate da modificare. | <img src="/img/manual/cell-fd72b5bdcc2a.png" alt="Illustrazione della tabella a pagina 107 del manuale" width="282" className="manual-figure" loading="lazy"/> |
| 4. | Modificare il nome se desiderato, quindi premere Next. |  |
| 5. | Regolare il numero e la posizione dei vertici del poligono (per TCC e ICC, consultare la sezione 11.4.4). Un gate poligonale può avere da 3 a 6 vertici. | <img src="/img/manual/cell-7440601f6ebb.png" alt="Illustrazione della tabella a pagina 107 del manuale" width="282" className="manual-figure" loading="lazy"/> |
| 6. | Premere il pulsante Next. |  |
| 7. | Inserire il limite inferiore HNA (per TCC e ICC, consultare la sezione 11.4.4). | <img src="/img/manual/cell-ec7e624b3c7f.png" alt="Illustrazione della tabella a pagina 107 del manuale" width="282" className="manual-figure" loading="lazy"/> |
| 8. | Premere Save e confermare. |  |
| 9. | Al termine, è possibile selezionare il gruppo modificato quando si creano nuove misurazioni oppure rianalizzare misurazioni esistenti, come descritto nella sezione 11.4.1. |  |

### 11.4.4 Strategia di regolazione dei gate per TCC e ICC {#section-11-4-4}

BactoSense è fornito con gruppi di gate predefiniti adatti alla grande maggioranza dei campioni. Se necessario, gli utenti avanzati possono tuttavia regolarli. Di seguito è descritta una procedura generale di regolazione, valida sia per le cartucce TCC sia per quelle ICC.

<table className="manual-table"><tbody><tr><th scope="col"></th><th scope="col">OPERAZIONE</th><th scope="col">INFORMAZIONI AGGIUNTIVE / IMMAGINE</th></tr><tr><td>1.</td><td>Misurare un campione d’acqua utilizzando il protocollo standard Water analysis. Nella pagina Result details, il diagramma FL1 rispetto a FL2 mostra: 1) cellule LNA e HNA nell’acqua 2) rumore elettrico dei rilevatori ottici 3) detriti/rumore di fondo (che possono includere cellule danneggiate, aggregati o altre particelle).</td><td><img src="/img/manual/cell-564a3512838d.png" alt="Illustrazione della tabella a pagina 108 del manuale" width="252" className="manual-figure" loading="lazy" /></td></tr><tr><td>2.</td><td>Accedere al menu Home dell’interfaccia di BactoSense e premere Gate settings.</td><td></td></tr><tr><td>3.</td><td>In base alle necessità, eseguire una delle seguenti operazioni: • creare un nuovo gruppo di gate • modificare un gruppo esistente • copiare un gruppo esistente e modificare la copia.</td><td></td></tr><tr><td>4.</td><td>Assegnare un nome al gruppo di gate e premere Next.</td><td></td></tr><tr><td>5.</td><td>Posizionare il gate poligonale alle estremità sinistra e destra. Ad esempio, utilizzare questi quattro punti:<table className="manual-table"><tbody><tr><td>FL1</td><td>FL2</td></tr><tr><td>3.0</td><td>0.0</td></tr><tr><td>3.0</td><td>6.1</td></tr><tr><td>6.5</td><td>6.1</td></tr><tr><td>6.5</td><td>0.0</td></tr></tbody></table></td><td><img src="/img/manual/cell-374bfaa7d23b.png" alt="Illustrazione della tabella a pagina 108 del manuale" width="252" className="manual-figure" loading="lazy" /></td></tr><tr><td>6.</td><td>Premere Next e Save. Confermare il salvataggio del nuovo gruppo di gate.</td><td></td></tr><tr><td>7.</td><td>Accedere alla vista del risultato del campione d’acqua misurato in precedenza.</td><td></td></tr></tbody></table>

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINE |
| --- | --- | --- |
| 8. | Nella vista del risultato, premere Re-gate result. |  |
| 9. | Selezionare il gate appena creato e rielaborare i dati con il nuovo gate premendo Confirm. |  |
| 10. | Aprire l’istogramma FL1 e individuare la prima valle dopo il picco del rumore, ossia il primo minimo dopo il picco all’estrema sinistra (freccia nell’immagine). Annotare il valore FL1 di questo minimo (ad esempio 3.8). | <img src="/img/manual/cell-d44e977152e1.png" alt="Illustrazione della tabella a pagina 109 del manuale" width="252" className="manual-figure" loading="lazy"/> |
| 11. | Tornare a Gate settings e modificare nuovamente il gate. Posizionare i limiti sinistri del gate sul valore FL1 determinato in precedenza. In questo modo si esclude il rumore elettrico dei rilevatori ottici. Se necessario, per l’asse FL2, posizionare i punti “b” e “c” appena sotto l’area dei detriti/rumore di fondo (generalmente visibile come diagonali diritte). | <img src="/img/manual/cell-67de70c6bd1f.png" alt="Illustrazione della tabella a pagina 109 del manuale" width="252" className="manual-figure" loading="lazy"/> |
| 12. | Salvare il gate regolato. |  |
| 13. | Accedere nuovamente alla vista del risultato del campione d’acqua misurato in precedenza. |  |
| 14. | Nella vista del risultato, premere Re-gate result. |  |
| 15. | Selezionare il gate appena creato e rielaborare i dati con il nuovo gate premendo Confirm. |  |

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINE |
| --- | --- | --- |
| 16. | Per posizionare il limite inferiore HNA, aprire nuovamente l’istogramma FL1 e individuare il minimo tra i picchi LNA e HNA (linea verticale nell’immagine). Annotarne il valore FL1 (ad esempio 4.8). | <img src="/img/manual/cell-3dd4365d2ad3.png" alt="Illustrazione della tabella a pagina 110 del manuale" width="252" className="manual-figure" loading="lazy"/> |
| 17. | Tornare a Gate settings e modificare nuovamente il gate. |  |
| 18. | Accedere al passaggio di configurazione del limite inferiore HNA. Inserire il limite precedentemente individuato nel campo FL1, premere Save e confermare. |  |
| 19. | Rianalizzare nuovamente la misurazione dell’acqua e verificare che il gate sia adatto. Regolarlo ulteriormente se necessario. |  |

## 11.5 Analisi avanzata dei dati {#section-11-5}

I dati di misurazione di BactoSense possono essere esportati nel formato Flow Cytometry Standard (FCS) 3.1. Il formato FCS è standardizzato dall’International Society for Advancement of Cytometry (ISAC) per garantire l’interoperabilità tra diversi strumenti di citometria a flusso e software di analisi. Esistono diverse versioni del formato, ciascuna delle quali introduce miglioramenti e funzioni aggiuntive. I dati FCS possono essere utilizzati per elaborazioni successive personalizzate offline, come l’applicazione di strategie complesse di selezione tramite gate, l’“impronta microbiologica”, il rilevamento automatico di anomalie e molto altro.

### 11.5.1 Recupero dei file FCS {#section-11-5-1}

I file FCS possono essere recuperati nei seguenti modi:

- Scaricandoli su una chiavetta USB mediante Export all (vedere sezione 12.1.1).

- Scaricandoli dall’interfaccia web, come file singoli (vedere sezione 13.4) o multipli (vedere sezione 13.5).

- Accedendo tramite FTP (vedere sezione 12.2).

- Accedendo tramite HTTPS (vedere sezione 12.3).

Per assistenza nella configurazione di una catena di strumenti per l’analisi avanzata dei dati, contattare support@bnovate.com.

## 11.6 Confronto con altri citometri a flusso {#section-11-6}

Per confrontare i risultati di BactoSense con quelli di un altro citometro a flusso, è possibile analizzare una soluzione di riferimento contenente microsfere autofluorescenti. Questo metodo consente di confrontare le scale di misurazione di dispositivi diversi.

<table className="manual-table"><tbody><tr><th scope="col"></th><th scope="col">OPERAZIONE</th><th scope="col" colSpan="2">INFORMAZIONI AGGIUNTIVE / IMMAGINE</th></tr><tr><td>1.</td><td>Si consiglia di utilizzare il kit di validazione, che contiene una soluzione di microsfere pronta all’uso.</td><td colSpan="2">Leggere le istruzioni del kit di validazione per ulteriori informazioni.</td></tr><tr><td>2.</td><td>Installare il dispositivo di campionamento manuale secondo il manuale d’uso.</td><td colSpan="2"></td></tr><tr><td>3.</td><td>Prelevare una delle soluzioni di microsfere del kit di validazione e caricarla nel dispositivo di campionamento.</td><td colSpan="2">Leggere le istruzioni del kit di validazione per ulteriori informazioni.</td></tr><tr><td>4.</td><td><Admonition type="info" title="Informazioni aggiuntive">Premere Home. Premere Back tante volte quanto necessario per far comparire il pulsante Home.</Admonition></td><td><img src="/img/manual/cell-d07318a281b1.png" alt="Illustrazione della tabella a pagina 112 del manuale" width="119" className="manual-figure" loading="lazy" /></td><td><img src="/img/manual/cell-05da61fc8424.png" alt="Illustrazione della tabella a pagina 112 del manuale" width="119" className="manual-figure" loading="lazy" /></td></tr><tr><td>5.</td><td>Nella schermata Home, premere Modalità e selezionare Modalità manuale. Premere Indietro, quindi Misura per aprire l’assistente di misurazione.</td><td colSpan="2"></td></tr><tr><td>6.</td><td>Scegliere il protocollo Prime dall’elenco.</td><td colSpan="2">Vedere sezione 10.9.3.</td></tr><tr><td>7.</td><td>Premere Next e Start. Attendere il completamento del protocollo di adescamento.</td><td colSpan="2"></td></tr><tr><td>8.</td><td>Scegliere il protocollo Beads Analysis dall’elenco ed eseguirlo.</td><td colSpan="2"></td></tr><tr><td>9.</td><td>Attendere i risultati e, se necessario, regolare con precisione il gate del diagramma FL1 rispetto a FL2 per contare solo le 4 popolazioni di microsfere. È importante assicurarsi che rumore, fondo e detriti non vengano inclusi nel gate.</td><td colSpan="2">Vedere sezione 11.4.3 per regolare il gate. <img src="/img/manual/render-fa85ea9255cb.webp" alt="Illustrazione della tabella a pagina 112 del manuale" width="246" className="manual-figure" loading="lazy" /></td></tr></tbody></table>

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINE |
| --- | --- | --- |
| 10. | Nell’istogramma FL1 rispetto ai conteggi, stimare il valore logaritmico del centro di ogni picco sull’asse FL1. In questo esempio si ottengono approssimativamente (in log): 1<sup>º</sup> picco = 4.05 2<sup>º</sup> picco = 4.3 3<sup>º</sup> picco = 5.35 4<sup>º</sup> picco = 6.2 | <img src="/img/manual/cell-c2ba9a559620.png" alt="Illustrazione della tabella a pagina 113 del manuale" width="248" className="manual-figure" loading="lazy"/> |
| 11. | Misurare le stesse microsfere con l’altro citometro a flusso da confrontare e ripetere i passaggi 10 e 11. In questo esempio si ottengono approssimativamente (in log): 1<sup>º</sup> picco = log(10<sup>3</sup>) = 3 2<sup>º</sup> picco = log(2*10<sup>3</sup>) = 3.3 3<sup>º</sup> picco = log(2.4*10<sup>4</sup>) = 4.4 4<sup>º</sup> picco = log(1.6*10<sup>5</sup>) = 5.2 | <img src="/img/manual/cell-4c2343e0bbfe.png" alt="Illustrazione della tabella a pagina 113 del manuale" width="248" className="manual-figure" loading="lazy"/> |
| 12. | Con i diversi valori ottenuti per entrambi i dispositivi, è ora possibile confrontarne le scale e le finestre di misurazione. |  |
