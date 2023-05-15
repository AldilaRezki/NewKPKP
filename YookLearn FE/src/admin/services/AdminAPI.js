const BASE_URL = "http://localhost:8000/api/admin";

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
