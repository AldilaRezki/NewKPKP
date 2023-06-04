import React from "react";
import { BsCircle } from "react-icons/bs";

function DaftarPilihanSoalPilihanGanda({ labelTextPilihanGanda, tipeOpsi }) {
  return (
    <div>
      <div className="flex gap-x-6 bg-white border-[0.3px] py-4 px-5 shadow-md mt-3">
        <input
          type="radio"
          name=""
          id=""
          checked={tipeOpsi === "benar"}
          readOnly
        />
        <label htmlFor="">{labelTextPilihanGanda}</label>
      </div>
    </div>
  );
}

export default DaftarPilihanSoalPilihanGanda;
