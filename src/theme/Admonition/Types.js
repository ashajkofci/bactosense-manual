import React from 'react';
import Translate from '@docusaurus/Translate';
import AdmonitionTypes from '@theme-original/Admonition/Types';
import ElectricalSymbol from '@site/static/img/safety/electrical.svg';
import ExplosionSymbol from '@site/static/img/safety/explosion.svg';
import WarningSymbol from '@site/static/img/safety/warning.svg';
import GlovesSymbol from '@site/static/img/safety/gloves.svg';
import InformationSymbol from '@site/static/img/safety/information.svg';
import registry from '@site/maintenance/safety-symbols.json';

const symbols = {
  electrical: ElectricalSymbol,
  explosion: ExplosionSymbol,
  warning: WarningSymbol,
  gloves: GlovesSymbol,
  information: InformationSymbol,
};
const titles = {
  explosion: <Translate id="theme.admonition.explosion">Explosion hazard</Translate>,
  gloves: <Translate id="theme.admonition.gloves">Protective gloves</Translate>,
};

// Keep Docusaurus layout, severity colors and localized headings for each symbol.
const safetyTypes = Object.fromEntries(Object.entries(registry.admonitions).map(([type, entry]) => {
  const NativeAdmonition = AdmonitionTypes[entry.baseType];
  const Symbol = symbols[entry.symbol];
  function SafetyAdmonition(props) {
    return (
      <NativeAdmonition
        {...props}
        title={props.title ?? titles[type] ?? <Translate id={`theme.admonition.${type}`}>{type}</Translate>}
        icon={props.icon ?? <Symbol className="manual-safety-symbol" aria-hidden="true" focusable="false" />}
      />
    );
  }
  return [type, SafetyAdmonition];
}));

export default { ...AdmonitionTypes, ...safetyTypes };
