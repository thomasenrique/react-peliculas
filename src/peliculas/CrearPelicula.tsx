import FormularioPeliculas from "./FormularioPelicula";

export default function CrearPelicula() {
    return (
        <>
            <h3>Crear pelicula</h3>
            <FormularioPeliculas
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