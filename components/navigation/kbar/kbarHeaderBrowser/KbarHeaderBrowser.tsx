import React from 'react';
import { useKBar, VisualState } from 'kbar';
import ArrowLeft from '../../../../public/icons/arrow-ios-left.svg';
import ArrowRight from '../../../../public/icons/arrow-ios-right.svg';
import CloseIcon from '../../../../public/icons/close.svg';
import styles from './kbarHeaderBrowser.module.scss';

export const KbarHeaderBrowser = () => {
  const { query } = useKBar((state) => ({
    visualState: state.visualState,
    showing: state.visualState !== VisualState.hidden,
  }));

  const hideNavigationActionsMenu = () => {
    document.documentElement.style.overflowY = 'unset';
    query.setVisualState(VisualState.animatingOut);
  };
  return (
    <div className={styles.header}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <button
        className={styles.arrowLeft}
        onClick={() => {
          if (typeof window !== 'undefined') {
            window.history.go(-1);
          }
        }}
      >
        <ArrowLeft />
        <span className="visually-hidden">Cofnij do tyłu</span>
      </button>
      <button
        className={styles.arrowRight}
        onClick={() => {
          if (typeof window !== 'undefined') {
            window.history.go(1);
          }
        }}
      >
        <ArrowRight />
        <span className="visually-hidden">Cofnij do przodu</span>
      </button>

      <div className={styles.browserSearch}></div>
      <button
        onClick={hideNavigationActionsMenu}
        aria-controls="kbar-navigation"
        className={styles.close}
      >
        <span className="visually-hidden">Zamknij</span>
        <CloseIcon />
      </button>
    </div>
  );
};
