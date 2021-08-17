import NextImage from 'next/image';
import { memo } from 'react';
import styles from './image.module.scss';

type ImageProps = {
  readonly src: string;
  readonly alt: string;
};

const EXTERNAL_IMAGE_PATTERN = /\http/;

export const Image = memo(({ src, alt }: ImageProps) => {
  return (
    <div className={styles.wrapper}>
      <NextImage className={styles.image} src={src} alt={alt} width={1000} height={562.5} />
    </div>
  );
});

Image.displayName = 'Image';
