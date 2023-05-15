import React, { useState } from 'react';
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function simpan() {
  return (
    <div className=" bg-white max-h-screen">
      <Header />
      <main className="container items-center justify-center max-w-7xl mx-auto flex py-10 flex-col">
        <h1 className="pb-10 text-3xl text-[#1A1F5A]">
          Data Berhasil Disimpan!
        </h1>
        <button
          type="submit"
          className="bg-gradient-to-r from-[#1A1F5A] via-[#203da7] to-[#1c63cf] text-white p-4 rounded-lg"
        >
          <a href="/admin/listsiswa" className="flex">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className=" text-white text-5xl"
            />
            <h1 className=" text-xl p-2">Simpan</h1>
          </a>
        </button>
      </main>
    </div>
  );
}

export default simpan;
