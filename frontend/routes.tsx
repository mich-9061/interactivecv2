import { createBrowserRouter, RouteObject } from 'react-router-dom';
import PersonalInformations from './views/resumes/components/Resume';



const routing = [
  {
    element: <PersonalInformations />,
    handle: { title: 'Interactive CV' },
    children: [
      { path: '/', element: <PersonalInformations />, handle: { title: 'Interactive CV' } },
      { path: '/resume/:id', element: <PersonalInformations />, handle: { title: 'Interactive CV' } },
      { path: '/about', element: <PersonalInformations />, handle: { title: 'About' } },
    ],
  },
] as RouteObject[];

export const routes = routing;
export default createBrowserRouter(routes);
