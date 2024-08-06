import React from "react";
import {
  List,
  ListItemText,
  Typography,
  ListItemButton,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  name: string;
  email: string;
}

const Sidebar: React.FC<SidebarProps> = ({ name, email }) => {
  return (
    <Paper elevation={3} sx={{ width: 250, padding: 2, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Información del Estudiante
      </Typography>
      <Typography variant="subtitle1">{name}</Typography>
      <Typography variant="body2">{email}</Typography>

    </Paper>
  );
};


interface props2 {
  courses: { id: number; title: string }[];
}
export const CursosAsignados = ({ courses }: props2) => {
  const navigate = useNavigate();

  const handleCourseClick = (curso_id: number) => {
    navigate(`/estudiante/curso/${curso_id}`);
  };
  if (courses.length === 0) {
    return (
        <Paper elevation={3} sx={{ width: 250, padding: 2, borderRadius: 2 }}>

        <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
          Cursos Asignados
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ marginTop: 2 }}>
          No tienes cursos asignados
        </Typography>
      </Paper>
    );
  }
  return (
    <Paper elevation={3} sx={{ width: 250, padding: 2, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
        Cursos Asignados
      </Typography>
      <List>
        {courses.map((course) => (
          <ListItemButton
            onClick={() => handleCourseClick(course.id)}
            key={course.id}
          >
            <ListItemText primary={course.title} />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
};

export default Sidebar;
