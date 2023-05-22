const BASE_URL = "http://localhost:8000/api/lecture";

export async function fetchProfile() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/profile`, {
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

export async function resetPassword(newPassword, oldPassword) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/profile/editpassword`, {
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

export async function fetchMapel() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BASE_URL}/matpel`, {
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
    const response = await fetch(
      `http://localhost:8000/api/student/mapel/${idMapel}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchAllMateri(idMapel) {
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

export async function fetchCurrentMateri(idMapel, idMateri) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${BASE_URL}/matpel/${idMapel}/materi/${idMateri}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchTugas(idMapel) {
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

export async function fetchCurrentTugas(idMapel, idTugas) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${BASE_URL}/matpel/${idMapel}/tugas/${idTugas}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchStudentSubmit(idMapel, idTugas) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${BASE_URL}/matpel/${idMapel}/tugas/${idTugas}/kumpul`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchStudent(idMapel) {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${BASE_URL}/anggota/${idMapel}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}
