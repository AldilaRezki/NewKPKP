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
  nip = "",
  namaLengkap = "",
  jenisKelamin = "",
  golongan = "",
  pangkat = "",
  matpel = ""
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
        nip: nip,
        nama_lengkap: namaLengkap,
        jenis_kelamin: jenisKelamin,
        golongan: golongan,
        pangkat: pangkat,
        matpel: matpel,
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
  nip = "",
  namaLengkap = "",
  jenisKelamin = "",
  golongan = "",
  pangkat = "",
  matpel = ""
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
        nip: nip,
        nama_lengkap: namaLengkap,
        jenis_kelamin: jenisKelamin,
        golongan: golongan,
        pangkat: pangkat,
        matpel: matpel,
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