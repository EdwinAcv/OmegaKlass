interface Teacher {
  id: number;
  nombre: string;
  apellido: string;
  imagen?: string;
  materia: string[];
  sub_abilidades: string[];
  descipcion: string;
  tutorias: boolean;
}

interface TeacherListProps {
  teachers: Teacher[];
}

export const TeacherList: React.FC<TeacherListProps> = ({ teachers }) => {
  return (
    <div className="min-h-screen flex justify-center items-center py-20">
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-indigo-600">{teacher.nombre} {teacher.apellido}</h3>
            <div className="relative">
              <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{teacher.tutorias ? 'Disponible para tutorías' : 'No disponible para tutorías'}</p>
            </div>
            {/* <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{teacher.materia.join(', ')}</h1> */}
            <div className="flex gap-2">
              {teacher.materia.map((materia, index) => (
                <div key={index} className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-blue-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                  <div className="mt-px">{materia}</div>
                </div>
              ))}
            </div>
            <div className="my-4">
              <p>{teacher.descipcion}</p>
              <h2 className="mt-4 text-gray-800 text-xl font-bold cursor-pointer">Sub habilidades:</h2>
              <ul>
              {teacher.sub_abilidades.map((skill, index) => (
  <div key={index} className="center relative inline-flex items-center justify-center m-2 whitespace-nowrap rounded-lg bg-blue-500 py-1 px-2 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
    <div className="mt-px">{skill}</div>
  </div>
))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}