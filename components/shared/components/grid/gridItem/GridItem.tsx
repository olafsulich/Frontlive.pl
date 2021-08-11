import type { ReactNode } from 'react';
import styles from './gridItem.module.scss';

type GridItemProps = {
  children: ReactNode;
  tag?: 'section' | 'div' | 'article';
};

export const GridItem = ({ children, tag: Tag = 'section' }: GridItemProps) => {
  return <Tag className={styles.gridItem}>{children}</Tag>;
};
