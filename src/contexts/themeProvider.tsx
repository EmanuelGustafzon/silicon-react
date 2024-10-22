import { useState, ReactNode, useEffect } from 'react';
import ThemeContext from './themeContext';
import { Theme } from '../types/themeContext'


interface ThemeProviderProps {
    children: ReactNode;
  }

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme]  = useState<Theme>('dark')

    useEffect(() => {
      const changeThemeAttribute = () => document.body.setAttribute('data-theme', theme)
      changeThemeAttribute();
    }, [theme])
    
    return (
      <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
      </ThemeContext.Provider>
    );
  };

  export { ThemeContext, ThemeProvider }; 