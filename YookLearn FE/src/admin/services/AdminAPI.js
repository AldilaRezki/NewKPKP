// const BASE_URL = "http://localhost:8000/api/admin";
const BASE_URL = import.meta.env.VITE_ADMIN_API;

export async function fetchAll(role) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/${role}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchAllKelas() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/kelas`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function addGuru(
  nip,
  nama,
  golongan,
  pangkat,
  mapel,
  username,
  password
) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/guru/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username: username,
        password: password,
        nama_lengkap: nama,
        nip: nip,
        golongan: golongan,
        pangkat: pangkat,
        matpel: mapel,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function editGuru(nip, nama, golongan, pangkat, mapel, idGuru) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/guru/edit/${idGuru}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        nama_lengkap: nama,
        nip: nip,
        golongan: golongan,
        pangkat: pangkat,
        matpel: mapel,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function addSiswa(
  nama,
  username,
  nisn,
  jenisKelamin,
  agama,
  password,
  kelas
) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/siswa/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username: username,
        password: password,
        nisn: nisn,
        nama_lengkap: nama,
        jenis_kelamin: jenisKelamin,
        agama: agama,
        id_kelas: kelas,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function editSiswa(
  nama,
  nisn,
  jenisKelamin,
  agama,
  kelas,
  idSiswa
) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/siswa/edit/${idSiswa}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        nama_lengkap: nama,
        nisn: nisn,
        jenis_kelamin: jenisKelamin,
        agama: agama,
        id_kelas: kelas,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function addKelas(namaPaket, idGuru) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/kelas/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        nama_kelas: namaPaket,
        id_guru: idGuru,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function editKelas(namaPaket, idGuru, idKelas) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/kelas/edit/${idKelas}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        nama_kelas: namaPaket,
        id_guru: idGuru,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function addMapel(namaPaket, idGuru, idKelas) {
  try {
    console.log(namaPaket, idGuru, idKelas);
    const token = localStorage.getItem("token");
    // const jadwal = "Hari, jam.meni : jam.menit"
    const response = await fetch(`${BASE_URL}/matpel/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        nama_matpel: namaPaket,
        id_guru: idGuru,
        // jadwal : jadwal,
        id_kelas: idKelas,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error(data.message);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function editMapel(namaPaket, idGuru, idMapel, idKelas) {
  try {
    console.log(namaPaket, idGuru, idKelas);
    const token = localStorage.getItem("token");
    // const jadwal = "Hari, jam.meni : jam.menit"
    const response = await fetch(`${BASE_URL}/matpel/edit/${idMapel}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        nama_matpel: namaPaket,
        id_guru: idGuru,
        // jadwal : jadwal,
        id_kelas: idKelas,
      }),
    });

    const data = await response.json();
    // console.log(data);

    if (!response.ok) {
      throw new Error(data.message);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function removeMapel(id) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/matpel/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return true;
  } catch (error) {
    console.error(error);
  }
}

export async function removeClass(id) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/kelas/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return true;
  } catch (error) {
    console.error(error);
  }
}

export async function addAkun(username, password, status, nama_user) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/account/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username: username,
        password: password,
        role: status,
        nama_user: nama_user,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function editAkun(username, password, status, idAkun) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/account/edit/${idAkun}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username: username,
        password: password,
        role: status,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function fetchSiswaByKelas(idKelas) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/kelas/${idKelas}/siswa`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchCurrentSiswa(idSiswa) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/siswa/${idSiswa}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function removeAccount(id) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/account/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return true;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchCurrentGuru(idGuru) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/guru/${idGuru}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchCurrentAkun(idAkun) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/account/${idAkun}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchCurrentPaket(idKelas) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/kelas/${idKelas}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchCurrentMapel(idMapel) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/matpel/${idMapel}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMapelByKelas(idKelas) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/kelas/${idKelas}/mapel`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function importSiswa(file, idKelas) {
  try {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("excel_file", file);

    const response = await fetch(`${BASE_URL}/import/siswa/kelas/${idKelas}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function importGuru(file) {
  try {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("excel_file", file);

    const response = await fetch(`${BASE_URL}/import/guru`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function importAkun(file) {
  try {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("excel_file", file);

    const response = await fetch(`${BASE_URL}/import/akun`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
