import { ReactElement } from "react";
import Cargando from "./Cargando";

export default function ListadoGenerico(props: listadoGenericoProps) {

    if (!props.listado) { //si no hay nada, carga.
        if (props.cargandoUI) {
            return props.cargandoUI;
        }
        return <Cargando />
    } else if (props.listado.length === 0) { //si no tiene nada, avisa.
        if (props.listadoVacioUI) {
            return props.listadoVacioUI;
        }
        return <>No hay elementos para mostrar.</>
    } else { //si esta todo bien, renderiza las peliculas
        return props.children;
    }

}

interface listadoGenericoProps {
    listado: any;
    children: ReactElement;
    cargandoUI?: ReactElement;
    listadoVacioUI?: ReactElement;
}