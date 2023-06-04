import { TbEdit } from "react-icons/tb";

function BoxDeskripsi({ nama_matpel }) {
  return (
    <div className="flex flex-col mx-10 px-8 py-8 my-10 bg-tosca text-biru font-medium shadow-xl">
      <div className="flex justify-between pb-8 text-xl">
        <h1>{nama_matpel}</h1>
        <TbEdit></TbEdit>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus,
        massa in gravida fermentum, dolor justo aliquet mauris, ut elementum
        purus massa eu justo. In consectetur neque sed urna consequat blandit.
        Duis at urna ut lectus pharetra mollis. Donec euismod, libero eget
        malesuada lobortis, urna nisl bibendum eros, vel vestibulum arcu augue
        vitae massa.
      </p>
    </div>
  );
}

export default BoxDeskripsi;
