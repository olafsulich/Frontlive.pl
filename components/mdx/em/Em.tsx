import { memo, ReactNode } from 'react';
import styles from './em.module.scss';

type EmProps = {
  children: ReactNode;
};

export const Em = memo(({ children }: EmProps) => <em className={styles.em}>{children}</em>);
