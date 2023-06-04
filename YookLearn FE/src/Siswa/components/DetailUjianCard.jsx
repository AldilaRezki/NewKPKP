import React from "react";
import { RiFilePaperLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function DetailUjianCard({ Ujian }) {
  return (
    <>
      <div className="flex flex-row items-center mt-[75px] ml-[103px]">
        <RiFilePaperLine className="rounded-full bg-[#EEF4FA] text-[#1A1F5A] text-5xl p-2 align-middle"></RiFilePaperLine>
        <h1 className="font-bold text-[#1A1F5A] ml-10">
          {" "}
          {Ujian.judul_ujian}{" "}
        </h1>
      </div>
      <div className="flex flex-row ml-[116px] mt-5">
        <h1 className="font-bold text-[#1A1F5A] "> Status Test:</h1>
        <h1 className="ml-[307px] text-[#1A1F5A] "> Tersedia</h1>
      </div>
      <div className="flex flex-row ml-[116px] mt-5">
        <h1 className="font-bold text-[#1A1F5A] "> Jumlah Test:</h1>
        <h1 className="ml-[300px] text-[#1A1F5A] "> {Ujian.jumlah_soal} </h1>
      </div>
      <div className="flex flex-row ml-[116px] mt-5">
        <h1 className="font-bold text-[#1A1F5A] "> Waktu Pengerjaan:</h1>
        <h1 className="ml-[250px] text-[#1A1F5A] "> {Ujian.waktu} </h1>
      </div>
      <div className="flex flex-row ml-[116px] mt-5">
        <h1 className="font-bold text-[#1A1F5A] "> Tanggal Pengerjaan Test:</h1>
        <h1 className="ml-[206px] text-[#1A1F5A] "> 20 Maret 2023 </h1>
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/siswa/exam">
          {" "}
          <button className="bg-[#1A1F5A] text-white py-5 px-10 rounded-md hover:bg-[#303371]">
            Mulai
          </button>
        </Link>
      </div>
    </>
  );
}

export default DetailUjianCard;
