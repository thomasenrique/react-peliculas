import FormularioPeliculas from "./FormularioPelicula";

export default function EditarPelicula() {
    return (
        <>
            <h3>Editar pelicula</h3>
            <FormularioPeliculas
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