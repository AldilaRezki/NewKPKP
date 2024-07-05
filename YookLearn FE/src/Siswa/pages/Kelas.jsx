import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../../Common/services/Auth";
import { useNavigate, Link } from "react-router-dom";
import { MdOutlineDriveFileMove, MdGroups } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { BiUserCircle } from "react-icons/bi";

import Header from "../components/Header";
import Nav from "../components/Nav";
import ListTugas from "../components/ListTugas";
import EditAkun from "../components/EditAkun";

import { fecthKelas, fetchStudentAssignment } from "../services/SiswaAPI";
import LoadingPage from "./LoadingPage";

function Kelas() {
  const navigate = useNavigate();
  const login = isAuthenticated("siswa");
  const [kelas, setKelas] = useState([]);
  const [tugas, setTugas] = useState([]);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const [kelasData, tugasData] = await Promise.all([
        fecthKelas(),
        fetchStudentAssignment(),
      ]);
      setKelas(kelasData);
      setTugas(tugasData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div>
        <Header />
        <Nav />
      </div>
      <div className="flex flex-col justify-between">
        <div className="mt-16 ml-10 w-1/2 flex">
          <MdOutlineDriveFileMove className="text-2xl text-[#1A1F5A]" />
          <h1 className="font-bold ml-4 text-[#1A1F5A]">
            BATCH 1
          </h1>
        </div>
        <Link to={`${kelas.id}`}>
          {" "}
          <div className="mt-2 ml-10 w-[559px] h-[49px] bg-[#EEF4FA] flex items-center">
            <SiGoogleclassroom className="text-2xl text-[#1A1F5A] ml-1" />
            <h1 className="font-bold ml-4 text-[#1A1F5A]">
              {kelas.nama_kelas}
            </h1>
          </div>
        </Link>
        <div className="mt-2 ml-10 w-[559px] h-[66px] border border-[#1A1F5A] flex items-center shadow-md">
          <BiUserCircle className="text-2xl text-[#1A1F5A] ml-1" />
          <h1 className="ml-2">{kelas.guru}</h1>
          <MdGroups className="ml-10 text-2xl" />
          <h1 className="ml-2">{kelas.jumlah_siswa}</h1>
        </div>
      </div>

      <div className="flex justify-end px-10 pt-8">
        <EditAkun />
      </div>
      {/* <div className="flex justify-end mt-1.5 mr-10 px-10 mb-20">
        <ListTugas dataTugas={tugas} />
      </div> */}
    </>
  );
}
export default Kelas;
