import { memo } from 'react';
import styles from './image.module.scss';

type ImageProps = {
  readonly src: string;
  readonly alt: string;
  readonly width?: string | number;
  readonly height?: string | number;
};

const EXTERNAL_IMAGE_PATTERN = /\http/;

export const Image = memo(({ src, alt, width = '100%', height }: ImageProps) => {
  return (
    <div className={styles.wrapper}>
      {EXTERNAL_IMAGE_PATTERN.test(src) ? (
        <img
          className={styles.image}
          src={src}
          alt={alt}
          //   width={width || 1000}
          //   height={height || 562.5}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <img
          className={styles.image}
          src={src}
          alt={alt}
          width={width}
          height={height}
          //   quality={100}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
});

Image.displayName = 'Image';
