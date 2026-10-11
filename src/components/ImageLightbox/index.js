import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function ImageLightbox({ src, alt = '', onClose }) {
  const dialogRef = useRef(null);
  const closeLabel = translate({ id: 'manual.image.close', message: 'Close image preview' });

  useEffect(() => {
    const dialog = dialogRef.current;
    const originalOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Mount only after opening, outside the document's paragraphs and tables.
  return createPortal(
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-label={alt || translate({ id: 'manual.image.preview', message: 'Image preview' })}
      onClose={onClose}
      onClick={event => {
        if (event.target === event.currentTarget) dialogRef.current.close();
      }}
      onKeyDown={event => {
        if (event.key === 'Tab') {
          event.preventDefault();
          event.currentTarget.querySelector('button').focus();
        }
      }}
    >
      <button
        type="button"
        className={styles.close}
        aria-label={closeLabel}
        title={closeLabel}
        autoFocus
        onClick={() => dialogRef.current.close()}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      </button>
      <img className={styles.image} src={src} alt={alt} />
    </dialog>,
    document.body,
  );
}
