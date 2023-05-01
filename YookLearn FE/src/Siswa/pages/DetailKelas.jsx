import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';
import { MdTask } from 'react-icons/md';
import { IoMdPaper } from 'react-icons/io';
import { RiFilePaperLine } from 'react-icons/ri';
import FiturKelas from '../components/FiturKelas';

export default function DetailKelas() {
  return (
    <>
      <div>
        <Header />
        <Nav />
      </div>
      <div className='flex flex-col justify-between'>
        <div className='mt-16 ml-10 w-1/2 flex'>
          <BsFillJournalBookmarkFill className='text-2xl text-[#1A1F5A]' />
          <h1 className='text-xl ml-5 text-slate-400 font-bold'>Bahasa Indonesia</h1>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4 mt-10'>
        <div>
          <FiturKelas icon={<HiUserGroup size={50} />} label='Daftar Siswa' />
        </div>
        <div>
          <FiturKelas icon={<MdTask size={50} color='#1A1F5A' />} label='Tugas' />
        </div>
        <div>
          <FiturKelas icon={<IoMdPaper size={50} color='#1A1F5A' />} label='Materi' />
        </div>
        <div>
          <FiturKelas icon={<RiFilePaperLine size={50} color='#1A1F5A' />} label='Ujian' />
        </div>
      </div>
    </>
  );
}