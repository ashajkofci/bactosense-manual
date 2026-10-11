// Coordinates use the product's 800 x 480 logical screen, or the web capture's CSS pixels.
// Badges live in a white margin or unused space; targets touch the relevant control's edge.
const label = (number, at, target, via) => ({ label: String(number), at, target, ...(via ? { via } : {}) });
const native = (name, capture, sourceIds, extra = {}) => ({ name, capture, sourceIds, surface: 'native', ...extra });

export const nativeLayouts = [
  native('system-services', 'system-services', [111, 73]),
  native('digital-input-configuration', 'digital-inputs', [9], {
    callouts: [label(1, [-22,160], [60,160]), label(2, [822,211], [772,211]),
      label(3, [-22,244], [60,244]), label(4, [274,340], [296,340]),
      label(5, [822,382], [560,382])],
    highlights: [[448,137,328,146]],
  }),
  native('analog-output-configuration', 'analog-outputs', [10], {
    callouts: [label(1, [-22,160], [60,160]), label(2, [822,150], [560,150]),
      label(3, [365,235], [398,235]), label(4, [365,315], [398,315]),
      label(5, [-22,310], [60,310])],
  }),
  native('output-test-controls', 'test-outputs', [11], {
    callouts: [label(1, [-22,180], [60,180]), label(2, [520,-22], [520,156]),
      label(3, [822,280], [750,280]), label(4, [580,502], [580,405]),
      label(5, [400,502], [400,478]), label(6, [-22,382], [60,382]),
      label(7, [-22,278], [60,278])],
  }),
  native('import-settings-options', 'import-config', [13], {crop:[45,175,500,155]}),
  native('usb-import-and-export', 'export-all', [17,72]),
  native('alarm-configuration', 'alarms', [18], {
    callouts: [label(1, [-22,149], [60,149]), label(2, [485,149], [460,149]),
      label(3, [822,149], [700,149]), label(4, [505,221], [540,221]),
      label(5, [505,290], [540,290]), label(6, [485,324], [472,313])],
    highlights: [[296,177,177,137]],
  }),
  native('cartridge-alarm-source', 'alarm-sources', [19], { crop: [100,90,600,300] }),
  native('network-configuration', 'network', [22], {
    callouts: [label(1, [-22,146], [60,146]), label(2, [822,270], [736,270])],
    highlights: [[404,102,332,310]],
  }),
  native('date-and-time-settings', 'date-time', [23]),
  native('time-synchronization-settings', 'time-sync', [25]),
  native('home-overview', 'home', [26], {
    regions: [{label:'A',box:[0,0,800,60]}, {label:'B',box:[0,60,800,350]}, {label:'C',box:[0,410,800,70]}],
    padding: [44,44,60,44],
    callouts: [label(1,[40,-22],[40,4]), label(2,[165,-22],[165,4]),
      label(3,[829,82],[525,82]), label(4,[484,-22],[484,4]),
      label(5,[675,-22],[675,4]), label(6,[760,-22],[760,4]),
      label(7,[65,502],[65,477]), label(8,[292,502],[292,477]), label(9,[731,502],[731,477])],
    annotationChanges: {
      '7':'Results opens the measurement list.',
      '8':'Mode opens the Online (Auto) / Manual choice.',
      '9':'Measure starts the manual measurement wizard.',
    },
  }),
  native('online-results-chart', 'auto-dashboard', [52], { arrows: [{from:[290,120],to:[350,90]}] }),
  native('online-chart-settings', 'auto-chart-expanded', [53], {
    callouts: [label(1,[-22,245],[40,245]), label(2,[822,240],[759,240]),
      label(3,[400,-22],[400,79]), label(4,[400,127],[400,140]),
      label(5,[400,191],[356,203])],
  }),
  native('icc-result-details', 'result-detail', [54], {
    panels: [
      {capture:'result-detail',at:[0,0]},
      {capture:'result-metrics',crop:[150,40,500,400],at:[0,540],displaySize:[400,320]},
      {capture:'result-dotplot',crop:[40,20,720,440],at:[420,540],displaySize:[400,244.444444]},
    ], canvasSize:[820,860],
    callouts: [label(1,[257,112],[257,137]), label(2,[-22,695],[0,695]),
      label(3,[414,800],[370,789]), label(4,[842,650],[820,650]),
      label(5,[842,173],[720,173]), label(6,[80,502],[80,478]),
      label(7,[280,502],[280,478]), label(8,[520,502],[520,478]),
      label(9,[720,502],[720,478]), label(10,[-22,258],[4,258])],
    annotationChanges: {'1':'Tap the information icon to open all result metrics.','3':'Main dotplot in the result information window.'},
  }),
  native('gate-settings-list', 'gates-list', [55], {
    callouts: [label(1,[-22,150],[10,150]), label(2,[-22,202],[10,202]),
      label(3,[-22,254],[10,254]), label(4,[460,111],[422,111]),
      label(5,[526,111],[560,144]), label(6,[650,82],[640,130]),
      label(7,[700,82],[700,130]), label(8,[760,82],[760,130]),
      label(9,[720,502],[720,478])],
  }),
  native('tcc-gate-definition', 'gate-polygon', [57], {
    panels: [ {capture:'gate-polygon',at:[0,0]},
      {capture:'gate-preview',crop:[40,20,720,440],at:[300,510],displaySize:[500,305.555556]} ],
    canvasSize:[800,816],
    callouts: [label(1,[120,335],[120,312]),
      label(2,[270,335],[270,312]),label(3,[330,335],[330,312]),
      label(4,[822,272],[778,272]), label(5,[822,553],[519,553]), label(6,[822,650],[800,650]),
      label('a',[451,752],[473,733]), label('b',[451,643],[473,655]),
      label('c',[610,580],[585,584]), label('d',[610,750],[585,733])],
    textLabels: ['a','b','c','d'].map((text,index)=>({text,at:[18,167+index*43]})),
  }),
  native('icc-gate-definition', 'icc-gate-polygon', [58]),
  native('hna-lower-limit', 'gate-hna', [61]),
  native('support-and-service-information', 'intervention-info', [86]),
  native('warning-high-ssc-baseline', 'warning-detail', [102]),
  native('noncritical-error-empty-sample', 'error-detail-MixerInflationError', [103]),
  native('critical-error-missing-cartridge', 'error-detail-CartridgeMissingError', [104]),
  native('error-log', 'errors-list', [105], {
    callouts: [label(1,[-22,150],[10,150]), label(2,[215,111],[150,147]),
      label(3,[822,150],[790,150]), label(4,[720,502],[720,478]),
      label(5,[400,502],[400,478])],
  }),
  native('self-check-results', 'self-check', [109]),
  native('error-log-clear-errors', 'errors-list', [110], { highlights: [[642,417,154,62]] }),
  native('home-settings-button', 'home', [87]),
];

export function webLayouts(record) {
  const state = name => record.screenshots.find(row => row.filename === `${name}.png`);
  const cropSize = name => [state(name).bounds.width, state(name).bounds.height];
  const web = (name, capture, sourceIds, extra={}) => ({ name,capture,sourceIds,surface:'web',...extra });
  const fcs = state('web-results-fcs-download').bounds;
  const fcsTarget = [record.fcsBounds.x+record.fcsBounds.width-fcs.x, record.fcsBounds.y+record.fcsBounds.height/2-fcs.y];
  const play = state('web-dotplots-play-button').bounds;
  const slider = state('web-dotplots-date-slider').bounds;
  const rangeCrop = [250,155,1020,slider.y+slider.height-155];
  return [
    web('web-dashboard', 'web-dashboard', [76], {
      crop:[0,0,1280,380],
      callouts:[label(1,[-22,240],[2,240]),label(2,[160,-22],[160,1]),
        label(3,[775,-22],[775,70]),label(4,[1165,-22],[1165,1]),
        label(5,[1245,-22],[1245,1]),label(6,[1302,292],[1260,292])],
    }),
    web('web-fcs-download', 'web-results-fcs-download', [77], {
      callouts:[label('X',[296,fcsTarget[1]],[fcsTarget[0]+2,fcsTarget[1]])],
      arrows:[{from:[250,120],to:[fcsTarget[0]+2,fcsTarget[1]+5]}],
    }),
    web('web-zip-download', 'web-results-zip-download', [78]),
    web('web-results-download-formats', 'web-results-summary-downloads', [79], {
      padding:[20,36,20,20], arrows:[{from:[55,-22],to:[55,2]}],
    }),
    web('web-plots-navigation', 'web-dotplots', [80], {
      crop:[0,85,230,55],padding:[20,20,44,20],arrows:[{from:[251,25],to:[221,25]}],
    }),
    web('web-measurement-interval', 'web-settings', [81], {
      crop:[0,50,1280,315],
      arrows:[{from:[255,260],to:[225,260]},{from:[1150,212],to:[996,152]}],
    }),
    web('web-plots-play', 'web-dotplots-play-button', [82], {
      padding:[20,40,20,20],arrows:[{from:[21,-22],to:[21,2]}],
    }),
    web('web-plots-date-range', 'web-dotplots', [83], {
      crop:rangeCrop,padding:[20,20,20,35],
      arrows:[{from:[407,-8],to:[407,play.y-155]},
        {from:[955,rangeCrop[3]+18],to:[1003,slider.y+slider.height-155-12]}],
      highlights:[[play.x+99-250,play.y-155,90,34]],
    }),
    web('web-user-reboot-menu', 'web-user-reboot-menu', [85]),
    web('web-system-info-navigation', 'web-system-info', [84], {crop:[0,205,230,50]}),
  ];
}

export const localizedTitles = {
  en: ['System services','Digital input configuration','Analog output configuration','Output test controls','Import settings options','USB import and export','Alarm configuration','Cartridge alarm source','Network configuration','Date and time settings','Time synchronization settings','Home screen overview','Online results chart','Online chart settings','ICC result details and plots','Gate settings list','TCC gate definition and preview','ICC gate definition','HNA lower limit','Support and service information','High SSC baseline warning','Non-critical empty sample error','Critical missing cartridge error','Error log','Self-check results','Clear errors control','Web dashboard','FCS download link','ZIP download','Result download formats','Plots navigation','Measurement interval','Plot playback controls','Plot date range','User reboot menu'],
  de: ['Systemdienste','Konfiguration der Digitaleingänge','Konfiguration der Analogausgänge','Ausgänge testen','Einstellungen importieren','USB-Import und -Export','Alarmkonfiguration','Kartuschenalarmquelle','Netzwerkkonfiguration','Datum und Uhrzeit','Zeitsynchronisation','Übersicht der Startseite','Online-Ergebnisdiagramm','Online-Diagrammeinstellungen','ICC-Ergebnisdetails und Diagramme','Liste der Gates','TCC-Gatedefinition und Vorschau','ICC-Gatedefinition','HNA-Untergrenze','Support- und Serviceinformationen','Warnung bei hohem SSC-Basissignal','Unkritischer Fehler: leere Probe','Kritischer Fehler: fehlende Kartusche','Fehlerprotokoll','Selbstprüfergebnisse','Fehler löschen','Web-Dashboard','FCS-Downloadlink','ZIP-Download','Formate für Ergebnisdownloads','Navigation zu Plots','Messintervall','Wiedergabesteuerung der Diagramme','Datumsbereich der Diagramme','Benutzermenü für Neustart'],
  fr: ['Services système','Configuration des entrées numériques','Configuration des sorties analogiques','Test des sorties','Options d’importation des paramètres','Importation et exportation USB','Configuration des alarmes','Source d’alarme de cartouche','Configuration réseau','Date et heure','Synchronisation de l’heure','Vue d’ensemble de l’accueil','Graphique des résultats en ligne','Paramètres du graphique en ligne','Détails et graphiques du résultat ICC','Liste des gates','Définition et aperçu du gate TCC','Définition du gate ICC','Limite inférieure HNA','Informations de support et de maintenance','Avertissement de signal SSC de base élevé','Erreur non critique : échantillon vide','Erreur critique : cartouche absente','Journal des erreurs','Résultats de l’auto-test','Effacer les erreurs','Tableau de bord Web','Lien de téléchargement FCS','Téléchargement ZIP','Formats de téléchargement des résultats','Navigation vers Graphiques','Intervalle de mesure','Commandes de lecture des graphiques','Plage de dates des graphiques','Menu utilisateur de redémarrage'],
  it: ['Servizi di sistema','Configurazione degli ingressi digitali','Configurazione delle uscite analogiche','Test delle uscite','Opzioni di importazione delle impostazioni','Importazione ed esportazione USB','Configurazione degli allarmi','Sorgente dell’allarme della cartuccia','Configurazione della rete','Data e ora','Sincronizzazione dell’ora','Panoramica della schermata iniziale','Grafico dei risultati online','Impostazioni del grafico online','Dettagli e grafici del risultato ICC','Elenco dei gate','Definizione e anteprima del gate TCC','Definizione del gate ICC','Limite inferiore HNA','Informazioni su supporto e assistenza','Avviso di segnale SSC di base elevato','Errore non critico: campione vuoto','Errore critico: cartuccia assente','Registro degli errori','Risultati dell’autotest','Cancella errori','Dashboard Web','Link di download FCS','Download ZIP','Formati di download dei risultati','Navigazione a Grafici','Intervallo di misura','Controlli di riproduzione dei grafici','Intervallo di date dei grafici','Menu utente per il riavvio'],
  es: ['Servicios del sistema','Configuración de entradas digitales','Configuración de salidas analógicas','Prueba de salidas','Opciones de importación de ajustes','Importación y exportación USB','Configuración de alarmas','Origen de la alarma del cartucho','Configuración de red','Fecha y hora','Sincronización horaria','Vista general de la pantalla de inicio','Gráfico de resultados en línea','Ajustes del gráfico en línea','Detalles y gráficos del resultado ICC','Lista de gates','Definición y vista previa del gate TCC','Definición del gate ICC','Límite inferior de HNA','Información de soporte y servicio','Advertencia de señal basal alta en SSC','Error no crítico: muestra vacía','Error crítico: cartucho ausente','Registro de errores','Resultados del autodiagnóstico','Borrar errores','Panel Web','Enlace de descarga FCS','Descarga ZIP','Formatos de descarga de resultados','Navegación a Gráficos','Intervalo de medición','Controles de reproducción de gráficos','Intervalo de fechas de los gráficos','Menú de usuario para reiniciar'],
};

for (const [locale,titles] of Object.entries(localizedTitles)) {
  titles.splice(nativeLayouts.length-1,0,({en:'Settings button',de:'Schaltfläche Einstellungen',fr:'Bouton Paramètres',it:'Pulsante Impostazioni',es:'Botón Ajustes'})[locale]);
  titles.push(({en:'Web System info navigation',de:'Navigation zur Web-Systeminformation',fr:'Navigation vers les informations système Web',it:'Navigazione alle informazioni di sistema Web',es:'Navegación a la información del sistema Web'})[locale]);
}
