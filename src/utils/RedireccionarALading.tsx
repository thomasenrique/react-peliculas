import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function RedireccionarALanding() {
    const navigate = useNavigate();
    return (<>
        <div className="container">

            <Button onClick={() => { navigate("/") }}>404 Volver</Button>

        </div>

    </>)
}