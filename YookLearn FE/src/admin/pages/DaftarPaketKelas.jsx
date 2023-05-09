import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faAngleLeft, faFileImport, faGreaterThan, faLessThan, faMagnifyingGlass, faPen, faPersonChalkboard, faPlus, faTrash, faUserTie } from '@fortawesome/free-solid-svg-icons';

function Daftar3() {
  const pakets = [
    { id: 1, name: '11-IPA-1'},
    { id: 2, name: '11-IPA-2'},
    { id: 3, name: '11-IPS'},
    { id: 4, name: '12-IPA-1'},
    { id: 5, name: '12-IPA-2'},
    { id: 6, name: '12-IPS'},
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-[#1A1F5A] text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold font-mono">YookLearn</h1>
        </div>
      </header>
      <div className="container mx-auto px-4 py-6">
        <div className='flex'>
          <a href="/adminpage">
            <FontAwesomeIcon icon={faAngleLeft} className='text-[#1A1F5A] text-3xl ml-2 pr-3' />
          </a>
            <h1 className="text-2xl font-bold text-[#1A1F5A] mb-4">Daftar Paket Kelas</h1>
        </div>
        
        <div className='flex justify-end'>
          <span className='flex items-center'>
            <div className='bg-gray-200 p-2 rounded-md m-2'>
              <a href="">
              <FontAwesomeIcon icon={faFileImport} className='text-[#1A1F5A] text-3xl ml-2' />
              <span className=' ml-2 mr-4 font-bold text-xl text-[#1A1F5A]'>Import</span>
              </a>
            </div>
            <div className='bg-gray-200 p-2 rounded-md'>
              <a href="/daftarakun">
              <FontAwesomeIcon icon={faPlus} className='text-[#1A1F5A] text-3xl ml-2' />
              <span className=' ml-2 mr-4 font-bold text-xl text-[#1A1F5A]'>Tambahkan Paket</span>
              </a>
            </div>
          </span>
        </div>
        
        <div className="bg-white shadow overflow-hidden rounded-none">
          <div className='p-2 bg-gray-200'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[#1A1F5A] px-2 pr-4' />
            <input
            type="text"
            className="w-11/12 border rounded-lg px-4 py-2"
            placeholder="Cari Paket"
            />
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Nama Paket
                </th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pakets.map((paket) => (
                <tr key={paket.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {paket.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A1F5A] font-bold">{paket.name}</td>
                  <td className=''><FontAwesomeIcon icon={faPen} className='text-[#1A1F5A]' /></td>
                  <td className='pr-2'><FontAwesomeIcon icon={faTrash} className='text-[#1A1F5A]' /></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='flex justify-center py-4'>
            <div className='px-2'><FontAwesomeIcon icon={faLessThan} className='text-[#1A1F5A]' /></div>
            <div className='px-2'>1</div>
            <div className='px-2'>2</div>
            <div className='px-2'>3</div>
            <div className='px-2'>...</div>
            <div className='px-2'>9</div>
            <div className='px-2'>10</div>
            <div className='px-2'><FontAwesomeIcon icon={faGreaterThan} className='text-[#1A1F5A]' /></div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Daftar3;
