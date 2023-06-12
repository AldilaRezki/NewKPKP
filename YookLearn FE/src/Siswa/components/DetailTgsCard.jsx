import React, { useEffect, useState, useRef } from "react";
import { MdTask } from "react-icons/md";
import FileUploadButton from "./FileUploadButton";
import { fetchCurrentTugas, uploadFile } from "../services/SiswaAPI";
import { useNavigate } from "react-router-dom";

export default function DetailTgsCard({
  idKelas,
  idMapel,
  idTugas,
  dataTugas,
}) {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleFileUpload = async () => {
    const file = fileInputRef.current.files[0];
    const result = await uploadFile(file, idTugas);

    if (result.success) {
      navigate(`/siswa/kelas/${idKelas}/detailkelas/${idMapel}/tugas`);
    }
  };

  return (
    <>
      <div>
        <div className="flex flex-row items-center mt-[75px] ml-[103px]">
          <MdTask className="rounded-full bg-[#EEF4FA] text-[#1A1F5A] text-5xl p-2 align-middle"></MdTask>
          <h1 className="font-bold text-[#1A1F5A] ml-10">
            {" "}
            {dataTugas.judul_tugas}{" "}
          </h1>
          <h1 className="text-slate-400 font-bold ml-60">
            Tenggat: {dataTugas.deadline}
          </h1>
        </div>
        <hr className="border-t border-[#1A1F5A] w-[798px] ml-[103px] mt-4"></hr>
        <div className=" ml-[103px] mt-2">
          <h1 className="text-[#1A1F5A] font-bold">Detail :</h1>
          <p className="text-[#1A1F5A] w-[770px] mt-3">
            {dataTugas.detail_tugas}
          </p>
        </div>
        <hr className="border-t border-[#1A1F5A] w-[798px] ml-[103px] mt-6"></hr>
      </div>
      <div className="ml-[103px]">
        <h1 className=" font-bold text-biru mt-5">Pengumpulan Tugas</h1>
        <table className="border-collapse border border-biru mt-5 text-biru ">
          <thead>
            <tr>
              <th className="border border-biru p-2 w-[200px] "> File </th>
              <th className="border border-biru p-2 w-[250px]">
                {" "}
                Tanggal Upload
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-biru p-2">tugas1.pdf</td>
              <td className="border border-biru p-2">2023-05-05</td>
            </tr>
            <tr>
              <td className="border border-biru p-2">tugas1.ipynb</td>
              <td className="border border-biru p-2">2023-05-05</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-6">
        <div>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileUpload}
          />

          <button
            type="button"
            className="bg-[#1A1F5A] text-white py-5 px-10 rounded-md hover:bg-[#303371]"
            onClick={() => fileInputRef.current.click()}
          >
            + Upload Tugas
          </button>
        </div>
      </div>
    </>
  );
}
