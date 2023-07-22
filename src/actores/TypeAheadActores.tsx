import { Typeahead } from "react-bootstrap-typeahead";
import { actoresPeliculasDTO } from "./actores.model";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { useState } from "react";

export default function TypeAheadActores(props: typeAheadActoresProps) {

    const actores: actoresPeliculasDTO[] = [
        { id: 1, nombre: "Tom", personaje: "Spiderman", foto: "https://cdn-3.expansion.mx/dims4/default/1eae21e/2147483647/strip/true/crop/1200x800+0+0/resize/1200x800!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Ffa%2F8e%2F29bb50ef42e6a48c53919cc965e0%2Ftom-holland-reaparece-brevemente-redes-sociales-3.jpg" },
        { id: 2, nombre: "el Jony", personaje: "Jack", foto: "https://i2-prod.dailyrecord.co.uk/incoming/article30498904.ece/ALTERNATES/s615/0_utilsjpeg.jpg" },
        { id: 3, nombre: "ei arnol", personaje: "Terminator", foto: "https://media.gq.com.mx/photos/5d7004742cd751000855722e/16:9/w_2560%2Cc_limit/arnold1.jpg" }
    ];

    const seleccion: actoresPeliculasDTO[] = [];

    const [elementoArrastrado, setElementoArrastrado] =
        useState<actoresPeliculasDTO | undefined>(undefined);

    function handleDragStart(actor: actoresPeliculasDTO) {
        setElementoArrastrado(actor);
    }

    function manejarDragOver(actor: actoresPeliculasDTO) {
        if (!elementoArrastrado) {
            return;
        }

        if (actor.id !== elementoArrastrado.id) {
            /* primero buscamos al actor que se esta moviendo */
            const elementoArrastradoIndice = props.actores.findIndex(x => x.id === elementoArrastrado.id);

            /* luego buscamos el indice del actor que sacaremos para dar esa posicion al elemetroArrastrado*/
            const actorIndice = props.actores.findIndex(x => x.id === actor.id);


            const actores = [...props.actores];

            actores[actorIndice] = elementoArrastrado;
            actores[elementoArrastradoIndice] = actor;
            props.onAdd(actores);

        }
    }



    return (
        <>
            <label>Actores</label>
            <Typeahead
                id="typeahead"
                onChange={actores => {
                    if (props.actores.findIndex(x => x.id === actores[0].id) === -1) {
                        props.onAdd([...props.actores, actores[0]])
                    }
                }}
                options={actores}
                labelKey={actor => actor.nombre}
                filterBy={['nombre']}
                placeholder="Escriba el nombre del actor"
                minLength={2}
                flip={true}
                selected={seleccion}
                renderMenuItemChildren={actor => (
                    <>
                        <img alt="Imagen actor" src={actor.foto}
                            style={{
                                height: '64px',
                                marginRight: '10px',
                                width: '64px'
                            }}
                        />
                        <span>{actor.nombre}</span>
                    </>
                )}
            />

            <ul className="list-group">
                {props.actores.map(actor => <li
                    draggable={true}
                    onDragStart={() => handleDragStart(actor)}
                    onDragOver={() => manejarDragOver(actor)}
                    key={actor.id}
                    className="list-group-item list-group-item-action"
                >
                    {props.listadoUI(actor)}
                    <span
                        className="badge badge-primary badge-pill pointer"
                        style={{ marginLeft: '.5rem' }}
                        onClick={() => props.onRemove(actor)}
                    >
                        X
                    </span>
                </li>)}
            </ul>

        </>
    )
}

interface typeAheadActoresProps {
    actores: actoresPeliculasDTO[];
    onAdd(actores: actoresPeliculasDTO[]): void;
    listadoUI(actor: actoresPeliculasDTO): ReactElement;
    onRemove(actor: actoresPeliculasDTO): void;
}