import { memo, ReactNode } from 'react';
import styles from './pre.module.scss';

type PreProps = {
  children: ReactNode;
};

const Pre = memo(({ children }: PreProps) => {
  return <pre className={styles.pre}>{children}</pre>;
});

export default Pre;
