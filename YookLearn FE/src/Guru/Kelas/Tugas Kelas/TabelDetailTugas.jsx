import React, { useState, useEffect } from "react";
import { MdSave } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { fetchStudentSubmit } from "../../services/GuruAPI";

function TabelDetailTugas({ idMapel, idTugas, nilai }) {
  const [dataSiswa, setSiswa] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchStudentSubmit(idMapel, idTugas);
      setSiswa(data);
      // setIsLoading(false);
    }
    fetchData();
  }, []);
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
            {dataSiswa.map((siswa) => (
              <tr className="border-[0.3px] shadow-md" key={siswa.id}>
                <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                  {siswa.nama_pengirim}
                </td>
                <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                  {siswa.created_at}
                </td>
                <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                  {siswa.filename}
                </td>
                <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                  {siswa.nilai}/{nilai}
                </td>
                <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru text-center">
                  <MdSave className="text-2xl mr-2 inline-block"></MdSave>
                  <BiCommentDetail className="text-2xl inline-block mb-[1px]"></BiCommentDetail>
                </td>
              </tr>
            ))}
            {/* <tr className="border-[0.3px] shadow-md">
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
                <BiCommentDetail className="text-2xl inline-block mb-[1px]"></BiCommentDetail>
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
                <BiCommentDetail className="text-2xl inline-block mb-[1px]"></BiCommentDetail>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TabelDetailTugas;
