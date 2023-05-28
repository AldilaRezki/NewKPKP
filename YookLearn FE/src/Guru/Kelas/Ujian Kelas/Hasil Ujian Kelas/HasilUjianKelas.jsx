import React from "react";
import HeaderGuru from "../../../HeaderGuru";
import HeaderKelas from "../../HeaderKelas";
import { BiArrowBack } from "react-icons/bi";
import TabelHasilUjianKelas from "./TabelHasilUjianKelas";
import Header from "../../../Header";
import { useParams } from "react-router-dom";

function HasilUjianKelas() {
  const { idMapel } = useParams();

  return (
    <div>
      <Header></Header>
      <HeaderGuru></HeaderGuru>
      <HeaderKelas idMapel={idMapel}></HeaderKelas>
      <div className="bg-tosca mt-10 mx-10 p-2">
        <a href={`/guru/mapel/${idMapel}/ujian/ujian-pekan-1`}>
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
