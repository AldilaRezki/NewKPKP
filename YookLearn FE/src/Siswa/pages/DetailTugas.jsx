import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import DetailTgsCard from "../components/DetailTgsCard";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchCurrentMapel, fetchCurrentTugas } from "../services/api";
import { isAuthenticated } from "../../Common/functions/Auth";

function DetailTugas() {
  const navigate = useNavigate();
  const login = isAuthenticated("siswa");
  const { idKelas, idMapel, idTugas } = useParams();
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

      <div className="mt-16 ml-10 w-1/2 flex">
        <BsFillJournalBookmarkFill className="text-2xl text-[#1A1F5A]" />
        <Link to={`/siswa/kelas/${idKelas}/detailkelas/${idMapel}`}>
          {" "}
          <h1 className="text-xl ml-5 text-slate-400 font-bold">
            {mapel.nama_matpel}
          </h1>{" "}
        </Link>
        <h1 className="text-xl ml-5 text-slate-400 font-bold"> > </h1>
        <h1 className="text-xl ml-5 text-slate-400 font-bold">Tugas</h1>
      </div>
      <div>
        <DetailTgsCard idTugas={idTugas} />
      </div>
    </>
  );
}

export default DetailTugas;
