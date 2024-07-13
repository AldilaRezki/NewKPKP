import clsx from "clsx";

function BoxKelas(props) {
    const { className, namaKelas, href } = props;
    return (
        <div>
            <a
                {...props}
                href={href}
                className={clsx(
                    className,
                    "text-l mt-10 mr-10 py-3 px-6 rounded-md bg-white shadow-md block cursor-pointer text-text"
                )}
            >
                Batch {namaKelas}
            </a>
        </div>
    );
}

export default BoxKelas;

// import React from 'react';

// function BoxKelas(props) {
//   const { kelas, subKelas } = props; // Assuming subKelas is an array of sub-items

//   return (
//     <div>
//       <a
//         {...props}
//         className="text-xl ml-10 mt-10 mr-10 py-3 px-6 rounded-md bg-tosca block cursor-pointer text-text"
//       >
//         {kelas}
//       </a>
//       {subKelas && ( // Render nested list of subKelas components if subKelas is available
//         <ul>
//           {subKelas.map(subItem => (
//             <li key={subItem.id}>
//               <BoxKelas {...subItem} /> {/* Render BoxKelas component for each sub-item */}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default BoxKelas;
