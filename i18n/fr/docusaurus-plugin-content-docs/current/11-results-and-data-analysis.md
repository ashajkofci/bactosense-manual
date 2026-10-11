---
title: "11. Résultats et analyse des données"
sidebar_label: "11. Résultats et analyse des données"
sidebar_position: 11
slug: /results-and-data-analysis
---

## 11.1 Résultats de mesure {#section-11-1}

La figure ci-dessous montre le résultat d'une mesure sélectionnée. À partir de là, l'utilisateur peut supprimer ou renommer la mesure, rechercher des résultats plus anciens, ou exporter le résultat. Les utilisateurs experts peuvent répéter le comptage des cellules avec de nouvelles fenêtres. Certains éléments ou actions de l'interface utilisateur ne sont disponibles que pour des rôles d'utilisateur spécifiques (Basique, Avancé ou Admin).

<img src="/img/figures-second/figure-1dc7da95b4adc8.webp" alt="Figure 11-1 Affichage du résultat d&#x27;une mesure ICC." width="674" className="manual-figure" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Illustration du manuel d’utilisation BactoSense" width="57" className="manual-icon" loading="lazy" />

*Figure 11-1 Affichage du résultat d'une mesure ICC.*

<table className="manual-table"><tbody><tr><td>1</td><td>Principaux paramètres du résultat, en fonction du type de cartouche utilisé. Pour plus d'informations, voir la section 11.3. Appuyez sur l’icône d’information à côté du résultat principal pour afficher tous les paramètres du résultat (2).</td></tr><tr><td>2</td><td>Fenêtre d’information sur le résultat affichant tous les paramètres disponibles et le diagramme de points principal.</td></tr><tr><td>3</td><td>Nuage de points principal dans la fenêtre d’information sur le résultat. Le graphique FL1 vs FL2 montre tous les événements détectés en fonction de l'amplitude de leurs signaux de fluorescence FL1 (535 nm, axe X) et FL2 (715 nm, axe Y). Le polygone rouge et la ligne verticale indiquent la fenêtre configurée. Pour plus de détails, voir la section 11.3. Appuyez sur cet aperçu pour ouvrir une fenêtre contextuelle donnant accès à tous les diagrammes de points (4).</td></tr></tbody></table>

<table className="manual-table"><tbody><tr><td>4</td><td>Fenêtre contextuelle permettant d'accéder à tous les diagrammes de points. Le graphique FL1 vs SSC montre uniquement les cellules à l'intérieur de la fenêtre polygonale FL1 - FL2, en fonction de leur signal de fluorescence FL1 (535 nm) et du signal de lumière diffusée SSC (488 nm). L'histogramme FL1 montre toutes les cellules à l'intérieur de la fenêtre polygonale FL1 - FL2, classées en fonction de leur fluorescence en FL1. Les diagrammes disponibles dépendent du modèle et de la configuration de votre instrument.</td></tr><tr><td>5</td><td>Le champ des avertissements facultatifs indique si des avertissements ont été générés pendant la mesure. Tapez sur le champ pour en savoir plus.</td></tr><tr><td>6</td><td>Le bouton Supprimer supprime définitivement la mesure (confirmation nécessaire).</td></tr><tr><td>7</td><td>Le bouton Renommer permet de modifier le nom de la mesure.</td></tr><tr><td>8</td><td>Le bouton Re-Gate result permet d’appliquer un autre jeu de fenêtres aux données de mesure. Pour plus de détails, voir la section 11.4.1.</td></tr><tr><td>9</td><td>Le bouton Exporter permet d'enregistrer ce résultat sur une clé USB. Pour plus d'informations, voir la section 10.8.1.</td></tr><tr><td>10</td><td>Les boutons de navigation situés à gauche et à droite de l'affichage des résultats vous permettent de passer respectivement aux mesures précédentes et suivantes.</td></tr></tbody></table>

:::info[Sélectionnez plusieurs mesures]

Sélection multiple et opérations par lot : dans la liste des mesures, maintenez une mesure appuyée pour activer la sélection multiple, puis sélectionnez Delete / Re-gate ou Export.

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

- Les fenêtres par défaut sur le BactoSense peuvent être trouvées en appuyant sur Fenêtres dans le Menu principal de l’interface utilisateur du BactoSense.
- Les jeux de fenêtres par défaut ne peuvent ni être modifiés ni supprimés.
- De nouveaux fenêtrages peuvent être créés en modifiant une copie d’un fenêtrage existant, comme décrit dans la section 11.4.2.

### 11.2.2 Liste des ensembles et opérations de délimitation disponibles {#section-11-2-2}

Une liste de tous les ensembles de fenêtres disponibles sur le BactoSense peut être trouvée en appuyant sur Fenêtres dans le Menu principal de l’interface utilisateur du BactoSense.

<img src="/img/figures-second/figure-899e3c5869ed8f.webp" alt="Figure 11-2 Liste des jeux de fenêtres disponibles et options permettant de copier et de créer de nouveaux ensembles. Les fenêtres par défaut sont préconfigurées et ne peuvent pas être supprimées ou modifiées." width="599" className="manual-figure" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Illustration du manuel d’utilisation BactoSense" width="57" className="manual-icon" loading="lazy" />

*Figure 11-2 Liste des jeux de fenêtres disponibles et options de copie et de création de nouveaux jeux. Les fenêtres par défaut sont préconfigurées et ne peuvent être ni supprimées ni modifiées.*

<table className="manual-table"><tbody><tr><td>1</td><td>Exemple de fenêtre personnalisée pour la cartouche ICC.</td><td>2</td><td>Fenêtre par défaut ICC. Les fenêtres par défaut sont préconfigurées.</td></tr><tr><td>3</td><td>Fenêtre double par défaut ICC. Ce jeu de fenêtres contient une fenêtre polygonale configurable supplémentaire. Remarque : sur certains modèles, une fonction supplémentaire est nécessaire pour l’utiliser (voir section 9.1).</td><td>4</td><td>Types de fenêtres, à utiliser avec le type de cartouche respectif.</td></tr><tr><td>5</td><td>Supprimer un fenêtrage existant. Les fenêtres par défaut ne peuvent pas être supprimées.</td><td>6</td><td>Prévisualiser le fenêtrage.</td></tr><tr><td>7</td><td>Créer une copie du fenêtrage.</td><td>8</td><td>Modifier le fenêtrage. Les fenêtres par défaut ne peuvent pas être modifiées.</td></tr><tr><td>9</td><td>Créer un nouveau fenêtrage.</td><td></td><td></td></tr></tbody></table>

## 11.3 Cartouches, paramètres des fenêtres et résultats {#section-11-3}

Les paramètres mesurés dépendent de la cartouche utilisée. Les types de cartouches disponibles sont TCC (nombre total de cellules), ICC (nombre de cellules intactes), EBC (nombre de cellules E. coli), ACC (nombre de cellules actives), CBC (nombre de cellules coliformes) et NBC (nombre de cellules Enterococcus). Les sous-sections suivantes décrivent les jeux de fenêtres et les paramètres des résultats pour les cartouches TCC, ICC et ACC.

### 11.3.1 Cartouche TCC {#section-11-3-1}

TCC désigne le nombre total de cellules. La cartouche TCC mesure donc la concentration de toutes les cellules.

**Tableau 11-1 Fenêtrage utilisé pour la cartouche TCC.**

| FENÊTRE | TYPE | DESCRIPTION |
| --- | --- | --- |
| TCC | Polygone | Un polygone défini sur le plan FL1-FL2. Les points à l’intérieur de ce polygone sont comptés comme des cellules (TCC). |
| Limite inférieure HNA | Ligne verticale | Un seuil sur FL1. Les points situés à l’intérieur du TCC et supérieurs à la limite inférieure HNA dans FL1 sont comptés comme HNAC. Les points situés à l’intérieur du TCC, mais inférieurs à la limite sont comptés comme LNAC. |

**Tableau 11-2 Paramètres des résultats obtenus avec la cartouche TCC.**

| PARAMÈTRE | UNITÉ | NOM | DESCRIPTION |
| --- | --- | --- | --- |
| TCC | 1/mL | Nombre total de cellules | Nombre total de cellules détectées à l’intérieur de la fenêtre TCC. Il s’agit de la somme de HNAC et LNAC : TCC = HNAC + LNAC |
| HNAP | % | Pourcentage de bactéries avec un haut taux d'acide nucléique | Pourcentage de cellules HNA par rapport à TCC : HNAP<br/>= (HNAC / TCC) × 100 |
| LNAC | 1/mL | Nombre de bactéries à faible taux d'acide nucléique | Le nombre de cellules à l’intérieur de la fenêtre TCC, mais en dessous de la limite inférieure HNA (fenêtre de ligne verticale). |
| HNAC | 1/mL | Nombre de bactéries avec un haut taux d'acide nucléique | Le nombre de cellules à l’intérieur de la fenêtre TCC et au-dessus de la limite inférieure HNA (fenêtre de ligne verticale). |

Pour plus d’informations sur la façon d’ajuster les fenêtres, voir la section 11.4.

### 11.3.2 Cartouche ICC {#section-11-3-2}

ICC désigne le nombre de cellules intactes. La cartouche ICC mesure donc la concentration des cellules intactes.

**Tableau 11-3 Fenêtrage utilisé pour la cartouche ICC.**

| FENÊTRE | TYPE | DESCRIPTION |
| --- | --- | --- |
| ICC | Polygone | Un polygone défini sur le plan FL1-FL2. Les points à l’intérieur de ce polygone sont comptés comme des cellules intactes (ICC). |
| Limite inférieure HNA | Ligne verticale | Un seuil sur FL1. Les points situés à l’intérieur de l’ICC, mais au-dessus de la limite inférieure HNA dans FL1 sont comptés comme HNAC. Les points situés à l’intérieur de l’ICC, mais en dessous de la limite sont comptés comme LNAC. |

**Tableau 11-4 Paramètres des résultat obtenus avec la cartouche ICC.**

| PARAMÈTRE | UNITÉ | NOM | DESCRIPTION |
| --- | --- | --- | --- |
| ICC | 1/mL | Nombre total de cellules intactes | Nombre total de cellules intactes à l’intérieur de la fenêtre ICC : ICC = HNAC + LNAC |
| HNAP | % | Pourcentage de bactéries avec un haut taux d'acide nucléique | Pourcentage de cellules HNA par rapport à ICC : HNAP<br/>= (HNAC / ICC) × 100 |
| LNAC | 1/mL | Nombre de bactéries à faible taux d'acide nucléique | Le nombre de cellules LNA à l’intérieur de la fenêtre ICC, mais en dessous de la limite inférieure HNA (fenêtre de ligne verticale). |
| HNAC | 1/mL | Nombre de bactéries avec un haut taux d'acide nucléique | Le nombre de cellules HNA à l’intérieur de la fenêtre ICC et au-dessus de la limite inférieure HNA (fenêtre de la ligne verticale). |

Pour plus d’informations sur la façon d’ajuster les fenêtres, voir la section 11.4.

### 11.3.3 Cartouche ACC {#section-11-3-3}

ACC désigne le nombre de cellules actives. La cartouche ACC mesure donc la concentration des cellules métaboliquement actives au moyen d’un dosage enzymatique.

**Table 11-5 Fenêtrage utilisé pour la cartouche ACC.**

| FENÊTRE | TYPE | DESCRIPTION |
| --- | --- | --- |
| ACC | Polygone | Un polygone défini sur le plan FL1-FL2. Les points à l’intérieur de ce polygone sont comptés comme des cellules actives (ACC). |
| Limite inférieure HACC | Ligne verticale | Un seuil sur FL1. Les points situés à l’intérieur de l’ACC, mais au-dessus de la limite inférieure HACC dans FL1 sont comptés comme HACC. Les points situés à l’intérieur de l’ACC, mais en dessous de la limite sont comptés comme LACC. |

**Table 11-6 Paramètres des résultat obtenus avec la cartouche ACC.**

| PARAMÈTRE | UNITÉ | NOM | DESCRIPTION |
| --- | --- | --- | --- |
| ACC | 1/mL | Nombre total de cellules actives | Nombre total de cellules actives à l’intérieur de la fenêtre ACC : ACC = HACC + LACC |
| HACC | 1/mL | Nombre de cellules hautement actives | Nombre de cellules actives dont l’intensité FL1 est supérieure à la fenêtre verticale HACC. |
| LACC | 1/mL | Nombre de cellules faiblement actives | Nombre de cellules actives dont l’intensité FL1 est inférieure à la fenêtre verticale HACC. |
| HACP | % | Pourcentage de cellules hautement actives | Pourcentage de HACC parmi les ACC : HACP<br/>= (HACC / ACC) × 100 |

Pour plus d’informations sur la façon d’ajuster les fenêtres, voir la section 11.4.

## 11.4 Modification des fenêtres {#section-11-4}

### 11.4.1 Re-fenêtrage des mesures {#section-11-4-1}

Le re-fenêtrage est le processus consistant à appliquer un fenêtrage différent aux données de mesure existantes.

- Une condition préalable au re-fenêtrage est la présence d’un tel fenêtrage supplémentaire. Trouvez tous les fenêtrages disponibles pour votre type de cartouche en appuyant sur Fenêtres dans le Menu principal de l’interface utilisateur BactoSense.
- Le processus de modification d’un fenêtrage existant est décrit dans la section 11.4.3.

<table className="manual-table"><tbody><tr><th scope="col"></th><th scope="col">OPÉRATION</th><th scope="col">INFORMATIONS SUPPLÉMENTAIRES/IMAGE</th></tr><tr><td>1.</td><td>Accédez au Menu principal de l’interface utilisateur de BactoSense.</td><td></td></tr><tr><td>2.</td><td>Selon la méthode de mesure utilisée, appuyez sur Résultats (Manuel) ou Résultats (Auto) pour voir la liste des résultats.</td><td></td></tr><tr><td>3.</td><td>Pour re-fenêtrer une seule mesure, sélectionnez-la pour afficher la page des détails du résultat. Pour re-fenêtrer plusieurs mesures (lot), appuyez longuement sur la mesure jusqu’à ce qu’elle soit mise en surbrillance et qu’une case à cocher apparaisse à gauche. Appuyez ensuite les mesures souhaitées pour les sélectionner.</td><td></td></tr><tr><td>4.</td><td>Appuyez ensuite sur Re-gate.</td><td></td></tr><tr><td>5.</td><td>Sélectionnez le fenêtrage souhaité en cochant sa case.</td><td></td></tr><tr><td>6.</td><td>Appuyez sur le bouton Confirmer pour lancer le processus de re-fenêtrage.</td><td><Admonition type="info" title="Informations supplémentaires">Selon le nombre de mesures, le recalcul avec de nouvelles fenêtres peut prendre plusieurs minutes.</Admonition></td></tr><tr><td>7.</td><td>Après avoir terminé, appuyez sur OK.</td><td></td></tr></tbody></table>

### 11.4.2 Création d’un nouveau fenêtrage {#section-11-4-2}

De nouveaux fenêtrages peuvent être créés soit à partir d’une copie d’un fenêtrage existant, soit à partir de zéro.

Création d’un nouveau fenêtrage à partir d’une copie

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Accédez au Menu principal de l’interface utilisateur de BactoSense. |  |
| 2. | Appuyez sur le bouton Fenêtres. |  |
| 3. | Dans la liste des fenêtrages disponibles, identifiez le fenêtrage à partir duquel vous souhaitez effectuer une copie pour créer le nouveau fenêtrage. | Assurez-vous que le type de fenêtrage (par exemple TCC, ICC) correspond à votre application cible. |
| 4. | Appuyez sur l’icône Copier pour créer une copie du fenêtrage. |  |
| 5. | Dans la copie nouvellement générée, appuyez sur l’icône Modifier et suivez les instructions de modification de la section 11.4.3. | <img src="/img/manual/cell-95fee81e2625.png" alt="Illustration du tableau, page du manuel 105" width="264" className="manual-figure" loading="lazy"/> |

Création d’un nouveau fenêtrage à partir de zéro

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Accédez au Menu principal de l’interface utilisateur de BactoSense. |  |
| 2. | Appuyez sur le bouton Fenêtres. |  |
| 3. | Dans la barre d’action en bas, appuyez sur Nouveau. |  |
| 4. | Dans le champ Nom, saisissez un nom pour l’ensemble de fenêtres. Dans le champ Type, sélectionnez pour quel type de cartouche l’ensemble de fenêtres sera utilisé. |  |
| 5. | Suivez ensuite l’assistant de configuration des fenêtres à l’écran, tel que décrit dans les instructions de modification des fenêtres de la section 11.4.3. |  |
| 6. | Une fois terminé, vous pouvez sélectionner le nouveau fenêtrage lors de la création de nouvelles mesures ou du fenêtrage des mesures existantes, comme décrit dans la section 11.4.1. |  |

### 11.4.3 Modification des fenêtrages existants {#section-11-4-3}

En dehors des fenêtrages par défaut, tous les autres fenêtrages peuvent être modifiés. La modification des fenêtres peut comprendre le changement de nom, la modification de la position de la fenêtre verticale et la modification du nombre et de la position des coins de la fenêtre polygonale.

Cette section décrit le processus général de modification d’un fenêtrage. La section 11.4.4 décrit une stratégie spécifique pour ajuster les jeux de fenêtres pour les mesures TCC et ICC.

<img src="/img/figures-second/figure-8dc71f8c5efcd4.webp" alt="Figure 11-3 Paramètres de fenêtre pour TCC" width="576" className="manual-figure" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Illustration du manuel d’utilisation BactoSense" width="57" className="manual-icon" loading="lazy" />

*Figure 11-3 Paramètres de fenêtre pour TCC*

<table className="manual-table"><tbody><tr><td>①</td><td>Coordonnées des points de la fenêtre. a : Premier point de la fenêtre b : Deuxième point de la fenêtre c : Troisième point de la fenêtre d : Quatrième point de la fenêtre</td><td>②</td><td>Supprimer un point de la fenêtre.</td></tr><tr><td>③</td><td>Ajouter un nouveau point à la fenêtre.</td><td>④</td><td>Modifiez la coordonnée sélectionnée. Dans cette capture d’écran, la coordonnée FL1 (a, FL1) du premier point est sélectionnée. Nous pouvons donc déplacer le premier point de la fenêtre le long de l’axe FL1 (axe X).</td></tr><tr><td>⑤</td><td>Limite inférieure HNA : cette fenêtre est définie sur l’écran suivant.</td><td>⑥</td><td>Aperçu</td></tr></tbody></table>

La procédure suivante décrit comment ajuster une fenêtre :

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Accédez au Menu principal de l’interface utilisateur de BactoSense. | <img src="/img/manual/cell-d07318a281b1.png" alt="Illustration du tableau, page du manuel 107" width="282" className="manual-figure" loading="lazy"/> |
| 2. | Appuyez sur le bouton Fenêtres. | <img src="/img/manual/cell-882cf24141b5.png" alt="Illustration du tableau, page du manuel 107" width="282" className="manual-figure" loading="lazy"/> |
| 3. | Appuyez sur le bouton Modifier de la fenêtre que vous souhaitez modifier. | <img src="/img/manual/cell-fd72b5bdcc2a.png" alt="Illustration du tableau, page du manuel 107" width="282" className="manual-figure" loading="lazy"/> |
| 4. | Modifiez le nom si vous le souhaitez, puis appuyez sur le bouton Suivant. |  |
| 5. | Ajustez le nombre et la position des sommets du polygone (pour TCC et ICC, voir section 11.4.4). Une fenêtre polygonale peut avoir de 3 à 6 sommets. | <img src="/img/manual/cell-7440601f6ebb.png" alt="Illustration du tableau, page du manuel 107" width="282" className="manual-figure" loading="lazy"/> |
| 6. | Appuyez sur le bouton Suivant. |  |
| 7. | Saisissez la limite inférieure HNA (pour TCC et ICC, consultez la section 11.4.4). | <img src="/img/manual/cell-ec7e624b3c7f.png" alt="Illustration du tableau, page du manuel 107" width="282" className="manual-figure" loading="lazy"/> |
| 8. | Appuyez sur le bouton Enregistrer et confirmez. |  |
| 9. | Une fois terminé, vous pouvez sélectionner le fenêtrage modifié lors de la création de nouvelles mesures ou du fenêtrage des mesures existantes, comme décrit dans la section 11.4.1. |  |

### 11.4.4 Stratégie d’ajustement des fenêtres pour TCC et ICC {#section-11-4-4}

Le BactoSense est livré avec des fenêtrages par défaut qui conviennent à la grande majorité des échantillons. Cependant, si nécessaire, les utilisateurs avancés ont la possibilité d’ajuster le fenêtrage. Une procédure générale d’ajustement du fenêtrage est expliquée ci-dessous et s’applique aux cartouches TCC et ICC.

<table className="manual-table"><tbody><tr><th scope="col"></th><th scope="col">OPÉRATION</th><th scope="col">INFORMATIONS SUPPLÉMENTAIRES/IMAGE</th></tr><tr><td>1.</td><td>Mesurez un échantillon d’eau avec le protocole standard Water analysis. Sur la page Result details, le nuage de points FL1 en fonction de FL2 montre : 1) Les cellules LNA et HNA de l’eau 2) Le bruit électrique des détecteurs optiques 3) Les débris/le bruit de fond (qui peuvent inclure des cellules endommagées, des agrégats ou d’autres particules)</td><td><img src="/img/manual/cell-564a3512838d.png" alt="Illustration du tableau, page du manuel 108" width="252" className="manual-figure" loading="lazy" /></td></tr><tr><td>2.</td><td>Ouvrez le menu Home de l’interface BactoSense et appuyez sur Gate settings.</td><td></td></tr><tr><td>3.</td><td>Selon vos besoins, effectuez l’une des opérations suivantes : •<br />Créer un nouveau jeu de<br />fenêtres • Modifier un jeu existant<br />• Copier un jeu existant et modifier sa copie</td><td></td></tr><tr><td>4.</td><td>Nommez ce jeu de fenêtres et appuyez sur Next.</td><td></td></tr><tr><td>5.</td><td>Placez la fenêtre polygonale à chaque extrémité (gauche et droite). Utilisez par exemple ces quatre points :<table className="manual-table"><tbody><tr><td>FL1</td><td>FL2</td></tr><tr><td>3.0</td><td>0.0</td></tr><tr><td>3.0</td><td>6.1</td></tr><tr><td>6.5</td><td>6.1</td></tr><tr><td>6.5</td><td>0.0</td></tr></tbody></table></td><td><img src="/img/manual/cell-374bfaa7d23b.png" alt="Illustration du tableau, page du manuel 108" width="252" className="manual-figure" loading="lazy" /></td></tr><tr><td>6.</td><td>Appuyez sur Next, puis Save. Confirmez l’enregistrement du nouveau jeu de fenêtres avec Save.</td><td></td></tr><tr><td>7.</td><td>Affichez le résultat de l’échantillon d’eau mesuré précédemment.</td><td></td></tr></tbody></table>

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 8. | Dans l’affichage du résultat, appuyez sur Re-gate result. |  |
| 9. | Sélectionnez la fenêtre que vous venez de créer et retraitez les données avec celle-ci en appuyant sur Confirm. |  |
| 10. | Ouvrez l’histogramme FL1 et repérez le premier creux après le pic de bruit, c’est-à-dire le premier minimum après le pic à l’extrême gauche (flèche sur l’image). Notez la valeur FL1 de ce minimum (par exemple 3.8). | <img src="/img/manual/cell-d44e977152e1.png" alt="Illustration du tableau, page du manuel 109" width="252" className="manual-figure" loading="lazy"/> |
| 11. | Revenez à Gate settings et modifiez à nouveau la fenêtre. Placez ses limites gauches à la valeur FL1 déterminée précédemment. Cela exclut le bruit électrique des détecteurs optiques. Si nécessaire, sur l’axe FL2, placez les points « b » et « c » de la fenêtre juste en dessous de la zone de débris/bruit de fond (généralement visible sous forme de diagonales droites). | <img src="/img/manual/cell-67de70c6bd1f.png" alt="Illustration du tableau, page du manuel 109" width="252" className="manual-figure" loading="lazy"/> |
| 12. | Enregistrez la fenêtre ajustée. |  |
| 13. | Affichez à nouveau le résultat de l’échantillon d’eau mesuré précédemment. |  |
| 14. | Dans l’affichage du résultat, appuyez sur Re-gate result. |  |
| 15. | Sélectionnez la fenêtre que vous venez de créer et retraitez les données avec celle-ci en appuyant sur Confirm. |  |

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 16. | Pour placer la limite inférieure HNA, ouvrez à nouveau l’histogramme FL1 et localisez le minimum entre les pics LNA et HNA (ligne verticale sur l’image). Notez sa valeur FL1 (par exemple 4,8). | <img src="/img/manual/cell-3dd4365d2ad3.png" alt="Illustration du tableau, page du manuel 110" width="252" className="manual-figure" loading="lazy"/> |
| 17. | Retournez au menu Fenêtres et modifiez à nouveau votre fenêtre. |  |
| 18. | Accédez à l’étape de configuration de la limite inférieure HNA. Saisissez la limite inférieure HNA précédemment identifiée dans le champ FL1, appuyez sur Enregistrer et confirmez. |  |
| 19. | Re-fenêtrez à nouveau la mesure d’analyse de l’eau et vérifiez que la fenêtre est adaptée. Ajustez davantage si nécessaire. |  |

## 11.5 Analyse avancée des données {#section-11-5}

Les données de mesure BactoSense peuvent être exportées au format de fichier Flow Cytometry Standard (FCS) 3.1. Le format de fichier FCS est normalisé par la Société internationale pour l’avancement de la cytométrie (ISAC) afin d’assurer l’interopérabilité entre différents instruments de cytométrie en flux et logiciels d’analyse. Il existe différentes versions du format FCS, chacune introduisant des améliorations et des fonctionnalités supplémentaires. Les données FCS peuvent être utilisées pour un post-traitement hors ligne personnalisé, tel que l’application de stratégies de délimitation complexes, l’empreinte digitale microbienne, la détection automatisée d’anomalies et bien plus encore.

### 11.5.1 Récupération des fichiers FCS {#section-11-5-1}

Les fichiers FCS peuvent être récupérés des manières suivantes :

- Téléchargement sur une clé USB : En utilisant la fonction Exporter tout (voir section 12.1.1)

- Téléchargement depuis l’interface web, soit sous forme de fichiers uniques (voir section 13.4) ou plusieurs fichiers (voir section 13.5)

- Accès par FTP (voir section 12.2)

- Accès par HTTPS (voir section 12.3)

Pour obtenir de l’aide sur la configuration d’une chaîne d’outils d’analyse de données avancée, veuillez contacter support@bnovate.com.

## 11.6 Comparaison avec d’autres cytomètres en flux {#section-11-6}

Pour comparer les résultats du BactoSense à ceux d’un autre cytomètre en flux, une solution de référence contenant des billes autofluorescentes peut être analysée. Cette méthode permet à l’utilisateur de comparer les échelles de mesure de différents instruments.

<table className="manual-table"><tbody><tr><th scope="col"></th><th scope="col">OPÉRATION</th><th scope="col" colSpan="2">INFORMATIONS SUPPLÉMENTAIRES/IMAGE</th></tr><tr><td>1.</td><td>Il est recommandé d’utiliser le kit de validation qui contient une solution de billes prête à l’emploi.</td><td colSpan="2">Lisez les instructions du Kit de validation pour plus d’informations.</td></tr><tr><td>2.</td><td>Installez le dispositif d’échantillonnage manuel conformément au manuel d’utilisation.</td><td colSpan="2"></td></tr><tr><td>3.</td><td>Prélevez une des solutions de billes du kit de validation et chargez-la dans le dispositif d’échantillonnage.</td><td colSpan="2">Lisez les instructions du Kit de validation pour plus d’informations.</td></tr><tr><td>4.</td><td><Admonition type="info" title="Informations supplémentaires">Appuyez sur Home. Appuyez sur Back autant de fois que nécessaire pour faire apparaître le bouton Home.</Admonition></td><td><img src="/img/manual/cell-d07318a281b1.png" alt="Illustration du tableau, page du manuel 112" width="119" className="manual-figure" loading="lazy" /></td><td><img src="/img/manual/cell-05da61fc8424.png" alt="Illustration du tableau, page du manuel 112" width="119" className="manual-figure" loading="lazy" /></td></tr><tr><td>5.</td><td>Sur l’écran d’accueil, appuyez sur Mode et sélectionnez Mode manuel. Appuyez sur Retour, puis sur Mesurer pour ouvrir l’assistant de mesure.</td><td colSpan="2"></td></tr><tr><td>6.</td><td>Choisissez le protocole Amorçage dans la liste.</td><td colSpan="2">Voir le manuel d’utilisation, section 10.9.3.</td></tr><tr><td>7.</td><td>Appuyez sur les boutons Suivant et Démarrer. Laissez le protocole d’amorçage se terminer.</td><td colSpan="2"></td></tr><tr><td>8.</td><td>Choisissez le protocole Analyse Billes dans la liste et exécutez-le.</td><td colSpan="2"></td></tr><tr><td>9.</td><td>Attendez les résultats et, si nécessaire, ajustez précisément la fenêtre du dotplot FL1 vs FL2 pour ne compter que les 4 populations de billes. Il est important de s’assurer que le bruit, le fond et les débris ne sont pas pris en compte dans la fenêtre.</td><td colSpan="2">Voir la section 11.4.3 pour ajuster la<br />fenêtre. <img src="/img/manual/render-fa85ea9255cb.webp" alt="Illustration du tableau, page du manuel 112" width="246" className="manual-figure" loading="lazy" /></td></tr></tbody></table>

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 10. | Sur l’histogramme FL1 en fonction du nombre de cellules, estimez la valeur logarithmique du centre de chaque pic sur l’axe FL1. Dans cet exemple, nous obtenons environ (en log) : 1<sup>er</sup> pic = 4.05 2<sup>e</sup> pic = 4.3 3<sup>e</sup> pic = 5.35 4<sup>e</sup> pic = 6.2 | <img src="/img/manual/cell-c2ba9a559620.png" alt="Illustration du tableau, page du manuel 113" width="248" className="manual-figure" loading="lazy"/> |
| 11. | Mesurez les mêmes billes avec l’autre cytomètre en flux à comparer et répétez les étapes 10 et 11. Dans cet exemple, nous obtenons environ (en log) : 1<sup>er</sup> pic = log(10<sup>3</sup>) = 3 2<sup>e</sup> pic = log(2*10<sup>3</sup>) = 3.3 3<sup>e</sup> pic = log(2.4*10<sup>4</sup>) = 4.4 4<sup>e</sup> pic = log(1.6*10<sup>5</sup>) = 5.2 | <img src="/img/manual/cell-4c2343e0bbfe.png" alt="Illustration du tableau, page du manuel 113" width="248" className="manual-figure" loading="lazy"/> |
| 12. | Avec les différentes valeurs obtenues pour les deux instruments, il est maintenant possible de comparer leurs échelles et leurs fenêtres de mesure. |  |
