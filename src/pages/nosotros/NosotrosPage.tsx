import { Fade, Grid } from "@mui/material"

export const NosotrosPage = () => {
  return (
    <Fade in={true} timeout={1000}>
      <Grid
              sx={{
                  // bgcolor: mainThemes.palette.primary.light,
                  width: '100%',
                  py: '100px',
              }}
          >
              <Grid
                  className="maxWidth"
                  sx={{
                      display: 'flex',
                      justifyContent: 'center',
                  }}
              >
                  <div className=" text-center w-[80%]">

                    {/* descripcion de la empresa */}
                    <div className="mb-[70px]">
                      <h1 className="n-titulo"> ¿Quiénes somos?</h1>
                      <p className="n-descripcion">

                        OmegaKlass es una plataforma educativa en línea diseñada para revolucionar el proceso de aprendizaje mediante la combinación de clases pregrabadas, sesiones en vivo y tutorías personalizadas. Ofreciendo una variedad de herramientas integradas que permiten una gestión eficiente del contenido educativo y la interacción entre estudiantes y educadores, adaptándose a las necesidades específicas de cada usuario.
                      </p>
                    </div>

                    {/* mision vision valores */}
                    <div className="mb-[80px]">

                      <div className="">
                        <h1 className="n-titulo">Misión</h1>
                        <p className="n-descripcion">
                          Facilitar el acceso equitativo a una educación de calidad en cualquier momento y lugar del mundo, promoviendo el aprendizaje continuo y personalizado que impulse el desarrollo integral de cada individuo.
                        </p>
                      </div>
                      <div className="">
                        <h1 className="n-titulo">Visión</h1>
                        <p className="n-descripcion">
                          Convertirse en referentes de la transformación digital de la educación, redefiniendo los estándares de enseñanza mediante tecnologías avanzadas y metodologías innovadoras que satisfagan las necesidades cambiantes de la comunidad educativa.
                        </p>
                      </div>
                      <div className="">
                        <h1 className="n-titulo">Valores</h1>
                        <ul>
                          <li className="n-descripcion">
                            <span className="valor-descripcion">Excelencia</span> <br/> Compromiso con la calidad en todos los aspectos de la plataforma y los servicios educativos.
                          </li>
                          <li className="n-descripcion">
                            <span className="valor-descripcion">Accesibilidad</span> <br/> Garantía de una plataforma inclusiva y accesible para todos los estudiantes,   independientemente de su ubicación geográfica o situación económica.
                          </li>
                          <li className="n-descripcion">
                            <span className="valor-descripcion">Innovación</span> <br/> Impulso constante hacia el desarrollo de nuevas ideas y soluciones educativas que mejoren la experiencia de aprendizaje y enseñanza.
                          </li>
                          <li className="n-descripcion">
                            <span className="valor-descripcion">Colaboración</span> <br/> Fomento de un ambiente de colaboración entre estudiantes, educadores y administradores para crear un entorno educativo enriquecedor y de apoyo mutuo.
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Analisis Foda */}
                    <div className="grid gap-8 grid-cols-2 relative">
                      {/* logo o circulo en el medio */}
                      <div className="flex justify-center items-center bg-[#273B61] z-10 absolute-center border-8 border-white rounded-[100%] min-w-[150px] min-h-[150px]">
                        <h1 className="text-[3rem] font-bold text-white">FODA</h1>
                      </div>

                      <div className="bg-blue-50 main-foda relative min-h-[172px] px-[60px] rounded-[50px]">
                        <h1 className="foda-n-titulo absolute-center">Fortalezas</h1>
                        <ul className="flex flex-col justify-center items-center h-[100%] hidden">
                          <li className="list-disc">Plataforma tecnológica avanzada</li>
                          <li className="list-disc">Adaptabilidad a diversas necesidades educativas</li>
                          <li className="list-disc">Amplia gama de herramientas de aprendizaje colaborativo</li>
                          <li className="list-disc">Integración con otras plataformas de comunicación</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 main-foda relative min-h-[172px] px-[60px] rounded-[50px]">
                        <h1 className="foda-n-titulo absolute-center">Debilidades</h1>
                        <ul className="flex flex-col justify-center items-center h-[100%] hidden">
                          <li className="list-disc">Falta de reconocimiento de marca</li>
                          <li className="list-disc">Dependencia de la infraestructura tecnológica</li>
                          <li className="list-disc">Competencia de grandes plataformas ya establecidas</li>
                          <li className="list-disc">Curva de aprendizaje para nuevos usuarios</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 main-foda relative min-h-[172px] px-[60px] rounded-[50px]">
                        <h1 className="foda-n-titulo absolute-center">Oportunidades</h1>
                        <ul className="flex flex-col justify-center items-center h-[100%] hidden">
                          <li className="list-disc">Creciente demanda de educación en línea</li>
                          <li className="list-disc">Tendencia hacia la digitalización en educación</li>
                          <li className="list-disc">Expansión a mercados globales</li>
                          <li className="list-disc">Posibilidades de alianzas con instituciones educativas</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 main-foda relative min-h-[172px] px-[60px] rounded-[50px]">
                        <h1 className="foda-n-titulo absolute-center">Amenazas</h1>
                        <ul className="flex flex-col justify-center items-center h-[100%] hidden">
                          <li className="list-disc">Ciberataques y problemas de seguridad</li>
                          <li className="list-disc">Evolución rápida de la tecnología educativa</li>
                          <li className="list-disc">Políticas educativas</li>
                          <li className="list-disc">Competencia feroz en precios y calidad.</li>
                        </ul>
                      </div>
                    </div>

                  </div>

              </Grid>
          </Grid>
    </Fade>
  )
}
