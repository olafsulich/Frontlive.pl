import { memo, ReactNode } from 'react';
import styles from './ol.module.scss';

type olProps = {
  children: ReactNode;
};

export const Ol = memo(({ children }: olProps) => <ol className={styles.list}>{children}</ol>);
