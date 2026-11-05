---
title: "6. Messages d’avertissement et d’erreur"
sidebar_label: "6. Messages d’avertissement et d’erreur"
slug: /warning-and-error-messages
sidebar_position: 6
description: "Manuel d’utilisation BactoSwitch : Messages d’avertissement et d’erreur."
---

## 6.1 Avertissements {#section-6-1}

Les avertissements signalent une situation qui requiert l’attention de l’utilisateur, mais qui n’interrompt pas nécessairement le fonctionnement.

*Tableau 6-1 Avertissements du BactoSwitch*

| CODE D’ERREUR | NOM | DESCRIPTION | CAUSES/SOLUTIONS |
| --- | --- | --- | --- |
| W15 | BactoSwitchLowFlow | Le débit d’entrée est inférieur à la valeur conseillée. La précision de la mesure pourrait être dégradée. | **Causes typiques :** pression d’entrée inférieure à la spécification, vanne en amont partiellement fermée ou installation créant une contre-pression au niveau de l’évacuation.<br />**Action recommandée :**<br />• Dans **Test BactoSwitch**, ouvrez uniquement la ligne concernée et réglez-la sur 150 – 400 mL/min à l’aide du bouton de réglage du débit (voir [Test des lignes et réglage du débit](04-installation.md#section-4-8)).<br />• Vérifiez que la pression d’entrée est > 0,1 bar et que Δh > 0,5 m (voir la [figure 4-2](04-installation.md#section-4-4)).<br />• Éliminez toute restriction en amont. |

## 6.2 Erreurs {#section-6-2}

*Tableau 6-2 Erreurs du BactoSwitch*

| CODE D’ERREUR | NOM | DESCRIPTION | CAUSES/SOLUTIONS |
| --- | --- | --- | --- |
| E60 | BactoSwitchFlowTooLowError | Le débit mesuré sur l’entrée sélectionnée est inférieur à la plage acceptable pour un fonctionnement sur une seule ligne. | **Causes typiques :** pression d’entrée faible ; restriction en amont ; installation de l’évacuation provoquant une contre-pression ; vanne fermée manuellement.<br />**Action recommandée :**<br />• Dans **Test BactoSwitch**, ouvrez uniquement la ligne concernée et réglez-la sur 150 – 400 mL/min à l’aide du bouton de réglage du débit (voir [Test des lignes et réglage du débit](04-installation.md#section-4-8)).<br />• Vérifiez que la pression d’entrée est > 0,1 bar et que Δh > 0,5 m (voir la [figure 4-2](04-installation.md#section-4-4)).<br />• Éliminez toute restriction en amont.<br />• Vérifiez que le robinet d’ouverture/fermeture est ouvert. |
| E61 | BactoSwitchDeviceNotFoundError | Le BactoSense ne détecte pas le BactoSwitch. | **Causes typiques :** BactoSwitch non alimenté ; câble USB-C non raccordé ou non vissé sur les deux appareils.<br />**Action recommandée :** raccordez le bloc d’alimentation au BactoSwitch et fixez le câble USB-C à l’aide des bagues de verrouillage sur le BactoSwitch et sur le BactoSense. L’appareil est détecté automatiquement une fois connecté. |
| E62 | BactoSwitchTimeoutError | Une tentative de communication avec le BactoSwitch a dépassé le délai prévu. | **Causes typiques :** problème de communication temporaire sur la liaison USB-C ; connecteurs desserrés ou non vissés.<br />**Action recommandée :** vérifiez que le câble USB-C est bien enfiché et vissé aux deux extrémités et que le BactoSwitch est alimenté, puis relancez l’opération. |
| E63 | BactoSwitchCommunicationError | Une erreur de communication s’est produite entre le BactoSense et le BactoSwitch. | **Causes typiques :** connexion USB-C instable ou incorrecte ; câble non fixé.<br />**Action recommandée :** inspectez le câble USB-C et fixez-le à nouveau sur les deux appareils (à l’aide des bagues de verrouillage), vérifiez l’alimentation du BactoSwitch et redémarrez les deux appareils. |

Si les problèmes persistent après l’application des mesures ci-dessus, contactez votre partenaire de service local (voir [Contact](09-contact.md)).

Pour les avertissements et les erreurs du BactoSense lui-même, voir le chapitre [Avertissements, erreurs et dépannage](/bactosense/warnings-errors-and-troubleshooting) du manuel d’utilisation du BactoSense.
