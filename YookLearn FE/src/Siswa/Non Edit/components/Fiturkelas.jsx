import React from 'react';
import PropTypes from 'prop-types';

const Fiturkelas = ({ icon, label }) => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='rounded-full bg-[#EEF4FA] text-[#1A1F5A] text-7xl p-4'>{icon}</div>
        <div>
          <h1> {label}</h1>
        </div>
      </div>
    </>
  );
};
Fiturkelas.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default Fiturkelas;
