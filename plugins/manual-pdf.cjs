const { mkdir, writeFile, readdir, rm } = require('node:fs/promises');
const path = require('node:path');
const { manuals, pdfFile, pdfManuals } = require('./manuals.cjs');

module.exports = function manualPdfPlugin(context) {
  const locale = context.i18n.currentLocale;
  const editions = manuals.filter(manual => manual.locales.includes(locale));
  const publications = editions.flatMap(manual => pdfManuals(manual, locale));
  const chapters = new Map();

  return {
    name: 'manual-pdf',
    allContentLoaded({ allContent }) {
      for (const manual of editions) {
        const inventory = require('./manual-chapters.cjs')(allContent, manual.docsPluginId);
        for (const publication of pdfManuals(manual, locale)) {
          const selected = publication.chapterId ? inventory.filter(chapter => chapter.id === publication.chapterId) : inventory;
          if (!selected.length) throw new Error(`Missing PDF chapter for ${publication.id}.`);
          chapters.set(publication.id, selected);
        }
      }
    },
    async postBuild({ outDir, baseUrl, siteConfig }) {
      // Development keeps every manual and language in static/pdf; publish only this language's editions here.
      const pdfDirectory = path.join(outDir, 'pdf');
      const downloads = await readdir(pdfDirectory).catch(error => {
        if (error.code === 'ENOENT') return [];
        throw error;
      });
      const expected = new Set(publications.map(manual => pdfFile(manual, locale)));
      if (expected.size !== publications.length) throw new Error('PDF document IDs and titles must produce unique filenames.');
      for (const file of downloads) {
        if (/\.pdf$/i.test(file) && !expected.has(file)) {
          await rm(path.join(pdfDirectory, file));
        }
      }
      const { compileManualPdf } = await import('../scripts/compile-pdf.mjs');
      for (const manual of publications) {
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
