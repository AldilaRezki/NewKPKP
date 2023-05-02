import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./Common/pages/LoginPage";
import StudentPage from "./Siswa/pages/StudentPage";
import DataDiri from "./Siswa/pages/DataDiri";
import UbahPass from "./Siswa/pages/UbahPass";
import Kelas from "./Siswa/pages/Kelas";
import Mapel from "./Siswa/pages/Mapel";
import DetailKelas from './Siswa/pages/DetailKelas';
import Homepage from "./Siswa/Non Edit/homepage";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     {/* <Route path="/" element={<LoginPage />} />
    //     <Route path="/student" element={<StudentPage />} />
    //     <Route path="student/datadiri" element={<DataDiri />} />
    //     <Route path="student/ubahpass" element={<UbahPass />} />
    //     <Route path="student/kelas" element={<Kelas />} />
    //     <Route path="student/kelas/mapel" element={<Mapel />} />
    //     <Route path="student/kelas/mapel/detail" element={<DetailKelas />} /> */}

    //     {/* <Route path="Nurza" element={<Homepage />} /> */}
        

    //     {/* <Route path="/lecture" element={<LecturePage />} /> */}
    //     {/* <Route path="/admin" element={<AdminPage />} /> */}
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;