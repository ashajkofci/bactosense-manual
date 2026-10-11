module.exports = function manualDevicePlugin(context) {
  let chapters;
  return {
    name: 'manual-device',
    allContentLoaded({ allContent }) {
      if (context.i18n.currentLocale === 'en') chapters = require('./manual-chapters.cjs')(allContent);
    },
    async postBuild({ outDir, baseUrl, siteConfig }) {
      if (context.i18n.currentLocale !== 'en') return;
      const { exportDeviceManual } = await import('../scripts/export-device-manual.mjs');
      await exportDeviceManual({
        root: context.siteDir, outDir, baseUrl, siteUrl: siteConfig.url, chapters,
        manualVersion: require('../package.json').version,
      });
    },
  };
};
