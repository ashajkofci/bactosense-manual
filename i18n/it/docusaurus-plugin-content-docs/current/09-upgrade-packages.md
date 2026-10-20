---
title: "9. Pacchetti di aggiornamento"
sidebar_label: "9. Pacchetti di aggiornamento"
slug: /upgrade-packages
sidebar_position: 9
description: "Manuale d’uso BactoSense: Pacchetti di aggiornamento."
---

A seconda del modello BactoSense, alcune funzionalità sono opzionali e possono essere attivate con una chiave di licenza.

## 9.1 Pacchetto Scientific {#section-9-1}

Il *pacchetto Scientific* è destinato ai professionisti della ricerca sulle acque per eseguire analisi avanzate dei dati. Include le seguenti funzioni:

- Gate aggiuntivo: applicare un ulteriore gate poligonale configurabile ai dati FL1 / FL2 direttamente nell’interfaccia utente.
- Dati di diffusione della luce: registrare e visualizzare i dati di diffusione in avanti e laterale per ogni evento rilevato. Recuperare i dati nei file FCS per l’elaborazione successiva.

**Gate poligonale aggiuntivo** Il gate poligonale aggiuntivo, liberamente configurabile, presenta le seguenti caratteristiche:

- È disponibile per le cartucce TCC e ICC.
- Il parametro di risultato è una concentrazione cellulare denominata “Gate+”.
- Il gate può essere regolato in modo analogo ai gate predefiniti TCC o ICC. Consultare la sezione [Modifica dei gate](11-results-and-data-analysis.md#section-11-4).

**Rilevatori di diffusione in avanti e laterale** Il rilevatore di diffusione in avanti (FSC) misura la luce diffusa dai batteri o da altre particelle. Il rilevatore è posizionato a un piccolo angolo rispetto alla direzione del fascio laser e misura quindi i segnali luminosi in direzione “in avanti”. Il rilevatore di diffusione laterale (SSC), invece, è posizionato a 90 gradi rispetto alla direzione del fascio e misura la luce diffusa lateralmente. La combinazione delle informazioni di fluorescenza e diffusione fornisce dati ad alto contenuto informativo, consentendo applicazioni quali l’impronta microbiologica, la profilazione o il rilevamento di anomalie. In particolare, i rilevatori di diffusione consentono un’impronta precisa (BactoScore) per seguire i cambiamenti nella popolazione batterica.

I dati di diffusione sono disponibili nei seguenti modi:

- nei file Flow Cytometry Standard (FCS). Per ulteriori informazioni su questo formato di file, consultare la sezione [Analisi avanzata dei dati](11-results-and-data-analysis.md#section-11-5).
- nell’interfaccia utente di BactoSense come grafico a punti FSC / SSC
- nell’interfaccia web come grafico a punti FSC / SSC
- scaricando i grafici a punti come immagini

**Attivazione del** **pacchetto Scientific**

Attivare il pacchetto quando lo strumento è inattivo, con Modalità PLC e Modalità Demo disattivate.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINE |
| --- | --- | --- |
| 1. | Contattare il proprio rappresentante commerciale bNovate per acquistare una chiave di attivazione. |  |
| 2. | Dopo aver ricevuto la chiave di attivazione, accedere a BactoSense come utente Admin. |  |
| 3. | Nella schermata Home, premere Impostazioni. |  |
| 4. | Premere il pulsante Impostazioni di sistema. | ![BactoSense — Menu Impostazioni: Impostazioni di sistema](/img/gui/it/settings-menu-system-settings.png "width=360") |
| 5. | Premere il pulsante Aggiornamenti. | ![BactoSense — Impostazioni di sistema: Aggiornamenti](/img/gui/it/scientific-package-upgrades-menu.png "width=360") |
| 6. | Premere il pulsante Aggiornamento. | ![BactoSense — Licenza del pacchetto Scientific e pulsante Aggiornamento](/img/gui/it/scientific-package-upgrades.png "width=360") |
| 7. | Inserire la chiave di attivazione e premere OK. | OK diventa disponibile dopo l’inserimento di una chiave.<br />![BactoSense — Inserimento della chiave di attivazione del pacchetto Scientific](/img/gui/it/scientific-package-activation-key.png "width=360") |

Dopo l’attivazione, premere OK nel messaggio di conferma. Se lo strumento si riavvia, attendere il completamento del riavvio, quindi aprire nuovamente Aggiornamenti. Verificare che Pacchetto scientifico indichi Attivato.

## 9.2 Pacchetto Management {#section-9-2}

Il *pacchetto Management* è destinato all’utilizzo dello strumento in ambienti con requisiti di tracciabilità più rigorosi. Include le seguenti funzioni:

- Gestione avanzata degli utenti (controllo degli accessi basato sui ruoli)
- Audit trail
- Pianificazione avanzata

**Gestione avanzata degli utenti** Con la funzione *Gestione avanzata degli utenti*, il proprietario dello strumento può creare diversi utenti e assegnare loro ruoli utente differenti (Basic, Advanced, Admin). Ciò consente di attribuire autorizzazioni diverse ai singoli utenti e di registrarne le attività nell’audit trail.

**Audit trail** L’*audit trail* è un registro di tutte le operazioni o modifiche rilevanti effettuate con lo strumento. Fornisce una cronologia dettagliata delle azioni eseguite dall’utente o dallo strumento stesso. L’*audit trail* è accessibile nei seguenti modi:

- Nell’interfaccia utente dello strumento, aprire Home → Impostazioni → Registri → Audit trail (vedere [Registro di accesso e audit trail](16-warnings-errors-and-troubleshooting.md#section-16-4-4)).
- Esportando tutti i dati su un’unità USB; vedere la sezione [Esportazione dei dati su un dispositivo USB](12-data-access-and-export.md#section-12-1).
- Dall’interfaccia utente web. L’accesso all’interfaccia utente web è descritto nel capitolo [Interfaccia utente web](13-web-user-interface.md).

**Attivazione del** **pacchetto Management**

Attivare il pacchetto quando lo strumento è inattivo, con Modalità PLC e Modalità Demo disattivate.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINE |
| --- | --- | --- |
| 1. | Contattare il proprio rappresentante commerciale bNovate per acquistare una chiave di attivazione. |  |
| 2. | Dopo aver ricevuto la chiave di attivazione, accedere a BactoSense come utente Admin. |  |
| 3. | Nella schermata Home, premere Impostazioni. |  |
| 4. | Premere il pulsante Impostazioni di sistema. |  |
| 5. | Premere il pulsante Aggiornamenti. |  |
| 6. | Premere il pulsante Aggiornamento. |  |
| 7. | Inserire la chiave di attivazione e premere OK. | Nota: la gestione avanzata degli utenti non è ancora attivata. Per attivarla, seguire i passaggi successivi. |
| 8. | Nella schermata Home, premere Impostazioni. |  |
| 9. | Premere il pulsante Impostazioni di sistema. |  |
| 10. | Premere il pulsante Configurazione del sistema. |  |
| 11. | Selezionare la casella Modalità di gestione avanzata degli utenti. |  |
| 12. | Premere Salva, quindi confermare il messaggio con OK. |  |
