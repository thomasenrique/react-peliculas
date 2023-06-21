import { NavLink } from "react-router-dom";

export default function Menu(/* props: MenuProps */) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={"/"} >React peliculas</NavLink>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mg-lg-0">
                        <li className="nav-item">
                                <NavLink className="nav-link" to={"/generos"} >
                                    Géneros
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/pelicula/filtrar"} >
                                    Filtrar pelicula
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/actores"} >
                                    Actores
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/cine"} >
                                    Cines
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/pelicula/crear"} >
                                    Crear pelicula
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
