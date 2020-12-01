import { memo, ReactNode } from 'react';
import styles from './paragraph.module.scss';

type ParagraphProps = {
  children: ReactNode;
};

export const Paragraph = memo(({ children }: ParagraphProps) => (
  <p className={styles.paragraph}>{children}</p>
));
