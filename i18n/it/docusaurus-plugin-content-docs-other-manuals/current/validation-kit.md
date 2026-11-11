---
id: validation-kit
title: Kit di validazione per BactoSense
sidebar_position: 2
slug: /validation-kit
document_id: UM_0003-01
manual_version: "01"
---

## Informazioni generali {#general-information}

Il kit di validazione è un kit di reagenti utilizzato per verificare il corretto funzionamento di BactoSense. I reagenti sono stati sviluppati per l'uso dopo la misura di campioni di acqua potabile. Il kit potrebbe non essere efficace se conservato in condizioni inadeguate, se scaduto o se sono stati misurati campioni diversi dall'acqua potabile.

Conservare il kit in frigorifero a **2–8 °C (35–47 °F)**, al riparo dalla luce. In queste condizioni, la durata di conservazione è di **un anno**. Il kit consente di eseguire **10 validazioni**.

## Informazioni sulla sicurezza {#safety}

:::gloves[Indossare guanti protettivi]

In caso di contatto con la pelle, sciacquare immediatamente e abbondantemente con acqua fresca. In caso di dolore o irritazione, consultare un medico.

:::

:::warning[Indossare occhiali di protezione]

In caso di contatto con gli occhi, sciacquarli immediatamente con acqua corrente per 10–15 minuti, tenendo le palpebre aperte, e consultare un medico.

:::

:::info[Leggere le istruzioni prima dell'uso]

Seguire attentamente questo manuale e il [manuale d'uso di BactoSense](/bactosense/).

:::

## Contenuto {#contents}

| Articolo | Quantità | Numero del documento SDS | Uso |
| --- | --- | --- | --- |
| Salviette imbevute di alcol (Alcohol Wipes) | 10 | — | Monouso |
| Soluzione di microsfere (Beads Solution) | 10 | 50106 | Monouso |
| Soluzione di riferimento (Reference Solution) | 10 | — | Monouso |
| Soluzione sterile (Sterile Solution) | 10 | — | Monouso |
| Portaprovette (Tube Holder) | 1 | — | Riutilizzabile |

Smaltire gli articoli monouso secondo le normative locali sullo smaltimento dei rifiuti. Le schede di dati di sicurezza (SDS) sono disponibili su richiesta presso bNovate o il partner di distribuzione locale.

## Quando utilizzare il kit di validazione {#when-to-use}

Eseguire una validazione dello strumento:

- Dopo una spedizione o un altro trasporto su lunga distanza con vibrazioni o urti.
- Dopo aver conservato lo strumento per più di un mese.
- Se vi sono indicazioni che i risultati delle misure potrebbero essere errati.

La validazione completa comprende tre parti, da eseguire nell'ordine seguente: [validazione ottica](#optical-validation), [validazione con la soluzione di riferimento](#reference-validation) e [validazione con la soluzione sterile](#sterile-validation). Tutti i criteri di accettazione devono essere soddisfatti. Una validazione completa richiede circa **3 ore**.

In casi specifici è possibile eseguire una validazione parziale. Completare prima i preparativi, quindi seguire la parte pertinente.

## Preparativi {#preparations}

1. Verificare che il kit non sia scaduto e che sia stato conservato nelle condizioni specificate.
2. Per una validazione completa, prelevare una salvietta imbevuta di alcol, una Beads Solution, una Reference Solution, una Sterile Solution e il Tube Holder. Per una validazione parziale, prelevare solo la salvietta, il Tube Holder e la soluzione pertinente.
3. Assicurarsi che il dispositivo di campionamento manuale sia installato saldamente su BactoSense.
4. Aprire la confezione della salvietta imbevuta di alcol. Pulire l'ago di campionamento dall'alto verso il basso per rimuovere i contaminanti. Lasciare asciugare per **30 secondi**.
5. Accedere come **Admin**. Da **Home → Maintenance → Self-check**, premere **Rerun**. Verificare che ogni test mostri un **PASS** verde.
6. Aprire **Home → Maintenance → Instrument validation**. Selezionare **Activate Instrument validation** e premere **Save**.
7. Per una validazione completa, proseguire con la parte A. Per una validazione parziale, proseguire con la parte corrispondente.

## Parte A: Validazione ottica {#optical-validation}

Questa procedura verifica il sistema ottico misurando una soluzione contenente particelle fluorescenti.

1. Completare i [preparativi](#preparations), se non sono già stati eseguiti.
2. Collegare la stazione di lavaggio al dispositivo di campionamento manuale. Se non è disponibile, collegare una provetta da 5 mL con tappo a vite, vuota e pulita.
3. Come **Admin**, aprire **Home → Manual mode → Start**. Selezionare **Clean Sampling Device with Washstation**, con **una ripetizione**. In assenza della stazione di lavaggio, selezionare **Clean Sampling Device**, con **due ripetizioni**. Premere **Next** e avviare il protocollo.
4. Al termine, agitare energicamente la provetta di Beads Solution per **10 secondi**, a mano o utilizzando un agitatore vortex.
5. Rimuovere i tappi dalla provetta di Beads Solution e dal Tube Holder. Inserire la provetta aperta nel portaprovette. Rimuovere la stazione di lavaggio e collegare al dispositivo di campionamento manuale il portaprovette contenente la Beads Solution.

   :::caution[Utilizzare l'intera provetta di reagente]

   Inserire l'intera provetta di reagente nel Tube Holder, senza versarne il contenuto nel portaprovette.

   :::

   ![Apertura della provetta di reagente e inserimento dell'intera provetta nel Tube Holder](/img/other-manuals/tube-holder-insertion.png "width=650")

6. Aprire **Home → Manual mode → Start**. Selezionare **Prime**, con **una ripetizione**. Premere **Next** e avviare.
7. Tornare alla panoramica dei protocolli. Selezionare **Beads Analysis**, con **due ripetizioni**. Premere **Next** e avviare.
8. Esaminare i risultati. Tutti i criteri seguenti devono essere soddisfatti:

   **TCC: 50,000–75,000/mL**

   | Canale | CV (%) | Mediana |
   | --- | --- | --- |
   | FL1 | Inferiore a 15 | 5.7–6.5 |
   | FL2 | Inferiore a 20 | 5.1–5.7 |
   | SSC | Inferiore a 25 | 4.7–6.3 |

   ![Esempio di risultati della misura per la validazione ottica](/img/other-manuals/validation-optical-results.png "width=450")

9. Se il test è superato, rimuovere il Tube Holder, estrarre la provetta di Beads Solution, richiuderla con il tappo e smaltirla. Proseguire con la parte B.

   Se il test non è superato, verificare la scadenza e le condizioni di conservazione del kit, quindi ripetere il test, assicurandosi che la Beads Solution sia ben miscelata. Se i test continuano a non essere superati, contattare l'assistenza bNovate o il referente locale per l'assistenza.

## Parte B: Validazione con la soluzione di riferimento {#reference-validation}

Questa procedura valida il processo di colorazione automatizzato.

1. Completare i [preparativi](#preparations) se si esegue solo questa parte.
2. Collegare la stazione di lavaggio oppure, se non è disponibile, una provetta da 5 mL con tappo a vite, vuota e pulita.
3. Come **Admin**, aprire **Home → Manual mode → Start**. Eseguire **Clean Sampling Device with Washstation**, con **una ripetizione**. In assenza della stazione di lavaggio, eseguire **Clean Sampling Device**, con **due ripetizioni**. Premere **Next** e avviare.
4. Rimuovere il tappo dalla provetta di Reference Solution e inserire l'intera provetta nel Tube Holder, come mostrato nella parte A. Rimuovere la stazione di lavaggio e collegare il portaprovette contenente la Reference Solution.
5. Aprire **Home → Manual mode → Start**. Eseguire **Prime**, con **una ripetizione**.
6. Tornare alla panoramica dei protocolli. Selezionare **Water Analysis**, con **due ripetizioni**. In **Gates**, selezionare il gate predefinito per il tipo di cartuccia, ad esempio **ICC Default Gate** o **TCC Default Gate**. Premere **Next** e avviare.
7. Confrontare le nubi batteriche principali con i criteri di riferimento:

   | Grafico a punti | Criterio di accettazione |
   | --- | --- |
   | FL1 / FL2 | Nube principale sopra 4.5 sull'asse FL1 e sotto 5 sull'asse FL2 |
   | FL1 / SSC | Nube principale sopra 2 e sotto 5.5 sull'asse SSC |

   ![Grafici a punti di riferimento con le nubi batteriche principali cerchiate in arancione](/img/other-manuals/validation-reference-dotplots.png "width=650")

   :::info[Aspetto delle nubi]

   A seconda della cartuccia e delle condizioni di conservazione, le nubi possono differire dall'esempio.

   :::

8. Se il test è superato, rimuovere il Tube Holder, estrarre la provetta di Reference Solution, richiuderla con il tappo e smaltirla. Proseguire con la parte C.

   Se il test non è superato, verificare la scadenza e le condizioni di conservazione del kit. Ripetere il test con una nuova Reference Solution. Se i test continuano a non essere superati, contattare l'assistenza bNovate o il referente locale per l'assistenza.

## Parte C: Validazione con la soluzione sterile {#sterile-validation}

Questa procedura verifica la pulizia di BactoSense misurando acqua priva di cellule.

1. Completare i [preparativi](#preparations) se si esegue solo questa parte.
2. Collegare la stazione di lavaggio oppure, se non è disponibile, una provetta da 5 mL con tappo a vite, vuota e pulita.
3. Come **Admin**, aprire **Home → Manual mode → Start**. Eseguire **Clean Sampling Device with Washstation**, con **una ripetizione**. In assenza della stazione di lavaggio, eseguire **Clean Sampling Device**, con **due ripetizioni**. Premere **Next** e avviare.
4. Rimuovere il tappo dalla provetta di Sterile Solution e inserire l'intera provetta nel Tube Holder, come mostrato nella parte A. Rimuovere la stazione di lavaggio e collegare il portaprovette contenente la Sterile Solution.
5. Aprire **Home → Manual mode → Start**. Eseguire **Prime**, con **una ripetizione**.
6. Tornare alla panoramica dei protocolli. Selezionare **Water Analysis**, con **due ripetizioni**. In **Gates**, selezionare **ICC Default Gate** o **TCC Default Gate**, a seconda della cartuccia. Premere **Next** e avviare.
7. Esaminare i risultati. Il criterio applicabile deve essere soddisfatto:

   | Cartuccia | Criterio di accettazione |
   | --- | --- |
   | TCC | TCC inferiore a 300/mL |
   | ICC | ICC inferiore a 100/mL |

8. Se il test è superato, rimuovere il Tube Holder, estrarre la provetta di Sterile Solution, richiuderla con il tappo e smaltirla. Riporre il portaprovette nel kit di validazione e collegare la stazione di lavaggio al dispositivo di campionamento manuale.

   Se il test non è superato, verificare la scadenza e le condizioni di conservazione del kit. Eseguire la [decontaminazione biologica](cleaning-kit.md#biological-contamination), quindi ripetere il test con una nuova Sterile Solution. Se i test continuano a non essere superati, contattare l'assistenza bNovate o il referente locale per l'assistenza.

9. Aprire **Home → Maintenance → Instrument validation**. Deselezionare **Activate Instrument validation** e premere **Save**.

La validazione dello strumento è completata correttamente quando tutte le parti richieste sono state superate.
