import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../../Common/services/Auth";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Editakun from "../components/EditAkun";
import Listtugas from "../components/ListTugas";

import { CgProfile } from "react-icons/cg";
import LoadingPage from "./LoadingPage";
import { fetchStudentAssignment } from "../services/SiswaAPI";

function StudentPage() {
  const navigate = useNavigate();
  const login = isAuthenticated("siswa");
  const [isLoading, setIsLoading] = useState(true);
  const [tugas, setTugas] = useState([]);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchStudentAssignment();
      setTugas(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <Header />
      <Nav />
      <div className="flex flex-row justify-between">
        <div className="mt-16 ml-10 bg-[#EEF4FA] rounded-lg shadow-md text-xl w-1/2">
          <h1 className="font-bold text-center">Selamat Datang</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quia
            corporis aliquam. Autem, quae explicabo corporis quos soluta
            laudantium fugiat minima eligendi sequi eius iusto nobis! Error eius
            libero fuga?
          </p>
        </div>
      </div>

      <div className="flex justify-end px-10 pt-8">
        <Editakun />
      </div>
      <div className="flex justify-end mt-1.5 mr-10 px-10 mb-20">
        <Listtugas dataTugas={tugas} />
      </div>
    </div>
  );
}
export default StudentPage;
