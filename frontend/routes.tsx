import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Resume from './views/resumes/pages/Resume';
import AboutInteractiveCV from './views/resumes/pages/AboutInteractiveCV';
import { Navbar } from './views/resumes/components/Navbar';
import ErrorView from './views/resumes/pages/ErrorView';
import Login from './views/resumes/pages/Login';

const routing = [
  {
    element: <Navbar />,
    handle: { title: 'Interactive CV' },
    children: [
      { path: '/', element: <AboutInteractiveCV />, handle: { title: 'Welcome to Interactive CV' } }, //TODO: Homepage no login
      { path: '/resume/:slug', element: <Resume />, handle: { title: 'Interactive CV' } },
      { path: '/about', element: <AboutInteractiveCV />, handle: { title: 'About Interactive CV' } },
      { path: '/login', element: <Login />, handle: { title: 'Login' } },
      // { path: '/profile', element: <AboutInteractiveCV />, handle: { title: 'Profile' } }, //TODO: Profile/admin page depending on user privilege
      // { path: '/register', element: <AboutInteractiveCV />, handle: { title: 'Sign In' } }, //TODO: SignUp page -> user low privilege
      { path: '*', element: <ErrorView /> }
    ],
  }
] as RouteObject[];

export const routes = routing;
export default createBrowserRouter(routes);