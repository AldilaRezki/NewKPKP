import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import DaftarPilihanSoalPilihanGanda from "./DaftarPilihanSoalPilihanGanda";

function BoxDaftarSoalPilihanGanda() {
  return (
    <div className="flex flex-col mx-10 mt-8 bg-tosca px-[20px] py-[15px] gap-y-5">
      <div className="atasSoalPilihanGanda flex justify-between mr-10">
        <div className="pertanyaanSoalPilihanGanda flex flex-col w-2/3 gap-y-2">
          <span>Pertanyaan</span>
          <span className="bg-white border-[0.3px]  p-5 shadow-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius
            euismod nulla ut fermentum. Nunc ut risus auctor, iaculis nisi
            euismod, faucibus sapien. Cras fringilla rutrum nisi id gravida. Ut
            nec felis nec lacus blandit dapibus in quis dui.
          </span>
        </div>
        <div className="detailSoalPilihanGanda flex flex-col gap-y-6 w-[250px]">
          <div className="jenisPertanyaanSoalPilihanGanda flex flex-col gap-y-2">
                <form>
                  <label htmlFor="">Jenis Pertanyaan</label>
                  <select
                    name=""
                    id=""
                    className="bg-white outline-none appearance-none focus:border-indigo-600 flex py-2 pl-5 w-[250px] border-[0.3px] shadow-md mt-4"
                  >
                    <option value="">Pilihan Ganda</option>
                    <option value="">Kotak Centang</option>
                    <option value="">Essai</option>
                  </select>
                </form>
          </div>
          <div className="poinSoalPilihanGanda flex flex-col">
            {/* <span className="bg-white border-[0.3px] py-2 pl-3 shadow-md">
              5
            </span> */}
              <label for="">Poin Soal</label>
              <input type="" id="" name="" min="0" max="100" className="bg-white border-[0.3px] py-2 pl-3 shadow-md"></input>
          </div>
        </div>
      </div>
      <div className="pilihanSoalPilihanGanda">
        <span>Jawaban</span>
        <div className="flex flex-col gap-y-2">
          <DaftarPilihanSoalPilihanGanda labelTextPilihanGanda={"Lorem Ipsum"}></DaftarPilihanSoalPilihanGanda>
          <DaftarPilihanSoalPilihanGanda labelTextPilihanGanda={"Lorem Ipsum"}></DaftarPilihanSoalPilihanGanda>
          <DaftarPilihanSoalPilihanGanda labelTextPilihanGanda={"Lorem Ipsum"}></DaftarPilihanSoalPilihanGanda>
        </div>
      </div>
    </div>
  );
}

export default BoxDaftarSoalPilihanGanda;
