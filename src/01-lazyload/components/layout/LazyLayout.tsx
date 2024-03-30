import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from '../../pages/index';

// Este modulo se encarga de mostrar las demas rutas con lazy
// que en este caso son lazy 1, 2 y 3.
export const LazyLayout = () => {
  return (
    <div>
        <h1>LazyLayout Page</h1>

        {/* Rutas Hijas */}
        <ul>
          <li>
            <NavLink to="lazy1">Lazy 1</NavLink>
          </li>
          <li>
            <NavLink to="lazy2">Lazy 2 </NavLink>
          </li>
          <li>
            <NavLink to="lazy3">Lazy 3</NavLink>
          </li>
        </ul>

      {/* Al cliquear en un NavLink, se muestra estos componentes segun la ruta */}
      <Routes>
        <Route path='lazy1' element={<LazyPage1 />} />
        <Route path='lazy2' element={<LazyPage2 />} />
        <Route path='lazy3' element={<LazyPage3 />} />
      
        {/* <Route path='*' element={<div>Ruta inexistente</div>} /> */}
        <Route path='*' element={<Navigate replace to='lazy1' />} />
      </Routes>

    </div>
  )
}

export default LazyLayout;