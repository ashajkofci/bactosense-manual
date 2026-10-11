---
title: "11. Résultats et analyse des données"
sidebar_label: "11. Résultats et analyse des données"
sidebar_position: 11
slug: /results-and-data-analysis
---

## 11.1 Résultats de mesure {#section-11-1}

La figure ci-dessous montre le résultat d'une mesure sélectionnée. À partir de là, l'utilisateur peut supprimer ou renommer la mesure, rechercher des résultats plus anciens, ou exporter le résultat. Les utilisateurs experts peuvent répéter le comptage des cellules avec de nouvelles fenêtres. Certains éléments ou actions de l'interface utilisateur ne sont disponibles que pour des rôles d'utilisateur spécifiques (Basique, Avancé ou Admin).

![BactoSense — Détails et graphiques du résultat ICC](/img/gui/fr/icc-result-details.png "width=674 class=manual-figure")

*Figure 11-1 Affichage du résultat d'une mesure ICC.*

|  |  |
| --- | --- |
| 1 | Principaux paramètres du résultat, en fonction du type de cartouche utilisé. Pour plus d'informations, voir la section [Cartouches, paramètres des fenêtres et résultats](../results-and-data-analysis/#section-11-3). Appuyez sur l’icône d’information à côté du résultat principal pour afficher tous les paramètres du résultat (2). |
| 2 | Fenêtre d’information sur le résultat affichant tous les paramètres disponibles et le diagramme de points principal. |
| 3 | Nuage de points principal dans la fenêtre d’information sur le résultat. Le graphique FL1 vs FL2 montre tous les événements détectés en fonction de l'amplitude de leurs signaux de fluorescence FL1 (535 nm, axe X) et FL2 (715 nm, axe Y). Le polygone rouge et la ligne verticale indiquent la fenêtre configurée. Pour plus de détails, voir la section [Cartouches, paramètres des fenêtres et résultats](../results-and-data-analysis/#section-11-3). Appuyez sur cet aperçu pour ouvrir une fenêtre contextuelle donnant accès à tous les diagrammes de points (4). |
| 4 | Fenêtre contextuelle permettant d'accéder à tous les diagrammes de points. Le graphique FL1 vs SSC montre uniquement les cellules à l'intérieur de la fenêtre polygonale FL1 - FL2, en fonction de leur signal de fluorescence FL1 (535 nm) et du signal de lumière diffusée SSC (488 nm). L'histogramme FL1 montre toutes les cellules à l'intérieur de la fenêtre polygonale FL1 - FL2, classées en fonction de leur fluorescence en FL1. Les diagrammes disponibles dépendent du modèle et de la configuration de votre instrument. |
| 5 | Le champ des avertissements facultatifs indique si des avertissements ont été générés pendant la mesure. Tapez sur le champ pour en savoir plus. |
| 6 | Le bouton Supprimer supprime définitivement la mesure (confirmation nécessaire). |
| 7 | Le bouton Renommer permet de modifier le nom de la mesure. |
| 8 | Le bouton Re-fenêtrer permet d’appliquer un autre jeu de fenêtres aux données de mesure. Pour plus de détails, voir la section [Re-fenêtrage des mesures](../results-and-data-analysis/#section-11-4-1). |
| 9 | Le bouton Exporter permet d'enregistrer ce résultat sur une clé USB. Pour plus d'informations, voir la section [Exportation vers une clé USB](../measurements/#section-10-8-1). |
| 10 | Les boutons de navigation situés à gauche et à droite de l'affichage des résultats vous permettent de passer respectivement aux mesures précédentes et suivantes. |

:::info[Sélectionnez plusieurs mesures]

Sélection multiple et opérations par lot : dans la liste des mesures, maintenez une mesure appuyée pour activer la sélection multiple, puis sélectionnez Supprimer / Re-Fenêtrer ou Exporter.

:::

## 11.2 Introduction aux fenêtres {#section-11-2}

Conformément aux normes de cytométrie en flux, le BactoSense utilise des fenêtres pour compter les cellules dans les échantillons.

Définitions :

- Fenêtre : ligne ou polygone appliqué à un nuage de points pour quantifier des populations de cellules mesurées.
- Jeu de fenêtres : ensemble d’au moins deux fenêtres utilisé pour la stratégie de fenêtrage. Les types de fenêtres sont fixes, mais les utilisateurs peuvent modifier les limites de chaque fenêtre. Ils diffèrent entre les mesures TCC et ICC.
- Stratégie de fenêtrage : définit la combinaison des fenêtres pour le comptage des cellules. Par exemple, HNAC correspond au nombre de cellules à l’intérieur du polygone TCC et au-dessus de la limite inférieure HNA. Ces stratégies diffèrent entre les mesures TCC et ICC.

Les jeux de fenêtres sont spécifiques à un type de cartouche. Par exemple, seuls les jeux de fenêtres de type TCC peuvent être utilisés avec les mesures effectuées avec une cartouche TCC.

### 11.2.1 Ensembles de délimitation par défaut {#section-11-2-1}

Le BactoSense propose des jeux de fenêtres préconfigurés pour tous les types de cartouches disponibles. Appelés jeux de fenêtres par défaut, ils ont été soigneusement conçus pour convenir à la grande majorité des échantillons.

- Sur l’écran d’accueil, appuyez sur Paramètres, puis sur Fenêtres pour afficher les jeux de fenêtres disponibles.
- Les jeux de fenêtres par défaut ne peuvent ni être modifiés ni supprimés.
- De nouveaux fenêtrages peuvent être créés en modifiant une copie d’un fenêtrage existant, comme décrit dans la section [Création d’un nouveau fenêtrage](11-results-and-data-analysis.md#section-11-4-2).

### 11.2.2 Liste des ensembles et opérations de délimitation disponibles {#section-11-2-2}

Sur l’écran d’accueil, appuyez sur Paramètres, puis sur Fenêtres pour afficher les jeux de fenêtres disponibles.

![BactoSense — Liste des gates](/img/gui/fr/gate-settings-list.png "width=599 class=manual-figure")

*Figure 11-2 Liste des jeux de fenêtres disponibles et options de copie et de création de nouveaux jeux. Les fenêtres par défaut sont préconfigurées et ne peuvent être ni supprimées ni modifiées.*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Exemple de fenêtre personnalisée pour la cartouche ICC. | 2 | Fenêtre par défaut ICC. Les fenêtres par défaut sont préconfigurées. |
| 3 | Fenêtre double par défaut ICC. Ce jeu de fenêtres contient une fenêtre polygonale configurable supplémentaire. Remarque : sur certains modèles, une fonction supplémentaire est nécessaire pour l’utiliser (voir section [Scientific Package](../upgrade-packages/#section-9-1)). | 4 | Types de fenêtres, à utiliser avec le type de cartouche respectif. |
| 5 | Supprimer un fenêtrage existant. Les fenêtres par défaut ne peuvent pas être supprimées. | 6 | Prévisualiser le fenêtrage. |
| 7 | Créer une copie du fenêtrage. | 8 | Modifier le fenêtrage. Les fenêtres par défaut ne peuvent pas être modifiées. |
| 9 | Créer un nouveau fenêtrage. |  |  |

## 11.3 Cartouches, paramètres des fenêtres et résultats {#section-11-3}

Les paramètres mesurés dépendent de la cartouche utilisée. Les sous-sections suivantes décrivent les jeux de fenêtres et les paramètres des résultats pour TCC (nombre total de cellules), ICC (nombre de cellules intactes), ACC (nombre de cellules actives), CBC (nombre de cellules coliformes), EBC (nombre de cellules E. coli) et NBC (nombre de cellules Enterococcus).

Les cartouches CBC, EBC et NBC sont compatibles avec BactoSense ID et BactoSense SMART. Chacune utilise un marquage enzymatique sélectif et une seule fenêtre polygonale, et fournit une concentration cellulaire. Aucune sous-population HNA ou définie selon l’activité n’est calculée pour ces cartouches.

:::info[Interprétation des résultats CBC, EBC et NBC]

CBC, EBC et NBC sont des concentrations cellulaires exprimées en cellules par millilitre (1/mL). Les nombres de cellules et les résultats de culture exprimés en unités formant colonie (CFU) mesurent des propriétés différentes d’un échantillon et ne peuvent pas être comparés directement.

:::

### 11.3.1 Cartouche TCC {#section-11-3-1}

TCC désigne le nombre total de cellules. La cartouche TCC mesure donc la concentration de toutes les cellules.

**Tableau 11-1 Fenêtrage utilisé pour la cartouche TCC.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| FENÊTRE | TYPE | DESCRIPTION |
| --- | --- | --- |
| TCC | Polygone | Un polygone défini sur le plan FL1-FL2. Les points à l’intérieur de ce polygone sont comptés comme des cellules (TCC). |
| Limite inférieure HNA | Ligne verticale | Un seuil sur FL1. Les points situés à l’intérieur du TCC et supérieurs à la limite inférieure HNA dans FL1 sont comptés comme HNAC. Les points situés à l’intérieur du TCC, mais inférieurs à la limite sont comptés comme LNAC. |

</div>

**Tableau 11-2 Paramètres des résultats obtenus avec la cartouche TCC.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARAMÈTRE | UNITÉ | NOM | DESCRIPTION |
| --- | --- | --- | --- |
| TCC | 1/mL | Nombre total de cellules | Nombre total de cellules détectées à l’intérieur de la fenêtre TCC. Il s’agit de la somme de HNAC et LNAC : TCC = HNAC + LNAC |
| HNAP | % | Pourcentage de bactéries avec un haut taux d'acide nucléique | Pourcentage de cellules HNA par rapport à TCC : HNAP<br/>= (HNAC / TCC) × 100 |
| LNAC | 1/mL | Nombre de bactéries à faible taux d'acide nucléique | Le nombre de cellules à l’intérieur de la fenêtre TCC, mais en dessous de la limite inférieure HNA (fenêtre de ligne verticale). |
| HNAC | 1/mL | Nombre de bactéries avec un haut taux d'acide nucléique | Le nombre de cellules à l’intérieur de la fenêtre TCC et au-dessus de la limite inférieure HNA (fenêtre de ligne verticale). |

</div>

Pour plus d’informations sur la façon d’ajuster les fenêtres, voir la section [Modification des fenêtres](11-results-and-data-analysis.md#section-11-4).

### 11.3.2 Cartouche ICC {#section-11-3-2}

ICC désigne le nombre de cellules intactes. La cartouche ICC mesure donc la concentration des cellules intactes.

**Tableau 11-3 Fenêtrage utilisé pour la cartouche ICC.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| FENÊTRE | TYPE | DESCRIPTION |
| --- | --- | --- |
| ICC | Polygone | Un polygone défini sur le plan FL1-FL2. Les points à l’intérieur de ce polygone sont comptés comme des cellules intactes (ICC). |
| Limite inférieure HNA | Ligne verticale | Un seuil sur FL1. Les points situés à l’intérieur de l’ICC, mais au-dessus de la limite inférieure HNA dans FL1 sont comptés comme HNAC. Les points situés à l’intérieur de l’ICC, mais en dessous de la limite sont comptés comme LNAC. |

</div>

**Tableau 11-4 Paramètres des résultat obtenus avec la cartouche ICC.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARAMÈTRE | UNITÉ | NOM | DESCRIPTION |
| --- | --- | --- | --- |
| ICC | 1/mL | Nombre total de cellules intactes | Nombre total de cellules intactes à l’intérieur de la fenêtre ICC : ICC = HNAC + LNAC |
| HNAP | % | Pourcentage de bactéries avec un haut taux d'acide nucléique | Pourcentage de cellules HNA par rapport à ICC : HNAP<br/>= (HNAC / ICC) × 100 |
| LNAC | 1/mL | Nombre de bactéries à faible taux d'acide nucléique | Le nombre de cellules LNA à l’intérieur de la fenêtre ICC, mais en dessous de la limite inférieure HNA (fenêtre de ligne verticale). |
| HNAC | 1/mL | Nombre de bactéries avec un haut taux d'acide nucléique | Le nombre de cellules HNA à l’intérieur de la fenêtre ICC et au-dessus de la limite inférieure HNA (fenêtre de la ligne verticale). |

</div>

Pour plus d’informations sur la façon d’ajuster les fenêtres, voir la section [Modification des fenêtres](11-results-and-data-analysis.md#section-11-4).

### 11.3.3 Cartouche ACC {#section-11-3-3}

ACC désigne le nombre de cellules actives. La cartouche ACC mesure donc la concentration des cellules métaboliquement actives au moyen d’un dosage enzymatique.

**Table 11-5 Fenêtrage utilisé pour la cartouche ACC.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| FENÊTRE | TYPE | DESCRIPTION |
| --- | --- | --- |
| ACC | Polygone | Un polygone défini sur le plan FL1-FL2. Les points à l’intérieur de ce polygone sont comptés comme des cellules actives (ACC). |
| Limite inférieure HACC | Ligne verticale | Un seuil sur FL1. Les points situés à l’intérieur de l’ACC, mais au-dessus de la limite inférieure HACC dans FL1 sont comptés comme HACC. Les points situés à l’intérieur de l’ACC, mais en dessous de la limite sont comptés comme LACC. |

</div>

**Table 11-6 Paramètres des résultat obtenus avec la cartouche ACC.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARAMÈTRE | UNITÉ | NOM | DESCRIPTION |
| --- | --- | --- | --- |
| ACC | 1/mL | Nombre total de cellules actives | Nombre total de cellules actives à l’intérieur de la fenêtre ACC : ACC = HACC + LACC |
| HACC | 1/mL | Nombre de cellules hautement actives | Nombre de cellules actives dont l’intensité FL1 est supérieure à la fenêtre verticale HACC. |
| LACC | 1/mL | Nombre de cellules faiblement actives | Nombre de cellules actives dont l’intensité FL1 est inférieure à la fenêtre verticale HACC. |
| HACP | % | Pourcentage de cellules hautement actives | Pourcentage de HACC parmi les ACC : HACP<br/>= (HACC / ACC) × 100 |

</div>

Pour plus d’informations sur la façon d’ajuster les fenêtres, voir la section [Modification des fenêtres](11-results-and-data-analysis.md#section-11-4).

### 11.3.4 Cartouche CBC {#section-11-3-4}

CBC désigne le nombre de cellules coliformes (Coliform Cell Count). La cartouche CBC mesure la concentration de bactéries coliformes au moyen d’un dosage enzymatique fondé sur l’activité β-galactosidase. L’enzyme transforme le substrat de la cartouche en un produit fluorescent, ce qui permet de détecter les cellules marquées par cytométrie en flux.

**Tableau 11-7 Jeu de fenêtres utilisé pour la cartouche CBC.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| FENÊTRE | TYPE | DESCRIPTION |
| --- | --- | --- |
| CBC | Polygone | Un polygone défini sur le plan FL1-FL2. Les cellules coliformes marquées par fluorescence à l’intérieur de ce polygone contribuent à CBC. |

</div>

**Tableau 11-8 Paramètre de résultat obtenu avec la cartouche CBC.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARAMÈTRE | UNITÉ | NOM | DESCRIPTION |
| --- | --- | --- | --- |
| CBC | 1/mL | Nombre de cellules coliformes | Concentration de cellules coliformes marquées à l’intérieur de la fenêtre CBC, calculée à partir du nombre de cellules et du volume d’échantillon analysé. |

</div>

Pour plus d’informations sur la façon d’ajuster les fenêtres, voir la section [Modification des fenêtres](11-results-and-data-analysis.md#section-11-4).

### 11.3.5 Cartouche EBC {#section-11-3-5}

EBC désigne le nombre de cellules E. coli (E. coli Cell Count). La cartouche EBC mesure la concentration de bactéries *Escherichia coli* au moyen d’un dosage enzymatique fondé sur l’activité β-glucuronidase. L’enzyme transforme le substrat de la cartouche en un produit fluorescent, ce qui permet de détecter les cellules marquées par cytométrie en flux.

**Tableau 11-9 Jeu de fenêtres utilisé pour la cartouche EBC.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| FENÊTRE | TYPE | DESCRIPTION |
| --- | --- | --- |
| EBC | Polygone | Un polygone défini sur le plan FL1-FL2. Les cellules E. coli marquées par fluorescence à l’intérieur de ce polygone contribuent à EBC. |

</div>

**Tableau 11-10 Paramètre de résultat obtenu avec la cartouche EBC.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARAMÈTRE | UNITÉ | NOM | DESCRIPTION |
| --- | --- | --- | --- |
| EBC | 1/mL | Nombre de cellules E. coli | Concentration de cellules E. coli marquées à l’intérieur de la fenêtre EBC, calculée à partir du nombre de cellules et du volume d’échantillon analysé. |

</div>

Pour plus d’informations sur la façon d’ajuster les fenêtres, voir la section [Modification des fenêtres](11-results-and-data-analysis.md#section-11-4).

### 11.3.6 Cartouche NBC {#section-11-3-6}

NBC désigne le nombre de cellules Enterococcus (Enterococcus Cell Count). La cartouche NBC mesure la concentration d’entérocoques au moyen d’un dosage enzymatique fondé sur l’activité β-glucosidase. L’enzyme transforme le substrat de la cartouche en un produit fluorescent, ce qui permet de détecter les cellules marquées par cytométrie en flux.

**Tableau 11-11 Jeu de fenêtres utilisé pour la cartouche NBC.**

<div className="manual-cartridge-table-scroll manual-cartridge-gates">

| FENÊTRE | TYPE | DESCRIPTION |
| --- | --- | --- |
| NBC | Polygone | Un polygone défini sur le plan FL1-FL2. Les entérocoques marqués par fluorescence à l’intérieur de ce polygone contribuent à NBC. |

</div>

**Tableau 11-12 Paramètre de résultat obtenu avec la cartouche NBC.**

<div className="manual-cartridge-table-scroll manual-cartridge-parameters">

| PARAMÈTRE | UNITÉ | NOM | DESCRIPTION |
| --- | --- | --- | --- |
| NBC | 1/mL | Nombre de cellules Enterococcus | Concentration d’entérocoques marqués à l’intérieur de la fenêtre NBC, calculée à partir du nombre de cellules et du volume d’échantillon analysé. |

</div>

Pour plus d’informations sur la façon d’ajuster les fenêtres, voir la section [Modification des fenêtres](11-results-and-data-analysis.md#section-11-4).

## 11.4 Modification des fenêtres {#section-11-4}

### 11.4.1 Re-fenêtrage des mesures {#section-11-4-1}

Le re-fenêtrage est le processus consistant à appliquer un fenêtrage différent aux données de mesure existantes.

- Une condition préalable au re-fenêtrage est la présence d’un tel fenêtrage supplémentaire. Sur l’écran d’accueil, appuyez sur Paramètres, puis sur Fenêtres pour afficher les jeux de fenêtres disponibles.
- Le processus de modification d’un fenêtrage existant est décrit dans la section [Modification des fenêtrages existants](11-results-and-data-analysis.md#section-11-4-3).

<table className="manual-table">

<tbody>

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

Appuyez sur Journaux, puis sur Results (manual mode) ou Results (online mode) selon le mode de mesure utilisé.

</td>

<td>

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Pour re-fenêtrer une seule mesure, sélectionnez-la pour afficher la page des détails du résultat. Pour re-fenêtrer plusieurs mesures (lot), appuyez longuement sur la mesure jusqu’à ce qu’elle soit mise en surbrillance et qu’une case à cocher apparaisse à gauche. Appuyez ensuite les mesures souhaitées pour les sélectionner.

</td>

<td>

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Appuyez sur Re-fenêtrer dans la vue d’une mesure, ou sur Re-Fenêtrer lorsque plusieurs mesures sont sélectionnées.

</td>

<td>

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Sélectionnez le fenêtrage souhaité en cochant sa case.

</td>

<td>

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Appuyez sur Confirmer pour lancer le re-fenêtrage.

</td>

<td>

:::info[Informations supplémentaires]

Selon le nombre de mesures, le recalcul avec de nouvelles fenêtres peut prendre plusieurs minutes.

:::

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

Après avoir terminé, appuyez sur OK.

</td>

<td>

</td>

</tr>

</tbody>

</table>

### 11.4.2 Création d’un nouveau fenêtrage {#section-11-4-2}

De nouveaux fenêtrages peuvent être créés soit à partir d’une copie d’un fenêtrage existant, soit à partir de zéro.

Création d’un nouveau fenêtrage à partir d’une copie

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | En tant qu’utilisateur Advanced ou Admin, sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres. |  |
| 2. | Appuyez sur le bouton Fenêtres. |  |
| 3. | Dans la liste des fenêtrages disponibles, identifiez le fenêtrage à partir duquel vous souhaitez effectuer une copie pour créer le nouveau fenêtrage. | Assurez-vous que le type de fenêtrage (par exemple TCC, ICC) correspond à votre application cible. |
| 4. | Appuyez sur l’icône Copier pour créer une copie du fenêtrage. |  |
| 5. | Dans la copie nouvellement générée, appuyez sur l’icône Modifier et suivez les instructions de modification de la section [Modification des fenêtrages existants](11-results-and-data-analysis.md#section-11-4-3). | ![BactoSense — Modifier la fenêtre](/img/gui/icons/edit-gate-button.png "width=48 class=manual-icon") |

Création d’un nouveau fenêtrage à partir de zéro

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | En tant qu’utilisateur Advanced ou Admin, sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres. |  |
| 2. | Appuyez sur le bouton Fenêtres. |  |
| 3. | Dans la barre d’action en bas, appuyez sur Nouveau. |  |
| 4. | Saisissez un nom pour le jeu de fenêtres et sélectionnez l’un des modèles disponibles pour la cartouche installée. |  |
| 5. | Suivez ensuite l’assistant de configuration des fenêtres à l’écran, tel que décrit dans les instructions de modification des fenêtres de la section [Modification des fenêtrages existants](11-results-and-data-analysis.md#section-11-4-3). |  |
| 6. | Une fois terminé, vous pouvez sélectionner le nouveau fenêtrage lors de la création de nouvelles mesures ou du fenêtrage des mesures existantes, comme décrit dans la section [Re-fenêtrage des mesures](11-results-and-data-analysis.md#section-11-4-1). |  |

### 11.4.3 Modification des fenêtrages existants {#section-11-4-3}

En dehors des fenêtrages par défaut, tous les autres fenêtrages peuvent être modifiés. La modification des fenêtres peut comprendre le changement de nom, la modification de la position de la fenêtre verticale et la modification du nombre et de la position des coins de la fenêtre polygonale.

Cette section décrit le processus général de modification d’un fenêtrage. La section [Stratégie d’ajustement des fenêtres pour TCC et ICC](11-results-and-data-analysis.md#section-11-4-4) décrit une stratégie spécifique pour ajuster les jeux de fenêtres pour les mesures TCC et ICC.

![BactoSense — Définition et aperçu du gate TCC](/img/gui/fr/tcc-gate-definition.png "width=576 class=manual-figure")

*Figure 11-3 Paramètres de fenêtre pour TCC*

|  |  |  |  |
| --- | --- | --- | --- |
| ① | Coordonnées des points de la fenêtre. a : Premier point de la fenêtre b : Deuxième point de la fenêtre c : Troisième point de la fenêtre d : Quatrième point de la fenêtre | ② | Supprimer un point de la fenêtre. |
| ③ | Ajouter un nouveau point à la fenêtre. | ④ | Modifiez la coordonnée sélectionnée. Dans cette capture d’écran, la coordonnée FL1 (a, FL1) du premier point est sélectionnée. Nous pouvons donc déplacer le premier point de la fenêtre le long de l’axe FL1 (axe X). |
| ⑤ | Limite inférieure HNA : cette fenêtre est définie sur l’écran suivant. | ⑥ | Aperçu |

La procédure suivante décrit comment ajuster une fenêtre :

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | En tant qu’utilisateur Advanced ou Admin, sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres. | ![BactoSense — Bouton Paramètres](/img/gui/fr/home-settings-button.png "width=57 class=manual-icon-settings-button-half") |
| 2. | Appuyez sur le bouton Fenêtres. | ![BactoSense — Paramètres des fenêtres](/img/gui/icons/gate-settings-button.png "width=48 class=manual-icon") |
| 3. | Appuyez sur le bouton Modifier de la fenêtre que vous souhaitez modifier. | ![BactoSense — Modifier la fenêtre](/img/gui/icons/edit-gate-button.png "width=48 class=manual-icon") |
| 4. | Modifiez le nom si vous le souhaitez, puis appuyez sur le bouton Suivant. |  |
| 5. | Ajustez le nombre et la position des sommets du polygone (pour TCC et ICC, voir section [Stratégie d’ajustement des fenêtres pour TCC et ICC](11-results-and-data-analysis.md#section-11-4-4)). Une fenêtre polygonale peut avoir de 3 à 6 sommets. | ![BactoSense — Définition du gate ICC](/img/gui/fr/icc-gate-definition.png "width=282 class=manual-figure") |
| 6. | Appuyez sur le bouton Suivant. |  |
| 7. | Saisissez la limite inférieure HNA (pour TCC et ICC, consultez la section [Stratégie d’ajustement des fenêtres pour TCC et ICC](11-results-and-data-analysis.md#section-11-4-4)). | ![BactoSense — Limite inférieure HNA](/img/gui/fr/hna-lower-limit.png "width=282 class=manual-figure") |
| 8. | Appuyez sur Enregistrer. Dans la boîte de dialogue, choisissez Enregistrer pour modifier le jeu existant, ou Enregistrer comme nouveau jeu pour conserver l’original et créer un nouveau jeu. |  |
| 9. | Une fois terminé, vous pouvez sélectionner le fenêtrage modifié lors de la création de nouvelles mesures ou du fenêtrage des mesures existantes, comme décrit dans la section [Re-fenêtrage des mesures](11-results-and-data-analysis.md#section-11-4-1). |  |

### 11.4.4 Stratégie d’ajustement des fenêtres pour TCC et ICC {#section-11-4-4}

Le BactoSense est livré avec des fenêtrages par défaut qui conviennent à la grande majorité des échantillons. Cependant, si nécessaire, les utilisateurs avancés ont la possibilité d’ajuster le fenêtrage. Une procédure générale d’ajustement du fenêtrage est expliquée ci-dessous et s’applique aux cartouches TCC et ICC.

<div className="manual-narrow-details-scroll">

<table className="manual-table manual-narrow-details">

<colgroup>
<col className="procedure-step-column" />
<col className="procedure-instruction-column" />
<col className="procedure-detail-column" />
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

Mesurez un échantillon d’eau avec le protocole standard Water analysis. Sur la page Result details, le nuage de points FL1 en fonction de FL2 montre : 1) Les cellules LNA et HNA de l’eau 2) Le bruit électrique des détecteurs optiques 3) Les débris/le bruit de fond (qui peuvent inclure des cellules endommagées, des agrégats ou d’autres particules)

</td>

<td>

![Illustration du tableau, page du manuel 108](/img/manual/cell-564a3512838d.png "width=126 class=manual-figure")

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Sur l’écran d’accueil, appuyez sur Paramètres pour ouvrir le menu des paramètres. Appuyez sur le bouton Fenêtres.

</td>

<td>

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Selon vos besoins, effectuez l’une des opérations suivantes : •<br />Créer un nouveau jeu de<br />fenêtres • Modifier un jeu existant<br />• Copier un jeu existant et modifier sa copie

</td>

<td>

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

Nommez ce jeu de fenêtres et appuyez sur Suivant.

</td>

<td>

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Placez la fenêtre polygonale à chaque extrémité (gauche et droite). Utilisez par exemple ces quatre points :

<table className="manual-table">

<tbody>

<tr>

<td>

FL1

</td>

<td>

FL2

</td>

</tr>

<tr>

<td>

3.0

</td>

<td>

0.0

</td>

</tr>

<tr>

<td>

3.0

</td>

<td>

6.1

</td>

</tr>

<tr>

<td>

6.5

</td>

<td>

6.1

</td>

</tr>

<tr>

<td>

6.5

</td>

<td>

0.0

</td>

</tr>

</tbody>

</table>

</td>

<td>

![Illustration du tableau, page du manuel 108](/img/manual/cell-374bfaa7d23b.png "width=126 class=manual-figure")

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Appuyez sur Suivant et Enregistrer. Pour un nouveau modèle, confirmez avec Oui. Pour un jeu modifié, choisissez Enregistrer ou Enregistrer comme nouveau jeu dans la boîte de dialogue.

</td>

<td>

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

Affichez le résultat de l’échantillon d’eau mesuré précédemment.

</td>

<td>

</td>

</tr>

<tr>

<td>

8\.

</td>

<td>

Dans l’affichage du résultat, appuyez sur Re-fenêtrer.

</td>

<td>



</td>

</tr>

<tr>

<td>

9\.

</td>

<td>

Sélectionnez la fenêtre que vous venez de créer et retraitez les données avec celle-ci en appuyant sur Confirmer.

</td>

<td>



</td>

</tr>

<tr>

<td>

10\.

</td>

<td>

Ouvrez l’histogramme FL1 et repérez le premier creux après le pic de bruit, c’est-à-dire le premier minimum après le pic à l’extrême gauche (flèche sur l’image). Notez la valeur FL1 de ce minimum (par exemple 3.8).

</td>

<td>

![Illustration du tableau, page du manuel 109](/img/manual/cell-d44e977152e1.png "width=126 class=manual-figure")

</td>

</tr>

<tr>

<td>

11\.

</td>

<td>

Revenez à Gate settings et modifiez à nouveau la fenêtre. Placez ses limites gauches à la valeur FL1 déterminée précédemment. Cela exclut le bruit électrique des détecteurs optiques. Si nécessaire, sur l’axe FL2, placez les points « b » et « c » de la fenêtre juste en dessous de la zone de débris/bruit de fond (généralement visible sous forme de diagonales droites).

</td>

<td>

![Illustration du tableau, page du manuel 109](/img/manual/cell-67de70c6bd1f.png "width=126 class=manual-figure")

</td>

</tr>

<tr>

<td>

12\.

</td>

<td>

Enregistrez la fenêtre ajustée.

</td>

<td>



</td>

</tr>

<tr>

<td>

13\.

</td>

<td>

Affichez à nouveau le résultat de l’échantillon d’eau mesuré précédemment.

</td>

<td>



</td>

</tr>

<tr>

<td>

14\.

</td>

<td>

Dans l’affichage du résultat, appuyez sur Re-fenêtrer.

</td>

<td>



</td>

</tr>

<tr>

<td>

15\.

</td>

<td>

Sélectionnez la fenêtre que vous venez de créer et retraitez les données avec celle-ci en appuyant sur Confirmer.

</td>

<td>



</td>

</tr>

<tr>

<td>

16\.

</td>

<td>

Pour placer la limite inférieure HNA, ouvrez à nouveau l’histogramme FL1 et localisez le minimum entre les pics LNA et HNA (ligne verticale sur l’image). Notez sa valeur FL1 (par exemple 4,8).

</td>

<td>

![Illustration du tableau, page du manuel 110](/img/manual/cell-3dd4365d2ad3.png "width=126 class=manual-figure")

</td>

</tr>

<tr>

<td>

17\.

</td>

<td>

Retournez au menu Fenêtres et modifiez à nouveau votre fenêtre.

</td>

<td>



</td>

</tr>

<tr>

<td>

18\.

</td>

<td>

Accédez à l’étape de configuration de la limite inférieure HNA. Saisissez la limite inférieure HNA précédemment identifiée dans le champ FL1, appuyez sur Enregistrer et choisissez Enregistrer dans la boîte de dialogue.

</td>

<td>



</td>

</tr>

<tr>

<td>

19\.

</td>

<td>

Re-fenêtrez à nouveau la mesure d’analyse de l’eau et vérifiez que la fenêtre est adaptée. Ajustez davantage si nécessaire.

</td>

<td>



</td>

</tr>

</tbody>

</table>

</div>
## 11.5 Analyse avancée des données {#section-11-5}

Les données de mesure BactoSense peuvent être exportées au format de fichier Flow Cytometry Standard (FCS) 3.1. Le format de fichier FCS est normalisé par la Société internationale pour l’avancement de la cytométrie (ISAC) afin d’assurer l’interopérabilité entre différents instruments de cytométrie en flux et logiciels d’analyse. Il existe différentes versions du format FCS, chacune introduisant des améliorations et des fonctionnalités supplémentaires. Les données FCS peuvent être utilisées pour un post-traitement hors ligne personnalisé, tel que l’application de stratégies de délimitation complexes, l’empreinte digitale microbienne, la détection automatisée d’anomalies et bien plus encore.

### 11.5.1 Récupération des fichiers FCS {#section-11-5-1}

Les fichiers FCS peuvent être récupérés des manières suivantes :

- Téléchargement sur une clé USB : En utilisant la fonction Exporter tout (voir section [Exportation des paramètres, des diagnostics ou de toutes les données vers un périphérique USB](12-data-access-and-export.md#section-12-1-1))

- Téléchargement depuis l’interface web, soit sous forme de fichiers uniques (voir section [Téléchargement d’un fichier FCS](13-web-user-interface.md#section-13-4)) ou plusieurs fichiers (voir section [Téléchargement d’un fichier ZIP contenant plusieurs résultats](13-web-user-interface.md#section-13-5))

- Accès par FTP (voir section [Récupération des données via FTP](12-data-access-and-export.md#section-12-2))

- Accès par HTTPS (voir section [Récupération des fichiers via HTTP ou HTTPS](12-data-access-and-export.md#section-12-3))

Pour obtenir de l’aide sur la configuration d’une chaîne d’outils d’analyse de données avancée, veuillez contacter support@bnovate.com.

## 11.6 Comparaison avec d’autres cytomètres en flux {#section-11-6}

Pour comparer les résultats du BactoSense à ceux d’un autre cytomètre en flux, une solution de référence contenant des billes autofluorescentes peut être analysée. Cette méthode permet à l’utilisateur de comparer les échelles de mesure de différents instruments.

<div className="manual-narrow-details-scroll">

<table className="manual-table manual-narrow-details manual-narrow-details-split">

<colgroup>
<col className="procedure-step-column" />
<col className="procedure-instruction-column" />
<col className="procedure-detail-column" />
<col className="procedure-detail-column" />
</colgroup>

<thead>

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

</thead>

<tbody>

<tr>

<td>

1\.

</td>

<td>

Il est recommandé d’utiliser le kit de validation qui contient une solution de billes prête à l’emploi.

</td>

<td colSpan="2">

Lisez les instructions du Kit de validation pour plus d’informations.

</td>

</tr>

<tr>

<td>

2\.

</td>

<td>

Installez le dispositif d’échantillonnage manuel conformément au manuel d’utilisation.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

3\.

</td>

<td>

Prélevez une des solutions de billes du kit de validation et chargez-la dans le dispositif d’échantillonnage.

</td>

<td colSpan="2">

Lisez les instructions du Kit de validation pour plus d’informations.

</td>

</tr>

<tr>

<td>

4\.

</td>

<td>

:::info[Informations supplémentaires]

Appuyez sur Home. Appuyez sur Back autant de fois que nécessaire pour faire apparaître le bouton Home.

:::

</td>

<td>

![BactoSense — Bouton d’accueil](/img/gui/icons/home-button.png "width=48 class=manual-icon")

</td>

<td>

![BactoSense — Bouton de retour](/img/gui/icons/back-button.png "width=48 class=manual-icon")

</td>

</tr>

<tr>

<td>

5\.

</td>

<td>

Sur l’écran d’accueil, appuyez sur Mode et sélectionnez Mode manuel. Appuyez sur Retour, puis sur Mesurer pour ouvrir l’assistant de mesure.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

6\.

</td>

<td>

Sélectionnez Amorçage dans la liste des protocoles.

</td>

<td colSpan="2">

Voir le manuel d’utilisation, section [Réalisation d’un amorçage](../measurements/#section-10-9-3).

</td>

</tr>

<tr>

<td>

7\.

</td>

<td>

Appuyez sur les boutons Suivant et Démarrer. Laissez le protocole d’amorçage se terminer.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

8\.

</td>

<td>

Appuyez sur Nouveau, choisissez Analyse Billes dans la liste, puis appuyez sur Suivant et Démarrer.

</td>

<td colSpan="2">

</td>

</tr>

<tr>

<td>

9\.

</td>

<td>

Attendez les résultats et, si nécessaire, ajustez précisément la fenêtre du dotplot FL1 vs FL2 pour ne compter que les 4 populations de billes. Il est important de s’assurer que le bruit, le fond et les débris ne sont pas pris en compte dans la fenêtre.

</td>

<td colSpan="2">

Voir la section [Modification des fenêtrages existants](../results-and-data-analysis/#section-11-4-3) pour ajuster la<br />fenêtre. ![Illustration du tableau, page du manuel 112](/img/manual/render-fa85ea9255cb.webp "width=246 class=manual-figure")

</td>

</tr>

<tr>

<td>

10\.

</td>

<td>

Sur l’histogramme FL1 en fonction du nombre de cellules, estimez la valeur logarithmique du centre de chaque pic sur l’axe FL1. Dans cet exemple, nous obtenons environ (en log) : 1<sup>er</sup> pic = 4.05 2<sup>e</sup> pic = 4.3 3<sup>e</sup> pic = 5.35 4<sup>e</sup> pic = 6.2

</td>

<td>

![Illustration du tableau, page du manuel 113](/img/manual/cell-c2ba9a559620.png "width=246 class=manual-figure")

</td>

</tr>

<tr>

<td>

11\.

</td>

<td>

Mesurez les mêmes billes avec l’autre cytomètre en flux à comparer et répétez les étapes 10 et 11. Dans cet exemple, nous obtenons environ (en log) : 1<sup>er</sup> pic = log(10<sup>3</sup>) = 3 2<sup>e</sup> pic = log(2*10<sup>3</sup>) = 3.3 3<sup>e</sup> pic = log(2.4*10<sup>4</sup>) = 4.4 4<sup>e</sup> pic = log(1.6*10<sup>5</sup>) = 5.2

</td>

<td>

![Illustration du tableau, page du manuel 113](/img/manual/cell-4c2343e0bbfe.png "width=246 class=manual-figure")

</td>

</tr>

<tr>

<td>

12\.

</td>

<td>

Avec les différentes valeurs obtenues pour les deux instruments, il est maintenant possible de comparer leurs échelles et leurs fenêtres de mesure.

</td>

<td>



</td>

</tr>

</tbody>

</table>

</div>
