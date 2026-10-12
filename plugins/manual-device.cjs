module.exports = function manualDevicePlugin(context) {
  let chapters;
  return {
    name: 'manual-device',
    allContentLoaded({ allContent }) {
      chapters = require('./manual-chapters.cjs')(allContent);
    },
    async postBuild({ outDir, baseUrl, siteConfig }) {
      const { exportDeviceManual } = await import('../scripts/export-device-manual.mjs');
      await exportDeviceManual({
        root: context.siteDir, outDir, baseUrl, siteUrl: siteConfig.url, chapters,
        manualVersion: require('../package.json').version,
        locale: context.i18n.currentLocale,
        languageLabel: context.i18n.localeConfigs[context.i18n.currentLocale].label,
        ...(process.env.MANUAL_DEVICE_EXPORT_DIR ? { bundleDir: process.env.MANUAL_DEVICE_EXPORT_DIR } : {}),
      });
    },
  };
};
