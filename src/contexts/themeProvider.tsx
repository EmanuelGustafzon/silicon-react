import { useState, ReactNode, useEffect } from 'react';
import ThemeContext from './themeContext';
import { ITheme } from '../types/IthemeContext'


interface ThemeProviderProps {
    children: ReactNode;
  }

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme]  = useState<ITheme>(initTheme())

    useEffect(() => {
      const changeThemeAttribute = () => document.body.setAttribute('data-theme', theme)
      const addToLocalStorage = () => localStorage.setItem('theme', theme)
      changeThemeAttribute();
      addToLocalStorage();
    }, [theme])
    
    return (
      <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
      </ThemeContext.Provider>
    );
  };

  export { ThemeContext, ThemeProvider }; 

  // init the theme based on localstorage or else user preferences
const initTheme = (): ITheme => {
  const lastSessionSettings = localStorage.getItem('theme');
  console.log(lastSessionSettings)
  if(lastSessionSettings) return lastSessionSettings === 'dark' ? 'dark' : 'light'

  const themePreference = window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light';
  return themePreference
}