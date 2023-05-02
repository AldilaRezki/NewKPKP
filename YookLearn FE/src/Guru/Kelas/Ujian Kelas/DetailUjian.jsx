import React from 'react'
import Header from '../../Header';
import HeaderKelas from '../HeaderKelas';
import { BiArrowBack } from 'react-icons/bi';
import { CgGoogleTasks } from 'react-icons/cg';

function DetailUjian() {
  return (
    <div>
      <Header></Header>
      <HeaderKelas></HeaderKelas>
      <div className='bg-tosca mt-10 mx-10 p-2'>
        <a href='/xipa1/ujian'>
          <BiArrowBack className='bg-white text-xl'></BiArrowBack>
        </a>
      </div>
      <h1 className='text-xl mt-8 ml-10 font-medium text-biru'>Ujian Pekan 1</h1>

      <a className='flex ml-10 mt-10 gap-x-8 border-[0.3px] my-10 py-4 pl-5 shadow-md w-[360px]'
      href='/xipa1/ujian/ujian-pekan-1/daftar-soal'>
        <div className='text-biru bg-tosca w-fit h-fit text-3xl p-1 rounded-full'>
            <CgGoogleTasks></CgGoogleTasks>
        </div>
        <span className='text-lg py-1'>Daftar Soal</span>
      </a>

      <a className='flex ml-10 mt-10 gap-x-8 border-[0.3px] my-10 py-4 pl-5 shadow-md w-[360px]'
      href='/xipa1/ujian/ujian-pekan-1/hasil-ujian-peserta'>
        <div className='text-biru bg-tosca w-fit h-fit text-3xl p-1 rounded-full'>
            <CgGoogleTasks></CgGoogleTasks>
        </div>
        <span className='text-lg py-1'>Hasil Ujian Peserta</span>
      </a>

      <a className='flex ml-10 mt-10 gap-x-8 border-[0.3px] my-10 py-4 pl-5 shadow-md w-[360px]'
      href='/xipa1/ujian/ujian-pekan-1/hasil-ujian-kelas'>
        <div className='text-biru bg-tosca w-fit h-fit text-3xl p-1 rounded-full'>
            <CgGoogleTasks></CgGoogleTasks>
        </div>
        <span className='text-lg py-1'>Hasil Ujian Kelas</span>
      </a>
    </div>
  )
}

export default DetailUjian;
