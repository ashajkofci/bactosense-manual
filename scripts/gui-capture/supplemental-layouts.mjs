// These figures extend the reviewed legacy replacement catalog. Bounds come
// from the real menu-click capture, including language-dependent button sizes.
const titles = {
  en: ['Settings menu: System settings', 'System settings menu: Upgrades', 'Scientific Package licence and Upgrade button', 'Scientific Package activation-key entry', 'Home toolbar: Settings', 'System settings menu: BactoCloud', 'BactoCloud enrolment settings'],
  de: ['Einstellungsmenü: Systemeinstellungen', 'Systemeinstellungen: Upgrades', 'Scientific-Package-Lizenz und Upgrade-Taste', 'Eingabe des Scientific-Package-Aktivierungsschlüssels', 'Startbildschirm: Einstellungen', 'Systemeinstellungen: BactoCloud', 'BactoCloud-Registrierungseinstellungen'],
  fr: ['Menu Paramètres : Paramètres système', 'Paramètres système : Mises à niveau', 'Licence du Scientific Package et bouton Mise à niveau', 'Saisie de la clé d’activation du Scientific Package', 'Barre d’accueil : Paramètres', 'Paramètres système : BactoCloud', 'Paramètres d’inscription à BactoCloud'],
  it: ['Menu Impostazioni: Impostazioni di sistema', 'Impostazioni di sistema: Aggiornamenti', 'Licenza del pacchetto Scientific e pulsante Aggiornamento', 'Inserimento della chiave di attivazione del pacchetto Scientific', 'Barra Home: Impostazioni', 'Impostazioni di sistema: BactoCloud', 'Impostazioni di registrazione a BactoCloud'],
  es: ['Menú Ajustes: Ajustes del sistema', 'Ajustes del sistema: Actualizaciones', 'Licencia del paquete Scientific y botón Actualizar', 'Introducción de la clave de activación del paquete Scientific', 'Barra Home: Ajustes', 'Ajustes del sistema: BactoCloud', 'Ajustes de inscripción en BactoCloud'],
};
const systemLabels = {en:'System settings', de:'Einstellungen', fr:'Paramètres système', it:'Impostazioni di sistema', es:'Ajustes del sistema'};
const upgradesLabels = {en:'Upgrades', de:'Upgrades', fr:'Mises à niveau', it:'Aggiornamenti', es:'Actualizaciones'};
const upgradeLabels = {en:'Upgrade', de:'Upgrade', fr:'Mise à niveau', it:'Aggiornamento', es:'Actualizar'};
const oldCloud = name => `/img/manual/bactocloud/enrolment-device-${name}.png`;

export function supplementalLayouts(locale, records) {
  const object = (capture, predicate, description) => {
    const matches = records[capture].objects.filter(predicate);
    if (matches.length !== 1) throw new Error(`${locale}/${capture}: expected one ${description}, found ${matches.length}.`);
    return matches[0];
  };
  const menu = (capture, text) => object(capture, row => row.type.startsWith('MenuButtonView') && row.text === text, `menu button ${text}`);
  const named = (capture, name) => object(capture, row => row.name === name, name);
  const rect = row => [row.x, row.y, row.width, row.height];
  const tile = row => [row.x - 3, row.y - 3, row.width + 6, row.height + 6];
  const system = menu('settings-menu', systemLabels[locale]);
  const upgrades = menu('system-settings-menu', upgradesLabels[locale]);
  const cloud = menu('system-settings-menu', 'BactoCloud');
  const upgrade = object('scientific-package-upgrades', row => row.type.startsWith('SmallButton') && row.text === upgradeLabels[locale], 'Upgrade button');
  const input = named('scientific-package-activation-key', 'keyboardInput');
  const confirm = named('scientific-package-activation-key', 'keyboardConfirm');
  const homeButtons = records['activation-home'].objects.filter(row => row.name === 'homeBarButtonBackground').sort((a,b) => a.x-b.x);
  if (homeButtons.length !== 4) throw new Error(`${locale}: expected four genuine Home controls.`);
  const settings = homeButtons[1];
  const enroll = named('bactocloud-settings', 'actionBarButton2');
  if (enroll.disabled) throw new Error(`${locale}: Enroll must be available in the stopped Admin fixture.`);
  if (input.text !== '' || !confirm.disabled) throw new Error(`${locale}: activation capture must show an empty, unsubmitted key.`);
  const definitions = [
    {name:'settings-menu-system-settings', capture:'settings-menu', replaces:[oldCloud('settings')], sections:['9.1','14.3.2'],
      highlights:[tile(system)], arrows:[{from:[22,system.y+system.height/2],to:[system.x-5,system.y+system.height/2]}]},
    {name:'scientific-package-upgrades-menu', capture:'system-settings-menu', sections:['9.1'],
      highlights:[tile(upgrades)], arrows:[{from:[778,upgrades.y+upgrades.height/2],to:[upgrades.x+upgrades.width+5,upgrades.y+upgrades.height/2]}]},
    {name:'scientific-package-upgrades', capture:'scientific-package-upgrades', sections:['9.1'],
      highlights:[rect(upgrade)], arrows:[{from:[upgrade.x+upgrade.width+55,upgrade.y+upgrade.height/2],to:[upgrade.x+upgrade.width+3,upgrade.y+upgrade.height/2]}]},
    {name:'scientific-package-activation-key', capture:'scientific-package-activation-key', sections:['9.1'],
      highlights:[rect(input),rect(confirm)]},
    {name:'bactocloud-enrolment-home', capture:'activation-home', replaces:[oldCloud('home')], sections:['14.3.2'], crop:[0,410,800,70],
      highlights:[[settings.x+1,settings.y-410+1,settings.width-2,Math.min(settings.height-2,479-settings.y)]]},
    {name:'bactocloud-enrolment-menu', capture:'system-settings-menu', replaces:[oldCloud('system')], sections:['14.3.2'],
      highlights:[tile(cloud)], arrows:[{from:[22,cloud.y+cloud.height/2],to:[cloud.x-5,cloud.y+cloud.height/2]}]},
    {name:'bactocloud-enrolment-settings', capture:'bactocloud-settings', replaces:[oldCloud('cloud')], sections:['14.3.2'],
      highlights:[[enroll.x+1,enroll.y+1,enroll.width-2,Math.min(enroll.height-2,479-enroll.y)]]},
  ];
  return definitions.map((definition,index) => ({...definition,alt:`BactoSense — ${titles[locale][index]}`}));
}
