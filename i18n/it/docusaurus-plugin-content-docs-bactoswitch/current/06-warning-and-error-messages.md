---
title: "6. Messaggi di avvertimento e di errore"
sidebar_label: "6. Messaggi di avvertimento e di errore"
slug: /warning-and-error-messages
sidebar_position: 6
description: "Manuale d’uso BactoSwitch: Messaggi di avvertimento e di errore."
---

## 6.1 Avvertimenti {#section-6-1}

Gli avvertimenti indicano una condizione che richiede l’attenzione dell’utilizzatore ma che non interrompe necessariamente il funzionamento.

*Tabella 6-1 Avvertimenti di BactoSwitch*

| CODICE DI ERRORE | NOME | DESCRIZIONE | CAUSE / COSA FARE |
| --- | --- | --- | --- |
| W15 | BactoSwitchLowFlow | Il flusso in ingresso è inferiore al valore consigliato. La precisione della misura potrebbe essere compromessa. | **Cause tipiche:** pressione in ingresso inferiore alla specifica, valvola a monte parzialmente chiusa oppure installazione che crea contropressione allo scarico.<br />**Azione consigliata:**<br />• In **Test BactoSwitch**, aprire solo la linea interessata e regolarla a 150 – 400 mL/min con la manopola di regolazione della portata (vedere [Test delle linee e regolazione della portata](04-installation.md#section-4-8)).<br />• Verificare che la pressione in ingresso sia > 0.1 bar e Δh > 0.5 m (vedere [Figura 4-2](04-installation.md#section-4-4)).<br />• Eliminare eventuali restrizioni a monte. |

## 6.2 Errori {#section-6-2}

*Tabella 6-2 Errori di BactoSwitch*

| CODICE DI ERRORE | NOME | DESCRIZIONE | CAUSE / COSA FARE |
| --- | --- | --- | --- |
| E60 | BactoSwitchFlowTooLowError | Il flusso misurato sull’ingresso selezionato è inferiore all’intervallo accettabile per il funzionamento a linea singola. | **Cause tipiche:** pressione in ingresso bassa; restrizione a monte; installazione dello scarico che causa contropressione; valvola chiusa manualmente.<br />**Azione consigliata:**<br />• In **Test BactoSwitch**, aprire solo la linea interessata e regolarla a 150 – 400 mL/min con la manopola di regolazione della portata (vedere [Test delle linee e regolazione della portata](04-installation.md#section-4-8)).<br />• Verificare che la pressione in ingresso sia > 0.1 bar e Δh > 0.5 m (vedere [Figura 4-2](04-installation.md#section-4-4)).<br />• Eliminare eventuali restrizioni a monte.<br />• Verificare che la valvola di intercettazione sia aperta. |
| E61 | BactoSwitchDeviceNotFoundError | BactoSense non rileva BactoSwitch. | **Cause tipiche:** BactoSwitch non alimentato; cavo USB-C non collegato o non avvitato su entrambi i dispositivi.<br />**Azione consigliata:** collegare l’alimentatore a BactoSwitch e fissare il cavo USB-C con le ghiere a vite sia su BactoSwitch sia su BactoSense. Il dispositivo viene rilevato automaticamente quando è collegato. |
| E62 | BactoSwitchTimeoutError | Un tentativo di comunicazione con BactoSwitch ha superato il tempo previsto. | **Cause tipiche:** problema temporaneo di comunicazione sul collegamento USB-C; connettori allentati o non avvitati.<br />**Azione consigliata:** verificare che il cavo USB-C sia inserito e avvitato su entrambe le estremità e che BactoSwitch sia alimentato, quindi ripetere l’operazione. |
| E63 | BactoSwitchCommunicationError | Si è verificato un errore di comunicazione tra BactoSense e BactoSwitch. | **Cause tipiche:** collegamento USB-C instabile o errato; cavo non fissato.<br />**Azione consigliata:** ispezionare e fissare nuovamente il cavo USB-C su entrambi i dispositivi (utilizzare le ghiere a vite), verificare l’alimentazione di BactoSwitch e riavviare entrambi i dispositivi. |

Se i problemi persistono dopo aver eseguito le operazioni sopra indicate, contattare il partner di assistenza locale (vedere [Contatti](09-contact.md)).

Per gli avvertimenti e gli errori di BactoSense, vedere il capitolo [Avvertimenti, errori e risoluzione dei problemi](/bactosense/warnings-errors-and-troubleshooting) del manuale d’uso di BactoSense.
