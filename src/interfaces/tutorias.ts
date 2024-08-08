

interface horas {
    time: string;
    event: string;
    id_hora: number;
    disponible: number;
    descripcion: string;
}


interface fechas {

    dia: string;
    horas: horas[];

}



export interface Tutorias {
    maestro_id:     number;
    fechas:         fechas[];
}
