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

import HomepageUtama from './Guru/Homepage Utama/HomepageUtama';
import DaftarKelas from './Guru/Daftar Kelas/DaftarKelas';
import HomepageKelas from './Guru/Kelas/Homepage Isi Kelas/HomepageKelas';
import DaftarForum from './Guru/Kelas/Forum Kelas/DaftarForum';
import IsiForum from './Guru/Kelas/Forum Kelas/IsiForum';
import Profil from './Guru/Profil/Profil';
import UbahPassword from './Guru/Profil/UbahPassword';
import DaftarUjian from './Guru/Kelas/Ujian Kelas/DaftarUjian';
import DetailUjian from './Guru/Kelas/Ujian Kelas/DetailUjian';
import DaftarSoalUjian from './Guru/Kelas/Ujian Kelas/Daftar Soal Ujian Kelas/DaftarSoalUjian';
import HasilUjianPeserta from './Guru/Kelas/Ujian Kelas/Hasil Ujian Peserta/HasilUjianPeserta';
import HasilUjianKelas from './Guru/Kelas/Ujian Kelas/Hasil Ujian Kelas/HasilUjianKelas';
import DaftarAnggotaKelas from './Guru/Kelas/Anggota Kelas/DaftarAnggotaKelas';
import DaftarTugas from './Guru/Kelas/Tugas Kelas/DaftarTugas';

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

  // Guru
  {
    path: '/homepage',
    element: <HomepageUtama />,
  },
  {
    path: '/daftarkelas',
    element: <DaftarKelas />,
  },
  {
    path: '/xipa1',
    element: <HomepageKelas />,
  },
  {
    path: '/xipa1/forum',
    element: <DaftarForum />,
  },
  {
    path: '/xipa1/forum/diskusi-pekan-1',
    element: <IsiForum />,
  },
  {
    path: '/xipa1/daftar-tugas',
    element: <DaftarTugas />,
  },
  {
    path: '/xipa1/ujian',
    element: <DaftarUjian />,
  },
  {
    path: '/xipa1/ujian/ujian-pekan-1',
    element: <DetailUjian />,
  },
  {
    path: '/xipa1/ujian/ujian-pekan-1/daftar-soal',
    element: <DaftarSoalUjian />,
  },
  {
    path: '/xipa1/ujian/ujian-pekan-1/hasil-ujian-peserta',
    element: <HasilUjianPeserta />,
  },
  {
    path: '/xipa1/ujian/ujian-pekan-1/hasil-ujian-kelas',
    element: <HasilUjianKelas />,
  },
  {
    path: '/xipa1/daftar-anggota-kelas',
    element: <DaftarAnggotaKelas />,
  },
  {
    path: '/profil',
    element: <Profil />,
  },
  {
    path: '/profil/ubah-password',
    element: <UbahPassword />,
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
