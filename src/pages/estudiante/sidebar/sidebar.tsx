import React from "react";
import {
  List,
  ListItemText,
  Typography,
  ListItemButton,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { mainThemes } from "../../../themes";
import { Student } from "../../../interfaces/estudiante";

interface SidebarProps {
  stundent: Student;
}

const Sidebar: React.FC<SidebarProps> = ({ stundent }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex flex-col items-center">
        <img src={stundent.imagen} alt={stundent.nombre} className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" />
        <h1 className="text-xl font-bold">
          {stundent.nombre} {stundent.apellido}
        </h1>
        <p className="text-gray-700">{stundent.correo}</p>
       
      </div>
      <hr className="my-6 border-t border-gray-300" />
      <div className="flex flex-col">
        <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
          Habilidades
        </span>
        {!stundent.habilidades ? (
          <p>No hay habilidades</p>
        ) : (
          <ul>
            {stundent.habilidades!.map((habilidad, index) => (
              <li key={index} className="mb-2">
                {habilidad}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
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
            sx={{
              "&:hover": {
                borderRadius: "8px",
                backgroundColor: mainThemes.palette.primary.main,
                color: "white", // Utilizar el color primario del tema
              },
            }}
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
