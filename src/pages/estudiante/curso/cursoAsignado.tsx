import { useNavigate, useSearchParams } from "react-router-dom";
import PageTransition from "../../../components/pageTransition";
import { Container, Typography, Paper, Grid, Button } from "@mui/material";
import useGetSingleRecordById from "../../../hooks/get-one-data";
import { Cursos } from "../../../interfaces/cursos";
import CourseVideos from "../../cursos/curso-videos/curso-video";



const Sidebar = () => {
  const [searchParams] = useSearchParams();

  // const stundent_id = searchParams.get("student") || 0;
  const course_id = searchParams.get("course") || 0;
  
  const navigate = useNavigate();
  const { data, error, loading } = useGetSingleRecordById<Cursos>(
    "../../src/data/cursos.json",
    +course_id
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data found</p>;
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate(-1)}
      >
        Volver
      </Button>
      <Typography variant="h6" component="div" sx={{ marginTop: 2 }}>
        {data.titulo}
      </Typography>
      <CourseVideos videos={[]} />
    </>
  );
};

const MainLayout = () => {
  return (
    <div>
      <h1>mainLayout</h1>
    </div>
  );
};


export const CursoAsignado = () => {

  
  return (
    <PageTransition>
      <Container sx={{ marginTop: 4 }}>
        <Grid container spacing={2}>
          {/* Columna para el Sidebar y CursosAsignados */}
          <Grid item xs={12} md={3}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Sidebar />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          {/* Columna para el contenido principal */}
          <Grid item xs={12} md={9}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <MainLayout />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </PageTransition>
  );
};