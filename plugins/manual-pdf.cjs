const { mkdir, writeFile, readdir, rm } = require('node:fs/promises');
const path = require('node:path');

module.exports = function manualPdfPlugin(context) {
  let chapters;

  return {
    name: 'manual-pdf',
    allContentLoaded({ allContent }) {
      chapters = require('./manual-chapters.cjs')(allContent);
    },
    async postBuild({ outDir, baseUrl, siteConfig }) {
      const locale = context.i18n.currentLocale;
      // Development keeps every language in static/pdf; publish only this edition here.
      const pdfDirectory = path.join(outDir, 'pdf');
      const downloads = await readdir(pdfDirectory).catch(error => {
        if (error.code === 'ENOENT') return [];
        throw error;
      });
      for (const file of downloads) {
        if (/^bactosense-manual-(en|de|fr|it|es)\.pdf$/.test(file) && file !== `bactosense-manual-${locale}.pdf`) {
          await rm(path.join(pdfDirectory, file));
        }
      }
      const manifest = {
        locale,
        manualVersion: require('../package.json').version,
        documentId: 'UM-0006',
        softwareVersion: '3.2.0',
        htmlLang: context.i18n.localeConfigs[locale].htmlLang,
        languageLabel: context.i18n.localeConfigs[locale].label,
        baseUrl,
        siteUrl: siteConfig.url,
        outDir: path.relative(context.siteDir, outDir),
        chapters,
      };
      const evidenceDir = path.join(context.siteDir, 'output/pdf', locale);
      await mkdir(evidenceDir, { recursive: true });
      await writeFile(path.join(evidenceDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
      const { compileManualPdf } = await import('../scripts/compile-pdf.mjs');
      await compileManualPdf(context.siteDir, manifest);
    },
  };
};
