import { useNavigate } from "react-router-dom";
import Header from "../Header";
import HeaderGuru from "../HeaderGuru";
import BoxDaftarKelas from "./BoxDaftarKelas";
import BoxKelas from "./BoxKelas";
import { isAuthenticated } from "../../Common/services/Auth";

function DaftarKelas() {
  const navigate = useNavigate();
  const login = isAuthenticated("guru");
  const [daftarKelas, setKelas] = useState([]);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchMapel();
      setKelas(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <Header></Header>
      <HeaderGuru></HeaderGuru>

      <h1 className="text-biru mt-10 ml-10 text-xl font-semibold ">
        Daftar Kelas
      </h1>

      {/* <BoxDaftarKelas kelas='X'></BoxDaftarKelas> */}
      {/* <BoxKelas namaKelas='X IPA 1'></BoxKelas>
      <BoxKelas namaKelas='XI IPA 1'></BoxKelas> */}
      {/* <BoxDaftarKelas kelas='XI'></BoxDaftarKelas>
      <BoxDaftarKelas kelas='XII'></BoxDaftarKelas> */}

      <BoxDaftarKelas
        className="mb-5"
        kelas="X"
        // options={["IPA 1", "IPA 2"]}
        // onClick="/guru/xipa1"
      />
      <BoxDaftarKelas
        className="mb-5"
        kelas="XI"
        // options={["IPA 1", "IPA 2", "IPS 1", "IPS 2"]}
      />
      <BoxDaftarKelas
        className="mb-5"
        kelas="XII"
        // options={["IPS 1", "IPS 2"]}
      />
    </div>
  );
}

export default DaftarKelas;

// import React from 'react';
// import Header from '../Header';
// import BoxDaftarKelas from './BoxDaftarKelas';
// import BoxKelas from './BoxKelas';

// function DaftarKelas() {
//   const daftarKelasItems = [
//     {
//       id: 1,
//       kelas: 'X',
//       items: [
//         {
//           id: 1,
//           kelas: 'X IPA 1',
//         },
//         {
//           id: 2,
//           kelas: 'X IPA 2',
//         },
//       ],
//     },
//     {
//       id: 2,
//       kelas: 'XI',
//       items: [
//         {
//           id: 1,
//           kelas: 'XI IPA 1',
//         },
//         {
//           id: 2,
//           kelas: 'XI IPA 2',
//         },
//         {
//           id: 3,
//           kelas: 'XI IPS',
//         },
//       ],
//     },
//     {
//       id: 3,
//       kelas: 'XII',
//       items: [
//         {
//           id: 1,
//           kelas: 'XII IPS 1',
//         },
//         {
//           id: 2,
//           kelas: 'XII IPS 2',
//         },
//       ],
//     },
//   ];

//   return (
//     <div>
//       <HeaderGuru></HeaderGuru>

//       <h1 className='text-biru mt-10 ml-10 text-xl font-semibold '>Daftar Kelas</h1>

//       {daftarKelasItems.map(item => (
//         <BoxDaftarKelas
//           key={item.id}
//           kelas={item.kelas}
//           items={item.items}
//         />
//       ))}
//     </div>
//   );
// }

// export default DaftarKelas;

// import React from 'react';
// import Header from '../Header';
// import BoxDaftarKelas from './BoxDaftarKelas';
// import BoxKelas from './BoxKelas';
import { useEffect, useState } from "react";
import { fetchMapel } from "../services/GuruAPI";
import LoadingPage from "../../Siswa/pages/LoadingPage";

// function DaftarKelas() {
//   const daftarKelasItems = [
//     {
//       id: 1,
//       kelas: 'X',
//       items: [
//         {
//           id: 1,
//           kelas: 'X IPA 1',
//         },
//         {
//           id: 2,
//           kelas: 'X IPA 2',
//         },
//       ],
//     },
//     {
//       id: 2,
//       kelas: 'XI',
//       items: [
//         {
//           id: 1,
//           kelas: 'XI IPA 1',
//         },
//         {
//           id: 2,
//           kelas: 'XI IPA 2',
//         },
//         {
//           id: 3,
//           kelas: 'XI IPS',
//         },
//       ],
//     },
//     {
//       id: 3,
//       kelas: 'XII',
//       items: [
//         {
//           id: 1,
//           kelas: 'XII IPS 1',
//         },
//         {
//           id: 2,
//           kelas: 'XII IPS 2',
//         },
//       ],
//     },
//   ];

//   return (
//     <div>
//       <HeaderGuru></HeaderGuru>

//       <h1 className='text-biru mt-10 ml-10 text-xl font-semibold '>Daftar Kelas</h1>

//       {daftarKelasItems.map(item => (
//         <BoxDaftarKelas
//           key={item.id}
//           kelas={item.kelas}
//           items={item.items}
//         />
//       ))}
//     </div>
//   );
// }

// export default DaftarKelas;
