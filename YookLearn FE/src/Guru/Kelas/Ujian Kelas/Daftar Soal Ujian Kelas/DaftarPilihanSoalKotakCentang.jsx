import React from "react";
import { BsSquare } from "react-icons/bs";

function DaftarPilihanSoalKotakCentang({ labeltextKotakCentang, tipeOpsi }) {
  return (
    <div>
      <div className="flex gap-x-6 bg-white border-[0.3px] py-4 px-5 shadow-md mt-3">
        <input
          type="checkbox"
          name=""
          id=""
          checked={tipeOpsi === "benar"}
          readOnly
        />
        <label htmlFor="">{labeltextKotakCentang}</label>
      </div>
    </div>
  );
}

export default DaftarPilihanSoalKotakCentang;
