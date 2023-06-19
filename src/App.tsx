import { useEffect, useState } from 'react';
import './App.css';
import { landingPageDTO } from './peliculas/peliculas.model';
import ListadoPeliculas from './peliculas/ListadoPeliculas';
import Menu from './utils/Menu';


function App() {

  const [peliculas, setPeliculas] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setPeliculas({
        enCartelera: [{
          id: 1,
          titulo: "SpiderMan",
          poster: "https://pics.filmaffinity.com/Spider_Man_Cruzando_el_Multiverso-647400416-large.jpg"
        },
        {
          id: 2,
          titulo: "Shrek",
          poster: "https://pics.filmaffinity.com/Shrek-903764423-large.jpg"
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
      <Menu />
      <div className='container'>

        <h3>En cartelera</h3>
        <ListadoPeliculas peliculas={peliculas.enCartelera} />

        <h3>Próximos Estrenos</h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
      </div>
    </>
  );
}

export default App;
