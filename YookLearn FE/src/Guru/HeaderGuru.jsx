import ButtonSignOutGuru from "./ButtonSignOutGuru";
import { BsFillPersonFill } from "react-icons/bs";

function HeaderGuru() {
  return (
    <header className="flex justify-between bg-biru h-14">
      <div className="header_left flex gap-x-4 ml-10">
        <a className="logo text-white my-auto" href="/guru/homepage">
          YookLearn
        </a>
      </div>

      <div className="header_right flex gap-x-4 mr-10 items-center">
        <ButtonSignOutGuru className="header_profile flex bg-tosca items-center rounded-full w-10 h-10">
          <BsFillPersonFill></BsFillPersonFill>
        </ButtonSignOutGuru>
      </div>
    </header>
  );
}

export default HeaderGuru;
