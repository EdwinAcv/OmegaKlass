import { CircularSpinner } from "../../components/CircularSpinner";
import { TeacherList } from "../../components/profesores/TeacherList";
import useFetchJson from "../../hooks/get-data";
import { Maestro } from "../../interfaces/maestros";

export const ProfesoresPage = () => {
  const { data } = useFetchJson<Maestro[]>(
    "src/data/maestros.json"
  );

   if (!data) {
    return <div className='min-h-screen flex flex-col items-center p-6 justify-center'><CircularSpinner/></div>;
  }

  return (
    <div className='min-h-screen bg-gray-100'>
      {/* ProfesoresPage
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {data && <TeacherList teachers={data}/>}
    </div>
  );
};
