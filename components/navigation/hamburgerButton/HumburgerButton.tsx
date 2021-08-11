import { memo } from 'react';
import styles from './hamburgerButton.module.scss';
import cn from 'classnames';
import { useHeaderState } from '../../shared/context/HeaderContext';

export const HamburgerButton = memo(() => {
  const { isMenuVisible, toggleMenu } = useHeaderState();

  return (
    <button
      aria-haspopup="true"
      aria-controls="navigation"
      aria-expanded={isMenuVisible}
      onClick={toggleMenu}
      className={cn(styles.hamburger, {
        [styles.hamburgerOpen]: isMenuVisible,
      })}
    >
      <span className="visually-hidden">{isMenuVisible ? 'Zamknij' : 'Otwórz'} menu</span>
    </button>
  );
});

HamburgerButton.displayName = 'HamburgerButton';
