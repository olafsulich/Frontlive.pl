import { memo, ReactNode } from 'react';
import { Header } from '../header/Header';
import { Footer } from 'components/footer/Footer';
import { HeaderProvider } from 'components/shared/context/HeaderContext';
import styles from './layout.module.scss';

type LayoutProps = { children: ReactNode };

export const Layout = memo<LayoutProps>(({ children }) => {
  return (
    <HeaderProvider>
      <div className={styles.wrapper}>{children}</div>
    </HeaderProvider>
  );
});
