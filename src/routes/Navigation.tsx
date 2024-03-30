import logo from '../logo.svg';
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    NavLink,
    Navigate,
} from "react-router-dom";
import { routes } from './routes';
import { Suspense } from 'react';

// Sidebar: Rutas con suspense (lazy load)
function Root () {
    return (
        // Suspense sirve para decirle a React que cuando cargo un componente 
        // o modulo que espere pero que mientras carga haga algo que le digamos
        // El suspense hace que los componentes se carguen una sola vez y luego queden en memoria
        // El fallback muestra un componente de carga
        <Suspense fallback={ <span>Cargando...</span> } >
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React log" />
                    {/* Itera el la variable del archivo routes */}
                    <ul>
                    {
                        routes.map((route, idx) => (
                            <li key={idx}>
                                <NavLink 
                                    to={route.to} className={({isActive}) => isActive ? "nav-active" : ""}   
                                >
                                    {route.name}
                                </NavLink>
                            </li>
                        ))
                    }
                    </ul>
                </nav>
                <div id="detail">
                    <Outlet />
                </div>
            </div>
        </Suspense>
    )
}

const routesChildren = routes.map( route => (
    { path: route.path , element: <route.Component /> }
))

// RUTAS DISPONIBLES
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: routesChildren
    },
    {
        path: "/*", // Si no coincide con una ruta existente en routesChildren, redirige a lazy1
        element: <Navigate to="/lazy1" replace={true} />
    }
]);
 
// COMPONENTE QUE VA AL INDEX.TSX YA QUE ES EL CORE DE LA APP
export const Navigation = () => {
  return (
    <RouterProvider router={router} />
  )
}

// ======================================

// SIN ARCHIVO "routes.ts" (ni lazy ni suspense)

// import logo from '../logo.svg';
// import {
//     createBrowserRouter,
//     RouterProvider,
//     Outlet,
//     NavLink,
//     Navigate,
// } from "react-router-dom";
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages/index';
// import { routes } from './routes';

// // REDIRECCIONES A RUTAS
// function Root () {
//     return (
//  
//         <div className="main-layout">
//             <nav>
//                 <img src={logo} alt="React log" />
//                 <ul>
//                     <li>
//                         <NavLink 
//                             to="/lazy1" className={({isActive}) => isActive ? "nav-active" : ""}   
//                         >
//                             Lazy1
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink 
//                             to="/lazy2" className={({isActive}) => isActive ? "nav-active" : ""}   
//                         >
//                             Lazy2
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink 
//                             to="/lazy3" className={({isActive}) => isActive ? "nav-active" : ""}   
//                         >
//                             Lazy3
//                         </NavLink>
//                     </li>
//                 </ul>
//             </nav>
//             <div id="detail">
//                 <Outlet />
//             </div>
//         </div>
//     )
// }
// 
//  // RUTAS DISPONIBLES 
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Root />,
//         children: [
//             {
//                 path: "/lazy1",
//                 element: <LazyPage1 />
//             },
//             {
//                 path: "lazy2",
//                 element: <LazyPage2 />
//             },
//             {
//                 path: "lazy3",
//                 element: <LazyPage3 />
//             }
//  
//         ]
//     },
//     {
//         path: "/*",
//         element: <Navigate to="/lazy1" replace={true} />
//     }
// ]);
//  
// // COMPONENTE QUE VA AL INDEX.TSX YA QUE ES EL CORE DE LA APP
// export const Navigation = () => {
//   return (
//     <RouterProvider router={router} />
//   )
// }
