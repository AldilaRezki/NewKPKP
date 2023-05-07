import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const Nav = () => {
  let Links = [
    { name: "Homepage", link: "/" },
    { name: "Kelas", link: "/kelas" },
  ];
  return (
    <div className="shadow-md w-full h-10 bg-[#EEF4FA] ">
      <div className="flex items-center justify-center  ">
        <ul className="flex items-center">
          {Links.map((Link) => (
            <li key={Link.name} className="md:ml-8 text-xl ">
              <a
                href={Link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {Link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end mr-4 text-xl">
        <AiOutlineUser />
      </div>
    </div>
  );
};
export default Nav;
