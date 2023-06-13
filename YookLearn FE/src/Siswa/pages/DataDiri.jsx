import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../../Common/services/Auth";
import { useNavigate } from "react-router-dom";
import { fetchSiswaProfile } from "../services/SiswaAPI";

import Header from "../components/Header";
import Nav from "../components/Nav";
import { FaRegUser } from "react-icons/fa";
import LoadingPage from "./LoadingPage";

function DataDiri() {
  const navigate = useNavigate();
  const login = isAuthenticated("siswa");
  const [siswa, setSiswa] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchSiswaProfile();
      setSiswa(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div>
        <Header />
        <Nav />
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center bg-[#EEF4FA] w-64 h-64 rounded-full">
          <FaRegUser className="text-6xl text-[#1A1F5A]" />
        </div>
        <div className="flex flex-col mt-8">
          <div className="mb-4">
            <label className="font-bold text-[#1A1F5A]">Nama:</label>
            <p className="text-[#1A1F5A]">{siswa?.nama_lengkap}</p>
          </div>
          <div className="mb-4">
            <label className="font-bold text-[#1A1F5A]">NISN:</label>
            <p className="text-[#1A1F5A]">{siswa?.nisn}</p>
          </div>
          <div className="mb-4">
            <label className="font-bold text-[#1A1F5A]">Jenis Kelamin:</label>
            <p className="text-[#1A1F5A]">{siswa?.jenis_kelamin}</p>
          </div>
          <div className="mb-4">
            <label className="font-bold text-[#1A1F5A]">Agama:</label>
            <p className="text-[#1A1F5A]">{siswa?.agama}</p>
          </div>
          {/* <div className="mb-4">
            <label className="font-bold text-[#1A1F5A]">Tanggal Lahir:</label>
            <p className="text-[#1A1F5A]">31/01/2007</p>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default DataDiri;
