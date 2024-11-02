export type ThemeType = 'light' | 'dark';

export interface IThemeContextType {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
  }
  