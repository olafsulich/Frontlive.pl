import { ReactNode, memo } from 'react';
import { Hero } from './hero/Hero';
import styles from './header.module.scss';
import { Navigation } from '../navigation/Navigation';

type HeaderProps = {
  children: ReactNode;
};

export const Header = memo(({ children }) => {
  return (
    <header className={styles.wrapper}>
      {children}
      <Hero />
    </header>
  );
});

Header.displayName = 'Header';
