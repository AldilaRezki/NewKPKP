import React, { useEffect, useState } from "react";
import HeaderGuru from "../../../HeaderGuru";
import HeaderKelas from "../../HeaderKelas";
import { BiArrowBack } from "react-icons/bi";
import BoxDaftarSoalPilihanGanda from "./BoxDaftarSoalPilihanGanda";
import BoxDaftarSoalKotakCentang from "./BoxDaftarSoalKotakCentang";
import BoxDaftarSoalEssay from "./BoxDaftarSoalEssay";
import Header from "../../../Header";
import { useParams } from "react-router-dom";
import { fetchCurrentMapel, fetchSoalUjian } from "../../../services/GuruAPI";
import LoadingPage from "../../../../Siswa/pages/LoadingPage";

function DaftarSoalUjian() {
  const { idMapel, idUjian } = useParams();
  const [dataMapel, setMapel] = useState([]);
  const [dataSoal, setSoal] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const [mapelData, soalData] = await Promise.all([
        fetchCurrentMapel(idMapel),
        fetchSoalUjian(idMapel, idUjian),
      ]);
      setMapel(mapelData);
      setSoal(soalData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(dataSoal);
  }, [dataSoal]);

  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="mb-20">
      <Header></Header>
      <HeaderGuru></HeaderGuru>
      <HeaderKelas dataMapel={dataMapel}></HeaderKelas>
      <div className="bg-tosca mt-10 mx-10 p-2">
        <a href={`/guru/mapel/${idMapel}/ujian/${idUjian}`}>
          <BiArrowBack className="bg-white text-xl"></BiArrowBack>
        </a>
      </div>
      <h1 className="text-xl mt-8 ml-10 font-medium text-biru">Daftar Soal</h1>

      {dataSoal.map((soal, index) => (
        <div key={soal.id} className={soal.tipe_soal}>
          <span className="flex mt-6 ml-10 text-lg font-semibold text-biru">
            {index + 1}
          </span>

          {soal.tipe_soal === "pilgan" && (
            <BoxDaftarSoalPilihanGanda dataSoal={soal} />
          )}

          {soal.tipe_soal === "kotakCentang" && (
            <BoxDaftarSoalKotakCentang dataSoal={soal} />
          )}

          {soal.tipe_soal === "essai" && <BoxDaftarSoalEssay dataSoal={soal} />}
        </div>
      ))}
    </div>
  );
}

export default DaftarSoalUjian;
