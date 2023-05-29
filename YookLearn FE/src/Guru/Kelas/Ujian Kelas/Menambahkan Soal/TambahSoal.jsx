import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Header from "../../../Header";
import HeaderGuru from "../../../HeaderGuru";
import HeaderKelas from "../../HeaderKelas";
import Opsi from "./Opsi";
import KotakCentang from "./KotakCentang";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function TambahSoal() {
    const { idMapel } = useParams();
    const [formList, setFormList] = useState([{pertanyaan: '', selectedOption: 'pilgan', opsiList: [], kotakCentangList: []}])

    const handleChange = (formIndex, e) => {
        const { name, value } = e.target;
        const updatedFormList = [...formList];
        updatedFormList[formIndex][name] = value;
        setFormList(updatedFormList);
    };

    const handleSelectChange = (formIndex, e) => {
        const value = e.target.value;
        const updatedFormList = [...formList];
        updatedFormList[formIndex].selectedOption = value;
        setFormList(updatedFormList);
    };

    const handleOpsiChange = (formIndex, opsiIndex, value) => {
        const updatedFormList = [...formList];
        updatedFormList[formIndex].opsiList[opsiIndex] = value;
        setFormList(updatedFormList);
    };

    const handleKotakCentangChange = (formIndex, kotakCentangIndex, value, checked) => {
        const updatedFormList = [...formList];
        updatedFormList[formIndex].kotakCentangList[kotakCentangIndex] = { value, checked };
        setFormList(updatedFormList);
    };

    const handleAddQuestion = () => {
        const updatedFormList = [...formList];
        updatedFormList.push({ pertanyaan: "", selectedOption: "pilgan", opsiList: [], kotakCentangList: [] });
        setFormList(updatedFormList);
    };

    const handleRemoveQuestion = (formIndex) => {
        const updatedFormList = [...formList];
        updatedFormList.splice(formIndex, 1);
        setFormList(updatedFormList);
    };

  return (
    <div>
        <Header></Header>
        <HeaderGuru></HeaderGuru>
        <HeaderKelas idMapel={idMapel}></HeaderKelas>
        <form>
            {formList.map((form, formIndex) => (
                <div className="mt-10" key={formIndex}>
                    <div>
                        <span className="text-xl ml-10 font-medium text-biru">{formIndex + 1}.</span>
                    </div>
                    <div className="bg-tosca mx-10 mt-5 pb-5">
                    <div className="flex justify-between">
                        <div className="w-full ml-8 mr-16 mt-8">
                            <span>Pertanyaan</span>
                            <ReactQuill
                                className="mt-8 mx-0 h-30 bg-white"
                                value={form.pertanyaan}
                                onChange={e => handleChange(formIndex, e)}
                            />
                        </div>
                        <div className="mr-10 flex flex-col gap-y-5 mt-8">
                            <div>
                                <span>Jenis Pertanyaan</span>
                                    <select
                                        name=""
                                        id=""
                                        className="w-[210px] bg-white outline-none appearance-none focus:border-indigo-600 flex py-2 pl-5 border-[0.3px] shadow-md mt-4"
                                        onChange={(e) => handleSelectChange(formIndex, e)}
                                        value={form.selectedOption}
                                    >
                                        <option value="pilgan">Pilihan Ganda</option>
                                        <option value="kotakcentang">Kotak Centang</option>
                                        <option value="essai">Essai</option>
                                        
                                    </select>
                            </div>
                            <div>
                                <span>Lampiran</span>
                                    <div className="w-fit mt-4">
                                        <input type="file" />
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-24 mt-8">
                        <div className="flex flex-col gap-y-3">
                            <div className="ml-8 flex gap-x-8">
                                <span>Jawaban</span>
                                {form.selectedOption === "pilgan" && (
                                    <div className="container flex gap-x-8">
                                        <div className='flex flex-col gap-y-5'>
                                            {form.opsiList.map((opsi, opsiIndex) => (
                                                <Opsi
                                                key={opsiIndex}
                                                value={opsi}
                                                onChange={(value) => handleOpsiChange(formIndex, opsiIndex, value)}
                                                />
                                            ))}
                                        </div>
                                        <p className='text-bitu cursor-pointer flex items-end, mb-2'
                                        onClick={() => handleOpsiChange(formIndex, form.opsiList.length, "")}>Masukkan Opsi</p>
                                    </div>
                                )}
                                {form.selectedOption === "kotakCentang" && (
                                    <div className="container flex gap-x-8">
                                        <div className='flex flex-col gap-y-5'>
                                            {form.kotakCentangList.map((kotakCentang, kotakCentangIndex) => (
                                                <div className=''>
                                                    <Opsi
                                                    key={kotakCentangIndex}
                                                    value={kotakCentang.value}
                                                    checked={kotakCentang.checked}
                                                    onChange={(value, checked) => handleKotakCentangChange(formIndex, kotakCentangIndex, value, checked)}
                                                    />  
                                                </div>
                                            ))}
                                        </div>
                                        <p className='text-bitu cursor-pointer flex items-end, mb-2'
                                        onClick={() => handleKotakCentangChange(formIndex, form.kotakCentangList.length, "", false)}>Masukkan Opsi</p>
                                    </div>
                                )}
                                {form.selectedOption === "essai" && (
                                    <div className="flex gap-x-8 w-[600px] overflow-hidden">
                                    <ReactQuill
                                        className=" h-30 w-[600px] bg-white"
                                        value=""
                                        onChange=""
                                    />
                                </div>            
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <span>Poin Soal</span>
                            <input
                                type="number"
                                min={0}
                                max={100}
                                className="bg-white outline-none appearance-none focus:border-indigo-600 flex py-2 pl-5 w-fit border-[0.3px] shadow-md"
                            />
                        </div>
                    </div>
                    <div className="flex gap-x-6 mt-4 justify-end mr-8">
                        <button
                        onClick={() => handleRemoveQuestion(formIndex)}
                        className= "text-biru my-auto"> Hapus Pertanyaan
                        </button>
                    </div>
                </div>
            </div>
            ))}
            <div className="flex gap-x-6 mt-10 mb-10 justify-end mr-10">
                <button className="text-white bg-biru py-2 px-3 rounded-lg" onClick={handleAddQuestion}>
                    Tambah Soal
                </button>
                <a href={`/guru/mapel/${idMapel}/tambah-ujian`} className="text-white bg-biru py-2 px-3 rounded-lg">
                    Batal
                </a>
                <a href="" className="text-white bg-biru py-2 px-3 rounded-lg">
                    Kirim
                </a>
            </div>      
        </form>
    </div>
  )
}

export default TambahSoal


















// import React, { useState } from "react";
// import HeaderGuru from "../../../HeaderGuru";
// import HeaderKelas from "../../HeaderKelas";
// import KotakCentang from "./KotakCentang";
// import Form from "../../../Form";
// import Opsi from "./Opsi";
// import Header from "../../../Header";
// import { useParams } from "react-router-dom";

// function TambahSoal() {
//   const { idMapel } = useParams();
//   const [opsiList, setOpsiList] = useState([]);
//   const [kotakCentangList, setKotakCentangList] = useState([]);

//   const handleAddOpsi = () => {
//     setOpsiList([...opsiList, ""]);
//   };

//   const handleOpsiChange = (index, value) => {
//     const updatedOpsiList = [...opsiList];
//     updatedOpsiList[index] = value;
//     setOpsiList(updatedOpsiList);
//   };

//   const handleAddKotakCentang = () => {
//     setKotakCentangList([...kotakCentangList, { value: "", checked: false }]);
//   };

//   // Inside the handleKotakCentangChange function
//   const handleKotakCentangChange = (index, value, checked) => {
//     const updatedKotakCentangList = [...kotakCentangList];
//     updatedKotakCentangList[index].value = value;
//     updatedKotakCentangList[index].checked = checked;
//     setKotakCentangList(updatedKotakCentangList);
//   };

//   return (
//     <div>
//       <Header></Header>
//       <HeaderGuru></HeaderGuru>
//       <HeaderKelas idMapel={idMapel}></HeaderKelas>

//       <h1 className="text-xl mt-8 ml-10 font-medium text-biru">Tambah Soal</h1>

//       <form>
//       <div className="mt-10">
//         <div>
//           <span className="text-xl ml-10 font-medium text-biru">1.</span>
//         </div>
//         <div className="bg-tosca mx-10 mt-5 pb-5">
//           <div className="flex justify-between">
//             <div className="w-full ml-8 mr-16 mt-8">
//               <span>Pertanyaan</span>
//               <Form mx="mx-0"></Form>
//             </div>
//             <div className="mr-10 flex flex-col gap-y-5 mt-8">
//               <div>
//                 <span>Jenis Pertanyaan</span>
//                   <select
//                     name=""
//                     id=""
//                     className="w-[210px] bg-white outline-none appearance-none focus:border-indigo-600 flex py-2 pl-5 border-[0.3px] shadow-md mt-4"
//                   >
//                     <option value="">Pilihan Ganda</option>
//                     <option value="">Kotak Centang</option>
//                     <option value="">Essai</option>
//                   </select>
//               </div>
//               <div>
//                 <span>Lampiran</span>
//                 <div className="w-fit mt-4">
//                   <input type="file" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex gap-x-24 mt-8">
//             <div className="ml-8 flex flex-col gap-y-3">
//               <span>Jawaban</span>
//               <div className="container flex gap-x-8">
//                 <div className="flex flex-col gap-y-5">
//                   {opsiList.map((opsi, index) => (
//                     <Opsi
//                       key={index}
//                       value={opsi}
//                       onChange={(value) => handleOpsiChange(index, value)}
//                     />
//                   ))}
//                 </div>

//                 <p
//                   className="text-biru cursor-pointer flex items-end mb-2"
//                   onClick={handleAddOpsi}
//                 >
//                   Tambahkan Opsi
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col gap-y-2">
//               <span>Poin Soal</span>
//               <input
//                 type="number"
//                 min={0}
//                 max={100}
//                 className="bg-white outline-none appearance-none focus:border-indigo-600 flex py-2 pl-5 w-fit border-[0.3px] shadow-md"
//               />
//             </div>
//           </div>
//           <div className="flex gap-x-6 mt-4 justify-end mr-8">
//             <a href="" className="text-biru my-auto">
//               Hapus
//             </a>
//             <a href="" className="text-white bg-biru py-2 px-3 rounded-lg">
//               Tambah
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="mt-10">
//         <div>
//           <span className="text-xl ml-10 font-medium text-biru">2.</span>
//         </div>
//         <div className="bg-tosca mx-10 mt-5 pb-5">
//           <div className="flex justify-between">
//             <div className="w-full ml-8 mr-16 mt-8">
//               <span>Pertanyaan</span>
//               <Form mx="mx-0"></Form>
//             </div>
//             <div className="mr-10 flex flex-col gap-y-5 mt-8">
//               <div>
//                 <span>Jenis Pertanyaan</span>
//                   <select
//                     name=""
//                     id=""
//                     className="bg-white outline-none appearance-none focus:border-indigo-600 flex py-2 pl-5 w-[210px] border-[0.3px] shadow-md mt-4"
//                   >
//                     <option value="">Pilihan Ganda</option>
//                     <option value="">Kotak Centang</option>
//                     <option value="">Essai</option>
//                   </select>
//               </div>
//               <div>
//                 <span>Lampiran</span>
//                 <div className="w-fit mt-4">
//                   <input type="file" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex gap-x-24 mt-8">
//             <div className="ml-8 flex flex-col gap-y-3">
//               <span>Jawaban</span>
//               <div className="container flex gap-x-8">
//                 <div className="flex flex-col gap-y-5">
//                   {kotakCentangList.map((kotakCentang, index) => (
//                     <KotakCentang
//                       key={index}
//                       value={kotakCentang.value}
//                       checked={kotakCentang.checked}
//                       onChange={(value, checked) =>
//                         handleKotakCentangChange(index, value, checked)
//                       }
//                     />
//                   ))}
//                 </div>

//                 <p
//                   className="text-biru cursor-pointer flex items-end mb-2"
//                   onClick={handleAddKotakCentang}
//                 >
//                   Tambahkan Opsi
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col gap-y-2">
//               <span>Poin Soal</span>
//               <input
//                 type="number"
//                 min={0}
//                 max={100}
//                 className="bg-white outline-none appearance-none focus:border-indigo-600 flex py-2 pl-5 w-fit border-[0.3px] shadow-md"
//               />
//             </div>
//           </div>
//           <div className="flex gap-x-6 mt-4 justify-end mr-8">
//             <a href="" className="text-biru my-auto">
//               Hapus
//             </a>
//             <a href="" className="text-white bg-biru py-2 px-3 rounded-lg">
//               Tambah
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="mt-10">
//         <div>
//           <span className="text-xl ml-10 font-medium text-biru">3.</span>
//         </div>
//         <div className="bg-tosca mx-10 mt-5 pb-5">
//           <div className="flex justify-between">
//             <div className="w-full ml-8 mr-16 mt-8">
//               <span>Pertanyaan</span>
//               <Form mx="mx-0"></Form>
//             </div>
//             <div className="mr-10 flex flex-col gap-y-5 mt-8">
//               <div>
//                 <span>Jenis Pertanyaan</span>
//                   <select
//                     name=""
//                     id=""
//                     className="bg-white outline-none appearance-none focus:border-indigo-600 flex py-2 pl-5 w-[210px] border-[0.3px] shadow-md mt-4"
//                   >
//                     <option value="">Pilihan Ganda</option>
//                     <option value="">Kotak Centang</option>
//                     <option value="">Essai</option>
//                   </select>
//               </div>
//               <div>
//                 <span>Lampiran</span>
//                 <div className="w-fit mt-4">
//                   <input type="file" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex gap-x-24 mt-8">
//             <div className="ml-8 flex flex-col gap-y-2 w-[600px]">
//               <span>Jawaban</span>
//               <div className="container flex gap-x-8 w-[600px]">
//                 <Form mx="mx-0" width="w-[600px]"></Form>
//               </div>
//             </div>
//             <div className="flex flex-col gap-y-2">
//               <span>Poin Soal</span>
//               <input
//                 type="number"
//                 min={0}
//                 max={100}
//                 className="bg-white outline-none appearance-none focus:border-indigo-600 flex py-2 pl-5 w-fit border-[0.3px] shadow-md"
//               />
//             </div>
//           </div>
//           <div className="flex gap-x-6 mt-4 justify-end mr-8">
//             <a href="" className="text-biru my-auto">
//               Hapus
//             </a>
//             <a href="" className="text-white bg-biru py-2 px-3 rounded-lg">
//               Tambah
//             </a>
//           </div>
//         </div>
//       </div>
//       </form>
//     </div>
//   );
// }

// export default TambahSoal;
