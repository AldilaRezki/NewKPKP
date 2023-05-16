import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import DetailUjianCard from "../components/DetailUjianCard";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { isAuthenticated } from "../../Common/services/Auth";
import { fetchCurrentMapel } from "../services/SiswaAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function DetailUjianSiswa() {
  const navigate = useNavigate();
  const login = isAuthenticated("siswa");
  const { idKelas, idMapel } = useParams();
  const [mapel, setMapel] = useState([]);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCurrentMapel(idMapel);
      setMapel(data);
      setIsLoading(false);
    }
    fetchData(idMapel);
  }, []);

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
      <div>
        <DetailUjianCard />
      </div>
    </>
  );
}

export default DetailUjianSiswa;
