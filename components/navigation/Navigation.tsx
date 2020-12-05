import styles from './navigation.module.scss';
import { Logo } from './logo/Logo';
import { LinksList } from './linksList/LinksList';
import { HamburgerButton } from './hamburgerButton/HumburgerButton';
import { SkipLink } from './skipLink/SkipLink';

export const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <SkipLink />
      <Logo />
      <LinksList />
      <HamburgerButton />
    </nav>
  );
};
