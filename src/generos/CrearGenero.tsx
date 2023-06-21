import { Link } from "react-router-dom";
import Button from "../utils/Button";
import { Form, Formik } from "formik";
import * as yup from 'yup';
import FormGroupText from "../utils/FormGroupText";

export default function CrearGenero() {
    /* const history = useHistory(); */
    return (
        <>
            <h3>Crear Género</h3>
            <Formik initialValues={{
                nombre: ''
            }}
                onSubmit={async values => {
                    await new Promise(r => setTimeout(r => {
                        console.log(values)
                    }, 400));
                }}

                validationSchema={yup.object({
                    nombre: yup.string().required("Este campo es requerido").primeraLetraMayuscula()
                })}
            >
                {(formikProps) => (
                    <Form>
                        <FormGroupText campo="nombre" label="Nombre" placeholder="Acción" />

                        <Button disabled={formikProps.isSubmitting} type="submit">Guardar</Button>
                        <Link className="btn btn-secondary" to={"/generos"}>Cancelar</Link>
                    </Form>
                )}
            </Formik>

            {/* <Button onClick={() => history.push('/generos')}>Salvar</Button> */}
        </>
    )
}