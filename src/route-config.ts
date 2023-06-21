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
    
    { path: '/generos/crear', componente: CrearGenero },
    { path: '/generos/editar/:id(\\d+)', componente: EditarGenero },
    { path: '/generos', componente: IndiceGeneros, exact: true },
    
    { path: '/actores/crear', componente: CrearActores },
    { path: '/actores/editar/:id(\\d+)', componente: EditarActores },
    { path: '/actores', componente: IndiceActores, exact: true },
    
    { path: '/cines/crear', componente: CrearCine },
    { path: '/cines/editar/:id(\\d+)', componente: EditarCine },
    { path: '/cines', componente: IndiceCine, exact: true },
    
    { path: '/peliculas/crear', componente: CrearPelicula },
    { path: '/peliculas/editar/:id(\\d+)', componente: EditarPelicula },
    { path: '/peliculas/filtrar', componente: FiltroPelioculas },
    
    { path: '/', componente: LandingPage, exact: true },
    { path: '*', componente: RedireccionarALanding },
]


interface ruta {
    path: string;
    componente: any;
    exact?: boolean;
} 
export default rutas;