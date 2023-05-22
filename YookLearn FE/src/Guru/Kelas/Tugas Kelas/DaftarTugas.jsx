import React, { useEffect, useState } from "react";
import HeaderGuru from "../../HeaderGuru";
import HeaderKelas from "../HeaderKelas";
import TabelDaftarTugas from "./TabelDaftarTugas";
import Header from "../../Header";
import { useNavigate, useParams } from "react-router-dom";
import { isAuthenticated } from "../../../Common/services/Auth";

function DaftarTugas() {
  const navigate = useNavigate();
  const { idMapel } = useParams();
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
      <HeaderKelas idMapel={idMapel}></HeaderKelas>
      <div className="flex mt-10 mx-10 p-2 justify-between">
        <h1 className="my-auto text-xl font-medium text-biru">
          Daftar Tugas
        </h1>
        <a
          className="tombolTambahForum  flex flex-row justify-between text-white bg-biru w-fit rounded-full py-3"
          href="/guru/xipa1/tambah-tugas"
        >
          <span className="px-5">+</span>
          <span className="pr-6"> Tambah Tugas</span>
        </a>
      </div>

      <TabelDaftarTugas idMapel={idMapel}></TabelDaftarTugas>
    </div>
  );
}

export default DaftarTugas;
