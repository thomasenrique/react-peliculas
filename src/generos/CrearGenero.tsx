import FormularioGeneros from "./FormulariGeneros";

export default function CrearGenero() {
    /* const history = useHistory(); */
    return (
        <>
            <h3>Crear Género</h3>
            <FormularioGeneros modelo={{ nombre: '' }}
                onSubmit={async (valores, acciones) => {
                    await new Promise(r => setTimeout(r, 3000))
                    console.log(valores);
                }}
            />
        </>
    )
}