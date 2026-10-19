---
title: "7. Interface de bus de terrain"
sidebar_label: "7. Interface de bus de terrain"
slug: /field-bus-interface
sidebar_position: 7
description: "Manuel d’utilisation BactoSense : Interface de bus de terrain."
---

## 7.1 Modbus TCP {#section-7-1}

### 7.1.1 Informations générales pour l’utilisation avec Modbus TCP {#section-7-1-1}

Le BactoSense peut être utilisé via le protocole de contrôle de transmission Modbus TCP (Transmission Control Protocol). Les exigences suivantes doivent être remplies :

- L’ordinateur et/ou le système de gestion ou de contrôle doit être compatible avec Modbus TCP.
- L’ordinateur et/ou le système de gestion ou de contrôle doit disposer d’un logiciel capable de traiter correctement les données fournies par le BactoSense.
- Le service Modbus TCP doit être activé sur le BactoSense sous Accueil → Paramètres → Paramètres système → Services système.
- Le BactoSense doit être connecté au système de bus.
- Les paramètres réseau doivent être correctement configurés pour fonctionner avec Modbus TCP.

Informations supplémentaires

- L’interface Modbus TCP est intégrée par défaut dans le BactoSense.
- La prise Ethernet est située sur le côté droit de l’instrument.
- La table d’adresses nécessaire à la programmation se trouve séparément dans la section [Liste d’adresses sur Modbus TCP :](07-field-bus-interface.md#section-7-1-2).
- Tous les registres sont codés en big-endian.
- La communication Modbus TCP s’exécute sur le port 502.
- La liste des codes d’erreur figure aux sections [Erreurs non critiques](16-warnings-errors-and-troubleshooting.md#section-16-2) (erreurs non critiques) et [Erreurs critiques](16-warnings-errors-and-troubleshooting.md#section-16-3) (erreurs critiques).
- Modbus TCP peut servir à synchroniser l’heure. Suivez les instructions de la section [Configuration des serveurs NTP](08-general-operations-and-configurations.md#section-8-7) et sélectionnez *Modbus TCP* comme source de synchronisation.

### 7.1.2 Liste d’adresses sur Modbus TCP : {#section-7-1-2}

Les valeurs suivantes peuvent être lues avec les fonctions Modbus 3 ou 4 et écrites avec la fonction Modbus 16.

<div className="manual-modbus-address-scroll manual-modbus-address-list">

| N° DE<br/>REGISTRE | ADRESSE<br/>(DÉCALAGE) | TYPE DE DONNÉES | FONCTION | VALEURS |
| --- | --- | --- | --- | --- |
| 300201 400201 | 0x00C8 | Entier non<br/>signé, bits<br/>0-15 | Entrées<br/>numériques. Ignorées<br/>sauf<br/>si «<br/>Modbus<br/>TCP »<br/>est sélectionné<br/>comme source<br/>sur l’écran<br/>des<br/>paramètres Digital<br/>Inputs. | Bit 0 : Entrée<br/>1 Bit 1<br/>: Entrée 2 Bit<br/>2 : Entrée 3<br/>Bit 3 : Entrée 4 Pour<br/>l’affectation correcte des bits aux entrées, consultez<br/>la section [Configuration des entrées numériques et du mode PLC](06-io-box.md#section-6-5), en particulier le tableau<br/>6-2 et la figure<br/>6-5. L’entrée 1111 = 15<br/>signifie abandonner. |
| 300202 400202 | 0x00C9 | Entier non<br/>signé, bits<br/>0-15 | Commande<br/>d’alimentation | Bit 0 : Arrêt<br/>Bit 1 : Redémarrage |
| 300203 400203 | 0x00CA | Uint16 | Watchdog | Écrivez la consigne en secondes pour<br/>activer ou réinitialiser le compte<br/>à rebours. Après l’écriture, le compte<br/>à rebours diminue de 1<br/>chaque seconde. Pendant ce<br/>décompte, la lecture du registre<br/>renvoie la consigne. Si<br/>le décompte<br/>atteint 0, tout protocole en cours<br/>est abandonné. La lecture du<br/>registre renvoie alors 0. Écrivez 0<br/>pour désactiver le compte<br/>à rebours. |
| 300204 400204 | 0x00CB | Uint16 | Registre<br/>de test | Écrivez 1 pour afficher un message sur<br/>la page de source DI de l’interface<br/>graphique. Revient à 0 au démarrage. |
| 300211 400211 | 0x00D2 | UInt16 : Année | Lire/définir la<br />date<br />et<br />l’heure. L’heure<br />change dès<br />la fin<br />de l’écriture.<br />Seuls les<br />champs dont<br />les<br />registres<br />ont été<br />écrits<br />changent :<br />si seul le<br />mois est<br />écrit, seul le<br />mois<br />est mis<br />à jour. | [0,9999] |
| 300212 400212 | 0x00D3 | UInt16 :<br />Mois | ^ | [1,12] |
| 300213 400213 | 0x00D4 | UInt16 : Jour | ^ | [0,31] |
| 300214 400214 | 0x00D5 | UInt16 : Heure | ^ | [0,24] |
| 300215 400215 | 0x00D6 | UInt16 :<br />Minute | ^ | [0,59] |
| 300216 400216 | 0x00D7 | UInt16 :<br />Seconde | ^ | [0,59] |
| Les valeurs suivantes peuvent être lues avec la fonction Modbus 3 ou 4. | \< | \< | \< | \< |
| 300001 400001 | 0x0000 | UInt16<br />(bits individuels) | Sorties<br />numériques | Bit 0 : Sortie<br />1 Bit 1 :<br />Sortie 2 Bit 2<br />: Sortie 3 Bit<br />3 : Sortie 4 Pour l’affectation<br />correcte des bits aux sorties, consultez<br />la section [Configuration des sorties numériques](../io-box/#section-6-6) ou utilisez l’interface<br />de test des sorties décrite à la<br />section [Test des sorties numériques et analogiques](../io-box/#section-6-8). |
| 300002 400002 | 0x0001 | UInt16<br />(bits individuels) | État de l’instrument<br />0 =<br />Non 1<br />= Oui | Bit 0 : Processus en<br />cours Bit 1 : Erreur<br />critique Bit 2 : Erreur non<br />critique Bit 3 : Mode<br />PLC actif Bit 4 : Chauffage<br />rapide (en mode<br />hiver) Bit 5 : Chauffage<br />de fond (mode<br />hiver) Bit 6 : Dispositif d’échantillonnage<br />utilisé |
| 300003 400003 | 0x0002 | UInt16<br />(bits individuels) | État des alarmes, c’est-à-dire alarmes déclenchées pendant la dernière mesure. | Bit 0 : Alarme 1<br />Bit 1 : Alarme 2<br />Bit 2 : Alarme 3<br />… |
| 300004 400004 | 0x0003 | UInt32<br />MSB (bits individuels) | État des avertissements, c’est-à-dire avertissements déclenchés pendant la dernière mesure. | Bit 0 : Avertissement W01<br />Bit 1 : Avertissement W02<br />...<br />Bit 31 : Avertissement W32 |
| 300005 400005 | 0x0004 | UInt32<br />LSB (bits individuels) | ^ | ^ |
| 300006 400006 | 0x0005 | UInt16 | Code d’erreur | Voir la liste des codes<br />d’erreur. Remarque : E00 (erreur<br />logicielle non gérée) est renommée<br />999 pour éviter toute confusion<br />avec « aucune erreur ».<br />Les codes d’erreur non critique<br />restent affichés jusqu’à<br />leur acquittement automatique après<br />la réussite d’un protocole<br />ou leur acquittement manuel. |
| 300007 400007 | 0x0006 | UInt16 | Signal de vie | Secondes de l’horloge. La<br />valeur change chaque<br />seconde ; utilisez-la<br />pour surveiller la réactivité<br />du système. |
| 300008 400008 | 0x0007 | UInt16 | Étape de<br />mesure | IDLE<br />0 INITIALIZING 1<br />HEATING 2<br />FILLING<br />3 PRIMING<br />4 MIXING<br />5 INCUBATING<br />6 ANALYZING<br />7 CLEANING<br />8 FLUSHING<br />9 PROCESSING 10<br />VALIDATING 11<br />MOVING 12<br />EJECTING 13<br />EXPORTING 14<br />RENAMING 15<br />DELETING 16 SAVING<br />17<br />SELFCHECK 18 ABORTED<br />19 UNKNOWN<br />98<br />ERROR 99 |
| 300011 400011 | 0x000A | UInt16 | Progression de<br />la mesure | [0, 100] 0 .. 100 % |
| 300012 400012 | 0x000B | Float 32 MSB | Température de<br />la carte d’E/S | Celsius |
| 300013 400013 | 0x000C | Float 32 LSB | ^ | ^ |
| 300014 400014 | 0x000D | UInt16 | Humidité au niveau de<br />la carte d’E/S | [0, 100] 0 .. 100 % |
| 300015 400015 | 0x000E | UInt16 : Année | Date et heure du dernier échantillonnage | \< |
| 300016 400016 | 0x000F | UInt16 : Mois | ^ | ^ |
| 300017 400017 | 0x0010 | UInt16 : Jour | ^ | ^ |
| 300018 400018 | 0x0011 | UInt16 : Heure | ^ | ^ |
| 300019 400019 | 0x0012 | UInt16 : Minute | ^ | ^ |
| 300020 400020 | 0x0013 | UInt16 : Seconde | ^ | ^ |
| 300021 400021 | 0x0014 | UInt16 | Pourcentage de remplissage<br />de la cartouche | [0, 100] 0 .. 100 % |
| 300022 400022 | 0x0015 | UInt32 MSB | N° de série<br />de la cartouche |  |
| 300023 400023 | 0x0016 | UInt32 LSB | ^ | ^ |
| 300024 400024 | 0x0017 | UInt32 MSB | N° de série du remplissage |  |
| 300025 400025 | 0x0018 | UInt32 LSB |  | ^ |
| 300026 400026 | 0x0019 | Uint16 | Type de<br />cartouche | 1 =<br />TCC 1002 = ICC<br />1030 = ACC |
| 300027 400027 | 0x001A | UInt16 : Année | Date de<br />péremption de la<br />cartouche | Date UTC |
| 300028 400028 | 0x001B | UInt16 : Mois | ^ | ^ |
| 300029 400029 | 0x001c | UInt16 : Jour | ^ | ^ |
| 300031 400031 | 0x001E | UInt32 MSB | Numéro de<br />série de<br />l’instrument |  |
| 300032 400032 | 0x001F | UInt32 LSB | ^ | ^ |
| 300033 400033 | 0x0020 | Chaîne, caractères 1-2 | Version du<br />logiciel | Si elle comporte moins<br />de 16 caractères, la<br />chaîne est complétée<br />par des caractères<br />nuls. Exemple : '1.4.0-BS\0\0\0\0...' |
| 300034 400034 | 0x0021 | Chaîne, caractères 3-4 | ^ | ^ |
| 300035 400035 | 0x0022 | Chaîne, caractères 5-6 | ^ | ^ |
| 300036 400036 | 0x0023 | Chaîne, caractères 7-8 | ^ | ^ |
| 300037 400037 | 0x0024 | Chaîne, caractères 9-10 | ^ | ^ |
| 300038 400038 | 0x0025 | Chaîne, caractères<br />11-12 |  |  |
| 300039 400039 | 0x0026 | Chaîne, caractères<br />13-14 | ^ | ^ |
| 300040 400040 | 0x0027 | Chaîne, caractères<br />15-16 | ^ | ^ |
| 300041 400041 | 0x0028 | UInt16 | Mémoire<br />restante | Nombre approximatif de mesures<br />restantes avant saturation du<br />disque |
| 300042 400042 | 0x0029 | UInt16 | Durée de vie<br />restante<br />de la vanne | [0, 100], pourcentage<br />de mouvements restants<br />avant l’entretien. |
| 300043 400043 | 0x002A | UInt16 | Durée de<br />vie restante<br />du piston | [0, 100], pourcentage<br />de mouvements restants<br />avant l’entretien. |
| 300044 400044 | 0x002B | UInt16 : Année | Date du<br />prochain entretien | Date UTC |
| 300045 400045 | 0x002C | UInt16 : Mois | ^ | ^ |
| 300046 400046 | 0x002D | UInt16 : Jour | ^ | ^ |
| 300101 400101 | 0x0064 | UInt32 MSB | TCC | Revient à zéro après un<br />protocole de nettoyage ou un<br />redémarrage. |
| 300102 400102 | 0x0065 | UInt32 LSB | ^ | ^ |
| 300103 400103 | 0x0066 | UInt32 MSB | ICC | Toujours 0 si la cartouche ne<br />fournit pas ICC. |
| 300104 400104 | 0x0067 | UInt32 LSB | ^ | ^ |
| 300105 400105 | 0x0068 | UInt32 MSB | Gate+ | Toujours 0 si la cartouche<br />ne fournit pas Gate+ |
| 300106 400106 | 0x0069 | UInt32 LSB | ^ | ^ |
| 300107 400107 | 0x006A | UInt32 MSB | HNAC |  |
| 300108 400108 | 0x006B | UInt32 LSB | ^ | ^ |
| 300109 400109 | 0x006C | UInt32 MSB | LNAC |  |
| 300110 400110 | 0x006D | UInt32 LSB | ^ | ^ |
| 300111 400111 | 0x006E | Float 32 MSB | HNAP |  |
| 300112 400112 | 0x006F | Float 32 LSB | ^ | ^ |
| 300113 400113 | 0x0070 | UInt32 MSB | ACC | Toujours 0 s’il ne s’agit pas<br />d’une cartouche ACC. |
| 300114 400114 | 0x0071 | UInt32 LSB | ^ | ^ |
| 300115 400115 | 0x0072 | UInt32 MSB | HACC | Toujours 0 s’il ne s’agit pas<br />d’une cartouche ACC. |
| 300116 400116 | 0x0073 | UInt32 LSB | ^ | ^ |
| 300117 400117 | 0x0074 | UInt32 MSB | LACC | Toujours 0 s’il ne s’agit pas<br />d’une cartouche ACC. |
| 300118 400118 | 0x0075 | UInt32 LSB | ^ | ^ |
| 300119 400119 | 0x0076 | Float 32 MSB | HACP | Toujours 0 s’il ne s’agit pas<br />d’une cartouche ACC. |
| 300120 400120 | 0x0077 | Float 32 LSB | ^ | ^ |
| 300121 400121 | 0x0078 | UInt32 MSB | TCC en direct | Identique à TCC, mais<br />la valeur est actualisée<br />en direct pendant une mesure.<br />Revient à zéro à la<br />fin de la mesure. |
| 300122 400122 | 0x0079 | UInt32 LSB | ^ | ^ |
| 300123 400123 | 0x007A | UInt32 MSB | ICC en direct | voir ci-dessus. |
| 300124 400124 | 0x007B | UInt32 LSB | ^ | ^ |
| 300125 400125 | 0x007C | UInt32 MSB | Gate+ en direct | voir ci-dessus. |
| 300126 400126 | 0x007D | UInt32 LSB | ^ | ^ |
| 300127 400127 | 0x007E | UInt32 MSB | HNAC en direct | voir ci-dessus. |
| 300128 400128 | 0x007F | UInt32 LSB | ^ | ^ |
| 300129 400129 | 0x0080 | UInt32 MSB | LNAC en direct | voir ci-dessus. |
| 300130 400130 | 0x0081 | UInt32 LSB | ^ | ^ |
| 300131 400131 | 0x0082 | Float 32 MSB | HNAP en direct | voir ci-dessus. |
| 300132 400132 | 0x0083 | Float 32 LSB | ^ | ^ |
| 300135 400135 | 0x0086 | UInt32 MSB | ACC en direct | voir ci-dessus. |
| 300136 400136 | 0x0087 | UInt32 LSB | ^ | ^ |
| 300137 400137 | 0x0088 | UInt32 MSB | HACC en direct | voir ci-dessus. |
| 300138 400138 | 0x0089 | UInt32 LSB | ^ | ^ |
| 300139 400139 | 0x008A | UInt32 MSB | LACC en direct | voir ci-dessus. |
| 300140 400140 | 0x008B | UInt32 LSB | ^ | ^ |
| 300141 400141 | 0x008C | Float 32 MSB | HACP en direct | voir ci-dessus. |
| 300142 400142 | 0x008D | Float 32 LSB | ^ | ^ |
| 300151 400151 | 0x0096 | UInt16 : Année | Date et heure du dernier arrêt brutal. | \< |
| 300152 400152 | 0x0097 | UInt16 : Mois | ^ | ^ |
| 300153 400153 | 0x0098 | UInt16 : Jour | ^ | ^ |
| 300154 400154 | 0x0099 | UInt16 : Heure | ^ | ^ |
| 300155 400155 | 0x009A | UInt16 : Minute | ^ | ^ |
| 300156 400156 | 0x009B | UInt16 : Seconde | ^ | ^ |
| 300157 400157 | 0x009C | UInt16 | Durée de mise<br />hors tension | En secondes |
| 300165 400165 | 0x00A4 | UInt16 : Année | Date et heure du dernier démarrage de protocole. | \< |
| 300166 400166 | 0x00A5 | UInt16 : Mois | ^ | ^ |
| 300167 400167 | 0x00A6 | UInt16 : Jour | ^ | ^ |
| 300168 400168 | 0x00A7 | UInt16 : Heure | ^ | ^ |
| 300169 400169 | 0x00A8 | UInt16 : Minute | ^ | ^ |
| 300170 400170 | 0x00A9 | UInt16 : Seconde | ^ | ^ |
| 300171 400171 | 0x00AA | UInt16 | Flux de<br />mesure<br />actuel<br />du BactoSwitch | De 1 à 4 |
| 300172 400172 | 0x00AB | UInt16 | Prochain flux<br />de<br />mesure<br />du BactoSwitch | De 1 à 4 |
| 300173 400173 | 0x00AC | UInt16 | Débit du<br />BactoSwitch | mL/min |
| 300174 400174 | 0x00AD | UInt16 | État du<br/>BactoSwitch | 0 signifie aucune erreur. |
| 300175 400175 | 0x00AE | UInt16 | Connexion du<br/>BactoSwitch | 0 = non<br/>connecté 1 =<br/>connexion réussie |
| 300176 400176 | 0x00AF | UInt16 | État des<br/>vannes du BactoSwitch | Masque de bits 0x01 = vanne du<br/>flux 1, etc.<br/>int 15 = toutes ouvertes |

</div>
