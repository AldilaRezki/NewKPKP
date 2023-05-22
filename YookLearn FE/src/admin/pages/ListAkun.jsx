import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faAngleLeft,
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
import { fetchAll } from "../../Admin/services/AdminAPI";
import { useNavigate, useParams } from "react-router-dom";
import { isAuthenticated } from "../../Common/services/Auth";

function Daftar3() {
  const accounts = [
    { id: 1, name: "Harper Lee", username: "Lee", status: "Guru" },
    { id: 2, name: "Logan Cole", username: "Cole", status: "Guru" },
    { id: 3, name: "Ava Grace", username: "Grace", status: "Murid" },
    { id: 4, name: "Lily Grace", username: "Lily", status: "Murid" },
    { id: 5, name: "Ethan James", username: "James", status: "Admin" },
    { id: 6, name: "Olivia Mae", username: "Mae", status: "Admin" },
  ];

  const { idAkun } = useParams();
  const navigate = useNavigate();
  const login = isAuthenticated("admin");
  const [dataAccount, setDataAccount] = useState([]);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAll("account");
      setDataAccount(data);
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
          <h1 className="text-2xl font-bold text-[#1A1F5A] mb-4">List Akun</h1>
        </div>

        <div className="flex justify-between">
          <span className="flex items-center">
            <div className="p-3 rounded-t-md">
              <a href="/admin/listsiswa">
                <FontAwesomeIcon
                  icon={faUserTie}
                  className="text-gray-500 text-2xl"
                />
                <span className=" ml-2 font-bold text-lg text-gray-500">
                  Siswa
                </span>
              </a>
            </div>
            <div className="p-3 rounded-t-md">
              <a href="/admin/listguru">
                <FontAwesomeIcon
                  icon={faPersonChalkboard}
                  className="text-gray-500 text-2xl"
                />
                <span className=" ml-2 font-bold text-lg text-gray-500">
                  Guru
                </span>
              </a>
            </div>
            <div className="bg-gray-200 p-4 rounded-t-md">
              <FontAwesomeIcon
                icon={faAddressCard}
                className="text-[#1A1F5A] text-3xl ml-2"
              />
              <span className=" ml-2 mr-4 font-bold text-xl text-[#1A1F5A]">
                Akun
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
              <a href="/admin/daftarakun">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-[#1A1F5A] text-3xl ml-2"
                />
                <span className=" ml-2 mr-4 font-bold text-xl text-[#1A1F5A]">
                  Tambahkan Admin
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
              placeholder="Cari Akun"
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
                  Nama Lengkap
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Username
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dataAccount.map((account, i) => (
                <tr key={i}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {i + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {account.nama_user}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {account.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {account.role}
                  </td>
                  <a href={`/admin/akun/edit/${account.id}`}>
                    <td className="pl-2 pr-1">
                      <FontAwesomeIcon
                        icon={faPen}
                        className="text-[#1A1F5A]"
                      />
                    </td>
                  </a>
                  <a href="">
                    <td className="pr-2">
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-[#1A1F5A]"
                      />
                    </td>
                  </a>
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
