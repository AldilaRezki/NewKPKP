import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../Common/services/Auth";
import { addSiswa, fetchAllKelas } from "../services/AdminAPI";

function tsiswa() {
  const navigate = useNavigate();
  const login = isAuthenticated("admin");
  const [nama, setNama] = useState("");
  const [username, setUserName] = useState("");
  const [nisn, setNISN] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [agama, setAgama] = useState("");
  const [kelas, setKelas] = useState("");
  const [password, setPassword] = useState("");
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

  const handleAddSiswa = async () => {
    const isSuccess = await addSiswa(
      nama,
      username,
      nisn,
      jenisKelamin,
      agama,
      password,
      kelas
    );
    if (isSuccess) {
      navigate("/admin/berhasil");
    }
  };

  return (
    <div className="bg-white max-h-screen">
      <Header />
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
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
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
              <option value=""></option>
              {daftarKelas.map((kelas) => (
                <option key={kelas.id} value={kelas.id}>
                  {kelas.nama_kelas}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Buat Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="*******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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

export default tsiswa;
