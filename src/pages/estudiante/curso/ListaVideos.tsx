// components/ListaVideos.tsx
import React, { useState } from "react";
import { Typography, ListItemText, ListItem, List } from "@mui/material";
import { Video } from "../../../interfaces/cursos"; // Ajusta la ruta según tu estructura
import { mainThemes } from "../../../themes";

interface ListaVideosProps {
  videos: Video[];
  onVideoSelect: (video: Video) => void;
}

const ListaVideos: React.FC<ListaVideosProps> = ({ videos, onVideoSelect }) => {
  const [selectedVideoId, setSelectedVideoId] = useState<number | null>(null);

  const handleVideoSelect = (video: Video) => {
    setSelectedVideoId(video.id);
    onVideoSelect(video);
  };

  return (
    <List>
      {videos.map((video) => (
        <ListItem
          key={video.id}
          sx={{
            display: 'inline-flex',
            flexDirection: 'column',
            width: 200,
            cursor: 'pointer',
            marginRight: 2,
            marginTop: 2,
            transition: 'transform 0.3s, box-shadow 0.3s',
            border: '2px solid',
            color: selectedVideoId === video.id ? mainThemes.palette.primary.light : mainThemes.palette.primary.dark, // Cambia el color del texto según la selección
            borderColor: selectedVideoId === video.id ? mainThemes.palette.primary.main : mainThemes.palette.primary.dark, // Cambia el color del borde según la selección
            borderRadius: 2,
            backgroundColor: selectedVideoId === video.id ? mainThemes.palette.primary.main : 'transparent', // Cambia el color de fondo según la selección
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }
          }}
          onClick={() => handleVideoSelect(video)}
        >
          <ListItemText
            primary={<Typography variant="h6">{video.title}</Typography>}
            sx={{ textAlign: "center" }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ListaVideos;
