import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import DetailTgsCard from "../components/DetailTgsCard";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function DetailTugas() {
  return (
    <>
      <div>
        <Header />
        <Nav />
      </div>

      <div className="mt-16 ml-10 w-1/2 flex">
        <BsFillJournalBookmarkFill className="text-2xl text-[#1A1F5A]" />
        <Link to="/siswa/kelas/mapel/detailkelas">
          {" "}
          <h1 className="text-xl ml-5 text-slate-400 font-bold">
            Bahasa Indonesia
          </h1>{" "}
        </Link>
        <h1 className="text-xl ml-5 text-slate-400 font-bold">
            <FontAwesomeIcon icon={faAngleRight} className="text-slate-400" />
          </h1>
        <h1 className="text-xl ml-5 text-slate-400 font-bold">Tugas</h1>
      </div>
      <div>
        <DetailTgsCard />
      </div>
    </>
  );
}

export default DetailTugas;
