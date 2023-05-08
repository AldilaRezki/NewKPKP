import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";

function IsiBalasanForum() {
  return (
    <div className="flex mt-14 mx-10 pr-10 pl-5 border-[0.3px] shadow-md">
      <div className="flex flex-col gap-y-5 w-fit py-10">
        <div className="fotoPembalasForum flex text-3xl mx-auto">
          <BsPersonFill></BsPersonFill>
        </div>
        <span className="namaPembalasForum text-lg mx-auto">Lorem Ipsum</span>
      </div>
      <div className="judulDanIsiBalasanForum flex flex-col py-8 ml-16">
        <span className="judulBalasanForum text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
        <span className="border-[0.5px] mt-4"></span>
        <span className="isiBalasanForum mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus,
          massa in gravida fermentum, dolor justo aliquet mauris,
        </span>
      </div>
      <div className="flex py-8 ml-48">
        <BsThreeDotsVertical></BsThreeDotsVertical>
      </div>
    </div>
  );
}

export default IsiBalasanForum;
