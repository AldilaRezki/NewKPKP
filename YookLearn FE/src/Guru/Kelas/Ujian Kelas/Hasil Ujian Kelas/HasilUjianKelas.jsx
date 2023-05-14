import React from "react";
import Header from "../../../Header";
import HeaderKelas from "../../HeaderKelas";
import { BiArrowBack } from "react-icons/bi";
import TabelHasilUjianKelas from "./TabelHasilUjianKelas";

function HasilUjianKelas() {
  return (
    <div>
      <Header></Header>
      <HeaderKelas></HeaderKelas>
      <div className="bg-tosca mt-10 mx-10 p-2">
        <a href="/guru/xipa1/ujian/ujian-pekan-1">
          <BiArrowBack className="bg-white text-xl"></BiArrowBack>
        </a>
      </div>
      <h1 className="text-xl mt-8 ml-10 font-medium text-biru">
        Hasil Ujian Peserta
      </h1>

      <TabelHasilUjianKelas></TabelHasilUjianKelas>
    </div>
  );
}

export default HasilUjianKelas;
