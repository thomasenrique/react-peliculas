import FormularioActores from "./FormularioActores";

export default function EditarActores() {
    return (<>
        <h3>Editar actor</h3>
        <FormularioActores
            modelo={
                {
                    nombre: 'TOM',
                    biografia: '# Andori',
                    fechaNacimiento: new Date('1997-11-01T00:00:00'),
                    fotoUrl: 'https://m.media-amazon.com/images/M/MV5BNDQxYjA0ZWYtNjU3Yi00NTRlLWJhOTUtZTFhYjM2OTVjYmFlXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg'
                }
            }
            onSubmit={valores => console.log(valores)}
        />
    </>)
}