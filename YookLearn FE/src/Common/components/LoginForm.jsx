// src/components/LoginForm.jsx
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
// import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const BASE_URL = import.meta.env.VITE_BASE_API;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setIsLoggedIn(true);

      // Menyimpan role user dari respons API
      const userRole = data.role;

      // Menyimpan token dan role user dari respons API pada local storage
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      if (userRole === "admin") {
        navigate("/admin/homepage");
      } else if (userRole === "guru") {
        navigate("/guru/homepage");
      } else if (userRole === "siswa") {
        navigate("/siswa/homepage");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center mb-3">
      <div className="bg-[#EEF4FA] w-64 p-2 flex items-center mr-2 shadow-md">
        <FaUserCircle className="text-gray-400 m-2" />
        <input
          type="username"
          placeholder="username"
          className="bg-[#EEF4FA] outline-none text-sm flex-1"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="bg-[#EEF4FA] w-64 p-2 flex items-center mr-2 shadow-md">
        <FaUserCircle className="text-gray-400 m-2" />
        <input
          type="password"
          placeholder="password"
          className="bg-[#EEF4FA] outline-none text-sm flex-1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex w-64 mb-5 justify-between">
        <label className="flex items-center text-xs">
          {" "}
          <input type="checkbox" name="remember" className="mr-1" />
          Remember Me
        </label>
        <a href="#" className="text-xs">
          Forgot Password?
        </a>
      </div>

      <button
        className="border-2 border-[#1A1F5A] rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-gray-300"
        onClick={handleLogin}
      >
        {" "}
        Login
      </button>
    </div>
  );
}
