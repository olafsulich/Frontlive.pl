import { ReactNode, createContext, useContext, useMemo } from 'react';
import type { Post } from '../types/types';

type AppProviderProps = { children: ReactNode; posts: Post[] };

const AppStateContext = createContext<Post[] | undefined>(undefined);

export const AppProvider = ({ children, posts }: AppProviderProps) => {
  return (
    <AppStateContext.Provider value={useMemo(() => posts, [posts])}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
  }
  return context;
};
