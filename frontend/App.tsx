import router from 'Frontend/routes.js';
import { RouterProvider } from 'react-router-dom';
import "./index.css";
import { SlugProvider } from './SlugContext';
import { AuthProvider } from './auth';

export default function App() {
  return (
    <AuthProvider>
      <SlugProvider>
        <RouterProvider router={router} />
      </SlugProvider>
    </AuthProvider>
)}
