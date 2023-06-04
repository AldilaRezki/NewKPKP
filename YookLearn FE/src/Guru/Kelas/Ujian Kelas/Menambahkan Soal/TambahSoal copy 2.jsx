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
import { addSoal, fetchCurrentMapel } from "../../../services/GuruAPI";

const TambahSoal = () => {
  const { idMapel, idUjian } = useParams();
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formList);
    try {
      const data = await addSoal(idUjian, formList);
      console.log(data);

      // if (isSuccess) {
      //   console.log("Assigment added successfully");
      //   navigate(`/guru/mapel/${idMapel}/daftar-tugas`);
      // }
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
      <form onSubmit={handleSubmit}>
        {formList.map((question, index) => (
          <div
          className="mt-10" 
          key={index}>
            <div>
              <h3 className="text-xl ml-10 font-medium text-biru">Pertanyaan {index + 1}</h3>
            </div>
            <div className="bg-tosca mx-10 mt-5 pb-5">
              <div className="flex justify-between">
                <div className="flex flex-col w-full ml-8 mr-16 mt-8">
                  <label>Pertanyaan:</label>
                  <ReactQuill
                    className="mt-3 mx-0 h-36 overflow-hidden bg-white"
                    type="text"
                    value={question.pertanyaan}
                    onChange={(e) => handlePertanyaanChange(index, e.target.value)}
                  />
                </div>
                <div className="mr-10 flex flex-col gap-y-5 mt-8">
                  <div>
                    <label>Jenis Pertanyaan:</label>
                    <select
                      value={question.jenis}
                      onChange={(e) => handleJenisChange(index, e.target.value)}
                      className="w-[210px] bg-white outline-none appearance-none focus:border-indigo-600 flex py-2 pl-5 border-[0.3px] shadow-md mt-4"
                    >
                      <option value="pilgan">Pilihan Ganda</option>
                      <option value="kotakcentang">Kotak Centang</option>
                      <option value="essai">Essai</option>
                    </select>
                  </div>
                  
                </div>
              </div>
              <div className="flex gap-x-24 mt-8">
                <div className="flex flex-col gap-y-3">
                  <div className="ml-8 flex gap-x-8">
                    {question.jenis === "pilgan" && (
                      <div>
                        <label>Jawaban:</label>
                        {question.jawaban.map((jawaban, jawabanIndex) => (
                            <div
                            className="flex gap-x-3" key={jawabanIndex}>
                              <input
                                className="mt-2 py-2 pl-3"
                                type="text"
                                value={jawaban}
                                onChange={(e) =>
                                  handleJawabanChange(index, jawabanIndex, e.target.value)
                                }
                              />
                              {question.jawaban.length > 1 && (
                                <button
                                  className="text-biru"
                                  type="button"
                                  onClick={() => handleRemoveOption(index, jawabanIndex)}
                                >
                                  Hapus Opsi
                                </button>
                              )}
                              </div>
                        ))}
                        <button 
                        className="text-bitu cursor-pointer flex items-end mt-2 mb-2 text-biru"
                        type="button" onClick={() => handleAddOption(index)}>
                          Tambah Opsi
                        </button>
                        <div className="flex flex-col gap-y-3 mt-6">
                          <label>Jawaban Benar:</label>
                          <select
                            className="bg-white outline-none appearance-none focus:border-indigo-600 flex py-2 pl-5 border-[0.3px] shadow-md"
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
                      </div>
                    )}

                    {question.jenis === "kotakcentang" && (
                      <div>
                        <label>Opsi:</label>
                        {question.jawaban.map((jawaban, jawabanIndex) => (
                          <div 
                          className="flex gap-x-3"
                          key={jawabanIndex}>
                            <input
                              className="mt-2 py-2 pl-3"
                              type="text"
                              value={jawaban}
                              onChange={(e) =>
                                handleJawabanChange(index, jawabanIndex, e.target.value)
                              }
                            />
                            {question.jawaban.length > 1 && (
                              <button
                                className="text-biru"
                                type="button"
                                onClick={() => handleRemoveOption(index, jawabanIndex)}
                              >
                                Hapus Opsi
                              </button>
                            )}
                          </div>
                        ))}
                        <button 
                        className="text-bitu cursor-pointer flex items-end mt-2 mb-2 text-biru"
                        type="button" onClick={() => handleAddOption(index)}>
                          Tambah Opsi
                        </button>
                        <div className="flex flex-col gap-y-3 mt-6">
                          <label>Opsi Benar:</label>
                          {question.jawaban.map((jawaban, jawabanIndex) => (
                            <div 
                            className="flex gap-x-3 bg-white py-3 px-2"
                            key={jawabanIndex}>
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
                      </div>
                    )}

                    {question.jenis === "essai" && (
                      <div className="flex flex-col gap-x-8 w-[600px] overflow-hidden">
                        <label>Jawaban:</label>
                        <ReactQuill
                          className="mt-3 w-[600px] h-36 bg-white"
                          type="text"
                          value={question.jawaban[0]}
                          onChange={(e) =>
                            handleJawabanChange(index, 0, e.target.value)
                          }
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <label className="text-biru">Poin:</label>
                  <input
                    className="bg-white outline-none appearance-none focus:border-indigo-600 flex py-2 pl-5 w-fit border-[0.3px] shadow-md"
                    type="number"
                    value={question.poin}
                    onChange={(e) => handlePoinChange(index, e.target.value)}
                  />
                </div>
                
              </div>
              <div className="flex justify-end mr-10 mb-2">
                <button
                type="button" onClick={() => handleRemoveQuestion(index)}>
                  Hapus Pertanyaan
                </button>  
              </div>
              
            </div>
          </div>
        ))}
        <div className="flex mb-20 gap-x-6 mt-10 justify-end mr-10">
          <button 
          className="text-white bg-biru py-2 px-3 rounded-lg" 
          type="button" onClick={handleAddQuestion}>
            Tambah Pertanyaan
          </button>
          <button 
          className="text-white bg-biru py-2 px-3 rounded-lg" 
          type="submit">Submit</button>  
        </div>
      </form>
    </div>
  );
};

export default TambahSoal;
