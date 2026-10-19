---
title: "3. Vue d’ensemble de l’instrument"
sidebar_label: "3. Vue d’ensemble de l’instrument"
slug: /instrument-overview
sidebar_position: 3
description: "Manuel d’utilisation BactoSense : Vue d’ensemble de l’instrument."
---

## 3.1 Vue d’ensemble du BactoSense {#section-3-1}

![Illustration du manuel original, page imprimée 7](/img/manual/asset-74a9467fbfc3.png "width=634")

*Figure 3-1 Vue d’ensemble du BactoSense*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Poignée | 2 | Montage mural |
| 3 | Bouchon du compartiment du sachet déshydratant | 4 | Dispositif d’échantillonnage en ligne |
| 5 | Dispositif d’échantillonnage manuel | 6 | Interface utilisateur graphique à écran tactile |
| 7 | Porte du compartiment de la cartouche | 8 | Prises USB |
| 9 | Bouton d’alimentation | 10 | Connecteur d’entrée |
| 11 | Connecteur de sortie | 12 | Interface Ethernet/Modbus TCP |
| 13 | Connecteur d’alimentation | 14 | Prise USB-C |

Une vue d’ensemble de la cartouche est présentée à la section [Vue d’ensemble de la cartouche](08-general-operations-and-configurations.md#section-8-9-3).

### 3.1.1 Plaque signalétique du BactoSense {#section-3-1-1}

La plaque signalétique du BactoSense se trouve sur le côté droit de l’instrument.

![Illustration du manuel original, page imprimée 8](/img/manual/asset-24be208801eb.png "width=537")

*Figure 3-2 Plaque signalétique du BactoSense*

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Fabricant | 2 | Nom du produit |
| 3 | Numéro de série | 4 | Code-barres |
| 5 | Date de fabrication | 6 | Pays d’origine |
| 7 | Exigences de tension et de<br/>puissance (section [Raccordement du BactoSense à l’alimentation électrique](../installation/#section-5-3)) | 8 | Marquage CE |
| 9 | Marquage UKCA | 10 | Conformité aux normes canadiennes en<br/>matière de CEM et d’interférences |
| 11 | Lire les instructions et utiliser<br/>avec prudence | 12 | Informations sur l’élimination |

### 3.1.2 Plaque signalétique du bloc d’alimentation électrique du BactoSense {#section-3-1-2}

La plaque signalétique du bloc d’alimentation électrique du BactoSense se trouve sur le bloc d’alimentation électrique et comporte les éléments suivants :

![Illustration du manuel original, page imprimée 9](/img/manual/asset-af22eddd339f.png "width=300")

*Figure 3-3 Plaque signalétique du bloc d’alimentation électrique du BactoSense*

1. Fabricant
2. Nom du produit
3. Référence
4. Date de fabrication
5. Tension et fréquence de service
6. Consommation électrique
7. Marquage CE
8. Marquage UKCA
9. Conformité aux normes canadiennes en matière de CEM et d’interférences
10. Lire les instructions et utiliser avec prudence.
11. Informations sur l’élimination

## 3.2 Données techniques {#section-3-2}

*Tableau 3-1 Données techniques et spécifications*

| Propriété | Spécification |
| --- | --- |
| **GÉNÉRALITÉS** | \< |
| Environnement d’utilisation | Utilisation en intérieur |
| Altitude d’utilisation | Max. 2000 m (6600 ft) au-dessus du niveau de la mer |
| Température d’utilisation | 5 °C – 30 °C (41 °F – 86 °F) |
| Humidité d’utilisation | 10 % – 90 % HR |
| Température de stockage | 15 °C – 25 °C (59 °F – 77 °F) |
| Humidité de stockage | 10 % – 70 % HR |
| Exigences de ventilation | Aucune |
| Niveau de pression acoustique | &lt; 64 dBA |
| Indices de protection | BactoSense : IP65<br />Alimentation : IP67 |
| **CARACTÉRISTIQUES PHYSIQUES** | \< |
| Dimensions (L x P x H) | 361 x 270 x 424 mm (14.2 x 10.6 x 16.7“) |
| Poids | Avec cartouche 14.3 kg (31.5 lbs)<br />Sans cartouche 11.1 kg (24.5 lbs) |
| Dimensions du bloc d’alimentation (L x P x H) | 230 x 80 x 65 mm (9.0 x 3.1 x 2.6“) |
| Poids du bloc d’alimentation | 0.9 kg (2.0 lbs) |
| **CARACTÉRISTIQUES ÉLECTRIQUES** | \< |
| Catégorie d’installation | II |
| Degré de pollution | 2 |
| Alimentation électrique | Bloc d’alimentation : 100<br />– 240 VAC +/-10 %, 50 / 60 Hz, 1.4<br />A BactoSense :<br />18 – 24 VDC, 60 W (voir section [Raccordement du BactoSense à l’alimentation électrique](../installation/#section-5-3)) |
| Consommation électrique | Moy. 20 W, max. 60 W |
| Reprise après une coupure d’alimentation | Redémarrage automatique configurable |
| **INTERFACES, CONNECTIVITÉ ET ACCÈS À DISTANCE** | \< |
| USB | 2 x USB 3.1, 5 V 1 A par port<br />1 x USB-C |
| Ethernet | 1 x RJ45 Gigabit Ethernet |
| Protocoles et options Ethernet | Interface web Bureau<br />à distance (VNC) Modbus<br />TCP HTTP<br />/ HTTPS<br />FTP |
| Entrées numériques | 4 x entrées numériques, entrée optocoupleur : tension directe<br />1.2 VDC avec 3 kΩ en série, cathode raccordée<br />à COMMON, max. 30 mA, max.<br />50 mW |
| Sorties analogiques et numériques | Sorties analogiques : 2<br />x 0/4 – 20 mA, charge recommandée 250<br />Ω Sorties numériques :<br />4 x sorties numériques, librement configurables, sortie SSR :<br />max. 48 VDC, max. 300 mW, résistance à<br />l’état passant 2 Ω |
| Écran | WVGA, écran tactile capacitif 7.0“ |
| Connectivité mobile | Module de connectivité BactoLink (en option) |
| Analyse avancée des données | Exportation de fichiers FCS 3.1 |
| Capacité de stockage des données | 128 GB |
| **MESURE** | \< |
| Principe de mesure | Cytométrie en flux |
| Plage de détection | 0 – 5´000´000 cellules/mL |
| Plage de quantification | TCC : 1000 – 2‘000‘000 cellules/mL<br />ICC &amp; ACC : 100 – 2‘000‘000 cellules/mL |
| Type et longueur d’onde du laser | Diode laser 488 nm |
| Fluorescence | 530/50 nm FL1 715<br />LP nm FL2 |
| Diffusion vers l’avant (FSC) | 488 nm (en option selon l’instrument) |
| Diffusion latérale (SSC) | 488 nm (en option selon l’instrument) |
| Paramètres des résultats | TCC/mL, ICC/mL, LNAC/mL, HNAC/mL, HNAP<br />(%), ACC/mL, HACC/mL, Gate+, selon<br />le système et la cartouche utilisés. |
| Intervalle de mesure automatique | De toutes les 30 min à toutes les 6 heures |
| **ÉCHANTILLONNAGE** | \< |
| Type d’échantillonnage | En ligne ou manuel |
| Dispositif d’échantillonnage en ligne | Débit traversant le dispositif :<br />200 – 400 mL/min (0.05 – 0.10 gal/min)<br />Pression dans le dispositif : Max. 0.5 bar (7.3 psi)<br />Volume aspiré : 260 μL Volume<br />mesuré : 90 μL Tuyau<br />d’entrée •<br />Matériau : PFA (transparent) • Diamètre extérieur<br />: 6.35 mm (1/4”) • Diamètre intérieur :<br />4.35 mm • Longueur max.<br />: 2 m (6.5 ft) Tuyau de<br />sortie • Matériau<br />: FEP (bleu) • Diamètre<br />extérieur : 6.35 mm (1/4”) • Diamètre<br />intérieur : 4.83 mm • Longueur<br />max. : 2 m (6.5 ft) |
| Dispositif d’échantillonnage manuel | Récipient de l’échantillon : tube à bouchon fileté de 5<br />mL Volume de l’échantillon : 2<br />– 5 mL Volume aspiré : 260<br />μL Volume mesuré : 90 μL |
| Conditions de l’échantillon | Température : 5 °C – 40 °C (41 °F – 104<br />°F) Turbidité : 0 – 10 NTU,<br />FNU Conductivité : 0 – 100'000 µS/cm à 20 °C Valeur<br />du pH : 5<br />– 12 Chlore : max. 3<br />mg/L Fer : max. 200<br />μg/L Manganèse : max. 50 μg/L |
| **CARTOUCHE** | \< |
| Capacité | TCC &amp; ICC : jusqu’à 1000 mesures<br />ACC : jusqu’à 700 mesures |
| Validité | TCC &amp; ICC : 9 mois<br />ACC : 6 mois |
| Température de stockage | 15 °C – 25 °C (59 °F – 77<br />°F), idéalement à 15 °C (59 °F) |
| Humidité de stockage | 20 % – 60 % HR |
| **MAINTENANCE** | \< |
| Maintenance préventive | Après 3 cartouches, au moins une fois par an. |
| Étalonnage | Étalonnage en usine uniquement |
| **CONFORMITÉ** | \< |
| Normes et certifications appliquées | Veuillez consulter la section [Conformité et normes appliquées](../general-user-information/#section-2-2). |
