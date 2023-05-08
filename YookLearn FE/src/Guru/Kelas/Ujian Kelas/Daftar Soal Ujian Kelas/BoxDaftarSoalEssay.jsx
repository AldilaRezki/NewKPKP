import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function BoxDaftarSoalEssay() {
  return (
    <div className="flex flex-col mx-10 mt-8 bg-tosca px-[20px] py-[15px] gap-y-5">
      <div className="atasSoalEssay flex justify-between">
        <div className="pertanyaanSoalEssay flex flex-col w-2/3 gap-y-2">
          <span>Pertanyaan</span>
          <span className="bg-white border-[0.3px]  p-5 shadow-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius
            euismod nulla ut fermentum. Nunc ut risus auctor, iaculis nisi
            euismod, faucibus sapien. Cras fringilla rutrum nisi id gravida. Ut
            nec felis nec lacus blandit dapibus in quis dui.
          </span>
        </div>
        <div className="detailSoalEssay flex flex-col mr-28 gap-y-6">
          <div className="jenisPertanyaanSoalEssay flex flex-col gap-y-2">
            <span>Jenis Pertanyaan</span>
            <div className="bg-white border-[0.3px] py-2 pl-3 pr-5 shadow-md flex gap-x-12">
              <span>Pilihan Ganda</span>
              <IoMdArrowDropdown className="mt-1"></IoMdArrowDropdown>
            </div>
          </div>
          <div className="poinSoalEssay flex flex-col">
            <span>Poin Soal</span>
            <span className="bg-white border-[0.3px] py-2 pl-3 shadow-md">
              5
            </span>
          </div>
        </div>
      </div>
      <div className="pilihanSoalEssay">
        <span>Jawaban</span>
        <div className="bg-white flex flex-col gap-y-2 border-[0.3px] my-4 py-3 px-5 shadow-md h-[275px]"></div>
      </div>
    </div>
  );
}

export default BoxDaftarSoalEssay;
