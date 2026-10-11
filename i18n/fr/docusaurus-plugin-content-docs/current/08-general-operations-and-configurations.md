---
title: "8. Opérations et configurations générales"
sidebar_label: "8. Opérations et configurations générales"
slug: /general-operations-and-configurations
sidebar_position: 8
description: "Manuel d’utilisation BactoSense : Opérations et configurations générales."
---

## 8.1 Mise en marche et arrêt {#section-8-1}

Le bouton d’alimentation du BactoSense est situé sur le côté droit de l’instrument.

![Illustration du manuel original, page imprimée 58](/img/manual/asset-9b1ae5aeca7f.png "width=160")

*Figure 8-1 Bouton d’alimentation du BactoSense*

:::caution[Vérifiez l’alimentation]

Avant de mettre en marche le BactoSense, assurez-vous qu’il est connecté à une alimentation électrique stable répondant aux exigences décrites dans la section [Raccordement du BactoSense à l’alimentation électrique](05-installation.md#section-5-3).

:::

**Mise en marche** Pour allumer le BactoSense, appuyez brièvement sur le bouton d’alimentation. Le voyant du bouton reste allumé et, après quelques secondes, l’écran d’accueil apparaît sur l’interface utilisateur.

**Arrêt** Si vous êtes connecté et souhaitez éteindre le BactoSense, appuyez sur le bouton de déconnexion en haut à droite de l’interface utilisateur et sélectionnez *Éteindre*. Pour l’éteindre depuis la page de connexion, maintenez le bouton d’alimentation enfoncé pendant 10 secondes.

:::caution[Débranchez en toute sécurité]

Pour débrancher le BactoSense de l’alimentation, éteignez d’abord l’instrument. Débranchez ensuite le bloc d’alimentation de la source d’alimentation secteur avant de débrancher la fiche d’alimentation du BactoSense.

:::

## 8.2 Connexion, rôles d’utilisateur et autorisations {#section-8-2}

Le fonctionnement de BactoSense nécessite que les utilisateurs se connectent. Différents rôles d’utilisateur avec différentes autorisations sont disponibles. Les autorisations du rôle utilisateur sont répertoriées dans la section [Rôles et autorisations des utilisateurs](08-general-operations-and-configurations.md#section-8-2-7). Toutes les connexions sont protégées par mot de passe.

La connexion et la déconnexion peuvent être effectuées à l’aide du bouton de connexion situé dans le coin supérieur droit de l’interface utilisateur. Le rôle d’utilisateur actuellement actif est affiché à côté de ce bouton.

### 8.2.1 Connexion {#section-8-2-1}

|  | OPÉRATION |
| --- | --- |
| 1. | Appuyez sur le bouton de connexion dans le coin supérieur droit de l’interface utilisateur ou sur la barre de connexion en bas si vous avez allumé l’instrument. |
| 2. | Pour la configuration standard du BactoSense CORE ou BactoSense ID : sélectionnez l’un des profils Basic, Advanced ou Admin. Pour un BactoSense CORE ou BactoSense ID équipé du Management Package (voir section [Management Package](09-upgrade-packages.md#section-9-2)) et dont le mode avancé de gestion des utilisateurs est activé (voir section [Activation du mode avancé de gestion des utilisateurs](08-general-operations-and-configurations.md#section-8-2-4)), saisissez votre identifiant utilisateur. |
| 3. | Saisissez le mot de passe et appuyez sur OK. Si vous ne connaissez pas le mot de passe, demandez à votre utilisateur Admin. Sur un nouvel instrument, aucun mot de passe n’est défini. Dans ce cas, suivez la procédure décrite dans la section [Définition et modification des mots de passe des rôles d’utilisateur](08-general-operations-and-configurations.md#section-8-2-5). |
| 4. | Après la connexion, vous verrez l’interface utilisateur du BactoSense. |
| 5. | Pour vous déconnecter, suivez la procédure décrite dans la section [Déconnexion manuelle](08-general-operations-and-configurations.md#section-8-2-2). |

### 8.2.2 Déconnexion manuelle {#section-8-2-2}

|  | OPÉRATION |
| --- | --- |
| 1. | Assurez-vous que tous les processus (mesures, nettoyages, etc.) sont terminés. L’état d’inactivité de l’instrument est indiqué sur le côté gauche de la barre supérieure de l’interface utilisateur BactoSense. |
| 2. | Appuyez sur le bouton de déconnexion dans le coin supérieur droit de l’interface utilisateur. |
| 3. | Sélectionnez Déconnexion / Verrouiller écran. |
| 4. | Pour vous reconnecter, suivez la procédure décrite dans la section [Connexion](08-general-operations-and-configurations.md#section-8-2-1). |

### 8.2.3 Déconnexion automatique {#section-8-2-3}

Il est possible de configurer une déconnexion automatique après une période d'inactivité prédéfinie.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | En tant qu’utilisateur Admin, sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres. |  |
| 2. | Appuyez sur le bouton Paramètres système. |  |
| 3. | Appuyez sur le bouton Utilisateurs. |  |
| 4. | Appuyez sur la touche Paramètres. |  |
| 5. | Configurez le délai de déconnexion automatique souhaité. |  |
| 6. | Appuyez sur Enregistrer. |  |

### 8.2.4 Activation du mode avancé de gestion des utilisateurs {#section-8-2-4}

Avec la fonction *Advanced User Management* , un administrateur de l’instrument peut créer différents utilisateurs et leur attribuer différents rôles (Basic, Advanced, Admin). Cela permet d’accorder des autorisations propres à chaque utilisateur et d’enregistrer son activité dans la piste d’audit.

Le mode avancé de gestion des utilisateurs est disponible pour les BactoSense SMART et PURE, ainsi que pour le BactoSense CORE ou BactoSense ID mis à jour avec le Management Package (voir section [Management Package](09-upgrade-packages.md#section-9-2)).

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | En tant qu’utilisateur Admin, sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres. |  |
| 2. | Appuyez sur le bouton Paramètres système. |  |
| 3. | Appuyez sur le bouton Paramètres système. |  |
| 4. | Cochez la case Mode avancé de gestion des utilisateurs. |  |
| 5. | Appuyez sur Enregistrer. |  |

### 8.2.5 Définition et modification des mots de passe des rôles d’utilisateur {#section-8-2-5}

Chaque rôle d’utilisateur est protégé par mot de passe.

**Définition d’un mot de passe à la première connexion** Lors de la première connexion avec n’importe quel rôle, cliquez sur *OK* lorsque le mot de passe est demandé. Cette action lance la procédure guidée de configuration du mot de passe. Seul le mot de passe de service fait exception : un mot de passe prédéfini est fourni.

**Définition et modification des mots de passe** Chaque profil utilisateur peut modifier son propre mot de passe. Les utilisateurs Admin peuvent modifier les mots de passe d’autres profils. La procédure suivante décrit la modification des mots de passe.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Sur l’écran d’accueil, appuyez sur Paramètres. Les utilisateurs Basic appuient sur Changement de mot de passe ; les utilisateurs Advanced et Admin appuient sur Paramètres système, puis sur Utilisateurs. |  |
| 2. | Sélectionnez le profil utilisateur à modifier, puis appuyez sur Editer. | Les utilisateurs Basic et Advanced peuvent changer leur propre code. Les utilisateurs Admin peuvent aussi changer le code des utilisateurs Basic et Advanced. |
| 3. | Appuyez sur Changer le code. Saisissez le nouveau code dans Code et Confirmation du code, puis appuyez sur Enregistrer. |  |

### 8.2.6 Modification des paramètres du mot de passe {#section-8-2-6}

Plusieurs caractéristiques des mots de passe, telles que l'expiration, la longueur, etc. peuvent être configurées.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | En tant qu’utilisateur Admin, sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres. |  |
| 2. | Appuyez sur le bouton Paramètres système. |  |
| 3. | Appuyez sur le bouton Utilisateurs. |  |
| 4. | Appuyez sur la touche Paramètres. |  |
| 5. | Configurez les exigences en matière de mot de passe en fonction de vos préférences. |  |
| 6. | Appuyez sur Enregistrer. |  |

### 8.2.7 Rôles et autorisations des utilisateurs {#section-8-2-7}

*Tableau 8-1 Rôles et autorisations des utilisateurs*

<div className="manual-user-roles-scroll">

<table className="manual-user-roles-permissions">

<colgroup>
<col className="user-role-permission-column" />
<col className="user-role-basic-column" />
<col className="user-role-advanced-column" />
<col className="user-role-admin-column" />
</colgroup>

<thead>
<tr>
<th scope="col">AUTORISATION</th>
<th scope="col">BASIC</th>
<th scope="col">ADVANCED</th>
<th scope="col">ADMIN</th>
</tr>
</thead>

<tbody>
<tr><td>Afficher le dernier résultat</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Afficher tous les résultats et les exporter</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Démarrer, arrêter et programmer une mesure</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Basculer entre les modes en ligne et manuel</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Afficher le journal des erreurs et avertissements</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Renommer les résultats</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Valider l’appareil</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Modifier son propre mot de passe</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Afficher les informations système</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Consulter les paramètres réseau</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Afficher la dernière autovérification</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Changer la cartouche</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Acquitter les erreurs</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Consulter le journal des interventions</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Consulter les résultats de validation</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td>Supprimer les résultats</td><td></td><td>✓</td><td>✓</td></tr>
<tr><td>Redéfinir les fenêtres des résultats</td><td></td><td>✓</td><td>✓</td></tr>
<tr><td>Régler les alarmes</td><td></td><td>✓</td><td>✓</td></tr>
<tr><td>Ajuster les fenêtres</td><td></td><td>✓</td><td>✓</td></tr>
<tr><td>Redémarrer</td><td></td><td>✓</td><td>✓</td></tr>
<tr><td>Exécuter une autovérification</td><td></td><td>✓</td><td>✓</td></tr>
<tr><td>Supprimer les anciennes mesures</td><td></td><td>✓</td><td>✓</td></tr>
<tr><td>Tout exporter</td><td></td><td>✓</td><td>✓</td></tr>
<tr><td>Consulter les informations d’intervention</td><td></td><td>✓</td><td>✓</td></tr>
<tr><td>Exporter les diagnostics</td><td></td><td>✓</td><td>✓</td></tr>
<tr><td>Modifier les sorties analogiques et numériques</td><td></td><td></td><td>✓</td></tr>
<tr><td>Tester les sorties analogiques et numériques</td><td></td><td></td><td>✓</td></tr>
<tr><td>Modifier les mots de passe d’autres utilisateurs</td><td></td><td></td><td>✓</td></tr>
<tr><td>Créer d’autres utilisateurs</td><td></td><td></td><td>✓</td></tr>
<tr><td>Modifier les paramètres d’authentification</td><td></td><td></td><td>✓</td></tr>
<tr><td>Définir le nom de l’appareil</td><td></td><td></td><td>✓</td></tr>
<tr><td>Définir la date et l’heure</td><td></td><td></td><td>✓</td></tr>
<tr><td>Modifier les paramètres réseau</td><td></td><td></td><td>✓</td></tr>
<tr><td>Modifier les paramètres des services</td><td></td><td></td><td>✓</td></tr>
<tr><td>Activer Modbus avec une clé ou le désactiver</td><td></td><td></td><td>✓</td></tr>
<tr><td>Changer de langue</td><td></td><td></td><td>✓</td></tr>
<tr><td>Passer en mode démo</td><td></td><td></td><td>✓</td></tr>
<tr><td>Réinitialiser les paramètres</td><td></td><td></td><td>✓</td></tr>
<tr><td>Réinitialiser entièrement aux paramètres d’usine (sauf le journal des interventions)</td><td></td><td></td><td>✓</td></tr>
<tr><td>Importer les paramètres</td><td></td><td></td><td>✓</td></tr>
<tr><td>Modifier les paramètres de mise en marche automatique</td><td></td><td></td><td>✓</td></tr>
<tr><td>Activer des modules d’extension avec un code</td><td></td><td></td><td>✓</td></tr>
</tbody>

</table>

</div>
## 8.3 Configurations de base {#section-8-3}

### 8.3.1 Langue de l’interface utilisateur {#section-8-3-1}

La langue ne peut être modifiée que par les utilisateurs Admin.

|  | OPÉRATION |
| --- | --- |
| 1. | En tant qu’utilisateur Admin, sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres. |
| 2. | Appuyez sur le bouton Paramètres système. Appuyez sur le bouton Langue. |
| 3. | Choisissez la langue et appuyez sur le bouton OK. |
| 4. | Lorsque le message demande de recharger l’interface, appuyez sur Recharger l'interface. |

### 8.3.2 Date et heure {#section-8-3-2}

La date et l’heure ne peuvent être modifiées que par les utilisateurs Admin .

:::info[Synchronisation automatique de l’heure]

Si la synchronisation de l’heure est activée, avec des serveurs NTP ou via Modbus TCP, les réglages manuels de date et d’heure seront remplacés à la prochaine synchronisation. Les paramètres se trouvent sous Accueil > Paramètres > Paramètres système > Date & heure > Paramètres de synchronisation du temps. Pour configurer un serveur NTP, consultez la section [Configuration des serveurs NTP](08-general-operations-and-configurations.md#section-8-7).

:::

|  | OPÉRATION |
| --- | --- |
| 1. | En tant qu’utilisateur Admin, sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres. |
| 2. | Appuyez sur le bouton Paramètres système. |
| 3. | Appuyez sur le bouton Date &amp; heure. |
| 4. | Saisissez la date et l’heure. |
| 5. | Sélectionnez le fuseau horaire. |
| 6. | Appuyez sur le bouton Appliquer. |

### 8.3.3 Nom de l’instrument {#section-8-3-3}

Le nom de l’instrument ne peut être modifié que par les utilisateurs Admin.

|  | OPÉRATION |
| --- | --- |
| 1. | En tant qu’utilisateur Admin, sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres. |
| 2. | Appuyez sur le bouton Paramètres système. |
| 3. | Appuyez sur le bouton Paramètres système. |
| 4. | Appuyez sur le champ Nom de l'instrument. |
| 5. | Saisissez le nom de l’instrument avec le clavier et appuyez sur OK. |
| 6. | Appuyez sur le bouton Enregistrer. |

### 8.3.4 Redémarrage automatique {#section-8-3-4}

Le BactoSense dispose d’une fonction de redémarrage automatique intégrée qui lui permet de se remettre automatiquement en marche en cas de coupure de courant temporaire. Selon la configuration, l’instrument peut simplement redémarrer, mais aussi revenir en fonctionnement en effectuant un autonettoyage et en relançant une série en mode en ligne.

|  | OPÉRATION |
| --- | --- |
| 1. | En tant qu’utilisateur Admin, appuyez sur Paramètres sur l’écran d’accueil pour ouvrir le menu des paramètres. |
| 2. | Appuyez sur le bouton Paramètres système. |
| 3. | Appuyez sur le bouton Paramètres système. |
| 4. | Sélectionnez vos préférences en matière de redémarrage automatique. Remarque : L’autonettoyage ne se produit que si l’alimentation a été coupée pendant une mesure. |
| 5. | Appuyez sur le bouton Enregistrer. |

### 8.3.5 Notifications sonores {#section-8-3-5}

Vous pouvez activer des notifications sonores pour signaler la fin d’une mesure manuelle ou d’un processus de maintenance, une alarme ou une erreur. La notification consiste en un ou plusieurs bips émis par l’instrument.

|  | OPÉRATION |
| --- | --- |
| 1. | En tant qu’utilisateur Admin, appuyez sur Paramètres sur l’écran d’accueil pour ouvrir le menu des paramètres. |
| 2. | Appuyez sur le bouton Paramètres système. |
| 3. | Appuyez sur le bouton Paramètres système. |
| 4. | Activez Notifications sonores. |
| 5. | Appuyez sur le bouton Enregistrer. |

## 8.4 Importation / exportation des paramètres {#section-8-4}

Les paramètres sont exportés sur une clé USB comme indiqué à la section [Exportation des paramètres, des diagnostics ou de toutes les données vers un périphérique USB](12-data-access-and-export.md#section-12-1-1). Ils sont regroupés dans un fichier horodaté se terminant par ***.bnv**. Pour importer les paramètres dans un nouvel instrument ou les restaurer depuis une sauvegarde, copiez le fichier ***.bnv** à la racine de la clé USB ou dans le répertoire dans lequel il a été exporté. Si la clé contient plusieurs copies des paramètres, le système utilise la plus récente.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | En tant qu’utilisateur Admin, sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres. | ![BactoSense — Bouton Paramètres](/img/gui/fr/home-settings-button.png "width=57 class=manual-icon-settings-button-half") |
| 2. | Appuyez sur le bouton Maintenance. | ![BactoSense — Menu de maintenance](/img/gui/icons/maintenance-button.png "width=48 class=manual-icon") |
| 3. | Appuyez sur le bouton Exportation importation spéciales. | ![BactoSense — Options spéciales d’exportation et d’importation](/img/gui/icons/special-import-export-button.png "width=48 class=manual-icon") |
| 4. | Connectez une clé USB. Si nécessaire, appuyez sur le bouton Rafraîchir liste USB jusqu’à ce que la clé soit détectée. | Assurez-vous que le fichier *.bnv se trouve à la racine de la clé USB. La clé USB doit être formatée en FAT32, qui est la norme courante. |
| 5. | Appuyez sur le bouton Importer réglages. | ![BactoSense — Importation et exportation USB](/img/gui/fr/usb-import-and-export.png "width=263") |
| 6. | Sélectionnez les paramètres que vous souhaitez importer. Les paramètres de mesure comprennent les paramètres de fenêtre, les paramètres d’E/S, les alarmes et les paramètres de date et d’heure. Les paramètres réseau comprennent les adresses IP, DNS et NTP. | ![BactoSense — Options d’importation des paramètres](/img/gui/fr/import-settings-options.png "width=269") |
| 7. | Appuyez sur Importer réglages, puis sur Redémarrer maintenant dans le message de confirmation et attendez le redémarrage. |  |

## 8.5 Configuration des alarmes {#section-8-5}

Les règles suivantes s’appliquent aux alarmes :

- Seuls les utilisateurs **Advanced** et **Admin** peuvent modifier les paramètres des alarmes.
- Les alarmes ne sont actives qu’en **mode en ligne**.

BactoSense enregistre les alarmes des manières suivantes :

- Une fenêtre contextuelle s’affiche dans l’interface utilisateur graphique.
- Une icône de cloche d’alarme apparaît dans la barre supérieure si la dernière mesure a dépassé le seuil d’alarme. L’alarme est affichée dans le résumé de la mesure lors de la consultation d’un résultat.
- Un signal peut être envoyé à un PLC via des sorties numériques (configurables).

![BactoSense — Configuration des alarmes](/img/gui/fr/alarm-configuration.png "width=517")

*Figure 8-2 Configuration des alarmes dans l’interface utilisateur graphique du BactoSense.*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Sélectionner, activer ou désactiver les alarmes.<br/>Les utilisateurs peuvent configurer jusqu’à 9<br/>alarmes. | 2 | Nom de l’alarme actuellement sélectionnée. |
| 3 | Source de l’alarme : Quel<br/>résultat de mesure doit<br/>être évalué. Voir figure 8-3. | 4 | Condition : Déclencher l’alarme lorsque<br/>le paramètre mesuré est<br/>supérieur (&gt;) ou inférieur (&lt;) au<br/>seuil. |
| 5 | Seuil | 6 | Affichage : Si cette case est cochée, une ligne<br/>sera affichée sur le graphique du mode en ligne,<br/>dans la couleur sélectionnée. |

![BactoSense — Source d’alarme de cartouche](/img/gui/fr/cartridge-alarm-source.png "width=290")

*Figure 8-3 Sources d’alarme du BactoSense. Pour une source sélectionnée, une condition et un seuil sont définis.*  *Dans l’exemple ci-dessus, une alarme se déclenche à un certain niveau de remplissage de la cartouche.*

La procédure suivante décrit comment configurer l’alarme :

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres. |  |
| 2. | Appuyez sur le bouton Paramètres mode en ligne. |  |
| 3. | Appuyez sur le bouton Alarme. |  |
| 4. | Activez, sélectionnez et configurez les alarmes (conformément à la figure 8-2 et à la figure 8-3). | Par défaut, aucune alarme n’est active. |
| 5. | Appuyez sur Enregistrer pour enregistrer la configuration des alarmes. |  |

## 8.6 Configuration du réseau {#section-8-6}

:::info[Paramètres réseau]

Demandez à votre administrateur réseau les paramètres corrects.

:::

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

En tant qu’utilisateur Admin, sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres.

</td>

<td>

![BactoSense — Bouton Paramètres](/img/gui/fr/home-settings-button.png "width=57 class=manual-icon-settings-button-half")

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Appuyez sur le bouton Paramètres système.

</td>

<td>

![BactoSense — Paramètres système](/img/gui/icons/system-settings-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Appuyez sur le bouton Réseau.

</td>

<td>

![BactoSense — Paramètres réseau](/img/gui/icons/network-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

A : Pour IP dynamique, cochez la case DHCP (1). Remarque : Ceci est la configuration préférée dans la plupart des cas lorsque le BactoSense est connecté à un routeur ou à un commutateur.

B : Pour IP statique, décochez la case DHCP (1) et saisissez la configuration réseau souhaitée (2). Remarque : Cette configuration est recommandée lorsque le BactoSense est directement connecté à un ordinateur portable via Ethernet. Assurez-vous également d’ajuster la configuration réseau sur l’ordinateur portable en conséquence.

</td>

<td>

![BactoSense — Configuration réseau](/img/gui/fr/network-configuration.png "width=260")

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Appuyez sur le bouton Enregistrer.

</td>

<td>

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Appuyez sur le bouton Redémarrer maintenant.

</td>

<td>

</td>

</tr>

</tbody>

</table>

## 8.7 Configuration des serveurs NTP {#section-8-7}

Le protocole NTP (Network Time Protocol) est un protocole réseau permettant de synchroniser l’heure des ordinateurs d’un réseau. Par défaut, la synchronisation s’effectue avec les serveurs de la Network Time Foundation (ntp.org). Vous pouvez définir des serveurs NTP personnalisés dans le menu *Date &amp; heure* .

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

En tant qu’utilisateur Admin, sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres.

</td>

<td>

![BactoSense — Bouton Paramètres](/img/gui/fr/home-settings-button.png "width=57 class=manual-icon-settings-button-half")

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Appuyez sur le bouton Paramètres système.

</td>

<td>

![BactoSense — Paramètres système](/img/gui/icons/system-settings-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Appuyez sur le bouton Date &amp; heure.

</td>

<td>

![BactoSense — Réglage de la date et de l’heure](/img/gui/icons/date-time-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Appuyez sur le bouton Paramètres de synchronisation du temps.

</td>

<td>

![BactoSense — Date et heure](/img/gui/fr/date-and-time-settings.png "width=261")

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Sélectionnez la Source synchro souhaitée.

</td>

<td>

:::info[Informations supplémentaires]

La synchronisation de l’heure peut s’effectuer via un serveur NTP ou Modbus TCP. Pour plus d’informations sur Modbus TCP, consultez la section [Modbus TCP](../field-bus-interface/#section-7-1).

:::

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Mettez à jour les serveurs NTP.

</td>

<td>

![BactoSense — Synchronisation de l’heure](/img/gui/fr/time-synchronization-settings.png "width=261")

</td>

</tr>

<tr>

<td>

7

</td>

<td>

Appuyez sur le bouton OK.

</td>

<td>

:::info[Informations supplémentaires]

Appuyez sur Test NTP pour vérifier que les serveurs configurés sont accessibles. Appuyez sur OK pour enregistrer les paramètres de synchronisation.

:::

</td>

</tr>

</tbody>

</table>

## 8.8 Interface utilisateur de BactoSense {#section-8-8}

### 8.8.1 Structure générale, écran d’accueil et menu des paramètres {#section-8-8-1}

![BactoSense — Vue d’ensemble de l’accueil](/img/gui/fr/home-overview.png "width=587")

*Figure 8-4 Écran d’accueil de l’interface utilisateur de BactoSense*

L’écran d’accueil affiche le dernier résultat de mesure. Appuyez sur Paramètres pour ouvrir le menu des paramètres.

L’interface utilisateur de BactoSense est divisée en 3 sections principales :

|  |  |
| --- | --- |
| A | Barre supérieure |
| B | Zone de contenu |
| C | Barre d’action |

Les principaux éléments de l’interface utilisateur sont :

<div className="manual-ui-elements-scroll">

<table className="manual-ui-elements">

<colgroup>
<col className="ui-element-number" />
<col className="ui-element-description" />
<col className="ui-element-number" />
<col className="ui-element-description" />
</colgroup>

<tbody>

<tr>

<td>

1

</td>

<td>

Bouton Menu principal ou Retour.<br />Pour naviguer dans le menu.

</td>

<td>

2

</td>

<td>

Mode de fonctionnement (Manuel ou<br />En ligne) État de l’instrument (processus en<br />cours)

</td>

</tr>

<tr>

<td>

3

</td>

<td>

Vue actuelle

</td>

<td>

4

</td>

<td>

Icônes d’état de la barre supérieure, voir [Icônes d’état de la barre supérieure](../general-operations-and-configurations/#section-8-8-2).

</td>

</tr>

<tr>

<td>

5

</td>

<td>

Rôle d’utilisateur<br />Heure actuelle

</td>

<td>

6

</td>

<td>

Déconnexion ou mise hors tension

</td>

</tr>

<tr>

<td>

7

</td>

<td>

Résultats : afficher les résultats de mesure du mode sélectionné.

</td>

<td>

8

</td>

<td>

Mode : choisir le mode en ligne pour les mesures continues avec le dispositif d’échantillonnage en ligne, ou le mode manuel pour les échantillons ponctuels avec le dispositif d’échantillonnage manuel.

</td>

</tr>

<tr>

<td>

9

</td>

<td>

Mesurer : ouvrir l’assistant de mesure et choisir un protocole d’analyse (mode manuel).

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

</div>

Selon le rôle de l’utilisateur, certaines options peuvent être invisibles ou désactivées.

### 8.8.2 Icônes d’état de la barre supérieure {#section-8-8-2}

Les icônes de la barre supérieure s’affichent en haut de l’écran. Elles indiquent l’état de l’instrument.

*Tableau 8-2 Icônes de la barre supérieure*

| ICÔNE | DESCRIPTION | ICÔNE | DESCRIPTION |
| --- | --- | --- | --- |
| ![BactoSense — Processus en cours](/img/gui/icons/process-running-status.png "width=32 class=manual-icon") | Processus en cours | ![BactoSense — Mode démo actif](/img/gui/icons/demo-mode-status.png "width=32 class=manual-icon") | Mode démo activé |
| ![BactoSense — Cartouche presque vide](/img/gui/icons/cartridge-almost-empty-status.png "width=32 class=manual-icon") | Cartouche presque vide | ![BactoSense — Maintenance nécessaire](/img/gui/icons/service-required-status.png "width=32 class=manual-icon") | Entretien nécessaire (voir chapitre [Maintenance](15-maintenance.md)) |
| ![BactoSense — Cartouche bientôt périmée](/img/gui/icons/cartridge-almost-expired-status.png "width=32 class=manual-icon") | Cartouche presque expirée | ![BactoSense — Niveau de remplissage de la cartouche](/img/gui/icons/cartridge-level-status.png "width=32 class=manual-icon") | Indication du niveau de la cartouche |
| ![BactoSense — Cartouche non prête](/img/gui/icons/cartridge-not-ready-status.png "width=32 class=manual-icon") | Cartouche non initialisée<br/>correctement ou absente | ![BactoSense — Cartouche vide](/img/gui/icons/cartridge-empty-status.png "width=32 class=manual-icon") | Cartouche vide |
| ![BactoSense — Erreur critique](/img/gui/icons/critical-error-status.png "width=32 class=manual-icon") | Erreur critique (section [Erreurs critiques](16-warnings-errors-and-troubleshooting.md#section-16-3)) | ![BactoSense — Cartouche périmée](/img/gui/icons/cartridge-expired-status.png "width=32 class=manual-icon") | Cartouche expirée |
| ![BactoSense — Alarme active](/img/gui/icons/alarm-status.png "width=32 class=manual-icon") | Alarme sur la dernière mesure<br/>(mode en ligne uniquement, voir section [Configuration des alarmes](08-general-operations-and-configurations.md#section-8-5)) | ![BactoSense — Erreur non critique](/img/gui/icons/noncritical-error-status.png "width=32 class=manual-icon") | Erreur non critique (section [Erreurs non critiques](16-warnings-errors-and-troubleshooting.md#section-16-2)) |

## 8.9 Gestion des cartouches {#section-8-9}

Les cartouches BactoSense contiennent les réactifs nécessaires aux mesures et au maintien de la propreté de l’instrument. Les types de cartouches disponibles sont TCC (nombre total de cellules), ICC (nombre de cellules intactes), EBC (nombre de cellules E. coli), ACC (nombre de cellules actives), CBC (nombre de cellules coliformes) et NBC (nombre de cellules Enterococcus). Les sections suivantes expliquent leur manipulation. Le stockage, le transport et le remplissage des cartouches sont décrits au chapitre [Stockage, transport et élimination](17-storage-transport-and-disposal.md).

### 8.9.1 Instructions générales pour la manipulation des cartouches {#section-8-9-1}

Lors de la manipulation de la cartouche, les instructions suivantes doivent être respectées :

*Tableau 8-3 Instructions de manipulation des cartouches*

|  |  |  |  |
| --- | --- | --- | --- |
| ![Suivez les procédures décrites dans ce manuel.](/img/manual/cell-28af480709ce.png "width=31 class=cartridge-handling-icon-31") | Suivez les procédures<br/>décrites dans ce manuel. | ![Illustration de la procédure, page imprimée 73](/img/manual/asset-32c675a70f3d.png "width=24 class=cartridge-handling-icon-24") | Stockez et transportez la cartouche entre<br/>15 °C et 25 °C (59<br/>°F – 77 °F). La<br/>température optimale est de 15 °C (59 °F). |
| ![Portez des gants en nitrile lors de la manipulation de la cartouche.](/img/safety/gloves.svg "width=31 class=cartridge-handling-icon-31") | Portez des gants en nitrile lors<br/>de la manipulation de la cartouche. | ![Illustration de la procédure, page imprimée 73](/img/manual/asset-65d703b8ec50.png "width=24 class=cartridge-handling-icon-24") | Stockez et transportez entre 20<br/>% et 60 %<br/>d’humidité relative. |
| ![Portez des lunettes de sécurité lors de la manipulation de la cartouche.](/img/manual/cell-d6353e538e2e.png "width=31 class=cartridge-handling-icon-31") | Portez des lunettes de sécurité lors<br/>de la manipulation de la cartouche. | ![La cartouche est destinée à être rechargée.](/img/manual/cell-a80baea9abca.png "width=29 class=cartridge-handling-icon-29") | La cartouche est destinée à être<br/>rechargée. |
| ![Transportez, installez et stockez dans l’orientation indiquée.](/img/manual/cell-7ac996bd1fed.png "width=31 class=cartridge-handling-icon-31") | Transportez, installez et stockez<br/>dans l’orientation indiquée. | ![Ne jetez pas la cartouche à la poubelle.](/img/manual/cell-bc083b74fc3c.png "width=29 class=cartridge-handling-icon-29") | Ne jetez pas la cartouche<br/>à la poubelle. |

### 8.9.2 Vérification du niveau de remplissage et de la date d’expiration d’une cartouche {#section-8-9-2}

Le niveau de remplissage et la date d’expiration d’une cartouche peuvent être consultés de plusieurs manières.

- L’icône de la cartouche située dans la barre supérieure de l’interface utilisateur indique en permanence le niveau de remplissage approximatif de la cartouche. L’icône de la cartouche affiche également l’approche de la date d’expiration. Vous trouverez des explications sur les différentes icônes dans la section [Icônes d’état de la barre supérieure](08-general-operations-and-configurations.md#section-8-8-2).
- Pour plus d’informations, appuyez sur *Paramètres* sur l’*écran d’accueil*, puis sur *Infos système*. Sous *Cartridge capacity remaining* , vous pouvez voir le niveau de remplissage restant de la cartouche (en pourcentage), et sous *Date de péremption de la cartouche* , sa date de péremption. Ces informations sont également disponibles dans l’interface web (voir chapitre [Interface utilisateur web](13-web-user-interface.md)).

### 8.9.3 Vue d’ensemble de la cartouche {#section-8-9-3}

La cartouche BactoSense est installée dans un compartiment dédié de l’instrument. Une porte ferme le compartiment de la cartouche. La porte du compartiment de la cartouche ne doit être ouverte que pour retirer et installer des cartouches.

![Illustration du manuel original, page imprimée 74](/img/manual/asset-f8b0a7f1f4e5.png "width=381")

*Figure 8-5 Le compartiment de cartouche du BactoSense s’ouvre en retirant deux écrous hexagonaux de 7 mm*  *à l’aide du tournevis à douille fourni.*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Écrous hexagonaux de 7 mm pour fixer la porte<br/>du compartiment de la cartouche | 2 | Porte du compartiment de la cartouche |

:::caution[Utilisez l’outil adapté à la porte]

Ouvrez et fermez la porte du compartiment de la cartouche uniquement avec la clé à douille de 7 mm prévue à cet effet.

:::

Une fois la porte du compartiment de la cartouche ouverte, l’utilisateur a accès à la cartouche et aux connecteurs qui la relient au BactoSense.

![Illustration du manuel original, page imprimée 75](/img/manual/asset-8e1d2269e91e.png "width=659")

*Figure 8-6 Vue d’ensemble d’une cartouche installée. La cartouche est immobilisée par un*  *loquet de fixation situé sur le dessus (4) et raccordée à l’instrument par plusieurs connecteurs fluidiques (5*  *- 8) et un connecteur électronique (9). En l’absence de cartouche, les connecteurs fluidiques et électroniques*  *peuvent être fixés sur le support de connecteurs amovible (10).*

<table>

<tbody>

<tr>

<td>

1

</td>

<td>

Instrument BactoSense

</td>

<td>

2

</td>

<td>

Cartouche

</td>

</tr>

<tr>

<td>

3

</td>

<td>

Poignée de la cartouche

</td>

<td>

4

</td>

<td>

Loquet de fixation de la cartouche

</td>

</tr>

<tr>

<td>

5

</td>

<td>

Connecteur de colorant (vert)

</td>

<td>

6

</td>

<td>

Connecteur de solution chlorée (rouge)

</td>

</tr>

<tr>

<td>

7

</td>

<td>

Connecteur de déchets (noir ou beige)

</td>

<td>

8

</td>

<td>

Connecteur de rinçage (bleu)

</td>

</tr>

<tr>

<td>

9

</td>

<td>

Connecteur électronique

</td>

<td>

10

</td>

<td>

Porte-connecteurs amovible

</td>

</tr>

<tr>

<td>

11

</td>

<td>

Porte du compartiment de la cartouche

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

:::caution[Protégez le connecteur inutilisé]

Le BactoSense possède cinq connecteurs fluidiques. Selon le type de cartouche, seuls quatre ou les cinq connecteurs fluidiques sont nécessaires. Dans le cas des cartouches TCC ou ICC, assurez-vous que le cinquième connecteur non utilisé est toujours monté sur le porte-connecteurs amovible afin d'éviter toute contamination.

:::

### 8.9.4 Remplacement des cartouches {#section-8-9-4}

La procédure suivante décrit le remplacement des cartouches. Utilisez cette procédure si vous souhaitez retirer une cartouche et en installer directement une autre. Si vous souhaitez uniquement retirer une cartouche sans en installer une autre, suivez les instructions de la section [Retrait d’une cartouche](08-general-operations-and-configurations.md#section-8-9-5). La durée du remplacement de la cartouche est d’environ 35 minutes.

:::caution[Suivez l’assistant de cartouche]

Suivez strictement la procédure de l’assistant à l’écran. **Ne retirez et n’installez aucune cartouche sans suivre cette procédure.**

:::

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

Préparez la cartouche de remplacement et laissez-la atteindre la température ambiante.

</td>

<td>

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres.

</td>

<td>

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Appuyez sur le bouton Maintenance.

</td>

<td>

Les utilisateurs basiques ignorent cette étape.

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Appuyez sur le bouton Changement cartouche.

</td>

<td>

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Sélectionnez Changement cartouche.

</td>

<td>

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

:::warning[Suivez l’assistant de cartouche]

Confirmez que vous suivrez les instructions de l’assistant à l’écran. N’ouvrez la porte du compartiment de cartouche que lorsque vous y êtes invité. Respectez les consignes générales de manipulation de la section [Instructions générales pour la manipulation des cartouches](../general-operations-and-configurations/#section-8-9-1). Portez des gants en nitrile et des lunettes de sécurité. Fermez hermétiquement les connecteurs fluidiques de l’ancienne cartouche avec les bouchons attachés avant de la retirer. À la fin, assurez-vous que la porte du compartiment est bien fermée et verrouillée.

:::

</td>

<td>

:::warning[Ignorer l’assistant de cartouche]

Seuls les utilisateurs très expérimentés maîtrisant la manipulation sûre des cartouches sont autorisés à ignorer les instructions à l’écran. Pour les cartouches TCC ou ICC, assurez-vous que le cinquième connecteur inutilisé reste toujours fixé au support de connecteurs afin d’éviter toute contamination.

:::

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

Manipulation de la cartouche retirée • Pour stocker la cartouche retirée, consultez les instructions de stockage de la section [Stockage de la cartouche](../storage-transport-and-disposal/#section-17-1-3). • Pour faire remplir la cartouche retirée, consultez les instructions de remplissage de la section [Retour d’une cartouche pour recharge](../storage-transport-and-disposal/#section-17-3-2).

</td>

<td>

</td>

</tr>

</tbody>

</table>

### 8.9.5 Retrait d’une cartouche {#section-8-9-5}

Cette procédure concerne le retrait d’une cartouche, sans installation immédiate d’une autre cartouche. Si vous souhaitez remplacer des cartouches, suivez la procédure décrite dans la section [Remplacement des cartouches](08-general-operations-and-configurations.md#section-8-9-4). La durée du retrait de la cartouche est d’environ 5 minutes.

:::caution[Suivez l’assistant de cartouche]

Suivez strictement la procédure de l’assistant à l’écran. **Ne retirez et n’installez aucune cartouche sans suivre cette procédure.**

:::

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

Sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres.

</td>

<td>

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Appuyez sur le bouton Maintenance.

</td>

<td>

Les utilisateurs basiques ignorent cette étape.

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Appuyez sur le bouton Changement cartouche.

</td>

<td>

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Sélectionnez Retirer la cartouche.

</td>

<td>

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

:::warning[Suivez l’assistant de cartouche]

Confirmez que vous suivrez les instructions de l’assistant à l’écran. N’ouvrez la porte du compartiment de cartouche que lorsque vous y êtes invité. Respectez les consignes générales de manipulation de la section [Instructions générales pour la manipulation des cartouches](../general-operations-and-configurations/#section-8-9-1). Portez des gants en nitrile et des lunettes de sécurité. Fermez hermétiquement les connecteurs fluidiques de l’ancienne cartouche avec les bouchons attachés avant de la retirer. À la fin, assurez-vous que la porte du compartiment est bien fermée et verrouillée.

:::

</td>

<td>

:::warning[Ignorer l’assistant de cartouche]

Seuls les utilisateurs très expérimentés maîtrisant la manipulation sûre des cartouches sont autorisés à ignorer les instructions à l’écran.

:::

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Manipulation de la cartouche retirée • Si vous souhaitez stocker la cartouche retirée, reportez-vous aux instructions de stockage de la section [Stockage de la cartouche](../storage-transport-and-disposal/#section-17-1-3). • Si vous souhaitez recharger la cartouche retirée, reportez-vous aux instructions de recharge de la section [Retour d’une cartouche pour recharge](../storage-transport-and-disposal/#section-17-3-2).

</td>

<td>

La barre supérieure de l’interface utilisateur indique qu’aucune cartouche n’est connectée. Dans le menu Paramètres, Maintenance est mis en évidence ; les utilisateurs Basic voient directement le bouton Changement cartouche mis en évidence. ![BactoSense — Cartouche non prête](/img/gui/icons/cartridge-not-ready-status.png "width=30 class=manual-icon")

</td>

</tr>

</tbody>

</table>

### 8.9.6 Installation d’une cartouche {#section-8-9-6}

Cette procédure concerne l’installation d’une cartouche lorsqu’aucune autre cartouche n’est installée dans le BactoSense. S’il existe déjà une cartouche et que vous souhaitez la remplacer, suivez la procédure décrite dans la section [Remplacement des cartouches](08-general-operations-and-configurations.md#section-8-9-4). La durée d’installation de la cartouche est d’environ 30 minutes.

:::caution[Suivez l’assistant de cartouche]

Suivez strictement la procédure de l’assistant à l’écran. **Ne retirez et n’installez aucune cartouche sans suivre cette procédure.**

:::

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

Préparez la nouvelle cartouche et laissez-la à température ambiante.

</td>

<td>

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres.

</td>

<td>

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Appuyez sur le bouton Maintenance.

</td>

<td>

Le bouton Maintenance est surligné en orange si aucune cartouche n’est installée. Les utilisateurs basiques ignorent cette étape.

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Appuyez sur le bouton Changement cartouche.

</td>

<td>

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Sélectionnez Installer une cartouche.

</td>

<td>

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

:::warning[Suivez l’assistant de cartouche]

Confirmez que vous suivrez les instructions de l’assistant à l’écran. N’ouvrez la porte du compartiment de cartouche que lorsque vous y êtes invité. Respectez les consignes générales de manipulation de la section [Instructions générales pour la manipulation des cartouches](../general-operations-and-configurations/#section-8-9-1). Portez des gants en nitrile et des lunettes de sécurité. À la fin, assurez-vous que la porte du compartiment est bien fermée et verrouillée.

:::

</td>

<td>

:::warning[Ignorer l’assistant de cartouche]

Seuls les utilisateurs très expérimentés maîtrisant la manipulation sûre des cartouches sont autorisés à ignorer les instructions à l’écran. Pour les cartouches TCC ou ICC, assurez-vous que le cinquième connecteur inutilisé reste toujours fixé au support de connecteurs afin d’éviter toute contamination.

:::

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

Une fois toutes les étapes de l’assistant à l’écran terminées, la nouvelle cartouche est correctement initialisée.

</td>

<td>

L’état de la cartouche est indiqué par un symbole de cartouche dans la barre supérieure de l’interface utilisateur, voir [Icônes d’état de la barre supérieure](../general-operations-and-configurations/#section-8-8-2).

</td>

</tr>

</tbody>

</table>

## 8.10 Basculement entre les dispositifs d’échantillonnage {#section-8-10}

Le BactoSense peut être utilisé avec le dispositif d’échantillonnage manuel ou en ligne. La procédure suivante décrit l’échange des dispositifs d’échantillonnage. Vous trouverez des informations sur le stockage des dispositifs d’échantillonnage dans la section [Stockage des dispositifs d’échantillonnage](17-storage-transport-and-disposal.md#section-17-1-2).

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Retirez le dispositif d’échantillonnage monté conformément aux instructions de la section [Retrait du dispositif d’échantillonnage en ligne](08-general-operations-and-configurations.md#section-8-10-1) (dispositif d’échantillonnage en ligne) ou [Retrait du dispositif d’échantillonnage manuel](08-general-operations-and-configurations.md#section-8-10-2) (dispositif d’échantillonnage manuel). |  |
| 2. | Installez le nouveau dispositif d’échantillonnage conformément aux instructions de la section [Installation du dispositif d’échantillonnage en ligne](05-installation.md#section-5-5) (dispositif d’échantillonnage en ligne) ou [Installation du dispositif d’échantillonnage manuel](05-installation.md#section-5-4) (dispositif d’échantillonnage manuel). |  |

### 8.10.1 Retrait du dispositif d’échantillonnage en ligne {#section-8-10-1}

Lors du passage au dispositif d’échantillonnage manuel, le dispositif d’échantillonnage en ligne doit être retiré. Suivez la procédure ci-dessous pour retirer le dispositif en toute sécurité et le préparer pour le stockage.

:::gloves[Porter des gants de protection]

Évitez la contamination de l’équipement. Portez des gants en nitrile lors de la manipulation des échantillons, des dispositifs d’échantillonnage et de tout composant qui entre en contact avec eux.

:::

|  | OPÉRATION |
| --- | --- |
| 1. | Terminez toute série de mesures en cours comme décrit à la section [Arrêt des mesures automatiques en ligne](10-measurements.md#section-10-2-2). |
| 2. | Arrêtez l’écoulement de l’eau dans les tuyaux et le dispositif d’échantillonnage. |
| 3. | Dévissez soigneusement la bague de fixation moletée jusqu’à pouvoir retirer le dispositif d’échantillonnage. |
| 4. | Retirez le dispositif d’échantillonnage en ligne. Assurez-vous que le bouchon blanc d’étanchéité reste bien en place dans son connecteur. Sinon, il peut être resté dans le connecteur du BactoSense. Dans ce cas, retirez-le délicatement avec une pince et remettez-le dans le dispositif d’échantillonnage. |
| 5. | Débranchez les tuyaux d’entrée et de sortie de la source d’eau et du corps du dispositif, puis videz-les. |
| 6. | Vérifiez que les tuyaux d’entrée et de sortie ne sont ni contaminés ni endommagés. Réutilisez uniquement des tuyaux propres et intacts. |
| 7. | Pour stocker le dispositif, placez-le et ses tuyaux séparément dans des sacs en plastique propres et secs, puis suivez les instructions de stockage de la section [Stockage des dispositifs d’échantillonnage](17-storage-transport-and-disposal.md#section-17-1-2). |
| 8. | Pour installer ensuite le dispositif d’échantillonnage manuel, consultez la section [Installation du dispositif d’échantillonnage manuel](05-installation.md#section-5-4). |

### 8.10.2 Retrait du dispositif d’échantillonnage manuel {#section-8-10-2}

Lors du passage au dispositif d’échantillonnage en ligne, le dispositif d’échantillonnage manuel doit être retiré. Suivez la procédure ci-dessous pour retirer le dispositif en toute sécurité et le préparer pour le stockage.

:::gloves[Porter des gants de protection]

Évitez la contamination de l’équipement. Portez des gants en nitrile lors de la manipulation des échantillons, des dispositifs d’échantillonnage et de tout composant qui entre en contact avec eux.

:::

|  | OPÉRATION |
| --- | --- |
| 1. | Nettoyez le dispositif d’échantillonnage manuel : Si une Washstation est disponible, suivez la procédure de la section [Nettoyage du dispositif d’échantillonnage manuel avec la Washstation](15-maintenance.md#section-15-2-2), sinon suivez la procédure de la section [Nettoyage du dispositif d’échantillonnage manuel avec un nettoyage de base](15-maintenance.md#section-15-2-3). |
| 2. | Une fois terminé, fixez un tube à bouchon fileté propre et vide de 5 mL ou la Washstation au dispositif d’échantillonnage. |
| 3. | Dévissez soigneusement la bague de fixation moletée située sur le dessus du dispositif d’échantillonnage jusqu’à ce que le dispositif d’échantillonnage puisse être retiré. |
| 4. | Retirez le dispositif d’échantillonnage manuel. Assurez-vous que le bouchon d’étanchéité blanc est toujours bien en place dans le connecteur du dispositif d’échantillonnage. S’il ne l’est pas, il est possible qu’il soit resté dans le connecteur du dispositif d’échantillonnage BactoSense. Dans ce cas, retirez-le soigneusement à l’aide de pinces et replacez-le dans le dispositif d’échantillonnage. |
| 5. | Si vous souhaitez stocker le dispositif d’échantillonnage, placez-le dans un sac en plastique propre et sec et suivez les instructions de stockage de la section [Stockage des dispositifs d’échantillonnage](17-storage-transport-and-disposal.md#section-17-1-2). |
| 6. | Pour monter maintenant le dispositif d’échantillonnage en ligne, suivez la procédure de la section [Installation du dispositif d’échantillonnage en ligne](05-installation.md#section-5-5). |

## 8.11 Qualification {#section-8-11}

La qualification opérationnelle est un processus qui permet de s’assurer que le BactoSense fonctionne comme prévu. Différentes options sont disponibles.

Pour effectuer une vérification rapide entièrement automatisée de l’état de l’instrument, effectuez la procédure d’autovérification décrite dans la section [Autovérification automatique](16-warnings-errors-and-troubleshooting.md#section-16-6). Ce test ne nécessite aucun réactif ni interaction de l’utilisateur, est très rapide et vérifie l’intégrité et la communication entre les différents modules du BactoSense.

Pour évaluer la propreté du BactoSense et exclure une contamination, effectuez la procédure de vérification de la propreté de la section [Vérification de la propreté](08-general-operations-and-configurations.md#section-8-11-1).

Pour les environnements nécessitant un test d’adéquation du système, utilisez le *kit de test d’adéquation*  *du système (kit SST)* et suivez la procédure de son manuel d’utilisation.

Dans les autres environnements, une qualification de l’instrument à l’aide du *kit de validation* est recommandée dans les situations suivantes :

- Après l’expédition de l’instrument ou un autre transport sur une longue distance ayant exposé l’instrument à des vibrations ou à des chocs.
- Après avoir stocké l'instrument pendant plus d'un mois.
- S'il y a des indications que les résultats des mesures pourraient être erronés.

### 8.11.1 Vérification de la propreté {#section-8-11-1}

|  | OPÉRATION |
| --- | --- |
| 1. | Assurez-vous que le dispositif d’échantillonnage manuel est bien installé comme décrit dans la section [Installation du dispositif d’échantillonnage manuel](05-installation.md#section-5-4). |
| 2. | Effectuez un nettoyage du dispositif d’échantillonnage avec deux répétitions : Si une Washstation est disponible, suivez la procédure de la section [Nettoyage du dispositif d’échantillonnage manuel avec la Washstation](15-maintenance.md#section-15-2-2), sinon suivez la procédure de la section [Nettoyage du dispositif d’échantillonnage manuel avec un nettoyage de base](15-maintenance.md#section-15-2-3). |
| 3. | Préparez l’échantillon blanc dans un tube à bouchon fileté de 5 mL. Deux options sont possibles : A) Utilisez de l’eau sans cellules, par exemple une aliquote de solution stérile provenant du kit de validation. Si vous utilisez l’aliquote de solution stérile du kit de validation, retirez le capuchon de l’aliquote et placez l’aliquote dans un tube à bouchon fileté vide de 5 mL, comme décrit dans le manuel d’utilisation du kit de validation. B) Prenez de l’eau minérale plate et filtrez-la deux fois à l’aide d’un filtre à membrane avec une taille de pore de 0,22 µm ou moins. |
| 4. | Accédez à l’écran d’accueil de l’interface utilisateur du BactoSense. |
| 5. | Sur l’écran d’accueil, appuyez sur Mode et sélectionnez Mode manuel. Appuyez sur Retour, puis sur Mesurer pour ouvrir l’assistant de mesure. |
| 6. | Sélectionnez Amorçage dans la liste des protocoles disponibles. |
| 7. | Appuyez sur le bouton Suivant. |
| 8. | Retirez le tube ou la Washstation du dispositif d’échantillonnage manuel et attachez l’échantillon blanc. |
| 9. | Appuyez sur le bouton Démarrer pour exécuter le protocole Amorçage. |
| 10. | Une fois l’amorçage terminé, appuyer sur le bouton Nouveau pour revenir à la liste des protocoles. |
| 11. | Sélectionnez Analyse Eau dans la liste des protocoles disponibles. |
| 12. | Configurez deux répétitions. |
| 13. | Saisissez un nom d’échantillon en tapant dans le champ de texte Nom de l’échantillon, en entrant le nom et en appuyant sur OK. |
| 14. | Vérifiez que la fenêtre par défaut ICC ou TCC est configurée et modifiez-la si nécessaire en appuyant sur le champ Fenêtres. |
| 15. | Appuyez sur le bouton Suivant. |
| 16. | Appuyez sur le bouton Démarrer et attendez que les deux mesures soient terminées. |
| 17. | Une fois terminé, appuyez sur le bouton Suivant pour consulter les résultats. |
| 18. | Examinez les résultats et comparez-les aux valeurs de référence indiquées ci-dessous. Le BactoSense est propre si les critères suivants sont remplis : • Pour les cartouches TCC: TCC [/mL] &lt; 300 • Pour les cartouches ICC: ICC [/mL] &lt; 100 |
| 19. | Si les concentrations en cellules sont supérieures aux limites spécifiées, appliquez la procédure suivante : • Répétez la procédure avec un échantillon vierge fraîchement préparé. • Répétez la procédure après une décontamination à l’aide du kit de nettoyage (voir section [Consommables](18-supply-scope-accessories-and-consumables.md#section-18-3)). • Si le test échoue toujours, contactez le service d’assistance bNovate ou votre représentant local. |
| 20. | Une fois terminé, fixez un tube à bouchon fileté propre et vide de 5 mL ou la Washstation au dispositif d’échantillonnage manuel. |

## 8.12 Mode démo {#section-8-12}

Le mode démo peut être utilisé lors de la présentation de l’instrument ou pour apprendre à naviguer dans les menus et à utiliser les fonctions. Lorsqu’il est activé, l’instrument redémarre dans un mode spécial qui affiche des données de démonstration (les résultats de mesure du propriétaire sont masqués). Toutes les fonctions de l’instrument sont remplacées par des simulations qui ne modifient jamais le matériel ni la base de données des résultats. Cela signifie que les protocoles peuvent être démarrés sans qu’il soit nécessaire de charger un échantillon, et les utilisateurs peuvent simuler la suppression ou le re-fenêtrage des résultats sans jamais modifier les données. Si le mode démo est activé, le message ***Démo*** s’affiche en haut au centre de l’écran. Lorsque l’instrument revient en mode normal, les données du propriétaire sont à nouveau affichées et toutes les fonctions sont à nouveau actives.

<table>

<tbody>

<tr>

<th>

</th>

<th>

OPÉRATION

</th>

<th colSpan="2">

INFORMATIONS SUPPLÉMENTAIRES/IMAGE

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

En tant qu’utilisateur Admin, sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres.

</td>

<td colSpan="2">

![BactoSense — Bouton Paramètres](/img/gui/fr/home-settings-button.png "width=57 class=manual-icon-settings-button-half")

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Appuyez sur le bouton Paramètres système. Appuyez sur le bouton Mode démo.

</td>

<td>

![BactoSense — Paramètres système](/img/gui/icons/system-settings-button.png "width=48 class=manual-icon")

</td>

<td>

![BactoSense — Paramètres du mode démo](/img/gui/icons/demo-mode-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Cochez la case Activer mode démo.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Appuyez sur le bouton Enregistrer et quitter.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

L’instrument redémarre automatiquement.

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>

Pour revenir au mode normal, suivez la même procédure, mais décochez la case **Activer mode démo** .

## 8.13 Réinitialisation aux paramètres d’usine {#section-8-13}

La réinitialisation aux paramètres d’usine restaure la plupart des paramètres de l’instrument aux valeurs définies par le fabricant : limites de délimitation, intervalle de mesure, noms de protocole par défaut, utilisateurs, langue et paramètres réseau. Cette option est accessible uniquement par les utilisateurs Admin et Service.

La procédure suivante décrit comment effectuer une réinitialisation aux paramètres d’usine :

<table>

<tbody>

<tr>

<th>

</th>

<th>

OPÉRATION

</th>

<th colSpan="2">

INFORMATIONS SUPPLÉMENTAIRES/IMAGE

</th>

</tr>

<tr>

<td>

1\.

</td>

<td>

En tant qu’utilisateur Admin, sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres.

</td>

<td colSpan="2">

![BactoSense — Bouton Paramètres](/img/gui/fr/home-settings-button.png "width=57 class=manual-icon-settings-button-half")

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Appuyez sur le bouton Maintenance, puis sur le bouton Réinitialisation d’usine.

</td>

<td>

![BactoSense — Menu de maintenance](/img/gui/icons/maintenance-button.png "width=48 class=manual-icon")

</td>

<td>

![BactoSense — Rétablir les paramètres d’usine](/img/gui/icons/factory-reset-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Utilisez les cases à cocher pour sélectionner les paramètres que vous souhaitez réinitialiser : • Paramètres de l’instrument • Mesures (y compris les erreurs et les journaux) • Les deux

</td>

<td colSpan="2">

:::info[Informations supplémentaires]

Les journaux d’entretien, les résultats de validation et l’historique des mises à jour logicielles ne sont pas supprimés.

:::

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Appuyez sur Réinitialiser et redémarrer, puis confirmez avec Oui.

</td>

<td colSpan="2">

</td>

</tr>

</tbody>

</table>
