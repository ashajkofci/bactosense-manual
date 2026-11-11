const { manuals, principal, sourceLocale, contentDirectory, pdfDownloads } = require('./plugins/manuals.cjs');

const locales = ['en', 'de', 'fr', 'it', 'es'];
const manualIds = manuals.map(manual => manual.id);
const deviceOnly = process.env.MANUAL_DEVICE_ONLY === '1';
// The instrument GUI export needs only its own manual; the website builds every manual.
const published = deviceOnly ? manuals.filter(manual => manual.device) : manuals;

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'bNovate Manuals',
  tagline: 'Product documentation from bNovate Technologies',
  url: process.env.MANUAL_SITE_URL || 'https://manual.bnovate.net',
  baseUrl: process.env.MANUAL_BASE_PATH || '/',
  trailingSlash: true,
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'throw',
  markdown: { hooks: { onBrokenMarkdownLinks: 'throw' } },
  onBrokenAnchors: 'throw',
  i18n: {
    defaultLocale: sourceLocale, locales,
    localeConfigs: {
      en: { label: 'English', htmlLang: 'en-GB' },
      de: { label: 'Deutsch', htmlLang: 'de-DE' },
      fr: { label: 'Français', htmlLang: 'fr-FR' },
      it: { label: 'Italiano', htmlLang: 'it-IT' },
      es: { label: 'Español', htmlLang: 'es-ES' },
    },
  },
  customFields: {
    // Read by the home page and the PDF download button.
    manuals: published.map(manual => ({
      id: manual.id, title: manual.title, image: manual.image, docsPluginId: manual.docsPluginId, locales: manual.locales,
      ...pdfDownloads(manual),
    })),
  },
  themes: [[require.resolve('@easyops-cn/docusaurus-search-local'), {
    indexDocs: true, indexBlog: false, indexPages: false,
    docsRouteBasePath: published.map(manual => manual.id), language: locales, hashed: 'filename',
    docsDir: published.flatMap(manual => manual.locales.map(locale => contentDirectory(manual, locale))),
    // With several manuals, search the manual being read; the home page searches every manual.
    ...(published.length > 1 ? {
      searchContextByPaths: published.map(manual => ({ label: manual.title, path: manual.id })),
      useAllContextsWithNoSearchContext: true,
    } : {}),
    explicitSearchResultPath: true, searchResultContextMaxLength: 160,
  }]],
  plugins: [
    ...published.map(manual => ['@docusaurus/plugin-content-docs', {
      id: manual.docsPluginId,
      path: manual.path,
      routeBasePath: manual.id,
      sidebarPath: manual.sidebarPath || './sidebars.js',
      admonitions: { keywords: ['explosion', 'gloves'], extendDefaults: true },
      // Runs before Docusaurus resolves .md links to locale-prefixed permalinks.
      beforeDefaultRemarkPlugins: [[require('./plugins/manual-links.cjs'), {
        manualId: manual.id, manualIds,
        ...(deviceOnly ? {
          externalManualIds: manuals.filter(item => !item.device).map(item => item.id),
          websiteUrl: new URL(process.env.MANUAL_BASE_PATH || '/', process.env.MANUAL_SITE_URL || 'https://manual.bnovate.net').href,
        } : {}),
      }]],
      remarkPlugins: [require('./plugins/manual-images.cjs'), require('./plugins/manual-table-notices.cjs')],
      rehypePlugins: [require('./plugins/manual-tables.cjs')],
    }]),
    ...(deviceOnly ? [] : [require.resolve('./plugins/manual-pdf.cjs')]),
    require.resolve('./plugins/manual-device.cjs'),
    // The principal manual was served at the site root before bNovate Manuals:
    // keep its former chapter URLs (/installation/, /de/installation/, …) working.
    ['@docusaurus/plugin-client-redirects', {
      createRedirects(existingPath) {
        const prefix = `/${principal.id}/`;
        if (existingPath.startsWith(prefix) && existingPath !== prefix) return [existingPath.slice(principal.id.length + 1)];
        return undefined;
      },
    }],
  ],
  presets: [['classic', {
    docs: false,
    blog: false,
    theme: { customCss: './src/css/custom.css' },
  }]],
  themeConfig: {
    colorMode: { defaultMode: 'light', respectPrefersColorScheme: true },
    navbar: {
      title: 'bNovate Manuals',
      items: [
        ...published.map(manual => ({ type: 'docSidebar', sidebarId: 'manual', docsPluginId: manual.docsPluginId, label: manual.title, position: 'left' })),
        { type: 'custom-pdfDownload', position: 'right' },
        { type: 'localeDropdown', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Manuals', items: [
          ...published.map(manual => ({ label: manual.title, to: `/${manual.id}/` })),
          { label: 'BactoCloud Manual', href: 'https://manual.bactocloud.com' },
        ] },
        { title: 'bNovate', items: [
          { label: 'BactoCloud', href: 'https://www.bactocloud.com' },
          { label: 'Contact support', href: 'mailto:support@bnovate.com' },
          { label: 'bNovate Technologies', href: 'https://www.bnovate.com' },
        ] },
      ],
      copyright: `© ${new Date().getFullYear()} bNovate Technologies SA`,
    },
    tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
  },
};
