---
title: "6. Boîte d’E/S"
sidebar_label: "6. Boîte d’E/S"
slug: /io-box
sidebar_position: 6
description: "Manuel d’utilisation BactoSense : Boîte d’E/S."
---

La boîte d’E/S est un accessoire du BactoSense. Elle permet de connecter les entrées et sorties du BactoSense à un système PLC/SCADA.

Modbus TCP peut être utilisé à la place de la boîte d’E/S. Pour plus de détails, consultez la section [Modbus TCP](07-field-bus-interface.md#section-7-1).

## 6.1 Spécifications techniques {#section-6-1}

:::info[Consultez les spécifications]

Lisez attentivement les spécifications techniques avant de préparer l'intégration.

:::

### 6.1.1 Entrées numériques {#section-6-1-1}

- Utilisation: 4 entrées numériques référencées sur COMMON permettent à l'instrument d'être contrôlé par une tension externe (par exemple la tension provenant d'un PLC).
- Spécifications: entrée optocoupleur: tension directe 1,2 VDC avec 3 kΩ en série, cathode connectée à COMMON, max. 30 mA, max. 50 mW.

Notes complémentaires

:::info[Exigences des entrées numériques]

- Le commun (port 18) doit être connecté à la tension de référence de la tension d'entrée (par exemple 0V / Masse de la source d'alimentation externe).
- La plage de tension des entrées numériques (ports 14 à 17) est comprise entre 5 et 30 V pour produire un niveau logique élevé ou « 1 ». Dans le cas contraire, elle produit un niveau logique bas ou « 0 ».
- Si l'une des entrées numériques est à un niveau logique élevé ou « 1 », le BactoSense entre en « mode PLC ».

:::

### 6.1.2 Sorties numériques {#section-6-1-2}

- Utilisation: 4 sorties numériques permettent de signaler 4 états logiques différents, par exemple des erreurs ou des alarmes. Comme les bornes de sortie sont la sortie d'un relais à semi-conducteurs à base de MOS (LH1540AAB), il n'y a pas de polarité. Les bornes A et B peuvent être utilisées dans les deux sens et peuvent être permutées. Les bornes A et B sont soit à haute impédance (déconnectées), soit à basse impédance (connectées).
- Spécifications: librement configurable, sortie SSR: max. 48 VDC, max. 300 mW, résistance à l'enclenchement 2 Ω.

### 6.1.3 Sorties analogiques {#section-6-1-3}

- Utilisation: 2 sorties analogiques (4 - 20 mA) permettent de rapporter deux valeurs analogiques, par exemple le nombre total de cellules et le HNAP. Note: Pour la transmission de résultats précis, l'utilisation de Modbus TCP est recommandée. Voir section [Modbus TCP](07-field-bus-interface.md#section-7-1).
- Spécifications: 2 x 0/4 - 20 mA, charge recommandée de 250 Ω

### 6.1.4 Schémas de la boîte d’E/S {#section-6-1-4}

![Illustration du manuel original, page imprimée 32](/img/manual/asset-da9ff033639d.png "width=633")

*Figure 6-1 Schémas de la boîte d’E/S.*

### 6.1.5 Vue d’ensemble de la boîte d’E/S {#section-6-1-5}

![Illustration du manuel original, page imprimée 33](/img/manual/asset-30fbce76cafa.png "width=240")

*Figure 6-2 Vue d’ensemble de la boîte d’E/S de BactoSense*

<table>

<tbody>

<tr>

<td>

①

</td>

<td>

Position des sorties numériques Bornes 1 – 8<br />Exigences en matière de<br />câble : • AWG<br />12 – 22 •<br />Section transversale : 0,25 – 2,5<br />mm2

</td>

<td>

②

</td>

<td>

Position des sorties analogiques Bornes 9 – 12<br />Exigences en matière de<br />câble : • AWG<br />12 – 22<br />• Section transversale : 0,25 – 2,5 mm2

</td>

</tr>

<tr>

<td>

③

</td>

<td>

Position des entrées numériques Bornes 14 –<br />18 Exigences en matière de<br />câble : • AWG<br />12 – 22 •<br />Section transversale : 0,25 – 2,5<br />mm2

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

### 6.1.6 Tableau de référence de la boîte d’E/S {#section-6-1-6}

*Tableau 6-1 Tableau de référence de la boîte d’E/S*

| Borne | Fonction | Couleur de la borne | Couleur du câble |
| --- | --- | --- | --- |
| 1 | Sortie numérique 1 - A | Gris | Rouge |
| 2 | Sortie numérique 1 - B | Gris | Bleu |
| 3 | Sortie numérique 2 - A | Gris | Rose |
| 4 | Sortie numérique 2 - B | Gris | Gris |
| 5 | Sortie numérique 3 - A | Gris | Jaune |
| 6 | Sortie numérique 3 - B | Gris | Vert |
| 7 | Sortie numérique 4 - A | Gris | Marron |
| 8 | Sortie numérique 4 - B | Gris | Blanc |
| 9 | Analogique 1+ mA | Orange | Noir |
| 10 | Analogique 1- mA | Bleu | Violet |
| 11 | Analogique 2+ mA | Orange | Rose-Gris |
| 12 | Analogique 2- mA | Bleu | Rouge-Bleu |
| 13 | Blindage | Vert/Jaune |  |
| 14 | Entrée numérique 1 | Gris | Blanc |
| 15 | Entrée numérique 2 | Gris | Marron |
| 16 | Entrée numérique 3 | Gris | Bleu |
| 17 | Entrée numérique 4 | Gris | Noir |
| 18 | Commun | Noir | Gris |

## 6.2 Raccordement de la boîte d’E/S {#section-6-2}

:::info[Vérifiez les raccordements d’E/S]

Consultez les spécifications techniques des sections [Entrées numériques](06-io-box.md#section-6-1-1), [Sorties numériques](06-io-box.md#section-6-1-2) et [Sorties analogiques](06-io-box.md#section-6-1-3) et les schémas de la section [Schémas de la boîte d’E/S](06-io-box.md#section-6-1-4) pour assurer une installation correcte.

:::

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Insérez les deux fiches M16 de la boîte d’E/S sur le côté droit de l’instrument. | ![Illustration de la procédure, page imprimée 35](/img/manual/asset-6a48e9fcafbe.png "width=241") |
| 2. | Retirez le couvercle du boîtier en dévissant les quatre vis (cercles). | ![Illustration de la procédure, page imprimée 35](/img/manual/asset-9f5e3eb5f1fd.png "width=225") |
| 3. | Faites passer le câble par le presse-étoupe (A, B ou C) et connectez les fils aux bornes correspondantes selon le tableau de référence de la boîte d’E/S présenté dans la section [Tableau de référence de la boîte d’E/S](06-io-box.md#section-6-1-6). | ![Illustration de la procédure, page imprimée 35](/img/manual/asset-fb6376380698.png "width=222") |
| 4. | Serrez le presse-étoupe. Essayez de tirer sur le câble pour voir si le presse-étoupe est suffisamment serré. |  |
| 5. | En option : la boîte d’E/S peut être montée sur un mur. Utilisez des vis M4 d’une longueur minimale de 20 mm. Le couvercle étant toujours retiré, placez les 4 vis et fixez le boîtier au mur. | ![Illustration de la procédure, page imprimée 35](/img/manual/asset-3e67c8d4a4e6.png "width=242") |
| 6. | Remettez le couvercle du boîtier et serrez les quatre vis pour le sceller. |  |

## 6.3 Raccordement des sorties sans boîte d’E/S {#section-6-3}

Le BactoSense expose les sorties sur un connecteur femelle M16 à 12 broches. Cependant, l’utilisation d’une boîte d’E/S est recommandée. Le brochage du connecteur est indiqué ci-dessous.

![Illustration du manuel original, page imprimée 36](/img/manual/asset-223bcd55d2e3.png "width=160")

*Figure 6-3 Vue d’ensemble du brochage du connecteur de sortie*

|  |  |  |  |
| --- | --- | --- | --- |
| A | Sortie numérique 4 - B | G | Sortie numérique 1 - B |
| B | Sortie numérique 4 - A | H | Sortie numérique 1 - A |
| C | Sortie numérique 3 - B | J | Analogique 1+ |
| D | Sortie numérique 3 - A | K | Analogique 1- |
| E | Sortie numérique 2 - B | L | Analogique 2+ |
| F | Sortie numérique 2 - A | M | Analogique 2- |

## 6.4 Raccordement des entrées sans boîte d’E/S {#section-6-4}

Le BactoSense expose les entrées sur un connecteur femelle M16 à 5 broches. L’utilisation d’une boîte d’E/S est recommandée. Le brochage du connecteur est indiqué ci-dessous.

![Illustration du manuel original, page imprimée 37](/img/manual/asset-b6ab0aef5737.png "width=120")

*Figure 6-4 Vue d’ensemble du brochage du connecteur d’entrée*

1. Entrée numérique 1
2. Entrée numérique 2
3. Entrée numérique 3
4. Entrée numérique 4
5. Commun

## 6.5 Configuration des entrées numériques et du mode PLC {#section-6-5}

L’instrument peut être contrôlé à partir d’un contrôleur logique programmable (PLC) externe. Pour éviter tout conflit lors du démarrage d’un processus, le PLC verrouille d’abord l’instrument en « Mode PLC », dans lequel l’instrument agit comme un esclave du PLC. Dans ce mode, toutes les fonctions de l’interface utilisateur liées à l’exécution des protocoles et autres processus sont bloquées. Une fois en mode PLC, les protocoles peuvent être démarrés et arrêtés par le PLC en utilisant les entrées numériques de l’instrument. Les sorties numériques fournissent ensuite des retours au PLC pour garantir un fonctionnement sécurisé.

Le mode PLC est un mode en ligne contrôlé à distance : le PLC peut demander une mesure unique ou démarrer le minuteur pour exécuter des protocoles à des intervalles prédéfinis. Les mesures démarrées par le PLC apparaissent également dans les résultats du mode en ligne.

Lorsqu’aucun fil n’est connecté aux entrées numériques, leur état est 0000.

*Tableau 6-2 Vue d’ensemble des états des entrées numériques et des fonctions associées*

<table>

<tbody>

<tr>

<th rowSpan="2">

DESCRIPTION

</th>

<th colSpan="4">

ENTRÉES NUMÉRIQUES

</th>

</tr>

<tr>

<td>

1

</td>

<td>

2

</td>

<td>

3

</td>

<td>

4

</td>

</tr>

<tr>

<td>

Forcer le mode PLC : L’instrument est inactif, mais esclave<br />du PLC.

</td>

<td>

1

</td>

<td>

0

</td>

<td>

0

</td>

<td>

0

</td>

</tr>

<tr>

<td>

Exécuter un protocole/intervalle de mesure configurable

</td>

<td>

1

</td>

<td>

0

</td>

<td>

0

</td>

<td>

1

</td>

</tr>

<tr>

<td>

Exécuter un protocole/intervalle de mesure configurable

</td>

<td>

1

</td>

<td>

0

</td>

<td>

1

</td>

<td>

0

</td>

</tr>

<tr>

<td>

Exécuter un protocole/intervalle de mesure configurable

</td>

<td>

1

</td>

<td>

0

</td>

<td>

1

</td>

<td>

1

</td>

</tr>

<tr>

<td>

Exécuter un protocole/intervalle de mesure configurable

</td>

<td>

1

</td>

<td>

1

</td>

<td>

0

</td>

<td>

0

</td>

</tr>

<tr>

<td>

Exécuter un protocole/intervalle de mesure configurable

</td>

<td>

1

</td>

<td>

1

</td>

<td>

0

</td>

<td>

1

</td>

</tr>

<tr>

<td>

Exécuter un protocole/intervalle de mesure configurable

</td>

<td>

1

</td>

<td>

1

</td>

<td>

1

</td>

<td>

0

</td>

</tr>

<tr>

<td>

Abandonner le protocole en cours

</td>

<td>

1

</td>

<td>

1

</td>

<td>

1

</td>

<td>

1

</td>

</tr>

<tr>

<td>

Mode esclave désactivé. Fin du mode PLC.

</td>

<td>

0

</td>

<td>

0

</td>

<td>

0

</td>

<td>

0

</td>

</tr>

</tbody>

</table>

Pour exécuter un protocole plusieurs fois, utilisez l’option de planification ou déclenchez une nouvelle mesure à partir du PLC en remettant l’état des entrées à 1000, puis en revenant à l’état « Exécution » correspondant.

![BactoSense — Configuration des entrées numériques](/img/gui/fr/digital-input-configuration.png "width=532")

*Figure 6-5 Configuration des entrées numériques*

<table className="manual-digital-input-config">

<colgroup>

<col className="di-config-step-column" />

<col className="di-config-description-column" />

<col className="di-config-marker-column" />

<col className="di-config-detail-column" />

</colgroup>

<tbody>

<tr>

<td>

1

</td>

<td>

Activez ou désactiver les entrées numériques. Si elles sont désactivées, le mode PLC ne sera jamais actif.

</td>

<td>

2

</td>

<td>

Paramètres du protocole : Nom, Protocole et Fenêtres.

</td>

</tr>

<tr>

<td>

3

</td>

<td>

Sélectionnez l’état des entrées que vous souhaitez configurer. Lorsque l’état sélectionné à (3) est appliqué aux entrées numériques (DI), le protocole défini à (2), (4) et (5) sera exécuté.

</td>

<td>

4

</td>

<td>

Si activé, démarrez le protocole immédiatement après le changement d’état des entrées. Sinon, attendez la durée de l’intervalle du minuteur avant de démarrer.

</td>

</tr>

<tr>

<td>

5

</td>

<td>

Paramètres du minuteur : si le minuteur est activé, le protocole sera répété à l’intervalle sélectionné, jusqu’à ce que l’état des entrées soit modifié. Si le minuteur est désactivé, le protocole ne s’exécutera qu’une seule fois.

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

Pour configurer les états des entrées numériques configurables, suivez ces étapes :

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Sur l’écran d’accueil, appuyez sur Paramètres. |  |
| 2. | Appuyez sur le bouton Paramètres mode en ligne. |  |
| 3. | Appuyez sur le bouton Entrées numériques. |  |
| 4. | Assurez-vous que le bouton bascule est réglé sur Activé. |  |
| 5. | Activez et sélectionnez l’état que vous souhaitez configurer dans la Liste entrées, entrez un nom pour l’échantillon, choisissez un protocole et sélectionnez une fenêtre. |  |
| 6. | Si vous souhaitez que le protocole se répète automatiquement, cochez la case «Utiliser le planificateur» et choisissez un intervalle. |  |
| 7. | Dans le cas ci-dessus, choisissez si vous souhaitez que le protocole s’exécute immédiatement ou à la fin du premier intervalle en cochant la case «Démarrage immédiat». | Cette option n’est utile que si le minuteur est activé. |
| 8. | Appuyez sur le bouton Enregistrer. |  |

## 6.6 Configuration des sorties numériques {#section-6-6}

Les valeurs des sorties numériques sont modifiées dans les situations suivantes :

- Lorsque l’instrument est hors tension, toutes les sorties sont mises à 0.
- Lorsque l’instrument est sous tension, les sorties indiquent l’état d’erreur actuel : aucune/ critique/non-critique.
- À la fin d’une mesure en mode en ligne, les sorties sont modifiées pour indiquer les erreurs et les alarmes, selon les paramètres définis par l’utilisateur.
- Lorsque l’on clique sur Remise à zéro sur l’écran de test de sortie ou lorsque l’on appuie sur Enregistrer sur les paramètres de sortie numérique, les sorties sont mises à jour pour afficher uniquement l’état d’erreur (les alarmes sont ignorées).
- Après avoir effacé manuellement les erreurs, les sorties sont automatiquement réinitialisées (et affichent donc le nouvel état d’erreur et aucune alarme).
- À des moments précis de la mesure, des signaux supplémentaires peuvent être relayés. Par défaut, aucun de ces signaux n’est relayé vers les sorties. Ces signaux sont :

  - Processus en cours. Active lorsqu’un protocole est en cours d’exécution.

  - Dispositif d’échantillonnage utilisé. Active lorsque le dispositif d’échantillonnage est utilisé. Elle redevient inactive après l’étape de préparation de l’échantillon des protocoles de mesure.

  - Cartouche presque vide. Active lorsque le niveau de la cartouche est inférieur à 15 %, ou si la cartouche devrait être vide dans le mois selon la fréquence de mesure actuelle.

  - Cartouche périmée. Active lorsque la cartouche est périmée.

L’état des sorties numériques à la fin d’une mesure est défini selon ces valeurs par défaut, qui peuvent être modifiées dans les paramètres :

- S’il n’y a ni erreurs ni alarmes, tous les terminaux sont réglés sur l’état de base défini par l’utilisateur. Par défaut, c’est 1 partout.
- En cas d’erreur critique, la première sortie est réglée sur 0.
- Les erreurs non critiques règlent la deuxième sortie sur 0.
- Les alarmes règlent la troisième et la quatrième sortie sur 0.
- En cas de conflit dans les réglages des sorties, la priorité est donnée aux :

  1. Erreurs critiques

  2. Erreurs non critiques

  3. États de la cartouche

  4. Alarme

:::info[Accès Admin requis]

Seuls les utilisateurs Admin peuvent modifier les paramètres de sortie, car ceux-ci peuvent avoir des effets critiques sur les systèmes PLC externes.

:::

La procédure suivante décrit comment régler les sorties numériques.

<table>

<tbody>

<tr>

<th>

</th>

<th>

OPÉRATION

</th>

<th>

INFORMATIONS SUPPLÉMENTAIRES/IMAGE

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

Sur l’écran d’accueil, appuyez sur Paramètres.

</td>

<td>

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Appuyez sur le bouton Paramètres mode en ligne.

</td>

<td>

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Appuyez sur le bouton Sorties numériques.

</td>

<td>

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Définissez l’état des sorties 1–4 dans la ligne **Etat initial** lorsqu’aucune erreur ni alarme n’est active.

</td>

<td>

1 : L’interrupteur est fermé. 0 : L’interrupteur est ouvert.

![BactoSense — Sorties numériques : commandes de l’état initial](/img/gui/fr/digital-output-base-state.png "width=280")

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Définissez la réaction de chaque sortie dans la ligne **Erreur critique**.

</td>

<td>

Par défaut, une erreur critique ouvre la sortie 1. 1 : L’interrupteur est fermé. 0 : L’interrupteur est ouvert. / : L’interrupteur n’est pas affecté par cette erreur.

![BactoSense — Sorties numériques : commandes des erreurs critiques](/img/gui/fr/digital-output-critical-error.png "width=280")

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Définissez la réaction de chaque sortie dans la ligne **Erreur non-critique**.

</td>

<td>

Par défaut, une erreur non critique ouvre la sortie 2.

![BactoSense — Sorties numériques : commandes des erreurs non critiques](/img/gui/fr/digital-output-noncritical-error.png "width=280")

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

Attribuez chaque alarme activée aux sorties requises dans sa ligne d’alarme.

</td>

<td>

Vous ne pouvez attribuer que des alarmes activées. Vous pouvez attribuer plusieurs alarmes à la même sortie.

Exemples de lignes d’alarme : High TCC (en haut), High HNAP (en bas).

![BactoSense — Sorties numériques : affectation des alarmes activées](/img/gui/fr/digital-output-alarm-assignment.png "width=280")

</td>

</tr>

<tr>

<td>

8\.

</td>

<td>

Appuyez sur le bouton Enregistrer.

</td>

<td>

</td>

</tr>

</tbody>

</table>

## 6.7 Configuration des sorties analogiques {#section-6-7}

La sortie de courant analogique change dans les situations suivantes :

- Lorsque l’instrument est éteint, les deux sorties sont réglées sur 0 mA.
- Lorsque l’instrument est allumé, les deux sorties sont réglées sur 2 mA.
- Lorsqu’une mesure en mode en ligne se termine après le comptage des cellules, la valeur est réglée entre 4 et 20 mA selon la plage et la source définies dans les paramètres de sortie analogique. Si la mesure échoue en raison d’une erreur avant le début du comptage, la sortie conserve sa valeur précédente.
- Lorsqu’un utilisateur teste manuellement la sortie, le courant prend la valeur choisie. Le bouton de réinitialisation règle les sorties sur 4 mA.

:::info[Valeurs de sortie précises]

Pour transmettre des résultats précis, il est recommandé d’utiliser Modbus TCP. Voir section [Modbus TCP](07-field-bus-interface.md#section-7-1)

Seuls les utilisateurs **Admin** peuvent modifier les sorties analogiques 4 .. 20 mA.

:::

![BactoSense — Configuration des sorties analogiques](/img/gui/fr/analog-output-configuration.png "width=553")

*Figure 6-6 Paramètres des sorties analogiques*

<table>

<tbody>

<tr>

<td>

1

</td>

<td>

Sélection du port de sortie

</td>

<td>

2

</td>

<td>

Source : Définit quel résultat de<br />mesure est transmis par ce port de<br />sortie.

</td>

</tr>

<tr>

<td>

3

</td>

<td>

Limite inférieure 4 mA: Quelle valeur<br />du résultat de mesure doit<br />correspondre à 4 mA.

</td>

<td>

4

</td>

<td>

Limite supérieure 20 mA : Quelle<br />valeur du résultat de mesure doit<br />correspondre à 20 mA.

</td>

</tr>

<tr>

<td>

5

</td>

<td>

Si cette option est sélectionnée, interpole la plage de comptage cellulaire choisie selon une échelle logarithmique, comme suit<br />: `ratio = 1 + 9 × (counts − low) / (high − low)`<br />`output = 4 mA + log<sub>10</sub>(ratio) × 16 mA`<br /><br />counts: Nombre de cellules mesuré<br />low: Limite inférieure du nombre de cellules<br />high: Limite supérieure du nombre de cellules<br />output: Intensité du courant en mA

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

La procédure suivante décrit le réglage des sorties analogiques.

<div className="manual-output-steps-scroll">

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Sur l’écran d’accueil, appuyez sur Paramètres. |  |
| 2. | Appuyez sur le bouton Paramètres mode en ligne. |  |
| 3. | Appuyez sur le bouton Sorties analogiques. |  |
| 4. | Choisissez Port 1 ou Port 2 (figure 6-6) |  |
| 5. | Choisissez la source (figure 6-6, position 2). |  |
| 6. | Définissez la limite inférieure de la plage (figure 6-6, position 3). | Lorsque la source est égale à cette valeur, 4 mA seront émis sur le port sélectionné. |
| 7. | Définissez la limite supérieure de la plage (figure 6-6, position 4). | Lorsque la source est égale à cette valeur, 20 mA seront émis sur le port sélectionné. |
| 8. | Appuyez sur le bouton Enregistrer. |  |

</div>

## 6.8 Test des sorties numériques et analogiques {#section-6-8}

Connectez-vous en tant qu’Admin et utilisez Test des sorties lorsque l’instrument est au repos, avec le mode PLC désactivé.

:::caution[Évitez les alarmes involontaires]

L’interface Test des sorties permet de générer un signal de sortie physique à des fins de test. Assurez-vous que ces tests ne déclenchent pas d’alarme sur votre système de commande.

:::

![BactoSense — Test des sorties](/img/gui/fr/output-test-controls.png "width=523")

*Figure 6-7 Test des sorties analogiques et numériques*

<table>

<tbody>

<tr>

<td>

1

</td>

<td>

Définissez l’état des sorties numériques pour le<br />test.

</td>

<td>

2

</td>

<td>

Réglez les sorties numériques sur l’état<br />défini en (1).

</td>

</tr>

<tr>

<td>

3

</td>

<td>

Réglez toutes les sorties numériques et<br />analogiques en même temps.

</td>

<td>

4

</td>

<td>

Réglez le courant sur les deux<br />sorties analogiques.

</td>

</tr>

<tr>

<td>

5

</td>

<td>

Réinitialisez les sorties à leur état avant<br />les tests.

</td>

<td>

6

</td>

<td>

Réglez le courant sur le port 2.

</td>

</tr>

<tr>

<td>

7

</td>

<td>

Réglez le courant sur le port 1.

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

La procédure suivante décrit le test des sorties analogiques et numériques.

<div className="manual-output-steps-scroll">

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Sur l’écran d’accueil, appuyez sur Paramètres. |  |
| 2. | Appuyez sur le bouton Paramètres mode en ligne. |  |
| 3. | Appuyez sur le bouton Test sorties. |  |
| 4. | Saisissez les valeurs de test que vous souhaitez envoyer au PLC. | Pour les sorties numériques : 1: L’interrupteur est fermé. 0: L’interrupteur est ouvert. |
| 5. | Les tests peuvent être déclenchés individuellement ou ensemble (voir figure 6-7) : • Tester uniquement les sorties numériques sur les bornes 1- 4. • Tester uniquement les sorties analogiques sur les ports 1, 2 ou les deux. • Tester toutes les sorties. | Les signaux de sortie peuvent être mesurés sur les bornes. |
| 6. | Appuyez sur le bouton Remise à zéro. |  |

</div>
