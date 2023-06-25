import FormularioCines from "./FormularioCines";

export default function CrearCine() {
    return (<>
        <h3>Crear cine</h3>
        <FormularioCines
            modelo={{
                nombre: ''
            }}
            onSubmit={valores => console.log(valores)}
        />
    </>)
}