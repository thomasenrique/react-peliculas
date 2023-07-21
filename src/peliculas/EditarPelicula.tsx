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

    return (
        <>
            <h3>Editar pelicula</h3>
            <FormularioPeliculas
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