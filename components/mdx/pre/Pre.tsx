import { memo, ReactNode } from 'react';
import styles from './pre.module.scss';

type PreProps = {
  children: ReactNode;
};

export const Pre = memo(({ children }: PreProps) => <pre className={styles.pre}>{children}</pre>);
