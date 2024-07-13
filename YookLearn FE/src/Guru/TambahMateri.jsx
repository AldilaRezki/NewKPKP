import React, { useEffect, useState } from "react";
import Header from "./Header";
import HeaderGuru from "./HeaderGuru";
import { storeMateri } from "./services/GuruAPI";
import { useParams } from "react-router-dom";

function TambahMateri() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        nama: null,
    });
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        console.log(formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("nama", formData.nama);

        const result = await storeMateri(data, id);
    };
    return (
        <div>
            <Header></Header>
            <HeaderGuru></HeaderGuru>

            <div>
                <h1 className="text-xl ml-10 mt-8 font-medium text-text">
                    Tambah Batch
                </h1>
            </div>

            <div className="flex justify-center mt-10  min-h-screen">
                <div className="w-full max-w-lg">
                    <form
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <h2 className="text-md mt-8 font-normal text-text">
                                Nama Materi
                            </h2>
                            <input
                                onChange={handleChange}
                                required
                                name="nama"
                                type="text"
                                className="bg-white mt-3 h-8 border-[0.3px] shadow-md w-full py-1 px-2 focus:outline-none focus:ring-1"
                            />
                        </div>

                        <div className="flex justify-end mt-10 gap-x-4">
                            <a href="/guru/homepage" className="text-text py-2">
                                Batal
                            </a>
                            <button
                                type="submit"
                                className="text-white bg-tombol py-2 px-5 rounded-md"
                            >
                                Tambah Batch
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TambahMateri;
