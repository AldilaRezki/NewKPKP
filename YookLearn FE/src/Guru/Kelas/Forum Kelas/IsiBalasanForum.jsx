import React from 'react'
import { BsFillReplyFill } from 'react-icons/bs';
import { BsPersonFill } from 'react-icons/bs';
import { BsThreeDotsVertical } from 'react-icons/bs';

function IsiBalasanForum() {
  return (
    <div className='flex flex-col mt-14 mx-10 border-[0.3px] shadow-md'>
        <div className='flex justify-between'>
            <div className='flex gap-x-12 ml-8'>
                <div className='flex flex-col gap-y-5 w-fit pt-10'>
                    <div className='fotoPembalasForum flex text-4xl mx-auto bg-tosca p-5 rounded-full'>
                        <BsPersonFill></BsPersonFill>
                    </div>
                    <span className='namaPembalasForum text-lg mx-auto'>
                        Lorem Ipsum
                    </span>
                </div>
                <div className='judulDanIsiBalasanForum flex flex-col pt-8 my-auto'>
                    <span className="judulBalasanForum text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                    <span className='border-[0.5px] mt-4'></span>
                    <span className='isiBalasanForum mt-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, massa in gravida fermentum, dolor justo aliquet mauris,
                    </span>
                </div>    
            </div>
            
            <div className='flex py-8 mr-10'>
                <BsThreeDotsVertical></BsThreeDotsVertical>
            </div>
        </div>  
        <div className='flex justify-end mr-10 mb-10'>
            <div className='flex gap-x-3 text-md text-white bg-biru py-2 px-3 rounded-md'>
                <BsFillReplyFill className='my-auto'></BsFillReplyFill>
                <span>Tambahkan balasan</span>
            </div>
        </div>
    </div>
    
  )
}

export default IsiBalasanForum