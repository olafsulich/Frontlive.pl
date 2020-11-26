import { memo, ReactNode } from 'react';
import styles from './code.module.scss';

type CodeProps = {
  children: ReactNode;
};

const Code = memo(({ children }: CodeProps) => {
  return <code className={styles.code}>{children}</code>;
});

export default Code;
