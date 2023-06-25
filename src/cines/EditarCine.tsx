import FormularioCines from "./FormularioCines";

export default function EditarCine() {
    return (<>
        <h3>Editar cine</h3>
        <FormularioCines
            modelo={{
                nombre: 'CineMark',
                latitud: -33.5176355,
                longitud: -70.5981949
            }}
            onSubmit={valores => console.log(valores)}
        />
    </>)
}