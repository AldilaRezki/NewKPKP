import React, { useEffect, useState } from "react";
import HeaderGuru from "../../HeaderGuru";
import HeaderKelas from "../HeaderKelas";
import { BiArrowBack } from "react-icons/bi";
import { CgGoogleTasks } from "react-icons/cg";
import Header from "../../Header";
import { useParams } from "react-router-dom";
import LoadingPage from "./../../../Siswa/pages/LoadingPage";
import { fetchCurrentMapel } from "../../services/GuruAPI";

function DetailUjian() {
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
        <a href={`/guru/mapel/${idMapel}/ujian`}>
          <BiArrowBack className="bg-white text-xl"></BiArrowBack>
        </a>
      </div>
      <h1 className="text-xl mt-8 ml-10 font-medium text-biru">
        Ujian Pekan 1
      </h1>

      <a
        className="flex ml-10 mt-10 gap-x-8 border-[0.3px] my-10 py-4 pl-5 shadow-md w-[360px]"
        href={`/guru/mapel/${idMapel}/ujian/${idUjian}/daftar-soal`}
      >
        <div className="text-biru bg-tosca w-fit h-fit text-3xl p-1 rounded-full">
          <CgGoogleTasks></CgGoogleTasks>
        </div>
        <span className="text-lg py-1">Daftar Soal</span>
      </a>

      <a
        className="flex ml-10 mt-10 gap-x-8 border-[0.3px] my-10 py-4 pl-5 shadow-md w-[360px]"
        href={`/guru/mapel/${idMapel}/ujian/${idUjian}/hasil-ujian-peserta`}
      >
        <div className="text-biru bg-tosca w-fit h-fit text-3xl p-1 rounded-full">
          <CgGoogleTasks></CgGoogleTasks>
        </div>
        <span className="text-lg py-1">Hasil Ujian Peserta</span>
      </a>

      <a
        className="flex ml-10 mt-10 gap-x-8 border-[0.3px] my-10 py-4 pl-5 shadow-md w-[360px]"
        href={`/guru/mapel/${idMapel}/ujian/${idUjian}/hasil-ujian-kelas`}
      >
        <div className="text-biru bg-tosca w-fit h-fit text-3xl p-1 rounded-full">
          <CgGoogleTasks></CgGoogleTasks>
        </div>
        <span className="text-lg py-1">Hasil Ujian Kelas</span>
      </a>
    </div>
  );
}

export default DetailUjian;
