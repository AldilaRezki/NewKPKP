// import clsx from 'clsx';
// import React, { useState } from 'react';
// import BoxKelas from './BoxKelas';

// function BoxDaftarKelas(props) {
//   const { className, kelas, href } = props;
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div>
//       <a {...props} href={href} className ={clsx(className, 'text-xl ml-10 mt-10 mr-10 py-3 px-6 rounded-md bg-tosca block cursor-pointer text-biru')}
//       onClick={toggleDropdown}
//       >
//         Kelas {kelas}
//       </a>
//       {isDropdownOpen && (
//         <div className="ml-20 mt-2">
//           <BoxKelas namaKelas={`${kelas} IPA 1`} />
//           <BoxKelas namaKelas={`${kelas} IPA 2`} />
//           {kelas === 'XI' && (
//             <div>
//               <BoxKelas namaKelas={`${kelas} IPS 1`} />
//               <BoxKelas namaKelas={`${kelas} IPS 2`} />
//             </div>
//           )}
//         </div>
//       )}
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
      const data = await fetchMapel();
      setKelas(data);
      // setIsLoading(false);
    }
    fetchData();
  }, []);

  let dropdownContent = null;

  if (kelas === "X") {
    dropdownContent = (
      <div className="ml-20 mt-2">
        {daftarKelas.map((item) => {
          if (
            item.nama_matpel.includes("X") ||
            item.nama_matpel.includes("10")
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
  } else if (kelas === "XI") {
    dropdownContent = (
      <div className="ml-20 mt-2">
        {daftarKelas.map((item) => {
          if (
            item.nama_matpel.includes("XI") ||
            item.nama_matpel.includes("11")
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
  } else if (kelas === "XII") {
    dropdownContent = (
      <div className="ml-20 mt-2">
        {daftarKelas.map((item) => {
          if (
            item.nama_matpel.includes("XII") ||
            item.nama_matpel.includes("12")
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
  }

  // if (kelas === "X") {
  //   dropdownContent = (
  //     <div className="ml-20 mt-2">
  //       <BoxKelas namaKelas={`${kelas} IPA 1`} href="/guru/xipa1" />
  //       <BoxKelas namaKelas={`${kelas} IPA 2`} />
  //     </div>
  //   );
  // } else if (kelas === "XI") {
  //   dropdownContent = (
  //     <div className="ml-20 mt-2">
  //       <BoxKelas namaKelas={`${kelas} IPA 1`} />
  //       <BoxKelas namaKelas={`${kelas} IPA 2`} />
  //       <BoxKelas namaKelas={`${kelas} IPS 1`} />
  //       <BoxKelas namaKelas={`${kelas} IPS 2`} />
  //     </div>
  //   );
  // } else if (kelas === "XII") {
  //   dropdownContent = (
  //     <div className="ml-20 mt-2 mb-20">
  //       <BoxKelas namaKelas={`${kelas} IPS 1`} />
  //       <BoxKelas namaKelas={`${kelas} IPS 2`} />
  //     </div>
  //   );
  // }

  return (
    <div>
      <a
        {...props}
        className={clsx(
          className,
          "text-xl ml-10 mt-10 mr-10 py-3 px-6 rounded-md bg-tosca block cursor-pointer text-biru"
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

// import React, { useState } from 'react';
// import clsx from 'clsx';
// import BoxKelas from './BoxKelas';

// function BoxDaftarKelas(props) {
//   const { className, kelas, options } = props;
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   let dropdownContent = null;

//   if (options && options.length > 0) {
//     dropdownContent = (
//       <div className="ml-20 mt-2">
//         {options.map(option => (
//           <BoxKelas key={option} namaKelas={`${kelas} ${option}`} />
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <a
//         {...props}
//         className={clsx(className, 'text-xl ml-10 mt-10 mr-10 py-3 px-6 rounded-md bg-tosca block cursor-pointer text-biru')}
//         onClick={toggleDropdown}
//       >
//         Kelas {kelas}
//       </a>
//       {isDropdownOpen && dropdownContent}
//     </div>
//   );
// }

// export default BoxDaftarKelas;

// import React, { useState } from 'react';
// import clsx from 'clsx';
// import BoxKelas from './BoxKelas';

// function BoxDaftarKelas(props) {
//   const { className, kelas, options } = props;
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   let dropdownContent = null;

//   if (options && options.length > 0) {
//     dropdownContent = (
//       <div className="ml-20 mt-2">
//         {options.map(option => (
//           <BoxKelas
//             key={option}
//             namaKelas={`${kelas} ${option}`}
//             onClick={`/${kelas.toLowerCase()}${option.replace(/\s+/g, '').toLowerCase()}`}
//           />
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <a
//         {...props}
//         className={clsx(className, 'text-xl ml-10 mt-10 mr-10 py-3 px-6 rounded-md bg-tosca block cursor-pointer text-biru')}
//         onClick={toggleDropdown}
//       >
//         Kelas {kelas}
//       </a>
//       {isDropdownOpen && dropdownContent}
//     </div>
//   );
// }

// export default BoxDaftarKelas;

// import React, { useState } from 'react';
// import clsx from 'clsx';
// import BoxKelas from './BoxKelas';

// function BoxDaftarKelas(props) {
//   const { className, kelas, items, href } = props;
//   const [isOpen, setIsOpen] = useState(false); // Local state to manage dropdown visibility

//   const handleToggle = () => {
//     setIsOpen(!isOpen); // Toggle the dropdown visibility on click
//   };

//   return (
//     <div>
//       <a
//         {...props}
//         href={href}
//         className={clsx(className, 'text-xl ml-10 mt-10 mr-10 py-3 px-6 rounded-md bg-tosca block cursor-pointer text-biru')}
//         onClick={handleToggle} // Add onClick handler to toggle dropdown visibility
//       >
//         Kelas {kelas}
//       </a>
//       {isOpen && ( // Render nested list of BoxKelas components if dropdown is open
//         <ul>
//           {items.map(item => (
//             <li key={item.id}>
//               <BoxKelas {...item} /> {/* Render BoxKelas component for each item */}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default BoxDaftarKelas;

// import React, { useState } from 'react';
// import clsx from 'clsx';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import BoxKelas from './BoxKelas';

// function BoxDaftarKelas(props) {
//   const { className, kelas, items } = props;
//   const [isOpen, setIsOpen] = useState(false); // Local state to manage dropdown visibility

//   const handleToggle = () => {
//     setIsOpen(!isOpen); // Toggle the dropdown visibility on click
//   };

//   return (
//     <div>
//       <Link
//         to={`/${kelas}`} // Use Link component with dynamic URL path based on kelas prop
//         className={clsx(className, 'text-xl ml-10 mt-10 mr-10 py-3 px-6 rounded-md bg-tosca block cursor-pointer text-biru')}
//         onClick={handleToggle} // Add onClick handler to toggle dropdown visibility
//       >
//         Kelas {kelas}
//       </Link>
//       {isOpen && ( // Render nested list of BoxKelas components if dropdown is open
//         <ul>
//           {items.map(item => (
//             <li key={item.id}>
//               <BoxKelas {...item} /> {/* Render BoxKelas component for each item */}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default BoxDaftarKelas;
