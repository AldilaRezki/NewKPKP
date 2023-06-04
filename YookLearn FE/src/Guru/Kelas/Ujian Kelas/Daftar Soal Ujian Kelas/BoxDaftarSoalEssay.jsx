import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function BoxDaftarSoalEssay({ dataSoal }) {
  return (
    <div className="flex flex-col mx-10 mt-8 bg-tosca px-[20px] py-[15px] gap-y-5">
      <div className="atasSoalEssay flex justify-between mr-10">
        <div className="pertanyaanSoalEssay flex flex-col w-2/3 gap-y-2">
          <span>Pertanyaan</span>
          <span className="bg-white border-[0.3px]  p-5 shadow-md">
            {dataSoal.pertanyaan}
          </span>
        </div>
        <div className="detailSoalEssai flex flex-col gap-y-6 w-[250px]">
          <div className="jenisPertanyaanSoalEssai flex flex-col gap-y-2">
            <form>
              <label htmlFor="">Jenis Pertanyaan</label>
              <select
                name=""
                id=""
                className="bg-white outline-none appearance-none focus:border-indigo-600 flex py-2 pl-5 w-[250px] border-[0.3px] shadow-md mt-4"
              >
                <option value="">Essai</option>
              </select>
            </form>
          </div>
          <div className="poinSoalEssay flex flex-col">
            <label for="">Poin Soal</label>
            <input
              type=""
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
      {/* <div className="pilihanSoalEssay">
        <span>Jawaban</span>
        <div className="bg-white flex flex-col gap-y-2 border-[0.3px] my-4 py-3 px-5 shadow-md h-[275px]"></div>
      </div> */}
    </div>
  );
}

export default BoxDaftarSoalEssay;
