import React from "react";
import Header from "./Header";
import HeaderGuru from "./HeaderGuru";

function DaftarLogbook() {
    return (
      <div>
        <Header></Header>
        <HeaderGuru></HeaderGuru>

        <div>
            <h1 className="text-xl mt-8 ml-10 font-medium text-biru">Logbook</h1>
        </div>

        <div className="flex flex-col ml-10 mt-10 mr-10 border-[0.3px] py-2 px-5 shadow-md">
                <table className="table-fixed border-separate border-spacing-y-1 text-center">
                    <thead>
                        <tr className="bg-tosca">
                            <th className="xl:w-1/4 min-[320px]:w-1/3 font-medium border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">No.</th>
                            <th className="py-2 font-medium border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru">Nama</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-tosca">
                            <td className="xl:w-1/4 min-[320px]:w-1/3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">1</td>
                            <td className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru">
                                <a href="/guru/logbook">Lorem Ipsum</a>
                            </td>
                        </tr>    
                    </tbody>
                </table>

        </div>

                


      </div>
    );
  }
  
  export default DaftarLogbook;