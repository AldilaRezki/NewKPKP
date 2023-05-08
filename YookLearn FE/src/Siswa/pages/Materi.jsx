import React, { useEffect } from 'react';
import { isAuthenticated } from '../../Common/functions/Auth';
import { useNavigate } from 'react-router-dom';

import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import Header from '../components/Header';
import Nav from '../components/Nav';
import MateriTitle from '../components/MateriTitle';
import { Link } from 'react-router-dom';

function Materi() {

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
      <div className="flex flex-col justify-between">
        <div className="mt-16 ml-10 w-1/2 flex">
          <BsFillJournalBookmarkFill className="text-2xl text-[#1A1F5A]" />
          <Link to="/detailkelas">
            {" "}
            <h1 className="text-xl ml-5 text-slate-400 font-bold">
              Bahasa Indonesia
            </h1>{" "}
          </Link>
          <h1 className="text-xl ml-5 text-slate-400 font-bold"> > </h1>
          <h1 className="text-xl ml-5 text-slate-400 font-bold">Materi</h1>
        </div>
      </div>
      <div className="flex flex-col">
        <Link to="/detailmateri">
          {" "}
          <MateriTitle
            pertemuan="Pertemuan 1"
            tglUpload="Diupload: 19 Maret 2023, 23.59"
          />
          <MateriTitle
            pertemuan="Pertemuan 2"
            tglUpload="Diupload: 19 Maret 2023, 23.59"
          />
          <MateriTitle
            pertemuan="Pertemuan 3"
            tglUpload="Diupload: 19 Maret 2023, 23.59"
          />
        </Link>
      </div>
    </>
  );
}

export default Materi;
