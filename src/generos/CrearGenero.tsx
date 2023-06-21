import { useNavigate } from "react-router-dom";
import Button from "../utils/Button";


export default function CrearGenero() {
    const navigate = useNavigate();
    return (<>
        <h3>Crear Género</h3>
        <Button onClick={() => { navigate("/generos") }}>Salvar</Button>
    </>)
}