import React, { useEffect, useState } from 'react';
import { isAuthenticated } from '../../Common/functions/Auth';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import FormUbahPass from '../components/FormUbahPass';

export default function UbahPass() {
  
  const navigate = useNavigate();
  const login = isAuthenticated('siswa');
  const [new_password, setnew_password] = useState("");
  const [old_password, setold_password] = useState("");
  const [showFormUbahPass, setShowFormUbahPass] = useState(false);
  const handleOnClose = () => setShowFormUbahPass(false);
  
  useEffect(() => {
    if (!login) {
      navigate('/');
    }
  }, [login, navigate]);

  const handleResetPassword = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8000/api/student/editpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ 
          new_password,
          old_password,
        })
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message);
      }

      setShowFormUbahPass(true)

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div>
        <Header />
        <Nav />
      </div>
      <div className="flex justify-center items-center h-screen">
        <form className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center text-[#1A1F5A]">
            Ubah Kata Sandi
          </h2>
          <div className="mb-4 mt-5">
            <label
              className="block text-[#1A1F5A] font-bold mb-2"
              htmlFor="password"
            >
              Kata Sandi Lama
            </label>
            <input
              // id="name"
              type="password"
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[616px]"
              placeholder="Masukkan kata sandi lama"
              value={old_password}
              onChange={(e) => setold_password(e.target.value)}
            />
          </div>
          <div className="mt-5">
            <label
              className="block text-[#1A1F5A] font-bold mb-2"
              htmlFor="password"
            >
              Kata Sandi Baru
            </label>
            <input
              // id="name"
              type="password"
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[616px]"
              placeholder="Masukkan kata sandi baru"
              value={new_password}
              onChange={(e) => setnew_password(e.target.value)}
            />
          </div>

          <button
            onClick={ handleResetPassword }
            className="bg-[#1A1F5A] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
            type="button"
          >
            Ubah Kata Sandi
          </button>
        </form>
      </div>

      <FormUbahPass onClose={handleOnClose} visible={showFormUbahPass} />

    </>
  );
}
