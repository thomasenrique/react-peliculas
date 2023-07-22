import { actorCreacionDTO, actoresPeliculasDTO } from "../actores/actores.model";
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

    const actoresSeleccionados: actoresPeliculasDTO[] = [{ id: 1, nombre: "Tom", personaje: "Spiderman", foto: "https://cdn-3.expansion.mx/dims4/default/1eae21e/2147483647/strip/true/crop/1200x800+0+0/resize/1200x800!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Ffa%2F8e%2F29bb50ef42e6a48c53919cc965e0%2Ftom-holland-reaparece-brevemente-redes-sociales-3.jpg" }];



    return (
        <>
            <h3>Editar pelicula</h3>
            <FormularioPeliculas
                actoresSeleccionados={actoresSeleccionados}
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