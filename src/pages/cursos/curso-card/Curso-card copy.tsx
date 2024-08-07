import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { Cursos } from "../../../interfaces/cursos";
import { useNavigate } from "react-router-dom";
import { transformCurrency } from "../../../helpers/transform-currency";

const CourseCard: React.FC<Cursos> = ({
  descripcion,
  id,
  precio,
  titulo,
  imageUrl,
}) => {
  const navigator = useNavigate();
  const goTo = () => {
      navigator(`/cursos/${id}`);
  };
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea onClick={goTo}>
        {imageUrl && (
          <CardMedia
            component="img"
            image={imageUrl}
            alt={titulo}
            sx={{
              width: "100%", // Ajusta el ancho al 100% del contenedor
              height: { xs: 100, sm: 140, md: 180 }, // Ajusta la altura según el tamaño de la pantalla
              objectFit: "cover", // Mantiene la proporción de la imagen y cubre el área
            }}
          />
        )}
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {titulo}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3, // Número de líneas visibles
              height: "4.5rem", // Altura máxima basada en el número de líneas
              lineHeight: "1.5rem", // Altura de cada línea
            }}
          >
            {descripcion}
          </Typography>
        </CardContent>

        <hr />
        <Typography variant="caption" color="text.secondary">
          Precio: {transformCurrency(precio, "DOP")}
        </Typography>
      </CardActionArea>
    </Card>
  );
};

export default CourseCard;
