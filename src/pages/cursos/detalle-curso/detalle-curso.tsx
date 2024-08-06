import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Divider,
  Button,
} from "@mui/material";
import { Cursos } from "../../../interfaces/cursos";
import useGetSingleRecordById from "../../../hooks/get-one-data";
import useFetchJson from "../../../hooks/get-data";
import { Maestro } from "../../../interfaces/maestros";
import PageTransition from "../../../components/pageTransition";
import CourseVideos from "../curso-videos/curso-video";

export const DetalleCursoPage = () => {
  const { id = 0 } = useParams<{ id: string }>();

  const { data, error, loading } = useGetSingleRecordById<Cursos>(
    "../../src/data/cursos.json",
    +id
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data found</p>;

  return (
    <PageTransition>
      <CourseDetailPage course={data} />
    </PageTransition>
  );
};

// Componente para mostrar la descripción del curso
const CourseDetailPage: React.FC<{ course: Cursos }> = ({ course }) => {
  const { data } = useFetchJson<Maestro[]>("../src/data/maestros.json");
  const maestro = data?.find((maestro) => maestro.id === course.maestro_id);
  const navigate = useNavigate();
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Button variant="contained" color="primary" onClick={() => navigate(-1)} sx={{ marginBottom: 2 }}>
        Volver
      </Button>

      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 2,
          marginBottom: 4,
        }}
      >
        {course.imageUrl && (
          <CardMedia
            component="img"
            image={course.imageUrl}
            alt={course.titulo}
            sx={{ width: '100%', height: 200, objectFit: 'cover' }}
          />
        )}
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {course.titulo}
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="body1" color="text.secondary" paragraph>
            {course.descripcion}
          </Typography>
          <Typography variant="body2" color="text.primary">
            Impartido por: {`${maestro?.nombre} ${maestro?.apellido}`}
          </Typography>
          <Typography variant="h6" color="text.primary">
            Precio: ${course.precio}
          </Typography>
        </CardContent>
      </Card>

      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: 2,
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Videos del Curso
          </Typography>
          <CourseVideos videos={[]} />
        </CardContent>
      </Card>
    </Container>
  );
};
export default CourseDetailPage;
