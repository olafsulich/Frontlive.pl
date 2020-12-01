import { memo, ReactNode } from 'react';
import styles from './ul.module.scss';

type UlProps = {
  children: ReactNode;
};

export const Ul = memo(({ children }: UlProps) => <ul className={styles.list}>{children}</ul>);
