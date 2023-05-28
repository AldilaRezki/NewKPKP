import React from "react";
import { CgGoogleTasks } from "react-icons/cg";

function BoxDaftarUjian({idMapel}) {
  return (
    <a
      className="flex mx-32 justify-between border-[0.3px] my-10 p-8 shadow-md"
      href={`/guru/mapel/${idMapel}/ujian/ujian-pekan-1`}
    >
      <div className="flex gap-x-12">
        <div className="text-biru bg-tosca w-fit h-fit text-4xl p-1 rounded-full">
          <CgGoogleTasks></CgGoogleTasks>
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-xl">Ujian Pekan 1</h2>
          <div className="flex flex-col gap-y-2">
            <span className="text-slate-700">Nomor soal: 10 nomor</span>
            <span className="text-slate-700">Waktu pengerjaan: 60 menit</span>
          </div>
        </div>
      </div>
      <div>
        <span>Diunggah: Selasa, 30 Februari 2023</span>
      </div>
    </a>
  );
}

export default BoxDaftarUjian;
