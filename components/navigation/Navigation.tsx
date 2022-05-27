import styles from './navigation.module.scss';
import { Logo } from './logo/Logo';
import { LinksList } from './linksList/LinksList';
import { HamburgerButton } from './hamburgerButton/HumburgerButton';
import { SkipLink } from './skipLink/SkipLink';
import Wave from '../../public/icons/wave-3.svg';
import { Actions } from './actions/Actions';
import { KBarProvider } from 'kbar';
import { clearAllBodyScrollLocks } from 'body-scroll-lock';

export const Navigation = () => {
  return (
    <KBarProvider
      options={{
        enableHistory: true,
        disableDocumentLock: true,
        callbacks: {
          onOpen: () => (document.documentElement.style.overflowY = 'hidden'),
          onClose: () => {
            document.documentElement.style.overflowY = 'unset';
            clearAllBodyScrollLocks();
          },
        },
      }}
    >
      <nav className={styles.wrapper}>
        <Wave className={styles.wave} />
        <SkipLink />
        <div className={styles.links}>
          <Logo />
          <LinksList />
        </div>
        <Actions />
        <HamburgerButton />
      </nav>
    </KBarProvider>
  );
};
