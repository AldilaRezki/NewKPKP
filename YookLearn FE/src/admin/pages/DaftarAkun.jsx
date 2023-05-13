import React, { useState } from "react";

function tadmin() {
  const [nama, setNama] = useState("");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-[#1A1F5A] text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold font-mono">YookLearn</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-[#1A1F5A] mb-4">
          Daftar Akun Admin
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-6"
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
              htmlFor="status"
              className="block text-gray-700 font-bold mb-2"
            >
              Status
            </label>
            <input
              type="text"
              id="Status"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Masukkan status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
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
          <button
            type="submit"
            className="bg-[#1A1F5A] text-white px-4 py-2 rounded-lg"
          >
            <a href="/berhasil">Simpan</a>
          </button>
        </form>
      </main>
    </div>
  );
}

export default tadmin;
