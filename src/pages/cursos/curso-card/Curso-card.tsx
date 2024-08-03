import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { CourseCardProps } from "../../../interfaces/cursos";

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  imageUrl,
  onMoreDetails,
}) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
      {imageUrl && (
        <CardMedia
          component="img"
          image={imageUrl}
          alt={title}
          sx={{
            width: '100%',  // Ajusta el ancho al 100% del contenedor
            height: { xs: 100, sm: 140, md: 180 },  // Ajusta la altura según el tamaño de la pantalla
            objectFit: 'cover',  // Mantiene la proporción de la imagen y cubre el área
          }}
        />
      )}
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Button
        onClick={onMoreDetails}
        variant="contained"
        color="primary"
        sx={{ m: 2 }}
      >
        Más detalles
      </Button>
    </Card>
  );
};

export default CourseCard;
