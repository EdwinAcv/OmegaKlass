import { Button, Grid, Typography } from "@mui/material"
import { mainThemes } from "../../../themes"
import gif from '../../../assets/homepage/Listo_para_aprender.gif'
import { TeacherCard } from "./TeacherCard"
import data from "../../../data/maestros.json"
import { ICardProfesor } from "../../../utils/interfaces"


import educacion from '../../../assets/homepage/libros.png'
import tutoria from '../../../assets/homepage/saludando-pantalla.png'
import { PlanesCard } from "./PlanesCard"
import { useNavigate } from "react-router-dom"
// import { Carousel } from "./Carousel"



export const Header = () => {

    const navigate = useNavigate();

    let maestros = data as ICardProfesor[]
    const listaTutoria = [
        {text:'Busca tu profesor que preferido.', icon:'fa-magnifying-glass'},
        {text:'Agenda el día y la hora.', icon:'fa-calendar'},
        {text:'Selecciona el tema de interés.', icon:'fa-circle-check'},
    ]

  return (
    <>
        {/* header */}
        <Grid
            sx={{
                bgcolor: mainThemes.palette.primary.light,
                width: '100%',
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
                            // fontWeight: 'bold',
                            // WebkitTextStroke: '2.5px #4364A5',
                            WebkitTextStroke: `2.5px ${mainThemes.palette.primary.dark}`,
                            // color: mainThemes.palette.primary.dark,
                            lineHeight: 1.0
                        }}>
                        Tu platafoma educativa en línea.
                        </Typography>
                        <Typography sx={{
                            mt: 2,
                            fontSize: '1.5rem', 
                            // WebkitTextStroke: '1.5px black',
                            // fontFamily: "cursive",
                            lineHeight: 1.3
                        }}>
                            Descubre una experiencia de aprendizaje única con clases pregrabadas, sesiones en vivo, y tutorías personalizadas que te permitirán alcanzar tus metas académicas y profesionales. Únete a nosotros y transforma tu futuro.
                        </Typography>

                    </Grid>

            </Grid>
        </Grid>
        
        {/* conteindo 1 */}
        <Grid
            sx={{
                // bgcolor: mainThemes.palette.primary.light,
                width: '100%',
                pt: '150px',
                pb: '100px',
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
                                textAlign: "justify"
                            }}
                        >
                            En OmegaKlass entendemos la importancia de la flexibilidad y la accesibilidad en la educación moderna. Por eso, ofrecemos una plataforma que permite a los estudiantes acceder a nuestros cursos desde cualquier lugar y en cualquier momento.
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
                width: '100%',
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
                        Solicita tutorías personalizadas con el profesor que prefieras.
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
                                textAlign: "justify",
                                pb: '15px',
                            }}
                        >
                            Reconocemos la creciente demanda de apoyo adicional a través de tutorías personalizadas. Nuestra plataforma te permite agendar y llevar a cabo sesiones de tutoría de manera eficiente y efectiva, brindándote el apoyo individualizado que necesitas para dominar cualquier tema.
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
                                                // fontFamily: 'cursive',
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
                            onClick={() => {
                                navigate('/profesores', {replace: true}) ;
                                window.scrollTo(0, 0);
                            }}
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
                width: '100%',
                pt: '50px',
                py: '70px',
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
                        pb: '40px',
                        color: mainThemes.palette.primary.dark,
                    }}
                >
                    Algunos de nuestro profesores.
                </Typography>

                <Grid
                    className="flex flex-wrap gap-4 justify-center items-center"
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

        {/* planes */}
        <Grid
            id="planes"
            sx={{
                // bgcolor: mainThemes.palette.primary.light,
                width: '100%',
                pt: '80px',
                pb: '100px',
            }}
        >
            <Grid
                className="maxWidth"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Grid>

                    <Grid>
                        <Grid className="mb-[50px]">
                            <Typography 
                                variant="h1"
                                sx={{
                                    textAlign: 'center',
                                    fontSize: '45px',
                                    fontWeight: 'bold',
                                    pb: '20px',
                                    color: mainThemes.palette.primary.dark,
                                }}
                            >
                                Nuestros planes
                            </Typography>
                        </Grid>
                        
                        <Grid className="grid gap-8 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                        {/* <Grid className="grid gap-8 grid-cols-3"> */}

                            <PlanesCard plan={0}/>
                            <PlanesCard plan={1}/>
                            <PlanesCard plan={2}/>
                        </Grid>
                       
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        {/* <Grid
            sx={{
                // bgcolor: mainThemes.palette.primary.light,
                width: '100%',
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
        </Grid> */}
    </>
  )
}
