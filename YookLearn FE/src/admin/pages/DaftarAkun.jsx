import React, { useEffect, useState } from "react";
import Header from "../pages/Header";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../Common/services/Auth";

function tadmin() {
  const navigate = useNavigate();
  const login = isAuthenticated("admin");
  const [nama, setNama] = useState("");
  const [username, setUserName] = useState("");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
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
                htmlFor="username"
                className="block text-gray-700 font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Masukkan username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
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
            <a href="/admin/berhasil">Simpan</a>
          </button>
        </form>
      </main>
    </div>
  );
}

export default tadmin;
