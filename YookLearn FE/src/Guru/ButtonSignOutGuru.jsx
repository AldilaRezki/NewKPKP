import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { logOut } from "../Siswa/services/SiswaAPI";

const ButtonSignOutGuru = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const Menus = [
    { label: "Profile", route: "/guru/profil" },
    { label: "Logout", route: "/" }
  ];

  const handleSubmit = async (route) => {
    if (route === "/") {
      const isSuccess = await logOut();
      if (isSuccess) {
        navigate(route);
      }
    } else {
      navigate(route);
    }
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-center w-[40px] h-[40px] bg-white rounded-full">
          <AiOutlineUser
            className="text-[25px]"
            onClick={() => setOpen(!open)}
          />
        </div>
        {open && (
          <div className="bg-white  shadow-lg absolute top-35 right-[20px]">
            <ul>
              {Menus.map((menu) => (
                <li
                  className="py-2 px-4 text-lg cursor-pointer rounded hover:bg-tosca"
                  key={menu.label}
                  onClick={() => handleSubmit(menu.route)}
                  type="button"
                >
                  {menu.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default ButtonSignOutGuru;
