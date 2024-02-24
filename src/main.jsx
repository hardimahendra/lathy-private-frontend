import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
axios.defaults.withCredentials = true;

import Home from './pages/MainPages/Home';
import Keunggulan from './pages/MainPages/Keunggulan';
import Paket from './pages/MainPages/PaketProgram';
import ProgramBelajar from './pages/MainPages/ProgramBelajar';
import Profil from './pages/MainPages/Profil';

import Swipper from './components/Swipper';
import Register from './components/Register';

import NotFound from './pages/notFoundPages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // Main Routes
      { path: '/', element: <Home /> },
      { path: '/keunggulan', element: <Keunggulan /> },
      { path: '/paket', element: <Paket /> },
      { path: '/program', element: <ProgramBelajar /> },
      { path: '/profil', element: <Profil /> },
      { path: '/testimoni', element: <Swipper /> },
      { path: '/register', element: <Register /> },

      // Routes Component Content
      { path: '/notFound', element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
