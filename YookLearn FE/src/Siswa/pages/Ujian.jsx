import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { RiFilePaperLine } from "react-icons/ri";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Ujian() {
  return (
    <>
      <div>
        <Header />
        <Nav />
      </div>
      <div className="flex flex-col justify-between">
        <div className="mt-16 ml-10 w-1/2 flex">
          <BsFillJournalBookmarkFill className="text-2xl text-[#1A1F5A]" />
          <Link to="/siswa/kelas/mapel/detailkelas">
            {" "}
            <h1 className="text-xl ml-5 text-slate-400 font-bold">
              Bahasa Indonesia
            </h1>{" "}
          </Link>
          <h1 className="text-xl ml-5 text-slate-400 font-bold"> > </h1>
          <h1 className="text-xl ml-5 text-slate-400 font-bold">Ujian</h1>
        </div>
      </div>
      <Link to="/siswa/kelas/mapel/ujian/detailujian">
        {" "}
        <div className="flex flex-row items-center mt-[75px] ml-[103px]">
          <RiFilePaperLine className="rounded-full bg-[#EEF4FA] text-[#1A1F5A] text-5xl p-2 align-middle"></RiFilePaperLine>
          <h1 className="font-bold text-[#1A1F5A] ml-10"> Ulangan Harian 1 </h1>
          <h1 className="text-slate-400 font-bold ml-60">
            Batas Pengerjaan: 11 Maret 2023, 23.59
          </h1>
        </div>
        <div className="flex flex-row items-center mt-[75px] ml-[103px]">
          <RiFilePaperLine className="rounded-full bg-[#EEF4FA] text-[#1A1F5A] text-5xl p-2 align-middle"></RiFilePaperLine>
          <h1 className="font-bold text-[#1A1F5A] ml-10"> Ulangan Harian 2 </h1>
          <h1 className="text-slate-400 font-bold ml-60">
            Batas Pengerjaan: 11 Maret 2023, 23.59
          </h1>
        </div>
      </Link>
    </>
  );
}

export default Ujian;
