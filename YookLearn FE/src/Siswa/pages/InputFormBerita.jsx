// import React, { useState, useEffect } from "react";
// // import { Button } from '../components';
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// // import toTitleCase from './titleCase.js';

// function InputFormBerita({ sektor, kecamatan, editData }) {
//   const [judul, setJudul] = useState("");
//   const [isi, setIsi] = useState("");
//   const [gambar, setGambar] = useState(null);

//   const handleIsiChange = (event) => {
//     setIsi(event.target.value);
//   };

//   const history = useNavigate();
//   const [validation, setValidation] = useState([]);

//   useEffect(() => {
//     if (editData) {
//       setJudul(editData.judul);
//       setIsi(editData.isi);
//     }
//   }, [editData]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(judul, sektor, kecamatan, gambar, isi);

//     const token = localStorage.getItem("token");
//     const formData = new FormData();
//     formData.append("judul", toTitleCase(judul));
//     formData.append("sektor", sektor);
//     formData.append("kecamatan", kecamatan);
//     formData.append("gambar", gambar);
//     formData.append("isi", isi);

//     const url = editData
//       ? `http://localhost:8000/api/Konten Berita/${editData.id}`
//       : "http://localhost:8000/api/Konten Berita";

//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//     try {
//       if (editData) {
//         await axios.post(url, formData);
//         console.log("Sukses Mengupdate Data Konten Berita");
//         localStorage.removeItem("editData");
//       } else {
//         await axios.post(url, formData);
//         console.log("Sukses Menambahkan Data  Konten Berita");
//       }

//       const storedData = localStorage.getItem("dataKontenBerita");
//       if (storedData) {
//         localStorage.removeItem("dataKontenBerita");
//       }
//       history("/berita");
//     } catch (error) {
//       setValidation(error.response.data);
//     }
//   };

//   const handleGambarChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = () => {
//       setGambar(file);
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="form-input">
//       <div className="judul-input-banner">
//         <h3>Uraian</h3>
//       </div>
//       <div className="form-input-row">
//         <label htmlFor="judul">Judul</label>
//         <input
//           id="judul"
//           type="text"
//           value={judul}
//           onChange={(e) => setJudul(e.target.value)}
//         />
//       </div>
//       <div className="form-input-row">
//         <label htmlFor="fileInput">Pilih Gambar</label>
//         <input id="fileInput" type="file" onChange={handleGambarChange} />
//       </div>
//       <div className="form-input-row">
//         <label htmlFor="isi">Isi</label>
//         <textarea
//           id="isi"
//           value={isi}
//           onChange={handleIsiChange}
//           style={{
//             minHeight: "20px",
//             maxHeight: "200px",
//             height: "auto",
//             resize: "vertical",
//           }}
//           rows={Math.min(20, isi.split("\n").length)}
//         />
//       </div>
//       <div className="button-tambah-berita">
//         {/* <Button className='ButtonTambahBerita' type='submit'>
//                 {editData ? 'Ubah Data' : 'Tambah Data'}
//                 </Button> */}
//       </div>
//     </form>
//   );
// }

// export default InputFormBerita;
