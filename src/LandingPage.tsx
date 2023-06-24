import { useEffect, useState } from "react";
import { landingPageDTO } from "./peliculas/peliculas.model";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";

export default function LandingPage() {
    const [peliculas, setPeliculas] = useState<landingPageDTO>({});

    useEffect(() => {
        const timerId = setTimeout(() => {
            setPeliculas({
                enCartelera: [
                    {
                        id: 1,
                        titulo: "Spiderman",
                        poster: "https://m.media-amazon.com/images/I/61-rozyeQQL._AC_SL1000_.jpg"
                    },
                    {
                        id: 2,
                        titulo: "Shrek",
                        poster: "https://www.mirax.cl/productos/n240001a250000/n246001a247000/n246201a246300/g246270.jpg"
                    },
                    {
                        id: 3,
                        titulo: "Cars",
                        poster: "https://es.web.img2.acsta.net/pictures/17/06/09/13/42/187933.jpg"
                    }],
                proximosEstrenos: [
                    {
                        id: 1,
                        titulo: "Soul",
                        poster: "https://lumiere-a.akamaihd.net/v1/images/image_5e27f8d3.jpeg?region=0,0,648,972"
                    }
                ]
            })
        }, 1000);
        return () => clearTimeout(timerId);
    })

    return (
        <>
            <h3>En cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera} />

            <h3>Próximos Estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
        </>
    )
}