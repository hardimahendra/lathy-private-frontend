import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
axios.defaults.withCredentials = true;

import Index from './pages/Index';
import Home from './pages/MainPages/Home';
import Profil from './pages/MainPages/Profil';
import Galery from './pages/MainPages/Galery';
import DaftarGuru from './pages/MainPages/DaftarGuru';
import Contacts from './pages/MainPages/Contacts';

import Login from './pages/MainPages/Login';
import Register from './pages/MainPages/Register';

import Sejarah from './components/Modal/ProfilModal/Sejarah';
import Jenjang from './components/Modal/ProfilModal/Jenjang';
import Layanan from './components/Modal/ProfilModal/Layanan';
import Kenyamanan from './components/Modal/ProfilModal/Kenyamanan';

import Dashboard from './pages/Dashboard/Users';

import NotFound from './pages/notFoundPages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // Main Routes
      { path: '/', element: <Index /> },
      { path: '/home', element: <Home /> },
      { path: '/profil', element: <Profil /> },
      { path: '/galery', element: <Galery /> },
      { path: '/daftarGuru', element: <DaftarGuru /> },
      { path: '/contacts', element: <Contacts /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },

      // Routes Component Content
      { path: '/sejarah', element: <Sejarah /> },
      { path: '/jenjang', element: <Jenjang /> },
      { path: '/layanan', element: <Layanan /> },
      { path: '/kenyamanan', element: <Kenyamanan /> },
      { path: '/notFound', element: <NotFound /> },

      { path: '/dashboard', element: <Dashboard /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
