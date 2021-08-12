import { memo, ReactNode } from 'react';
import styles from './layout.module.scss';
import { Footer } from '../footer/Footer';
import { Author } from '../autor/Autor';
import { Community } from '../community/Community';

type LayoutProps = {
  readonly children: ReactNode;
};

export const Layout = memo<LayoutProps>(({ children }) => {
  return (
    <>
      <div className={styles.wrapper}>
        {children}
        <Author />
        <Community />
      </div>
      <Footer />
    </>
  );
});

Layout.displayName = 'Layout';
