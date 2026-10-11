---
title: "9. Modules d’extension"
sidebar_label: "9. Modules d’extension"
slug: /upgrade-packages
sidebar_position: 9
description: "Manuel d’utilisation BactoSense : Modules d’extension."
---

Selon le modèle de BactoSense, certaines fonctionnalités sont optionnelles et peuvent être activées avec une clé de licence.

## 9.1 Scientific Package {#section-9-1}

Le *Scientific Package* s’adresse aux professionnels de la recherche sur l’eau pour l’analyse avancée des données. Il comprend les fonctions suivantes :

- Fenêtre supplémentaire : appliquez une fenêtre polygonale configurable supplémentaire aux données FL1 / FL2 directement dans l’interface utilisateur.
- Données de diffusion lumineuse : enregistrez et affichez les données de diffusion vers l’avant et latérale pour chaque événement détecté. Récupérez-les dans les fichiers FCS pour le post-traitement.

**Fenêtre polygonale supplémentaire** La fenêtre polygonale supplémentaire librement configurable présente les propriétés suivantes :

- La fenêtre supplémentaire est disponible pour les cartouches TCC et ICC.
- Le paramètre de résultat est une concentration cellulaire appelée « Gate+ ».
- La fenêtre peut être ajustée de la même manière que les fenêtres TCC ou ICC par défaut. Consultez la section [Modification des fenêtres](11-results-and-data-analysis.md#section-11-4).

**Détecteurs de diffusion vers l’avant et latérale** Le détecteur de diffusion vers l’avant (FSC) mesure la lumière diffusée par les bactéries ou d’autres particules. Il est placé à un petit angle par rapport à la direction du faisceau laser et mesure donc la lumière diffusée « vers l’avant ». Le détecteur de diffusion latérale (SSC), quant à lui, est placé à 90 degrés du faisceau et mesure la lumière diffusée sur le côté. La combinaison des informations de fluorescence et de diffusion fournit des données riches, permettant des applications telles que l’empreinte microbiologique, le profilage ou la détection d’anomalies.

Les données des détecteurs de diffusion sont disponibles des manières suivantes :

- dans les fichiers standard de cytométrie de flux (FCS). Pour plus d’informations sur ce format de fichier, consultez la section [Analyse avancée des données](11-results-and-data-analysis.md#section-11-5).
- sur l’interface utilisateur de BactoSense sous forme de dotplot FSC/SSC
- sur l’interface web sous forme de dotplot FSC/SSC
- lors du téléchargement des dotplots sous forme d’images

**Activation du** **Scientific Package**

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Contactez votre représentant commercial bNovate pour acheter une clé d’activation. |  |
| 2. | Après réception de la clé, connectez-vous au BactoSense avec le rôle Admin. |  |
| 3. | Sur l’écran d’accueil, appuyez sur Paramètres. |  |
| 4. | Appuyez sur le bouton Paramètres système. |  |
| 5. | Appuyez sur le bouton Mises à niveau. |  |
| 6. | Appuyez sur le bouton Mise à niveau. |  |
| 7. | Saisissez la clé d’activation et appuyez sur OK. |  |

## 9.2 Management Package {#section-9-2}

Le *Management Package* s’adresse à l’utilisation de l’instrument dans des environnements aux exigences de traçabilité renforcées. Il comprend les fonctions suivantes :

- Gestion avancée des utilisateurs (contrôle d'accès basé sur les rôles)
- Journal d’audit

**Advanced User Management** Avec la fonction *Advanced User Management* , le propriétaire de l’instrument peut créer différents utilisateurs et leur attribuer différents rôles (Basic, Advanced, Admin). Cela permet d’accorder des autorisations propres à chaque utilisateur et d’enregistrer son activité dans la piste d’audit.

**Audit Trail** Le *Audit Trail* est un enregistrement de toutes les opérations ou modifications pertinentes effectuées sur l’instrument. Il fournit un historique détaillé des actions de l’utilisateur ou de l’instrument lui-même. La fonction *Audit Trail* est accessible de plusieurs façons :

- Sur l’interface utilisateur de l’instrument, ouvrez Accueil → Paramètres → Journaux → Journal d’audit.
- Lors de l’exportation de toutes les données sur une clé USB, voir section [Exportation des données vers un périphérique USB](12-data-access-and-export.md#section-12-1).
- À partir de l'interface utilisateur web. L'accès à l'interface utilisateur Web est décrit au chapitre [Interface utilisateur web](13-web-user-interface.md).

**Activation du** **Management Package**

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Contactez votre représentant commercial bNovate pour acheter une clé d’activation. |  |
| 2. | Après réception de la clé, connectez-vous au BactoSense avec le rôle Admin. |  |
| 3. | Sur l’écran d’accueil, appuyez sur Paramètres. |  |
| 4. | Appuyez sur le bouton Paramètres système. |  |
| 5. | Appuyez sur le bouton Mises à niveau. |  |
| 6. | Appuyez sur le bouton Mise à niveau. |  |
| 7. | Saisissez la clé d’activation et appuyez sur OK. | Remarque : la gestion avancée des utilisateurs n’est pas encore activée. Pour l’activer, suivez les étapes suivantes. |
| 8. | Sur l’écran d’accueil, appuyez sur Paramètres. |  |
| 9. | Appuyez sur le bouton Paramètres système. |  |
| 10. | Dans le menu Paramètres système, appuyez sur Paramètres système pour ouvrir la configuration. |  |
| 11. | Cochez la case Mode avancé de gestion des utilisateurs. |  |
| 12. | Appuyez sur Enregistrer, puis confirmez le message avec OK. |  |
