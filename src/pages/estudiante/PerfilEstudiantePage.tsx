import { Box, Container, Typography, Paper, Grid } from "@mui/material";
import Sidebar, { CursosAsignados } from "./sidebar/sidebar";
import PageTransition from "../../components/pageTransition";

const studentInfo = {
  name: "Juan Pérez",
  email: "juan.perez@example.com",
  courses: [
    { id: 1, title: "Matemáticas Básicas" },
    { id: 2, title: "Física para Principiantes" },
    { id: 3, title: "Programación en Python" },
  ],
};

export const PerfilEstudiantePage = () => {
    return (
      <PageTransition>
      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={2}>
          {/* Columna para el Sidebar y CursosAsignados */}
          <Grid item xs={12} md={3}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Sidebar name={studentInfo.name} email={studentInfo.email} />
              </Grid>
              <Grid item>
                <CursosAsignados courses={studentInfo.courses} />
              </Grid>
            </Grid>
          </Grid>
          {/* Columna para el contenido principal */}
          <Grid item xs={12} md={9}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h4" gutterBottom>
                Bienvenido, {studentInfo.name}
              </Typography>
              <Typography variant="body1">
                Aquí puedes encontrar toda la información relevante sobre tus cursos y actividades.
              </Typography>
              <Box sx={{ marginTop: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Actividades Recientes
                </Typography>
                <Typography variant="body1">
                  {/* Aquí puedes agregar más contenido o componentes relacionados con las actividades recientes */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur, tenetur possimus dolore doloremque quidem officiis nemo velit ducimus inventore. Omnis earum consequatur rem nam perferendis magnam dolorem ab ullam.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur, tenetur possimus dolore doloremque quidem officiis nemo velit ducimus inventore. Omnis earum consequatur rem nam perferendis magnam dolorem ab ullam.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur, tenetur possimus dolore doloremque quidem officiis nemo velit ducimus inventore. Omnis earum consequatur rem nam perferendis magnam dolorem ab ullam.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur, tenetur possimus dolore doloremque quidem officiis nemo velit ducimus inventore. Omnis earum consequatur rem nam perferendis magnam dolorem ab ullam.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur, tenetur possimus dolore doloremque quidem officiis nemo velit ducimus inventore. Omnis earum consequatur rem nam perferendis magnam dolorem ab ullam.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container></PageTransition>
  );
};
