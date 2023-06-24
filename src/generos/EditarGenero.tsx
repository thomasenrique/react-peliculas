/* import { useParams } from "react-router-dom"; */
import FormularioGeneros from "./FormulariGeneros";

export default function EditarGenero() {

    /* const { id }: any = useParams(); */

    return (
        <>
            <h3>Editar Género</h3>

            <FormularioGeneros modelo={{ nombre: 'Acción' }}
                onSubmit={async (valores, acciones) => {
                    await new Promise(r => setTimeout(r, 3000))
                    console.log(valores);
                }}
            />
        </>

    )
}