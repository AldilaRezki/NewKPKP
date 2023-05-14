import React from "react";
import { BsTypeBold } from "react-icons/bs";
import { BsTypeItalic } from "react-icons/bs";
import { BsTypeUnderline } from "react-icons/bs";
import { MdFormatListBulleted } from "react-icons/md";
import { MdFormatListNumbered } from "react-icons/md";
import { MdFormatIndentIncrease } from "react-icons/md";
import { MdFormatColorFill } from "react-icons/md";
import { MdFormatClear } from "react-icons/md";
import { MdOutlineImage } from "react-icons/md";
import { MdAddLink } from "react-icons/md";

function Form() {
  return (
    <div className="border-[0.3px] shadow-md mx-10 mt-3">
      <div className="flex bg-tosca border-[0.3px] shadow-md py-1">
        <div className="mx-2 text-lg bg-white w-fit">
          <button className="p-1 mx-0.5 border-r-[2px] border-r-slate-500">
            <BsTypeBold></BsTypeBold>
          </button>
          <button className="p-1 mx-0.5 border-r-[2px] border-r-slate-500">
            <BsTypeItalic></BsTypeItalic>
          </button>
          <button className="p-1 mx-0.5 border-r-[2px] border-r-slate-500">
            <BsTypeUnderline></BsTypeUnderline>
          </button>
        </div>

        <div className="mx-2 text-lg bg-white w-fit">
          <button className="p-1 mx-0.5 border-r-[2px] border-r-slate-500">
            <MdFormatListBulleted></MdFormatListBulleted>
          </button>
          <button className="p-1 mx-0.5 border-r-[2px] border-r-slate-500">
            <MdFormatListNumbered></MdFormatListNumbered>
          </button>
          <button className="p-1 mx-0.5 border-r-[2px] border-r-slate-500">
            <MdFormatIndentIncrease></MdFormatIndentIncrease>
          </button>
        </div>

        <div className="mx-2 text-lg bg-white w-fit">
          <button className="p-1 mx-0.5 border-r-[2px] border-r-slate-500">
            <MdFormatColorFill></MdFormatColorFill>
          </button>
          <button className="p-1 mx-0.5 border-r-[2px] border-r-slate-500">
            <MdFormatClear></MdFormatClear>
          </button>
        </div>

        <div className="mx-2 text-lg bg-white w-fit">
          <button className="p-1 mx-0.5 border-r-[2px] border-r-slate-500">
            <MdOutlineImage></MdOutlineImage>
          </button>
          <button className="p-1 mx-0.5 border-r-[2px] border-r-slate-500">
            <MdAddLink></MdAddLink>
          </button>
        </div>
      </div>
      <div>
        <form>
          <textarea
            type="text"
            className="py-1 px-2 w-[100%] focus:outline-none focus:ring-1"
          />
        </form>
      </div>
    </div>
  );
}

export default Form;
