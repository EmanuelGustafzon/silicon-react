type Theme = 'light' | 'dark';
export interface themeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
  }

  