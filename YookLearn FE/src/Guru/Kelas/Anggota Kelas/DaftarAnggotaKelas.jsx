import React, { useEffect, useState } from "react";
import HeaderGuru from "../../HeaderGuru";
import HeaderKelas from "../HeaderKelas";
import { BiArrowBack } from "react-icons/bi";
import TabelAnggotaKelas from "./TabelAnggotaKelas";
import Header from "../../Header";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "./../../../Common/services/Auth";
import LoadingPage from "../../../Siswa/pages/LoadingPage";
import { fetchCurrentMapel, fetchStudent } from "../../services/GuruAPI";

function DaftarAnggotaKelas() {
  const { idMapel } = useParams();
  const navigate = useNavigate();
  const login = isAuthenticated("guru");
  const [dataMapel, setMapel] = useState([]);
  const [dataSiswa, setSiswa] = useState([]);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const [mapelData, siswaData] = await Promise.all([
        fetchCurrentMapel(idMapel),
        fetchStudent(idMapel),
      ]);
      setMapel(mapelData);
      setSiswa(siswaData);
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
        <a href={`/guru/mapel/${idMapel}`}>
          <BiArrowBack className="ml-1.5 text-white text-xl"></BiArrowBack>
        </a>
      </div>
      <h1 className="text-xl mt-8 ml-10 font-medium text-text">
        Daftar Anggota Kelas
      </h1>

      <TabelAnggotaKelas dataSiswa={dataSiswa}></TabelAnggotaKelas>
    </div>
  );
}

export default DaftarAnggotaKelas;
