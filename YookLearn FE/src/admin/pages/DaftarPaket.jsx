import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
  
function tadmin() {
  const [paket, setPaket] = useState("");
  const [mapels, setMapels] = useState([""]);
  const [guru, setGuru] = useState("");

  const handleAddInput = () => {
    setMapels([...mapels, '']);
  };

  const handleInputChange = (index, value) => {
    const newMapels = [...mapels];
    newMapels[index] = value;
    setMapels(newMapels);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-[#1A1F5A] mb-4">
          Daftar Paket Kelas
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-6"
        >
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
              <input
                type="text"
                id="guru"
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Masukkan username"
                value={guru}
                onChange={(e) => setGuru(e.target.value)}
            />
            </div>
            <div className="mb-4">
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
            </div>
          <button type="submit" className="bg-[#1A1F5A] text-white px-4 py-2 rounded-lg">
              <a href="/admin/berhasil">
                  Simpan
              </a>
          </button>
        </form>
      </main>
    </div>
  );
}

export default tadmin;
