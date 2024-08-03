import { useParams } from "react-router-dom";


//todo terminar esto
export const DetalleCursoPage = () => {
    const { id } = useParams<{ id: string }>();
    return (
      <div>detalleCursoPage
          <pre>{id}</pre>
      </div>
    
    )
  }
  