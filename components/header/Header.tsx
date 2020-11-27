import styles from './header.module.scss';
import Hero from './hero/Hero';
import type { ReactNode } from 'react';

type HeaderProps = { children: ReactNode };

const Header = ({ children }: HeaderProps) => {
  return (
    <header className={styles.wrapper}>
      {children}
      <Hero />
    </header>
  );
};

export default Header;
