// The locale build owns its translated PDFs. Untranslated chapters download the
// English publication from the source locale, including under a nested base URL.
module.exports = function manualPdfDownload(manual, locale, baseUrl, sourceLocale = 'en', chapterId) {
  const files = manual?.pdfChapters ? manual.pdfChapters[chapterId] : manual?.pdfFiles;
  const edition = files?.[locale] ? locale : sourceLocale;
  const filename = files?.[edition];
  if (!filename) return undefined;
  return {
    filename,
    href: new URL(`${edition === locale ? '' : '../'}pdf/${filename}`, `https://manual.invalid${baseUrl}`).pathname,
  };
};
