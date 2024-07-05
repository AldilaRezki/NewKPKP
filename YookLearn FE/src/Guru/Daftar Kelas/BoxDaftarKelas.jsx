// import React, { useEffect, useState } from "react";
// import clsx from "clsx";
// import BoxKelas from "./BoxKelas";
// import { fetchMapel } from "../services/GuruAPI";
// import LoadingPage from "../../Siswa/pages/LoadingPage";

// function BoxDaftarKelas(props) {
//   const { className, kelas } = props;
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [daftarKelas, setKelas] = useState([]);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   useEffect(() => {
//     async function fetchData() {
//       const data = await fetchMapel();
//       setKelas(data);
//     }
//     fetchData();
//   }, []);

//   let dropdownContent = null;

//   if (kelas === "X") {
//     dropdownContent = (
//       <div className="ml-20 mt-2">
//         {daftarKelas.map((item) => {
//           if (
//             item.nama_matpel.includes("X") ||
//             item.nama_matpel.includes("10")
//           ) {
//             return (
//               <BoxKelas
//                 key={item.id}
//                 namaKelas={item.nama_matpel}
//                 href={`/guru/mapel/${item.id}`}
//               />
//             );
//           } else {
//             return null; // Mengabaikan item yang tidak memenuhi kondisi
//           }
//         })}
//       </div>
//     );
//   } else if (kelas === "XI") {
//     dropdownContent = (
//       <div className="ml-20 mt-2">
//         {daftarKelas.map((item) => {
//           if (
//             item.nama_matpel.includes("XI") ||
//             item.nama_matpel.includes("11")
//           ) {
//             return (
//               <BoxKelas
//                 key={item.id}
//                 namaKelas={item.nama_matpel}
//                 href={`/guru/mapel/${item.id}`}
//               />
//             );
//           } else {
//             return null; // Mengabaikan item yang tidak memenuhi kondisi
//           }
//         })}
//       </div>
//     );
//   } else if (kelas === "XII") {
//     dropdownContent = (
//       <div className="ml-20 mt-2">
//         {daftarKelas.map((item) => {
//           if (
//             item.nama_matpel.includes("XII") ||
//             item.nama_matpel.includes("12")
//           ) {
//             return (
//               <BoxKelas
//                 key={item.id}
//                 namaKelas={item.nama_matpel}
//                 href={`/guru/mapel/${item.id}`}
//               />
//             );
//           } else {
//             return null; // Mengabaikan item yang tidak memenuhi kondisi
//           }
//         })}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <a
//         {...props}
//         className={clsx(
//           className,
//           "text-lg ml-10 mt-10 mr-10 py-2 px-4 rounded-md shadow-md bg-white/100 block cursor-pointer text-biru"
//         )}
//         onClick={toggleDropdown}
//       >
//         Kelas {kelas}
//       </a>
//       {isDropdownOpen && dropdownContent}
//     </div>
//   );
// }

// export default BoxDaftarKelas;

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import BoxKelas from "./BoxKelas";
import { fetchMapel } from "../services/GuruAPI";

function BoxDaftarKelas(props) {
  const { className, kelas } = props;
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [daftarKelas, setKelas] = useState([]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchMapel();
        if (Array.isArray(data)) {
          setKelas(data);
        } else {
          console.error("Expected an array but got:", data);
          setKelas([]);
        }
      } catch (error) {
        console.error("Failed to fetch data", error);
        setKelas([]); // Set an empty array if fetching fails
      }
    }
    fetchData();
  }, []);

  const filteredClasses = (filter) => {
    return (
      <div className="ml-20 mt-2">
        {daftarKelas.map((item) => {
          if (
            item?.nama_matpel?.includes(filter) ||
            item?.nama_matpel?.includes(filter.replace("X", "1"))
          ) {
            return (
              <BoxKelas
                key={item.id}
                namaKelas={item.nama_matpel}
                href={`/guru/mapel/${item.id}`}
              />
            );
          } else {
            return null; // Mengabaikan item yang tidak memenuhi kondisi
          }
        })}
      </div>
    );
  };

  let dropdownContent = null;
  if (kelas === "X") {
    dropdownContent = filteredClasses("X");
  } else if (kelas === "XI") {
    dropdownContent = filteredClasses("XI");
  } else if (kelas === "XII") {
    dropdownContent = filteredClasses("XII");
  }

  return (
    <div>
      <a
        {...props}
        className={clsx(
          className,
          "text-lg ml-10 mt-10 mr-10 py-2 px-4 rounded-md shadow-md bg-white/100 block cursor-pointer text-biru"
        )}
        onClick={toggleDropdown}
      >
        Kelas {kelas}
      </a>
      {isDropdownOpen && dropdownContent}
    </div>
  );
}

export default BoxDaftarKelas;
