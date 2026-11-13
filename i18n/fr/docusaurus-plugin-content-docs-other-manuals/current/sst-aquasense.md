---
id: sst-aquasense
title: Kit de test d’adéquation du système pour AQU@Sense MB
sidebar_position: 4
slug: /sst-aquasense
document_id: UM_0005-01
manual_version: "01"
---

## Informations générales {#general-information}

Selon la pharmacopée des États-Unis USP \<1058>, le test d’adéquation du système (SST) vérifie qu’un système fonctionne conformément aux critères définis dans la procédure de test. Le kit SST pour AQU@Sense MB est un kit de réactifs utilisé pour effectuer cette vérification des performances.

Prérequis :

- AQU@Sense MB équipé du dispositif d’échantillonnage manuel.
- Kit SST conservé dans des conditions appropriées et non périmé.
- Compte personnel sur l’instrument disposant des autorisations **Advanced** ou **Admin**.

Conservez le kit au réfrigérateur à **2–8 °C (35–47 °F)**, à l’abri de la lumière. Dans ces conditions, sa durée de conservation est d’**un an**. Le kit permet d’effectuer **10 tests**.

## Consignes de sécurité {#safety}

:::gloves[Portez des gants de protection]

En cas de contact avec la peau, rincez immédiatement et abondamment à l’eau fraîche. En cas de douleur ou d’irritation, consultez un médecin.

:::

:::warning[Portez des lunettes de protection]

En cas de contact avec les yeux, rincez-les immédiatement à l’eau courante pendant 10–15 minutes en maintenant les paupières écartées, puis consultez un médecin.

:::

:::info[Lisez les instructions avant utilisation]

Suivez attentivement ce manuel et le manuel d’utilisation d’AQU@Sense MB.

:::

## Contenu {#contents}

| Article | Quantité | Numéro de la fiche de données de sécurité | Utilisation |
| --- | --- | --- | --- |
| Lingettes alcoolisées | 10 | — | À usage unique |
| Solution de billes (Beads Solution) | 10 | 50106 | À usage unique |
| Solution de référence (Reference Solution) | 10 | — | À usage unique |
| Solution stérile (Sterile Solution) | 10 | — | À usage unique |
| Porte-tube (Tube Holder) | 1 | — | Réutilisable |

Éliminez les articles à usage unique conformément aux réglementations locales relatives à l’élimination des déchets. Les fiches de données de sécurité sont disponibles auprès de BWT sur demande.

## Quand utiliser le kit de test d’adéquation du système {#when-to-use}

Effectuez un SST :

- Dans le cadre de l’assurance qualité et de la validation, par exemple lors de la qualification opérationnelle, de la qualification des performances, du changement de cartouche ou d’une opération de maintenance.
- Après un stockage de l’instrument de plus d’un mois.
- Si des indices suggèrent que les résultats de mesure pourraient être erronés.

La procédure comprend trois parties, à effectuer dans l’ordre : [validation optique](#optical-validation), [validation de référence](#reference-validation) et [validation stérile](#sterile-validation). Tous les critères d’acceptation des tests doivent être satisfaits. La procédure dure environ **2,5 heures**.

## Préparatifs {#preparations}

1. Vérifiez que le kit SST n’est pas périmé et qu’il a été conservé dans les conditions spécifiées.
2. Sortez une lingette alcoolisée, une solution de billes, une solution de référence, une solution stérile et le porte-tube.
3. Assurez-vous que le dispositif d’échantillonnage manuel est solidement fixé sur AQU@Sense MB.
4. Déballez la lingette alcoolisée. Essuyez l’aiguille d’échantillonnage de haut en bas pour éliminer les contaminants. Laissez sécher pendant **30 secondes**.
5. Connectez-vous à AQU@Sense MB avec votre nom d’utilisateur et votre mot de passe personnels. Les autorisations **Advanced** ou **Admin** sont requises.
6. Ouvrez **Home → Maintenance → Instrument validation**. Cochez **Activate Instrument validation** et appuyez sur **Save**.
7. Passez à la partie A.

## Partie A : validation optique {#optical-validation}

Cette partie teste le système optique de l’instrument en mesurant une solution contenant des particules fluorescentes.

1. Fixez la station de lavage au dispositif d’échantillonnage manuel.
2. Ouvrez **Home → Manual mode → Start**. Sélectionnez **Clean Sampling Device with Washstation**, avec **one replication**. Appuyez sur **Next** et lancez le protocole.
3. Une fois le protocole terminé, agitez vigoureusement le tube de solution de billes pendant **10 secondes**, à la main ou à l’aide d’un agitateur vortex.
4. Retirez les bouchons du tube de solution de billes et du porte-tube. Insérez le tube ouvert dans le porte-tube. Retirez la station de lavage et fixez le porte-tube contenant la solution de billes.

   :::caution[Utilisez le tube de réactif entier]

   Insérez le tube de réactif entier dans le porte-tube, plutôt que de verser son contenu dans celui-ci.

   :::

   ![Ouverture et insertion d’un tube de réactif à usage unique dans le porte-tube](/img/other-manuals/sst-tube-holder-insertion.png "width=650")

5. Revenez à la vue d’ensemble des protocoles. Sélectionnez **Prime**, avec **one replication**. Appuyez sur **Next** et lancez le protocole.
6. Une fois le protocole terminé, revenez à la vue d’ensemble des protocoles. Sélectionnez **Beads Analysis**, avec **one replication**. Appuyez sur **Next** et lancez le protocole.
7. Examinez les résultats. Tous les critères suivants doivent être satisfaits :

   **TCC : 50,000–75,000/mL**

   | Canal | CV (%) | Médiane |
   | --- | --- | --- |
   | FL1 | Inférieur à 15 | 5.7–6.5 |
   | FL2 | Inférieur à 20 | 5.1–5.7 |
   | SSC | Inférieur à 25 | 4.7–6.3 |

   ![Exemple de résultats de validation optique](/img/other-manuals/sst-optical-results.png "width=450")

8. Si le test est réussi, retirez le porte-tube, retirez le tube de solution de billes, refermez-le et éliminez-le. Passez à la partie B.

   Si le test échoue, répétez-le en vous assurant que la solution de billes est bien mélangée. Si les échecs persistent, contactez le support BWT.

## Partie B : validation de référence {#reference-validation}

Cette partie teste le processus de coloration automatisé de l’instrument.

1. Fixez la station de lavage au dispositif d’échantillonnage manuel.
2. Ouvrez **Home → Manual mode → Start**. Exécutez **Clean Sampling Device with Washstation**, avec **one replication**. Appuyez sur **Next** et lancez le protocole.
3. Retirez le bouchon d’un tube de solution de référence et insérez le tube entier dans le porte-tube, comme illustré dans la partie A. Une fois le protocole de nettoyage terminé, retirez la station de lavage et fixez le porte-tube contenant la solution de référence.
4. Revenez à la vue d’ensemble des protocoles. Exécutez **Prime**, avec **one replication**.
5. Une fois le protocole terminé, revenez à la vue d’ensemble des protocoles. Sélectionnez **Water Analysis**, avec **one replication**. Dans **Gates**, sélectionnez **ICC Default Gate**. Appuyez sur **Next** et lancez le protocole.
6. Comparez les nuages principaux de bactéries aux critères de référence :

   | Nuage de points | Critère d’acceptation |
   | --- | --- |
   | FL1 / FL2 | Nuage principal au-dessus de 4.5 sur l’axe FL1 et en dessous de 5 sur l’axe FL2 |
   | FL1 / SSC | Nuage principal au-dessus de 2 et en dessous de 5.5 sur l’axe SSC |

   ![Nuages de points de référence avec les nuages principaux de bactéries entourés en orange](/img/other-manuals/validation-reference-dotplots.png "width=650")

   :::info[Aspect des nuages]

   Selon la cartouche et les conditions de stockage, les nuages peuvent différer de l’exemple.

   :::

7. Si le test est réussi, retirez le porte-tube, retirez le tube de solution de référence, refermez-le et éliminez-le. Passez à la partie C.

   Si le test échoue, répétez-le avec une nouvelle solution de référence. Si les échecs persistent, contactez le support BWT.

## Partie C : validation stérile {#sterile-validation}

Cette partie vérifie la propreté du dispositif d’échantillonnage et du système fluidique en mesurant de l’eau exempte de cellules.

1. Fixez la station de lavage au dispositif d’échantillonnage manuel.
2. Ouvrez **Home → Manual mode → Start**. Exécutez **Clean Sampling Device with Washstation**, avec **one replication**. Appuyez sur **Next** et lancez le protocole.
3. Retirez le bouchon d’un tube de solution stérile et insérez le tube entier dans le porte-tube, comme illustré dans la partie A. Une fois le protocole de nettoyage terminé, retirez la station de lavage et fixez le porte-tube contenant la solution stérile.
4. Revenez à la vue d’ensemble des protocoles. Exécutez **Prime**, avec **one replication**.
5. Une fois le protocole terminé, revenez à la vue d’ensemble des protocoles. Sélectionnez **Water Analysis**, avec **one replication**. Sélectionnez **ICC Default Gate**, appuyez sur **Next** et lancez le protocole.
6. Examinez le résultat. Le critère d’acceptation est **ICC inférieur à 100/mL**.
7. Si le test est réussi, retirez le porte-tube, retirez le tube de solution stérile, refermez-le et éliminez-le. Remettez le porte-tube dans le kit SST, conservez le kit dans les conditions spécifiées et fixez la station de lavage au dispositif d’échantillonnage manuel.

   Si le test échoue, effectuez une décontamination biologique à l’aide du kit de nettoyage. Répétez le test avec une nouvelle solution stérile. Si les échecs persistent, contactez le support BWT.

8. Ouvrez **Home → Maintenance → Instrument validation**. Décochez **Activate Instrument validation** et appuyez sur **Save**.

Le test d’adéquation du système est terminé avec succès lorsque les trois parties ont été réussies.
