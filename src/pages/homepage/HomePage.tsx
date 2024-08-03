import { Button, Grid } from "@mui/material"
import { Header } from "./components/Header"

export const HomePage = () => {

  return (
    <Grid>

      <Header/> 

      <Button
        color="secondary"
        variant="contained"
      >
        Click Me
      </Button>

    </Grid>
  )
}

