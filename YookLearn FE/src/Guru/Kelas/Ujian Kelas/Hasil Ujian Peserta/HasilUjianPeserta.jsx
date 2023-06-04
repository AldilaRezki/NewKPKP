import React, { useEffect, useState } from "react";
import HeaderGuru from "../../../HeaderGuru";
import HeaderKelas from "../../HeaderKelas";
import { BiArrowBack } from "react-icons/bi";
import DetailUjian_HasilUjianPeserta from "./DetailUjian_HasilUjianPeserta";
import TabelHasilUjianPeserta from "./TabelHasilUjianPeserta";
import Header from "../../../Header";
import { useParams } from "react-router-dom";
import LoadingPage from "../../../../Siswa/pages/LoadingPage";
import { fetchCurrentMapel } from "../../../services/GuruAPI";

function HasilUjianPeserta() {
  const { idMapel, idUjian } = useParams();
  const [dataMapel, setMapel] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCurrentMapel(idMapel);
      setMapel(data);
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
      <div className="bg-tosca mt-10 mx-10 p-2">
        <a href={`/guru/mapel/${idMapel}/ujian/${idUjian}`}>
          <BiArrowBack className="bg-white text-xl"></BiArrowBack>
        </a>
      </div>
      <h1 className="text-xl mt-8 ml-10 font-medium text-biru">
        Hasil Ujian Peserta
      </h1>

      <DetailUjian_HasilUjianPeserta></DetailUjian_HasilUjianPeserta>

      <TabelHasilUjianPeserta
        idMapel={idMapel}
        idUjian={idUjian}
      ></TabelHasilUjianPeserta>
    </div>
  );
}

export default HasilUjianPeserta;
