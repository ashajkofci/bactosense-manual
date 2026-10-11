---
title: "13. Interface utilisateur web"
sidebar_label: "13. Interface utilisateur web"
sidebar_position: 13
slug: /web-user-interface
---

## 13.1 Informations générales {#section-13-1}

- L’interface web permet aux utilisateurs de parcourir et d’exporter des résultats et d’autres données depuis un ordinateur distant, ainsi que de surveiller l’état de l’instrument (processus actif, niveau de cartouche, alertes, etc.).
- Le BactoSense doit être connecté au même réseau que l’ordinateur qui accède à l’interface web.
- L’interface web peut être chargée sur n’importe quel navigateur sur un ordinateur de bureau ou un appareil mobile.
- Veillez à la sécurité des données et du réseau en prenant toutes les mesures habituelles.

## 13.2 Connexion à l’interface utilisateur web {#section-13-2}

<table className="manual-table">

<tbody>

<tr>

<th scope="col">

</th>

<th scope="col">

OPÉRATION

</th>

<th scope="col" colSpan="2">

INFORMATIONS SUPPLÉMENTAIRES/IMAGE

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

Connectez le BactoSense via Ethernet à un réseau sécurisé (par exemple, un réseau local). Connectez votre appareil (par exemple un ordinateur ou une tablette) au même réseau.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Sur l’écran d’accueil de l’interface utilisateur de BactoSense, appuyez sur Paramètres, puis sur Infos système.

</td>

<td>

![BactoSense — Bouton d’accueil](/img/gui/icons/home-button.png "width=48 class=manual-icon")

</td>

<td>

![BactoSense — Informations système](/img/gui/icons/system-info-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Récupérez l’adresse IP du BactoSense affichée sur la page Infos système.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Ouvrez un navigateur web sur votre appareil.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Saisissez l’adresse IP du BactoSense dans la barre d’adresse et appuyez sur Entrée.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Sur la page de connexion, utilisez le même nom d’utilisateur et le même mot de passe que pour le BactoSense et appuyez sur Connexion.

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

## 13.3 Page de démarrage en mode manuel {#section-13-3}

![BactoSense — Tableau de bord Web](/img/gui/fr/web-dashboard.png "width=654 class=manual-figure")

*Figure 13-1 Page de démarrage sur l’interface utilisateur web*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Menu | 2 | État de l’instrument |
| 3 | Tableau de bord avec les derniers résultats | 4 | Langue : Menu déroulant permettant de changer la langue |
| 5 | Déconnexion de l’interface web et redémarrage des options du BactoSense | 6 | Progression de la mesure actuelle |

## 13.4 Téléchargement d’un fichier FCS {#section-13-4}

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Sur l’interface web, sélectionnez la page Résultats dans le panneau de navigation à gauche. |  |
| 2. | Naviguez jusqu’au résultat que vous souhaitez exporter. |  |
| 3. | Cliquez sur le lien fcs (Position X). | ![BactoSense — Lien de téléchargement FCS](/img/gui/fr/web-fcs-download.png "width=271 class=manual-figure") |
| 4. | Attendez la fin du téléchargement. |  |

## 13.5 Téléchargement d’un fichier ZIP contenant plusieurs résultats {#section-13-5}

Les résultats de plusieurs mesures peuvent être téléchargés sous forme de fichier ZIP. Ce fichier ZIP inclut le fichier FCS et des graphiques récapitulatifs de chaque mesure.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Sur l’interface web, sélectionnez la page Résultats dans le panneau de navigation à gauche. |  |
| 2. | Retrouvez les résultats pour le mode qui vous intéresse : résultats du mode en ligne ou du mode manuel. |  |
| 3. | Sélectionnez la plage de dates souhaitée et cliquez sur Télécharger ZIP. Une barre de progression s’affiche en haut du navigateur jusqu’à ce que le téléchargement du fichier ZIP commence. | ![BactoSense — Téléchargement ZIP](/img/gui/fr/web-zip-download.png "width=282 class=manual-figure") |
| 4. | Attendez la fin du téléchargement. |  |

## 13.6 Téléchargement de tous les résultats aux formats CSV, XLSX ou PDF {#section-13-6}

La liste de tous les résultats peut être téléchargée à partir de l’interface web au format Excel XLSX, CSV ou PDF. Les résultats du mode en ligne sont séparés de ceux du mode manuel.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Sur l’interface web, sélectionnez la page Résultats dans le panneau de navigation à gauche. |  |
| 2. | Repérez la section TÉLÉCHARGEMENT sous le graphique des résultats. |  |
| 3. | Cliquez sur le fichier souhaité (XLSX, csv ou PDF) pour lancer le téléchargement. | ![BactoSense — Formats de téléchargement des résultats](/img/gui/fr/web-results-download-formats.png "width=282 class=manual-figure") |
| 4. | Attendez la fin du téléchargement. |  |

## 13.7 Animation de l’évolution des dotplots {#section-13-7}

L’interface web peut animer les nuages de points du mode en ligne afin de visualiser l’évolution des mesures. Cette fonction affiche des images fixes en succession rapide ; l’animation peut être exportée avec le bouton Télécharger GIF.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Sur l’interface web, sélectionnez la page Graphiques dans le panneau de navigation à gauche. | ![BactoSense — Navigation vers Graphiques](/img/gui/fr/web-plots-navigation.png "width=283 class=manual-figure") |
| 2. | Utilisez les flèches précédente et suivante ou le curseur pour centrer le curseur sur la plage de dates souhaitée. | ![BactoSense — Plage de dates des graphiques](/img/gui/fr/web-plots-date-range.png "width=283 class=manual-figure") |
| 3. | Appuyez sur le bouton Lecture pour démarrer l’animation. | ![BactoSense — Commandes de lecture des graphiques](/img/gui/fr/web-plots-play.png "width=283 class=manual-figure") |
| 4. | Ajustez la vitesse d’animation si nécessaire à l’aide du champ de vitesse d’animation. |  |
| 5. | L’animation peut être téléchargée au format GIF en cliquant sur le bouton Télécharger GIF. |  |

## 13.8 Modification de l’intervalle de mesure {#section-13-8}

Si l’instrument est en mode en ligne, l’intervalle de mesure peut être modifié depuis l’interface web.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Sur l’interface web, sélectionnez la page Réglages dans le panneau de navigation à gauche. | ![BactoSense — Intervalle de mesure](/img/gui/fr/web-measurement-interval.png "width=283 class=manual-figure") |
| 2. | Modifiez la durée de l’intervalle de mesure. |  |
| 3. | Cliquez sur SAVE pour confirmer. |  |

## 13.9 Prise de captures d’écran de la GUI {#section-13-9}

Prenez des captures d’écran de la GUI de BactoSense à partir de l’interface web :

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Sur l’interface web, sélectionnez la page Informations Système dans le panneau de navigation à gauche. | ![BactoSense — Navigation vers les informations système Web](/img/gui/fr/web-system-info-navigation.png "width=284 class=manual-figure") |
| 2. | Appuyez sur le bouton Capturer écran au bas de la page. |  |
| 3. | La capture d’écran s’affiche en dessous. |  |

## 13.10 Redémarrage à partir de l’interface utilisateur web {#section-13-10}

Le BactoSense peut être redémarré à partir de l’interface web en suivant la procédure ci-dessous.

:::info[Mise en marche à distance indisponible]

L’instrument ne peut pas être allumé à distance.

:::

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Dans le coin supérieur droit de l’interface web, cliquez sur le nom d’utilisateur pour ouvrir le menu utilisateur. | ![BactoSense — Menu utilisateur de redémarrage](/img/gui/fr/web-user-reboot-menu.png "width=284 class=manual-figure") |
| 2. | Sélectionnez Redémarrer et confirmez la demande. |  |
| 3. | L’instrument redémarre et une nouvelle connexion est requise. |  |
