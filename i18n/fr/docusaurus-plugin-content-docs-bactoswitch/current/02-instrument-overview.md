---
title: "2. Vue d’ensemble de l’instrument"
sidebar_label: "2. Vue d’ensemble de l’instrument"
slug: /instrument-overview
sidebar_position: 2
description: "Manuel d’utilisation BactoSwitch : Vue d’ensemble de l’instrument."
---

## 2.1 Vue d’ensemble du produit BactoSwitch {#section-2-1}

Une vue d’ensemble des éléments du BactoSwitch est présentée ci-dessous :

![Éléments du BactoSwitch dans les vues A à F](/img/bactoswitch/bactoswitch-elements.png "width=700")

*Figure 2-1 Éléments du BactoSwitch*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Poignée | 2 | Connecteurs des lignes d’entrée |
| 3 | Montage mural | 4 | Bouton de fixation du capot avant |
| 5 | Capot avant amovible | 6 | Voyant de ligne sélectionnée |
| 7 | Voyant d’état | 8 | Conduite d’eau vers le BactoSense |
| 9 | Conduite d’eau en provenance du BactoSense | 10 | Sortie de la conduite d’eau vers l’évacuation |
| 11 | Prise USB-C | 12 | Prise d’alimentation |
| 13 | Commande manuelle d’ouverture/fermeture de ligne | 14 | Bouton de réglage du débit |
| 15 | Accès au réglage du régulateur de pression | 16 | Débitmètre |

## 2.2 Voyants lumineux {#section-2-2}

Le comportement des voyants lumineux est résumé dans le tableau 2-1. Les numéros renvoient à la [figure 2-1](02-instrument-overview.md#section-2-1), vue B.

*Tableau 2-1 Comportement des voyants lumineux*

| VOYANT LUMINEUX | COMPORTEMENT |
| --- | --- |
| Voyants de sélection de ligne (6) | **Bleu :** ligne ouverte<br />**Éteint :** ligne fermée |
| Voyant d’état (7) | **Vert :** au repos<br />**Vert clignotant lentement :** mesure en cours, pas d’échantillonnage<br />**Vert clignotant rapidement :** mesure en cours, échantillonnage de l’eau de la ligne<br />**Rouge :** erreur de mesure |

## 2.3 Principe de fonctionnement {#section-2-3}

Le schéma ci-dessous montre le fonctionnement de base du BactoSwitch (capot avant retiré pour plus de clarté). L’eau de chaque ligne d’entrée (1) traverse un clapet anti-retour (2, non visible), puis un régulateur de pression (3), ensuite une vanne de débit à pointeau (4) et enfin une électrovanne (5). Chaque ligne d’entrée peut être ouverte ou fermée. L’eau des lignes ouvertes se rejoint et sort du BactoSwitch vers le dispositif d’échantillonnage en ligne du BactoSense (6). Après avoir traversé le dispositif d’échantillonnage, l’eau revient vers le BactoSwitch, traverse le débitmètre (7) et s’écoule enfin vers l’évacuation (8).

![Principe de fonctionnement du BactoSwitch avec le circuit d’eau numéroté](/img/bactoswitch/working-principle.png "width=700")

*Figure 2-2 Principe de fonctionnement du BactoSwitch. Voir les explications dans le texte ci-dessus.*

:::info[Fermez les lignes inutilisées]

Les électrovannes des lignes d’entrée inutilisées doivent être fermées manuellement et les lignes correspondantes désactivées dans le logiciel. Pour plus d’informations, voir [Installation des lignes d’entrée](04-installation.md#section-4-4-3) et [Configuration des lignes](04-installation.md#section-4-6).

:::

## 2.4 Plaque signalétique du BactoSwitch {#section-2-4}

La plaque signalétique du BactoSwitch se trouve sur le côté droit de l’instrument.

![Emplacement et éléments de la plaque signalétique du BactoSwitch](/img/bactoswitch/type-plate.png "width=654")

*Figure 2-3 Plaque signalétique du BactoSwitch*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Fabricant | 2 | Nom du produit |
| 3 | Numéro de série | 4 | Code-barres |
| 5 | Date de fabrication | 6 | Pays d’origine |
| 7 | Exigences de tension et de puissance | 8 | Marquage CE |
| 9 | Marquage UKCA | 10 | Conformité aux normes canadiennes en matière de CEM et d’interférences |
| 11 | Lire les instructions et utiliser avec prudence | 12 | Informations sur l’élimination |

## 2.5 Plaque signalétique du bloc d’alimentation du BactoSwitch {#section-2-5}

La plaque signalétique du bloc d’alimentation du BactoSwitch se trouve sur le bloc d’alimentation et comporte les éléments suivants :

![Éléments de la plaque signalétique du bloc d’alimentation du BactoSwitch](/img/bactoswitch/power-supply-type-plate.png "width=514")

*Figure 2-4 Plaque signalétique du bloc d’alimentation du BactoSwitch*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Fabricant | 2 | Nom du produit |
| 3 | Référence (varie selon le type de fiche) | 4 | Date de fabrication |
| 5 | Tension et fréquence d’entrée de service | 6 | Consommation électrique |
| 7 | Marquage CE | 8 | Marquage UKCA |
| 9 | Conformité aux normes canadiennes en matière de CEM et d’interférences | 10 | Lire les instructions et utiliser avec prudence |
| 11 | Informations sur l’élimination |  |  |

## 2.6 Données techniques {#section-2-6}

*Tableau 2-2 Données techniques du BactoSwitch*

| PROPRIÉTÉ | SPÉCIFICATION |
| --- | --- |
| **GÉNÉRALITÉS** | \< |
| Version matérielle requise | BactoSense CORE/SMART, à partir du numéro de série 910500 |
| Version logicielle requise | 3.1.0-BS et supérieure |
| Environnement d’utilisation | Utilisation en intérieur |
| Altitude d’utilisation | Max. 2000 m (6600 ft) au-dessus du niveau de la mer |
| Température d’utilisation | 5 °C – 30 °C (41 °F – 86 °F) |
| Humidité d’utilisation | 10 % – 90 % HR |
| Température de stockage | 5 °C – 30 °C (41 °F – 86 °F) |
| Humidité de stockage | 10 % – 70 % HR |
| Exigences de ventilation | Aucune |
| Niveau de pression acoustique | < 64 dBA |
| Indice de protection | Instrument : IP65<br />Bloc d’alimentation : IP67 |
| **ÉCHANTILLONNAGE** | \< |
| Type d’échantillonnage | En ligne |
| Conditions de l’échantillon | Eau uniquement<br />Température : 5 °C – 40 °C (41 °F – 104 °F)<br />Turbidité : 0 – 10 FTU, 0 – 10 FNU<br />Conductivité : 0 – 100’000 μS/cm à 20 °C<br />Valeur du pH : 5 – 12<br />Chlore : max. 3 mg/L<br />Fer : max. 200 μg/L<br />Manganèse : max. 50 μg/L<br />Particules solides : < 0,5 mm |
| Nombre d’entrées | 4 |
| Plage de pression d’entrée | 0,1 – 5 bar |
| Plage de débit par ligne | 150 – 400 mL/min |
| Régulateur de pression | Intégré et préréglé (sans décharge) |
| Régulation du débit | Vanne à pointeau réglable |
| Sélection de ligne | Électrovannes normalement ouvertes, à séparation de fluide<br />Commande manuelle de fermeture |
| Interfaces fluidiques | Raccord instantané ø6x1 mm |
| Tuyaux d’entrée | Matériau : PFA (transparent)<br />Diamètre extérieur : 6 mm<br />Diamètre intérieur : 4 mm<br />Longueur maximale : 4 m<br />Quantité : 4x |
| Tuyaux du dispositif d’échantillonnage en ligne | Matériau : PFA (transparent)<br />Diamètre extérieur : 6,35 mm (1/4″)<br />Diamètre intérieur : 4,35 mm<br />Longueur recommandée : 200 mm<br />Quantité : 2x |
| Tuyau de sortie vers l’évacuation | Matériau : PFA (transparent)<br />Diamètre extérieur : 6 mm<br />Diamètre intérieur : 4 mm<br />Longueur maximale : 2 m<br />Quantité : 1x |
| Matériaux en contact avec le fluide | PFA, acier inoxydable 316L, acier inoxydable 316Ti, FKM, EPDM, laiton ENP, PPS 40 % GF, PVDF, céramique de zircone |
| **NETTOYAGE** | \< |
| Agents et conditions | Eau (température : 1 °C – 85 °C, pression : max. 2 bar, durée : max. 15 min)<br />Chlore : max. 10’000 mg/L de chlore actif (température : max. 25 °C) |
| **CARACTÉRISTIQUES PHYSIQUES** | \< |
| Dimensions (L x P x H) | 264 x 206 x 300 mm (10,4 x 8,1 x 11,8″) |
| Poids | 12 kg (26,5 lbs) |
| Dimensions du bloc d’alimentation (L x P x H) | 230 x 80 x 65 mm (9,0 x 3,1 x 2,6″) |
| Poids du bloc d’alimentation | 0,9 kg (2,0 lbs) |
| **CARACTÉRISTIQUES ÉLECTRIQUES** | \< |
| Catégorie d’installation | II |
| Degré de pollution | 2 |
| Alimentation électrique | Bloc d’alimentation : 100 – 240 VAC ± 10 %, 50/60 Hz, 1,4 A<br />BactoSwitch : 24 VDC, 60 W |
| Consommation électrique | Max. 60 W |
| **INTERFACES** | \< |
| USB | 1 x USB 2.0 type C (femelle) |
