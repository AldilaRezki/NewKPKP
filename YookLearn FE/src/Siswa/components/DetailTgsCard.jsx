import React from "react";
import { MdTask } from "react-icons/md";
import FileUploadButton from "./FileUploadButton";

function DetailTgsCard() {
  const handleFileUpload = (file) => {
    // Handle the uploaded file
    console.log(file);
  };
  return (
    <>
      <div>
        <div className="flex flex-row items-center mt-[75px] ml-[103px]">
          <MdTask className="rounded-full bg-[#EEF4FA] text-[#1A1F5A] text-5xl p-2 align-middle"></MdTask>
          <h1 className="font-bold text-[#1A1F5A] ml-10"> Tugas 1 </h1>
          <h1 className="text-slate-400 font-bold ml-60">
            Tenggat: 11 Maret 2023, 23.59
          </h1>
        </div>
        <hr className="border-t border-[#1A1F5A] w-[798px] ml-[103px] mt-4"></hr>
        <div className=" ml-[103px] mt-2">
          <h1 className="text-[#1A1F5A] font-bold">Detail :</h1>
          <p className="text-[#1A1F5A] mt-2">
            Buatlah makalah tentang Lorem Ipsum
          </p>
          <p className="text-[#1A1F5A] w-[770px] mt-3">
            Dikumpul hanya melalui LMS dan paling lambat tanggal 19 Maret 2023,
            batas akhir upload closed pukul 14.00 WITA. selamat bekerja.
          </p>
        </div>
        <hr className="border-t border-[#1A1F5A] w-[798px] ml-[103px] mt-6"></hr>
      </div>
      <div className="flex justify-center mt-6">
        <FileUploadButton onFileUpload={handleFileUpload} />
      </div>
    </>
  );
}

export default DetailTgsCard;
