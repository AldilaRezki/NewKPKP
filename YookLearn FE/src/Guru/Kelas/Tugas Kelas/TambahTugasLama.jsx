import React, { useState, useRef } from "react";
import HeaderGuru from "../../HeaderGuru";
import HeaderKelas from "../HeaderKelas";
import { BiArrowBack } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import Header from "../../Header";
import ButtonTambahMateri from "../Materi Kelas/ButtonTambahMateri";
import { useParams } from "react-router-dom";

function TambahTugas({ onFileUpload }) {
  const { idMapel } = useParams();
  const fileInputRef = useRef(null);

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
      <HeaderKelas idMapel={idMapel}></HeaderKelas>
      <div className="bg-tosca mt-10 mx-10 p-2">
        <a href={`/guru/mapel/${idMapel}/daftar-tugas`}>
          <BiArrowBack className="bg-white text-xl"></BiArrowBack>
        </a>
      </div>

      <h1 className="text-xl mt-8 ml-10 font-medium text-biru">Tambah Tugas</h1>

      <div>
        <h2 className="text-md mt-8 ml-10 font-normal text-biru">
          Judul Tugas
        </h2>
        <form>
          <input
            type="text"
            className="bg-white mx-10 mt-3 h-8 border-[0.3px] shadow-md w-[95%] py-1 px-2 focus:outline-none focus:ring-1"
          />
          <div className="form-input-row mt-5">
            <label
              className="text-md mt-10 ml-10 font-normal text-biru"
              htmlFor="fileInput"
            >
              Lampiran
            </label>
            <input id="fileInput" type="file" onChange={handleFileChange} />
          </div>
        </form>
      </div>

      {/* <div>
        <h2 className="text-md mt-8 ml-10 font-normal text-biru">Isi Tugas</h2>
        <Form></Form>
      </div> */}

      {/* <div>
        <h2 className="text-md mt-8 ml-10 font-normal text-biru">Lampiran</h2>
        <div className="flex">
          <div>
            <ButtonTambahMateri onFileUpload={handleFileUpload} />
          </div>
          <span className="ml-5 my-auto ">Tidak ada file yang dipilih</span>
        </div>
      </div> */}

      <div className="flex ml-10 gap-x-9">
        <div>
          <h2 className="text-md mt-8 font-normal text-biru">Tenggat</h2>
          <div className="flex gap-x-8">
            <button className="flex justify-between py-2 pl-5 w-[130px] border-[0.3px] shadow-md mt-4">
              Tanggal
              <AiFillCaretDown className="my-auto mr-5"></AiFillCaretDown>
            </button>
            <button className="flex justify-between py-2 pl-5 w-[130px] border-[0.3px] shadow-md mt-4">
              Bulan
              <AiFillCaretDown className="my-auto mr-5"></AiFillCaretDown>
            </button>
            <button className="flex justify-between py-2 pl-5 w-[130px] border-[0.3px] shadow-md mt-4">
              Tahun
              <AiFillCaretDown className="my-auto mr-5"></AiFillCaretDown>
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-md mt-8 font-normal text-biru">(Opsional)</h2>
          <div className="flex gap-x-8">
            <button className="flex justify-between py-2 pl-5 w-[130px] border-[0.3px] shadow-md mt-4">
              Jam
              <AiFillCaretDown className="my-auto mr-5"></AiFillCaretDown>
            </button>
            <button className="flex justify-between py-2 pl-5 w-[130px] border-[0.3px] shadow-md mt-4">
              Bulan
              <AiFillCaretDown className="my-auto mr-5"></AiFillCaretDown>
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-md mt-8 ml-10 font-normal text-biru">Lampiran</h2>
          <div className="flex">
            <form className="py-2 w-fit ml-10 mt-4">
              <input type="file" />
            </form>
          </div>
        </div>

        <div className="flex ml-10 gap-x-9">
          <div>
            <h2 className="text-md mt-8 font-normal text-biru">Tenggat</h2>
            <div className="flex gap-x-8">
              <form action="">
                <input
                  type="date"
                  name=""
                  id=""
                  className="mt-4 py-2 px-5 border-[0.3px] shadow-md"
                />
              </form>
            </div>
          </div>

          <div>
            <h2 className="text-md mt-8 font-normal text-biru">(Opsional)</h2>
            <div className="flex gap-x-8">
              <form action="">
                <input
                  type="time"
                  name=""
                  id=""
                  className="mt-4 py-2 px-5 border-[0.3px] shadow-md"
                />
              </form>
            </div>
          </div>

          <div>
            <h2 className="text-md mt-8 font-normal text-biru">Poin</h2>
            <div className="flex">
              <button className="flex justify-between py-2 pl-5 w-[110px] border-[0.3px] shadow-md mt-4">
                100
                <AiFillCaretDown className="my-auto mr-5"></AiFillCaretDown>
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-md mt-8 font-normal text-biru">
              Setelah melewati tenggat waktu
            </h2>
            <div className="flex">
              {/* <button className='flex justify-between py-2 pl-5 w-[360px] border-[0.3px] shadow-md mt-4'>
                        Tidak dapat mengumpulkan tugas
                        <AiFillCaretDown className='my-auto mr-5'></AiFillCaretDown>
                    </button> */}
              <select className="bg-white outline-none appearance-none focus:border-indigo-600 flex py-2 pl-5 w-[360px] border-[0.3px] shadow-md mt-4">
                <option>Tidak dapat mengumpulkan tugas</option>
                <option>Dapat mengumpulkan tugas</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-md mt-8 font-normal text-biru">
            Setelah melewati tenggat waktu
          </h2>
          <div className="flex">
            <button className="flex justify-between py-2 pl-5 w-[360px] border-[0.3px] shadow-md mt-4">
              Tidak dapat mengumpulkan tugas
              <AiFillCaretDown className="my-auto mr-5"></AiFillCaretDown>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-end mr-10 gap-x-10 mb-20">
        <a href="/guru/xipa1/daftar-tugas" className="text-biru py-2">
          Batal
        </a>
        <a href="" className="text-white bg-biru py-2 px-5 rounded-md">
          Kirim
        </a>
      </div>
    </div>
  );
}

export default TambahTugas;
