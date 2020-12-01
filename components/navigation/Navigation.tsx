import styles from './navigation.module.scss';
import { Logo } from './logo/Logo';
import { LinksList } from './linksList/LinksList';
import { HamburgerButton } from './hamburgerButton/HumburgerButton';

export const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <Logo />
      <LinksList />
      <HamburgerButton />
    </nav>
  );
};
