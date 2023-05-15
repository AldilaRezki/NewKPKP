import React from "react";

const Opsi = ({ value, onChange }) => {
  const handleOptionChange = (event) => {
    onChange(event.target.value);
  };

  const handleFocus = () => {
    if (value === "Masukkan Opsi") {
      onChange("");
    }
  };

  const handleBlur = () => {
    if (value.trim() === "") {
      onChange("Masukkan Opsi");
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="radio"
        id="radioButton"
        value={value}
        onChange={handleOptionChange}
        className="mr-2"
      />
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={handleOptionChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="border border-gray-300 px-2 py-2 rounded"
        />
        {value.trim() === "" && (
          <span className="absolute left-2 top-2 text-gray-400 pointer-events-none">
            Masukkan Opsi
          </span>
        )}
      </div>
    </div>
  );
};

export default Opsi;

