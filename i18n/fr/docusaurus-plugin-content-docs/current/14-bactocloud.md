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

Pour créer une organisation pour votre propre parc, ouvrez le sélecteur d’organisation dans l’en-tête et choisissez **New Organisation**. Saisissez son nom, choisissez son fuseau horaire et ses applications, puis sélectionnez **Create Organisation**. Sélectionnez l’organisation souhaitée avant de générer un code d’enregistrement.

## 14.3 Associer un instrument {#section-14-3}
L’enregistrement associe un instrument à une organisation BactoCloud. Vous devez avoir l’autorisation d’enregistrer des instruments dans cette organisation et un compte **admin** sur l’instrument. Utilisez l’écran tactile de l’instrument ou une [vue distante VNC](12-data-access-and-export.md#section-12-4) autorisée de cet écran. Un instrument ne peut appartenir qu’à une seule organisation à la fois.

Avant l’enregistrement, vérifiez la version du logiciel BactoSense : les instruments Rev3 nécessitent **3.1.0 ou une version ultérieure**, et les instruments Rev2 **2.4.0 ou une version ultérieure**. Certaines fonctions cloud peuvent nécessiter une version plus récente ou des options instrumentales. Si vous ne pouvez pas installer une mise à jour localement, contactez votre service d’assistance avant de poursuivre.

### 14.3.1 Générer un code d’enregistrement {#section-14-3-1}

1. Connectez-vous à BactoCloud et sélectionnez l’organisation à laquelle l’instrument doit appartenir avec le sélecteur d’organisation.
2. Ouvrez le sélecteur d’organisation dans l’en-tête, choisissez **Organisation Settings**, puis **Instruments** dans la barre latérale. Sélectionnez **Enrol instrument**. Cette action est également disponible sur la page du parc vide lorsqu’aucun instrument n’est enregistré.
3. Lisez les explications et les exigences logicielles, puis sélectionnez **Generate new code**.
4. Notez ou copiez le code généré.

![Introduction à l’enregistrement dans BactoCloud, avec l’action Generate new code et les versions logicielles minimales.](/img/manual/bactocloud/enrolment.png)

La section **Enrolment codes** affiche les codes existants et leur date d’expiration. Utilisez un code avant sa date d’expiration ou générez-en un nouveau s’il a expiré. Chaque code appartient à l’organisation dans laquelle il a été créé. Si l’action d’enregistrement n’est pas disponible, demandez à un administrateur de l’organisation de vérifier votre accès.

### 14.3.2 Saisir le code sur l’instrument {#section-14-3-2}

1. Sur l’écran d’accueil du BactoSense, sélectionnez **Paramètres** dans la barre d’outils inférieure.

   ![BactoSense — Barre d’accueil : Paramètres](/img/gui/fr/bactocloud-enrolment-home.png)

2. Sélectionnez **Paramètres système** dans le menu **Paramètres**.

   ![BactoSense — Menu Paramètres : Paramètres système](/img/gui/fr/settings-menu-system-settings.png)

3. Sélectionnez **BactoCloud** pour ouvrir **Paramètres cloud**.

   ![BactoSense — Paramètres système : BactoCloud](/img/gui/fr/bactocloud-enrolment-menu.png)

4. Sélectionnez **S'inscrire**, saisissez le code généré dans BactoCloud et confirmez la saisie. Suivez les messages à l’écran, puis vérifiez que **Inscrit** affiche **Oui** et que **Organisation** indique l’organisation souhaitée.

   ![BactoSense — Paramètres d’inscription à BactoCloud](/img/gui/fr/bactocloud-enrolment-settings.png)

Si **BactoCloud** n’est pas disponible, vérifiez votre rôle utilisateur local et si le mode démo ou le mode PLC est actif.

### 14.3.3 Confirmer l’enregistrement {#section-14-3-3}
Dans BactoCloud, ouvrez **Organisation Settings → Instruments** depuis le sélecteur d’organisation de l’en-tête et vérifiez le nom, le numéro de série et l’état de connexion signalé par l’instrument. Confirmez la réception des derniers états et mesures. **Last seen at** indique l’heure du dernier état reçu par BactoCloud ; cette valeur ne teste pas la connexion réseau actuelle.

Si l’instrument n’apparaît pas, vérifiez que le code a été généré dans l’organisation souhaitée et que la procédure sur l’instrument est terminée. Si le code est refusé ou si l’instrument appartient déjà à une autre organisation, demandez de l’aide à un administrateur de l’organisation ou au support.

Si les états ou mesures cessent d’arriver, notez le numéro de série de l’instrument, la version logicielle, l’horodatage et le dernier transfert réussi. Demandez à l’administrateur réseau de vérifier le DNS et la connectivité sortante du réseau de l’instrument à l’aide des [exigences informatiques](#section-14-1).

L’inventaire des instruments de l’organisation affiche également **Enrolled since**. Les utilisateurs disposant du droit de supprimer des instruments peuvent sélectionner l’action de ligne **Unlink Instrument from organisation**. Exportez d’abord les mesures à conserver. La confirmation avertit que la dissociation arrête les transferts et supprime les mesures existantes dans le cloud. Vérifiez l’instrument concerné, saisissez son numéro de série dans la confirmation, puis sélectionnez **Unlink instrument**.