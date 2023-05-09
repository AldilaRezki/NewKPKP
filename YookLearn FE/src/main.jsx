// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './index.css';
import ErrorPage from './Siswa/Non Edit/Errorpage';
import Ubahpass from './Siswa/Non Edit/pages/Ubahpass';
import Datadiri from './Siswa/Non Edit/pages/Datadiri';
import Kelas from './Siswa/Non Edit/pages/Kelas';
import Mapel from './Siswa/Non Edit/pages/Mapel';
import Isikelas from './Siswa/Non Edit/pages/Isikelas';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Tugas from './Siswa/Non Edit/pages/Tugas';
import Materi from './Siswa/Non Edit/pages/Materi';
import Detailmateri from './Siswa/Non Edit/pages/Detailmateri';
import Homepage from './Siswa/Non Edit/homepage';
import Berhasil from './admin/pages/Berhasil';
import AdminHomepage from './admin/pages/AdminMainPage';
import DaftarAkun from './admin/pages/DaftarAkun';
import DaftarGuru from './admin/pages/DaftarGuru';
import DaftarSiswa from './admin/pages/DaftarSiswa';
import DaftarSiswaMapel from './admin/pages/DaftarSiswaMapel';
import ListAkun from './admin/pages/ListAkun';
import ListGuru from './admin/pages/ListGuru';
import ListSiswa from './admin/pages/ListSiswa';
import DaftarPaketKelas from './admin/pages/DaftarPaketKelas';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/ubahpass',
    element: <Ubahpass />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/datadiri',
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
  {
    path: '/berhasil',
    element: <Berhasil />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/adminpage',
    element: <AdminHomepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/daftarakun',
    element: <DaftarAkun />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/daftarguru',
    element: <DaftarGuru />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/daftarsiswa',
    element: <DaftarSiswa />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/daftarsiswamapel',
    element: <DaftarSiswaMapel />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/listakun',
    element: <ListAkun />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/listguru',
    element: <ListGuru />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/listsiswa',
    element: <ListSiswa />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/daftarpaketkelas',
    element: <DaftarPaketKelas />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
