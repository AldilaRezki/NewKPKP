import React, { useState } from 'react';
import Header from './Header';
  
function pms() {
  const [nama, setNama] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-white max-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-6 items-center justify-center h-max">
        <h1 className="text-2xl font-bold text-[#1A1F5A] mb-4">
          Daftar Akun Siswa
        </h1>
        <div className="flex justify-evenly">
          <div className="flex flex-col w-2/5 items-start justify-center">
            <div className="border-l-4 border-[#1A1F5A] pl-4 my-4">
              Isi Data Diri Siswa
            </div>
            <div className="border-l-4 border-[#1A1F5A] pl-4 my-4">
              Pilihan Kelas
            </div>
            <div className="border-l-4 border-gray-500 text-gray-500 pl-4 my-4">
              Pendaftaran Akun Selesai
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-md p-6 w-3/5"
          >
            <div className="mb-4">
              <label
                htmlFor="nama"
                className="block text-gray-700 font-bold mb-2"
              >
                Pilih Kelas
              </label>
              <input
                type="text"
                id="nama"
                className="w-full border rounded-lg px-4 py-2"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <button type="submit" className="bg-[#1A1F5A] text-white px-4 py-2 rounded-lg">
              <a href="/admin/berhasil">
                  Simpan
              </a>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default pms;
