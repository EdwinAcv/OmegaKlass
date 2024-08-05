import { Button, Grid, Typography } from "@mui/material"
import { mainThemes } from "../../../themes"
import { ICardProfesor } from "../../../utils/interfaces";



export const TeacherCard = ( { nombre, apellido, profesion, descipcion, sub_abilidades, imagen }: ICardProfesor ) => {

    const hexToRgba = (hex: string, alpha: number) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
    
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const imageSrc = new URL(imagen, import.meta.url).href;

    const shortDescription = descipcion.slice(0, 100) + '...';

    
  return (
    <Grid
        sx={{
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
            width: '300px',
            backgroundColor: mainThemes.palette.primary.dark,
            borderRadius: '20px',
            padding: '20px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.90)',
        }}
    >
        <Grid
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >

            <Grid
                sx={{
                    px: '10px',
                }}
            >
                <Typography 
                    sx={{
                        color: 'white',
                        textAlign: 'left',
                        fontSize: '25px',
                        fontWeight: 'bold',
                        lineHeight: "1.5rem",
                    }}>
                    { nombre } <br /> {apellido}
                </Typography>
            </Grid>

            <Grid
                sx={{
                    borderRadius: '100%',
                    border: '6px solid white',
                    width: '100px',
                    height: '100px',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img style={{ width: '100%', height: '100%', borderRadius: '100%' }} src={imageSrc} alt="img" />
            </Grid>
        </Grid>

        <Grid
            sx={{ width: '100%', mt: '10px'}}
        >
            <Typography
                sx={{
                    textAlign: "left",
                    color: "white",
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                }}
            >
                { profesion }
            </Typography>

        </Grid>


        <Grid
            sx={{
                bgcolor: hexToRgba(mainThemes.palette.primary.light,.2),
                height: '100px',
                borderRadius: '0 20px 0 20px',
                mt: '10px',
            }}
        >
            <Typography 
                sx={{
                    textAlign: "left",
                    color: "white",
                    px: '10px',
                }}
            >
                { shortDescription } 
            </Typography>  
        </Grid>

        <Grid
            sx={{ width: '100%', mt: '10px'}}
        >
            <Typography
                sx={{
                    textAlign: "left",
                    color: "white",
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                }}
            >
                Conocimientos en:
            </Typography>

        </Grid>

        <Grid
            sx={{ width: '100%', mt: '10px'}}
        >
            {
                sub_abilidades.map((item, index) =>{
                    if(index < 2)return <Grid
                        sx={{
                            bgcolor: hexToRgba(mainThemes.palette.primary.light,.5),
                            textAlign:'left',
                            mt: '5px',
                            pl: '4px',
                            borderRadius: '5px'
                        }}
                    >
                        <Typography sx={{ color: 'white' }}>{ item }</Typography>
                    </Grid>
                })
            }
        </Grid>

        <Grid
            sx = {{ textAlign: 'end', width: '100%', mt: '10px'}}
        >
            <Button
                variant="outlined"
                sx={{ 
                    color: 'white',
                    fontWeight: 'bold',
                    borderColor: 'white',
                    mt: '10px',
                    '&:hover': {
                        color: mainThemes.palette.primary.dark,
                        fontWeight: 'bold',
                        backgroundColor: 'white',
                    }
                 }}
            >
                <i style={ { paddingRight: '8px' } } className="fa solid fa-arrow-right-to-bracket"></i> Ver perfil 
            </Button>
        </Grid>
    </Grid>
  )
}
