import { ReactNode, memo } from 'react';
import { Hero } from './hero/Hero';
import styles from './header.module.scss';
import Wave from '../../public/icons/wave-1.svg';
import { Navigation } from '../navigation/Navigation';

type HeaderProps = {
  children: ReactNode;
};

export const Header = memo(({ children }) => {
  return (
    <header className={styles.wrapper}>
      <Wave className={styles.wave} />
      {children}
      <Hero />
    </header>
  );
});

Header.displayName = 'Header';
