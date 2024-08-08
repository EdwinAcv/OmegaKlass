import { useState, useEffect } from 'react';
import useFetchJson from '../../hooks/get-data';
import { ModalTutorias } from './ModalTutorias';

interface TutoriasCalendarProps {
  id: number;
}

interface hora {
  time: string;
  event: string;
  id_hora: number;
  disponible: number;
  descripcion: string;
}
 interface Tutorias {
  maestro_id: number;
  fechas: {
    dia: string;
    horas: hora[];
  }[];
}

export const TutoriasCalendar = ({ id }: TutoriasCalendarProps) => {
  const { data: schedule } = useFetchJson<Tutorias[]>(
    "../../src/data/tutorias_maestro.json"
  );

  const [open, setOpen] = useState<boolean>(false);

  const [horaState, setHoraState] = useState<hora[]>([]);

  const [currentTeacher, setCurrentTeacher] = useState<Tutorias | null>(null);
  const [currentDay, setCurrentDay] = useState<string>("");
  const [noData, setNoData] = useState<boolean>(false);

  useEffect(() => {
    if (schedule) {
      const filteredSchedule = schedule.filter(item => item.maestro_id === id);
      if (filteredSchedule.length > 0) {
        setCurrentTeacher(filteredSchedule[0]);
        setCurrentDay(filteredSchedule[0].fechas[0].dia);
        setNoData(false);
      } else {
        setNoData(true);
      }
    } else {
      setNoData(true);
    }
  }, [schedule, id]);

  const handlePreviousDay = () => {
    if (currentTeacher) {
      const days = currentTeacher.fechas.map(fecha => fecha.dia);
      const currentIndex = days.indexOf(currentDay);
      if (currentIndex > 0) {
        setCurrentDay(days[currentIndex - 1]);
      }
    }
  };

  const handleNextDay = () => {
    if (currentTeacher) {
      const days = currentTeacher.fechas.map(fecha => fecha.dia);
      const currentIndex = days.indexOf(currentDay);
      if (currentIndex < days.length - 1) {
        setCurrentDay(days[currentIndex + 1]);
      }
    }
  };

  const handleModal = (hora?:hora) => {
    if(hora){
      setHoraState([hora])
    }
   
    setOpen(!open);
  }

  return (
<div className="flex flex-col items-center p-6">
  <section className="w-full bg-white antialiased">
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-6 lg:py-8">
      <div className="max-w-3xl mx-auto text-center">
        {noData ? (
          <div className="mt-4 text-lg font-medium text-red-600">
            Tutorias no disponibles
          </div>
        ) : (
          <>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 ">
              Calendario
            </h2>
            <div className="mt-4">
              <div className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
                <button onClick={handlePreviousDay} className="mr-2">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 10H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {currentDay}
                <button onClick={handleNextDay} className="ml-2">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
              <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
                {currentTeacher &&
                  currentTeacher.fechas
                    .find((fecha) => fecha.dia === currentDay)
                    ?.horas.map((item, index) => (
                        <div
                        key={index}
                        className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center justify-center "
                      >
                        <p className="w-32 text-lg font-normal sm:text-right shrink-0">
                          {item.time}
                        </p>
                        <h3 className="text-lg font-semibold">
                          <a
                            href="#"
                            onClick={() => handleModal(item)}
                            className={`hover:underline ${item.disponible === 0 ? 'text-gray-500' : ''}`}
                          >
                         {`${item.event}`}
                          </a>
                          <p className="text-sm text-gray-700 text-center">
                          {item.descripcion}
                        </p>
                        </h3>
                       
                      </div>
                    ))}
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePreviousDay}
                className="px-4 py-2 font-medium bg-primary-600 rounded hover:bg-primary-700"
              >
                Anterior
              </button>
              <button
                onClick={handleNextDay}
                className="px-4 py-2 font-medium bg-primary-600 rounded hover:bg-primary-700"
              >
                Siguiente
              </button>
            </div>
          </>
        )}

        {open && (<ModalTutorias setOpen={setOpen} hora={horaState} currentDay={currentDay} maestroId={id}/>)}
      </div>
    </div>
  </section>
</div>
  );
};