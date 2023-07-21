export interface actorCreacionDTO {
    nombre: string;
    fechaNacimiento?: Date;
    foto?: File;
    fotoUrl?: string;
    biografia?: string;
}

export interface actoresPeliculasDTO{
    id: number;
    nombre: string; 
    personaje: string; 
    foto: string;
}