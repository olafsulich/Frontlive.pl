import { memo, ReactNode } from 'react';
import styles from './layout.module.scss';

type LayoutProps = {
  readonly children: ReactNode;
};

export const Layout = memo<LayoutProps>(({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
});

Layout.displayName = 'Layout';
