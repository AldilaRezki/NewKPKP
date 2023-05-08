// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';

// import App from './App';
import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

import LoginPage from "./Common/pages/LoginPage";

import ErrorPage from "./Siswa/pages/Errorpage";
import Ubahpass from "./Siswa/pages/Ubahpass";
import Datadiri from "./Siswa/pages/DataDiri";
import Kelas from "./Siswa/pages/Kelas";
import Mapel from "./Siswa/pages/Mapel";
import DetailKelas from "./Siswa/pages/DetailKelas";
import Tugas from "./Siswa/pages/Tugas";
import Materi from "./Siswa/pages/Materi";
import Detailmateri from "./Siswa/pages/Detailmateri";
import StudentPage from "./Siswa/pages/StudentPage";
import DaftarSiswa from "./Siswa/pages/DaftarSiswa";

import HomepageUtama from "./Guru/Homepage Utama/HomepageUtama";
import DaftarKelas from "./Guru/Daftar Kelas/DaftarKelas";
import HomepageKelas from "./Guru/Kelas/Homepage Isi Kelas/HomepageKelas";
import DaftarForum from "./Guru/Kelas/Forum Kelas/DaftarForum";
import IsiForum from "./Guru/Kelas/Forum Kelas/IsiForum";
import Profil from "./Guru/Profil/Profil";
import UbahPassword from "./Guru/Profil/UbahPassword";
import DaftarUjian from "./Guru/Kelas/Ujian Kelas/DaftarUjian";
import DetailUjian from "./Guru/Kelas/Ujian Kelas/DetailUjian";
import DaftarSoalUjian from "./Guru/Kelas/Ujian Kelas/Daftar Soal Ujian Kelas/DaftarSoalUjian";
import HasilUjianPeserta from "./Guru/Kelas/Ujian Kelas/Hasil Ujian Peserta/HasilUjianPeserta";
import HasilUjianKelas from "./Guru/Kelas/Ujian Kelas/Hasil Ujian Kelas/HasilUjianKelas";
import DaftarAnggotaKelas from "./Guru/Kelas/Anggota Kelas/DaftarAnggotaKelas";
import DaftarTugas from "./Guru/Kelas/Tugas Kelas/DaftarTugas";
import DetailTugas from "./Siswa/pages/DetailTugas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/siswa/homepage",
    element: <StudentPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/siswa/ubahpass",
    element: <Ubahpass />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/siswa/datadiri",
    element: <Datadiri />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/siswa/kelas",
    element: <Kelas />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/siswa/kelas/mapel",
    element: <Mapel />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/siswa/kelas/mapel/detailkelas",
    element: <DetailKelas />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/siswa/kelas/mapel/detailkelas/tugas",
    element: <Tugas />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/siswa/kelas/mapel/detailkelas/materi",
    element: <Materi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/siswa/kelas/mapel/detailkelas/detailmateri",
    element: <Detailmateri />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/siswa/kelas/mapel/daftarsiswa",
    element: <DaftarSiswa />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/siswa/kelas/mapel/tugas/detailtugas",
    element: <DetailTugas />,
    errorElement: <ErrorPage />,
  },

  // Guru
  {
    path: "/homepage",
    element: <HomepageUtama />,
  },
  {
    path: "/daftarkelas",
    element: <DaftarKelas />,
  },
  {
    path: "/xipa1",
    element: <HomepageKelas />,
  },
  {
    path: "/xipa1/forum",
    element: <DaftarForum />,
  },
  {
    path: "/xipa1/forum/diskusi-pekan-1",
    element: <IsiForum />,
  },
  {
    path: "/xipa1/daftar-tugas",
    element: <DaftarTugas />,
  },
  {
    path: "/xipa1/ujian",
    element: <DaftarUjian />,
  },
  {
    path: "/xipa1/ujian/ujian-pekan-1",
    element: <DetailUjian />,
  },
  {
    path: "/xipa1/ujian/ujian-pekan-1/daftar-soal",
    element: <DaftarSoalUjian />,
  },
  {
    path: "/xipa1/ujian/ujian-pekan-1/hasil-ujian-peserta",
    element: <HasilUjianPeserta />,
  },
  {
    path: "/xipa1/ujian/ujian-pekan-1/hasil-ujian-kelas",
    element: <HasilUjianKelas />,
  },
  {
    path: "/xipa1/daftar-anggota-kelas",
    element: <DaftarAnggotaKelas />,
  },
  {
    path: "/profil",
    element: <Profil />,
  },
  {
    path: "/profil/ubah-password",
    element: <UbahPassword />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
