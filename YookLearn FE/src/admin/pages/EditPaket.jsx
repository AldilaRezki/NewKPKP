import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { addKelas, editKelas, fetchAll, fetchCurrentPaket } from "../services/AdminAPI";
import { useNavigate, useParams } from "react-router-dom";
import LoadingPage from "../../Siswa/pages/LoadingPage";
import NavGuru from "../components/NavGuru";

function EditPaket() {
  const navigate = useNavigate();
  const { idKelas } = useParams();
  const [dataPaket, setDataPaket] = useState([]);
  const [daftarGuru, setDaftarGuru] = useState([]);
  const [paket, setPaket] = useState("");
  const [guru, setGuru] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAll("guru");
      setDaftarGuru(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCurrentPaket(idKelas);
      setPaket(data.nama_kelas);
      setGuru(data.id_guru);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const handleSubmit = async () => {
    const isSuccess = await editKelas(paket, guru, idKelas);
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
          Daftar Paket Kelas
        </h1>
        <form className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label
              htmlFor="paket"
              className="block text-gray-700 font-bold mb-2"
            >
              Nama Paket
            </label>
            <input
              type="text"
              id="paket"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Masukkan Nama Kelas"
              value={paket}
              onChange={(e) => setPaket(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="guru"
              className="block text-gray-700 font-bold mb-2"
            >
              Guru Wali
            </label>
            <select
              id="guru"
              className="w-full border rounded-lg px-4 py-2"
              value={guru}
              onChange={(e) => setGuru(e.target.value)}
            >
              <option value={dataPaket.id_guru}>{dataPaket.nama_guru}</option>
              {daftarGuru.map((guru) => (
                <option key={guru.id} value={guru.id}>
                  {guru.nama_lengkap}
                </option>
              ))}
            </select>
          </div>
          {/* <div className="mb-4">
              <label
                htmlFor="mapel"
                className="block text-gray-700 font-bold mb-2"
              >
                Mata Pelajaran
              </label>
              {mapels.map((mapel, index) => (
              <input
                key={index}
                value={mapel}
                type="text"
                id="mapel"
                className="w-full border rounded-lg px-4 py-2 mb-2"
                placeholder="Masukkan Mata Pelajaran"
                onChange={(e) => handleInputChange(index, e.target.value)}
                />
                ))}
                <button onClick={handleAddInput} className='flex items-center text-[#1A1F5A] font-semibold'>
                <FontAwesomeIcon icon={faCirclePlus} className=' text-2xl mx-2' />
                Tambah Mata Pelajaran</button>
            </div> */}
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

export default EditPaket;
