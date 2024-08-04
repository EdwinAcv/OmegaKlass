import useFetchJson from "../../hooks/get-data";
import { Cursos } from "../../interfaces/cursos";
import CourseList from "./curso-list/courseList";


export const CursosPage = () => {
  const {data:cursos} = useFetchJson<Cursos[]>('src/data/cursos.json')
  return (
    <>
        <h1>Cursos disponibles</h1> 
      <CourseList courses={cursos || []} />
    </>
  )
}

