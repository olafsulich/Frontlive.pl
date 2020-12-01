import { memo } from 'react';
import styles from './image.module.scss';

type ImageProps = {
  src: string;
  alt: string;
};

export const Image = memo(({ src, alt }: ImageProps) => (
  <img className={styles.image} src={src} alt={alt} />
));
