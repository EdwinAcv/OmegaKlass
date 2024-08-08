import { useState } from 'react';
import useFetchJson from '../../hooks/get-data';
import { Cursos } from '../../interfaces/cursos';
import { Maestro } from '../../interfaces/maestros';
import { useNavigate, useParams } from 'react-router-dom';
import { TutoriasCalendar } from '../../components/profesores/TutoriasCalendar';

export const ProfesorPerfilPage = () => {
    const [activeTab, setActiveTab] = useState('cursos');
    const navigate = useNavigate();

    const { id = 0 } = useParams<{ id: string }>();

    const { data: cursos } = useFetchJson<Cursos[]>('../../src/data/cursos.json');
    const { data: maestros } = useFetchJson<Maestro[]>('../../src/data/maestros.json');

    if (!cursos || !maestros) {
        return <div className='min-h-screen flex flex-col items-center p-6 '>Loading...</div>;
    }

    const maestroId = Number(id);
    const maestro = maestros.find((m) => m.id === maestroId);
    const cursosFiltrados = cursos.filter((curso) => curso.maestro_id === maestroId);


    if (!maestro) {
        return <div  className='min-h-screen flex flex-col items-center p-6'
        >Maestro no encontrado</div>;
    }


    const goToCurso = (id: number) => {
        navigate(`/cursos/${id}`);
    };





    return (
        <div className='min-h-screen bg-gray-100'>

            <div className="flex flex-col items-center p-6">
           
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div className="col-span-4 sm:col-span-3">
                        <div className="bg-white shadow rounded-lg p-6">
                            <div className="flex flex-col items-center">
                                <img src={maestro.imagenPerfil} alt={maestro.nombre} className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" />
                                <h1 className="text-xl font-bold">{maestro.nombre} {maestro.apellido}</h1>
                                <p className="text-gray-700">{maestro.profesion}</p>
                                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                    <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                                    <a href="#" className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Resume</a>
                                </div>
                            </div>
                            <hr className="my-6 border-t border-gray-300" />
                            <div className="flex flex-col">
                                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Habilidades</span>
                                <ul>
                                    {maestro.sub_abilidades.map((habilidad, index) => (
                                        <li key={index} className="mb-2">{habilidad}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 sm:col-span-9">
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4">Sobre mi</h2>
                            <p className="text-gray-700">{maestro.descipcion}</p>

                      

                            {/* <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2> */}
                            {/* {maestro.experiencia.map((exp, index) => (
                                <div key={index} className="mb-6">
                                    <div className="flex justify-between flex-wrap gap-2 w-full">
                                        <span className="text-gray-700 font-bold">Web Developer</span>
                                        <p>
                                            <span className="text-gray-700 mr-2">at {exp.empresa}</span>
                                            <span className="text-gray-700">{exp.fecha}</span>
                                        </p>
                                    </div>
                                    <p className="mt-2">
                                        {exp.descripcion}
                                    </p>
                                </div>
                            ))} */}
                        </div>
                        

                        <div >
                    <div className="flex border-b">
                  

                        <button
                            className={`flex-1 py-2 text-center ${activeTab === 'cursos' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('cursos')}
                        >
                            Cursos
                        </button>
                        <button
                            className={`flex-1 py-2 text-center ${activeTab === 'tutorias' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('tutorias')}
                        >
                            Tutorías
                        </button>
                    </div>

                </div>

                <div className="mt-2">
                    {activeTab === 'cursos' && (
                        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                            {cursosFiltrados.map((course) => (
                                <div key={course.id} className="max-w-sm bg-white px-6 pt-6 pb-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                                    <h3 className="mb-3 text-xl font-bold text-slate-700">{course.titulo}</h3>
                                    <div className="relative">
                                        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">Precio: ${course.precio}</p>
                                    </div>
                                    <img className="mt-4 h-48 w-full object-cover object-center" src={course.imageUrl || ''} alt={course.titulo} />
                                    <div className="my-4">
                                        <p>{course.descripcion}</p>
                                    </div>
                                    <div className="flex justify-center" >
                                        <button onClick={() => goToCurso(course.id)} className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white text-center mt-6" style={{ marginTop: '25px' }}>
                                            Ver Curso
                                            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                        </button>
                                    </div>

                                </div>
                            ))}
                        </div>
                    )}
                    {activeTab === 'tutorias' && (
                        <div>
                            {/* <h2 className="text-xl font-bold mb-2">Tutorías</h2> */}
                            {/* <p>Contenido de las tutorías.</p> */}

                            <TutoriasCalendar id={maestroId} />
                        </div>
                    )}
                
                </div>
                    </div>

            
                </div>
            </div>
{/* </div>

    </div> */}
                {/* <div className="w-32 h-32 mb-4">
                    <img
                        src="https://via.placeholder.com/150/18233A/FFFFFF?text=Física+para+Principiantes"
                        alt="Perfil del Profesor"
                        className="w-full h-full rounded-full object-cover"
                    />
                </div>
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold mb-2">{maestro.nombre + ' ' + maestro.apellido}</h1>
                    <div className="max-w-md mx-auto">
                        <p className="text-gray-600">{maestro.descipcion}</p>
                    </div>
                </div> */}

                
            </div>
        </div>

    );
};