export interface Maestro {
    id:             number;
    nombre:         string;
    apellido:       string;
    imagen?:        string;
    materia:        string[];
    sub_abilidades: string[];
    descipcion:     string;
    tutorias:       boolean;
}
