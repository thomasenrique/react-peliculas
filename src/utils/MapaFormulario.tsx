import { useFormikContext } from "formik";
import Mapa from "./Mapa";
import { coordenadasDTO } from "./coordenadas.models";

export default function MapaFormulario(props: mapaFormularioProps) {


    const { values } = useFormikContext<any>();

    function actualizarCampos(coordenadas: coordenadasDTO) {
        values[props.campoLat] = coordenadas.lat;
        values[props.campoLng] = coordenadas.lng;
    }


    return (
        <Mapa
            coordenadas={props.coordenadas}
            manejarClickMapa={actualizarCampos}
        />
    )
}


interface mapaFormularioProps {
    coordenadas: coordenadasDTO[];
    campoLat: string;
    campoLng: string;
}

MapaFormulario.defaultProps = {
    coordenadas: []
}