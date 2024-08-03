import { Grid, Typography } from "@mui/material"
import { mainThemes } from "../../themes"

export const PerfilEstudiantePage = () => {
  return (
    <Grid
        sx={{
            // bgcolor: mainThemes.palette.primary.light,
            width: '100vw',
            height: 500
        }}
    >
        <Grid className="maxWidth">
            <Typography sx={{ fontWeight: 'bold',  }} variant="h6">Perfil Estudiante</Typography>
        </Grid>
    </Grid>
  )
}
