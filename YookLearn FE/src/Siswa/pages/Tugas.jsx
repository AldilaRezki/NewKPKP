import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { IoMdPaper } from "react-icons/io";
import { MdTask } from "react-icons/md";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { fetchAllTugasMapel, fetchCurrentMapel } from "../services/SiswaAPI";
import { isAuthenticated } from "../../Common/services/Auth";

const Tugas = () => {
  const navigate = useNavigate();
  const login = isAuthenticated("siswa");
  const { idKelas, idMapel } = useParams();
  const [mapel, setMapel] = useState([]);
  const [dataTugas, setDataTugas] = useState([]);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  const toggleDropdown = (tugas) => {
    setDataTugas(
      dataTugas.map((item) => {
        if (item.id === tugas.id) {
          return {
            ...item,
            isOpen: !item.isOpen,
          };
        } else {
          return {
            ...item,
            isOpen: false,
          };
        }
      })
    );
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCurrentMapel(idMapel);
      setMapel(data);
      setIsLoading(false);
    }
    fetchData(idMapel);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAllTugasMapel(idMapel);
      setDataTugas(data);
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
          <h1 className="text-xl ml-5 text-slate-400 font-bold">Tugas</h1>
        </div>
      </div>
      {dataTugas.map((tugas) => (
        <div key={tugas.id}>
          <button onClick={() => toggleDropdown(tugas)}>
            <div className="flex flex-row items-center mt-[75px] ml-[103px]">
              <MdTask className="rounded-full bg-[#EEF4FA] text-[#1A1F5A] text-5xl p-2 align-middle"></MdTask>
              <h1 className="font-bold text-[#1A1F5A] ml-10">
                {tugas.judul_tugas}
              </h1>
              <h1 className="text-slate-400 font-bold ml-60">
                {tugas.deadline}
              </h1>
            </div>
          </button>
          <Link to={`${tugas.id}/detail`}>
            {tugas.isOpen && (
              <div className="bg-[#EEF4FA] text-[#1A1F5A] p-6 align-middle mx-[103px] shadow-md">
                <p className="text-slate-400 font-bold ml-5 text-sm">upload</p>
                <h1 className="mt-5 ml-5 text-[#1A1F5A]">
                  {tugas.detail_tugas}
                </h1>
              </div>
            )}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Tugas;
