import { useEffect, useState } from "react";
import { fetchCurrentMapel, fetchMapel } from "../services/GuruAPI";

function HeaderKelas({idMapel}) {
  const [dataMapel, setMapel] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCurrentMapel(idMapel);
      setMapel(data);
      // setIsLoading(false);
    }
    fetchData();
  }, [])
  
  return (
    <div className="flex justify-between py-4 px-10 bg-tosca">
      <h1 className="text-lg font-semibold text-biru">{dataMapel.nama_matpel}</h1>
      <ul className="flex justify-between w-6/12">
        <a href={`/guru/mapel/${dataMapel.id}`}>Home</a>
        {/* <a href="/guru/xipa1/forum">Forum</a> */}
        <a href={`/guru/mapel/${dataMapel.id}/daftar-materi`}>Materi</a>
        <a href={`/guru/mapel/${dataMapel.id}/daftar-tugas`}>Tugas</a>
        <a href="/guru/xipa1/ujian">Ujian</a>
        <a href={`/guru/mapel/${idMapel}/daftar-anggota-kelas`}>Anggota</a>
      </ul>
    </div>
  );
}

export default HeaderKelas;
