import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../Header";
import HeaderGuru from "../../../HeaderGuru";
import HeaderKelas from "../../HeaderKelas";
import Opsi from "./Opsi";
import KotakCentang from "./KotakCentang";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import LoadingPage from "../../../../Siswa/pages/LoadingPage";
import { fetchCurrentMapel } from "../../../services/GuruAPI";

const TambahSoal = () => {
  const { idMapel } = useParams();
  const [dataMapel, setMapel] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCurrentMapel(idMapel);
      setMapel(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const [formList, setFormList] = useState([
    {
      pertanyaan: "",
      jenis: "pilgan",
      jawaban: ["", "", ""],
      kunci: 0,
      poin: 0,
    },
  ]);

  const handlePertanyaanChange = (index, value) => {
    const newList = [...formList];
    newList[index].pertanyaan = value;
    setFormList(newList);
  };

  const handleJenisChange = (index, value) => {
    const newList = [...formList];
    newList[index].jenis = value;
    if (value === "kotakcentang") {
      newList[index].kunci = [];
    } else {
      newList[index].kunci = 0;
    }
    setFormList(newList);
  };

  const handleJawabanChange = (index, jawabanIndex, value) => {
    const newList = [...formList];
    newList[index].jawaban[jawabanIndex] = value;
    setFormList(newList);
  };

  const handleKunciChange = (index, jawabanIndex, value) => {
    const newList = [...formList];
    if (newList[index].jenis === "kotakcentang") {
      const kunci = newList[index].kunci.slice(); // Copy array kunci menggunakan slice()
      if (value) {
        kunci[jawabanIndex] = true; // Set nilai kunci[jawabanIndex] menjadi true
      } else {
        kunci[jawabanIndex] = false; // Set nilai kunci[jawabanIndex] menjadi false
      }
      newList[index].kunci = kunci;
    } else {
      newList[index].kunci = jawabanIndex;
    }
    setFormList(newList);
  };

  const handlePoinChange = (index, value) => {
    const newList = [...formList];
    newList[index].poin = value;
    setFormList(newList);
  };

  const handleAddQuestion = () => {
    setFormList([
      ...formList,
      {
        pertanyaan: "",
        jenis: "pilgan",
        jawaban: ["", "", ""],
        kunci: 0,
        poin: 0,
      },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    const newList = [...formList];
    newList.splice(index, 1);
    setFormList(newList);
  };

  const handleAddOption = (index) => {
    const newList = [...formList];
    newList[index].jawaban.push("");
    setFormList(newList);
  };

  const handleRemoveOption = (index, optionIndex) => {
    const newList = [...formList];
    newList[index].jawaban.splice(optionIndex, 1);
    setFormList(newList);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formList);
    // Lakukan proses submit atau pengiriman data ke server di sini
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
      <form onSubmit={handleSubmit}>
        {formList.map((question, index) => (
          <div key={index}>
            <h3>Pertanyaan {index + 1}</h3>
            <label>Pertanyaan:</label>
            <input
              type="text"
              value={question.pertanyaan}
              onChange={(e) => handlePertanyaanChange(index, e.target.value)}
            />

            <label>Jenis:</label>
            <select
              value={question.jenis}
              onChange={(e) => handleJenisChange(index, e.target.value)}
            >
              <option value="pilgan">Pilihan Ganda</option>
              <option value="kotakcentang">Kotak Centang</option>
              <option value="essai">Essai</option>
            </select>

            {question.jenis === "pilgan" && (
              <div>
                <label>Jawaban:</label>
                {question.jawaban.map((jawaban, jawabanIndex) => (
                  <div key={jawabanIndex}>
                    <input
                      type="text"
                      value={jawaban}
                      onChange={(e) =>
                        handleJawabanChange(index, jawabanIndex, e.target.value)
                      }
                    />
                    {question.jawaban.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveOption(index, jawabanIndex)}
                      >
                        Hapus Opsi
                      </button>
                    )}
                  </div>
                ))}
                <button type="button" onClick={() => handleAddOption(index)}>
                  Tambah Opsi
                </button>
                <label>Jawaban Benar:</label>
                <select
                  value={question.kunci}
                  onChange={(e) =>
                    handleKunciChange(index, e.target.value, true)
                  }
                >
                  {question.jawaban.map((jawaban, jawabanIndex) => (
                    <option key={jawabanIndex} value={jawabanIndex}>
                      {jawaban}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {question.jenis === "kotakcentang" && (
              <div>
                <label>Opsi:</label>
                {question.jawaban.map((jawaban, jawabanIndex) => (
                  <div key={jawabanIndex}>
                    <input
                      type="text"
                      value={jawaban}
                      onChange={(e) =>
                        handleJawabanChange(index, jawabanIndex, e.target.value)
                      }
                    />
                    {question.jawaban.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveOption(index, jawabanIndex)}
                      >
                        Hapus Opsi
                      </button>
                    )}
                  </div>
                ))}
                <button type="button" onClick={() => handleAddOption(index)}>
                  Tambah Opsi
                </button>
                <label>Opsi Benar:</label>
                {question.jawaban.map((jawaban, jawabanIndex) => (
                  <div key={jawabanIndex}>
                    <input
                      type="checkbox"
                      checked={question.kunci[jawabanIndex] === true} // Periksa nilai kunci[jawabanIndex]
                      onChange={(e) =>
                        handleKunciChange(index, jawabanIndex, e.target.checked)
                      }
                    />
                    <span>{jawaban}</span>
                  </div>
                ))}
              </div>
            )}

            {question.jenis === "essai" && (
              <div>
                <label>Jawaban:</label>
                <input
                  type="text"
                  value={question.jawaban[0]}
                  onChange={(e) =>
                    handleJawabanChange(index, 0, e.target.value)
                  }
                />
              </div>
            )}

            <label>Poin:</label>
            <input
              type="number"
              value={question.poin}
              onChange={(e) => handlePoinChange(index, e.target.value)}
            />

            <button type="button" onClick={() => handleRemoveQuestion(index)}>
              Hapus Pertanyaan
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddQuestion}>
          Tambah Pertanyaan
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TambahSoal;
