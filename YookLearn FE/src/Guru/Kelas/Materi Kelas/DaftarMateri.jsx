import React from "react";
import HeaderGuru from "../../HeaderGuru";
import HeaderKelas from "../HeaderKelas";
import BoxDaftarMateri from "./BoxDaftarMateri";
import Header from "../../Header";

function DaftarMateri() {
  return (
    <div>
      <Header></Header>
      <HeaderGuru></HeaderGuru>
      <HeaderKelas></HeaderKelas>
      <div className="flex mt-10 mx-10 p-2 justify-between">
        <h1 className="my-auto text-xl font-medium text-biru">Daftar Materi</h1>
        <a
          className="tombolTambahForum  flex flex-row justify-between text-white bg-biru w-fit rounded-full py-3"
          href="/guru/xipa1/tambah-materi"
        >
          <span className="px-5">+</span>
          <span className="pr-6"> Tambah Materi</span>
        </a>
      </div>
      <div>
        <BoxDaftarMateri></BoxDaftarMateri>
        <BoxDaftarMateri></BoxDaftarMateri>
        <BoxDaftarMateri></BoxDaftarMateri>
      </div>
    </div>
  );
}

export default DaftarMateri;
