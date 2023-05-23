import { useEffect, useState } from "react";
import Header from "../../Header";
import HeaderGuru from "../../HeaderGuru";
import { fetchCurrentMapel } from "../../services/GuruAPI";
import HeaderKelas from "../HeaderKelas";
import BoxDeskripsi from "./BoxDeskripsi";
import { useNavigate, useParams } from "react-router-dom";
import { isAuthenticated } from "../../../Common/services/Auth";

function KelasJadwalAjar() {
  const navigate = useNavigate();
  const login = isAuthenticated("guru");
  const { idMapel } = useParams();
  const [dataMapel, setMapel] = useState([]);

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCurrentMapel(idMapel);
      setMapel(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header></Header>
      <HeaderGuru></HeaderGuru>
      <HeaderKelas idMapel={idMapel}></HeaderKelas>
      <BoxDeskripsi nama_matpel={dataMapel.nama_matpel}></BoxDeskripsi>
    </div>
  );
}

export default KelasJadwalAjar;
