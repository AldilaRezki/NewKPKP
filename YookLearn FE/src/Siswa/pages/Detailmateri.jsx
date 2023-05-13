import React, { useEffect } from "react";
import { isAuthenticated } from "../../Common/functions/Auth";
import { useNavigate } from "react-router-dom";

import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { MdDownloadForOffline } from "react-icons/md";
import Header from "../components/Header";
import Nav from "../components/Nav";
import MateriTitle from "../components/MateriTitle";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Detailmateri() {
  const navigate = useNavigate();
  const login = isAuthenticated("siswa");

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  return (
    <>
      <div>
        <Header />
        <Nav />
      </div>
      <div className="flex flex-col justify-between">
        <div className="mt-16 ml-10 w-1/2 flex">
          <BsFillJournalBookmarkFill className="text-2xl text-[#1A1F5A]" />
          <Link to="/siswa/kelas/mapel/detailkelas">
            {" "}
            <h1 className="text-xl ml-5 text-slate-400 font-bold">
              Bahasa Indonesia
            </h1>
          </Link>
          <h1 className="text-xl ml-5 text-slate-400 font-bold"></h1>
          <h1 className="text-xl ml-5 text-slate-400 font-bold">Materi</h1>
        </div>
      </div>
      <div>
        <MateriTitle pertemuan="Pertemuan 1" />
      </div>
      <div className="flex flex-row mt-4 ml-[103px]">
        <div className="h-[49px] bg-[#EEF4FA] flex items-center rounded-lg">
          <h1 className="mx-4 text-[#1A1F5A]">Bahan Ajar 1.pdf</h1>
        </div>
        <MdDownloadForOffline className="bg-[#EEF4FA] ml-2 flex-shrink-0 text-4xl" />
      </div>
    </>
  );
}

export default Detailmateri;
