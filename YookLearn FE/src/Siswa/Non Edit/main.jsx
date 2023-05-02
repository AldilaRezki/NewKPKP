import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ErrorPage from '../../Errorpage';
import Ubahpass from './pages/Ubahpass';
import Datadiri from './pages/Datadiri';
import Kelas from './pages/Kelas';
import Mapel from './pages/Mapel';
import Isikelas from './pages/Isikelas';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Tugas from './pages/Tugas';
import Materi from './pages/Materi';
import Detailmateri from './pages/Detailmateri';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: ' /ubahpass',
    element: <Ubahpass />,
    errorElement: <ErrorPage />,
  },
  {
    path: ' /datadiri',
    element: <Datadiri />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/kelas',
    element: <Kelas />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/mapel',
    element: <Mapel />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/isikelas',
    element: <Isikelas />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/tugas',
    element: <Tugas />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/materi',
    element: <Materi />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/detailmateri',
    element: <Detailmateri />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);