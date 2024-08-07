import { Typography } from "@mui/material";
import useFetchJson from "../../hooks/get-data";
import { Cursos } from "../../interfaces/cursos";
import CourseList from "./curso-list/courseList";

export const CursosPage = () => {
  const { data: cursos } = useFetchJson<Cursos[]>("src/data/cursos.json");
  return (
    <div className="m-4 gap-2">
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Cursos disponibles
      </Typography>
        <CourseList courses={cursos || []} />
    </div>
  );
};
