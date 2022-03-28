import Logo from '../../../public/icons/logo-line.svg';
import styles from './navigation.module.scss';
import { Command } from '../../command/command';
import cn from 'classnames';
import { useState, useCallback } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setOpen((prevIsOpen) => {
      if (typeof window !== 'undefined') {
        if (!prevIsOpen) {
          document.documentElement.style.overflow = 'hidden';
        } else {
          document.documentElement.style.overflow = 'visible';
        }
      }

      return !prevIsOpen;
    });
  }, []);

  return (
    <nav aria-label="Główna nawigacja" className={styles.wrapper}>
      <div className={styles.terminal}>
        <a href="/" className={styles.logo}>
          <span className="visually-hidden">Strona główna</span>
          <Logo aria-hidden="true" />
        </a>
        <div className={styles.searchCommand}>
          <Command />
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.buttonCommand}>
          <Command />
        </div>
        <button
          aria-haspopup="true"
          aria-controls="navigation-list"
          aria-expanded={open}
          onClick={toggleMenu}
          className={cn(styles.hamburger, { [styles.hamburgerOpen]: open })}
        >
          <span className="visually-hidden">{open ? 'Zamknij' : 'Otwórz'} menu nawigacyjne</span>
        </button>
      </div>
      <ul id="navigation-list" className={cn(styles.list, { [styles.listActive]: open })}>
        <li className={styles.item}>Artykuły</li>
        <li className={styles.item}>Społeczność</li>
        <li className={styles.item}>Newsletter</li>
        <li className={styles.item}>O mnie</li>
      </ul>
    </nav>
  );
};
