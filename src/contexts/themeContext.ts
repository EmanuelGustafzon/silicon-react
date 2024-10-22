
import { createContext } from 'react';
import { themeContextType } from '../types/themeContext'

const ThemeContext = createContext<themeContextType | undefined>(undefined);

export default ThemeContext;