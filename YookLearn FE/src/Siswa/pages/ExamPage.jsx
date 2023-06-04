import React, { useState, useEffect } from "react";
import NomorUjian from "../components/NomorUjian";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { RiFilePaperLine } from "react-icons/ri";

const ExamPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [countdown, setCountdown] = useState(60);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is the capital of France?",
      choices: ["London", "Paris", "Berlin", "Rome"],
      type: "pilgan",
      answer: "Paris",
    },
    {
      id: 2,
      question: "What is the highest mountain in the world?",
      choices: ["K2", "Makalu", "Everest", "Lhotse"],
      type: "pilgan",
      answer: "Everest",
    },
    {
      id: 3,
      question: "Write a short essay about your favorite book.",
      type: "essay",
      answer: "",
    },
    {
      id: 4,
      question: "hobby?",
      choices: ["watching movie", "Music", "read a book", "sport"],
      type: "checkbox",
      answer: [],
    },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  const handlePreviousClick = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleFinishClick = () => {
    // Logic to handle finishing the exam
    console.log("Exam finished!");
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const newQuestions = [...questions];
    const answerIndex = newQuestions[currentQuestionIndex].answer.indexOf(value);

    if (checked && answerIndex === -1) {
      newQuestions[currentQuestionIndex].answer.push(value);
    } else if (!checked && answerIndex !== -1) {
      newQuestions[currentQuestionIndex].answer.splice(answerIndex, 1);
    }

    setQuestions(newQuestions);
  };

  return (
    <>
      <Header />
      <Nav />
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
                {questions[currentQuestionIndex].type === "essay" ? (
                  <textarea
                    rows="2"
                    className="border border-biru rounded-md w-96 "
                    value={questions[currentQuestionIndex].answer}
                    onChange={(e) => {
                      const newQuestions = [...questions];
                      newQuestions[currentQuestionIndex].answer =
                        e.target.value;
                      setQuestions(newQuestions);
                    }}
                  ></textarea>
                ) : (
                  <ul className="ml-6">
                    {questions[currentQuestionIndex].choices.map(
                      (choice, index) => (
                        <li key={index} className="my-2">
                          {questions[currentQuestionIndex].type === "checkbox" ? (
                            <label className="inline-flex items-center">
                              <input
                                type="checkbox"
                                name={`question-${questions[currentQuestionIndex].id}`}
                                value={choice}
                                checked={questions[currentQuestionIndex].answer.includes(choice)}
                                onChange={handleCheckboxChange}
                              />
                              <span className="ml-2">{choice}</span>
                            </label>
                          ) : (
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name={`question-${questions[currentQuestionIndex].id}`}
                                value={choice}
                              />
                              <span className="ml-2">{choice}</span>
                            </label>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            )}
          </div>
          <div className="w-[10%] mt-0">
            <NomorUjian />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <button
          className="px-4 py-2 bg-gray-300 text-white rounded-md mr-2"
          onClick={handlePreviousClick}
          disabled={currentQuestionIndex === 0}
        >
          Soal Sebelumnya
        </button>
        <button
          className="px-4 py-2 bg-biru text-white rounded-md"
          onClick={handleNextClick}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          Soal Selanjutnya
        </button>
        {currentQuestionIndex === questions.length - 1 && (
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md ml-2"
            onClick={handleFinishClick}
          >
            Selesai
          </button>
        )}
      </div>
    </>
  );
};

export default ExamPage;
