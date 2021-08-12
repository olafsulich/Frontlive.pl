import type { ReactNode } from 'react';
import styles from './grid.module.scss';
import { GridItem } from './gridItem/GridItem';

type GridProps = {
  children: ReactNode;
};

export const Grid = ({ children }: GridProps) => {
  return <main className={styles.grid}>{children}</main>;
};

Grid.Item = GridItem;
