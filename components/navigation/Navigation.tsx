import styles from './navigation.module.scss';
import { Logo } from './logo/Logo';
import { LinksList } from './linksList/LinksList';
import { HamburgerButton } from './hamburgerButton/HumburgerButton';
import { SkipLink } from './skipLink/SkipLink';
import WaveLine from '../../public/icons/wave-line.svg';
import Wave from '../../public/icons/wave-3.svg';

export const Navigation = ({ withWaveLine }: { withWaveLine?: boolean }) => {
  return (
    <nav className={styles.wrapper}>
      <Wave className={styles.wave} />
      <SkipLink />
      <Logo />
      <LinksList />
      <WaveLine className={styles.waveLine} />
      <HamburgerButton />
    </nav>
  );
};
