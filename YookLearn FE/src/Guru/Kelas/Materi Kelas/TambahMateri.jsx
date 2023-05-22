import React, { useState, useRef } from "react";
import HeaderGuru from "../../HeaderGuru";
import HeaderKelas from "../HeaderKelas";
import Form from "../../Form";
import { BiArrowBack } from "react-icons/bi";
import Header from "../../Header";
import ButtonTambahMateri from "./ButtonTambahMateri";

function TambahMateri({ onFileUpload }) {
  const [judul, setJudul] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setGambar(file);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div>
      <Header></Header>
      <HeaderGuru></HeaderGuru>
      <HeaderKelas></HeaderKelas>
      <div className="bg-tosca mt-10 mx-10 p-2">
        <a href="/guru/xipa1/daftar-materi">
          <BiArrowBack className="bg-white text-xl"></BiArrowBack>
        </a>
      </div>

      <h1 className="text-xl mt-8 ml-10 font-medium text-biru">
        Tambah Materi
      </h1>

      <div>
        <div className="form-input-row">
          <label
            htmlFor="judul"
            className="text-md mt-8 ml-10 font-normal text-biru"
          >
            Judul
          </label>
          <input
            className="bg-white mx-10 mt-3 h-8 border-[0.3px] shadow-md w-[95%] py-1 px-2 focus:outline-none focus:ring-1"
            id="judul"
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
        </div>
        {/* <h2 className="text-md mt-8 ml-10 font-normal text-biru">
          Judul Materi
        </h2>
        <form>
          <input
            type="text"
            className="bg-white mx-10 mt-3 h-8 border-[0.3px] shadow-md w-[95%] py-1 px-2 focus:outline-none focus:ring-1"
          />
        </form> */}
      </div>

      <div className="form-input-row">
        <label
          htmlFor="isi"
          className="text-md mt-8 ml-10 font-normal text-biru"
        >
          Isi
        </label>
        <Form></Form>
      </div>

      {/* <div>
        <h2 className="text-md mt-8 ml-10 font-normal text-biru">Isi Materi</h2>
        <Form></Form>
      </div> */}

      <div className="form-input-row mt-5">
        <label
          className="text-md mt-10 ml-10 font-normal text-biru"
          htmlFor="fileInput"
        >
          Lampiran
        </label>
        <input id="fileInput" type="file" onChange={handleFileChange} />
      </div>

      {/* <div>
        <h2 className="text-md mt-8 ml-10 font-normal text-biru">Lampiran</h2>
        <div className="flex">
          <div>
            <ButtonTambahMateri onFileUpload={handleFileUpload} />
          </div>
          <span className="ml-5 my-auto ">Tidak ada file yang dipilih</span>
        </div>
      </div> */}

      <div className="mt-20 flex justify-end mr-10 gap-x-10 mb-20">
        <a href="/guru/xipa1/daftar-materi" className="text-biru py-2">
          Batal
        </a>
        <a href="" className="text-white bg-biru py-2 px-5 rounded-md">
          Kirim
        </a>
      </div>
    </div>
  );
}

export default TambahMateri;
