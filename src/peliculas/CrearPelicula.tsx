import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.models";
import FormularioPeliculas from "./FormularioPelicula";

export default function CrearPelicula() {

    const generos: generoDTO[] = [
        { id: 1, nombre: "Acción" },
        { id: 2, nombre: "Drama" },
        { id: 3, nombre: "Comedia" },
    ]

    const cines: cineDTO[] = [
        { id: 1, nombre: "cinemark" },
        { id: 2, nombre: "cinePlanet" },

    ]

    return (
        <>
            <h3>Crear pelicula</h3>
            <FormularioPeliculas
                actoresSeleccionados={[]}
                cinesNoSeleccionados={cines}
                cinesSeleccionados={[]}
                generosNoSeleccionados={generos}
                generosSeleccionados={[]}
                modelo={
                    {
                        titulo: '',
                        enCines: false,
                        trailer: ''
                    }}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}