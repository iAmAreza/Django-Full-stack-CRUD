import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.jsx';
import './index.css';

const root = createRoot(document.getElementById('root')); // Correct usage of createRoot
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
