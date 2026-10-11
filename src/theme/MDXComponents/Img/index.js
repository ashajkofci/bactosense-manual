import React from 'react';
import OriginalImage from '@theme-original/MDXComponents/Img';
import { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ManualImage(props) {
  // Standard Markdown image titles can carry optional sizing without JSX in docs.
  if (typeof props.title === 'string' && /^width=\d+(?: (?:height=\d+|class=[\w-]+))*$/.test(props.title)) {
    const { title, ...imageProps } = props;
    for (const token of title.split(' ')) {
      const [key, value] = token.split('=');
      imageProps[key === 'class' ? 'className' : key] = value;
    }
    props = imageProps;
  }
  const src = useBaseUrl(typeof props.src === 'string' ? props.src : '');
  const isIcon = props.className?.includes('manual-icon') || (props.width && Number(props.width) <= 64);
  if (typeof props.src !== 'string') return <OriginalImage {...props} />;
  if (isIcon) return <OriginalImage {...props} src={src} className={[props.className, props.className?.includes('manual-icon') ? '' : 'manual-icon'].filter(Boolean).join(' ')} />;
  return (
    <a className="manual-screenshot" href={src} target="_blank" rel="noopener noreferrer" title={translate({ id: 'manual.image.open', message: 'Open image at full size' })}>
      <OriginalImage loading="lazy" {...props} src={src} />
    </a>
  );
}
