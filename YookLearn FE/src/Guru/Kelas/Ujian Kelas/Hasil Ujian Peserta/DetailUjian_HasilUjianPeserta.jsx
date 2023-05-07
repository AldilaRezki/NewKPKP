import React from "react";

function DetailUjian_HasilUjianPeserta() {
  return (
    <div className="flex flex-col mt-10 ml-10 border-[0.3px] my-10shadow-md mr-10">
      <div className="flex bg-tosca pl-3 py-3">
        <h1>Ujian Tengah Semester Bahasa Indonesia</h1>
      </div>
      <div className="flex pl-3 pt-5 pb-8 gap-x-60">
        <div className="flex flex-col gap-y-3">
          <div className="flex gap-x-10">
            <span className="mt-2">Mata Pelajaran:</span>
            <span className="bg-white border-[0.3px] py-1.5 pl-4 w-[331px] shadow-md">
              Bahasa Indonesia
            </span>
          </div>
          <div className="flex gap-x-[3.7rem]">
            <span className="mt-2">Jumlah Soal:</span>
            <span className="bg-white border-[0.3px] py-1.5 pl-4 w-[331px] shadow-md">
              10 Nomor
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-y-3">
          <div className="flex gap-x-[3.1rem]">
            <span className="mt-2">Waktu Ujian:</span>
            <span className="bg-white border-[0.3px] py-1.5 pl-4 w-[331px] shadow-md">
              60 Menit
            </span>
          </div>
          <div className="flex gap-x-10">
            <span className="mt-2">Tanggal Ujian:</span>
            <span className="bg-white border-[0.3px] py-1.5 pl-4 w-[331px] shadow-md">
              10 Maret 2023
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailUjian_HasilUjianPeserta;
