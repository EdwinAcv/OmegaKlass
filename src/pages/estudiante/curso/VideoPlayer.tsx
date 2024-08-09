// components/VideoPlayer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Video } from '../../../interfaces/cursos'; // Ajusta la ruta según tu estructura

interface VideoPlayerProps {
  video: Video | null;
}

function isYouTubeUrl(url:string) {
  const youtubePattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)[\w-]{11}$/;
  return youtubePattern.test(url);
}


const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {

  if (!video) {
    return (
      <Box sx={{ padding: 4 }}>
        <Typography variant="h6">Selecciona un video para ver</Typography>
      </Box>
    );
  }

  if(isYouTubeUrl(video.videoUrl)) {
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Reproduciendo Video
      </Typography>
      <iframe
        width="100%"
        height="315"
        src={video.videoUrl}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Box>
  }

  return (
    <Box sx={{ padding: 4 }}>
      <video controls style={{ width: '100%' }} src={video.videoUrl}  />
    </Box>
  );
};

export default VideoPlayer;
