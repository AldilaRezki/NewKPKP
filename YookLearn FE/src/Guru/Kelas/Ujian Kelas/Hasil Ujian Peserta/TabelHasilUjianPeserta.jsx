import React from "react";

function TabelHasilUjianPeserta() {
  return (
    <div>
      <div className="flex flex-col ml-10 mt-10 mr-10 border-[0.3px] py-2 px-5 shadow-md">
        <table className="border-separate border-spacing-y-5">
          <thead>
            <tr className="bg-tosca">
              <th className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                NISN Peserta
              </th>
              <th className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                Nama Peserta Ujian
              </th>
              <th className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                Status Ujian
              </th>
              <th className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru">
                Poin
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-[0.3px] shadow-md">
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                XXXXXXXX
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                <a className="block" href="/guru/xipa1/ujian/ujian-pekan-1/hasil-ujian-siswa">
                  Lorem Ipsum
                </a>
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                Ujian Sedang Berlangsung
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru text-center">
                100/100
              </td>
            </tr>
            <tr className="border-[0.3px] shadow-md">
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                XXXXXXXX
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                Lorem Ipsum
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                Ujian Sedang Berlangsung
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru text-center">
                100/100
              </td>
            </tr>
            <tr className="border-[0.3px] shadow-md">
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                XXXXXXXX
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                Lorem Ipsum
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                Ujian Belum Dimulai
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru text-center">
                -/100
              </td>
            </tr>
            <tr className="border-[0.3px] shadow-md">
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                XXXXXXXX
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                Lorem Ipsum
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                Ujian Telah Selesai
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru text-center">
                100/100
              </td>
            </tr>
            <tr className="border-[0.3px] shadow-md">
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                XXXXXXXX
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                Lorem Ipsum
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                Ujian Sedang Berlangsung
              </td>
              <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru text-center">
                100/100
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TabelHasilUjianPeserta;
