import { Link } from "react-router-dom";

export default function IndiceCine() {
    return (<>
    <h3>Índice Cine</h3>
    <Link to="/cines/crear">Crear Cine</Link>
    <Link to="/cines/editar">Editar Cine</Link>
    </>)
}