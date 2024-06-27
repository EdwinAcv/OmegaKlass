import { Box, Container } from "@mui/material"
import { Navbar } from "../components/Navbar"

export const MainLayout = ( { children }: { children: React.ReactNode } ) => {
  return (
    <>
       
        <Navbar />
        <Container maxWidth="xl"> 
            { children }
        </Container>
      
    </>
  )
}


