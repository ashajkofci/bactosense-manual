import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function ManualCard({ manual, locale }) {
  const pdf = manual.pdfFiles[locale];
  const pdfHref = useBaseUrl(`pdf/${pdf}`);
  const description = typeof manual.description === 'string'
    ? manual.description : manual.description?.[locale] ?? manual.description?.en;
  return (
    <article className={styles.card}>
      <h2 className={styles.cardTitle}>
        <Link to={`/${manual.id}/`}>{manual.title}</Link>
      </h2>
      {description && <p className={styles.cardDescription}>{description}</p>}
      {!manual.locales.includes(locale) && (
        <p className={styles.cardNote}><Translate id="home.manual.sourceOnly">Available in English</Translate></p>
      )}
      <div className={styles.cardActions}>
        <Link className="button button--primary" to={`/${manual.id}/`}>
          <Translate id="home.manual.open">Open manual</Translate>
        </Link>
        {pdf && (
          <a className="button button--secondary" href={pdfHref} download={pdf} type="application/pdf">
            <Translate id="manual.pdf.download">Download PDF</Translate>
          </a>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  const { siteConfig, i18n } = useDocusaurusContext();
  const tagline = translate({ id: 'home.tagline', message: 'Product documentation from bNovate Technologies' });
  return (
    <Layout title={siteConfig.title} description={tagline}>
      <main className={styles.home}>
        <header className={styles.hero}>
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={styles.tagline}>{tagline}</p>
        </header>
        <section className={styles.grid}>
          {siteConfig.customFields.manuals.map(manual => (
            <ManualCard key={manual.id} manual={manual} locale={i18n.currentLocale} />
          ))}
        </section>
      </main>
    </Layout>
  );
}
