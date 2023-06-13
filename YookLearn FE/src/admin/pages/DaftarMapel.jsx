import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { addMapel, fetchAll } from "../services/AdminAPI";
import NavGuru from "../components/NavGuru";

function tadmin() {
  const navigate = useNavigate();
  const { idKelas } = useParams();
  const [mapel, setMapel] = useState("");
  const [guru, setGuru] = useState("");
  const [daftarGuru, setDaftarGuru] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAll("guru");
      setDaftarGuru(data);
    }
    fetchData();
  }, []);

  const handleSubmit = async () => {
    const isSuccess = await addMapel(mapel, guru, idKelas);
    if (isSuccess) {
      navigate(`/admin/berhasil/${idKelas}/mapel`);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <NavGuru />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-[#1A1F5A] mb-4">
          Daftar Mata Pelajaran
        </h1>
        <form className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label
              htmlFor="mapel"
              className="block text-gray-700 font-bold mb-2"
            >
              Nama Mata Pelajaran
            </label>
            <input
              type="text"
              id="mapel"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Masukkan Mata Pelajaran"
              value={mapel}
              onChange={(e) => setMapel(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="guru"
              className="block text-gray-700 font-bold mb-2"
            >
              Guru Mata Pelajaran
            </label>
            <select
              id="guru"
              className="w-full border rounded-lg px-4 py-2"
              value={guru}
              onChange={(e) => setGuru(e.target.value)}
            >
              <option value=""></option>
              {daftarGuru.map((guru) => (
                <option key={guru.id} value={guru.id}>
                  {guru.nama_lengkap}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-[#1A1F5A] text-white px-4 py-2 rounded-lg"
          >
            Simpan
          </button>
        </form>
      </main>
    </div>
  );
}

export default tadmin;
