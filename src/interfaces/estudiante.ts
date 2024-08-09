export interface Student {
    id:          number;
    nombre:      string;
    apellido:    string;
    edad:        number;
    cursos?:      number[];
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
