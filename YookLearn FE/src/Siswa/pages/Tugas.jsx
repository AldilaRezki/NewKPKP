import React, { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { IoMdPaper } from "react-icons/io";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Tugas = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <Header />
        <Nav />
      </div>
      <div className="flex flex-col justify-between">
        <div className="mt-16 ml-10 w-1/2 flex">
          <BsFillJournalBookmarkFill className="text-2xl text-[#1A1F5A]" />
          <Link to="/detailkelas">
            {" "}
            <h1 className="text-xl ml-5 text-slate-400 font-bold">
              Bahasa Indonesia
            </h1>{" "}
          </Link>
          <h1 className="text-xl ml-5 text-slate-400 font-bold"> > </h1>
          <h1 className="text-xl ml-5 text-slate-400 font-bold">Tugas</h1>
        </div>
      </div>
      <div>
        <button onClick={toggleDropdown}>
          <div className="flex flex-row items-center mt-[75px] ml-[103px]">
            <IoMdPaper className="rounded-full bg-[#EEF4FA] text-[#1A1F5A] text-5xl p-2 align-middle"></IoMdPaper>
            <h1 className="font-bold text-[#1A1F5A] ml-10"> Tugas 1 </h1>
            <h1 className="text-slate-400 font-bold ml-60">Deadline</h1>
          </div>
        </button>
        {isOpen && (
          <div className=" bg-[#EEF4FA] text-[#1A1F5A] p-2 align-middle mx-[103px]">
            <p>Detail of tugas goes here</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Tugas;
