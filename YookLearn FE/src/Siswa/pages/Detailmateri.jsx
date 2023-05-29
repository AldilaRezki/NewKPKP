import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../../Common/services/Auth";
import { useNavigate, useParams, Link } from "react-router-dom";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { MdDownloadForOffline } from "react-icons/md";

import Header from "../components/Header";
import Nav from "../components/Nav";
import MateriTitle from "../components/MateriTitle";

import { fetchCurrentMapel, fetchCurrentMateri } from "../services/SiswaAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import LoadingPage from "./LoadingPage";

function Detailmateri() {
  const BASE_URL = import.meta.env.VITE_BASE_DOWNLOAD_URL;

  const navigate = useNavigate();
  const login = isAuthenticated("siswa");
  const { idKelas, idMapel, idMateri } = useParams();
  const [mapel, setMapel] = useState([]);
  const [dataMateri, setMateri] = useState([]);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const [mapelData, materiData] = await Promise.all([
        fetchCurrentMapel(idMapel),
        fetchCurrentMateri(idMateri),
      ]);
      setMapel(mapelData);
      setMateri(materiData);
      setIsLoading(false);
    }
    fetchData();
  }, [idMapel, idMateri]);

  const downloadUrl = `${BASE_URL}/${dataMateri.filename}`;

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
            </h1>
          </Link>
          <h1 className="text-xl ml-5 text-slate-400 font-bold">
            <FontAwesomeIcon icon={faAngleRight} className="text-slate-400" />
          </h1>
          <h1 className="text-xl ml-5 text-slate-400 font-bold">Materi</h1>
        </div>
      </div>
      <div>
        <MateriTitle pertemuan={`${dataMateri.judul_materi}`} />
      </div>
      <div className="flex flex-row mt-4 ml-[103px]">
        <div className="h-[49px] bg-[#EEF4FA] flex items-center rounded-lg">
          <h1 className="mx-4 text-[#1A1F5A]">{dataMateri.filename}</h1>
        </div>
        <a href={downloadUrl} download>
          <MdDownloadForOffline className="mt-2 ml-2 flex-shrink-0 text-4xl" />
        </a>
      </div>
    </>
  );
}

export default Detailmateri;
