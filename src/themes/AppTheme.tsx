import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { mainThemes } from "./mainThemes"
import React from "react"

interface AppThemeProps {
  children: React.ReactNode
}

export const AppTheme = ({children}:AppThemeProps) => {
  return (
    <ThemeProvider theme={mainThemes}>
        <CssBaseline/>
        {children}


    </ThemeProvider>
  )
}
