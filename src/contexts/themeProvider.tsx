import { useState, ReactNode, useEffect } from 'react';
import ThemeContext from './themeContext';
import { ITheme } from '../types/IthemeContext'


interface ThemeProviderProps {
    children: ReactNode;
  }

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme]  = useState<ITheme>('dark')

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