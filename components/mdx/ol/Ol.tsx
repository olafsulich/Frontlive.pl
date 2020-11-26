import { memo, ReactNode } from 'react';
import styles from './ol.module.scss';

type olProps = {
  children: ReactNode;
};

const Ol = memo(({ children }: olProps) => {
  return <ol className={styles.list}>{children}</ol>;
});

export default Ol;
