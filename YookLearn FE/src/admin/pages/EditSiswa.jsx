import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { isAuthenticated } from "../../Common/services/Auth";
import {
  editSiswa,
  fetchAllKelas,
  fetchCurrentSiswa,
} from "../services/AdminAPI";
import NavGuru from "../components/NavGuru";
import LoadingPage from "../../Siswa/pages/LoadingPage";

function EditSiswa() {
  const navigate = useNavigate();
  const { idSiswa } = useParams();
  const login = isAuthenticated("admin");
  const [nama, setNama] = useState("");
  const [nisn, setNISN] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [agama, setAgama] = useState("");
  const [kelas, setKelas] = useState("");
  const [kelasLama, setKelasLama] = useState("");
  const [daftarKelas, setDaftarKelas] = useState([]);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAllKelas();
      setDaftarKelas(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCurrentSiswa(idSiswa);
      setNama(data.nama_lengkap);
      setNISN(data.nisn);
      setJenisKelamin(data.jenis_kelamin);
      setAgama(data.agama);
      setKelas(data.id_kelas);
      setKelasLama(data.nama_kelas);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const handleAddSiswa = async () => {
    const isSuccess = await editSiswa(nama, nisn, jenisKelamin, agama, kelas, idSiswa);
    if (isSuccess) {
      navigate("/admin/berhasil");
    }
  };

  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="bg-white max-h-screen">
      <Header />
      <NavGuru />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-[#1A1F5A] mb-4">
          Daftar Akun Siswa
        </h1>
        <form className="bg-white rounded-lg shadow-md p-6 w-3/5">
          <div className="mb-4">
            <label
              htmlFor="nama"
              className="block text-gray-700 font-bold mb-2"
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              id="nama"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Masukkan nama lengkap"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="nisn"
              className="block text-gray-700 font-bold mb-2"
            >
              NISN
            </label>
            <input
              type="text"
              id="NISN"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Masukkan NISN"
              value={nisn}
              onChange={(e) => setNISN(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="jeniskelamin"
              className="block text-gray-700 font-bold mb-2"
            >
              Jenis Kelamin
            </label>
            <input
              type="text"
              id="jeniskelamin"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Masukkan Jenis Kelamin"
              value={jenisKelamin}
              onChange={(e) => setJenisKelamin(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="agama"
              className="block text-gray-700 font-bold mb-2"
            >
              Agama
            </label>
            <input
              type="text"
              id="agama"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Masukkan Agama"
              value={agama}
              onChange={(e) => setAgama(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="kelas"
              className="block text-gray-700 font-bold mb-2"
            >
              Pilih Kelas
            </label>
            <select
              id="kelas"
              className="w-full border rounded-lg px-4 py-2"
              value={kelas}
              onChange={(e) => setKelas(e.target.value)}
            >
              <option value={kelas}>{kelasLama}</option>
              {daftarKelas.map((kelas) => (
                <option key={kelas.id} value={kelas.id}>
                  {kelas.nama_kelas}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={handleAddSiswa}
            className="bg-[#1A1F5A] text-white px-4 py-2 rounded-lg"
          >
            Berikutnya
          </button>
        </form>
      </main>
    </div>
  );
}

export default EditSiswa;
