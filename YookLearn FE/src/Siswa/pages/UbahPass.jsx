import React, { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import FormUbahPass from "../components/FormUbahPass";

export default function UbahPass() {
  const [showFormUbahPass, setShowFormUbahPass] = useState(false);

  const handleOnClose = () => setShowFormUbahPass(false);
  return (
    <>
      <div>
        <Header />
        <Nav />
      </div>
      <div className="flex justify-center items-center h-screen">
        <form className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center text-[#1A1F5A]">
            Ubah Kata Sandi
          </h2>
          <div className="mb-4 mt-5">
            <label
              className="block text-[#1A1F5A] font-bold mb-2"
              htmlFor="password"
            >
              Kata Sandi Lama
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[616px]"
              id="name"
              placeholder="Masukkan kata sandi lama"
            />
          </div>
          <div className="mt-5">
            <label
              className="block text-[#1A1F5A] font-bold mb-2"
              htmlFor="password"
            >
              Kata Sandi Baru
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[616px]"
              id="name"
              placeholder="Masukkan kata sandi baru"
            />
          </div>

          <button
            onClick={() => setShowFormUbahPass(true)}
            className="bg-[#1A1F5A] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
            type="button"
          >
            Ubah Kata Sandi
          </button>
        </form>
      </div>

      <FormUbahPass onClose={handleOnClose} visible={showFormUbahPass} />
    </>
  );
}
