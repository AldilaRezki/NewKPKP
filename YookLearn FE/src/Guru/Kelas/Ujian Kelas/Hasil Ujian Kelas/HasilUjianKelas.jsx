import React, { useEffect, useState } from "react";
import HeaderGuru from "../../../HeaderGuru";
import HeaderKelas from "../../HeaderKelas";
import { BiArrowBack } from "react-icons/bi";
import TabelHasilUjianKelas from "./TabelHasilUjianKelas";
import Header from "../../../Header";
import { useParams } from "react-router-dom";
import {
  fetchCurrentMapel,
  fetchHasilUjianKelas,
} from "../../../services/GuruAPI";
import LoadingPage from "../../../../Siswa/pages/LoadingPage";

function HasilUjianKelas() {
  const { idMapel, idUjian } = useParams();
  const [dataMapel, setMapel] = useState([]);
  const [dataUjian, setUjian] = useState([]);
  const [dataMap, setMap] = useState([
    {
      tipe_soal: "default",
      benar: 0,
      salah: 0,
      tidak_menjawab: 0,
      persentase: 0,
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      const [mapelData, ujianData] = await Promise.all([
        fetchCurrentMapel(idMapel),
        fetchHasilUjianKelas(idMapel, idUjian),
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
      <div className="bg-biru w-1/12 lg:w-[50px] mt-10 mx-10 p-2">
        <a href={`/guru/mapel/${idMapel}/ujian/${idUjian}`}>
          <BiArrowBack className="ml-1.5 text-white text-xl"></BiArrowBack>
        </a>
      </div>
      <h1 className="text-xl mt-8 ml-10 font-medium text-text">
        Hasil Ujian Peserta
      </h1>

      <TabelHasilUjianKelas
        dataUjian={dataUjian || dataMap}
      ></TabelHasilUjianKelas>
    </div>
  );
}

export default HasilUjianKelas;
