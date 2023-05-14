import React, { useEffect, useState } from "react";
import { MdTask } from "react-icons/md";
import { fetchCurrentTugas } from "../services/api";

function DetailTgsCard({ idTugas }) {
  const [dataTugas, setDataTugas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCurrentTugas(idTugas);
      setDataTugas(data);
      setIsLoading(false);
    }
    fetchData(idTugas);
  }, []);

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
      <div className="flex justify-center mt-6">
        <button className="bg-[#1A1F5A] text-white py-5 px-10 rounded-md hover:bg-[#303371]">
          + Upload Tugas
        </button>
      </div>
    </>
  );
}

export default DetailTgsCard;
