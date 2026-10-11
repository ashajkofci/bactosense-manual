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
| Lorsqu’un comportement inhabituel est détecté, un avertissement s’affiche à côté des résultats de mesure. Pour plus d’informations sur l’avertissement, cliquez sur l’entrée correspondante à côté des résultats de mesure ou directement dans le journal des avertissements. | <img src="/img/manual/cell-16a091792775.png" alt="Illustration du tableau, page du manuel 139" width="252" className="manual-figure" loading="lazy"/> |

Les messages d’avertissement suivants peuvent être affichés :

**Tableau 16-1 Avertissements**

| CODE D’ERREUR | NOM | DESCRIPTION | CAUSES/SOLUTIONS |
| --- | --- | --- | --- |
| W01 | Cartouche expirée | Les réactifs de la cartouche sont expirés. La précision des mesures risque d’être affectée. | • Veuillez remplacer la cartouche dès que possible. |
| W02-04 | Signal trop intense en FL1/FL2/SSC | Les signaux de base sont trop élevés. Ceci est généralement dû à des bulles ou des particules en suspension dans l’échantillon. La précision des mesures risque d’être affectée. | • Vérifiez la présence de dépôts dans la tubulure<br/>d’entrée. • Vérifiez les raccordements d’eau et assurez-vous qu’ils sont tous étanches (pas<br/>d’entrée d’air). • Si l’avertissement persiste, veuillez nettoyer l’instrument à l’aide du kit de nettoyage. |
| W05 | Température d’incubation hors consigne | Température durant l’incubation déviée de plus de 2 °C de la cible. Le nombre de cellules risque d’être affecté. L’incubateur est peut-être défectueux. | • Si le problème persiste, veuillez contacter le service client. |

| CODE D’ERREUR | NOM | DESCRIPTION | CAUSES/SOLUTIONS |
| --- | --- | --- | --- |
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
| Le protocole s’arrête. La cause de l’erreur se résout généralement en répétant l’analyse ou<br/>en attendant. • Une autre mesure peut démarrer immédiatement. Si elle réussit, l’état d’erreur est<br/>acquitté. • Pour plus d’informations, ouvrez le journal des erreurs et appuyez sur l’entrée correspondante. | <img src="/img/manual/cell-7a9639648396.png" alt="Illustration du tableau, page du manuel 141" width="255" className="manual-figure" loading="lazy"/> |

Les messages d’erreurs non critiques suivants peuvent s’afficher :

**Tableau 16-2 Liste des erreurs non critiques.**

| CODE D’ERREUR | NOM | DESCRIPTION | CAUSES/SOLUTIONS |
| --- | --- | --- | --- |
| E01 | Porte de cartouche ouverte | La porte du compartiment de cartouche est ouverte et empêche l’exécution des mesures. | • Fermez la porte et répétez la mesure. |
| E08 | Boîtier trop humide | L’humidité du boîtier est trop élevée pour un fonctionnement sûr. | • Remplacez le sachet déshydratant en dévissant le grand bouchon sur le côté gauche de l’instrument (voir section<br/>15.2.6). • Si le problème persiste, contactez le service client. |
| E09 | Surchauffe du système | La température interne est trop élevée pour un fonctionnement sûr. | • Réduisez la température ambiante ou augmentez l’intervalle de mesure pour laisser l’instrument refroidir. |
| E14 | Laser trop chaud | La température du laser est trop élevée pour un fonctionnement sûr. | • Réduisez la température ambiante ou augmentez l’intervalle de mesure pour laisser l’instrument refroidir. |

| CODE D’ERREUR | NOM | DESCRIPTION | CAUSES/SOLUTIONS |
| --- | --- | --- | --- |
| E15 | Erreur de remplissage du mélangeur | Une dépression a été détectée pendant le mélange ou la distribution. | • Échantillon manquant.<br/>• Air dans<br/>l’entrée. • Fuite dans<br/>le système. • Exécutez le protocole Clean Optics (voir section 10.9.1). |
| E18 | Erreur de dépression de la pompe | Une dépression a été détectée pendant la distribution. | • Échantillon manquant.<br/>• Air dans<br/>l’entrée. • Fuite dans<br/>le système. • Exécutez le protocole Clean Optics (voir section 10.9.1). |
| E19 | Surchauffe du système | La température interne est trop élevée pour le fonctionnement. | • Réduisez la température ambiante ou augmentez l’intervalle de mesure pour laisser l’instrument refroidir. |
| E33 | Dépassement de capacité de la mémoire de traitement | La capacité mémoire des circuits de traitement du signal a été dépassée. | • Exécutez le protocole Clean Optics (voir section 10.9.1).<br/>• Répétez la mesure. |
| E42 | Boîtier trop froid malgré le chauffage | La température du boîtier reste trop basse après la procédure de chauffage. | • La température ambiante est inférieure à 5 °C (41<br/>°F). • Augmentez la température ambiante. |
| E44 | Erreur de démarrage du module de pompe | Le module de pompe ne s’est pas mis sous tension correctement. | • Répétez simplement la mesure. |
| E45 | Erreur de rapport de volume valide insuffisant | Le rapport de volume valide est trop faible. Cela peut être dû à une teneur bactérienne trop élevée dans l’eau, à la turbidité ou à des débris. | • L’exactitude de la mesure est probablement très faible. Répétez la mesure en diluant l’échantillon avec de l’eau claire. |
| E46 | Cartouche encore occupée | La cartouche était encore en cours d’initialisation au démarrage de la mesure. | • Erreur non critique. Répétez la mesure. Si le problème persiste, contactez un technicien de maintenance. |

| CODE D’ERREUR | NOM | DESCRIPTION | CAUSES/SOLUTIONS |
| --- | --- | --- | --- |
| E48 | Sous-système microfluidique occupé | Le contrôleur microfluidique effectuait une autre tâche pendant la mesure. | • Erreur non critique. Répétez la mesure. Si le problème persiste, contactez un technicien de maintenance. |
| E49 | Erreur de délai d’attente GPIO | La carte de traitement attend la réponse d’un autre module. | • Erreur non critique. Répétez la mesure. Si le problème persiste, contactez un technicien de maintenance. |
| E50 | Mouvement de la pompe bloqué | Le mouvement de la pompe est bloqué. | • Erreur non critique. Répétez la mesure. Si le problème persiste, contactez un technicien de maintenance. |
| E51 | Lecture de la température impossible | Impossible de lire la température. La boucle de régulation est donc désactivée. | • Erreur non critique. Répétez la mesure. Si le problème persiste, contactez un technicien de maintenance. |
| E52 | Mouvement de la vanne de cartouche bloqué | Le mouvement de la vanne de cartouche est bloqué. | • Erreur non critique. Répétez la mesure. Si le problème persiste, contactez le service client. |
| E55 | M7 non connecté | Le processeur d’acquisition ne peut pas être initialisé. | • Redémarrez l’instrument. •<br/>Si le problème persiste, contactez le service client. |
| E56 | Acquisition vide | Aucun événement détecté pendant l’acquisition | • Nettoyez le dispositif d’échantillonnage avec la Washstation, puis effectuez une mesure d’eau propre. •<br/>Si le problème persiste, contactez le service client. |

| CODE D’ERREUR | NOM | DESCRIPTION | CAUSES/SOLUTIONS |
| --- | --- | --- | --- |
| E57 | Cartouche occupée (commande spéciale en cours) | La communication avec la cartouche a échoué. | • Erreur non critique. Répétez la mesure.<br/>• Si le problème persiste, contactez le service client. |
| E58 | Cartouche occupée (délai d’attente dépassé) | La communication avec la cartouche a échoué. | • Vérifiez le connecteur électronique entre la cartouche et l’instrument. •<br/>Répétez la mesure. •<br/>Si le problème persiste, contactez le service client. |
| E59 | Erreur de capteur de vanne | Impossible de lire la position de la vanne. | • Contactez le service client. |

## 16.3 Erreurs critiques {#section-16-3}

Les erreurs critiques interrompent les flux de travail de l’instrument et nécessitent une intervention humaine. La source de l’erreur doit être éliminée et l’instrument doit être remis en état de marche. Les erreurs critiques doivent être effacées.

| ERREURS CRITIQUES | IMAGE |
| --- | --- |
| Si une erreur critique survient pendant le fonctionnement, elle a les effets<br/>suivants : • Le protocole s’arrête<br/>immédiatement. • L’instrument passe en état d’erreur critique et une intervention manuelle est nécessaire avant de lancer un nouveau protocole.<br/>• Un opérateur doit résoudre la cause de l’erreur. Les erreurs peuvent ensuite être acquittées manuellement dans Error log, comme décrit aux sections 16.4 et 16.5. | <img src="/img/manual/cell-2ba5234a6f92.png" alt="Illustration du tableau, page du manuel 145" width="253" className="manual-figure" loading="lazy"/> |

Les messages d’erreurs critiques suivants peuvent s’afficher :

**Tableau 16-3 Liste des erreurs critiques.**

| CODE D’ERREUR | NOM | DESCRIPTION | CAUSES/SOLUTIONS |
| --- | --- | --- | --- |
| E00 | Erreur générale | Erreur non gérée. | • Contactez le service client |
| E02 | Cartouche vide | La cartouche est vide. | • Remplacez la cartouche (voir section 8.9.4) |
| E04 | Cartouche absente | La cartouche est absente. | • Insérez une cartouche (voir section 8.9.6) |
| E05 | Poche de déchets pleine | La poche de déchets de la cartouche est pleine. | • Remplacez la cartouche (voir section 8.9.4) |
| E06 | Communication avec la cartouche impossible | La cartouche est déconnectée, la porte est ouverte ou l’électronique de la cartouche est endommagée. | • Assurez-vous que le câble électronique de la cartouche est correctement raccordé et que la porte est bien fermée. • Si<br/>cela ne résout pas le problème, remplacez la cartouche et informez le service client. |

| CODE D’ERREUR | NOM | DESCRIPTION | CAUSES/SOLUTIONS |
| --- | --- | --- | --- |
| E07 | Disque de stockage plein | L’espace de stockage est insuffisant pour poursuivre le fonctionnement. | • Supprimez d’anciennes mesures et réessayez (voir section 15.2.8).<br/>• Cette opération supprime définitivement les mesures de l’appareil. •<br/>Exportez les mesures pour les sauvegarder. |
| E12 | Erreur d’initialisation du FPGA | Impossible d’initialiser la puce de traitement du signal. | • Redémarrez l’instrument. |
| E16 | Erreur de traitement | Une erreur a été détectée pendant le traitement des signaux. | • L’exactitude du dernier résultat n’est pas garantie. Répétez l’analyse. |
| E17 | Surpression détectée | Une surpression a été détectée pendant la distribution. | • Cause probable : le filtre de sortie est probablement obstrué.<br/>• Cellule de mesure optique<br/>bloquée. • Contactez le service client. |
| E20 | Arrêt anormal | Le protocole a été interrompu pour une raison inconnue, généralement une coupure d’alimentation. | • Indique généralement une coupure d’alimentation ou une autre interruption externe de la<br/>mesure. • Exécutez les protocoles Clean Optics et Clean Sampling Device avant une nouvelle mesure (voir section 10.9.1). |
| E23 | Erreur de communication du capteur de température | La communication avec le capteur de température de la carte d’E/S a échoué. | • Contactez le service client. |
| E24 | Erreur de communication du laser | La communication avec l’unité optique a échoué. | • Contactez le service client. |
| E25 | Erreur de communication de la pompe | La communication avec le module de pompe est impossible. | • Contactez le service client. |

| CODE D’ERREUR | NOM | DESCRIPTION | CAUSES/SOLUTIONS |
| --- | --- | --- | --- |
| E26 | Erreur de communication de l’alimentation | La communication avec le module d’alimentation est impossible. | • Contactez le service client. |
| E27 | Délai de communication de la pompe dépassé | Le délai de communication avec le module de pompe a été dépassé. | • La porte de la cartouche<br/>est ouverte. • Un câble est<br/>déconnecté. • Une carte électronique est endommagée, dans la pompe ou dans la cartouche. |
| E28 | Réserve de colorant vide | Le tuyau de colorant raccordé à la cartouche est vide. | • Le tuyau est déconnecté.<br/>• La cartouche est défectueuse.<br/>• Répétez la procédure de remplacement de la cartouche en vérifiant le raccordement de tous les tuyaux. |
| E29 | Réserve de liquide de rinçage vide | Le tuyau de liquide de rinçage raccordé à la cartouche est vide. | • Le tuyau est déconnecté.<br/>• La cartouche est défectueuse.<br/>• Répétez la procédure de remplacement de la cartouche en vérifiant le raccordement de tous les tuyaux. |
| E30 | Réserve de solution chlorée vide | Le tuyau de solution chlorée raccordé à la cartouche est vide | • Le tuyau est déconnecté.<br/>• La cartouche est défectueuse.<br/>• Répétez la procédure de remplacement de la cartouche en vérifiant le raccordement de tous les tuyaux. |
| E31 | Défaillance électronique de la cartouche | Le niveau de la cartouche ne peut plus être déterminé avec précision. | • Remplacez la cartouche et contactez le service client. |
| E32 | Cartouche incompatible | Le type de cartouche est incompatible avec cet instrument ou ce logiciel. | • Assurez-vous d’avoir le type de cartouche adapté à cet instrument. |
| E33 | Dépassement de capacité de la mémoire de traitement | La capacité mémoire des circuits de traitement du signal a été dépassée. | • Exécutez le protocole Clean Optics (voir section 10.9.1).<br/>• Répétez la mesure. |

| CODE D’ERREUR | NOM | DESCRIPTION | CAUSES/SOLUTIONS |
| --- | --- | --- | --- |
| E38 | Erreur : cartouche non prête | La nouvelle cartouche n’a pas été initialisée correctement | • Exécutez la procédure « Cartridge Change » (voir section 8.9.4). |
| E39 | Limite de courant du laser atteinte | Le laser a atteint sa limite supérieure de courant, ce qui indique sa fin de vie. | • Le laser doit être remplacé. Contactez un technicien de maintenance. |
| E40 | Jeu de fenêtres introuvable | La référence du jeu de fenêtres sélectionné pour la mesure est introuvable dans les paramètres de l’instrument. | • Le jeu de fenêtres a été<br/>supprimé. • Changez de jeu de fenêtres et répétez la mesure. |
| E41 | Jeu de fenêtres incompatible | Le jeu de fenêtres sélectionné pour la mesure ne peut pas être utilisé avec cette cartouche. | • La procédure correcte de remplacement de cartouche n’a pas<br/>été suivie. • Configuration incorrecte des entrées numériques.<br/>• Changez de jeu de fenêtres et répétez la mesure. |
| E43 | Température extérieure trop basse | La température ambiante est hors des spécifications de l’instrument. | • Augmentez la température ambiante.<br/>• Toute tentative d’utilisation ou de stockage sous 5 °C (41 °F) peut endommager l’appareil. |
| E47 | Aimant de référence principal introuvable lors du retour à l’origine | Pendant l’initialisation, la vanne n’a pas correctement retrouvé sa position d’origine. | • Contactez le service client. |
| E53 | Communication avec le moteur impossible | La communication avec le contrôleur du moteur du mélangeur est défectueuse. | • Contactez le service client. |
| E54 | Erreur du capteur de température du laser | Impossible de lire la température du laser. | • Contactez le service client. |

## 16.4 Journaux d’erreurs et d’avertissements {#section-16-4}

Les vues des journaux d’erreurs et d’avertissements peuvent être consultées séparément dans le Menu principal de l’interface utilisateur en appuyant sur le bouton Journaux .

<img src="/img/figures-second/figure-3bdcc49f453689.webp" alt="Figure 16-1 : Journaux d’erreurs" width="558" className="manual-figure" loading="lazy" />

<img src="/img/manual/icon-screenshot.png" alt="Illustration du manuel d’utilisation BactoSense" width="57" className="manual-icon" loading="lazy" />

*Figure 16-1 : Journaux d’erreurs*

<table className="manual-table"><tbody><tr><td rowSpan="4">①</td><td rowSpan="4">Date et heure de l’événement</td><td rowSpan="4">②</td><td colSpan="2">Type d’événement</td></tr><tr><td><img src="/img/manual/cell-67d152256921.png" alt="Illustration du tableau, page du manuel 149" width="56" className="manual-icon" loading="lazy" /></td><td>Erreur critique</td></tr><tr><td><img src="/img/manual/cell-168772cd9e6b.png" alt="Illustration du tableau, page du manuel 149" width="56" className="manual-icon" loading="lazy" /></td><td>Erreur non critique</td></tr><tr><td><img src="/img/manual/cell-b4d48ec33659.png" alt="Illustration du tableau, page du manuel 149" width="56" className="manual-icon" loading="lazy" /></td><td>Erreurs acquittées</td></tr><tr><td>③</td><td>Brève description de l’erreur ou de l’événement</td><td>④</td><td colSpan="2">Bouton permettant d’acquitter manuellement les erreurs (disponible uniquement pour les utilisateurs Admin et Entretien)</td></tr><tr><td>⑤</td><td>Plage de dates des événements affichés. Cliquez pour modifier la plage.</td><td></td><td colSpan="2"></td></tr></tbody></table>

:::info[Consultez les détails des événements]

La sélection d’un événement dans la liste mène à une page contenant plus d’informations sur la cause de l’erreur et les étapes de résolution recommandées.

:::

## 16.5 Acquitter les erreurs {#section-16-5}

Les erreurs critiques doivent être acquittées manuellement. Avant de procéder à l’acquittement, assurez-vous d’avoir résolu la cause du problème. Veuillez noter que la procédure décrite ci-dessous ne résout pas automatiquement la cause profonde de l’erreur.

|  | OPÉRATION | INFORMATIONS SUPPLÉMENTAIRES/IMAGE |
| --- | --- | --- |
| 1. | Accédez au Menu principal de l’interface utilisateur de BactoSense. |  |
| 2. | Appuyez sur le bouton Journaux, puis sur le bouton Journal d’erreurs. |  |
| 3. | Assurez-vous d’avoir résolu le problème à l’origine de l’erreur affichée. Appuyez ensuite sur le bouton Quittancer les erreurs. | <img src="/img/manual/cell-df45180c59d7.png" alt="Illustration du tableau, page du manuel 150" width="245" className="manual-figure" loading="lazy"/> |
| 4. | Les erreurs effacées apparaissent avec des symboles d’erreur grisés et un événement «Erreurs quittancées» est ajouté au journal. L’instrument est prêt pour une nouvelle analyse. |  |

## 16.6 Autovérification automatique {#section-16-6}

L’outil d’autovérification automatique permet de vérifier le fonctionnement correct de chaque composant du BactoSense et d’identifier ceux qui ne fonctionnent pas. Il peut être utilisé pour identifier les problèmes de l’instrument.

<table className="manual-table"><tbody><tr><th scope="col"></th><th scope="col">OPÉRATION</th><th scope="col">INFORMATIONS SUPPLÉMENTAIRES/IMAGE</th></tr><tr><td>1.</td><td>Accédez au Menu principal de l’interface utilisateur de BactoSense.</td><td></td></tr><tr><td>2.</td><td>Appuyez sur le bouton Maintenance.</td><td></td></tr><tr><td>3.</td><td>Appuyez sur le bouton Auto-contrôle.</td><td></td></tr><tr><td>4.</td><td><Admonition type="info" title="Informations supplémentaires">Appuyez sur Run ou Rerun pour lancer l’autovérification. À la fin, l’instrument affiche la liste des tests avec un indicateur PASS vert ou FAIL rouge. Certains tests peuvent être ignorés : si le système ne peut pas communiquer avec la cartouche, tous les tests qui nécessitent cette communication sont ignorés.</Admonition></td><td><img src="/img/manual/cell-725c4037614b.png" alt="Illustration du tableau, page du manuel 150" width="245" className="manual-figure" loading="lazy" /></td></tr></tbody></table>

## 16.7 Fonctionnement à basse température {#section-16-7}

L’instrument doit être utilisé dans une plage de température précise pour éviter les dommages et garantir des résultats fiables et reproductibles (voir section 3.2). À des températures ambiantes très basses ou très élevées (sous 5 °C (41 °F) ou au-dessus de 30 °C (86 °F)), les protocoles ne sont pas exécutés. À basse température ambiante, l’instrument se réchauffe automatiquement avant une mesure jusqu’à la température requise. Pendant ce chauffage, son état affiche « Heating... ». Si la température cible n’est pas atteinte après plusieurs heures, le protocole se termine avec une erreur (tableau 16-2, E42).

:::info[Prévoyez le temps de chauffage]

Les mesures peuvent être retardées lorsqu’un chauffage prolongé est nécessaire. Pour l’éviter, maintenez la température de l’instrument au-dessus de 10 °C (50 °F).

:::

## 16.8 Instructions de résolution des problèmes {#section-16-8}

Le tableau suivant présente un aperçu des problèmes courants et des solutions correspondantes. Si le problème persiste, veuillez contacter votre représentant de service local ou le service client de bNovate. Les coordonnées du service client de bNovate se trouvent à la section 19.1.

**Tableau 16-4 Instructions de résolution des problèmes**

<table className="manual-table"><tbody><tr><td>OBSERVATION</td><td>INSTRUCTION</td></tr><tr><td>Rien ne s’affiche à l’écran</td><td>• Vérifiez si le BactoSense est connecté à l’alimentation électrique et allumé.</td></tr><tr><td>Interface utilisateur non réactive ou vacillante</td><td>• Interférence électromagnétique potentielle d'une machine voisine (par exemple, une pompe). Déplacer le BactoSense.</td></tr><tr><td>Message d’erreur sur l’écran</td><td>• Répondez au message d’erreur comme décrit dans ce chapitre.</td></tr><tr><td>Les mesures semblent incorrectes</td><td>• Assurez-vous que l’échantillon et les conditions de fonctionnement respectent les consignes de<br />la section 3.2. • Vérifiez si l’instrument est correctement installé conformément au chapitre<br />5. • Assurez-vous que les tâches d’entretien ont été effectuées conformément aux calendriers d’entretien décrits dans les sections 15.1 et<br />15.2. • Nettoyez l’instrument à l’aide du kit de<br />nettoyage. • Validez l’instrument à l’aide du kit de validation.</td></tr></tbody></table>
