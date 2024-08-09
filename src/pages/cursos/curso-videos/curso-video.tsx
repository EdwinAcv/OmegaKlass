import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Video } from "../../../interfaces/cursos";

interface CourseVideosProps {
  videos: Video[];
}

const CourseVideos: React.FC<CourseVideosProps> = ({ videos }: CourseVideosProps) => {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleOpen = (video: Video) => {
    setSelectedVideo(video);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo(null);
  };

  if (videos.length === 0) {
    return (
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="subtitle2">No hay videos disponibles</Typography>
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ marginTop: 4 }}>
        <Grid container spacing={2}>
          {videos.map((video) => (
            <Grid item xs={12} sm={6} md={4} key={video.id}>
              <Card
                sx={{ display: "flex", flexDirection: "column", height: "100%", cursor: "pointer" }}
                onClick={() => handleOpen(video)}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={video.thumbnailUrl}
                  alt={video.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6">{video.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box sx={{ position: 'relative', width: '80%', maxWidth: '800px' }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 10, right: 10, color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
          {selectedVideo && (
            <video
              controls
              style={{ width: '100%' }}
              src={selectedVideo.videoUrl}
              // alt={selectedVideo.title}
            />
          )}
        </Box>
      </Modal>
    </>
  );
};

export default CourseVideos;
