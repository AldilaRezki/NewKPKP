import React, { useEffect } from 'react';
import { isAuthenticated } from '../../Common/functions/Auth';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Nav from '../components/Nav';
import { FaRegUser } from 'react-icons/fa';

function DataDiri() {
  const navigate = useNavigate();
  const login = isAuthenticated('siswa');

  useEffect(() => {
    if (!login) {
      navigate('/');
    }
  }, [login, navigate]);

  return (
    <>
      <div>
        <Header />
        <Nav />
      </div>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='flex flex-col items-center justify-center bg-[#EEF4FA] w-64 h-64 rounded-full'>
          <FaRegUser className='text-6xl text-[#1A1F5A]' />
        </div>
        <div className='flex flex-col mt-8'>
          <div className='mb-4'>
            <label className='font-bold text-[#1A1F5A]'>Nama:</label>
            <p className='text-[#1A1F5A]'>Lorem ipsum dolor sit amet</p>
          </div>
          <div className='mb-4'>
            <label className='font-bold text-[#1A1F5A]'>NISN:</label>
            <p className='text-[#1A1F5A]'>123456789</p>
          </div>
          <div className='mb-4'>
            <label className='font-bold text-[#1A1F5A]'>Jenis Kelamin:</label>
            <p className='text-[#1A1F5A]'>Laki-laki</p>
          </div>
          <div className='mb-4'>
            <label className='font-bold text-[#1A1F5A]'>Agama:</label>
            <p className='text-[#1A1F5A]'>Islam</p>
          </div>
          <div className='mb-4'>
            <label className='font-bold text-[#1A1F5A]'>Tanggal Lahir:</label>
            <p className='text-[#1A1F5A]'>31/01/2007</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataDiri;