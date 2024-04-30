import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Resume from './views/resumes/components/Resume';

const routing = [
  {
    element: <Resume />, //qui un layout comune a tutte le pagine tipo toolbar con cambio lingua e navigazione 
    handle: { title: 'Interactive CV' },
    children: [
      { path: '/', element: <Resume />, handle: { title: 'Welcome to Interactive CV' } }, // pagina di benvenuto no login
      { path: '/resume/:id', element: <Resume />, handle: { title: 'Interactive CV' } }, // pagina del CV (link non indovinabile) -> informativa per la registrazione
      { path: '/about', element: <Resume />, handle: { title: 'About' } }, //pagina about me no loging
      { path: '/profile', element: <Resume />, handle: { title: 'Profile' } }, //pagina profilo con login e permessi di utente e pagina admin con permessi di admin che gestisce tutti i cv
      { path: '/register', element: <Resume />, handle: { title: 'Sign In' } }, //pagina di registrazione che da accesso al profilo con permessi di utente
    ],
  },
] as RouteObject[];

export const routes = routing;
export default createBrowserRouter(routes);