---
id: sst-aquasense
title: Kit per il test di idoneità del sistema per AQU@Sense MB
sidebar_position: 4
slug: /sst-aquasense
document_id: UM_0005-01
manual_version: "01"
---

## Informazioni generali {#general-information}

Secondo la Farmacopea degli Stati Uniti USP \<1058>, il test di idoneità del sistema (SST) verifica che un sistema funzioni conformemente ai criteri stabiliti nella procedura di test. Il kit SST per AQU@Sense MB è un kit di reagenti utilizzato per effettuare questa verifica delle prestazioni.

Prerequisiti:

- AQU@Sense MB con il dispositivo di campionamento manuale installato.
- Kit SST conservato in condizioni adeguate e non scaduto.
- Credenziali personali per l'accesso allo strumento con autorizzazioni **Advanced** o **Admin**.

Conservare il kit in frigorifero a **2–8 °C (35–47 °F)**, al riparo dalla luce. In queste condizioni, la durata di conservazione è di **un anno**. Il kit consente di effettuare **10 test**.

## Informazioni di sicurezza {#safety}

:::gloves[Indossare guanti protettivi]

In caso di contatto con la pelle, sciacquare immediatamente e abbondantemente con acqua dolce. In caso di dolore o irritazione, consultare un medico.

:::

:::warning[Indossare occhiali di protezione]

In caso di contatto con gli occhi, sciacquare immediatamente con acqua corrente per 10–15 minuti, tenendo le palpebre aperte, e consultare un medico.

:::

:::info[Leggere le istruzioni prima dell'uso]

Seguire attentamente il presente manuale e il manuale d'uso di AQU@Sense MB.

:::

## Contenuto {#contents}

| Articolo | Quantità | Numero del documento SDS | Uso |
| --- | --- | --- | --- |
| Salviette imbevute di alcol (Alcohol Wipes) | 10 | — | Monouso |
| Soluzione di microsfere (Beads Solution) | 10 | 50106 | Monouso |
| Soluzione di riferimento (Reference Solution) | 10 | — | Monouso |
| Soluzione sterile (Sterile Solution) | 10 | — | Monouso |
| Portaprovetta (Tube Holder) | 1 | — | Uso multiplo |

Smaltire gli articoli monouso secondo le normative locali sullo smaltimento dei rifiuti. Le schede di dati di sicurezza sono disponibili su richiesta presso BWT.

## Quando utilizzare il kit per il test di idoneità del sistema {#when-to-use}

Eseguire un SST:

- Nell'ambito dell'assicurazione della qualità e della validazione, ad esempio durante la qualificazione operativa, la qualificazione delle prestazioni, la sostituzione della cartuccia o la manutenzione.
- Dopo aver conservato lo strumento per più di un mese.
- Se vi sono indicazioni che i risultati delle misure potrebbero essere errati.

La procedura consiste in tre parti, da eseguire nell'ordine: [validazione ottica](#optical-validation), [validazione di riferimento](#reference-validation) e [validazione sterile](#sterile-validation). Tutti i criteri di accettazione dei test devono essere soddisfatti. La procedura richiede circa **2,5 ore**.

## Preparativi {#preparations}

1. Verificare che il kit SST non sia scaduto e sia stato conservato nelle condizioni specificate.
2. Prelevare una salvietta imbevuta di alcol, una soluzione di microsfere, una soluzione di riferimento, una soluzione sterile e il portaprovetta.
3. Assicurarsi che il dispositivo di campionamento manuale sia installato saldamente su AQU@Sense MB.
4. Estrarre la salvietta imbevuta di alcol dalla confezione. Pulire l'ago di campionamento dall'alto verso il basso per rimuovere i contaminanti. Lasciare asciugare per **30 secondi**.
5. Accedere ad AQU@Sense MB con il proprio nome utente e la propria password. Sono necessarie autorizzazioni **Advanced** o **Admin**.
6. Aprire **Home → Maintenance → Instrument validation**. Selezionare **Activate Instrument validation** e premere **Save**.
7. Proseguire con la parte A.

## Parte A: validazione ottica {#optical-validation}

Questa fase verifica il sistema ottico dello strumento mediante la misura di una soluzione contenente particelle fluorescenti.

1. Collegare la stazione di lavaggio al dispositivo di campionamento manuale.
2. Aprire **Home → Manual mode → Start**. Selezionare **Clean Sampling Device with Washstation**, con **una ripetizione**. Premere **Next** e avviare il protocollo.
3. Al termine, agitare vigorosamente la provetta della soluzione di microsfere per **10 secondi**, a mano o utilizzando un agitatore vortex.
4. Rimuovere i tappi dalla provetta della soluzione di microsfere e dal portaprovetta. Inserire la provetta aperta nel portaprovetta. Rimuovere la stazione di lavaggio e collegare il portaprovetta contenente la soluzione di microsfere.

   :::caution[Utilizzare l'intera provetta di reagente]

   Inserire l'intera provetta di reagente nel portaprovetta, senza versarne il contenuto nel portaprovetta.

   :::

   ![Apertura e inserimento di una provetta di reagente monouso nel portaprovetta](/img/other-manuals/sst-tube-holder-insertion.png "width=650")

5. Tornare alla panoramica dei protocolli. Selezionare **Prime**, con **una ripetizione**. Premere **Next** e avviare.
6. Al termine, tornare alla panoramica dei protocolli. Selezionare **Beads Analysis**, con **una ripetizione**. Premere **Next** e avviare.
7. Esaminare i risultati. Tutti i criteri seguenti devono essere soddisfatti:

   **TCC: 50,000–75,000/mL**

   | Canale | CV (%) | Mediana |
   | --- | --- | --- |
   | FL1 | Inferiore a 15 | 5.7–6.5 |
   | FL2 | Inferiore a 20 | 5.1–5.7 |
   | SSC | Inferiore a 25 | 4.7–6.3 |

   ![Esempio di risultati della validazione ottica](/img/other-manuals/sst-optical-results.png "width=450")

8. Se il test è superato, rimuovere il portaprovetta, estrarre la provetta della soluzione di microsfere, richiuderla con il tappo e smaltirla. Proseguire con la parte B.

   Se il test non è superato, ripeterlo assicurandosi che la soluzione di microsfere sia ben miscelata. Se il test continua a non essere superato, contattare l'assistenza BWT.

## Parte B: validazione di riferimento {#reference-validation}

Questa fase verifica il processo di colorazione automatizzata dello strumento.

1. Collegare la stazione di lavaggio al dispositivo di campionamento manuale.
2. Aprire **Home → Manual mode → Start**. Eseguire **Clean Sampling Device with Washstation**, con **una ripetizione**. Premere **Next** e avviare.
3. Rimuovere il tappo da una provetta di soluzione di riferimento e inserire l'intera provetta nel portaprovetta, come illustrato nella parte A. Al termine del protocollo di pulizia, rimuovere la stazione di lavaggio e collegare il portaprovetta contenente la soluzione di riferimento.
4. Tornare alla panoramica dei protocolli. Eseguire **Prime**, con **una ripetizione**.
5. Al termine, tornare alla panoramica dei protocolli. Selezionare **Water Analysis**, con **una ripetizione**. In **Gates**, selezionare **ICC Default Gate**. Premere **Next** e avviare.
6. Confrontare le nuvole batteriche principali con i criteri di riferimento:

   | Grafico a punti | Criterio di accettazione |
   | --- | --- |
   | FL1 / FL2 | Nuvola principale sopra 4.5 sull'asse FL1 e sotto 5 sull'asse FL2 |
   | FL1 / SSC | Nuvola principale sopra 2 e sotto 5.5 sull'asse SSC |

   ![Grafici a punti di riferimento con le nuvole batteriche principali cerchiate in arancione](/img/other-manuals/validation-reference-dotplots.png "width=650")

   :::info[Aspetto delle nuvole]

   A seconda della cartuccia e delle condizioni di conservazione, le nuvole possono differire dall'esempio.

   :::

7. Se il test è superato, rimuovere il portaprovetta, estrarre la provetta della soluzione di riferimento, richiuderla con il tappo e smaltirla. Proseguire con la parte C.

   Se il test non è superato, ripeterlo con una nuova soluzione di riferimento. Se il test continua a non essere superato, contattare l'assistenza BWT.

## Parte C: validazione sterile {#sterile-validation}

Questa fase verifica la pulizia del dispositivo di campionamento e del sistema fluidico mediante la misura di acqua priva di cellule.

1. Collegare la stazione di lavaggio al dispositivo di campionamento manuale.
2. Aprire **Home → Manual mode → Start**. Eseguire **Clean Sampling Device with Washstation**, con **una ripetizione**. Premere **Next** e avviare.
3. Rimuovere il tappo da una provetta di soluzione sterile e inserire l'intera provetta nel portaprovetta, come illustrato nella parte A. Al termine del protocollo di pulizia, rimuovere la stazione di lavaggio e collegare il portaprovetta contenente la soluzione sterile.
4. Tornare alla panoramica dei protocolli. Eseguire **Prime**, con **una ripetizione**.
5. Al termine, tornare alla panoramica dei protocolli. Selezionare **Water Analysis**, con **una ripetizione**. Selezionare **ICC Default Gate**, premere **Next** e avviare.
6. Esaminare il risultato. Il criterio di accettazione è **ICC inferiore a 100/mL**.
7. Se il test è superato, rimuovere il portaprovetta, estrarre la provetta della soluzione sterile, richiuderla con il tappo e smaltirla. Riporre il portaprovetta nel kit SST, conservare il kit nelle condizioni specificate e collegare la stazione di lavaggio al dispositivo di campionamento manuale.

   Se il test non è superato, eseguire la decontaminazione biologica utilizzando il kit di pulizia. Ripetere il test con una nuova soluzione sterile. Se il test continua a non essere superato, contattare l'assistenza BWT.

8. Aprire **Home → Maintenance → Instrument validation**. Deselezionare **Activate Instrument validation** e premere **Save**.

Il test di idoneità del sistema è completato con successo quando tutte e tre le parti sono state superate.
