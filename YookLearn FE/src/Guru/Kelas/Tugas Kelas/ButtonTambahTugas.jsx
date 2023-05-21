import React, { useRef } from "react";

function ButtonTambahTugas({ onFileUpload }) {
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    const file = fileInputRef.current.files[0];
    onFileUpload(file);
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileUpload}
      />

      <button
        type="button"
        className="py-2 px-10 w-fit border-[0.3px] shadow-md ml-10 mt-4"
        onClick={() => fileInputRef.current.click()}
      >
        Pilih File
      </button>
    </div>
  );
}

export default ButtonTambahTugas;
