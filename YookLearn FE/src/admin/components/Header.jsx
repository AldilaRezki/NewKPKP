import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faAddressCard,
  faBookOpen,
  faFileImport,
  faGreaterThan,
  faHome,
  faLessThan,
  faMagnifyingGlass,
  faPen,
  faPenNib,
  faPersonChalkboard,
  faPlus,
  faTrash,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header class="relative bg-gradient-to-r from-[#1A1F5A] via-[#203da7] to-[#1c63cf] text-white">
      <div class="absolute inset-0 opacity-75"></div>
      <nav class="relative z-10 flex justify-between items-center max-w-7xl mx-auto px-4 py-6 lg:px-8">
        <a href="/" class=" flex items-center">
          <FontAwesomeIcon
            icon={faPenNib}
            className="text-white text-4xl p-3"
          />
          <div class=" flex-col">
            <div className="text-xl font-bold">YookLearn</div>
            <div>Empower Your Learning</div>
          </div>
        </a>
      </nav>
    </header>
  );
}

export default Header;
