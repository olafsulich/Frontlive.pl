import { memo, ReactNode } from 'react';
import styles from './blockquote.module.scss';

type BlockquoteProps = {
  children: ReactNode;
};

const Blockquote = memo(({ children }: BlockquoteProps) => {
  return <blockquote className={styles.blockquote}>{children}</blockquote>;
});

export default Blockquote;
