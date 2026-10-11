---
title: "8. Operazioni e configurazioni generali"
sidebar_label: "8. Operazioni e configurazioni generali"
slug: /general-operations-and-configurations
sidebar_position: 8
description: "Manuale d’uso BactoSense: Operazioni e configurazioni generali."
---

## 8.1 Accensione e spegnimento {#section-8-1}

Il pulsante di accensione di BactoSense si trova sul lato destro dello strumento.

![Illustrazione del manuale originale, pagina stampata 58](/img/manual/asset-9b1ae5aeca7f.png "width=160")

*Figura 8-1 Pulsante di accensione di BactoSense*

:::warning[Controllare l’alimentazione]

Prima di accendere BactoSense, assicurarsi che lo strumento sia collegato a un’alimentazione stabile conforme ai requisiti descritti nella sezione [Collegamento di BactoSense all’alimentazione](05-installation.md#section-5-3).

:::

**Accensione** Per accendere BactoSense, premere brevemente il pulsante di accensione. Il LED del pulsante rimane acceso e, dopo pochi secondi, sull’interfaccia utente viene visualizzata la schermata di benvenuto.

**Spegnimento** Se è stato effettuato l’accesso e si desidera spegnere BactoSense, toccare il pulsante di disconnessione nell’angolo superiore destro dell’interfaccia e selezionare *Power off*. Per spegnere lo strumento direttamente dalla pagina di accesso, tenere premuto il pulsante di accensione per 10 secondi.

:::warning[Scollegare l’alimentazione in sicurezza]

Per scollegare BactoSense dall’alimentazione, spegnere prima lo strumento. Quindi scollegare l’alimentatore dalla rete elettrica, prima di scollegare il connettore di alimentazione da BactoSense.

:::

## 8.2 Accesso, ruoli utente e autorizzazioni {#section-8-2}

Per utilizzare BactoSense, gli utenti devono effettuare l’accesso. Sono disponibili diversi ruoli utente con autorizzazioni differenti, elencate nella sezione [Ruoli utente e autorizzazioni](08-general-operations-and-configurations.md#section-8-2-7). Tutti gli accessi sono protetti da password.

L’accesso e la disconnessione possono essere effettuati tramite il pulsante nell’angolo superiore destro dell’interfaccia utente. Il ruolo utente attualmente attivo viene visualizzato accanto al pulsante.

### 8.2.1 Accesso {#section-8-2-1}

|  | OPERAZIONE |
| --- | --- |
| 1. | Premere il pulsante di accesso nell’angolo superiore destro dell’interfaccia oppure la barra di accesso in basso se lo strumento è appena stato acceso. |
| 2. | Per la configurazione standard di BactoSense CORE o BactoSense ID: selezionare uno dei profili utente Basic, Advanced o Admin. Per BactoSense CORE o BactoSense ID aggiornato con il pacchetto Management (vedere sezione [Pacchetto Management](09-upgrade-packages.md#section-9-2)) e con la gestione avanzata degli utenti attivata (vedere sezione [Attivazione della gestione avanzata degli utenti](08-general-operations-and-configurations.md#section-8-2-4)), inserire il proprio ID utente. |
| 3. | Inserire la password e premere OK. Se non si conosce la password, rivolgersi all’utente Admin. Su uno strumento nuovo non sono impostate password. In tal caso, seguire la procedura descritta nella sezione [Impostazione e modifica delle password](08-general-operations-and-configurations.md#section-8-2-5). |
| 4. | Dopo l’accesso, viene visualizzata l’interfaccia utente di BactoSense. |
| 5. | Per disconnettersi, seguire la procedura descritta nella sezione [Disconnessione manuale](08-general-operations-and-configurations.md#section-8-2-2). |

### 8.2.2 Disconnessione manuale {#section-8-2-2}

|  | OPERAZIONE |
| --- | --- |
| 1. | Assicurarsi che tutti i processi (ad esempio misurazioni o pulizie) siano terminati. Lo stato inattivo dello strumento è indicato sul lato sinistro della barra superiore dell’interfaccia utente di BactoSense. |
| 2. | Premere il pulsante di disconnessione nell’angolo superiore destro dell’interfaccia utente. |
| 3. | Selezionare Log out Lock screen. |
| 4. | Per accedere nuovamente, seguire la procedura descritta nella sezione [Accesso](08-general-operations-and-configurations.md#section-8-2-1). |

### 8.2.3 Disconnessione automatica {#section-8-2-3}

È possibile configurare una disconnessione automatica dopo un periodo di inattività predefinito.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINE |
| --- | --- | --- |
| 1. | Nella schermata Home, premere Impostazioni per aprire il menu delle impostazioni. |  |
| 2. | Premere il pulsante System settings. |  |
| 3. | Premere il pulsante Users. |  |
| 4. | Premere il pulsante Settings. |  |
| 5. | Configurare il periodo desiderato per la disconnessione automatica. |  |
| 6. | Premere Save. |  |

### 8.2.4 Attivazione della gestione avanzata degli utenti {#section-8-2-4}

Con la funzione *Advanced User Management* , un amministratore dello strumento può creare diversi utenti e assegnare loro ruoli differenti (Basic, Advanced, Admin). Ciò consente di attribuire autorizzazioni diverse ai singoli utenti e di registrarne le attività nella traccia di audit.

La gestione avanzata degli utenti è disponibile per BactoSense SMART e PURE e per BactoSense CORE o BactoSense ID aggiornato con il pacchetto Management (vedere sezione [Pacchetto Management](09-upgrade-packages.md#section-9-2)).

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINE |
| --- | --- | --- |
| 1. | Nella schermata Home, premere Impostazioni per aprire il menu delle impostazioni. |  |
| 2. | Premere il pulsante System settings. |  |
| 3. | Premere il pulsante System configuration. |  |
| 4. | Selezionare la casella Advanced user management mode. |  |
| 5. | Premere Save. |  |

### 8.2.5 Impostazione e modifica delle password {#section-8-2-5}

Ogni ruolo utente è protetto da password.

**Impostazione di una password al primo accesso** Al primo accesso con qualsiasi ruolo utente, fare clic su *OK* quando viene richiesta una password. Questa azione avvia la procedura guidata per configurare la password. L’unica eccezione è la password Service, per la quale viene fornita una password preimpostata.

**Impostazione e modifica delle password** Ogni profilo utente può modificare la propria password. Gli utenti Admin possono modificare le password degli altri profili. La procedura seguente descrive come modificare le password.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Nella schermata Home, premere Impostazioni, quindi Impostazioni di sistema. |  |
| 2. | Premere Users e selezionare il profilo utente da modificare. Dopo aver selezionato una casella, premere Edit. | Gli utenti Admin possono modificare le password degli altri profili utente. |
| 3. | Premere Change PIN, inserire due volte il nuovo PIN e premere Save. |  |

### 8.2.6 Modifica delle impostazioni delle password {#section-8-2-6}

È possibile configurare varie caratteristiche delle password, come scadenza, lunghezza e altre opzioni.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINE |
| --- | --- | --- |
| 1. | Nella schermata Home, premere Impostazioni per aprire il menu delle impostazioni. |  |
| 2. | Premere il pulsante System settings. |  |
| 3. | Premere il pulsante Users. |  |
| 4. | Premere il pulsante Settings. |  |
| 5. | Configurare i requisiti delle password in base alle proprie preferenze. |  |
| 6. | Premere Save. |  |

### 8.2.7 Ruoli utente e autorizzazioni {#section-8-2-7}

*Tabella 8-1 Ruoli utente e autorizzazioni*

| AUTORIZZAZIONE | BASIC | ADVANCED | ADMIN |
| --- | --- | --- | --- |
| Visualizzare l’ultimo risultato | ✓ | ✓ | ✓ |
| Visualizzare tutti i risultati ed esportarli | ✓ | ✓ | ✓ |
| Avviare, arrestare e pianificare le misurazioni | ✓ | ✓ | ✓ |
| Passare dalla modalità online alla modalità Manual e viceversa | ✓ | ✓ | ✓ |
| Visualizzare il registro degli errori e degli avvertimenti | ✓ | ✓ | ✓ |
| Rinominare i risultati | ✓ | ✓ | ✓ |
| Validare il dispositivo | ✓ | ✓ | ✓ |
| Modificare la propria password | ✓ | ✓ | ✓ |
| Visualizzare le informazioni di sistema | ✓ | ✓ | ✓ |
| Visualizzare le impostazioni di rete | ✓ | ✓ | ✓ |
| Visualizzare l’ultima autoverifica | ✓ | ✓ | ✓ |
| Cambiare la cartuccia | ✓ | ✓ | ✓ |
| Cancellare gli errori | ✓ | ✓ | ✓ |
| Visualizzare il registro degli interventi | ✓ | ✓ | ✓ |
| Visualizzare i risultati della validazione | ✓ | ✓ | ✓ |
| Eliminare i risultati |  | ✓ | ✓ |
| Rianalizzare i risultati con altri gate |  | ✓ | ✓ |
| Regolare gli allarmi |  | ✓ | ✓ |
| Regolare i gate |  | ✓ | ✓ |
| Riavviare |  | ✓ | ✓ |
| Eseguire un’autoverifica |  | ✓ | ✓ |
| Eliminare le misurazioni vecchie |  | ✓ | ✓ |
| Esportare tutto |  | ✓ | ✓ |
| Visualizzare le informazioni sugli interventi |  | ✓ | ✓ |
| Esportare la diagnostica |  | ✓ | ✓ |
| Modificare le uscite analogiche e digitali |  |  | ✓ |
| Provare le uscite analogiche e digitali |  |  | ✓ |
| Modificare le password degli altri utenti |  |  | ✓ |
| Creare altri utenti |  |  | ✓ |
| Modificare le impostazioni di autenticazione |  |  | ✓ |

| AUTORIZZAZIONE | BASIC | ADVANCED | ADMIN |
| --- | --- | --- | --- |
| Impostare il nome del dispositivo |  |  | ✓ |
| Impostare data e ora |  |  | ✓ |
| Modificare le impostazioni di rete |  |  | ✓ |
| Modificare le impostazioni dei servizi |  |  | ✓ |
| Attivare Modbus con una chiave o disattivarlo |  |  | ✓ |
| Cambiare la lingua |  |  | ✓ |
| Passare alla modalità demo |  |  | ✓ |
| Ripristinare le impostazioni |  |  | ✓ |
| Ripristino completo delle impostazioni di fabbrica (tranne il registro degli interventi) |  |  | ✓ |
| Importare le impostazioni |  |  | ✓ |
| Modificare le impostazioni di accensione automatica |  |  | ✓ |
| Attivare pacchetti di aggiornamento con un codice |  |  | ✓ |

## 8.3 Configurazioni di base {#section-8-3}

### 8.3.1 Lingua dell’interfaccia utente {#section-8-3-1}

La lingua può essere modificata solo dagli utenti Admin.

|  | OPERAZIONE |
| --- | --- |
| 1. | Nella schermata Home, premere Impostazioni per aprire il menu delle impostazioni. |
| 2. | Premere System settings, quindi Language. |
| 3. | Scegliere la lingua e premere OK. |
| 4. | Viene visualizzato un messaggio che richiede di ricaricare l’interfaccia utente. Confermare il messaggio. |

### 8.3.2 Data e ora {#section-8-3-2}

La data e l’ora possono essere modificate solo dagli utenti Admin.

:::info[Sincronizzazione automatica dell’ora]

Se è abilitata la sincronizzazione dell’ora, tramite server NTP o Modbus TCP, le impostazioni manuali di data e ora vengono sovrascritte alla sincronizzazione successiva. Le impostazioni si trovano in **System settings** &gt; **Date &amp; Time** &gt; **Time synchronization settings**. Per configurare il server NTP, consultare la sezione [Impostazione dei server NTP](08-general-operations-and-configurations.md#section-8-7).

:::

|  | OPERAZIONE |
| --- | --- |
| 1. | Nella schermata Home, premere Impostazioni per aprire il menu delle impostazioni. |
| 2. | Premere il pulsante System settings. |
| 3. | Premere il pulsante Date &amp; Time. |
| 4. | Inserire la data e l’ora. |
| 5. | Selezionare Time zone. |
| 6. | Premere il pulsante Set. |

### 8.3.3 Nome del dispositivo {#section-8-3-3}

Il nome del dispositivo può essere modificato solo dagli utenti Admin.

|  | OPERAZIONE |
| --- | --- |
| 1. | Nella schermata Home, premere Impostazioni per aprire il menu delle impostazioni. |
| 2. | Premere il pulsante System settings. |
| 3. | Premere il pulsante System configuration. |
| 4. | Premere il pulsante Device name. |
| 5. | Inserire il nome desiderato per il dispositivo nel campo di immissione. |
| 6. | Premere il pulsante Save. |

### 8.3.4 Accensione automatica {#section-8-3-4}

BactoSense dispone di una funzione integrata di riavvio automatico per ripristinare il funzionamento dopo interruzioni temporanee dell’alimentazione. A seconda della configurazione, lo strumento può semplicemente riavviarsi oppure riprendere le operazioni eseguendo un processo di autopulizia e riavviando una serie in modalità online.

|  | OPERAZIONE |
| --- | --- |
| 1. | Come utente Admin, premere Impostazioni nella schermata Home per aprire il menu delle impostazioni. |
| 2. | Premere il pulsante System settings. |
| 3. | Premere il pulsante System configuration. |
| 4. | Selezionare le preferenze di accensione automatica. Nota: l’autopulizia viene eseguita solo se l’alimentazione è stata interrotta durante una misurazione. |
| 5. | Premere il pulsante Save. |

### 8.3.5 Notifiche sonore {#section-8-3-5}

È possibile attivare notifiche sonore per indicare la fine di una misurazione manuale o di un processo di manutenzione, un allarme o un errore. La notifica consiste in uno o più segnali acustici emessi dallo strumento.

|  | OPERAZIONE |
| --- | --- |
| 1. | Come utente Admin, premere Impostazioni nella schermata Home per aprire il menu delle impostazioni. |
| 2. | Premere il pulsante System settings. |
| 3. | Premere il pulsante System configuration. |
| 4. | Attivare l’opzione Sound notifications. |
| 5. | Premere il pulsante Save. |

## 8.4 Importazione / esportazione delle impostazioni {#section-8-4}

Le impostazioni vengono esportate su un’unità USB come descritto nella sezione [Esportazione di impostazioni, diagnostica o tutti i dati su USB](12-data-access-and-export.md#section-12-1-1). Vengono raccolte in un file con data e ora il cui nome termina con ***.bnv**. Per importare le impostazioni in un nuovo strumento o ripristinare una copia di sicurezza, è necessario copiare il file ***.bnv** nella cartella principale dell’unità USB oppure nella cartella in cui è stato esportato. Se su un’unità USB sono presenti più copie delle impostazioni, il sistema utilizza quella più recente.

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINE |
| --- | --- | --- |
| 1. | Nella schermata Home, premere Impostazioni per aprire il menu delle impostazioni. | ![BactoSense — Pulsante della schermata iniziale](/img/gui/icons/home-button.png "width=48 class=manual-icon") |
| 2. | Premere il pulsante Maintenance. | ![BactoSense — Menu di manutenzione](/img/gui/icons/maintenance-button.png "width=48 class=manual-icon") |
| 3. | Premere il pulsante Special export import. | ![BactoSense — Opzioni speciali di esportazione e importazione](/img/gui/icons/special-import-export-button.png "width=48 class=manual-icon") |
| 4. | Collegare un’unità USB. Se necessario, premere Refresh USB list finché l’unità non viene rilevata. | Assicurarsi che il file *.bnv si trovi nella cartella principale dell’unità USB. L’unità deve essere formattata in FAT32, lo standard comunemente utilizzato. |
| 5. | Premere Import settings. | ![BactoSense — Importazione ed esportazione USB](/img/gui/it/usb-import-and-export.png "width=263") |
| 6. | Selezionare le impostazioni da importare. Le impostazioni di misurazione includono gruppi di gate, impostazioni I/O, allarmi e impostazioni di data e ora. Le impostazioni di rete includono gli indirizzi IP, DNS e NTP. | ![BactoSense — Opzioni di importazione delle impostazioni](/img/gui/it/import-settings-options.png "width=269") |
| 7. | Premere Import settings e attendere il riavvio del dispositivo. |  |

## 8.5 Configurazione degli allarmi {#section-8-5}

Agli allarmi si applicano le seguenti regole:

- Solo gli utenti **Advanced** e **Admin** possono modificare le impostazioni degli allarmi.
- Gli allarmi sono attivi solo in **modalità online**.

BactoSense registra gli allarmi nei seguenti modi:

- Nell’interfaccia grafica viene visualizzata una finestra popup.
- Se l’ultima misurazione ha superato la soglia di allarme, nella barra superiore compare l’icona di una campana. L’allarme è mostrato nel riepilogo della misurazione quando si visualizza un risultato.
- È possibile inviare un segnale a un PLC tramite le uscite digitali (configurabile).

![BactoSense — Configurazione degli allarmi](/img/gui/it/alarm-configuration.png "width=517")

*Figura 8-2 Configurazione degli allarmi nell’interfaccia grafica di BactoSense.*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Selezionare, abilitare o disabilitare gli allarmi. È possibile configurare fino a 9 allarmi. | 2 | Nome dell’allarme attualmente selezionato. |
| 3 | Sorgente dell’allarme: risultato di misurazione da valutare. Vedere figura 8-3. | 4 | Condizione: attivare l’allarme quando il parametro misurato è maggiore (&gt;) o minore (&lt;) della soglia. |
| 5 | Soglia | 6 | Display: se selezionato, sul grafico della modalità online viene visualizzata una linea nel colore scelto. |

![BactoSense — Sorgente dell’allarme della cartuccia](/img/gui/it/cartridge-alarm-source.png "width=290")

*Figura 8-3 Sorgenti degli allarmi di BactoSense. Per la sorgente selezionata vengono impostate una condizione e una soglia.*  *Nell’esempio precedente, l’allarme viene attivato a un determinato livello di riempimento della cartuccia.*

La procedura seguente descrive come configurare l’allarme:

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Nella schermata Home, premere Impostazioni per aprire il menu delle impostazioni. |  |
| 2. | Premere il pulsante Online mode settings. |  |
| 3. | Premere Alarms. |  |
| 4. | Attivare, selezionare e configurare gli allarmi (secondo le figure 8-2 e 8-3). | Per impostazione predefinita, nessun allarme è attivo. |
| 5. | Premere Save per salvare la configurazione degli allarmi. |  |

## 8.6 Configurazione della rete {#section-8-6}

:::info[Impostazioni di rete]

Chiedere all’amministratore di rete le impostazioni corrette.

:::

<table>

<tbody>

<tr>

<th>

</th>

<th>

OPERAZIONE

</th>

<th>

INFORMAZIONI AGGIUNTIVE / IMMAGINE

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

![BactoSense — Pulsante della schermata iniziale](/img/gui/icons/home-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Premere il pulsante Impostazioni di sistema.

</td>

<td>

![BactoSense — Impostazioni di sistema](/img/gui/icons/system-settings-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Premere il pulsante Network.

</td>

<td>

![BactoSense — Impostazioni di rete](/img/gui/icons/network-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td rowSpan="2">

4\.

</td>

<td>

A: per un IP dinamico, selezionare la casella DHCP (1). Nota: questa è la configurazione preferibile nella maggior parte dei casi in cui BactoSense è collegato a un router o switch.

</td>

<td rowSpan="2">

![BactoSense — Configurazione della rete](/img/gui/it/network-configuration.png "width=260")

</td>

</tr>

<tr>

<td>

B: per un IP statico, deselezionare la casella DHCP (1) e inserire la configurazione di rete desiderata (2). Nota: questa è la configurazione preferibile quando BactoSense è collegato direttamente a un portatile tramite Ethernet. Assicurarsi di adattare anche la configurazione di rete del portatile.

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Premere il pulsante Save.

</td>

<td>

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Premere il pulsante Reboot now.

</td>

<td>

</td>

</tr>

</tbody>

</table>

## 8.7 Impostazione dei server NTP {#section-8-7}

Network Time Protocol (NTP) è un protocollo di rete utilizzato per sincronizzare l’ora dei computer su una rete. Per impostazione predefinita, è configurata la sincronizzazione con i server della Network Time Foundation (ntp.org). È possibile impostare server NTP personalizzati nel menu *Date and Time* .

<table>

<tbody>

<tr>

<th>

</th>

<th>

OPERAZIONE

</th>

<th>

INFORMAZIONI AGGIUNTIVE / IMMAGINE

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

![BactoSense — Pulsante della schermata iniziale](/img/gui/icons/home-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Premere il pulsante Impostazioni di sistema.

</td>

<td>

![BactoSense — Impostazioni di sistema](/img/gui/icons/system-settings-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Premere il pulsante Date &amp; Time.

</td>

<td>

![BactoSense — Impostazioni di data e ora](/img/gui/icons/date-time-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Premere il pulsante Time synchronization settings.

</td>

<td>

![BactoSense — Data e ora](/img/gui/it/date-and-time-settings.png "width=261")

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Selezionare la sorgente di sincronizzazione desiderata in Sync Source.

</td>

<td>

:::info[Informazioni aggiuntive]

La sincronizzazione dell’ora può essere effettuata tramite server NTP o Modbus TCP. Ulteriori informazioni su Modbus TCP sono riportate nella sezione [Modbus TCP](../field-bus-interface/#section-7-1).

:::

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Aggiornare i server NTP.

</td>

<td>

![BactoSense — Sincronizzazione dell’ora](/img/gui/it/time-synchronization-settings.png "width=261")

</td>

</tr>

<tr>

<td>

7

</td>

<td>

Premere il pulsante OK.

</td>

<td>

:::info[Informazioni aggiuntive]

Modificando l’indirizzo di un server e premendo OK, viene eseguito automaticamente un ping del server e vengono aggiornate la data e l’ora.

:::

</td>

</tr>

</tbody>

</table>

## 8.8 Interfaccia utente di BactoSense {#section-8-8}

### 8.8.1 Struttura generale e menu Home {#section-8-8-1}

![BactoSense — Panoramica della schermata iniziale](/img/gui/it/home-overview.png "width=587")

*Figura 8-4 Schermata Home dell’interfaccia utente di BactoSense.*

La schermata Home mostra il risultato della misurazione più recente. Premere Impostazioni per aprire il menu delle impostazioni.

L’interfaccia utente di BactoSense è suddivisa in 3 sezioni principali:

|  |  |
| --- | --- |
| A | Barra superiore |
| B | Area dei contenuti |
| C | Barra delle azioni |

Gli elementi principali dell’interfaccia utente sono:

<table>

<tbody>

<tr>

<td>

1

</td>

<td>

Pulsante Home o Indietro. Consente di navigare nei menu.

</td>

<td>

2

</td>

<td>

Modalità di funzionamento (manuale o online) Stato dello strumento (processo attualmente attivo)

</td>

</tr>

<tr>

<td>

3

</td>

<td>

Vista corrente

</td>

<td>

4

</td>

<td>

Icone di stato della barra superiore, vedere [Icone di stato della barra superiore](../general-operations-and-configurations/#section-8-8-2).

</td>

</tr>

<tr>

<td>

5

</td>

<td>

Ruolo utente Ora corrente

</td>

<td>

6

</td>

<td>

Disconnessione o spegnimento

</td>

</tr>

<tr>

<td>

7

</td>

<td>

Risultati: visualizzare i risultati delle misurazioni della modalità selezionata.

</td>

<td>

8

</td>

<td>

Modalità: scegliere la modalità online per misurazioni continue con il dispositivo di campionamento in linea, oppure la modalità manuale per campioni prelevati con il dispositivo di campionamento manuale.

</td>

</tr>

<tr>

<td>

9

</td>

<td>

Misura: aprire l’assistente di misurazione e scegliere un protocollo di analisi (modalità manuale).

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

In base al ruolo utente, alcune opzioni possono non essere visibili o essere disabilitate.

### 8.8.2 Icone di stato della barra superiore {#section-8-8-2}

Le icone della barra superiore vengono visualizzate nella parte superiore del display. Indicano lo stato dello strumento.

*Tabella 8-2 Icone della barra superiore*

| ICONA | DESCRIZIONE | ICONA | DESCRIZIONE |
| --- | --- | --- | --- |
| ![BactoSense — Processo in corso](/img/gui/icons/process-running-status.png "width=32 class=manual-icon") | Processo in corso | ![BactoSense — Modalità demo attiva](/img/gui/icons/demo-mode-status.png "width=32 class=manual-icon") | Modalità demo attivata |
| ![BactoSense — Cartuccia quasi vuota](/img/gui/icons/cartridge-almost-empty-status.png "width=32 class=manual-icon") | Cartuccia quasi vuota | ![BactoSense — Manutenzione necessaria](/img/gui/icons/service-required-status.png "width=32 class=manual-icon") | Manutenzione necessaria (vedere capitolo [Manutenzione](15-maintenance.md)) |
| ![BactoSense — Cartuccia prossima alla scadenza](/img/gui/icons/cartridge-almost-expired-status.png "width=32 class=manual-icon") | Cartuccia prossima alla scadenza | ![BactoSense — Livello di riempimento della cartuccia](/img/gui/icons/cartridge-level-status.png "width=32 class=manual-icon") | Indicazione del livello della cartuccia |
| ![BactoSense — Cartuccia non pronta](/img/gui/icons/cartridge-not-ready-status.png "width=32 class=manual-icon") | Cartuccia non inizializzata correttamente o assente | ![BactoSense — Cartuccia vuota](/img/gui/icons/cartridge-empty-status.png "width=32 class=manual-icon") | Cartuccia vuota |
| ![BactoSense — Errore critico](/img/gui/icons/critical-error-status.png "width=32 class=manual-icon") | Errore critico (sezione [Errori critici](16-warnings-errors-and-troubleshooting.md#section-16-3)) | ![BactoSense — Cartuccia scaduta](/img/gui/icons/cartridge-expired-status.png "width=32 class=manual-icon") | Cartuccia scaduta |
| ![BactoSense — Allarme attivo](/img/gui/icons/alarm-status.png "width=32 class=manual-icon") | Allarme nell’ultima misurazione (solo modalità online, vedere la sezione [Configurazione degli allarmi](08-general-operations-and-configurations.md#section-8-5)) | ![BactoSense — Errore non critico](/img/gui/icons/noncritical-error-status.png "width=32 class=manual-icon") | Errore non critico (sezione [Errori non critici](16-warnings-errors-and-troubleshooting.md#section-16-2)) |

## 8.9 Gestione delle cartucce {#section-8-9}

Le cartucce BactoSense contengono i reagenti necessari per le misurazioni e per mantenere pulito lo strumento. I tipi di cartuccia disponibili sono TCC (conteggio cellulare totale), ICC (conteggio delle cellule integre), EBC (conteggio delle cellule di E. coli), ACC (conteggio delle cellule attive), CBC (conteggio delle cellule coliformi) e NBC (conteggio delle cellule di Enterococcus). Le sezioni seguenti spiegano come manipolare le cartucce. La conservazione, il trasporto e il riempimento delle cartucce sono descritti nel capitolo [Conservazione, trasporto e smaltimento](17-storage-transport-and-disposal.md).

### 8.9.1 Istruzioni generali per la manipolazione delle cartucce {#section-8-9-1}

Durante la manipolazione della cartuccia devono essere rispettate le seguenti istruzioni:

*Tabella 8-3 Istruzioni per la manipolazione delle cartucce*

|  |  |  |  |
| --- | --- | --- | --- |
| ![Seguire le procedure descritte in questo manuale.](/img/manual/cell-28af480709ce.png "width=31 class=cartridge-handling-icon-31") | Seguire le procedure descritte in questo manuale. | ![Illustrazione della procedura, pagina stampata 73](/img/manual/asset-32c675a70f3d.png "width=24 class=cartridge-handling-icon-24") | Conservare e spedire tra 15 °C – 25 °C (59 °F – 77 °F). La temperatura ottimale è 15 °C (59 °F). |
| ![Indossare guanti in nitrile quando si manipola la cartuccia.](/img/manual/cell-27e561e22ac1.png "width=31 class=cartridge-handling-icon-31") | Indossare guanti in nitrile quando si manipola la cartuccia. | ![Illustrazione della procedura, pagina stampata 73](/img/manual/asset-65d703b8ec50.png "width=24 class=cartridge-handling-icon-24") | Conservare e spedire a un’umidità relativa compresa tra 20 % e 60 %. |
| ![Indossare occhiali di sicurezza quando si manipola la cartuccia.](/img/manual/cell-d6353e538e2e.png "width=31 class=cartridge-handling-icon-31") | Indossare occhiali di sicurezza quando si manipola la cartuccia. | ![La cartuccia è destinata a essere riempita nuovamente.](/img/manual/cell-a80baea9abca.png "width=29 class=cartridge-handling-icon-29") | La cartuccia è destinata a essere riempita nuovamente. |
| ![Spedire, installare e conservare nell’orientamento indicato.](/img/manual/cell-7ac996bd1fed.png "width=31 class=cartridge-handling-icon-31") | Spedire, installare e conservare nell’orientamento indicato. | ![Non gettare la cartuccia nei rifiuti.](/img/manual/cell-bc083b74fc3c.png "width=29 class=cartridge-handling-icon-29") | Non gettare la cartuccia nei rifiuti. |

### 8.9.2 Controllo del livello di riempimento e della data di scadenza di una cartuccia {#section-8-9-2}

I livelli di riempimento e la data di scadenza della cartuccia possono essere consultati da diverse fonti.

- L’icona della cartuccia nella barra superiore dell’interfaccia indica costantemente il livello approssimativo di riempimento. Se la cartuccia è prossima alla scadenza, l’icona lo segnala. La spiegazione delle diverse icone è riportata nella sezione [Icone di stato della barra superiore](08-general-operations-and-configurations.md#section-8-8-2).
- Per ulteriori informazioni, premere *Impostazioni* nella *schermata Home*, quindi *Informazioni sul sistema*. In *Cartridge capacity remaining* è indicato il riempimento residuo della cartuccia (in percentuale), mentre in *Cartridge expiration date* è indicata la data di scadenza della cartuccia. Le stesse informazioni possono essere consultate anche tramite l’interfaccia web (vedere capitolo [Interfaccia utente web](13-web-user-interface.md)).

### 8.9.3 Panoramica della cartuccia {#section-8-9-3}

La cartuccia BactoSense è installata in un vano dedicato dello strumento, chiuso da uno sportello. Lo sportello deve essere aperto solo per rimuovere e installare le cartucce.

![Illustrazione del manuale originale, pagina stampata 74](/img/manual/asset-f8b0a7f1f4e5.png "width=381")

*Figura 8-5 Il vano cartuccia di BactoSense si apre rimuovendo due dadi esagonali da 7 mm*  *con la chiave a bussola fornita.*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Dadi esagonali da 7 mm per fissare lo sportello del vano cartuccia | 2 | Sportello del vano cartuccia |

:::warning[Utilizzare l’utensile corretto per lo sportello]

Aprire e chiudere lo sportello del vano cartuccia solo con l’apposita chiave a bussola da 7 mm.

:::

Dopo aver aperto lo sportello del vano cartuccia, l’utilizzatore può accedere alla cartuccia e ai connettori che la collegano a BactoSense.

![Illustrazione del manuale originale, pagina stampata 75](/img/manual/asset-8e1d2269e91e.png "width=659")

*Figura 8-6 Panoramica di una cartuccia installata. La cartuccia è bloccata da una*  *leva di fissaggio superiore (4) ed è collegata allo strumento tramite più connettori fluidici (5*  *- 8) e un connettore elettronico (9). Quando non è inserita alcuna cartuccia, i connettori fluidici ed elettronici*  *possono essere fissati al supporto rimovibile per connettori (10).*

<table>

<tbody>

<tr>

<td>

1

</td>

<td>

Strumento BactoSense

</td>

<td>

2

</td>

<td>

Cartuccia

</td>

</tr>

<tr>

<td>

3

</td>

<td>

Maniglia della cartuccia

</td>

<td>

4

</td>

<td>

Leva di fissaggio della cartuccia

</td>

</tr>

<tr>

<td>

5

</td>

<td>

Connettore del colorante (verde)

</td>

<td>

6

</td>

<td>

Connettore della candeggina (rosso)

</td>

</tr>

<tr>

<td>

7

</td>

<td>

Connettore dei rifiuti liquidi (nero o beige)

</td>

<td>

8

</td>

<td>

Connettore del liquido di risciacquo (blu)

</td>

</tr>

<tr>

<td>

9

</td>

<td>

Connettore elettronico

</td>

<td>

10

</td>

<td>

Supporto rimovibile per connettori

</td>

</tr>

<tr>

<td>

11

</td>

<td>

Sportello del vano cartuccia

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

:::warning[Proteggere il connettore inutilizzato]

BactoSense dispone di cinque connettori fluidici. A seconda del tipo di cartuccia, ne servono quattro o tutti e cinque. Per le cartucce TCC o ICC, assicurarsi che il quinto connettore inutilizzato sia sempre montato sul supporto per evitare contaminazioni.

:::

### 8.9.4 Sostituzione delle cartucce {#section-8-9-4}

La procedura seguente descrive la sostituzione delle cartucce. Utilizzarla per rimuovere una cartuccia e installarne subito un’altra. Per rimuovere soltanto una cartuccia senza installarne un’altra, seguire le istruzioni della sezione [Rimozione di una cartuccia](08-general-operations-and-configurations.md#section-8-9-5). La sostituzione della cartuccia dura circa 35 min.

:::warning[Seguire la procedura guidata della cartuccia]

Seguire rigorosamente la procedura guidata sullo schermo. **Non rimuovere né installare cartucce senza seguire questa procedura.**

:::

<table>

<tbody>

<tr>

<th>

</th>

<th>

OPERAZIONE

</th>

<th>

INFORMAZIONI AGGIUNTIVE / IMMAGINE

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

Preparare la cartuccia di ricambio e portarla a temperatura ambiente.

</td>

<td>

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Nella schermata Home, premere Impostazioni per aprire il menu delle impostazioni.

</td>

<td>

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Premere il pulsante Maintenance.

</td>

<td>

Gli utenti Basic saltano questo passaggio.

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Premere il pulsante Cartridge change.

</td>

<td>

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Selezionare l’opzione Change cartridge.

</td>

<td>

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

:::warning[Seguire la procedura guidata della cartuccia]

Confermare che si seguiranno le istruzioni della procedura guidata sullo schermo. Aprire lo sportello del vano cartuccia solo quando richiesto. Rispettare le istruzioni generali di manipolazione della cartuccia nella sezione [Istruzioni generali per la manipolazione delle cartucce](../general-operations-and-configurations/#section-8-9-1). Indossare guanti in nitrile e occhiali di sicurezza. Sigillare saldamente i connettori fluidici della vecchia cartuccia con i tappi collegati prima di rimuoverla. Al termine, assicurarsi che lo sportello sia ben chiuso e fissato.

:::

</td>

<td>

:::warning[Salto della procedura guidata della cartuccia]

Solo gli utenti molto esperti che padroneggiano le operazioni sicure sulle cartucce possono saltare le istruzioni sullo schermo. Per le cartucce TCC o ICC, assicurarsi che il quinto connettore inutilizzato sia sempre montato sul supporto per evitare contaminazioni.

:::

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

Gestione della cartuccia rimossa • Per conservare la cartuccia rimossa, consultare le istruzioni della sezione [Conservazione della cartuccia](../storage-transport-and-disposal/#section-17-1-3). • Per far riempire nuovamente la cartuccia rimossa, consultare le istruzioni della sezione [Restituzione di una cartuccia per la ricarica](../storage-transport-and-disposal/#section-17-3-2).

</td>

<td>

</td>

</tr>

</tbody>

</table>

### 8.9.5 Rimozione di una cartuccia {#section-8-9-5}

Questa procedura serve a rimuovere una cartuccia senza installarne immediatamente un’altra. Per sostituire una cartuccia, seguire la procedura della sezione [Sostituzione delle cartucce](08-general-operations-and-configurations.md#section-8-9-4). La rimozione della cartuccia dura circa 5 min.

:::warning[Seguire la procedura guidata della cartuccia]

Seguire rigorosamente la procedura guidata sullo schermo. **Non rimuovere né installare cartucce senza seguire questa procedura.**

:::

<table>

<tbody>

<tr>

<th>

</th>

<th>

OPERAZIONE

</th>

<th>

INFORMAZIONI AGGIUNTIVE / IMMAGINE

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

Premere il pulsante Maintenance.

</td>

<td>

Gli utenti Basic saltano questo passaggio.

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Premere il pulsante Cartridge change.

</td>

<td>

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Selezionare l’opzione Remove cartridge.

</td>

<td>

t

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

:::warning[Seguire la procedura guidata della cartuccia]

Confermare che si seguiranno le istruzioni della procedura guidata sullo schermo. Aprire lo sportello del vano cartuccia solo quando richiesto. Rispettare le istruzioni generali di manipolazione della cartuccia nella sezione [Istruzioni generali per la manipolazione delle cartucce](../general-operations-and-configurations/#section-8-9-1). Indossare guanti in nitrile e occhiali di sicurezza. Sigillare saldamente i connettori fluidici della vecchia cartuccia con i tappi collegati prima di rimuoverla. Al termine, assicurarsi che lo sportello sia ben chiuso e fissato.

:::

</td>

<td>

:::warning[Salto della procedura guidata della cartuccia]

Solo gli utenti molto esperti che padroneggiano le operazioni sicure sulle cartucce possono saltare le istruzioni sullo schermo.

:::

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Gestione della cartuccia rimossa • Per conservare la cartuccia rimossa, consultare le istruzioni della sezione [Conservazione della cartuccia](../storage-transport-and-disposal/#section-17-1-3). • Per far riempire nuovamente la cartuccia rimossa, consultare le istruzioni della sezione [Restituzione di una cartuccia per la ricarica](../storage-transport-and-disposal/#section-17-3-2).

</td>

<td>

La barra superiore dell’interfaccia indica che non è collegata alcuna cartuccia. Il pulsante Maintenance nel menu Home viene ora visualizzato in arancione. ![BactoSense — Cartuccia non pronta](/img/gui/icons/cartridge-not-ready-status.png "width=30 class=manual-icon")

</td>

</tr>

</tbody>

</table>

### 8.9.6 Installazione di una cartuccia {#section-8-9-6}

Questa procedura serve a installare una cartuccia quando non ne è presente un’altra in BactoSense. Se una cartuccia è già installata e si desidera sostituirla, seguire la procedura della sezione [Sostituzione delle cartucce](08-general-operations-and-configurations.md#section-8-9-4). L’installazione della cartuccia dura circa 30 min.

:::warning[Seguire la procedura guidata della cartuccia]

Seguire rigorosamente la procedura guidata sullo schermo. **Non rimuovere né installare cartucce senza seguire questa procedura.**

:::

<table>

<tbody>

<tr>

<th>

</th>

<th>

OPERAZIONE

</th>

<th>

INFORMAZIONI AGGIUNTIVE / IMMAGINE

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

Preparare la nuova cartuccia e portarla a temperatura ambiente.

</td>

<td>

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Nella schermata Home, premere Impostazioni per aprire il menu delle impostazioni.

</td>

<td>

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Premere il pulsante Maintenance.

</td>

<td>

Il pulsante Maintenance è evidenziato in arancione quando non è installata alcuna cartuccia. Gli utenti Basic saltano questo passaggio.

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Premere il pulsante Cartridge change.

</td>

<td>

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Selezionare l’opzione Install cartridge.

</td>

<td>

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

:::warning[Seguire la procedura guidata della cartuccia]

Confermare che si seguiranno le istruzioni della procedura guidata sullo schermo. Aprire lo sportello del vano cartuccia solo quando richiesto. Rispettare le istruzioni generali di manipolazione nella sezione [Istruzioni generali per la manipolazione delle cartucce](../general-operations-and-configurations/#section-8-9-1). Indossare guanti in nitrile e occhiali di sicurezza. Al termine, assicurarsi che lo sportello del vano cartuccia sia ben chiuso e fissato.

:::

</td>

<td>

:::warning[Salto della procedura guidata della cartuccia]

Solo gli utenti molto esperti che padroneggiano le operazioni sicure sulle cartucce possono saltare le istruzioni sullo schermo. Per le cartucce TCC o ICC, assicurarsi che il quinto connettore inutilizzato sia sempre montato sul supporto per evitare contaminazioni.

:::

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

Dopo aver completato tutti i passaggi della procedura guidata sullo schermo, la nuova cartuccia è inizializzata correttamente.

</td>

<td>

Lo stato della cartuccia è indicato dal relativo simbolo nella barra superiore dell’interfaccia, vedere [Icone di stato della barra superiore](../general-operations-and-configurations/#section-8-8-2).

</td>

</tr>

</tbody>

</table>

## 8.10 Sostituzione dei dispositivi di campionamento {#section-8-10}

BactoSense può essere utilizzato con il dispositivo di campionamento manuale o in linea. La procedura seguente descrive la loro sostituzione. Le informazioni sulla conservazione dei dispositivi di campionamento sono riportate nella sezione [Conservazione dei dispositivi di campionamento](17-storage-transport-and-disposal.md#section-17-1-2).

|  | OPERAZIONE | INFORMAZIONI AGGIUNTIVE / IMMAGINI |
| --- | --- | --- |
| 1. | Rimuovere il dispositivo montato secondo le istruzioni della sezione [Rimozione del dispositivo di campionamento in linea](08-general-operations-and-configurations.md#section-8-10-1) (dispositivo in linea) o [Rimozione del dispositivo di campionamento manuale](08-general-operations-and-configurations.md#section-8-10-2) (dispositivo manuale). |  |
| 2. | Installare il nuovo dispositivo secondo le istruzioni della sezione [Installazione del dispositivo di campionamento in linea](05-installation.md#section-5-5) (dispositivo in linea) o [Installazione del dispositivo di campionamento manuale](05-installation.md#section-5-4) (dispositivo manuale). |  |

### 8.10.1 Rimozione del dispositivo di campionamento in linea {#section-8-10-1}

Per passare al dispositivo di campionamento manuale, è necessario rimuovere quello in linea. Seguire la procedura seguente per rimuoverlo in sicurezza e prepararlo alla conservazione.

![Indossare guanti protettivi](/img/manual/icon-gloves.png "width=32")

Evitare la contaminazione dell’attrezzatura. Indossare guanti in nitrile quando si manipolano campioni, dispositivi di campionamento e qualsiasi componente che entri in contatto con essi.

|  | OPERAZIONE |
| --- | --- |
| 1. | Terminare qualsiasi serie di misurazioni in corso come descritto nella sezione [Termine delle misurazioni automatiche in linea](10-measurements.md#section-10-2-2). |
| 2. | Arrestare il flusso d’acqua attraverso i tubi e il dispositivo di campionamento. |
| 3. | Svitare con cautela la ghiera zigrinata di fissaggio fino a poter rimuovere il dispositivo di campionamento. |
| 4. | Rimuovere il dispositivo di campionamento in linea. Assicurarsi che il tappo di tenuta bianco sia ancora saldamente inserito nel connettore del dispositivo. In caso contrario, potrebbe essere rimasto nel connettore di campionamento di BactoSense. In tal caso, rimuoverlo con cautela con una pinzetta e reinserirlo nel dispositivo di campionamento. |
| 5. | Scollegare e svuotare i tubi di ingresso e uscita dalla sorgente d’acqua e dal corpo del dispositivo di campionamento. |
| 6. | Controllare che i tubi di ingresso e uscita non siano contaminati o danneggiati. Riutilizzare solo tubi puliti e integri. |
| 7. | Per conservare il dispositivo di campionamento, riporre separatamente il dispositivo e i tubi in sacchetti di plastica puliti e asciutti e seguire le istruzioni della sezione [Conservazione dei dispositivi di campionamento](17-storage-transport-and-disposal.md#section-17-1-2). |
| 8. | Per montare ora il dispositivo di campionamento manuale, vedere sezione [Installazione del dispositivo di campionamento manuale](05-installation.md#section-5-4). |

### 8.10.2 Rimozione del dispositivo di campionamento manuale {#section-8-10-2}

Per passare al dispositivo di campionamento in linea, è necessario rimuovere quello manuale. Seguire la procedura seguente per rimuoverlo in sicurezza e prepararlo alla conservazione.

![Indossare guanti protettivi](/img/manual/icon-gloves.png "width=32")

Evitare la contaminazione dell’attrezzatura. Indossare guanti in nitrile quando si manipolano campioni, dispositivi di campionamento e qualsiasi componente che entri in contatto con essi.

|  | OPERAZIONE |
| --- | --- |
| 1. | Pulire il dispositivo di campionamento manuale: se è disponibile una Washstation, seguire la procedura della sezione [Pulire il dispositivo di campionamento manuale con Washstation](15-maintenance.md#section-15-2-2); altrimenti quella della sezione [Pulire il dispositivo di campionamento manuale con pulizia di base](15-maintenance.md#section-15-2-3). |
| 2. | Al termine, collegare al dispositivo di campionamento una provetta pulita e vuota da 5 mL con tappo a vite o la Washstation. |
| 3. | Svitare con cautela la ghiera zigrinata di fissaggio nella parte superiore fino a poter rimuovere il dispositivo di campionamento. |
| 4. | Rimuovere il dispositivo di campionamento manuale. Assicurarsi che il tappo di tenuta bianco sia ancora saldamente inserito nel connettore del dispositivo. In caso contrario, potrebbe essere rimasto nel connettore di campionamento di BactoSense. In tal caso, rimuoverlo con cautela con una pinzetta e reinserirlo nel dispositivo di campionamento. |
| 5. | Per conservare il dispositivo di campionamento, riporlo in un sacchetto di plastica pulito e asciutto e seguire le istruzioni della sezione [Conservazione dei dispositivi di campionamento](17-storage-transport-and-disposal.md#section-17-1-2). |
| 6. | Per montare ora il dispositivo di campionamento in linea, seguire la procedura della sezione [Installazione del dispositivo di campionamento in linea](05-installation.md#section-5-5). |

## 8.11 Qualificazione {#section-8-11}

La qualificazione è un processo che garantisce il funzionamento previsto di BactoSense. Sono disponibili diverse opzioni.

Per eseguire un controllo rapido e completamente automatico dello stato dello strumento, seguire la procedura di autoverifica della sezione [Autodiagnosi automatica](16-warnings-errors-and-troubleshooting.md#section-16-6). Questo test non richiede reagenti né interventi dell’utilizzatore, è molto rapido e verifica l’integrità e la comunicazione tra i diversi moduli di BactoSense.

Per valutare la pulizia di BactoSense ed escludere contaminazioni, eseguire la procedura di verifica della pulizia nella sezione [Verifica della pulizia](08-general-operations-and-configurations.md#section-8-11-1).

Per gli ambienti operativi che richiedono test di idoneità del sistema, utilizzare il *kit per il test di idoneità del sistema*  *(SST Kit)* e seguire la procedura nel relativo manuale d’uso.

Per gli altri ambienti, si consiglia di qualificare lo strumento utilizzando il *kit di validazione* nelle seguenti situazioni:

- Dopo la spedizione dello strumento o altri trasporti su lunghe distanze che lo espongono a vibrazioni o urti.
- Dopo aver conservato lo strumento per più di un mese.
- Se vi sono indicazioni che i risultati delle misurazioni possano essere errati.

### 8.11.1 Verifica della pulizia {#section-8-11-1}

|  | OPERAZIONE |
| --- | --- |
| 1. | Assicurarsi che il dispositivo di campionamento manuale sia saldamente installato come descritto nella sezione [Installazione del dispositivo di campionamento manuale](05-installation.md#section-5-4). |
| 2. | Pulire il dispositivo di campionamento con due ripetizioni: se è disponibile una Washstation, seguire la procedura della sezione [Pulire il dispositivo di campionamento manuale con Washstation](15-maintenance.md#section-15-2-2); altrimenti quella della sezione [Pulire il dispositivo di campionamento manuale con pulizia di base](15-maintenance.md#section-15-2-3). |
| 3. | Preparare il campione bianco in una provetta da 5 mL con tappo a vite. Sono disponibili due opzioni: A) utilizzare acqua priva di cellule, ad esempio un’aliquota di soluzione sterile del kit di validazione. Se si utilizza questa aliquota, rimuoverne il tappo e inserirla in una provetta vuota da 5 mL con tappo a vite, come descritto nel manuale del kit. B) utilizzare acqua minerale naturale non gassata e filtrarla due volte con un filtro a membrana avente pori di 0.22 µm o inferiori. |
| 4. | Nell’interfaccia utente di BactoSense, accedere al menu Home. |
| 5. | Nella schermata Home, premere Modalità e selezionare Modalità manuale. Premere Indietro, quindi Misura per aprire l’assistente di misurazione. |
| 6. | Scegliere il protocollo Prime dall’elenco dei protocolli disponibili. |
| 7. | Premere il pulsante Next. |
| 8. | Rimuovere la provetta o la Washstation dal dispositivo di campionamento manuale e collegare il campione bianco. |
| 9. | Premere Start per eseguire il protocollo Prime. |
| 10. | Al termine del Prime, premere New per tornare all’elenco dei protocolli. |
| 11. | Selezionare il protocollo Water Analysis dall’elenco dei protocolli disponibili. |
| 12. | Configurare due ripetizioni. |
| 13. | Inserire un nome per il campione toccando il campo Sample name, digitando il nome e premendo OK. |
| 14. | Verificare che sia configurato il gate predefinito ICC o TCC; in caso contrario, modificarlo premendo il campo Gates. |
| 15. | Premere il pulsante Next. |
| 16. | Premere Start e attendere il completamento delle due misurazioni. |
| 17. | Al termine, premere Next per esaminare i risultati. |
| 18. | Esaminare i risultati e confrontarli con i valori di riferimento seguenti. BactoSense è pulito se sono soddisfatti i seguenti criteri: • Per cartucce TCC: TCC [/mL] &lt; 300 • Per cartucce ICC: ICC [/mL] &lt; 100 |
| 19. | Se le concentrazioni cellulari sono superiori ai limiti specificati, applicare la seguente procedura: • Ripetere la procedura con un campione bianco appena preparato. • Ripetere la procedura dopo una decontaminazione con il kit di pulizia (vedere sezione [Materiali di consumo](18-supply-scope-accessories-and-consumables.md#section-18-3)). • Se il test continua a fallire, contattare l’assistenza bNovate o il rappresentante locale. |
| 20. | Al termine, collegare al dispositivo di campionamento manuale una provetta pulita e vuota da 5 mL con tappo a vite o la Washstation. |

## 8.12 Modalità demo {#section-8-12}

La modalità demo può essere utilizzata per dimostrare il dispositivo o imparare a navigare nei menu e utilizzare le funzioni. Quando viene attivata, lo strumento si riavvia in una modalità speciale che mostra dati dimostrativi (i risultati delle misurazioni del proprietario sono nascosti). Tutte le funzioni dello strumento vengono sostituite da simulazioni che non muovono mai l’hardware né modificano il database dei risultati. È quindi possibile avviare protocolli senza caricare un campione e simulare l’eliminazione o la rianalisi dei risultati con altri gate senza modificare i dati. Quando la modalità demo è attiva, al centro della parte superiore dello schermo viene visualizzato ***Demo***. Quando lo strumento ritorna alla modalità normale, i dati del proprietario sono nuovamente visibili e tutte le funzioni sono di nuovo attive.

<table>

<tbody>

<tr>

<th>

</th>

<th>

OPERAZIONE

</th>

<th colSpan="2">

INFORMAZIONI AGGIUNTIVE / IMMAGINE

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

Nella schermata Home, premere Impostazioni per aprire il menu delle impostazioni.

</td>

<td colSpan="2">

![BactoSense — Pulsante della schermata iniziale](/img/gui/icons/home-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Accedere a System settings, quindi premere il pulsante Demo mode.

</td>

<td>

![BactoSense — Impostazioni di sistema](/img/gui/icons/system-settings-button.png "width=48 class=manual-icon")

</td>

<td>

![BactoSense — Impostazioni della modalità demo](/img/gui/icons/demo-mode-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Selezionare la casella Activate demo mode.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Premere il pulsante Save and restart.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Il dispositivo si riavvia automaticamente.

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

Per tornare alla modalità normale, seguire la stessa procedura, ma deselezionare la casella **Activate demo**  **mode** .

## 8.13 Ripristino delle impostazioni di fabbrica {#section-8-13}

Il ripristino delle impostazioni di fabbrica riporta ai valori originali la maggior parte delle impostazioni dello strumento: limiti dei gate, intervallo di misurazione, nomi predefiniti dei protocolli, utenti, lingua e impostazioni di rete. Questa opzione è accessibile solo agli utenti Admin e Service.

La procedura seguente descrive come eseguire il ripristino delle impostazioni di fabbrica:

<table>

<tbody>

<tr>

<th>

</th>

<th>

OPERAZIONE

</th>

<th colSpan="2">

INFORMAZIONI AGGIUNTIVE / IMMAGINE

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

Nella schermata Home, premere Impostazioni per aprire il menu delle impostazioni.

</td>

<td colSpan="2">

![BactoSense — Pulsante della schermata iniziale](/img/gui/icons/home-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Premere Manutenzione, quindi Ripristino alle impostazioni fabbrica.

</td>

<td>

![BactoSense — Menu di manutenzione](/img/gui/icons/maintenance-button.png "width=48 class=manual-icon")

</td>

<td>

![BactoSense — Ripristinare le impostazioni di fabbrica](/img/gui/icons/factory-reset-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Utilizzare le caselle per selezionare i parametri da ripristinare: • impostazioni dello strumento • misurazioni, inclusi errori e registri • entrambi

</td>

<td colSpan="2">

:::info[Informazioni aggiuntive]

I registri di manutenzione, i risultati della validazione e la cronologia degli aggiornamenti software non vengono eliminati.

:::

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Quindi premere il pulsante Reset the device and reboot.

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>
