import { memo, ReactNode } from 'react';
import styles from './ul.module.scss';

type UlProps = {
  children: ReactNode;
};

const Ul = memo(({ children }: UlProps) => {
  return <ul className={styles.list}>{children}</ul>;
});

export default Ul;
