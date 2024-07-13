import React from "react";

function BoxDaftarSoalEssay({ soal }) {
  return (
    <div className="flex flex-col mx-10 mt-8 bg-biru px-[20px] py-[15px] gap-y-5">
      <div className="atasSoalEssay flex justify-between">
        <div className="pertanyaanSoalEssay flex flex-col w-2/3 gap-y-2">
          <span>Pertanyaan</span>
          <span className="bg-white border-[0.3px]  p-5 shadow-md">
            {soal.pertanyaan}
          </span>
        </div>
        <div className="detailSoalEssay flex flex-col mr-28 gap-y-6">
          <div className="jenisPertanyaanSoalEssay flex flex-col gap-y-2">
            <span>Jenis Pertanyaan</span>
            <div className="bg-white border-[0.3px] py-2 pl-3 pr-5 shadow-md flex gap-x-12">
              <span>Soal Essay</span>
            </div>
          </div>
          <div className="poinSoalEssay flex flex-col">
            <span>Poin Soal</span>
            <span className="bg-white border-[0.3px] py-2 pl-3 shadow-md">
              {soal.nilai}
            </span>
          </div>
        </div>
      </div>
      <div className="pilihanSoalEssay">
        <span>Jawaban</span>
        <div className="bg-white flex flex-col gap-y-2 border-[0.3px] my-4 py-3 px-5 shadow-md h-fit">
          <p>
            {soal.jawaban || ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BoxDaftarSoalEssay;
