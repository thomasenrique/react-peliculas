import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.models";
import FormularioPeliculas from "./FormularioPelicula";

export default function EditarPelicula() {

    const generosNoSeleccionados: generoDTO[] = [
        { id: 2, nombre: "Drama" },
    ]
    const generosSeleccionados: generoDTO[] = [
        { id: 1, nombre: "Acción" },
        { id: 3, nombre: "Comedia" },
    ]

    const cinesSeleccionados: cineDTO[] = [
        { id: 2, nombre: "cinePlanet" },

    ]
    const cinesNoSeleccionados: cineDTO[] = [
        { id: 1, nombre: "cinemark" },
    ]



    return (
        <>
            <h3>Editar pelicula</h3>
            <FormularioPeliculas
                cinesSeleccionados={cinesSeleccionados}
                cinesNoSeleccionados={cinesNoSeleccionados}
                generosNoSeleccionados={generosNoSeleccionados}
                generosSeleccionados={generosSeleccionados}
                modelo={
                    {
                        titulo: 'Spiderman',
                        enCines: true,
                        trailer: 'URL',
                        fechaLanzamiento: new Date('2023-06-06T00:00:00')
                    }}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}