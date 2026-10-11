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

Un **admin** doit d’abord activer l’accès web HTTP ou HTTPS sous **Paramètres → Paramètres système → Services système**, valider les modifications et redémarrer l’instrument lorsqu’il y est invité. Les services et leurs ports sont décrits dans [Récupération de fichiers via HTTP ou HTTPS](12-data-access-and-export.md#section-12-3).

<div className="manual-narrow-details-scroll">

<table className="manual-table manual-narrow-details manual-narrow-details-split">

<colgroup>
<col className="procedure-step-column" />
<col className="procedure-instruction-column" />
<col className="procedure-detail-column" />
<col className="procedure-detail-column" />
</colgroup>

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

Sur l’écran d’accueil de l’interface utilisateur du BactoSense, appuyez sur **Paramètres**, puis sur **Infos système**.

</td>

<td>

![BactoSense — Bouton Paramètres](/img/gui/fr/home-settings-button.png "width=57 class=manual-icon-settings-button-half")

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

Relevez l’adresse IP du BactoSense affichée sur la page **Infos système**.

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

Saisissez `http://<adresse IP>` ou `https://<adresse IP>` dans la barre d’adresse, selon le service activé. Ajoutez `:<port>` si le port diffère du port par défaut, puis appuyez sur Entrée.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Sur la page de connexion, utilisez le même nom d’utilisateur et le même mot de passe que sur le BactoSense, puis appuyez sur **Connexion**.

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

</div>

## 13.3 Page de démarrage en mode manuel {#section-13-3}

![BactoSense — Tableau de bord Web](/img/gui/fr/web-dashboard.png "width=654 class=manual-figure")

*Figure 13-1 Page de démarrage sur l’interface utilisateur web*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Menu | 2 | État de l’instrument |
| 3 | Tableau de bord avec les derniers résultats | 4 | Langue : Menu déroulant permettant de changer la langue |
| 5 | Menu utilisateur : déconnexion ; les comptes admin et de service peuvent aussi redémarrer le BactoSense | 6 | Progression de la mesure actuelle |

## 13.4 Téléchargement d’un fichier FCS {#section-13-4}

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Sur l’interface web, sélectionnez la page Résultats dans le panneau de navigation à gauche. |  |
| 2. | Trouvez la mesure dans le tableau de résultats approprié sous le graphique. Si nécessaire, faites défiler horizontalement jusqu’aux liens à droite de sa ligne. |  |
| 3. | Cliquez sur le lien **fcs** (position X). | ![BactoSense — Lien de téléchargement FCS](/img/gui/fr/web-fcs-download.png "width=271 class=manual-figure") |
| 4. | Attendez la fin du téléchargement. |  |

## 13.5 Téléchargement d’un fichier ZIP contenant plusieurs résultats {#section-13-5}

Les résultats de plusieurs mesures peuvent être téléchargés sous forme de fichier ZIP. Ce fichier ZIP inclut le fichier FCS et des graphiques récapitulatifs de chaque mesure.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Sur l’interface web, sélectionnez la page Résultats dans le panneau de navigation à gauche. |  |
| 2. | Trouvez le tableau **Résultats du mode en ligne** ou **Résultats du mode manuel** correspondant aux mesures souhaitées. |  |
| 3. | Sélectionnez la plage de dates de ce tableau et cliquez sur **Télécharger ZIP**. Une barre de progression apparaît en haut du navigateur jusqu’au début du téléchargement du ZIP. | ![BactoSense — Téléchargement ZIP](/img/gui/fr/web-zip-download.png "width=282 class=manual-figure") |
| 4. | Attendez la fin du téléchargement. |  |

## 13.6 Téléchargement de tous les résultats aux formats CSV, XLSX ou PDF {#section-13-6}
La liste de tous les résultats peut être téléchargée depuis l’interface web au format Excel XLSX, CSV ou PDF. Les résultats du mode en ligne, du mode manuel et de la validation de l’instrument sont téléchargés séparément.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Sur l’interface web, sélectionnez la page Résultats dans le panneau de navigation à gauche. |  |
| 2. | Trouvez la section **TÉLÉCHARGEMENT** sous le graphique des résultats et choisissez la ligne du mode de mesure souhaité ou de la validation de l’instrument. |  |
| 3. | Cliquez sur **Télécharger XLSX**, **Télécharger CSV** ou **Télécharger PDF** dans cette ligne pour lancer le téléchargement. | ![BactoSense — Formats de téléchargement des résultats](/img/gui/fr/web-results-download-formats.png "width=282 class=manual-figure") |
| 4. | Attendez la fin du téléchargement. |  |

## 13.7 Animation de l’évolution des dotplots {#section-13-7}

L’interface web peut animer les nuages de points du mode en ligne afin de visualiser l’évolution des mesures. Cette fonction affiche des images fixes en succession rapide ; l’animation peut être exportée avec le bouton Télécharger GIF.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Sur l’interface web, sélectionnez la page Graphiques dans le panneau de navigation à gauche. | ![BactoSense — Navigation vers Graphiques](/img/gui/fr/web-plots-navigation.png "width=283 class=manual-figure") |
| 2. | Utilisez les flèches précédente et suivante ou le curseur pour sélectionner une mesure à partir de son horodatage. | ![BactoSense — Sélection de l’horodatage du graphique](/img/gui/fr/web-plots-measurement-time.png "width=283 class=manual-figure") |
| 3. | Appuyez sur le bouton Lecture triangulaire pour démarrer l’animation. Appuyez de nouveau pour la mettre en pause. | ![BactoSense — Commandes de lecture des graphiques](/img/gui/fr/web-plots-play.png "width=283 class=manual-figure") |
| 4. | Réglez **Vitesse d'animation** sur le nombre positif souhaité de graphiques par seconde. |  |
| 5. | Appuyez sur **Télécharger GIF** pour exporter jusqu’à 60 des graphiques les plus récents du mode en ligne à la vitesse choisie. L’export utilise les derniers graphiques, quelle que soit la position du curseur. |  |

## 13.8 Modification de l’intervalle de mesure {#section-13-8}
L’intervalle utilisé pour les mesures en mode en ligne peut être modifié depuis l’interface web.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Sur l’interface web, sélectionnez la page Réglages dans le panneau de navigation à gauche. | ![BactoSense — Intervalle de mesure](/img/gui/fr/web-measurement-interval.png "width=283 class=manual-figure") |
| 2. | Saisissez un intervalle de 30 à 360 minutes dans **Intervalle de mesure [minutes]**. |  |
| 3. | Cliquez sur **SAVE** pour appliquer l’intervalle. |  |

## 13.9 Prise de captures d’écran de la GUI {#section-13-9}

Prenez des captures d’écran de la GUI de BactoSense à partir de l’interface web :

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Sur l’interface web, sélectionnez la page Informations Système dans le panneau de navigation à gauche. | ![BactoSense — Navigation vers les informations système Web](/img/gui/fr/web-system-info-navigation.png "width=284 class=manual-figure") |
| 2. | Appuyez sur **Prendre une capture d'écran** au bas de la page. |  |
| 3. | La capture d’écran s’affiche en dessous. |  |

## 13.10 Redémarrage à partir de l’interface utilisateur web {#section-13-10}
Un **admin** ou un compte de service peut redémarrer le BactoSense depuis l’interface web en suivant la procédure ci-dessous.

:::info[Mise en marche à distance indisponible]

L’instrument ne peut pas être allumé à distance.

:::

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Dans le coin supérieur droit de l’interface web, cliquez sur le nom d’utilisateur pour ouvrir le menu utilisateur. | ![BactoSense — Menu utilisateur de redémarrage](/img/gui/fr/web-user-reboot-menu.png "width=284 class=manual-figure") |
| 2. | Sélectionnez **Redémarrer**, puis cliquez sur **Redémarrer** dans la boîte de confirmation. |  |
| 3. | Attendez le redémarrage de l’instrument, rechargez l’interface web et reconnectez-vous si vous y êtes invité. |  |
