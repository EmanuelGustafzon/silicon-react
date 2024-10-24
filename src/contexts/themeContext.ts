
import { createContext } from 'react';
import { IThemeContextType } from '../types/IthemeContext'

const ThemeContext = createContext<IThemeContextType | undefined>(undefined);

export default ThemeContext;