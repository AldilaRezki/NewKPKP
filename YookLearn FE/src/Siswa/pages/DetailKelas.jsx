import React, { useEffect } from "react";
import { isAuthenticated } from "../../Common/functions/Auth";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Nav from "../components/Nav";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { MdTask } from "react-icons/md";
import { IoMdPaper } from "react-icons/io";
import { RiFilePaperLine } from "react-icons/ri";
import Fiturkelas from "../components/Fiturkelas";
import { Link } from "react-router-dom";

function DetailKelas() {
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
          <h1 className="text-xl ml-5 text-slate-400 font-bold">
            Bahasa Indonesia
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-10">
        <Link to="/siswa/kelas/mapel/daftarsiswa">
          {" "}
          <div>
            <Fiturkelas icon={<HiUserGroup size={50} />} label="Daftar Siswa" />
          </div>
        </Link>
        <Link to="tugas">
          {" "}
          <div>
            <Fiturkelas
              icon={<MdTask size={50} color="#1A1F5A" />}
              label="Tugas"
            />
          </div>
        </Link>
        <Link to="materi">
          {" "}
          <div>
            <Fiturkelas
              icon={<IoMdPaper size={50} color="#1A1F5A" />}
              label="Materi"
            />
          </div>
        </Link>
        <div>
          <Fiturkelas
            icon={<RiFilePaperLine size={50} color="#1A1F5A" />}
            label="Ujian"
          />
        </div>
      </div>
    </>
  );
}

export default DetailKelas;
