import { memo } from 'react';
import styles from './image.module.scss';

type ImageProps = {
  readonly src: string;
  readonly alt: string;
};

const EXTERNAL_IMAGE_PATTERN = /\http/;

export const Image = memo(({ src, alt }: ImageProps) => {
  return (
    <>
      <img className={styles.image} src={src} alt={alt} loading="lazy" />
    </>
  );
});

Image.displayName = 'Image';
