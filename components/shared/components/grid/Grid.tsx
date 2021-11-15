import type { ReactNode } from 'react';
import styles from './grid.module.scss';
import { GridItem } from './gridItem/GridItem';

type GridProps = {
  children: ReactNode;
};

export const Grid = ({ children }: GridProps) => {
  return <div className={styles.grid}>{children}</div>;
};

Grid.Item = GridItem;
