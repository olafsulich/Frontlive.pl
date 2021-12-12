import { memo, ReactNode } from 'react';
import styles from './layout.module.scss';
import { Footer } from '../footer/Footer';
import { Author } from '../autor/Autor';
import { Community } from '../community/Community';

type LayoutProps = {
  readonly children: ReactNode;
  readonly isAutor?: boolean;
  readonly withFooter?: boolean;
};

export const Layout = memo<LayoutProps>(({ children, isAutor = true, withFooter = true }) => {
  return (
    <>
      <div className={styles.wrapper}>
        {children}
        {isAutor && <Author />}
        <Community />
      </div>
      {withFooter && <Footer />}
    </>
  );
});

Layout.displayName = 'Layout';
