import React from "react";
import HeaderGuru from "../../HeaderGuru";
import HeaderKelas from "../HeaderKelas";
import BoxDaftarForum from "./BoxDaftarForum";
import Header from "../../Header";

function DaftarForum() {
  return (
    <div>
      <Header></Header>
      <HeaderGuru></HeaderGuru>
      <HeaderKelas></HeaderKelas>
      <div className="flex justify-end">
        <a
          className="tombolTambahForum  flex flex-row justify-between mr-10 my-10 text-white bg-biru w-fit rounded-full py-3"
          href="/xipa1/forum/tambah-forum"
        >
          <span className="px-5">+</span>
          <span className="pr-6"> Tambah Forum</span>
        </a>
      </div>

      <div className="flex flex-wrap justify-around mx-10">
        <BoxDaftarForum></BoxDaftarForum>
        <BoxDaftarForum></BoxDaftarForum>
        <BoxDaftarForum></BoxDaftarForum>
      </div>
    </div>
  );
}

export default DaftarForum;
