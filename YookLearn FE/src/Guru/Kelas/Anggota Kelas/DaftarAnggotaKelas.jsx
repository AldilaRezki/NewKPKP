import React from "react";
import HeaderGuru from "../../HeaderGuru";
import HeaderKelas from "../HeaderKelas";
import { BiArrowBack } from "react-icons/bi";
import TabelAnggotaKelas from "./TabelAnggotaKelas";
import Header from "../../Header";

function DaftarAnggotaKelas() {
  return (
    <div>
      <Header></Header>
      <HeaderGuru></HeaderGuru>
      <HeaderKelas></HeaderKelas>
      <div className="bg-tosca mt-10 mx-10 p-2">
        <a href="/guru/xipa1">
          <BiArrowBack className="bg-white text-xl"></BiArrowBack>
        </a>
      </div>
      <h1 className="text-xl mt-8 ml-10 font-medium text-biru">
        Daftar Anggota Kelas
      </h1>

      <TabelAnggotaKelas></TabelAnggotaKelas>
    </div>
  );
}

export default DaftarAnggotaKelas;
