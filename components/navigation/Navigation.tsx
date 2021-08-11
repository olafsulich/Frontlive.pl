import styles from './navigation.module.scss';
import { Logo } from './logo/Logo';
import { LinksList } from './linksList/LinksList';
import { HamburgerButton } from './hamburgerButton/HumburgerButton';
import { SkipLink } from './skipLink/SkipLink';
import Wave from '../../public/icons/wave-line.svg';

export const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <SkipLink />
      <Logo />
      <LinksList />
      <Wave className={styles.wave} />
      <HamburgerButton />
    </nav>
  );
};
