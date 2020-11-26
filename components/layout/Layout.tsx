import { memo, ReactNode } from 'react';
import Header from '../header/Header';
import Footer from 'components/footer/Footer';
import styles from './layout.module.scss';
import { HeaderProvider } from 'components/shared/context/HeaderContext';

type LayoutProps = { children: ReactNode };

const Layout = memo<LayoutProps>(({ children }) => {
  return (
    <HeaderProvider>
      <div className={styles.wrapper}>{children}</div>
    </HeaderProvider>
  );
});

export default Layout;
