import React from 'react';
import { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function PdfDownload({ mobile = false }) {
  const { i18n } = useDocusaurusContext();
  const filename = `bactosense-manual-${i18n.currentLocale}.pdf`;
  const href = useBaseUrl(`pdf/${filename}`);
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
