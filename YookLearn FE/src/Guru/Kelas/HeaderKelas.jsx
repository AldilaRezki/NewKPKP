import { useEffect, useState } from "react";
import { fetchCurrentMapel, fetchMapel } from "../services/GuruAPI";

function HeaderKelas({ dataMapel }) {
  return (
    <div className="flex justify-between items-center py-4 px-10 bg-text w-full">
      <h1 className="text-lg font-semibold text-white hidden sm:block md:w-auto">
        {/* {dataMapel.nama_matpel} */}
        Batch 1
      </h1>
      <ul className="flex justify-between w-full text-white sm:w-4/12 sm:mr-10 sm:gap-x-4">
        <li className="flex-1 text-center"><a href={`/guru/mapel/${dataMapel.id}`}>Home</a></li>
        <li className="flex-1 text-center"><a href={`/guru/mapel/${dataMapel.id}/daftar-materi`}>Materi</a></li>
        <li className="flex-1 text-center"><a href={`/guru/mapel/${dataMapel.id}/ujian`}>Ujian</a></li>
        <li className="flex-1 text-center"><a href={`/guru/mapel/${dataMapel.id}/daftar-anggota-kelas`}>Anggota</a></li>
      </ul>
    </div>
  );
}

export default HeaderKelas;
