export type ThemeType = 'light' | 'dark';

export interface IThemeContext {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
  }
  