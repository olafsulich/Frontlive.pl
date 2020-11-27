import { ReactNode, createContext, useEffect, useContext } from 'react';
import useToggle from '../utils/useToggle';

type State = {
  isMenuVisible: boolean;
  toogleMenu: () => void;
};

type HeaderProviderProps = { children: ReactNode };

const HeaderStateContext = createContext<State | undefined>(undefined);

const HeaderProvider = ({ children }: HeaderProviderProps) => {
  const [isMenuVisible, toogleMenu, off] = useToggle();

  // useEffect(() => {
  //   off();
  // }, []);

  return (
    <HeaderStateContext.Provider value={{ isMenuVisible, toogleMenu }}>
      {children}
    </HeaderStateContext.Provider>
  );
};

const useHeaderState = () => {
  const context = useContext(HeaderStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
};

export { HeaderProvider, useHeaderState };
