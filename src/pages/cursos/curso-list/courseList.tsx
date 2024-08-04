import React from 'react';
import CourseCard from '../curso-card/Curso-card';
import {  Cursos } from '../../../interfaces/cursos';
import Grid from '@mui/material/Grid';

interface CourseListProps {
  courses: Cursos[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <Grid container spacing={2} p={2}>
      {courses.map((course, index) => (
        <Grid item xs={12} sm={6} md={2} key={index}>
          <CourseCard
            titulo={course.titulo}
            descripcion={course.descripcion}
            imageUrl={course.imageUrl}
            id={course.id}
            precio={course.precio}
            maestro_id={course.maestro_id}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CourseList;
