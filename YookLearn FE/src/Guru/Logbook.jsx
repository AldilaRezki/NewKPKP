import React from "react";
import Header from "./Header";
import HeaderGuru from "./HeaderGuru";

function LogbookGuru() {
    return (
      <div>
        <Header></Header>
        <HeaderGuru></HeaderGuru>

        <div>
            <h1 className="text-xl mt-8 ml-10 font-medium text-biru">Logbook</h1>
        </div>

        <div className="flex flex-col ml-10 mt-10 mr-10 border-[0.3px] py-2 px-5 shadow-md">
                <table className="table-fixed border-separate border-spacing-y-1 text-center">
                    {/* <thead>
                        <tr className="bg-tosca">
                            <th className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">Field</th>
                            <th className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">Value</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        <tr className="bg-tosca">
                            <td className="xl:w-1/4 min-[320px]:w-1/3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">Nama</td>
                            <td className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru">Nama 1</td>
                        </tr>
                        <tr className="bg-tosca">
                            <td className="xl:w-1/4 sm:w-1/3 py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">NISN</td>
                            <td className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru">NISN 1</td>
                        </tr>
                        <tr className="bg-tosca">
                            <td className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">Batch</td>
                            <td className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru">Batch 1</td>
                        </tr>
                        <tr className="bg-tosca">
                            <td className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">Asal Sekolah</td>
                            <td className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru">Sekolah 1</td>
                        </tr>
                        <tr className="bg-tosca">
                            <td className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">Jurusan</td>
                            <td className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru">Jurusan 1</td>
                        </tr>
                        <tr className="bg-tosca">
                            <td className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru">Kelas</td>
                            <td className="py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru">Kelas 1</td>
                        </tr>
                    </tbody>
                </table>

                <table className="table-fixed text-center text-sm mt-10">
                    <thead className="table-auto text-center">
                        <tr>
                            <th className="font-medium py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-biru">
                                No.
                            </th>
                            <th className="font-medium py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-biru">
                                Tanggal Aktivitas
                            </th>
                            <th className="md:w-4/12 font-medium py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-biru">
                                Deskripsi Kegiatan
                            </th>
                            <th className="md:w-5/12 font-medium py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] border-biru">
                                Lampiran
                            </th>
                        </tr>
                    </thead>
                    <tbody className="align-top">
                        <tr>
                            <th className="font-medium py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-biru">
                                1
                            </th>
                            <th className="font-medium py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-biru">
                                19/09/2025
                            </th>
                            <th className="font-medium py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-biru text-left pl-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ratione necessitatibus veniam laudantium accusantium quibusdam voluptatem esse ea vel dolor.
                            </th>
                            <th className="flex flex-wrap justify-center gap-1.5 py-2 px-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] border-biru">
                                <img
                                className="md:w-1/3 xl:h-auto"
                                src="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/10/26071254/mengenal-fakta-menarik-seputar-kucing-anggora-turki-halodoc.jpg.webp" 
                                alt="kucing" />
                                <img 
                                className="md:w-1/3 xl:h-auto"
                                src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/06/2023/12/27/pngtree-5-cute-kittens-looking-at-the-camera-image_2677857-1037121086.jpg" 
                                alt="" />
                                <img 
                                className="md:w-1/3 xl:h-auto"
                                src="https://www.acehardware.co.id/files/uploads/inspirationarticle/thumb_image/2022/Oct/11/mainimagecaramenjinakkankucingwebp-770x770.webp" 
                                alt="" />
                            </th>
                        </tr>
                    </tbody>
                </table>

        </div>

                


      </div>
    );
  }
  
  export default LogbookGuru;