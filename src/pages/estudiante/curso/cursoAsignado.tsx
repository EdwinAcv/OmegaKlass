import { useNavigate, useSearchParams } from "react-router-dom";
import PageTransition from "../../../components/pageTransition";
import { Container, Typography, Paper, Grid, Button } from "@mui/material";
import useGetSingleRecordById from "../../../hooks/get-one-data";
import { Cursos, Video } from "../../../interfaces/cursos";
import { useState } from "react";
import ListaVideos from "./ListaVideos";
import VideoPlayer from "./VideoPlayer";

interface Props {
  onVideoSelect: (video: Video) => void;
}
const Sidebar = ({ onVideoSelect }: Props) => {
  const [searchParams] = useSearchParams();

  // const stundent_id = searchParams.get("student") || 0;
  const course_id = searchParams.get("course") || 0;

  const navigate = useNavigate();
  const {
    data: curso,
    error,
    loading,
  } = useGetSingleRecordById<Cursos>("../../src/data/cursos.json", +course_id);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!curso) return <p>No data found</p>;

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex flex-col items-center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(-1)}
        >
          Volver
        </Button>
        <Typography variant="h6" component="div" sx={{ marginTop: 2 }}>
          {curso.titulo}
        </Typography>
      </div>
      <hr className="my-6 border-t border-gray-300" />
      <div className="flex flex-col">
        <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
          Clases
        </span>
        <ListaVideos videos={curso.videos} onVideoSelect={onVideoSelect} />
      </div>
    </div>
  );
};

export const CursoAsignado = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-100">
        <div className="flex flex-col items-center p-6">
          <div className="container mx-auto py-8">
            <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
              <div className="col-span-4 sm:col-span-3">
                <Sidebar onVideoSelect={handleVideoSelect} />
              </div>
              <div className="col-span-4 sm:col-span-9">
                <div className="bg-white shadow rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">{selectedVideo?.title}</h2>
                  {/* videos */}
                  <VideoPlayer video={selectedVideo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
  return (
    <PageTransition>
      <Container sx={{ marginTop: 4, marginBottom: 4 }}>
        <Grid container spacing={2}>
          {/* Columna para el Sidebar y CursosAsignados */}
          <Grid item xs={12} md={3}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  {/* Videos */}
                  <Sidebar onVideoSelect={handleVideoSelect} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          {/* Columna para el contenido principal */}
          <Grid item xs={12} md={9}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <VideoPlayer video={selectedVideo} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </PageTransition>
  );
};
