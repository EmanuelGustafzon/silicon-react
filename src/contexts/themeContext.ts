
import { createContext } from 'react';
import { IThemeContext } from '../types/IthemeContext'

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export default ThemeContext;