import { memo } from 'react';
import styles from './image.module.scss';

type ImageProps = {
  src: string;
  alt: string;
};

const EXTERNAL_IMAGE_PATTERN = /\http/;

export const Image = memo(({ src, alt }: ImageProps) => {
  return (
    <>
      {EXTERNAL_IMAGE_PATTERN.test(src) ? (
        <img className={styles.image} src={src} alt={alt} />
      ) : (
        <picture className={styles.wrapper}>
          <source
            className={styles.image}
            srcSet={require(`../../../public${src}?webp`)}
            type="image/webp"
          />
          <img className={styles.image} src={require(`../../../public${src}`)} alt={alt} />
        </picture>
      )}
    </>
  );
});
