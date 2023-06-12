import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import HeaderGuru from "../../HeaderGuru";
import HeaderKelas from "../HeaderKelas";
import { BiArrowBack } from "react-icons/bi";
import Header from "../../Header";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addUjian, fetchCurrentMapel } from "../../services/GuruAPI";
import LoadingPage from "../../../Siswa/pages/LoadingPage";

function TambahUjian() {
  const { idMapel } = useParams();
  const navigate = useNavigate();
  const [judul, setJudul] = useState("");
  const [waktu, setWaktu] = useState(0);
  const [deadlineHari, setDeadlineHari] = useState(0);
  const [deadlineJam, setDeadlineJam] = useState(0);
  const [file, setFile] = useState(null);
  const [isiUjian, setIsiUjian] = useState("");
  const [dataMapel, setMapel] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCurrentMapel(idMapel);
      setMapel(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const handleEditorChange = (value) => {
    setIsiUjian(value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFile(file);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const deadline = moment(
        `${deadlineHari} ${deadlineJam}`,
        "YYYY-MM-DD HH:mm"
      ).format("YYYY-MM-DD HH:mm:ss");
      const isSuccess = await addUjian(
        idMapel,
        judul,
        isiUjian,
        waktu,
        file,
        deadline
      );
      if (isSuccess) {
        navigate(
          `/guru/mapel/${idMapel}/ujian/${isSuccess.id}/tambah-soal-ujian`
        );
      }
    } catch (error) {
      console.log("Error adding assigment:", error);
    }
  };

  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <Header></Header>
      <HeaderGuru></HeaderGuru>
      <HeaderKelas dataMapel={dataMapel}></HeaderKelas>
      <div className="bg-tosca mt-10 mx-10 p-2">
        <a href={`/guru/mapel/${idMapel}/tambah-ujian`}>
          <BiArrowBack className="bg-white text-xl"></BiArrowBack>
        </a>
      </div>

      <h1 className="text-xl mt-8 ml-10 font-medium text-biru">Tambah Ujian</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <h2 className="text-md mt-8 ml-10 font-normal text-biru">
            Judul Ujian
          </h2>
          <input
            type="text"
            className="bg-white mx-10 mt-3 h-8 border-[0.3px] shadow-md w-[95%] py-1 px-2 focus:outline-none focus:ring-1"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
        </div>

        <div>
          <h2 className="text-md mt-8 ml-10 font-normal text-biru">
            Isi Ujian
          </h2>
          <ReactQuill
            className="mt-8 ml-10 h-30"
            value={isiUjian}
            onChange={handleEditorChange}
          />
        </div>

        <div className="flex gap-x-10 ml-10">
          <div>
            <h2 className="text-md mt-8 font-normal text-biru">Waktu Ujian</h2>
            <div className="flex gap-x-8">
              <input
                type="time"
                className="mt-4 py-2 px-5 border-[0.3px] shadow-md"
                value={waktu}
                onChange={(e) => setWaktu(e.target.value)}
              />
            </div>
          </div>
          <div>
            <h2 className="text-md mt-8 font-normal text-biru">
              Batas Waktu Pengerjaan Ujian
            </h2>
            <div className="flex gap-x-8">
              <div className="flex gap-x-8">
                <input
                  type="date"
                  className="mt-4 py-2 px-5 border-[0.3px] shadow-md"
                  value={deadlineHari}
                  onChange={(e) => setDeadlineHari(e.target.value)}
                />
              </div>
              <div className="flex gap-x-8">
                <input
                  type="time"
                  className="mt-4 py-2 px-5 border-[0.3px] shadow-md"
                  value={deadlineJam}
                  onChange={(e) => setDeadlineJam(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-md mt-8 ml-10 font-normal text-biru">
              Lampiran
            </h2>
            <div className="flex">
              <input
                className="mt-5 ml-10"
                id="fileInput"
                type="file"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-end mr-10 gap-x-10 mb-20">
          <a href={`/guru/mapel/${idMapel}/ujian`} className="text-biru py-2">
            Batal
          </a>
          <button
            type="submit"
            className="text-white bg-biru py-2 px-5 rounded-md"
          >
            Tambah Soal
          </button>
        </div>
      </form>
    </div>
  );
}

export default TambahUjian;
