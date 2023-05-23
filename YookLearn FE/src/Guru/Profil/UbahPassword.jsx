import React, { useState } from "react";
import HeaderGuru from "../HeaderGuru";
import { BsEye } from "react-icons/bs";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../services/GuruAPI";
import { isAuthenticated } from "../../Common/services/Auth";

function UbahPassword() {
  const navigate = useNavigate();
  const login = isAuthenticated("guru");
  const [new_password, setnew_password] = useState("");
  const [old_password, setold_password] = useState("");

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  const handleResetPassword = async () => {
    const isSuccess = await resetPassword(new_password, old_password);
    if (isSuccess) {
      navigate("/guru/profil");
    }
  };

  return (
    <div>
      <Header></Header>
      <HeaderGuru></HeaderGuru>
      <div className="flex justify-center items-center h-screen flex-col">
        <div className="flex gap-y-2 flex-col">
          <span>Password Lama</span>
          <form className="flex justify-between pr-6 gap-x-6 border-[1px] border-slate-200 shadow-md w-[330px]">
            <input
              type="text"
              placeholder="Masukkan password lama"
              value={old_password}
              onChange={(e) => setold_password(e.target.value)}
              className="flex py-3 pl-3 focus:outline-none w-[80%]"
            />
            <BsEye className="opacity-75 my-auto"></BsEye>
          </form>
        </div>
        <div className="flex mt-5 gap-y-2 flex-col">
          <span>Password Baru</span>
          <form className="flex justify-between pr-6 gap-x-6 border-[1px] border-slate-200 shadow-md w-[330px]">
            <input
              type="text"
              placeholder="Masukkan password baru"
              className="flex py-3 pl-3 focus:outline-none w-[80%]"
              value={new_password}
              onChange={(e) => setnew_password(e.target.value)}
            />
            <BsEye className="opacity-75 my-auto"></BsEye>
          </form>
        </div>
        <div className="flex gap-x-8 mt-10">
          <a className="text-biru text-md my-auto" href="/guru/profil">
            Batal
          </a>
          <button
            className="text-white text-md bg-biru py-3 px-3 rounded-md"
            onClick={handleResetPassword}
          >
            Ubah Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default UbahPassword;
