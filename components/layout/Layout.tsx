import { memo, ReactNode } from 'react';
import styles from './layout.module.scss';
import { Footer } from '../footer/Footer';
import { Author } from '../autor/Autor';
import { Community } from '../community/Community';
import { School } from '../school/School';
import { Shadows } from '../shadows/Shadows';
import { Post } from '../../types/types';
import { AppProvider } from '../../context/appContext';

type LayoutProps = {
  readonly children: ReactNode;
  readonly isAutor?: boolean;
  readonly withFooter?: boolean;
  readonly posts: Post[];
};

export const Layout = memo<LayoutProps>(
  ({ posts, children, isAutor = true, withFooter = true }) => {
    return (
      <AppProvider posts={posts}>
        {/* <Shadows /> */}
        <div className={styles.wrapper}>
          {children}
          {isAutor && <Author />}
          {/* <School /> */}
          <Community />
        </div>
        {withFooter && <Footer />}
      </AppProvider>
    );
  },
);

Layout.displayName = 'Layout';
