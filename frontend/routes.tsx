import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Resume from './views/resumes/components/Resume';

const routing = [
  {
    element: <Resume />,
    handle: { title: 'Interactive CV' },
    children: [
      { path: '/', element: <Resume />, handle: { title: 'Interactive CV' } },
      { path: '/resume/:id', element: <Resume />, handle: { title: 'Interactive CV' } },
      { path: '/about', element: <Resume />, handle: { title: 'About' } },
    ],
  },
] as RouteObject[];

export const routes = routing;
export default createBrowserRouter(routes);
