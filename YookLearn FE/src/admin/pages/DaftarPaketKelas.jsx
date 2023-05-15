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
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../Common/services/Auth";
import { fetchAllKelas } from "../../Admin/services/AdminAPI";

function Daftar3() {
  const navigate = useNavigate();
  const login = isAuthenticated("admin");
  const [dataKelas, setDataKelas] = useState([]);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAllKelas();
      setDataKelas(data);
    }
    fetchData();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="flex">
          <a href="/admin/homepage">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="text-[#1A1F5A] text-3xl ml-2 pr-3"
            />
          </a>
          <h1 className="text-2xl font-bold text-[#1A1F5A] mb-4">
            Daftar Paket Kelas
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
              <a href="/admin/daftarakun">
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
              placeholder="Cari Paket"
            />
          </div>
          <div>
            <div className="flex justify-evenly p-10">
              {dataKelas.map((kelas) => (
                <div key={kelas.id}>
                  <div className="bg-[#1A1F5A] text-white rounded-t-md font-bold py-3 pl-12">
                    {kelas.nama_kelas}
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
                    {kelas.nama_guru}
                  </div>
                  <div className="text-[#1A1F5A] font-bold pl-2">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-[#1A1F5A] px-4"
                    />
                    {kelas.jumlah_siswa}
                  </div>
                </div>
              ))}
              {/* <div>
                <div className="bg-[#1A1F5A] text-white rounded-t-md font-bold py-3 pl-12">
                  XI IPA 2
                  <FontAwesomeIcon icon={faPen} className="text-white pl-14" />
                  <FontAwesomeIcon icon={faTrash} className="text-white px-4" />
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
              </div>
              <div>
                <div className="bg-[#1A1F5A] text-white rounded-t-md font-bold py-3 pl-12">
                  XI IPS
                  <FontAwesomeIcon icon={faPen} className="text-white pl-14" />
                  <FontAwesomeIcon icon={faTrash} className="text-white px-4" />
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
              </div>
            </div>
            <div className="flex justify-evenly p-10">
              <div>
                <div className="bg-[#1A1F5A] text-white rounded-t-md font-bold py-3 pl-12">
                  XII IPA 1
                  <FontAwesomeIcon icon={faPen} className="text-white pl-14" />
                  <FontAwesomeIcon icon={faTrash} className="text-white px-4" />
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
              </div>
              <div>
                <div className="bg-[#1A1F5A] text-white rounded-t-md font-bold py-3 pl-12">
                  XII IPA 2
                  <FontAwesomeIcon icon={faPen} className="text-white pl-14" />
                  <FontAwesomeIcon icon={faTrash} className="text-white px-4" />
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
              </div>
              <div>
                <div className="bg-[#1A1F5A] text-white rounded-t-md font-bold py-3 pl-12">
                  XII IPS
                  <FontAwesomeIcon icon={faPen} className="text-white pl-14" />
                  <FontAwesomeIcon icon={faTrash} className="text-white px-4" />
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
              </div> */}
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
