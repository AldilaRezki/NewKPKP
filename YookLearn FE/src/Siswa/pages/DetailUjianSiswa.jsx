import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import DetailUjianCard from "../components/DetailUjianCard";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function DetailUjianSiswa() {
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
      <div>
        <DetailUjianCard />
      </div>
    </>
  );
}

export default DetailUjianSiswa;
