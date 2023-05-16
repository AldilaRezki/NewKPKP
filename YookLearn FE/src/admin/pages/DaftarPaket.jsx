import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { addKelas, fetchAll } from "../services/AdminAPI";
import { useNavigate } from 'react-router-dom';

function tadmin() {
  const navigate = useNavigate();
  const [paket, setPaket] = useState("");
  const [mapels, setMapels] = useState([""]);
  const [guru, setGuru] = useState("");
  const [daftarGuru, setDaftarGuru] = useState([]);

  const handleAddInput = () => {
    setMapels([...mapels, ""]);
  };

  const handleInputChange = (index, value) => {
    const newMapels = [...mapels];
    newMapels[index] = value;
    setMapels(newMapels);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAll("guru");
      setDaftarGuru(data);
    }
    fetchData();
  }, []);

  const handleSubmit = async () => {
    const isSuccess = await addKelas(paket, guru);
    console.log(isSuccess);
    if (isSuccess) {
      navigate("/admin/berhasil");
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
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
              placeholder="Masukkan Mata Pelajaran"
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
              <option value=""></option>
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

export default tadmin;
