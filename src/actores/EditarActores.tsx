import FormularioActores from "./FormularioActores";

export default function EditarActores() {
    return (<>
        <h3>Editar actor</h3>
        <FormularioActores
            modelo={
                {
                    nombre: 'TOM',
                    fechaNacimiento: new Date('1997-11-01T00:00:00')
                }
            }
            onSubmit={valores => console.log(valores)}
        />
    </>)
}