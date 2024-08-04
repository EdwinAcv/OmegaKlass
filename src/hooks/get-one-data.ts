import { useState, useEffect } from 'react';

// Define una interfaz para el tipo de los datos en tu JSON
interface DataItem {
  id: number;
}

const useGetSingleRecordById = <T extends DataItem>(url: string, id: number) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const contentType = response.headers.get('Content-Type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Expected JSON, but received: ' + contentType);
        }
        const result: T[] = await response.json();

        const record = result.find((item) => item.id === +id);
        setData(record || null);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, id]);

  return { data, loading, error };
};

export default useGetSingleRecordById;
