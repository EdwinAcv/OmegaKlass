import { Typography } from "@mui/material";
import useFetchJson from "../../hooks/get-data";
import { Cursos } from "../../interfaces/cursos";
import CourseList from "./curso-list/courseList";
import { useState } from "react";

export const CursosPage = () => {
  const { data: cursos } = useFetchJson<Cursos[]>("src/data/cursos.json");
  const [filter, setFilter] = useState("");

  if(!cursos){
    return (
      <div className="min-h-screen flex flex-col items-center p-6 ">
        Loading...
      </div>
    );
  }

  const filteredCourses =
    cursos?.filter((curso) => {
      const searchText = filter.toLowerCase();
      return (
        curso.titulo.toLowerCase().includes(searchText) ||
        curso.descripcion.toLowerCase().includes(searchText)
      );
    }) || [];

  return (
    <div className="m-4 ">
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Cursos disponibles
      </Typography>
      <div className="flex flex-col items-center pt-20">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filtrar por titulo o descripcion"
          className="mb-4 p-2 border w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-3xl h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
        />
      </div>
      {filteredCourses.length === 0 ? (
        <Typography variant="body1" component="body" align="center" gutterBottom>
           Cursos no encontrados
        </Typography>
      ) : (
        <CourseList courses={filteredCourses} />
      )}
    </div>
  );
};
