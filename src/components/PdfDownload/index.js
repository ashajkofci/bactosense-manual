import React from 'react';
import { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useActivePlugin } from '@docusaurus/plugin-content-docs/client';

// Download the PDF of the manual being read, in the current language.
export default function PdfDownload({ mobile = false }) {
  const { i18n, siteConfig } = useDocusaurusContext();
  const activePlugin = useActivePlugin({ failfast: false });
  const manual = siteConfig.customFields.manuals.find(item => item.docsPluginId === activePlugin?.pluginId);
  const filename = manual?.pdfFiles[i18n.currentLocale];
  const href = useBaseUrl(`pdf/${filename}`);
  if (!filename) return null;
  return (
    <a
      className={`${mobile ? 'menu__link' : 'navbar__item navbar__link'} manual-pdf-download`}
      href={href}
      download={filename}
      type="application/pdf"
      title={translate({ id: 'manual.pdf.description', message: 'Download the complete manual (PDF)' })}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" />
      </svg>
      {translate({ id: 'manual.pdf.download', message: 'Download PDF' })}
    </a>
  );
}
