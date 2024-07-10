import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../../Common/services/Auth";
import { useNavigate, Link } from "react-router-dom";
import { MdOutlineDriveFileMove, MdGroups } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { BiUserCircle } from "react-icons/bi";

import Header from "../components/Header";
import Nav from "../components/Nav";
import ListTugas from "../components/ListTugas";
import EditAkun from "../components/EditAkun";

import { submitLogbook, resetPassword } from "../services/SiswaAPI";
import LoadingPage from "./LoadingPage";

function Logbook() {
    const navigate = useNavigate();
    const login = isAuthenticated("siswa");
    const [nama_buku, setnama_buku] = useState("");
    const [nama_penulis, setnama_penulis] = useState("");
    const [tanggal_pinjam, settanggal_pinjam] = useState("");
    const [tanggal_pengembalian, settanggal_pengembalian] = useState("");

    useEffect(() => {
        if (!login) {
            navigate("/");
        }
    }, [login, navigate]);

    // const [isLoading, setIsLoading] = useState(true);
    // if (isLoading) {
    //     return <LoadingPage />;
    // }

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async () => {
        setErrorMessage("");
        setSuccessMessage("");
        const isSuccess = await submitLogbook(
            nama_buku,
            nama_penulis,
            tanggal_pinjam,
            tanggal_pengembalian
        );

        if (isSuccess) {
            setSuccessMessage("Data berhasil disubmit");
        } else {
            setErrorMessage("Data gagal disubmit");
        }
    };

    return (
        <>
            <div>
                <Header />
                <Nav />
            </div>
            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Peminjaman Buku</h2>
                {errorMessage && (
                    <div className="mb-4 p-4 text-red-700 bg-red-100 rounded">
                        {errorMessage}
                    </div>
                )}
                {successMessage && (
                    <div className="mb-4 p-4 text-green-700 bg-green-100 rounded">
                        {successMessage}
                    </div>
                )}
                <form action="">
                    <div className="mb-4">
                        <label className="block text-gray-700">
                            Nama Buku:
                        </label>
                        <input
                            type="text"
                            name="nama_buku"
                            value={nama_buku}
                            onChange={(e) => setnama_buku(e.target.value)}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">
                            Nama Penulis:
                        </label>
                        <input
                            type="text"
                            name="nama_penulis"
                            value={nama_penulis}
                            onChange={(e) => setnama_penulis(e.target.value)}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">
                            Tanggal Pinjam:
                        </label>
                        <input
                            type="date"
                            name="tanggal_pinjam"
                            value={tanggal_pinjam}
                            onChange={(e) => settanggal_pinjam(e.target.value)}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">
                            Tanggal Pengembalian:
                        </label>
                        <input
                            type="date"
                            name="tanggal_pengembalian"
                            value={tanggal_pengembalian}
                            onChange={(e) =>
                                settanggal_pengembalian(e.target.value)
                            }
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <button
                        type="button"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                        onClick={handleSubmit}
                    >
                        Tambah
                    </button>
                </form>
            </div>
        </>
    );
}
export default Logbook;
