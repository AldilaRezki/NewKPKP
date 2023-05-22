import React, { useEffect, useState } from "react";
import HeaderGuru from "../../HeaderGuru";
import HeaderKelas from "../HeaderKelas";
import { BiArrowBack } from "react-icons/bi";
import TabelAnggotaKelas from "./TabelAnggotaKelas";
import Header from "../../Header";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from './../../../Common/services/Auth';

function DaftarAnggotaKelas() {
  const { idMapel } = useParams();
  const navigate = useNavigate();
  const login = isAuthenticated("guru");

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  return (
    <div>
      <Header></Header>
      <HeaderGuru></HeaderGuru>
      <HeaderKelas idMapel = {idMapel}></HeaderKelas>
      <div className="bg-tosca mt-10 mx-10 p-2">
        <a href="/guru/xipa1">
          <BiArrowBack className="bg-white text-xl"></BiArrowBack>
        </a>
      </div>
      <h1 className="text-xl mt-8 ml-10 font-medium text-biru">
        Daftar Anggota Kelas
      </h1>

      <TabelAnggotaKelas idMapel = {idMapel}></TabelAnggotaKelas>
    </div>
  );
}

export default DaftarAnggotaKelas;
