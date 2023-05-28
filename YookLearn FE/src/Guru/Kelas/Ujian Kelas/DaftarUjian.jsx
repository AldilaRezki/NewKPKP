import React from "react";
import HeaderGuru from "../../HeaderGuru";
import HeaderKelas from "../HeaderKelas";
import BoxDaftarUjian from "./BoxDaftarUjian";
import Header from "../../Header";
import { useParams } from "react-router-dom";

function DaftarUjian() {
  const { idMapel } = useParams();


  return (
    <div>
      <Header></Header>
      <HeaderGuru></HeaderGuru>
      <HeaderKelas idMapel={idMapel}></HeaderKelas>
      <div className="flex justify-end">
        <a
          className="tombolTambahForum  flex flex-row justify-between mr-10 my-10 text-white bg-biru w-fit rounded-full py-3"
          href={`/guru/mapel/${idMapel}/tambah-ujian`}
        >
          <span className="px-5">+</span>
          <span className="pr-6"> Tambah Ujian</span>
        </a>
      </div>

      <BoxDaftarUjian idMapel={idMapel}></BoxDaftarUjian>
    </div>
  );
}

export default DaftarUjian;
