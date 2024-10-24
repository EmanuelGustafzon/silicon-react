import {useContext } from 'react'
import { ThemeContext } from '../contexts/themeProvider'
import { themeContextType } from '../types/IthemeContext'

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