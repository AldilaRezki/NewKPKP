import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

function JadwalHari() {
  return (
    <div className="bg-white flex w-fit gap-x-7 py-3 px-3">
      <button className="mt-[5px]">
        <GrPrevious />
      </button>
      <h2>Senin, 23 Maret 2023</h2>
      <button className="mt-[5px]">
        <GrNext />
      </button>
    </div>
  );
}

export default JadwalHari;
