import { Button, Grid, Typography } from "@mui/material"
import { mainThemes } from "../../../themes"
import gif from '../../../assets/homepage/Listo_para_aprender.gif'
import { TeacherCard } from "./TeacherCard"
import data from "../../../data/maestros.json"
import { ICardProfesor } from "../../../utils/interfaces"


import educacion from '../../../assets/homepage/libros.png'
import tutoria from '../../../assets/homepage/saludando-pantalla.png'



export const Header = () => {



    let maestros = data as ICardProfesor[]
    const listaTutoria = [
        {text:'Busca tu profesor que prefieras.', icon:'fa-magnifying-glass'},
        {text:'Agenda el día y la hora.', icon:'fa-calendar'},
        {text:'Selecciona el tema de interés.', icon:'fa-circle-check'},
    ]

  return (
    <>
        {/* header */}
        <Grid
            sx={{
                bgcolor: mainThemes.palette.primary.light,
                width: '100vw',
            }}
        >
            <Grid container className="maxWidth" sx={{ display: 'flex', flexDirection: 'row', py: '70px'  }}>
                    <Grid item xs={7} sx={{   display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {/* <img src="" alt="" /> */}
                        <img src={gif} alt="Example GIF" style={{ width: '550px', height: '350px', borderRadius: '10px' }} />
                    </Grid>
                    <Grid item xs={5}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // border: '1px solid black',
                            px: 5,
                            boxSizing: 'border-box'

                        }}
                    >

                        <Typography sx={{
                            fontSize: '2.5rem', 
                            fontWeight: 'bold',
                            WebkitTextStroke: '2.5px #4364A5',
                            // WebkitTextStroke: `2.5px ${mainThemes.palette.primary.main}`,
                            // color: mainThemes.palette.primary.main,
                            lineHeight: 1.0
                        }}>
                        Una mejor alternativa para la educación en línea.
                        </Typography>
                        <Typography sx={{
                            mt: 2,
                            fontSize: '1.5rem', 
                            // fontWeight: 'bold',
                            // WebkitTextStroke: '1.5px black',
                            lineHeight: 1.3
                        }}>
                        En los últimos años, se ha observado una creciente tendencia hacia el uso de plataformas de servicios en línea en diversos sectores. Este cambio de paradigma ha sido impulsado por la digitalización y la globalización, que han transformado la manera en que las personas acceden y consumen servicios.
                        </Typography>

                    </Grid>

            </Grid>
        </Grid>
        
        {/* conteindo 1 */}
        <Grid
            sx={{
                // bgcolor: mainThemes.palette.primary.light,
                width: '100vw',
                py: '150px',
            }}
        >
            <Grid 
                container
                className="maxWidth"
                sx={{ display: 'flex', justifyContent: 'center',px:'40px' }}
            >
                <Grid
                    item xs={8}
                >

                    <Typography 
                        variant="h1"
                        sx={{
                            fontSize: '45px',
                            fontWeight: 'bold',
                            pb: '20px'
                        }}
                    >
                        Educación en Línea Flexible y Accesible
                    </Typography>
                    <Grid
                        sx={{
                            width: '70%'
                        }}
                    >
                        <Typography 
                            variant="h6"
                            sx={{
                                fontSize: '25px',
                                // fontWeight: 'bold'
                                fontFamily: 'cursive',
                                textAlign: "justify"
                            }}
                        >
                            Hay una creciente preferencia por la educación en línea debido a su flexibilidad y accesibilidad, Debido a esto se necesita permitir a los estudiantes acceder a los cursos desde cualquier lugar y en cualquier momento, adaptándose a sus horarios y ubicaciones.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid
                    item xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img src={educacion} style={{ width: '600px', height: '400px' }} alt="educacion" />
                </Grid>
            </Grid>
        </Grid>

        {/* tutorias personalizadas */}
        <Grid
            sx={{
                // bgcolor: mainThemes.palette.primary.light,
                width: '100vw',
                py: '150px',
            }}
        >
            <Grid
                container 
                className="maxWidth"
                sx={{ display: 'flex', justifyContent: 'center',px:'40px' }}
            >
                <Grid
                    item xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    
                    <Grid
                        sx={{
                            width: '450px',
                            height: '450px',
                            // bgcolor: 'red',
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <img src={tutoria} style={{ width: '100%', height: '100%' }}  alt="img" />
                    </Grid>
                </Grid>
                <Grid
                item xs={8}
                    sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'end'
                     }}
                >

                    <Typography 
                        variant="h1"
                        sx={{
                            fontSize: '45px',
                            fontWeight: 'bold',
                            px: '20px',
                            pb: '20px',
                            color: mainThemes.palette.primary.dark,
                        }}
                    >
                        Solicita tutorías personalizadas con profesor que prefieras.
                    </Typography>
                    <Grid
                        sx={{
                            width: '90%',
                            display: "flex",
                            flexDirection: "column",
                            alignItems: 'start',
                        }}
                    >
                        <Typography 
                            variant="h6"
                            sx={{
                                fontSize: '25px',
                                // fontWeight: 'bold'
                                fontFamily: 'cursive',
                                textAlign: "justify",
                                pb: '15px',
                            }}
                        >
                            Hay una creciente demanda de apoyo adicional a través de tutorías personalizadas, esto con el fin de brindarle la facilidad al estudiante de poder agendar y llevar a cabo sesiones de tutoría de manera eficiente y efectiva, ofreciendo apoyo individualizado sobre un tema en cuestión.
                        </Typography>
                        <Grid
                            sx={{
                                pl: '30px'
                            }}
                        >

                            <ul>
                                {
                                    listaTutoria.map((item) =>{
                                        return <li key={item.text}> <Typography 
                                            variant="body2"
                                            sx={{ 
                                                fontSize: '20px',
                                                fontFamily: 'cursive',
                                                color: mainThemes.palette.primary.dark,
                                            }} 
                                        >
                                            { item.text } <i className={`fa-solid ${item.icon}`} style={{ color: mainThemes.palette.primary.dark }}></i>
                                        </Typography> </li>
                                    })
                                }
                            </ul>

                        </Grid>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                fontWeight: 'bold',
                                mt: '20px',
                            }}
                        >
                            Solicitar ahora
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        {/* profesores */}
        <Grid
            sx={{
                bgcolor: mainThemes.palette.primary.light,
                width: '100vw',
                py: '50px',
            }}
        >
            <Grid
                className="maxWidth"
                sx={{
                    textAlign: 'center',
                }}
            >
                <Typography 
                    variant="h1"
                    sx={{
                        fontSize: '45px',
                        fontWeight: 'bold',
                        pb: '20px',
                        color: mainThemes.palette.primary.dark,
                    }}
                >
                    Algunos de nuestro profesores.
                </Typography>

                <Grid
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        gap: '20px',
                    }}
                >
                    {
                        maestros.map((item) => {
                            if(item.id < 4) 
                                return <TeacherCard key={item.id} {...item} /> 
                        })
                    }
                    
                </Grid>
            </Grid>
        </Grid>

        <Grid
            sx={{
                // bgcolor: mainThemes.palette.primary.light,
                width: '100vw',
                py: '150px',
            }}
        >
            <Grid
                className="maxWidth"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                

            </Grid>
        </Grid>
    </>
  )
}
