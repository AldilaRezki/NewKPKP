import React, { useEffect, useState } from "react";
import HeaderGuru from "../HeaderGuru";
import { BiArrowBack } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../Common/services/Auth";
import { fetchProfile } from "../services/GuruAPI";

function Profil() {
  const navigate = useNavigate();
  const login = isAuthenticated("guru");
  const [dataGuru, setGuru] = useState([]);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProfile();
      setGuru(data);
      // setIsLoading(false);
    }
    fetchData();
  }, []);

  console.log(dataGuru);

  return (
    <div>
      <Header></Header>
      <HeaderGuru></HeaderGuru>
      <div className="bg-tosca mt-10 mx-10 p-2">
        <a href="/">
          <BiArrowBack className="bg-white text-xl"></BiArrowBack>
        </a>
      </div>
      <div className="flex flex-col gap-y-5 w-full mt-20 justify-center">
        <div className="fotoProfil flex text-[60px] mx-auto border-[0.3px] p-16 shadow-md">
          <BsPersonFill></BsPersonFill>
        </div>
      </div>
      <div className="isiProfil flex flex-col gap-y-8 w-full mt-16 justify-center items-center content-center">
        <div className="namaProfil w-[420px] flex flex-col gap-y-2">
          <label>Nama</label>
          <p className="border-[0.1px] shadow-md p-3">
            {dataGuru.nama_lengkap}
          </p>
        </div>
        <div className="nipProfil  w-[420px]  flex flex-col gap-y-2">
          <label>NIP</label>
          <p className="border-[0.1px] shadow-md p-3">{dataGuru.nip}</p>
        </div>
        <div className="pangkatGolongan flex">
          <div className="pangkatProfil w-[200px] mr-[10px] flex flex-col gap-y-2">
            <label>Pangkat</label>
            <p className="border-[0.1px] shadow-md p-3">{dataGuru.pangkat}</p>
          </div>
          <div className="GolonganProfil w-[200px] ml-[10px] flex flex-col gap-y-2">
            <label>Golongan</label>
            <p className="border-[0.1px] shadow-md p-3">{dataGuru.golongan}</p>
          </div>
        </div>
        <div className="jabatanProfil w-[420px] flex flex-col gap-y-2">
          <label>Jabatan</label>
          <p className="border-[0.1px] shadow-md p-3">{dataGuru.matpel}</p>
        </div>
        <a
          href="/guru/profil/ubah-password"
          className="tombolUbahPassword  flex flex-col gap-y-2 bg-biru text-white shadow-xl border-[0.1px] py-3 px-8 rounded-full mb-10"
        >
          Ubah Password
        </a>
      </div>
    </div>
  );
}

export default Profil;
