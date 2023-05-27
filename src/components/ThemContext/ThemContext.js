import React, { createContext, useState } from "react"

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('lightTheme')
    const toggleTheme = () => {
        setTheme(theme === 'darkTheme' ? 'lightTheme' : 'darkTheme')
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
