import { ReactNode, memo } from 'react';
import { Hero } from './hero/Hero';
import styles from './header.module.scss';

type HeaderProps = {
  children: ReactNode;
};

export const Header = memo<HeaderProps>(({ children }) => {
  return (
    <header className={styles.wrapper}>
      {children}
      <Hero />
    </header>
  );
});

Header.displayName = 'Header';
