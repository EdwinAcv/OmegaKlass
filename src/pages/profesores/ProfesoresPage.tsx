import useFetchJson from "../../hooks/get-data";
import { MaestrosResponse } from "../../interfaces/maestros";

export const ProfesoresPage = () => {
  const { data } = useFetchJson<MaestrosResponse[]>(
    "src/data/maestros.json"
  );
 
  return (
    <div>
      ProfesoresPage
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
