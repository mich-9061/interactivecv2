import router from 'Frontend/routes.js';
import { RouterProvider } from 'react-router-dom';
import { SlugProvider } from './SlugContext';
import "./index.css";
import { AuthProvider } from './auth';

export default function App() {
  return (
    <AuthProvider>
      <SlugProvider>
        <RouterProvider router={router} />
      </SlugProvider>
    </AuthProvider>
)}
