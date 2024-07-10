import React, { useState } from "react";
import HeaderGuru from "../HeaderGuru";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../Common/services/Auth";
import { useEffect } from "react";
import { fetchLogbook } from "../services/GuruAPI";

function Logbook() {
    const navigate = useNavigate();
    const login = isAuthenticated("guru");
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!login) {
            navigate("/");
        }
    }, [login, navigate]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchLogbook();
            setData(data);
            // setIsLoading(false);
            // console.log(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <Header></Header>
            <HeaderGuru></HeaderGuru>

            <div className="container mx-auto px-4 py-8">
                <p className="text-2xl mb-3">List Peminjaman Buku</p>
                <table className="min-w-full bg-white border border-gray-300">
                    <tr>
                        <td className="py-2 px-4 border-b bg-gray-100 text-left text-gray-600 font-semibold">
                            ID
                        </td>
                        <td className="py-2 px-4 border-b bg-gray-100 text-left text-gray-600 font-semibold">
                            Nama Peminjam
                        </td>
                        <td className="py-2 px-4 border-b bg-gray-100 text-left text-gray-600 font-semibold">
                            Judul Buku
                        </td>
                        <td className="py-2 px-4 border-b bg-gray-100 text-left text-gray-600 font-semibold">
                            Nama Penulis
                        </td>
                        <td className="py-2 px-4 border-b bg-gray-100 text-left text-gray-600 font-semibold">
                            Tanggal Pinjam
                        </td>
                        <td className="py-2 px-4 border-b bg-gray-100 text-left text-gray-600 font-semibold">
                            Tanggal Pengembalian
                        </td>
                    </tr>
                    {data.map((item) => (
                        <tr key={item.id} className="border-t">
                            <td className="py-2 px-4 border-b">{item.id}</td>
                            <td className="py-2 px-4 border-b">
                                {item.nama_peminjam}
                            </td>
                            <td className="py-2 px-4 border-b">
                                {item.nama_buku}
                            </td>
                            <td className="py-2 px-4 border-b">
                                {item.nama_penulis}
                            </td>
                            <td className="py-2 px-4 border-b">
                                {item.tanggal_pinjam}
                            </td>
                            <td className="py-2 px-4 border-b">
                                {item.tanggal_pengembalian}
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
}

export default Logbook;
