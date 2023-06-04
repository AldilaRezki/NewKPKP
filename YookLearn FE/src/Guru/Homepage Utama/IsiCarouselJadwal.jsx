import React from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import KelasJadwalAjar from "./KelasJadwalAjar";

function IsiCarouselJadwal() {
  return (
    <div>
      <div className="hari">
        <div className="bg-white flex w-fit gap-x-7 py-3 px-3">
          <button className="mt-[5px]">
            <GrPrevious />
          </button>
          <h2>Senin, 23 Maret 2023</h2>
          <button className="mt-[5px]">
            <GrNext />
          </button>
        </div>
      </div>
      <div className="my-4">
        <KelasJadwalAjar></KelasJadwalAjar>
        <KelasJadwalAjar></KelasJadwalAjar>
      </div>
    </div>
  );
}

export default IsiCarouselJadwal;
