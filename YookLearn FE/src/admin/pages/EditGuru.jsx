import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { isAuthenticated } from "../../Common/services/Auth";
import { addGuru, editGuru, fetchCurrentGuru } from "../services/AdminAPI";
import LoadingPage from "../../Siswa/pages/LoadingPage";
import NavGuru from "../components/NavGuru";

function EditGuru() {
  const navigate = useNavigate();
  const { idGuru } = useParams();
  const login = isAuthenticated("admin");
  const [nama, setNama] = useState("");
  const [nip, setNIP] = useState("");
  const [pangkat, setPangkat] = useState("");
  const [golongan, setGolongan] = useState("");
  const [mapel, setMapel] = useState("");

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCurrentGuru(idGuru);
      setNama(data.nama_lengkap);
      setNIP(data.nip);
      setPangkat(data.pangkat);
      setGolongan(data.golongan);
      setMapel(data.matpel);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const handleAddGuru = async () => {
    const isSuccess = await editGuru(
      nama,
      nip,
      golongan,
      pangkat,
      mapel,
      idGuru
    );
    if (isSuccess) {
      navigate("/admin/berhasil");
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
          Daftar Akun Guru
        </h1>
        <form className="bg-white rounded-lg shadow-md p-6">
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
            <label htmlFor="nip" className="block text-gray-700 font-bold mb-2">
              NIP
            </label>
            <input
              type="text"
              id="NIP"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Masukkan NIP"
              value={nip}
              onChange={(e) => setNIP(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="pangkat"
              className="block text-gray-700 font-bold mb-2"
            >
              Pangkat
            </label>
            <input
              type="text"
              id="pangkat"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Masukkan Pangkat"
              value={pangkat}
              onChange={(e) => setPangkat(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="golongan"
              className="block text-gray-700 font-bold mb-2"
            >
              Golongan
            </label>
            <input
              type="text"
              id="golongan"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Masukkan Golongan"
              value={golongan}
              onChange={(e) => setGolongan(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mapel"
              className="block text-gray-700 font-bold mb-2"
            >
              Mata Pelajaran
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
          <button
            type="button"
            onClick={handleAddGuru}
            className="bg-[#1A1F5A] text-white px-4 py-2 rounded-lg"
          >
            Simpan
          </button>
        </form>
      </main>
    </div>
  );
}

export default EditGuru;
