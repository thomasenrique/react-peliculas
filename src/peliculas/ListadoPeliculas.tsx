import PeliculasIndividual from "./PeliculaIndividual";
import { pelicula } from "./peliculas.model";
import css from './ListadoPeliculas.module.css'
import Cargando from "../utils/Cargando";

export default function ListadoPeliculas(props: listadoPelicupasProps) {

    if (!props.peliculas) {
        return <Cargando />;
    } else if (props.peliculas.length === 0) {
        return <>No hay datos para mostrar</>
    } else {
        return (
            <div className={css.div}>
                {props.peliculas.map(pelicula =>
                    <PeliculasIndividual
                        key={pelicula.id}
                        pelicula={pelicula}
                    />
                )}
    
            </div>
        )
    }
}

interface listadoPelicupasProps {
    peliculas?: pelicula[]
}