import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../Siswa/services/SiswaAPI";

const ButtonSignOutAdmin = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const Menus = ["Logout"];

  const handleSubmit = async () => {
    const isSuccess = await logOut();
    if (isSuccess) {
      navigate("/");
    }
  };

  return (
    <>
      <div>
        <div>
          <AiOutlineUser
            className="text-[25px]"
            onClick={() => setOpen(!open)}
          />
        </div>
        {open && (
          <div className="bg-white  shadow-lg absolute top-35 right-[20px]">
            <ul>
              {Menus.map((menu) => (
                <button
                  className="py-2 px-4 text-lg cursor-pointer rounded hover:bg-tosca"
                  key={menu}
                  onClick={handleSubmit}
                  type="button"
                >
                  {menu}
                </button>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default ButtonSignOutAdmin;
