import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import DetailTgsCard from "../components/DetailTgsCard";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchCurrentMapel, fetchCurrentTugas, fetchCurrentUpload } from "../services/SiswaAPI";
import { isAuthenticated } from "../../Common/services/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import LoadingPage from "./LoadingPage";

function DetailTugas() {
  const navigate = useNavigate();
  const login = isAuthenticated("siswa");
  const { idKelas, idMapel, idTugas } = useParams();
  const [mapel, setMapel] = useState([]);
  const [dataTugas, setDataTugas] = useState([]);
  const [dataUpload, setDataUpload] = useState([]);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const [tugasData, mapelData, uploadData] = await Promise.all([
        fetchCurrentTugas(idTugas),
        fetchCurrentMapel(idMapel),
        fetchCurrentUpload(idTugas)
      ]);
      setDataTugas(tugasData);
      setMapel(mapelData);
      setDataUpload(uploadData);
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
        <h1 className="text-xl ml-5 text-slate-400 font-bold">Tugas</h1>
      </div>
      <div>
        <DetailTgsCard
          idKelas={idKelas}
          idTugas={idTugas}
          idMapel={idMapel}
          dataTugas={dataTugas}
          dataUpload={dataUpload}
        />
      </div>
    </>
  );
}

export default DetailTugas;
