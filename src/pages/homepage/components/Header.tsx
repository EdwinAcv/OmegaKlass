import { Grid, Typography } from "@mui/material"
import { mainThemes } from "../../../themes"
import gif from '../../../assets/homepage/Listo_para_aprender.gif'

export const Header = () => {
  return (
    <Grid
        sx={{
            bgcolor: mainThemes.palette.primary.light,
            width: '100vw',
            height: 500
        }}
    >
        <Grid container className="maxWidth" sx={{ display: 'flex', flexDirection: 'row' }}>
                <Grid item xs={6} sx={{  height: 500, border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {/* <img src="" alt="" /> */}
                    {/* <img src={gif} alt="Example GIF" style={{ width: '550px', height: '350px', borderRadius: '10px' }} /> */}
                </Grid>
                <Grid item xs={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '1px solid black',
                        px: 15,
                        boxSizing: 'border-box'

                    }}
                >

                    <Typography sx={{
                        fontSize: '2rem', 
                        fontWeight: 'bold',
                        WebkitTextStroke: '1.5px #4364A5',
                        lineHeight: 1.2
                    }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis unde rem repellat voluptate! Excepturi mollitia doloribus quos nihil consequuntur nesciunt eligendi, ea incidunt sit dolorum laborum et nam? Praesentium.
                        {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum rerum commodi earum delectus debitis dolorem officia asperiores quas modi fuga magni expedita nulla, sunt natus culpa inventore vitae nisi dolores. */}
                    </Typography>
                </Grid>

        </Grid>
    </Grid>
  )
}
