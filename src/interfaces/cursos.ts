export interface Cursos {
  id:    number;
  titulo:      string;
  descripcion: string;
  maestro_id:  number;
  precio:      number;
  imageUrl?:   string;
  videos:      Video[];
}

export interface Video {
  id: number;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
}