import { createContext, useState, ReactNode, useEffect } from 'react';
import { themeContextType, Theme } from '../types/themeContext'

const ThemeContext = createContext<themeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
  }

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme]  = useState<Theme>('dark')

    useEffect(() => {
      const changeBodyClass = () => document.body.className = theme;
      changeBodyClass();
    }, [theme])
    
    return (
      <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
      </ThemeContext.Provider>
    );
  };

  export { ThemeContext, ThemeProvider }; 