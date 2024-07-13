import React from "react";
import { CgGoogleTasks } from "react-icons/cg";

function BoxDaftarUjian({ idMapel, dataUjian }) {
  return (
    <div>
      <a
        className="flex mx-32 justify-between border-[0.3px] my-10 p-8 shadow-md"
        href={`/guru/mapel/${idMapel}/ujian/ujian-pekan-1`}
      >
        <div className="flex gap-x-12">
          <div className="text-text bg-tosca w-fit h-fit text-4xl p-1 rounded-full">
            <CgGoogleTasks className="text-white"></CgGoogleTasks>
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
      {dataUjian.map((ujian) => (
        <a
          key={ujian.id}
          className="flex mx-32 justify-between border-[0.3px] my-10 p-8 shadow-md"
          href={`/guru/mapel/${idMapel}/ujian/${ujian.id}`}
        >
          <div className="flex gap-x-12">
            <div className="text-text bg-tosca w-fit h-fit text-4xl p-1 rounded-full">
              <CgGoogleTasks className="text-white"></CgGoogleTasks>
            </div>
            <div className="flex flex-col gap-y-4">
              <h2 className="text-xl">{ujian.judul_ujian}</h2>
              <div className="flex flex-col gap-y-2">
                <span className="text-slate-700">
                  Nomor soal: {ujian.jumlah_soal} nomor
                </span>
                <span className="text-slate-700">
                  Waktu pengerjaan: {ujian.waktu}
                </span>
              </div>
            </div>
          </div>
          <div>
            <span>Diunggah: {ujian.created_at}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default BoxDaftarUjian;
