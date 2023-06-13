import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import DaftarPilihanSoalKotakCentang from "./DaftarPilihanSoalKotakCentang";

function BoxDaftarSoalKotakCentang({ dataSoal }) {
  return (
    <div className="flex flex-col mx-10 mt-8 bg-tosca px-[20px] py-[15px] gap-y-5">
      <div className="atasSoalKotakCentang flex justify-between mr-10">
        <div className="pertanyaanSoalKotakCentang flex flex-col w-2/3 gap-y-2">
          <span>Pertanyaan</span>
          <span className="bg-white border-[0.3px]  p-5 shadow-md">
            {dataSoal.pertanyaan}
          </span>
        </div>
        <div className="detailSoalKotakCentang flex flex-col gap-y-6 w-[250px]">
          <div className="jenisPertanyaanSoalKotakCentang flex flex-col gap-y-2">
            <form>
              <label htmlFor="">Jenis Pertanyaan</label>
              <select
                name=""
                id=""
                className="bg-white outline-none appearance-none focus:border-indigo-600 flex py-2 pl-5 w-[250px] border-[0.3px] shadow-md mt-4"
              >
                <option value="">Kotak Centang</option>
              </select>
            </form>
          </div>
          <div className="poinSoalKotakCentang flex flex-col">
            <label for="">Poin Soal</label>
            <input
              type="number"
              id=""
              name=""
              value={dataSoal.nilai}
              min={dataSoal.nilai}
              max={dataSoal.nilai}
              readOnly
              className="bg-white border-[0.3px] py-2 pl-3 shadow-md"
            ></input>
          </div>
        </div>
      </div>
      <div className="pilihanSoalKotakCentang">
        <span>Jawaban</span>
        <div className="flex flex-col gap-y-2">
          {dataSoal.opsi.map((opsi) => (
            <DaftarPilihanSoalKotakCentang
              key={opsi.id}
              labeltextKotakCentang={opsi.deskripsi}
              tipeOpsi={opsi.tipe_opsi}
            ></DaftarPilihanSoalKotakCentang>
          ))}
        </div>
        {/* <div className="flex flex-col gap-y-2">
          <DaftarPilihanSoalKotakCentang
            labeltextKotakCentang={"Lorem Ipsum"}
          ></DaftarPilihanSoalKotakCentang>
          <DaftarPilihanSoalKotakCentang
            labeltextKotakCentang={"Lorem Ipsum"}
          ></DaftarPilihanSoalKotakCentang>
          <DaftarPilihanSoalKotakCentang
            labeltextKotakCentang={"Lorem Ipsum"}
          ></DaftarPilihanSoalKotakCentang>
        </div> */}
      </div>
    </div>
  );
}

export default BoxDaftarSoalKotakCentang;
