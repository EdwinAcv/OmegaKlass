import { Grid } from "@mui/material"
import { mainThemes } from "../../themes"

export const CursosPage = () => {
  return (

    <Grid
        sx={{
            width: '100vw',
            height: 500
        }}
    >
      <Grid className="maxWidth">
        <h1>Cursos Page</h1> 
        <i className="fa-solid fa-user" style={{marginRight: "5px"}} />
      </Grid>

    </Grid>
  )
}

