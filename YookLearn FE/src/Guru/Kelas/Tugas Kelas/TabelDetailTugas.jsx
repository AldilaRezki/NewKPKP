import React, { useState, useEffect } from "react";
import { MdSave } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import TambahPoin from "./TambahPoin";
import { fetchStudentSubmit } from "../../services/GuruAPI";

function TabelDetailTugas({ idMapel, idTugas, nilai }) {
  const BASE_URL = import.meta.env.VITE_BASE_DOWNLOAD_URL;
  const [dataTugas, setTugas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedSubmit, setSelectedSubmit] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchStudentSubmit(idMapel, idTugas);
      setTugas(data);
    }
    fetchData();
  }, []);

  const handleOnClose = () => {
    setShowModal(false);
    setSelectedSubmit(null);
  };

  const updateNilaiSiswa = (idSubmit, poin) => {
    setTugas((prevData) => {
      const updatedData = prevData.map((tugas) => {
        if (tugas.id === idSubmit) {
          return {
            ...tugas,
            nilai: poin,
          };
        }
        return tugas;
      });
      return updatedData;
    });
  };

  return (
    <div>
      <div className="flex flex-col ml-10 mt-14 mr-10 border-[0.3px] py-2 px-5 shadow-md">
        <table className="border-separate border-spacing-y-5">
          <thead>
            <tr className="bg-tosca">
              <th className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                Nama Pengirim
              </th>
              <th className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                Waktu Unggah
              </th>
              <th className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                Judul Tugas
              </th>
              <th className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru">
                Poin
              </th>
              <th className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru">
                Save/Detail
              </th>
            </tr>
          </thead>
          <tbody>
            {dataTugas.map((tugas) => (
              <tr className="border-[0.3px] shadow-md" key={tugas.id}>
                <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                  {tugas.nama_pengirim}
                </td>
                <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                  {tugas.created_at}
                </td>
                <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                  {tugas.filename}
                </td>
                <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                  {tugas.nilai}/{nilai}
                </td>
                <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru text-center">
                  <a href={`${BASE_URL}/${tugas.filename}`} download>
                    <MdSave className="text-2xl mr-2 inline-block" />
                  </a>
                  <button
                    onClick={() => {
                      setShowModal(true);
                      setSelectedSubmit(tugas.id);
                    }}
                  >
                    <BiPencil className="text-2xl inline-block mb-[1px]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <TambahPoin
          onClose={handleOnClose}
          visible={showModal}
          idSubmit={selectedSubmit}
          idMapel={idMapel}
          idTugas={idTugas}
          dataTugas={dataTugas}
          updateDataTugas={updateNilaiSiswa}
        />
      )}
    </div>
  );
}

export default TabelDetailTugas;
