---
title: "10. Mesures"
sidebar_label: "10. Mesures"
sidebar_position: 10
slug: /measurements
---

## 10.1 Échantillons {#section-10-1}

Le BactoSense peut mesurer des échantillons ponctuels prélevés manuellement à l’aide du dispositif d’échantillonnage manuel, ainsi que des échantillons prélevés automatiquement à partir d’une source d’eau connectée à l’aide du dispositif d’échantillonnage en ligne.

Types d’échantillons et prétraitements :

- Les eaux brutes et en particulier les eaux de surface doivent être filtrées avec un filtre de 20 µm. Les particules peuvent obstruer les filtres internes et endommager l’instrument. L’eau claire, censée être potable, n’a généralement pas besoin d’être filtrée.
- L’eau gazeuse et les boissons gazeuses ne peuvent pas être analysées par l’instrument sans dégazage.
- Une eau à forte concentration de chlore peut affecter les résultats de la mesure.
- L’échantillon et les conditions de fonctionnement doivent respecter les données techniques de la section [Données techniques](03-instrument-overview.md#section-3-2).

## 10.2 Mesure en ligne {#section-10-2}

La mesure en mode en ligne correspond à une configuration dans laquelle le BactoSense est raccordé à une source d’eau via le dispositif d’échantillonnage en ligne et prélève et mesure automatiquement un échantillon à des intervalles prédéfinis.

Si vous souhaitez plutôt mesurer des échantillons ponctuels collectés manuellement, reportez-vous à la section [Mesure en mode manuel](10-measurements.md#section-10-3).

### 10.2.1 Configuration et démarrage des mesures autos en ligne {#section-10-2-1}

Les instructions suivantes montrent comment configurer et lancer des mesures automatiques en ligne à l’aide du dispositif d’échantillonnage en ligne.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Assurez-vous que le dispositif d’échantillonnage en ligne est bien fixé comme décrit à la section [Installation du dispositif d’échantillonnage en ligne](05-installation.md#section-5-5). | Si le dispositif manuel est installé et que vous souhaitez passer au dispositif en ligne, consultez la section [Retrait du dispositif d’échantillonnage manuel](08-general-operations-and-configurations.md#section-8-10-2) pour retirer le dispositif manuel et la section [Installation du dispositif d’échantillonnage en ligne](05-installation.md#section-5-5) pour installer le dispositif en ligne. |
| 2. | Dans l’interface utilisateur de BactoSense, accédez au Menu principal. |  |
| 3. | Dans la barre d’action en bas, sélectionnez le mode en ligne et appuyez sur Start. |  |
| 4. | Appuyez sur le bouton Démarrer. |  |
| 5. | Sous Protocol, vérifiez que la case « Online Sampling Device (with Backflush) » est cochée. |  |
| 6. | Saisissez un nom d’échantillon en appuyant sur le champ Sample name. |  |
| 7. | Sélectionnez la fenêtre à appliquer aux mesures en appuyant sur le champ Gates. | Les fenêtres TCC et ICC par défaut sont généralement utilisées. Utilisez des fenêtres personnalisées si votre application l’exige. La création et l’ajustement des fenêtres sont décrits au chapitre [Résultats et analyse des données](11-results-and-data-analysis.md). |
| 8. | Appuyez sur le bouton Suivant. |  |
| 9. | Sélectionnez l’intervalle de mesure avec la molette à droite. | L’intervalle de mesure correspond au temps entre deux mesures et peut aller de 30 min à 6 heures. |
| 10. | Si nécessaire, différez le démarrage en décochant Start immediately et choisissez une heure de début précise. | Le réglage de l’heure du BactoSense est décrit à la section [Date et heure](08-general-operations-and-configurations.md#section-8-3-2). |
| 11. | Appuyez sur le bouton Démarrer. | Pendant la mesure, l’estimation actuelle de la concentration cellulaire est affichée dans la barre d’action sous « Last ». |
| 12. | Après chaque mesure, le graphique de la série temporelle est actualisé. | Pour plus de détails, appuyez sur View results. |
| 13. | Pour arrêter une série de mesures en ligne, consultez la section [Arrêt des mesures automatiques en ligne](10-measurements.md#section-10-2-2). |  |

### 10.2.2 Arrêt des mesures automatiques en ligne {#section-10-2-2}

Suivez les étapes ci-dessous pour arrêter une série de mesures en mode en ligne.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Appuyez sur le bouton Stop sur l’interface utilisateur. |  |
| 2. | Confirmez le message pour arrêter la série de mesures en mode en ligne. |  |
| 3. | Si une mesure est en cours, vous pouvez choisir de l’arrêter immédiatement ou d’en attendre la fin. |  |
| 4. | Si vous ne poursuivez pas avec une autre série de mesures dans les heures qui suivent, procédez au retrait du dispositif d’échantillonnage en ligne comme décrit dans la section [Retrait du dispositif d’échantillonnage en ligne](08-general-operations-and-configurations.md#section-8-10-1) et à l’installation du dispositif d’échantillonnage manuel comme décrit dans la section [Installation du dispositif d’échantillonnage manuel](05-installation.md#section-5-4). |  |
| 5. | Si vous souhaitez consulter vos données, reportez-vous à la section [Consultation des mesures automatiques en ligne](10-measurements.md#section-10-2-3). Si vous souhaitez récupérer vos données, référez-vous au chapitre [Accès aux données et exportation](12-data-access-and-export.md). |  |

### 10.2.3 Consultation des mesures automatiques en ligne {#section-10-2-3}

En mode en ligne, appuyez sur le graphique de l’écran d’accueil pour ouvrir le graphique linéaire des résultats des mesures au fil du temps.

![BactoSense — Graphique des résultats en ligne](/img/gui/fr/online-results-chart.png "width=532 class=manual-figure")

*Figure 10-1 Vue d’ensemble des résultats en mode en ligne*

En appuyant sur le bouton à icône d’engrenage (flèche de la figure 10-1), les utilisateurs peuvent modifier les échelles et les paramètres affichés (voir figure 10-2). Pour afficher des alarmes sur le graphique, créez une alarme et activez son paramètre « Display alarm » (voir [Configuration des alarmes](08-general-operations-and-configurations.md#section-8-5)).

![BactoSense — Paramètres du graphique en ligne](/img/gui/fr/online-chart-settings.png "width=531 class=manual-figure")

*Figure 10-2 Paramètres du graphique en mode en ligne*

|  |  |
| --- | --- |
| 1 | Ajustez l’échelle de pourcentage. Touchez la moitié supérieure de la barre d’échelle pour déplacer la limite supérieure. Touchez la moitié inférieure pour déplacer la limite inférieure. |
| 2 | Ajustez l’échelle des valeurs. Touchez la moitié supérieure de la barre d’échelle pour déplacer la limite supérieure. Touchez la moitié inférieure pour déplacer la limite inférieure. |
| 3 | Choisissez l’intervalle d’affichage ou filtrez par nom (voir section [Filtrage des mesures](../measurements/#section-10-7)). |
| 4 | Choisissez l’échelle verticale : •<br/>L’échelle automatique s’adapte aux données actuelles. • La<br/>pleine échelle affiche la plage complète de l’instrument. • L’échelle<br/>personnalisée est réglée à l’aide des curseurs 1 et 2. Les options Logarithmique et Linéaire contrôlent l’échelle des valeurs (échelle de droite). |
| 5 | Choisissez les paramètres à afficher sur le graphique. |

## 10.3 Mesure en mode manuel {#section-10-3}

La mesure en mode manuel décrit une configuration où le dispositif d’échantillonnage manuel est connecté au BactoSense, et l’opérateur attache à l’instrument des échantillons ponctuels prélevés dans des tubes à bouchon fileté de 5 mL.

### 10.3.1 Effectuer une mesure en mode manuel {#section-10-3-1}

Les instructions suivantes expliquent comment configurer et démarrer une mesure en mode manuel.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Assurez-vous que le dispositif d’échantillonnage manuel est bien installé comme décrit dans la section [Installation du dispositif d’échantillonnage manuel](05-installation.md#section-5-4). |  |
| 2. | Si le dispositif d’échantillonnage manuel vient d’être installé, ou si l’instrument est resté éteint ou inactif pendant plus de 3 jours, il est recommandé de nettoyer le dispositif. Si une Washstation est disponible, suivez la section [Nettoyage du dispositif d’échantillonnage manuel avec la Washstation](15-maintenance.md#section-15-2-2) ; sinon, suivez la section [Nettoyage du dispositif d’échantillonnage manuel avec un nettoyage de base](15-maintenance.md#section-15-2-3). |  |
| 3. | Si le dispositif manuel a été nettoyé (voir étape précédente), il est recommandé d’effectuer un amorçage avant de mesurer l’échantillon. Suivez la procédure de la section [Réalisation d’un amorçage](10-measurements.md#section-10-9-3). |  |
| 4. | Dans l’interface utilisateur de BactoSense, accédez au Menu principal. |  |
| 5. | Sur l’écran d’accueil, appuyez sur Mode et sélectionnez Mode manuel. Appuyez sur Retour, puis sur Mesurer pour ouvrir l’assistant de mesure. |  |
| 6. | Choisissez le protocole Water Analysis dans la liste des protocoles disponibles. | Pour effectuer des répétitions techniques, sélectionnez leur nombre dans la colonne Replications. Par défaut, un échantillon est mesuré. Si plusieurs répétitions sont configurées, plusieurs échantillons sont prélevés dans le même tube. |
| 7. | Saisissez un nom d’échantillon en tapant dans le champ de texte Nom de l’échantillon, en entrant le nom et en appuyant sur OK. |  |
| 8. | Vérifiez que la fenêtre souhaitée est configurée dans le champ Gates. Pour en utiliser une autre, appuyez sur ce champ et sélectionnez-la parmi les options disponibles (selon la cartouche installée). | Les fenêtres TCC et ICC par défaut sont généralement utilisées. Utilisez des fenêtres personnalisées si votre application l’exige. La création et l’ajustement des fenêtres sont décrits au chapitre [Résultats et analyse des données](11-results-and-data-analysis.md). |
| 9. | Appuyez sur le bouton Suivant. |  |
| 10. | Fixez au dispositif d’échantillonnage manuel un tube à bouchon fileté de 5 mL contenant 2 – 5 mL d’échantillon. |  |
| 11. | Appuyez sur le bouton Démarrer. | La durée estimée du protocole et l’heure de fin prévue sont affichées. L’état actuel de la mesure est indiqué dans la barre supérieure (par exemple Initializing, Mixing…). |
| 12. | Une fois la mesure terminée, consultez les résultats. Ceux-ci sont expliqués à la section [Résultats de mesure](11-results-and-data-analysis.md#section-11-1). |  |
| 13. | Pour passer à la mesure suivante, appuyez sur New. |  |
| 14. | Pour consulter les résultats des mesures précédentes, appuyez sur View results. |  |
| 15. | Pour renommer, redéfinir les fenêtres ou exporter la mesure, consultez les instructions des sections suivantes. |  |
| 16. | Si vous ne souhaitez plus mesurer d’échantillons et que l’instrument doit rester inactif ou être éteint, nettoyez le dispositif d’échantillonnage manuel. Si une Washstation est disponible, suivez la section [Nettoyage du dispositif d’échantillonnage manuel avec la Washstation](15-maintenance.md#section-15-2-2) ; sinon, suivez la section [Nettoyage du dispositif d’échantillonnage manuel avec un nettoyage de base](15-maintenance.md#section-15-2-3). |  |

## 10.4 Renommage des mesures {#section-10-4}

Les mesures peuvent être renommées à partir de la vue détaillée des résultats.

|  | OPÉRATION |
| --- | --- |
| 1. | Accédez au Menu principal et appuyez sur Résultats (Manuel) ou Résultats (En ligne). |
| 2. | Dans la liste des résultats, sélectionnez la mesure que vous souhaitez renommer. Exception : Si vous souhaitez renommer un groupe de répétitions (voir section [Travail avec des répétitions de mesure](10-measurements.md#section-10-5)), appuyez longuement sur le groupe de répétitions, puis appuyez sur le bouton Renommer. |
| 3. | Dans la vue détaillée des résultats, appuyez sur le bouton Renommer (voir section [Résultats de mesure](11-results-and-data-analysis.md#section-11-1)). |
| 4. | Un clavier et un champ de texte avec le nom actuel de l’échantillon apparaîtront. Utilisez le clavier pour modifier le nom de l’échantillon et appuyez sur OK. |

## 10.5 Travail avec des répétitions de mesure {#section-10-5}

Lorsque vous travaillez en mode manuel, les protocoles d’analyse peuvent être répétés. Ceci est particulièrement utile pour générer des répétitions techniques d’un même échantillon.

- Le nombre de répétitions peut être sélectionné lors de la configuration d’une mesure manuelle, comme décrit dans la section [Effectuer une mesure en mode manuel](10-measurements.md#section-10-3-1).
- Dans la liste des résultats en mode manuel, les répétitions sont regroupées en une seule entrée, et le chiffre entre parenthèses à côté du nom de l’échantillon indique le nombre de répétitions. Dans cette vue, les résultats affichés pour le groupe de répétitions se composent de la moyenne et de l’écart type. On peut accéder aux mesures individuelles des répétitions en appuyant sur le groupe de répétitions.
- En mode manuel, un appui long sur un groupe de répétitions dans la liste des résultats permet de renommer, supprimer, exporter facilement ce groupe, ou de définir de nouvelles fenêtres pour celui-ci.

## 10.6 Re-fenêtrage des mesures {#section-10-6}

Le réglage des fenêtres des mesures individuelles ou d’un ensemble de mesures est décrit dans la section [Modification des fenêtres](11-results-and-data-analysis.md#section-11-4).

## 10.7 Filtrage des mesures {#section-10-7}

Un filtrage peut être appliqué pour afficher un sous-ensemble des résultats de mesure. Le filtrage par texte et par plage de dates est possible.

|  | OPÉRATION |
| --- | --- |
| 1. | Accédez au Menu principal et appuyez sur Résultats (Manuel) ou Résultats (En ligne). |
| 2. | Dans la liste des résultats, appuyez sur le bouton Filtre. |
| 3. | Spécifiez votre filtre en appliquant une ou les deux options suivantes : • Définissez une<br/>plage de dates en spécifiant les dates de début et de fin.<br/>• Définissez une chaîne de texte pour filtrer par nom de mesure. |
| 4. | Appuyez sur OK. La liste des résultats sera actualisée pour afficher les résultats filtrés. |

## 10.8 Exportation des mesures {#section-10-8}

Il existe plusieurs façons de récupérer les données de mesure. La récupération via HTTP, HTTPS, FTP et l’interface web sont décrites dans les chapitres [Accès aux données et exportation](12-data-access-and-export.md) et [Interface utilisateur web](13-web-user-interface.md). Cette section décrit l’exportation des données vers une clé USB.

### 10.8.1 Exportation vers une clé USB {#section-10-8-1}

Il est possible d’exporter une sélection de mesures ou toutes les mesures sur une clé USB.

Assurez-vous que la clé USB est formatée en FAT32.

|  | OPÉRATION |
| --- | --- |
| 1. | Accédez au Menu principal et appuyez sur Résultats (Manuel) ou Résultats (En ligne). |
| 2. | Dans la liste des<br/>résultats, • appuyez sur le bouton Exporter série pour exporter un ensemble de mesures ou toutes<br/>les mesures. • sélectionnez un groupe de répétitions et appuyez sur le bouton Exporter série pour exporter ce groupe<br/>de répétitions. • sélectionnez une seule mesure, puis appuyez sur Exporter pour exporter une seule mesure. |
| 3. | Le champ Nom de dossier indique le nom du dossier cible qui sera créé sur la clé USB. Modifiez le nom si vous le souhaitez. |
| 4. | Insérez une clé USB disposant de suffisamment de mémoire libre. Appuyez sur Rafraîchir liste USB pour afficher la clé USB connectée. |
| 5. | Options d’exportation •<br/>Appuyez sur Exporter les résultats pour exporter uniquement les résultats de base (voir les détails dans l’interface utilisateur). •<br/>Appuyez sur Exporter tout pour exporter les résultats, les données brutes et les informations de diagnostic (voir les détails dans l’interface utilisateur). |
| 6. | Attendez la fin de l’exportation, puis appuyez sur OK. |

## 10.9 Protocoles d’analyse et de maintenance disponibles {#section-10-9}

### 10.9.1 Vue d’ensemble des protocoles en mode manuel {#section-10-9-1}

En mode manuel, les opérateurs peuvent choisir entre deux protocoles d’analyse.

**Tableau 10-1 Protocoles d’analyse en mode manuel**

| NOM DU PROTOCOLE | DESCRIPTION DU PROTOCOLE |
| --- | --- |
| Analyse Eau | Analysez un échantillon d’eau et terminez par un cycle de nettoyage. Si plusieurs répétitions sont effectuées, le nettoyage n’est effectué qu’une seule fois, à la fin. Un amorçage est automatiquement exécuté entre les répétitions. |
| Analyse Billes | Ce protocole est destiné à l’analyse de billes d’étalonnage et est utilisé avec le kit de validation. Le protocole se termine automatiquement par un cycle de nettoyage. Si plusieurs répétitions sont effectuées, le nettoyage n’est effectué qu’une seule fois, à la fin. |

Les protocoles de maintenance peuvent être exécutés avant ou entre les protocoles d’analyse, pour préparer, rincer ou nettoyer le système. En mode manuel, les protocoles de maintenance suivants sont disponibles :

**Tableau 10-2 Protocoles de maintenance en mode manuel**

| NOM DU PROTOCOLE | DESCRIPTION DU PROTOCOLE |
| --- | --- |
| Nettoyage Optiques | Lance un cycle de nettoyage qui lave tous les composants en contact avec l’échantillon à l’intérieur du BactoSense, à l’exception du dispositif d’échantillonnage. |
| Nettoyage échantillonneur avec Washstation | Nettoie le dispositif d’échantillonnage manuel de manière à ce que le filtre extérieur, l’intérieur et l’extérieur de l’aiguille puissent être entièrement lavés entre les mesures, après un échantillon sale ou en cas de blocage du filtre. Nécessite que la Washstation soit monté sur le dispositif d’échantillonnage manuel et qu’une cartouche soit installée pour que ce protocole apparaisse. Ce protocole a un pouvoir de désinfection supérieur à celui du protocole Nettoyage du dispositif d’échantillonnage et doit donc être privilégié. L’utilisation de la Washstation est le meilleur moyen de garder le dispositif d’échantillonnage manuel propre et d’éviter les contaminations croisées. Vous trouverez les instructions pour ce protocole dans la section [Nettoyage du dispositif d’échantillonnage manuel avec la Washstation](15-maintenance.md#section-15-2-2). |
| Nettoyage échantillonneur | Nettoie le dispositif d’échantillonnage afin que le filtre externe et l’intérieur de l’aiguille puissent être lavés après un échantillon extrêmement chargé ou en cas de blocage du filtre. Vous trouverez les instructions pour ce protocole dans la section [Nettoyage du dispositif d’échantillonnage manuel avec un nettoyage de base](15-maintenance.md#section-15-2-3). |

| NOM DU PROTOCOLE | DESCRIPTION DU PROTOCOLE |
| --- | --- |
| Remplissage Tubes | Remplit toutes les tubulures transportant les réactifs de la cartouche pour éliminer les bulles d’air. Nettoie les optiques à la fin du processus. |
| Amorçage et Nettoyage Optique | Remplit la tubulure avec le liquide de l’échantillon. Aide à diluer les résidus après le nettoyage du dispositif d’échantillonnage. Se termine par l’étape de nettoyage. |
| Amorçage | Charge l’échantillon dans l’instrument. Vous trouverez les instructions dans la section [Réalisation d’un amorçage](10-measurements.md#section-10-9-3). |

### 10.9.2 Vue d’ensemble des protocoles en mode en ligne {#section-10-9-2}

En mode en ligne, les opérateurs peuvent choisir entre deux protocoles d’analyse. Tableau 10-3 Protocoles d’analyse du mode en ligne

| NOM DU PROTOCOLE | DESCRIPTION DU PROTOCOLE |
| --- | --- |
| Échantillonneur en ligne (avec rétro-lavage) | Il s’agit du protocole standard à utiliser avec le dispositif d’échantillonnage en ligne. Ce protocole comprend des procédures de nettoyage automatisées entre les mesures. |
| Dispositif d’échantillonnage manuel | Ce protocole est utilisé avec le dispositif d’échantillonnage manuel installé. |

### 10.9.3 Réalisation d’un amorçage {#section-10-9-3}

L’amorçage permet de préparer le BactoSense à l’analyse de l’échantillon suivant. Il permet de réduire le transfert de cellules ou de substances indésirables et dure environ 5 minutes.

Utilisez l’amorçage dans les circonstances suivantes :

- Après un protocole Nettoyage échantillonneur (avec ou sans Washstation).
- Après avoir mesuré un échantillon avec une concentration élevée de chlore ou toute autre substance indésirable pouvant affecter les mesures suivantes.

|  | OPÉRATION |
| --- | --- |
| 1. | Assurez-vous que le dispositif d’échantillonnage manuel est bien installé comme décrit dans la section [Installation du dispositif d’échantillonnage manuel](05-installation.md#section-5-4). |
| 2. | Dans l’interface utilisateur de BactoSense, accédez au Menu principal. |
| 3. | Sur l’écran d’accueil, appuyez sur Mode et sélectionnez Mode manuel. Appuyez sur Retour, puis sur Mesurer pour ouvrir l’assistant de mesure. |
| 4. | Choisissez le protocole Amorçage dans la liste des protocoles disponibles. |
| 5. | Appuyez sur le bouton Suivant. |
| 6. | Attachez l’échantillon que vous souhaitez mesurer ensuite au dispositif d’échantillonnage manuel. |
| 7. | Appuyez sur le bouton Démarrer. |
