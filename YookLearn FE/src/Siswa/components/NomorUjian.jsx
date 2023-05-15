import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NomorUjian() {
  const navigate = useNavigate();
  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleNumberClick = (number) => {
    setSelectedNumber(number);
    navigate(`/otherpage/${number}`);
  };

  const renderNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= 30; i++) {
      const isSelected = selectedNumber === i;
      numbers.push(
        <div
          key={i}
          className={`${
            isSelected ? "bg-green" : "bg-gray-300"
          } text-white w-[50px] h-[50px] flex items-center justify-center font-bold cursor-pointer`}
          onClick={() => handleNumberClick(i)}
        >
          {i.toString().padStart(2, "0")}
        </div>
      );
    }
    return numbers;
  };

  return (
    <>
      <div className="w-[333px] h-[425px] bg-tosca">
        <h1 className="text-biru font-bold px-4 py-4">Nomor Soal</h1>
        <hr className="border-t border-[#1A1F5A]" />
        <div className="grid grid-cols-5 gap-2 mt-[11px] ml-[11px]">
          {renderNumbers()}
        </div>
      </div>
    </>
  );
}

export default NomorUjian;
