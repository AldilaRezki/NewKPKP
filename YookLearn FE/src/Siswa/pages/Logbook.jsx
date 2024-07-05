import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";

const Logbook = () => {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate("/siswa/logbook/tambahlogbook");
  };

  const handlePrintClick = () => {
    window.print();
  };

  return (
    <div>
      <Header />
      <Nav />
      <div className="min-h-screen bg-[#EEF4FA]">
        <div className="container mx-auto mt-10 p-4">
          <h1 className="text-2xl font-bold mb-4">Logbook</h1>
          <div className="flex justify-between mb-4">
            <div className="flex items-center">
              <label className="mr-2">Tanggal Awal :</label>
              <input
                type="date"
                className="border rounded p-2 mr-4"
                placeholder="hh/bb/tttt"
              />
              <label className="mr-2">Tanggal Akhir:</label>
              <input
                type="date"
                className="border rounded p-2"
                placeholder="hh/bb/tttt"
              />
            </div>
            <button className="bg-[#1A1F5A] text-white px-4 py-2 rounded">
              <i className="fas fa-search"></i> Cari
            </button>
          </div>
          <div className="flex justify-start mb-4">
            <button
              className="bg-[#1A1F5A] text-white px-4 py-2 rounded mr-4"
              onClick={handleAddClick}
            >
              <i className="fas fa-plus"></i> Tambah
            </button>
            <button
              className="bg-[#1A1F5A] text-white px-4 py-2 rounded"
              onClick={handlePrintClick}
            >
              <i className="fas fa-print"></i> Cetak
            </button>
          </div>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Tanggal</th>
                <th className="py-2">Deskripsi Kegiatan</th>
                <th className="py-2">Lampiran</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">2023-07-04</td>
                <td className="border px-4 py-2">Contoh Kegiatan</td>
                <td className="border px-4 py-2">
                  <a href="#">Download</a>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Logbook;
