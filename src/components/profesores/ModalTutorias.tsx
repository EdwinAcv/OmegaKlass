import { Dispatch, SetStateAction, useState } from "react";

interface ModalTutoriasProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  hora: {
    time: string;
    event: string;
    id_hora: number;
    disponible: number;
    descripcion: string;
  }[];
  currentDay: string;
  maestroId: number;
}
export const ModalTutorias = ({ setOpen, hora, currentDay, maestroId }: ModalTutoriasProps) => {

  const handleModal = () => {
    setOpen(false);
  }

  const [description, setDescription] = useState(hora[0].descripcion ? hora[0].descripcion : '');

  const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setDescription(event.target.value);
    console.log(currentDay)
  };


  const handleJitsi = () => {
    const conferenceName = 'tutoria?maestro=' + `${maestroId}?` + `hora=${hora[0].id_hora}`;
    window.open(`https://meet.jit.si/${conferenceName}`, '_blank');
  }



  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg " >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start justify-center items-center">

                <div className="mt-3 text-center sm:ml-4 sm:mt-0 w-full">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900" id="modal-title">{hora[0].disponible !== 0 ? 'Solicitar Tutoria' : 'Tutoria'}</h3>
                  <div className="mt-2">
                    <p className="text-base text-gray-500">Hora: {hora[0].time}</p>
                    <textarea
                      className="mt-4 w-full px-2 py-1 text-base text-gray-700 border rounded-lg focus:outline-none"
                      rows={3}
                      placeholder="Descripcion..."
                      value={description}
                      onChange={handleInputChange}
                    ></textarea>    </div>
                </div>


              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              {hora[0].disponible === 0 ? <button type="button" onClick={() => handleJitsi()} className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto">Ver Conferencia</button> : null}
              <button type="button" onClick={() => handleModal()} className="inline-flex w-full justify-center rounded-md bg-green-500  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 sm:ml-3 sm:w-auto">{hora[0].disponible === 0 ? 'Actualizar' : 'Guardar'}</button>
              <button type="button" onClick={() => handleModal()} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
