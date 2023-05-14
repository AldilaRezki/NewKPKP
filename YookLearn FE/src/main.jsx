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
import DaftarMateri from "./Guru/Kelas/Materi Kelas/DaftarMateri";
import TambahMateri from "./Guru/Kelas/Materi Kelas/TambahMateri";
import TambahTugas from "./Guru/Kelas/Tugas Kelas/TambahTugas";
import TambahUjian from "./Guru/Kelas/Ujian Kelas/TambahUjian";
import TambahForum from "./Guru/Kelas/Forum Kelas/TambahForum";

import DetailTugas from "./Siswa/pages/DetailTugas";
import Ujian from "./Siswa/pages/Ujian";
import DetailUjianSiswa from "./Siswa/pages/DetailUjianSiswa";

import AdBerhasil from "./admin/pages/Berhasil";
import AdAdminHomepage from "./admin/pages/AdminMainPage";
import AdDaftarAkun from "./admin/pages/DaftarAkun";
import AdDaftarGuru from "./admin/pages/DaftarGuru";
import AdDaftarPaketKelas from "./admin/pages/DaftarPaketKelas";
import AdDaftarSiswa from "./admin/pages/DaftarSiswa";
import AdDaftarSiswaMapel from "./admin/pages/DaftarSiswaMapel";
import AdListAkun from "./admin/pages/ListAkun";
import AdListGuru from "./admin/pages/ListGuru";
import AdListSiswa from "./admin/pages/ListSiswa";
import AdTest from "./admin/pages/Header"
import DetailTugasGuru from "./Guru/Kelas/Tugas Kelas/DetailTugasGuru";


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
    path: "/siswa/kelas/:idKelas",
    element: <Mapel />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/siswa/kelas/:idKelas/detailkelas/:idMapel",
    element: <DetailKelas />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/siswa/kelas/:idKelas/detailkelas/:idMapel/daftarsiswa",
    element: <DaftarSiswa />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/siswa/kelas/:idKelas/detailkelas/:idMapel/tugas",
    element: <Tugas />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/siswa/kelas/:idKelas/detailkelas/:idMapel/tugas/:idTugas/detail",
    element: <DetailTugas />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/siswa/kelas/:idKelas/detailkelas/:idMapel/materi/",
    element: <Materi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/siswa/kelas/:idKelas/detailkelas/:idMapel/materi/:idMateri/detailmateri",
    element: <Detailmateri />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/siswa/kelas/:idKelas/detailkelas/:idMapel/ujian",
    element: <Ujian />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/siswa/kelas/:idKelas/detailkelas/:idMapel/ujian/detailujian",
    element: <DetailUjianSiswa />,
    errorElement: <ErrorPage />,
  },

  // Guru
  {
    path: "/guru/homepage",
    element: <HomepageUtama />,
  },
  {
    path: "/guru/daftarkelas",
    element: <DaftarKelas />,
  },
  {
    path: "/guru/xipa1",
    element: <HomepageKelas />,
  },
  {
    path: "/xipa1/forum/tambah-forum",
    element: <TambahForum />,
  },
  {
    path: "/guru/xipa1/forum",
    element: <DaftarForum />,
  },
  {
    path: "/guru/xipa1/forum/diskusi-pekan-1",
    element: <IsiForum />,
  },
  {
    path: "/guru/xipa1/tambah-tugas",
    element: <TambahTugas />,
  },
  {
    path: "/guru/xipa1/daftar-tugas",
    element: <DaftarTugas />,
  },
  {
    path: "/guru/xipa1/detail-tugas",
    element: <DetailTugasGuru />,
  },
  {
    path: "/guru/xipa1/ujian",
    element: <DaftarUjian />,
  },
  {
    path: "/guru/xipa1/ujian/tambah-ujian",
    element: <TambahUjian />,
  },
  {
    path: "/guru/xipa1/ujian/ujian-pekan-1",
    element: <DetailUjian />,
  },
  {
    path: "/guru/xipa1/ujian/ujian-pekan-1/daftar-soal",
    element: <DaftarSoalUjian />,
  },
  {
    path: "/guru/xipa1/ujian/ujian-pekan-1/hasil-ujian-peserta",
    element: <HasilUjianPeserta />,
  },
  {
    path: "/guru/xipa1/ujian/ujian-pekan-1/hasil-ujian-kelas",
    element: <HasilUjianKelas />,
  },
  {
    path: "/guru/xipa1/daftar-materi",
    element: <DaftarMateri />,
  },
  {
    path: "/guru/xipa1/tambah-materi",
    element: <TambahMateri />,
  },
  {
    path: "/guru/xipa1/daftar-anggota-kelas",
    element: <DaftarAnggotaKelas />,
  },
  {
    path: "/guru/profil",
    element: <Profil />,
  },
  {
    path: "/guru/profil/ubah-password",
    element: <UbahPassword />,
  },
  //Admin
  {
    path: '/admin/berhasil',
    element: <AdBerhasil />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin/homepage',
    element: <AdAdminHomepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin/daftarakun',
    element: <AdDaftarAkun />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin/daftarguru',
    element: <AdDaftarGuru />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin/daftarsiswa',
    element: <AdDaftarSiswa />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin/daftarsiswamapel',
    element: <AdDaftarSiswaMapel />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin/listakun',
    element: <AdListAkun />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin/listguru',
    element: <AdListGuru />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin/listsiswa',
    element: <AdListSiswa />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin/daftarpaketkelas',
    element: <AdDaftarPaketKelas />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin/test',
    element: <AdTest />,
    errorElement: <ErrorPage />,
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
