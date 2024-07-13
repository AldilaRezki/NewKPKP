// import React from "react";
// import Header from "./Header";
// import HeaderGuru from "./HeaderGuru";

// function TambahBatch() {
//     return (
//       <div>
//         <Header></Header>
//         <HeaderGuru></HeaderGuru>

//         <div>
//             <h1 className="text-xl mt-8 ml-10 font-medium text-text">Tambah Batch</h1>
//             <form  className="flex flex-col xl:justify-center xl:items-center">
//                 <div>
//                     <h2 className="text-md mt-8 ml-10 font-normal text-text">
//                         Nama Batch
//                     </h2>
//                     <input
//                         type="text"
//                         className="bg-white mx-10 mt-3 h-8 border-[0.3px] shadow-md w-[90%] py-1 px-2 focus:outline-none focus:ring-1"
//                     />
//                 </div>

//                 <div className="flex gap-x-10 ml-10">
//                     <div>
//                         <h2 className="text-md mt-8 font-normal text-text">Tanggal Masuk</h2>
//                         <div className="flex gap-x-8">
//                         <input
//                             type="date"
//                             className="mt-4 py-2 px-5 border-[0.3px] shadow-md"
//                         />
//                         </div>
//                     </div>
//                     <div>
//                         <h2 className="text-md mt-8 font-normal text-text">
//                         Tanggal Selesai
//                         </h2>
//                         <div className="flex gap-x-8">
//                             <div className="flex gap-x-8">
//                                 <input
//                                 type="date"
//                                 className="mt-4 py-2 px-5 border-[0.3px] shadow-md"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//         </div>
 

//             </form>
//         </div>
//       </div>
//     );
//   }
  
//   export default TambahBatch;

import React from "react";
import Header from "./Header";
import HeaderGuru from "./HeaderGuru";

function TambahBatch() {
    return (
        <div>
            <Header></Header>
            <HeaderGuru></HeaderGuru>

            <div>
                <h1 className="text-xl ml-10 mt-8 font-medium text-text">Tambah Batch</h1>
            </div>

            <div className="flex justify-center mt-10  min-h-screen">
                <div className="w-full max-w-lg">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div>
                            <h2 className="text-md mt-8 font-normal text-text">
                                Nama Batch
                            </h2>
                            <input
                                type="text"
                                className="bg-white mt-3 h-8 border-[0.3px] shadow-md w-full py-1 px-2 focus:outline-none focus:ring-1"
                            />
                        </div>

                        <div className="flex gap-x-10 mt-8">
                            <div className="w-1/2">
                                <h2 className="text-md font-normal text-text">Tanggal Masuk</h2>
                                <input
                                    type="date"
                                    className="mt-4 py-2 px-5 border-[0.3px] shadow-md w-full"
                                />
                            </div>
                            <div className="w-1/2">
                                <h2 className="text-md font-normal text-text">
                                    Tanggal Selesai
                                </h2>
                                <input
                                    type="date"
                                    className="mt-4 py-2 px-5 border-[0.3px] shadow-md w-full"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end mt-10 gap-x-4">
                            <a href="/guru/homepage" className="text-text py-2">
                                Batal
                            </a>
                            <button
                                type="submit"
                                className="text-white bg-tombol py-2 px-5 rounded-md"
                            >
                                Tambah Batch
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TambahBatch;
