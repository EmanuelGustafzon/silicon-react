import { ThemeType } from "../types/IthemeContext";

class ThemeService {
    
    static initTheme = (): ThemeType => {
        const lastSessionSettings = localStorage.getItem('theme');
        if(lastSessionSettings) return lastSessionSettings === 'dark' ? 'dark' : 'light'
    
        const themePreference = window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light';
        return themePreference
      }
}

export default ThemeService