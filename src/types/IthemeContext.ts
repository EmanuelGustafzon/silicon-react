export type ITheme = 'light' | 'dark';

export interface IThemeContextType {
    theme: ITheme;
    setTheme: (theme: ITheme) => void;
  }
  