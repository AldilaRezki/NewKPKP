import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../pages/Header";
import { faAddressBook, faAddressCard, faBookOpen, faFileImport, faGreaterThan, faHome, faLessThan, faMagnifyingGlass, faPen, faPersonChalkboard, faPlus, faTrash, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { isAuthenticated } from "../../Common/services/Auth";
import { useNavigate } from "react-router-dom";

function AdminHomepage() {
  const navigate = useNavigate();
  const login = isAuthenticated("admin");

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-6">        
        <div className='flex justify-between'>
          <span className='flex items-center'>
            <div className='bg-gray-200 p-4 rounded-t-md'>
              <FontAwesomeIcon icon={faHome} className='text-[#1A1F5A] text-3xl pr-3 pb-1' />
              <span className=' mr-4 font-bold text-xl text-[#1A1F5A]'>Home</span>
            </div>
          </span>
          <span className='flex items-center'>
            <div className='bg-gray-200 p-2 rounded-md m-2'>
              <a href="/admin/daftarpaketkelas">
              <FontAwesomeIcon icon={faBookOpen} className='text-[#1A1F5A] text-3xl ml-2' />
              <span className=' ml-2 mr-4 font-bold text-xl text-[#1A1F5A]'>Daftar Paket Kelas</span>
              </a>
            </div>
            <div className='bg-gray-200 p-2 rounded-md'>
              <a href="/admin/listsiswa">
              <FontAwesomeIcon icon={faAddressBook} className='text-[#1A1F5A] text-3xl ml-2' />
              <span className=' ml-2 mr-4 font-bold text-xl text-[#1A1F5A]'>Daftar Akun</span>
              </a>
            </div>
          </span>
        </div>

        <div className="bg-white shadow overflow-hidden rounded-none">
          <div className="p-4 bg-gray-200"></div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200"></thead>
            <div className="bg-white divide-y divide-gray-200 ">
              <h1 className="text-[#1A1F5A] text-3xl p-5">
                Selamat Datang di Admin Homepage
              </h1>
            </div>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminHomepage;
