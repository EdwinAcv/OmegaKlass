import CourseList from "./curso-list/courseList";

const courses = [
  {
    title: "Curso de React",
    description: "Aprende React desde cero con este curso completo.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s",
    onMoreDetails: () => alert("Más detalles del curso de React"),
  },
  {
    title: "Curso de Tailwind CSS",
    description: "Domina el diseño con Tailwind CSS.",
    imageUrl: "https://via.placeholder.com/300",
    onMoreDetails: () => alert("Más detalles del curso de Tailwind CSS"),
  },
  // Agrega más cursos según sea necesario
];

export const CursosPage = () => {
  return (
    <>
        <h1>Cursos Page</h1> 
      <CourseList courses={courses} />
    </>
  )
}

