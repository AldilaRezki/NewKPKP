import React from "react";
import Header from "../../Header";
import HeaderKelas from "../HeaderKelas";
import TabelDaftarTugas from "./TabelDaftarTugas";

function DaftarTugas() {
  return (
    <div>
      <Header></Header>
      <HeaderKelas></HeaderKelas>
      <div className="flex mt-10 mx-10 p-2 justify-between">
        <h1 className="my-auto text-xl font-medium text-biru">
          Daftar Anggota Kelas
        </h1>
        <a
          className="tombolTambahForum  flex flex-row justify-between text-white bg-biru w-fit rounded-full py-3"
          href="/xipa1/tambah-tugas"
        >
          <span className="px-5">+</span>
          <span className="pr-6"> Tambah Forum</span>
        </a>
      </div>

      <TabelDaftarTugas></TabelDaftarTugas>
    </div>
  );
}

export default DaftarTugas;
