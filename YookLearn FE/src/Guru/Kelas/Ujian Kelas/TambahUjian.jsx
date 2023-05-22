import React, { useRef } from "react";
import HeaderGuru from "../../HeaderGuru";
import HeaderKelas from "../HeaderKelas";
import Form from "../../Form";
import { BiArrowBack } from "react-icons/bi";
import Header from "../../Header";
import ButtonTambahMateri from "../Materi Kelas/ButtonTambahMateri";

function TambahUjian({ onFileUpload }) {
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    const file = fileInputRef.current.files[0];
    onFileUpload(file);
  };
  return (
    <div>
      <Header></Header>
      <HeaderGuru></HeaderGuru>
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
        <div>
            <ButtonTambahMateri onFileUpload={handleFileUpload} />
          </div>
          <span className="ml-5 my-auto ">Tidak ada file yang dipilih</span>
        </div>
      </div>

      <div className="mt-20 flex justify-end mr-10 gap-x-10 mb-20">
        <a href="/guru/xipa1/ujian" className="text-biru py-2">
          Batal
        </a>
        <a
          href="/guru/xipa1/ujian/tambah-soal-ujian"
          className="text-white bg-biru py-2 px-5 rounded-md"
        >
          Tambah Soal
        </a>
      </div>
    </div>
  );
}

export default TambahUjian;
