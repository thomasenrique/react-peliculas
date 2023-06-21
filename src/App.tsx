import './App.css';
import Menu from './utils/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import rutas from './route-config';

function App() {

  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <Menu />
          <Routes>
            {rutas.map(ruta => <Route key={ruta.path} path={ruta.path} element={<ruta.componente />} > </Route>)}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;