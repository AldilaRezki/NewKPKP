import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import ListTugas from '../components/ListTugas';
import EditAkun from '../components/EditAkun';
import { MdOutlineDriveFileMove } from 'react-icons/md';
import { SiGoogleclassroom } from 'react-icons/si';
import { BiUserCircle } from 'react-icons/bi';
import { MdGroups } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Kelas() {
  return (
    <>
      <div>
        <Header />
        <Nav />
      </div>
      <div className='flex flex-col justify-between'>
        <div className='mt-16 ml-10 w-1/2 flex'>
          <MdOutlineDriveFileMove className='text-2xl text-[#1A1F5A]' />
          <h1 className='font-bold ml-4 text-[#1A1F5A]'>SEMESTER AWAL 2022/2023</h1>
        </div>
        <Link to='/mapel'>
          {' '}
          <div className='mt-2 ml-10 w-[559px] h-[49px] bg-[#EEF4FA] flex items-center'>
            <SiGoogleclassroom className='text-2xl text-[#1A1F5A] ml-1' />
            <h1 className='font-bold ml-4 text-[#1A1F5A]'>XII IPA 1</h1>
          </div>
        </Link>
        <div className='mt-2 ml-10 w-[559px] h-[66px] border border-[#1A1F5A] flex items-center shadow-md'>
          <BiUserCircle className='text-2xl text-[#1A1F5A] ml-1' />
          <h1 className='ml-2'>Lorem Ipsum, S.Pd</h1>
          <MdGroups className='ml-10 text-2xl' />
          <h1 className='ml-2'>35 Orang</h1>
        </div>
      </div>

      <div className='flex justify-end px-10 pt-8'>
        <EditAkun />
      </div>
      <div className='flex justify-end mt-1.5 mr-10 px-10 mb-20'>
        <ListTugas />
      </div>
    </>
  );
}
export default Kelas;