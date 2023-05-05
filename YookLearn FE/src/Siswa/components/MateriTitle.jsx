import React from 'react';
import PropTypes from 'prop-types';
import { IoMdPaper } from 'react-icons/io';

const MateriTitle = ({ pertemuan, tglUpload }) => {
  return (
    <>
      <div className='flex flex-row items-center mt-[75px] ml-[103px]'>
        <IoMdPaper className='rounded-full bg-[#EEF4FA] text-[#1A1F5A] text-5xl p-2 align-middle'></IoMdPaper>
        <h1 className='font-bold text-[#1A1F5A] ml-10'> {pertemuan} </h1>
        <h1 className='text-slate-400 font-bold ml-60'>{tglUpload}</h1>
      </div>
    </>
  );
};
MateriTitle.propTypes = {
  pertemuan: PropTypes.string.isRequired,
  tglUpload: PropTypes.string.isRequired,
};

export default MateriTitle;
