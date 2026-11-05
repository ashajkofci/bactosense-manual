---
title: "5. Utilisation"
sidebar_label: "5. Utilisation"
slug: /operation
sidebar_position: 5
description: "Manuel d’utilisation BactoSwitch : Utilisation."
---

## 5.1 Utilisation via l’interface graphique du BactoSense {#section-5-1}

Cette section présente une introduction de base à l’utilisation du BactoSwitch et à la consultation des résultats, qui sont très similaires à l’utilisation du BactoSense en mode en ligne et à la consultation de ses données. Pour plus de détails, veuillez consulter la section [Mesure en ligne](/bactosense/measurements#section-10-2) de la dernière version du manuel d’utilisation du BactoSense.

### 5.1.1 Démarrage des mesures en mode en ligne {#section-5-1-1}

Assurez-vous que le BactoSwitch est correctement installé comme décrit au chapitre [Installation](04-installation.md).

Accédez à l’écran d’accueil de l’interface utilisateur du BactoSense. Si l’instrument est en mode manuel, passez en mode en ligne à l’aide de **Mode**. Appuyez ensuite sur **Démarrer** :

![Écran d’accueil du BactoSense en mode en ligne avec le bouton Démarrer mis en évidence](/img/gui/fr/bactoswitch-home-start.png "width=639")

Dans la fenêtre du graphique du mode en ligne, appuyez sur **Démarrer** :

![Fenêtre du graphique du mode en ligne avec le bouton Démarrer mis en évidence](/img/gui/fr/bactoswitch-plot-start.png "width=637")

Sélectionnez le protocole **Water Analysis with BactoSwitch** et appuyez sur **Suivant**.

![Sélection du protocole avec Water Analysis with BactoSwitch sélectionné](/img/gui/fr/bactoswitch-protocol-selection.png "width=638")

Enfin, sélectionnez l’intervalle de mesure et appuyez sur **Démarrer**. Notez qu’il s’agit de l’intervalle entre deux mesures successives. L’intervalle de mesure de chaque source est N fois plus long, N étant le nombre de sources activées. Par exemple, si vous activez 4 sources et sélectionnez un intervalle de 30 min, chaque source est mesurée toutes les 2 h.

![Paramètres de l’intervalle avec le bouton Démarrer mis en évidence](/img/gui/fr/bactoswitch-interval-settings.png "width=635")

### 5.1.2 Consultation des résultats de mesure {#section-5-1-2}

Dès que les mesures sont démarrées, la fenêtre du graphique du mode en ligne s’affiche à nouveau. Lorsqu’un BactoSwitch est connecté, la fenêtre du mode en ligne affiche les comptages de chaque ligne [1/mL], mais pas les valeurs LNA/HNA [%] ni d’autres paramètres.

![Graphique du mode en ligne avec une courbe par ligne](/img/gui/fr/bactoswitch-plot-lines.png "width=637")

Les paramètres d’affichage peuvent être modifiés à l’aide du bouton situé en haut au centre du graphique.

![Paramètres d’affichage du graphique du mode en ligne](/img/gui/fr/bactoswitch-display-settings.png "width=633")

Le bouton **Résultats** ouvre la liste **Résultats du mode en ligne**. Les noms des échantillons correspondent aux noms de lignes définis à la section [Configuration des lignes](04-installation.md#section-4-6).

![Liste des résultats du mode en ligne avec une entrée par mesure de ligne](/img/gui/fr/bactoswitch-online-results.png "width=630")

Appuyez sur l’une des mesures pour en afficher les détails (là encore, veuillez consulter le manuel d’utilisation du BactoSense pour plus de détails).

![Détails d’un résultat du mode en ligne pour une mesure BactoSwitch](/img/gui/fr/bactoswitch-result-details.png "width=637")

Le bouton **Filtre** de la liste **Résultats du mode en ligne** ouvre la fenêtre **Filtrer les résultats**. Vous pouvez y filtrer les résultats selon une chaîne de caractères à l’aide du champ **Filtrer par nom**.

![Fenêtre Filtrer les résultats](/img/gui/fr/bactoswitch-filter-results.png "width=635")

Outre le filtrage par dates de début et de fin et par nom de mesure, le bouton **Filtrer par ligne** permet de filtrer les résultats par ligne du BactoSwitch.

![Fenêtre Filtrer les résultats avec le bouton Filtrer par ligne mis en évidence](/img/gui/fr/bactoswitch-filter-by-line-button.png "width=638")

![Sélection d’une ligne d’échantillons BactoSwitch](/img/gui/fr/bactoswitch-select-line.png "width=635")

Les filtres s’appliquent non seulement à la liste des résultats du mode en ligne, mais aussi au graphique du mode en ligne, ce qui permet de tracer sélectivement les résultats en fonction des numéros ou des noms de lignes (tels que définis à la section [Configuration des lignes](04-installation.md#section-4-6)). Voir aussi la section [Filtrage des mesures](/bactosense/measurements#section-10-7) du manuel d’utilisation du BactoSense.

![Graphique du mode en ligne filtré sur la ligne 1](/img/gui/fr/bactoswitch-plot-filtered.png "width=293") ![Résultats du mode en ligne filtrés sur la ligne 1](/img/gui/fr/bactoswitch-results-filtered.png "width=293")

### 5.1.3 Configuration des alarmes {#section-5-1-3}

La fenêtre **Configuration des alarmes** (accessible via **Paramètres** / **Paramètres mode en ligne** / **Alarm**) permet de définir des alarmes de manière sélective pour certaines lignes :

![Configuration des alarmes avec une ligne d’échantillons sélectionnée](/img/gui/fr/bactoswitch-alarm-sample-line.png "width=625")

## 5.2 Contrôle à distance et visualisation des données {#section-5-2}

### 5.2.1 BactoCloud {#section-5-2-1}

BactoCloud est la solution cloud de bNovate pour le contrôle à distance des instruments, la visualisation des données et l’analyse avancée. La version de base de BactoCloud est disponible avec tous les instruments.

BactoCloud comprend des fonctionnalités qui facilitent particulièrement la visualisation des données multi-lignes générées par un BactoSense équipé d’un BactoSwitch. De plus, l’analyse avancée simplifie les calculs différentiels, par exemple pour qualifier l’efficacité microbiologique des étapes de traitement de l’eau. Pour connecter l’instrument, voir le chapitre [BactoCloud](/bactosense/bactocloud) du manuel d’utilisation du BactoSense.

![Mesures multi-lignes dans BactoCloud](/img/bactoswitch/bactocloud-multi-line.png "width=700")

### 5.2.2 Interface utilisateur web {#section-5-2-2}

L’[interface utilisateur web](/bactosense/web-user-interface) du BactoSense comprend des fonctionnalités permettant de filtrer les données des différentes lignes du BactoSwitch.

Dans l’onglet **Résultats**, partie **Résultats du mode en ligne**, il est possible de filtrer les données par **Nom** ou par **ID de ligne**. Ces champs correspondent aux numéros et aux noms de lignes définis à la section [Configuration des lignes](04-installation.md#section-4-6). Le filtrage s’applique également au graphique du mode en ligne.

![Résultats du mode en ligne dans l’interface utilisateur web filtrés par nom, avec les colonnes Nom et ID de ligne mises en évidence](/img/gui/fr/bactoswitch-web-online-results.png "width=634")

### 5.2.3 Contrôle du BactoSwitch via la boîte d’E/S du BactoSense {#section-5-2-3}

Le fonctionnement du BactoSwitch peut être contrôlé par un contrôleur logique programmable (PLC) via le BactoSense et la boîte d’E/S optionnelle. Pour des informations plus détaillées, veuillez consulter la section [Configuration des entrées numériques et du mode PLC](/bactosense/io-box#section-6-5) du manuel d’utilisation du BactoSense. Seules les spécificités de l’utilisation du BactoSwitch sont expliquées ici.

Depuis **Paramètres**, accédez à **Paramètres mode en ligne** / **Entrées numériques**. La ligne du BactoSwitch peut être sélectionnée dans le champ **Ligne**.

Dans l’exemple ci-dessous, avec l’option **Utiliser le planificateur** décochée, lorsque le PLC règle les entrées numériques sur 1100, une mesure est immédiatement lancée sur la ligne n° 1 :

![Configuration des entrées numériques avec la ligne 1 sélectionnée](/img/bactoswitch/gui-digital-inputs-line.png "width=641")

Pour lancer des mesures régulières, cochez l’option **Utiliser le planificateur** et réglez l’intervalle souhaité. Toutes les lignes actives sont lues séquentiellement, en commençant par la ligne sélectionnée (la ligne n° 1 dans cet exemple) :

![Configuration des entrées numériques avec le planificateur activé](/img/bactoswitch/gui-digital-inputs-scheduler.png "width=633")

La lecture des données d’une ligne spécifique via les sorties analogiques doit être effectuée juste après la fin de la mesure sur cette ligne, par exemple en affectant le signal **Opération en cours** à une sortie numérique spécifique et en déclenchant la lecture de la sortie analogique lorsque l’état de cette sortie change. Notez qu’il ne s’agit pas du réglage par défaut. Pour plus de détails, veuillez consulter la section [Configuration des sorties numériques](/bactosense/io-box#section-6-6) du manuel d’utilisation du BactoSense.

![Écran Relation entre événements et sorties avec la ligne Opération en cours mise en évidence](/img/gui/fr/bactoswitch-assign-events-process-running.png "width=638")

### 5.2.4 Modbus TCP {#section-5-2-4}

Le BactoSwitch et le BactoSense peuvent être contrôlés à distance via le protocole Modbus TCP (Transmission Control Protocol), qui ne nécessite aucune boîte d’E/S. Pour plus de détails, veuillez consulter la section [Modbus TCP](/bactosense/field-bus-interface#section-7-1) du manuel d’utilisation du BactoSense.

La configuration de l’instrument pour le contrôle via Modbus TCP est identique à celle décrite dans la section précédente concernant la boîte d’E/S. Pour sélectionner Modbus TCP comme source des entrées numériques, appuyez sur **Sélectionner la source d'entrée numérique (Entrées physiques)** en bas de la fenêtre **Configuration des entrées numériques (PLC)**.

![Configuration des entrées numériques avec le bouton Sélectionner la source d'entrée numérique (Entrées physiques) mis en évidence](/img/gui/fr/bactoswitch-digital-input-source-button.png "width=624")

Réglez ensuite la source sur **Modbus TCP** et appuyez sur **Retour**.

![Source des entrées numériques réglée sur Modbus TCP](/img/gui/fr/bactoswitch-digital-input-source-modbus.png "width=624")

Outre les registres Modbus habituels du BactoSense, des registres Modbus spécifiques permettent de lire des informations du BactoSwitch :

- Flux de mesure actuel
- Prochain flux de mesure
- Débit
- État
- Connexion
- État des électrovannes

Pour plus de détails sur les adresses et les formats des registres, veuillez consulter la section [Liste d’adresses sur Modbus TCP](/bactosense/field-bus-interface#section-7-1-2) de la dernière version du manuel d’utilisation du BactoSense.

L’extraction des résultats d’un flux particulier nécessite que les données souhaitées soient lues à la fin d’une mesure, ce que le PLC peut détecter lorsque le registre **Étape de mesure** revient à 0.
