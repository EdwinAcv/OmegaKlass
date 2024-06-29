import { createTheme } from "@mui/material";


export const mainThemes = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
      },

    palette:{
        primary:{
            main: '#294B9A',
            dark: '#1c366b',
            light: '#5387FF'

        },
        secondary:{
            main: '#808080',
        },
        warning:{
            main: '#D2A31F',
            light: '#E8D18F',
            dark: '#B58C00'
        },
        success:{
            main: '#02864A'
        },
        error: {
            main: '#8A0020',
            dark: '#8B0000',
        },
    }
 
})
