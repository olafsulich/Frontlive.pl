import { memo, ReactNode } from 'react';
import styles from './pre.module.scss';

type PreProps = {
  children: ReactNode;
};

const Pre = memo(({ children }: PreProps) => {
  return <pre tabIndex={0} className={styles.pre}>{children}</pre>;
});

export default Pre;
