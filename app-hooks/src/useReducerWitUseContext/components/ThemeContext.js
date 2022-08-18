import React, { createContext, useState } from "react";


const ThemeContext = createContext()

function ThemeProvider({children}) {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  const value = {
    toggleTheme,
    theme,
  }
  return (
    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext, ThemeProvider}