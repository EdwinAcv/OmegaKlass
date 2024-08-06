import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

interface Video {
  id: number;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
}

interface CourseVideosProps {
  videos: Video[];
}

const CourseVideos: React.FC<CourseVideosProps> = ({
  videos,
}: CourseVideosProps) => {
  if (videos.length === 0) {
    return (
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="subtitle2">No hay videos disponibles</Typography>
      </Box>
    );
  }
  return (
    <Box sx={{ marginTop: 4 }}>
      <Grid container spacing={2}>
        {videos.map((video) => (
          <Grid item xs={12} sm={6} md={4} key={video.id}>
            <Card
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
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
  );
};

export default CourseVideos;
