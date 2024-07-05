import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";

const LogbookForm = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/siswa/logbook");
  };

  return (
    <div>
      <Header />
      <Nav />
      <div className="min-h-screen bg-[#EEF4FA] flex items-center justify-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
          <h1 className="text-2xl font-bold mb-4">Tambah Logbook</h1>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Tanggal :
              </label>
              <input
                type="date"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Deskripsi Kegiatan:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
                placeholder="Deskripsi kegiatan"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Lampiran:
              </label>
              <input
                type="file"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-800"
                onClick={handleCancel}
              >
                Batal
              </button>
              <button
                type="submit"
                className="bg-[#1A1F5A] text-white px-4 py-2 rounded"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogbookForm;
