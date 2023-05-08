import { BrowserRouter, Routes } from 'react-router-dom';
import router from './routes.jsx';
import './index.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {router}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<LoginPage />} />
// //         <Route path="/student" element={<StudentPage />} />
// //         <Route path="student/datadiri" element={<DataDiri />} />
// //         <Route path="student/ubahpass" element={<UbahPass />} />
// //         <Route path="student/kelas" element={<Kelas />} />
// //         <Route path="student/kelas/mapel" element={<Mapel />} />
// //         <Route path="student/kelas/mapel/detail" element={<DetailKelas />} />

// //         {/* <Route path="Nurza" element={<Homepage />} /> */}
        

// //         {/* <Route path="/lecture" element={<LecturePage />} /> */}
// //         {/* <Route path="/admin" element={<AdminPage />} /> */}
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;