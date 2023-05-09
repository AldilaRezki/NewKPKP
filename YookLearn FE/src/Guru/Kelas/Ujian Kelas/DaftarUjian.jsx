import React from "react";
import Header from "../../Header";
import HeaderKelas from "../HeaderKelas";
import BoxDaftarUjian from "./BoxDaftarUjian";

function DaftarUjian() {
  return (
    <div>
      <Header></Header>
      <HeaderKelas></HeaderKelas>
      <div className="flex justify-end">
        <a className="tombolTambahForum  flex flex-row justify-between mr-10 my-10 text-white bg-biru w-fit rounded-full py-3"
        href='/guru/xipa1/ujian/tambah-ujian'>
          <span className="px-5">+</span>
          <span className="pr-6"> Tambah Ujian</span>
        </a>
      </div>

      <BoxDaftarUjian></BoxDaftarUjian>
    </div>
  );
}

export default DaftarUjian;
