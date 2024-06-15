import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';

// createRoot(document.getElementById('outlet')!).render(createElement(App));

const container = document.getElementById('outlet')!;
const root = createRoot(container);
root.render(createElement(App));