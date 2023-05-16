import React from "react";

const KotakCentang = ({ value, checked, onChange }) => {
  const handleOptionChange = () => {
    onChange(!checked);
  };

  const handleValueChange = (event) => {
    const inputValue = event.target.value;
    onChange(inputValue, checked);
  };

  const handleFocus = () => {
    if (typeof value !== "string" || value === "Masukkan Opsi") {
      onChange("", checked);
    }
  };

  const handleBlur = () => {
    if (typeof value !== "string" || value.trim() === "") {
      onChange("Masukkan Opsi", checked);
    }
  };

  const displayValue = typeof value === "string" ? value : "";

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="checkbox"
        checked={checked}
        onChange={handleOptionChange}
        className="mr-2"
      />
      <div className="relative">
        <input
          type="text"
          value={displayValue}
          onChange={handleValueChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="border border-gray-300 px-2 py-2 rounded"
        />
        {displayValue.trim() === "" && (
          <span className="absolute left-2 top-2 text-gray-400 pointer-events-none">
            Masukkan Opsi
          </span>
        )}
      </div>
    </div>
  );
};

export default KotakCentang;
