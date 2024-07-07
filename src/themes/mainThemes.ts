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
            main: '#273B61',
            dark: '#18233A',
            light: '#B1C2E5'

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
