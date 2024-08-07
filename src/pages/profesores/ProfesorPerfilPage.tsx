import { useState } from 'react';
import useFetchJson from '../../hooks/get-data';
import { Cursos } from '../../interfaces/cursos';
import { Maestro } from '../../interfaces/maestros';
import { useNavigate, useParams } from 'react-router-dom';

export const ProfesorPerfilPage = () => {
    const [activeTab, setActiveTab] = useState('cursos');
    const navigate = useNavigate();

    const { id = 0 } = useParams<{ id: string }>();

    const { data: cursos } = useFetchJson<Cursos[]>('../../src/data/cursos.json');
    const { data: maestros } = useFetchJson<Maestro[]>('../../src/data/maestros.json');

    if (!cursos || !maestros) {
        return <div>Loading...</div>;
    }

    const maestroId = Number(id);
    const maestro = maestros.find((m) => m.id === maestroId);
    const cursosFiltrados = cursos.filter((curso) => curso.maestro_id === maestroId);

    if (!maestro) {
        return <div>Maestro no encontrado</div>;
    }


    const goToCurso = (id: number) => {
        navigate(`/cursos/${id}`);
    };





    return (
        <div className='min-h-screen'>

            <div className="flex flex-col items-center p-6">
                <div className="w-32 h-32 mb-4">
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
                </div>

                <div className="w-full max-w-md">
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

                <div className="mt-4">
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
                            <h2 className="text-xl font-bold mb-2">Tutorías</h2>
                            <p>Contenido de las tutorías.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};