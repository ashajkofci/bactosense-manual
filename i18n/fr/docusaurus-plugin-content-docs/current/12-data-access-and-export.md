---
title: "12. Accès aux données et exportation"
sidebar_label: "12. Accès aux données et exportation"
sidebar_position: 12
slug: /data-access-and-export
---

## 12.1 Exportation des données vers un périphérique USB {#section-12-1}

Pour exporter les données de mesure, reportez-vous à la section [Exportation vers une clé USB](10-measurements.md#section-10-8-1)

### 12.1.1 Exportation des paramètres, des diagnostics ou de toutes les données vers un périphérique USB {#section-12-1-1}

La fonction « Exportation/importation spéciale » permet aux utilisateurs d’exporter soit toutes les données de mesure de l’instrument, soit uniquement les données de diagnostic pouvant être interprétées par les techniciens d’entretien.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | En tant qu’utilisateur Advanced ou Admin, sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres. |  |
| 2. | Appuyez sur le bouton Maintenance. Appuyez sur le bouton Exportation importation spéciales. |  |
| 3. | Connectez un périphérique de stockage USB de masse. La clé USB doit être formatée en FAT32. Si nécessaire, appuyez sur le bouton Rafraîchir liste USB jusqu’à ce que le périphérique s’affiche. |  |
| 4. | Le nom du dossier qui sera créé sur la clé USB s’affiche dans le champ Nom du dossier. Saisissez un nouveau nom de dossier si vous le souhaitez. | ![BactoSense — Importation et exportation USB](/img/gui/fr/usb-import-and-export.png "width=261 class=manual-figure") |
| 5. | • Pour exporter toutes les données, appuyez sur le bouton Exporter<br/>tout. • Pour exporter uniquement les données de diagnostic, appuyez sur le bouton Exporter<br/>diagnostiques. • Pour exporter les paramètres, appuyez sur le bouton Exporter diagnostiques. Ne retirez pas le périphérique de stockage USB de masse pendant le transfert des données. | L’exportation de toutes les données peut prendre plusieurs heures. Si la capacité de stockage disponible sur le périphérique USB de masse est insuffisante, une notification s’affiche. |
| 6. | Une fois l’exportation terminée, appuyez sur le bouton OK et retirez le périphérique USB. |  |

## 12.2 Récupération des données via FTP {#section-12-2}

Les données BactoSense peuvent être consultées à distance à l’aide du protocole FTP (RFC 3659).

- L’authentification FTP utilise les paires nom d’utilisateur/mot de passe de l’interface graphique de l’instrument. Les noms de compte par défaut sont : basic, advanced et admin.
- Les fichiers CSV et Excel sont générés à la volée et contiennent donc toujours les dernières données de mesure.

![BactoSense — Services système](/img/gui/fr/system-services.png "width=559 class=manual-figure")

*Figure 12-1 La vue Gestion des services de l’interface utilisateur de BactoSense.*

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | • Installez un client FTP sur l’appareil que vous souhaitez utiliser pour récupérer des données, par exemple votre<br/>ordinateur portable. • Vous pouvez également utiliser l’explorateur de fichiers Windows. |  |
| 2. | Connectez le BactoSense via Ethernet à un réseau sécurisé (par exemple, un réseau local). Connectez votre appareil au même réseau. | Pour plus d’informations sur les configurations réseau (adresses IP statiques et dynamiques), reportez-vous à la section [Configuration du réseau](08-general-operations-and-configurations.md#section-8-6). |
| 3. | En tant qu’utilisateur Admin, sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres. |  |
| 4. | Appuyez sur le bouton Paramètres système. |  |
| 5. | Appuyez sur le bouton Services système. |  |
| 6. | Assurez-vous que la case Activer partage FTP est cochée. |  |
| 7. | Choisissez un port pour le serveur FTP. | Le port par défaut est le port 21. |
| 8. | Appuyez sur Valider les modifications pour enregistrer les modifications. Si un redémarrage est demandé, appuyez sur Redémarrer maintenant. | Nécessaire uniquement si vous avez modifié la configuration. |
| 9. | Sur l’écran d’accueil, appuyez sur Paramètres, puis sur Infos système pour obtenir l’adresse IP du BactoSense. | Pour plus d’informations sur les configurations réseau (adresses IP statiques et dynamiques), reportez-vous à la section [Configuration du réseau](08-general-operations-and-configurations.md#section-8-6). |
| 10. | Pour le client FTP : Ouvrez le client et saisissez les informations de connexion. Pour l’explorateur de fichiers Windows : Saisissez l’adresse suivante dans la barre d’adresse : ftp://user:password@ip:port | • Utilisateur/nom d’utilisateur : Nom d’utilisateur pour se connecter au BactoSense<br/>• Mot de passe : Mot de passe pour se connecter<br/>au BactoSense • Hôte/IP : Adresse IP du<br/>BactoSense • Port : Port configuré dans la vue Services système (voir figure 12-1) |

## 12.3 Récupération des fichiers via HTTP ou HTTPS {#section-12-3}

Les serveurs HTTP et HTTPS sont activés par défaut et accessibles via un navigateur web ou toute bibliothèque de requêtes HTTP. Utilisez la procédure suivante pour récupérer des fichiers spécifiques via HTTP ou HTTPS. Vous pouvez également utiliser l’interface web (chapitre [Interface utilisateur web](13-web-user-interface.md)) ou le FTP (section [Récupération des données via FTP](12-data-access-and-export.md#section-12-2)).

<table className="manual-table manual-http-retrieval">
<colgroup>
<col className="http-step-column" />
<col className="http-instruction-column" />
<col className="http-detail-column" />
</colgroup>

<thead>

<tr>

<th scope="col">



</th>

<th scope="col">

OPÉRATION

</th>

<th scope="col">

INFORMATIONS SUPPLÉMENTAIRES/IMAGE

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

1\.

</td>

<td>

Connectez le BactoSense via Ethernet à un réseau sécurisé (par exemple, un réseau local). Connectez votre appareil au même réseau.

</td>

<td>

Pour plus d’informations sur les configurations réseau (adresses IP statiques et dynamiques), reportez-vous à la section [Configuration du réseau](08-general-operations-and-configurations.md#section-8-6).

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

En tant qu’utilisateur Admin, sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres.

</td>

<td>



</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Appuyez sur le bouton Paramètres système.

</td>

<td>



</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Appuyez sur le bouton Services système.

</td>

<td>



</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Pour HTTP : Assurez-vous que la case Activer accès web HTTP est cochée. Pour HTTPS : Assurez-vous que la case Activer l'accès web HTTPS est cochée.

</td>

<td>



</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Choisissez un port pour le serveur HTTP ou HTTPS.

</td>

<td>

Le port par défaut pour HTTP est 80. Le port par défaut pour HTTPS est 443.

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

Appuyez sur Valider les modifications pour enregistrer les modifications. Si un redémarrage est demandé, appuyez sur Redémarrer maintenant.

</td>

<td>

Nécessaire uniquement si vous avez modifié la configuration.

</td>

</tr>

<tr>

<td>

8\.

</td>

<td>

Sur l’écran d’accueil, appuyez sur Paramètres, puis sur Infos système pour obtenir l’adresse IP du BactoSense.

</td>

<td>

</td>

</tr>

<tr>

<td>

9\.

</td>

<td colSpan="2">

Ouvrez un navigateur web et saisissez l’adresse du fichier souhaité dans la barre d’adresse. L’adresse du fichier a la forme suivante. Pour HTTP : `http://ipaddress:port/export/filename.extension?hash=myhash` Exemple : http://192.168.1.2/export/history_auto.xlsx?hash=QWRtaW46MTExMQ Pour HTTPS : `https://ipaddress:port/export/filename.extension?hash=myhash` Exemple : https://192.168.1.2/export/history_auto.xlsx?hash=QWRtaW46MTExMQ

<table className="manual-http-parameters">
<colgroup>
<col className="http-parameter-column" />
<col className="http-description-column" />
</colgroup>

<thead>

<tr>

<th>

Nom

</th>

<th>

Description

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

`ipaddress`

</td>

<td>

Adresse IP locale de l’instrument

</td>

</tr>

<tr>

<td>

`port`

</td>

<td>

Port du serveur HTTP ou HTTPS (par défaut 80 et 443 respectivement)

</td>

</tr>

<tr>

<td>

`filename`

</td>

<td>

Nom du fichier souhaité. Exemple : history_auto

</td>

</tr>

<tr>

<td>

`extension`

</td>

<td>

Extension du fichier (csv, xlsx, pdf)

</td>

</tr>

<tr>

<td>

`myhash`

</td>

<td>

Clé de sécurité contenant l’identification de l’utilisateur. Elle est propre à chaque combinaison utilisateur-mot de passe. Vous pouvez la trouver dans l’interface web (chapitre [Interface utilisateur web](../web-user-interface/)) en copiant le lien affiché lors du téléchargement d’un fichier. Par exemple : hash=QWRtaW46MTExMQ

</td>

</tr>

</tbody>

</table>

</td>

</tr>

</tbody>

</table>

## 12.4 Utilisation du relais GUI via VNC {#section-12-4}

Virtual Network Computing (VNC) est un système de partage de bureau graphique permettant de contrôler à distance un autre ordinateur. Il transmet les entrées du clavier et de la souris d’un ordinateur à un autre, relayant les mises à jour de l’écran graphique sur un réseau. Le serveur VNC intégré au BactoSense est capable de partager l’interface utilisateur sur le réseau local (LAN) uniquement (exception : accès distant via VPN).

:::caution[Limitez l’accès VNC]

VNC est un protocole non sécurisé et son utilisation est déconseillée en dehors d’un réseau local ou avec une connexion VPN.

:::

:::info[Fermez VNC après utilisation]

Une connexion VNC peut ralentir l’interface utilisateur, car elle est gourmande en ressources de traitement. Veillez à fermer votre connexion VNC après utilisation.

:::

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Installez un client VNC sur votre ordinateur. |  |
| 2. | Connectez le BactoSense via Ethernet à un réseau sécurisé (LAN). Connectez votre ordinateur au même réseau. | Pour plus d’informations sur les configurations réseau (adresses IP statiques et dynamiques), reportez-vous à la section [Configuration du réseau](08-general-operations-and-configurations.md#section-8-6). |
| 3. | En tant qu’utilisateur Admin, sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres. |  |
| 4. | Appuyez sur le bouton Paramètres système. |  |
| 5. | Appuyez sur le bouton Services système. |  |
| 6. | Assurez-vous que la case Activer contrôle VNC est cochée. |  |
| 7. | Choisissez un port pour le serveur VNC. | Le port par défaut est le port 5900. |
| 8. | Appuyez sur Valider les modifications pour enregistrer les modifications. Si un redémarrage est demandé, appuyez sur Redémarrer maintenant. | Nécessaire uniquement si vous avez modifié la configuration. |
| 9. | Sur l’écran d’accueil, appuyez sur Paramètres, puis sur Infos système pour obtenir l’adresse IP du BactoSense. |  |
| 10. | Ouvrez le client VNC sur votre ordinateur et connectez-vous au BactoSense en utilisant l’adresse IP et le port identifiés précédemment. | Votre client VNC peut vous permettre de modifier les paramètres de connexion pour optimiser la vitesse de la connexion si nécessaire. |
| 11. | Après utilisation, revenez à Services système, décochez la case VNC et appuyez sur Valider les modifications. Si un redémarrage est demandé, appuyez sur Redémarrer maintenant. | La connexion VNC peut ralentir l’interface utilisateur sur le BactoSense. |
