---
title: "9. Modules d’extension"
sidebar_label: "9. Modules d’extension"
slug: /upgrade-packages
sidebar_position: 9
description: "Manuel d’utilisation BactoSense : Modules d’extension."
---

Selon le modèle de BactoSense, certaines fonctionnalités sont optionnelles et peuvent être activées avec une clé de licence.

## 9.1 Scientific Package {#section-9-1}

Le *Scientific Package* s’adresse aux professionnels de la recherche sur l’eau qui réalisent des analyses de données avancées. Il comprend les fonctions suivantes :

- Fenêtre supplémentaire : appliquez une fenêtre polygonale configurable supplémentaire aux données FL1 / FL2 directement dans l’interface utilisateur.
- Données de diffusion lumineuse : enregistrez et affichez les données de diffusion vers l’avant et de diffusion latérale pour chaque événement détecté. Récupérez les données dans des fichiers FCS pour le post-traitement.

**Fenêtre polygonale supplémentaire** La fenêtre polygonale supplémentaire librement configurable présente les propriétés suivantes :

- Elle est disponible pour les cartouches TCC et ICC.
- Le paramètre de résultat est une concentration cellulaire appelée « Gate+ ».
- La fenêtre peut être ajustée de la même manière que les fenêtres TCC ou ICC par défaut. Consultez la section [Modification des fenêtres](11-results-and-data-analysis.md#section-11-4).

**Détecteurs de diffusion vers l’avant et latérale** Le détecteur de diffusion vers l’avant (FSC) mesure la lumière diffusée par les bactéries ou d’autres particules. Il est placé à un petit angle par rapport à la direction du faisceau laser et mesure ainsi les signaux lumineux dans la direction « avant ». Le détecteur de diffusion latérale (SSC) est quant à lui placé à 90 degrés de la direction du faisceau et mesure la lumière diffusée sur le côté. La combinaison des informations de fluorescence et de diffusion fournit des données à haut contenu, permettant des applications telles que l’empreinte microbiologique, le profilage ou la détection d’anomalies. En particulier, les détecteurs de diffusion permettent une empreinte précise (BactoScore) pour suivre l’évolution de la population bactérienne.

Les données de diffusion sont disponibles des manières suivantes :

- dans les fichiers FCS (Flow Cytometry Standard). Pour plus d’informations sur ce format de fichier, consultez la section [Analyse avancée des données](11-results-and-data-analysis.md#section-11-5).
- sur l’interface utilisateur du BactoSense, sous forme de nuage de points FSC / SSC
- sur l’interface web, sous forme de nuage de points FSC / SSC
- lors du téléchargement des nuages de points sous forme d’images

**Activation du** **Scientific Package**

Activez le package lorsque l’instrument est au repos et que le Mode PLC et le Mode démo sont désactivés.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Contactez votre représentant commercial bNovate pour acheter une clé d’activation. |  |
| 2. | Après réception de la clé d’activation, connectez-vous au BactoSense en tant qu’utilisateur Admin. |  |
| 3. | Sur l’écran d’accueil, appuyez sur Paramètres. |  |
| 4. | Appuyez sur le bouton Paramètres système. | ![BactoSense — Menu Paramètres : Paramètres système](/img/gui/fr/settings-menu-system-settings.png "width=360") |
| 5. | Appuyez sur le bouton Mises à niveau. | ![BactoSense — Paramètres système : Mises à niveau](/img/gui/fr/scientific-package-upgrades-menu.png "width=360") |
| 6. | Appuyez sur le bouton Mise à niveau. | ![BactoSense — Licence du Scientific Package et bouton Mise à niveau](/img/gui/fr/scientific-package-upgrades.png "width=360") |
| 7. | Saisissez la clé d’activation et appuyez sur OK. | OK devient disponible après la saisie d’une clé.<br />![BactoSense — Saisie de la clé d’activation du Scientific Package](/img/gui/fr/scientific-package-activation-key.png "width=360") |

Après une activation réussie, appuyez sur OK dans le message de confirmation. Si l’instrument redémarre, attendez la fin du redémarrage, puis ouvrez de nouveau Mises à niveau. Vérifiez que Paquet scientifique affiche Activé.

## 9.2 Management Package {#section-9-2}

Le *Management Package* est destiné à l’utilisation de l’instrument dans des environnements soumis à des exigences de traçabilité renforcées. Il comprend les fonctions suivantes :

- Gestion avancée des utilisateurs (contrôle d’accès basé sur les rôles)
- Journal d’audit
- Planification avancée

**Gestion avancée des utilisateurs** Avec la fonction *Gestion avancée des utilisateurs*, le propriétaire de l’instrument peut créer différents utilisateurs et leur attribuer différents rôles utilisateur (Basic, Advanced, Admin). Cela permet d’accorder des autorisations différentes à chaque utilisateur et d’enregistrer son activité dans le journal d’audit.

**Journal d’audit** Le *journal d’audit* est un enregistrement de toutes les opérations ou modifications pertinentes effectuées avec l’instrument. Il fournit un historique détaillé des actions effectuées par l’utilisateur ou par l’instrument lui-même. Le *journal d’audit* est accessible des manières suivantes :

- Sur l’interface utilisateur de l’instrument, ouvrez Accueil → Paramètres → Journaux → Journal d’audit (voir [Journal d’accès et journal d’audit](16-warnings-errors-and-troubleshooting.md#section-16-4-4)).
- Lors de l’exportation de toutes les données sur une clé USB, voir la section [Exportation des données vers un périphérique USB](12-data-access-and-export.md#section-12-1).
- Depuis l’interface utilisateur web. L’accès à l’interface utilisateur web est décrit au chapitre [Interface utilisateur web](13-web-user-interface.md).

**Activation du** **Management Package**

Activez le package lorsque l’instrument est au repos et que le Mode PLC et le Mode démo sont désactivés.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Contactez votre représentant commercial bNovate pour acheter une clé d’activation. |  |
| 2. | Après réception de la clé d’activation, connectez-vous au BactoSense en tant qu’utilisateur Admin. |  |
| 3. | Sur l’écran d’accueil, appuyez sur Paramètres. |  |
| 4. | Appuyez sur le bouton Paramètres système. |  |
| 5. | Appuyez sur le bouton Mises à niveau. |  |
| 6. | Appuyez sur le bouton Mise à niveau. |  |
| 7. | Saisissez la clé d’activation et appuyez sur OK. | Remarque : la gestion avancée des utilisateurs n’est pas encore activée. Si vous souhaitez l’activer, suivez les étapes ci-dessous. |
| 8. | Sur l’écran d’accueil, appuyez sur Paramètres. |  |
| 9. | Appuyez sur le bouton Paramètres système. |  |
| 10. | Dans le menu Paramètres système, appuyez de nouveau sur Paramètres système pour ouvrir la configuration du système. |  |
| 11. | Cochez la case Mode avancé de gestion des utilisateurs. |  |
| 12. | Appuyez sur Enregistrer, puis confirmez le message avec OK. |  |
