import React from "react";
import Header from "./Header";
import HeaderGuru from "./HeaderGuru";

function TambahAkun() {
    return (
      <div>
        <Header></Header>
        <HeaderGuru></HeaderGuru>

        <div>
            <h1 className="text-xl mt-8 ml-10 font-medium text-biru">Tambah Akun</h1>
        </div>

        <div className="flex justify-center mt-10  min-h-screen">
            <div className="w-full max-w-lg">
                <form>
                    <div>
                        <h2 className="text-md mt-8 ml-10 font-normal text-biru">
                            Nama Siswa
                        </h2>
                        <input
                            type="text"
                            className="bg-white mx-10 mt-3 h-8 border-[0.3px] shadow-md w-[90%] py-1 px-2 focus:outline-none focus:ring-1"
                        />
                    </div>
                    <div>
                        <h2 className="text-md mt-8 ml-10 font-normal text-biru">
                            NISN
                        </h2>
                        <input
                            type="text"
                            className="bg-white mx-10 mt-3 h-8 border-[0.3px] shadow-md w-[90%] py-1 px-2 focus:outline-none focus:ring-1"
                        />
                    </div>
                    <div className="mt-8">
                        <label className="text-md mt-8 ml-10 font-normal text-biru">
                            Batch
                        </label>
                        <select id="batch" name="batch"
                        className="bg-white mx-10 mt-3 h-8 border-[0.3px] shadow-md w-[90%] py-1 px-2 focus:outline-none focus:ring-1"
                        >
                            <option value="1">Batch 1</option>
                            <option value="2">Batch 2</option>
                            <option value="3">Batch 3</option>
                            <option value="4">Batch 4</option>
                        </select>
                    </div>
                    <div>
                        <h2 className="text-md mt-8 ml-10 font-normal text-biru">
                            Asal Sekolah
                        </h2>
                        <input
                            type="text"
                            className="bg-white mx-10 mt-3 h-8 border-[0.3px] shadow-md w-[90%] py-1 px-2 focus:outline-none focus:ring-1"
                        />
                    </div>
                    <div className="mt-8">
                        <label className="text-md mt-8 ml-10 font-normal text-biru">
                            Kelas
                        </label>
                        <select id="kelas" name="kelas"
                        className="bg-white mx-10 mt-3 h-8 border-[0.3px] shadow-md w-[90%] py-1 px-2 focus:outline-none focus:ring-1"
                        >
                            <option value="10">Kelas 10</option>
                            <option value="11">Kelas 11</option>
                            <option value="12">Kelas 12</option>
                        </select>
                    </div>
                    <div>
                        <h2 className="text-md mt-8 ml-10 font-normal text-biru">
                            Jurusan
                        </h2>
                        <input
                            type="text"
                            className="bg-white mx-10 mt-3 h-8 border-[0.3px] shadow-md w-[90%] py-1 px-2 focus:outline-none focus:ring-1"
                        />
                    </div>
                    <div className="flex justify-end mt-10 gap-x-4 mb-10">
                            <a href="/guru/homepage" className="text-biru py-2">
                                Batal
                            </a>
                            <button
                                type="submit"
                                className="text-white bg-biru py-2 px-5 rounded-md"
                            >
                                Tambah Akun
                            </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    );
  }
  
  export default TambahAkun;