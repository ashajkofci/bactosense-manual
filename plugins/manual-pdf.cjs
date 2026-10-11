const { mkdir, writeFile, readdir, rm } = require('node:fs/promises');
const path = require('node:path');

module.exports = function manualPdfPlugin(context) {
  let chapters;

  return {
    name: 'manual-pdf',
    allContentLoaded({ allContent }) {
      const version = allContent['docusaurus-plugin-content-docs']?.default?.loadedVersions
        .find((item) => item.versionName === 'current');
      if (!version?.sidebars.manual) throw new Error('PDF compilation requires the current manual sidebar.');
      const docs = new Map(version.docs.map((doc) => [doc.id, doc]));
      const ids = [];
      function collect(items) {
        for (const item of items) {
          if (item.type === 'category') collect(item.items);
          else if (item.type === 'doc') ids.push(item.id);
        }
      }
      collect(version.sidebars.manual);
      if (new Set(ids).size !== ids.length || ids.length !== docs.size) {
        throw new Error('Every published manual chapter must appear exactly once in the PDF sidebar order.');
      }
      chapters = ids.map((id) => {
        const doc = docs.get(id);
        if (!doc) throw new Error(`PDF chapter ${id} is missing.`);
        return { id, title: doc.title, permalink: doc.permalink };
      });

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
