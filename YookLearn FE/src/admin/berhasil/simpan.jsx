import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function simpan() {
  return (
    <div className=' bg-white max-h-screen'>
      <header className="bg-[#1A1F5A] text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold font-mono">YookLearn</h1>
        </div>
      </header>
      <main className='container items-center justify-center flex min-h-screen flex-col'>
          <h1 className='pb-10 text-3xl text-[#1A1F5A]'>Data Berhasil Disimpan!</h1>
          <button type="submit" className="bg-[#1A1F5A] text-white p-4 rounded-lg">
            <a href="/list/" className='flex'>
                <FontAwesomeIcon icon={faCircleCheck} className=' text-white text-5xl' />
                <h1 className=' text-xl p-2'>Simpan</h1>
            </a>
          </button>
      </main>
    </div>
  );
}

export default simpan;
