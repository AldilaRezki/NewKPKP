import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { submitNilaiUjian } from "../../../services/GuruAPI";

function TambahPoinUjian({ visible, onClose, nilai, idSiswa, idUjian, setDataPoin }) {
  if (!visible) return null;

  const [poin, setPoin] = useState(nilai);

  const handleSubmit = async () => {
    const success = await submitNilaiUjian(idUjian, idSiswa, poin);

    if (success) {
      setDataPoin(poin);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white w-[480px] flex flex-col gap-y-7">
        <div className="flex py-3 border-b-4">
          <span className="mx-auto">Tambah Poin</span>
          <button className="flex my-auto mr-8" onClick={onClose}>
            <RxCross2></RxCross2>
          </button>
        </div>
        <div className="flex flex-col gap-y-4">
          <label className="flex align-center justify-center">Poin Tugas</label>
          <input
            type="number"
            id=""
            name=""
            value={poin}
            onChange={(e) => setPoin(e.target.value)}
            className="w-[50%] mx-auto bg-white outline-none appearance-none focus:border-indigo-600 flex py-2 pl-5 border-[0.3px] shadow-md"
            max={100}
            min={nilai}
          />
          <button
            className="mt-6 py-2 px-5 bg-biru text-white w-fit mx-auto rounded-sm mb-8"
            onClick={handleSubmit}
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}

export default TambahPoinUjian;
