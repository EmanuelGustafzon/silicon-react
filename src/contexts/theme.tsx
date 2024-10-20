import { createContext, useState, ReactNode, useEffect } from 'react';
import { themeContextType } from '../types/themeContext'

const ThemeContext = createContext<themeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
  }

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme]  = useState('dark')

    useEffect(() => {
      const changeBodyClass = () => theme === 'dark' ? document.body.className = 'dark' : document.body.className = 'light';
      changeBodyClass();
    }, [theme])
    
    return (
      <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
      </ThemeContext.Provider>
    );
  };

  export { ThemeContext, ThemeProvider }; 