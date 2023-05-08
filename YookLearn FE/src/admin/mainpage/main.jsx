import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faAddressCard,
  faBookOpen,
  faFileImport,
  faGreaterThan,
  faHome,
  faLessThan,
  faMagnifyingGlass,
  faPen,
  faPersonChalkboard,
  faPlus,
  faTrash,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

function main() {
  const students = [
    {
      id: 1,
      name: "John Doe",
      nisn: "1234567890",
      gender: "L",
      agama: "Islam",
    },
    {
      id: 2,
      name: "Jane Smith",
      nisn: "1234567890",
      gender: "P",
      agama: "Protestan",
    },
    {
      id: 3,
      name: "Bob Johnson",
      nisn: "1234567890",
      gender: "L",
      agama: "Hindu",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-blue-950 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold font-mono">YookLearn</h1>
        </div>
      </header>
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between">
          <span className="flex items-center">
            <div className="bg-gray-200 p-4 rounded-t-md">
              <FontAwesomeIcon
                icon={faHome}
                className="text-blue-950 text-3xl pr-3 pb-1"
              />
              <span className=" mr-4 font-bold text-xl text-blue-950">
                Home
              </span>
            </div>
          </span>
          <span className="flex items-center">
            <div className="bg-gray-200 p-2 rounded-md m-2">
              <a href="">
                <FontAwesomeIcon
                  icon={faBookOpen}
                  className="text-blue-950 text-3xl ml-2"
                />
                <span className=" ml-2 mr-4 font-bold text-xl text-blue-950">
                  Daftar Mata Pelajaran
                </span>
              </a>
            </div>
            <div className="bg-gray-200 p-2 rounded-md">
              <a href="/list/">
                <FontAwesomeIcon
                  icon={faAddressBook}
                  className="text-blue-950 text-3xl ml-2"
                />
                <span className=" ml-2 mr-4 font-bold text-xl text-blue-950">
                  Daftar Akun
                </span>
              </a>
            </div>
          </span>
        </div>

        <div className="bg-white shadow overflow-hidden rounded-none">
          <div className="p-4 bg-gray-200"></div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200"></thead>
            <div className="bg-white divide-y divide-gray-200 ">
              <h1 className="text-blue-950 text-3xl p-5">
                Selamat Datang di Admin Homepage
              </h1>
            </div>
          </table>
        </div>
      </div>
    </div>
  );
}

export default main;
