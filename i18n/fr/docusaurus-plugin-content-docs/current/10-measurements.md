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

Pour des intervalles différents ou certains jours de la semaine, voir [Planification avancée](10-measurements.md#section-10-2-4).

### 10.2.1 Configuration et démarrage des mesures autos en ligne {#section-10-2-1}

Les instructions suivantes montrent comment configurer et lancer des mesures automatiques en ligne à l’aide du dispositif d’échantillonnage en ligne.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Assurez-vous que le dispositif d’échantillonnage en ligne est bien fixé comme décrit à la section [Installation du dispositif d’échantillonnage en ligne](05-installation.md#section-5-5). | Si le dispositif manuel est installé et que vous souhaitez passer au dispositif en ligne, consultez la section [Retrait du dispositif d’échantillonnage manuel](08-general-operations-and-configurations.md#section-8-10-2) pour retirer le dispositif manuel et la section [Installation du dispositif d’échantillonnage en ligne](05-installation.md#section-5-5) pour installer le dispositif en ligne. |
| 2. | Accédez à l’écran d’accueil de l’interface utilisateur du BactoSense. |  |
| 3. | Sur l’écran d’accueil, appuyez sur **Mode**. Sur l’écran **Sélection du mode**, appuyez sur **Mode en ligne**, puis sur **Retour** pour revenir à l’écran d’accueil. | Le mode actuel est mis en évidence. Le changement est immédiat dès que vous appuyez sur un mode. Si une mesure est en cours, appuyez sur **Interrompre** pour l’arrêter, ou sur **Attendre**, puis sélectionnez à nouveau le mode une fois la mesure terminée. Si le message **Validation instrument n'est pas compatible avec le mode En ligne. Voulez-vous désactiver Validation instrument?** s’affiche, appuyez sur **Oui**. Si l’écran d’accueil affiche ensuite **Voulez-vous démarrer le mode en ligne?**, appuyez sur **Non** et passez à l’étape suivante ; **Oui** relance la série avec les derniers paramètres enregistrés du mode en ligne. |
| 4. | Appuyez sur Démarrer sur l’écran d’accueil pour ouvrir l’assistant de mesure en ligne. |  |
| 5. | Sous Protocole, assurez-vous que la case “Échantillonneur en ligne (avec rétro-lavage)” est cochée. |  |
| 6. | Saisissez un nom d’échantillon en appuyant sur le champ Nom de l'échantillon. |  |
| 7. | Sélectionnez la fenêtre à appliquer aux mesures en appuyant sur le champ Fenêtres. | Les fenêtres TCC et ICC par défaut sont généralement utilisées. Utilisez des fenêtres personnalisées si votre application l’exige. La création et l’ajustement des fenêtres sont décrits au chapitre [Résultats et analyse des données](11-results-and-data-analysis.md). |
| 8. | Appuyez sur le bouton Suivant. |  |
| 9. | Si l’éditeur de programme hebdomadaire est affiché, appuyez sur Retour pour revenir au programme à intervalles simple. Sélectionnez l’intervalle de mesure avec la molette à droite. | L’intervalle de mesure correspond au temps entre deux mesures et peut aller de 30 min à 6 heures. |
| 10. | Si nécessaire, retardez le démarrage en décochant Démarrage immédiat et en choisissant une heure de démarrage. | Le réglage de l’heure du BactoSense est décrit à la section [Date et heure](08-general-operations-and-configurations.md#section-8-3-2). |
| 11. | Appuyez sur le bouton Démarrer. | Pendant la mesure, l’estimation actuelle de la concentration cellulaire est affichée dans la barre d’action sous « Last ». |
| 12. | Après chaque mesure, le graphique de la série temporelle est actualisé. | Pour plus de détails, appuyez sur Résultats. |
| 13. | Pour arrêter une série de mesures en ligne, consultez la section [Arrêt des mesures automatiques en ligne](10-measurements.md#section-10-2-2). |  |

### 10.2.2 Arrêt des mesures automatiques en ligne {#section-10-2-2}

Suivez les étapes ci-dessous pour arrêter une série de mesures en mode en ligne.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | En mode en ligne, appuyez sur le graphique de l’écran d’accueil pour ouvrir le graphique en ligne. Appuyez sur Stop. |  |
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

### 10.2.4 Planification avancée {#section-10-2-4}

Utilisez la planification avancée pour effectuer des mesures à des intervalles différents ou certains jours de la semaine. Un programme hebdomadaire combine une ou plusieurs règles, chacune avec son protocole, son nom de mesure, son jeu de fenêtres et ses horaires. Le même programme se répète jusqu’à ce que vous le modifiiez ou l’arrêtiez.

La planification avancée nécessite l’activation du Management Package ou du Scientific Package. Si **Avancé** n’est pas disponible, vérifiez l’état du package sous **Paramètres → Paramètres système → Mises à niveau** ; voir [Packages de mise à niveau](09-upgrade-packages.md). Avant de démarrer, installez le dispositif d’échantillonnage en ligne et vérifiez la [date et l’heure](08-general-operations-and-configurations.md#section-8-3-2) de l’instrument.

#### Créer un programme hebdomadaire {#advanced-scheduler-create}

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES / IMAGES |
| --- | --- | --- |
| 1. | Suivez les étapes 1–8 de [Configuration et démarrage des mesures automatiques en ligne](10-measurements.md#section-10-2-1) pour choisir le mode en ligne, le protocole, le nom de l’échantillon et les fenêtres. | Appuyez sur **Suivant** pour accéder à la planification. |
| 2. | Appuyez sur **Avancé**. Si un programme hebdomadaire est déjà configuré, l’éditeur de règles peut s’ouvrir directement. | La figure 10-3 montre **Avancé** sur l’écran d’intervalle simple. <br />![BactoSense — Bouton Avancé](/img/gui/fr/advanced-scheduler-select.png "width=220 class=manual-figure") |
| 3. | Sélectionnez une règle dans la liste de gauche pour la modifier, ou appuyez sur **Nouvelle règle**. Pour retirer une règle inutile du brouillon, sélectionnez-la puis appuyez sur **Supprimer**. | Examinez les règles existantes avant d’en ajouter une. Toutes contribuent au programme hebdomadaire. <br />![BactoSense — Bouton Nouvelle règle](/img/gui/fr/advanced-scheduler-new-rule.png "width=180 class=manual-figure") |
| 4. | Réglez **Nom**, **Protocole** et **Fenêtre** pour la règle sélectionnée. | **Nom** identifie les mesures obtenues. Choisissez un jeu de fenêtres compatible avec la cartouche installée. Les protocoles de maintenance sans fenêtres masquent ce champ. |
| 5. | Choisissez **30 minutes**, **1 hour**, **2 heures**, **Quotidien** ou **Personnalisé**. | Les intervalles prédéfinis se répètent chaque jour. **Quotidien** programme une exécution par jour à l’**Heure de début** choisie. Utilisez **Personnalisé** pour choisir les jours, un autre intervalle ou une plage horaire. |
| 6. | Sous **Personnalisé**, réglez l’**Heure de début**, sélectionnez les **Jours** et définissez l’**Intervalle** en minutes. Appuyez sur **Set time range** pour choisir la plage quotidienne, puis confirmez avec **OK**. | Faites défiler les champs sous les boutons de fréquence pour voir **Intervalle**, **Set time range** et **Plage**. Les figures 10-4 et 10-5 montrent la même règle avant et après défilement. <br />![BactoSense — Bouton Set time range](/img/gui/fr/advanced-scheduler-time-range-button.png "width=160 class=manual-figure") |
| 7. | Répétez les étapes 3–6 pour ajouter d’autres règles. Appuyez sur **Aperçu**. | Sélectionnez un jeu de fenêtres si l’aperçu est indisponible parce qu’il en manque un. Si l’aperçu signale un conflit, revenez aux règles et ajustez les horaires ou les intervalles pour laisser aux protocoles le temps de se terminer. <br />![BactoSense — Bouton Aperçu](/img/gui/fr/advanced-scheduler-preview-button.png "width=130 class=manual-figure") |
| 8. | Sélectionnez chaque jour dans l’aperçu et vérifiez les entrées générées. Sélectionnez une entrée pour examiner **Heure**, **Nom**, **Protocole** et **Fenêtre**. | L’aperçu peut inclure des protocoles de nettoyage insérés automatiquement pendant les longues pauses. Vérifiez-les avec les entrées de mesure ; voir figure 10-6. <br />![BactoSense — Sélection du jour](/img/gui/fr/advanced-scheduler-days.png "width=240 class=manual-figure") |
| 9. | Effectuez les modifications individuelles décrites ci-dessous si nécessaire, puis appuyez sur **Enregistrer** pour appliquer le programme hebdomadaire. | Les modifications des règles et des entrées restent un brouillon jusqu’à ce que vous appuyiez sur **Enregistrer**. <br />![BactoSense — Bouton Enregistrer](/img/gui/fr/advanced-scheduler-save.png "width=130 class=manual-figure") |
| 10. | À **Démarrer le planificateur maintenant?**, appuyez sur **Oui** pour démarrer le programme enregistré, ou sur **Non** pour l’enregistrer sans démarrer un planificateur arrêté. | Vérifiez l’état de fonctionnement sur l’écran d’accueil. Pour arrêter une série en cours, voir [Arrêt des mesures automatiques en ligne](10-measurements.md#section-10-2-2). |

![BactoSense — Sélection de la planification avancée sur l’écran d’intervalle](/img/gui/fr/advanced-scheduler-select.png "width=400 class=manual-figure")

*Figure 10-3 Ouvrir la planification avancée depuis l’écran d’intervalle simple*

![BactoSense — Règle personnalisée pour les jours de la semaine](/img/gui/fr/advanced-scheduler-rule.png "width=600 class=manual-figure")

*Figure 10-4 Éditeur de règles avec paramètres de mesure, fréquence et jours*

![BactoSense — Intervalle personnalisé et plage horaire quotidienne](/img/gui/fr/advanced-scheduler-range.png "width=600 class=manual-figure")

*Figure 10-5 Faire défiler les champs personnalisés pour vérifier l’intervalle et la plage horaire*

**Exemple : surveillance horaire en semaine.** Choisissez **Personnalisé**, réglez l’**Heure de début** sur **08:00**, les **Jours** sur lundi–vendredi, l’**Intervalle** sur **60 min** et la plage horaire sur **08:00–17:00**. Les mesures commencent à 08:00, 09:00, …, 16:00 ces jours-là. La plage se termine à 17:00 ; elle n’ajoute pas de démarrage à 17:00. Ces valeurs illustrent les commandes. Choisissez un programme adapté à votre application.

Pour une plage qui traverse minuit, utilisez des règles distinctes avant et après minuit et sélectionnez les jours correspondants. Comparez l’aperçu généré aux horaires souhaités.

#### Modifier des entrées individuelles dans l’aperçu {#advanced-scheduler-preview}

Utilisez l’aperçu pour créer une exception au programme généré, par exemple déplacer une exécution ou modifier son nom de mesure.

![BactoSense — Aperçu hebdomadaire avec une entrée sélectionnée](/img/gui/fr/advanced-scheduler-preview.png "width=600 class=manual-figure")

*Figure 10-6 Aperçu jour par jour et paramètres de l’entrée sélectionnée*

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES / IMAGES |
| --- | --- | --- |
| 1. | Sélectionnez un jour, puis une entrée dans la liste de gauche. | Les champs à droite affichent les paramètres de cette entrée. |
| 2. | Appuyez sur **Heure**, **Nom**, **Protocole** ou **Fenêtre** pour modifier l’entrée sélectionnée. | La modification s’applique à cette entrée. Vérifiez de nouveau le jeu de fenêtres si vous changez de protocole. Un champ **Ligne** est également disponible pour les protocoles utilisant BactoSwitch. <br />![BactoSense — Heure de l’entrée sélectionnée](/img/gui/fr/advanced-scheduler-entry-time.png "width=280 class=manual-figure") |
| 3. | Appuyez sur **Nouveau** pour ajouter une entrée au jour sélectionné, puis ajustez ses champs. Pour supprimer une entrée, sélectionnez-la et appuyez sur **Supprimer**. | Vérifiez l’heure, le protocole et le jeu de fenêtres de la nouvelle entrée avant d’enregistrer. <br />![BactoSense — Bouton Nouveau](/img/gui/fr/advanced-scheduler-new-entry.png "width=130 class=manual-figure") |
| 4. | Utilisez **Copier vers la semaine** uniquement si tous les jours doivent reprendre les entrées du jour sélectionné. Acquittez le message avec **OK**. | Cette action remplace les entrées des autres jours dans le brouillon, y compris celles du week-end et les exceptions propres à chaque jour. Vérifiez ensuite les sept jours. <br />![BactoSense — Bouton Copier vers la semaine](/img/gui/fr/advanced-scheduler-copy-week.png "width=140 class=manual-figure") |
| 5. | Appuyez sur **Enregistrer**, puis répondez à **Démarrer le planificateur maintenant?** comme indiqué ci-dessus. | Si l’enregistrement échoue, examinez le message et corrigez les conflits horaires ou les paramètres manquants avant de réessayer. <br />![BactoSense — Bouton Enregistrer](/img/gui/fr/advanced-scheduler-save.png "width=130 class=manual-figure") |

:::info[Conserver les modifications individuelles]

**Retour** ramène de l’aperçu aux règles. Modifier une règle et générer un nouvel aperçu peut remplacer les ajustements individuels. Effectuez ces ajustements après l’aperçu définitif des règles et vérifiez-les avant d’enregistrer.

:::

#### Modifier un programme existant ou revenir à un intervalle simple {#advanced-scheduler-change}

Lorsque le planificateur fonctionne, ouvrez **Accueil → Paramètres → Paramètres mode en ligne → Intervalle de mesure**. Modifiez les règles hebdomadaires, appuyez sur **Aperçu**, vérifiez les entrées puis appuyez sur **Enregistrer**. Si le planificateur est arrêté, utilisez **Démarrer** sur l’écran d’accueil en mode en ligne pour rouvrir l’assistant de mesure.

Pour revenir à un intervalle constant, appuyez sur **Retour** pour passer de l’aperçu aux règles, puis à nouveau sur **Retour** pour ouvrir l’écran d’intervalle simple. Choisissez l’intervalle et confirmez avec **OK** dans **Intervalle de mesure**, ou avec **Démarrer** dans l’assistant de mesure. La confirmation du programme simple remplace le programme hebdomadaire avancé ; **Retour** seul n’applique pas la modification.

## 10.3 Mesure en mode manuel {#section-10-3}

La mesure en mode manuel décrit une configuration où le dispositif d’échantillonnage manuel est connecté au BactoSense, et l’opérateur attache à l’instrument des échantillons ponctuels prélevés dans des tubes à bouchon fileté de 5 mL.

### 10.3.1 Effectuer une mesure en mode manuel {#section-10-3-1}

Les instructions suivantes expliquent comment configurer et démarrer une mesure en mode manuel.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Assurez-vous que le dispositif d’échantillonnage manuel est bien installé comme décrit dans la section [Installation du dispositif d’échantillonnage manuel](05-installation.md#section-5-4). |  |
| 2. | Si le dispositif d’échantillonnage manuel vient d’être installé, ou si l’instrument est resté éteint ou inactif pendant plus de 3 jours, il est recommandé de nettoyer le dispositif. Si une Washstation est disponible, suivez la section [Nettoyage du dispositif d’échantillonnage manuel avec la Washstation](15-maintenance.md#section-15-2-2) ; sinon, suivez la section [Nettoyage du dispositif d’échantillonnage manuel avec un nettoyage de base](15-maintenance.md#section-15-2-3). |  |
| 3. | Si le dispositif manuel a été nettoyé (voir étape précédente), il est recommandé d’effectuer un amorçage avant de mesurer l’échantillon. Suivez la procédure de la section [Réalisation d’un amorçage](10-measurements.md#section-10-9-3). |  |
| 4. | Accédez à l’écran d’accueil de l’interface utilisateur du BactoSense. |  |
| 5. | Sur l’écran d’accueil, appuyez sur **Mode**. Sur l’écran **Sélection du mode**, appuyez sur **Mode manuel**. Appuyez sur **Retour**, puis sur **Mesurer** pour ouvrir l’assistant de mesure. | Le mode actuel est mis en évidence. Le changement est immédiat dès que vous appuyez sur un mode. Si une série en mode en ligne est active, confirmez **Arrêter le mode auto?** avec **Oui**. Si une mesure est en cours, appuyez sur **Interrompre** pour l’arrêter, ou sur **Attendre**, puis sélectionnez à nouveau le mode une fois la mesure terminée. **Mode manuel** ne peut pas être sélectionné tant que le mode PLC est actif (voir [Configuration des entrées numériques et du mode PLC](06-io-box.md#section-6-5)). |
| 6. | Sélectionnez Analyse Eau dans la liste des protocoles disponibles. | Pour effectuer des répétitions techniques, sélectionnez leur nombre dans la colonne Réplications. Par défaut, un échantillon est mesuré. Si plusieurs répétitions sont configurées, plusieurs échantillons sont prélevés dans le même tube. |
| 7. | Saisissez un nom d’échantillon en tapant dans le champ de texte Nom de l’échantillon, en entrant le nom et en appuyant sur OK. |  |
| 8. | Vérifiez que la fenêtre souhaitée est configurée dans le champ Fenêtres. Pour en utiliser une autre, appuyez sur ce champ et sélectionnez-la parmi les options disponibles (selon la cartouche installée). | Les fenêtres TCC et ICC par défaut sont généralement utilisées. Utilisez des fenêtres personnalisées si votre application l’exige. La création et l’ajustement des fenêtres sont décrits au chapitre [Résultats et analyse des données](11-results-and-data-analysis.md). |
| 9. | Appuyez sur le bouton Suivant. |  |
| 10. | Fixez au dispositif d’échantillonnage manuel un tube à bouchon fileté de 5 mL contenant 2 – 5 mL d’échantillon. |  |
| 11. | Appuyez sur le bouton Démarrer. | La durée estimée du protocole et l’heure de fin prévue sont affichées. L’état actuel de la mesure est indiqué dans la barre supérieure (par exemple Initializing, Mixing…). |
| 12. | Une fois la mesure terminée, appuyez sur Suivant pour consulter les résultats. Ceux-ci sont expliqués à la section [Résultats de mesure](11-results-and-data-analysis.md#section-11-1). |  |
| 13. | Pour passer à la mesure suivante, appuyez sur Nouveau. |  |
| 14. | Pour consulter les résultats des mesures précédentes, appuyez sur Résultats. |  |
| 15. | Pour renommer, redéfinir les fenêtres ou exporter la mesure, consultez les instructions des sections suivantes. |  |
| 16. | Si vous ne souhaitez plus mesurer d’échantillons et que l’instrument doit rester inactif ou être éteint, nettoyez le dispositif d’échantillonnage manuel. Si une Washstation est disponible, suivez la section [Nettoyage du dispositif d’échantillonnage manuel avec la Washstation](15-maintenance.md#section-15-2-2) ; sinon, suivez la section [Nettoyage du dispositif d’échantillonnage manuel avec un nettoyage de base](15-maintenance.md#section-15-2-3). |  |

## 10.4 Renommage des mesures {#section-10-4}

Les mesures peuvent être renommées à partir de la vue détaillée des résultats.

|  | OPÉRATION |
| --- | --- |
| 1. | Sur l’écran d’accueil, appuyez sur Paramètres, puis sur Journaux, et sélectionnez Results (manual mode) ou Results (online mode). |
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

Les filtres limitent la liste des résultats aux mesures dont vous avez besoin. Vous pouvez filtrer par plage de dates, par nom de mesure et, lorsque BactoSwitch est activé, par ligne d’échantillons BactoSwitch. Si vous combinez plusieurs filtres, seules les mesures qui les satisfont tous sont affichées. Les filtres portent sur toutes les mesures enregistrées dans l’instrument.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Sur l’écran d’accueil, appuyez sur **Résultats**. | La liste affiche les résultats du mode de fonctionnement actuel : **Résultats du mode en ligne** ou **Résultats du mode manuel**. Pour ouvrir la liste de l’autre mode, appuyez sur **Paramètres**, puis sur **Journaux**, et sélectionnez **Results (online mode)** ou **Results (manual mode)**. |
| 2. | Appuyez sur **Filtre**. | L’écran **Filtrer les résultats** s’ouvre. Les champs de gauche affichent les filtres actuels. |
| 3. | Pour filtrer par date, appuyez sur le champ sous **Date de début** et sélectionnez le premier jour dans le calendrier. Appuyez sur le champ d’heure situé en dessous et réglez l’heure et les minutes à l’aide des molettes. Réglez **Date de fin** et son heure de la même manière. | Les deux limites sont incluses : les mesures jusqu’à la fin de la minute de fin sélectionnée sont affichées. La fin ne peut pas précéder le début. Sans filtre de date, la plage s’étend de la mesure la plus ancienne à la plus récente. |
| 4. | Pour filtrer par nom, appuyez sur le champ sous **Filtrer par nom**, saisissez une partie du nom de la mesure et appuyez sur **OK**. | La liste conserve toutes les mesures dont le nom contient ce texte, sans distinction entre majuscules et minuscules. Par exemple, *tap* trouve « Tap Water Zürich ». **Aucun** signifie qu’aucun filtre par nom n’est défini. Pour supprimer le filtre par nom, effacez le texte et appuyez sur **OK**. |
| 5. | Pour filtrer par ligne BactoSwitch, appuyez sur **Filtrer par ligne**, sélectionnez la ligne et appuyez sur **Confirmer**. | Ce bouton n’apparaît que si BactoSwitch est activé. Chaque ligne est affichée avec son nom et son numéro ; le bouton indique ensuite **Filtré par la ligne #n**. Seules les mesures du mode en ligne prélevées via BactoSwitch appartiennent à une ligne ; toutes les autres mesures sont masquées tant que ce filtre est actif. Pour supprimer le filtre par ligne, sélectionnez à nouveau la ligne en surbrillance et appuyez sur **Confirmer**. |
| 6. | Appuyez sur **OK** pour appliquer les filtres et revenir à la liste des résultats. | La barre d’action affiche la plage de dates ainsi que les filtres par ligne et par nom actifs. Si aucune mesure ne correspond, **No measurements to display** s’affiche ; appuyez sur **Change filters** pour modifier les filtres. |

:::info[Réinitialiser les filtres]

Appuyez sur **Remise à zéro** dans l’écran **Filtrer les résultats** pour supprimer les filtres par nom et par ligne et rétablir la plage de dates complète. Les filtres des résultats du mode manuel sont effacés lorsque vous revenez à l’écran d’accueil. En mode en ligne, les filtres par nom et par ligne restent actifs, y compris sur le graphique en ligne (voir [Consultation des mesures automatiques en ligne](10-measurements.md#section-10-2-3)), jusqu’à leur réinitialisation.

:::

## 10.8 Exportation des mesures {#section-10-8}

Il existe plusieurs façons de récupérer les données de mesure. La récupération via HTTP, HTTPS, FTP et l’interface web sont décrites dans les chapitres [Accès aux données et exportation](12-data-access-and-export.md) et [Interface utilisateur web](13-web-user-interface.md). Cette section décrit l’exportation des données vers une clé USB.

### 10.8.1 Exportation vers une clé USB {#section-10-8-1}

Il est possible d’exporter une sélection de mesures ou toutes les mesures sur une clé USB.

Assurez-vous que la clé USB est formatée en FAT32.

|  | OPÉRATION |
| --- | --- |
| 1. | Sur l’écran d’accueil, appuyez sur Paramètres, puis sur Journaux, et sélectionnez Results (manual mode) ou Results (online mode). |
| 2. | Dans la liste des résultats :<br/>• Appuyez sur Exporter série, choisissez la plage de dates et, si nécessaire, le filtre de nom, puis appuyez sur OK pour exporter une série.<br/>• Maintenez un groupe de répétitions appuyé, puis appuyez sur Exporter pour exporter ce groupe.<br/>• Ouvrez une mesure, puis appuyez sur Exporter pour exporter uniquement cette mesure. |
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
| 2. | Accédez à l’écran d’accueil de l’interface utilisateur du BactoSense. |
| 3. | Sur l’écran d’accueil, appuyez sur Mode et sélectionnez Mode manuel. Appuyez sur Retour, puis sur Mesurer pour ouvrir l’assistant de mesure. |
| 4. | Sélectionnez Amorçage dans la liste des protocoles disponibles. |
| 5. | Appuyez sur le bouton Suivant. |
| 6. | Attachez l’échantillon que vous souhaitez mesurer ensuite au dispositif d’échantillonnage manuel. |
| 7. | Appuyez sur le bouton Démarrer. |
