// src/pages/LoginPage.jsx
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center min-h-screen py-2">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-[#1A1F5A]">YukLearn!</span>
          </div>
          <div className="py-10 ">
            <h2 className="text-3xl font-bold text-[#1A1F5A] mb-2 ">Login</h2>
            <div className="border-2 w-10 border-[#1A1F5A] inline-block mb-2"></div>
            <LoginForm />
          </div>
        </div>
        <div className="w-2/5 bg-[#1A1F5A] text-white rounded-tr-2xl rounded-br-2xl py-36">
          <h2 className="text-3xl mb-2 font-bold">YukLearn!</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">
            Empower your learning with our management system.
          </p>
        </div>
      </div>
    </main>
  );
}
