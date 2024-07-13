import React, { useState, useEffect } from "react";
import Header from "./Header";
import HeaderGuru from "./HeaderGuru";
import { showLogbook } from "./services/GuruAPI";
import { useParams } from "react-router-dom";

function LogbookGuru() {
    const BASE_URL = import.meta.env.VITE_LAMPIRAN;
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await showLogbook(id);
            setData(data);
            console.log(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <Header></Header>
            <HeaderGuru></HeaderGuru>

            <div>
                <h1 className="text-xl mt-8 ml-10 font-medium text-text">
                    Logbook
                </h1>
            </div>

            <div className="flex flex-col ml-10 mt-10 mr-10 border-[0.3px] py-2 px-5 shadow-md">
                {data.map((item) => (
                    <div key={item.id} className="w-full">
                        <table className="table-fixed border-separate border-spacing-y-1 text-center w-full">
                            {/* <thead>
                        <tr className="bg-tosca">
                            <th className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">Field</th>
                            <th className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">Value</th>
                        </tr>
                    </thead> */}
                            <tbody>
                                <tr className="bg-tosca">
                                    <td className="xl:w-1/4 min-[320px]:w-1/3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                                        Nama
                                    </td>
                                    <td className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru">
                                        {item.nama_user}
                                    </td>
                                </tr>
                                <tr className="bg-tosca">
                                    <td className="xl:w-1/4 sm:w-1/3 py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                                        NISN
                                    </td>
                                    <td className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru">
                                        {item.studentDetail.nisn}
                                    </td>
                                </tr>
                                {/* <tr className="bg-tosca">
                                    <td className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                                        Batch
                                    </td>
                                    <td className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru">
                                        Batch 1
                                    </td>
                                </tr> */}
                                {/* <tr className="bg-tosca">
                                    <td className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                                        Asal Sekolah
                                    </td>
                                    <td className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru">
                                        Sekolah 1
                                    </td>
                                </tr>
                                <tr className="bg-tosca">
                                    <td className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                                        Jurusan
                                    </td>
                                    <td className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru">
                                        Jurusan 1
                                    </td>
                                </tr> */}
                                <tr className="bg-tosca">
                                    <td className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                                        Kelas
                                    </td>
                                    <td className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru">
                                        {item.kelas.nama_kelas}
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <table className="table-fixed text-center text-sm mb-10">
                            <thead className="table-auto text-center">
                                <tr>
                                    <th className="font-medium py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-biru">
                                        ID
                                    </th>
                                    <th className="font-medium py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-biru">
                                        Tanggal Aktivitas
                                    </th>
                                    <th className="md:w-4/12 font-medium py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-biru">
                                        Deskripsi Kegiatan
                                    </th>
                                    <th className="md:w-5/12 font-medium py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] border-biru">
                                        Lampiran
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="align-top">
                                {item.logbook.map((logbook) => (
                                    <tr key={logbook.id}>
                                        <th className="font-medium py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-biru">
                                            {logbook.id}
                                        </th>
                                        <th className="font-medium py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-biru">
                                            {logbook.tanggal}
                                        </th>
                                        <th className="font-medium py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-biru text-left pl-2">
                                            {logbook.deskripsi}
                                        </th>
                                        <th className="flex flex-wrap justify-center gap-1.5 py-2 px-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] border-biru">
                                            <img
                                                className="md:w-1/3 xl:h-auto"
                                                src={
                                                    BASE_URL + logbook.lampiran
                                                }
                                                alt="kucing"
                                            />
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LogbookGuru;
