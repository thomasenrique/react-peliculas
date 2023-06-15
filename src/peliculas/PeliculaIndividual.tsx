import { pelicula } from "./peliculas.model";
import css from './PeliculaIndividual.module.css'

export default function PeliculasIndividual(props: peliculaIndividualProps) {
    const construirLink = () => "/pelicula/" + props.pelicula.id;
    return (
        <div className={css.div}>
            <a href={construirLink()}>
                <img src={props.pelicula.poster} alt="poster" />
            </a>
            <p>
                <a href={construirLink()}>{props.pelicula.titulo}</a>
            </p>
        </div>
    )
}

interface peliculaIndividualProps {
    pelicula: pelicula;
}