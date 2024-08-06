import { Container } from "@mui/material"
import { Navbar } from "../components/Navbar"
import { AppTheme } from "../themes"
import { Footer } from "../components/Footer"

export const MainLayout = ( { children }: { children: React.ReactNode } ) => {
  return (
    <>
       <AppTheme>
          <Navbar />
       </AppTheme>

        {/* <Container >  */}
            { children }
        {/* </Container> */}
      
       <AppTheme>
          <Footer />
       </AppTheme>
    </>
  )
}


