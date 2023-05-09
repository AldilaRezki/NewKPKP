import { MdLibraryBooks } from "react-icons/md";

function ListKelasAjar() {
  return (
    <div className="flex gap-x-8 bg-white shadow-md my-4 mx-4 py-4 w-fit pr-16">
      <div className="flex items-center">
        <div className="logoKelas text-white bg-biru w-12 h-12 rounded-full ml-5">
          <MdLibraryBooks className="text-3xl mx-auto mt-2" />
        </div>
      </div>

      <div>
        <div className="detailKelas flex flex-col gap-y-2">
          <h2>Kelas XI IPA 1</h2>
          <div className="jadwalKelas flex gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-calendar-stats"
              width="20"
              height="20"
              viewBox="0 -1 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"></path>
              <path d="M18 14v4h4"></path>
              <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
              <path d="M15 3v4"></path>
              <path d="M7 3v4"></path>
              <path d="M3 11h16"></path>
            </svg>
            <span>10.00 - 12.00</span>
          </div>
          <div className="nama_Matpel flex gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-book-2"
              width="22"
              height="22"
              viewBox="2 -1 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"></path>
              <path d="M19 16h-12a2 2 0 0 0 -2 2"></path>
              <path d="M9 8h6"></path>
            </svg>
            <span>Bahasa Indonesia</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListKelasAjar;
