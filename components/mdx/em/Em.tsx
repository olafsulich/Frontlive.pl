import { memo, ReactNode } from 'react';
import styles from './em.module.scss';

type EmProps = {
  children: ReactNode;
};

const Em = memo(({ children }: EmProps) => {
  return <em className={styles.em}>{children}</em>;
});

export default Em;
