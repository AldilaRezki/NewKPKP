import React, { useEffect, useState } from "react";
import HeaderGuru from "../../HeaderGuru";
import HeaderKelas from "../HeaderKelas";
import TabelDaftarTugas from "./TabelDaftarTugas";
import Header from "../../Header";
import { useNavigate, useParams } from "react-router-dom";
import { isAuthenticated } from "../../../Common/services/Auth";
import { fetchCurrentMapel, fetchTugas } from "../../services/GuruAPI";
import LoadingPage from "../../../Siswa/pages/LoadingPage";

function DaftarTugas() {
  const navigate = useNavigate();
  const { idMapel } = useParams();
  const login = isAuthenticated("guru");
  const [dataMapel, setMapel] = useState([]);
  const [dataTugas, setTugas] = useState([]);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const [mapelData, tugasData] = await Promise.all([
        fetchCurrentMapel(idMapel),
        fetchTugas(idMapel),
      ]);
      setMapel(mapelData);
      setTugas(tugasData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <Header></Header>
      <HeaderGuru></HeaderGuru>
      <HeaderKelas dataMapel={dataMapel}></HeaderKelas>
      <div className="flex mt-10 mx-10 p-2 justify-between">
        <h1 className="my-auto text-xl font-medium text-text">Daftar Tugas</h1>
        <a
          className="tombolTambahForum  flex flex-row justify-between text-white bg-biru w-fit rounded-full py-3"
          href={`/guru/mapel/${idMapel}/tambah-tugas`}
        >
          <span className="px-5">+</span>
          <span className="pr-6"> Tambah Tugas</span>
        </a>
      </div>

      <TabelDaftarTugas
        idMapel={idMapel}
        dataTugas={dataTugas}
        setTugas={setTugas}
      ></TabelDaftarTugas>
    </div>
  );
}

export default DaftarTugas;
