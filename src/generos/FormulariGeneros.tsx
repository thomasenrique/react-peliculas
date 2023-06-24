import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { generoCreacionDTPO } from "./generos.models";

export default function FormularioGeneros(props: formularioGenerosProps) {
    return (
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}

            validationSchema={Yup.object({
                nombre: Yup.string().required("Este campo es requerido").primeraLetraMayuscula()
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
    )
}

interface formularioGenerosProps {
    modelo: generoCreacionDTPO;
    onSubmit(valores: generoCreacionDTPO, acciones: FormikHelpers<generoCreacionDTPO>): void;

}