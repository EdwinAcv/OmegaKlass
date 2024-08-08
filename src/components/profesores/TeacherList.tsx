import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const [filter, setFilter] = useState('');
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    setFadeIn(true);
  }, []);

  const filteredTeachers = teachers.filter(teacher =>
    teacher.nombre.toLowerCase().includes(filter.toLowerCase()) ||
    teacher.materia.some(materia => materia.toLowerCase().includes(filter.toLowerCase())) ||
    teacher.sub_abilidades.some(skill => skill.toLowerCase().includes(filter.toLowerCase()))
  );

  const goTo = (id:number) => {
      navigate(`/profesores/perfil/${id}`);
  };

  return (
    <div className='pb-20'>
      <div className="flex flex-col items-center pt-20">
        <input
          type="text"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          placeholder="Filtrar por nombre, materia o habilidad"
          className="mb-4 p-2 border w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-3xl h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
        />
      </div>
      <div className={`flex justify-center items-center py-5 transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {filteredTeachers.map((teacher) => (
            <div key={teacher.id} className="max-w-sm bg-white px-6 pt-6 pb-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 " >
              <h3 className="mb-3 text-xl font-bold text-slate-700">{teacher.nombre} {teacher.apellido}</h3>
              <div className="relative">
                <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{teacher.tutorias ? 'Disponible para tutorías' : 'No disponible para tutorías'}</p>
              </div>
              <img className="mt-4 h-48 w-full object-cover object-center" src={teacher.imagen || ''} alt={teacher.nombre} />
              <div className="flex flex-wrap gap-2">
                {teacher.materia.map((materia, index) => (
                  <div key={index} className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-blue-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                    <div className="mt-px">{materia}</div>
                  </div>
                ))}
              </div>
              <div className="my-4">
                <p>{teacher.descipcion}</p>
                <h2 className="mt-4 text-gray-800 text-xl font-bold cursor-pointer">Habilidades:</h2>
                <ul>
                  {teacher.sub_abilidades.map((skill, index) => (
                    <div key={index} className="center relative inline-flex items-center justify-center m-2 whitespace-nowrap rounded-lg bg-blue-500 py-1 px-2 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                      <div className="mt-px">{skill}</div>
                    </div>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center" >
                <button onClick={() => goTo(teacher.id)} className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white text-center mt-6" style={{ marginTop: '25px' }}>
                  Ver Perfil
                  <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}