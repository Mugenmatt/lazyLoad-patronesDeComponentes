import logo from '../logo.svg';
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    NavLink,
    Navigate,
} from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages/index';

{/* REDIRECCIONES A RUTAS */}
function Root () {
    return (
 
        <div className="main-layout">
            <nav>
                <img src={logo} alt="React log" />
                <ul>
                    <li>
                        <NavLink 
                            to="/lazy1" className={({isActive}) => isActive ? "nav-active" : ""}   
                        >
                            Lazy1
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/lazy2" className={({isActive}) => isActive ? "nav-active" : ""}   
                        >
                            Lazy2
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/lazy3" className={({isActive}) => isActive ? "nav-active" : ""}   
                        >
                            Lazy3
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div id="detail">
                <Outlet />
            </div>
        </div>
    )
}

{/* RUTAS DISPONIBLES */}
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/lazy1",
                element: <LazyPage1 />
            },
            {
                path: "lazy2",
                element: <LazyPage2 />
            },
            {
                path: "lazy3",
                element: <LazyPage3 />
            }
 
        ]
    },
    {
        path: "/*",
        element: <Navigate to="/lazy1" replace={true} />
    }
]);
 
{/* COMPONENTE QUE VA AL INDEX.TSX YA QUE ES EL CORE DE LA APP */}
export const Navigation = () => {
  return (
    <RouterProvider router={router} />
  )
}
 