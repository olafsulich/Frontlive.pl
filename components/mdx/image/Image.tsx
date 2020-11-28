import { memo } from 'react';
import styles from './image.module.scss';

type ImageProps = {
  src: string;
  alt: string;
};

const Image = memo(({ src, alt }: ImageProps) => {
  return <img className={styles.image} src={src} alt={alt} />;
});

export default Image;
