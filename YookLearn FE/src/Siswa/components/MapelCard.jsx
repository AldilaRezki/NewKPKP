import React from "react";
import { IoIosPaper } from "react-icons/io";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MapelCard = ({ namaMapel, namaPengajar, jadwal }) => {
  return (
    <>
      <Link to="/detailkelas">
        {" "}
        <div className="bg-[#EEF4FA] flex flex-col w-[365px] h-[210px] shadow-md">
          <div className="flex items-center justify-start bg-[#1A1F5A] w-[365px] h-[73px]">
            <IoIosPaper className=" rounded-full bg-[#EEF4FA] text-[#1A1F5A] text-4xl p-2 align-middle ml-4" />
            <h1 className="text-white font-bold ml-7">{namaMapel}</h1>
          </div>
          <div className="flex flex-col">
            <div className="flex mt-4 ml-4">
              <FaChalkboardTeacher className="text-[#1A1F5A] text-3xl" />
              <h1 className="ml-2 text-[#1A1F5A]">{namaPengajar}</h1>
            </div>
            <div className="flex mt-4 ml-4">
              <GrSchedules className="text-[#1A1F5A] text-3xl" />
              <h1 className="ml-2 text-[#1A1F5A]">{jadwal}</h1>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

MapelCard.propTypes = {
  namaMapel: PropTypes.string.isRequired,
  namaPengajar: PropTypes.string.isRequired,
  jadwal: PropTypes.string.isRequired,
};

export default MapelCard;
