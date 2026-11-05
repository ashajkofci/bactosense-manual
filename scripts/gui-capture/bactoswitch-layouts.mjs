// BactoSwitch manual figures. Each replaces one English PDF screenshot in
// manuals/bactoswitch/ with the localized native or web capture from
// runtime/bactoswitch_capture.py and web/capture-bactoswitch.mjs. Highlights come
// from the real control bounds of each language's capture (logical 800 × 480).

const rect = row => [row.x, row.y, row.width, row.height];
const tile = row => [row.x - 3, row.y - 3, row.width + 6, row.height + 6];
const pad = ([x, y, w, h], n) => [x - n, y - n, w + 2 * n, h + 2 * n];
const union = (...rows) => {
  const x = Math.min(...rows.map(r => r[0])), y = Math.min(...rows.map(r => r[1]));
  return [x, y, Math.max(...rows.map(r => r[0] + r[2])) - x, Math.max(...rows.map(r => r[1] + r[3])) - y];
};

export function bactoswitchLayouts(locale, records, english) {
  const fail = message => { throw new Error(`${locale}: ${message}`); };
  const objects = capture => records[capture]?.objects || fail(`missing capture ${capture}`);
  const one = (capture, predicate, description) => {
    const matches = objects(capture).filter(predicate);
    if (!matches.length) fail(`${capture}: no ${description}`);
    return matches[0];
  };
  const named = (capture, name) => one(capture, row => row.name === name, name);
  const rightmost = capture => objects(capture).filter(row => /^actionBarButton\d$/.test(row.name)).sort((a, b) => b.x - a.x)[0];
  // Menu tiles and modal buttons keep their position in every language: locate the
  // English control, then the same control type at the same place in this language.
  const samePlace = (capture, predicate, description) => {
    const reference = english[capture].objects.find(predicate) || fail(`${capture}: no English ${description}`);
    return one(capture, row => row.type.split('_')[0] === reference.type.split('_')[0]
      && Math.abs(row.x - reference.x) < 1 && Math.abs(row.y - reference.y) < 1, description);
  };
  // Smallest real container around a text, e.g. the list row or toggle half that holds it.
  const container = (capture, text, {minWidth = 0, maxHeight = 80} = {}) => {
    const inside = (outer, inner) => outer.x <= inner.x + 0.5 && outer.y <= inner.y + 0.5
      && outer.x + outer.width >= inner.x + inner.width - 0.5 && outer.y + outer.height >= inner.y + inner.height - 0.5;
    const candidates = objects(capture).filter(row => row !== text && inside(row, text) && row.width >= minWidth
      && row.height <= maxHeight && row.width > text.width);
    return candidates.sort((a, b) => a.width * a.height - b.width * b.height)[0] || fail(`${capture}: no container for ${text.text}`);
  };
  const tileOf = (capture, englishText) => samePlace(capture, row => row.type.startsWith('MenuButtonView') && row.text === englishText, `${englishText} tile`);
  const homeStart = objects('home-online').filter(row => row.name === 'homeBarButtonBackground').sort((a, b) => b.x - a.x)[0];
  const protocolText = one('wizard-protocol-selected', row => row.text.includes('BactoSwitch') && row.type.startsWith('CustomText'), 'BactoSwitch protocol');
  const lineText = one('select-line', row => row.text === 'Unnamed line 1' && row.type.startsWith('CustomText'), 'line 1 entry');
  const lineRow = objects('select-line').find(row => row.type.startsWith('ListItemChooseSosdStream')
    && Math.abs(row.y + row.height / 2 - (lineText.y + lineText.height / 2)) < 3) || fail('select-line: no line 1 row');
  const confirm = samePlace('select-line', row => row.type.startsWith('ModalZoomButton') && row.text === 'Confirm', 'Confirm button');
  const lineCheck = samePlace('alarm-line', row => row.type.startsWith('CheckBoxButton') && row.x === 540, 'sample line checkbox');
  const lineInput = samePlace('alarm-line', row => row.type.startsWith('InputField') && row.text === 'Line # 2', 'sample line input');
  const modbus = one('digital-input-source', row => row.text.includes('Modbus') && row.type.startsWith('CustomText'), 'Modbus TCP source');
  const running = samePlace('digital-outputs', row => row.text === 'Process running', 'Process running row');
  const field = (capture, englishText) => samePlace(capture, row => row.type.startsWith('InputField') && row.text === englishText, `${englishText} field`);
  const schedulerCheck = samePlace('digital-inputs-scheduler', row => row.type.startsWith('CheckBoxButton') && row.x === 466, 'Use scheduler checkbox');
  const span = one('plot-lines', row => row.type.startsWith('CustomText') && row.y > 60 && row.y < 120 && row.x > 300 && row.x < 500, 'time span button text');

  return [
    {name: 'settings-menu-online-mode-settings', capture: 'settings-menu', replaces: 'gui-home-auto-mode-settings', sections: ['4.6'],
      highlights: [tile(tileOf('settings-menu', 'Online mode settings'))]},
    {name: 'online-mode-settings-sample-lines', capture: 'online-mode-settings-menu', replaces: 'gui-auto-mode-settings-sample-lines', sections: ['4.6'],
      highlights: [tile(tileOf('online-mode-settings-menu', 'BactoSwitch sample lines'))]},
    {name: 'sample-lines', capture: 'sample-lines', replaces: 'gui-sample-lines', sections: ['4.6']},
    {name: 'control-panel-all-valves-open', capture: 'control-panel-all-open', replaces: 'gui-control-panel-all-valves-open', sections: ['4.8']},
    {name: 'control-panel-single-valve', capture: 'control-panel-single-valve', replaces: 'gui-control-panel-single-valve', sections: ['4.8']},
    {name: 'home-start', capture: 'home-online', replaces: 'gui-home-auto-mode-start', sections: ['5.1.1'],
      highlights: [rect(homeStart)]},
    {name: 'plot-start', capture: 'plot-start', replaces: 'gui-auto-mode-plot-start', sections: ['5.1.1'],
      highlights: [rect(named('plot-start', 'actionBarButton3'))]},
    {name: 'protocol-selection', capture: 'wizard-protocol-selected', replaces: 'gui-protocol-selection', sections: ['5.1.1'],
      highlights: [rect(container('wizard-protocol-selected', protocolText, {minWidth: 600})), rect(rightmost('wizard-protocol-selected'))]},
    {name: 'interval-settings', capture: 'wizard-interval', replaces: 'gui-interval-settings', sections: ['5.1.1'],
      highlights: [rect(rightmost('wizard-interval'))]},
    {name: 'plot-lines', capture: 'plot-lines', replaces: 'gui-auto-mode-plot-lines', sections: ['5.1.2'],
      highlights: [rect(container('plot-lines', span, {maxHeight: 50}))]},
    {name: 'display-settings', capture: 'display-settings', replaces: 'gui-display-settings', sections: ['5.1.2'],
      highlights: [rect(named('display-settings', 'actionBarButton0'))]},
    {name: 'online-results', capture: 'results-list', replaces: 'gui-auto-mode-results', sections: ['5.1.2']},
    {name: 'result-details', capture: 'result-details', replaces: 'gui-result-details', sections: ['5.1.2']},
    {name: 'filter-results', capture: 'filter-results', replaces: 'gui-filter-results', sections: ['5.1.2']},
    {name: 'filter-by-line-button', capture: 'filter-results', replaces: 'gui-filter-by-line-button', sections: ['5.1.2'],
      highlights: [rect(named('filter-results', 'actionBarButton1'))]},
    {name: 'select-line', capture: 'select-line', replaces: 'gui-select-sample-line', sections: ['5.1.2'],
      highlights: [rect(lineRow), rect(confirm)]},
    {name: 'plot-filtered', capture: 'plot-filtered', replaces: 'gui-auto-mode-plot-filtered', sections: ['5.1.2']},
    {name: 'results-filtered', capture: 'results-filtered', replaces: 'gui-auto-mode-results-filtered', sections: ['5.1.2']},
    {name: 'alarm-sample-line', capture: 'alarm-line', replaces: 'gui-alarm-configuration', sections: ['5.1.3'],
      highlights: [pad(union(rect(lineCheck), rect(lineInput)), 3)]},
    {name: 'assign-events-process-running', capture: 'digital-outputs', replaces: 'gui-assign-events-to-outputs', sections: ['5.2.3'],
      highlights: [pad(rect(container('digital-outputs', running, {minWidth: 600})), 1)]},
    {name: 'digital-inputs-line', capture: 'digital-inputs-line', replaces: 'gui-digital-inputs-line', sections: ['5.2.3'],
      highlights: [rect(field('digital-inputs-line', 'Line #1'))]},
    {name: 'digital-inputs-scheduler', capture: 'digital-inputs-scheduler', replaces: 'gui-digital-inputs-scheduler', sections: ['5.2.3'],
      highlights: [pad(rect(schedulerCheck), 3), rect(field('digital-inputs-scheduler', '30 Minute'))]},
    {name: 'digital-input-source-button', capture: 'digital-inputs-line', replaces: 'gui-digital-input-source-button', sections: ['5.2.4'],
      highlights: [rect(named('digital-inputs-line', 'actionBarButton1'))]},
    {name: 'digital-input-source-modbus', capture: 'digital-input-source', replaces: 'gui-digital-input-source-modbus', sections: ['5.2.4'],
      highlights: [rect(container('digital-input-source', modbus, {maxHeight: 60})), rect(named('digital-input-source', 'actionBarButton0'))]},
  ];
}

// Web: online-mode results filtered by name, Name and line-ID column headers framed.
export function bactoswitchWebLayout(locale, evidence) {
  const record = evidence.locales[locale];
  if (!record?.columns?.name || !record.columns.streamId) throw new Error(`${locale}: missing web capture evidence.`);
  const local = box => [box.x - record.panel.x, box.y - record.panel.y, box.width, box.height];
  return {name: 'web-online-results', replaces: 'web-auto-mode-results', sections: ['5.2.2'],
    captureSize: [Math.round(record.panel.width), Math.floor(record.panel.height)],
    highlights: [pad(local(record.columns.name), -2), pad(local(record.columns.streamId), -2)]};
}
