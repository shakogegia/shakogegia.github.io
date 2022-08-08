import React, { PropsWithChildren } from 'react'
import { useContext } from 'react'

type Context = {
  theme: string | null
  toggleTheme: (theme: string) => void
}

const ThemeContext = React.createContext<Context>({
  theme: null,
  toggleTheme: () => {},
})

export function useThemeContext() {
  return useContext(ThemeContext)
}

export function ThemeProvider(
  props: PropsWithChildren<{ theme: string | null; toggleTheme: (theme: string) => void }>,
) {
  return (
    <ThemeContext.Provider value={{ theme: props.theme, toggleTheme: props.toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
