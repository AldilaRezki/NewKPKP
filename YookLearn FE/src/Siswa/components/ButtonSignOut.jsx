import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

const ButtonSignOut = () => {
  const [open, setOpen] = useState(false);
  const Menus = ["Logout"];
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
                <li className="py-2 px-4 text-lg cursor-pointer rounded hover:bg-tosca" key={menu}>
                  {menu}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default ButtonSignOut;
