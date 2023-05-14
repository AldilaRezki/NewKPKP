import React from "react";
import Header from "../../Header";
import HeaderKelas from "../HeaderKelas";
import Form from "../../Form";
import { BiArrowBack } from "react-icons/bi";

function TambahUjian() {
  return (
    <div>
      <Header></Header>
      <HeaderKelas></HeaderKelas>
      <div className="bg-tosca mt-10 mx-10 p-2">
        <a href="/guru/xipa1/ujian">
          <BiArrowBack className="bg-white text-xl"></BiArrowBack>
        </a>
      </div>

      <h1 className="text-xl mt-8 ml-10 font-medium text-biru">Tambah Ujian</h1>

      <div>
        <h2 className="text-md mt-8 ml-10 font-normal text-biru">
          Judul Ujian
        </h2>
        <form>
          <input
            type="text"
            className="bg-white mx-10 mt-3 h-8 border-[0.3px] shadow-md w-[95%] py-1 px-2 focus:outline-none focus:ring-1"
          />
        </form>
      </div>

      <div>
        <h2 className="text-md mt-8 ml-10 font-normal text-biru">Isi Ujian</h2>
        <Form></Form>
      </div>

      <div>
        <h2 className="text-md mt-8 ml-10 font-normal text-biru">Lampiran</h2>
        <div className="flex">
          <button className="py-2 px-10 w-fit border-[0.3px] shadow-md ml-10 mt-4">
            Pilih File
          </button>
          <span className="ml-5 my-auto ">Tidak ada file yang dipilih</span>
        </div>
      </div>

      <div className="mt-20 flex justify-end mr-10 gap-x-10 mb-20">
        <a href="/guru/xipa1/ujian" className="text-biru py-2">
          Batal
        </a>
        <a href="" className="text-white bg-biru py-2 px-5 rounded-md">
          Kirim
        </a>
      </div>
    </div>
  );
}

export default TambahUjian;
