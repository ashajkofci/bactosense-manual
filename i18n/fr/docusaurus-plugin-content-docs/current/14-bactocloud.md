---
title: "14. BactoCloud"
sidebar_label: "14. BactoCloud"
sidebar_position: 14
slug: /bactocloud
---

BactoCloud est la plateforme cloud sécurisée pour les utilisateurs de BactoSense, permettant une visibilité en temps réel, un accès à distance et une intégration intelligente des données pour toutes les opérations de surveillance de l'eau.

## 14.1 Exigences en matière de technologies de l'information {#section-14-1}

Le BactoSense établit une connexion Internet sortante vers BactoCloud. Celle-ci peut utiliser BactoLink, un point d’accès 4G/5G ou une connexion filaire. Plusieurs instruments peuvent partager une connexion Internet derrière un NAT ; aucun VPN ni transfert de port entrant n’est nécessaire.

| Exigence | Configuration |
| --- | --- |
| Adressage réseau | Fournissez une adresse IP, un masque de sous-réseau, une passerelle et un résolveur DNS fonctionnels. DHCP et l’adressage statique sont pris en charge. Confirmez les paramètres statiques avec l’administrateur réseau. |
| Accès sortant | Autorisez l’accès sortant à `*.bactocloud.com` et `*.bnovate.net` depuis le réseau de l’instrument. |
| Bande passante | Prévoyez plus de 1 Mbit/s. |
| Consommation de données | Prévoyez environ 0.5–1 GB par mois et par instrument effectuant des mesures horaires. La synchronisation de l’historique, les diagnostics et les mises à jour logicielles génèrent du trafic supplémentaire. |
| Synchronisation de l’heure | Configurez une source horaire approuvée lorsque nécessaire pour permettre la corrélation des horodatages des événements. |
| Proxy du navigateur | Tout proxy utilisé par les utilisateurs BactoCloud doit prendre en charge les connexions WebSocket sécurisées vers BactoCloud. |

Maintenez l’interface web locale de l’instrument sur un réseau d’installation contrôlé et n’exposez pas ses services à l’Internet public. Les connexions PLC, Modbus et d’E/S existantes peuvent rester en service.

Pour configurer l’instrument, consultez [Configuration du réseau](08-general-operations-and-configurations.md#section-8-6) et [Configuration des serveurs NTP](08-general-operations-and-configurations.md#section-8-7).

## 14.2 Inscription {#section-14-2}

Rendez-vous sur [www.bactocloud.com/register](https://www.bactocloud.com/register), saisissez les informations demandées et validez votre adresse e-mail. L’inscription crée votre compte personnel ; l’appartenance à une organisation le relie à un parc d’instruments.

Si vous avez reçu une invitation, suivez son lien puis connectez-vous ou inscrivez-vous avec l’adresse e-mail exacte à laquelle elle a été envoyée. Après l’avoir acceptée, sélectionnez l’organisation dans l’en-tête.

Pour créer une organisation pour votre propre parc, choisissez **New Organisation**, saisissez son nom, choisissez son fuseau horaire et ses applications, puis sélectionnez **Create Organisation**. Sélectionnez l’organisation souhaitée avant de générer un code d’enregistrement.

## 14.3 Associer un instrument {#section-14-3}

L’enregistrement associe un instrument à une organisation BactoCloud. Vous devez être membre de cette organisation et avoir accès à l’interface locale de l’instrument, directement ou via une [vue distante](13-web-user-interface.md#section-13-2) autorisée. Un instrument ne peut appartenir qu’à une seule organisation à la fois.

Avant l’enregistrement, vérifiez la version du logiciel BactoSense : les instruments Rev3 nécessitent **3.1.0 ou une version ultérieure**, et les instruments Rev2 **2.4.0 ou une version ultérieure**. Certaines fonctions cloud peuvent nécessiter une version plus récente ou des options instrumentales. Si vous ne pouvez pas installer une mise à jour localement, contactez votre service d’assistance avant de poursuivre.

### 14.3.1 Générer un code d’enregistrement {#section-14-3-1}

1. Connectez-vous à BactoCloud et sélectionnez l’organisation à laquelle l’instrument doit appartenir avec le sélecteur d’organisation.
2. Ouvrez **Organization → Instruments** et choisissez **Enrol instrument**. Vous pouvez aussi commencer depuis la page du parc vide lorsqu’aucun instrument n’est enregistré.
3. Lisez les explications et les exigences logicielles, puis sélectionnez **Generate new code**.
4. Notez ou copiez le code généré.

![Introduction à l’enregistrement dans BactoCloud, avec l’action Generate new code et les versions logicielles minimales.](/img/manual/bactocloud/enrolment.png)

La section **Enrolment codes** affiche les codes existants et leur date d’expiration. Utilisez un code avant sa date d’expiration ou générez-en un nouveau s’il a expiré. Chaque code appartient à l’organisation dans laquelle il a été créé. Si l’action d’enregistrement n’est pas disponible, demandez à un administrateur de l’organisation de vérifier votre accès.

### 14.3.2 Saisir le code sur l’instrument {#section-14-3-2}

1. Sur l’écran Home du BactoSense, sélectionnez **Settings** dans la barre d’outils inférieure.

   ![Barre d’outils Home du BactoSense : sélectionnez Settings.](/img/manual/bactocloud/enrolment-device-home.png)

2. Sélectionnez **System settings** dans le menu Settings.

   ![Menu Settings du BactoSense : sélectionnez System settings.](/img/manual/bactocloud/enrolment-device-settings.png)

3. Sélectionnez **BactoCloud** pour ouvrir **Cloud Settings**.

   ![Menu System settings du BactoSense : sélectionnez BactoCloud.](/img/manual/bactocloud/enrolment-device-system.png)

4. Sélectionnez **Enrol**, saisissez le code généré dans BactoCloud et suivez les instructions à l’écran pour terminer l’enregistrement. Le manuel imprimé fourni nomme cette action **Enroll device**.

   ![Cloud Settings du BactoSense avant l’enregistrement : sélectionnez Enrol pour saisir le code de l’organisation.](/img/manual/bactocloud/enrolment-device-cloud.png)

### 14.3.3 Confirmer l’enregistrement {#section-14-3-3}

Dans BactoCloud, ouvrez la liste **Instruments** de l’organisation et vérifiez le nom, le numéro de série et l’état de connexion signalé par l’instrument. Confirmez la réception des derniers états et mesures. **Last seen** indique l’heure du dernier état reçu par BactoCloud ; cette valeur ne teste pas la connexion réseau actuelle.

Si l’instrument n’apparaît pas, vérifiez que le code a été généré dans l’organisation souhaitée et que la procédure sur l’instrument est terminée. Si le code est refusé ou si l’instrument appartient déjà à une autre organisation, demandez de l’aide à un administrateur de l’organisation ou au support.

Si les états ou mesures cessent d’arriver, notez le numéro de série de l’instrument, la version logicielle, l’horodatage et le dernier transfert réussi. Demandez à l’administrateur réseau de vérifier le DNS et la connectivité sortante du réseau de l’instrument à l’aide des [exigences informatiques](#section-14-1).

L’inventaire des instruments de l’organisation affiche également **Enrolled since**. Si vous devez retirer un instrument et que **Unenrol** est disponible, vérifiez l’instrument concerné et saisissez son numéro de série dans la confirmation avant de poursuivre.
