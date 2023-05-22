import React, { useEffect, useState } from "react";
import Header from "../../Header";
import HeaderKelas from "../HeaderKelas";
import { BiArrowBack, BiBook } from "react-icons/bi";
import { BsSaveFill } from "react-icons/bs";
import HeaderGuru from "../../HeaderGuru";
import { useNavigate, useParams } from "react-router-dom";
import { isAuthenticated } from "../../../Common/services/Auth";
import { fetchAllMateri, fetchCurrentMateri } from "../../services/GuruAPI";

function IsiMateri() {
  const { idMapel, idMateri } = useParams();
  const navigate = useNavigate();
  const login = isAuthenticated("guru");
  const [dataMateri, setMateri] = useState([]);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCurrentMateri(idMapel, idMateri);
      setMateri(data);
      // setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header></Header>
      <HeaderKelas idMapel={idMapel}></HeaderKelas>

      <div className="bg-tosca mt-10 mx-10 p-2">
        <a href={`/guru/mapel/${idMapel}/daftar-materi`}>
          <BiArrowBack className="bg-white text-xl"></BiArrowBack>
        </a>
      </div>

      <div className="flex ml-10 mt-10 gap-x-5">
        <BiBook
          className="bg-tosca
        text-biru text-5xl rounded-full p-2"
        ></BiBook>
        <span className="text-biru text-xl my-auto font-medium">
          {dataMateri.judul_materi}
        </span>
      </div>

      <div className="flex ml-[110px] mt-10 gap-x-5 text-biru">
        <span className="bg-tosca p-3 rounded-lg">{dataMateri.filename}</span>
        <BsSaveFill className="bg-tosca p-[0.6rem] my-auto text-[2.5rem] rounded-lg"></BsSaveFill>
      </div>
    </div>
  );
}

export default IsiMateri;
