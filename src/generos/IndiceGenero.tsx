import { Link } from "react-router-dom";

export default function IndiceGeneros() {
    return (<>
    <h3>Índice Género</h3>
    <Link to="/generos/crear">Crear Género</Link>
    <Link to="/generos/editar">Editar Género</Link>
    </>)
}