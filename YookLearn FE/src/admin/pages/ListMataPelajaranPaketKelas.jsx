import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faAngleLeft,
  faBook,
  faFileImport,
  faGreaterThan,
  faLessThan,
  faMagnifyingGlass,
  faPen,
  faPersonChalkboard,
  faPlus,
  faTrash,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { isAuthenticated } from "../../Common/services/Auth";
import { fetchMapelByKelas, removeMapel } from "../services/AdminAPI";
import NavGuru from "../components/NavGuru";
import LoadingPage from "../../Siswa/pages/LoadingPage";

function Daftar3() {
  const mapels = [
    { id: 1, guru: "Harper Lee", mapel: "Matematika" },
    { id: 2, guru: "Logan Cole", mapel: "Bahasa Inggris" },
    { id: 3, guru: "Ava Grace", mapel: "Bahasa Indonesia" },
    { id: 4, guru: "Lily Grace", mapel: "Fisika" },
    { id: 5, guru: "Ethan James", mapel: "Biologi" },
    { id: 6, guru: "Olivia Mae", mapel: "Kimia" },
  ];

  const navigate = useNavigate();
  const login = isAuthenticated("admin");
  const { idKelas } = useParams();
  const [dataMapel, setMapel] = useState([]);
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
      const data = await fetchMapelByKelas(idKelas);
      setMapel(data);
      setIsLoading(false);
    }
    fetchData(idKelas);
  }, []);

  useEffect(() => {
    const filteredMapel = dataMapel.filter((mapel) =>
      Object.values(mapel).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setSearchResults(filteredMapel);
  }, [dataMapel, searchQuery]);

  const handleRemove = async (id) => {
    try {
      setIsRemoving(true);

      const isSuccess = await removeMapel(id);

      if (isSuccess) {
        console.log("Siswa removed successfully");
        setMapel((prevMapel) => prevMapel.filter((mapel) => mapel.id !== id));
      } else {
        console.log("Failed to remove siswa");
      }
    } catch (error) {
      console.log("Error removing siswa:", error);
    } finally {
      setIsRemoving(false);
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
            List Mata Pelajaran
          </h1>
        </div>

        <div className="flex justify-between">
          <span className="flex items-center">
            <div className="p-3 rounded-t-md">
              <a href={`/admin/ListPaketKelas/${idKelas}/siswa`}>
                <FontAwesomeIcon
                  icon={faUserTie}
                  className="text-gray-500 text-2xl"
                />
                <span className=" ml-2 font-bold text-lg text-gray-500">
                  Siswa
                </span>
              </a>
            </div>
            <div className="bg-gray-200 p-4 rounded-t-md">
              <FontAwesomeIcon
                icon={faBook}
                className="text-[#1A1F5A] text-3xl ml-2"
              />
              <span className=" ml-2 mr-4 font-bold text-xl text-[#1A1F5A]">
                Mata Pelajaran
              </span>
            </div>
          </span>
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
              <a href={`/admin/daftarmapel/${idKelas}`}>
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-[#1A1F5A] text-3xl ml-2"
                />
                <span className=" ml-2 mr-4 font-bold text-xl text-[#1A1F5A]">
                  Tambahkan Mata Pelajaran
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
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Mata Pelajaran
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Guru
                </th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {searchResults.map((mapel, i) => (
                <tr key={mapel.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {i + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {mapel.nama_matpel}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {mapel.nama_guru}
                  </td>
                  <td className="pl-2 pr-1">
                    <a
                      href={`/admin/ListPaketKelas/${idKelas}/matapelajaran/edit/${mapel.id}`}
                    >
                      <FontAwesomeIcon
                        icon={faPen}
                        className="text-[#1A1F5A]"
                      />
                    </a>
                  </td>
                  <td>
                    <button
                      onClick={() => handleRemove(mapel.id)}
                      disabled={isRemoving}
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-[#1A1F5A]"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
