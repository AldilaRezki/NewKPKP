import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import list from '../../../list.json';

function Listtugas() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative flex flex-col items-center w-[340px] h-[340px] rounded-lg'>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className='bg-[#1A1F5A] text-white text-base p-4 w-full flex items-center justify-between font-bold rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white'>
        List Tugas
        {!isOpen ? <AiFillCaretDown className='h-8' /> : <AiFillCaretUp className='h-8' />}
      </button>

      {isOpen && (
        <div className='bg-[#EEF4FA] absolute top-20 flex flex-col items-start rounded-lg p-2 w-full'>
          {list.map((item, i) => (
            <div className=' flex w-full justify-between cursor-pointer rounded-r-lg border-l-transparent flex-col' key={i}>
              <h1 className='font-bold text-[#1A1F5A]'> {item.tugas} </h1>
              <p className='text-[#1A1F5A] flex-row'> {item.dl} </p>
              <p className='text-[#1A1F5A] flex-row'> {item.detail} </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Listtugas;
