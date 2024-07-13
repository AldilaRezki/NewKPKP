import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import DaftarPilihanSoalPilihanGanda from "./DaftarPilihanSoalPilihanGanda";

function BoxDaftarSoalPilihanGanda() {
  return (
    <div className="flex flex-col mx-10 mt-8 bg-biru px-[20px] py-[15px] gap-y-5">
      <div className="atasSoalPilihanGanda flex justify-between">
        <div className="pertanyaanSoalPilihanGanda flex flex-col w-2/3 gap-y-2">
          <span>Pertanyaan</span>
          <span className="bg-white border-[0.3px]  p-5 shadow-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius
            euismod nulla ut fermentum. Nunc ut risus auctor, iaculis nisi
            euismod, faucibus sapien. Cras fringilla rutrum nisi id gravida. Ut
            nec felis nec lacus blandit dapibus in quis dui.
          </span>
        </div>
        <div className="detailSoalPilihanGanda flex flex-col mr-28 gap-y-6">
          <div className="jenisPertanyaanSoalPilihanGanda flex flex-col gap-y-2">
            <span>Jenis Pertanyaan</span>
            <div className="bg-white border-[0.3px] py-2 pl-3 pr-5 shadow-md flex gap-x-12">
              <span>Pilihan Ganda</span>
              <IoMdArrowDropdown className="mt-1"></IoMdArrowDropdown>
            </div>
          </div>
          <div className="poinSoalPilihanGanda flex flex-col">
            <span>Poin Soal</span>
            <span className="bg-white border-[0.3px] py-2 pl-3 shadow-md">
              5
            </span>
          </div>
        </div>
      </div>
      <div className="pilihanSoalPilihanGanda">
        <span>Jawaban</span>
        <div className="flex flex-col gap-y-2">
          <DaftarPilihanSoalPilihanGanda></DaftarPilihanSoalPilihanGanda>
          <DaftarPilihanSoalPilihanGanda></DaftarPilihanSoalPilihanGanda>
          <DaftarPilihanSoalPilihanGanda></DaftarPilihanSoalPilihanGanda>
          <DaftarPilihanSoalPilihanGanda></DaftarPilihanSoalPilihanGanda>
          <DaftarPilihanSoalPilihanGanda></DaftarPilihanSoalPilihanGanda>
        </div>
      </div>
    </div>
  );
}

export default BoxDaftarSoalPilihanGanda;
