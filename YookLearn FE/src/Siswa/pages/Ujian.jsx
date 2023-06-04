import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { RiFilePaperLine } from "react-icons/ri";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { isAuthenticated } from "../../Common/services/Auth";
import { fetchCurrentMapel, fetchUjian } from "../services/SiswaAPI";
import LoadingPage from "./LoadingPage";

function Ujian() {
  const navigate = useNavigate();
  const login = isAuthenticated("siswa");
  const { idKelas, idMapel } = useParams();
  const [mapel, setMapel] = useState([]);
  const [dataUjian, setDataUjian] = useState([]);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const [mapelData, ujianData] = await Promise.all([
        fetchCurrentMapel(idMapel),
        fetchUjian(idMapel),
      ]);

      setMapel(mapelData);
      setDataUjian(ujianData);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div>
        <Header />
        <Nav />
      </div>
      <div className="flex flex-col justify-between">
        <div className="mt-16 ml-10 w-1/2 flex">
          <BsFillJournalBookmarkFill className="text-2xl text-[#1A1F5A]" />
          <Link to={`/siswa/kelas/${idKelas}/detailkelas/${idMapel}`}>
            {" "}
            <h1 className="text-xl ml-5 text-slate-400 font-bold">
              {mapel.nama_matpel}
            </h1>{" "}
          </Link>
          <h1 className="text-xl ml-5 text-slate-400 font-bold">
            <FontAwesomeIcon icon={faAngleRight} className="text-slate-400" />
          </h1>
          <h1 className="text-xl ml-5 text-slate-400 font-bold">Ujian</h1>
        </div>
      </div>
      {dataUjian.map((ujian) => (
        <Link
          key={ujian.id}
          to={`/siswa/kelas/${idKelas}/detailkelas/${idMapel}/ujian/${ujian.id}/detailujian`}
        >
          <div className="flex flex-row items-center mt-[75px] ml-[103px]">
            <RiFilePaperLine className="rounded-full bg-[#EEF4FA] text-[#1A1F5A] text-5xl p-2 align-middle" />
            <h1 className="font-bold text-[#1A1F5A] ml-10">{ujian.judul_ujian}</h1>
            {/* <h1 className="text-slate-400 font-bold ml-60">
              Batas Pengerjaan: {ujian.batasPengerjaan}
            </h1> */}
          </div>
        </Link>
      ))}
    </>
  );
}

export default Ujian;
