import React from 'react'

function TabelAnggotaKelas() {
  return (
    <div>
        <div className='flex flex-col ml-10 mt-10 mr-10 border-[0.3px] py-2 px-5 shadow-md'>
            <table className='border-separate border-spacing-y-5'>
                <thead>
                    <tr className='bg-tosca'>
                        <th className='py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru'>No. Urut</th>
                        <th className='py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru'>NISN Peserta</th>
                        <th className='py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru'>L/P</th>
                        <th className='py-2 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru'>Agama</th>
                        <th className='py-2 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru'>Nama Peserta Kelas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-[0.3px] shadow-md'>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center'>1</td>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center'>XXXXXXX</td>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center'>P</td>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center'>Islam</td>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru text-center'>Lorem ipsum dolor sit</td>
                    </tr>
                    <tr className='border-[0.3px] shadow-md'>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center'>1</td>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center'>XXXXXXX</td>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center'>P</td>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center'>Islam</td>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru text-center'>Lorem ipsum dolor sit</td>
                    </tr>
                    <tr className='border-[0.3px] shadow-md'>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center'>1</td>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center'>XXXXXXX</td>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center'>P</td>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center'>Islam</td>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru text-center'>Lorem ipsum dolor sit</td>
                    </tr>
                    <tr className='border-[0.3px] shadow-md'>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center'>1</td>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center'>XXXXXXX</td>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center'>P</td>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center'>Islam</td>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru text-center'>Lorem ipsum dolor sit</td>
                    </tr>
                    <tr className='border-[0.3px] shadow-md'>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center'>1</td>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center'>XXXXXXX</td>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center'>P</td>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] shadow-md border-biru text-center'>Islam</td>
                        <td className='py-2 px-3 border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] shadow-md border-biru text-center'>Lorem ipsum dolor sit</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TabelAnggotaKelas;