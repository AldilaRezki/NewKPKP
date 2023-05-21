import React from "react";
import Header from "../../Header";
import HeaderKelas from "../HeaderKelas";
import { BiArrowBack, BiBook } from "react-icons/bi";
import { AiOutlineArrowDown } from "react-icons/ai";

function IsiMateri() {
  return (
    <div>
      <Header></Header>
      <HeaderKelas></HeaderKelas>

      <div className="bg-tosca mt-10 mx-10 p-2">
        <a href="/xipa1/daftar-materi">
          <BiArrowBack className="bg-white text-xl"></BiArrowBack>
        </a>
      </div>

      <div className="flex ml-10 mt-10 gap-x-5">
        <BiBook
          className="bg-tosca
        text-biru text-5xl rounded-full p-2"
        ></BiBook>
        <span className="text-biru text-xl my-auto font-medium">
          Materi Pekan 1
        </span>
      </div>

      <div className="flex ml-[110px] mt-10 gap-x-5 text-biru">
        <span className="bg-tosca p-3 rounded-lg">
          Bahan Ajar Pertemuan 1.pdf
        </span>
        <AiOutlineArrowDown className="bg-tosca p-2 my-auto text-[2.7rem] rounded-lg"></AiOutlineArrowDown>
      </div>
    </div>
  );
}

export default IsiMateri;
