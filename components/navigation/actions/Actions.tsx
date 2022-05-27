import React from 'react';
import Link from 'next/link';
import SearchIcon from '../../../public/icons/search.svg';
import MailIcon from '../../../public/icons/mail.svg';
import styles from './actions.module.scss';
import { Kbar } from '../kbar/Kbar';
import { useKBar, VisualState } from 'kbar';

export const Actions = () => {
  const { query, showing } = useKBar((state) => ({
    visualState: state.visualState,
    showing: state.visualState !== VisualState.hidden,
  }));

  const showNavigationActionsMenu = () => {
    document.documentElement.style.overflowY = 'hidden';
    query.setVisualState(VisualState.animatingIn);
  };

  return (
    <div className={styles.wrapper}>
      {showing && <div className={styles.backdrop}></div>}
      <Link href="/newsletter">
        <a className={styles.newsletter}>Newsletter</a>
      </Link>
      <Kbar />
      <button
        onClick={showNavigationActionsMenu}
        aria-controls="kbar-navigation"
        className={styles.search}
      >
        <SearchIcon />
        <span className="visually-hidden">Szukaj</span>
      </button>
      <Link href="mailto:olafsulich@gmail.com">
        <a className={styles.mail}>
          <MailIcon />
          <span className="visually-hidden">Napisz</span>
        </a>
      </Link>
    </div>
  );
};
