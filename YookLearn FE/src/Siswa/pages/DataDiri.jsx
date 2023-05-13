import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../../Common/functions/Auth";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Nav from "../components/Nav";
import { FaRegUser } from "react-icons/fa";

function DataDiri() {
  const navigate = useNavigate();
  const login = isAuthenticated("siswa");
  const [siswa, setSiswa] = useState(null);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:8000/api/student/profile",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error(data.message);
      } else {
        setSiswa(data.student);
      }
    }

    fetchData();
  }, []);

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
