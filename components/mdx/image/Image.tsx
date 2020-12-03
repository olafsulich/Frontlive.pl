import { memo } from 'react';
import styles from './image.module.scss';

type ImageProps = {
  src: string;
  alt: string;
};

export const Image = memo(({ src, alt }: ImageProps) => {
  return (
    <picture className={styles.wrapper}>
      <source
        className={styles.image}
        srcSet={require(`../../../public${src}?webp`)}
        type="image/webp"
      />
      <img className={styles.image} src={require(`../../../public${src}`)} />
    </picture>
  );
});
