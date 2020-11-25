import { memo, ReactNode } from 'react';
import Header from '../header/Header';
import Footer from 'components/footer/Footer';
import styles from './layout.module.scss';

type LayoutProps = { children: ReactNode };

const Layout = memo<LayoutProps>(({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
});

export default Layout;
