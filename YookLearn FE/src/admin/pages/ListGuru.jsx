import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faAngleLeft, faFileImport, faGreaterThan, faLessThan, faMagnifyingGlass, faPen, faPersonChalkboard, faPlus, faTrash, faUserTie } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';

function Daftar2() {
  const teachers = [
    {
      id: 1,
      name: "Phoenix Wells",
      username: "Phoenix",
      nip: "197410052007011006",
      pangkat: "Pembina",
      golongan: "Golongan II a",
      mapel: "Matematika",
    },
    {
      id: 2,
      name: "Luna Frost",
      username: "Luna",
      nip: "198501102016011003",
      pangkat: "Penata Muda",
      golongan: "Golongan I a",
      mapel: "Bahasa Indonesia",
    },
    {
      id: 3,
      name: "Orion Blackwood",
      username: "Blackwood",
      nip: "197907012009011005",
      pangkat: "Penata Tingkat Satu",
      golongan: "Golongan III a",
      mapel: "Bahasa Inggris",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-6">
      <div className='flex'>
          <a href="/admin/homepage">
            <FontAwesomeIcon icon={faAngleLeft} className='text-[#1A1F5A] text-3xl ml-2 pr-3' />
          </a>
          <h1 className="text-2xl font-bold text-[#1A1F5A] mb-4">
            List Guru
          </h1>
        </div>
        
        <div className='flex justify-between'>
          <span className='flex items-center'>
            <div className='p-3 rounded-t-md'>
              <a href="/admin/listsiswa">
              <FontAwesomeIcon icon={faUserTie} className='text-gray-500 text-2xl' />
              <span className=' ml-2 font-bold text-lg text-gray-500'>Siswa</span>
              </a>
            </div>
            <div className="bg-gray-200 p-4 rounded-t-md">
              <FontAwesomeIcon
                icon={faPersonChalkboard}
                className="text-[#1A1F5A] text-3xl ml-2"
              />
              <span className=" ml-2 mr-4 font-bold text-xl text-[#1A1F5A]">
                Guru
              </span>
            </div>
            <div className='p-4 rounded-t-md'>
              <a href="/admin/listakun">
              <FontAwesomeIcon icon={faAddressCard} className='text-gray-500 text-2xl' />
              <span className=' ml-2 font-bold text-lg text-gray-500'>Akun</span>
              </a>
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
            <div className='bg-gray-200 p-2 rounded-md'>
              <a href="/admin/daftarguru">
              <FontAwesomeIcon icon={faPlus} className='text-[#1A1F5A] text-3xl ml-2' />
              <span className=' ml-2 mr-4 font-bold text-xl text-[#1A1F5A]'>Tambahkan Guru</span>
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
              placeholder="Cari Guru"
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
                  className="pr-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  NIP
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Pangkat
                </th>
                <th
                  scope="col"
                  className="pr-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Golongan
                </th>
                <th
                  scope="col"
                  className="pr-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Nama Lengkap
                </th>
                <th
                  scope="col"
                  className="pr-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Username
                </th>
                <th
                  scope="col"
                  className="pr-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Mata Pelajaran
                </th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {teacher.id}
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {teacher.nip}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {teacher.pangkat}
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {teacher.golongan}
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {teacher.name}
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {teacher.username}
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {teacher.mapel}
                  </td>
                  <td className="pr-3">
                    <FontAwesomeIcon icon={faPen} className="text-[#1A1F5A]" />
                  </td>
                  <td className="pr-3">
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-[#1A1F5A]"
                    />
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

export default Daftar2;
