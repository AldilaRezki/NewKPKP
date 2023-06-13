import React, { useState, useEffect } from "react";
import NomorUjian from "../components/NomorUjian";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { RiFilePaperLine } from "react-icons/ri";
import { fetchSoal, fetchWaktuUjian, submitUjian } from "../services/SiswaAPI";
import { useNavigate, useParams } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const ExamPage = () => {
  const { idKelas, idMapel, idUjian } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [countdown, setCountdown] = useState(120);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isSubmitCalled, setIsSubmitCalled] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await fetchSoal(idUjian);
  //     setQuestions(data);
  //     setUserAnswers(
  //       new Array(data.length).fill().map(() => ({ id: null, answer: [] }))
  //     );
  //     setIsLoading(false);
  //   }
  //   fetchData();
  // }, [idUjian]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await fecthWaktuUjian(idUjian);
  //     setCountdown(data);
  //     setIsLoading(false);
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const [questionsData, countdownData] = await Promise.all([
        fetchSoal(idUjian),
        fetchWaktuUjian(idUjian),
      ]);

      setQuestions(questionsData);
      setUserAnswers(
        new Array(questionsData.length)
          .fill()
          .map(() => ({ id: null, answer: [] }))
      );
      setCountdown(countdownData);
      setIsLoading(false);
    }

    fetchData();
  }, [idUjian]);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 0 && !isSubmitCalled) {
            setIsSubmitCalled(true);
            handleSubmit();
            return prevCountdown;
          } else {
            return prevCountdown - 1;
          }
        });
      }, 1000);
    } else if (countdown === 0 && !isSubmitCalled) {
      setIsSubmitCalled(true);
      handleSubmit();
    }

    return () => clearInterval(timer);
  }, [countdown, isSubmitCalled]);

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  const handlePreviousClick = () => {
    const newUserAnswers = [...userAnswers];

    newUserAnswers[currentQuestionIndex] = userAnswers[
      currentQuestionIndex
    ] || {
      id: questions[currentQuestionIndex].id,
      answer: [],
    };

    if (currentQuestionIndex > 0) {
      setUserAnswers(newUserAnswers); // Simpan jawaban sebelum mengubah currentQuestionIndex

      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    const newUserAnswers = [...userAnswers];

    if (questions[currentQuestionIndex].type === "kotakcentang") {
      const selectedAnswers = questions[currentQuestionIndex].choices
        .filter((choice) => choice.answer)
        .map((choice) => choice.id);
      newUserAnswers[currentQuestionIndex] = {
        id: questions[currentQuestionIndex].id,
        answer: selectedAnswers,
      };
    } else {
      newUserAnswers[currentQuestionIndex] = userAnswers[currentQuestionIndex];
    }

    if (currentQuestionIndex < questions.length - 1) {
      setUserAnswers(newUserAnswers);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleFinishClick = (event) => {
    event.preventDefault();
    console.log("Exam finished!");
    handleSubmit();
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const newQuestions = [...questions];
    const question = newQuestions[currentQuestionIndex];

    if (question && question.type === "kotakcentang") {
      const choiceIndex = question.choices.findIndex(
        (choice) => choice.id === parseInt(value)
      );
      if (choiceIndex !== -1) {
        question.choices[choiceIndex].answer = checked;
      }

      setQuestions(newQuestions);

      const prevAnswers = [...userAnswers];
      prevAnswers[currentQuestionIndex] = {
        id: question.id,
        answer: question.choices
          .filter((choice) => choice.answer)
          .map((choice) => choice.id.toString()),
      };
      setUserAnswers(prevAnswers);
    }
  };

  const handleRadioChange = (event) => {
    const { value } = event.target;
    const newQuestions = [...questions];
    const question = newQuestions[currentQuestionIndex];

    // Mengupdate nilai answer pada semua opsi
    question.choices.forEach((choice) => {
      choice.answer = choice.id === parseInt(value);
    });

    setQuestions(newQuestions);

    // Update userAnswers state
    const prevAnswers = [...userAnswers];
    prevAnswers[currentQuestionIndex] = {
      id: question.id,
      answer: question.choices.map((choice) => choice.answer),
    };
    setUserAnswers(prevAnswers);
  };

  const handleSubmit = async (event) => {
    try {
      console.log("Answers submitted!");
      // console.log(userAnswers);
      setIsLoading(true);
      const data = await submitUjian(idUjian, userAnswers);
      if (data) {
        navigate(`/siswa/kelas/${idKelas}/detailkelas/${idMapel}/ujian`);
      }
    } catch (error) {
      console.log("Error adding assignment:", error);
    }
  };

  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <Header />
      <Nav />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row items-center mt-[45px] ml-[103px]">
          <RiFilePaperLine className="rounded-full bg-[#EEF4FA] text-[#1A1F5A] text-5xl p-2 align-middle" />
          <h1 className="font-bold text-[#1A1F5A] ml-10">
            {" "}
            Soal Nomor {currentQuestionIndex + 1}{" "}
          </h1>
          <h1 className="text-slate-400 font-bold ml-60">
            Sisa Waktu: {formattedMinutes}:{formattedSeconds}
          </h1>
        </div>
        <div className="flex flex-col">
          <div className="container mx-auto flex text-biru ml-[103px]">
            <div className="w-[60%]">
              {questions[currentQuestionIndex] && (
                <div key={questions[currentQuestionIndex].id} className="my-6">
                  <div className="flex items-center mb-2">
                    <span className="font-bold mr-2">
                      {questions[currentQuestionIndex].id}.
                    </span>
                    <span className="text-[15px]">
                      {questions[currentQuestionIndex].question}
                    </span>
                  </div>

                  {questions[currentQuestionIndex].type === "essai" ? (
                    <textarea
                      rows="2"
                      className="border border-biru rounded-md w-96 max-w-2xl"
                      value={questions[currentQuestionIndex].answer}
                      onChange={(e) => {
                        const newQuestions = [...questions];
                        newQuestions[currentQuestionIndex].answer =
                          e.target.value;
                        setQuestions(newQuestions);

                        const prevAnswers = [...userAnswers];
                        prevAnswers[currentQuestionIndex] = {
                          id: questions[currentQuestionIndex].id,
                          answer: e.target.value,
                        };
                        setUserAnswers(prevAnswers);
                      }}
                    ></textarea>
                  ) : (
                    <ul className="ml-6">
                      {questions[currentQuestionIndex].choices.map((choice) => (
                        <li key={choice.id} className="my-2">
                          {questions[currentQuestionIndex].type ===
                          "kotakcentang" ? (
                            <label className="inline-flex items-center">
                              <input
                                type="checkbox"
                                name={`question-${questions[currentQuestionIndex].id}`}
                                value={choice.id}
                                checked={choice.answer}
                                onChange={handleCheckboxChange}
                              />

                              <span className="ml-2">{choice.choice}</span>
                            </label>
                          ) : (
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name={`question-${questions[currentQuestionIndex].id}`}
                                value={choice.id}
                                checked={choice.answer}
                                onChange={handleRadioChange}
                              />
                              <span className="ml-2">{choice.choice}</span>
                            </label>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
            {/* <div className="w-[10%] mt-0">
              <NomorUjian />
            </div> */}
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-white rounded-md mr-2"
            onClick={handlePreviousClick}
            disabled={currentQuestionIndex === 0}
          >
            Soal Sebelumnya
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-biru text-white rounded-md"
            onClick={handleNextClick}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Soal Selanjutnya
          </button>
          {currentQuestionIndex === questions.length - 1 && (
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md ml-2"
              onClick={handleFinishClick}
            >
              Selesai
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default ExamPage;
