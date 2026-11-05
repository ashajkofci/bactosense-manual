const { manuals } = require('./manuals.cjs');

// Export the manual marked "device" in manuals.json for the instrument GUI.
module.exports = function manualDevicePlugin(context) {
  const manual = manuals.find(item => item.device);
  const locale = context.i18n.currentLocale;
  let chapters;
  return {
    name: 'manual-device',
    allContentLoaded({ allContent }) {
      if (manual?.locales.includes(locale)) chapters = require('./manual-chapters.cjs')(allContent, manual.docsPluginId);
    },
    async postBuild({ outDir, baseUrl, siteConfig }) {
      if (!chapters) return;
      const { exportDeviceManual } = await import('../scripts/export-device-manual.mjs');
      await exportDeviceManual({
        root: context.siteDir, outDir, baseUrl, siteUrl: siteConfig.url, chapters,
        manualVersion: manual.version,
        documentId: manual.documentId,
        softwareVersion: manual.softwareVersion,
        locale,
        languageLabel: context.i18n.localeConfigs[locale].label,
        ...(process.env.MANUAL_DEVICE_EXPORT_DIR ? { bundleDir: process.env.MANUAL_DEVICE_EXPORT_DIR } : {}),
      });
    },
  };
};
