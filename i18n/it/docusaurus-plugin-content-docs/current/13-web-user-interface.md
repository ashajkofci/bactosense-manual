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

<table className="manual-table"><tbody><tr><th scope="col"></th><th scope="col">OPERAZIONE</th><th scope="col" colSpan="2">INFORMAZIONI AGGIUNTIVE / IMMAGINI</th></tr><tr><td>1.</td><td>Collegare BactoSense via Ethernet a una rete sicura (ad esempio LAN). Collegare il proprio dispositivo (ad esempio computer o tablet) alla stessa rete.</td><td colSpan="2"></td></tr><tr><td>2.</td><td>Nella schermata Home dell’interfaccia utente di BactoSense, premere Impostazioni, quindi Informazioni sul sistema.</td><td><img src="/img/manual/cell-6a3f9ce5d051.png" alt="Illustrazione della tabella a pagina 119 del manuale" width="122" className="manual-figure" loading="lazy" /></td><td><img src="/img/manual/cell-fc64c36946da.png" alt="Illustrazione della tabella a pagina 119 del manuale" width="122" className="manual-figure" loading="lazy" /></td></tr><tr><td>3.</td><td>Recuperare l’indirizzo IP di BactoSense mostrato nella pagina System info.</td><td colSpan="2"></td></tr><tr><td>4.</td><td>Aprire un browser web sul proprio dispositivo.</td><td colSpan="2"></td></tr><tr><td>5.</td><td>Inserire l’indirizzo IP di BactoSense nella barra degli indirizzi e premere Invio.</td><td colSpan="2"></td></tr><tr><td>6.</td><td>Nella pagina di accesso, utilizzare lo stesso nome utente e la stessa password di BactoSense e premere Login.</td><td colSpan="2"></td></tr></tbody></table>

## 13.3 Pagina iniziale in modalità manuale {#section-13-3}

<img src="/img/figures-second/figure-57e499d51a174f.webp" alt="Figura 13-1 Pagina iniziale dell’interfaccia utente web" width="654" className="manual-figure" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Illustrazione dal manuale d’uso BactoSense" width="57" className="manual-icon" loading="lazy" />

*Figura 13-1 Pagina iniziale dell’interfaccia utente web*

<table className="manual-table"><tbody><tr><td>1</td><td>Menu</td><td>2</td><td>Stato dello strumento</td></tr><tr><td>3</td><td>Pannello riepilogativo con gli ultimi risultati</td><td>4</td><td>Lingua: menu a discesa per cambiare la lingua.</td></tr><tr><td>5</td><td>Opzioni di disconnessione dall’interfaccia web e riavvio di BactoSense</td><td>6</td><td>Avanzamento della misurazione corrente</td></tr></tbody></table>

## 13.4 Download di un file FCS {#section-13-4}

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Nell’interfaccia web, selezionare la pagina Risultati nel pannello di navigazione a sinistra. |  |
| 2. | Accedere al risultato da esportare. |  |
| 3. | Fare clic sul collegamento fcs (posizione X). | <img src="/img/manual/cell-0c18cf68589a.png" alt="Illustrazione della tabella a pagina 120 del manuale" width="271" className="manual-figure" loading="lazy"/> |
| 4. | Attendere il completamento del download. |  |

## 13.5 Download di un file ZIP con più risultati {#section-13-5}

I risultati di più misurazioni possono essere scaricati come file ZIP. L’archivio comprende il file FCS e i grafici riepilogativi di ogni misurazione.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Nell’interfaccia web, selezionare la pagina Risultati nel pannello di navigazione a sinistra. |  |
| 2. | Individuare i risultati della modalità desiderata: Modalità online o Modalità Manuale. |  |
| 3. | Selezionare l’intervallo di date desiderato e fare clic su Download ZIP. Una barra di avanzamento viene visualizzata nella parte superiore del browser fino all’avvio del download. | <img src="/img/manual/cell-836f089084c0.png" alt="Illustrazione della tabella a pagina 121 del manuale" width="282" className="manual-figure" loading="lazy"/> |
| 4. | Attendere il completamento del download. |  |

## 13.6 Download di tutti i risultati in formato CSV, XLSX o PDF {#section-13-6}

L’elenco di tutti i risultati può essere scaricato dall’interfaccia web in formato Excel XLSX, CSV o PDF. I risultati della Modalità online (Auto) sono separati da quelli della Modalità Manuale.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Nell’interfaccia web, selezionare la pagina Risultati nel pannello di navigazione a sinistra. |  |
| 2. | Individuare la sezione DOWNLOAD RESULTS, appena sotto la sezione PLOT superiore. |  |
| 3. | Fare clic sul file desiderato (xlsx, csv o PDF) per avviare il download. | <img src="/img/manual/cell-9979275487c3.png" alt="Illustrazione della tabella a pagina 121 del manuale" width="282" className="manual-figure" loading="lazy"/> |
| 4. | Attendere il completamento del download. |  |

## 13.7 Animazione dell’evoluzione dei diagrammi a punti {#section-13-7}

L’interfaccia web può animare i diagrammi a punti della Modalità online (Auto) per aiutare a visualizzare l’evoluzione delle misurazioni. Questa funzione mostra immagini statiche in rapida successione; l’animazione può essere esportata con il pulsante Scaricare in formato GIF.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Nell’interfaccia web, selezionare la pagina Grafici nel pannello di navigazione a sinistra. | <img src="/img/manual/cell-0615055418e0.png" alt="Illustrazione della tabella a pagina 122 del manuale" width="283" className="manual-figure" loading="lazy"/> |
| 2. | Utilizzare le frecce precedente e successiva o il cursore per centrare quest’ultimo sull’intervallo di date desiderato. | <img src="/img/manual/cell-fec791f8e8fd.png" alt="Illustrazione della tabella a pagina 122 del manuale" width="283" className="manual-figure" loading="lazy"/> |
| 3. | Premere Play per avviare l’animazione. | <img src="/img/manual/cell-fb7fd241751c.png" alt="Illustrazione della tabella a pagina 122 del manuale" width="283" className="manual-figure" loading="lazy"/> |
| 4. | Se necessario, regolare la velocità tramite l’apposito campo. |  |
| 5. | L’animazione può essere scaricata come file GIF premendo Scaricare in formato GIF. |  |

## 13.8 Modifica dell’intervallo di misurazione {#section-13-8}

Se lo strumento è in modalità Auto, l’intervallo di misurazione può essere modificato dall’interfaccia web.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Nell’interfaccia web, selezionare la pagina Impostazioni nel pannello di navigazione a sinistra. | <img src="/img/manual/cell-6df7821e3a62.png" alt="Illustrazione della tabella a pagina 122 del manuale" width="283" className="manual-figure" loading="lazy"/> |
| 2. | Modificare la durata dell’intervallo di misurazione. |  |
| 3. | Fare clic su Save per confermare. |  |

## 13.9 Acquisizione di schermate dell’interfaccia grafica {#section-13-9}

Acquisire schermate dell’interfaccia grafica di BactoSense dall’interfaccia web:

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Nell’interfaccia web, selezionare la pagina System info nel pannello di navigazione a sinistra. | <img src="/img/manual/cell-71bc4e13a72d.png" alt="Illustrazione della tabella a pagina 123 del manuale" width="284" className="manual-figure" loading="lazy"/> |
| 2. | Premere Get screenshot nella parte inferiore della pagina. |  |
| 3. | La schermata viene visualizzata sotto. |  |

## 13.10 Riavvio dall’interfaccia utente web {#section-13-10}

BactoSense può essere riavviato dall’interfaccia web secondo la procedura seguente.

:::info[L’accensione remota non è disponibile]

Lo strumento non può essere acceso da remoto.

:::

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Nell’angolo superiore destro dell’interfaccia web, fare clic sul nome utente per aprire il menu utente. | <img src="/img/manual/cell-f60b02982fd9.png" alt="Illustrazione della tabella a pagina 123 del manuale" width="284" className="manual-figure" loading="lazy"/> |
| 2. | Selezionare Riavvia e confermare la richiesta. |  |
| 3. | Lo strumento si riavvia ed è necessario effettuare nuovamente l’accesso. |  |
