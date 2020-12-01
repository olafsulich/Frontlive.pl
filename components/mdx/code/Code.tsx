import { memo, ReactNode } from 'react';
import styles from './code.module.scss';

type CodeProps = {
  children: ReactNode;
};

export const Code = memo(({ children }: CodeProps) => (
  <code className={styles.code}>{children}</code>
));
