import { memo, ReactNode } from 'react';
import styles from './blockquote.module.scss';

type BlockquoteProps = {
  children: ReactNode;
};

export const Blockquote = memo(({ children }: BlockquoteProps) => (
  <blockquote className={styles.blockquote}>{children}</blockquote>
));
