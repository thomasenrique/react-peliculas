import LandingPage from './LandingPage';
import CrearActores from './actores/CrearActores';
import EditarActores from './actores/EditarActores';
import IndiceActores from './actores/IndiceActores';
import CrearCine from './cines/CrearCine';
import EditarCine from './cines/EditarCine';
import IndiceCine from './cines/IndiceCine';
import CrearGenero from './generos/CrearGenero';
import EditarGenero from './generos/EditarGenero';
import IndiceGeneros from './generos/IndiceGenero';
import CrearPelicula from './peliculas/CrearPelicula';
import EditarPelicula from './peliculas/EditarPelicula';
import FiltroPelioculas from './peliculas/FiltroPeliculas';
import RedireccionarALanding from './utils/RedireccionarALading';

const rutas: ruta[] = [
    { path: '/', componente: LandingPage },

    { path: '/generos/crear', componente: CrearGenero },
    { path: '/generos/editar:id', componente: EditarGenero },
    { path: '/generos', componente: IndiceGeneros },

    { path: '/actores/crear', componente: CrearActores },
    { path: '/actores/editar:id', componente: EditarActores },
    { path: '/actores', componente: IndiceActores },

    { path: '/cine/crear', componente: CrearCine },
    { path: '/cine/editar:id', componente: EditarCine },
    { path: '/cine', componente: IndiceCine },

    { path: '/pelicula/crear', componente: CrearPelicula },
    { path: '/pelicula/editar:id', componente: EditarPelicula },
    { path: '/pelicula/filtrar', componente: FiltroPelioculas },
    { path: '*', componente: RedireccionarALanding },

]


interface ruta {
    path: string;
    componente: any;
} 
export default rutas;