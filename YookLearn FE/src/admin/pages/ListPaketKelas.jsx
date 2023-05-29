import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faAngleLeft,
  faChalkboardTeacher,
  faFileImport,
  faGreaterThan,
  faLessThan,
  faMagnifyingGlass,
  faPen,
  faPersonChalkboard,
  faPlus,
  faTrash,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import { fetchAllKelas, removeClass } from "../services/AdminAPI";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../Common/services/Auth";
import NavGuru from "../components/NavGuru";
import LoadingPage from "../../Siswa/pages/LoadingPage";

function Daftar3() {
  const navigate = useNavigate();
  const login = isAuthenticated("admin");
  const [dataKelas, setKelas] = useState([]);
  const [isRemoving, setIsRemoving] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAllKelas();
      setKelas(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filteredKelas = dataKelas.filter((kelas) =>
      Object.values(kelas).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setSearchResults(filteredKelas);
  }, [dataKelas, searchQuery]);

  const handleRemove = async (id) => {
    try {
      setIsRemoving(true);

      const isSuccess = await removeClass(id);

      if (isSuccess) {
        console.log("Kelas removed successfully");
        setKelas((prevKelas) => prevKelas.filter((kelas) => kelas.id !== id));
      } else {
        console.log("Failed to remove Kelas");
      }
    } catch (error) {
      console.log("Error removing Kelas:", error);
    } finally {
      setIsRemoving(false);
    }
  };

  const handleEdit = async (idKelas) => {
    if (idKelas) {
      navigate(`/admin/edit/kelas/${idKelas}`);
    }
  };

  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <NavGuru />
      <div className="container mx-auto px-4 py-6">
        <div className="flex">
          <a href="/admin/homepage">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="text-[#1A1F5A] text-3xl ml-2 pr-3"
            />
          </a>
          <h1 className="text-2xl font-bold text-[#1A1F5A] mb-4">
            List Paket Kelas
          </h1>
        </div>

        <div className="flex justify-end">
          <span className="flex items-center">
            <div className="bg-gray-200 p-2 rounded-md m-2">
              <a href="">
                <FontAwesomeIcon
                  icon={faFileImport}
                  className="text-[#1A1F5A] text-3xl ml-2"
                />
                <span className=" ml-2 mr-4 font-bold text-xl text-[#1A1F5A]">
                  Import
                </span>
              </a>
            </div>
            <div className="bg-gray-200 p-2 rounded-md">
              <a href="/admin/daftarpaket">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-[#1A1F5A] text-3xl ml-2"
                />
                <span className=" ml-2 mr-4 font-bold text-xl text-[#1A1F5A]">
                  Tambahkan Paket
                </span>
              </a>
            </div>
          </span>
        </div>

        <div className="bg-white shadow overflow-hidden rounded-none">
          <div className="p-2 bg-gray-200">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[#1A1F5A] px-2 pr-4"
            />
            <input
              type="text"
              className="w-11/12 border rounded-lg px-4 py-2"
              placeholder="Cari Siswa"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <div className="flex justify-evenly p-10">
              {searchResults.map((kelas) => (
                <div className=" w-3/12" key={kelas.id}>
                  <div className="bg-[#1A1F5A] text-white rounded-t-md font-bold py-3 pl-12">
                    {kelas.nama_kelas}
                    <a href={`/admin/edit/kelas/${kelas.id}`} className="">
                      <FontAwesomeIcon
                        icon={faPen}
                        className="text-white pl-12"
                      />
                    </a>
                    <button
                      onClick={() => handleRemove(kelas.id)}
                      disabled={isRemoving}
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-white px-4"
                      />
                    </button>
                  </div>
                  <a
                    href={`/admin/ListPaketKelas/${kelas.id}/siswa`}
                    key={kelas.id}
                  >
                    <div className="text-[#1A1F5A] font-bold py-3 pl-2">
                      <FontAwesomeIcon
                        icon={faChalkboardTeacher}
                        className="text-[#1A1F5A] px-4"
                      />
                      {kelas.nama_guru}
                    </div>
                    <div className="text-[#1A1F5A] font-bold pl-2">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="text-[#1A1F5A] px-4"
                      />
                      {kelas.jumlah_siswa} Siswa
                    </div>
                  </a>
                </div>
              ))}
              <div className=" w-3/12">
                <a href="/admin/listsiswapaketkelas">
                  <div className="bg-[#1A1F5A] text-white rounded-t-md font-bold py-3 pl-12">
                    XI IPA 1
                    <FontAwesomeIcon
                      icon={faPen}
                      className="text-white pl-14"
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-white px-4"
                    />
                  </div>
                  <div className="text-[#1A1F5A] font-bold py-3 pl-2">
                    <FontAwesomeIcon
                      icon={faChalkboardTeacher}
                      className="text-[#1A1F5A] px-4"
                    />
                    Harper Lee
                  </div>
                  <div className="text-[#1A1F5A] font-bold pl-2">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-[#1A1F5A] px-4"
                    />
                    30 Siswa
                  </div>
                </a>
              </div>
              <div className=" w-3/12">
                <a href="/admin/listsiswapaketkelas">
                  <div className="bg-[#1A1F5A] text-white rounded-t-md font-bold py-3 pl-12">
                    XI IPA 1
                    <FontAwesomeIcon
                      icon={faPen}
                      className="text-white pl-14"
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-white px-4"
                    />
                  </div>
                  <div className="text-[#1A1F5A] font-bold py-3 pl-2">
                    <FontAwesomeIcon
                      icon={faChalkboardTeacher}
                      className="text-[#1A1F5A] px-4"
                    />
                    Harper Lee
                  </div>
                  <div className="text-[#1A1F5A] font-bold pl-2">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-[#1A1F5A] px-4"
                    />
                    30 Siswa
                  </div>
                </a>
              </div>
            </div>
            <div className="flex justify-evenly p-10">
              <div className=" w-3/12">
                <a href="/admin/listsiswapaketkelas">
                  <div className="bg-[#1A1F5A] text-white rounded-t-md font-bold py-3 pl-12">
                    XI IPA 1
                    <FontAwesomeIcon
                      icon={faPen}
                      className="text-white pl-14"
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-white px-4"
                    />
                  </div>
                  <div className="text-[#1A1F5A] font-bold py-3 pl-2">
                    <FontAwesomeIcon
                      icon={faChalkboardTeacher}
                      className="text-[#1A1F5A] px-4"
                    />
                    Harper Lee
                  </div>
                  <div className="text-[#1A1F5A] font-bold pl-2">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-[#1A1F5A] px-4"
                    />
                    30 Siswa
                  </div>
                </a>
              </div>
              <div className=" w-3/12">
                <a href="/admin/listsiswapaketkelas">
                  <div className="bg-[#1A1F5A] text-white rounded-t-md font-bold py-3 pl-12">
                    XI IPA 1
                    <FontAwesomeIcon
                      icon={faPen}
                      className="text-white pl-14"
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-white px-4"
                    />
                  </div>
                  <div className="text-[#1A1F5A] font-bold py-3 pl-2">
                    <FontAwesomeIcon
                      icon={faChalkboardTeacher}
                      className="text-[#1A1F5A] px-4"
                    />
                    Harper Lee
                  </div>
                  <div className="text-[#1A1F5A] font-bold pl-2">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-[#1A1F5A] px-4"
                    />
                    30 Siswa
                  </div>
                </a>
              </div>
              <div className=" w-3/12">
                <a href="/admin/listsiswapaketkelas">
                  <div className="bg-[#1A1F5A] text-white rounded-t-md font-bold py-3 pl-12">
                    XI IPA 1
                    <FontAwesomeIcon
                      icon={faPen}
                      className="text-white pl-14"
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-white px-4"
                    />
                  </div>
                  <div className="text-[#1A1F5A] font-bold py-3 pl-2">
                    <FontAwesomeIcon
                      icon={faChalkboardTeacher}
                      className="text-[#1A1F5A] px-4"
                    />
                    Harper Lee
                  </div>
                  <div className="text-[#1A1F5A] font-bold pl-2">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-[#1A1F5A] px-4"
                    />
                    30 Siswa
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-4">
            <div className="px-2">
              <FontAwesomeIcon icon={faLessThan} className="text-[#1A1F5A]" />
            </div>
            <div className="px-2">1</div>
            <div className="px-2">2</div>
            <div className="px-2">3</div>
            <div className="px-2">...</div>
            <div className="px-2">9</div>
            <div className="px-2">10</div>
            <div className="px-2">
              <FontAwesomeIcon
                icon={faGreaterThan}
                className="text-[#1A1F5A]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Daftar3;
