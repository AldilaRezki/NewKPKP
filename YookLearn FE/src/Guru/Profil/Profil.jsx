import React from "react";
import Header from "../Header";
import { BiArrowBack } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";

function Profil() {
  return (
    <div>
      <Header></Header>
      <div className="bg-tosca mt-10 mx-10 p-2">
        <a href="/">
          <BiArrowBack className="bg-white text-xl"></BiArrowBack>
        </a>
      </div>
      <div className="flex flex-col gap-y-5 w-full mt-20 justify-center">
        <div className="fotoProfil flex text-[60px] mx-auto border-[0.3px] p-16 shadow-md">
          <BsPersonFill></BsPersonFill>
        </div>
      </div>
      <div className="isiProfil flex flex-col gap-y-8 w-full mt-16 justify-center items-center content-center">
        <div className="namaProfil w-[420px] flex flex-col gap-y-2">
          <label>Nama</label>
          <p className="border-[0.1px] shadow-md p-3">
            Lorem ipsum dolor sit amet, S.Pd
          </p>
        </div>
        <div className="nipProfil  w-[420px]  flex flex-col gap-y-2">
          <label>NIP</label>
          <p className="border-[0.1px] shadow-md p-3">1234567890</p>
        </div>
        <div className="pangkatGolongan flex">
          <div className="pangkatProfil w-[200px] mr-[10px] flex flex-col gap-y-2">
            <label>Pangkat</label>
            <p className="border-[0.1px] shadow-md p-3">Diploma</p>
          </div>
          <div className="GolonganProfil w-[200px] ml-[10px] flex flex-col gap-y-2">
            <label>Golongan</label>
            <p className="border-[0.1px] shadow-md p-3">VI</p>
          </div>
        </div>
        <div className="jabatanProfil w-[420px] flex flex-col gap-y-2">
          <label>Jabatan</label>
          <p className="border-[0.1px] shadow-md p-3">Guru Bahasa Indonesia</p>
        </div>
        <a
          href="/profil/ubah-password"
          className="tombolUbahPassword  flex flex-col gap-y-2 bg-biru text-white shadow-xl border-[0.1px] py-3 px-8 rounded-full mb-10"
        >
          Ubah Password
        </a>
      </div>
    </div>
  );
}

export default Profil;
