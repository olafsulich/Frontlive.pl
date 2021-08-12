import { ReactNode, createContext, useContext, useCallback, useState } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

type State = {
  isMenuVisible: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

type HeaderProviderProps = { children: ReactNode };

const HeaderStateContext = createContext<State | undefined>(undefined);

export const HeaderProvider = ({ children }: HeaderProviderProps) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuVisible((prevIsMenuVisible) => {
      if (typeof window !== 'undefined') {
        const navigation = document.querySelector('#navigation') as HTMLElement;

        if (!prevIsMenuVisible) {
          disableBodyScroll(navigation);
        } else {
          enableBodyScroll(navigation);
        }
      }

      return !prevIsMenuVisible;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuVisible(() => {
      if (typeof window !== 'undefined') {
        const navigation = document.querySelector('#navigation') as HTMLElement;

        enableBodyScroll(navigation);
      }
      return false;
    });
  }, []);

  return (
    <HeaderStateContext.Provider value={{ isMenuVisible, toggleMenu, closeMenu }}>
      {children}
    </HeaderStateContext.Provider>
  );
};

export const useHeaderState = () => {
  const context = useContext(HeaderStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
};
