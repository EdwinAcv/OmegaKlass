import PageTransition from "../../components/pageTransition";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import useFetchJson from "../../hooks/get-data";
import { Cursos } from "../../interfaces/cursos";
import CourseCard from "../cursos/curso-card/Curso-card";

const studentInfo = {
  id: 1,
  nombre: "Felix",
  apellido: "Artiles",
  correo: 'felixartiles97@gmail.com',
  cursos: [1, 2, 3, 4],
  progreso: [10, 0, 30, 40],
  imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM-rOOnMk-Uukdm6uI-h3W4rkIErLTQBqJ_w&s',
  habilidades: [
    "Matemáticas Básicas",
    "Física para Principiantes",
    "Álgebra Avanzada",
    "Programcacion",
  ],
  descripcion:
    "Estudiante de ingenieria en sistemas, con 2 años de experiencia en programacion y 1 año en matematicas y fisica.",
};

export const PerfilEstudiantePage = () => {
  const navigator = useNavigate();
  const { data: cursos } = useFetchJson<Cursos[]>("../src/data/cursos.json");

  if (!cursos) {
    return (
      <div className="min-h-screen flex flex-col items-center p-6 ">
        Loading...
      </div>
    );
  }

  const cursosFiltrados = cursos.filter((curso) =>
    studentInfo.cursos.includes(curso.id)
  );
 
  const goToCourse = (curso_id:number) => {
    navigator(`/estudiante/curso/?student=${studentInfo.id}&course=${curso_id}`);
  };
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-100">
        <div className="flex flex-col items-center p-6">
          <div className="container mx-auto py-8">
            <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
              <div className="col-span-4 sm:col-span-3">
                <Sidebar stundent={studentInfo} />
              </div>
              <div className="col-span-4 sm:col-span-9">
                <div className="bg-white shadow rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Sobre mi</h2>
                  <p className="text-gray-700">{studentInfo.descripcion}</p>
                </div>

                <div className="mt-2">
                  <h1 className="text-4xl">Mis cursos</h1>
                  <div className="mt-2 md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                    {cursosFiltrados.length === 0 ? (
                      <p>No tienes cursos asignados</p>
                    ) : (
                      cursosFiltrados.map((course,index) => (
                        <CourseCard curso={course} progreso={studentInfo.progreso[index]} goToDetail={() => goToCourse(course.id)} />
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
