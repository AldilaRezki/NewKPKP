import HeaderGuru from "../HeaderGuru";
import HomepageKelas from "./ListKelasAjar.jsx";
import JadwalHari from "./JadwalHari.jsx";
import KelasJadwalAjar from "./KelasJadwalAjar.jsx";
import Header from "../Header";
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from "../../Common/services/Auth";
import { useEffect } from "react";

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

      <div className="flex justify-between">
        <div className="flex mt-16 ml-10 flex-col gap-y-8 w-3/5">
          <div className="homepage_Card text-xl flex bg-tosca p-4 rounded-lg shadow-md">
            <h1>
              Selamat Pagi, Lorem! Terdapat 3 Kelas untuk diajar hari ini.
            </h1>
          </div>

          <div className="homepage_Kelas bg-tosca rounded-lg shadow-md">
            <h1 className="text-2xl ml-4 mt-5 mb-5">Kelas Hari Ini</h1>
            <div className="homepage_Kelas flex flex-wrap justify-between px-10 mb-7">
              <HomepageKelas></HomepageKelas>
              <HomepageKelas></HomepageKelas>
              <HomepageKelas></HomepageKelas>
            </div>
          </div>

          <div className="buttonKelas bg-tosca mb-20">
            <a
              href="/guru/daftarkelas"
              className="flex text-2xl bg-white my-7 py-5 px-20 shadow-md justify-center item-center m-auto mx-5"
            >
              Lihat Daftar Kelas
            </a>
          </div>
        </div>

        <div className="flex flex-col jadwalAjarKelas mt-16 mr-10 bg-tosca px-10 pt-8 mb-20">
          <h1 className="text-xl mb-10">Jadwal Hari Ini</h1>

          <div className="hari">
            <JadwalHari></JadwalHari>
          </div>
          <div className="my-4">
            <KelasJadwalAjar></KelasJadwalAjar>
            <KelasJadwalAjar></KelasJadwalAjar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomepageUtama;
