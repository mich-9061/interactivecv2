import router from 'Frontend/routes.js';
import { RouterProvider } from 'react-router-dom';
import "./index.css";
import { SlugProvider } from './SlugContext';
import { AuthProvider } from './auth';
import { createRoot } from 'react-dom/client';
import { createElement } from 'react';

export default function App() {
  return (
    <AuthProvider>
      <SlugProvider>
        <RouterProvider router={router} />
      </SlugProvider>
    </AuthProvider>
)}

createRoot(document.getElementById('outlet')!).render(createElement(App));