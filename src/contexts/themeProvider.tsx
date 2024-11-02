import { useState, ReactNode, useEffect } from 'react';
import ThemeContext from './themeContext';
import { ThemeType } from '../types/IthemeContext'
import ThemeService from '../services/themeService';

interface ThemeProviderProps {
    children: ReactNode;
  }

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme]  = useState<ThemeType>(ThemeService.initTheme())

    useEffect(() => {
      const addToLocalStorage = () => localStorage.setItem('theme', theme)
      addToLocalStorage();
    }, [theme])
    
    return (
      <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
      </ThemeContext.Provider>
    );
  };

export { ThemeContext, ThemeProvider }; 