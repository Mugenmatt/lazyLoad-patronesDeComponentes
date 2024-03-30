// ==================================
// Lazy y Suspense por modulos

import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<() => JSX.Element> | JSXComponent;
    name: string;
}

// Para ver el componente cargado en Network y cambiar su nombre
// se puede usar el webpackChunkName: "nombre del componente"

// LazyLayout contiene rutas hijas que se cargan con lazy
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/components/layout/LazyLayout'));

// Rutas
export const routes: Route[] = [
    {
        to: '/lazyload/', 
        path: '/lazyload/*', // Ruta que contiene rutas hijas (Lazy1, 2 y 3). "/*" todo lo que coincida a partir de ahi.
        name: 'Lazy Layout',
        Component: LazyLayout
    },
    {
        to: '/no-lazy', // Este no va a tener lazy load
        path: 'no-lazy',
        name: 'Sin Lazy',
        Component: NoLazy
    }
]

// ==================================
// Lazy y Suspense por componentes

// import { lazy, LazyExoticComponent } from "react";
// 
// type JSXComponent = () => JSX.Element;
// 
// interface Route {
//     to: string;
//     path: string;
//     Component: LazyExoticComponent<() => JSX.Element> | JSXComponent;
//     name: string;
// }
// 
// // Para ver el componente cargado en Network y cambiar su nombre
// // se puede usar el webpackChunkName: "nombre del componente"
// const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1'));
// const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage4" */'../01-lazyload/pages/LazyPage3'));
// 
// // Rutas
// export const routes: Route[] = [
//     {
//         to: '/lazy1',
//         path: 'lazy1',
//         name: 'Lazy 1',
//         Component: Lazy1
//     },
//     {
//         to: '/lazy2',
//         path: 'lazy2',
//         name: 'Lazy 2',
//         Component: Lazy2
//     },
//     {
//         to: '/lazy3',
//         path: 'lazy3',
//         name: 'Lazy 3',
//         Component: Lazy3
//     },
// ]