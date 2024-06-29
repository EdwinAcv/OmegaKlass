import { Container } from "@mui/material"
import { Navbar } from "../components/Navbar"
import { AppTheme } from "../themes"

export const MainLayout = ( { children }: { children: React.ReactNode } ) => {
  return (
    <>
       <AppTheme>
          <Navbar />
       </AppTheme>
        <Container maxWidth="xl"> 
            { children }
        </Container>
      
    </>
  )
}


