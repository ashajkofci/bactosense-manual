/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'BactoSense Manual',
  tagline: 'Rapid Bacterial Monitoring Systems',
  url: process.env.MANUAL_SITE_URL || 'https://manual.bnovate.net',
  baseUrl: process.env.MANUAL_BASE_PATH || '/',
  trailingSlash: true,
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'throw',
  markdown: { hooks: { onBrokenMarkdownLinks: 'throw' } },
  onBrokenAnchors: 'throw',
  i18n: {
    defaultLocale: 'en', locales: ['en', 'de', 'fr', 'it', 'es'],
    localeConfigs: {
      en: { label: 'English', htmlLang: 'en-GB' },
      de: { label: 'Deutsch', htmlLang: 'de-DE' },
      fr: { label: 'Français', htmlLang: 'fr-FR' },
      it: { label: 'Italiano', htmlLang: 'it-IT' },
      es: { label: 'Español', htmlLang: 'es-ES' },
    },
  },
  themes: [[require.resolve('@easyops-cn/docusaurus-search-local'), {
    indexDocs: true, indexBlog: false, indexPages: false,
    docsRouteBasePath: '/', language: ['en', 'de', 'fr', 'it', 'es'], hashed: 'filename',
    docsDir: ['docs', ...['de', 'fr', 'it', 'es'].map(locale => `i18n/${locale}/docusaurus-plugin-content-docs/current`)],
    explicitSearchResultPath: true, searchResultContextMaxLength: 160,
  }]],
  plugins: [require.resolve('./plugins/manual-pdf.cjs')],
  presets: [['classic', {
    docs: { routeBasePath: '/', sidebarPath: './sidebars.js', remarkPlugins: [require('./plugins/manual-images.cjs')] },
    blog: false,
    theme: { customCss: './src/css/custom.css' },
  }]],
  themeConfig: {
    colorMode: { defaultMode: 'light', respectPrefersColorScheme: true },
    navbar: {
      title: `BactoSense · ${require('./package.json').version}`,
      items: [
        { type: 'docSidebar', sidebarId: 'manual', label: 'User manual', position: 'left' },
        { type: 'custom-pdfDownload', position: 'right' },
        { type: 'localeDropdown', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [{ title: `BactoSense · ${require('./package.json').version}`, items: [
        { label: 'User manual', to: '/' },
        { label: 'BactoCloud', href: 'https://www.bactocloud.com' },
        { label: 'BactoCloud Manual', href: 'https://manual.bactocloud.com' },
        { label: 'Contact support', href: 'mailto:support@bnovate.com' },
        { label: 'bNovate Technologies', href: 'https://www.bnovate.com' },
      ] }],
      copyright: `© ${new Date().getFullYear()} bNovate Technologies SA`,
    },
    tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
  },
};
