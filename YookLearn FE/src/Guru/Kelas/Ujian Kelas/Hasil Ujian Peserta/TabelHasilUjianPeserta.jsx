import React from "react";

function TabelHasilUjianPeserta({ idMapel, idUjian, dataSiswa }) {
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
            {dataSiswa.map((siswa) => (
              <tr key={siswa.id} className="border-[0.3px] shadow-md">
                <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                  {siswa.nisn}
                </td>
                <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">
                  <a
                    className="block"
                    // href={`/guru/mapel/${idMapel}/ujian/${idUjian}/hasil-ujian-siswa`}
                  >
                    {siswa.nama_lengkap}
                  </a>
                </td>
                <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center">
                  {siswa.status}
                </td>
                <td className="py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru text-center">
                  {siswa.nilai}/100
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TabelHasilUjianPeserta;
