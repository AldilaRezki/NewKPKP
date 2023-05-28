import React, { useState, useEffect } from "react";
import { MdSave } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
// import TambahPoin from "./TambahPoin";
import { fetchStudentSubmit } from "../../services/GuruAPI";

function TabelDetailTugas({ idMapel, idTugas, nilai }) {
  const BASE_URL = import.meta.env.VITE_BASE_DOWNLOAD_URL;
  const [dataTugas, setTugas] = useState([]);
  const [showMyModal, setShowMyModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchStudentSubmit(idMapel, idTugas);
      setTugas(data);
      // setIsLoading(false);
    }
    fetchData();
  }, []);


function TabelDetailTugas() {
  const [showMyModal, setShowMyModal] = useState(false);

  const handleOnClose = () => setShowMyModal(false)
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
                </td>
              </tr>
            ))}
            {/* <tr className="border-[0.3px] shadow-md">
            <tr className="border-[0.3px] shadow-md">
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                Lorem Ipsum
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                12-03-2023 23:59:59
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                Lorem Ipsum.pdf
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                <input type="number" min={0} max={100} className="bg-white outline-none appearance-none border-[0.1px] flex py-2 pl-5 w-[72%] mx-auto"
                placeholder="Masukkan poin"/>
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru text-center">
                <a href="/path/to/tugas1.pdf" download>
                  <MdSave className="text-2xl mr-2 inline-block" />
                </a>
              </td>
            </tr>
            <tr className="border-[0.3px] shadow-md">
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                Lorem Ipsum
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                12-03-2023 23:59:59
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                Lorem Ipsum.pdf
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                100/100
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru text-center">
                <MdSave className="text-2xl mr-2 inline-block"></MdSave>
                <button onClick={() => setShowMyModal(true)}>
                  <BiPencil className="text-2xl inline-block mb-[1px]"></BiPencil>
                </button>
                <TambahPoin onClose={handleOnClose} visible={showMyModal}></TambahPoin>
              </td>
            </tr>
            <tr className="border-[0.3px] shadow-md">
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                Lorem Ipsum
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                12-03-2023 23:59:59
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                Lorem Ipsum.pdf
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                100/100
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru text-center">
                <MdSave className="text-2xl mr-2 inline-block"></MdSave>
                <button onClick={() => setShowMyModal(true)}>
                  <BiPencil className="text-2xl inline-block mb-[1px]"></BiPencil>
                </button>
                <TambahPoin onClose={handleOnClose} visible={showMyModal}></TambahPoin>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default TabelDetailTugas;