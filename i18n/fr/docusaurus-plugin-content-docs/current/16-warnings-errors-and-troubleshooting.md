---
title: "16. Avertissements, erreurs et dépannage"
sidebar_label: "16. Avertissements, erreurs et dépannage"
sidebar_position: 16
slug: /warnings-errors-and-troubleshooting
---

En cas de problème, l’instrument passe dans un état différent selon la gravité de l’incident. Il existe des avertissements, des erreurs non critiques et des erreurs critiques, chacun ayant des implications différentes et nécessitant des actions différentes.

## 16.1 Avertissements {#section-16-1}

Les avertissements apparaissent lorsqu’un comportement inhabituel est détecté pendant une mesure par ailleurs réussie. Ils peuvent indiquer une réduction de la précision des résultats de la mesure ou des erreurs imminentes. Contrairement aux erreurs, les avertissements n’empêchent pas le fonctionnement de l’instrument, mais les utilisateurs doivent y prêter attention, car ils peuvent indiquer des sources d’inexactitudes.

| ALERTES | IMAGE |
| --- | --- |
| Lorsqu’un comportement inhabituel est détecté, un avertissement s’affiche à côté des résultats de mesure. Pour plus d’informations sur l’avertissement, cliquez sur l’entrée correspondante à côté des résultats de mesure ou directement dans le journal des avertissements. | ![BactoSense — Avertissement de signal SSC de base élevé](/img/gui/fr/warning-high-ssc-baseline.png "width=252 class=manual-figure") |

Les messages d’avertissement suivants peuvent être affichés :

**Tableau 16-1 Avertissements**

| CODE D’ERREUR | NOM | DESCRIPTION | CAUSES/SOLUTIONS |
| --- | --- | --- | --- |
| W01 | Cartouche expirée | Les réactifs de la cartouche sont expirés. La précision des mesures risque d’être affectée. | • Veuillez remplacer la cartouche dès que possible. |
| W02-04 | Signal trop intense en FL1/FL2/SSC | Les signaux de base sont trop élevés. Ceci est généralement dû à des bulles ou des particules en suspension dans l’échantillon. La précision des mesures risque d’être affectée. | • Vérifiez la présence de dépôts dans la tubulure<br/>d’entrée. • Vérifiez les raccordements d’eau et assurez-vous qu’ils sont tous étanches (pas<br/>d’entrée d’air). • Si l’avertissement persiste, veuillez nettoyer l’instrument à l’aide du kit de nettoyage. |
| W05 | Température d’incubation hors consigne | Température durant l’incubation déviée de plus de 2 °C de la cible. Le nombre de cellules risque d’être affecté. L’incubateur est peut-être défectueux. | • Si le problème persiste, veuillez contacter le service client. |
| W06 | Aucun événement détecté | Aucun événement détecté pendant la mesure. | • Si le problème persiste, veuillez contacter le service client. |
| W07 | TCC hors plage | TCC est au-dessus de la limite spécifiée de 2 000 000 cellules/ml pour le BactoSense. | • Veuillez diluer l’échantillon pour garantir la précision de la mesure. |
| W08 | Bulles d’air détectées | L’échantillon semble contenir des bulles d’air. | • Vérifiez que le dispositif d’échantillonnage est correctement installé. •<br/>Vérifier l’absence de bulles dans l’échantillon. •<br/>Si vous utilisez un dispositif d’échantillonnage en ligne, vérifiez que l’eau est fournie à la pression correcte. |
| W10 | Température trop basse | Température trop basse dans l’appareil. Une chauffe rapide a été activée avant de continuer le protocole. | • L’instrument ne peut pas fonctionner en toute sécurité si la température interne est<br/>trop basse. • Le chauffage rapide tente de chauffer le boîtier pour assurer un fonctionnement<br/>sûr. • Les mesures commenceront une fois que la température interne sera suffisante. |
| W11 | Entretien nécessaire | Un entretien de l’instrument est nécessaire. La précision des mesures ne peut plus être garantie. La poursuite du fonctionnement peut entraîner des fuites, ce qui peut endommager l’instrument. | • La date du prochain entretien est<br/>dépassée. • La valve et le piston ont atteint la fin<br/>de leur durée de vie. • Veuillez contacter votre représentant d’entretien. |
| W13 | Fin de vie du laser | Le laser a atteint la fin de sa vie utile. | • Veuillez contacter votre représentant d’entretien. |
| W14 | Coupure de courant non critique | L’instrument a été éteint de manière inattendue. | • Assurez-vous de la propreté de l’instrument.<br/>• Si le problème se produit fréquemment, installez un système d’alimentation sans interruption. |

## 16.2 Erreurs non critiques {#section-16-2}

Les erreurs non critiques empêchent une mesure de se terminer correctement, mais n’empêchent pas l’instrument d’effectuer une autre mesure ensuite. Elles ne nécessitent pas d’intervention humaine. Certaines deviennent des erreurs critiques si elles se répètent trois fois.

| ERREURS NON CRITIQUES |  |
| --- | --- |
| Le protocole s’arrête. La cause de l’erreur se résout généralement en répétant l’analyse ou<br/>en attendant. • Une autre mesure peut démarrer immédiatement. Si elle réussit, l’état d’erreur est<br/>acquitté. • Pour plus d’informations, ouvrez le journal des erreurs et appuyez sur l’entrée correspondante. | ![BactoSense — Erreur non critique : échantillon vide](/img/gui/fr/noncritical-error-empty-sample.png "width=255 class=manual-figure") |

Les messages d’erreurs non critiques suivants peuvent s’afficher :

**Tableau 16-2 Liste des erreurs non critiques.**

| CODE D’ERREUR | NOM | DESCRIPTION | CAUSES/SOLUTIONS |
| --- | --- | --- | --- |
| E01 | Porte de cartouche ouverte | La porte du compartiment de cartouche est ouverte et empêche l’exécution des mesures. | • Fermez la porte et répétez la mesure. |
| E08 | Boîtier trop humide | L’humidité du boîtier est trop élevée pour un fonctionnement sûr. | • Remplacez le sachet déshydratant en dévissant le grand bouchon sur le côté gauche de l’instrument (voir section<br/>[Remplacement du sachet déshydratant](15-maintenance.md#section-15-2-6)). • Si le problème persiste, contactez le service client. |
| E09 | Surchauffe du système | La température interne est trop élevée pour un fonctionnement sûr. | • Réduisez la température ambiante ou augmentez l’intervalle de mesure pour laisser l’instrument refroidir. |
| E14 | Laser trop chaud | La température du laser est trop élevée pour un fonctionnement sûr. | • Réduisez la température ambiante ou augmentez l’intervalle de mesure pour laisser l’instrument refroidir. |
| E15 | Erreur de remplissage du mélangeur | Une dépression a été détectée pendant le mélange ou la distribution. | • Échantillon manquant.<br/>• Air dans<br/>l’entrée. • Fuite dans<br/>le système. • Exécutez le protocole Clean Optics (voir section [Vue d’ensemble des protocoles en mode manuel](10-measurements.md#section-10-9-1)). |
| E18 | Erreur de dépression de la pompe | Une dépression a été détectée pendant la distribution. | • Échantillon manquant.<br/>• Air dans<br/>l’entrée. • Fuite dans<br/>le système. • Exécutez le protocole Clean Optics (voir section [Vue d’ensemble des protocoles en mode manuel](10-measurements.md#section-10-9-1)). |
| E19 | Surchauffe du système | La température interne est trop élevée pour le fonctionnement. | • Réduisez la température ambiante ou augmentez l’intervalle de mesure pour laisser l’instrument refroidir. |
| E33 | Dépassement de capacité de la mémoire de traitement | La capacité mémoire des circuits de traitement du signal a été dépassée. | • Exécutez le protocole Clean Optics (voir section [Vue d’ensemble des protocoles en mode manuel](10-measurements.md#section-10-9-1)).<br/>• Répétez la mesure. |
| E42 | Boîtier trop froid malgré le chauffage | La température du boîtier reste trop basse après la procédure de chauffage. | • La température ambiante est inférieure à 5 °C (41<br/>°F). • Augmentez la température ambiante. |
| E44 | Erreur de démarrage du module de pompe | Le module de pompe ne s’est pas mis sous tension correctement. | • Répétez simplement la mesure. |
| E45 | Erreur de rapport de volume valide insuffisant | Le rapport de volume valide est trop faible. Cela peut être dû à une teneur bactérienne trop élevée dans l’eau, à la turbidité ou à des débris. | • L’exactitude de la mesure est probablement très faible. Répétez la mesure en diluant l’échantillon avec de l’eau claire. |
| E46 | Cartouche encore occupée | La cartouche était encore en cours d’initialisation au démarrage de la mesure. | • Erreur non critique. Répétez la mesure. Si le problème persiste, contactez un technicien de maintenance. |
| E48 | Sous-système microfluidique occupé | Le contrôleur microfluidique effectuait une autre tâche pendant la mesure. | • Erreur non critique. Répétez la mesure. Si le problème persiste, contactez un technicien de maintenance. |
| E49 | Erreur de délai d’attente GPIO | La carte de traitement attend la réponse d’un autre module. | • Erreur non critique. Répétez la mesure. Si le problème persiste, contactez un technicien de maintenance. |
| E50 | Mouvement de la pompe bloqué | Le mouvement de la pompe est bloqué. | • Erreur non critique. Répétez la mesure. Si le problème persiste, contactez un technicien de maintenance. |
| E51 | Lecture de la température impossible | Impossible de lire la température. La boucle de régulation est donc désactivée. | • Erreur non critique. Répétez la mesure. Si le problème persiste, contactez un technicien de maintenance. |
| E52 | Mouvement de la vanne de cartouche bloqué | Le mouvement de la vanne de cartouche est bloqué. | • Erreur non critique. Répétez la mesure. Si le problème persiste, contactez le service client. |
| E55 | M7 non connecté | Le processeur d’acquisition ne peut pas être initialisé. | • Redémarrez l’instrument. •<br/>Si le problème persiste, contactez le service client. |
| E56 | Acquisition vide | Aucun événement détecté pendant l’acquisition | • Nettoyez le dispositif d’échantillonnage avec la Washstation, puis effectuez une mesure d’eau propre. •<br/>Si le problème persiste, contactez le service client. |
| E57 | Cartouche occupée (commande spéciale en cours) | La communication avec la cartouche a échoué. | • Erreur non critique. Répétez la mesure.<br/>• Si le problème persiste, contactez le service client. |
| E58 | Cartouche occupée (délai d’attente dépassé) | La communication avec la cartouche a échoué. | • Vérifiez le connecteur électronique entre la cartouche et l’instrument. •<br/>Répétez la mesure. •<br/>Si le problème persiste, contactez le service client. |
| E59 | Erreur de capteur de vanne | Impossible de lire la position de la vanne. | • Contactez le service client. |

## 16.3 Erreurs critiques {#section-16-3}

Les erreurs critiques interrompent les flux de travail de l’instrument et nécessitent une intervention humaine. La source de l’erreur doit être éliminée et l’instrument doit être remis en état de marche. Les erreurs critiques doivent être effacées.

| ERREURS CRITIQUES | IMAGE |
| --- | --- |
| Si une erreur critique survient pendant le fonctionnement, elle a les effets<br/>suivants : • Le protocole s’arrête<br/>immédiatement. • L’instrument passe en état d’erreur critique et une intervention manuelle est nécessaire avant de lancer un nouveau protocole.<br/>• Un opérateur doit résoudre la cause de l’erreur. Les erreurs peuvent ensuite être acquittées manuellement dans Error log, comme décrit aux sections [Journal d’erreurs](16-warnings-errors-and-troubleshooting.md#section-16-4-1) et [Acquitter les erreurs](16-warnings-errors-and-troubleshooting.md#section-16-5). | ![BactoSense — Erreur critique : cartouche absente](/img/gui/fr/critical-error-missing-cartridge.png "width=253 class=manual-figure") |

Les messages d’erreurs critiques suivants peuvent s’afficher :

**Tableau 16-3 Liste des erreurs critiques.**

| CODE D’ERREUR | NOM | DESCRIPTION | CAUSES/SOLUTIONS |
| --- | --- | --- | --- |
| E00 | Erreur générale | Erreur non gérée. | • Contactez le service client |
| E02 | Cartouche vide | La cartouche est vide. | • Remplacez la cartouche (voir section [Remplacement des cartouches](08-general-operations-and-configurations.md#section-8-9-4)) |
| E04 | Cartouche absente | La cartouche est absente. | • Insérez une cartouche (voir section [Installation d’une cartouche](08-general-operations-and-configurations.md#section-8-9-6)) |
| E05 | Poche de déchets pleine | La poche de déchets de la cartouche est pleine. | • Remplacez la cartouche (voir section [Remplacement des cartouches](08-general-operations-and-configurations.md#section-8-9-4)) |
| E06 | Communication avec la cartouche impossible | La cartouche est déconnectée, la porte est ouverte ou l’électronique de la cartouche est endommagée. | • Assurez-vous que le câble électronique de la cartouche est correctement raccordé et que la porte est bien fermée. • Si<br/>cela ne résout pas le problème, remplacez la cartouche et informez le service client. |
| E07 | Disque de stockage plein | L’espace de stockage est insuffisant pour poursuivre le fonctionnement. | • Supprimez d’anciennes mesures et réessayez (voir section [Libération d’espace disque](15-maintenance.md#section-15-2-8)).<br/>• Cette opération supprime définitivement les mesures de l’appareil. •<br/>Exportez les mesures pour les sauvegarder. |
| E12 | Erreur d’initialisation du FPGA | Impossible d’initialiser la puce de traitement du signal. | • Redémarrez l’instrument. |
| E16 | Erreur de traitement | Une erreur a été détectée pendant le traitement des signaux. | • L’exactitude du dernier résultat n’est pas garantie. Répétez l’analyse. |
| E17 | Surpression détectée | Une surpression a été détectée pendant la distribution. | • Cause probable : le filtre de sortie est probablement obstrué.<br/>• Cellule de mesure optique<br/>bloquée. • Contactez le service client. |
| E20 | Arrêt anormal | Le protocole a été interrompu pour une raison inconnue, généralement une coupure d’alimentation. | • Indique généralement une coupure d’alimentation ou une autre interruption externe de la<br/>mesure. • Exécutez les protocoles Clean Optics et Clean Sampling Device avant une nouvelle mesure (voir section [Vue d’ensemble des protocoles en mode manuel](10-measurements.md#section-10-9-1)). |
| E23 | Erreur de communication du capteur de température | La communication avec le capteur de température de la carte d’E/S a échoué. | • Contactez le service client. |
| E24 | Erreur de communication du laser | La communication avec l’unité optique a échoué. | • Contactez le service client. |
| E25 | Erreur de communication de la pompe | La communication avec le module de pompe est impossible. | • Contactez le service client. |
| E26 | Erreur de communication de l’alimentation | La communication avec le module d’alimentation est impossible. | • Contactez le service client. |
| E27 | Délai de communication de la pompe dépassé | Le délai de communication avec le module de pompe a été dépassé. | • La porte de la cartouche<br/>est ouverte. • Un câble est<br/>déconnecté. • Une carte électronique est endommagée, dans la pompe ou dans la cartouche. |
| E28 | Réserve de colorant vide | Le tuyau de colorant raccordé à la cartouche est vide. | • Le tuyau est déconnecté.<br/>• La cartouche est défectueuse.<br/>• Répétez la procédure de remplacement de la cartouche en vérifiant le raccordement de tous les tuyaux. |
| E29 | Réserve de liquide de rinçage vide | Le tuyau de liquide de rinçage raccordé à la cartouche est vide. | • Le tuyau est déconnecté.<br/>• La cartouche est défectueuse.<br/>• Répétez la procédure de remplacement de la cartouche en vérifiant le raccordement de tous les tuyaux. |
| E30 | Réserve de solution chlorée vide | Le tuyau de solution chlorée raccordé à la cartouche est vide | • Le tuyau est déconnecté.<br/>• La cartouche est défectueuse.<br/>• Répétez la procédure de remplacement de la cartouche en vérifiant le raccordement de tous les tuyaux. |
| E31 | Défaillance électronique de la cartouche | Le niveau de la cartouche ne peut plus être déterminé avec précision. | • Remplacez la cartouche et contactez le service client. |
| E32 | Cartouche incompatible | Le type de cartouche est incompatible avec cet instrument ou ce logiciel. | • Assurez-vous d’avoir le type de cartouche adapté à cet instrument. |
| E33 | Dépassement de capacité de la mémoire de traitement | La capacité mémoire des circuits de traitement du signal a été dépassée. | • Exécutez le protocole Clean Optics (voir section [Vue d’ensemble des protocoles en mode manuel](10-measurements.md#section-10-9-1)).<br/>• Répétez la mesure. |
| E38 | Erreur : cartouche non prête | La nouvelle cartouche n’a pas été initialisée correctement | • Exécutez la procédure « Cartridge Change » (voir section [Remplacement des cartouches](08-general-operations-and-configurations.md#section-8-9-4)). |
| E39 | Limite de courant du laser atteinte | Le laser a atteint sa limite supérieure de courant, ce qui indique sa fin de vie. | • Le laser doit être remplacé. Contactez un technicien de maintenance. |
| E40 | Jeu de fenêtres introuvable | La référence du jeu de fenêtres sélectionné pour la mesure est introuvable dans les paramètres de l’instrument. | • Le jeu de fenêtres a été<br/>supprimé. • Changez de jeu de fenêtres et répétez la mesure. |
| E41 | Jeu de fenêtres incompatible | Le jeu de fenêtres sélectionné pour la mesure ne peut pas être utilisé avec cette cartouche. | • La procédure correcte de remplacement de cartouche n’a pas<br/>été suivie. • Configuration incorrecte des entrées numériques.<br/>• Changez de jeu de fenêtres et répétez la mesure. |
| E43 | Température extérieure trop basse | La température ambiante est hors des spécifications de l’instrument. | • Augmentez la température ambiante.<br/>• Toute tentative d’utilisation ou de stockage sous 5 °C (41 °F) peut endommager l’appareil. |
| E47 | Aimant de référence principal introuvable lors du retour à l’origine | Pendant l’initialisation, la vanne n’a pas correctement retrouvé sa position d’origine. | • Contactez le service client. |
| E53 | Communication avec le moteur impossible | La communication avec le contrôleur du moteur du mélangeur est défectueuse. | • Contactez le service client. |
| E54 | Erreur du capteur de température du laser | Impossible de lire la température du laser. | • Contactez le service client. |

## 16.4 Journaux {#section-16-4}

L’instrument enregistre les erreurs, les avertissements, les alarmes et l’activité des utilisateurs dans des journaux. Sur l’écran d’accueil, appuyez sur **Paramètres**, puis sur **Journaux**. Le menu **Journaux** contient les entrées suivantes :

| ENTRÉE | CONTENU | ACCESSIBLE À |
| --- | --- | --- |
| **Journal d'erreurs** | Erreurs critiques et non critiques, ainsi que les événements qui les ont acquittées. Voir [Journal d’erreurs](16-warnings-errors-and-troubleshooting.md#section-16-4-1). | Utilisateurs Basic, Advanced et Admin |
| **Journal d'alertes** | Avertissements émis pendant les mesures. Voir [Journal d’alertes](16-warnings-errors-and-troubleshooting.md#section-16-4-2). | Utilisateurs Basic, Advanced et Admin |
| **Journal des alarmes** | Alarmes déclenchées par les résultats de mesure, y compris les alarmes BactoCloud. Voir [Journal des alarmes](16-warnings-errors-and-troubleshooting.md#section-16-4-3). | Utilisateurs Basic, Advanced et Admin |
| **Journal d'accès** | Tentatives de connexion échouées. Voir [Journal d’accès et journal d’audit](16-warnings-errors-and-troubleshooting.md#section-16-4-4). | Utilisateurs Admin, avec le Management Package |
| **Journal d'audit** | Opérations et modifications de paramètres effectuées par les utilisateurs et par l’instrument. Voir [Journal d’accès et journal d’audit](16-warnings-errors-and-troubleshooting.md#section-16-4-4). | Utilisateurs Admin, avec le Management Package |
| **Results (manual mode)**, **Results (online mode)**, **Résultats de validation** | Résultats de mesure de chaque mode. Voir [Filtrage des mesures](10-measurements.md#section-10-7) et [Résultats et analyse des données](11-results-and-data-analysis.md). | Utilisateurs Basic, Advanced et Admin |

Les entrées les plus récentes figurent en haut de la liste. Le **Journal d'erreurs**, le **Journal d'alertes**, le **Journal des alarmes** et le **Journal d'audit** affichent la **Période affichée:** dans la barre d’actions. Par défaut, elle s’étend de l’entrée la plus ancienne à la plus récente ; le **Journal d'audit** affiche les sept derniers jours. Appuyez sur la période pour en afficher une autre (voir [Modifier la période affichée](16-warnings-errors-and-troubleshooting.md#section-16-4-5)).

### 16.4.1 Journal d’erreurs {#section-16-4-1}

![BactoSense — Journal des erreurs](/img/gui/fr/error-log.png "width=558 class=manual-figure")

*Figure 16-1 : Journal d’erreurs*

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| ① | Date et heure de l’événement | ② | Type d’événement. Seule l’entrée la plus récente affiche son symbole en couleur ; les entrées plus anciennes l’affichent en gris. | \< |
| ^ | ^ | ^ | ![BactoSense — Entrée du journal : erreur critique](/img/gui/icons/critical-error-event.png "width=32 class=manual-icon") | Erreur critique |
| ^ | ^ | ^ | ![BactoSense — Entrée du journal : erreur non critique](/img/gui/icons/noncritical-error-event.png "width=32 class=manual-icon") | Erreur non critique |
| ^ | ^ | ^ | ![BactoSense — Entrée du journal : erreurs acquittées](/img/gui/icons/errors-cleared-event.png "width=32 class=manual-icon") | Erreurs acquittées |
| ③ | Code et brève description de l’erreur ou de l’événement. Le nombre entre parenthèses indique combien de fois l’erreur s’est produite depuis le dernier acquittement des erreurs. | ④ | Bouton **Quittancer les erreurs** (accessible aux utilisateurs Basic, Advanced et Admin lorsque l’instrument est au repos). Voir [Acquitter les erreurs](16-warnings-errors-and-troubleshooting.md#section-16-5). | \< |
| ⑤ | Période affichée. Appuyez dessus pour la modifier. |  |  | \< |

La couleur de la ligne indique le type de chaque entrée : rouge pour les erreurs critiques, jaune pour les erreurs non critiques et bleu pour les événements d’acquittement. Les codes d’erreur commencent par E et sont répertoriés dans [Erreurs non critiques](16-warnings-errors-and-troubleshooting.md#section-16-2) et [Erreurs critiques](16-warnings-errors-and-troubleshooting.md#section-16-3). Deux événements enregistrent l’acquittement des erreurs :

- **C01 – Erreurs quittancées automatiquement** : après une erreur non critique, l’instrument a terminé un protocole avec succès et considère les erreurs précédentes comme résolues.
- **C02 – Erreurs quittancées manuellement** : un utilisateur a appuyé sur **Quittancer les erreurs** (voir [Acquitter les erreurs](16-warnings-errors-and-troubleshooting.md#section-16-5)).

Si aucune erreur n’a été enregistrée pendant la période affichée, **No errors in this date range** s’affiche.

:::info[Consultez les détails des événements]

Sélectionnez une entrée pour ouvrir une page contenant plus d’informations sur la cause de l’erreur et les étapes de résolution recommandées. Appuyez sur **Fermer** pour revenir au journal.

:::

### 16.4.2 Journal d’alertes {#section-16-4-2}

Le **Journal d'alertes** répertorie les avertissements émis pendant les mesures. Chaque ligne affiche :

- **Date** : date et heure de l’avertissement.
- **Description** : code et nom de l’avertissement. Les codes sont répertoriés dans [Avertissements](16-warnings-errors-and-troubleshooting.md#section-16-1).
- **Contexte** : contexte de l’avertissement : **Manuel** (mode manuel), **Auto** (mode en ligne), **Maintenance** ou **Validation**.

Sélectionnez un avertissement pour afficher sa description. Appuyez sur **Fermer** pour revenir au journal. Si aucun avertissement n’a été enregistré pendant la période affichée, **No warnings in this date range** s’affiche.

### 16.4.3 Journal des alarmes {#section-16-4-3}

Le **Journal des alarmes** répertorie les alarmes déclenchées par les résultats de mesure. Il comprend les alarmes propres à l’instrument (voir [Configuration des alarmes](08-general-operations-and-configurations.md#section-8-5)) et, lorsque l’instrument est connecté à BactoCloud, les alarmes générées par les règles d’alarme BactoCloud (voir [BactoCloud](14-bactocloud.md)). Chaque ligne affiche :

- **Date** : date et heure de la mesure ayant déclenché l’alarme.
- **Nom** : une cloche et le nom de l’alarme. La cloche est rouge pour les alarmes de l’instrument. Pour les alarmes BactoCloud, sa couleur indique la gravité : rouge pour Critique, orange pour Alerte et bleu pour Info.
- **Alarme** : la source, la condition et le seuil de l’alarme, par exemple *Cartridge Remaining < 10 %*.

Les alarmes BactoCloud affichent également un symbole de nuage en fin de ligne. Pour acquitter une alarme BactoCloud après l’avoir examinée, appuyez sur le bouton de coche à côté du symbole de nuage ; les alarmes acquittées affichent alors une coche. **Acknowledge all** acquitte toutes les alarmes BactoCloud non acquittées de la liste et n’est disponible que s’il en reste au moins une. L’acquittement est enregistré dans BactoCloud. Il documente l’examen, mais ne résout pas la cause de l’alarme.

Sélectionnez une alarme pour ouvrir le résultat de mesure qui l’a déclenchée.

### 16.4.4 Journal d’accès et journal d’audit {#section-16-4-4}

Le **Journal d'accès** et le **Journal d'audit** font partie du Management Package (voir [Management Package](09-upgrade-packages.md#section-9-2)) et sont accessibles aux utilisateurs Admin. Sans ce package, une pression sur l’un de ces boutons affiche des informations sur le Management Package.

**Journal d'accès** ouvre la liste **Tentatives de connexion échouées** des 30 derniers jours. Chaque ligne affiche la **Date**, le **Nom d'utilisateur**, le **Rôle** de l’utilisateur et le nombre de tentatives de connexion échouées de cet utilisateur ce jour-là. S’il n’y en a aucune, **Aucune tentative de connexion échouée** s’affiche.

**Journal d'audit** répertorie les opérations pertinentes et les modifications de paramètres effectuées par les utilisateurs ou par l’instrument. Chaque entrée affiche la **Date**, le **Nom d'utilisateur** et l’**Evénement**, ainsi que, le cas échéant, le **Paramètre** modifié avec son **Ancienne valeur** et sa **Nouvelle valeur**. Le journal d’audit est également inclus lors de l’exportation de toutes les données sur une clé USB et peut être consulté dans l’interface utilisateur web.

### 16.4.5 Modifier la période affichée {#section-16-4-5}

La procédure suivante s’applique au **Journal d'erreurs**, au **Journal d'alertes**, au **Journal des alarmes** et au **Journal d'audit**.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Ouvrez le journal et appuyez sur le bouton de période à côté de **Période affichée:**. | L’écran **Période de temps** s’ouvre. |
| 2. | Appuyez sur le champ sous **Date de début** et sélectionnez le premier jour dans le calendrier. Appuyez sur le champ d’heure situé en dessous et réglez l’heure et les minutes. Réglez **Date de fin** et son heure de la même manière. | La fin ne peut pas précéder le début. |
| 3. | Appuyez sur **OK**. | Le journal n’affiche que les entrées de la période sélectionnée. |

Pour rétablir la période par défaut, appuyez sur **Remise à zéro** dans l’écran **Période de temps**, puis sur **OK**.

## 16.5 Acquitter les erreurs {#section-16-5}

Les erreurs critiques doivent être acquittées manuellement. Avant de procéder à l’acquittement, assurez-vous d’avoir résolu la cause du problème. Veuillez noter que la procédure décrite ci-dessous ne résout pas automatiquement la cause profonde de l’erreur.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Sur l’écran d’accueil, appuyez sur **Paramètres** pour ouvrir le menu des paramètres. |  |
| 2. | Appuyez sur **Journaux**, puis sur **Journal d'erreurs**. |  |
| 3. | Assurez-vous d’avoir résolu le problème à l’origine de l’erreur affichée. Appuyez ensuite sur **Quittancer les erreurs**. | Le bouton est accessible aux utilisateurs Basic, Advanced et Admin tant qu’aucun protocole n’est en cours.<br />![BactoSense — Effacer les erreurs](/img/gui/fr/error-log-clear-errors.png "width=245 class=manual-figure") |
| 4. | Un événement **C02 – Erreurs quittancées manuellement** est ajouté en haut du journal, et les symboles des erreurs précédentes deviennent gris. L’instrument est prêt pour une nouvelle analyse. |  |

## 16.6 Autovérification automatique {#section-16-6}

L’outil d’autovérification automatique permet de vérifier le fonctionnement correct de chaque composant du BactoSense et d’identifier ceux qui ne fonctionnent pas. Il peut être utilisé pour identifier les problèmes de l’instrument.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1\. | En tant qu’utilisateur Advanced ou Admin, sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres. |  |
| 2\. | Appuyez sur le bouton Maintenance. |  |
| 3\. | Appuyez sur le bouton Autocontrôle. |  |
| 4\. | :::info[Informations supplémentaires] Appuyez sur le bouton Relancer. À la fin, l’instrument affiche la liste des tests avec un indicateur PASS vert ou FAIL rouge. Certains tests peuvent être ignorés : si le système ne peut pas communiquer avec la cartouche, tous les tests qui nécessitent cette communication sont ignorés. ::: | ![BactoSense — Résultats de l’auto-test](/img/gui/fr/self-check-results.png "width=245 class=manual-figure") |

## 16.7 Fonctionnement à basse température {#section-16-7}

L’instrument doit être utilisé dans une plage de température précise pour éviter les dommages et garantir des résultats fiables et reproductibles (voir section [Données techniques](03-instrument-overview.md#section-3-2)). À des températures ambiantes très basses ou très élevées (sous 5 °C (41 °F) ou au-dessus de 30 °C (86 °F)), les protocoles ne sont pas exécutés. À basse température ambiante, l’instrument se réchauffe automatiquement avant une mesure jusqu’à la température requise. Pendant ce chauffage, son état affiche « Heating... ». Si la température cible n’est pas atteinte après plusieurs heures, le protocole se termine avec une erreur (tableau 16-2, E42).

:::info[Prévoyez le temps de chauffage]

Les mesures peuvent être retardées lorsqu’un chauffage prolongé est nécessaire. Pour l’éviter, maintenez la température de l’instrument au-dessus de 10 °C (50 °F).

:::

## 16.8 Instructions de résolution des problèmes {#section-16-8}

Le tableau suivant présente un aperçu des problèmes courants et des solutions correspondantes. Si le problème persiste, veuillez contacter votre représentant de service local ou le service client de bNovate. Les coordonnées du service client de bNovate se trouvent à la section [Contacter le service client](19-contact.md#section-19-1).

**Tableau 16-4 Instructions de résolution des problèmes**

|  |  |
| --- | --- |
| OBSERVATION | INSTRUCTION |
| Rien ne s’affiche à l’écran | • Vérifiez si le BactoSense est connecté à l’alimentation électrique et allumé. |
| Interface utilisateur non réactive ou vacillante | • Interférence électromagnétique potentielle d'une machine voisine (par exemple, une pompe). Déplacer le BactoSense. |
| Message d’erreur sur l’écran | • Répondez au message d’erreur comme décrit dans ce chapitre. |
| Les mesures semblent incorrectes | • Assurez-vous que l’échantillon et les conditions de fonctionnement respectent les consignes de<br/>la section [Données techniques](../instrument-overview/#section-3-2). • Vérifiez si l’instrument est correctement installé conformément au chapitre<br/>[Installation](../installation/). • Assurez-vous que les tâches d’entretien ont été effectuées conformément aux calendriers d’entretien décrits dans les sections [Maintenance préventive périodique par un professionnel en entretien et en réparation](../maintenance/#section-15-1) et<br/>[Maintenance par l’utilisateur](../maintenance/#section-15-2). • Nettoyez l’instrument à l’aide du kit de<br/>nettoyage. • Validez l’instrument à l’aide du kit de validation. |
