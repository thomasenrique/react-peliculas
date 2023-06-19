import PeliculasIndividual from "./PeliculaIndividual";
import { pelicula } from "./peliculas.model";
import css from './ListadoPeliculas.module.css'
import Cargando from "../utils/Cargando";
import ListadoGenerico from "../utils/ListadoGenerico";

export default function ListadoPeliculas(props: listadoPelicupasProps) {
    return (
        <ListadoGenerico
            listado={props.peliculas}
        >
            <div className={css.div}>
                {props.peliculas?.map(pelicula =>
                    <PeliculasIndividual
                        key={pelicula.id}
                        pelicula={pelicula}
                    />
                )}
            </div>
        </ListadoGenerico>
    )
}

interface listadoPelicupasProps {
    peliculas?: pelicula[]
}