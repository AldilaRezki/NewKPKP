import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";

function BoxDaftarMateri({ idMapel, idMateri, judulMateri, uploadMateri }) {
  return (
    <a href={`/guru/mapel/${idMapel}/materi/${idMateri}/isi-materi`}>
      <div className="flex justify-between border-[0.3px] my-10 p-8 shadow-md md:mx-40 mx-10">
        <div className="flex gap-x-4 px-8">
          <div className="bg-tosca text-xl p-3 rounded-full my-auto">
            <IoDocumentTextOutline className="text-white"></IoDocumentTextOutline>
          </div>
          <span className="p-3 text-xl text-text">{judulMateri}</span>
        </div>
        <div className="py-2 px-7">
          <span className="opacity-80">Diunggah: {uploadMateri}</span>
        </div>
      </div>
    </a>
  );
}

export default BoxDaftarMateri;
