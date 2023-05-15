import React from 'react'
import HeaderGuru from '../HeaderGuru'
import { BsEye } from 'react-icons/bs'
import Header from '../Header'

function UbahPassword() {
  return (
    <div>
      <Header></Header>
        <HeaderGuru></HeaderGuru>
        <div className='flex justify-center items-center h-screen flex-col'>
          <div className='flex gap-y-2 flex-col'>
            <span>Password Lama</span>
            <form  className='flex justify-between pr-6 gap-x-6 border-[1px] border-slate-200 shadow-md w-[330px]'>
              <input type="text" placeholder='Masukkan password lama' className='flex py-3 pl-3 focus:outline-none w-[80%]' />
              <BsEye className='opacity-75 my-auto'></BsEye>
            </form>
          </div>
          <div className='flex mt-5 gap-y-2 flex-col'>
            <span>Password Baru</span>
            <form  className='flex justify-between pr-6 gap-x-6 border-[1px] border-slate-200 shadow-md w-[330px]'>
              <input type="text" placeholder='Masukkan password baru' className='flex py-3 pl-3 focus:outline-none w-[80%]' />
              <BsEye className='opacity-75 my-auto'></BsEye>
            </form>
          </div>
          <div className='flex gap-x-8 mt-10'>
            <a className='text-biru text-md my-auto'
            href='/guru/profil'>
              Batal
            </a>
            <a className='text-white text-md bg-biru py-3 px-3 rounded-md'>
              Ubah Password
            </a>
          </div>
        </div>
    </div>
  )
}

export default UbahPassword