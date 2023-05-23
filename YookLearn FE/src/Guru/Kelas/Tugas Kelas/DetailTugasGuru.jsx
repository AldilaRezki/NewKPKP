import React, { useEffect, useState } from "react";
import HeaderGuru from "../../HeaderGuru";
import HeaderKelas from "../HeaderKelas";
import TabelDetailTugas from "./TabelDetailTugas";
import Header from "../../Header";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "./../../../Common/services/Auth";
import { fetchCurrentTugas } from "../../services/GuruAPI";

function DetailTugasGuru() {
  const { idMapel, idTugas } = useParams();
  const navigate = useNavigate();
  const login = isAuthenticated("guru");
  const [dataTugas, setTugas] = useState([]);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCurrentTugas(idMapel, idTugas);
      setTugas(data);
      // setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header></Header>
      <HeaderGuru></HeaderGuru>
      <HeaderKelas idMapel={idMapel}></HeaderKelas>
      <div className="flex mt-10 mx-10 justify-between">
        <h1 className="my-auto text-xl font-medium text-biru">
          {dataTugas.judul_tugas}
        </h1>
      </div>
      <div className="mx-10 mt-10 border-[0.3px] shadow-md">
        <span className="bg-tosca w-full flex py-2 px-4 text-biru font-medium">
          Detail Tugas
        </span>
        <p className="w-full flex py-4 px-4">{dataTugas.detail_tugas}</p>
      </div>
      <div className="mb-20">
        <TabelDetailTugas
          idMapel={idMapel}
          idTugas={idTugas}
          nilai={dataTugas.nilai}
        ></TabelDetailTugas>
      </div>
    </div>
  );
}

export default DetailTugasGuru;
