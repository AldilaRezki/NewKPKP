import React from "react";

import ButtonSignOut from "./ButtonSignOut";

const Nav = () => {
    let Links = [
        { name: "Homepage", link: "/siswa/homepage" },
        { name: "Kelas", link: "/siswa/kelas" },
        { name: "Peminjaman Buku", link: "/siswa/logbook" },
    ];
    return (
        <div className="shadow-md flex justify-between w-full h-10 bg-[#EEF4FA] ">
            <div> </div>
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
            <div className="flex justify-end mr-4 mt-1">
                <ButtonSignOut />
            </div>
        </div>
    );
};
export default Nav;
