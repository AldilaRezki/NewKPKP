import React, { useState, useEffect } from "react";
import { fetchSiswa } from "../services/SiswaAPI";

function TabelSiswa({ idkelas, idMapel }) {

  const [siswa, setSiswa] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchSiswa(idMapel);
      setSiswa(data);
    }
    fetchData(idMapel);
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-col ml-10 mt-5 mr-10 border-[0.3px] py-2 px-5 shadow-md">
          <table className="border-separate border-spacing-y-1">
            <thead>
              <tr className="bg-[#1A1F5A]">
                <th className="py-2 border-l-[1px] border-t-[1px] border-b-[1px]  text-white">
                  NISN Peserta
                </th>
                <th className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md text-white">
                  Nama Peserta Kelas
                </th>
              </tr>
            </thead>
            <tbody>
              {siswa.map((item) => (
                <tr key={item.id} className="border-[0.3px] shadow-md bg-[#EEF4FA]">
                  <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-biru text-center">
                    {item.nisn}
                  </td>
                  <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru text-center">
                    {item.nama_lengkap}
                  </td>
                </tr>
              ))}
              {/* <tr className="border-[0.3px] shadow-md bg-[#EEF4FA]">
                <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px]  border-biru text-center">
                  XXXXXXX
                </td>
                <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru text-center">
                  Lorem ipsum dolor sit
                </td>
              </tr>
              <tr className="border-[0.3px] shadow-md bg-[#EEF4FA]">
                <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-biru text-center">
                  XXXXXXX
                </td>
                <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru text-center">
                  Lorem ipsum dolor sit
                </td>
              </tr>
              <tr className="border-[0.3px] shadow-md bg-[#EEF4FA]">
                <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                  XXXXXXX
                </td>
                <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru text-center">
                  Lorem ipsum dolor sit
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default TabelSiswa;
