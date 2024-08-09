export interface Student {
    id:          number;
    nombre:      string;
    apellido:    string;
    correo:    string;
    cursos?:      number[];
    progreso: number[];
    habilidades?: string[];
    descripcion?: string;
    imagen?:      string;
}


export interface StudentCourse {
    studentId: number;
    courses:   Course[];
}

export interface Course {
    courseId: number;
    progress: number;
}
