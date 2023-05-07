import React from "react";

function ModalUbahPass({ visible, onClose }) {
  const handleOnClose = () => {
    onClose();
  };

  if (!visible) return null;
  return (
    <div
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-[#1A1F5A] px-4 py-3 sm:px-6 sm:flex sm:flex-row">
          <div class="sm:flex-grow">
            <h3 class="text-lg leading-6 font-medium text-white">Berhasil!</h3>
          </div>
          <div class="sm:flex-shrink-0">
            <svg
              class="text-white w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </div>
        <div class="px-4 py-3 sm:p-6">
          <p class="text-gray-700">Password Berhasil Diubah. </p>
        </div>
        <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#1A1F5A] text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalUbahPass;
