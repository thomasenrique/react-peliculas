import { Typeahead } from "react-bootstrap-typeahead";
import { actoresPeliculasDTO } from "./actores.model";

export default function TypeAheadActores(props: typeAheadActoresProps) {

    const actores: actoresPeliculasDTO[] = [
        { id: 1, nombre: "Tom", personaje: "Spiderman", foto: "https://cdn-3.expansion.mx/dims4/default/1eae21e/2147483647/strip/true/crop/1200x800+0+0/resize/1200x800!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Ffa%2F8e%2F29bb50ef42e6a48c53919cc965e0%2Ftom-holland-reaparece-brevemente-redes-sociales-3.jpg" },
        { id: 2, nombre: "el Jony", personaje: "Jack", foto: "https://i2-prod.dailyrecord.co.uk/incoming/article30498904.ece/ALTERNATES/s615/0_utilsjpeg.jpg" },
        { id: 3, nombre: "ei arnol", personaje: "Terminator", foto: "https://media.gq.com.mx/photos/5d7004742cd751000855722e/16:9/w_2560%2Cc_limit/arnold1.jpg" }
    ];


    return (
        <>
            <label>Actores</label>
            <Typeahead
                id="typeahead"
                onChange={actor => {
                    console.log(actor)
                }}
                options={actores}
                labelKey={actor => actor.nombre}
                filterBy={['nombre']}
                placeholder="Escriba el nombre del actor"
                minLength={2}
                flip={true}
            />
        </>
    )
}

interface typeAheadActoresProps {
    actores: actoresPeliculasDTO[];
}