import React, { useState } from 'react';
import Header from "../components/Header";
  
function tadmin() {
  const [mapel, setMapel] = useState("");
  const [guru, setGuru] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-[#1A1F5A] mb-4">
          Daftar Mata Pelajaran
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-6"
        >
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
              <input
                type="text"
                id="username"
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Masukkan username"
                value={guru}
                onChange={(e) => setGuru(e.target.value)}
            />
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
