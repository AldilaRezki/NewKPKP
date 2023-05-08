import React from "react";
import { MdOutlineForum } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { GrSchedule } from "react-icons/gr";
import { BsFillChatRightFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";

function BoxDaftarForum() {
  return (
    <a
      className="flex border-[0.3px] my-10 py-5 shadow-md"
      href="/xipa1/forum/diskusi-pekan-1"
    >
      <div className="logoBoxDaftarForum text-2xl bg-tosca p-2 rounded-full mx-5 w-fit h-fit">
        <MdOutlineForum></MdOutlineForum>
      </div>
      <div className="detailBoxForum flex-wrap">
        <h1 className="namaForum text-large py-2">Diskusi Pekan 1</h1>
        <div className="flex mt-3">
          <div className="flex flex-col">
            <div className="namaPembuatForum my-2 flex text-sm gap-x-3">
              <BsFillPersonFill className="my-auto"></BsFillPersonFill>
              <span>Lorem Ipsum</span>
            </div>
            <div className="tanggalPembuatanForum my-2 flex text-sm gap-x-3">
              <GrSchedule className="my-auto"></GrSchedule>
              <span>Selasa, 30 Februari 2023</span>
            </div>
          </div>
          <div className="flex h-fit ml-16">
            <div className="jumlahBalasanForum my-2 flex text-sm gap-x-3">
              <BsFillChatRightFill className="my-auto"></BsFillChatRightFill>
              <span>19 balasan</span>
            </div>
          </div>
        </div>
      </div>
      <div className="ikonEditBoxForum flex py-2 px-8 h-fit">
        <BsThreeDotsVertical></BsThreeDotsVertical>
      </div>
    </a>
  );
}

export default BoxDaftarForum;
