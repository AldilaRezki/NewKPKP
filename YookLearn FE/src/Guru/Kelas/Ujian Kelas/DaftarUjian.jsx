import React, { useEffect, useState } from "react";
import HeaderGuru from "../../HeaderGuru";
import HeaderKelas from "../HeaderKelas";
import BoxDaftarUjian from "./BoxDaftarUjian";
import Header from "../../Header";
import { useParams } from "react-router-dom";
import LoadingPage from "../../../Siswa/pages/LoadingPage";
import { fetchCurrentMapel, fetchUjian } from "../../services/GuruAPI";

function DaftarUjian() {
  const { idMapel } = useParams();
  const [dataMapel, setMapel] = useState([]);
  const [dataUjian, setUjian] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const [mapelData, ujianData] = await Promise.all([
        fetchCurrentMapel(idMapel),
        fetchUjian(idMapel),
      ]);
      setMapel(mapelData);
      setUjian(ujianData);
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
      <div className="flex justify-end">
        <a
          className="tombolTambahForum  flex flex-row justify-between mr-10 my-10 text-white bg-biru w-fit rounded-full py-3"
          href={`/guru/mapel/${idMapel}/tambah-ujian`}
        >
          <span className="px-5">+</span>
          <span className="pr-6"> Tambah Ujian</span>
        </a>
      </div>

      <BoxDaftarUjian idMapel={idMapel} dataUjian={dataUjian}></BoxDaftarUjian>
    </div>
  );
}

export default DaftarUjian;
