import { Fade, Grid } from "@mui/material"
import { Header } from "./components/Header"

export const HomePage = () => {

  return (
    <Fade in={true} timeout={1000}>

      <Grid
        sx={{
          minHeight: '120vh',
        }}
      >
      <Grid className="min-h-[120vh]">

        <Header/> 
      </Grid>

    
      </Grid>
    </Fade>
  )
}

