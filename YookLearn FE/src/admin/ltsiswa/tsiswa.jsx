import React, { useState } from "react";

function tsiswa() {
  const [nama, setNama] = useState("");
  const [nisn, setNISN] = useState("");
  const [jeniskelamin, setJenisKelamin] = useState("");
  const [agama, setAgama] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-white max-h-screen">
      <header className="bg-[#1A1F5A] text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold font-mono">YookLearn</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-[#1A1F5A] mb-4">Daftar Akun Siswa</h1>
        <div className='flex justify-evenly'>
          <div className='flex flex-col w-2/5 items-start justify-center'>
            <div className='border-l-4 border-[#1A1F5A] pl-4 my-4'>Isi Data Diri Siswa</div>
            <div className='border-l-4 border-gray-500 text-gray-500 pl-4 my-4'>Pilihan Kelas</div>
            <div className='border-l-4 border-gray-500 text-gray-500 pl-4 my-4'>Pendaftaran Akun Selesai</div>
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
                value={jeniskelamin}
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
            <button type="submit" className="bg-[#1A1F5A] text-white px-4 py-2 rounded-lg">
              <a href="/pilmapelsiswa/">
                  Berikutnya
              </a>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default tsiswa;
