import { Form, Formik, FormikHelpers } from "formik";
import { actorCreacionDTO } from "./actores.model";
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import FormGroupFecha from "../utils/FormGroupFecha";

export default function FormularioActores(props: formularioActoresProps) {


    return (<Formik
        initialValues={props.modelo}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula(),
            fechaNacimiento: Yup.date().nullable().required('Este campo es requerido')
        })}
    >
        {(formikProps) => (
            <Form>
                <FormGroupText campo='nombre' label='Nombre' />
                <FormGroupFecha label="Fecha nacimiento" campo="fechaNacimiento" />
                <Button
                    disabled={formikProps.isSubmitting}
                    type="submit"
                >Salvar</Button>

                <Link
                    className="btn btn-secondary"
                    to={"/actores"}
                >Cancelar </Link>
            </Form>
        )}
    </Formik>)
}

interface formularioActoresProps {
    modelo: actorCreacionDTO;
    onSubmit(valores: actorCreacionDTO, acciones: FormikHelpers<actorCreacionDTO>): void;
}