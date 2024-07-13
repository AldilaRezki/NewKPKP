import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import HeaderGuru from "../HeaderGuru";
import BoxDaftarKelas from "./BoxDaftarKelas";
import BoxKelas from "./BoxKelas";
import { isAuthenticated } from "../../Common/services/Auth";
import { getBatch } from "../services/GuruAPI";
import { Accordion, Button } from "flowbite-react";

function DaftarKelas() {
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
            const data = await getBatch();
            setData(data);
            setIsLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div className="mx-10 mt-5">
            <Accordion>
                {data.map((item) => (
                    <Accordion.Panel>
                        <Accordion.Title>{item.nama}</Accordion.Title>
                        <Accordion.Content>
                            <a href={`/guru/daftar-logbook/${item.id}`}>
                                <Button color="light" className="mb-3">
                                    Logbook {item.nama}
                                </Button>
                            </a>
                            {item.materi.map((item2) => (
                                <div className="my-3 p-3 border border-gray-300 rounded-xl w-1/2">
                                    <a href={`/guru/mapel/${item2.id}`}>
                                        {item2.nama_matpel}
                                    </a>
                                </div>
                            ))}
                            <a href={`/guru/tambah-materi/${item.id}`}>
                                <Button color="light">Tambah Materi</Button>
                            </a>
                        </Accordion.Content>
                    </Accordion.Panel>
                ))}
            </Accordion>
        </div>
    );
}

export default DaftarKelas;
