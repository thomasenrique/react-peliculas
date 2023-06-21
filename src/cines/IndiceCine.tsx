import { Link } from "react-router-dom";

export default function IndiceCine() {
    return (<>
    <h3>Índice Cine</h3>
    <Link to="/Cine/crear">Crear Cine</Link>
    <Link to="/Cine/editar">Editar Cine</Link>
    </>)
}