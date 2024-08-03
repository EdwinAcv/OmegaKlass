import React from 'react';
import CourseCard from '../curso-card/Curso-card';
import { Course } from '../../../interfaces/cursos';
import Grid from '@mui/material/Grid';

interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <Grid container spacing={2} p={2}>
      {courses.map((course, index) => (
        <Grid item xs={12} sm={6} md={2} key={index}>
          <CourseCard
            title={course.title}
            description={course.description}
            imageUrl={course.imageUrl}
            onMoreDetails={course.onMoreDetails}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CourseList;
