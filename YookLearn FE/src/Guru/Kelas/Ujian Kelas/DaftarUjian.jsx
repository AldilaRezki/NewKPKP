import React from "react";
import HeaderGuru from "../../HeaderGuru";
import HeaderKelas from "../HeaderKelas";
import BoxDaftarUjian from "./BoxDaftarUjian";
import Header from "../../Header";

function DaftarUjian() {
  return (
    <div>
      <Header></Header>
      <HeaderGuru></HeaderGuru>
      <HeaderKelas></HeaderKelas>
      <div className="flex justify-end">
        <a
          className="tombolTambahForum  flex flex-row justify-between mr-10 my-10 text-white bg-biru w-fit rounded-full py-3"
          href="/guru/xipa1/ujian/tambah-ujian"
        >
          <span className="px-5">+</span>
          <span className="pr-6"> Tambah Ujian</span>
        </a>
      </div>

      <BoxDaftarUjian></BoxDaftarUjian>
    </div>
  );
}

export default DaftarUjian;
