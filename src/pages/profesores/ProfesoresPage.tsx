import { TeacherList } from "../../components/profesores/TeacherList";
import useFetchJson from "../../hooks/get-data";
import { Maestro } from "../../interfaces/maestros";

export const ProfesoresPage = () => {
  const { data } = useFetchJson<Maestro[]>(
    "src/data/maestros.json"
  );

  return (
    <div>
      {/* ProfesoresPage
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {data && <TeacherList teachers={data}/>}
    </div>
  );
};
