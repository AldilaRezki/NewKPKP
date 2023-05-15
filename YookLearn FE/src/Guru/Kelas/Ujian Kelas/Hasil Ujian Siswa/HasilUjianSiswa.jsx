import React from "react";
import HeaderGuru from "../../../HeaderGuru";
import HeaderKelas from "../../HeaderKelas";
import { BiArrowBack } from "react-icons/bi";
import BoxDaftarSoalPilihanGanda from "./BoxDaftarSoalPilihanGanda";
import BoxDaftarSoalKotakCentang from "./BoxDaftarSoalKotakCentang";
import BoxDaftarSoalEssay from "./BoxDaftarSoalEssay";
import Header from "../../../Header";

function HasilUjianSiswa() {
  return (
    <div className="mb-20">
      <Header></Header>
      <HeaderGuru></HeaderGuru>
      <HeaderKelas></HeaderKelas>
      <div className="bg-tosca mt-10 mx-10 p-2">
        <a href="/guru/xipa1/ujian/ujian-pekan-1">
          <BiArrowBack className="bg-white text-xl"></BiArrowBack>
        </a>
      </div>
      <div className="flex justify-between mt-8 ml-10">
        <h1 className="text-xl font-medium text-biru">Daftar Soal</h1>
        <div className="mr-16 gap-y-5 flex flex-col">
          <span>Poin yang diperoleh</span>
          <span className="text-md py-2 px-3 border-[0,3px] shadow-md text-biru">90/100</span>
        </div>
      </div>
      

      <div className="pilihanGanda">
        <span className="flex mt-6 ml-10 text-lg font-semibold text-biru">
          1
        </span>

        <BoxDaftarSoalPilihanGanda></BoxDaftarSoalPilihanGanda>
      </div>

      <div className="kotakCentang">
        <span className="flex mt-10 ml-10 text-lg font-semibold text-biru">
          2
        </span>

        <BoxDaftarSoalKotakCentang></BoxDaftarSoalKotakCentang>
      </div>

      <div className="essay">
        <span className="flex mt-10 ml-10 text-lg font-semibold text-biru">
          3
        </span>

        <BoxDaftarSoalEssay></BoxDaftarSoalEssay>
      </div>
    </div>
  );
}

export default HasilUjianSiswa;
