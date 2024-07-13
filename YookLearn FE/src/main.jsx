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
import Logbook from "./Siswa/pages/Logbook";
import LogbookForm from "./Siswa/pages/LogbookForm";

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
import AdListPaketKelas from "./admin/pages/ListPaketKelas";
import AdDaftarSiswa from "./admin/pages/DaftarSiswa";
import AdDaftarMapel from "./admin/pages/DaftarMapel";
import AdDaftarPaket from "./admin/pages/DaftarPaket";
import AdListAkun from "./admin/pages/ListAkun";
import AdListGuru from "./admin/pages/ListGuru";
import AdListSiswa from "./admin/pages/ListSiswa";
import AdListMataPelajaranPaketKelas from "./admin/pages/ListMataPelajaranPaketKelas";
import AdListSiswaPaketKelas from "./admin/pages/ListSiswaPaketKelas";
import AdTest from "./admin/pages/test";
import DetailTugasGuru from "./Guru/Kelas/Tugas Kelas/DetailTugasGuru";
import TambahSoal from "./Guru/Kelas/Ujian Kelas/Menambahkan Soal/TambahSoal";
import ExamPage from "./Siswa/pages/ExamPage";
import IsiMateri from "./Guru/Kelas/Materi Kelas/IsiMateri";
import HasilUjianSiswa from "./Guru/Kelas/Ujian Kelas/Hasil Ujian Siswa/HasilUjianSiswa";
// import InputFormBerita from "./Siswa/pages/InputFormBerita";

import EditPaket from "./Admin/pages/EditPaket";
import EditSiswa from "./Admin/pages/EditSiswa";
import EditGuru from "./Admin/pages/EditGuru";
import AdminEditAkun from "./Admin/pages/EditAkun";
import EditMapel from "./Admin/pages/EditMapel";
import EditTugas from "./Guru/Kelas/Tugas Kelas/EditTugas";
import BerhasilKelas from "./admin/pages/BerhasilKelas";
import TambahBatch from "./Guru/TambahBatch";
import TambahAkun from "./Guru/TambahAkun";
import LogbookGuru from "./Guru/Logbook";
import DaftarLogbook from "./Guru/DaftarLogbook";
import TambahKelas from "./Guru/Daftar Kelas/TambahKelas";
import TambahMateri2 from "./Guru/TambahMateri";

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
        path: "/siswa/kelas/:idKelas/detailkelas/:idMapel/ujian/:idUjian/detailujian",
        element: <DetailUjianSiswa />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/siswa/kelas/:idKelas/detailkelas/:idMapel/ujian/:idUjian/exam",
        element: <ExamPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/siswa/logbook",
        element: <Logbook />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/siswa/logbook/tambahlogbook",
        element: <LogbookForm />,
        errorElement: <ErrorPage />,
    },

    // {
    //   path: "/siswa/test",
    //   element: <InputFormBerita />,
    //   errorElement: <ErrorPage />,
    // },

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
        path: "/guru/tambah-batch",
        element: <TambahBatch />,
    },
    {
        path: "/guru/tambah-materi/:id",
        element: <TambahMateri2 />,
    },
    {
        path: "/guru/tambah-akun",
        element: <TambahAkun />,
    },
    {
        path: "/guru/logbook/:id",
        element: <LogbookGuru />,
    },
    {
        path: "/guru/daftar-logbook",
        element: <DaftarLogbook />,
    },
    {
        path: "/guru/mapel/:idMapel",
        element: <HomepageKelas />,
    },
    {
        path: "/guru/tambah-kelas",
        element: <TambahKelas />,
    },
    {
        path: "/guru/mapel/:idMapel/daftar-materi",
        element: <DaftarMateri />,
    },
    {
        path: "/guru/mapel/:idMapel/materi/:idMateri/isi-materi",
        element: <IsiMateri />,
    },
    {
        path: "/guru/mapel/:idMapel/materi/tambah-materi",
        element: <TambahMateri />,
    },
    {
        path: "/guru/mapel/:idMapel/daftar-tugas",
        element: <DaftarTugas />,
    },
    {
        path: "/guru/mapel/:idMapel/tambah-tugas",
        element: <TambahTugas />,
    },
    {
        path: "/guru/mapel/:idMapel/edit-tugas/:idTugas",
        element: <EditTugas />,
    },
    {
        path: "/guru/mapel/:idMapel/tugas/:idTugas/detail-tugas",
        element: <DetailTugasGuru />,
    },
    {
        path: "/guru/mapel/:idMapel/ujian",
        element: <DaftarUjian />,
    },
    {
        path: "/guru/mapel/:idMapel/tambah-ujian",
        element: <TambahUjian />,
    },
    {
        path: "/guru/mapel/:idMapel/ujian/:idUjian/tambah-soal-ujian",
        element: <TambahSoal />,
    },
    {
        path: "/guru/mapel/:idMapel/ujian/:idUjian",
        element: <DetailUjian />,
    },
    {
        path: "/guru/mapel/:idMapel/ujian/:idUjian/daftar-soal",
        element: <DaftarSoalUjian />,
    },
    {
        path: "/guru/mapel/:idMapel/ujian/:idUjian/hasil-ujian-peserta",
        element: <HasilUjianPeserta />,
    },
    {
        path: "/guru/mapel/:idMapel/ujian/:idUjian/hasil-ujian-siswa",
        element: <HasilUjianSiswa />,
    },
    {
        path: "/guru/mapel/:idMapel/ujian/:idUjian/hasil-ujian-kelas",
        element: <HasilUjianKelas />,
    },
    {
        path: "/guru/mapel/:idMapel/daftar-anggota-kelas",
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

    //Admin
    {
        path: "/admin/berhasil/:nav",
        element: <AdBerhasil />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/admin/berhasil/:idKelas/:nav",
        element: <BerhasilKelas />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/admin/homepage",
        element: <AdAdminHomepage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/admin/berhasil",
        element: <AdBerhasil />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/admin/daftarakun",
        element: <AdDaftarAkun />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/admin/daftarguru",
        element: <AdDaftarGuru />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/admin/daftarsiswa",
        element: <AdDaftarSiswa />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/admin/listakun",
        element: <AdListAkun />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/admin/akun/edit/:idAkun",
        element: <AdminEditAkun />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/admin/listguru",
        element: <AdListGuru />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/admin/guru/edit/:idGuru",
        element: <EditGuru />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/admin/listsiswa",
        element: <AdListSiswa />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/admin/siswa/edit/:idSiswa",
        element: <EditSiswa />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/admin/ListPaketKelas",
        element: <AdListPaketKelas />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/admin/edit/kelas/:idKelas",
        element: <EditPaket />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/admin/ListPaketKelas/:idKelas/siswa",
        element: <AdListSiswaPaketKelas />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/admin/ListPaketKelas/:idKelas/matapelajaran",
        element: <AdListMataPelajaranPaketKelas />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/admin/ListPaketKelas/:idKelas/matapelajaran/edit/:idMapel",
        element: <EditMapel />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/admin/test",
        element: <AdTest />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/admin/daftarmapel/:idKelas",
        element: <AdDaftarMapel />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/admin/daftarpaket",
        element: <AdDaftarPaket />,
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
