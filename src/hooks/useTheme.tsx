import {useContext } from 'react'
import { ThemeContext } from '../contexts/theme'
import { themeContextType } from '../types/themeContext'

const useTheme = () => {
    const themeContext = useContext<themeContextType | undefined>(ThemeContext)
    if (themeContext === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    const { theme, setTheme } = themeContext;

    return {
        theme, 
        setTheme
    }
}

export default useTheme;