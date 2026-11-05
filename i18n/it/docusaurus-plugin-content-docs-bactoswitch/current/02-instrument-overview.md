---
title: "2. Panoramica dello strumento"
sidebar_label: "2. Panoramica dello strumento"
slug: /instrument-overview
sidebar_position: 2
description: "Manuale d’uso BactoSwitch: Panoramica dello strumento."
---

## 2.1 Panoramica di BactoSwitch {#section-2-1}

Di seguito è riportata una panoramica degli elementi di BactoSwitch:

![Elementi di BactoSwitch nelle viste da A a F](/img/bactoswitch/bactoswitch-elements.png "width=700")

*Figura 2-1 Elementi di BactoSwitch*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Maniglia | 2 | Connettori delle linee di ingresso |
| 3 | Supporto a parete | 4 | Pomello di fissaggio del coperchio frontale |
| 5 | Coperchio frontale rimovibile | 6 | Spia della linea selezionata |
| 7 | Spia di stato | 8 | Linea dell’acqua verso BactoSense |
| 9 | Linea dell’acqua da BactoSense | 10 | Uscita della linea dell’acqua verso lo scarico |
| 11 | Presa USB-C | 12 | Presa di alimentazione |
| 13 | Comando manuale di apertura/chiusura della linea | 14 | Manopola di regolazione della portata |
| 15 | Accesso per la taratura del regolatore di pressione | 16 | Flussimetro |

## 2.2 Spie luminose {#section-2-2}

Il comportamento delle spie luminose è riepilogato nella Tabella 2-1. I numeri si riferiscono alla [Figura 2-1](02-instrument-overview.md#section-2-1), vista B.

*Tabella 2-1 Comportamento delle spie luminose*

| SPIA | COMPORTAMENTO |
| --- | --- |
| Spie di selezione linea (6) | **Blu:** linea aperta<br />**Spenta:** linea chiusa |
| Spia di stato (7) | **Luce verde:** inattivo<br />**Luce verde lampeggiante lenta:** misura in corso, nessun campionamento<br />**Luce verde lampeggiante rapida:** misura in corso, prelievo di acqua dalla linea<br />**Luce rossa:** errore di misura |

## 2.3 Principio di funzionamento {#section-2-3}

Lo schema seguente illustra il funzionamento di base di BactoSwitch (coperchio frontale rimosso per maggiore chiarezza). L’acqua di ciascuna linea di ingresso (1) attraversa una valvola di non ritorno (2, non visibile), un regolatore di pressione (3), quindi una valvola a spillo di regolazione del flusso (4) e infine un’elettrovalvola (5). Le linee dell’acqua aperte (ognuna delle quali può essere aperta o chiusa) vengono quindi riunite e l’acqua esce da BactoSwitch verso il dispositivo di campionamento in linea di BactoSense (6). Dopo aver attraversato il dispositivo di campionamento, l’acqua ritorna a BactoSwitch, attraversa il flussimetro (7) e infine raggiunge lo scarico (8).

![Principio di funzionamento di BactoSwitch con il percorso dell’acqua numerato](/img/bactoswitch/working-principle.png "width=700")

*Figura 2-2 Principio di funzionamento di BactoSwitch. Per le spiegazioni, vedere il testo sopra.*

:::info[Chiudere le linee non utilizzate]

Le elettrovalvole delle linee di ingresso non utilizzate devono essere chiuse manualmente e le linee corrispondenti devono essere disabilitate nel software. Per ulteriori informazioni, vedere [Installazione delle linee di ingresso](04-installation.md#section-4-4-3) e [Configurazione delle linee](04-installation.md#section-4-6).

:::

## 2.4 Targhetta identificativa di BactoSwitch {#section-2-4}

La targhetta identificativa di BactoSwitch si trova sul lato destro dello strumento.

![Posizione ed elementi della targhetta identificativa di BactoSwitch](/img/bactoswitch/type-plate.png "width=654")

*Figura 2-3 Targhetta identificativa di BactoSwitch*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Produttore | 2 | Nome del prodotto |
| 3 | Numero di serie | 4 | Codice a barre |
| 5 | Data di fabbricazione | 6 | Paese di origine |
| 7 | Requisiti di tensione e potenza | 8 | Marchio CE |
| 9 | Marchio UKCA | 10 | Conformità alle norme canadesi sulla compatibilità<br />elettromagnetica e sulle interferenze |
| 11 | Leggere le istruzioni e utilizzare<br />con cautela | 12 | Informazioni sullo smaltimento |

## 2.5 Targhetta identificativa dell’alimentatore di BactoSwitch {#section-2-5}

La targhetta identificativa dell’alimentatore di BactoSwitch si trova sull’alimentatore e presenta i seguenti elementi:

![Elementi della targhetta identificativa dell’alimentatore di BactoSwitch](/img/bactoswitch/power-supply-type-plate.png "width=514")

*Figura 2-4 Targhetta identificativa dell’alimentatore di BactoSwitch*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Produttore | 2 | Nome del prodotto |
| 3 | Codice articolo (varia in base al tipo di spina) | 4 | Data di fabbricazione |
| 5 | Tensione e frequenza di esercizio | 6 | Consumo energetico |
| 7 | Marchio CE | 8 | Marchio UKCA |
| 9 | Conformità alle norme canadesi sulla compatibilità<br />elettromagnetica e sulle interferenze | 10 | Leggere le istruzioni e utilizzare<br />con cautela |
| 11 | Informazioni sullo smaltimento |  |  |

## 2.6 Dati tecnici {#section-2-6}

*Tabella 2-2 Dati tecnici di BactoSwitch*

| PROPRIETÀ | SPECIFICA |
| --- | --- |
| **GENERALE** | \< |
| Versione hardware richiesta | BactoSense CORE/SMART, a partire dal numero di serie 910500 |
| Versione software richiesta | 3.1.0-BS e successive |
| Ambiente di funzionamento | Uso in ambienti interni |
| Altitudine di funzionamento | Max. 2000 m (6600 ft) sul livello del mare |
| Temperatura di funzionamento | 5 °C – 30 °C (41 °F – 86 °F) |
| Umidità di funzionamento | 10 % – 90 % RH |
| Temperatura di conservazione | 5 °C – 30 °C (41 °F – 86 °F) |
| Umidità di conservazione | 10 % – 70 % RH |
| Requisiti di ventilazione | Nessuno |
| Livello di pressione sonora | < 64 dBA |
| Classe di protezione | Strumento: IP65<br />Alimentatore: IP67 |
| **CAMPIONAMENTO** | \< |
| Tipo di campionamento | In linea |
| Condizioni del campione | Solo acqua<br />Temperatura: 5 °C – 40 °C (41 °F – 104 °F)<br />Torbidità: 0 – 10 FTU, 0 – 10 FNU<br />Conducibilità: 0 – 100’000 μS/cm a 20 °C<br />Valore pH: 5 – 12<br />Cloro: max. 3 mg/L<br />Ferro: max. 200 μg/L<br />Manganese: max. 50 μg/L<br />Particelle solide: < 0.5 mm |
| Numero di ingressi | 4 |
| Intervallo di pressione in ingresso | 0.1 – 5 bar |
| Intervallo di portata per singola linea | 150 – 400 mL/min |
| Regolatore di pressione | Integrato e pretarato (senza sfioro) |
| Regolazione della portata | Valvola a spillo regolabile |
| Selezione delle linee | Elettrovalvole normalmente aperte, a separazione del fluido<br />Comando manuale di chiusura |
| Interfacce fluidiche | Raccordo a innesto rapido ø6x1 mm |
| Tubi di ingresso | Materiale: PFA (trasparente)<br />Diametro esterno: 6 mm<br />Diametro interno: 4 mm<br />Lunghezza massima: 4 m<br />Quantità: 4x |
| Tubi del dispositivo di campionamento in linea | Materiale: PFA (trasparente)<br />Diametro esterno: 6.35 mm (1/4″)<br />Diametro interno: 4.35 mm<br />Lunghezza consigliata: 200 mm<br />Quantità: 2x |
| Tubo di uscita verso lo scarico | Materiale: PFA (trasparente)<br />Diametro esterno: 6 mm<br />Diametro interno: 4 mm<br />Lunghezza massima: 2 m<br />Quantità: 1x |
| Materiali a contatto con il fluido | PFA, SS 316L, SS 316Ti, FKM, EPDM, ottone ENP, PPS 40 % GF, PVDF, ceramica di zirconia |
| **PULIZIA** | \< |
| Agenti e condizioni | Acqua (temperatura: 1 °C – 85 °C, pressione: max. 2 bar, durata: max. 15 min)<br />Cloro: max. 10’000 mg/L di cloro attivo (temperatura: max. 25 °C) |
| **CARATTERISTICHE FISICHE** | \< |
| Dimensioni (L x P x A) | 264 x 206 x 300 mm (10.4 x 8.1 x 11.8″) |
| Peso | 12 kg (26.5 lbs) |
| Dimensioni dell’alimentatore (L x P x A) | 230 x 80 x 65 mm (9.0 x 3.1 x 2.6″) |
| Peso dell’alimentatore | 0.9 kg (2.0 lbs) |
| **CARATTERISTICHE ELETTRICHE** | \< |
| Categoria di installazione | II |
| Grado di inquinamento | 2 |
| Alimentazione | Alimentatore: 100 – 240 VAC ± 10 %, 50/60 Hz, 1.4 A<br />BactoSwitch: 24 VDC, 60 W |
| Consumo energetico | Max. 60 W |
| **INTERFACCE** | \< |
| USB | 1 x USB 2.0 tipo C (femmina) |
