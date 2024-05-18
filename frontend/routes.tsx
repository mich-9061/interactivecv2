import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Resume from './views/resumes/pages/Resume';
import AboutInteractiveCV from './views/resumes/pages/AboutInteractiveCV';
import { Navbar } from './views/resumes/components/Navbar';
import ErrorView from './views/resumes/pages/ErrorView';

const routing = [
  {
    element: <Navbar />, //qui un layout comune a tutte le pagine tipo toolbar con cambio lingua e navigazione 
    handle: { title: 'Interactive CV' },
    children: [
      { path: '/', element: <AboutInteractiveCV />, handle: { title: 'Welcome to Interactive CV' } }, // pagina di benvenuto no login
      { path: '/resume/:id', element: <Resume />, handle: { title: 'Interactive CV' } }, // pagina del CV (link non indovinabile) -> informativa per la registrazione
      { path: '/about', element: <AboutInteractiveCV />, handle: { title: 'About Interactive CV' } }, //pagina about no loging
      { path: '/profile', element: <AboutInteractiveCV />, handle: { title: 'Profile' } }, //pagina profilo con login e permessi di utente e pagina admin con permessi di admin che gestisce tutti i cv
      { path: '/register', element: <AboutInteractiveCV />, handle: { title: 'Sign In' } }, //pagina di registrazione che da accesso al profilo con permessi di utente
      { path: '*', element: <ErrorView /> }
    ],
  },
] as RouteObject[];

export const routes = routing;
export default createBrowserRouter(routes);