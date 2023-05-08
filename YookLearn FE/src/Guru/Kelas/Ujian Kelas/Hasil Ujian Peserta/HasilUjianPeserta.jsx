import React from "react";
import Header from "../../../Header";
import HeaderKelas from "../../HeaderKelas";
import { BiArrowBack } from "react-icons/bi";
import DetailUjian_HasilUjianPeserta from "./DetailUjian_HasilUjianPeserta";
import TabelHasilUjianPeserta from "./TabelHasilUjianPeserta";

function HasilUjianPeserta() {
  return (
    <div>
      <Header></Header>
      <HeaderKelas></HeaderKelas>
      <div className="bg-tosca mt-10 mx-10 p-2">
        <a href="/xipa1/ujian/ujian-pekan-1">
          <BiArrowBack className="bg-white text-xl"></BiArrowBack>
        </a>
      </div>
      <h1 className="text-xl mt-8 ml-10 font-medium text-biru">
        Hasil Ujian Peserta
      </h1>

      <DetailUjian_HasilUjianPeserta></DetailUjian_HasilUjianPeserta>

      <TabelHasilUjianPeserta></TabelHasilUjianPeserta>
    </div>
  );
}

export default HasilUjianPeserta;
