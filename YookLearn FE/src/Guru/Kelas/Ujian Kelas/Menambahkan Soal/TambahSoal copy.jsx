import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../Header";
import HeaderGuru from "../../../HeaderGuru";
import HeaderKelas from "../../HeaderKelas";
import Opsi from "./Opsi";
import KotakCentang from "./KotakCentang";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import LoadingPage from "../../../../Siswa/pages/LoadingPage";
import { fetchCurrentMapel } from "../../../services/GuruAPI";

// function TambahSoal() {
//   const { idMapel } = useParams();

//   const [dataMapel, setMapel] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const data = await fetchCurrentMapel(idMapel);
//       setMapel(data);
//       setIsLoading(false);
//     }
//     fetchData();
//   }, []);

//   const [opsiList, setOpsiList] = useState([]);
//   const [kotakCentangList, setKotakCentangList] = useState([]);
//   const [selectedOption, setSelectedOption] = useState("pilgan");

//   const handleAddOpsi = () => {
//     setOpsiList([...opsiList, ""]);
//   };

//   const handleOpsiChange = (index, value) => {
//     const updatedOpsiList = [...opsiList];
//     updatedOpsiList[index] = value;
//     setOpsiList(updatedOpsiList);

//     const newFormList = [...formList];
//     newFormList[index].jawaban = updatedOpsiList.filter(
//       (opsi) => opsi.trim() !== ""
//     );
//     setFormList(newFormList);
//   };

//   const handleAddKotakCentang = () => {
//     setKotakCentangList([...kotakCentangList, { value: "", checked: false }]);
//   };

//   const handleKotakCentangChange = (index, value, checked) => {
//     const updatedKotakCentangList = [...kotakCentangList];
//     updatedKotakCentangList[index] = { value, checked };
//     setKotakCentangList(updatedKotakCentangList);

//     const newFormList = [...formList];
//     newFormList[index].jawaban = updatedKotakCentangList
//       .filter((kotakCentang) => kotakCentang.value.trim() !== "")
//       .map((kotakCentang) => ({
//         value: kotakCentang.value,
//         isKey: kotakCentang.checked,
//       }));
//     setFormList(newFormList);
//   };

//   const [formList, setFormList] = useState([
//     { pertanyaan: "", jenis: "pilgan", jawaban: [], poin: 0 },
//   ]);

//   const handleChange = (i, name, value) => {
//     const newFormList = [...formList];
//     newFormList[i][name] = value;
//     setFormList(newFormList);
//   };

//   const handleSelectChange = (e, i) => {
//     const value = e.target.value;
//     const newFormList = [...formList];
//     newFormList[i].jenis = value;
//     setFormList(newFormList);
//   };

//   const addFormList = () => {
//     const newFormList = [
//       ...formList,
//       { pertanyaan: "", jenis: "pilgan", jawaban: [], poin: 0 },
//     ];
//     setFormList(newFormList);
//   };

//   const handleRemoveFormList = (i) => {
//     const newFormList = [...formList];
//     newFormList.splice(i, 1);
//     setFormList(newFormList);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formattedData = formList.map((form) => {
//       const { pertanyaan, jenis, jawaban, poin } = form;
//       let formattedJawaban;
//       let formattedKunci;

//       if (jenis === "essai") {
//         formattedJawaban = jawaban;
//       } else if (jenis === "pilgan") {
//         formattedJawaban = jawaban.map((opsi, index) => {
//           return {
//             value: opsi,
//             isKey: index === 0,
//           };
//         });

//         const kunci = formattedJawaban.findIndex((opsi) => opsi.isKey);
//         formattedKunci = kunci >= 0 ? kunci : null;
//       } else if (jenis === "kotakcentang") {
//         formattedJawaban = jawaban.map((kotakCentang) => {
//           return {
//             value: kotakCentang.value,
//             isKey: kotakCentang.checked,
//           };
//         });

//         const kunci = formattedJawaban.reduce((acc, kotakCentang, index) => {
//           if (kotakCentang.isKey) {
//             acc.push(index);
//           }
//           return acc;
//         }, []);
//         formattedKunci = kunci.length > 0 ? kunci : null;
//       }

//       return {
//         pertanyaan,
//         jenis,
//         jawaban: formattedJawaban,
//         kunci: formattedKunci,
//         poin,
//       };
//     });

//     console.log(formattedData);
//   };

//   const renderJawabanSection = (index) => {
//     const currentOption = formList[index].jenis;
//     if (currentOption === "pilgan") {
//       return (
//         <div className="ml-8 flex flex-col gap-y-3">
//           <span>Jawaban</span>
//           <div className="container flex gap-x-8">
//             <div className="flex flex-col gap-y-5">
//               {opsiList.map((opsi, index) => (
//                 <Opsi
//                   key={index}
//                   value={opsi}
//                   onChange={(value) => handleOpsiChange(index, value)}
//                 />
//               ))}
//             </div>
//             <p
//               className="text-text cursor-pointer flex items-end mb-2"
//               onClick={handleAddOpsi}
//             >
//               Tambahkan Opsi
//             </p>
//           </div>
//         </div>
//       );
//     } else if (currentOption === "kotakcentang") {
//       return (
//         <div className="ml-8 flex flex-col gap-y-3">
//           <span>Jawaban</span>
//           <div className="container flex gap-x-8">
//             <div className="flex flex-col gap-y-5">
//               {kotakCentangList.map((kotakCentang, index) => (
//                 <KotakCentang
//                   key={index}
//                   value={kotakCentang.value}
//                   checked={kotakCentang.checked}
//                   onChange={(value, checked) =>
//                     handleKotakCentangChange(index, value, checked)
//                   }
//                 />
//               ))}
//             </div>
//             <p
//               className="text-text cursor-pointer flex items-end mb-2"
//               onClick={handleAddKotakCentang}
//             >
//               Tambahkan Opsi
//             </p>
//           </div>
//         </div>
//       );
//     } else if (currentOption === "essai") {
//       return (
//         <div className="ml-8 flex flex-col gap-y-2 w-[600px]">
//           <span>Jawaban</span>
//           <div className="flex gap-x-8 w-[600px] overflow-hidden">
//             <ReactQuill
//               className="h-30 w-[600px] bg-white"
//               value={formList[index].jawaban}
//               onChange={(value) => handleChange(index, "jawaban", value)}
//             />
//           </div>
//         </div>
//       );
//     }
//   };

//   const [isLoading, setIsLoading] = useState(true);
//   if (isLoading) {
//     return <LoadingPage />;
//   }
//   return (
//     <div>
//       <Header></Header>
//       <HeaderGuru></HeaderGuru>
//       <HeaderKelas dataMapel={dataMapel}></HeaderKelas>
//       <form onSubmit={handleSubmit}>
//         {formList.map((element, index) => (
//           <div className="mt-10" key={index}>
//             <div>
//               <span className="text-xl ml-10 font-medium text-text">
//                 {index + 1}.
//               </span>
//             </div>
//             <div className="bg-tosca mx-10 mt-5 pb-5">
//               <div className="flex justify-between">
//                 <div className="w-full ml-8 mr-16 mt-8">
//                   <span>Pertanyaan</span>
//                   <ReactQuill
//                     className="mt-8 mx-0 h-30 bg-white"
//                     value={element.pertanyaan}
//                     onChange={(value) =>
//                       handleChange(index, "pertanyaan", value)
//                     }
//                   />
//                 </div>
//                 <div className="mr-10 flex flex-col gap-y-5 mt-8">
//                   <div>
//                     <span>Jenis Pertanyaan</span>
//                     <select
//                       name=""
//                       id=""
//                       className="w-[210px] bg-white outline-none appearance-none focus:border-indigo-600 flex py-2 pl-5 border-[0.3px] shadow-md mt-4"
//                       onChange={(e) => handleSelectChange(e, index)}
//                       value={element.jenis}
//                     >
//                       <option value="pilgan">Pilihan Ganda</option>
//                       <option value="kotakcentang">Kotak Centang</option>
//                       <option value="essai">Essai</option>
//                     </select>
//                   </div>
//                   <div>
//                     <span>Lampiran</span>
//                     <div className="w-fit mt-4">
//                       <input type="file" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex gap-x-24 mt-8">
//                 <div className="flex flex-col gap-y-3">
//                   <div className=" flex gap-x-8">
//                     {renderJawabanSection(index)}
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-y-2">
//                   <span>Poin Soal</span>
//                   <input
//                     type="number"
//                     min={0}
//                     max={100}
//                     className="bg-white outline-none appearance-none focus:border-indigo-600 flex py-2 pl-5 w-fit border-[0.3px] shadow-md"
//                     value={element.poin}
//                     onChange={(e) =>
//                       handleChange(index, "poin", e.target.value)
//                     }
//                   />
//                 </div>
//               </div>
//               <div className="flex gap-x-6 mt-4 justify-end mr-8">
//                 {index ? (
//                   <button
//                     className="text-text my-auto"
//                     onClick={() => handleRemoveFormList(index)}
//                   >
//                     Hapus
//                   </button>
//                 ) : (
//                   <div style={{ width: "66px" }} />
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//         <div className="flex gap-x-6 mt-10 mb-10 justify-end mr-10">
//           <button
//             className="text-white bg-biru py-2 px-3 rounded-lg"
//             onClick={() => addFormList()}
//           >
//             Tambah Soal
//           </button>
//           <button className="text-ungu" type="submit">
//             Simpan Soal
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default TambahSoal;
