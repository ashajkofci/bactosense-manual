---
id: validation-kit
title: Kit de validation pour BactoSense
sidebar_position: 2
slug: /validation-kit
document_id: UM_0003-01
manual_version: "01"
---

## Informations générales {#general-information}

Le kit de validation est un kit de réactifs utilisé pour vérifier le bon fonctionnement de BactoSense. Ses réactifs ont été développés pour être utilisés après la mesure d’échantillons d’eau potable. Le kit peut ne pas être efficace s’il a été stocké dans des conditions inadéquates, s’il est périmé ou si des échantillons autres que de l’eau potable ont été mesurés.

Conservez le kit au réfrigérateur entre **2–8 °C (35–47 °F)**, à l’abri de la lumière. Dans ces conditions, sa durée de conservation est de **un an**. Le kit permet d’effectuer **10 validations**.

## Consignes de sécurité {#safety}

:::gloves[Porter des gants de protection]

En cas de contact avec la peau, rincez immédiatement et abondamment à l’eau claire. En cas de douleur ou d’irritation, consultez un médecin.

:::

:::warning[Porter des lunettes de protection]

En cas de contact avec les yeux, rincez-les immédiatement à l’eau courante pendant 10–15 minutes en maintenant les paupières écartées, et consultez un médecin.

:::

:::info[Lire les instructions avant utilisation]

Suivez attentivement ce manuel et le [manuel d’utilisation de BactoSense](/bactosense/).

:::

## Contenu {#contents}

| Article | Quantité | Numéro du document FDS | Utilisation |
| --- | --- | --- | --- |
| Lingettes imbibées d’alcool | 10 | — | Usage unique |
| Solution de billes | 10 | 50106 | Usage unique |
| Solution de référence | 10 | — | Usage unique |
| Solution stérile | 10 | — | Usage unique |
| Porte-tube | 1 | — | Utilisations multiples |

Éliminez les articles à usage unique conformément à la réglementation locale relative à l’élimination des déchets. Les fiches de données de sécurité (FDS) sont disponibles sur demande auprès de bNovate ou de votre partenaire de distribution local.

## Quand utiliser le kit de validation {#when-to-use}

Effectuez une validation de l’instrument :

- Après une expédition ou un autre transport sur une longue distance avec des vibrations ou des chocs.
- Après un stockage de l’instrument pendant plus d’un mois.
- Si des indices suggèrent que les résultats de mesure pourraient être erronés.

La validation complète comprend trois parties, à effectuer dans l’ordre : [validation optique](#optical-validation), [validation de référence](#reference-validation) et [validation stérile](#sterile-validation). Tous les critères d’acceptation doivent être remplis. Une validation complète prend environ **3 heures**.

Dans certains cas, une validation partielle peut être effectuée. Effectuez d’abord les préparations, puis suivez la partie correspondante.

## Préparations {#preparations}

1. Vérifiez que le kit n’est pas périmé et qu’il a été stocké dans les conditions spécifiées.
2. Pour une validation complète, sortez une lingette imbibée d’alcool, une solution de billes, une solution de référence, une solution stérile et le porte-tube. Pour une validation partielle, prenez uniquement la lingette, le porte-tube et la solution correspondante.
3. Assurez-vous que le dispositif d’échantillonnage manuel est solidement installé sur BactoSense.
4. Déballez la lingette imbibée d’alcool. Essuyez l’aiguille d’échantillonnage de haut en bas pour éliminer les contaminants. Laissez sécher pendant **30 secondes**.
5. Connectez-vous en tant que **Admin**. Dans **Home → Maintenance → Self-check**, appuyez sur **Rerun**. Vérifiez que chaque test affiche **PASS** en vert.
6. Ouvrez **Home → Maintenance → Instrument validation**. Cochez **Activate Instrument validation** et appuyez sur **Save**.
7. Pour une validation complète, passez à la partie A. Pour une validation partielle, passez à la partie correspondante.

## Partie A : validation optique {#optical-validation}

Cette partie teste le système optique en mesurant une solution contenant des particules fluorescentes.

1. Effectuez les [préparations](#preparations) si ce n’est pas déjà fait.
2. Fixez la station de lavage au dispositif d’échantillonnage manuel. Si aucune station de lavage n’est disponible, fixez un tube à bouchon fileté de 5 mL, vide et propre.
3. En tant que **Admin**, ouvrez **Home → Manual mode → Start**. Sélectionnez **Clean Sampling Device with Washstation**, avec **une répétition**. Sans station de lavage, sélectionnez **Clean Sampling Device**, avec **deux répétitions**. Appuyez sur **Next** et lancez le protocole.
4. Une fois le protocole terminé, agitez vigoureusement le tube de solution de billes pendant **10 secondes**, à la main ou à l’aide d’un agitateur vortex.
5. Retirez les bouchons du tube de solution de billes et du porte-tube. Insérez le tube ouvert dans le porte-tube. Retirez la station de lavage et fixez le porte-tube contenant la solution de billes au dispositif d’échantillonnage manuel.

   :::caution[Utiliser le tube de réactif entier]

   Insérez le tube de réactif entier dans le porte-tube, au lieu de verser son contenu dans le porte-tube.

   :::

   ![Ouverture du tube de réactif et insertion du tube entier dans le porte-tube](/img/other-manuals/tube-holder-insertion.png "width=650")

6. Ouvrez **Home → Manual mode → Start**. Sélectionnez **Prime**, avec **une répétition**. Appuyez sur **Next** et lancez le protocole.
7. Revenez à la vue d’ensemble des protocoles. Sélectionnez **Beads Analysis**, avec **deux répétitions**. Appuyez sur **Next** et lancez le protocole.
8. Examinez les résultats. Tous les critères suivants doivent être remplis :

   **TCC : 50,000–75,000/mL**

   | Canal | CV (%) | Médiane |
   | --- | --- | --- |
   | FL1 | Inférieur à 15 | 5.7–6.5 |
   | FL2 | Inférieur à 20 | 5.1–5.7 |
   | SSC | Inférieur à 25 | 4.7–6.3 |

   ![Exemple de résultats de mesure de la validation optique](/img/other-manuals/validation-optical-results.png "width=450")

9. Si le test est réussi, retirez le porte-tube, puis le tube de solution de billes, refermez-le et jetez-le. Passez à la partie B.

   Si le test échoue, vérifiez la date de péremption et les conditions de stockage du kit, puis répétez le test en vous assurant que la solution de billes est bien mélangée. Si les échecs persistent, contactez l’assistance bNovate ou votre représentant de service local.

## Partie B : validation de référence {#reference-validation}

Cette partie valide le processus de coloration automatisé.

1. Effectuez les [préparations](#preparations) si vous réalisez cette partie seule.
2. Fixez la station de lavage ou, si aucune station de lavage n’est disponible, un tube à bouchon fileté de 5 mL, vide et propre.
3. En tant que **Admin**, ouvrez **Home → Manual mode → Start**. Exécutez **Clean Sampling Device with Washstation**, avec **une répétition**. Sans station de lavage, exécutez **Clean Sampling Device**, avec **deux répétitions**. Appuyez sur **Next** et lancez le protocole.
4. Retirez le bouchon du tube de solution de référence et insérez le tube entier dans le porte-tube, comme indiqué dans la partie A. Retirez la station de lavage et fixez le porte-tube contenant la solution de référence.
5. Ouvrez **Home → Manual mode → Start**. Exécutez **Prime**, avec **une répétition**.
6. Revenez à la vue d’ensemble des protocoles. Sélectionnez **Water Analysis**, avec **deux répétitions**. Dans **Gates**, sélectionnez la fenêtre par défaut correspondant au type de cartouche, par exemple **ICC Default Gate** ou **TCC Default Gate**. Appuyez sur **Next** et lancez le protocole.
7. Comparez les principaux nuages de bactéries aux critères de référence :

   | Nuage de points | Critère d’acceptation |
   | --- | --- |
   | FL1 / FL2 | Nuage principal au-dessus de 4.5 sur l’axe FL1 et en dessous de 5 sur l’axe FL2 |
   | FL1 / SSC | Nuage principal au-dessus de 2 et en dessous de 5.5 sur l’axe SSC |

   ![Nuages de points de référence avec les principaux nuages de bactéries entourés en orange](/img/other-manuals/validation-reference-dotplots.png "width=650")

   :::info[Aspect des nuages]

   Selon la cartouche et les conditions de stockage, les nuages peuvent différer de l’exemple.

   :::

8. Si le test est réussi, retirez le porte-tube, puis le tube de solution de référence, refermez-le et jetez-le. Passez à la partie C.

   Si le test échoue, vérifiez la date de péremption et les conditions de stockage du kit. Répétez le test avec une nouvelle solution de référence. Si les échecs persistent, contactez l’assistance bNovate ou votre représentant de service local.

## Partie C : validation stérile {#sterile-validation}

Cette partie valide la propreté de BactoSense en mesurant de l’eau exempte de cellules.

1. Effectuez les [préparations](#preparations) si vous réalisez cette partie seule.
2. Fixez la station de lavage ou, si aucune station de lavage n’est disponible, un tube à bouchon fileté de 5 mL, vide et propre.
3. En tant que **Admin**, ouvrez **Home → Manual mode → Start**. Exécutez **Clean Sampling Device with Washstation**, avec **une répétition**. Sans station de lavage, exécutez **Clean Sampling Device**, avec **deux répétitions**. Appuyez sur **Next** et lancez le protocole.
4. Retirez le bouchon du tube de solution stérile et insérez le tube entier dans le porte-tube, comme indiqué dans la partie A. Retirez la station de lavage et fixez le porte-tube contenant la solution stérile.
5. Ouvrez **Home → Manual mode → Start**. Exécutez **Prime**, avec **une répétition**.
6. Revenez à la vue d’ensemble des protocoles. Sélectionnez **Water Analysis**, avec **deux répétitions**. Dans **Gates**, sélectionnez **ICC Default Gate** ou **TCC Default Gate**, selon la cartouche. Appuyez sur **Next** et lancez le protocole.
7. Examinez les résultats. Le critère applicable doit être rempli :

   | Cartouche | Critère d’acceptation |
   | --- | --- |
   | TCC | TCC inférieur à 300/mL |
   | ICC | ICC inférieur à 100/mL |

8. Si le test est réussi, retirez le porte-tube, puis le tube de solution stérile, refermez-le et jetez-le. Remettez le porte-tube dans le kit de validation et fixez la station de lavage au dispositif d’échantillonnage manuel.

   Si le test échoue, vérifiez la date de péremption et les conditions de stockage du kit. Effectuez une [décontamination biologique](cleaning-kit.md#biological-contamination), puis répétez le test avec une nouvelle solution stérile. Si les échecs persistent, contactez l’assistance bNovate ou votre représentant de service local.

9. Ouvrez **Home → Maintenance → Instrument validation**. Décochez **Activate Instrument validation** et appuyez sur **Save**.

Votre instrument est validé lorsque toutes les parties requises ont été réussies.
