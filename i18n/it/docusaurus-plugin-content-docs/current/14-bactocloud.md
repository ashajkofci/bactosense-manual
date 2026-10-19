---
title: "14. BactoCloud"
sidebar_label: "14. BactoCloud"
sidebar_position: 14
slug: /bactocloud
---

BactoCloud è la piattaforma cloud sicura per gli utenti BactoSense, che offre visibilità in tempo reale, accesso remoto e integrazione intelligente dei dati per tutte le operazioni di monitoraggio dell’acqua.

## 14.1 Requisiti informatici {#section-14-1}

BactoSense avvia una connessione Internet in uscita verso BactoCloud. La connessione può utilizzare BactoLink, un punto di accesso 4G/5G o Internet cablato. Più strumenti possono condividere una connessione Internet dietro NAT; non sono necessari VPN né inoltro delle porte in ingresso.

| Requisito | Configurazione |
| --- | --- |
| Indirizzamento di rete | Fornire un indirizzo IP funzionante, una maschera di sottorete, un gateway e un resolver DNS. Sono supportati DHCP e indirizzamento statico. Confermare le impostazioni statiche con l’amministratore di rete. |
| Accesso in uscita | Consentire l’accesso in uscita a `*.bactocloud.com` e `*.bnovate.net` dalla rete dello strumento. |
| Larghezza di banda | Prevedere più di 1 Mbit/s. |
| Consumo di dati | Prevedere circa 0.5–1 GB al mese per ogni strumento che misura ogni ora. Sincronizzazione dello storico, diagnostica e aggiornamenti software generano traffico aggiuntivo. |
| Sincronizzazione dell’ora | Configurare una sorgente oraria approvata, dove richiesto, per poter correlare le marche temporali degli eventi. |
| Proxy del browser | Un proxy utilizzato dagli utenti BactoCloud deve supportare connessioni WebSocket sicure verso BactoCloud. |

Mantenere l’interfaccia web locale dello strumento su una rete di impianto controllata e non esporre i servizi dello strumento alla rete Internet pubblica. I collegamenti PLC, Modbus e I/O esistenti possono rimanere in uso.

Per configurare lo strumento, vedere [Configurazione della rete](08-general-operations-and-configurations.md#section-8-6) e [Impostazione dei server NTP](08-general-operations-and-configurations.md#section-8-7).

## 14.2 Registrazione {#section-14-2}

Visitare [www.bactocloud.com/register](https://www.bactocloud.com/register), inserire i dati richiesti e completare la verifica dell’email. La registrazione crea l’account personale; l’appartenenza a un’organizzazione lo collega a una flotta di strumenti.

Se è stato ricevuto un invito, seguirne il collegamento e accedere o registrarsi con l’esatto indirizzo email invitato. Dopo aver accettato l’invito, selezionare l’organizzazione nell’intestazione.

Per creare un’organizzazione per la propria flotta, aprire il selettore delle organizzazioni nell’intestazione e scegliere **New Organisation**. Inserire il nome, scegliere il fuso orario e le applicazioni, quindi selezionare **Create Organisation**. Selezionare l’organizzazione corretta prima di generare un codice di associazione.

## 14.3 Associazione dello strumento {#section-14-3}
L’associazione collega uno strumento a un’organizzazione BactoCloud. Sono necessari il permesso di associare strumenti all’organizzazione e un account **admin** sullo strumento. Utilizzare lo schermo tattile dello strumento o una [vista remota VNC](12-data-access-and-export.md#section-12-4) approvata dello stesso schermo. Uno strumento può appartenere a una sola organizzazione alla volta.

Prima dell’associazione, verificare il software BactoSense installato: gli strumenti Rev3 richiedono **3.1.0 o versioni successive**, mentre gli strumenti Rev2 richiedono **2.4.0 o versioni successive**. Singole funzioni cloud possono richiedere software più recente o opzioni dello strumento. Se non è possibile installare un aggiornamento localmente, contattare il proprio canale di assistenza prima di procedere.

### 14.3.1 Generazione di un codice di associazione {#section-14-3-1}

1. Accedere a BactoCloud e utilizzare il selettore delle organizzazioni per scegliere quella a cui deve appartenere lo strumento.
2. Aprire il selettore delle organizzazioni nell’intestazione, scegliere **Organisation Settings**, quindi **Instruments** nella barra laterale. Selezionare **Enrol instrument**. L’azione è disponibile anche nella pagina della flotta vuota se non sono ancora associati strumenti.
3. Leggere la spiegazione dell’associazione e il requisito software, quindi selezionare **Generate new code**.
4. Annotare o copiare il codice generato.

![Introduzione all’associazione in BactoCloud con l’azione Generate new code e i requisiti software minimi.](/img/manual/bactocloud/enrolment.png)

La sezione **Enrolment codes** elenca i codici esistenti e le relative date di scadenza. Utilizzare un codice prima della scadenza indicata oppure generarne uno nuovo se è scaduto. Ogni codice appartiene all’organizzazione in cui è stato generato. Se l’azione di associazione non è disponibile, chiedere a un amministratore dell’organizzazione di verificare i propri diritti di accesso.

### 14.3.2 Inserimento del codice sullo strumento {#section-14-3-2}

1. Nella schermata iniziale di BactoSense, selezionare **Impostazioni** nella barra inferiore.

   ![BactoSense — Barra Home: Impostazioni](/img/gui/it/bactocloud-enrolment-home.png)

2. Selezionare **Impostazioni di sistema** nel menu **Impostazioni**.

   ![BactoSense — Menu Impostazioni: Impostazioni di sistema](/img/gui/it/settings-menu-system-settings.png)

3. Selezionare **BactoCloud** per aprire **Impostazioni del cloud**.

   ![BactoSense — Impostazioni di sistema: BactoCloud](/img/gui/it/bactocloud-enrolment-menu.png)

4. Selezionare **Iscriversi**, inserire il codice generato in BactoCloud e confermare l’immissione. Seguire i messaggi sullo schermo, quindi verificare che **Registrati** mostri **Sì** e che **Organizzazione** indichi l’organizzazione desiderata.

   ![BactoSense — Impostazioni di registrazione a BactoCloud](/img/gui/it/bactocloud-enrolment-settings.png)

Se **BactoCloud** non è disponibile, verificare il ruolo utente locale e se è attiva la Modalità Demo o la modalità PLC.

### 14.3.3 Conferma dell’associazione {#section-14-3-3}
In BactoCloud, aprire **Organisation Settings → Instruments** dal selettore delle organizzazioni nell’intestazione e verificare nome, numero di serie e stato di connessione segnalato dallo strumento. Confermare che arrivino gli stati e le misurazioni più recenti. **Last seen at** indica l’ora dell’ultimo stato ricevuto da BactoCloud; non verifica la connessione di rete attuale.

Se lo strumento non compare, verificare di aver generato il codice nell’organizzazione corretta e di aver completato la procedura sullo strumento. Se un codice viene rifiutato o lo strumento appartiene già a un’altra organizzazione, chiedere aiuto a un amministratore o all’assistenza.

Se stati o misurazioni non arrivano più, annotare numero di serie dello strumento, versione software, marca temporale e ultimo caricamento riuscito. Chiedere all’amministratore di rete di verificare DNS e connettività in uscita dalla rete dello strumento usando i [requisiti informatici](#section-14-1).

L’inventario degli strumenti dell’organizzazione mostra anche **Enrolled since**. Gli utenti con il permesso di eliminare strumenti possono selezionare l’azione di riga **Unlink Instrument from organisation**. Prima di scollegare lo strumento, esportare le misurazioni da conservare. La conferma avverte che lo scollegamento interrompe i caricamenti ed elimina le misurazioni esistenti nel cloud. Verificare lo strumento di destinazione, inserirne il numero di serie nella conferma e selezionare **Unlink instrument**.
