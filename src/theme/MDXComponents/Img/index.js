import React from 'react';
import OriginalImage from '@theme-original/MDXComponents/Img';
import { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ManualImage(props) {
  const src = useBaseUrl(typeof props.src === 'string' ? props.src : '');
  const isIcon = props.className?.includes('manual-icon') || (props.width && Number(props.width) <= 64);
  if (typeof props.src !== 'string') return <OriginalImage {...props} />;
  if (isIcon) return <OriginalImage {...props} src={src} />;
  return (
    <a className="manual-screenshot" href={src} target="_blank" rel="noopener noreferrer" title={translate({ id: 'manual.image.open', message: 'Open image at full size' })}>
      <OriginalImage loading="lazy" {...props} src={src} />
    </a>
  );
}
