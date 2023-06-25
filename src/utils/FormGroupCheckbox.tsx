import { Field, ErrorMessage } from "formik";
import MostrarErrorCampo from "./MostrarErrorCampo";

export default function FormGroupCheckbox(props: formGroupCheckboxProps) {
    return (
        <div className="form-group form-check">
            <Field
                id={props.campo}
                className="form-check-input"
                type='checkbox'
                name={props.campo}
            />
            <label htmlFor={props.campo}>{props.label}</label>
            {/* <ErrorMessage name={props.campo}>
                {(mensaje: any) => <MostrarErrorCampo mensaje={mensaje} />}
            </ErrorMessage> */}
        </div>
    )
}

interface formGroupCheckboxProps {
    label: string;
    campo: string;
}