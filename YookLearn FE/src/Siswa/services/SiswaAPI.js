const BASE_URL = "http://localhost:8000/api/student";

export async function fetchCurrentMapel(idMapel) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/mapel/${idMapel}`, {
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

export async function fetchStudentAssignment() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/tugas`, {
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

export async function fetchSiswaProfile() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/profile`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return data.student;
  } catch (error) {
    console.error(error);
  }
}

export async function resetPassword(newPassword, oldPassword) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/editpassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        new_password: newPassword,
        old_password: oldPassword,
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

export async function fetchAllTugasMapel(idMapel) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/matpel/${idMapel}/tugas`, {
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

export async function fetchKelasMapel(idKelas) {
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

export async function fecthKelas() {
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

export async function fetchSiswa(idMapel) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/mapel/${idMapel}/siswa`, {
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

export async function fetchCurrentTugas(idTugas) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/tugas/${idTugas}`, {
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

export async function fetchCurentMapelMateri(idMapel) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/matpel/${idMapel}/materi`, {
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

export async function fetchCurrentMateri(idMateri) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/materi/${idMateri}`, {
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

export async function logOut() {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function uploadFile(file, idTugas) {
  try {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${BASE_URL}/tugas/${idTugas}/add`, {
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
