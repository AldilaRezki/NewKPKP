import React, { useState } from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import NavGuru from "../components/NavGuru";
import { useParams } from "react-router-dom";

function BerhasilKelas() {
  const { idKelas, nav } = useParams();

  let url = "/admin/homepage";

  if (nav === "siswa") {
    url = `/admin/ListPaketKelas/${idKelas}/siswa`;
  } else if (nav === "mapel") {
    url = `/admin/ListPaketKelas/${idKelas}/matapelajaran`;
  } else {
    url = "/admin/homepage";
  }

  return (
    <div className=" bg-white max-h-screen">
      <Header />
      <NavGuru />
      <main className="container items-center justify-center max-w-7xl mx-auto flex py-10 flex-col">
        <h1 className="pb-10 text-3xl text-[#1A1F5A]">
          Data Berhasil Disimpan!
        </h1>
        <button
          type="submit"
          className="bg-gradient-to-r from-[#1A1F5A] via-[#203da7] to-[#1c63cf] text-white p-4 rounded-lg"
        >
          <a href={url} className="flex">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className=" text-white text-5xl"
            />
            <h1 className=" text-xl p-2">Oke</h1>
          </a>
        </button>
      </main>
    </div>
  );
}

export default BerhasilKelas;
