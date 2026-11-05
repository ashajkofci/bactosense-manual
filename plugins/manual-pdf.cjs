const { mkdir, writeFile, readdir, rm } = require('node:fs/promises');
const path = require('node:path');
const { manuals, pdfFile } = require('./manuals.cjs');

module.exports = function manualPdfPlugin(context) {
  const locale = context.i18n.currentLocale;
  const editions = manuals.filter(manual => manual.locales.includes(locale));
  const chapters = new Map();

  return {
    name: 'manual-pdf',
    allContentLoaded({ allContent }) {
      for (const manual of editions) chapters.set(manual.id, require('./manual-chapters.cjs')(allContent, manual.docsPluginId));
    },
    async postBuild({ outDir, baseUrl, siteConfig }) {
      // Development keeps every manual and language in static/pdf; publish only this language's editions here.
      const pdfDirectory = path.join(outDir, 'pdf');
      const downloads = await readdir(pdfDirectory).catch(error => {
        if (error.code === 'ENOENT') return [];
        throw error;
      });
      const expected = new Set(editions.map(manual => pdfFile(manual, locale)));
      for (const file of downloads) {
        if (/^[a-z][a-z0-9-]*-manual-[a-z]{2}\.pdf$/.test(file) && !expected.has(file)) {
          await rm(path.join(pdfDirectory, file));
        }
      }
      const { compileManualPdf } = await import('../scripts/compile-pdf.mjs');
      for (const manual of editions) {
        const manifest = {
          manual: manual.id,
          title: manual.title,
          logo: manual.logo,
          locale,
          manualVersion: manual.version,
          documentId: manual.documentId,
          softwareVersion: manual.softwareVersion,
          htmlLang: context.i18n.localeConfigs[locale].htmlLang,
          languageLabel: context.i18n.localeConfigs[locale].label,
          baseUrl,
          siteUrl: siteConfig.url,
          outDir: path.relative(context.siteDir, outDir),
          chapters: chapters.get(manual.id),
        };
        const evidenceDir = path.join(context.siteDir, 'output/pdf', manual.id, locale);
        await mkdir(evidenceDir, { recursive: true });
        await writeFile(path.join(evidenceDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
        await compileManualPdf(context.siteDir, manifest);
      }
    },
  };
};
