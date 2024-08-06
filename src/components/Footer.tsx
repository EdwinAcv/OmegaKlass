import { Box, Grid, Tooltip, Typography } from "@mui/material"
import { mainThemes } from "../themes"
import logo from '../assets/marca/Logo.png';
import { useNavigate } from "react-router-dom";


export const Footer = () => {

    const redes = [
        { label: 'Linkedin', icon: 'fa-linkedin' },
        { label: 'Git Hub', icon: 'fa-github' },
        { label: 'Youtube', icon: 'fa-youtube' },
        { label: 'Telegram', icon: 'fa-telegram' },
        { label: 'Intagram', icon: 'fa-instagram' },
    ]

    const navigate = useNavigate();

    const navergar = (ir: string) => {
      let page = ir.toLowerCase();
      switch (page) {
        case 'perfil': page = 'perfil_estudiante';
      }
  
      navigate(`/${page}`,{
        replace: true
      })
    }

  return (
    <Grid
            sx={{
                bgcolor: mainThemes.palette.primary.main,
                width: '100%',
                py: '50px',
            }}
        >
            <Grid
                className="maxWidth"
                sx={{
                    
                    mingHeight: '300px',

                }}
            >
                <Grid
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: '20px',
                    }}
                >

                    {/* imagen */}
                    <Grid className="flex justify-start items-start ">

                        <Box
                            component="img"
                            src={logo}
                            alt="logo"
                            onClick={() => navergar('home')}
                            sx={{
                                height: '150px',
                                margin: '0 20px',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    cursor: 'pointer',
                                    transform: 'scale(1.02)',
                                    filter: `drop-shadow(0 0 0.75rem #18233A)`,
                                },
                            }}
                        />
                    </Grid>

                    <Grid>
                        <h6 className="text-white font-bold underline mb-2">Contactanos:</h6>
                        <ul className="flex flex-col  itmes-end">
                            <li className="cursor-pointer mb-3 text-[#D4D4D4D4] font-bold hover:text-white ">
                                <i className="fa-solid fa-envelope underline pr-2"></i>
                                Omegaklass@gmail.com
                            </li>
                            <li className="cursor-pointer mb-3 text-[#D4D4D4D4] font-bold hover:text-white ">
                                <i className="fa-solid fa-phone pr-2"></i>
                                (829) 783-0938
                            </li>
                            <li className="cursor-pointer mb-3 text-[#D4D4D4D4] font-bold hover:text-white ">
                                <i className="fa-solid fa-phone pr-2"></i>
                                (809) 578-2363
                            </li>
                        </ul>
                    </Grid>

                    <Grid>
                        <h6 className="text-white font-bold underline mb-2">Condiciones:</h6>
                        <ul className="flex flex-col  justify-end">
                            <li className="list-disc cursor-pointer mb-3 text-[#D4D4D4D4] font-bold underline hover:text-white ">Terminos y servicios</li>
                            <li className="list-disc cursor-pointer mb-3 text-[#D4D4D4D4] font-bold underline hover:text-white ">Politica de privacidad</li>
                            {/* <li className="list-disc cursor-pointer mb-3 text-[#D4D4D4D4] font-bold underline hover:text-white ">contacto</li> */}
                        </ul>
                    </Grid>

                    <Grid>
                        <h6 className="text-white font-bold underline mb-2">Siguenos en nuestras redes:</h6>
                        <Grid className="flex columns-2 items-end ">
                        {
                            redes.map(item => 
                                <Tooltip key={item.label} title={item.label} arrow>
                                <Box
                                    component="i"
                                    className={`fa-brands ${item.icon}`}
                                    onClick={() => navergar('perfil')}
                                    sx={{
                                        pr: '15px',
                                        color: '#D4D4D4D4',
                                        fontSize: '2rem',
                                        marginRight: '10px',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            cursor: 'pointer',
                                            transform: 'scale(1.1)',
                                            color: 'white'
                                        },
                                    }}
                                />
                            </Tooltip>    
                                
                            )
                        }
                        </Grid>
                    </Grid>
                </Grid>

                <hr />
                <Typography className="flex justify-center text-white font-light pt-2" variant="h6">OmegaKlass 2024</Typography>

                
            </Grid>
        </Grid>
  )
}

