// components/VideoPlayer.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { Video } from "../../../interfaces/cursos"; // Ajusta la ruta según tu estructura

interface VideoPlayerProps {
  video: Video | null;
}

function isYouTubeUrl(url: string) {
  const youtubePattern =
    /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)[\w-]{11}$/;
  return youtubePattern.test(url);
}
const convertToEmbedUrl = (url: string) => {
  // Expresión regular para encontrar el ID del video en la URL de YouTube
  const youtubeRegex =
    /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=|.+\/videoseries\?list=)?([^"&?/\s]{11})/;
  const match = url.match(youtubeRegex);

  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  } else {
    return null; // O manejar el caso en que la URL no sea válida
  }
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
  if (!video) {
    return (
      <Box sx={{ padding: 4 }}>
        <Typography variant="h6">Selecciona un video para ver</Typography>
      </Box>
    );
  }

  if (isYouTubeUrl(video.videoUrl)) {
    return (
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Reproduciendo Video
        </Typography>
        <iframe
          width="100%"
          height="315"
          src={convertToEmbedUrl(video.videoUrl) || video.videoUrl}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 4 }}>
      <video controls style={{ width: "100%" }} src={video.videoUrl} />
    </Box>
  );
};

export default VideoPlayer;
