// hooks/useCourses.ts
import { useState, useEffect } from 'react';
import useGetSingleRecordById from '../../../hooks/get-one-data';
import { Cursos } from '../../../interfaces/cursos';

export const useCourses = (courseId: number) => {
  const [courses, setCourses] = useState<Cursos | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data } = await useGetSingleRecordById<Cursos>(
        "../../src/data/cursos.json", // Ajusta la ruta según tu estructura
        courseId
      );
      setCourses(data);
    };

    fetchCourses();
  }, [courseId]);

  return courses;
};
