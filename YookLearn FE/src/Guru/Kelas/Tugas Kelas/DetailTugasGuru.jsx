import React from "react";
import Header from "../../Header";
import HeaderKelas from "../HeaderKelas";
import TabelDetailTugas from "./TabelDetailTugas";

function DetailTugasGuru() {
  return (
    <div>
      <Header></Header>
      <HeaderKelas></HeaderKelas>
      <div className="flex mt-10 mx-10 justify-between">
        <h1 className="my-auto text-xl font-medium text-biru">Detail Tugas</h1>
      </div>
      <div className="mx-10 mt-10 border-[0.3px] shadow-md">
        <span className="bg-tosca w-full flex py-2 px-4 text-biru font-medium">
          Detail Tugas
        </span>
        <p className="w-full flex py-4 px-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          voluptatibus facilis qui velit maiores omnis. Odio nulla nesciunt
          quaerat id eligendi ut praesentium vero corrupti eum dolor? Pariatur
          amet sed optio nobis veritatis libero porro sapiente et, aliquam
          similique reprehenderit saepe neque blanditiis earum qui voluptas
          distinctio reiciendis, aspernatur perferendis natus suscipit? Aliquam
          magnam, earum doloribus hic nulla ea obcaecati maiores maxime quis
          aliquid consectetur illum, nisi repellendus eaque minima tempore quo
          perferendis impedit esse!
        </p>
      </div>
      <div className="mb-20">
        <TabelDetailTugas></TabelDetailTugas>
      </div>
    </div>
  );
}

export default DetailTugasGuru;
