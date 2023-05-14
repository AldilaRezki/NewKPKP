import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import TabelSiswa from "../components/TabelSiswa";
import { fetchCurrentMapel } from "../services/api";
import { isAuthenticated } from "../../Common/functions/Auth";

function DaftarSiswa() {
  const navigate = useNavigate();
  const login = isAuthenticated("siswa");
  const [mapel, setMapel] = useState([]);
  const { idKelas, idMapel } = useParams();
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) {
    return <div>Loading...</div>;
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
          <h1 className="text-xl ml-5 text-slate-400 font-bold"> > </h1>
          <h1 className="text-xl ml-5 text-slate-400 font-bold">
            Daftar Siswa
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-xl mt-8 ml-10 font-medium text-[#1A1F5A]">
          Daftar Anggota Kelas
        </h1>
        {mapel && <TabelSiswa idKelas={idKelas} idMapel={idMapel} />}
      </div>
    </>
  );
}

export default DaftarSiswa;
