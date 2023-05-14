import React, { useRef } from "react";

function FileUploadButton({ onFileUpload }) {
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
        className="bg-[#1A1F5A] text-white py-5 px-10 rounded-md hover:bg-[#303371]"
        onClick={() => fileInputRef.current.click()}
      >
        + Upload Tugas
      </button>
    </div>
  );
}

export default FileUploadButton;
