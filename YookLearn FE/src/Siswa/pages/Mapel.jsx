import React, { useEffect } from "react";
import { isAuthenticated } from "../../Common/services/Auth";
import { useNavigate, useParams } from "react-router-dom";

import { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { BsList } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import MapelCard from "../components/MapelCard";
import { fetchKelasMapel } from "../services/SiswaAPI";
import LoadingPage from "./LoadingPage";

const Mapel = () => {
  const { idKelas } = useParams();
  const navigate = useNavigate();
  const login = isAuthenticated("siswa");
  const [mapel, setMapel] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchKelasMapel(idKelas);
      setMapel(data);
      setIsLoading(false);
    }
    fetchData();
  }, [idKelas]);

  useEffect(() => {
    const filteredMapel = mapel.filter((mapel) =>
      Object.values(mapel).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setSearchResults(filteredMapel);
  }, [mapel, searchQuery]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div>
        <Header />
        <Nav />
      </div>
      <div className="flex flex-col justify-start">
        <div className="mt-16 ml-10 w-1/2 flex">
          <BsList className="text-[#1A1F5A] text-2xl" />
          <h1 className="text-xl ml-5 text-slate-400 font-bold">
            Daftar Materi
          </h1>
        </div>
        <div className="flex justify-end mr-10">
          <div className="flex items-center">
            <input
              className=" rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="text"
              placeholder="Cari Materi"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="px-4 py-2 bg-[#1A1F5A] text-white rounded-r-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <FaSearch />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10 mx-10">
        {searchResults.map((item, i) => (
          <div key={i}>
            <MapelCard
              namaMapel={item.nama_matpel}
              namaPengajar={item.nama_guru}
              jadwal={item.jadwal}
              idMapel={item.id}
            />
          </div>
        ))}
      </div>
      {/* <div>
          <MapelCard
            namaMapel="Matematika"
            namaPengajar="Lorem Ipsum S.Pd"
            jadwal="Selasa, 09.00 - 11.00"
          />
        </div>
        <div>
          <MapelCard
            namaMapel="Bahasa Inggris"
            namaPengajar="Lorem Ipsum S.Pd"
            jadwal="Selasa, 09.00 - 11.00"
          />
        </div>
        <div>
          <MapelCard
            namaMapel="Fisika"
            namaPengajar="Lorem Ipsum S.Pd"
            jadwal="Selasa, 09.00 - 11.00"
          />
        </div>
        <div>
          <MapelCard
            namaMapel="Kimia"
            namaPengajar="Lorem Ipsum S.Pd"
            jadwal="Selasa, 09.00 - 11.00"
          />
        </div>
        <div>
          <MapelCard
            namaMapel="Biologi"
            namaPengajar="Lorem Ipsum S.Pd"
            jadwal="Selasa, 09.00 - 11.00"
          />
        </div> */}
      {/* </div > */}
    </>
  );
};

export default Mapel;
