---
id: bactolink
title: BactoLink
sidebar_position: 6
slug: /bactolink
document_id: 40501-01
manual_version: "1"
software_version: "2.2"
---

Module de connectivité pour BactoSense et BactoSense Multi. Cette édition décrit la procédure BactoHub et s’applique à partir de la version 2.2 du logiciel BactoSense.

## Informations générales pour l’utilisateur {#general-user-information}

### Utilisation conforme {#intended-use}

BactoLink établit une connexion à distance entre l’instrument et votre PC. Établissez la connexion par le portail BactoHub à l’aide d’un navigateur web et du protocole HTTPS. Le portail est le point d’accès à BactoLink et aux instruments associés. Une connexion reste active pendant **30 minutes** et doit ensuite être rétablie.

### Pictogrammes {#pictograms}

:::info[Informations complémentaires]

Les encadrés d’information fournissent des précisions sur le sujet traité. Les listes numérotées décrivent des procédures pratiques. Les captures d’écran sont des exemples et peuvent différer de l’appareil actuel.

:::

### Présentation et prérequis {#prerequisites}

BactoLink se compose d’une antenne, d’un câble Ethernet et d’un injecteur Power-over-Ethernet (PoE). L’injecteur se connecte à l’alimentation électrique de BactoSense ou BactoSense Multi.

Avant l’installation :

- Vérifiez que l’instrument utilise la **version 2.2 ou ultérieure du logiciel**.
- Activez **DHCP** et **HTTPS** dans les paramètres de l’instrument.
- Activez **VNC** si le relais GUI est nécessaire.
- Assurez-vous de disposer d’un compte sur [hub.bnovate.com](https://hub.bnovate.com). Si nécessaire, demandez un compte à [support@bnovate.com](mailto:support@bnovate.com).

### Injecteur Power-over-Ethernet {#poe-injector}

L’injecteur PoE alimente l’antenne par Ethernet. Ses connexions Ethernet et d’alimentation à l’instrument sont intégrées de manière permanente. Il dispose d’un port pour le câble d’alimentation fourni avec BactoSense et d’une connexion Ethernet pour l’antenne.

![Dimensions de l’injecteur PoE](/img/other-manuals/bactolink-poe-dimensions.png "width=550")

La hauteur de l’injecteur, de ses pieds à son sommet, est de **65.5 mm**.

| Spécification mécanique | Valeur |
| --- | --- |
| Matériau | Polycarbonate (PC) |
| Connecteurs | RJ45, connecteur d’alimentation |
| Protection | IP67 |
| Dimensions, L × H × l | 165 × 165 × 54 mm |
| Température de fonctionnement | 5–30 °C |

### Antenne {#antenna}

L’antenne est reliée à l’injecteur PoE par Ethernet et contient la carte SIM pour les connexions mobiles (**4G/LTE, 3G, 2G**). Pour le support de montage, voir [Montage de BactoLink](#mounting).

![Vues et dimensions de l’antenne](/img/other-manuals/bactolink-antenna-dimensions.png "width=600")

| Spécification mécanique | Valeur |
| --- | --- |
| Matériaux | ABS, PC, FR4 |
| Connecteur | RJ45 |
| Protection | IP67 |
| Dimensions, L × H × l | 165 × 165 × 54 mm |
| Poids | 0.8 kg |
| Température de fonctionnement | −40–80 °C |

## Installation {#installation}

### Connexions de l’instrument {#instrument-connections}

![Connexions entre BactoSense, l’injecteur PoE, l’antenne et le bloc d’alimentation](/img/other-manuals/bactolink-connections.png "width=700")

| Connexion | Description |
| --- | --- |
| 1 | Ethernet entre l’injecteur PoE et le port RJ45 de l’instrument |
| 2 | Alimentation électrique entre l’injecteur PoE et le port d’alimentation de l’instrument |
| 3 | Ethernet entre l’injecteur PoE et l’antenne |
| 4 | Alimentation électrique de l’injecteur PoE. Le bloc d’alimentation est livré avec BactoSense. |

### Connexion de l’antenne et de l’injecteur PoE {#antenna-connection}

1. Ouvrez le sachet contenant le câble Ethernet.
2. Ouvrez l’emballage de l’injecteur PoE et le sachet séparé contenant le connecteur. Sortez le capuchon, la bague d’étanchéité avec ouverture, l’entretoise et le connecteur de l’injecteur PoE. Alignez-les sur le câble Ethernet comme illustré.

   ![Ordre des pièces du connecteur PoE sur le câble Ethernet](/img/other-manuals/bactolink-p08-1.png "width=450")

3. Guidez le connecteur RJ45 dans le connecteur PoE. Ils ne peuvent être assemblés que dans une seule orientation. Poussez le connecteur RJ45 aussi loin que possible vers l’avant. Poussez l’entretoise et la bague d’étanchéité dans le connecteur PoE. Vissez le capuchon en poussant doucement les pièces les unes contre les autres, jusqu’au serrage à la main. L’ensemble obtenu se raccorde à l’injecteur PoE par un raccord à baïonnette.

   ![Assemblage du connecteur PoE](/img/other-manuals/bactolink-p08-2.png "width=400")

4. Placez l’autre extrémité du câble Ethernet devant vous.
5. Prenez le connecteur d’antenne et le joint torique dans l’emballage de l’antenne.

   ![Connecteur d’antenne et joint torique](/img/other-manuals/bactolink-p08-3.png "width=450")

6. Dévissez le connecteur d’antenne et poussez la bague d’étanchéité pour la faire sortir. Si nécessaire, utilisez la tige de montage courbée pour la pousser.

   ![Retrait de la bague d’étanchéité du connecteur d’antenne](/img/other-manuals/bactolink-p09-0.png "width=300")

7. Alignez les pièces du connecteur d’antenne sur le câble Ethernet comme illustré.

   :::caution[Respectez l’ordre d’assemblage du connecteur d’antenne]

   Connectez d’abord le RJ45 à l’antenne, fixez le connecteur à l’antenne, puis montez le capuchon en dernier. Cela empêche le câble de se retrouver coincé sous le joint.

   :::

   ![Ordre des pièces du connecteur d’antenne](/img/other-manuals/bactolink-p09-1.png "width=450")

8. Poussez légèrement le connecteur RJ45 dans le connecteur d’antenne. Assurez-vous que sa petite languette se trouve à l’intérieur de l’antenne.
9. Poussez la bague d’étanchéité dans le connecteur d’antenne.
10. Placez le joint torique sur le connecteur d’antenne et branchez le RJ45.
11. Vissez le connecteur dans l’antenne.
12. Vissez le capuchon sur le connecteur.

    ![Connecteur d’antenne entièrement assemblé](/img/other-manuals/bactolink-p10-0.png "width=350")

### Montage de BactoLink {#mounting}

Le kit de montage permet de fixer l’antenne à des objets cylindriques ou carrés, à des tuyaux ou à des tiges.

1. Ouvrez l’emballage de l’antenne et repérez le support de montage et les composants d’assemblage.
2. Identifiez la plaque de montage (A), la tige courbée (B) et l’entretoise (C). La plaque se fixe à BactoLink, la tige courbée le maintient en place et l’entretoise maintient la distance entre la tige et la plaque.

   ![Plaque de montage, tige courbée et entretoise](/img/other-manuals/bactolink-p11-1.png "width=400")

3. Repérez les deux vis et rondelles dans l’emballage de l’antenne.
4. Positionnez la plaque de montage sur BactoLink. Insérez les vis à travers la plaque dans BactoLink, en plaçant les rondelles entre les têtes de vis et la plaque. Serrez à l’aide d’une **clé Allen de 5 mm** jusqu’à ce que l’ensemble soit solidement fixé.

   ![Fixation de la plaque de montage à BactoLink](/img/other-manuals/bactolink-p11-3.png "width=300")

5. Repérez les deux écrous à embase.
6. Positionnez la tige courbée et l’entretoise sur la plaque dans l’orientation souhaitée.

   ![Support de montage assemblé sur l’antenne](/img/other-manuals/bactolink-p11-2.png "width=450")

7. Placez les deux écrous à embase sur les extrémités filetées de la tige courbée. Serrez-les à la main ou à l’aide d’une **clé de 13 mm**, jusqu’à ce qu’ils ne bougent plus et que BactoLink soit solidement fixé.

   ![Fixation de la tige courbée et de l’entretoise](/img/other-manuals/bactolink-p12-1.png "width=450")

### Première installation {#first-installation}

1. Vérifiez que l’instrument utilise la **version 2.2 ou ultérieure du logiciel**. Pour une mise à niveau, contactez [support@bnovate.com](mailto:support@bnovate.com).
2. Scannez le code-barres 2D à l’arrière de l’antenne. Saisissez le nom d’utilisateur et le mot de passe choisis précédemment pour BactoHub. Si vous avez besoin d’un compte, contactez le support.
3. Éteignez l’instrument. Connectez les appareils comme décrit dans [Connexions de l’instrument](#instrument-connections) et [Connexion de l’antenne et de l’injecteur PoE](#antenna-connection).

   ![Exemple de connexions de l’instrument](/img/other-manuals/bactolink-p13-1.png "width=450")

4. Allumez l’appareil.
5. Ouvrez **Home → System Settings → Network**. Activez **DHCP** si nécessaire.

   :::caution[Attendez avant de redémarrer]

   N’éteignez pas et ne rallumez pas immédiatement l’instrument.

   :::

   ![Exemple de configuration réseau](/img/other-manuals/bactolink-p13-2.png "width=500")

6. Ouvrez **Home → System Settings → System Services**. Activez **HTTPS** pour l’accès à WebUI et attribuez le **port 443**. En cas de modification, redémarrez BactoSense. HTTPS est nécessaire au fonctionnement de BactoLink. Éteignez et rallumez l’instrument, ou effectuez d’abord l’étape facultative suivante.
7. Si le relais GUI est nécessaire, activez **VNC** dans **System Services** et attribuez-lui le **port 5900**. Éteignez puis rallumez l’instrument.

   :::caution[Visibilité de l’écran à distance]

   Avec le relais GUI, vos actions à l’écran sont visibles par les personnes présentes devant l’instrument et par les utilisateurs connectés à distance. Des informations confidentielles pourraient être partagées.

   :::

8. Configurez BactoLink à l’aide de son numéro de série et d’un nom facile à reconnaître. Cliquez sur **Connect**.

   ![Configuration de la connexion BactoLink](/img/other-manuals/bactolink-p15-0.png "width=500")

9. Attendez que l’instrument soit connecté, puis cliquez sur **Finish**.

   ![Finalisation de la configuration de la connexion](/img/other-manuals/bactolink-p15-1.png "width=500")

10. L’instrument apparaît dans la liste des instruments BactoHub. Choisissez **WebUI** ou **GUI relay**. La connexion s’ouvre dans un onglet séparé et reste valide pendant **30 minutes**. Reconnectez-vous après cette période.

    ![Liste des instruments BactoHub avec les connexions WebUI et GUI relay](/img/other-manuals/bactolink-p15-2.png "width=500")

### Reconfiguration de BactoHub {#reconfiguration}

1. Cliquez sur **Initialize BactoLink** sous **My Instruments**. Saisissez le numéro de série de l’instrument et un nom facile à reconnaître, puis appuyez sur **Continue**.
2. Répétez les étapes **2–9** de la [Première installation](#first-installation). Vous pouvez ensuite accéder à l’instrument par WebUI et le relais GUI.

## Connexions à distance {#remote-connections}

### Interface utilisateur web (WebUI) {#webui}

WebUI permet d’accéder aux données de l’instrument par le port RJ45. Cliquez sur **WebUI** dans BactoHub pour établir une connexion par BactoLink. Si vous redémarrez BactoSense depuis WebUI, rechargez également la page web.

#### Mot de passe

Lorsque vous y êtes invité, saisissez le nom d’utilisateur de l’appareil BactoSense (**Basic**, **Advanced**, **Admin** ou **Service**) et le mot de passe choisi.

![Invite de connexion WebUI](/img/other-manuals/bactolink-p17-0.png "width=350")

#### Tableau de bord

Le tableau de bord présente les derniers résultats de mesure, l’état de l’instrument et les avertissements concernant les cartouches périmées.

![Tableau de bord WebUI](/img/other-manuals/bactolink-p17-1.png "width=650")

#### Nuages de points

Les nuages de points présentent une animation des mesures récentes. Le chargement peut prendre du temps selon la connexion. Commencez par la vitesse d’animation **1** ; utilisez des vitesses plus élevées une fois les images entièrement chargées. Des options de téléchargement sont disponibles aux formats GIF et FCS.

![Nuages de points WebUI et commandes d’animation](/img/other-manuals/bactolink-p17-2.png "width=650")

#### Résultats

Les résultats présentent les mesures dans le temps et proposent des options de téléchargement. Sous le graphique se trouvent des zones de téléchargement pour le mode automatique, le mode manuel et la validation de l’instrument. Les résultats automatiques et manuels sont répertoriés en bas de page. Vous pouvez les consulter sous forme de tableau, télécharger des fichiers ZIP cumulatifs ou télécharger des fichiers IMG et FCS pour chaque mesure. BactoSense Multi affiche uniquement le mode manuel et ne comporte pas de graphique chronologique.

![Résultats WebUI et zones de téléchargement](/img/other-manuals/bactolink-p18-0.png "width=650")

#### Journal des protocoles

Le journal des protocoles affiche les protocoles exécutés et les messages d’erreur. Téléchargez les données au format CSV.

![Journal des protocoles WebUI](/img/other-manuals/bactolink-p18-1.png "width=650")

#### Journal des erreurs

Le journal des erreurs répertorie les erreurs et les avertissements, téléchargeables au format XLSX, CSV ou PDF.

![Journal des erreurs WebUI](/img/other-manuals/bactolink-p19-0.png "width=650")

#### Informations système

Les informations système présentent des informations générales sur le système et permettent de réaliser des captures d’écran.

![Informations système WebUI](/img/other-manuals/bactolink-p19-1.png "width=650")

#### Paramètres

Les paramètres permettent de modifier les noms des échantillons, les intervalles de mesure et le nom de l’instrument. Cette fonction n’est pas disponible pour BactoSense Multi.

![Paramètres WebUI](/img/other-manuals/bactolink-p19-2.png "width=650")

### Relais de l’interface utilisateur graphique (GUI relay) {#gui-relay}

Le relais GUI fournit un accès au bureau à distance, comme si vous étiez physiquement devant l’instrument.

![Exemple du bureau à distance du relais GUI](/img/other-manuals/bactolink-p20-0.png "width=650")

:::caution[Visibilité de l’écran à distance]

Vos actions à l’écran sont visibles par les personnes présentes devant l’instrument et par les utilisateurs connectés à distance. Des informations confidentielles pourraient être partagées.

:::

## Dépannage {#troubleshooting}

Si l’instrument a été éteint pendant l’installation, BactoLink devrait fonctionner immédiatement. Si les problèmes persistent :

1. Assurez-vous que BactoLink est complètement allumé avant d’allumer BactoSense. Prévoyez au moins **3 minutes** pour que l’instrument établisse une connexion réseau.
2. Vérifiez la connectivité au réseau mobile sur place à l’aide de votre téléphone portable.
3. Si aucune connexion n’est possible, déconnectez puis reconnectez l’antenne à l’injecteur PoE pour l’éteindre et la rallumer.
4. Inspectez toutes les connexions de l’injecteur et des instruments connectés.
5. Si les problèmes persistent, éteignez puis rallumez BactoSense.

## Éditeur et contact {#contact}

© bNovate Technologies SA. Sous réserve de modifications techniques sans préavis, octobre 2023. Rédigé par bNovate Technologies SA. La copie, la modification ou la distribution du document à des tiers nécessite l’accord exprès de l’éditeur.

bNovate Technologies SA, Ch. Dent d’Oche 1A, CH-1024 Ecublens, Suisse. Téléphone : +41 21 552 14 21. [info@bnovate.com](mailto:info@bnovate.com) · [www.bnovate.com](https://www.bnovate.com).
