import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import {
  addMapel,
  editMapel,
  fetchAll,
  fetchCurrentMapel,
} from "../services/AdminAPI";
import LoadingPage from "../../Siswa/pages/LoadingPage";
import NavGuru from "../components/NavGuru";

function EditMapel() {
  const navigate = useNavigate();
  const { idKelas, idMapel } = useParams();
  const [mapel, setMapel] = useState("");
  const [guru, setGuru] = useState("");
  const [guruLama, setGuruLama] = useState("");
  const [daftarGuru, setDaftarGuru] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAll("guru");
      setDaftarGuru(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCurrentMapel(idMapel);
      setMapel(data.nama_matpel);
      setGuru(data.id_guru);
      setGuruLama(data.nama_guru);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const handleSubmit = async () => {
    const isSuccess = await editMapel(mapel, guru, idMapel, idKelas);
    if (isSuccess) {
      navigate(`/admin/berhasil/${idKelas}/mapel`);
    }
  };

  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) {
    return <LoadingPage />;
  }

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
              <option value={guru}>{guruLama}</option>
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

export default EditMapel;
