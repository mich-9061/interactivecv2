import router from 'Frontend/routes.js';
import { RouterProvider } from 'react-router-dom';
import "./index.css";
import { SlugProvider } from './SlugContext';

export default function App() {
  return (
    <SlugProvider>
      <RouterProvider router={router} />
    </SlugProvider>
)}
