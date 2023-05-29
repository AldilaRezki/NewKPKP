import React, { useState } from 'react';
import HeaderGuru from "../HeaderGuru";
import HomepageKelas from "./ListKelasAjar.jsx";
import Header from "../Header";
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from "../../Common/services/Auth";
import { useEffect } from "react";
import IsiCarouselJadwal from "./IsiCarouselJadwal";
import Sapa from './Sapa';

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

      <div className="flex justify-between mb-20">
        <div className="flex mt-16 ml-10 flex-col gap-y-8 w-3/5">
          <Sapa />

          <div className="homepage_Kelas bg-tosca rounded-lg shadow-md">
            <h1 className="text-2xl ml-4 mt-5 mb-5">Kelas Hari Ini</h1>
            <div className="homepage_Kelas flex flex-wrap justify-between px-10 mb-7">
              <HomepageKelas></HomepageKelas>
              <HomepageKelas></HomepageKelas>
              <HomepageKelas></HomepageKelas>
            </div>
          </div>
        </div>
        <div className="buttonKelas bg-tosca mt-16 mb-20 rounded-lg mr-10 h-fit">
            <a
              href="/guru/daftarkelas"
              className="flex text-2xl bg-white mt-8 my-7 py-5 px-20 shadow-md justify-center item-center m-auto mx-5"
            >
              Lihat Daftar Kelas
            </a>
        </div>
      </div>
    </div>
  );
}

export default HomepageUtama;
