import { memo, ReactNode } from 'react';
import styles from './paragraph.module.scss';

type ParagraphProps = {
  children: ReactNode;
};

const Paragraph = memo(({ children }: ParagraphProps) => {
  return <p className={styles.paragraph}>{children}</p>;
});

export default Paragraph;
