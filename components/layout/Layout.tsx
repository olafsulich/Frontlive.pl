import { memo, ReactNode } from 'react';
import Header from '../header/Header';
import styles from './layout.module.scss';

type LayoutProps = { children: ReactNode };

const Layout = memo<LayoutProps>(({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
    </div>
  );
});

export default Layout;
