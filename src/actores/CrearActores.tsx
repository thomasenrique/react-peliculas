import { FormikHelpers } from "formik";
import FormularioActores from "./FormularioActores";
import { actorCreacionDTO } from "./actores.model";

export default function CrearActores() {
    return (<>
        <h3>Crear actor</h3>
        <FormularioActores
            modelo={{ nombre: '', fechaNacimiento: undefined }}
            onSubmit={valores => console.log(valores)}
        />
    </>)
}