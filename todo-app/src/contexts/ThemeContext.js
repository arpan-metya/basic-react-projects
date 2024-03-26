import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
  themeMode: 'light',
  lightMode: () => { },
  darkMode: () => { }
})

export const ThemeContextProvider = ThemeContext.Provider

export default function useTheme() {
  return useContext(ThemeContext)
}