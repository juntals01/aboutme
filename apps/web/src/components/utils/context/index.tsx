'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { AppContextType, ThemeType } from '../types/AppTypeContext';

const AppContext = createContext<AppContextType>({
  theme: {
    color: {
      name: 'blue',
      bg: 'bg-blue',
      text: 'text-blue',
      decoration: 'decoration-blue-500',
      border: 'border-blue',
    },
  },
  setTheme: () => {},
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState({
    color: {
      name: 'blue',
      bg: 'bg-blue',
      text: 'text-blue',
      decoration: 'decoration-blue-500',
      border: 'border-blue',
    },
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storage = localStorage.getItem('theme');
      if (storage) {
        setState(JSON.parse(storage));
      }
    }
  }, []);

  const setTheme = (state: ThemeType) => {
    localStorage.setItem('theme', JSON.stringify(state));
    setState(state);
  };

  return (
    <AppContext.Provider value={{ theme: state, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
