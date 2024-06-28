import React, { useState } from "react";
import HeaderGuru from "../HeaderGuru";
import HomepageKelas from "./ListKelasAjar.jsx";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../Common/services/Auth";
import { useEffect } from "react";
import IsiCarouselJadwal from "./IsiCarouselJadwal";
import Sapa from "./Sapa";
import DaftarKelas from "../Daftar Kelas/DaftarKelas";

function HomepageUtama() {
  const navigate = useNavigate();
  const login = isAuthenticated("guru");

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  return (
    <div>
      <Header></Header>
      <HeaderGuru></HeaderGuru>

      <div className="flex flex-col justify-between mb-20">
        <div className="flex justify-end">
          <a
            className="tombolTambahForum  flex flex-row justify-between mr-5 mt-10 text-white bg-biru w-fit rounded-full py-3"
            // href={`/guru/mapel/${idMapel}/tambah-ujian`}
          >
            <span className="px-5">+</span>
            <span className="pr-6"> Tambah Batch</span>
          </a>
          <a
            className="tombolTambahForum  flex flex-row justify-between mr-10 mt-10 text-white bg-biru w-fit rounded-full py-3"
            // href={`/guru/mapel/${idMapel}/tambah-ujian`}
          >
            <span className="px-5">+</span>
            <span className="pr-6"> Tambah Akun</span>
          </a>
        </div>
        <div className="flex mt-16 ml-10 flex-col gap-y-8 mr-10">
          <Sapa />
        </div>
        {/* <div className="buttonKelas bg-tosca mt-16 mb-20 rounded-lg mr-10 h-fit">
          <a
            href="/guru/daftarkelas"
            className="flex text-xl bg-white mt-8 my-7 py-5 px-20 shadow-md justify-center item-center m-auto mx-5"
          >
            Lihat Daftar Kelas
          </a>
        </div> */}
        <DaftarKelas></DaftarKelas>
      </div>
    </div>
  );
}

export default HomepageUtama;
