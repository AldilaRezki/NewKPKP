import React from "react";
import HeaderGuru from "../../HeaderGuru";
import HeaderKelas from "../HeaderKelas";
import { BiArrowBack } from "react-icons/bi";
import Header from "../../Header";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function TambahForum() {
  return (
    <div>
      <Header></Header>
      <HeaderGuru></HeaderGuru>
      <HeaderKelas></HeaderKelas>
      <div className="bg-tosca mt-10 mx-10 p-2">
        <a href="/guru/xipa1/forum">
          <BiArrowBack className="bg-white text-xl"></BiArrowBack>
        </a>
      </div>

      <h1 className="text-xl mt-8 ml-10 font-medium text-text">Tambah Forum</h1>

      <div>
        <h2 className="text-md mt-8 ml-10 font-normal text-text">
          Judul Forum
        </h2>
        <form>
          <input
            type="text"
            className="bg-white mx-10 mt-3 h-8 border-[0.3px] shadow-md w-[95%] py-1 px-2 focus:outline-none focus:ring-1"
          />
        </form>
      </div>

      <div>
        <h2 className="text-md mt-8 ml-10 font-normal text-text">Isi Forum</h2>
        <ReactQuill className="mt-8 ml-10 h-30" value="" onChange="" />
      </div>

      <div className="mt-20 flex justify-end mr-10 gap-x-10 mb-20">
        <a href="/guru/xipa1/forum" className="text-text py-2">
          Batal
        </a>
        <a href="" className="text-white bg-biru py-2 px-5 rounded-md">
          Kirim
        </a>
      </div>
    </div>
  );
}

export default TambahForum;
