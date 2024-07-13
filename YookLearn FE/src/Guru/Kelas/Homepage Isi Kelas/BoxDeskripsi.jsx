import { TbEdit } from "react-icons/tb";

function BoxDeskripsi({ nama_matpel }) {
  return (
    <div className="flex flex-col mx-10 px-8 py-4 my-10 bg-white h-fit text-text font-medium shadow-xl">
      <div className="flex justify-between text-xl">
        <h1>{nama_matpel}</h1>
      </div>
    </div>
  );
}

export default BoxDeskripsi;
