import React, { useState, useRef, useEffect } from "react";
import HeaderGuru from "../../HeaderGuru";
import HeaderKelas from "../HeaderKelas";
import { BiArrowBack } from "react-icons/bi";
import Header from "../../Header";
import { useNavigate, useParams } from "react-router-dom";
import ButtonTambahMateri from "./ButtonTambahMateri";
import { addMateri, fetchCurrentMapel } from "../../services/GuruAPI";
import { isAuthenticated } from "../../../Common/services/Auth";
import LoadingPage from "../../../Siswa/pages/LoadingPage";

function TambahMateri({ onFileUpload }) {
  const navigate = useNavigate();
  const login = isAuthenticated("guru");
  const { idMapel } = useParams();
  const [judul, setJudul] = useState("");
  const [gambar, setGambar] = useState(null);
  const [dataMapel, setMapel] = useState([]);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCurrentMapel(idMapel);
      setMapel(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setGambar(file);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!gambar) {
      console.log("No file selected");
      return;
    }
    try {
      const isSuccess = await addMateri(idMapel, judul, gambar);
      console.log(isSuccess);
      if (isSuccess) {
        console.log("Materi added successfully");
        navigate(`/guru/mapel/${idMapel}/daftar-materi`);
      }
    } catch (error) {
      console.log("Error adding materi:", error);
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
      <div className="bg-biru w-1/12 lg:w-[50px] mt-10 mx-10 p-2">
        <a href={`/guru/mapel/${idMapel}/daftar-materi`}>
          <BiArrowBack className="ml-1.5 text-white text-xl"></BiArrowBack>
        </a>
      </div>

      <h1 className="text-xl mt-8 mb-10 ml-10 font-medium text-text">
        Tambah Materi
      </h1>

      <form onSubmit={handleSubmit}>
        <div>
          <div className="form-input-row mb-8">
            <label
              htmlFor="judul"
              className="text-md mt-8 ml-10 font-normal text-text"
            >
              Judul
            </label>
            <input
              className="bg-white mx-10 mt-3 h-8 border-[0.3px] shadow-md w-[95%] py-1 px-2 focus:outline-none focus:ring-1"
              id="judul"
              type="text"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              required
            />
          </div>
          {/* <h2 className="text-md mt-8 ml-10 font-normal text-text">
          Judul Materi
        </h2>
        <form>
          <input
            type="text"
            className="bg-white mx-10 mt-3 h-8 border-[0.3px] shadow-md w-[95%] py-1 px-2 focus:outline-none focus:ring-1"
          />
        </form> */}
        </div>

        {/* <div className="form-input-row">
        <label
          htmlFor="isi"
          className="text-md mt-8 ml-10 font-normal text-text"
        >
          Isi
        </label>
        <Form></Form>
      </div> */}

        {/* <div>
        <h2 className="text-md mt-8 ml-10 font-normal text-text">Isi Materi</h2>
        <Form></Form>
      </div> */}

        <div className="form-input-row mt-5">
          <label
            className="text-md mt-10 ml-10 font-normal text-text"
            htmlFor="fileInput"
          >
            Lampiran
          </label>
          <div>
            <input
              className="ml-10 mt-3"
              id="fileInput"
              type="file"
              onChange={handleFileChange}
              required
            />
          </div>
        </div>

        {/* <div>
        <h2 className="text-md mt-8 ml-10 font-normal text-text">Lampiran</h2>
        <div className="flex">
          <div>
            <ButtonTambahMateri onFileUpload={handleFileUpload} />
          </div>
          <span className="ml-5 my-auto ">Tidak ada file yang dipilih</span>
        </div>
      </div> */}

        <div className="mt-20 flex justify-end mr-10 gap-x-10 mb-20">
          <a
            href={`/guru/mapel/${idMapel}/daftar-materi`}
            className="text-text py-2"
          >
            Batal
          </a>
          <button
            className="text-white bg-biru py-2 px-5 rounded-md"
            type="submit"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
}

export default TambahMateri;
