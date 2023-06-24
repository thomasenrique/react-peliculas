import { Field, Form, Formik } from "formik";
import { generoDTO } from "../generos/generos.models";
import Button from "../utils/Button";

export default function FiltroPelioculas() {
    const valorInicial: filtroPeliculasForm = {
        titulo: '',
        generoId: 0,
        proximosEstrenos: false,
        enCines: false
    }

    const generos: generoDTO[] = [
        { id: 1, nombre: 'Acción' },
        { id: 2, nombre: 'Comedia' },
    ]
    return (<>
        <h3>Filtro Pelioculas</h3>
        <Formik
            initialValues={valorInicial}
            onSubmit={valores => console.log(valores)}
        >
            {(formikProps) => (
                <Form>
                    <div className="form-inline">
                        <div className="form-group mb-2">
                            <label htmlFor="titulo" className="sr-only">Título</label>
                            <input
                                type="text"
                                className="form-control"
                                id="titulo"
                                placeholder="Título de la película"
                                {...formikProps.getFieldProps('titulo')}
                            />
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <select className="form-group"
                                {...formikProps.getFieldProps('generoId')}
                            >
                                <option value='0'>Seleccione un género</option>
                                {
                                    generos.map(genero => {
                                        return (<option key={genero.id} value={genero.id}>{genero.nombre}</option>)
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <Field
                                className='form-check-input'
                                id='proximosEstrenos'
                                name='proximosEstrenos'
                                type='checkbox'
                            />
                            <label className="form-check-label"
                                htmlFor="proximosEstrenos"
                            > Próximos estrenos </label>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <Field
                                className='form-check-input'
                                id='enCines'
                                name='enCines'
                                type='checkbox'
                            />
                            <label className="form-check-label"
                                htmlFor="enCines"
                            > En cines </label>
                        </div>
                        <Button
                            classnName="btn btn-primary mb-2 mx-sm-3"
                            onClick={() => formikProps.submitForm()}
                        >Filtrar</Button>
                        <Button
                            classnName="btn btn-danger mb-2"
                            onClick={() => formikProps.setValues(valorInicial)}
                        >Limpiar</Button>
                    </div>
                </Form>
            )}


        </Formik>

    </>)
}

interface filtroPeliculasForm {
    titulo: string;
    generoId: number;
    proximosEstrenos: boolean;
    enCines: boolean;
}